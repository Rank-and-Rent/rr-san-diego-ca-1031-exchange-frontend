import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import BottomCTA from "@/components/BottomCTA";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Use",
  alternates: {
    canonical: "/terms",
  },
};

const breadcrumbs = [
  { label: "Home", href: `${SITE_URL}/` },
  { label: "Terms", href: `${SITE_URL}/terms` },
];

export default function TermsPage() {
  return (
    <div className="bg-paper text-ink">
      <section className="container space-y-8 py-12">
        <div className="space-y-4">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="text-3xl font-semibold text-heading">Terms of Use</h1>
          <p className="text-sm text-ink/80">
            By using this site you agree to the following expectations. We
            update these terms periodically; continued use confirms acceptance of
            the latest version.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-outline/40 bg-panel/40 p-6">
            <h2 className="text-xl font-semibold text-heading">
              Educational content only
            </h2>
            <p className="mt-3 text-sm text-ink/80">
              Materials published here are informational. They do not constitute
              legal, tax, securities, or brokerage advice. Always consult your
              Qualified Intermediary, attorney, CPA, and lender before taking
              action on an exchange.
            </p>
          </article>
          <article className="rounded-3xl border border-outline/40 bg-panel/40 p-6">
            <h2 className="text-xl font-semibold text-heading">
              Acceptable use
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-ink/80">
              <li>Only upload documents you are authorized to share</li>
              <li>Do not probe the site for vulnerabilities or interfere with access</li>
              <li>Do not misrepresent your identity or exchange intent</li>
              <li>Respect confidentiality when we share curated opportunities</li>
            </ul>
          </article>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-outline/40 bg-panel/40 p-6">
            <h2 className="text-xl font-semibold text-heading">
              Communication consent
            </h2>
            <p className="mt-3 text-sm text-ink/80">
              Submitting a form or booking a call authorizes us to respond via
              email, phone, or SMS regarding your exchange. You may opt out of
              non-critical updates at any time.
            </p>
          </article>
          <article className="rounded-3xl border border-outline/40 bg-panel/40 p-6">
            <h2 className="text-xl font-semibold text-heading">
              Limitation of liability
            </h2>
            <p className="mt-3 text-sm text-ink/80">
              We are not liable for losses arising from reliance on site content
              or from interactions with third parties introduced through the
              exchange process. Your sole remedy for dissatisfaction with the
              site is to discontinue use.
            </p>
          </article>
        </div>
      </section>
      <BottomCTA heading="Need clarity on your next exchange step?" />
    </div>
  );
}

