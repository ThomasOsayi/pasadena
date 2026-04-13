import Image from "next/image";
import Link from "next/link";

type Project = {
  title: string;
  category: string;
  image: string;
  alt: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "Marengo Avenue\nEstate Restoration",
    category: "Historic Restoration · 2024",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&h=900&fit=crop",
    alt: "Historic Pasadena estate restoration project",
    featured: true,
  },
  {
    title: "Arroyo Kitchen",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&h=400&fit=crop",
    alt: "Modern kitchen remodel in Arroyo neighborhood",
  },
  {
    title: "Old Town Offices",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    alt: "Commercial office renovation in Old Pasadena",
  },
  {
    title: "San Rafael Spa Bath",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop",
    alt: "Luxury spa bathroom design",
  },
  {
    title: "Colorado Blvd Bistro",
    category: "Hospitality",
    image:
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&h=400&fit=crop",
    alt: "Restaurant interior design on Colorado Boulevard",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-burgundy-deep text-cream py-24 lg:py-32">
      <div className="container-site">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-8 lg:gap-10 mb-16 lg:mb-18">
          <div>
            <span className="eyebrow eyebrow-light">Selected Work</span>
            <h2 className="font-display text-[clamp(40px,4.5vw,64px)] font-light mt-6 max-w-[600px]">
              Five decades of{" "}
              <em className="italic text-brass-light font-normal">finished</em> work.
            </h2>
          </div>
          <Link
            href="#"
            className="inline-flex items-center gap-2.5 px-[22px] py-[13px] text-[12.5px] font-semibold tracking-[0.1em] uppercase bg-transparent text-cream border border-cream/40 hover:bg-cream hover:text-burgundy-deep hover:border-cream transition-all duration-250 self-start"
          >
            View Full Portfolio
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr] grid-rows-[auto] lg:grid-rows-[320px_320px] gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`group relative overflow-hidden cursor-pointer bg-burgundy h-72 lg:h-auto ${
                project.featured ? "lg:row-span-2" : ""
              }`}
            >
              <Image
                src={project.image}
                alt={project.alt}
                fill
                sizes={
                  project.featured
                    ? "(max-width: 1024px) 100vw, 45vw"
                    : "(max-width: 1024px) 100vw, 28vw"
                }
                className="object-cover saturate-[0.85] contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy-deep/95 via-burgundy-deep/20 to-transparent p-7 flex flex-col justify-end text-cream">
                <div className="text-[10px] tracking-[0.16em] uppercase text-brass-light mb-2">
                  {project.category}
                </div>
                <div
                  className={`font-display font-normal leading-tight whitespace-pre-line ${
                    project.featured ? "text-3xl" : "text-[22px]"
                  }`}
                >
                  {project.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}