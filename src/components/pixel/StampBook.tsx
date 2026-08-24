"use client";

import { motion, useReducedMotion } from "motion/react";
import type { TravelStamp, StampInk } from "@/lib/site";
import {
  PixelUsaGlyph,
  PixelCanadaGlyph,
  PixelJapanGlyph,
  PixelSingaporeGlyph,
  PixelRussiaGlyph,
  PixelDubaiGlyph,
  PixelIndiaGlyph,
  PixelLondonGlyph,
  PixelMalaysiaGlyph,
  PixelThailandGlyph,
  PixelHongKongGlyph,
  PixelMacauGlyph,
  PixelPassportCrest,
} from "./PixelGlyphs";

const inkStyles: Record<
  StampInk,
  { ring: string; text: string; wash: string; dashed: string; glow: string }
> = {
  gold: {
    ring: "border-[#FCE7B8]/70",
    text: "text-[#FCE7B8]",
    wash: "bg-[#FCE7B8]/[0.08]",
    dashed: "border-[#FCE7B8]/55",
    glow: "shadow-[0_0_12px_rgba(252,231,184,0.18)]",
  },
  ube: {
    ring: "border-[#8387C3]/75",
    text: "text-[#CAD0E5]",
    wash: "bg-[#8387C3]/[0.09]",
    dashed: "border-[#8387C3]/55",
    glow: "shadow-[0_0_12px_rgba(131,135,195,0.2)]",
  },
  pink: {
    ring: "border-[#F1BCF5]/75",
    text: "text-[#F6D4F9]",
    wash: "bg-[#F1BCF5]/[0.09]",
    dashed: "border-[#F1BCF5]/60",
    glow: "shadow-[0_0_14px_rgba(241,188,245,0.22)]",
  },
  vermilion: {
    ring: "border-[#FF7582]/80",
    text: "text-[#FFA8B0]",
    wash: "bg-[#FF7582]/[0.10]",
    dashed: "border-[#FF7582]/65",
    glow: "shadow-[0_0_14px_rgba(255,117,130,0.25)]",
  },
  cadet: {
    ring: "border-[#959BB5]/70",
    text: "text-[#CAD0E5]",
    wash: "bg-[#959BB5]/[0.08]",
    dashed: "border-[#959BB5]/50",
    glow: "shadow-[0_0_12px_rgba(149,155,181,0.15)]",
  },
};

function StampGlyph({ icon }: { icon: TravelStamp["icon"] }) {
  switch (icon) {
    case "usa":
      return (
        <PixelUsaGlyph className="my-0.5 h-4.5 w-4.5 drop-shadow-[0_0_5px_rgba(252,231,184,0.35)] sm:h-5 sm:w-5" />
      );
    case "canada":
      return (
        <PixelCanadaGlyph className="my-0.5 h-4.5 w-4.5 drop-shadow-[0_0_5px_rgba(255,117,130,0.35)] sm:h-5 sm:w-5" />
      );
    case "japan":
      return (
        <PixelJapanGlyph className="my-0.5 h-4.5 w-4.5 drop-shadow-[0_0_5px_rgba(241,188,245,0.4)] sm:h-5 sm:w-5" />
      );
    case "singapore":
      return (
        <PixelSingaporeGlyph className="my-0.5 h-4.5 w-4.5 drop-shadow-[0_0_5px_rgba(131,135,195,0.35)] sm:h-5 sm:w-5" />
      );
    case "russia":
      return (
        <PixelRussiaGlyph className="my-0.5 h-4.5 w-4.5 drop-shadow-[0_0_5px_rgba(149,155,181,0.35)] sm:h-5 sm:w-5" />
      );
    case "dubai":
      return (
        <PixelDubaiGlyph className="my-0.5 h-4.5 w-4.5 drop-shadow-[0_0_5px_rgba(252,231,184,0.35)] sm:h-5 sm:w-5" />
      );
    case "india":
      return (
        <PixelIndiaGlyph className="my-0.5 h-4.5 w-4.5 drop-shadow-[0_0_5px_rgba(252,231,184,0.35)] sm:h-5 sm:w-5" />
      );
    case "london":
      return (
        <PixelLondonGlyph className="my-0.5 h-4.5 w-4.5 drop-shadow-[0_0_5px_rgba(241,188,245,0.35)] sm:h-5 sm:w-5" />
      );
    case "malaysia":
      return (
        <PixelMalaysiaGlyph className="my-0.5 h-4.5 w-4.5 drop-shadow-[0_0_5px_rgba(131,135,195,0.35)] sm:h-5 sm:w-5" />
      );
    case "thailand":
      return (
        <PixelThailandGlyph className="my-0.5 h-4.5 w-4.5 drop-shadow-[0_0_5px_rgba(255,117,130,0.35)] sm:h-5 sm:w-5" />
      );
    case "hongkong":
      return (
        <PixelHongKongGlyph className="my-0.5 h-4.5 w-4.5 drop-shadow-[0_0_5px_rgba(241,188,245,0.35)] sm:h-5 sm:w-5" />
      );
    case "macau":
      return (
        <PixelMacauGlyph className="my-0.5 h-4.5 w-4.5 drop-shadow-[0_0_5px_rgba(131,135,195,0.35)] sm:h-5 sm:w-5" />
      );
    default:
      return null;
  }
}

