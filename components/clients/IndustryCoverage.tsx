import type { ReactNode } from "react";

type Sector = {
  numeral: string;
  count: ReactNode;
  name: string;
  examples: string;
};

const sectors: Sector[] = [
  {
    numeral: "i.",
    count: "3",
    name: "Federal & Government",
    examples: "Edwards AFB · Court of Appeals · Western Justice Center",
  },
  {
    numeral: "ii.",
    count: "3",
    name: "Education & Research",
    examples: "UCLA · Ambassador College · Conservatory of Music",
  },
  {
    numeral: "iii.",
    count: "2",
    name: "Civic & Cultural",
    examples: "Convention Center · American Legion Post #13",
  },
  {
    numeral: "iv.",
    count: "2",
    name: "Hospitality & Retail",
    examples: "Ritz-Carlton · Starbucks Long Beach",
  },
  {
    numeral: "v.",
    count: "1",
    name: "Healthcare",
    examples: "Martin Luther King Hospital",
  },
  {
    numeral: "vi.",
    count: "1",
    name: "Engineering & Corporate",
    examples: "Parsons Corporation",
  },
  {
    numeral: "vii.",
    count: "∞",
    name: "Private Residential",
    examples: "Historic homes · Remodels · Full restorations",
  },
  {
    numeral: "viii.",
    count: <em className="italic text-brass font-normal">45+</em>,
    name: "Real Estate Professionals",
    examples: "Realtor-friendly turnaround work across Southern California",
  },
];

export default function IndustryCoverage() {
  return (
    <section className="bg-paper py-24 lg:py-32">
      <div className="container-site">
        {/* Header */}
        <div className="text-center max-w-[720px] mx-auto mb-20">
          <span className="eyebrow eyebrow-centered mb-6">Industry Coverage</span>
          <h2 className="font-display text-[clamp(40px,4.5vw,64px)] font-light mt-6">
            Six sectors.{" "}
            <em className="italic text-burgundy font-normal">One roof</em>.
          </h2>
          <p className="text-ink-soft leading-[1.75] mt-[18px]">
            A firm that works across federal, healthcare, education, and hospitality
            learns something the specialists never do: what these institutions have in
            common, and what each one demands that the others don&rsquo;t.
          </p>
        </div>

        {/* Sectors grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-line">
          {sectors.map((sector) => (
            <div
              key={sector.numeral}
              className="relative px-8 pt-10 pb-11 border-r border-b border-line transition-colors duration-300 hover:bg-cream"
            >
              <div className="font-display italic text-xs text-brass mb-[18px]">
                {sector.numeral}
              </div>
              <div className="font-display text-[48px] font-light leading-none text-burgundy mb-4">
                {sector.count}
              </div>
              <div className="font-display text-xl font-medium mb-2.5">
                {sector.name}
              </div>
              <div className="text-[12.5px] text-ink-muted leading-[1.5]">
                {sector.examples}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}