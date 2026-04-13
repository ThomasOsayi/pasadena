export default function Testimonial() {
  return (
    <section className="bg-cream-warm py-24 lg:py-32">
      <div className="container-site">
        <div className="max-w-[860px] mx-auto text-center">
          {/* Decorative quotation mark */}
          <span
            aria-hidden
            className="font-display italic text-[140px] leading-[0.5] text-burgundy opacity-20 block h-[60px]"
          >
            &ldquo;
          </span>

          {/* The quote */}
          <blockquote className="font-display text-[clamp(24px,3vw,36px)] font-light leading-[1.3] text-ink mb-10">
            They handled a project three other contractors had turned down. Fourteen
            months later, the house looks like it did in 1923 — only{" "}
            <em className="italic text-burgundy font-normal">better</em>. I&rsquo;ve
            already recommended them to four neighbors.
          </blockquote>

          {/* Attribution */}
          <div className="inline-flex flex-col items-center gap-1.5 pt-6 border-t border-line">
            <div className="font-display text-base font-medium text-ink">
              — Marengo Avenue Homeowner
            </div>
            <div className="text-[10px] tracking-[0.16em] uppercase text-ink-muted font-semibold">
              Historic Restoration · 2024
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}