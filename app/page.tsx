import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import BottomCTA from "@/components/BottomCTA";
import { Breadcrumbs } from "@/components/breadcrumbs";
import site from "@/content/site.json";
import {
  inventoryCategories,
  inventorySpotlight01,
  locationsData,
  propertyTypesData,
  resources,
  servicesData,
} from "@/data";
import { ContactForm } from "@/components/contact-form";
import { HomeServiceGroups } from "@/components/home/home-service-groups";
import { HomeLocationGrid } from "@/components/home/home-location-grid";
import { exchangeTools } from "@/data/tools";
import { SITE_URL } from "@/lib/constants";

const processSteps = [
  {
    title: "45-Day war room",
    detail:
      "We map net lease goals, credit preferences, yield targets, and DST vs. fee-simple tolerance within the first call.",
  },
  {
    title: "Curated inventory drops",
    detail:
      "Daily NNN property alerts covering single tenant retail, sale leasebacks, ground leases, and zero cash flow plays in all 50 states.",
  },
  {
    title: "Credit & lease diligence",
    detail:
      "Underwrite rent coverage, tenant strength, assignment clauses, and escalations so you collect without day-to-day management.",
  },
  {
    title: "Closing & handoff",
    detail:
      "Coordinate QI, escrow, and vendor stack to keep funds qualified and the 180-day completion airtight.",
  },
];

const faqEntries = [
  {
    question: "How fast can you surface replacement properties?",
    answer:
      "Most exchange buyers receive an initial drop of vetted single tenant retail and NNN investment property listings within 24 hours. Because we track inventory in all 50 states we can usually produce at least 15 viable matches before day five.",
  },
  {
    question: "Do you only focus on San Diego properties?",
    answer:
      "Our headquarters is in San Diego, but our team sources and underwrites net lease property listings across every major metro, secondary market, and rural corridor in the United States. Local knowledge plus national coverage means you can match credit, lease term, and price point anywhere.",
  },
  {
    question: "What if I need zero cash flow or sale leaseback options?",
    answer:
      "We routinely work with investors who need to solve for debt replacement or estate planning. Expect curated zero cash flow, ground lease, and corporate sale leaseback inventory with clear explanations of structure, tax impact, and exit planning.",
  },
  {
    question: "Can you coordinate with my qualified intermediary or attorney?",
    answer:
      "Yes. We plug directly into your existing advisory team or can introduce vetted QI, legal, tax, and lending partners so the exchange paperwork, 8824 filing, and escrow timelines stay synchronized.",
  },
];

const serviceCategories = ["Timelines", "Execution", "Property Paths"] as const;

const featuredServices = serviceCategories.map((category) => ({
  category,
  items: servicesData
    .filter((service) => service.category === category)
    .slice(0, 4),
}));

