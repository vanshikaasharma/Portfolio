"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Atmosphere } from "../Atmosphere";
import { Reveal } from "../Reveal";
import {
  PixelBadge,
  PixelArrowUpRight,
  PixelStar,
  PixelPlanet,
} from "../pixel/PixelGlyphs";
import { ConstellationRule } from "../pixel/ConstellationRule";
import {
  projectCategories,
  type Project,
} from "@/lib/site";

function getTagClass(tag: string) {
  const lower = tag.toLowerCase();
  if (
    lower.includes("python") ||
    lower.includes("ml") ||
    lower.includes("xgboost")
  ) {
    return "pixel-tag-gold";
  }
  if (
    lower.includes("react") ||
    lower.includes("next") ||
    lower.includes("ui") ||
    lower.includes("design")
  ) {
    return "pixel-tag-pink";
  }
  if (
    lower.includes("typescript") ||
    lower.includes("java") ||
    lower.includes("node")
  ) {
    return "pixel-tag-ube";
  }
  return "pixel-tag-cadet";
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const href = `/projects/${project.slug}`;
  const highlights = project.highlights.slice(0, 2);

  return (
    <Reveal delay={Math.min(index, 5) * 0.05} className="h-full">
      <article className="pixel-panel group relative flex h-full min-h-[26.5rem] flex-col overflow-hidden rounded-xl border border-[#8387C3]/30 p-6 sm:min-h-[28rem] sm:p-7 shadow-[3px_3px_0px_#0A1123] transition-all duration-300 hover:-translate-y-1 hover:border-[#FCE7B8] hover:shadow-[4px_4px_0px_#0A1123,0_0_25px_rgba(252,231,184,0.2)]">
        <Link
          href={href}
          className="absolute inset-0 z-0 rounded-xl"
          aria-label={`View ${project.title}`}
        />

        <div className="relative z-10 pointer-events-none flex min-h-0 flex-1 flex-col">
          <div className="flex items-start justify-between gap-3 border-b border-[#8387C3]/20 pb-4">
            <h3 className="line-clamp-2 font-serif text-2xl font-semibold tracking-tight text-[#F5F6FC] transition-colors duration-200 group-hover:text-[#FCE7B8] sm:text-[1.65rem]">
              {project.title}
            </h3>

            {project.hackathon ? (
              <div className="shrink-0 text-right">
                {project.hackathon.badge ? (
                  <span className="inline-flex items-center gap-1 border border-[#FCE7B8] bg-[#FCE7B8]/15 px-2 py-0.5 font-pixel text-[9px] font-bold text-[#FCE7B8] shadow-[1px_1px_0px_#0A1123]">
                    <PixelStar
                      color="gold"
                      className="h-2.5 w-2.5 text-[#FCE7B8]"
                    />
                    {project.hackathon.badge}
                  </span>
                ) : null}
                <p className="mt-1 max-w-[7.5rem] truncate font-pixel text-[9px] text-[#F1BCF5]">
                  {project.hackathon.name}
                </p>
              </div>
            ) : (
              <span className="font-pixel text-[9px] text-[#8A8CAC]">
                PROJ // {String(index + 1).padStart(2, "0")}
              </span>
            )}
          </div>

          <div className="mt-4 flex min-h-0 flex-1 flex-col gap-4">
            <p className="line-clamp-3 text-[14px] leading-relaxed text-[#959BB5] transition-colors group-hover:text-[#F5F6FC] sm:text-[15px]">
              {project.description}
            </p>

            <div className="space-y-1.5">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 text-[13px] leading-relaxed text-[#CAD0E5]"
                >
                  <span className="shrink-0 font-pixel text-[9px] text-[#FCE7B8]">
                    ►
                  </span>
                  <span className="line-clamp-2">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto border-t border-[#8387C3]/15 pt-4">
            <div className="mb-4 flex min-h-[2.25rem] flex-wrap content-start gap-1.5">
              {project.tags.slice(0, 4).map((tag) => (
                <span key={tag} className={getTagClass(tag)}>
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between font-pixel text-[11px] text-[#F5F6FC]">
              <span className="flex items-center gap-1.5 transition-colors group-hover:text-[#FCE7B8]">
                <span>VIEW CASE STUDY</span>
                <PixelArrowUpRight className="h-3 w-3 text-[#FCE7B8] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
              <span className="text-[9px] text-[#8A8CAC] group-hover:text-[#FCE7B8]">
                [OPEN]
              </span>
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const totalCount = useMemo(
    () => projectCategories.reduce((sum, cat) => sum + cat.projects.length, 0),
    [],
  );

  const filters = useMemo(
    () => [
      { id: "all", label: "All", count: totalCount },
      ...projectCategories.map((cat) => ({
        id: cat.id,
        label: cat.title,
        count: cat.projects.length,
      })),
    ],
    [totalCount],
  );

  const visibleCategories =
    activeFilter === "all"
      ? projectCategories
      : projectCategories.filter((cat) => cat.id === activeFilter);

  const flatIndexOffset = (categoryId: string) => {
    let offset = 0;
    for (const cat of projectCategories) {
      if (cat.id === categoryId) break;
      offset += cat.projects.length;
    }
    return offset;
  };

  return (
    <section
      id="projects"
      className="relative scroll-mt-24 overflow-x-clip py-24 sm:py-32"
    >
      <Atmosphere variant="mist" />

      <div className="relative mx-auto w-full max-w-6xl px-6 sm:px-8">
        <Reveal className="mb-10">
          <div className="flex items-center gap-2.5">
            <PixelBadge
              variant="ube"
              icon={<PixelPlanet className="h-3 w-3" />}
            >
              03 // PROJECTS
            </PixelBadge>
            <ConstellationRule tone="ube" />
          </div>

          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-[#F5F6FC] sm:text-5xl">
            Featured Projects.
          </h2>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-[#959BB5]">
            A curated showcase of software engineering, predictive modeling,
            machine learning workflows, and hackathon-winning applications.
          </p>
        </Reveal>

        {/* Category filter tabs */}
        <Reveal delay={0.05} className="mb-12">
          <div className="border-y border-[#8387C3]/20 py-4">
            <div
              className="flex flex-wrap gap-2"
              role="tablist"
              aria-label="Project categories"
            >
              {filters.map((filter) => {
                const active = activeFilter === filter.id;
                return (
                  <button
                    key={filter.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`rounded-full border px-3.5 py-1.5 font-pixel text-[10px] tracking-wide transition-all ${
                      active
                        ? "border-[#8387C3] bg-[#8387C3] text-[#0A1123] shadow-[0_0_18px_rgba(131,135,195,0.45)]"
                        : "border-[#8387C3]/30 bg-transparent text-[#959BB5] hover:border-[#8387C3]/55 hover:text-[#F5F6FC]"
                    }`}
                  >
                    {filter.label} ({filter.count})
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col gap-14">
          {visibleCategories.map((category, catIndex) => {
            const startIndex = flatIndexOffset(category.id);
            return (
              <div key={category.id} id={category.id} className="scroll-mt-28">
                {/* Category copy only on All — tabs already name the filter */}
                {activeFilter === "all" ? (
                  <Reveal>
                    <div className="mb-8 max-w-2xl">
                      <div className="flex items-center gap-2">
                        <span className="font-pixel text-[10px] font-bold text-[#8387C3]">
                          {String(catIndex + 1).padStart(2, "0")} // CATEGORY
                        </span>
                        <span className="h-px w-8 bg-gradient-to-r from-[#8387C3] to-transparent" />
                      </div>
                      <h3 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-[#F5F6FC] sm:text-4xl">
                        {category.title}
                      </h3>
                      <p className="mt-1 font-pixel text-[10px] uppercase tracking-wider text-[#8A8CAC]">
                        {category.subtitle}
                      </p>
                      <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-[#959BB5]">
                        {category.description}
                      </p>
                    </div>
                  </Reveal>
                ) : null}

                <div className="grid auto-rows-fr gap-6 sm:grid-cols-2">
                  {category.projects.map((project, i) => (
                    <ProjectCard
                      key={project.slug}
                      project={project}
                      index={startIndex + i}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
