'use client';

import { useState } from "react";
import site from "@/content/site.json";
import { TurnstileWidget } from "@/components/forms/turnstile-widget";

interface ContactFormProps {
  heading?: string;
  subheading?: string;
  id?: string;
}

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  propertyType: string;
  propertyValue: string;
  estimatedCloseDate: string;
  city: string;
  timeline: string;
  details: string;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export function ContactForm({
  heading = "Tell us about your exchange",
  subheading = "We protect your 45 day clock, verify listings, and coordinate the full advisory bench.",
  id = "contact-form",
}: ContactFormProps) {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    company: "",
    email: "",
    phone: "",
    propertyType: "",
    propertyValue: "",
    estimatedCloseDate: "",
    city: "",
    timeline: "",
    details: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [formError, setFormError] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [captchaMessage, setCaptchaMessage] = useState<string | null>(null);
  const [turnstileKey, setTurnstileKey] = useState(0);

  const handleChange = (field: keyof FormState, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (): FormErrors => {
    const fieldErrors: FormErrors = {};

    if (!formState.name.trim()) {
      fieldErrors.name = "Name is required";
    }
    if (!formState.email.trim()) {
      fieldErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email.trim())) {
      fieldErrors.email = "Enter a valid email";
    }
    if (!formState.phone.trim()) {
      fieldErrors.phone = "Phone is required";
    } else if (!/^\d{7,15}$/.test(formState.phone.trim())) {
      fieldErrors.phone = "Use digits only";
    }
    if (!formState.details.trim()) {
      fieldErrors.details = "Message is required";
    }

    return fieldErrors;
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setFormError(null);

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus("idle");
      return;
    }

    if (!turnstileToken) {
      setCaptchaMessage("Complete the security check before submitting.");
      setStatus("idle");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formState,
          projectType: formState.propertyType,
          property: `Type: ${formState.propertyType}, Value: ${formState.propertyValue}`,
          phone: formState.phone.replace(/\D/g, ""),
          "cf-turnstile-response": turnstileToken,
        }),
      });

      const payload = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(payload?.error ?? "Request failed");
      }

      setStatus("success");
      setCaptchaMessage(null);
      setTurnstileToken("");
      setTurnstileKey((prev) => prev + 1);
      setFormState({
        name: "",
        company: "",
        email: "",
        phone: "",
        propertyType: "",
        propertyValue: "",
        estimatedCloseDate: "",
        city: "",
        timeline: "",
        details: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Contact form submission failed", error);
      setStatus("error");
      setFormError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
      setTurnstileToken("");
      setTurnstileKey((prev) => prev + 1);
    }
  }

  const isSubmitDisabled =
    status === "loading" ||
    Boolean(siteKey) && !turnstileToken ||
    !siteKey;

  return (
    <section
      id={id}
      className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg"
    >
      <div className="mb-8 space-y-3">
        <p className="text-xs uppercase tracking-widest text-gray-400">
          Contact
        </p>
        <h2 className="text-3xl font-light text-[#0F2A3D]">{heading}</h2>
        <p className="text-sm text-gray-600">{subheading}</p>
        <div className="flex flex-wrap gap-3 text-sm">
          <a
            href={`tel:${site.phoneDigits}`}
            className="border border-[#0F2A3D] text-[#0F2A3D] px-5 py-2.5 rounded-lg font-medium hover:bg-[#0F2A3D] hover:text-white transition"
          >
            Call {site.phone}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="bg-[#0F2A3D] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-[#1a3d54] transition"
          >
            Email intake
          </a>
        </div>
      </div>
      <form className="space-y-5" onSubmit={handleSubmit} noValidate>
        <div className="grid gap-4 md:grid-cols-2">
          <Field
            label="Full Name *"
            name="name"
            type="text"
            autoComplete="name"
            value={formState.name}
            onChange={(value) => handleChange("name", value)}
            error={errors.name}
          />
          <Field
            label="Company"
            name="company"
            type="text"
            autoComplete="organization"
            value={formState.company}
            onChange={(value) => handleChange("company", value)}
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Field
            label="Email *"
            name="email"
            type="email"
            autoComplete="email"
            value={formState.email}
            onChange={(value) => handleChange("email", value)}
            error={errors.email}
          />
          <Field
            label="Phone *"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={formState.phone}
            onChange={(value) =>
              handleChange("phone", value.replace(/\D/g, ""))
            }
            error={errors.phone}
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={15}
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Field
            label="What type of property are you selling?"
            name="propertyType"
            type="text"
            placeholder="e.g., Retail, Office, Multi-family, Industrial"
            value={formState.propertyType}
            onChange={(value) => handleChange("propertyType", value)}
          />
          <Field
            label="Estimated property value"
            name="propertyValue"
            type="text"
            placeholder="e.g., $500,000 - $1,000,000"
            value={formState.propertyValue}
            onChange={(value) => handleChange("propertyValue", value)}
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Field
            label="Estimated Close Date"
            name="estimatedCloseDate"
            type="date"
            value={formState.estimatedCloseDate}
            onChange={(value) => handleChange("estimatedCloseDate", value)}
          />
          <Field
            label="Target Location"
            name="city"
            type="text"
            placeholder="City, state, or region for replacement property"
            value={formState.city}
            onChange={(value) => handleChange("city", value)}
          />
        </div>
        <Field
          label="Timeline"
          name="timeline"
          type="text"
          placeholder="Example: Need to identify properties within 30 days"
          value={formState.timeline}
          onChange={(value) => handleChange("timeline", value)}
        />
        <div>
          <label
            htmlFor={`${id}-details`}
            className="text-sm font-medium text-[#0F2A3D]"
          >
            Message *
          </label>
          <textarea
            id={`${id}-details`}
            name="details"
            rows={5}
            className="mt-1 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-[#0F2A3D] placeholder:text-gray-400 focus:border-[#0F2A3D] focus:outline-none"
            placeholder="Tell us about your goals, replacement property preferences, or any questions you have about the 1031 exchange process"
            value={formState.details}
            onChange={(event) => handleChange("details", event.target.value)}
            required
          />
          {errors.details ? (
            <p className="mt-1 text-xs text-red-500">{errors.details}</p>
          ) : null}
        </div>

        <div>
          <p className="text-sm font-medium text-[#0F2A3D]">
            Security Check *
          </p>
          {siteKey ? (
            <TurnstileWidget
              key={turnstileKey}
              siteKey={siteKey}
              onVerify={(token) => {
                setTurnstileToken(token);
                setCaptchaMessage(null);
              }}
              onExpire={() => {
                setTurnstileToken("");
                setCaptchaMessage("Security check expired. Please verify again.");
              }}
              onError={() => {
                setTurnstileToken("");
                setCaptchaMessage(
                  "We could not load the security check. Refresh and try again.",
                );
              }}
            />
          ) : (
            <p className="mt-2 text-sm text-red-500">
              Add NEXT_PUBLIC_TURNSTILE_SITE_KEY to enable submissions.
            </p>
          )}
          {captchaMessage ? (
            <p className="mt-2 text-xs text-red-500">{captchaMessage}</p>
          ) : null}
        </div>

        {formError ? (
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-600">
            {formError}
          </div>
        ) : null}

        <div
          className="flex flex-wrap items-center gap-3"
          aria-live="polite"
          aria-busy={status === "loading"}
        >
          <button
            type="submit"
            className="bg-[#0F2A3D] text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-[#1a3d54] transition disabled:opacity-60"
            disabled={isSubmitDisabled}
          >
            {status === "loading" ? "Sending..." : "Submit request"}
          </button>
          {status === "success" ? (
            <p className="text-sm text-green-600">
              Received. We will respond shortly.
            </p>
          ) : null}
        </div>
      </form>
    </section>
  );
}

interface FieldProps {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  autoComplete?: string;
  placeholder?: string;
  error?: string;
  inputMode?: "text" | "numeric" | "email" | "tel";
  pattern?: string;
  maxLength?: number;
}

function Field({
  label,
  name,
  type,
  value,
  onChange,
  autoComplete,
  placeholder,
  error,
  inputMode,
  pattern,
  maxLength,
}: FieldProps) {
  const isRequired = label.includes("*");
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-[#0F2A3D]">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        required={isRequired}
        className="mt-1 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-[#0F2A3D] placeholder:text-gray-400 focus:border-[#0F2A3D] focus:outline-none"
        inputMode={inputMode}
        pattern={pattern}
        maxLength={maxLength}
      />
      {error ? (
        <p className="mt-1 text-xs text-red-500">{error}</p>
      ) : null}
    </div>
  );
}
