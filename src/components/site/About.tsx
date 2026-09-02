import { ABOUT_TEXT, STATS } from "@/lib/portfolio-data";
import { Section, SectionHeader } from "./Section";
import { useCountUp } from "@/hooks/use-portfolio";

function StatCard({ stat, i }: { stat: (typeof STATS)[number]; i: number }) {
  const numeric = /^\d+$/.test(stat.value) ? parseInt(stat.value, 10) : null;
  const { ref, value } = useCountUp(numeric ?? 0);

  return (
    <li
      data-reveal
      className="reveal corner-ticks glass-panel p-5"
      style={{ transitionDelay: `${i * 80}ms` }}
    >
      <span ref={ref} className="block font-display text-3xl font-semibold text-primary">
        {numeric !== null ? String(value).padStart(stat.value.length, "0") : stat.value}
      </span>
      <span className="mt-2 block text-sm font-medium text-foreground">{stat.label}</span>
      <span className="mt-1 block font-mono text-[0.65rem] tracking-[0.12em] text-muted-foreground uppercase">
        {stat.detail}
      </span>
    </li>
  );
}

export function About() {
  return (
    <Section id="about">
      <SectionHeader index="01" kicker="Mission Profile" title="About" />
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div data-reveal className="reveal">
          <p className="text-lg leading-relaxed text-foreground/90">{ABOUT_TEXT}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {["Aerospace Engineering", "UAV Systems", "Aerostructures", "Software Development"].map(
              (t) => (
                <li
                  key={t}
                  className="border border-border px-3 py-1.5 font-mono text-[0.65rem] tracking-[0.14em] text-muted-foreground uppercase"
                >
                  {t}
                </li>
              ),
            )}
          </ul>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {STATS.map((s, i) => (
            <StatCard key={s.label} stat={s} i={i} />
          ))}
        </ul>
      </div>
    </Section>
  );
}
