type Stat = {
  number: string;
  emphasis?: string;
  label: string;
  isEmphasisOnly?: boolean;
};

const stats: Stat[] = [
  {
    number: "2,400",
    emphasis: "+",
    label: "Projects Since 1971",
  },
  {
    number: "",
    emphasis: "54",
    label: "Years of Continuous Work",
    isEmphasisOnly: true,
  },
  {
    number: "40",
    emphasis: "+",
    label: "In-House Craftsmen",
  },
  {
    number: "",
    emphasis: "12",
    label: "Trades Under One Roof",
    isEmphasisOnly: true,
  },
];

export default function StatsBand() {
  return (
    <section className="relative bg-burgundy-deep text-cream py-24 lg:py-28 overflow-hidden">
      {/* Brass radial glow — top right */}
      <div
        aria-hidden
        className="absolute -top-[40%] -right-[15%] w-[700px] h-[700px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(184, 137, 61, 0.14) 0%, transparent 60%)",
        }}
      />

      <div className="container-site relative z-10">
        {/* Header */}
        <div className="text-center max-w-[720px] mx-auto mb-16 lg:mb-[70px]">
          <span className="eyebrow eyebrow-centered eyebrow-light mb-6">
            By the Numbers
          </span>
          <h2 className="font-display text-[clamp(36px,4.5vw,60px)] font-light mt-6">
            The work,{" "}
            <em className="italic text-brass-light font-normal">quantified</em>.
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center relative ${
                i < stats.length - 1
                  ? "lg:after:content-[''] lg:after:absolute lg:after:right-[-20px] lg:after:top-1/2 lg:after:-translate-y-1/2 lg:after:w-px lg:after:h-[60%] lg:after:bg-cream/18"
                  : ""
              }`}
            >
              <div className="font-display text-[clamp(48px,5vw,72px)] font-light leading-none text-cream">
                {stat.isEmphasisOnly ? (
                  <em className="italic text-brass-light font-normal">
                    {stat.emphasis}
                  </em>
                ) : (
                  <>
                    {stat.number}
                    {stat.emphasis && (
                      <em className="italic text-brass-light font-normal">
                        {stat.emphasis}
                      </em>
                    )}
                  </>
                )}
              </div>
              <div className="mt-3.5 text-[10px] tracking-[0.18em] uppercase text-cream/72">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}