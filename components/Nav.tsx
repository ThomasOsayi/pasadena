"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/clients", label: "Clients" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-paper border-b border-line sticky top-0 z-50 backdrop-blur-md">
      <div className="container-site flex items-center justify-between py-5">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-3.5 group">
          <div className="relative w-11 h-11 bg-burgundy text-cream grid place-items-center font-display text-[22px] font-medium border border-burgundy-deep">
            P
            <span className="absolute inset-[3px] border border-cream/30 pointer-events-none" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-[22px] font-medium tracking-[0.02em] text-ink">
              Pasadena
            </span>
            <span className="text-[9.5px] tracking-[0.22em] uppercase text-ink-muted mt-1">
              Construction & Interiors · Est. 1971
            </span>
          </div>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden lg:flex gap-9 items-center">
          {navLinks.map((link) => {
            const isActive = link.href === pathname;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[13.5px] font-medium tracking-wide py-2 relative transition-colors duration-200 hover:text-burgundy ${
                  isActive ? "text-burgundy" : "text-ink-soft"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute left-0 right-0 bottom-0 h-[1.5px] bg-burgundy" />
                )}
              </Link>
            );
          })}
        </div>

        {/* CTA button (desktop) */}
        <Link
          href="#contact"
          className="hidden lg:inline-flex items-center gap-2.5 px-5 py-3 text-[12.5px] font-semibold tracking-widest uppercase bg-burgundy text-cream border border-burgundy hover:bg-burgundy-deep hover:border-burgundy-deep hover:-translate-y-px hover:shadow-md transition-all duration-250"
        >
          Request Estimate
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-ink"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-[1.5px] bg-current transition-transform duration-300 ${
              mobileOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-6 h-[1.5px] bg-current transition-opacity duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-[1.5px] bg-current transition-transform duration-300 ${
              mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-line bg-paper">
          <div className="container-site py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-[15px] font-medium text-ink-soft hover:text-burgundy border-b border-line-soft last:border-b-0"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2.5 px-5 py-3.5 text-[12.5px] font-semibold tracking-widest uppercase bg-burgundy text-cream"
            >
              Request Estimate
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}