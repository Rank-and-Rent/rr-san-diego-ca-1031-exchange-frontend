import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PropertyTypeGrid } from "@/components/search/property-type-grid";
import BottomCTA from "@/components/BottomCTA";
import { propertyTypesData } from "@/data";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Property Types | NNN and STNL Focus",
  description:
    "Browse the single tenant net lease property types we monitor for 1031 exchange buyers.",
  alternates: {
    canonical: "/property-types",
  },
};

const breadcrumbs = [
  { label: "Home", href: `${SITE_URL}/` },
  { label: "Property Types", href: `${SITE_URL}/property-types` },
];

export default function PropertyTypesPage() {
  return (
    <div className="bg-paper text-ink">
      <section className="border-b border-outline/30 bg-panel/20 py-12">
        <div className="container space-y-4">
          <Breadcrumbs items={breadcrumbs} />
          <p className="text-xs uppercase tracking-[0.35em] text-primary">
            Property focus
          </p>
          <h1 className="text-4xl font-semibold text-heading">
            Single tenant property types sized for 1031 exchange reinvestment.
          </h1>
          <p className="max-w-3xl text-base text-ink/80">
            Search by tenant profile, sector, or net lease structure. Each card
            links to detailed briefs, current inventory, and contact paths so
            you can move from interest to identification fast.
          </p>
        </div>
      </section>

      <section className="container space-y-8 py-12">
        <PropertyTypeGrid propertyTypes={propertyTypesData} />
      </section>
      <BottomCTA />
    </div>
  );
}

