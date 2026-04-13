type Service = {
    num: string;
    title: string;
    description: string;
    icon: React.ReactNode;
  };
  
  const services: Service[] = [
    {
      num: "01",
      title: "Construction & Renovation",
      description:
        "New construction, additions, and full-scale renovations for residential, commercial, and historic properties.",
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 42V18l18-12 18 12v24" />
          <path d="M16 42V26h16v16" />
        </svg>
      ),
    },
    {
      num: "02",
      title: "Interior Design",
      description:
        "Commercial and residential space design, from concept to completion, tailored to your aesthetic and function.",
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="6" y="6" width="36" height="36" />
          <path d="M6 18h36M18 6v36" />
        </svg>
      ),
    },
    {
      num: "03",
      title: "Custom Cabinetry",
      description:
        "Hand-built cabinets, built-ins, and millwork crafted in our own shop by skilled woodworkers.",
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M8 42h32M12 42V20l12-10 12 10v22" />
          <rect x="20" y="28" width="8" height="14" />
        </svg>
      ),
    },
    {
      num: "04",
      title: "Painting & Finishes",
      description:
        "Interior and exterior painting using only top-tier products from Dunn-Edwards, Sherwin-Williams, and Benjamin Moore.",
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14 6L6 14l28 28 8-8z" />
          <path d="M14 22l-4 4 8 8 4-4" />
        </svg>
      ),
    },
    {
      num: "05",
      title: "Plumbing & Electrical",
      description:
        "Licensed plumbing and electrical services — installation, repair, code compliance, and modernization.",
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M24 6v12M24 30v12M6 24h12M30 24h12" />
          <circle cx="24" cy="24" r="6" />
        </svg>
      ),
    },
    {
      num: "06",
      title: "Floor Covering",
      description:
        "Hardwood, tile, stone, carpet, and specialty flooring sourced from Shaw, Pergo, Stanton, and Mohawk.",
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="6" y="6" width="36" height="36" />
          <path d="M6 18h36M6 30h36M18 6v36M30 6v36" />
        </svg>
      ),
    },
    {
      num: "07",
      title: "Roofing & Water Damage",
      description:
        "Roof repair, replacement, and emergency water damage restoration for residential and commercial properties.",
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M24 6c-8 8-12 16-12 22a12 12 0 0 0 24 0c0-6-4-14-12-22z" />
        </svg>
      ),
    },
    {
      num: "08",
      title: "Landscape & Exterior",
      description:
        "Concrete, masonry, exterior decorative structures, and landscape design that completes the picture.",
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 42h36M12 42V18M36 42V18M6 18l18-12 18 12" />
          <path d="M20 42V28h8v14" />
        </svg>
      ),
    },
    {
      num: "09",
      title: "Janitorial Services",
      description:
        "Commercial janitorial and post-construction cleanup. Because the job isn't done until it's spotless.",
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="24" cy="24" r="18" />
          <path d="M16 24l6 6 12-12" />
        </svg>
      ),
    },
  ];
  
  export default function Services() {
    return (
      <section
        id="services"
        className="bg-cream py-24 lg:py-32 border-t border-line-soft"
      >
        <div className="container-site">
          {/* Header */}
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-15 items-end mb-20">
            <div>
              <span className="eyebrow">What We Do</span>
              <h2 className="font-display text-[clamp(40px,4.5vw,64px)] font-light mt-6">
                Every trade,
                <br />
                under <em className="italic text-burgundy font-normal">one roof</em>.
              </h2>
            </div>
            <p className="text-ink-soft text-base leading-[1.75] max-w-[520px]">
              From ground-up construction to the final coat of paint, we manage every phase
              of your project with our own in-house craftsmen. No subcontractor chains. No
              finger-pointing. Just one team, one timeline, one standard.
            </p>
          </div>
  
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-line">
            {services.map((service) => (
              <div
                key={service.num}
                className="group p-9 lg:px-9 lg:pt-11 lg:pb-12 bg-cream border-r border-b border-line transition-colors duration-300 hover:bg-paper cursor-pointer"
              >
                <div className="font-display text-sm italic text-ink-muted mb-7 group-hover:text-burgundy transition-colors duration-300">
                  {service.num} / 09
                </div>
  
                <div className="w-12 h-12 mb-6 text-burgundy">{service.icon}</div>
  
                <h3 className="font-display text-2xl font-normal mb-3.5 leading-tight">
                  {service.title}
                </h3>
  
                <p className="text-ink-soft text-[14.5px] leading-[1.65] mb-6">
                  {service.description}
                </p>
  
                <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-burgundy">
                  Learn More
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }