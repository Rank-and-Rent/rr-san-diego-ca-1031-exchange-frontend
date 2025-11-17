import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { IdentificationRulesChecker } from "@/components/tools/IdentificationRulesChecker";
import { SITE_URL, PRIMARY_CITY } from "@/lib/constants";

const canonicalUrl = `${SITE_URL}/tools/identification-rules-checker`;

export const metadata: Metadata = {
  title: "Identification Rules Checker | 1031 Exchange San Diego",
  description:
    "Validate the three-property, 200 percent, and 95 percent identification rules for your San Diego 1031 exchange in minutes.",
  keywords:
    "identification rules checker, 200 percent rule, three property rule, 95 percent rule, San Diego",
  openGraph: {
    title: "Identification Rules Checker | 1031 Exchange San Diego",
    description:
      "Check whether your property list satisfies the 3-property, 200%, or 95% identification tests for a San Diego 1031 exchange.",
    type: "website",
    url: canonicalUrl,
  },
  alternates: {
    canonical: canonicalUrl,
  },
};

export default function IdentificationRulesPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Tools", href: "/tools" },
    {
      label: "Identification Rules Checker",
      href: "/tools/identification-rules-checker",
    },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${SITE_URL}${item.href === "/" ? "" : item.href}`,
    })),
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Identification Rules Checker | 1031 Exchange San Diego",
    url: canonicalUrl,
    description:
      "Interactive checker for verifying 3-property, 200 percent, and 95 percent identification compliance.",
  };

  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "1031 Identification Rules Checker",
    applicationCategory: "FinancialCalculator",
    operatingSystem: "Web",
    url: canonicalUrl,
    description:
      "Evaluate whether your 1031 identification list satisfies IRS identification rules.",
  };

  return (
    <>
      <div className="bg-paper text-ink">
        <section className="border-b border-outline/30 bg-panel/20 py-12">
          <div className="container space-y-4">
            <Breadcrumbs items={breadcrumbItems} />
            <p className="text-xs uppercase tracking-[0.35em] text-primary">
              Checker
            </p>
            <h1 className="text-4xl font-semibold text-heading">
              Identification Rules Checker
            </h1>
            <p className="max-w-3xl text-base text-ink/80">
              Confirm which identification safe harbor your exchange currently
              satisfies. Track the property count, total value identified, and the
              portion you expect to close so you can stay compliant in {PRIMARY_CITY}.
            </p>
          </div>
        </section>

        <section className="container space-y-8 py-12">
          <IdentificationRulesChecker />

          <div className="rounded-2xl border border-outline/40 bg-panel/60 p-6">
            <p className="text-sm text-ink/70">
              <strong className="text-heading">Educational content only.</strong> Not tax, legal, or
              investment advice. Results are estimates only. Consult a qualified
              intermediary and tax advisor before making decisions.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-primary">
              Related resources
            </p>
            <h2 className="text-3xl font-semibold text-heading">
              Related Resources
            </h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/nnn-replacement-property-identification"
                  className="text-primary hover:underline"
                >
                  NNN Replacement Property Identification
                </Link>
              </li>
              <li>
                <Link
                  href="/services/three-property-rule-strategy"
                  className="text-primary hover:underline"
                >
                  Three Property Rule Strategy
                </Link>
              </li>
              <li>
                <Link
                  href="/services/two-hundred-percent-rule-modeling"
                  className="text-primary hover:underline"
                >
                  Two Hundred Percent Rule Modeling
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </div>

      <Script
        id="identification-rules-breadcrumb"
        type="application/ld+json"
      >
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="identification-rules-webpage" type="application/ld+json">
        {JSON.stringify(webPageSchema)}
      </Script>
      <Script id="identification-rules-tool" type="application/ld+json">
        {JSON.stringify(toolSchema)}
      </Script>
    </>
  );
}


