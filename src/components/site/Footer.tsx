import { Link } from "@tanstack/react-router";
import { HardHat, Mail, MapPin, Phone, Linkedin, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[var(--navy-deep)] text-white/85">
      <div className="container-x py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-10 h-10 rounded-lg bg-[var(--gradient-accent)] flex items-center justify-center">
              <HardHat className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <div className="leading-tight">
              <div className="font-display font-bold text-white">SUMMIT</div>
              <div className="text-[10px] tracking-[0.2em] text-white/60">CONSTRUCTION GROUP</div>
            </div>
          </div>
          <p className="text-sm text-white/65 leading-relaxed">
            Building landmark commercial, residential, and industrial projects with uncompromising
            quality since 2009.
          </p>
          <div className="flex gap-3 mt-5">
            {[Linkedin, Facebook, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-md border border-white/15 flex items-center justify-center hover:bg-[var(--orange)] hover:border-[var(--orange)] transition">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Company</h4>
          <ul className="space-y-2.5 text-sm">
            {[
              { to: "/about", label: "About Us" },
              { to: "/projects", label: "Projects" },
              { to: "/careers", label: "Careers" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-[var(--orange)] transition">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Services</h4>
          <ul className="space-y-2.5 text-sm">
            {["General Contracting", "Commercial", "Residential", "Renovations", "Design-Build"].map((s) => (
              <li key={s}>
                <Link to="/services" className="hover:text-[var(--orange)] transition">{s}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3"><MapPin className="w-4 h-4 mt-0.5 text-[var(--orange)] flex-shrink-0" /><span>1200 Summit Avenue, Suite 400<br />Denver, CO 80202</span></li>
            <li className="flex gap-3"><Phone className="w-4 h-4 mt-0.5 text-[var(--orange)] flex-shrink-0" /><a href="tel:+15555550100" className="hover:text-[var(--orange)]">(555) 555-0100</a></li>
            <li className="flex gap-3"><Mail className="w-4 h-4 mt-0.5 text-[var(--orange)] flex-shrink-0" /><a href="mailto:hello@summitcg.com" className="hover:text-[var(--orange)]">hello@summitcg.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/55">
          <p>© {new Date().getFullYear()} Summit Construction Group. All rights reserved. License #CGB-0042189</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Safety</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
