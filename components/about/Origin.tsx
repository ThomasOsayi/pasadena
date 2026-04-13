import Image from "next/image";

export default function Origin() {
  return (
    <section className="relative bg-paper py-24 lg:py-30">
      <div className="container-site grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-25 items-center">
        {/* Left: archival image with stamp */}
        <div className="relative">
          <div className="relative w-full aspect-[4/5] border-[12px] border-paper shadow-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=700&h=900&fit=crop"
              alt="Pasadena Construction workshop archival photograph from the 1970s"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
              style={{ filter: "sepia(25%) saturate(0.85) contrast(0.95)" }}
            />
          </div>

          {/* Wax stamp */}
          <div
            className="absolute top-7 -right-5 lg:-right-8 w-[110px] h-[110px] rounded-full bg-burgundy text-cream grid place-items-center shadow-md border-2 border-brass-light"
            style={{ transform: "rotate(-8deg)" }}
          >
            <div className="text-center">
              <div className="font-display italic text-3xl leading-none text-brass-light">
                1971
              </div>
              <div className="text-[8px] tracking-[0.15em] uppercase mt-1 font-semibold">
                Established
              </div>
            </div>
          </div>

          <div className="mt-6 text-center font-display italic text-[13px] text-ink-muted leading-snug">
            — A Pasadena workshop, circa 1973 —
          </div>
        </div>

        {/* Right: text */}
        <div>
          <span className="eyebrow mb-7">The Beginning</span>

          <h2 className="font-display text-[clamp(36px,4.5vw,60px)] font-light leading-[1.05] mt-7 mb-9">
            It started with a workshop and a{" "}
            <em className="italic text-burgundy font-normal">handshake</em>.
          </h2>

          <p className="dropcap text-[18px] leading-[1.7] text-ink-soft mb-6">
            In the spring of 1971, a small crew of carpenters and finishers opened a
            workshop on Marengo Avenue with one rule: every job leaves the shop the way
            you&apos;d want it in your own home. There was no marketing plan, no
            investor pitch, no growth strategy. There was only the work — and the
            conviction that doing the work well was its own kind of promise.
          </p>

          <p className="text-ink-soft leading-[1.75] mb-6">
            Pasadena was a different city then. The Convention Center hadn&apos;t been
            renovated. UCLA&apos;s wet labs were a generation away. The Ritz-Carlton
            wouldn&apos;t arrive in Marina del Rey for another decade. But the principle
            that brought clients through the workshop door in 1971 is the same one that
            brings them today: when a Pasadena Construction & Interiors craftsman
            touches your project, it&apos;s because the firm chose them and trained them
            — not because a subcontractor was cheapest that month.
          </p>

          {/* Pull quote */}
          <div className="mt-12 px-9 py-8 border-l-[3px] border-brass bg-cream">
            <p className="font-display italic text-[22px] leading-[1.4] text-ink mb-4">
              &ldquo;You can subcontract a job. You can&apos;t subcontract a
              standard.&rdquo;
            </p>
            <div className="text-[11px] tracking-[0.14em] uppercase text-ink-muted">
              <strong className="text-burgundy font-semibold">
                The Founding Principle
              </strong>{" "}
              · Posted in the workshop since 1971
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}