"use client";

import { useState } from "react";
import { Reveal } from "../Reveal";
import { CheckIcon, ChevronDownIcon } from "../icons";
import { hackathons, type Hackathon } from "@/lib/site";

function HackathonCard({ item, index }: { item: Hackathon; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal delay={index * 0.08}>
      <article className="shadow-soft relative rounded-[26px] bg-card p-6 sm:p-8">
        <div className="absolute right-5 top-5 flex flex-wrap items-center justify-end gap-2 sm:right-7 sm:top-7">
          {item.badge && (
            <span className="rounded-full bg-accent-hover px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-foreground sm:text-xs">
              {item.badge}
            </span>
          )}
          <span className="rounded-full bg-accent px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-foreground sm:text-xs">
            {item.period}
          </span>
        </div>

        <div className="pt-10 sm:pr-40 sm:pt-0">
          <h3 className="font-serif text-xl font-semibold text-foreground sm:text-2xl">
            {item.title}
          </h3>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted">
            {item.org}
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-foreground/90">
            {item.description}
          </p>
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

export function Hackathons() {
  return (
    <section
      id="hackathons"
      className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-4xl px-6 sm:px-8">
        <Reveal className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-hover">
            Competitions
          </span>
          <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
            Hackathons.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
            Places I&apos;ve built under pressure — including a winning
            datathon and a social-impact hackathon.
          </p>
        </Reveal>

        <div className="flex flex-col gap-5">
          {hackathons.map((item, i) => (
            <HackathonCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
