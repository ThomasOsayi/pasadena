import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-paper py-24 lg:py-32">
      <div className="container-site grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-start">
        {/* Left: stacked images */}
        <div className="relative h-[480px] lg:h-[580px]">
          {/* Top-left image */}
          <div className="absolute top-0 left-0 w-[75%] h-[65%] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop"
              alt="Pasadena Construction craftsman at work"
              fill
              sizes="(max-width: 1024px) 75vw, 35vw"
              className="object-cover saturate-90"
            />
          </div>

          {/* Bottom-right image with paper border */}
          <div className="absolute bottom-0 right-0 w-[65%] h-[55%] border-[10px] border-paper overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=600&fit=crop"
              alt="Finished interior renovation in Pasadena"
              fill
              sizes="(max-width: 1024px) 65vw, 30vw"
              className="object-cover saturate-90"
            />
          </div>

          {/* Floating "Since" badge */}
          <div className="absolute bottom-[30%] -left-5 bg-ink text-cream py-[18px] px-6 z-10 shadow-md">
            <div className="font-display text-4xl leading-none italic text-brass-light">
              54
            </div>
            <div className="text-[9.5px] tracking-[0.18em] uppercase mt-1">
              Years Building
              <br />
              What Lasts
            </div>
          </div>
        </div>

        {/* Right: text */}
        <div>
          <span className="eyebrow mb-7">Our Story</span>

          <h2 className="font-display text-[clamp(36px,4vw,56px)] font-light mt-7 mb-8">
            A family business with a{" "}
            <em className="italic text-burgundy font-normal">craftsman&apos;s</em>{" "}
            commitment to quality.
          </h2>

          <div className="space-y-5 text-ink-soft text-base leading-[1.75]">
            <p>
              Pasadena Construction & Interiors was founded in 1971 with a simple
              promise: deliver the kind of careful, considered work that holds up for
              generations. Three families and five decades later, that promise still
              defines us.
            </p>
            <p>
              From the historic restoration of Pasadena&apos;s most beloved landmarks to
              the quiet renovation of a family kitchen, we bring the same standard of
              craftsmanship to every job. Our team includes specialists in home
              improvement, building renovation, and interior decorating — all under one
              roof, accountable to a single client: you.
            </p>
            <p>
              We call it the{" "}
              <em className="italic text-burgundy font-medium">
                One Stop Eco-Friendly
              </em>{" "}
              approach. You call it done right the first time.
            </p>
          </div>

          {/* Signature block */}
          <div className="mt-9 pt-8 border-t border-line flex items-center gap-5">
            <div>
              <div className="font-display italic text-[22px] text-ink">
                — The Pasadena C&I Team
              </div>
              <div className="text-[11px] tracking-[0.14em] uppercase text-ink-muted mt-1">
                Three Generations · One Standard
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}