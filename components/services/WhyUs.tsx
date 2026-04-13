type Reason = {
    num: string;
    title: React.ReactNode;
    description: string;
  };
  
  const reasons: Reason[] = [
    {
      num: "01",
      title: (
        <>
          <em className="italic text-brass-light font-normal">
            Residential & Commercial
          </em>{" "}
          — both worlds, one team
        </>
      ),
      description:
        "We serve private homeowners and enterprise clients with the same team, the same processes, and the same standards. No residential division versus commercial division — just one accountable firm.",
    },
    {
      num: "02",
      title: (
        <>
          <em className="italic text-brass-light font-normal">Realtor Friendly</em>{" "}
          — market-ready in record time
        </>
      ),
      description:
        "Agents call us when listings need to be ready for market fast. We know what sells, what inspectors look for, and how to turn a property around on a tight closing timeline.",
    },
    {
      num: "03",
      title: (
        <>
          Qualified, reliable,{" "}
          <em className="italic text-brass-light font-normal">motivated</em> craftsmen
        </>
      ),
      description:
        "Every craftsman on your project is skilled, vetted, and motivated to get the job done right the first time. They work for us — not a rotating cast of subcontractors.",
    },
    {
      num: "04",
      title: (
        <>
          <em className="italic text-brass-light font-normal">One Stop</em> Eco-Friendly
          Service Center
        </>
      ),
      description:
        "Quality maintenance and installation for a diversified client base — from floor covering to merchandising. Our in-house service center has the right materials and methods for every construction need.",
    },
    {
      num: "05",
      title: (
        <>
          Proposals delivered in{" "}
          <em className="italic text-brass-light font-normal">24 hours</em>
        </>
      ),
      description:
        "Most estimates are turned around within 24 hours of the site visit. We don't make you wait two weeks to find out what your project will cost.",
    },
    {
      num: "06",
      title: (
        <>
          Project management from{" "}
          <em className="italic text-brass-light font-normal">start to finish</em>
        </>
      ),
      description:
        "We specialize in full project management for new construction, renovation, and restoration — across commercial, retail, historical, hospital, educational, government, and multi-family facilities.",
    },
  ];
  
  export default function WhyUs() {
    return (
      <section className="relative bg-burgundy-deep text-cream py-24 lg:py-32 overflow-hidden">
        {/* Soft brass radial glow */}
        <div
          aria-hidden
          className="absolute -bottom-[40%] -left-[20%] w-[900px] h-[900px] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(184, 137, 61, 0.12) 0%, transparent 60%)",
          }}
        />
  
        <div className="container-site relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <span className="eyebrow eyebrow-centered eyebrow-light mb-6">
              Why Pasadena C&I
            </span>
            <h2 className="font-display text-[clamp(40px,4.5vw,64px)] font-light max-w-[760px] mx-auto mt-6">
              Six reasons our clients keep{" "}
              <em className="italic text-brass-light font-normal">calling back</em>.
            </h2>
          </div>
  
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-cream/20">
            {reasons.map((reason) => (
              <div
                key={reason.num}
                className="px-9 pt-[42px] pb-12 border-r border-b border-cream/20 transition-colors duration-300 hover:bg-brass/6"
              >
                <div className="font-display italic font-light text-[48px] leading-none text-brass-light mb-[22px]">
                  {reason.num}
                </div>
                <h4 className="font-display text-[22px] font-medium leading-tight mb-3.5">
                  {reason.title}
                </h4>
                <p className="text-cream/72 text-[14.5px] leading-[1.7]">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }