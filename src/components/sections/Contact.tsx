"use client";

import { Reveal } from "../Reveal";
import { ArrowUpRightIcon } from "../icons";
import { site } from "@/lib/site";

const links = [
  {
    label: "Email",
    href: `mailto:${site.email}`,
    external: false,
  },
  {
    label: "LinkedIn",
    href: site.socials.linkedin,
    external: true,
  },
] as const;

export function Contact() {
  const year = new Date().getFullYear();

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-border py-16 sm:py-20"
    >
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-subtle">
            Let’s Connect
          </p>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
            Always open to conversations about technology, projects, and new
            opportunities.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
            {links.map(({ label, href, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent-hover"
              >
                {label}
                <ArrowUpRightIcon className="h-3.5 w-3.5 text-muted transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-hover" />
              </a>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 border-t border-border pt-6">
          <p className="text-xs text-subtle">
            © {year} {site.name}
          </p>
        </div>
      </div>
    </section>
  );
}
