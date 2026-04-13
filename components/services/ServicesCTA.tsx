import Link from "next/link";

export default function ServicesCTA() {
  return (
    <section id="cta" className="bg-paper py-24 lg:py-32 text-center">
      <div className="container-site">
        <span className="eyebrow eyebrow-centered mb-7">Start a Project</span>

        <h2 className="font-display text-[clamp(40px,5vw,72px)] font-light max-w-[820px] mx-auto mt-7 mb-7 leading-[1.05]">
          Tell us what you need.
          <br />
          We&rsquo;ll tell you{" "}
          <em className="italic text-burgundy font-normal">how we&rsquo;ll build it</em>
          .
        </h2>

        <p className="text-ink-soft max-w-[540px] mx-auto mb-10 text-[17px] leading-[1.7]">
          Twelve trades. One point of contact. A proposal in your inbox within 24 hours.
        </p>

        <div className="inline-flex flex-wrap gap-4 justify-center">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2.5 px-[22px] py-[13px] text-[12.5px] font-semibold tracking-[0.1em] uppercase bg-burgundy text-cream border border-burgundy hover:bg-burgundy-deep hover:border-burgundy-deep hover:-translate-y-px hover:shadow-md transition-all duration-250"
          >
            Request an Estimate
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>

          <a
            href="tel:6263569600"
            className="inline-flex items-center gap-2.5 px-[22px] py-[13px] text-[12.5px] font-semibold tracking-[0.1em] uppercase bg-transparent text-ink border border-ink hover:bg-ink hover:text-cream transition-all duration-250"
          >
            Call 626.356.9600
          </a>
        </div>

        {/* Reinforcement note */}
        <div className="mt-7 text-xs text-ink-muted tracking-wide">
          Most proposals delivered within{" "}
          <em className="not-italic text-burgundy font-semibold">24 hours</em> of site
          visit
        </div>
      </div>
    </section>
  );
}
