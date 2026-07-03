"use client";

import Image from "next/image";
import { Reveal } from "../Reveal";
import { ArrowUpRightIcon, GitHubIcon } from "../icons";
import { projects, type Project } from "@/lib/site";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isLeft = index % 2 === 0;

  return (
    <Reveal delay={index * 0.08} className="group relative h-full">
      {/* connects card to side margins on hover */}
      <div
        className={`pointer-events-none absolute inset-y-0 right-full z-0 w-screen bg-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
          isLeft ? "" : "md:hidden"
        }`}
      />
      <div
        className={`pointer-events-none absolute inset-y-0 left-full z-0 w-screen bg-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
          isLeft ? "md:hidden" : ""
        }`}
      />

      <div
        className={`relative z-10 flex h-full flex-col overflow-hidden rounded-[26px] bg-card p-7 transition-[background-color,border-radius] duration-300 group-hover:rounded-none group-hover:bg-accent ${
          isLeft
            ? "md:group-hover:rounded-l-none md:group-hover:rounded-r-[26px]"
            : "md:group-hover:rounded-r-none md:group-hover:rounded-l-[26px]"
        }`}
      >
        <div className="relative mb-5 aspect-[2/1] w-full overflow-hidden rounded-[19px] bg-surface">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#2a4068] via-card to-accent transition-all duration-500 group-hover:scale-105 group-hover:from-accent group-hover:via-accent-hover group-hover:to-card group-hover:brightness-110">
              <span className="font-serif text-3xl font-semibold text-foreground/40">
                {project.title}
              </span>
            </div>
          )}
        </div>

        <h3 className="mb-2 flex items-center gap-1.5 font-serif text-2xl font-semibold text-foreground">
          {project.title}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="inline-flex"
            >
              <ArrowUpRightIcon className="h-4 w-4 text-accent transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-card" />
            </a>
          )}
        </h3>

        <p className="mb-6 line-clamp-3 flex-1 text-[15px] leading-relaxed text-muted transition-colors duration-300 group-hover:text-foreground/85">
          {project.description}
        </p>

        <div className="mt-auto flex items-end justify-between gap-4">
          <div className="flex flex-wrap gap-2.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-accent px-3.5 py-1.5 text-xs font-medium text-foreground transition-colors duration-300 group-hover:bg-card"
              >
                {tag}
              </span>
            ))}
          </div>

          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} on GitHub`}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-muted transition-all duration-300 group-hover:text-foreground hover:bg-card"
            >
              <GitHubIcon className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="relative scroll-mt-24 overflow-x-clip py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-[30px] bg-accent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-[30px] bg-accent" />

      <div className="mx-auto w-full px-[46px] sm:px-[54px]">
        <div className="mb-14 flex flex-col gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-hover">
            Selected Work
          </span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            Projects
          </h2>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
