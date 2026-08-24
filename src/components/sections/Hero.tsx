"use client";

import { motion, useReducedMotion } from "motion/react";
import { Atmosphere } from "../Atmosphere";
import { Container } from "../Container";
import { GitHubIcon, LinkedInIcon, MailIcon } from "../icons";
import {
  PixelBadge,
  PixelSparkle,
  PixelArrowUpRight,
} from "../pixel/PixelGlyphs";
import { DreamscapeWindow } from "../pixel/DreamscapeWindow";
import { site } from "@/lib/site";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-20 pb-16 lg:py-0"
    >
      <Atmosphere variant="hero" />

      <Container className="relative grid w-full items-center gap-12 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:py-20">
        {/* Left Column - Intro & Persona */}
        <div className="relative z-[2]">
          {/* Status — unique signal only (school/location live elsewhere) */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-2.5"
          >
            <PixelBadge active variant="gold" icon={<PixelSparkle color="gold" className="h-3 w-3" />}>
              OPEN TO OPPORTUNITIES
            </PixelBadge>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-6"
          >
            <h1 className="font-serif text-[3.25rem] font-semibold leading-[1.03] tracking-tight text-[#F5F6FC] sm:text-6xl lg:text-[4.75rem]">
              {site.name}
            </h1>
          </motion.div>

          {/* Identity once */}
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-4 font-serif text-xl italic sm:text-2xl"
          >
            <span className="text-[#FCE7B8]">CS Student</span>{" "}
            <span className="text-[#8387C3]">·</span>{" "}
            <span className="text-[#F1BCF5]">UBC</span>
          </motion.p>

          {/* Bio adds craft, not another school line */}
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-6 max-w-lg text-[15px] leading-[1.8] text-[#959BB5] sm:text-[16px]"
          >
            I learn by building: full-stack products, clean interfaces, solid
            backends, and ML where it earns its place.
          </motion.p>

          {/* Action CTAs & Social Buttons */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-3.5"
          >
            <a
              href="/#projects"
              className="pixel-btn-primary group"
            >
              <span>EXPLORE PROJECTS</span>
              <PixelArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-btn-gold group"
            >
              <span>RESUME</span>
              <PixelArrowUpRight className="h-3.5 w-3.5 text-[#FCE7B8] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Social Icons with Palette Frames */}
            <div className="flex items-center gap-2 pl-1">
              <a
                href={site.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="grid h-10 w-10 place-items-center rounded border border-[#959BB5]/40 bg-[#18203C]/90 text-[#CAD0E5] shadow-[2px_2px_0px_#0A1123] transition-all hover:border-[#959BB5] hover:text-[#FFFFFF] hover:shadow-[0_0_12px_rgba(149,155,181,0.4)]"
              >
                <GitHubIcon className="h-4 w-4" />
              </a>

              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded border border-[#3A3E6C] bg-[#3A3E6C]/60 text-[#F5F6FC] shadow-[2px_2px_0px_#0A1123] transition-all hover:border-[#8387C3] hover:text-[#FFFFFF] hover:shadow-[0_0_12px_rgba(58,62,108,0.6)]"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>

              <a
                href={`mailto:${site.email}`}
                aria-label="Email"
                className="grid h-10 w-10 place-items-center rounded border border-[#FCE7B8]/40 bg-[#0A1123] text-[#FCE7B8] shadow-[2px_2px_0px_#0A1123] transition-all hover:border-[#FCE7B8] hover:text-[#FFFFFF] hover:shadow-[0_0_12px_rgba(252,231,184,0.4)]"
              >
                <MailIcon className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Dreamscape Window */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-[2]"
        >
          <DreamscapeWindow />
        </motion.div>
      </Container>

      {/* Bottom Pixel Scroll Indicator */}
      <motion.a
        href="/#about"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 font-pixel text-[9px] uppercase tracking-[0.2em] text-[#8A8CAC] transition-colors hover:text-[#FCE7B8] sm:flex"
      >
        <span className="flex items-center gap-1">
          <PixelSparkle color="gold" className="h-2 w-2" />
          SCROLL // ABOUT
        </span>
        <span className="h-6 w-px bg-gradient-to-b from-[#FCE7B8] via-[#8387C3] to-transparent animate-pulse" />
      </motion.a>
    </section>
  );
}
