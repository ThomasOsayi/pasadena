import Link from "next/link";

export default function PageHero() {
  return (
    <section className="relative bg-paper py-24 lg:py-30 text-center overflow-hidden">
      {/* Soft radial glow background */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-50 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, var(--color-cream-warm) 0%, transparent 65%)",
        }}
      />

      <div className="container-site relative z-10">
        {/* Breadcrumb */}
        <div className="text-[11px] tracking-[0.16em] uppercase text-ink-muted mb-8">
          <Link href="/" className="text-burgundy hover:underline">
            Home
          </Link>
          <span className="mx-3 opacity-50">/</span>
          Our Story
        </div>

        {/* Headline */}
        <h1 className="font-display text-[clamp(56px,8vw,132px)] font-light leading-[0.95] mb-8">
          Five decades.
          <br />
          One <em className="italic text-burgundy font-normal">standard</em>.
        </h1>

        {/* Italic subhead */}
        <p className="font-display italic font-light text-[19px] text-ink-soft leading-[1.6] max-w-[680px] mx-auto">
          Three families. Two thousand projects. One promise — kept since 1971.
        </p>

        {/* Scroll cue */}
        <div className="mt-16 inline-flex flex-col items-center gap-3 text-[10px] tracking-[0.18em] uppercase text-ink-muted">
          Scroll to begin
          <span
            aria-hidden
            className="w-px h-[50px]"
            style={{
              background:
                "linear-gradient(to bottom, var(--color-burgundy), transparent)",
            }}
          />
        </div>
      </div>
    </section>
  );
}