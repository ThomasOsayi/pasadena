import Link from "next/link";

type MetaRow = {
  label: string;
  value: string;
  emphasis?: string;
};

const metaRows: MetaRow[] = [
  { label: "Total Projects", value: "2,400", emphasis: "+" },
  { label: "Years Active", value: "", emphasis: "54" },
  { label: "Oldest Project Still Standing", value: "", emphasis: "1972" },
];

export default function PortfolioHero() {
  return (
    <section className="bg-paper pt-20 pb-16">
      <div className="container-site">
        {/* Breadcrumb */}
        <div className="text-[11px] tracking-[0.16em] uppercase text-ink-muted mb-6">
          <Link href="/" className="text-burgundy hover:underline">
            Home
          </Link>
          <span className="mx-3 opacity-50">/</span>
          Portfolio
        </div>

        <span className="eyebrow mb-5">Selected Work</span>

        {/* Split layout */}
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20 items-end mt-5">
          {/* Headline */}
          <h1 className="font-display text-[clamp(54px,7vw,116px)] font-light leading-[0.96]">
            Five decades
            <br />
            of <em className="italic text-burgundy font-normal">finished</em> work.
          </h1>

          {/* Metadata table */}
          <dl className="flex flex-col gap-[18px] pb-3.5 m-0">
            {metaRows.map((row, i) => (
              <div
                key={row.label}
                className={`flex justify-between items-baseline pb-3.5 ${
                  i < metaRows.length - 1 ? "border-b border-line" : ""
                }`}
              >
                <dt className="text-[10px] tracking-[0.16em] uppercase text-ink-muted font-semibold">
                  {row.label}
                </dt>
                <dd className="font-display text-[18px] text-burgundy m-0">
                  {row.value}
                  {row.emphasis && (
                    <em className="italic text-brass font-normal">
                      {row.emphasis}
                    </em>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}