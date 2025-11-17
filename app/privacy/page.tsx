import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import BottomCTA from "@/components/BottomCTA";
import site from "@/content/site.json";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: {
    canonical: "/privacy",
  },
};

const breadcrumbs = [
  { label: "Home", href: `${SITE_URL}/` },
  { label: "Privacy", href: `${SITE_URL}/privacy` },
];

export default function PrivacyPage() {
  return (
    <div className="bg-paper text-ink">
      <section className="container space-y-8 py-12">
        <div className="space-y-4">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="text-3xl font-semibold text-heading">
            Privacy Policy
          </h1>
          <p className="text-sm text-ink/80">
            We protect exchange data with the same rigor we apply to deal
            timelines. This policy explains what we collect, how it’s used, and
            the controls you maintain.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-outline/40 bg-panel/40 p-6">
            <h2 className="text-xl font-semibold text-heading">
              Information we collect
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-ink/80">
              <li>Contact details shared through forms or phone calls</li>
              <li>
                Exchange context such as timelines, equity, debt, and desired
                property characteristics
              </li>
              <li>
                Files voluntarily uploaded for underwriting (rent rolls, leases,
                diligence memos, etc.)
              </li>
              <li>
                Basic usage analytics to improve site performance (no ad
                tracking pixels)
              </li>
            </ul>
          </article>

          <article className="rounded-3xl border border-outline/40 bg-panel/40 p-6">
            <h2 className="text-xl font-semibold text-heading">
              How we use your information
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-ink/80">
              <li>Responding to intake requests and scheduling consultations</li>
              <li>
                Coordinating with approved advisors such as QIs, lenders, and
                attorneys
              </li>
              <li>
                Sending milestone reminders, property drops, or diligence
                summaries
              </li>
              <li>
                Meeting legal requirements or defending our firm if necessary
              </li>
            </ul>
          </article>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-outline/40 bg-panel/40 p-6">
            <h2 className="text-xl font-semibold text-heading">
              Data handling & retention
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-ink/80">
              <li>Files live in encrypted, access-controlled workspaces</li>
              <li>
                Only team members assigned to your exchange can view your
                records
              </li>
              <li>
                We retain engagement files for regulatory and audit purposes,
                usually 3–5 years
              </li>
              <li>
                You may request deletion after obligations are satisfied unless
                law requires retention
              </li>
            </ul>
          </article>

          <article className="rounded-3xl border border-outline/40 bg-panel/40 p-6">
            <h2 className="text-xl font-semibold text-heading">
              Your choices
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-ink/80">
              <li>
                Opt out of non-critical updates by replying “unsubscribe” to any
                email
              </li>
              <li>
                Request a summary of stored information or corrections to
                inaccurate records
              </li>
              <li>
                Nominate or remove advisors from shared workspaces at any point
              </li>
              <li>
                Ask questions by emailing {site.email ?? "contact@1031exchangeofsandiego.com"}
                {" "}or calling {site.phone}
              </li>
            </ul>
          </article>
        </div>
      </section>
      <BottomCTA heading="Need help with a compliant intake plan?" />
    </div>
  );
}

