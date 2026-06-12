import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Target, Eye, HeartHandshake, ArrowRight } from "lucide-react";
import { SiteLayout, PageHero } from "../components/site/SiteLayout";
import teamImg from "../assets/about-team.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Summit Construction Group" },
      { name: "description", content: "Learn about Summit Construction Group's 15-year history, mission, safety commitment, and the leadership team building the Mountain West." },
      { property: "og:title", content: "About Summit Construction Group" },
      { property: "og:description", content: "Three generations of builders. One uncompromising standard." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const team = [
  { name: "Robert Hayes", role: "Founder & CEO", bio: "30+ years building commercial landmarks across the West." },
  { name: "Priya Sharma", role: "President & COO", bio: "Former VP at Turner Construction. LEED AP BD+C." },
  { name: "Daniel Foster", role: "VP of Field Operations", bio: "Led 200+ projects from groundbreaking to occupancy." },
  { name: "Elena Marquez", role: "VP of Preconstruction", bio: "Specialist in cost modeling and design-build delivery." },
];

const values = [
  { icon: Target, title: "Mission", desc: "Deliver buildings that exceed expectations on safety, schedule, and craftsmanship — every project, every time." },
  { icon: Eye, title: "Vision", desc: "Be the most trusted builder in the Mountain West by 2030, defined by client outcomes and team excellence." },
  { icon: HeartHandshake, title: "Values", desc: "Integrity in every handshake. Accountability on every milestone. Respect for every trade partner and client." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Us"
        title="Builders, partners, problem-solvers."
        subtitle="Founded in 2009, Summit Construction Group has grown from a five-person crew into one of the Mountain West's most respected builders — without ever losing the craft that started it."
      />

      <section className="section-pad bg-background">
        <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)] order-2 lg:order-1">
            <img src={teamImg} alt="Construction foreman reviewing blueprints on site" width={1280} height={1600} loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <span className="eyebrow">Our Story</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[var(--navy)]">From a single trailer office to 500+ delivered projects</h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>Robert Hayes founded Summit in 2009 with a simple promise: build the way you'd want someone to build for your own family. That belief still shapes every decision we make.</p>
              <p>Today, Summit is a full-service general contractor and construction manager with self-perform capabilities in concrete, framing, and finishes. We've built offices, hospitals, custom homes, distribution centers, and everything in between — across Colorado, Utah, and Wyoming.</p>
              <p>What hasn't changed is our standard. Every project gets a senior leader on site, transparent reporting, and an ironclad commitment to safety.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-secondary">
        <div className="container-x">
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-card p-8 rounded-xl border border-border">
                <div className="w-12 h-12 rounded-lg bg-[var(--gradient-accent)] flex items-center justify-center">
                  <v.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="mt-5 text-2xl font-bold text-[var(--navy)]">{v.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="section-pad bg-[var(--navy)] text-white">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="eyebrow">Safety</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold">Safety isn't a program. It's our operating system.</h2>
            <p className="mt-6 text-white/80 text-lg leading-relaxed">
              Every Summit jobsite begins with a stretch-and-flex, daily JHAs, and a no-blame near-miss culture. Our EMR of 0.61 sits well below industry average — and we're proud of every shift that ends the same way it started.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[{ n: "0.61", l: "EMR Rating" }, { n: "1.2M+", l: "Safe Work Hours" }, { n: "100%", l: "OSHA-30 Trained" }].map((s) => (
                <div key={s.l}>
                  <div className="text-3xl md:text-4xl font-bold text-[var(--orange)]">{s.n}</div>
                  <div className="text-xs text-white/70 mt-1 uppercase tracking-wider">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur p-8 rounded-2xl border border-white/10">
            <ShieldCheck className="w-12 h-12 text-[var(--orange)]" />
            <h3 className="mt-4 text-2xl font-bold">Certifications</h3>
            <ul className="mt-6 space-y-3">
              {["OSHA 30-Hour Certified Leadership", "ISN Network Member (A-Rated)", "AGC Build America Award Recipient", "LEED Accredited Professionals on Staff", "ENR Top 400 Contractors"].map((c) => (
                <li key={c} className="flex gap-3 items-center text-white/90">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--orange)]" />{c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-pad bg-background">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow">Leadership</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[var(--navy)]">The people behind the projects</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m) => (
              <div key={m.name} className="group">
                <div className="aspect-[4/5] rounded-xl overflow-hidden bg-[var(--navy-deep)] relative">
                  <div className="absolute inset-0 flex items-center justify-center text-white/30 text-6xl font-bold">
                    {m.name.split(" ").map((p) => p[0]).join("")}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)] via-transparent" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-[var(--navy)]">{m.name}</h3>
                <div className="text-sm text-[var(--orange)] font-semibold">{m.role}</div>
                <p className="mt-2 text-sm text-muted-foreground">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-secondary">
        <div className="container-x text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--navy)]">Let's build something that lasts.</h2>
          <p className="mt-5 text-lg text-muted-foreground">Schedule a consultation with our preconstruction team.</p>
          <Link to="/contact" className="btn-primary mt-8">Start a Conversation <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </SiteLayout>
  );
}
