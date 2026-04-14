import Link from "next/link";

type Promise = {
  number: string;
  emphasis?: string;
  label: string;
  detail: string;
};

const promises: Promise[] = [
  {
    number: "24",
    emphasis: "h",
    label: "Proposal Turnaround",
    detail: "Most estimates delivered within 24 hours of your site visit.",
  },
  {
    number: "1971",
    label: "Family Owned Since",
    detail: "Three generations. Same workshop. Same standard.",
  },
  {
    number: "",
    emphasis: "$0",
    label: "Estimate Cost",
    detail: "Site visits and proposals are always free — no obligation.",
  },
];

export default function ContactHero() {
  return (
    <section className="bg-paper pt-20 pb-16">
      <div className="container-site">
        {/* Breadcrumb */}
        <div className="text-[11px] tracking-[0.16em] uppercase text-ink-muted mb-6">
          <Link href="/" className="text-burgundy hover:underline">
            Home
          </Link>
          <span className="mx-3 opacity-50">/</span>
          Contact
        </div>

        <span className="eyebrow mb-[18px]">Get In Touch</span>

        <h1 className="font-display text-[clamp(54px,7.5vw,124px)] font-light leading-[0.95] mt-[18px] mb-9 max-w-[1100px]">
          Tell us about
          <br />
          your <em className="italic text-burgundy font-normal">project</em>.
        </h1>

        <p className="font-display italic text-[20px] text-ink-soft leading-[1.55] max-w-[680px]">
          Every relationship on our client page started with a single phone call.
          Yours can too — and we&rsquo;ll have a proposal in your inbox by this time
          tomorrow.
        </p>

        {/* Promises grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 border-t border-l border-line mt-[60px]">
          {promises.map((promise) => (
            <div
              key={promise.label}
              className="flex flex-col gap-2.5 px-7 py-8 border-r border-b border-line"
            >
              <div className="font-display text-[44px] font-light leading-none text-burgundy">
                {promise.number}
                {promise.emphasis && (
                  <em className="italic text-brass font-normal">
                    {promise.emphasis}
                  </em>
                )}
              </div>
              <div className="text-[10px] tracking-[0.16em] uppercase text-ink-muted font-semibold">
                {promise.label}
              </div>
              <div className="font-display text-[15px] text-ink-soft leading-[1.5]">
                {promise.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}