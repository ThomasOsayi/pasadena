type Era = {
    decade: string;
    year: string;
    yearEmphasis: string;
    title: string;
    description: string;
    tags: string[];
  };
  
  const eras: Era[] = [
    {
      decade: "The Seventies",
      year: "19",
      yearEmphasis: "71",
      title: "A workshop on Marengo Avenue",
      description:
        "Founded as a small custom-carpentry and finish shop serving Pasadena families. Early projects: residential remodels, custom built-ins, restoration of historic Craftsman bungalows in the Bungalow Heaven district.",
      tags: ["Founded", "Residential"],
    },
    {
      decade: "The Eighties",
      year: "19",
      yearEmphasis: "83",
      title: "First institutional contracts",
      description:
        "Expanded into commercial and institutional work. Began ongoing maintenance and renovation contracts with Ambassador College, Pasadena Conservatory of Music, and the American Legion Post #13. Hired the first generation of in-house painters and electricians.",
      tags: ["Commercial", "Institutional"],
    },
    {
      decade: "The Nineties",
      year: "19",
      yearEmphasis: "94",
      title: "Federal & municipal work",
      description:
        "Awarded contracts at Edwards Air Force Base and the Pasadena Court of Appeals. The firm's reputation for accountability — every craftsman on payroll, every detail documented — made it a natural fit for federal compliance standards.",
      tags: ["Federal", "Municipal"],
    },
    {
      decade: "The Two-Thousands",
      year: "20",
      yearEmphasis: "04",
      title: "UCLA wet laboratories",
      description:
        "Began specialized renovation work on UCLA's wet laboratory facilities — high-precision spaces requiring code-compliant ventilation, sealed surfaces, and zero tolerance for finish errors. The work continues today.",
      tags: ["Healthcare", "Education"],
    },
    {
      decade: "The Twenty-Tens",
      year: "20",
      yearEmphasis: "13",
      title: "Ritz-Carlton, Starbucks, Convention Center",
      description:
        "Hospitality and retail work expanded across Southern California, including projects at the Ritz-Carlton, Starbucks Long Beach, and ongoing renovation work at the Pasadena Convention Center. Adopted the One Stop Eco-Friendly approach across all jobs.",
      tags: ["Hospitality", "Retail", "Eco-Friendly"],
    },
    {
      decade: "The Twenty-Twenties",
      year: "20",
      yearEmphasis: "26",
      title: "Three generations, same workshop",
      description:
        "Today, Pasadena Construction & Interiors is led by the third generation of the founding family — still operating from the original Marengo Avenue address, still employing every craftsman directly, still keeping the promise that started it all in 1971.",
      tags: ["Third Generation", "Family Owned"],
    },
  ];
  
  export default function Timeline() {
    return (
      <section className="bg-cream py-24 lg:py-32 border-t border-b border-line-soft">
        <div className="container-site">
          {/* Header */}
          <div className="text-center mb-20 lg:mb-24">
            <span className="eyebrow eyebrow-centered mb-6">Five Decades</span>
            <h2 className="font-display text-[clamp(40px,5vw,72px)] font-light max-w-[800px] mx-auto mt-6 mb-6">
              A history written in{" "}
              <em className="italic text-burgundy font-normal">finished</em> work.
            </h2>
            <p className="text-ink-soft max-w-[560px] mx-auto">
              Every era of Pasadena Construction is documented in the buildings still
              standing — the institutions, restaurants, residences, and historic landmarks
              our craftsmen helped build, restore, and renew.
            </p>
          </div>
  
          {/* Timeline rail */}
          <div className="relative max-w-[960px] mx-auto py-5">
            {/* Center vertical line */}
            <div
              aria-hidden
              className="absolute top-0 bottom-0 left-7 lg:left-1/2 lg:-translate-x-1/2 w-px"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 0%, var(--color-burgundy) 8%, var(--color-burgundy) 92%, transparent 100%)",
              }}
            />
  
            {eras.map((era, i) => {
              const isOdd = i % 2 === 0; // index 0 = "first" = odd visual position (left side on desktop)
              return (
                <div
                  key={era.decade}
                  className="relative grid grid-cols-[56px_1fr] lg:grid-cols-[1fr_80px_1fr] gap-0 mb-16 lg:mb-20 last:mb-0"
                >
                  {/* Marker (mobile: col 1, desktop: col 2) */}
                  <div className="lg:col-start-2 grid place-items-center relative">
                    {/* Decade label */}
                    <div className="absolute -top-2 font-display italic text-sm text-burgundy bg-cream px-3 whitespace-nowrap">
                      {era.decade}
                    </div>
                    {/* Dot */}
                    <div
                      className="w-4 h-4 rounded-full bg-burgundy border-4 border-cream relative z-10"
                      style={{ boxShadow: "0 0 0 1px var(--color-burgundy)" }}
                    />
                  </div>
  
                  {/* Card */}
                  <div
                    className={`bg-paper p-9 border border-line shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300
                      col-start-2 ml-6
                      lg:ml-0 lg:mr-0
                      ${
                        isOdd
                          ? "lg:col-start-1 lg:text-right lg:mr-[30px]"
                          : "lg:col-start-3 lg:ml-[30px]"
                      }`}
                  >
                    <div className="font-display text-5xl font-light leading-none text-burgundy mb-2">
                      {era.year}
                      <em className="italic text-brass font-normal">{era.yearEmphasis}</em>
                    </div>
                    <h3 className="font-display text-[22px] font-medium leading-tight mb-3.5">
                      {era.title}
                    </h3>
                    <p className="text-[14.5px] text-ink-soft leading-[1.65] mb-4">
                      {era.description}
                    </p>
                    <div
                      className={`flex gap-2 flex-wrap ${
                        isOdd ? "lg:justify-end" : ""
                      }`}
                    >
                      {era.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9.5px] tracking-[0.12em] uppercase text-burgundy bg-cream px-2.5 py-1 border border-line"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }