type Reassurance = {
  icon: React.ReactNode;
  title: string;
  detail?: string;
};

const items: Reassurance[] = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z" />
      </svg>
    ),
    title: "24-hour",
    detail: "turnaround",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 22s-8-4.5-8-11.8A5.2 5.2 0 0 1 12 5a5.2 5.2 0 0 1 8 5.2C20 17.5 12 22 12 22z" />
      </svg>
    ),
    title: "Always free",
    detail: "no obligation",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="M22 4L12 14.01l-3-3" />
      </svg>
    ),
    title: "CSLB #421907",
    detail: "Licensed · Bonded · Insured",
  },
];

export default function ReassuranceBar() {
  return (
    <section className="bg-burgundy-deep text-cream py-6">
      <div className="container-site flex flex-col sm:flex-row gap-4 sm:gap-12 items-center justify-center flex-wrap text-[13px]">
        {items.map((item, i) => (
          <div key={item.title} className="flex items-center gap-2.5">
            <span className="w-4 h-4 text-brass-light flex-shrink-0">
              {item.icon}
            </span>
            <span>
              <strong className="font-display font-medium text-cream">
                {item.title}
              </strong>
              {item.detail && (
                <span className="text-cream/70">
                  {" · "}
                  {item.detail}
                </span>
              )}
            </span>
            {i < items.length - 1 && (
              <span
                aria-hidden
                className="hidden sm:inline-block w-px h-5 bg-cream/15 ml-10"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}