import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import projCommercial from "@/assets/project-commercial.jpg";
import projResidential from "@/assets/project-residential.jpg";
import projIndustrial from "@/assets/project-industrial.jpg";
import projHotel from "@/assets/project-hotel.jpg";
import projMedical from "@/assets/project-medical.jpg";
import projRenovation from "@/assets/project-renovation.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects | Summit Construction Group" },
      { name: "description", content: "Explore Summit's portfolio of commercial, residential, and industrial construction projects across the Mountain West." },
      { property: "og:title", content: "Projects Portfolio | Summit" },
      { property: "og:description", content: "Award-winning commercial, residential, and industrial projects." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

const projects = [
  { img: projCommercial, cat: "Commercial", title: "Meridian Office Tower", loc: "Denver, CO", value: "$48M", date: "2024", desc: "12-story Class A office tower with 280,000 sf of leasable space." },
  { img: projResidential, cat: "Residential", title: "Highland Custom Estate", loc: "Aspen, CO", value: "$6.2M", date: "2024", desc: "8,400 sf custom mountain residence with infinity pool and guest house." },
  { img: projIndustrial, cat: "Industrial", title: "Pinecrest Logistics Hub", loc: "Aurora, CO", value: "$31M", date: "2023", desc: "420,000 sf cross-dock distribution facility with 42 loading bays." },
  { img: projHotel, cat: "Commercial", title: "Skyline Boutique Hotel", loc: "Salt Lake City, UT", value: "$22M", date: "2023", desc: "9-story boutique hotel with rooftop bar and ground-floor restaurant." },
  { img: projMedical, cat: "Commercial", title: "Cascade Medical Center", loc: "Boulder, CO", value: "$54M", date: "2023", desc: "180,000 sf ambulatory care facility with imaging and surgical suites." },
  { img: projRenovation, cat: "Residential", title: "Lakeview Penthouse Remodel", loc: "Denver, CO", value: "$1.8M", date: "2024", desc: "Full gut renovation of 4,200 sf penthouse with custom millwork." },
];

const cats = ["All", "Commercial", "Residential", "Industrial"] as const;

function ProjectsPage() {
  const [active, setActive] = useState<(typeof cats)[number]>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.cat === active);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Portfolio"
        title="Built to last. Built to inspire."
        subtitle="A selection of recent work across commercial, residential, and industrial sectors. Every project: delivered safely, on schedule, on budget."
      />

      <section className="section-pad bg-background">
        <div className="container-x">
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition ${
                  active === c
                    ? "bg-[var(--navy)] text-white"
                    : "bg-secondary text-secondary-foreground hover:bg-[var(--navy)]/10"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <div key={p.title} className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-[var(--shadow-elegant)] transition-all">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.title} width={1280} height={896} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--orange)]">{p.cat}</span>
                    <span className="text-xs text-muted-foreground">{p.date}</span>
                  </div>
                  <h3 className="mt-3 text-xl font-bold text-[var(--navy)]">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{p.loc}</p>
                  <p className="mt-3 text-sm text-foreground/80 leading-relaxed">{p.desc}</p>
                  <div className="mt-5 pt-5 border-t border-border flex items-center justify-between">
                    <span className="font-bold text-[var(--navy)]">{p.value}</span>
                    <span className="text-xs text-muted-foreground">Project Value</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--navy)] text-white text-center">
        <div className="container-x max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold">Your project, our next case study.</h2>
          <p className="mt-5 text-lg text-white/75">Request a portfolio packet or schedule a site visit to one of our active projects.</p>
          <Link to="/contact" className="btn-primary mt-8">Request a Quote <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </SiteLayout>
  );
}
