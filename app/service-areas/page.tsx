import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { LocationSearchGrid } from "@/components/search/location-search-grid";
import BottomCTA from "@/components/BottomCTA";
import { locationsData } from "@/data";
import { SITE_URL, PRIMARY_CITY, PRIMARY_STATE_ABBR } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Service Areas | San Diego 1031 Exchange Coverage",
  description:
    "Explore the San Diego, CA neighborhoods and suburbs we monitor for 1031 exchange replacement properties.",
  alternates: {
    canonical: "/service-areas",
  },
};

const breadcrumbs = [
  { label: "Home", href: `${SITE_URL}/` },
  { label: "Service Areas", href: `${SITE_URL}/service-areas` },
];

export default function ServiceAreasPage() {
  return (
    <div className="bg-paper text-ink">
      <section className="border-b border-outline/30 bg-panel/20 py-12">
        <div className="container space-y-4">
          <Breadcrumbs items={breadcrumbs} />
          <p className="text-xs uppercase tracking-[0.35em] text-primary">
            Service areas
          </p>
          <h1 className="text-4xl font-semibold text-heading">
            {PRIMARY_CITY}, {PRIMARY_STATE_ABBR} neighborhoods, suburbs, and
            investor desks.
          </h1>
          <p className="max-w-3xl text-base text-ink/80">
            We keep watchlists for coastal trophy corners, inland logistics
            corridors, and remote investors who still want San Diego County
            exposure. Each card links to FAQs, service suggestions, and quick
            access to our intake form.
          </p>
        </div>
      </section>

      <section className="container space-y-8 py-12">
        <LocationSearchGrid locations={locationsData} />
      </section>
      <BottomCTA />
    </div>
  );
}

