import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pt-0">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-[var(--gradient-dark)] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(var(--orange) 1px, transparent 1px), linear-gradient(90deg, var(--orange) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[var(--orange)]/10 blur-3xl" />
      <div className="container-x relative z-10 animate-fade-up">
        <span className="eyebrow text-[var(--orange)]">{eyebrow}</span>
        <h1 className="mt-4 text-4xl md:text-6xl font-bold max-w-4xl">{title}</h1>
        {subtitle && <p className="mt-5 text-lg md:text-xl text-white/75 max-w-2xl">{subtitle}</p>}
      </div>
    </section>
  );
}
