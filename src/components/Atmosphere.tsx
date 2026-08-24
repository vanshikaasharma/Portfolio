"use client";

import { GalaxyField } from "./pixel/GalaxyField";

type Variant = "hero" | "mist" | "side" | "footer";

/**
 * Galaxy atmosphere — nebula, milky band, starfield, and celestial props
 * shared across the portfolio so the theme isn't hero-only.
 */
export function Atmosphere({
  variant = "mist",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  if (variant === "hero") {
    return (
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      >
        <div className="bg-aura-flow absolute inset-0" />
        <div className="bg-galaxy-dust absolute inset-0" />
        <div className="bg-pixel-grid absolute inset-0 opacity-35" />
        <div className="bg-grain absolute inset-0" />
        <GalaxyField density="rich" scene="hero" showProps />

        <div className="absolute -left-20 top-[-5%] h-[550px] w-[550px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(58,62,108,0.55),transparent_70%)] blur-3xl animate-aura-pulse" />
        <div
          className="absolute -right-24 top-[10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(241,188,245,0.18),rgba(131,135,195,0.28),transparent_70%)] blur-3xl animate-aura-pulse"
          style={{ animationDelay: "3s" }}
        />
        <div className="absolute bottom-[-15%] left-[25%] h-[400px] w-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(58,62,108,0.45),transparent_70%)] blur-3xl" />
      </div>
    );
  }

  if (variant === "side") {
    return (
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      >
        <div className="bg-galaxy-dust absolute inset-0 opacity-80" />
        <div className="bg-pixel-grid absolute inset-0 opacity-22" />
        <div className="bg-grain absolute inset-0" />
        <GalaxyField density="soft" scene="orbit" showProps />
      </div>
    );
  }

  if (variant === "footer") {
    return (
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      >
        <div className="bg-galaxy-dust absolute inset-0 opacity-70" />
        <div className="bg-pixel-grid absolute inset-0 opacity-28" />
        <div className="bg-grain absolute inset-0" />
        <GalaxyField density="soft" scene="horizon" showProps />
        <div className="absolute left-1/2 top-0 h-44 w-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(241,188,245,0.1),rgba(131,135,195,0.16),transparent_70%)] blur-3xl" />
      </div>
    );
  }

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div className="bg-galaxy-dust absolute inset-0 opacity-65" />
      <div className="bg-pixel-grid absolute inset-0 opacity-18" />
      <div className="bg-grain absolute inset-0" />
      <GalaxyField density="soft" scene="drift" showProps />
    </div>
  );
}
