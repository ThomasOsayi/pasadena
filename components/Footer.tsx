import Link from "next/link";

const footerColumns = [
  {
    heading: "Services",
    links: [
      { label: "Construction", href: "#services" },
      { label: "Interior Design", href: "#services" },
      { label: "Cabinetry", href: "#services" },
      { label: "Painting", href: "#services" },
      { label: "Roofing", href: "#services" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Our Clients", href: "#clients" },
      { label: "Portfolio", href: "#projects" },
      { label: "Eco-Friendly", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-burgundy-deep text-cream pt-20 pb-8">
      <div className="container-site">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 lg:gap-15 pb-14 border-b border-cream/15">
          {/* Brand column */}
          <div>
            <Link href="#home" className="flex items-center gap-3.5">
              <div className="relative w-11 h-11 bg-burgundy text-cream grid place-items-center font-display text-[22px] font-medium border border-burgundy-deep">
                P
                <span className="absolute inset-[3px] border border-cream/30 pointer-events-none" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-[22px] font-medium tracking-[0.02em] text-cream">
                  Pasadena
                </span>
                <span className="text-[9.5px] tracking-[0.22em] uppercase text-cream/60 mt-1">
                  Construction & Interiors · Est. 1971
                </span>
              </div>
            </Link>
            <p className="mt-6 text-cream/65 text-sm leading-[1.7] max-w-[320px]">
              Construction · Renovation · Restoration. Large and small jobs equally
              considered. Family owned and operated since 1971.
            </p>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h5 className="text-[11px] tracking-[0.16em] uppercase text-brass-light mb-6 font-semibold">
                {col.heading}
              </h5>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-cream/75 text-sm hover:text-brass-light transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div>
            <h5 className="text-[11px] tracking-[0.16em] uppercase text-brass-light mb-6 font-semibold">
              Contact
            </h5>
            <ul className="flex flex-col gap-3 text-cream/75 text-sm">
              <li>135 N. Marengo Ave</li>
              <li>Pasadena, CA 91101</li>
              <li>
                <a
                  href="tel:6263569600"
                  className="hover:text-brass-light transition-colors duration-200"
                >
                  626.356.9600
                </a>
              </li>
              <li className="text-cream/55">626.356.9625 (fax)</li>
              <li>
                <a
                  href="mailto:admin@pasadenainteriors.com"
                  className="hover:text-brass-light transition-colors duration-200 break-all"
                >
                  admin@pasadenainteriors.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-cream/50">
          <div>
            © 1971–{currentYear} Pasadena Construction & Interiors. All rights reserved.
          </div>
          <div className="flex gap-6">
            <span>CSLB License #421907</span>
            <span>Bonded · Insured</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
