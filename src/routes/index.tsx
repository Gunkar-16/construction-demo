import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Building2, Home, Factory, Hammer, Boxes, ClipboardCheck,
  Ruler, Map, Star, ShieldCheck, Award, Users, TrendingUp, CheckCircle2, Quote, Phone,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import heroImg from "@/assets/hero-construction.jpg";
import ctaImg from "@/assets/cta-construction.jpg";
import projCommercial from "@/assets/project-commercial.jpg";
import projResidential from "@/assets/project-residential.jpg";
import projIndustrial from "@/assets/project-industrial.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Summit Construction Group | Building Excellence" },
      { name: "description", content: "Premium commercial, residential & industrial construction. 15+ years, 500+ projects, 98% client satisfaction. Request a quote today." },
      { property: "og:title", content: "Summit Construction Group | Building Excellence" },
      { property: "og:description", content: "Premium commercial, residential & industrial construction services." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const services = [
  { icon: ClipboardCheck, title: "General Contracting", desc: "Single-point accountability across every trade, schedule, and milestone." },
  { icon: Building2, title: "Commercial Construction", desc: "Offices, retail, hospitality, and mixed-use built on time, on budget." },
  { icon: Home, title: "Residential Construction", desc: "Custom homes and multi-family developments crafted with precision." },
  { icon: Hammer, title: "Renovations & Remodeling", desc: "Modernize, expand, and transform existing structures with minimal disruption." },
  { icon: Boxes, title: "Concrete & Foundations", desc: "Site-cast and precast concrete, foundations, and structural systems." },
  { icon: ClipboardCheck, title: "Project Management", desc: "End-to-end planning, cost control, and quality assurance you can rely on." },
  { icon: Ruler, title: "Design-Build Services", desc: "Integrated design and construction under one contract — faster and leaner." },
  { icon: Map, title: "Site Development", desc: "Earthwork, utilities, paving, and site improvements done right the first time." },
];

const projects = [
  { img: projCommercial, cat: "Commercial", title: "Meridian Office Tower", value: "$48M", date: "2024" },
  { img: projResidential, cat: "Residential", title: "Highland Custom Estate", value: "$6.2M", date: "2024" },
  { img: projIndustrial, cat: "Industrial", title: "Pinecrest Logistics Hub", value: "$31M", date: "2023" },
];

const testimonials = [
  { name: "Marcus Rivera", role: "VP Real Estate, Northland Holdings", quote: "Summit delivered our 12-story office tower three weeks ahead of schedule. Their precision and communication set a new bar for what we expect from a builder." },
  { name: "Dana Chen", role: "Principal, Atlas Architecture", quote: "We've partnered with Summit on six developments. They protect the design intent while solving constructability challenges before they become problems." },
  { name: "James O'Brien", role: "Operations Director, Pinecrest Logistics", quote: "From foundation to fit-out, the team was buttoned-up. Safety, quality, and reporting were truly best-in-class." },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative min-h-[100vh] flex items-center text-white overflow-hidden">
        <img
          src={heroImg}
          alt="Construction site at golden hour with crane and steel framework"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="container-x relative z-10 pt-24 animate-fade-up">
          <span className="eyebrow">Summit Construction Group</span>
          <h1 className="mt-5 text-5xl md:text-7xl lg:text-8xl font-bold max-w-5xl leading-[1.02]">
            Building Excellence <span className="text-[var(--orange)]">From Foundation</span> to Finish
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-white/85 max-w-2xl">
            Commercial, residential, and industrial construction services delivered with precision, safety, and craftsmanship.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary text-base">
              Request a Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/projects" className="btn-outline-light text-base">View Projects</Link>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 md:gap-12 max-w-2xl pb-12">
            {[
              { n: "15+", l: "Years Experience" },
              { n: "500+", l: "Projects Completed" },
              { n: "98%", l: "Client Satisfaction" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-3xl md:text-5xl font-bold text-[var(--orange)]">{s.n}</div>
                <div className="text-xs md:text-sm text-white/70 mt-1 uppercase tracking-wider">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section-pad bg-background">
        <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="eyebrow">About Summit</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[var(--navy)]">
              Three generations of builders. One uncompromising standard.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Since 2009, Summit Construction Group has delivered landmark projects across the Mountain West. We combine the discipline of a national general contractor with the responsiveness of a local partner — turning ambitious blueprints into buildings that last generations.
            </p>
            <ul className="mt-8 space-y-3">
              {["Self-perform capability across concrete, framing & finishes", "OSHA-verified safety program with 0.61 EMR", "Real-time project transparency for every client"].map((t) => (
                <li key={t} className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-[var(--orange)] mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{t}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" className="btn-ghost-dark mt-8">Learn About Us <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)]">
              <img src={ctaImg} alt="Aerial view of large construction site" width={1280} height={1600} loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[var(--orange)] text-white p-6 rounded-xl shadow-[var(--shadow-glow)] hidden md:block">
              <div className="text-4xl font-bold">15+</div>
              <div className="text-sm uppercase tracking-wider mt-1">Years Building</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-pad bg-secondary">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <span className="eyebrow">What We Build</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[var(--navy)]">Full-service construction, in-house expertise</h2>
            </div>
            <Link to="/services" className="btn-ghost-dark">All Services <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <div key={s.title} className="group bg-card p-7 rounded-xl border border-border hover:border-[var(--orange)]/40 hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-[var(--navy)] text-white flex items-center justify-center group-hover:bg-[var(--orange)] transition">
                  <s.icon className="w-6 h-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-[var(--navy)]">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <Link to="/services" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--orange)] group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-pad bg-background">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <span className="eyebrow">Featured Work</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[var(--navy)]">Projects that define skylines</h2>
            </div>
            <Link to="/projects" className="btn-ghost-dark">View All Projects <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <Link key={p.title} to="/projects" className="group relative overflow-hidden rounded-xl aspect-[4/5] block">
                <img src={p.img} alt={p.title} width={1280} height={1600} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)] via-[var(--navy-deep)]/30 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <span className="text-xs tracking-widest uppercase text-[var(--orange)] font-semibold">{p.cat}</span>
                  <h3 className="text-2xl font-bold mt-2">{p.title}</h3>
                  <div className="mt-3 flex gap-4 text-xs text-white/80">
                    <span>{p.value}</span><span>•</span><span>Completed {p.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-pad bg-[var(--navy-deep)] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(var(--orange) 1px, transparent 1px), linear-gradient(90deg, var(--orange) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
        <div className="container-x relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow">Why Summit</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold">The difference is in the details</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: "Safety First", desc: "Industry-leading EMR rating with zero-incident project goals." },
              { icon: Award, title: "Award-Winning", desc: "Recognized by ENR Top Contractors and AGC Build America." },
              { icon: Users, title: "Senior Team", desc: "Project leaders average 20+ years of construction experience." },
              { icon: TrendingUp, title: "On Time, On Budget", desc: "94% of projects delivered on or ahead of schedule." },
            ].map((f) => (
              <div key={f.title} className="text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-[var(--gradient-accent)] flex items-center justify-center shadow-[var(--shadow-glow)]">
                  <f.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="mt-5 text-xl font-bold">{f.title}</h3>
                <p className="mt-2 text-white/70 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-pad bg-background">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow">Clients</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[var(--navy)]">Trusted by leading developers</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-card p-8 rounded-xl border border-border hover:shadow-[var(--shadow-elegant)] transition-all">
                <Quote className="w-8 h-8 text-[var(--orange)]" />
                <div className="flex gap-0.5 mt-3">
                  {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="w-4 h-4 fill-[var(--orange)] text-[var(--orange)]" />))}
                </div>
                <p className="mt-4 text-foreground leading-relaxed">"{t.quote}"</p>
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="font-bold text-[var(--navy)]">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 text-white overflow-hidden">
        <img src={ctaImg} alt="" width={1920} height={1080} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[var(--navy-deep)]/85" />
        <div className="container-x relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold">Ready to break ground?</h2>
          <p className="mt-5 text-xl text-white/80">Tell us about your project. We'll respond within one business day with a clear path forward.</p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-primary">Request a Quote <ArrowRight className="w-4 h-4" /></Link>
            <a href="tel:+15555550100" className="btn-outline-light"><Phone className="w-4 h-4" /> (555) 555-0100</a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
