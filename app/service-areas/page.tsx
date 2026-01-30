import type { Metadata } from "next";
import Link from "next/link";
import { LocationSearchGrid } from "@/components/search/location-search-grid";
import { locationsData } from "@/data";
import { PRIMARY_CITY, PRIMARY_STATE_ABBR } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Service Areas | San Diego 1031 Exchange Coverage",
  description:
    "Explore the San Diego, CA neighborhoods and suburbs we monitor for 1031 exchange replacement properties.",
  alternates: {
    canonical: "/service-areas",
  },
};

export default function ServiceAreasPage() {
  return (
    <div className="bg-white text-[#0F2A3D]">
      {/* Hero Section */}
      <section className="bg-[#0F2A3D] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Breadcrumbs */}
          <nav className="text-sm mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-white/60">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-white">Service Areas</li>
            </ol>
          </nav>
          <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-4">Service Areas</p>
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
            {PRIMARY_CITY}, {PRIMARY_STATE_ABBR} Neighborhoods and Suburbs
          </h1>
          <p className="max-w-3xl text-lg text-white/80 leading-relaxed">
            We keep watchlists for coastal trophy corners, inland logistics
            corridors, and remote investors who still want San Diego County
            exposure. Each community links to FAQs, service suggestions, and quick
            access to our intake form.
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-light text-[#0F2A3D]">Explore Communities</h2>
            <p className="mt-4 text-[#0F2A3D]/60 max-w-2xl mx-auto">
              Discover San Diego&apos;s best neighborhoods for your 1031 exchange investment
            </p>
          </div>
          <LocationSearchGrid locations={locationsData} />
        </div>
      </section>

      {/* CTA Section - Nude/Tan Color */}
      <section className="bg-[#E8DED1] py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-[#0F2A3D] mb-6">
            Looking for a Different Location?
          </h2>
          <p className="text-lg text-[#0F2A3D]/70 mb-8">
            We identify replacement properties across all 50 states.
            Contact us to discuss your target markets and investment criteria.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#0F2A3D] text-white px-10 py-4 rounded-lg text-sm font-medium hover:bg-[#1a3d54] transition"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
