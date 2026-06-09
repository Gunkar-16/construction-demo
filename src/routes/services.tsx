import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Home, Factory, Hammer, Boxes, ClipboardCheck, Ruler, Map } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Summit Construction Group" },
      { name: "description", content: "General contracting, commercial, residential, renovations, concrete, project management, design-build, and site development services." },
      { property: "og:title", content: "Construction Services | Summit" },
      { property: "og:description", content: "Eight full-service construction capabilities, all in-house." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  { icon: ClipboardCheck, title: "General Contracting", desc: "Single-point accountability across every trade. We coordinate schedules, vendors, inspections, and quality — so you don't have to.", features: ["Subcontractor management", "Schedule control", "Quality assurance"] },
  { icon: Building2, title: "Commercial Construction", desc: "Office buildings, retail centers, hospitality, healthcare, and mixed-use developments built to commercial tenant standards.", features: ["Class A office", "Retail & hospitality", "Healthcare facilities"] },
  { icon: Home, title: "Residential Construction", desc: "Custom luxury homes and multi-family developments crafted with the same precision we bring to commercial work.", features: ["Custom homes", "Multi-family", "Luxury renovations"] },
  { icon: Hammer, title: "Renovations & Remodeling", desc: "Tenant improvements, adaptive reuse, and historic renovations — delivered with minimal disruption to operations.", features: ["Tenant improvements", "Adaptive reuse", "Historic preservation"] },
  { icon: Boxes, title: "Concrete & Foundations", desc: "Self-performed concrete: foundations, slabs, tilt-up walls, decorative finishes, and structural systems.", features: ["Tilt-up panels", "Post-tension slabs", "Decorative finishes"] },
  { icon: ClipboardCheck, title: "Project Management", desc: "End-to-end planning, cost control, RFI tracking, and reporting through our digital project portal.", features: ["Real-time dashboards", "Cost management", "Risk mitigation"] },
  { icon: Ruler, title: "Design-Build Services", desc: "Integrated design and construction under one contract. Faster timelines, lower costs, single accountability.", features: ["In-house architects", "Value engineering", "Single contract"] },
  { icon: Map, title: "Site Development", desc: "Grading, utilities, paving, retaining walls, and site improvements — preparing the ground for what comes next.", features: ["Earthwork & grading", "Underground utilities", "Paving & striping"] },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Services"
        title="Eight capabilities. One trusted partner."
        subtitle="From the first feasibility study to the final punch list, Summit handles every phase of construction in-house — saving you cost, time, and coordination headaches."
      />

      <section className="section-pad bg-background">
        <div className="container-x grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group relative bg-card p-8 rounded-2xl border border-border hover:border-[var(--orange)]/40 hover:shadow-[var(--shadow-elegant)] transition-all">
              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-xl bg-[var(--navy)] text-white flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--orange)] transition">
                  <s.icon className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[var(--navy)]">{s.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {s.features.map((f) => (
                      <li key={f} className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-medium">{f}</li>
                    ))}
                  </ul>
                  <Link to="/contact" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[var(--orange)] group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="section-pad bg-secondary">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow">Our Process</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[var(--navy)]">A predictable path to occupancy</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { n: "01", t: "Discovery", d: "We learn your goals, site, schedule, and budget constraints." },
              { n: "02", t: "Preconstruction", d: "Cost modeling, value engineering, and constructibility review." },
              { n: "03", t: "Construction", d: "Self-perform crews and trusted trade partners deliver the build." },
              { n: "04", t: "Closeout", d: "Punch list, commissioning, training, and 12-month warranty." },
            ].map((step) => (
              <div key={step.n} className="bg-card p-6 rounded-xl border border-border">
                <div className="text-5xl font-bold text-[var(--orange)]/30">{step.n}</div>
                <h3 className="mt-3 text-xl font-bold text-[var(--navy)]">{step.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--navy-deep)] text-white text-center">
        <div className="container-x max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold">Don't see exactly what you need?</h2>
          <p className="mt-5 text-lg text-white/75">Our team has tackled nearly every project type imaginable. Tell us what you're planning — we'll tell you exactly how we can help.</p>
          <Link to="/contact" className="btn-primary mt-8">Talk to a Project Lead <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </SiteLayout>
  );
}
