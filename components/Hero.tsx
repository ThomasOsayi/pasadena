import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="bg-paper py-20 lg:py-24 relative overflow-hidden">
      <div className="container-site grid lg:grid-cols-[1.05fr_1fr] gap-16 lg:gap-20 items-center">
        {/* Left: text */}
        <div>
          <span className="eyebrow mb-8">Family Owned · Since 1971</span>

          <h1 className="font-display text-[clamp(48px,6vw,88px)] font-light mb-7 mt-8">
            Building <em className="italic text-burgundy font-normal">Pasadena</em>,
            <br />
            one project
            <br />
            at a time.
          </h1>

          <p className="text-[17px] text-ink-soft leading-[1.7] max-w-[520px] mb-10">
            A full-service construction, renovation, and interior design firm trusted by
            Southern California&apos;s most discerning institutions, businesses, and
            homeowners for more than five decades.
          </p>

          <div className="flex gap-4 items-center flex-wrap">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2.5 px-[22px] py-[13px] text-[12.5px] font-semibold tracking-[0.1em] uppercase bg-burgundy text-cream border border-burgundy hover:bg-burgundy-deep hover:border-burgundy-deep hover:-translate-y-px hover:shadow-md transition-all duration-250"
            >
              Start Your Project
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
              Explore Services
            </Link>
          </div>
        </div>

        {/* Right: image stack */}
        <div className="relative h-[480px] lg:h-[620px]">
          {/* Main image */}
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&h=1200&fit=crop"
              alt="Modern Pasadena home interior featuring custom craftsmanship"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover saturate-[0.9] contrast-[1.05]"
            />
          </div>

          {/* Accent image (bottom-left overlap) */}
          <div className="absolute -bottom-5 -left-5 lg:-bottom-10 lg:-left-15 w-40 h-52 lg:w-[220px] lg:h-[280px] border-8 border-paper shadow-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&h=500&fit=crop"
              alt="Detailed interior craftsmanship and finishes"
              fill
              sizes="220px"
              className="object-cover saturate-[0.9] contrast-[1.05]"
            />
          </div>

          {/* Years badge card (top-right overlap) */}
          <div className="absolute top-8 -right-5 bg-paper py-[22px] px-[26px] shadow-lg border-l-[3px] border-brass max-w-[200px]">
            <div className="font-display text-[56px] leading-none text-burgundy font-normal">
              54<span className="text-[32px]">+</span>
            </div>
            <div className="text-[11px] tracking-[0.14em] uppercase text-ink-soft mt-2">
              Years of Craftsmanship
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}