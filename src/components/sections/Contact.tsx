"use client";

import { Reveal } from "../Reveal";
import {
  ArrowRightIcon,
  BriefcaseIcon,
  ChevronIcon,
  DiamondIcon,
  DocumentIcon,
  LaptopIcon,
  MailIcon,
  SparkleIcon,
} from "../icons";
import { site } from "@/lib/site";

const contactLinks = [
  {
    label: "Email",
    sublabel: "Drop me a message",
    href: `mailto:${site.email}`,
    Icon: MailIcon,
    external: false,
  },
  {
    label: "GitHub",
    sublabel: "Explore my code",
    href: site.socials.github,
    Icon: LaptopIcon,
    external: true,
  },
  {
    label: "LinkedIn",
    sublabel: "Let's connect",
    href: site.socials.linkedin,
    Icon: BriefcaseIcon,
    external: true,
  },
  {
    label: "Resume",
    sublabel: "View my experience",
    href: site.resumeUrl,
    Icon: DocumentIcon,
    external: true,
  },
];

export function Contact() {
  const year = new Date().getFullYear();

  return (
    <section
      id="contact"
      className="palette-inverted relative overflow-hidden scroll-mt-24 bg-background py-24 sm:py-32"
    >
      {/* ambient glows */}
      <div className="pointer-events-none absolute -top-24 right-[8%] h-64 w-64 rounded-full bg-accent/25 blur-[90px]" />
      <div className="pointer-events-none absolute -bottom-24 left-[6%] h-64 w-64 rounded-full bg-accent/20 blur-[90px]" />

      {/* scattered line-art decoration */}
      <DiamondIcon className="pointer-events-none absolute left-[14%] top-[14%] h-8 w-8 text-foreground/15" />
      <DiamondIcon className="pointer-events-none absolute right-[16%] top-[30%] h-10 w-10 text-foreground/10" />
      <DiamondIcon className="pointer-events-none absolute left-[10%] bottom-[16%] h-6 w-6 text-foreground/10" />
      <SparkleIcon className="pointer-events-none absolute right-[10%] bottom-[20%] h-6 w-6 text-foreground/20" />
      <ChevronIcon className="pointer-events-none absolute left-[22%] bottom-[26%] h-5 w-5 -rotate-90 text-foreground/15" />
      <ChevronIcon className="pointer-events-none absolute right-[26%] top-[12%] h-5 w-5 text-foreground/10" />

      <div className="relative mx-auto w-full max-w-3xl px-6 text-center sm:px-8">
        <Reveal>
          <h2 className="font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
            Get In Touch.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-muted">
            Have a question, want to chat, or just want to say hello? Feel
            free to reach out—I&apos;d love to hear from you.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {contactLinks.map(({ label, sublabel, href, Icon, external }, i) => (
            <Reveal key={label} delay={i * 0.06}>
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group relative flex h-full flex-col justify-between gap-6 rounded-2xl bg-card p-6 text-left shadow-soft transition-all duration-300 hover:bg-accent hover:shadow-[0_16px_40px_-16px_var(--accent-glow)]"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-foreground transition-colors duration-300 group-hover:bg-card group-hover:text-accent-hover">
                  <Icon className="h-5 w-5" />
                </span>

                <span className="flex items-center justify-between gap-3">
                  <span>
                    <span className="block font-serif text-lg font-semibold text-foreground">
                      {label}
                    </span>
                    <span className="block text-sm text-muted transition-colors duration-300 group-hover:text-foreground/80">
                      {sublabel}
                    </span>
                  </span>
                  <ArrowRightIcon className="h-4 w-4 shrink-0 text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-foreground" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 border-t border-border pt-6">
          <p className="text-xs text-subtle">
            © {year} {site.name}
          </p>
        </div>
      </div>
    </section>
  );
}