function PlaceStamp({
  stamp,
  index,
}: {
  stamp: TravelStamp;
  index: number;
}) {
  const reduceMotion = useReducedMotion();
  const ink = inkStyles[stamp.ink];
  const tilt = stamp.tilt ?? (index % 2 === 0 ? -5 : 4);

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, scale: 0.85, rotate: tilt - 4 }}
      whileInView={{ opacity: 1, scale: 1, rotate: tilt }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.4,
        delay: 0.03 * index,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex flex-col items-center justify-center transition-transform duration-300 hover:scale-110"
      title={stamp.note ? `${stamp.place} — ${stamp.note}` : stamp.place}
    >
      <div
        className={`relative grid place-items-center transition-shadow duration-300 ${ink.glow} h-[4.4rem] w-[4.4rem] sm:h-[4.75rem] sm:w-[4.75rem]`}
      >
        {/* Outer Circular Passport Seal Rings — perfectly circular, no square borders */}
        <div className={`absolute inset-0 rounded-full border-[1.8px] ${ink.ring}`} />
        <div
          className={`absolute inset-[3px] rounded-full border border-dashed ${ink.dashed}`}
        />
        <div className={`absolute inset-[6px] rounded-full border ${ink.ring} opacity-35`} />
        <div className={`absolute inset-[8px] rounded-full ${ink.wash}`} />

        {/* Security tick notches on 4 circular axes */}
        <div className="absolute -top-0.5 left-1/2 h-0.5 w-1.5 -translate-x-1/2 rounded-full bg-[#0A1123]" />
        <div className="absolute -bottom-0.5 left-1/2 h-0.5 w-1.5 -translate-x-1/2 rounded-full bg-[#0A1123]" />
        <div className="absolute -left-0.5 top-1/2 h-1.5 w-0.5 -translate-y-1/2 rounded-full bg-[#0A1123]" />
        <div className="absolute -right-0.5 top-1/2 h-1.5 w-0.5 -translate-y-1/2 rounded-full bg-[#0A1123]" />

        {/* Inner Stamp Content */}
        <div
          className={`relative z-[1] flex flex-col items-center justify-center px-0.5 text-center leading-none ${ink.text}`}
        >
          <span className="font-pixel text-[5px] tracking-[0.12em] opacity-85 sm:text-[5.5px]">
            {stamp.region}
          </span>
          <StampGlyph icon={stamp.icon} />
          <span className="font-pixel text-[7px] font-bold tracking-[0.14em] text-[#F5F6FC] sm:text-[8px]">
            {stamp.place}
          </span>
          <span className="mt-0.5 font-pixel text-[5px] tracking-[0.08em] text-[#FCE7B8] opacity-85 sm:text-[5.5px]">
            {stamp.year}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

type StampBookProps = {
  stamps: readonly TravelStamp[];
  className?: string;
  title?: string;
  eyebrow?: string;
};

export function StampBook({
  stamps,
  className = "",
  title = "Passport Stamps",
  eyebrow = "PASSPORT // VISA LOG",
}: StampBookProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-[#8387C3]/35 bg-gradient-to-br from-[#1a2240] via-[#121a32] to-[#0A1123] shadow-[4px_4px_0px_#0A1123] ${className}`}
    >
      {/* Passport Header Bar with Golden Crest */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#8387C3]/25 bg-gradient-to-r from-[#21274D] via-[#18203C] to-[#0A1123] px-3.5 py-2.5 sm:px-4">
        <div className="flex items-center gap-2">
          <div className="grid h-6 w-6 place-items-center rounded-full border border-[#FCE7B8]/40 bg-[#0A1123] shadow-inner">
            <PixelPassportCrest className="h-3.5 w-3.5 text-[#FCE7B8]" />
          </div>
          <div>
            <p className="font-pixel text-[7.5px] uppercase tracking-[0.18em] text-[#FCE7B8]">
              {eyebrow}
            </p>
            <p className="font-serif text-sm font-semibold text-[#F5F6FC]">
              {title}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 font-pixel text-[8.5px]">
          <span className="rounded-full border border-[#FCE7B8]/30 bg-[#0A1123]/80 px-2.5 py-0.5 text-[#FCE7B8]">
            {stamps.length} VISAS
          </span>
        </div>
      </div>

      {/* Passport Page Interior with security watermark lines */}
      <div className="relative p-3.5 sm:p-4">
        {/* Subtle security watermark lines */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(149,155,181,0.45) 21px)",
          }}
        />

        {/* Smooth Stitched Binding edge on the left */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-2.5 bg-gradient-to-r from-[#0A1123] to-transparent border-r border-dashed border-[#FCE7B8]/20"
        />

        {/* Stamps Grid: Exactly 6 entries per row (2 rows of 6 stamps = 12 total) */}
        <div className="relative grid grid-cols-3 gap-x-1.5 gap-y-3 sm:grid-cols-6 sm:gap-x-2 sm:gap-y-3.5">
          {stamps.map((stamp, index) => (
            <PlaceStamp
              key={`${stamp.place}-${stamp.year}-${index}`}
              stamp={stamp}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Passport Footer Status */}
      <div className="flex items-center justify-between border-t border-[#8387C3]/20 bg-[#0A1123]/80 px-3.5 py-2 font-pixel text-[7.5px] text-[#8A8CAC] sm:px-4">
        <span className="flex items-center gap-1 text-[#F1BCF5]">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#F1BCF5] animate-pulse" />
          PASSPORT NO. VS-2028-UBC
        </span>
        <span className="text-[#FCE7B8]">OFFICIAL VISA LOG</span>
      </div>
    </div>
  );
}
