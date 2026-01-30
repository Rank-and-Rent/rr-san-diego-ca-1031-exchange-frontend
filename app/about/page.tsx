import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { SITE_URL, PRIMARY_CITY, PRIMARY_STATE_ABBR } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About | 1031 Exchange of San Diego",
  description:
    "Learn how we help buyers identify 1031 exchange replacement properties with secure intake, curated deal flow, and coordination with Qualified Intermediaries.",
  alternates: {
    canonical: "/about",
  },
};

const pillars = [
  {
    title: "Secure Intake",
    copy:
      "You receive a private intake workspace for documents, phone notes, and lender deliverables. Access is limited to the partners you approve.",
  },
  {
    title: "Property Matching",
    copy:
      "We map equity, debt, yield, and tenant goals, then release curated single tenant, DST, or structured options tied to your 45 day schedule.",
  },
  {
    title: "Advisory Coordination",
    copy:
      "We interface with your Qualified Intermediary, attorney, tax advisors, and lenders so everyone shares the same tracker and timeline.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Intake Security",
    detail: `We open a secure workspace, collect sale documents, and confirm deadlines for your ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} exchange.`,
  },
  {
    number: "02",
    title: "Inventory Drops",
    detail: "You receive daily property briefs with rent rolls, lease highlights, and credit notes matched to your criteria.",
  },
  {
    number: "03",
    title: "Diligence Orchestration",
    detail: "We schedule tours, inspections, lender checks, and legal reviews so every document lands in one place.",
  },
  {
    number: "04",
    title: "Completion Readiness",
    detail: "We keep the tracker updated through closing and archive the file for your Qualified Intermediary and tax advisors.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-700">
      {/* Hero Section */}
      <section className="bg-[#0F2A3D] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-4">About Us</p>
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
            Built for motivated 1031 exchange buyers.
          </h1>
          <p className="max-w-3xl text-lg text-white/80 leading-relaxed">
            We focus exclusively on property identification, diligence support,
            and advisory coordination. We are not a Qualified Intermediary, law
            firm, or broker dealer. Instead, we keep your San Diego, CA exchange
            moving by sourcing replacement assets across all 50 states and
            synchronizing every milestone with your existing advisors.
          </p>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="bg-[#F8F9FA] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-light text-[#0F2A3D]">What We Do</h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              Three core pillars that drive every successful exchange
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-[#0F2A3D] mb-4">
                  {pillar.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{pillar.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-4">Process</p>
            <h2 className="text-4xl md:text-5xl font-light text-[#0F2A3D]">Our Process</h2>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              Four stages that guide every exchange from intake to closing
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <article
                key={step.title}
                className="relative bg-[#F8F9FA] rounded-2xl p-8 hover:shadow-lg transition-shadow group"
              >
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

      {/* Contact Form Section */}
      <section className="bg-[#F8F9FA] py-20">
        <div className="max-w-4xl mx-auto px-4">
          <ContactForm
            subheading="Share your timeline, target tenants, and any advisor introductions you need. We will respond with a secure intake link."
          />
        </div>
      </section>
    </div>
  );
}
