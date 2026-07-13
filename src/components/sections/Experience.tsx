"use client";

import { useState } from "react";
import { Reveal } from "../Reveal";
import { CheckIcon, ChevronDownIcon, SparkleIcon } from "../icons";
import { experience, type Experience } from "@/lib/site";

function ExperienceCard({ item, index }: { item: Experience; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal delay={index * 0.08}>
      <article className="shadow-soft relative rounded-[26px] bg-card p-6 sm:p-8">
        <span className="absolute right-5 top-5 rounded-full bg-accent px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-foreground sm:right-7 sm:top-7 sm:text-xs">
          {item.period}
        </span>

        <div className="flex flex-col gap-5 pr-0 pt-8 sm:flex-row sm:items-start sm:gap-8 sm:pr-36 sm:pt-0">
          <div className="flex shrink-0 items-center gap-3 sm:w-56 sm:flex-col sm:items-start sm:gap-3">
            <span className="grid h-14 w-14 place-items-center rounded-full bg-foreground font-serif text-sm font-semibold text-background">
              {item.initials}
            </span>
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground sm:text-2xl">
                {item.company}
              </h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted">
                {item.role}
              </p>
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-[15px] leading-relaxed text-foreground/90">
              {item.description}
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-surface px-3 py-1.5 text-[11px] font-medium uppercase tracking-wide text-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="relative self-end">
            {open && (
              <div className="absolute bottom-full right-0 z-10 mb-3 w-[min(100vw-4rem,22rem)] rounded-2xl border border-border bg-surface/95 p-4 shadow-soft-lg backdrop-blur-md">
                <ul className="space-y-2.5">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2.5 text-left text-[11px] font-medium uppercase leading-snug tracking-wide text-foreground"
                    >
                      <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-foreground" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="inline-flex items-center gap-2 rounded-full px-1 py-1 text-xs font-semibold uppercase tracking-wide text-foreground transition-colors hover:text-accent-hover"
            >
              Key Highlights
              <ChevronDownIcon
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function Experience() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28"
    >
      <SparkleIcon className="pointer-events-none absolute right-[12%] top-[18%] h-5 w-5 text-muted/30" />

      <div className="mx-auto w-full max-w-4xl px-6 sm:px-8">
        <Reveal className="mb-12 text-center sm:mb-14">
          <h2 className="font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
            Experience.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
            The places I&apos;ve worked, the teams I&apos;ve been part of, and
            the experiences that shaped how I build technology.
          </p>
        </Reveal>

        <div className="flex flex-col gap-5">
          {experience.map((item, i) => (
            <ExperienceCard key={item.company} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
