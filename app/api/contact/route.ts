import { NextRequest, NextResponse } from "next/server";
import { apiRateLimiter } from "@/lib/rate-limit";
import { verifyTurnstile } from "@/lib/turnstile";
import { getBrand } from "@/lib/brand";
import {
  sendCustomerConfirmation,
  sendInternalNotifications,
} from "@/lib/email/sendgrid";
import {
  PRIMARY_CITY,
  PRIMARY_STATE_ABBR,
  SITE_URL,
} from "@/lib/constants";

export const runtime = "nodejs";

const SITE_IDENTIFIER = "rr-san-diego-ca-1031-exchange";

export async function POST(request: NextRequest) {
  const rate = apiRateLimiter.isAllowed(request);
  const stdHeaders = {
    "X-RateLimit-Limit": "5",
    "X-RateLimit-Remaining": String(Math.max(rate.remaining, 0)),
    "X-RateLimit-Reset": String(rate.resetTime),
  };

  if (!rate.allowed) {
    const retryAfter = Math.ceil((rate.resetTime - Date.now()) / 1000);
    return NextResponse.json(
      { error: "Rate limit exceeded. Please try again shortly." },
      {
        status: 429,
        headers: { ...stdHeaders, "Retry-After": String(retryAfter) },
      },
    );
  }

  try {
    const contentType = request.headers.get("content-type") || "";
    const body = contentType.includes("application/json")
      ? await request.json()
      : Object.fromEntries((await request.formData()).entries());

    const zapierWebhookUrl = (process.env.ZAPIER_WEBHOOK || "").trim();
    if (!zapierWebhookUrl) {
      console.error("ZAPIER_WEBHOOK env variable is not configured");
      return NextResponse.json(
        { error: "Webhook configuration error" },
        { status: 500, headers: stdHeaders },
      );
    }

    const token = body["cf-turnstile-response"];
    if (!token) {
      return NextResponse.json(
        { error: "Captcha token missing" },
        { status: 400, headers: stdHeaders },
      );
    }

    const clientIp =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      undefined;
    const captchaValid = await verifyTurnstile(token, clientIp || undefined);
    if (!captchaValid) {
      return NextResponse.json(
        { error: "Captcha verification failed" },
        { status: 400, headers: stdHeaders },
      );
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || SITE_URL;
    const source =
      process.env.NEXT_PUBLIC_SOURCE || "1031 Exchange of San Diego Website";
    const sanitizedPhone = body.phone
      ? String(body.phone).replace(/\D/g, "")
      : undefined;

    const payload = {
      ...body,
      phone: sanitizedPhone,
      projectType: body.projectType || "1031 Exchange",
      contractorEmail: process.env.CONTRACTOR_EMAIL || "",
      timestamp: new Date().toISOString(),
      source,
      submitted_at: new Date().toISOString(),
      website_url: siteUrl,
      _meta: {
        site: SITE_IDENTIFIER,
        route: "/api/contact",
      },
    };

    const zapierUrl = zapierWebhookUrl.endsWith("/")
      ? zapierWebhookUrl
      : `${zapierWebhookUrl}/`;

    let zapierResponse: Response | undefined;
    for (let attempt = 1; attempt <= 3; attempt += 1) {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 20_000);
      try {
        zapierResponse = await fetch(zapierUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          signal: controller.signal,
        });
      } catch (error) {
        console.error("Zapier fetch error", { attempt, error });
      } finally {
        clearTimeout(timeout);
      }

      if (zapierResponse?.ok) {
        break;
      }

      await new Promise((resolve) => setTimeout(resolve, attempt * 250));
    }

    if (!zapierResponse?.ok) {
      console.error("Zapier webhook failed after retries", {
        status: zapierResponse?.status,
        body: zapierResponse
          ? await zapierResponse.text().catch(() => "")
          : "",
      });
    }

    const brand = getBrand();
    const lead = {
      name: String(body.name || ""),
      email: String(body.email || ""),
      phone: sanitizedPhone,
      phone_plain: sanitizedPhone,
      projectType: String(body.projectType || "1031 Exchange Advisory"),
      property: body.property ? String(body.property) : undefined,
      estimatedCloseDate: body.estimatedCloseDate ? String(body.estimatedCloseDate) : undefined,
      city: body.city ? String(body.city) : undefined,
      company: body.company ? String(body.company) : undefined,
      timeline: body.timeline ? String(body.timeline) : undefined,
      message: body.message ? String(body.message) : (body.details ? String(body.details) : undefined),
    };

    try {
      await Promise.all([
        sendCustomerConfirmation(brand, lead),
        sendInternalNotifications(brand, lead),
      ]);
    } catch (emailError) {
      console.error("SendGrid email error", emailError);
    }

    return NextResponse.json({ success: true }, { headers: stdHeaders });
  } catch (error) {
    console.error("Error processing contact form submission", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500, headers: stdHeaders },
    );
  }
}

