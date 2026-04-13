const stats = [
    { num: "1971", emphasis: "1971", label: "Founded in Pasadena", isYear: true },
    { num: "2,400", emphasis: "+", label: "Projects Completed" },
    { num: "24", emphasis: "h", label: "Estimate Turnaround" },
    { num: "100", emphasis: "%", label: "Eco-Friendly Practices" },
  ];
  
  export default function Stats() {
    return (
      <section className="bg-burgundy text-cream py-14 border-t border-b border-burgundy-deep">
        <div className="container-site grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-10">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center relative ${
                i < stats.length - 1
                  ? "lg:after:content-[''] lg:after:absolute lg:after:right-[-20px] lg:after:top-1/2 lg:after:-translate-y-1/2 lg:after:w-px lg:after:h-[60%] lg:after:bg-cream/20"
                  : ""
              }`}
            >
              <div className="font-display text-[clamp(40px,5vw,64px)] font-light leading-none text-cream">
                {stat.isYear ? (
                  <em className="italic text-brass-light font-normal">{stat.num}</em>
                ) : (
                  <>
                    {stat.num}
                    <em className="italic text-brass-light font-normal">{stat.emphasis}</em>
                  </>
                )}
              </div>
              <div className="mt-3.5 text-[11px] tracking-[0.16em] uppercase text-cream/75">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }