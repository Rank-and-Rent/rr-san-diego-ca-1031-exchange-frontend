'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Property Types", href: "/property-types" },
  { label: "Locations", href: "/service-areas" },
  { label: "Contact Us", href: "/contact" },
];

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#0F2A3D]">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
        {/* Beautiful Logo */}
        <Link href="/" className="flex items-center gap-3" aria-label="Home">
          <div className="flex flex-col items-center leading-none">
            <span className="text-white text-3xl font-thin tracking-[0.2em]">1031</span>
            <div className="flex items-center gap-1.5">
              <div className="h-[1px] w-4 bg-white/50" />
              <span className="text-white/90 text-[10px] tracking-[0.3em] uppercase">Exchange</span>
              <div className="h-[1px] w-4 bg-white/50" />
            </div>
          </div>
        </Link>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-white/90 text-sm font-medium hover:text-white transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Book a Meeting Button */}
        <Link
          href="/contact#contact-form"
          className="hidden lg:inline-flex bg-transparent border border-white/30 text-white px-6 py-2.5 rounded text-sm font-medium hover:bg-white hover:text-[#0F2A3D] transition"
        >
          Book a Meeting
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden p-2 text-white"
          aria-label="Toggle menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="lg:hidden bg-[#0F2A3D] border-t border-white/10 px-4 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block text-white/90 py-3 text-sm font-medium hover:text-white transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact#contact-form"
            className="block mt-4 text-center bg-white text-[#0F2A3D] px-5 py-3 rounded text-sm font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book a Meeting
          </Link>
        </nav>
      )}
    </header>
  );
}
