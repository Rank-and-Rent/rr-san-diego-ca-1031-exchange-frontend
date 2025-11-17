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
    <footer className="border-t border-outline bg-panel">
      <div className="container grid gap-10 py-12 lg:grid-cols-3">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-primary">
            {site.company}
          </p>
          <p className="mt-2 text-2xl font-semibold text-heading">
            1031 Exchange of {PRIMARY_CITY}
          </p>
          <p className="mt-3 text-sm text-ink/70">
            {PRIMARY_CITY}, {PRIMARY_STATE_ABBR}
          </p>
          <p className="mt-1 text-sm text-ink/70">Phone: {site.phone}</p>
          <p className="mt-1 text-sm text-ink/70">Email: {site.email}</p>
          <p className="mt-2 text-sm text-ink/70">Hours: Mon-Fri 9am-5pm PST</p>
          <div className="mt-6 space-y-3">
            <p className="text-sm font-semibold text-heading">Map</p>
            <div className="overflow-hidden rounded-2xl border border-outline/40">
              <iframe
                title={`${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR} map`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  `${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}`,
                )}&output=embed`}
                className="h-48 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-heading">Services</p>
          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            {serviceColumns.map((column, columnIndex) => (
              <ul key={`services-${columnIndex}`} className="space-y-2 text-sm text-ink/80">
                {column.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={service.route}
                      className="transition hover:text-primary"
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
            className="mt-4 inline-flex text-sm font-semibold text-primary hover:underline"
          >
            View all {servicesData.length} services
          </Link>
        </div>

        <div>
          <p className="text-sm font-semibold text-heading">Service Areas</p>
          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            {serviceAreaColumns.map((column, columnIndex) => (
              <ul
                key={`service-areas-${columnIndex}`}
                className="space-y-2 text-sm text-ink/80"
              >
                {column.map((location) => (
                  <li key={location.slug}>
                    <Link
                      href={location.route}
                      className="transition hover:text-primary"
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
            className="mt-4 inline-flex text-sm font-semibold text-primary hover:underline"
          >
            View all {locationsData.length} service areas
          </Link>
        </div>
      </div>
      <div className="border-t border-outline/40">
        <div className="container flex flex-col gap-4 py-6 text-sm text-ink/70 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/services" className="hover:text-primary">
              Services
            </Link>
            <Link href="/service-areas" className="hover:text-primary">
              Service Areas
            </Link>
            <Link href="/blog" className="hover:text-primary">
              Blog
            </Link>
            <Link href="/tools" className="hover:text-primary">
              Tools
            </Link>
            <Link href="/contact#contact-form" className="hover:text-primary">
              Contact
            </Link>
            <Link href="/about" className="hover:text-primary">
              About
            </Link>
            <Link href="/privacy" className="hover:text-primary">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-primary">
              Terms
            </Link>
            <Link href="/sitemap.xml" className="hover:text-primary">
              Sitemap XML
            </Link>
          </div>
          <p className="text-xs text-ink/60">
            © {new Date().getFullYear()} {site.company}. All rights reserved.
          </p>
        </div>
      </div>
      <div className="border-t border-outline/40 bg-panel/80">
        <div className="container space-y-2 py-6 text-xs text-ink/60">
          <p>
            This site helps investors identify potential replacement properties
            for Section 1031 exchanges.
          </p>
          <p>
            This site is not a Qualified Intermediary, law firm, broker, or CPA.
          </p>
          <p>
            Users should consult a Qualified Intermediary and tax advisor before
            acting.
          </p>
        </div>
      </div>
    </footer>
  );
}

