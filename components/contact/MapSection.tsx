import Link from "next/link";

/** Replace with your own Share → Embed map URL from Google Maps if needed. */
const MAP_EMBED_SRC =
  "https://www.google.com/maps?q=135+N.+Marengo+Avenue,+Pasadena,+CA+91101&z=16&output=embed";

export default function MapSection() {
  return (
    <section className="bg-paper py-24 lg:py-32">
      <div className="container-site">
        {/* Header */}
        <div className="text-center max-w-[680px] mx-auto mb-[60px]">
          <span className="eyebrow eyebrow-centered mb-[22px]">
            Find the Workshop
          </span>
          <h2 className="font-display text-[clamp(36px,4vw,56px)] font-light mt-[22px] mb-5">
            Same <em className="italic text-burgundy font-normal">workshop</em>.
            Same <em className="italic text-burgundy font-normal">corner</em>.
            Since 1971.
          </h2>
          <p className="text-ink-soft leading-[1.75]">
            Our offices and millwork shop have been at 135 N. Marengo Ave in Old
            Pasadena for over five decades. Drop by any weekday, or use the map to
            get directions.
          </p>
        </div>

        {/* Map container */}
        <div className="relative h-[360px] sm:h-[480px] border border-line overflow-hidden">
          <iframe
            src={MAP_EMBED_SRC}
            width="100%"
            height="100%"
            className="absolute inset-0 h-full w-full bg-cream"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="PCI office location"
          />

          {/* Info card — hidden on mobile, floating on desktop */}
          <div className="hidden lg:block absolute top-10 left-10 z-40 bg-paper border border-line p-7 shadow-lg max-w-[300px]">
            <div className="text-[9.5px] tracking-[0.16em] uppercase text-brass font-semibold mb-2.5">
              Our Location
            </div>
            <div className="font-display text-[22px] font-medium leading-tight mb-2">
              Pasadena Construction & Interiors
            </div>
            <div className="text-[13px] text-ink-soft leading-[1.55] mb-4">
              135 N. Marengo Avenue
              <br />
              Pasadena, CA 91101
            </div>
            <Link
              href="https://maps.google.com/?q=135+N+Marengo+Ave+Pasadena+CA+91101"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.14em] uppercase text-burgundy hover:underline"
            >
              Get Directions
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Mobile info card (below map) */}
        <div className="lg:hidden bg-paper border border-line p-7 mt-5">
          <div className="text-[9.5px] tracking-[0.16em] uppercase text-brass font-semibold mb-2.5">
            Our Location
          </div>
          <div className="font-display text-[22px] font-medium leading-tight mb-2">
            Pasadena Construction & Interiors
          </div>
          <div className="text-[13px] text-ink-soft leading-[1.55] mb-4">
            135 N. Marengo Avenue, Pasadena, CA 91101
          </div>
          <Link
            href="https://maps.google.com/?q=135+N+Marengo+Ave+Pasadena+CA+91101"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.14em] uppercase text-burgundy hover:underline"
          >
            Get Directions
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
