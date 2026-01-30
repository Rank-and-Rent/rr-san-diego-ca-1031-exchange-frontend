import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForm } from "@/components/contact-form";
import BottomCTA from "@/components/BottomCTA";
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
    title: `${propertyType.name} 1031 Exchange Opportunities`,
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

  const breadcrumbs = [
    { label: "Home", href: `${SITE_URL}/` },
    { label: "Property Types", href: `${SITE_URL}/property-types` },
    {
      label: propertyType.name,
      href: `${SITE_URL}${propertyType.route}`,
    },
  ];

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

  const projectTypeOptions = servicesData.map((service) => service.name);

  return (
    <>
      <div className="bg-paper text-ink">
        <section className="border-b border-outline/30 bg-panel/20 py-12">
          <div className="container grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div className="space-y-4">
              <Breadcrumbs items={breadcrumbs} />
              <p className="text-xs uppercase tracking-[0.35em] text-primary">
                Property insight
              </p>
              <h1 className="text-4xl font-semibold text-heading">
                {propertyType.name}
              </h1>
              <p className="text-base text-ink/80">
                {propertyType.summary}
              </p>
              <div className="space-y-2 rounded-2xl border border-outline/30 bg-panel/50 p-4 text-sm text-ink/70">
                {propertyType.valueDrivers.map((driver) => (
                  <p key={driver}>• {driver}</p>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-outline/40 bg-panel/60 p-4">
              <Image
                src={propertyType.heroImage}
                alt={propertyType.name}
                width={960}
                height={640}
                className="h-64 w-full rounded-xl object-cover"
                priority
              />
              <div className="mt-4 space-y-1 text-sm text-ink/70">
                <p className="text-xs uppercase tracking-[0.35em] text-primary">
                  Tenant roster
                </p>
                <div className="flex flex-wrap gap-2">
                  {propertyType.tenantExamples.map((tenant) => (
                    <span
                      key={tenant}
                      className="rounded-full border border-outline px-3 py-1 text-xs uppercase tracking-wide"
                    >
                      {tenant}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container space-y-10 py-12">
          <div className="grid gap-6 lg:grid-cols-[1fr,0.9fr]">
            <article className="rounded-3xl border border-outline/30 bg-panel/40 p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-primary">
                What to watch
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-heading">
                Due diligence focus for {propertyType.name}
              </h2>
              <p className="mt-4 text-sm text-ink/80">
                {propertyType.leaseNotes ??
                  "We underwrite rent bumps, assignment language, and maintenance splits so you know exactly how passive the income stream will be."}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-ink/70">
                {propertyType.valueDrivers.map((driver) => (
                  <li key={`detail-${driver}`} className="flex gap-2">
                    <span className="text-primary">▹</span>
                    <span>{driver}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-3xl border border-outline/30 bg-panel/40 p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-primary">
                Recommended services
              </p>
              <ul className="mt-4 space-y-3">
                {recommendedServices.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={service.route}
                      className="block rounded-2xl border border-outline/30 bg-panel/60 p-4 transition hover:border-primary hover:text-primary"
                    >
                      <p className="text-xs uppercase tracking-wide text-ink/60">
                        {service.category}
                      </p>
                      <p className="mt-1 text-lg font-semibold text-heading">
                        {service.name}
                      </p>
                      <p className="mt-2 text-sm text-ink/70">
                        {service.short}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <section className="rounded-3xl border border-outline/40 bg-panel/30 p-6">
            <p className="text-xs uppercase tracking-[0.35em] text-primary">
              Tenant spectrum
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-heading">
              Who occupies {propertyType.name} assets?
            </h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {propertyType.tenantExamples.map((tenant) => (
                <div
                  key={`tenant-${tenant}`}
                  className="rounded-2xl border border-outline/30 bg-panel/50 p-4 text-sm text-ink/80"
                >
                  <p className="text-lg font-semibold text-heading">
                    {tenant}
                  </p>
                  <p className="mt-2 text-sm text-ink/70">
                    We track credit updates, expansion announcements, and
                    remodel requirements for {tenant} so your exchange file stays
                    current.
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="property-type-contact">
            <ContactForm
              heading={`Discuss ${propertyType.name} opportunities`}
              subheading="Share your target cap rate, timeline, and tenant profile. We will prioritize matching this property type inside your 45-day window."
            />
          </section>
        </section>
        <BottomCTA
          projectType={propertyType.name}
          heading={`Request ${propertyType.name} briefs`}
          subheading="We will prefill your intake form with this property type and send matching opportunities within one business day."
        />
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

