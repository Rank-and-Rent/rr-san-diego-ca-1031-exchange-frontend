import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForm } from "@/components/contact-form";
import BottomCTA from "@/components/BottomCTA";
import { locationsData, servicesData } from "@/data";
import {
  COMPANY_NAME,
  PRIMARY_CITY,
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
    title: `${location.name} 1031 Exchange`,
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

  const breadcrumbs = [
    { label: "Home", href: `${SITE_URL}/` },
    { label: "Service Areas", href: `${SITE_URL}/service-areas` },
    {
      label: location.name,
      href: `${SITE_URL}${location.route}`,
    },
  ];

  const recommendedServices = servicesData.slice(0, 4);
  const projectTypeOptions = servicesData.map(
    (service) => service.name,
  );
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
      <div className="bg-paper text-ink">
      <section className="border-b border-outline/30 bg-panel/20 py-12">
        <div className="container grid gap-6 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="space-y-4">
            <Breadcrumbs items={breadcrumbs} />
            <p className="text-xs uppercase tracking-[0.35em] text-primary">
              {location.type}
            </p>
            <h1 className="text-4xl font-semibold text-heading">
              {location.name}, {PRIMARY_STATE_ABBR} 1031 Exchange Focus
            </h1>
            <p className="text-base text-ink/80">{location.description}</p>
            <ul className="list-inside list-disc text-sm text-ink/70">
              {location.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-outline/40 bg-panel/60 p-4">
            <Image
              src={location.heroImage}
              alt={location.name}
              width={900}
              height={600}
              className="h-64 w-full rounded-xl object-cover"
              priority
            />
            <iframe
              title={`${location.name} map`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                `${location.name}, ${PRIMARY_STATE_ABBR}`,
              )}&output=embed`}
              className="mt-4 h-48 w-full rounded-xl border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="container space-y-8 py-12">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-primary">
            Services
          </p>
          <h2 className="text-3xl font-semibold text-heading">
            Recommended services for {location.name}
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {recommendedServices.map((service) => (
              <article
                key={service.slug}
                className="rounded-2xl border border-outline/40 bg-panel/50 p-5"
              >
                <p className="text-xs uppercase tracking-wide text-ink/60">
                  {service.category}
                </p>
                <h3 className="mt-1 text-xl font-semibold text-heading">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm text-ink/70">{service.short}</p>
                <Link
                  href={service.route}
                  className="mt-3 inline-flex text-sm font-semibold text-primary hover:underline"
                >
                  Open service →
                </Link>
              </article>
            ))}
          </div>
          <Link
            href="/service-areas"
            className="mt-4 inline-flex text-sm font-semibold text-primary hover:underline"
          >
            View all {locationsData.length} service areas
          </Link>
        </div>

        <section id="location-faq" className="space-y-3">
          <p className="text-xs uppercase tracking-[0.35em] text-primary">
            FAQ
          </p>
          <h2 className="text-3xl font-semibold text-heading">
            {location.name} investor questions
          </h2>
          {location.faqs.map((faq) => (
            <details
              key={faq.question}
              className="rounded-2xl border border-outline/40 bg-panel/60 p-4"
            >
              <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-heading">
                {faq.question}
                <span className="text-primary">+</span>
              </summary>
              <p className="mt-2 text-sm text-ink/70">{faq.answer}</p>
            </details>
          ))}
        </section>

        <section id="location-contact">
          <ContactForm
            subheading={`We help you identify replacement properties in ${location.name}, ${PRIMARY_STATE_ABBR}, and across all 50 states. We coordinate secure intake, property matching, QI, and lender communication while remaining outside the Qualified Intermediary role.`}
          />
        </section>
      </section>
      <BottomCTA
        projectType={`${location.name} property search`}
        heading={`Ready to unlock ${location.name}?`}
        subheading="We will route your intake form straight to the San Diego desk and respond with prioritized matches for this service area."
      />
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

