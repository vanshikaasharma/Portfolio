"use client";

import { Atmosphere } from "../Atmosphere";
import { Reveal } from "../Reveal";
import {
  PixelBadge,
  PixelDiamond,
  PixelComet,
} from "../pixel/PixelGlyphs";
import { ConstellationRule } from "../pixel/ConstellationRule";
import { experience, type Experience } from "@/lib/site";

function getRoleAccent(type: string, company: string) {
  if (company.includes("DarkVision")) {
    return {
      badgeBg: "bg-[#FCE7B8]/15 border-[#FCE7B8]/40 text-[#FCE7B8]",
      iconColor: "#FCE7B8",
      hoverText: "group-hover:text-[#FCE7B8]",
      bulletColor: "#FCE7B8",
    };
  }
  if (type.includes("Leadership") || type.includes("Club")) {
    return {
      badgeBg: "bg-[#F1BCF5]/15 border-[#F1BCF5]/40 text-[#F1BCF5]",
      iconColor: "#F1BCF5",
      hoverText: "group-hover:text-[#F1BCF5]",
      bulletColor: "#F1BCF5",
    };
  }
  return {
    badgeBg: "bg-[#959BB5]/15 border-[#959BB5]/40 text-[#CAD0E5]",
    iconColor: "#959BB5",
    hoverText: "group-hover:text-[#CAD0E5]",
    bulletColor: "#8387C3",
  };
}

function ExperienceEntry({
  item,
  index,
}: {
  item: Experience;
  index: number;
}) {
  const metaLabel = item.metaLabel ?? "Built With";
  const accent = getRoleAccent(item.type, item.company);

  return (
    <Reveal delay={index * 0.08}>
      <article className="group relative border-b border-[#8387C3]/20 py-10 last:border-b-0 sm:py-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] lg:gap-12">
          {/* Left Column: Role & Company Metadata */}
          <div>
            <div className="flex items-center gap-2">
              <span className="font-pixel text-[10px] text-[#8387C3]">
                0{index + 1} //
              </span>
              <span className={`inline-flex items-center gap-1 border px-2 py-0.5 font-pixel text-[9px] ${accent.badgeBg}`}>
                <PixelDiamond className="h-2 w-2" style={{ color: accent.iconColor }} />
                {item.type}
              </span>
            </div>

            <h3 className={`mt-4 font-serif text-2xl font-semibold tracking-tight text-[#F5F6FC] transition-colors duration-200 ${accent.hoverText} sm:text-3xl`}>
              {item.role}
            </h3>
            <p className="mt-1 font-medium text-[15px] text-[#CAD0E5]">{item.company}</p>
            <p className="mt-2 font-pixel text-[10px] text-[#8A8CAC]">
              {item.period}
            </p>
          </div>

          {/* Right Column: Highlights & Tags */}
          <div className="min-w-0">
            {item.description && (
              <p className="mb-6 max-w-xl text-[14px] leading-relaxed text-[#959BB5]">
                {item.description}
              </p>
            )}

            <ul className="space-y-3">
              {item.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-2.5 text-[14px] leading-relaxed text-[#D2D6E6]"
                >
                  <span
                    className="shrink-0 pt-0.5 font-pixel text-[10px]"
                    style={{ color: accent.bulletColor }}
                  >
                    ►
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            {item.tags.length > 0 && (
              <div className="mt-6 pt-4 border-t border-[#8387C3]/15">
                <p className="font-pixel text-[9px] uppercase tracking-wider text-[#8A8CAC] mb-2">
                  {metaLabel}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center font-pixel text-[9px] text-[#D2D6E6] bg-[#18203C]/90 px-2 py-0.5 border border-[#8387C3]/30 shadow-[1px_1px_0px_#0A1123]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
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
      className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32"
    >
      <Atmosphere variant="side" />

      <div className="relative mx-auto w-full max-w-5xl px-6 sm:px-8">
        {/* Section Header */}
        <Reveal className="mb-14">
          <div className="flex items-center gap-2.5">
            <PixelBadge variant="cadet" icon={<PixelComet className="h-2.5 w-4" />}>
              04 // EXPERIENCE
            </PixelBadge>
            <ConstellationRule tone="ube" />
          </div>

          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-[#F5F6FC] sm:text-5xl">
            Work &amp; Leadership.
          </h2>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-[#959BB5]">
            Engineering, data analytics co-op, and technical student leadership across campus and industry.
          </p>
        </Reveal>

        {/* Experience Timeline */}
        <div className="border-t border-[#8387C3]/20">
          {experience.map((item, i) => (
            <ExperienceEntry
              key={`${item.role}-${item.company}`}
              item={item}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
