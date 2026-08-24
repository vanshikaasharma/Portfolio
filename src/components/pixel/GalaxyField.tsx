"use client";

import {
  PixelPlanet,
  PixelComet,
  PixelDiamond,
  PixelStar,
  PixelSparkle,
} from "./PixelGlyphs";
import { PixelStarfield } from "./PixelStarfield";

type Density = "rich" | "soft" | "faint";
type Scene = "hero" | "drift" | "orbit" | "horizon";

/**
 * Shared galaxy layer: nebula wash, milky band, starfield, and floating
 * celestial props (planets, rings, comets) — not just moon/stars.
 */
export function GalaxyField({
  density = "soft",
  scene = "drift",
  showProps = true,
  className = "",
}: {
  density?: Density;
  scene?: Scene;
  showProps?: boolean;
  className?: string;
}) {
  const starOpacity =
    density === "rich" ? "opacity-100" : density === "soft" ? "opacity-70" : "opacity-40";
  const starCount = density === "rich" ? 48 : density === "soft" ? 28 : 16;

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {/* Nebula color washes — angled differently per scene */}
      <div
        className={`absolute rounded-full blur-3xl ${
          scene === "hero"
            ? "-left-[10%] top-[8%] h-[42%] w-[48%]"
            : scene === "orbit"
              ? "right-[-12%] top-[20%] h-[40%] w-[46%]"
              : scene === "horizon"
                ? "left-[10%] bottom-[-8%] h-[44%] w-[60%]"
                : "-right-[6%] top-[6%] h-[36%] w-[44%]"
        } ${
          density === "rich" ? "opacity-90" : density === "soft" ? "opacity-55" : "opacity-30"
        }`}
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(131,135,195,0.35), rgba(58,62,108,0.2), transparent 70%)",
        }}
      />
      <div
        className={`absolute rounded-full blur-3xl animate-aura-pulse ${
          scene === "hero"
            ? "-right-[8%] top-[18%] h-[38%] w-[42%]"
            : scene === "orbit"
              ? "-left-[10%] bottom-[12%] h-[36%] w-[40%]"
              : scene === "horizon"
                ? "right-[8%] top-[10%] h-[32%] w-[38%]"
                : "left-[-8%] top-[30%] h-[34%] w-[40%]"
        } ${
          density === "rich" ? "opacity-80" : density === "soft" ? "opacity-45" : "opacity-25"
        }`}
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(241,188,245,0.28), rgba(217,158,248,0.12), transparent 72%)",
          animationDelay: "2.5s",
        }}
      />
      <div
        className={`absolute rounded-full blur-3xl ${
          scene === "hero"
            ? "bottom-[-5%] left-[20%] h-[36%] w-[55%]"
            : "bottom-[-10%] right-[15%] h-[32%] w-[48%]"
        } ${
          density === "rich" ? "opacity-70" : density === "soft" ? "opacity-40" : "opacity-22"
        }`}
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(252,231,184,0.1), rgba(58,62,108,0.35), transparent 70%)",
        }}
      />

      {/* Soft milky-way band */}
      <div
        className={`absolute left-[-15%] h-[18%] w-[130%] blur-2xl ${
          scene === "orbit"
            ? "top-[58%] rotate-[8deg]"
            : scene === "horizon"
              ? "top-[68%] -rotate-[6deg]"
              : "top-[42%] -rotate-[12deg]"
        } ${
          density === "rich" ? "opacity-50" : density === "soft" ? "opacity-28" : "opacity-14"
        }`}
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(149,155,181,0.18) 20%, rgba(241,188,245,0.16) 45%, rgba(252,231,184,0.1) 62%, rgba(131,135,195,0.14) 80%, transparent 100%)",
        }}
      />

      <div className={starOpacity}>
        <PixelStarfield count={starCount} />
      </div>

      {showProps ? <CelestialProps scene={scene} /> : null}
    </div>
  );
}

function CelestialProps({ scene }: { scene: Scene }) {
  if (scene === "orbit") {
    return (
      <>
        <div
          className="absolute left-[8%] top-[18%] animate-float-gentle opacity-70"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="relative">
            <PixelPlanet className="h-8 w-8 sm:h-10 sm:w-10" />
            <div className="absolute left-1/2 top-1/2 h-[2px] w-[140%] -translate-x-1/2 -translate-y-1/2 rotate-[12deg] rounded-full bg-gradient-to-r from-transparent via-[#F1BCF5]/50 to-transparent" />
          </div>
        </div>
        <div
          className="absolute right-[10%] bottom-[20%] opacity-65"
          style={{ transform: "rotate(28deg)" }}
        >
          <PixelComet className="h-4 w-10 animate-float-gentle" />
        </div>
        <div className="absolute right-[22%] top-[16%]">
          <PixelStar color="pink" className="h-3 w-3 animate-star-twinkle" />
        </div>
        <div
          className="absolute right-[26%] top-[20%] animate-star-twinkle"
          style={{ animationDelay: "1.1s" }}
        >
          <PixelDiamond className="h-2.5 w-2.5" />
        </div>
        <div className="absolute left-[20%] bottom-[14%] flex gap-1.5 opacity-40">
          <span className="h-1 w-1 rounded-sm bg-[#FCE7B8]/80" />
          <span className="h-1.5 w-1.5 rounded-sm bg-[#8387C3]" />
          <span className="mt-1 h-1 w-1 rounded-sm bg-[#F1BCF5]/70" />
        </div>
      </>
    );
  }

  if (scene === "horizon") {
    return (
      <>
        <div
          className="absolute right-[12%] top-[20%] animate-float-gentle opacity-55"
          style={{ animationDelay: "2s" }}
        >
          <PixelPlanet className="h-6 w-6" />
        </div>
        <div
          className="absolute left-[14%] top-[30%] opacity-60"
          style={{ transform: "rotate(-18deg)" }}
        >
          <PixelComet className="h-3.5 w-9" />
        </div>
        <div className="absolute left-1/2 top-[18%] -translate-x-1/2">
          <PixelSparkle color="gold" className="h-3 w-3 animate-star-twinkle" />
        </div>
        <div
          className="absolute bottom-[18%] right-[28%] animate-float-gentle opacity-50"
          style={{ animationDelay: "3.4s" }}
        >
          <div className="relative">
            <PixelPlanet className="h-9 w-9" />
            <div className="absolute left-1/2 top-1/2 h-[2px] w-[150%] -translate-x-1/2 -translate-y-1/2 rotate-[-22deg] rounded-full bg-gradient-to-r from-transparent via-[#FCE7B8]/45 to-transparent" />
          </div>
        </div>
      </>
    );
  }

  if (scene === "drift") {
    return (
      <>
        <div
          className="absolute right-[7%] top-[22%] animate-float-gentle opacity-65"
          style={{ animationDelay: "1.5s" }}
        >
          <PixelPlanet className="h-7 w-7" />
        </div>
        <div
          className="absolute left-[8%] bottom-[24%] opacity-55"
          style={{ transform: "rotate(148deg)" }}
        >
          <PixelComet className="h-3.5 w-9" />
        </div>
        <div className="absolute left-[22%] top-[14%]">
          <PixelStar color="ube" className="h-2.5 w-2.5 animate-star-twinkle" />
        </div>
        <div
          className="absolute left-[26%] top-[18%] animate-star-twinkle"
          style={{ animationDelay: "1.8s" }}
        >
          <PixelSparkle color="pink" className="h-2 w-2" />
        </div>
        <div
          className="absolute right-[30%] bottom-[30%] animate-float-gentle opacity-45"
          style={{ animationDelay: "4.2s" }}
        >
          <PixelPlanet className="h-5 w-5" />
        </div>
      </>
    );
  }

  /* hero — densest celestial field */
  return (
    <>
      <div
        className="absolute right-[6%] top-[12%] animate-float-gentle opacity-75 max-sm:scale-90"
        style={{ animationDelay: "1.2s" }}
      >
        <div className="relative">
          <PixelPlanet className="h-9 w-9 sm:h-11 sm:w-11" />
          <div className="absolute left-1/2 top-1/2 h-[2px] w-[145%] -translate-x-1/2 -translate-y-1/2 rotate-[-18deg] rounded-full bg-gradient-to-r from-transparent via-[#FCE7B8]/55 to-transparent" />
        </div>
      </div>

      <div
        className="absolute left-[5%] top-[26%] animate-float-gentle opacity-60"
        style={{ animationDelay: "3.1s" }}
      >
        <PixelPlanet className="h-6 w-6 opacity-80" />
      </div>

      <div
        className="absolute right-[16%] top-[36%] opacity-70"
        style={{ transform: "rotate(-22deg)" }}
      >
        <PixelComet className="h-4 w-10 animate-float-gentle" />
      </div>

      <div
        className="absolute left-[30%] bottom-[22%] opacity-45"
        style={{ transform: "rotate(155deg)" }}
      >
        <PixelComet className="h-3 w-8" />
      </div>

      <div className="absolute left-[16%] top-[10%]">
        <PixelStar color="gold" className="h-3 w-3 animate-star-twinkle" />
      </div>
      <div
        className="absolute left-[20%] top-[14%] animate-star-twinkle"
        style={{ animationDelay: "1.4s" }}
      >
        <PixelSparkle color="pink" className="h-2.5 w-2.5" />
      </div>
      <div
        className="absolute left-[24%] top-[11%] animate-star-twinkle"
        style={{ animationDelay: "2.2s" }}
      >
        <PixelDiamond className="h-2.5 w-2.5" />
      </div>
      <div
        className="absolute right-[28%] top-[22%] animate-star-twinkle"
        style={{ animationDelay: "0.8s" }}
      >
        <PixelStar color="ube" className="h-2.5 w-2.5" />
      </div>

      <div className="absolute bottom-[16%] right-[10%] flex gap-1.5 opacity-45">
        <span className="h-1 w-1 rounded-sm bg-[#959BB5]" />
        <span className="h-1.5 w-1.5 rounded-sm bg-[#8387C3]" />
        <span className="mt-1 h-1 w-1 rounded-sm bg-[#FCE7B8]/80" />
        <span className="mt-0.5 h-1 w-1 rounded-sm bg-[#F1BCF5]/70" />
      </div>

      <div
        className="absolute bottom-[10%] left-[10%] animate-float-gentle opacity-50"
        style={{ animationDelay: "4s" }}
      >
        <PixelPlanet className="h-5 w-5" />
      </div>
    </>
  );
}
