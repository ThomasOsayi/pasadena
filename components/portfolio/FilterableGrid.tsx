"use client";

import { useState, useMemo } from "react";

type Category =
  | "All"
  | "Commercial"
  | "Residential"
  | "Historic"
  | "Institutional"
  | "Hospitality";

type Size = "tall" | "wide" | "medium" | "square" | "small" | "hero";

type Project = {
  id: string;
  title: string;
  category: Exclude<Category, "All">;
  categoryLabel: string;
  year: string;
  meta?: string;
  image: string;
  size: Size;
};

const projects: Project[] = [
  {
    id: "san-rafael",
    title: "San Rafael Heights Estate",
    category: "Historic",
    categoryLabel: "Historic · Residential",
    year: "2023",
    meta: "18 months",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&h=900&fit=crop",
    size: "tall",
  },
  {
    id: "arroyo-kitchen",
    title: "Arroyo Kitchen",
    category: "Residential",
    categoryLabel: "Residential",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&h=400&fit=crop",
    size: "medium",
  },
  {
    id: "oak-knoll",
    title: "Oak Knoll Library",
    category: "Residential",
    categoryLabel: "Residential",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&h=500&fit=crop",
    size: "small",
  },
  {
    id: "old-town-offices",
    title: "Old Town Offices",
    category: "Commercial",
    categoryLabel: "Commercial",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    size: "medium",
  },
  {
    id: "colorado-bistro",
    title: "Colorado Bistro",
    category: "Hospitality",
    categoryLabel: "Hospitality",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1564540583246-934409427776?w=500&h=500&fit=crop",
    size: "small",
  },
  {
    id: "ucla-wet-lab",
    title: "UCLA Wet Laboratory Renovation",
    category: "Institutional",
    categoryLabel: "Institutional",
    year: "2024",
    meta: "Phase III",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&h=500&fit=crop",
    size: "wide",
  },
  {
    id: "prospect-park",
    title: "Prospect Park Powder Room",
    category: "Residential",
    categoryLabel: "Residential",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=500&h=500&fit=crop",
    size: "small",
  },
  {
    id: "ritz-carlton",
    title: "Ritz-Carlton\nLobby Refresh",
    category: "Commercial",
    categoryLabel: "Commercial",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=800&fit=crop",
    size: "square",
  },
  {
    id: "conservatory",
    title: "Pasadena Conservatory\nof Music — Concert Hall",
    category: "Historic",
    categoryLabel: "Historic · Institutional",
    year: "2022",
    meta: "11 months",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&h=600&fit=crop",
    size: "hero",
  },
  {
    id: "linda-vista",
    title: "Linda Vista Primary",
    category: "Residential",
    categoryLabel: "Residential",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&h=500&fit=crop",
    size: "small",
  },
  {
    id: "green-street",
    title: "Green Street Offices",
    category: "Commercial",
    categoryLabel: "Commercial",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&h=400&fit=crop",
    size: "medium",
  },
  {
    id: "starbucks-lb",
    title: "Starbucks Long Beach",
    category: "Hospitality",
    categoryLabel: "Hospitality",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=500&h=500&fit=crop",
    size: "small",
  },
  {
    id: "madison-suite",
    title: "Madison Primary Suite",
    category: "Residential",
    categoryLabel: "Residential",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
    size: "medium",
  },
  {
    id: "mlk-east-wing",
    title: "MLK Hospital\nEast Wing",
    category: "Institutional",
    categoryLabel: "Institutional",
    year: "2022",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500&h=500&fit=crop",
    size: "small",
  },
];

const categories: Category[] = [
  "All",
  "Commercial",
  "Residential",
  "Historic",
  "Institutional",
  "Hospitality",
];

/* ============================================
   SIZE → CLASS MAPPING
   Each size controls grid-column span and grid-row span
   ============================================ */
const sizeClasses: Record<Size, string> = {
  tall: "lg:col-span-5 lg:row-span-2 sm:col-span-3",
  wide: "lg:col-span-7 lg:row-span-1 sm:col-span-6",
  medium: "lg:col-span-4 lg:row-span-1 sm:col-span-3",
  square: "lg:col-span-3 lg:row-span-2 sm:col-span-3",
  small: "lg:col-span-3 lg:row-span-1 sm:col-span-3",
  hero: "lg:col-span-6 lg:row-span-2 sm:col-span-6",
};

