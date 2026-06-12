import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Phone, Mail, MapPin, Clock, AlertTriangle, MessageCircle } from "lucide-react";
import { SiteLayout, PageHero } from "../components/site/SiteLayout";
import { toast } from "sonner";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Summit Construction Group" },
      { name: "description", content: "Request a quote, ask a question, or schedule a consultation with Summit Construction Group. Response within one business day." },
      { property: "og:title", content: "Contact Summit Construction" },
      { property: "og:description", content: "Get in touch — quote requests, careers, and partnership inquiries." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const faqs = [
  { q: "How quickly will I get a response to my quote request?", a: "Within one business day. Detailed estimates typically take 5–10 business days depending on project scope." },
  { q: "Do you handle both design and construction?", a: "Yes. Our design-build delivery brings architects, engineers, and builders under one contract for faster, leaner projects." },
  { q: "What size projects do you take on?", a: "Our sweet spot is $1M–$75M, though we've delivered projects on both ends of that range." },
  { q: "Are you licensed and bonded in all your service areas?", a: "Yes — fully licensed and bonded in Colorado, Utah, and Wyoming with $50M aggregate bonding capacity." },
  { q: "Do you offer emergency services?", a: "Absolutely. Our 24/7 emergency line handles storm response, structural failures, and urgent commercial needs." },
];

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().max(40).optional(),
  company: z.string().trim().max(120).optional(),
  message: z.string().trim().min(1, "Message required").max(1500),
});

function ContactPage() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = contactSchema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check your inputs");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Thanks — we'll reply within one business day.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <SiteLayout>
      {/* Emergency banner */}
      <div className="bg-[var(--navy-deep)] text-white pt-24">
      </div>

      <PageHero
        eyebrow="Contact"
        title="Let's build what's next."
        subtitle="Tell us about your project — scope, timeline, budget, anything. A senior project lead will respond within one business day."
      />

      <section className="section-pad bg-background">
        <div className="container-x grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <form onSubmit={onSubmit} className="lg:col-span-3 bg-card p-8 md:p-10 rounded-2xl border border-border shadow-[var(--shadow-card)]">
            <h2 className="text-2xl font-bold text-[var(--navy)]">Request a Quote</h2>
            <p className="mt-1 text-sm text-muted-foreground">All fields with * are required.</p>
            <div className="mt-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input label="Full name *" name="name" required />
                <Input label="Email *" name="email" type="email" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input label="Phone" name="phone" type="tel" />
                <Input label="Company" name="company" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-[var(--navy)]">Project type</label>
                <select name="projectType" className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-[var(--orange)]">
                  <option>Commercial</option>
                  <option>Residential</option>
                  <option>Industrial</option>
                  <option>Renovation</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-[var(--navy)]">Tell us about your project *</label>
                <textarea name="message" rows={5} required maxLength={1500} className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-[var(--orange)]" placeholder="Location, square footage, scope, target timeline, budget range…" />
              </div>
              <button disabled={loading} type="submit" className="btn-primary w-full disabled:opacity-60">
                {loading ? "Sending..." : "Send Quote Request"} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* Info */}
          <aside className="lg:col-span-2 space-y-4">
            <InfoCard icon={Phone} title="Call" lines={[{ t: "Main: (555) 555-0100", href: "tel:+15555550100" }, { t: "Emergency: (555) 555-0911", href: "tel:+15555550911" }]} />
            <InfoCard icon={Mail} title="Email" lines={[{ t: "hello@summitcg.com", href: "mailto:hello@summitcg.com" }, { t: "bids@summitcg.com", href: "mailto:bids@summitcg.com" }]} />
            <InfoCard icon={MapPin} title="Headquarters" lines={[{ t: "1200 Summit Avenue, Suite 400" }, { t: "Denver, CO 80202" }]} />
            <InfoCard icon={Clock} title="Office Hours" lines={[{ t: "Mon–Fri: 7:00 AM – 6:00 PM" }, { t: "Field response: 24/7" }]} />
          </aside>
        </div>
      </section>

      {/* Map */}
      <section className="bg-background pb-20">
        <div className="container-x">
          <div className="rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-card)] aspect-[16/8]">
            <iframe
              title="Summit Construction Group office location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196724.32!2d-105.05!3d39.74!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7e8c!2sDenver%2C%20CO!5e0!3m2!1sen!2sus!4v1700000000"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-secondary">
        <div className="container-x max-w-3xl">
          <div className="text-center mb-12">
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[var(--navy)]">Common questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="group bg-card rounded-xl border border-border p-6 hover:border-[var(--orange)]/40 transition-colors">
                <summary className="font-bold text-[var(--navy)] cursor-pointer flex items-center justify-between list-none">
                  {f.q}
                  <span className="text-[var(--orange)] text-2xl leading-none group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Live chat placeholder */}
      <button
        type="button"
        onClick={() => toast("Live chat coming soon — please use the form or call us.", { icon: "💬" })}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[var(--gradient-accent)] shadow-[var(--shadow-glow)] flex items-center justify-center text-white hover:scale-110 transition-transform"
        aria-label="Open live chat"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </SiteLayout>
  );
}

function Input({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-2 text-[var(--navy)]">{label}</label>
      <input type={type} name={name} required={required} maxLength={255} className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-[var(--orange)]" />
    </div>
  );
}

function InfoCard({ icon: Icon, title, lines }: { icon: any; title: string; lines: { t: string; href?: string }[] }) {
  return (
    <div className="bg-card p-6 rounded-xl border border-border">
      <div className="flex gap-4">
        <div className="w-11 h-11 rounded-lg bg-[var(--navy)] text-white flex items-center justify-center flex-shrink-0">
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-bold text-[var(--navy)]">{title}</h3>
          <div className="mt-1 text-sm text-muted-foreground space-y-0.5">
            {lines.map((l, i) => l.href ? (
              <a key={i} href={l.href} className="block hover:text-[var(--orange)]">{l.t}</a>
            ) : (
              <p key={i}>{l.t}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
