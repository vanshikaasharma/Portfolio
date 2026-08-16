"use client";

import Link from "next/link";
import { Reveal } from "../Reveal";
import { ArrowUpRightIcon } from "../icons";
import {
  projectCategories,
  type Project,
  type ProjectCategory,
} from "@/lib/site";

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const href = `/projects/${project.slug}`;

  return (
    <Reveal delay={index * 0.05} className="h-full">
      <article className="group relative flex h-full flex-col rounded-[26px] bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent sm:p-7">
        <Link
          href={href}
          className="absolute inset-0 z-0 rounded-[26px]"
          aria-label={`View ${project.title}`}
        />

        <div className="relative z-10 pointer-events-none flex flex-1 flex-col">
          <h3 className="font-serif text-2xl font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-foreground sm:text-[1.65rem]">
            {project.title}
          </h3>

          <div className="mt-5 flex flex-1 flex-col gap-5">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-subtle transition-colors duration-300 group-hover:text-foreground/55">
                Overview
              </p>
              <p className="mt-2 text-[14px] leading-relaxed text-muted transition-colors duration-300 group-hover:text-foreground/85 sm:text-[15px]">
                {project.description}
              </p>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-subtle transition-colors duration-300 group-hover:text-foreground/55">
                Highlights
              </p>
              <ul className="mt-2 space-y-1.5">
                {project.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 text-[14px] leading-relaxed text-foreground/90 sm:text-[15px]"
                  >
                    <span className="shrink-0 text-subtle" aria-hidden>
                      →
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-subtle transition-colors duration-300 group-hover:text-foreground/55">
                Built With
              </p>
              <p className="mt-2 text-sm tracking-wide text-muted transition-colors duration-300 group-hover:text-foreground/80">
                {project.tags.join(" · ")}
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3 border-t border-border pt-5 transition-colors duration-300 group-hover:border-foreground/15">
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
              View Project
              <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function CategoryBlock({
  category,
  index,
}: {
  category: ProjectCategory;
  index: number;
}) {
  const alignEnd = index % 2 === 1;

  return (
    <div
      id={category.id}
      className="scroll-mt-28 border-t border-border pt-14 sm:pt-16"
    >
      <Reveal>
        <div
          className={`mb-8 max-w-2xl sm:mb-10 ${
            alignEnd ? "md:ml-auto md:text-right" : ""
          }`}
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-subtle">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {category.title}
          </h3>
          <p className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-subtle">
            {category.subtitle}
          </p>
          <p
            className={`mt-4 max-w-xl text-[15px] leading-relaxed text-muted ${
              alignEnd ? "md:ml-auto" : ""
            }`}
          >
            {category.description}
          </p>
        </div>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2">
        {category.projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="relative scroll-mt-24 overflow-x-clip py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
        <Reveal className="mb-14 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-hover">
            Selected Work
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Projects
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
            A curated look at products, models, analyses, and interfaces —
            organized by the kind of work each project represents.
          </p>
        </Reveal>

        <div className="flex flex-col gap-6 sm:gap-8">
          {projectCategories.map((category, i) => (
            <CategoryBlock key={category.id} category={category} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
