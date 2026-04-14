import Image from "next/image";

type Fact = {
  key: string;
  value: string;
};

type CaseStudy = {
  id: "ucla" | "starbucks" | "legion";
  category: string;
  title: string;
  titleEmphasis: string;
  titleSuffix: string;
  pullquote: string;
  description: string;
  mainImage: string;
  mainAlt: string;
  accentImage: string;
  accentAlt: string;
  accentSide: "left" | "right";
  badgeSide: "left" | "right";
  badgeNumber: string;
  badgeLabel: string;
  facts: Fact[];
  reverse: boolean; // If true, image is on the right
};

const caseStudies: CaseStudy[] = [
  {
    id: "ucla",
    category: "Education & Research · Institutional",
    title: "UCLA ",
    titleEmphasis: "Wet Laboratory",
    titleSuffix: " Renovations",
    pullquote:
      "High-precision laboratory spaces where finish tolerances are measured in millimeters and a single missed seal can contaminate a year of research.",
    description:
      "Since 2004, PCI has served as a trusted renovation partner for UCLA's wet laboratory facilities — the kind of work that requires code-compliant ventilation, sealed chemical-resistant surfaces, and zero tolerance for finish errors. Over three phases of work spanning two decades, we've renovated research labs for the life sciences division while keeping active experiments running in adjacent spaces.",
    mainImage:
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&h=1000&fit=crop",
    mainAlt: "UCLA research laboratory interior with modern finishes",
    accentImage:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=500&fit=crop",
    accentAlt: "Construction detail from UCLA laboratory renovation",
    accentSide: "right",
    badgeSide: "left",
    badgeNumber: "20+",
    badgeLabel: "Years · Ongoing",
    facts: [
      { key: "First Project", value: "2004" },
      { key: "Projects Completed", value: "12+ phases" },
      { key: "Scope", value: "Lab renovation" },
      { key: "Status", value: "Ongoing" },
    ],
    reverse: false,
  },
  {
    id: "starbucks",
    category: "Hospitality & Retail · Commercial",
    title: "Starbucks ",
    titleEmphasis: "Long Beach",
    titleSuffix: "",
    pullquote:
      "Retail buildouts where every day of downtime costs thousands — so we build on nights and weekends and hand back a store that looks like it was never closed.",
    description:
      "PCI has handled buildouts, refreshes, and ongoing maintenance for Starbucks locations in Long Beach since 2013. Retail hospitality work is its own discipline: tight schedules, brand-spec materials, and the requirement that a store open for business the morning after we leave. We've delivered every Starbucks project on schedule because our in-house crews don't wait on subcontractors.",
    mainImage:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=1000&fit=crop",
    mainAlt: "Modern coffee shop interior with custom millwork",
    accentImage:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=500&fit=crop",
    accentAlt: "Coffee shop detail and finishes",
    accentSide: "left",
    badgeSide: "right",
    badgeNumber: "11",
    badgeLabel: "Years · Multi-Site",
    facts: [
      { key: "First Project", value: "2013" },
      { key: "Locations Served", value: "Multi-site" },
      { key: "Scope", value: "Retail buildout" },
      { key: "Status", value: "Ongoing" },
    ],
    reverse: true,
  },
  {
    id: "legion",
    category: "Civic & Cultural · Historic",
    title: "American ",
    titleEmphasis: "Legion",
    titleSuffix: " Post #13",
    pullquote:
      "A historic civic hall in continuous use since before World War II — the kind of building where every renovation has to honor the generations that came before.",
    description:
      "Our longest-running client relationship. Since 1979, PCI has handled maintenance, renovation, and restoration work for American Legion Post #13 — one of Pasadena's oldest civic institutions. Three generations of our craftsmen have worked on the same building, preserving its original character while quietly modernizing the systems that keep it running.",
    mainImage:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=800&h=1000&fit=crop",
    mainAlt: "Historic civic hall interior",
    accentImage:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=500&fit=crop",
    accentAlt: "Historic architectural detail",
    accentSide: "right",
    badgeSide: "left",
    badgeNumber: "45+",
    badgeLabel: "Years · Continuous",
    facts: [
      { key: "First Project", value: "1979" },
      { key: "Generations of Work", value: "Three" },
      { key: "Scope", value: "Restoration + Maintenance" },
      { key: "Status", value: "Ongoing" },
    ],
    reverse: false,
  },
];

export default function CaseStudies() {
  return (
    <section className="bg-cream py-24 lg:py-32 border-t border-b border-line-soft">
      <div className="container-site">
        {/* Section header */}
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-end mb-20">
          <div>
            <span className="eyebrow">Featured Relationships</span>
            <h2 className="font-display text-[clamp(40px,4.5vw,64px)] font-light mt-6">
              Three clients.{" "}
              <em className="italic text-burgundy font-normal">Three sectors</em>. One
              standard.
            </h2>
          </div>
          <p className="text-ink-soft max-w-[540px] leading-[1.75]">
            The three projects below span education, hospitality, and civic work —
            different industries, different scopes, different timelines. Each one
            proves the same thing: when you build to last, clients come back.
          </p>
        </div>

        {/* Case studies */}
        <div className="flex flex-col gap-24 lg:gap-[100px]">
          {caseStudies.map((study) => (
            <article
              key={study.id}
              className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center"
            >
              {/* Media column */}
              <div
                className={`relative h-[340px] sm:h-[440px] lg:h-[540px] ${
                  study.reverse ? "lg:order-2" : ""
                }`}
              >
                {/* Main image */}
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={study.mainImage}
                    alt={study.mainAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover"
                    style={{ filter: "saturate(0.9) contrast(1.05)" }}
                  />
                </div>

                {/* Floating year badge */}
                <div
                  className={`absolute top-7 ${
                    study.badgeSide === "left"
                      ? "left-2 lg:-left-[18px]"
                      : "right-2 lg:-right-[18px]"
                  } bg-paper px-[22px] py-4 shadow-md border-l-[3px] border-brass z-10`}
                >
                  <div className="font-display italic text-[34px] leading-none text-burgundy">
                    {study.badgeNumber}
                  </div>
                  <div className="text-[9px] tracking-[0.14em] uppercase text-ink-muted font-semibold mt-1.5">
                    {study.badgeLabel}
                  </div>
                </div>

                {/* Accent image — hidden on mobile, overlaps on desktop */}
                <div
                  className={`hidden sm:block absolute -bottom-9 ${
                    study.accentSide === "left" ? "-left-8" : "-right-8"
                  } w-[150px] h-[190px] lg:w-[200px] lg:h-[260px] border-[10px] border-cream shadow-lg overflow-hidden`}
                >
                  <Image
                    src={study.accentImage}
                    alt={study.accentAlt}
                    fill
                    sizes="(max-width: 1024px) 150px, 200px"
                    className="object-cover"
                    style={{ filter: "saturate(0.9)" }}
                  />
                </div>
              </div>

              {/* Content column */}
              <div className={study.reverse ? "lg:order-1" : ""}>
                <div className="text-[10px] tracking-[0.18em] uppercase text-burgundy font-semibold mb-4">
                  {study.category}
                </div>

                <h3 className="font-display text-[clamp(32px,3.8vw,48px)] font-light leading-[1.05] mb-6">
                  {study.title}
                  <em className="italic text-burgundy font-normal">
                    {study.titleEmphasis}
                  </em>
                  {study.titleSuffix}
                </h3>

                <p className="font-display italic text-[17px] text-ink-soft leading-[1.6] mb-7 pl-5 border-l-2 border-brass">
                  {study.pullquote}
                </p>

                <p className="text-ink-soft leading-[1.75] mb-8">
                  {study.description}
                </p>

                {/* Facts grid */}
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-7 gap-y-[18px] pt-6 border-t border-line m-0">
                  {study.facts.map((fact) => (
                    <div key={fact.key}>
                      <dt className="text-[9.5px] tracking-[0.14em] uppercase text-ink-muted font-semibold mb-1">
                        {fact.key}
                      </dt>
                      <dd className="font-display text-base text-ink m-0">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}