const featuredPropertyTypes = propertyTypesData.slice(0, 8);
const featuredSpotlights = inventorySpotlight01.slice(0, 4);
const projectTypeOptions = servicesData.map((service) => service.name);
const homeBreadcrumbs = [{ label: "Home", href: `${SITE_URL}/` }];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.company,
  url: SITE_URL,
  telephone: site.phone,
  email: site.email,
  logo: `${SITE_URL}/1031-exchange-of-san-diego-ca-logo.png`,
  image: `${SITE_URL}/locations/san-diego-ca/hero.jpg`,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: site.phone,
      contactType: "customer support",
      email: site.email,
      areaServed: "US",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address,
    addressLocality: site.mainCity,
    addressRegion: site.state,
    postalCode: "92121",
    addressCountry: "US",
  },
  areaServed: "United States",
  serviceType: [
    "Single tenant NNN property sourcing",
    "1031 exchange consultation",
    "Sale leaseback advisory",
    "Ground lease acquisition",
    "Zero cash flow strategy",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqEntries.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Home() {
  const telHref = `tel:${site.phoneDigits}`;

  return (
    <>
      <div className="bg-paper text-ink">
        <main>
          <section className="border-b border-outline/40 bg-gradient-to-br from-panel via-panel/70 to-black" id="hero">
            <div className="container mx-auto grid gap-10 py-16 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
              <div className="lg:col-span-2">
                <Breadcrumbs items={homeBreadcrumbs} />
              </div>
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.35em] text-primary">
                  Identify | Underwrite | Close
                </p>
                <h1 className="text-4xl font-semibold text-heading sm:text-5xl">
                  Single tenant NNN replacement properties delivered fast for 1031 buyers.
                </h1>
                <p className="max-w-2xl text-lg text-ink/80">
                  We help motivated exchange buyers lock the right single tenant retail, pharmacy, QSR,
                  medical, and essential-service assets nationwide. Expect curated deal flow aligned with
                  45/180-day timelines, credit requirements, and predictable income targets.
                </p>
                <ul className="flex flex-wrap gap-3 text-sm font-semibold text-primary">
                  {[
                    "Single tenant retail for sale",
                    "NNN investment property for sale",
                    "Net lease property listings",
                    "1031 exchange NNN properties",
                  ].map((keyword) => (
                    <li
                      key={keyword}
                      className="rounded-full border border-primary/30 px-4 py-1 text-primaryfg/80 bg-primary/20"
                    >
                      {keyword}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="#contact-form"
                    className="rounded-full bg-primary px-6 py-3 text-base font-semibold text-primaryfg hover:opacity-90"
                  >
                    Get matched to NNN deals
                  </Link>
                  <a
                    href="#process"
                    className="rounded-full border border-outline px-6 py-3 text-base font-semibold text-heading hover:border-primary hover:text-primary"
                  >
                    See our 45/180 plan
                  </a>
                </div>
              </div>
              <div className="rounded-2xl border border-outline/50 bg-panel/60 p-6 shadow-2xl">
                <div className="relative mb-6 overflow-hidden rounded-xl border border-outline/50">
                  <Image
                    src="/locations/san-diego-ca/hero.jpg"
                    alt="San Diego skyline representing 1031 Exchange of San Diego"
                    width={900}
                    height={600}
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-sm text-white">
                    50-state replacement property identification anchored in San Diego expertise.
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="inventory" className="container mx-auto border-b border-outline/30 py-16">
            <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-primary">Exchange Playbooks</p>
                <h2 className="text-3xl font-semibold text-heading">Replacement property lanes we monitor daily</h2>
                <p className="mt-3 max-w-2xl text-base text-ink/80">
                  Align your exchange proceeds with fee-simple NNN, DST introductions, and credit-tenanted retail that matches your
                  debt, yield, and lease-back requirements.
                </p>
              </div>
              <Link href="/inventory/nnn" className="text-sm font-semibold text-primary">
                Explore all inventory →
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {inventoryCategories.map((category) => (
                <article
                  key={category.slug}
                  className="rounded-2xl border border-outline/40 bg-panel/60 p-6 shadow-lg"
                >
                  <p className="text-xs uppercase tracking-wide text-ink/60">{category.slug}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-heading">{category.name}</h3>
                  <p className="mt-3 text-sm text-ink/80">{category.note}</p>
                  <Link
                    href={category.route}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                  >
                    {category.name} listings
                    <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ))}
            </div>
          </section>

          <section className="border-b border-outline/30 bg-panel/40 py-16">
            <div className="container mx-auto">
              <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-primary">NNN Focus</p>
                  <h2 className="text-3xl font-semibold text-heading">Deal flow across recession-resilient sectors</h2>
                  <p className="mt-3 max-w-3xl text-base text-ink/80">
                    From convenience gas, drive-thru QSR, and pharmacy to ground lease outparcels and last mile logistics,
                    we curate single tenant net lease opportunities where the tenant handles taxes, insurance, and maintenance.
                  </p>
                </div>
                <Link href="/property-types/convenience-store-gas" className="text-sm font-semibold text-primary">
                  View property briefs →
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {featuredPropertyTypes.map((property) => (
                  <Link
                    key={property.slug}
                    href={property.route}
                    className="rounded-xl border border-outline/30 bg-paper/60 p-5 transition hover:border-primary hover:text-primary"
                  >
                    <p className="text-xs uppercase text-ink/60">Single tenant</p>
                    <p className="mt-2 text-lg font-semibold text-heading">{property.name}</p>
                    <p className="mt-2 text-sm text-ink/70">NNN · Credit tenants · Long-term leases</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section className="container mx-auto border-b border-outline/30 py-16">
            <div className="mb-8">
              <p className="text-sm uppercase tracking-[0.35em] text-primary">Featured Spotlights</p>
              <h2 className="text-3xl font-semibold text-heading">Current net lease opportunities</h2>
              <p className="mt-3 max-w-3xl text-base text-ink/80">
                These highlights rotate weekly. Ask for the full list by sector, credit rating, lease term, and target yield.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {featuredSpotlights.map((spotlight) => (
                <article
                  key={spotlight.type}
                  className="rounded-2xl border border-outline/40 bg-panel/60 p-6 shadow-lg"
                >
                  <h3 className="text-2xl font-semibold text-heading">{spotlight.title}</h3>
                  <p className="mt-3 text-sm text-ink/80">{spotlight.copy}</p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs text-ink/60">
                    <span className="rounded-full border border-outline px-3 py-1 uppercase tracking-wide">
                      {spotlight.type.replace(/-/g, " ")}
                    </span>
                    <span className="rounded-full border border-outline px-3 py-1 uppercase tracking-wide">
                      Triple Net
                    </span>
                  </div>
                  <Link
                    href={spotlight.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                  >
                    {spotlight.ctaLabel}
                    <span aria-hidden="true">→</span>
                  </Link>
                  <p className="mt-4 text-xs text-ink/60">{spotlight.note}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="process" className="border-b border-outline/30 bg-panel/20 py-16">
            <div className="container mx-auto">
              <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-primary">Process</p>
                  <h2 className="text-3xl font-semibold text-heading">How we protect every exchange milestone</h2>
                  <p className="mt-3 max-w-3xl text-base text-ink/80">
                    Built for unrepresented exchange buyers who need speed, clarity, and fully-baked recommendations.
                  </p>
                </div>
                <a href={telHref} className="text-sm font-semibold text-primary">
                  Schedule a 12-minute intake call →
                </a>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {processSteps.map((step, index) => (
                  <article key={step.title} className="rounded-2xl border border-outline/40 bg-paper/70 p-6">
                    <p className="text-sm font-semibold text-primary">Step {index + 1}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-heading">{step.title}</h3>
                    <p className="mt-3 text-sm text-ink/80">{step.detail}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="services" className="container mx-auto border-b border-outline/30 py-16">
            <div className="mb-8">
              <p className="text-sm uppercase tracking-[0.35em] text-primary">Services</p>
              <h2 className="text-3xl font-semibold text-heading">Advisory built for serious exchange buyers</h2>
              <p className="mt-3 max-w-3xl text-base text-ink/80">
                Use our team as an extension of your QI, attorney, and broker relationships to keep documentation, inspections,
                and lender deliverables synchronized.
              </p>
            </div>
            <HomeServiceGroups groups={featuredServices} />
          </section>

          <section id="locations" className="border-b border-outline/30 bg-panel/10 py-16">
            <div className="container mx-auto">
              <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-primary">Markets</p>
                  <h2 className="text-3xl font-semibold text-heading">San Diego roots. All 50 states covered.</h2>
                  <p className="mt-3 max-w-3xl text-base text-ink/80">
                    From La Jolla trophy corners to remote tertiary targets, we maintain net lease watchlists with cap rate,
                    lease term, and credit-grade notes so your identification list is bulletproof.
                  </p>
                </div>
              </div>
              <HomeLocationGrid locations={locationsData} />
            </div>
          </section>

          <section id="education" className="container mx-auto border-b border-outline/30 py-16">
            <div className="rounded-3xl border border-outline/40 bg-gradient-to-br from-panel via-panel/60 to-black p-8">
              <p className="text-sm uppercase tracking-[0.35em] text-primary">Education & SEO</p>
              <h2 className="mt-4 text-3xl font-semibold text-heading">
                Clarity on NNN structures, sale leasebacks, ground leases, and zero cash flow options.
              </h2>
              <div className="mt-6 space-y-4 text-base text-ink/80">
                <p>
                  We translate IRS rules, NAVBoost-era helpful content guidance, and the latest Hobo Technical SEO frameworks
                  into plain language so exchange buyers can make confident decisions. Every property brief includes rent rolls,
                  maintenance responsibilities, credit snapshots, and downside notes so you understand both upside and risk.
                </p>
                <p>
                  Looking at single tenant retail for sale with national convenience brands? Need a sale leaseback to redeploy
                  proceeds while keeping operations? Curious about ground lease outparcels, corporate guarantees, or zero cash
                  flow vehicles to balance debt? We document each structure, highlight tax touchpoints, and provide direct paths
                  to qualified providers when securities are involved.
                </p>
                <p>
                  Our content hub doubles as an SEO moat—rich headlines, structured data, and authoritative outbound links (IRS,
                  Rev Proc 2008-16, California transfer tax resources) prove experience, expertise, authority, and trust so both
                  investors and search engines know they are in the right place.
                </p>
              </div>
            </div>
          </section>

          <section className="container mx-auto border-b border-outline/30 py-16">
            <ContactForm
              projectTypeOptions={projectTypeOptions}
              subheading="We focus on identifying 1031 exchange properties, coordinating secure intake, and syncing with Qualified Intermediaries and lenders. We are not a Qualified Intermediary."
            />
          </section>

          <section id="resources" className="container mx-auto border-b border-outline/30 py-16">
            <div className="mb-8">
              <p className="text-sm uppercase tracking-[0.35em] text-primary">Resources</p>
              <h2 className="text-3xl font-semibold text-heading">Reference documents & compliance</h2>
              <p className="mt-3 max-w-3xl text-base text-ink/80">
                Bookmark these official resources for ongoing diligence. We align every exchange plan with the IRS and local
                jurisdiction guidelines referenced below.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {resources.map((resource) => (
                <a
                  key={resource.key}
                  href={resource.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-outline/40 bg-panel/60 p-5 transition hover:border-primary hover:text-primary"
                >
                  <p className="text-lg font-semibold text-heading">{resource.label}</p>
                  <p className="mt-2 text-sm text-ink/60">{resource.href}</p>
                </a>
              ))}
            </div>
          </section>

          <section id="tools" className="container mx-auto border-b border-outline/30 py-16">
            <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-primary">Interactive Tools</p>
                <h2 className="text-3xl font-semibold text-heading">
                  Calculators that keep your 1031 exchange on track
                </h2>
                <p className="mt-3 max-w-2xl text-base text-ink/80">
                  Run real-time calculations for boot exposure, transaction costs, and identification rule compliance. Each tool
                  mirrors the design system on this site and uses our San Diego dataset.
                </p>
              </div>
              <Link href="/tools" className="text-sm font-semibold text-primary">
                View all tools →
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {exchangeTools.map((tool) => (
                <Link
                  key={tool.slug}
                  href={tool.href}
                  className="group rounded-2xl border border-gray-200 bg-gradient-to-br from-[#0B3C5D] to-[#16486C] p-6 text-white shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
                >
                  <tool.icon className="mb-4 h-12 w-12 text-[#C9A227]" />
                  <h3 className="text-2xl font-semibold text-white">{tool.name}</h3>
                  <p className="mt-2 text-sm text-white/80">{tool.shortDescription}</p>
                  <p className="mt-4 text-sm font-semibold text-[#C9A227]">Launch tool →</p>
                </Link>
              ))}
            </div>
          </section>

          <section id="faq" className="container mx-auto py-16">
            <div className="mb-8">
              <p className="text-sm uppercase tracking-[0.35em] text-primary">FAQ</p>
              <h2 className="text-3xl font-semibold text-heading">Investor questions we answer daily</h2>
            </div>
            <div className="space-y-4">
              {faqEntries.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-outline/40 bg-panel/60 p-6"
                >
                  <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-heading">
                    {faq.question}
                    <span className="text-primary transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 text-sm text-ink/80">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>
        </main>

        <BottomCTA />
      </div>

      <Script id="org-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(organizationSchema)}
      </Script>
      <Script id="faq-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(faqSchema)}
      </Script>
    </>
  );
}
