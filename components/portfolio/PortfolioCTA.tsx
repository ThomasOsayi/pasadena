import Link from "next/link";

export default function PortfolioCTA() {
  return (
    <section id="cta" className="bg-paper py-24 lg:py-32 text-center">
      <div className="container-site">
        <span className="eyebrow eyebrow-centered mb-7">Start Your Project</span>

        <h2 className="font-display text-[clamp(40px,5vw,72px)] font-light max-w-[820px] mx-auto mt-5 mb-7 leading-[1.05]">
          Your project,{" "}
          <em className="italic text-burgundy font-normal">on this page</em>
          <br />
          a year from now.
        </h2>

        <p className="text-ink-soft max-w-[540px] mx-auto mb-10 text-[17px] leading-[1.7]">
          Every project above started with a conversation. Tell us about yours — and
          we&rsquo;ll tell you how we&rsquo;d build it.
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
            href="#"
            className="inline-flex items-center gap-2.5 px-[22px] py-[13px] text-[12.5px] font-semibold tracking-[0.1em] uppercase bg-transparent text-ink border border-ink hover:bg-ink hover:text-cream transition-all duration-250"
          >
            Download Capabilities PDF
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}