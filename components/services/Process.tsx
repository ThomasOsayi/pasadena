type Step = {
    numeral: string;
    when: string;
    title: string;
    description: string;
  };
  
  const steps: Step[] = [
    {
      numeral: "i",
      when: "Step One · Day 0",
      title: "Request",
      description:
        "You tell us about your project by phone or through our request form. We respond within 24 hours to schedule a site visit.",
    },
    {
      numeral: "ii",
      when: "Step Two · Days 1–3",
      title: "Site Visit",
      description:
        "A project manager walks the space with you, discusses scope, timeline, and priorities, and documents everything needed for an accurate proposal.",
    },
    {
      numeral: "iii",
      when: "Step Three · 24 Hours",
      title: "Proposal",
      description:
        "Most proposals are delivered within 24 hours of the site visit. Line-item pricing, material specifications, timeline, and crew assignments — nothing hidden.",
    },
    {
      numeral: "iv",
      when: "Step Four · Build",
      title: "Execution",
      description:
        "Our in-house crew executes the work on schedule. Your project manager is your single point of contact from first hammer strike to final walkthrough.",
    },
  ];
  
  export default function Process() {
    return (
      <section className="bg-cream py-24 lg:py-32 border-t border-b border-line-soft">
        <div className="container-site">
          {/* Header */}
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-end mb-16 lg:mb-20">
            <div>
              <span className="eyebrow">How We Work</span>
              <h2 className="font-display text-[clamp(40px,4.5vw,64px)] font-light mt-6">
                From request to{" "}
                <em className="italic text-burgundy font-normal">final walkthrough</em>.
              </h2>
            </div>
            <p className="text-ink-soft max-w-[560px] leading-[1.75]">
              Every PCI project follows the same four-step process, whether it&apos;s a
              $2,000 repair or a $2 million renovation. Transparency and accountability
              are baked into each stage — so you always know what&apos;s happening, who&apos;s
              doing it, and what&apos;s next.
            </p>
          </div>
  
          {/* Steps */}
          <div className="relative grid grid-cols-1 lg:grid-cols-4 gap-14 lg:gap-0">
            {/* Dashed connector line — desktop only */}
            <div
              aria-hidden
              className="hidden lg:block absolute top-[44px] left-[5%] right-[5%] h-px"
              style={{
                background:
                  "repeating-linear-gradient(to right, var(--color-burgundy) 0, var(--color-burgundy) 4px, transparent 4px, transparent 10px)",
              }}
            />
  
            {steps.map((step) => (
              <div key={step.numeral} className="px-5 text-center relative">
                {/* Circle with Roman numeral */}
                <div className="relative w-[88px] h-[88px] mx-auto mb-7 bg-cream border border-burgundy rounded-full grid place-items-center font-display italic text-[34px] text-burgundy z-10">
                  {step.numeral}
                  {/* Inner ring */}
                  <span
                    aria-hidden
                    className="absolute inset-[6px] border border-line rounded-full pointer-events-none"
                  />
                </div>
  
                {/* Timing label */}
                <div className="text-[10px] tracking-[0.16em] uppercase text-brass font-semibold mb-2.5">
                  {step.when}
                </div>
  
                {/* Title */}
                <h4 className="font-display text-[22px] font-medium leading-tight mb-3">
                  {step.title}
                </h4>
  
                {/* Description */}
                <p className="text-sm text-ink-soft leading-[1.6]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }