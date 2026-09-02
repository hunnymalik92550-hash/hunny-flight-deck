import { useState } from "react";
import { ChevronDown, Plane } from "lucide-react";
import { PROJECTS } from "@/lib/portfolio-data";
import { Section, SectionHeader } from "./Section";
import { useTilt } from "@/hooks/use-portfolio";

function ProjectCard({ project, i }: { project: (typeof PROJECTS)[number]; i: number }) {
  const ref = useTilt<HTMLElement>(5);
  const [open, setOpen] = useState(false);
  const panelId = `project-details-${project.no}`;

  return (
    <article
      ref={ref}
      data-reveal
      className="reveal corner-ticks glass-panel group relative overflow-hidden p-6 will-change-transform sm:p-8"
      style={{ transitionDelay: `${i * 90}ms` }}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx,50%) var(--my,50%), oklch(0.79 0.13 205 / 10%), transparent 70%)",
        }}
      />
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />

      <div className="relative grid gap-6 md:grid-cols-[auto_1fr]">
        <div className="flex items-center gap-4 md:flex-col md:items-start">
          <span className="font-display text-5xl font-bold text-primary/30">{project.no}</span>
          <Plane className="size-6 rotate-45 text-accent" aria-hidden="true" />
        </div>

        <div>
          <h3 className="font-display text-xl font-semibold sm:text-2xl">{project.title}</h3>
          <p className="mt-1 font-mono text-[0.68rem] tracking-[0.14em] text-muted-foreground uppercase">
            {project.org} · {project.date}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground/85">
            {project.desc}
          </p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <li
                key={t}
                className="border border-primary/40 px-2.5 py-1 font-mono text-[0.6rem] tracking-[0.14em] text-primary uppercase"
              >
                {t}
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={panelId}
            className="mt-6 inline-flex items-center gap-2 border border-border px-4 py-2 font-mono text-[0.65rem] tracking-[0.16em] uppercase transition-colors hover:border-primary hover:text-primary"
          >
            View Details
            <ChevronDown
              className={`size-3.5 transition-transform ${open ? "rotate-180" : ""}`}
              aria-hidden="true"
            />
          </button>

          {open && (
            <ul id={panelId} className="mt-4 space-y-2 border-l border-primary/40 pl-4">
              {project.details.map((d) => (
                <li key={d} className="text-sm text-muted-foreground">
                  {d}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeader index="03" kicker="Flight Log" title="Projects" />
      <div className="space-y-6">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.no} project={p} i={i} />
        ))}
      </div>
    </Section>
  );
}
