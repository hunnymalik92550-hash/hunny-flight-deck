import { Suspense, lazy, useEffect, useState } from "react";
import { ArrowDown, Download, Mail, Rocket } from "lucide-react";
import { RESUME_URL, CONTACT, PROFILE_IMAGE } from "@/lib/portfolio-data";
import { usePointerParallax, usePrefersReducedMotion } from "@/hooks/use-portfolio";

const AerospaceScene = lazy(() => import("@/components/three/AerospaceScene"));

const TELEMETRY = [
  { k: "ALT", v: "120 M" },
  { k: "AIRSPD", v: "14 M/S" },
  { k: "PITCH", v: "+04°" },
  { k: "MODE", v: "AUTO" },
];

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const reduced = usePrefersReducedMotion();
  const { x, y } = usePointerParallax();

  useEffect(() => setMounted(true), []);

  return (
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden pt-16">
      <div className="blueprint-grid absolute inset-0 -z-20 opacity-70" aria-hidden="true" />
      <div
        className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_50%_0%,oklch(0.32_0.07_225/45%),transparent_65%)]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        {mounted && (
          <Suspense fallback={null}>
            <AerospaceScene reduced={reduced} />
          </Suspense>
        )}
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:py-24">
        <div
          style={{ transform: reduced ? undefined : `translate3d(${x * -8}px, ${y * -6}px, 0)` }}
        >
          <p className="hud-label flex items-center gap-2">
            <span className="size-1.5 animate-hud-pulse rounded-full bg-primary" />
            Aerospace Portfolio / 2026
          </p>

          <h1 className="text-glow mt-5 font-display text-6xl leading-none font-bold sm:text-7xl lg:text-8xl">
            HUNNY
          </h1>
          <p className="mt-4 font-display text-xl text-foreground sm:text-2xl">
            Aerospace Engineering Student
          </p>
          <p className="mt-1.5 font-mono text-sm tracking-wide text-primary">
            Python Developer | UAV &amp; Aerostructures Enthusiast
          </p>
          <p className="mt-4 max-w-xl text-sm text-muted-foreground">
            B.Tech Aerospace Engineering, Lovely Professional University, Punjab, India.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-primary px-5 py-3 font-mono text-xs tracking-[0.16em] text-primary-foreground uppercase transition-transform hover:-translate-y-0.5"
            >
              <Rocket className="size-4" aria-hidden="true" /> View Projects
            </a>
            <a
              href={RESUME_URL}
              download
              className="inline-flex items-center gap-2 border border-primary/60 px-5 py-3 font-mono text-xs tracking-[0.16em] text-primary uppercase transition-colors hover:bg-primary/10"
            >
              <Download className="size-4" aria-hidden="true" /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-border px-5 py-3 font-mono text-xs tracking-[0.16em] text-foreground uppercase transition-colors hover:border-accent hover:text-accent"
            >
              <Mail className="size-4" aria-hidden="true" /> Contact Me
            </a>
          </div>

          <dl className="corner-ticks glass-panel mt-10 grid max-w-xl grid-cols-1 gap-x-6 gap-y-2 p-5 sm:grid-cols-3">
            <div>
              <dt className="hud-label">System Status</dt>
              <dd className="mt-1 flex items-center gap-2 font-mono text-sm text-primary">
                <span className="size-1.5 animate-hud-pulse rounded-full bg-primary" />
                ONLINE
              </dd>
            </div>
            <div>
              <dt className="hud-label">Field</dt>
              <dd className="mt-1 font-mono text-sm text-foreground">AEROSPACE ENGINEERING</dd>
            </div>
            <div>
              <dt className="hud-label">Focus</dt>
              <dd className="mt-1 font-mono text-sm text-foreground">UAV / AEROSTRUCTURES / PYTHON</dd>
            </div>
          </dl>
        </div>

        <div
          className="relative mx-auto w-full max-w-xs lg:max-w-sm"
          style={{
            transform: reduced
              ? undefined
              : `perspective(1200px) rotateY(${x * -5}deg) rotateX(${y * 4}deg)`,
            transition: "transform 0.2s ease-out",
          }}
        >
          <div className="corner-ticks glass-panel animate-float-slow relative overflow-hidden p-3">
            <div className="relative overflow-hidden">
              <img
                src={PROFILE_IMAGE}
                alt="Hunny, Aerospace Engineering student at Lovely Professional University"
                width={900}
                height={1200}
                className="aspect-[3/4] w-full object-cover object-top"
                loading="eager"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,oklch(0.16_0.028_260/85%),transparent_55%)]"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-14 animate-scan-line bg-[linear-gradient(to_bottom,transparent,oklch(0.79_0.13_205/14%),transparent)]"
                aria-hidden="true"
              />
              <div className="absolute inset-x-3 bottom-3 flex items-center justify-between font-mono text-[0.6rem] tracking-[0.2em] text-primary uppercase">
                <span>ID / HUNNY</span>
                <span>LPU · PB</span>
              </div>
            </div>
            <ul className="mt-3 grid grid-cols-4 gap-2">
              {TELEMETRY.map((t) => (
                <li key={t.k} className="border border-border/70 p-2 text-center">
                  <span className="block font-mono text-[0.55rem] tracking-[0.14em] text-muted-foreground">
                    {t.k}
                  </span>
                  <span className="block font-mono text-[0.65rem] text-foreground">{t.v}</span>
                </li>
              ))}
            </ul>
          </div>
          <span className="absolute -left-4 top-10 hidden font-mono text-[0.6rem] tracking-[0.2em] text-muted-foreground uppercase lg:block">
            AIRFRAME
          </span>
          <span className="absolute -right-6 bottom-24 hidden font-mono text-[0.6rem] tracking-[0.2em] text-muted-foreground uppercase lg:block">
            AVIONICS
          </span>
        </div>
      </div>

      <a
        href="#about"
        className="absolute inset-x-0 bottom-6 mx-auto flex w-fit items-center gap-2 font-mono text-[0.6rem] tracking-[0.24em] text-muted-foreground uppercase hover:text-primary"
      >
        Scroll <ArrowDown className="size-3.5" aria-hidden="true" />
      </a>
      <a href={`mailto:${CONTACT.email}`} className="sr-only">
        Email Hunny at {CONTACT.email}
      </a>
    </section>
  );
}
