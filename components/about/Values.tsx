type Value = {
    roman: string;
    title: React.ReactNode;
    description: string;
  };
  
  const values: Value[] = [
    {
      roman: "i.",
      title: (
        <>
          Accountability is{" "}
          <em className="italic text-burgundy font-medium">not delegated</em>.
        </>
      ),
      description:
        "Every craftsman on every job is on our payroll. When something needs to be made right, there is no subcontractor to call, no chain of blame to follow. There is only us.",
    },
    {
      roman: "ii.",
      title: (
        <>
          The <em className="italic text-burgundy font-medium">standard</em> is the same.
        </>
      ),
      description:
        "A doorframe and a hospital wing get the same level of care. We don't have a small job version of our craftsmanship. We only have one version, and we apply it to every job that walks through the door.",
    },
    {
      roman: "iii.",
      title: (
        <>
          Time is <em className="italic text-burgundy font-medium">respect</em>.
        </>
      ),
      description:
        "We turn around most estimates within 24 hours. We arrive when we said we would. We finish when we said we would. The work matters, but so does your time — and we treat both as non-negotiable.",
    },
    {
      roman: "iv.",
      title: (
        <>
          Materials are a <em className="italic text-burgundy font-medium">promise</em>.
        </>
      ),
      description:
        "We use Dunn-Edwards, Sherwin-Williams, Shaw, Pergo, Stanton — names we trust because we've watched them hold up for decades. Cheaper materials don't save anyone money in the long run.",
    },
    {
      roman: "v.",
      title: (
        <>
          Eco-friendly is{" "}
          <em className="italic text-burgundy font-medium">not optional</em>.
        </>
      ),
      description:
        "Low-VOC finishes, sustainable sourcing, waste-conscious practices on every job — not as an upgrade, not as a marketing line, but as the baseline. The planet outlasts every project we'll ever build.",
    },
    {
      roman: "vi.",
      title: (
        <>
          The work <em className="italic text-burgundy font-medium">speaks</em>.
        </>
      ),
      description:
        "We don't need testimonials we wrote ourselves or stock photos of someone else's projects. The buildings we've finished are still standing, and the institutions we've served are still calling. That's the only reference we need.",
    },
  ];
  
  export default function Values() {
    return (
      <section className="bg-cream-warm py-24 lg:py-32">
        <div className="container-site">
          {/* Header */}
          <div className="text-center mb-20">
            <span className="eyebrow eyebrow-centered mb-6">What Guides Us</span>
            <h2 className="font-display text-[clamp(40px,4.5vw,64px)] font-light max-w-[720px] mx-auto mt-6">
              Six principles,{" "}
              <em className="italic text-burgundy font-normal">unchanged</em> since 1971.
            </h2>
          </div>
  
          {/* Values grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-line">
            {values.map((value) => (
              <div
                key={value.roman}
                className="px-10 pt-12 pb-14 border-r border-b border-line bg-cream-warm"
              >
                <div className="font-display text-sm italic text-brass tracking-[0.1em] mb-6">
                  {value.roman}
                </div>
                <h3 className="font-display text-[26px] font-medium leading-tight mb-4">
                  {value.title}
                </h3>
                <p className="text-ink-soft text-[15px] leading-[1.7]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }