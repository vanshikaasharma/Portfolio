"use client";

import { Atmosphere } from "../Atmosphere";
import { Reveal } from "../Reveal";
import {
  PixelBadge,
  PixelSparkle,
  PixelCode,
  PixelData,
  PixelTerminal,
  PixelPlanet,
} from "../pixel/PixelGlyphs";
import { ConstellationRule } from "../pixel/ConstellationRule";
import { skills } from "@/lib/site";

const categoryConfigs: Record<
  string,
  {
    icon: React.ReactNode;
    color: string;
    borderClass: string;
    tagClass: string;
    badgeVariant: "cadet" | "pink" | "gold" | "ube";
  }
> = {
  Languages: {
    icon: <PixelCode className="h-4 w-4" />,
    color: "#CAD0E5",
    borderClass: "border-[#959BB5]/35 hover:border-[#959BB5]",
    tagClass: "pixel-tag-cadet",
    badgeVariant: "cadet",
  },
  Frameworks: {
    icon: <PixelTerminal className="h-4 w-4" />,
    color: "#F6D4F9",
    borderClass: "border-[#F1BCF5]/35 hover:border-[#F1BCF5]",
    tagClass: "pixel-tag-pink",
    badgeVariant: "pink",
  },
  "Data & ML": {
    icon: <PixelData className="h-4 w-4" />,
    color: "#FCE7B8",
    borderClass: "border-[#FCE7B8]/35 hover:border-[#FCE7B8]",
    tagClass: "pixel-tag-gold",
    badgeVariant: "gold",
  },
  Tools: {
    icon: <PixelPlanet className="h-4 w-4" />,
    color: "#D9DEF5",
    borderClass: "border-[#8387C3]/35 hover:border-[#8387C3]",
    tagClass: "pixel-tag-ube",
    badgeVariant: "ube",
  },
};

export function Skills() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32"
    >
      <Atmosphere variant="side" />

      <div className="relative mx-auto w-full max-w-6xl px-6 sm:px-8">
        {/* Header */}
        <Reveal className="mb-14 text-center">
          <div className="flex items-center justify-center gap-2.5">
            <PixelBadge variant="gold" icon={<PixelSparkle color="gold" className="h-2.5 w-2.5" />}>
              02 // TOOLKIT
            </PixelBadge>
            <ConstellationRule tone="gold" className="hidden sm:inline-flex" />
          </div>

          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-[#F5F6FC] sm:text-5xl">
            Skills &amp; Technologies
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-[#959BB5]">
            Languages, full-stack frameworks, data intelligence libraries, and systems tooling color-coded across the stack.
          </p>
        </Reveal>

        {/* 4-column Multi-Tone Skills Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group, i) => {
            const config = categoryConfigs[group.category] || categoryConfigs.Tools;

            return (
              <Reveal key={group.category} delay={i * 0.08}>
                <div
                  className={`pixel-panel group relative flex h-full flex-col justify-between overflow-hidden rounded-xl border p-6 shadow-[3px_3px_0px_#0A1123] transition-all duration-300 hover:-translate-y-1 ${config.borderClass}`}
                >
                  {/* Header of card */}
                  <div>
                    <div className="flex items-center justify-between border-b border-[#8387C3]/20 pb-3.5">
                      <div className="flex items-center gap-2" style={{ color: config.color }}>
                        {config.icon}
                        <h3 className="font-pixel text-xs font-bold uppercase tracking-wider">
                          {group.category}
                        </h3>
                      </div>
                      <span className="font-pixel text-[9px] text-[#8A8CAC]">
                        0{i + 1}
                      </span>
                    </div>

                    {/* Skill Badges */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span key={item} className={config.tagClass}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
