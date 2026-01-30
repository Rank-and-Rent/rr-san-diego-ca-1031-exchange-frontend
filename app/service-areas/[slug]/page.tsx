import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { ContactForm } from "@/components/contact-form";
import { locationsData, servicesData } from "@/data";
import {
  COMPANY_NAME,
  PRIMARY_STATE_ABBR,
  SITE_URL,
} from "@/lib/constants";

interface LocationPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return locationsData.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({
  params,
}: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = locationsData.find(
    (item) => item.slug === slug,
  );
  if (!location) {
    return {};
  }

  return {
    title: `${location.name} 1031 Exchange | San Diego, CA`,
    description: location.description,
    alternates: {
      canonical: `/service-areas/${location.slug}`,
    },
  };
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = locationsData.find(
    (item) => item.slug === slug,
  );

  if (!location) {
    notFound();
  }

  const recommendedServices = servicesData.slice(0, 3);
  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${location.name} 1031 Exchange Support`,
    description: location.description,
    url: `${SITE_URL}${location.route}`,
    image: `${SITE_URL}${location.heroImage}`,
    areaServed: `${location.name}, ${PRIMARY_STATE_ABBR}`,
    provider: {
      "@type": "Organization",
      name: COMPANY_NAME,
      areaServed: "United States",
    },
    serviceType: "1031 exchange replacement property identification",
  };

  return (
    <>
      <div className="bg-white text-[#0F2A3D]">
        {/* Hero Section - Full width image at top */}
        <section className="relative h-[50vh] min-h-[400px]">
          <Image
            src={location.heroImage}
            alt={location.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F2A3D]/70 to-[#0F2A3D]/40" />

          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto px-4 pb-12 w-full">
              {/* Breadcrumbs */}
              <nav className="text-sm mb-4" aria-label="Breadcrumb">
                <ol className="flex items-center gap-2 text-white/60">
                  <li>
                    <Link href="/" className="hover:text-white transition">
                      Home
                    </Link>
                  </li>
                  <li>/</li>
                  <li>
                    <Link href="/service-areas" className="hover:text-white transition">
                      Service Areas
                    </Link>
                  </li>
                  <li>/</li>
                  <li className="text-white">{location.name}</li>
                </ol>
              </nav>
              <p className="text-sm uppercase tracking-[0.3em] text-white/60 mb-2">
                {location.type}
              </p>
              <h1 className="text-4xl md:text-6xl font-light text-white">
                {location.name}, {PRIMARY_STATE_ABBR}
              </h1>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-[2fr,1fr]">
              {/* Main Content */}
              <div>
                <p className="text-xl text-[#0F2A3D]/80 leading-relaxed mb-10">
                  {location.description}
                </p>

                {/* Location Highlights */}
                <div className="mb-12">
                  <h2 className="text-2xl font-semibold text-[#0F2A3D] mb-6">
                    Investment Highlights
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {location.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-[#F8F9FA] rounded-lg">
                        <svg className="w-5 h-5 mt-0.5 text-[#0F2A3D] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-[#0F2A3D]/80">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Market Context */}
                <div>
                  <h2 className="text-2xl font-semibold text-[#0F2A3D] mb-6">
                    Market Context
                  </h2>
                  <p className="text-[#0F2A3D]/70 leading-relaxed">
                    {location.name} offers unique opportunities for 1031 exchange investors
                    seeking quality replacement properties in the San Diego metro area.
                    Our team monitors this market for single-tenant net lease assets,
                    helping you identify properties that match your investment criteria
                    and exchange timeline requirements.
                  </p>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Map */}
                <div className="rounded-2xl overflow-hidden">
                  <iframe
                    title={`${location.name} map`}
                    src={`https://www.google.com/maps?q=${encodeURIComponent(
                      `${location.name}, ${PRIMARY_STATE_ABBR}`,
                    )}&output=embed`}
                    className="h-56 w-full border-0"
                    loading="lazy"
                  />
                </div>

                {/* Related Services */}
                <div className="border border-[#0F2A3D]/10 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-[#0F2A3D] mb-4">
                    Related Services
                  </h3>
                  <ul className="space-y-3">
                    {recommendedServices.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={service.route}
                          className="block p-3 rounded-lg hover:bg-[#F8F9FA] transition group"
                        >
                          <p className="font-medium text-[#0F2A3D] group-hover:text-[#1a3d54]">
                            {service.name}
                          </p>
                          <p className="text-sm text-[#0F2A3D]/60 mt-1">
                            {service.short}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quick Contact */}
                <div className="bg-[#E8DED1] rounded-2xl p-6 text-center">
                  <h3 className="text-lg font-semibold text-[#0F2A3D] mb-2">
                    Explore {location.name}
                  </h3>
                  <p className="text-sm text-[#0F2A3D]/70 mb-4">
                    Let us find investment opportunities in this area for your exchange.
                  </p>
                  <a
                    href="#location-contact"
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
        <section id="location-faq" className="py-16 border-t border-[#0F2A3D]/10">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-light text-[#0F2A3D]">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-[#0F2A3D]/60">
                {location.name} investor questions
              </p>
            </div>
            <div className="space-y-4">
              {location.faqs.map((faq) => (
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

        {/* Contact Form Section */}
        <section id="location-contact" className="bg-[#0F2A3D] py-20">
          <div className="max-w-4xl mx-auto px-4">
            <ContactForm
              heading={`Discuss ${location.name} Opportunities`}
              subheading={`We help you identify replacement properties in ${location.name}, ${PRIMARY_STATE_ABBR}, and across all 50 states. We coordinate secure intake, property matching, QI, and lender communication while remaining outside the Qualified Intermediary role.`}
            />
          </div>
        </section>
      </div>
      <Script
        id={`location-schema-${location.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(locationSchema)}
      </Script>
    </>
  );
}
