import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Briefcase, Heart, GraduationCap, Coffee, Trophy, Users, MapPin, Clock } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { toast } from "sonner";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers | Summit Construction Group" },
      { name: "description", content: "Build your career with Summit Construction Group. Open positions across project management, field operations, and preconstruction." },
      { property: "og:title", content: "Careers at Summit Construction" },
      { property: "og:description", content: "Join a team that builds the Mountain West's most ambitious projects." },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

const benefits = [
  { icon: Heart, title: "Premium Health", desc: "Full medical, dental, vision — 100% premium covered for you and family." },
  { icon: Trophy, title: "Profit Sharing", desc: "Annual bonus tied directly to company and project performance." },
  { icon: GraduationCap, title: "Education", desc: "$5,000/yr tuition reimbursement and paid certifications." },
  { icon: Coffee, title: "Time Off", desc: "20 days PTO plus 10 paid holidays from day one." },
  { icon: Users, title: "401(k) Match", desc: "Generous match with immediate vesting." },
  { icon: Briefcase, title: "Truck Allowance", desc: "Vehicle allowance and gas card for field-based roles." },
];

const positions = [
  { title: "Senior Project Manager", dept: "Operations", type: "Full-time", loc: "Denver, CO" },
  { title: "Superintendent — Commercial", dept: "Field", type: "Full-time", loc: "Salt Lake City, UT" },
  { title: "Estimator II", dept: "Preconstruction", type: "Full-time", loc: "Denver, CO" },
  { title: "Project Engineer", dept: "Operations", type: "Full-time", loc: "Boulder, CO" },
  { title: "Concrete Foreman", dept: "Self-Perform", type: "Full-time", loc: "Aurora, CO" },
  { title: "Safety Manager", dept: "EHS", type: "Full-time", loc: "Denver, CO" },
];

function CareersPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Careers"
        title="Build your career where careers get built."
        subtitle="At Summit, you'll work alongside people who genuinely care about craft, safety, and each other. Join a team that invests in your growth from day one."
      />

      {/* Culture */}
      <section className="section-pad bg-background">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="eyebrow">Culture</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[var(--navy)]">Crews you'd want to grab a beer with. Leaders you'd actually call mentors.</h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>We hire for character first. Skills can be taught — integrity, curiosity, and care for the work cannot. That's why our turnover sits at less than half the industry average.</p>
              <p>Every Summit team member gets a clear development path, a senior mentor, and the tools to grow into the next role. Half of our superintendents started here as project engineers.</p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[{ n: "4.8★", l: "Glassdoor" }, { n: "92%", l: "Retention" }, { n: "12 yr", l: "Avg Tenure" }].map((s) => (
                <div key={s.l}>
                  <div className="text-3xl font-bold text-[var(--orange)]">{s.n}</div>
                  <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-square rounded-2xl bg-[var(--navy-deep)] p-10 text-white flex flex-col justify-between shadow-[var(--shadow-elegant)]">
            <Users className="w-12 h-12 text-[var(--orange)]" />
            <div>
              <h3 className="text-3xl font-bold">"It's the first job where I felt like the company invested in me as much as I invested in it."</h3>
              <p className="mt-4 text-white/70">— Marcus T., Project Engineer III, 6 years at Summit</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-pad bg-secondary">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow">Benefits</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[var(--navy)]">The package that backs you up</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b) => (
              <div key={b.title} className="bg-card p-6 rounded-xl border border-border">
                <div className="w-11 h-11 rounded-lg bg-[var(--gradient-accent)] flex items-center justify-center">
                  <b.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-[var(--navy)]">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section className="section-pad bg-background">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow">Open Roles</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[var(--navy)]">Current openings</h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-3">
            {positions.map((p) => (
              <div key={p.title} className="group bg-card p-6 rounded-xl border border-border hover:border-[var(--orange)] hover:shadow-[var(--shadow-card)] transition-all flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-[var(--navy)]">{p.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4" /> {p.dept}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {p.type}</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {p.loc}</span>
                  </div>
                </div>
                <a href="#apply" className="btn-ghost-dark text-sm group-hover:bg-[var(--orange)] group-hover:border-[var(--orange)] group-hover:text-white">
                  Apply <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <ApplicationForm />
    </SiteLayout>
  );
}

function ApplicationForm() {
  const [submitting, setSubmitting] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Application received — we'll be in touch within 5 business days.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  };
  return (
    <section id="apply" className="section-pad bg-[var(--navy-deep)] text-white">
      <div className="container-x grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <span className="eyebrow">Apply</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">Tell us about you.</h2>
          <p className="mt-5 text-white/75 text-lg">Don't see your ideal role? Submit a general application — we're always interested in great people.</p>
        </div>
        <form onSubmit={onSubmit} className="bg-white/5 backdrop-blur p-8 rounded-2xl border border-white/10 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="First name" name="firstName" required />
            <Field label="Last name" name="lastName" required />
          </div>
          <Field label="Email" name="email" type="email" required />
          <Field label="Phone" name="phone" type="tel" />
          <Field label="Position of interest" name="position" />
          <div>
            <label className="block text-sm font-medium mb-2 text-white/85">Why Summit?</label>
            <textarea name="message" rows={4} maxLength={1000} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/15 text-white placeholder:text-white/40 focus:outline-none focus:border-[var(--orange)]" placeholder="Tell us a bit about your background and goals." />
          </div>
          <button disabled={submitting} className="btn-primary w-full disabled:opacity-60">
            {submitting ? "Submitting..." : "Submit Application"} <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2 text-white/85">{label}{required && <span className="text-[var(--orange)]"> *</span>}</label>
      <input type={type} name={name} required={required} maxLength={255} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/15 text-white placeholder:text-white/40 focus:outline-none focus:border-[var(--orange)]" />
    </div>
  );
}
