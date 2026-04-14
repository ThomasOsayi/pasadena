type Client = {
  name: string;
  since: string;
};

type Category = {
  numeral: string;
  emphasis: string;
  suffix: string;
  clients: Client[];
};

const categories: Category[] = [
  {
    numeral: "i.",
    emphasis: "Federal &",
    suffix: "Government",
    clients: [
      { name: "Edwards Air Force Base", since: "Client Since 1994" },
      { name: "Pasadena Court of Appeals", since: "Client Since 1996" },
      { name: "Western Justice Center", since: "Client Since 2001" },
    ],
  },
  {
    numeral: "ii.",
    emphasis: "Education &",
    suffix: "Research",
    clients: [
      { name: "UCLA Wet Laboratories", since: "Client Since 2004" },
      { name: "Ambassador College", since: "Client Since 1983" },
      { name: "Pasadena Conservatory of Music", since: "Client Since 1987" },
    ],
  },
  {
    numeral: "iii.",
    emphasis: "Healthcare",
    suffix: "",
    clients: [
      { name: "Martin Luther King Hospital", since: "Client Since 1998" },
    ],
  },
  {
    numeral: "iv.",
    emphasis: "Hospitality &",
    suffix: "Retail",
    clients: [
      { name: "Ritz-Carlton", since: "Client Since 2013" },
      { name: "Starbucks — Long Beach", since: "Client Since 2013" },
    ],
  },
  {
    numeral: "v.",
    emphasis: "Civic &",
    suffix: "Cultural",
    clients: [
      { name: "Pasadena Convention Center", since: "Client Since 1988" },
      { name: "American Legion Post #13", since: "Client Since 1979" },
    ],
  },
  {
    numeral: "vi.",
    emphasis: "Engineering &",
    suffix: "Corporate",
    clients: [{ name: "Parsons Corporation", since: "Client Since 1991" }],
  },
];

export default function ClientWall() {
  return (
    <section className="bg-paper py-24 lg:py-32">
      <div className="container-site">
        {/* Section header */}
        <div className="text-center max-w-[720px] mx-auto mb-20">
          <span className="eyebrow eyebrow-centered mb-6">The Full Roster</span>
          <h2 className="font-display text-[clamp(40px,4.5vw,64px)] font-light mt-6 mb-5">
            Twelve institutions.{" "}
            <em className="italic text-burgundy font-normal">Five decades</em>. Zero
            shortcuts.
          </h2>
          <p className="text-ink-soft leading-[1.75]">
            Organized by sector. Every client on this list has brought us back for at
            least one additional project — because the first one worked.
          </p>
        </div>

        {/* Categories */}
        {categories.map((category) => {
          const clientCount = category.clients.length;
          const countLabel =
            clientCount === 1 ? "1 Client" : `${clientCount} Clients`;

          return (
            <div key={category.numeral} className="mb-[72px] last:mb-0">
              {/* Category header */}
              <div className="flex items-baseline gap-5 pb-4 mb-6 border-b border-line">
                <span className="font-display italic text-sm text-burgundy">
                  {category.numeral}
                </span>
                <h3 className="font-display text-[26px] font-medium flex-1">
                  <em className="italic text-burgundy font-medium">
                    {category.emphasis}
                  </em>
                  {category.suffix && ` ${category.suffix}`}
                </h3>
                <span className="text-[10px] tracking-[0.16em] uppercase text-ink-muted font-semibold">
                  {countLabel}
                </span>
              </div>

              {/* Client cells */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-line">
                {category.clients.map((client) => (
                  <div
                    key={client.name}
                    className="flex flex-col items-center justify-center text-center gap-1.5 px-6 py-8 min-h-[130px] border-r border-b border-line transition-colors duration-300 hover:bg-cream"
                  >
                    <div className="font-display text-[17px] font-medium text-ink leading-tight">
                      {client.name}
                    </div>
                    <div className="text-[10px] tracking-[0.14em] uppercase text-brass font-semibold">
                      {client.since}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}