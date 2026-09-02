import { Award, BriefcaseBusiness, GraduationCap } from "lucide-react";
import { EDUCATION, EXPERIENCE } from "@/lib/portfolio-data";
import { Section, SectionHeader } from "./Section";
import { useTilt } from "@/hooks/use-portfolio";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeader index="04" kicker="Mission History" title="Experience" />
      <div className="relative pl-8">
        <span
          className="absolute left-2 top-2 bottom-2 w-px bg-[linear-gradient(to_bottom,transparent,var(--color-primary),transparent)]"
          aria-hidden="true"
        />
        <article data-reveal className="reveal corner-ticks glass-panel relative p-6 sm:p-8">
          <span
            className="absolute -left-[1.6rem] top-8 grid size-4 place-items-center rounded-full border border-primary bg-background"
            aria-hidden="true"
          >
            <span className="size-1.5 animate-hud-pulse rounded-full bg-primary" />
          </span>
          <div className="flex flex-wrap items-center gap-3">
            <BriefcaseBusiness className="size-5 text-primary" aria-hidden="true" />
            <h3 className="font-display text-xl font-semibold">{EXPERIENCE.role}</h3>
          </div>
          <p className="mt-2 font-mono text-[0.68rem] tracking-[0.14em] text-muted-foreground uppercase">
            {EXPERIENCE.company} · {EXPERIENCE.location} · {EXPERIENCE.date}
          </p>
          <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
            {EXPERIENCE.points.map((p) => (
              <li key={p} className="flex gap-2.5 text-sm text-foreground/85">
                <span className="mt-2 size-1 shrink-0 bg-accent" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
        </article>
      </div>

      <div className="mt-16">
        <SectionHeader index="05" kicker="Academic Record" title="Education" />
        <div id="education" className="relative scroll-mt-24 space-y-5 pl-8">
          <span
            className="absolute left-2 top-2 bottom-2 w-px bg-[linear-gradient(to_bottom,transparent,var(--color-primary),transparent)]"
            aria-hidden="true"
          />
          {EDUCATION.map((e, i) => (
            <EduCard key={e.degree} edu={e} i={i} />
          ))}
        </div>
      </div>

      <div className="mt-16">
        <SectionHeader index="06" kicker="Verification" title="Certification" />
        <article
          data-reveal
          className="reveal corner-ticks glass-panel max-w-xl p-6 sm:p-8"
        >
          <Award className="size-6 text-accent" aria-hidden="true" />
          <h3 className="mt-3 font-display text-xl font-semibold">
            Python Development Internship
          </h3>
          <p className="mt-1.5 text-sm text-muted-foreground">S O Infotech (P) Ltd. via DUCAT</p>
          <p className="mt-4 border-t border-border pt-4 font-mono text-[0.68rem] tracking-[0.16em] text-primary uppercase">
            Certificate of Internship Completion
          </p>
        </article>
      </div>
    </Section>
  );
}

function EduCard({ edu, i }: { edu: (typeof EDUCATION)[number]; i: number }) {
  const ref = useTilt<HTMLElement>(4);
  return (
    <article
      ref={ref}
      data-reveal
      className="reveal corner-ticks glass-panel relative p-6 will-change-transform"
      style={{ transitionDelay: `${i * 90}ms` }}
    >
      <span
        className="absolute -left-[1.6rem] top-8 grid size-4 place-items-center rounded-full border border-primary bg-background"
        aria-hidden="true"
      >
        <span className="size-1.5 rounded-full bg-primary/70" />
      </span>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2.5">
            <GraduationCap className="size-4 text-primary" aria-hidden="true" />
            <h3 className="font-display text-lg font-semibold">{edu.degree}</h3>
          </div>
          <p className="mt-1.5 text-sm text-foreground/85">{edu.school}</p>
          <p className="font-mono text-[0.65rem] tracking-[0.14em] text-muted-foreground uppercase">
            {edu.location} · {edu.date}
          </p>
        </div>
        {edu.score && (
          <span className="border border-accent/50 px-3 py-1 font-mono text-xs text-accent">
            {edu.score}
          </span>
        )}
      </div>
    </article>
  );
}
