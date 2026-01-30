import Link from "next/link";
import site from "@/content/site.json";
import { servicesData, locationsData } from "@/data";
import { PRIMARY_CITY, PRIMARY_STATE_ABBR } from "@/lib/constants";

const sortedServices = [...servicesData].sort((a, b) =>
  a.name.localeCompare(b.name),
);
const serviceMidpoint = Math.ceil(sortedServices.length / 2);
const serviceColumns = [
  sortedServices.slice(0, serviceMidpoint),
  sortedServices.slice(serviceMidpoint),
];

const sortedLocations = [...locationsData].sort((a, b) => {
  const priorityA = a.priority ?? Number.MAX_SAFE_INTEGER;
  const priorityB = b.priority ?? Number.MAX_SAFE_INTEGER;
  if (priorityA !== priorityB) {
    return priorityA - priorityB;
  }
  return a.name.localeCompare(b.name);
});
const locationMidpoint = Math.ceil(sortedLocations.length / 2);
const serviceAreaColumns = [
  sortedLocations.slice(0, locationMidpoint),
  sortedLocations.slice(locationMidpoint),
];

export function SiteFooter() {
  return (
    <footer className="bg-[#0F2A3D] text-white">
      <div className="max-w-7xl mx-auto px-4 grid gap-10 py-16 lg:grid-cols-3">
        <div>
          <p className="text-xs uppercase tracking-widest text-white/50">
            {site.company}
          </p>
          <p className="mt-2 text-2xl font-semibold text-white">
            1031 Exchange of {PRIMARY_CITY}
          </p>
          <p className="mt-4 text-sm text-white/60">
            {PRIMARY_CITY}, {PRIMARY_STATE_ABBR}
          </p>
          <p className="mt-1 text-sm text-white/60">Phone: {site.phone}</p>
          <p className="mt-1 text-sm text-white/60">Email: {site.email}</p>
          <p className="mt-2 text-sm text-white/60">Hours: Mon-Fri 9am-5pm PST</p>
          <div className="mt-8">
            <p className="text-sm font-semibold text-white mb-3">Map</p>
            <div className="overflow-hidden rounded-lg">
              <iframe
                title={`${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} map`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  `${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}`,
                )}&output=embed`}
                className="h-40 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-white mb-4">Services</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {serviceColumns.map((column, columnIndex) => (
              <ul key={`services-${columnIndex}`} className="space-y-2 text-sm text-white/60">
                {column.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={service.route}
                      className="hover:text-white transition"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <Link
            href="/services"
            className="mt-4 inline-flex text-sm font-medium text-white/80 hover:text-white"
          >
            View all {servicesData.length} services →
          </Link>
        </div>

        <div>
          <p className="text-sm font-semibold text-white mb-4">Service Areas</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {serviceAreaColumns.map((column, columnIndex) => (
              <ul
                key={`service-areas-${columnIndex}`}
                className="space-y-2 text-sm text-white/60"
              >
                {column.map((location) => (
                  <li key={location.slug}>
                    <Link
                      href={location.route}
                      className="hover:text-white transition"
                    >
                      {location.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <Link
            href="/service-areas"
            className="mt-4 inline-flex text-sm font-medium text-white/80 hover:text-white"
          >
            View all {locationsData.length} service areas →
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col gap-4 py-6 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-6 text-sm">
            <Link href="/services" className="hover:text-white">Services</Link>
            <Link href="/service-areas" className="hover:text-white">Service Areas</Link>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <Link href="/tools" className="hover:text-white">Tools</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
          </div>
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {site.company}. All rights reserved.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6 text-xs text-white/40 space-y-1">
          <p>This site helps investors identify potential replacement properties for Section 1031 exchanges.</p>
          <p>This site is not a Qualified Intermediary, law firm, broker, or CPA.</p>
          <p>Users should consult a Qualified Intermediary and tax advisor before acting.</p>
        </div>
      </div>
    </footer>
  );
}
