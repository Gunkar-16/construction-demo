import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, HardHat, Phone } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-[var(--navy-deep)]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2.5 text-white">
          <div className="w-10 h-10 rounded-lg bg-[var(--gradient-accent)] flex items-center justify-center shadow-[var(--shadow-glow)]">
            <HardHat className="w-5 h-5 text-white" strokeWidth={2.5} />
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-sm tracking-wide">SUMMIT</div>
            <div className="text-[10px] tracking-[0.2em] text-white/70">CONSTRUCTION GROUP</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-4 py-2 text-sm font-medium text-white/85 hover:text-white transition-colors relative group"
              activeProps={{ className: "text-white" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
              <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-[var(--orange)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+15555550100" className="flex items-center gap-2 text-sm text-white/85 hover:text-white">
            <Phone className="w-4 h-4" />
            (555) 555-0100
          </a>
          <Link to="/contact" className="btn-primary text-sm py-2.5 px-5">Request a Quote</Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-[var(--navy-deep)]/98 backdrop-blur-md">
          <div className="container-x py-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-white/90 hover:bg-white/5 rounded-md"
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-3">
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
