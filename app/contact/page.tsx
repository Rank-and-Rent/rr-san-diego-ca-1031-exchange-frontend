import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForm } from "@/components/contact-form";
import BottomCTA from "@/components/BottomCTA";
import { IdentificationLetterHelper } from "@/components/widgets/identification-letter-helper";
import { TimelineTracker } from "@/components/widgets/timeline-tracker";
import { servicesData } from "@/data";
import {
  SITE_URL,
  PRIMARY_CITY,
  PRIMARY_STATE_ABBR,
} from "@/lib/constants";
import site from "@/content/site.json";

interface ContactPageProps {
  searchParams: { projectType?: string };
}

export const metadata: Metadata = {
  title: "Contact | 1031 Exchange Intake",
  description:
    "Connect with the 1031 Exchange of San Diego intake desk for secure property matching support.",
  alternates: {
    canonical: "/contact",
  },
};

const breadcrumbs = [
  { label: "Home", href: `${SITE_URL}/` },
  { label: "Contact", href: `${SITE_URL}/contact` },
];

export default function ContactPage({
  searchParams,
}: ContactPageProps) {
  const initialProjectType = searchParams.projectType
    ? decodeURIComponent(searchParams.projectType)
    : undefined;
  const projectTypeOptions = servicesData.map((service) => service.name);

  return (
    <div className="bg-paper text-ink">
      <section className="border-b border-outline/30 bg-panel/20 py-12">
        <div className="container space-y-4">
          <Breadcrumbs items={breadcrumbs} />
          <p className="text-xs uppercase tracking-[0.35em] text-primary">
            Contact
          </p>
          <h1 className="text-4xl font-semibold text-heading">
            Secure intake for your 1031 exchange.
          </h1>
          <p className="max-w-3xl text-base text-ink/80">
            Tell us about your timeline, relinquished sale, financing needs, and
            replacement goals. We focus on property identification and advisory
            coordination. We are not a Qualified Intermediary, but we coordinate
            with your QI, tax advisors, and lenders so everyone stays aligned.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-ink/70">
            <div>
              Phone:{" "}
              <a
                href={`tel:${site.phoneDigits}`}
                className="text-primary hover:underline"
              >
                {site.phone}
              </a>
            </div>
            <div>
              Email:{" "}
              <a
                href={`mailto:${site.email}`}
                className="text-primary hover:underline"
              >
                {site.email}
              </a>
            </div>
            <div>
              Address: {site.address}, {PRIMARY_CITY}, {PRIMARY_STATE_ABBR}
            </div>
          </div>
        </div>
      </section>

      <section className="container grid gap-8 py-12 lg:grid-cols-[1.2fr,0.8fr]">
        <ContactForm
          id="contact-form"
          projectTypeOptions={projectTypeOptions}
          initialProjectType={initialProjectType}
          subheading="Share your details below. We coordinate secure intake, property matching, and communication with Qualified Intermediaries, tax advisors, and lenders."
        />
        <div className="rounded-3xl border border-outline/40 bg-panel/50 p-6">
          <h2 className="text-2xl font-semibold text-heading">
            Map and hours
          </h2>
          <p className="mt-2 text-sm text-ink/70">
            Headquarters in {PRIMARY_CITY}, {PRIMARY_STATE_ABBR}. Meetings by
            appointment only. Business hours: Mon-Fri 9am-5pm PST. Emergency support available for exchange deadlines.
          </p>
          <iframe
            title={`${PRIMARY_CITY} office map`}
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              `${site.address} ${PRIMARY_CITY} ${PRIMARY_STATE_ABBR}`,
            )}&output=embed`}
            className="mt-4 h-64 w-full rounded-2xl border-0"
            loading="lazy"
          />
        </div>
      </section>

      <section className="container space-y-6 pb-12">
        <div className="grid gap-6 md:grid-cols-2">
          <IdentificationLetterHelper />
          <TimelineTracker />
        </div>
      </section>
      <BottomCTA />
    </div>
  );
}

