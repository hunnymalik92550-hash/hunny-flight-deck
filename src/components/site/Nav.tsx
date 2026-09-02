import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { NAV_SECTIONS, RESUME_URL } from "@/lib/portfolio-data";
import { useActiveSection } from "@/hooks/use-portfolio";

const IDS = NAV_SECTIONS.map((s) => s.id);

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "glass-panel border-x-0 border-t-0" : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5"
      >
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="grid size-8 place-items-center border border-primary/50 text-primary">
            <span className="font-mono text-xs">HM</span>
          </span>
          <span className="font-display text-sm font-semibold tracking-[0.28em] text-foreground">
            HUNNY
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_SECTIONS.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-current={active === s.id ? "true" : undefined}
                className={`relative px-3 py-2 font-mono text-xs tracking-[0.16em] uppercase transition-colors ${
                  active === s.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {s.label}
                {active === s.id && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-px bg-primary" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={RESUME_URL}
            download
            className="hidden items-center gap-2 border border-primary/50 px-3.5 py-2 font-mono text-xs tracking-[0.14em] text-primary uppercase transition-colors hover:bg-primary/10 sm:inline-flex"
          >
            <Download className="size-3.5" aria-hidden="true" /> Resume
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-9 place-items-center border border-border text-foreground md:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-nav" className="glass-panel border-x-0 md:hidden">
          <ul className="mx-auto max-w-6xl px-5 py-3">
            {NAV_SECTIONS.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/50 py-3 font-mono text-xs tracking-[0.18em] uppercase text-muted-foreground"
                >
                  {s.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={RESUME_URL}
                download
                className="block py-3 font-mono text-xs tracking-[0.18em] uppercase text-primary"
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
