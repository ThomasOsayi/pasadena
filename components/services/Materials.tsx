type Partner = {
    category: string;
    name: string;
    detail: string;
    featured?: boolean;
  };
  
  const partners: Partner[] = [
    {
      category: "Paint · Interior & Exterior",
      name: "Dunn-Edwards",
      detail: "California-made, low-VOC, premium interior and exterior paints",
      featured: true,
    },
    {
      category: "Flooring",
      name: "Shaw",
      detail: "Carpet · Hardwood · Tile",
    },
    {
      category: "Paint",
      name: "Sherwin-Williams",
      detail: "Interior · Exterior · Specialty",
    },
    {
      category: "Flooring",
      name: "Pergo",
      detail: "Laminate · Engineered wood",
    },
    {
      category: "Flooring · Textiles",
      name: "Stanton",
      detail: "Premium carpet · Runners",
    },
  ];
  
  export default function Materials() {
    return (
      <section className="bg-paper py-24 lg:py-32">
        <div className="container-site grid lg:grid-cols-[1fr_1.3fr] gap-16 lg:gap-25 items-center">
          {/* Left: text */}
          <div>
            <span className="eyebrow">Materials That Last</span>
            <h2 className="font-display text-[clamp(36px,4vw,56px)] font-light leading-[1.05] mt-6 mb-7">
              We only use the{" "}
              <em className="italic text-burgundy font-normal">highest-quality</em>{" "}
              products.
            </h2>
            <p className="text-ink-soft mb-5 leading-[1.75]">
              Cheaper materials don&apos;t save anyone money in the long run — they just
              reschedule the cost. Every product we specify comes from manufacturers
              we&apos;ve trusted for decades.
            </p>
            <p className="text-ink-soft leading-[1.75]">
              Our standing product partners for paint, flooring, and finishes are the
              names below. For specialty materials, we&apos;ll work with any premium
              supplier you prefer — but{" "}
              <em className="italic text-burgundy font-medium">
                we&apos;ll never cut corners on what goes into your walls
              </em>
              .
            </p>
          </div>
  
          {/* Right: partners grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-line">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className={`flex flex-col justify-center gap-2.5 px-8 py-9 border-r border-b border-line min-h-[140px] transition-colors duration-300 hover:bg-cream ${
                  partner.featured ? "sm:col-span-2 bg-cream" : ""
                }`}
              >
                <div className="text-[9.5px] tracking-[0.16em] uppercase text-brass font-semibold">
                  {partner.category}
                </div>
                <div
                  className={`font-display font-medium text-ink tracking-[-0.01em] ${
                    partner.featured ? "text-[30px]" : "text-[26px]"
                  }`}
                >
                  {partner.name}
                </div>
                <div className="text-[12.5px] text-ink-muted">{partner.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }