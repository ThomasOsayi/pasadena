import Image from "next/image";

type Spec = {
  label: string;
  value: string;
};

const specs: Spec[] = [
  { label: "Location", value: "Pasadena, CA" },
  { label: "Timeline", value: "14 months" },
  { label: "Scope", value: "Full Restoration" },
  { label: "Completed", value: "Spring 2024" },
];

export default function FeaturedProject() {
  return (
    <section className="bg-paper pt-16 pb-24 lg:pb-32">
      <div className="container-site">
        <div className="relative bg-cream border border-line px-8 py-16 sm:px-12 lg:px-16 lg:pt-[70px] lg:pb-[72px] grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-[72px] items-stretch">
          {/* "Flagship Project" tab */}
          <div className="absolute -top-3 left-8 lg:left-16 bg-burgundy text-cream px-4 py-1.5 text-[10px] tracking-[0.16em] uppercase font-semibold">
            Flagship Project
          </div>

          {/* Left: image composition */}
          <div className="relative h-[380px] sm:h-[440px] lg:h-[540px]">
            {/* Main image */}
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&h=1100&fit=crop"
                alt="Marengo Avenue Estate restoration — full view"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
                style={{ filter: "saturate(0.9) contrast(1.05)" }}
                priority
              />
            </div>

            {/* "Completed 2024" badge */}
            <div className="absolute top-6 -left-4 lg:-left-[18px] bg-burgundy-deep text-cream px-5 py-3.5 font-display italic text-2xl shadow-md z-20">
              Completed <em className="italic text-brass-light">2024</em>
            </div>

            {/* Detail image overlap bottom-right */}
            <div className="absolute -bottom-5 lg:-bottom-9 -right-5 lg:-right-9 w-32 h-44 lg:w-[180px] lg:h-[240px] border-8 border-cream shadow-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=500&fit=crop"
                alt="Marengo Avenue Estate — restoration detail"
                fill
                sizes="(max-width: 1024px) 128px, 180px"
                className="object-cover"
                style={{ filter: "saturate(0.9) contrast(1.05)" }}
              />
            </div>
          </div>

          {/* Right: content */}
          <div className="flex flex-col">
            <div className="text-[10px] tracking-[0.18em] uppercase text-burgundy font-semibold mb-[18px]">
              Historic Restoration · Residential
            </div>

            <h2 className="font-display text-[clamp(34px,4vw,52px)] font-light leading-[1.05] mb-7">
              Marengo Avenue{" "}
              <em className="italic text-burgundy font-normal">Estate</em> Restoration
            </h2>

            {/* Pullquote lede */}
            <p className="font-display italic text-[17px] text-ink-soft leading-[1.65] mb-8 pl-5 border-l-2 border-brass">
              A 1923 Craftsman revival, stripped back to its original bones and rebuilt
              with the same techniques the first carpenters used — only this time, to
              last another century.
            </p>

            {/* Description */}
            <p className="text-ink-soft leading-[1.75] mb-6">
              The homeowners came to us after three other contractors had declined the
              job. The structure had 101 years of settled foundation, original lath and
              plaster, and decorative millwork that couldn&apos;t be replaced — only
              matched. We spent four months documenting every detail before demolition,
              then reconstructed the interior using the original floor plan, restored
              the redwood beams, and matched every piece of trim in our own millwork
              shop.
            </p>

            {/* Specs grid */}
            <dl className="grid grid-cols-2 gap-x-7 gap-y-5 pt-7 mt-auto border-t border-line m-0">
              {specs.map((spec) => (
                <div key={spec.label}>
                  <dt className="text-[9.5px] tracking-[0.16em] uppercase text-ink-muted font-semibold mb-1">
                    {spec.label}
                  </dt>
                  <dd className="font-display text-base text-ink m-0">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}