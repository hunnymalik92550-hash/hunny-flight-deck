import type { ReactNode } from "react";

export function SectionHeader({
  index,
  title,
  kicker,
}: {
  index: string;
  title: string;
  kicker?: string;
}) {
  return (
    <div data-reveal className="reveal mb-10">
      <p className="hud-label flex items-center gap-3">
        <span className="text-primary">{index}</span>
        <span className="h-px w-10 bg-border" />
        {kicker}
      </p>
      <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">{title}</h2>
    </div>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative mx-auto max-w-6xl px-5 py-20 sm:py-28 ${className}`}>
      {children}
    </section>
  );
}
