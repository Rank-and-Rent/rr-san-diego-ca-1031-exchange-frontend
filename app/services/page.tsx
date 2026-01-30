import Link from "next/link";
import { Metadata } from "next";
import { servicesData } from "@/data";

export const metadata: Metadata = {
  title: "1031 Exchange Services San Diego | Property Identification & Advisory",
  description:
    "Expert 1031 exchange services in San Diego. Property identification, underwriting, financing coordination, and compliance support for tax-deferred exchanges.",
  alternates: {
    canonical: "/services",
  },
};

// Sort services alphabetically by name
const sortedServices = [...servicesData].sort((a, b) =>
  a.name.localeCompare(b.name)
);

export default function ServicesPage() {
  return (
    <div className="bg-white text-[#0F2A3D]">
      {/* Hero Section */}
      <section className="bg-[#0F2A3D] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm mb-6">
            <ol className="flex items-center gap-2 text-white/60">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li>/</li>
              <li className="text-white">Services</li>
            </ol>
          </nav>
          <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-4">Our Services</p>
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
            1031 Exchange Services
          </h1>
          <p className="max-w-3xl text-lg text-white/80 leading-relaxed">
            Comprehensive support for San Diego investors navigating tax-deferred exchanges.
            From property identification to closing coordination, we help you meet every deadline
            and maximize your investment potential across all 50 states.
          </p>
        </div>
      </section>

      {/* Services Grid - Alphabetical, Clean Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sortedServices.map((service) => (
              <Link
                key={service.slug}
                href={service.route}
                className="group block bg-white border border-[#0F2A3D]/10 rounded-xl p-6 hover:border-[#0F2A3D]/30 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-[#0F2A3D] mb-3 group-hover:text-[#1a3d54] transition-colors">
                  {service.name}
                </h3>
                <p className="text-sm text-[#0F2A3D]/70 mb-4 line-clamp-3">
                  {service.short}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-[#0F2A3D]/5 text-[#0F2A3D]/70 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-[#0F2A3D] group-hover:gap-3 transition-all">
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Nude/Tan Color */}
      <section className="bg-[#E8DED1] py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-[#0F2A3D] mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-lg text-[#0F2A3D]/70 mb-8">
            Every 1031 exchange is unique. Contact us to discuss your specific needs
            and we&apos;ll create a tailored plan for your San Diego exchange.
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
