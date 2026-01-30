import { notFound } from "next/navigation";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import type { Metadata } from "next";
import { servicesData } from "@/data";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { RelatedServices } from "@/components/services/related-services";
import { ContactForm } from "@/components/contact-form";
import BottomCTA from "@/components/BottomCTA";
import { DeadlineCalculator } from "@/components/widgets/deadline-calculator";
import { IdentificationRules } from "@/components/widgets/identification-rules";
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
    title: `${service.name}`,
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

  const breadcrumbs = [
    { label: "Home", href: `${SITE_URL}/` },
    { label: "Services", href: `${SITE_URL}/services` },
    {
      label: service.name,
      href: `${SITE_URL}${service.route}`,
    },
  ];

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

  const projectTypeOptions = servicesData.map(
    (item) => item.name,
  );

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
      <div className="bg-paper text-ink">
      <section className="border-b border-outline/30 bg-panel/20 py-12">
        <div className="container grid gap-6 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="space-y-4">
            <Breadcrumbs items={breadcrumbs} />
            <p className="text-xs uppercase tracking-[0.35em] text-primary">
              {service.category}
            </p>
            <h1 className="text-4xl font-semibold text-heading">
              {service.name}
            </h1>
            <p className="text-base text-ink/80">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-ink/60">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-outline px-3 py-1 uppercase tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <a
                href="#service-contact"
                className="rounded-full bg-primary px-5 py-2 font-semibold text-primaryfg transition hover:opacity-90"
              >
                Start {service.name}
              </a>
              <a
                href="#service-faq"
                className="rounded-full border border-outline px-5 py-2 font-semibold text-heading transition hover:border-primary hover:text-primary"
              >
                View FAQs
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-outline/40 bg-panel/60 p-4">
            <Image
              src={service.heroImage}
              alt={service.name}
              width={900}
              height={600}
              className="h-64 w-full rounded-xl object-cover"
              priority
            />
            <div className="mt-4 space-y-2 text-sm text-ink/70">
              {service.workflows.map((workflow) => (
                <p key={workflow}>• {workflow}</p>
              ))}
              <p className="text-primary">{service.highlight}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-8 py-12">
        <div className="grid gap-6 lg:grid-cols-2">
          <DeadlineCalculator />
          <IdentificationRules />
        </div>

        <section id="service-faq" className="space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-primary">
            FAQ
          </p>
          <h2 className="text-3xl font-semibold text-heading">
            Questions San Diego, CA investors ask about {service.name}
          </h2>
          <div className="space-y-3">
            {service.faqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-2xl border border-outline/40 bg-panel/60 p-4"
              >
                <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-heading">
                  {faq.question}
                  <span className="text-primary">+</span>
                </summary>
                <p className="mt-2 text-sm text-ink/70">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-primary">
            Related services
          </p>
          <RelatedServices services={relatedServices} />
        </section>

        <section id="service-contact">
          <ContactForm
            subheading={`We focus on matching ${service.name.toLowerCase()} opportunities across all 50 states while coordinating with Qualified Intermediaries and lenders. We are not a Qualified Intermediary.`}
          />
        </section>
      </section>
        <BottomCTA
          projectType={service.name}
          heading={`Need ${service.name.toLowerCase()} on your 45-day clock?`}
          subheading="Tap through and we will prefill your intake request with this service so our response is immediate."
        />
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

