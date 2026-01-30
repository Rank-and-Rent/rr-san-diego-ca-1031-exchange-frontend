import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { ContactForm } from "@/components/contact-form";
import { propertyTypesData, servicesData } from "@/data";
import { SITE_URL } from "@/lib/constants";

const propertyTypeServiceMap: Record<string, string[]> = {
  "convenience-store-gas": [
    "nnn-replacement-property-identification",
    "stnl-retail-list-san-diego",
    "ground-lease-outparcel-sourcing",
  ],
  "drive-thru-qsr": [
    "drive-thru-qsr-sale-leaseback",
    "timeline-assurance-program",
    "nnn-replacement-property-identification",
  ],
  pharmacy: [
    "medical-office-1031-matching",
    "preferred-credit-tenant-list-san-diego",
  ],
  "dollar-store": [
    "preferred-credit-tenant-list-san-diego",
    "market-comp-digest-san-diego",
  ],
  "coffee-drive-thru": [
    "drive-thru-qsr-sale-leaseback",
    "triple-net-ground-up-development",
  ],
  "auto-parts-retail": [
    "rent-roll-and-t12-validation",
    "capex-and-buildout-estimates",
  ],
  "hard-discount-grocer": [
    "stnl-retail-list-san-diego",
    "market-comp-digest-san-diego",
  ],
  "ground-lease-outparcel": [
    "ground-lease-outparcel-sourcing",
    "sale-leaseback-occupier-advisory",
  ],
  "urgent-care-medical": [
    "medical-office-1031-matching",
    "improvement-exchange-site-planning",
  ],
  "auto-service-oil-change": [
    "sale-leaseback-occupier-advisory",
    "capex-and-buildout-estimates",
  ],
  "tractor-supply": [
    "market-comp-digest-san-diego",
    "ground-lease-outparcel-sourcing",
  ],
  "last-mile-logistics": [
    "industrial-net-lease-scouting",
    "flex-and-last-mile-logistics-pipeline",
  ],
};

interface PropertyTypePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return propertyTypesData.map((propertyType) => ({ slug: propertyType.slug }));
}

export async function generateMetadata({
  params,
}: PropertyTypePageProps): Promise<Metadata> {
  const { slug } = await params;
  const propertyType = propertyTypesData.find(
    (item) => item.slug === slug,
  );

  if (!propertyType) {
    return {};
  }

  return {
    title: `${propertyType.name} 1031 Exchange Opportunities | San Diego`,
    description: propertyType.summary,
    alternates: {
      canonical: `/property-types/${propertyType.slug}`,
    },
  };
}

export default async function PropertyTypePage({
  params,
}: PropertyTypePageProps) {
  const { slug } = await params;
  const propertyType = propertyTypesData.find(
    (item) => item.slug === slug,
  );

  if (!propertyType) {
    notFound();
  }

  const recommendedServiceSlugs =
    propertyTypeServiceMap[propertyType.slug] ?? [];
  const recommendedServiceMatches = recommendedServiceSlugs
    .map((slug) => servicesData.find((service) => service.slug === slug))
    .filter(
      (service): service is (typeof servicesData)[number] => Boolean(service),
    );
  const recommendedServices = (
    recommendedServiceMatches.length > 0
      ? recommendedServiceMatches
      : servicesData
  ).slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${propertyType.name} Identification`,
    serviceType: "1031 exchange property sourcing",
    description: propertyType.summary,
    areaServed: "United States",
    provider: {
      "@type": "Organization",
      name: "1031 Exchange of San Diego",
      url: SITE_URL,
    },
    url: `${SITE_URL}${propertyType.route}`,
    image: `${SITE_URL}${propertyType.heroImage}`,
  };

  return (
    <>
      <div className="bg-white text-[#0F2A3D]">
        {/* Hero Section - Full width image at top */}
        <section className="relative h-[50vh] min-h-[400px]">
          <Image
            src={propertyType.heroImage}
            alt={propertyType.name}
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
                    <Link href="/property-types" className="hover:text-white transition">
                      Property Types
                    </Link>
                  </li>
                  <li>/</li>
                  <li className="text-white">{propertyType.name}</li>
                </ol>
              </nav>
              <h1 className="text-4xl md:text-6xl font-light text-white">
                {propertyType.name}
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
                  {propertyType.summary}
                </p>

                {/* Value Drivers */}
                <div className="mb-12">
                  <h2 className="text-2xl font-semibold text-[#0F2A3D] mb-6">
                    Investment Highlights
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {propertyType.valueDrivers.map((driver, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-[#F8F9FA] rounded-lg">
                        <svg className="w-5 h-5 mt-0.5 text-[#0F2A3D] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-[#0F2A3D]/80">{driver}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Due Diligence */}
                <div>
                  <h2 className="text-2xl font-semibold text-[#0F2A3D] mb-6">
                    Due Diligence Focus
                  </h2>
                  <p className="text-[#0F2A3D]/70 leading-relaxed">
                    {propertyType.leaseNotes ??
                      `When evaluating ${propertyType.name} properties, we underwrite rent bumps, assignment language, and maintenance splits so you know exactly how passive the income stream will be. Our team analyzes lease terms, tenant creditworthiness, and market comparables to ensure your investment meets your criteria.`}
                  </p>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Tenant Examples */}
                <div className="bg-[#0F2A3D] rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Common Tenants
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {propertyType.tenantExamples.map((tenant) => (
                      <span
                        key={tenant}
                        className="bg-white/10 text-white/90 px-3 py-1.5 rounded-full text-sm"
                      >
                        {tenant}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Recommended Services */}
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
                    Ready to Explore?
                  </h3>
                  <p className="text-sm text-[#0F2A3D]/70 mb-4">
                    Let us find {propertyType.name} opportunities for your exchange.
                  </p>
                  <a
                    href="#property-type-contact"
                    className="inline-block bg-[#0F2A3D] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#1a3d54] transition"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="property-type-contact" className="bg-[#0F2A3D] py-20">
          <div className="max-w-4xl mx-auto px-4">
            <ContactForm
              heading={`Discuss ${propertyType.name} opportunities`}
              subheading="Share your target cap rate, timeline, and tenant profile. We will prioritize matching this property type inside your 45-day window."
            />
          </div>
        </section>
      </div>
      <Script
        id={`property-type-schema-${propertyType.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(schema)}
      </Script>
    </>
  );
}
