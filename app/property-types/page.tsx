import type { Metadata } from "next";
import Link from "next/link";
import { PropertyTypeGrid } from "@/components/search/property-type-grid";
import { propertyTypesData } from "@/data";

export const metadata: Metadata = {
  title: "Property Types | NNN and STNL Focus",
  description:
    "Browse the single tenant net lease property types we monitor for 1031 exchange buyers.",
  alternates: {
    canonical: "/property-types",
  },
};

export default function PropertyTypesPage() {
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
              <li className="text-white">Property Types</li>
            </ol>
          </nav>
          <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-4">Property Types</p>
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
            Single Tenant Property Types for 1031 Exchange
          </h1>
          <p className="max-w-3xl text-lg text-white/80 leading-relaxed">
            Search by tenant profile, sector, or net lease structure. Each property type
            links to detailed briefs, current inventory, and contact paths so
            you can move from interest to identification fast.
          </p>
        </div>
      </section>

      {/* Property Types Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-light text-[#0F2A3D]">Explore Property Types</h2>
            <p className="mt-4 text-[#0F2A3D]/60 max-w-2xl mx-auto">
              Browse our curated selection of investment property categories for your 1031 exchange
            </p>
          </div>
          <PropertyTypeGrid propertyTypes={propertyTypesData} />
        </div>
      </section>

      {/* CTA Section - Nude/Tan Color */}
      <section className="bg-[#E8DED1] py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-[#0F2A3D] mb-6">
            Looking for a Specific Property Type?
          </h2>
          <p className="text-lg text-[#0F2A3D]/70 mb-8">
            We monitor hundreds of property types across all 50 states.
            Contact us to discuss your specific investment criteria.
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
