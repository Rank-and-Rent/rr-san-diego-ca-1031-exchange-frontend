'use client';

import { useEffect, useMemo, useState } from "react";
import site from "@/content/site.json";
import { TurnstileWidget } from "@/components/forms/turnstile-widget";

interface ContactFormProps {
  heading?: string;
  subheading?: string;
  initialProjectType?: string;
  projectTypeOptions: string[];
  id?: string;
}

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  timeline: string;
  details: string;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export function ContactForm({
  heading = "Tell us about your exchange",
  subheading = "We protect your 45 day clock, verify listings, and coordinate the full advisory bench.",
  initialProjectType,
  projectTypeOptions,
  id = "contact-form",
}: ContactFormProps) {
  const alphabeticalOptions = useMemo(() => {
    const values = new Set(
      projectTypeOptions
        .map((option) => option.trim())
        .filter((option) => option.length > 0),
    );
    if (initialProjectType?.trim()) {
      values.add(initialProjectType.trim());
    }
    values.add("Other");
    return Array.from(values).sort((a, b) =>
      a.localeCompare(b, undefined, { sensitivity: "base" }),
    );
  }, [projectTypeOptions, initialProjectType]);

  const [formState, setFormState] = useState<FormState>({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: initialProjectType?.trim() || "",
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

  useEffect(() => {
    if (
      initialProjectType &&
      initialProjectType.trim() &&
      initialProjectType !== formState.projectType
    ) {
      setFormState((prev) => ({
        ...prev,
        projectType: initialProjectType.trim(),
      }));
    }
  }, [initialProjectType, formState.projectType]);

  useEffect(() => {
    if (
      formState.projectType &&
      !alphabeticalOptions.includes(formState.projectType)
    ) {
      setFormState((prev) => ({
        ...prev,
        projectType: alphabeticalOptions[0] || "",
      }));
    }
  }, [alphabeticalOptions, formState.projectType]);

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
    if (!formState.projectType.trim()) {
      fieldErrors.projectType = "Select a project type";
    }
    if (!formState.timeline.trim()) {
      fieldErrors.timeline = "Timeline is required";
    }
    if (!formState.details.trim()) {
      fieldErrors.details = "Share a few project details";
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
        projectType: initialProjectType?.trim() || "",
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
      className="rounded-3xl border border-outline/40 bg-panel/40 p-6 shadow-lg"
    >
      <div className="mb-8 space-y-3">
        <p className="text-xs uppercase tracking-[0.35em] text-primary">
          Contact
        </p>
        <h2 className="text-3xl font-semibold text-heading">{heading}</h2>
        <p className="text-sm text-ink/80">{subheading}</p>
        <div className="flex flex-wrap gap-3 text-sm">
          <a
            href={`tel:${site.phoneDigits}`}
            className="rounded-full border border-outline px-4 py-2 font-semibold text-heading transition hover:border-primary hover:text-primary"
          >
            Call {site.phone}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="rounded-full bg-primary px-4 py-2 font-semibold text-primaryfg transition hover:opacity-90"
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
        <div>
          <label
            htmlFor={`${id}-project-type`}
            className="text-sm font-semibold text-heading"
          >
            Project Type *
          </label>
          <select
            id={`${id}-project-type`}
            value={formState.projectType}
            onChange={(event) =>
              handleChange("projectType", event.target.value)
            }
            className="mt-1 w-full rounded-xl border border-outline/60 bg-panel/40 px-4 py-3 text-sm text-heading focus:border-primary focus:outline-none"
            required
          >
            <option value="">Select a project type</option>
            {alphabeticalOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.projectType ? (
            <p className="mt-1 text-xs text-red-400">{errors.projectType}</p>
          ) : null}
        </div>
        <Field
          label="Timeline *"
          name="timeline"
          type="text"
          placeholder="Example: List three assets within 10 days"
          value={formState.timeline}
          onChange={(value) => handleChange("timeline", value)}
          error={errors.timeline}
        />
        <div>
          <label
            htmlFor={`${id}-details`}
            className="text-sm font-semibold text-heading"
          >
            Project Details *
          </label>
          <textarea
            id={`${id}-details`}
            name="details"
            rows={5}
            className="mt-1 w-full rounded-xl border border-outline/60 bg-panel/40 px-4 py-3 text-sm text-heading placeholder:text-ink/50 focus:border-primary focus:outline-none"
            placeholder="Share relinquished sale info, debt needs, target tenants, or preferred locations."
            value={formState.details}
            onChange={(event) => handleChange("details", event.target.value)}
            required
          />
          {errors.details ? (
            <p className="mt-1 text-xs text-red-400">{errors.details}</p>
          ) : null}
        </div>

        <div>
          <p className="text-sm font-semibold text-heading">
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
            <p className="mt-2 text-sm text-red-400">
              Add NEXT_PUBLIC_TURNSTILE_SITE_KEY to enable submissions.
            </p>
          )}
          {captchaMessage ? (
            <p className="mt-2 text-xs text-red-400">{captchaMessage}</p>
          ) : null}
        </div>

        {formError ? (
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-4 text-sm text-red-300">
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
            className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primaryfg transition hover:opacity-90 disabled:opacity-60"
            disabled={isSubmitDisabled}
          >
            {status === "loading" ? "Sending..." : "Submit request"}
          </button>
          {status === "success" ? (
            <p className="text-sm text-primary">
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
      <label htmlFor={name} className="text-sm font-semibold text-heading">
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
        className="mt-1 w-full rounded-xl border border-outline/60 bg-panel/40 px-4 py-3 text-sm text-heading placeholder:text-ink/50 focus:border-primary focus:outline-none"
        inputMode={inputMode}
        pattern={pattern}
        maxLength={maxLength}
      />
      {error ? (
        <p className="mt-1 text-xs text-red-400">{error}</p>
      ) : null}
    </div>
  );
}
