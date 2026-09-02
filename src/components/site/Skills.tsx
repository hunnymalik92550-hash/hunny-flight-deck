import { Code2, Cpu, Database, PenTool, Users } from "lucide-react";
import { SKILL_GROUPS } from "@/lib/portfolio-data";
import { Section, SectionHeader } from "./Section";
import { useTilt } from "@/hooks/use-portfolio";

const ICONS: Record<string, typeof Code2> = {
  Programming: Code2,
  "Engineering & Design": PenTool,
  Database: Database,
  "Professional Skills": Users,
};

function SkillCard({
  name,
  desc,
  category,
  delay,
}: {
  name: string;
  desc: string;
  category: string;
  delay: number;
}) {
  const ref = useTilt<HTMLLIElement>(9);
  const Icon = ICONS[category] ?? Cpu;

  return (
    <li
      ref={ref}
      data-reveal
      className="reveal corner-ticks glass-panel group relative overflow-hidden p-5 transition-shadow duration-300 will-change-transform hover:shadow-[var(--glow-primary)]"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(240px circle at var(--mx,50%) var(--my,50%), oklch(0.79 0.13 205 / 12%), transparent 70%)",
        }}
      />
      <Icon className="size-5 text-primary" aria-hidden="true" />
      <h3 className="mt-3 font-display text-lg font-semibold">{name}</h3>
      <p className="mt-1 font-mono text-[0.6rem] tracking-[0.16em] text-accent uppercase">
        {category}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
    </li>
  );
}

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeader index="02" kicker="Systems Capability" title="Skills" />
      <div className="space-y-10">
        {SKILL_GROUPS.map((group) => (
          <div key={group.category}>
            <h3 className="hud-label mb-4 flex items-center gap-3">
              {group.category}
              <span className="h-px flex-1 bg-border" />
            </h3>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {group.items.map((item, i) => (
                <SkillCard
                  key={item.name}
                  name={item.name}
                  desc={item.desc}
                  category={group.category}
                  delay={i * 70}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
