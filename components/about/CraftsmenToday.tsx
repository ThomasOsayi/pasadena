type Craft = {
    num: string;
    count: string;
    emphasis?: string;
    name: string;
    detail: string;
  };
  
  const crafts: Craft[] = [
    {
      num: "i.",
      count: "12",
      emphasis: "+",
      name: "Carpenters",
      detail: "Framing · Finish · Custom millwork",
    },
    {
      num: "ii.",
      count: "8",
      name: "Painters & Finishers",
      detail: "Interior · Exterior · Specialty finishes",
    },
    {
      num: "iii.",
      count: "6",
      name: "Plumbers",
      detail: "Licensed · Code compliance",
    },
    {
      num: "iv.",
      count: "5",
      name: "Electricians",
      detail: "Licensed · Modernization",
    },
    {
      num: "v.",
      count: "4",
      name: "Tile & Stone Setters",
      detail: "Custom · Restoration",
    },
    {
      num: "vi.",
      count: "3",
      name: "Project Managers",
      detail: "Single point of contact",
    },
    {
      num: "vii.",
      count: "2",
      name: "Interior Designers",
      detail: "Concept to completion",
    },
    {
      num: "viii.",
      count: "40",
      emphasis: "+",
      name: "Total Craftsmen",
      detail: "All directly employed by PCI",
    },
  ];
  
  export default function CraftsmenToday() {
    return (
      <section className="relative bg-burgundy-deep text-cream py-24 lg:py-32 overflow-hidden">
        {/* Soft brass radial glow */}
        <div
          aria-hidden
          className="absolute -top-1/2 -right-[20%] w-[800px] h-[800px] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(184, 137, 61, 0.15) 0%, transparent 60%)",
          }}
        />
  
        <div className="container-site relative z-10">
          {/* Header */}
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 mb-20 items-end">
            <div>
              <span className="eyebrow eyebrow-light">The Team Today</span>
              <h2 className="font-display text-[clamp(40px,5vw,72px)] font-light leading-[1.02] mt-6">
                Every trade.
                <br />
                <em className="italic text-brass-light font-normal">In-house</em>.
              </h2>
            </div>
            <p className="text-cream/75 max-w-[540px] leading-[1.75] text-base">
              While most contractors of our size run on subcontractor networks, every
              craftsman who touches your project is on our payroll — vetted, trained,
              insured, and accountable to a single standard. It&apos;s the difference
              between a project manager and a finger-pointer.
            </p>
          </div>
  
          {/* Crafts grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-cream/20">
            {crafts.map((craft) => (
              <div
                key={craft.name}
                className="px-7 py-9 border-r border-b border-cream/20 transition-colors duration-300 hover:bg-brass/8"
              >
                {/* Roman numeral */}
                <div className="font-display text-xs italic text-brass-light mb-[18px]">
                  {craft.num}
                </div>
  
                {/* Count */}
                <div className="font-display text-[44px] font-light leading-none text-cream mb-3">
                  {craft.count}
                  {craft.emphasis && (
                    <em className="italic text-brass-light font-normal">
                      {craft.emphasis}
                    </em>
                  )}
                </div>
  
                {/* Trade name */}
                <div className="font-display text-base text-cream mb-1.5">
                  {craft.name}
                </div>
  
                {/* Detail */}
                <div className="text-xs text-cream/55 tracking-wide">{craft.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }