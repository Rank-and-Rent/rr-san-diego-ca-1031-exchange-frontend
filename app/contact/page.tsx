import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import {
  PRIMARY_CITY,
  PRIMARY_STATE_ABBR,
} from "@/lib/constants";
import site from "@/content/site.json";

export const metadata: Metadata = {
  title: "Contact | 1031 Exchange Intake",
  description:
    "Connect with the 1031 Exchange of San Diego intake desk for secure property matching support.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-white text-[#0F2A3D]">
      {/* Hero Section */}
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
              <li className="text-white">Contact</li>
            </ol>
          </nav>
          <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-4">Contact</p>
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
            Secure intake for your 1031 exchange.
          </h1>
          <p className="max-w-3xl text-lg text-white/80 leading-relaxed mb-8">
            Tell us about your timeline, relinquished sale, financing needs, and
            replacement goals. We focus on property identification and advisory
            coordination. We are not a Qualified Intermediary, but we coordinate
            with your QI, tax advisors, and lenders so everyone stays aligned.
          </p>
          <div className="flex flex-wrap gap-6 text-white/70">
            <a href={`tel:${site.phoneDigits}`} className="flex items-center gap-2 hover:text-white transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-white transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {site.email}
            </a>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{site.address}, {PRIMARY_CITY}, {PRIMARY_STATE_ABBR}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
            <ContactForm
              id="contact-form"
              subheading="Share your details below. We coordinate secure intake, property matching, and communication with Qualified Intermediaries, tax advisors, and lenders."
            />
            <div className="bg-white rounded-2xl p-8 border border-[#0F2A3D]/10 h-fit">
              <h2 className="text-2xl font-semibold text-[#0F2A3D] mb-4">
                Location & Hours
              </h2>
              <p className="text-sm text-[#0F2A3D]/60 mb-6">
                Headquarters in {PRIMARY_CITY}, {PRIMARY_STATE_ABBR}. Meetings by
                appointment only. Business hours: Mon-Fri 9am-5pm PST. Emergency support available for exchange deadlines.
              </p>
              <iframe
                title={`${PRIMARY_CITY} office map`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  `${site.address} ${PRIMARY_CITY} ${PRIMARY_STATE_ABBR}`,
                )}&output=embed`}
                className="w-full h-64 rounded-xl border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us Section */}
      <section className="py-20 border-t border-[#0F2A3D]/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-light text-[#0F2A3D]">Why Contact Us?</h2>
            <p className="mt-4 text-[#0F2A3D]/60 max-w-2xl mx-auto">
              We specialize in helping San Diego investors navigate 1031 exchanges with confidence
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0F2A3D] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0F2A3D] mb-2">45-Day Deadline Support</h3>
              <p className="text-[#0F2A3D]/60">
                We help you identify replacement properties within your critical 45-day identification window.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0F2A3D] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0F2A3D] mb-2">Secure Coordination</h3>
              <p className="text-[#0F2A3D]/60">
                We work alongside your QI, tax advisor, and lenders to ensure all parties stay aligned.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0F2A3D] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0F2A3D] mb-2">Nationwide Coverage</h3>
              <p className="text-[#0F2A3D]/60">
                We identify replacement properties across all 50 states to match your investment criteria.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Nude/Tan Color */}
      <section className="bg-[#E8DED1] py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-[#0F2A3D] mb-6">
            Ready to Start Your Exchange?
          </h2>
          <p className="text-lg text-[#0F2A3D]/70 mb-8">
            Fill out the form above or give us a call. We respond to all inquiries within one business day.
          </p>
          <a
            href={`tel:${site.phoneDigits}`}
            className="inline-block bg-[#0F2A3D] text-white px-10 py-4 rounded-lg text-sm font-medium hover:bg-[#1a3d54] transition"
          >
            Call {site.phone}
          </a>
        </div>
      </section>
    </div>
  );
}
