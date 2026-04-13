type Service = {
    title: string;
    description: string;
    tag: string;
    icon: React.ReactNode;
  };
  
  type Bucket = {
    numeral: string;
    label: string;
    emphasis: string;
    suffix: string;
    services: Service[];
    columns: 3 | 4;
  };
  
  /* ============================================
     SVG ICON COMPONENTS (inline, no library)
     ============================================ */
  const SpaceDesignIcon = (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="6" y="6" width="36" height="36" />
      <path d="M6 18h36M18 6v36" />
    </svg>
  );
  
  const CabinetIcon = (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8 42h32M12 42V20l12-10 12 10v22" />
      <rect x="20" y="28" width="8" height="14" />
    </svg>
  );
  
  const MasonryIcon = (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 42h36M12 42V18M36 42V18M6 18l18-12 18 12" />
    </svg>
  );
  
  const ExteriorStructIcon = (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 42V18l18-12 18 12v24" />
      <path d="M16 42V26h16v16" />
    </svg>
  );
  
  const PaintIcon = (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M14 6L6 14l28 28 8-8z" />
      <path d="M14 22l-4 4 8 8 4-4" />
    </svg>
  );
  
  const PlumbingElectricIcon = (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M24 6v12M24 30v12M6 24h12M30 24h12" />
      <circle cx="24" cy="24" r="6" />
    </svg>
  );
  
  const FloorIcon = (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="6" y="6" width="36" height="36" />
      <path d="M6 18h36M6 30h36M18 6v36M30 6v36" />
    </svg>
  );
  
  const HvacIcon = (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M24 4c-4 0-7 3-7 7v2a7 7 0 0 0 14 0v-2c0-4-3-7-7-7z" />
      <path d="M24 20v24M14 30h20" />
    </svg>
  );
  
  const LandscapeIcon = (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8 42h32M12 42V20l12-10 12 10v22" />
      <path d="M12 20l12 10 12-10" />
    </svg>
  );
  
  const RoofWaterIcon = (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M24 6c-8 8-12 16-12 22a12 12 0 0 0 24 0c0-6-4-14-12-22z" />
    </svg>
  );
  
  const JanitorialIcon = (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="24" cy="24" r="18" />
      <path d="M16 24l6 6 12-12" />
    </svg>
  );
  
  const AnyJobIcon = (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 24l8-8 12 12 16-16" strokeLinecap="round" />
      <path d="M28 12h12v12" />
    </svg>
  );
  
  /* ============================================
     BUCKET DATA
     ============================================ */
  const buckets: Bucket[] = [
    {
      numeral: "i.",
      label: "",
      emphasis: "Build",
      suffix: "— Structural & Construction",
      columns: 4,
      services: [
        {
          title: "Commercial & Residential Space Design",
          description:
            "Full-scope interior and exterior space design for commercial, residential, and institutional properties. Concept to completion.",
          tag: "Design · Planning",
          icon: SpaceDesignIcon,
        },
        {
          title: "Custom Cabinets & Built-Ins",
          description:
            "Hand-built cabinetry, built-in millwork, shelving, and custom storage solutions. Crafted in-shop by our own finish carpenters.",
          tag: "Carpentry · Millwork",
          icon: CabinetIcon,
        },
        {
          title: "Concrete, Stone & Masonry Repair",
          description:
            "Structural concrete work, stone repair, brick and block masonry for foundations, walls, patios, and architectural features.",
          tag: "Masonry · Structural",
          icon: MasonryIcon,
        },
        {
          title: "Exterior Decorative Structures",
          description:
            "Pergolas, trellises, gazebos, decorative facades, and exterior architectural elements for residential and commercial properties.",
          tag: "Exterior · Custom",
          icon: ExteriorStructIcon,
        },
      ],
    },
    {
      numeral: "ii.",
      label: "",
      emphasis: "Finish",
      suffix: "— Interiors & Systems",
      columns: 4,
      services: [
        {
          title: "Painting — Interior & Exterior",
          description:
            "Full-service painting using premium products from Dunn-Edwards, Sherwin-Williams, and Benjamin Moore. Specialty finishes available.",
          tag: "Dunn-Edwards · Sherwin-Williams",
          icon: PaintIcon,
        },
        {
          title: "Plumbing & Electrical",
          description:
            "Licensed plumbing and electrical installation, repair, and modernization. Code compliance, fixture replacement, full system work.",
          tag: "Licensed · Code Compliant",
          icon: PlumbingElectricIcon,
        },
        {
          title: "Floor Covering",
          description:
            "Hardwood, tile, stone, carpet, vinyl, and specialty flooring. Product partners include Shaw, Pergo, Stanton, and Mohawk.",
          tag: "Shaw · Pergo · Stanton",
          icon: FloorIcon,
        },
        {
          title: "Heating & Air Conditioning",
          description:
            "HVAC installation, service, and modernization for residential and commercial buildings. Energy-efficient systems and retrofits.",
          tag: "HVAC · Energy Efficient",
          icon: HvacIcon,
        },
      ],
    },
    {
      numeral: "iii.",
      label: "",
      emphasis: "Maintain",
      suffix: "— Repair & Stewardship",
      columns: 3,
      services: [
        {
          title: "Landscape & Exterior Design",
          description:
            "Complete landscape architecture, hardscape, softscape, irrigation, and outdoor living design integrated with your building.",
          tag: "Landscape · Hardscape",
          icon: LandscapeIcon,
        },
        {
          title: "Roof & Water Damage Repair",
          description:
            "Roof repair, replacement, leak detection, and full water damage restoration for residential and commercial properties.",
          tag: "Emergency Response",
          icon: RoofWaterIcon,
        },
        {
          title: "Commercial Janitorial Services",
          description:
            "Post-construction cleanup and ongoing commercial janitorial services. Because the job isn't done until the space is spotless.",
          tag: "Commercial · Post-Build",
          icon: JanitorialIcon,
        },
        {
          title: "No Job Too Small or Large",
          description:
            "From a single doorframe to a full historic restoration, we apply the same standard of craftsmanship to every job that comes through the door.",
          tag: "Any Scope · Any Scale",
          icon: AnyJobIcon,
        },
      ],
    },
  ];
  
  /* ============================================
     COMPONENT
     ============================================ */
  export default function ServicesGrid() {
    return (
      <section id="services" className="bg-paper py-24 lg:py-32">
        <div className="container-site">
          {/* Section header */}
          <div className="text-center max-w-[720px] mx-auto mb-20 lg:mb-24">
            <span className="eyebrow eyebrow-centered mb-6">The Full List</span>
            <h2 className="font-display text-[clamp(40px,4.5vw,64px)] font-light my-6">
              Twelve trades.{" "}
              <em className="italic text-burgundy font-normal">One</em> point of
              accountability.
            </h2>
            <p className="text-ink-soft leading-[1.75]">
              Every service below is performed by craftsmen on our own payroll — from
              first swing of the hammer to the final walkthrough. Organized into three
              categories for how we think about a project: what we{" "}
              <em className="italic text-burgundy font-medium">build</em>, how we{" "}
              <em className="italic text-burgundy font-medium">finish</em> it, and how we{" "}
              <em className="italic text-burgundy font-medium">keep</em> it.
            </p>
          </div>
  
          {/* Buckets */}
          {buckets.map((bucket) => (
            <div key={bucket.numeral} className="mb-20 last:mb-0">
              {/* Bucket header */}
              <div className="flex flex-wrap items-baseline gap-6 mb-8 pb-5 border-b border-line">
                <span className="font-display italic text-base text-burgundy">
                  {bucket.numeral}
                </span>
                <h3 className="font-display text-[32px] font-normal flex-1 min-w-[280px]">
                  <em className="italic text-burgundy font-normal">
                    {bucket.emphasis}
                  </em>{" "}
                  {bucket.suffix}
                </h3>
                <span className="text-[10px] tracking-[0.16em] uppercase text-ink-muted font-semibold">
                  {bucket.services.length} Services
                </span>
              </div>
  
              {/* Bucket grid */}
              <div
                className={`grid grid-cols-1 sm:grid-cols-2 border-t border-l border-line ${
                  bucket.columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
                }`}
              >
                {bucket.services.map((service) => (
                  <div
                    key={service.title}
                    className="group flex flex-col gap-4 px-8 pt-9 pb-10 bg-paper border-r border-b border-line transition-colors duration-300 hover:bg-cream"
                  >
                    <div className="w-10 h-10 text-burgundy mb-1">
                      {service.icon}
                    </div>
                    <h4 className="font-display text-xl font-medium leading-tight">
                      {service.title}
                    </h4>
                    <p className="text-sm text-ink-soft leading-[1.6] flex-1">
                      {service.description}
                    </p>
                    <div className="text-[9.5px] tracking-[0.14em] uppercase text-burgundy font-semibold pt-3 border-t border-line-soft">
                      {service.tag}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }