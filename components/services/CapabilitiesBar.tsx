const facilityTypes = [
    "Commercial",
    "Retail",
    "Historical",
    "Hospital",
    "Educational",
    "Government",
    "Multi-Family",
  ];
  
  export default function CapabilitiesBar() {
    return (
      <section className="bg-burgundy text-cream py-9 border-t border-b border-burgundy-deep">
        <div className="container-site flex items-center justify-between gap-10 flex-wrap">
          {/* Label */}
          <div className="text-[10px] tracking-[0.18em] uppercase text-brass-light whitespace-nowrap flex items-center gap-3">
            We Specialize In
            <span aria-hidden className="block w-8 h-px bg-brass-light" />
          </div>
  
          {/* Types */}
          <ul className="flex gap-6 lg:gap-9 flex-wrap items-center list-none">
            {facilityTypes.map((type, i) => (
              <li
                key={type}
                className="font-display text-[15px] text-cream relative"
              >
                {type}
                {i < facilityTypes.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute -right-[14px] lg:-right-[22px] top-1/2 -translate-y-1/2 text-cream/35"
                  >
                    ·
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }