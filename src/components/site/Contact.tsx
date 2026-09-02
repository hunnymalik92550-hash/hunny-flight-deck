import { useState, type FormEvent } from "react";
import { Download, Linkedin, Mail, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { CONTACT, RESUME_URL } from "@/lib/portfolio-data";
import { Section, SectionHeader } from "./Section";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${name || "visitor"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your email client…");
  }

  const field =
    "w-full border border-input bg-background/60 px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

  return (
    <Section id="contact">
      <SectionHeader index="07" kicker="Comms Terminal" title="Contact" />
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div data-reveal className="reveal corner-ticks glass-panel p-6 sm:p-8">
          <p className="hud-label flex items-center gap-2">
            <span className="size-1.5 animate-hud-pulse rounded-full bg-primary" />
            Channel Open
          </p>
          <ul className="mt-6 space-y-4">
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="group flex items-center gap-3 text-sm text-foreground transition-colors hover:text-primary"
              >
                <Mail className="size-4 text-primary" aria-hidden="true" />
                {CONTACT.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${CONTACT.phone.replace(/[^+\d]/g, "")}`}
                className="flex items-center gap-3 text-sm text-foreground transition-colors hover:text-primary"
              >
                <Phone className="size-4 text-primary" aria-hidden="true" />
                {CONTACT.phone}
              </a>
            </li>
            <li>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-foreground transition-colors hover:text-primary"
              >
                <Linkedin className="size-4 text-primary" aria-hidden="true" />
                {CONTACT.linkedinLabel}
              </a>
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center gap-2 bg-primary px-4 py-2.5 font-mono text-[0.65rem] tracking-[0.16em] text-primary-foreground uppercase"
            >
              <Mail className="size-3.5" aria-hidden="true" /> Email
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border px-4 py-2.5 font-mono text-[0.65rem] tracking-[0.16em] uppercase hover:border-primary hover:text-primary"
            >
              <Linkedin className="size-3.5" aria-hidden="true" /> LinkedIn
            </a>
            <a
              href={RESUME_URL}
              download
              className="inline-flex items-center gap-2 border border-accent/60 px-4 py-2.5 font-mono text-[0.65rem] tracking-[0.16em] text-accent uppercase hover:bg-accent/10"
            >
              <Download className="size-3.5" aria-hidden="true" /> Resume
            </a>
          </div>
        </div>

        <form
          data-reveal
          onSubmit={handleSubmit}
          className="reveal corner-ticks glass-panel space-y-4 p-6 sm:p-8"
        >
          <div>
            <label htmlFor="name" className="hud-label">
              Name
            </label>
            <input
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`mt-2 ${field}`}
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="hud-label">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`mt-2 ${field}`}
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="hud-label">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`mt-2 resize-y ${field}`}
              placeholder="Tell me about the role or project."
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 bg-primary px-5 py-3 font-mono text-xs tracking-[0.16em] text-primary-foreground uppercase transition-transform hover:-translate-y-0.5"
          >
            <Send className="size-4" aria-hidden="true" /> Transmit Message
          </button>
          <p className="font-mono text-[0.6rem] tracking-[0.12em] text-muted-foreground uppercase">
            Sends via your email client to {CONTACT.email}
          </p>
        </form>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-sm font-semibold tracking-[0.16em]">
          HUNNY — Aerospace Engineering Portfolio
        </p>
        <p className="font-mono text-[0.62rem] tracking-[0.18em] text-muted-foreground uppercase">
          Aerospace Engineering | UAV | Aerostructures | Python
        </p>
      </div>
    </footer>
  );
}
