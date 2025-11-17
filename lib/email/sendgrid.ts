import sgMail from "@sendgrid/mail";
import type { getBrand } from "@/lib/brand";

let apiKeyInitialized = false;

function ensureApiKeyInitialized() {
  if (apiKeyInitialized) {
    return;
  }

  if (!process.env.SENDGRID_API_KEY) {
    throw new Error("Missing SENDGRID_API_KEY");
  }

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  apiKeyInitialized = true;
}

export const SENDGRID_TEMPLATE_ID =
  process.env.SENDGRID_TEMPLATE_ID || "d-15217ab1c55347b5847c2421b1a82847";

type Lead = {
  name: string;
  email: string;
  phone?: string;
  phone_plain?: string;
  projectType: string;
  projectDescription?: string;
  timeline?: string;
  address?: string;
  city?: string;
};

type BrandData = ReturnType<typeof getBrand>;

export async function sendCustomerConfirmation(
  brand: BrandData,
  lead: Lead,
) {
  ensureApiKeyInitialized();
  const fromEmail = brand.supportEmail || "intake@1031exchangeofsandiego.com";
  await sgMail.send({
    to: lead.email,
    from: { email: fromEmail, name: brand.company_name },
    templateId: SENDGRID_TEMPLATE_ID,
    dynamicTemplateData: { ...brand, lead },
  });
}

export async function sendInternalNotifications(
  brand: BrandData,
  lead: Lead,
) {
  ensureApiKeyInitialized();
  const fromEmail = brand.supportEmail || "intake@1031exchangeofsandiego.com";
  const recipients = [
    process.env.CONTRACTOR_EMAIL,
    "rankhoundseo@gmail.com",
  ].filter(Boolean) as string[];

  if (recipients.length === 0) {
    return;
  }

  await Promise.all(
    recipients.map((email) =>
      sgMail.send({
        to: email,
        from: { email: fromEmail, name: brand.company_name },
        templateId: SENDGRID_TEMPLATE_ID,
        dynamicTemplateData: { ...brand, lead },
      }),
    ),
  );
}

