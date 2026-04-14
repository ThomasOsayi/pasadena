type Signal = {
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
};

const signals: Signal[] = [
  {
    title: "Licensed",
    description: (
      <>
        California State License Board
        <br />
        License #421907
      </>
    ),
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M24 4l18 8v12c0 11-8 19-18 22-10-3-18-11-18-22V12l18-8z" />
        <path d="M16 24l6 6 12-12" />
      </svg>
    ),
  },
  {
    title: "Bonded",
    description:
      "Surety-bonded for institutional, federal, and commercial contracts",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="6" y="10" width="36" height="30" rx="2" />
        <path d="M6 20h36M14 4v12M34 4v12" />
      </svg>
    ),
  },
  {
    title: "Fully Insured",
    description:
      "General liability, workers' comp, and project-specific coverage",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M24 6c-8 8-12 16-12 22a12 12 0 0 0 24 0c0-6-4-14-12-22z" />
        <path d="M18 28l4 4 8-8" />
      </svg>
    ),
  },
  {
    title: "54 Years Active",
    description:
      "Continuously operating in Pasadena since 1971 — same family, same standards",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="24" cy="24" r="18" />
        <path d="M24 14v10l6 6" />
      </svg>
    ),
  },
];

export default function TrustSignals() {
  return (
    <section className="bg-cream-warm py-[110px]">
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-[60px]">
          <span className="eyebrow eyebrow-centered mb-[22px]">The Fine Print</span>
          <h2 className="font-display text-[clamp(32px,3.5vw,48px)] font-light mt-[22px]">
            Credentials our clients{" "}
            <em className="italic text-burgundy font-normal">require</em>.
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {signals.map((signal) => (
            <div
              key={signal.title}
              className="bg-paper border border-line px-7 pt-8 pb-9 text-center"
            >
              <div className="w-11 h-11 text-burgundy mx-auto mb-5">
                {signal.icon}
              </div>
              <div className="font-display text-lg font-medium mb-2">
                {signal.title}
              </div>
              <div className="text-[12.5px] text-ink-muted leading-[1.55]">
                {signal.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}