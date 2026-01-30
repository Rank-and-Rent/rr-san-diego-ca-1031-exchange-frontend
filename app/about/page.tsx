import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForm } from "@/components/contact-form";
import BottomCTA from "@/components/BottomCTA";
import { servicesData } from "@/data";
import { SITE_URL, PRIMARY_CITY, PRIMARY_STATE_ABBR } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About | 1031 Exchange of San Diego",
  description:
    "Learn how we help buyers identify 1031 exchange replacement properties with secure intake, curated deal flow, and coordination with Qualified Intermediaries.",
  alternates: {
    canonical: "/about",
  },
};

const breadcrumbs = [
  { label: "Home", href: `${SITE_URL}/` },
  { label: "About", href: `${SITE_URL}/about` },
];

const pillars = [
  {
    title: "Secure intake",
    copy:
      "You receive a private intake workspace for documents, phone notes, and lender deliverables. Access is limited to the partners you approve.",
  },
  {
    title: "Property matching workflow",
    copy:
      "We map equity, debt, yield, and tenant goals, then release curated single tenant, DST, or structured options tied to your 45 day schedule.",
  },
  {
    title: "Coordinated advisory stack",
    copy:
      "We interface with your Qualified Intermediary, attorney, tax advisors, and lenders so everyone shares the same tracker and timeline.",
  },
];

export default function AboutPage() {
  const projectTypeOptions = servicesData.map((service) => service.name);

  return (
    <div className="bg-paper text-ink">
      <section className="border-b border-outline/30 bg-panel/20 py-12">
        <div className="container space-y-4">
          <Breadcrumbs items={breadcrumbs} />
          <p className="text-xs uppercase tracking-[0.35em] text-primary">
            About us
          </p>
          <h1 className="text-4xl font-semibold text-heading">
            Built for motivated 1031 exchange buyers.
          </h1>
          <p className="max-w-3xl text-base text-ink/80">
            We focus exclusively on property identification, diligence support,
            and advisory coordination. We are not a Qualified Intermediary, law
            firm, or broker dealer. Instead, we keep your San Diego, CA exchange
            moving by sourcing replacement assets across all 50 states and
            synchronizing every milestone with your existing advisors.
          </p>
        </div>
      </section>

      <section className="container space-y-8 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-2xl border border-outline/40 bg-panel/50 p-6"
            >
              <p className="text-sm font-semibold text-heading">
                {pillar.title}
              </p>
              <p className="mt-2 text-sm text-ink/70">{pillar.copy}</p>
            </article>
          ))}
        </div>

        <div className="rounded-3xl border border-outline/40 bg-panel/40 p-6">
          <h2 className="text-2xl font-semibold text-heading">
            Our process in four stages
          </h2>
          <ol className="mt-4 space-y-4 text-sm text-ink/80">
            <li>
              <span className="font-semibold text-heading">
                1. Intake security.
              </span>{" "}
              We open a secure workspace, collect sale documents, and
              confirm deadlines for your {PRIMARY_CITY}, {PRIMARY_STATE_ABBR}{" "}
              exchange.
            </li>
            <li>
              <span className="font-semibold text-heading">
                2. Inventory drops.
              </span>{" "}
              You receive daily property briefs with rent rolls, lease
              highlights, and credit notes matched to your criteria.
            </li>
            <li>
              <span className="font-semibold text-heading">
                3. Diligence orchestration.
              </span>{" "}
              We schedule tours, inspections, lender checks, and legal
              reviews so every document lands in one place.
            </li>
            <li>
              <span className="font-semibold text-heading">
                4. Completion readiness.
              </span>{" "}
              We keep the tracker updated through closing and archive the
              file for your Qualified Intermediary and tax advisors.
            </li>
          </ol>
        </div>

        <ContactForm
          subheading="Share your timeline, target tenants, and any advisor introductions you need. We will respond with a secure intake link."
        />
      </section>
      <BottomCTA />
    </div>
  );
}

