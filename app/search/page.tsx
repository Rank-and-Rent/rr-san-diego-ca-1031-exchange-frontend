import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SiteSearch } from "@/components/search/site-search";
import BottomCTA from "@/components/BottomCTA";
import { servicesData, locationsData } from "@/data";
import { blogPosts } from "@/data/blog-posts";
import { SITE_URL } from "@/lib/constants";

interface SearchPageProps {
  searchParams: { q?: string };
}

export const metadata: Metadata = {
  title: "Search | 1031 Exchange of San Diego",
  description:
    "Search services, service areas, and resources related to 1031 exchange replacement properties.",
  alternates: {
    canonical: "/search",
  },
};

const breadcrumbs = [
  { label: "Home", href: `${SITE_URL}/` },
  { label: "Search", href: `${SITE_URL}/search` },
];

export default function SearchPage({ searchParams }: SearchPageProps) {
  const initial = searchParams.q ? decodeURIComponent(searchParams.q) : "";
  return (
    <div className="bg-paper text-ink">
      <section className="container space-y-4 py-12">
        <Breadcrumbs items={breadcrumbs} />
        <p className="text-xs uppercase tracking-[0.35em] text-primary">
          Search
        </p>
        <h1 className="text-4xl font-semibold text-heading">
          Find what you need across the site.
        </h1>
        <SiteSearch
          services={servicesData}
          locations={locationsData}
          posts={blogPosts}
          initialQuery={initial}
        />
      </section>
      <BottomCTA />
    </div>
  );
}

