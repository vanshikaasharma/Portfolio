"use client";

import { Reveal } from "../Reveal";
import { education } from "@/lib/site";

export function Education() {
  return (
    <section
      id="education"
      className="relative scroll-mt-24 overflow-hidden py-16 sm:py-20"
    >
      <div className="mx-auto w-full max-w-4xl px-6 sm:px-8">
        <Reveal className="mb-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-hover">
            Education
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            Education.
          </h2>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="shadow-soft relative rounded-[26px] bg-card p-6 sm:p-8">
            <span className="absolute right-5 top-5 rounded-full bg-accent px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-foreground sm:right-7 sm:top-7 sm:text-xs">
              {education.period}
            </span>
            <div className="flex items-start gap-4 pr-0 pt-8 sm:pr-48 sm:pt-0">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-foreground font-serif text-sm font-semibold text-background">
                UBC
              </span>
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground sm:text-2xl">
                  {education.school}
                </h3>
                <p className="mt-1 text-sm text-muted">
                  {education.degree} ({education.gpa})
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
