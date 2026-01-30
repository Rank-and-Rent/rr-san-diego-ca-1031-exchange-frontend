import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import BottomCTA from "@/components/BottomCTA";
import site from "@/content/site.json";
import {
  inventorySpotlight01,
  locationsData,
  propertyTypesData,
  resources,
  servicesData,
} from "@/data";
import { ContactForm } from "@/components/contact-form";
import { exchangeTools } from "@/data/tools";
import { SITE_URL } from "@/lib/constants";

const processSteps = [
  {
    number: "01",
    title: "Discovery Call",
    detail:
      "We map net lease goals, credit preferences, yield targets, and DST vs. fee-simple tolerance within the first call.",
  },
  {
    number: "02",
    title: "Curated Inventory",
    detail:
      "Daily NNN property alerts covering single tenant retail, sale leasebacks, ground leases, and zero cash flow plays in all 50 states.",
  },
  {
    number: "03",
    title: "Due Diligence",
    detail:
      "Underwrite rent coverage, tenant strength, assignment clauses, and escalations so you collect without day-to-day management.",
  },
  {
    number: "04",
    title: "Closing & Handoff",
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

// Show more spotlights for scrolling
const featuredSpotlights = inventorySpotlight01;

// Stats data matching Unique Properties design
const statsData = [
  { number: "30+", label: "Years Combined Experience" },
  { number: "500+", label: "Successful Exchanges" },
  { number: "50", label: "States Covered" },
  { number: "$2B+", label: "Transaction Volume" },
  { number: "45", label: "Day Identification Period" },
];

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
  return (
    <>
      <div className="bg-white text-gray-700">
        <main>
          {/* Hero Section with Video Background - Fancy centered logo */}
          <section className="relative h-[100vh] min-h-[700px]" id="hero">
            {/* Video Background */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/san-diego-1031-hero.mp4" type="video/mp4" />
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Centered Custom Fancy Logo */}
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="text-center">
                {/* Fancy stylized logo like Unique Properties */}
                <div className="mb-6">
                  <span className="text-white text-8xl md:text-9xl font-thin tracking-[0.3em] uppercase">
                    1031
                  </span>
                </div>
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="h-[1px] w-16 md:w-24 bg-white/60" />
                  <span className="text-white text-xl md:text-2xl font-light tracking-[0.5em] uppercase">
                    Exchange
                  </span>
                  <div className="h-[1px] w-16 md:w-24 bg-white/60" />
                </div>
                <p className="text-white/80 text-sm md:text-base tracking-[0.4em] uppercase">
                  San Diego
                </p>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
              <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
                <div className="w-1 h-3 bg-white/70 rounded-full animate-bounce" />
              </div>
            </div>
          </section>

          {/* Stats Bar */}
          <section className="bg-white py-12 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex flex-wrap justify-between items-center">
                {statsData.map((stat) => (
                  <div key={stat.label} className="text-center px-4 py-4 flex-1 min-w-[150px]">
                    <p className="text-4xl md:text-5xl font-light text-[#0F2A3D] tracking-tight">
                      {stat.number}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Exclusive Property Types Section - More scrolling cards */}
          <section className="bg-[#F8F9FA] py-20">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid lg:grid-cols-[350px_1fr] gap-12 items-start">
                {/* Left Side - Title */}
                <div className="lg:sticky lg:top-32">
                  <h2 className="text-[#0F2A3D]">
                    <span className="block text-5xl md:text-6xl font-light italic font-serif">Exclusive</span>
                    <span className="block text-xl md:text-2xl font-normal mt-2 ml-4">Property Types</span>
                  </h2>
                  <p className="mt-8 text-gray-600 leading-relaxed">
                    Discover our premium selection of investment properties tailored for 1031 exchange investors. From single tenant NNN to DST investments, these properties offer passive income and tax-deferred growth.
                  </p>
                  <Link
                    href="/property-types"
                    className="inline-block mt-8 bg-[#0F2A3D] text-white px-8 py-4 rounded-lg text-sm font-medium hover:bg-[#1a3d54] transition"
                  >
                    Explore All Properties
                  </Link>
                </div>

                {/* Right Side - Scrolling Property Cards - No text overlay on photos */}
                <div className="flex gap-5 overflow-x-auto pb-4 -mr-4 pr-4 scroll-smooth">
                  {propertyTypesData.map((property) => (
                    <Link
                      key={property.slug}
                      href={property.route}
                      className="flex-shrink-0 w-[280px] bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition group"
                    >
                      <div className="relative h-[200px]">
                        <Image
                          src={`/property-types/${property.slug}/hero.jpg`}
                          alt={property.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-5">
                        <p className="text-lg font-semibold text-[#0F2A3D]">
                          {property.name}
                        </p>
                        <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                          {property.summary || `Explore ${property.name} investment opportunities for your 1031 exchange.`}
                        </p>
                        <span className="inline-flex items-center gap-2 mt-4 text-xs font-medium text-[#0F2A3D] group-hover:gap-3 transition-all">
                          Learn more
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Services Section - Text only, 2 rows of 3 */}
          <section className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-14">
                <h2 className="text-4xl md:text-5xl font-light text-[#0F2A3D]">Our Services</h2>
                <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                  Comprehensive 1031 exchange support from identification to closing
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {servicesData.slice(0, 6).map((service) => (
                  <Link
                    key={service.slug}
                    href={service.route}
                    className="group bg-[#F8F9FA] hover:bg-[#0F2A3D] rounded-xl p-8 transition-all duration-300"
                  >
                    <h3 className="text-xl font-semibold text-[#0F2A3D] group-hover:text-white transition-colors">
                      {service.name}
                    </h3>
                    <p className="mt-3 text-sm text-gray-600 group-hover:text-white/80 transition-colors line-clamp-3">
                      {service.description || `Expert guidance for ${service.name.toLowerCase()} transactions and strategies.`}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-sm font-medium text-[#0F2A3D] group-hover:text-white transition-colors">
                      Learn more
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="text-center mt-12">
                <Link
                  href="/services"
                  className="inline-block bg-[#0F2A3D] text-white px-10 py-4 rounded-lg text-sm font-medium hover:bg-[#1a3d54] transition"
                >
                  Explore All Services
                </Link>
              </div>
            </div>
          </section>

          {/* Communities Section - Names under photos, auto-scroll to right */}
          <section className="bg-[#F8F9FA] py-20 overflow-hidden">
            <div className="px-4">
              <h2 className="text-4xl md:text-5xl font-light text-[#0F2A3D] text-center mb-14 max-w-7xl mx-auto">
                Discover San Diego&apos;s Best Communities
              </h2>
              {/* Auto-scrolling marquee container */}
              <div className="relative w-full overflow-hidden">
                <div className="flex gap-6 animate-marquee">
                  {/* First set of locations */}
                  {locationsData.map((location) => (
                    <Link
                      key={location.slug}
                      href={location.route}
                      className="group flex-shrink-0 w-[300px]"
                    >
                      <div className="relative h-[250px] rounded-xl overflow-hidden">
                        <Image
                          src={`/locations/${location.slug}/hero.jpg`}
                          alt={location.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                          <svg className="w-5 h-5 text-[#0F2A3D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                      <p className="mt-4 text-center text-lg font-medium text-[#0F2A3D]">
                        {location.name}
                      </p>
                    </Link>
                  ))}
                  {/* Duplicate set for seamless infinite loop */}
                  {locationsData.map((location) => (
                    <Link
                      key={`${location.slug}-dup`}
                      href={location.route}
                      className="group flex-shrink-0 w-[300px]"
                    >
                      <div className="relative h-[250px] rounded-xl overflow-hidden">
                        <Image
                          src={`/locations/${location.slug}/hero.jpg`}
                          alt={location.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                          <svg className="w-5 h-5 text-[#0F2A3D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                      <p className="mt-4 text-center text-lg font-medium text-[#0F2A3D]">
                        {location.name}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="text-center mt-12">
                <Link
                  href="/service-areas"
                  className="inline-block bg-[#0F2A3D] text-white px-10 py-4 rounded-lg text-sm font-medium hover:bg-[#1a3d54] transition"
                >
                  Explore All Areas
                </Link>
              </div>
            </div>
          </section>

          {/* Our Story Section - Fixed for 1031 San Diego */}
          <section className="bg-[#0F2A3D] py-24">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-6">About Us</p>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-10">Our Story</h2>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
                1031 Exchange of San Diego was founded to help real estate investors navigate the complexities of tax-deferred exchanges. With decades of combined experience in commercial real estate and 1031 transactions, our team has facilitated over 500 successful exchanges totaling more than $2 billion in transaction volume.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                We specialize in identifying high-quality replacement properties across all 50 states, coordinating with qualified intermediaries, and ensuring your exchange meets all IRS requirements. Our mission is to protect your 45-day identification deadline while finding properties that match your investment goals.
              </p>
              <Link
                href="/about"
                className="inline-block mt-12 bg-white text-[#0F2A3D] px-10 py-4 rounded-lg text-sm font-medium hover:bg-gray-100 transition"
              >
                Read More About Us
              </Link>
            </div>
          </section>

          {/* How We Work Section - Clean styling with large numbers only */}
          <section className="bg-white py-24">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-4">Process</p>
                <h2 className="text-4xl md:text-5xl font-light text-[#0F2A3D]">How We Work</h2>
                <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
                  A streamlined approach built for serious exchange buyers who need speed, clarity, and fully-baked recommendations.
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {processSteps.map((step) => (
                  <article
                    key={step.title}
                    className="relative bg-[#F8F9FA] rounded-2xl p-8 hover:shadow-lg transition-shadow group"
                  >
                    {/* Large step number only - no blue button */}
                    <span className="text-8xl font-thin text-[#0F2A3D]/15 absolute top-2 right-4 group-hover:text-[#0F2A3D]/25 transition-colors">
                      {step.number}
                    </span>
                    <div className="relative z-10 pt-8">
                      <h3 className="text-xl font-semibold text-[#0F2A3D] mb-4">{step.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{step.detail}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Tools Section */}
          <section className="bg-[#F8F9FA] py-20">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-light text-[#0F2A3D]">Interactive Tools</h2>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                  Run real-time calculations for boot exposure, transaction costs, and identification rule compliance.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {exchangeTools.map((tool) => (
                  <Link
                    key={tool.slug}
                    href={tool.href}
                    className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition"
                  >
                    <tool.icon className="mb-4 h-12 w-12 text-[#0F2A3D]" />
                    <h3 className="text-xl font-semibold text-[#0F2A3D] group-hover:text-[#1a3d54] transition">{tool.name}</h3>
                    <p className="mt-2 text-sm text-gray-600">{tool.shortDescription}</p>
                    <p className="mt-4 text-sm font-semibold text-[#0F2A3D]">Launch tool →</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Form Section */}
          <section className="bg-white py-20">
            <div className="max-w-4xl mx-auto px-4">
              <ContactForm
                subheading="We focus on identifying 1031 exchange properties, coordinating secure intake, and syncing with Qualified Intermediaries and lenders. We are not a Qualified Intermediary."
              />
            </div>
          </section>

          {/* Resources Section */}
          <section className="bg-[#F8F9FA] py-20">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-light text-[#0F2A3D]">Resources</h2>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                  Bookmark these official resources for ongoing diligence.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {resources.map((resource) => (
                  <a
                    key={resource.key}
                    href={resource.href}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white rounded-xl p-6 hover:shadow-md transition"
                  >
                    <p className="text-lg font-semibold text-[#0F2A3D]">{resource.label}</p>
                    <p className="mt-2 text-sm text-gray-400 truncate">{resource.href}</p>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="bg-white py-20">
            <div className="max-w-3xl mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-light text-[#0F2A3D]">FAQ</h2>
                <p className="mt-4 text-gray-600">Investor questions we answer daily</p>
              </div>
              <div className="space-y-4">
                {faqEntries.map((faq) => (
                  <details
                    key={faq.question}
                    className="group bg-[#F8F9FA] rounded-xl p-6"
                  >
                    <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-[#0F2A3D]">
                      {faq.question}
                      <span className="text-[#0F2A3D] transition group-open:rotate-45 text-2xl font-light">+</span>
                    </summary>
                    <p className="mt-4 text-gray-600">{faq.answer}</p>
                  </details>
                ))}
              </div>
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
