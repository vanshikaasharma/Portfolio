"use client";

import Image from "next/image";
import { Atmosphere } from "../Atmosphere";
import { Reveal } from "../Reveal";
import {
  PixelBadge,
  PixelPlanet,
  PixelArrowUpRight,
} from "../pixel/PixelGlyphs";
import { ConstellationRule } from "../pixel/ConstellationRule";
import { StampBook } from "../pixel/StampBook";
import { about, site, travelStamps } from "@/lib/site";

export function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32"
    >
      <Atmosphere variant="mist" />

      <div className="relative mx-auto w-full max-w-5xl px-6 sm:px-8">
        <Reveal className="mb-14">
          <div className="flex items-center gap-2.5">
            <PixelBadge variant="pink" icon={<PixelPlanet className="h-3 w-3" />}>
              01 // ABOUT
            </PixelBadge>
            <ConstellationRule tone="pink" />
          </div>

          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-[#F5F6FC] sm:text-5xl">
            A bit about me.
          </h2>
          <p className="mt-2 font-pixel text-[11px] uppercase tracking-widest text-[#FCE7B8]">
            Impact · Connection · Momentum
          </p>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12 lg:items-stretch">
          <Reveal delay={0.05} className="flex h-full flex-col gap-5">
            <div className="relative border-l-2 border-[#F1BCF5]/60 pl-5 sm:pl-6">
              <p className="font-serif text-lg leading-relaxed text-[#F5F6FC] sm:text-xl">
                I&apos;m a Computer Science student at UBC drawn to software that
                helps communities thrive and makes everyday connection feel
                easier.
              </p>
            </div>

            <div className="space-y-4 text-[15px] leading-[1.8] text-[#959BB5] sm:text-base">
              {about.paragraphs.slice(1).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="relative overflow-hidden rounded-xl border border-[#3A3E6C] bg-gradient-to-br from-[#3A3E6C]/30 via-[#18203C]/80 to-[#0A1123] p-4 shadow-[3px_3px_0px_#0A1123]">
              <div className="flex items-start gap-3">
                <span className="font-serif text-2xl text-[#FCE7B8]">“</span>
                <p className="font-serif text-sm italic leading-relaxed text-[#F5F6FC] sm:text-[15px]">
                  The best work I do starts with people, then finds its shape in
                  code.
                </p>
              </div>
            </div>

            {/* Fills the gap in the left column beside the profile card */}
            <div className="mt-auto min-h-0 flex-1">
              <StampBook
                stamps={travelStamps}
                title="Passport Stamps"
                eyebrow="PASSPORT // TRAVEL LOG"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="h-full">
            <div className="pixel-panel relative flex h-full flex-col overflow-hidden rounded-xl border border-[#8387C3]/40 p-6 sm:p-7 shadow-[4px_4px_0px_#0A1123]">
              <div className="flex items-center justify-between border-b border-[#8387C3]/20 pb-3.5">
                <div className="flex items-center gap-2">
                  <PixelPlanet className="h-4 w-4" />
                  <span className="font-pixel text-[10px] font-bold tracking-widest text-[#FCE7B8]">
                    PROFILE
                  </span>
                </div>
                <div className="flex items-center gap-1.5 font-pixel text-[9px] text-[#F1BCF5]">
                  <span className="h-2 w-2 rounded-full bg-[#F1BCF5] animate-pulse" />
                  <span>ONLINE</span>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-4">
                <div className="relative shrink-0 group">
                  <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-[#8387C3] via-[#F1BCF5] to-[#FCE7B8] opacity-35 blur-sm transition duration-300 group-hover:opacity-70" />
                  <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-[#8387C3] bg-[#0A1123] shadow-[2px_2px_0px_#0A1123] sm:h-16 sm:w-16">
                    <Image
                      src="/pixel-avatar.png"
                      alt="Pixel art avatar of Vanshika Sharma with headphones and black glasses"
                      width={64}
                      height={64}
                      unoptimized
                      className="h-full w-full object-cover pixelated transition-transform duration-300 group-hover:scale-105"
                      priority
                    />
                  </div>
                </div>

                <div className="min-w-0">
                  <h3 className="font-serif text-xl font-semibold tracking-tight text-[#F5F6FC] sm:text-2xl">
                    {site.name}
                  </h3>
                </div>
              </div>

              <dl className="mt-5 space-y-3 border-t border-[#8387C3]/20 pt-4">
                {about.facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="group border-b border-[#959BB5]/12 pb-3 last:border-0 last:pb-0"
                  >
                    <dt className="font-pixel text-[9px] uppercase tracking-wider text-[#8A8CAC] group-hover:text-[#F1BCF5] transition-colors">
                      {fact.label}
                    </dt>
                    <dd className="mt-0.5 font-serif text-[15px] font-medium text-[#F5F6FC]">
                      {fact.label === "Recent Role" ? (
                        <span className="text-[#F1BCF5]">{fact.value}</span>
                      ) : fact.label === "School" ? (
                        <span className="text-[#CAD0E5]">{fact.value}</span>
                      ) : (
                        fact.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6 rounded border border-[#FCE7B8]/30 bg-[#0A1123]/90 p-3 text-center">
                <p className="font-pixel text-[9px] text-[#FCE7B8]">
                  ● OPEN TO CO-OP &amp; INTERNSHIPS
                </p>
                <p className="mt-0.5 font-pixel text-[9px] text-[#CAD0E5]">
                  Full-Stack · ML · Data Science
                </p>
              </div>

              <a
                href={`mailto:${site.email}`}
                className="pixel-btn-primary mt-6 flex w-full items-center justify-center gap-2 py-2.5 font-pixel text-[11px] font-bold shadow-[2px_2px_0px_#0A1123]"
              >
                <span>GET IN TOUCH</span>
                <PixelArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
