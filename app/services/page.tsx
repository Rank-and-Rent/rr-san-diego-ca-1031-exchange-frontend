import Link from "next/link";
import { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ServiceSearchGrid } from "@/components/search/service-search-grid";
import BottomCTA from "@/components/BottomCTA";
import { DeadlineCalculator } from "@/components/widgets/deadline-calculator";
import { IdentificationRules } from "@/components/widgets/identification-rules";
import { servicesData } from "@/data";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services | 1031 Exchange Property Identification",
  description:
    "Explore replacement property identification, underwriting, financing coordination, and compliance support for 1031 exchange buyers.",
  alternates: {
    canonical: "/services",
  },
};

const breadcrumbs = [
  { label: "Home", href: `${SITE_URL}/` },
  { label: "Services", href: `${SITE_URL}/services` },
];

export default function ServicesPage() {
  return (
    <div className="bg-paper text-ink">
      <section className="border-b border-outline/30 bg-panel/30 py-12">
        <div className="container space-y-4">
          <Breadcrumbs items={breadcrumbs} />
          <p className="text-xs uppercase tracking-[0.35em] text-primary">
            Services
          </p>
          <h1 className="text-4xl font-semibold text-heading">
            Replacement property identification and execution support.
          </h1>
          <p className="max-w-3xl text-base text-ink/80">
            Every service is built for San Diego, CA exchange buyers who need
            speed, clarity, and nationwide reach. We focus on property matching
            first and add underwriting, planning, and documentation support so
            the 45 and 180 day milestones stay on schedule.
          </p>
          <div className="flex flex-wrap items-center gap-3 text-sm text-ink/70">
            <span>Single tenant retail</span>
            <span>Industrial and flex</span>
            <span>Medical office</span>
            <span>Self storage</span>
            <span>DST coordination</span>
          </div>
        </div>
      </section>

      <section className="container space-y-10 py-12">
        <ServiceSearchGrid services={servicesData} />

        <div className="grid gap-6 lg:grid-cols-2">
          <DeadlineCalculator />
          <IdentificationRules />
        </div>

        <div className="rounded-3xl border border-outline/40 bg-panel/40 p-6 text-sm text-ink/80">
          <p>
            Need a service you do not see here?{" "}
            <Link
              href="/contact?projectType=Other"
              className="text-primary hover:underline"
            >
              Contact intake
            </Link>{" "}
            and we will build a custom plan for your San Diego, CA exchange.
          </p>
        </div>
      </section>
      <BottomCTA />
    </div>
  );
}

