type Relationship = {
  years: string;
  since: string;
  client: string;
  note: string;
};

const relationships: Relationship[] = [
  {
    years: "47",
    since: "Years · Since 1979",
    client: "American Legion Post #13",
    note:
      "Our longest-running client. Three generations of PCI craftsmen on one building.",
  },
  {
    years: "43",
    since: "Years · Since 1983",
    client: "Ambassador College",
    note:
      "Institutional maintenance and renovation work across multiple facilities.",
  },
  {
    years: "39",
    since: "Years · Since 1987",
    client: "Conservatory of Music",
    note: "Acoustic-sensitive restoration and preservation work.",
  },
  {
    years: "38",
    since: "Years · Since 1988",
    client: "Pasadena Convention Center",
    note: "Ongoing renovation partner through multiple facility upgrades.",
  },
  {
    years: "35",
    since: "Years · Since 1991",
    client: "Parsons Corporation",
    note: "Corporate facilities work across engineering office locations.",
  },
  {
    years: "32",
    since: "Years · Since 1994",
    client: "Edwards Air Force Base",
    note: "Federal compliance construction and renovation contracts.",
  },
  {
    years: "30",
    since: "Years · Since 1996",
    client: "Court of Appeals",
    note: "Municipal facility maintenance and courtroom renovation work.",
  },
  {
    years: "22",
    since: "Years · Since 2004",
    client: "UCLA Wet Laboratories",
    note: "High-precision research facility renovation across 12+ phases.",
  },
];

export default function Longevity() {
  return (
    <section className="relative bg-burgundy-deep text-cream py-24 lg:py-32 overflow-hidden">
      {/* Brass radial glow — top left */}
      <div
        aria-hidden
        className="absolute -top-[30%] -left-[10%] w-[800px] h-[800px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(184, 137, 61, 0.12) 0%, transparent 60%)",
        }}
      />

      <div className="container-site relative z-10">
        {/* Header */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-end mb-20">
          <div>
            <span className="eyebrow eyebrow-light">Longevity</span>
            <h2 className="font-display text-[clamp(40px,4.5vw,64px)] font-light mt-6">
              The relationships that{" "}
              <em className="italic text-brass-light font-normal">outlasted</em>{" "}
              generations.
            </h2>
          </div>
          <p className="text-cream/72 max-w-[540px] leading-[1.75] text-base">
            Most contractors are in and out. Our clients stay — some for decades. The
            list below shows only our longest-standing institutional relationships.
            Every one of them started with a single project and became something else.
          </p>
        </div>

        {/* Timeline grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-cream/20">
          {relationships.map((rel) => (
            <div
              key={rel.client}
              className="px-[30px] pt-9 pb-10 border-r border-b border-cream/20"
            >
              <div className="font-display italic font-light text-[56px] leading-none text-brass-light mb-3.5">
                {rel.years}
              </div>
              <div className="text-[9.5px] tracking-[0.14em] uppercase text-cream/55 font-semibold mb-[18px]">
                {rel.since}
              </div>
              <div className="font-display text-lg text-cream mb-2">
                {rel.client}
              </div>
              <p className="text-[12.5px] text-cream/60 leading-[1.55]">
                {rel.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}