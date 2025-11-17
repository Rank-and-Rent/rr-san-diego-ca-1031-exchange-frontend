'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import site from "@/content/site.json";
import { servicesData, locationsData } from "@/data";
import { exchangeTools } from "@/data/tools";

type MenuKey = "services" | "serviceAreas" | "tools" | null;

const primaryLinks = [
  { label: "About", href: "/about" },
  { label: "Property Types", href: "/property-types" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact#contact-form" },
];

const prioritizedServiceSlugs = [
  "nnn-replacement-property-identification",
  "stnl-retail-list-san-diego",
  "industrial-net-lease-scouting",
  "medical-office-1031-matching",
  "self-storage-exchange-targets",
  "reverse-exchange-readiness-san-diego",
  "timeline-assurance-program",
  "rent-roll-and-t12-validation",
];

const prioritizedServices = prioritizedServiceSlugs
  .map((slug) => servicesData.find((service) => service.slug === slug))
  .filter((service): service is (typeof servicesData)[number] =>
    Boolean(service),
  );

const supplementalServices = servicesData.filter(
  (service) => !prioritizedServices.some((item) => item.slug === service.slug),
);

const serviceMenu = [...prioritizedServices, ...supplementalServices].slice(
  0,
  8,
);

const locationMenu = [...locationsData]
  .sort((a, b) => {
    const priorityA = a.priority ?? Number.MAX_SAFE_INTEGER;
    const priorityB = b.priority ?? Number.MAX_SAFE_INTEGER;
    if (priorityA !== priorityB) {
      return priorityA - priorityB;
    }
    return a.name.localeCompare(b.name);
  })
  .slice(0, 8);

const toolMenu = exchangeTools.map((tool) => ({
  label: tool.name,
  href: tool.href,
}));

export function SiteHeader() {
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-outline bg-panel/80 backdrop-blur">
      <div className="container flex items-center justify-between gap-4 py-4">
        <Link
          href="/"
          className="flex items-center"
          aria-label="1031 Exchange of San Diego homepage"
        >
          <Image
            src="/1031-exchange-of-san-diego-ca-logo.png"
            alt="1031 Exchange of San Diego"
            width={120}
            height={120}
            className="h-auto w-auto max-h-16 md:max-h-20"
          />
        </Link>

        <button
          type="button"
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg text-ink/80 hover:text-heading transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span
            className={`block h-0.5 w-6 bg-current transition-all ${
              mobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition-all ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition-all ${
              mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

        <nav
          className={`${
            mobileMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row md:flex-1 md:items-center md:justify-end gap-4 text-sm absolute md:relative top-full left-0 right-0 md:top-auto md:left-auto md:right-auto bg-panel border-b md:border-b-0 border-outline md:bg-transparent p-4 md:p-0`}
        >
          <MenuButton
            label="Services"
            items={serviceMenu.map((service) => ({
              label: service.name,
              href: service.route,
            }))}
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            menuKey="services"
            viewAllHref="/services"
            viewAllLabel={`View all ${servicesData.length} services`}
            onItemClick={() => setMobileMenuOpen(false)}
          />
          <MenuButton
            label="Service Areas"
            items={locationMenu.map((location) => ({
              label: location.name,
              href: location.route,
            }))}
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            menuKey="serviceAreas"
            viewAllHref="/service-areas"
            viewAllLabel={`View all ${locationsData.length} service areas`}
            onItemClick={() => setMobileMenuOpen(false)}
          />
          <MenuButton
            label="Tools"
            items={toolMenu}
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            menuKey="tools"
            viewAllHref="/tools"
            viewAllLabel="View all tools"
            onItemClick={() => setMobileMenuOpen(false)}
          />
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-ink/80 transition hover:text-heading py-2 md:py-0"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

interface MenuButtonProps {
  label: string;
  items: { label: string; href: string }[];
  openMenu: MenuKey;
  setOpenMenu: (key: MenuKey) => void;
  menuKey: Exclude<MenuKey, null>;
  viewAllHref: string;
  viewAllLabel: string;
  onItemClick?: () => void;
}

function MenuButton({
  label,
  items,
  openMenu,
  setOpenMenu,
  menuKey,
  viewAllHref,
  viewAllLabel,
  onItemClick,
}: MenuButtonProps) {
  const isOpen = openMenu === menuKey;
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleOpen = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setOpenMenu(menuKey);
  };

  const handleClose = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
    }
    closeTimeout.current = setTimeout(() => {
      setOpenMenu(null);
    }, 150);
  };

  const handleItemClick = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
    }
    setOpenMenu(null);
    onItemClick?.();
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
      onBlur={(event) => {
        const nextTarget = event.relatedTarget as Node | null;
        if (!nextTarget || !event.currentTarget.contains(nextTarget)) {
          setOpenMenu(null);
        }
      }}
    >
      <button
        type="button"
        className="flex items-center gap-1 rounded-full px-3 py-2 text-ink/80 transition hover:text-heading focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary w-full md:w-auto justify-between md:justify-start"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onFocus={handleOpen}
        onClick={() => {
          if (isOpen) {
            setOpenMenu(null);
          } else {
            handleOpen();
          }
        }}
      >
        {label}
        <span aria-hidden="true" className="text-primary">
          ▾
        </span>
      </button>
      {isOpen ? (
        <div className="absolute md:absolute left-0 right-0 md:right-auto md:min-w-[220px] mt-2 rounded-2xl border border-outline/40 bg-panel/90 p-4 shadow-xl z-50">
          <ul className="space-y-2 text-sm">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-2 py-1 text-ink/80 transition hover:bg-outline/20 hover:text-heading focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  onClick={handleItemClick}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={viewAllHref}
            className="mt-3 inline-flex text-xs font-semibold uppercase tracking-wide text-primary hover:underline"
            onClick={handleItemClick}
          >
            {viewAllLabel}
          </Link>
        </div>
      ) : null}
    </div>
  );
}

