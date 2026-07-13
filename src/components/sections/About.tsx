"use client";

import { Reveal } from "../Reveal";
import { about, site } from "@/lib/site";

export function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8">
        <Reveal className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-hover">
            About
          </span>
          <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
            A bit about me.
          </h2>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
          <Reveal delay={0.05} className="space-y-5">
            {about.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-[15px] leading-relaxed text-muted sm:text-base"
              >
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.1}>
            <div className="shadow-soft rounded-[26px] bg-card p-6 sm:p-7">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-hover">
                Snapshot
              </p>
              <dl className="space-y-4">
                {about.facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="border-b border-border pb-4 last:border-b-0 last:pb-0"
                  >
                    <dt className="text-[11px] font-semibold uppercase tracking-wide text-subtle">
                      {fact.label}
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-foreground">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <a
                href={`mailto:${site.email}`}
                className="mt-6 inline-flex rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent-hover"
              >
                Get in touch
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
