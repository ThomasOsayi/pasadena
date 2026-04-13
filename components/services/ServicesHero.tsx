import Link from "next/link";

export default function ServicesHero() {
  return (
    <section className="relative bg-paper py-20 lg:py-24 overflow-hidden">
      <div className="container-site grid lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-20 items-center">
        {/* Left: text */}
        <div>
          {/* Breadcrumb */}
          <div className="text-[11px] tracking-[0.16em] uppercase text-ink-muted mb-7">
            <Link href="/" className="text-burgundy hover:underline">
              Home
            </Link>
            <span className="mx-3 opacity-50">/</span>
            Services
          </div>

          {/* Headline */}
          <h1 className="font-display text-[clamp(52px,7vw,110px)] font-light leading-[0.96] mb-8">
            Every trade.
            <br />
            Under <em className="italic text-burgundy font-normal">one roof</em>.
          </h1>

          {/* Lede */}
          <p className="text-[18px] text-ink-soft leading-[1.7] max-w-[540px] mb-10">
            Twelve in-house specialties. One accountable team. From custom cabinetry to
            roof repair, from historic restoration to commercial janitorial — every
            service we offer is staffed by craftsmen we employ directly.
          </p>

          {/* CTAs */}
          <div className="flex gap-4 flex-wrap">
            <Link
              href="#cta"
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
            <Link
              href="#services"
              className="inline-flex items-center gap-2.5 px-[22px] py-[13px] text-[12.5px] font-semibold tracking-[0.1em] uppercase bg-transparent text-ink border border-ink hover:bg-ink hover:text-cream transition-all duration-250"
            >
              Browse Services
            </Link>
          </div>
        </div>

        {/* Right: image mosaic */}
        <div className="relative h-[460px] lg:h-[560px]">
          {/* Tile 1: top-left large */}
          <div
            className="absolute top-0 left-0 w-[58%] h-[55%] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop')",
              filter: "saturate(0.9) contrast(1.05)",
            }}
            aria-label="Construction framing work"
          />

          {/* Tile 2: top-right smaller */}
          <div
            className="absolute top-0 right-0 w-[38%] h-[40%] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=400&h=400&fit=crop')",
              filter: "saturate(0.9) contrast(1.05)",
            }}
            aria-label="Interior finish detail"
          />

          {/* Tile 3: bottom-left overlap with paper border */}
          <div
            className="absolute bottom-0 left-[12%] w-[48%] h-[42%] bg-cover bg-center border-8 border-paper"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=400&fit=crop')",
              filter: "saturate(0.9) contrast(1.05)",
            }}
            aria-label="Craftsman at work"
          />

          {/* Tile 4: bottom-right */}
          <div
            className="absolute bottom-[8%] right-0 w-[45%] h-[52%] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&h=500&fit=crop')",
              filter: "saturate(0.9) contrast(1.05)",
            }}
            aria-label="Finished renovation project"
          />

          {/* Stat badge at the center intersection */}
          <div className="absolute top-[42%] left-[45%] -translate-x-1/2 -translate-y-1/2 bg-paper px-6 py-5 shadow-lg border-l-[3px] border-brass z-10 text-center">
            <div className="font-display italic text-[42px] leading-none text-burgundy">
              12
            </div>
            <div className="text-[9.5px] tracking-[0.16em] uppercase text-ink-muted mt-1.5">
              Trades · In-House
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}