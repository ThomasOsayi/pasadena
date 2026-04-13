type Facility = {
    type: string;
    example: string;
  };
  
  const facilities: Facility[] = [
    { type: "Commercial", example: "Ritz-Carlton · Starbucks" },
    { type: "Retail", example: "Storefronts · Showrooms" },
    { type: "Historical", example: "Landmark Restoration" },
    { type: "Hospital", example: "Martin Luther King Hospital" },
    { type: "Educational", example: "UCLA · Ambassador College" },
    { type: "Government", example: "Edwards AFB · Court of Appeals" },
    { type: "Multi-Family", example: "Apartments · Condos" },
    { type: "Civic & Cultural", example: "Conservatory · Convention Center" },
  ];
  
  export default function Specialized() {
    return (
      <section className="bg-cream-warm py-24 lg:py-32">
        <div className="container-site">
          {/* Header */}
          <div className="text-center max-w-[760px] mx-auto mb-20">
            <span className="eyebrow eyebrow-centered mb-6">Specialized For</span>
            <h2 className="font-display text-[clamp(40px,4.5vw,64px)] font-light my-6">
              Built for the spaces that{" "}
              <em className="italic text-burgundy font-normal">can&apos;t stop</em>.
            </h2>
            <p className="text-ink-soft leading-[1.75]">
              Hospitals, courthouses, laboratories, and historical landmarks all share one
              thing: the work has to get done without disrupting operations. That&apos;s
              the kind of project we&apos;ve specialized in for over five decades.
            </p>
          </div>
  
          {/* Facility grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {facilities.map((facility) => (
              <div
                key={facility.type}
                className="bg-paper border border-line px-7 pt-8 pb-[34px] hover:-translate-y-[3px] hover:shadow-md transition-all duration-300"
              >
                <div className="font-display text-[22px] font-medium text-ink mb-3">
                  {facility.type}
                </div>
                <div className="text-[11px] tracking-[0.12em] uppercase text-burgundy font-semibold pt-3.5 border-t border-line">
                  {facility.example}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }