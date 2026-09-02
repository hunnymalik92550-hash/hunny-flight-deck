import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Skills } from "@/components/site/Skills";
import { Projects } from "@/components/site/Projects";
import { Experience } from "@/components/site/Experience";
import { Contact, Footer } from "@/components/site/Contact";
import { useScrollReveal } from "@/hooks/use-portfolio";

const TITLE = "Hunny — Aerospace Engineering Student & Python Developer";
const DESCRIPTION =
  "Portfolio of Hunny, B.Tech Aerospace Engineering student at LPU: UAV fabrication, glider and parachute design, plus Python development experience.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
  }),
  component: Index,
});

function Index() {
  useScrollReveal();

  return (
    <div className="relative min-h-screen">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <div className="relative">
          <div
            className="blueprint-grid pointer-events-none absolute inset-0 -z-10 opacity-40"
            aria-hidden="true"
          />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </div>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
