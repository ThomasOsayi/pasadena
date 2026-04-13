type Client = {
    name: string;
    category: string;
  };
  
  const clients: Client[] = [
    { name: "Ritz-Carlton", category: "Hospitality" },
    { name: "UCLA Wet Laboratories", category: "Education" },
    { name: "Edwards Air Force Base", category: "Federal" },
    { name: "Starbucks Long Beach", category: "Retail" },
    { name: "Pasadena Convention Center", category: "Civic" },
    { name: "Pasadena Court of Appeals", category: "Government" },
    { name: "Martin Luther King Hospital", category: "Healthcare" },
    { name: "Ambassador College", category: "Education" },
    { name: "Parsons Corporation", category: "Engineering" },
    { name: "Pasadena Conservatory of Music", category: "Arts" },
    { name: "Western Justice Center", category: "Civic" },
    { name: "American Legion Post #13", category: "Civic" },
  ];
  
  export default function Clients() {
    return (
      <section id="clients" className="bg-paper py-24 lg:py-28 text-center">
        <div className="container-site">
          <span className="eyebrow eyebrow-centered mb-6">A Trusted Name</span>
  
          <h2 className="font-display text-[clamp(32px,3.5vw,48px)] font-light max-w-[720px] mx-auto mb-6">
            Chosen by institutions that{" "}
            <em className="italic text-burgundy font-normal">don&apos;t compromise</em>.
          </h2>
  
          <p className="text-ink-soft max-w-[580px] mx-auto mb-16 text-base">
            Over five decades, we&apos;ve earned the trust of Southern California&apos;s
            most respected universities, government agencies, hospitals, and luxury brands.
          </p>
  
          {/* Client grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 border-t border-l border-line">
            {clients.map((client) => (
              <div
                key={client.name}
                className="px-6 py-9 border-r border-b border-line flex flex-col items-center justify-center min-h-[130px] transition-colors duration-250 hover:bg-cream"
              >
                <div className="font-display text-[17px] font-medium text-ink text-center leading-tight">
                  {client.name}
                </div>
                <div className="text-[10px] tracking-[0.14em] uppercase text-ink-muted mt-1.5">
                  {client.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }