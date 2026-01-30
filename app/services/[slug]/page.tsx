import { notFound } from "next/navigation";
import Script from "next/script";
import Link from "next/link";
import type { Metadata } from "next";
import { servicesData } from "@/data";
import { RelatedServices } from "@/components/services/related-services";
import { ContactForm } from "@/components/contact-form";
import {
  PRIMARY_CITY,
  PRIMARY_STATE_ABBR,
  SITE_URL,
} from "@/lib/constants";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return servicesData.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find(
    (item) => item.slug === slug,
  );
  if (!service) {
    return {};
  }

  return {
    title: `${service.name} | San Diego 1031 Exchange Services`,
    description: service.description,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find(
    (item) => item.slug === slug,
  );

  if (!service) {
    notFound();
  }

  const relatedCandidates = servicesData.filter(
    (item) =>
      item.slug !== service.slug &&
      item.category === service.category,
  );

  const relatedServices =
    relatedCandidates.length >= 4
      ? relatedCandidates.slice(0, 4)
      : servicesData
          .filter((item) => item.slug !== service.slug)
          .slice(0, 4);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    areaServed: `${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}`,
    serviceType: service.category,
    provider: {
      "@type": "ProfessionalService",
      name: "1031 Exchange of San Diego",
      areaServed: "United States",
    },
  };

  return (
    <>
      <div className="bg-white text-[#0F2A3D]">
        {/* Hero Section with Breadcrumbs */}
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
                <li>
                  <Link href="/services" className="hover:text-white transition">
                    Services
                  </Link>
                </li>
                <li>/</li>
                <li className="text-white">{service.name}</li>
              </ol>
            </nav>

            <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-4">
              {service.category}
            </p>
            <h1 className="text-4xl md:text-5xl font-light text-white mb-6 max-w-4xl">
              {service.name}
            </h1>
            <p className="text-lg text-white/80 leading-relaxed max-w-3xl">
              {service.description}
            </p>
          </div>
        </section>

        {/* Service Details Section - Clean 2-column layout */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-[2fr,1fr]">
              {/* Main Content */}
              <div>
                {/* Service Highlight */}
                <p className="text-xl text-[#0F2A3D]/80 leading-relaxed mb-10">
                  {service.highlight}
                </p>

                {/* Our Process */}
                <div className="mb-12">
                  <h2 className="text-2xl font-semibold text-[#0F2A3D] mb-6">
                    Our Process
                  </h2>
                  <div className="space-y-4">
                    {service.workflows.map((workflow, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 bg-[#F8F9FA] rounded-lg">
                        <div className="w-8 h-8 bg-[#0F2A3D] text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                          {index + 1}
                        </div>
                        <p className="text-[#0F2A3D]/80 pt-1">{workflow}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Benefits */}
                <div>
                  <h2 className="text-2xl font-semibold text-[#0F2A3D] mb-6">
                    Why This Matters
                  </h2>
                  <p className="text-[#0F2A3D]/70 leading-relaxed">
                    Our {service.name.toLowerCase()} service helps San Diego investors
                    navigate the complexities of 1031 exchanges with expert guidance
                    and personalized support. We coordinate with qualified intermediaries,
                    lenders, and tax advisors to ensure your exchange stays on track
                    and meets every deadline.
                  </p>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Tags */}
                <div className="bg-[#0F2A3D] rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Service Focus
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-white/10 text-white/90 px-3 py-1.5 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Benefits Box */}
                <div className="border border-[#0F2A3D]/10 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-[#0F2A3D] mb-4">
                    Key Benefits
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-[#0F2A3D]/70">
                      <svg className="w-5 h-5 mt-0.5 text-[#0F2A3D] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Expert coordination with QIs and lenders</span>
                    </li>
                    <li className="flex items-start gap-3 text-[#0F2A3D]/70">
                      <svg className="w-5 h-5 mt-0.5 text-[#0F2A3D] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Nationwide property identification</span>
                    </li>
                    <li className="flex items-start gap-3 text-[#0F2A3D]/70">
                      <svg className="w-5 h-5 mt-0.5 text-[#0F2A3D] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Deadline management and timeline tracking</span>
                    </li>
                    <li className="flex items-start gap-3 text-[#0F2A3D]/70">
                      <svg className="w-5 h-5 mt-0.5 text-[#0F2A3D] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>San Diego market expertise</span>
                    </li>
                  </ul>
                </div>

                {/* Quick Contact */}
                <div className="bg-[#E8DED1] rounded-2xl p-6 text-center">
                  <h3 className="text-lg font-semibold text-[#0F2A3D] mb-2">
                    Ready to Start?
                  </h3>
                  <p className="text-sm text-[#0F2A3D]/70 mb-4">
                    Let us help with your {service.name.toLowerCase()} needs.
                  </p>
                  <a
                    href="#service-contact"
                    className="inline-block bg-[#0F2A3D] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#1a3d54] transition"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="service-faq" className="py-16 border-t border-[#0F2A3D]/10">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-light text-[#0F2A3D]">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-[#0F2A3D]/60">
                Common questions about {service.name.toLowerCase()} in San Diego
              </p>
            </div>
            <div className="space-y-4">
              {service.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group border border-[#0F2A3D]/10 rounded-xl overflow-hidden"
                >
                  <summary className="flex cursor-pointer items-center justify-between p-6 text-lg font-medium text-[#0F2A3D] hover:bg-[#0F2A3D]/5 transition">
                    {faq.question}
                    <span className="text-[#0F2A3D] transition group-open:rotate-45 text-2xl font-light ml-4">+</span>
                  </summary>
                  <p className="px-6 pb-6 text-[#0F2A3D]/70 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services Section */}
        <section className="py-16 border-t border-[#0F2A3D]/10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-light text-[#0F2A3D]">Related Services</h2>
              <p className="mt-4 text-[#0F2A3D]/60 max-w-2xl mx-auto">
                Explore other services that complement your exchange needs
              </p>
            </div>
            <RelatedServices services={relatedServices} />
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="service-contact" className="bg-[#0F2A3D] py-20">
          <div className="max-w-4xl mx-auto px-4">
            <ContactForm
              heading={`Discuss ${service.name}`}
              subheading={`We focus on matching ${service.name.toLowerCase()} opportunities across all 50 states while coordinating with Qualified Intermediaries and lenders. We are not a Qualified Intermediary.`}
            />
          </div>
        </section>
      </div>
      <Script
        id={`service-schema-${service.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(serviceSchema)}
      </Script>
    </>
  );
}
