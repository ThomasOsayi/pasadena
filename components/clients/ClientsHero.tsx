import Link from "next/link";

const clientNames = [
  "Ritz-Carlton",
  "UCLA Wet Laboratories",
  "Edwards Air Force Base",
  "Starbucks",
  "Pasadena Convention Center",
  "Pasadena Court of Appeals",
  "Martin Luther King Hospital",
  "Ambassador College",
  "Parsons Corporation",
  "Pasadena Conservatory of Music",
  "Western Justice Center",
  "American Legion Post #13",
];

export default function ClientsHero() {
  return (
    <section className="bg-paper pt-20 pb-0">
      <div className="container-site">
        {/* Breadcrumb */}
        <div className="text-[11px] tracking-[0.16em] uppercase text-ink-muted mb-6">
          <Link href="/" className="text-burgundy hover:underline">
            Home
          </Link>
          <span className="mx-3 opacity-50">/</span>
          Clients
        </div>

        <span className="eyebrow mb-[18px]">Our Clients</span>

        <h1 className="font-display text-[clamp(54px,7.5vw,124px)] font-light leading-[0.95] mt-[18px] mb-9 max-w-[1000px]">
          Trusted by the institutions that{" "}
          <em className="italic text-burgundy font-normal">built Pasadena</em>.
        </h1>

        <p className="font-display italic text-[20px] text-ink-soft leading-[1.55] max-w-[640px] mb-[72px]">
          From federal research labs to historic landmarks, from Fortune 500 retailers
          to neighborhood civic halls — over five decades we&rsquo;ve earned the trust
          of Southern California&rsquo;s most discerning clients.
        </p>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden bg-burgundy-deep text-cream py-8 border-t border-b border-burgundy-deep">
        {/* Left fade */}
        <div
          aria-hidden
          className="absolute top-0 bottom-0 left-0 w-[120px] z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, var(--color-burgundy-deep), transparent)",
          }}
        />
        {/* Right fade */}
        <div
          aria-hidden
          className="absolute top-0 bottom-0 right-0 w-[120px] z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, var(--color-burgundy-deep), transparent)",
          }}
        />

        {/* Scrolling track */}
        <div
          className="marquee-track flex whitespace-nowrap"
          style={{ gap: "64px" }}
          aria-hidden
        >
          {/* First copy */}
          {clientNames.map((name) => (
            <div
              key={`a-${name}`}
              className="font-display text-[22px] lg:text-[28px] font-normal text-cream flex items-center gap-12 lg:gap-16"
            >
              {name}
              <span className="text-xs text-brass-light">◆</span>
            </div>
          ))}
          {/* Second copy (for seamless loop) */}
          {clientNames.map((name) => (
            <div
              key={`b-${name}`}
              className="font-display text-[22px] lg:text-[28px] font-normal text-cream flex items-center gap-12 lg:gap-16"
            >
              {name}
              <span className="text-xs text-brass-light">◆</span>
            </div>
          ))}
        </div>

        {/* Accessible client list for screen readers */}
        <span className="sr-only">
          Client list: {clientNames.join(", ")}
        </span>
      </div>
    </section>
  );
}
