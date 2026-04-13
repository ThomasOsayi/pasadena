type Reason = {
    num: string;
    title: string;
    description: string;
  };
  
  const reasons: Reason[] = [
    {
      num: "01",
      title: "In-House Craftsmen",
      description:
        "Carpenters, painters, plumbers, electricians, and finishers — all employed directly by PCI. No subcontractor finger-pointing.",
    },
    {
      num: "02",
      title: "24-Hour Estimates",
      description:
        "Most proposals turned around within 24 hours. We respect your time and your project timeline.",
    },
    {
      num: "03",
      title: "Realtor Friendly",
      description:
        "We help agents get listings market-ready fast — turnkey prep work designed to maximize sale price.",
    },
    {
      num: "04",
      title: "One Stop Eco-Friendly",
      description:
        "Sustainable materials, low-VOC finishes, and waste-conscious practices on every project — without compromise.",
    },
    {
      num: "05",
      title: "No Job Too Small or Large",
      description:
        "From a single doorframe to a full historic restoration, we bring the same standard to every job.",
    },
  ];
  
  export default function WhyUs() {
    return (
      <section className="bg-cream-warm py-24 lg:py-32">
        <div className="container-site grid lg:grid-cols-[1fr_1.3fr] gap-16 lg:gap-24 items-start">
          {/* Left: intro */}
          <div>
            <span className="eyebrow mb-7">Why Choose Us</span>
            <h2 className="font-display text-[clamp(36px,4vw,56px)] font-light mt-7 mb-8">
              The difference is{" "}
              <em className="italic text-burgundy font-normal">accountability</em>.
            </h2>
            <div className="space-y-5 text-ink-soft leading-[1.75]">
              <p>
                When you hire most contractors, you get a project manager who hires
                subcontractors who hire crews. By the time something goes wrong, no
                one&apos;s responsible.
              </p>
              <p>
                That&apos;s not how we work. Every craftsman on your project is on our
                payroll — vetted, trained, and accountable to the same standard
                we&apos;ve upheld since 1971.
              </p>
            </div>
          </div>
  
          {/* Right: numbered list */}
          <div className="flex flex-col">
            {reasons.map((reason, i) => (
              <div
                key={reason.num}
                className={`grid grid-cols-[80px_1fr] gap-8 py-8 border-b border-line items-start ${
                  i === 0 ? "border-t border-line" : ""
                }`}
              >
                <div className="font-display text-4xl italic text-burgundy leading-none">
                  {reason.num}
                </div>
                <div>
                  <h4 className="font-display text-[22px] font-medium mb-2">
                    {reason.title}
                  </h4>
                  <p className="text-ink-soft text-[15px] leading-[1.65]">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }