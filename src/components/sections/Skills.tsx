"use client";

import { Reveal } from "../Reveal";
import { skills } from "@/lib/site";

export function Skills() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8">
        <Reveal className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-hover">
            Toolkit
          </span>
          <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
            Skills.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
            Languages, frameworks, and tools I use to build products, analyze
            data, and ship software.
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.06}>
              <div className="shadow-soft h-full rounded-[26px] bg-card p-6 sm:p-7">
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {group.category}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-accent px-3.5 py-1.5 text-xs font-medium text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
