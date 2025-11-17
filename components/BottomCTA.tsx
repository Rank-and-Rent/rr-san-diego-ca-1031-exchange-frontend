import Link from "next/link";
import site from "@/content/site.json";

interface BottomCTAProps {
  projectType?: string;
  heading?: string;
  subheading?: string;
}

export default function BottomCTA({
  projectType,
  heading = "Ready to stay ahead of the 45-day clock?",
  subheading = "Connect with our intake desk for curated replacement property drops, QI coordination, and lender-ready packages.",
}: BottomCTAProps) {
  const contactHref = projectType
    ? `/contact?projectType=${encodeURIComponent(projectType)}`
    : "/contact#contact-form";

  return (
    <section className="border-t border-outline bg-panel">
      <div className="container flex flex-col items-start gap-4 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-primary">
            Next steps
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-heading">
            {heading}
          </h2>
          <p className="mt-2 text-sm text-ink/70">{subheading}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={`tel:${site.phoneDigits}`}
            className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primaryfg transition hover:opacity-90"
          >
            Call {site.phone}
          </a>
          <Link
            href={contactHref}
            className="rounded-full border border-outline px-5 py-3 text-sm font-semibold text-heading transition hover:border-primary hover:text-primary"
          >
            Talk to intake
          </Link>
        </div>
      </div>
    </section>
  );
}