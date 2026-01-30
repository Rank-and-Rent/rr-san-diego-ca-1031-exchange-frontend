'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Property Types", href: "/property-types" },
  { label: "Locations", href: "/service-areas" },
  { label: "Contact Us", href: "/contact" },
];

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Check if we're on homepage
  const isHomepage = pathname === "/";

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const headerBg = isHomepage && !scrolled
    ? "bg-transparent"
    : "bg-[#0F2A3D]";

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${headerBg}`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
          {/* Logo - 1031 SD */}
          <Link href="/" className="flex items-center gap-2" aria-label="Home">
            <span className="text-white text-3xl md:text-4xl font-thin tracking-[0.1em]">1031</span>
            <span className="text-white/80 text-xl md:text-2xl font-light tracking-wide">SD</span>
          </Link>

          {/* Three-bar Hamburger Button - VISIBLE ON ALL SCREEN SIZES */}
          <button
            type="button"
            className="flex p-3 -mr-3 text-white touch-manipulation z-50"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="w-7 h-6 relative flex flex-col justify-between">
              <span
                className={`block h-0.5 w-7 bg-white transform transition-all duration-300 origin-center ${
                  mobileMenuOpen ? 'rotate-45 translate-y-[11px]' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-7 bg-white transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0 scale-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-7 bg-white transform transition-all duration-300 origin-center ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-[11px]' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Menu Overlay - Works on all screen sizes */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <nav
          className={`absolute top-0 right-0 w-full max-w-[320px] h-full bg-[#0F2A3D] shadow-2xl transform transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Spacer for header height */}
          <div className="h-20" />

          {/* Navigation Links */}
          <div className="px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`block py-5 text-xl font-light border-b border-white/10 transition ${
                  pathname === link.href || pathname.startsWith(link.href + '/')
                    ? 'text-white'
                    : 'text-white/80 hover:text-white'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact Info */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
            <p className="text-white/50 text-sm mb-3">Get in touch</p>
            <a href="tel:+16194800216" className="block text-white text-lg mb-2 hover:text-white/80">619-480-0216</a>
            <a href="mailto:contact@1031exchangeofsandiego.com" className="block text-white/70 text-sm hover:text-white">contact@1031exchangeofsandiego.com</a>
          </div>
        </nav>
      </div>
    </>
  );
}
