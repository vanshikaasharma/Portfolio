"use client";

import { useState } from "react";
import { Atmosphere } from "../Atmosphere";
import { Reveal } from "../Reveal";
import { GitHubIcon, LinkedInIcon, MailIcon } from "../icons";
import {
  PixelBadge,
  PixelSparkle,
  PixelPlanet,
  PixelComet,
  PixelStar,
  PixelArrowUpRight,
} from "../pixel/PixelGlyphs";
import { ConstellationRule } from "../pixel/ConstellationRule";
import { site } from "@/lib/site";

export function Contact() {
  const year = new Date().getFullYear();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(site.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden border-t border-[#8387C3]/20 py-24 sm:py-32"
    >
      <Atmosphere variant="footer" />

      <div className="relative mx-auto w-full max-w-5xl px-6 sm:px-8">
        <Reveal>
          {/* Section Header */}
          <div className="flex items-center gap-2.5">
            <PixelBadge variant="gold" icon={<PixelComet className="h-2.5 w-4" />}>
              05 // CONNECT
            </PixelBadge>
            <ConstellationRule tone="gold" />
          </div>

          <div className="mt-8 pixel-panel relative overflow-hidden rounded-2xl border border-[#8387C3]/40 p-8 sm:p-12 shadow-[4px_4px_0px_#0A1123]">
            {/* Background nightscape glow */}
            <div className="absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-[#F1BCF5]/20 blur-3xl animate-aura-pulse" />
            <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-[#3A3E6C]/50 blur-3xl" />

            <div className="relative z-10 grid gap-8 lg:grid-cols-[1.3fr_0.7fr] items-center">
              <div>
                <div className="flex items-center gap-2">
                  <PixelPlanet className="h-5 w-5" />
                  <span className="font-pixel text-[10px] tracking-widest text-[#FCE7B8]">
                    LET&apos;S CONNECT
                  </span>
                </div>

                <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-[#F5F6FC] sm:text-4xl">
                  Let’s build something thoughtful together.
                </h2>

                <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-[#959BB5]">
                  Always open to new opportunities in software engineering, applied ML, and data analytics, or just a friendly chat about tech and ideas.
                </p>

                {/* Direct Action Buttons */}
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href={`mailto:${site.email}`}
                    className="pixel-btn-primary group"
                  >
                    <MailIcon className="h-4 w-4" />
                    <span>SEND AN EMAIL</span>
                    <PixelArrowUpRight className="h-3.5 w-3.5" />
                  </a>

                  <button
                    onClick={copyEmail}
                    className="pixel-btn-gold"
                  >
                    <PixelSparkle color="gold" className="h-3 w-3 text-[#FCE7B8]" />
                    <span>{copied ? "COPIED TO CLIPBOARD!" : "COPY EMAIL"}</span>
                  </button>
                </div>
              </div>

              {/* Social Channels Card with Multi-Color Rows */}
              <div className="rounded-xl border border-[#8387C3]/30 bg-[#0A1123]/85 p-5 shadow-inner">
                <p className="font-pixel text-[10px] text-[#FCE7B8] uppercase tracking-wider mb-4">
                  // SOCIAL CHANNELS
                </p>

                <div className="space-y-2.5">
                  <a
                    href={site.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-lg border border-[#3A3E6C] bg-[#18203C]/90 px-3.5 py-2.5 text-xs text-[#F5F6FC] transition-all hover:border-[#8387C3] hover:bg-[#3A3E6C]"
                  >
                    <div className="flex items-center gap-2.5">
                      <LinkedInIcon className="h-4 w-4 text-[#8387C3]" />
                      <span className="font-pixel text-[11px]">LinkedIn</span>
                    </div>
                    <PixelArrowUpRight className="h-3.5 w-3.5 text-[#8387C3]" />
                  </a>

                  <a
                    href={site.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-lg border border-[#959BB5]/30 bg-[#18203C]/90 px-3.5 py-2.5 text-xs text-[#CAD0E5] transition-all hover:border-[#959BB5] hover:text-[#FFFFFF]"
                  >
                    <div className="flex items-center gap-2.5">
                      <GitHubIcon className="h-4 w-4 text-[#959BB5]" />
                      <span className="font-pixel text-[11px]">GitHub</span>
                    </div>
                    <PixelArrowUpRight className="h-3.5 w-3.5 text-[#959BB5]" />
                  </a>

                  <a
                    href={site.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-lg border border-[#F1BCF5]/30 bg-[#18203C]/90 px-3.5 py-2.5 text-xs text-[#F6D4F9] transition-all hover:border-[#F1BCF5] hover:text-[#FFFFFF]"
                  >
                    <div className="flex items-center gap-2.5">
                      <PixelStar color="pink" className="h-4 w-4 text-[#F1BCF5]" />
                      <span className="font-pixel text-[11px]">Resume (PDF)</span>
                    </div>
                    <PixelArrowUpRight className="h-3.5 w-3.5 text-[#F1BCF5]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 flex items-center justify-center gap-2 border-t border-[#8387C3]/20 pt-8 font-pixel text-[10px] text-[#8A8CAC]">
          <PixelSparkle color="gold" className="h-2.5 w-2.5 text-[#FCE7B8]" />
          <span>© {year} {site.name} · VANCOUVER, BC</span>
        </div>
      </div>
    </section>
  );
}