export default function FilterableGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  // Filter projects based on active category
  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  // Count projects per category (for the filter pill counts)
  const counts = useMemo(() => {
    const c: Record<Category, number> = {
      All: projects.length,
      Commercial: 0,
      Residential: 0,
      Historic: 0,
      Institutional: 0,
      Hospitality: 0,
    };
    projects.forEach((p) => {
      c[p.category]++;
    });
    return c;
  }, []);

  return (
    <>
      {/* Filter section */}
      <section className="bg-paper pt-24 lg:pt-28 pb-10">
        <div className="container-site">
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-15 items-end mb-12">
            <div>
              <span className="eyebrow">Browse the Archive</span>
              <h2 className="font-display text-[clamp(36px,4vw,56px)] font-light mt-[18px]">
                Every project,{" "}
                <em className="italic text-burgundy font-normal">every category</em>.
              </h2>
            </div>
            <div className="lg:text-right font-display italic text-ink-muted text-[15px]">
              <strong className="not-italic text-burgundy font-semibold text-[17px]">
                {filteredProjects.length}
              </strong>{" "}
              {activeCategory === "All"
                ? "selected projects from the past decade"
                : `projects in ${activeCategory.toLowerCase()}`}
            </div>
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap overflow-x-auto border-t border-b border-line">
            {categories.map((cat, i) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap px-6 py-5 text-xs font-semibold tracking-[0.14em] uppercase cursor-pointer transition-all duration-250 flex items-center gap-2.5 ${
                    i < categories.length - 1 ? "border-r border-line" : ""
                  } ${
                    isActive
                      ? "bg-burgundy text-cream"
                      : "bg-paper text-ink-soft hover:bg-cream hover:text-burgundy"
                  }`}
                >
                  {cat === "All" ? "All Work" : cat}
                  <span
                    className={`font-display italic font-normal text-xs normal-case tracking-normal ${
                      isActive ? "text-brass-light/85" : "opacity-70"
                    }`}
                  >
                    {String(counts[cat]).padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project grid */}
      <section className="bg-paper pt-10 pb-24 lg:pb-32">
        <div className="container-site">
          <div
            className="grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-12 gap-5"
            style={{ gridAutoRows: "180px" }}
          >
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className={`group relative overflow-hidden bg-burgundy cursor-pointer h-[240px] sm:h-auto ${sizeClasses[project.size]}`}
              >
                {/* Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  style={{
                    backgroundImage: `url('${project.image}')`,
                    filter: "saturate(0.88) contrast(1.05)",
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  aria-label={project.title.replace(/\n/g, " ")}
                />

                {/* Expand icon */}
                <div className="absolute top-[18px] right-[18px] w-[34px] h-[34px] border border-cream/40 bg-burgundy-deep/40 backdrop-blur-sm grid place-items-center text-cream opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                  </svg>
                </div>

                {/* Gradient overlay + content */}
                <div
                  className="absolute inset-0 p-6 flex flex-col justify-end text-cream"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(61, 15, 22, 0.94) 0%, rgba(61, 15, 22, 0.3) 45%, transparent 80%)",
                  }}
                >
                  <div className="text-[9.5px] tracking-[0.16em] uppercase text-brass-light mb-1.5 font-semibold">
                    {project.categoryLabel}
                  </div>
                  <h3
                    className={`font-display font-medium leading-tight mb-1 whitespace-pre-line ${
                      project.size === "tall" || project.size === "hero"
                        ? "text-[28px]"
                        : "text-[21px]"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <div className="font-display italic text-[13px] text-cream/65">
                    {project.year}
                    {project.meta && ` · ${project.meta}`}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load more button */}
          {activeCategory === "All" && (
            <div className="flex justify-center mt-14">
              <button className="inline-flex items-center gap-2.5 px-[22px] py-[13px] text-[12.5px] font-semibold tracking-[0.1em] uppercase bg-transparent text-ink border border-ink hover:bg-ink hover:text-cream transition-all duration-250 cursor-pointer">
                Load 10 More Projects
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}