export default function TopBar() {
    return (
      <div className="bg-burgundy-deep text-cream text-[12.5px] tracking-wide py-2.5">
        <div className="container-site flex justify-between items-center gap-6 flex-wrap">
          {/* Left: contact info */}
          <div className="flex gap-7 items-center">
            <span className="flex items-center gap-2 opacity-90">
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="opacity-70"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              626.356.9600
            </span>
  
            <span className="flex items-center gap-2 opacity-90 hidden sm:flex">
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="opacity-70"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              admin@pasadenainteriors.com
            </span>
  
            <span className="flex items-center gap-2 opacity-90 hidden md:flex">
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="opacity-70"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              135 N. Marengo Ave, Pasadena
            </span>
          </div>
  
          {/* Right: trust badges */}
          <div className="flex items-center gap-4 hidden md:flex">
            <span className="border border-cream/25 px-2.5 py-[3px] text-[10.5px] tracking-[0.12em] uppercase">
              Licensed · Bonded · Insured
            </span>
            <span className="border border-cream/25 px-2.5 py-[3px] text-[10.5px] tracking-[0.12em] uppercase">
              CSLB #421907
            </span>
          </div>
        </div>
      </div>
    );
  }