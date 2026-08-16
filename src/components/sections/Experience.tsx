"use client";

import { Reveal } from "../Reveal";
import { experience, type Experience } from "@/lib/site";

function ExperienceEntry({
  item,
  index,
}: {
  item: Experience;
  index: number;
}) {
  const metaLabel = item.metaLabel ?? "Built With";

  return (
    <Reveal delay={index * 0.06}>
      <article className="group border-b border-border py-10 last:border-b-0 sm:py-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] lg:gap-12">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-subtle">
              {String(index + 1).padStart(2, "0")}
            </span>

            <h3 className="mt-5 font-serif text-2xl font-semibold uppercase tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent-hover sm:text-3xl">
              {item.role}
            </h3>
            <p className="mt-2 text-[15px] text-muted">{item.company}</p>
            <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.14em] text-subtle">
              {item.type} · {item.period}
            </p>
          </div>

          <div className="min-w-0">
            {item.description && (
              <p className="mb-7 max-w-xl text-[15px] leading-relaxed text-muted">
                {item.description}
              </p>
            )}

            <ul className="space-y-3">
              {item.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex gap-2.5 text-[15px] leading-relaxed text-foreground/90"
                >
                  <span className="shrink-0 text-subtle" aria-hidden>
                    →
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            {item.tags.length > 0 && (
              <div className="mt-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-subtle">
                  {metaLabel}
                </p>
                <p className="mt-2 text-sm tracking-wide text-muted">
                  {item.tags.join(" · ")}
                </p>
              </div>
            )}
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
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8">
        <Reveal className="mb-10 sm:mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-hover">
            Work
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Experience
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
            Roles and teams where I&apos;ve worked across data, product, and
            technical operations.
          </p>
        </Reveal>

        <div className="border-t border-border">
          {experience.map((item, i) => (
            <ExperienceEntry key={`${item.role}-${item.company}`} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
