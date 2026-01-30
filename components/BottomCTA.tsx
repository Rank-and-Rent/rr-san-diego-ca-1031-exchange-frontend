import Link from "next/link";
import site from "@/content/site.json";

interface BottomCTAProps {
  projectType?: string;
  heading?: string;
  subheading?: string;
}

export default function BottomCTA({
  projectType,
  heading = "Ready to stay ahead of the 45-day clock?",
  subheading = "Connect with our intake desk for curated replacement property drops, QI coordination, and lender-ready packages.",
}: BottomCTAProps) {
  const contactHref = projectType
    ? `/contact?projectType=${encodeURIComponent(projectType)}`
    : "/contact#contact-form";

  return (
    <section className="bg-[#F8F9FA] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-start gap-6 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-gray-400">
            Next steps
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-[#0F2A3D]">
            {heading}
          </h2>
          <p className="mt-2 text-sm text-gray-600">{subheading}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={`tel:${site.phoneDigits}`}
            className="bg-[#0F2A3D] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#1a3d54] transition"
          >
            Call {site.phone}
          </a>
          <Link
            href={contactHref}
            className="border border-[#0F2A3D] text-[#0F2A3D] px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#0F2A3D] hover:text-white transition"
          >
            Talk to intake
          </Link>
        </div>
      </div>
    </section>
  );
}
