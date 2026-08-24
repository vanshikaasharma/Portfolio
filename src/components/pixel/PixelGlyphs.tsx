import React, { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/**
 * Pixel Art Celestial Crescent Moon - with golden starlight & lavender/ube twilight glow
 */
export function PixelMoon({ className = "w-6 h-6", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      className={`pixelated ${className}`}
      aria-hidden
      {...props}
    >
      {/* Outer twilight aura / glow pixels */}
      <rect x="5" y="0" width="6" height="1" fill="#F1BCF5" fillOpacity="0.5" />
      <rect x="3" y="1" width="3" height="1" fill="#8387C3" fillOpacity="0.7" />
      <rect x="2" y="2" width="2" height="1" fill="#8387C3" fillOpacity="0.9" />
      <rect x="1" y="3" width="2" height="2" fill="#8387C3" />
      <rect x="0" y="5" width="2" height="6" fill="#8387C3" />
      <rect x="1" y="11" width="2" height="2" fill="#8387C3" />
      <rect x="2" y="13" width="2" height="1" fill="#8387C3" fillOpacity="0.9" />
      <rect x="3" y="14" width="3" height="1" fill="#8387C3" fillOpacity="0.7" />
      <rect x="5" y="15" width="6" height="1" fill="#F1BCF5" fillOpacity="0.5" />

      {/* Golden Starlight Core */}
      <rect x="6" y="1" width="4" height="1" fill="#FCE7B8" />
      <rect x="4" y="2" width="4" height="1" fill="#FFF9E6" />
      <rect x="3" y="3" width="3" height="2" fill="#FFF9E6" />
      <rect x="2" y="5" width="3" height="6" fill="#FFF9E6" />
      <rect x="3" y="11" width="3" height="2" fill="#FFF9E6" />
      <rect x="4" y="13" width="4" height="1" fill="#FFF9E6" />
      <rect x="6" y="14" width="4" height="1" fill="#FCE7B8" />

      {/* Shading & Depth (American Blue & Ube tones) */}
      <rect x="5" y="4" width="2" height="1" fill="#8387C3" />
      <rect x="5" y="5" width="2" height="6" fill="#8387C3" />
      <rect x="5" y="11" width="2" height="1" fill="#8387C3" />
      <rect x="7" y="3" width="2" height="1" fill="#8387C3" />
      <rect x="7" y="12" width="2" height="1" fill="#8387C3" />
      <rect x="8" y="2" width="2" height="1" fill="#3A3E6C" />
      <rect x="8" y="13" width="2" height="1" fill="#3A3E6C" />
    </svg>
  );
}

/**
 * 4-pointed Pixel Sparkle
 */
export function PixelSparkle({
  className = "w-4 h-4",
  color = "gold",
  ...props
}: IconProps & { color?: "gold" | "ube" | "pink" | "cadet" }) {
  const fillOuter =
    color === "gold"
      ? "#FCE7B8"
      : color === "pink"
      ? "#F1BCF5"
      : color === "cadet"
      ? "#959BB5"
      : "#8387C3";

  return (
    <svg
      viewBox="0 0 8 8"
      fill="currentColor"
      className={`pixelated ${className}`}
      aria-hidden
      {...props}
    >
      <rect x="3" y="0" width="2" height="8" fill={fillOuter} />
      <rect x="0" y="3" width="8" height="2" fill={fillOuter} />
      <rect x="2" y="2" width="4" height="4" fill="#FFFFFF" />
      <rect x="3" y="3" width="2" height="2" fill="#FFF9E6" />
    </svg>
  );
}

/**
 * 8-pointed Pixel Star
 */
export function PixelStar({
  className = "w-4 h-4",
  color = "gold",
  ...props
}: IconProps & { color?: "gold" | "ube" | "pink" | "cadet" }) {
  const fillOuter =
    color === "gold"
      ? "#FCE7B8"
      : color === "pink"
      ? "#F1BCF5"
      : color === "cadet"
      ? "#959BB5"
      : "#8387C3";

  return (
    <svg
      viewBox="0 0 12 12"
      fill="currentColor"
      className={`pixelated ${className}`}
      aria-hidden
      {...props}
    >
      <rect x="5" y="0" width="2" height="12" fill={fillOuter} />
      <rect x="0" y="5" width="12" height="2" fill={fillOuter} />
      <rect x="2" y="2" width="2" height="2" fill={fillOuter} fillOpacity="0.8" />
      <rect x="8" y="2" width="2" height="2" fill={fillOuter} fillOpacity="0.8" />
      <rect x="2" y="8" width="2" height="2" fill={fillOuter} fillOpacity="0.8" />
      <rect x="8" y="8" width="2" height="2" fill={fillOuter} fillOpacity="0.8" />
      <rect x="4" y="4" width="4" height="4" fill="#FFFFFF" />
      <rect x="5" y="5" width="2" height="2" fill="#FFF9E6" />
    </svg>
  );
}

/**
 * Pixel Cloud - with twilight pink, ube, and american blue hues
 */
export function PixelCloud({ className = "w-8 h-5", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 10"
      fill="currentColor"
      className={`pixelated ${className}`}
      aria-hidden
      {...props}
    >
      <rect x="4" y="1" width="5" height="2" fill="#F1BCF5" fillOpacity="0.7" />
      <rect x="9" y="3" width="4" height="2" fill="#8387C3" fillOpacity="0.8" />
      <rect x="1" y="4" width="14" height="4" fill="#8387C3" fillOpacity="0.65" />
      <rect x="0" y="6" width="16" height="3" fill="#3A3E6C" fillOpacity="0.85" />
      <rect x="2" y="7" width="12" height="1" fill="#959BB5" fillOpacity="0.9" />
    </svg>
  );
}

/**
 * Pixel Terminal Icon
 */
export function PixelTerminal({ className = "w-4 h-4", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="currentColor"
      className={`pixelated ${className}`}
      aria-hidden
      {...props}
    >
      <rect x="0" y="0" width="12" height="12" fill="#0A1123" />
      <rect x="1" y="1" width="10" height="1" fill="#8387C3" />
      <rect x="1" y="1" width="1" height="10" fill="#8387C3" />
      <rect x="10" y="1" width="1" height="10" fill="#8387C3" />
      <rect x="1" y="10" width="10" height="1" fill="#8387C3" />
      {/* Prompt > */}
      <rect x="3" y="4" width="1" height="1" fill="#FCE7B8" />
      <rect x="4" y="5" width="1" height="1" fill="#FCE7B8" />
      <rect x="3" y="6" width="1" height="1" fill="#FCE7B8" />
      {/* Cursor _ */}
      <rect x="6" y="7" width="3" height="1" fill="#F1BCF5" />
    </svg>
  );
}

/**
 * Pixel Code Icon
 */
export function PixelCode({ className = "w-4 h-4", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="currentColor"
      className={`pixelated ${className}`}
      aria-hidden
      {...props}
    >
      {/* < */}
      <rect x="3" y="3" width="1" height="2" fill="#8387C3" />
      <rect x="2" y="5" width="1" height="2" fill="#8387C3" />
      <rect x="3" y="7" width="1" height="2" fill="#8387C3" />
      {/* > */}
      <rect x="8" y="3" width="1" height="2" fill="#8387C3" />
      <rect x="9" y="5" width="1" height="2" fill="#8387C3" />
      <rect x="8" y="7" width="1" height="2" fill="#8387C3" />
      {/* / */}
      <rect x="6" y="3" width="1" height="2" fill="#FCE7B8" />
      <rect x="5" y="5" width="1" height="2" fill="#FCE7B8" />
      <rect x="4" y="7" width="1" height="2" fill="#FCE7B8" />
    </svg>
  );
}

/**
 * Pixel Data Icon
 */
export function PixelData({ className = "w-4 h-4", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="currentColor"
      className={`pixelated ${className}`}
      aria-hidden
      {...props}
    >
      <rect x="1" y="9" width="2" height="2" fill="#959BB5" />
      <rect x="4" y="6" width="2" height="5" fill="#8387C3" />
      <rect x="7" y="3" width="2" height="8" fill="#F1BCF5" />
      <rect x="10" y="1" width="1" height="10" fill="#FCE7B8" />
    </svg>
  );
}

/**
 * Pixel Diamond Icon
 */
export function PixelDiamond({ className = "w-3 h-3", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 8 8"
      fill="currentColor"
      className={`pixelated ${className}`}
      aria-hidden
      {...props}
    >
      <rect x="3" y="0" width="2" height="1" fill="#FCE7B8" />
      <rect x="2" y="1" width="4" height="1" fill="#F1BCF5" />
      <rect x="1" y="2" width="6" height="2" fill="#FFFFFF" />
      <rect x="2" y="4" width="4" height="2" fill="#8387C3" />
      <rect x="3" y="6" width="2" height="1" fill="#3A3E6C" />
      <rect x="3" y="7" width="2" height="1" fill="#3A3E6C" />
    </svg>
  );
}

/**
 * Pixel Arrow Up Right
 */
export function PixelArrowUpRight({ className = "w-3.5 h-3.5", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 10 10"
      fill="currentColor"
      className={`pixelated ${className}`}
      aria-hidden
      {...props}
    >
      <rect x="3" y="1" width="6" height="2" fill="currentColor" />
      <rect x="7" y="3" width="2" height="6" fill="currentColor" />
      <rect x="5" y="3" width="2" height="2" fill="currentColor" />
      <rect x="3" y="5" width="2" height="2" fill="currentColor" />
      <rect x="1" y="7" width="2" height="2" fill="currentColor" />
    </svg>
  );
}

/**
 * Pixel hills / horizon for night scenes
 */
export function PixelHills({ className = "w-24 h-8", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 16"
      fill="currentColor"
      className={`pixelated ${className}`}
      aria-hidden
      {...props}
    >
      <rect x="0" y="12" width="48" height="4" fill="#0A1123" />
      <rect x="0" y="10" width="10" height="2" fill="#3A3E6C" />
      <rect x="8" y="7" width="12" height="5" fill="#3A3E6C" />
      <rect x="18" y="9" width="14" height="3" fill="#2A3058" />
      <rect x="30" y="6" width="18" height="6" fill="#3A3E6C" />
      <rect x="12" y="5" width="4" height="2" fill="#8387C3" fillOpacity="0.7" />
      <rect x="36" y="4" width="6" height="2" fill="#8387C3" fillOpacity="0.55" />
    </svg>
  );
}

/**
 * Small pixel planet / orb
 */
export function PixelPlanet({ className = "w-5 h-5", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="currentColor"
      className={`pixelated ${className}`}
      aria-hidden
      {...props}
    >
      <rect x="4" y="1" width="4" height="1" fill="#F1BCF5" />
      <rect x="2" y="2" width="8" height="2" fill="#8387C3" />
      <rect x="1" y="4" width="10" height="4" fill="#8387C3" />
      <rect x="2" y="8" width="8" height="2" fill="#3A3E6C" />
      <rect x="4" y="10" width="4" height="1" fill="#3A3E6C" />
      <rect x="3" y="4" width="2" height="2" fill="#FCE7B8" fillOpacity="0.85" />
      <rect x="7" y="6" width="2" height="1" fill="#F1BCF5" fillOpacity="0.7" />
      {/* ring */}
      <rect x="0" y="5" width="2" height="1" fill="#FCE7B8" fillOpacity="0.6" />
      <rect x="10" y="5" width="2" height="1" fill="#FCE7B8" fillOpacity="0.6" />
    </svg>
  );
}

/**
 * Tiny pixel comet
 */
export function PixelComet({ className = "w-6 h-4", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 14 8"
      fill="currentColor"
      className={`pixelated ${className}`}
      aria-hidden
      {...props}
    >
      <rect x="0" y="3" width="2" height="1" fill="#FCE7B8" fillOpacity="0.35" />
      <rect x="2" y="3" width="3" height="1" fill="#FCE7B8" fillOpacity="0.55" />
      <rect x="5" y="2" width="3" height="3" fill="#FCE7B8" fillOpacity="0.75" />
      <rect x="8" y="2" width="3" height="3" fill="#FFFFFF" />
      <rect x="11" y="3" width="2" height="1" fill="#F1BCF5" />
    </svg>
  );
}

/**
 * Pixel Art Japan Passport Stamp Graphic - Mt. Fuji, Torii Gate & Cherry Blossoms
 */
export function PixelJapanGlyph({
  className = "w-7 h-7",
  ...props
}: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`pixelated ${className}`}
      aria-hidden
      {...props}
    >
      {/* Rising Sun Glow */}
      <rect x="9" y="3" width="6" height="1" fill="#FF8787" fillOpacity="0.5" />
      <rect x="7" y="4" width="10" height="1" fill="#FF8787" fillOpacity="0.55" />
      <rect x="6" y="5" width="12" height="6" fill="#FF6B8B" fillOpacity="0.6" />
      <rect x="7" y="11" width="10" height="1" fill="#FF8787" fillOpacity="0.55" />
      <rect x="9" y="12" width="6" height="1" fill="#FF8787" fillOpacity="0.5" />

      {/* Mt. Fuji Snow-Capped Peak */}
      <rect x="11" y="5" width="2" height="1" fill="#FFFFFF" />
      <rect x="10" y="6" width="4" height="1" fill="#FFFFFF" />
      <rect x="9" y="7" width="6" height="1" fill="#FFFFFF" />
      <rect x="8" y="8" width="8" height="1" fill="#FFFFFF" />
      <rect x="8" y="9" width="2" height="1" fill="#FFFFFF" />
      <rect x="11" y="9" width="2" height="1" fill="#FFFFFF" />
      <rect x="14" y="9" width="2" height="1" fill="#FFFFFF" />

      {/* Mt. Fuji Slopes (Indigo/Ube) */}
      <rect x="7" y="9" width="1" height="1" fill="#8387C3" />
      <rect x="10" y="9" width="1" height="1" fill="#8387C3" />
      <rect x="13" y="9" width="1" height="1" fill="#8387C3" />
      <rect x="16" y="9" width="1" height="1" fill="#8387C3" />
      <rect x="6" y="10" width="12" height="1" fill="#8387C3" />
      <rect x="5" y="11" width="14" height="2" fill="#3A3E6C" />
      <rect x="4" y="13" width="16" height="2" fill="#21274D" />

      {/* Torii Gate (Vermilion / Pink Accent) */}
      {/* Top curved beam (Kasagi) */}
      <rect x="5" y="14" width="1" height="1" fill="#F1BCF5" />
      <rect x="18" y="14" width="1" height="1" fill="#F1BCF5" />
      <rect x="6" y="15" width="12" height="1" fill="#F1BCF5" />
      {/* Middle crossbar (Nuki) */}
      <rect x="7" y="17" width="10" height="1" fill="#F1BCF5" />
      {/* Center Strut (Gakuzuka) */}
      <rect x="11" y="15" width="2" height="2" fill="#FCE7B8" />
      {/* Left Pillar */}
      <rect x="8" y="15" width="2" height="7" fill="#F1BCF5" />
      <rect x="7" y="21" width="3" height="1" fill="#8387C3" />
      {/* Right Pillar */}
      <rect x="14" y="15" width="2" height="7" fill="#F1BCF5" />
      <rect x="14" y="21" width="3" height="1" fill="#8387C3" />

      {/* Floating Sakura Petals & Sparkles */}
      <rect x="2" y="5" width="1" height="1" fill="#F1BCF5" />
      <rect x="3" y="8" width="1" height="1" fill="#F1BCF5" />
      <rect x="21" y="6" width="1" height="1" fill="#F1BCF5" />
      <rect x="20" y="9" width="1" height="1" fill="#F1BCF5" />
      <rect x="1" y="11" width="1" height="1" fill="#FCE7B8" />
      <rect x="22" y="12" width="1" height="1" fill="#FCE7B8" />
    </svg>
  );
}

/**
 * Pixel Art USA Stamp Graphic - Statue of Liberty Torch & Stars
 */
export function PixelUsaGlyph({
  className = "w-7 h-7",
  ...props
}: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`pixelated ${className}`}
      aria-hidden
      {...props}
    >
      {/* Torch Flame (Gold & Crimson) */}
      <rect x="11" y="2" width="2" height="1" fill="#FCE7B8" />
      <rect x="10" y="3" width="4" height="2" fill="#FF8787" />
      <rect x="11" y="4" width="2" height="2" fill="#FFF9E6" />
      <rect x="9" y="5" width="6" height="1" fill="#FCE7B8" />
      {/* Torch Base */}
      <rect x="10" y="6" width="4" height="2" fill="#8387C3" />
      <rect x="11" y="8" width="2" height="5" fill="#3A3E6C" />
      <rect x="10" y="13" width="4" height="2" fill="#8387C3" />
      {/* Liberty Crown Ray Silhouettes */}
      <rect x="5" y="10" width="2" height="1" fill="#FCE7B8" />
      <rect x="7" y="12" width="2" height="1" fill="#FCE7B8" />
      <rect x="15" y="12" width="2" height="1" fill="#FCE7B8" />
      <rect x="17" y="10" width="2" height="1" fill="#FCE7B8" />
      {/* Stars & Stripes Crest */}
      <rect x="3" y="16" width="18" height="1" fill="#FCE7B8" />
      <rect x="4" y="17" width="16" height="1" fill="#3A3E6C" />
      <rect x="5" y="18" width="4" height="3" fill="#8387C3" />
      <rect x="10" y="18" width="9" height="1" fill="#FF8787" />
      <rect x="10" y="19" width="9" height="1" fill="#FFFFFF" />
      <rect x="10" y="20" width="9" height="1" fill="#FF8787" />
      <rect x="6" y="19" width="2" height="1" fill="#FFFFFF" />
      <rect x="6" y="21" width="12" height="1" fill="#3A3E6C" />
    </svg>
  );
}

/**
 * Pixel Art Canada Stamp Graphic - Iconic Maple Leaf
 */
export function PixelCanadaGlyph({
  className = "w-7 h-7",
  ...props
}: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`pixelated ${className}`}
      aria-hidden
      {...props}
    >
      {/* Top Tip */}
      <rect x="11" y="2" width="2" height="2" fill="#FF7582" />
      <rect x="10" y="4" width="4" height="1" fill="#FF7582" />
      <rect x="11" y="5" width="2" height="2" fill="#FF8787" />
      {/* Upper Side Points */}
      <rect x="7" y="5" width="2" height="2" fill="#FF7582" />
      <rect x="15" y="5" width="2" height="2" fill="#FF7582" />
      <rect x="6" y="7" width="12" height="2" fill="#FF7582" />
      <rect x="8" y="7" width="8" height="2" fill="#FFA8B0" />
      {/* Wide Mid Section with Lateral Wings */}
      <rect x="3" y="9" width="3" height="2" fill="#FF7582" />
      <rect x="18" y="9" width="3" height="2" fill="#FF7582" />
      <rect x="4" y="11" width="16" height="3" fill="#FF7582" />
      <rect x="7" y="10" width="10" height="3" fill="#FFA8B0" />
      <rect x="10" y="10" width="4" height="4" fill="#FFFFFF" />
      {/* Lower Leaf Body */}
      <rect x="6" y="14" width="12" height="2" fill="#FF7582" />
      <rect x="8" y="16" width="8" height="2" fill="#FF7582" />
      <rect x="10" y="17" width="4" height="1" fill="#3A3E6C" />
      {/* Stem */}
      <rect x="11" y="18" width="2" height="4" fill="#FFA8B0" />
      <rect x="11" y="22" width="2" height="1" fill="#3A3E6C" />
    </svg>
  );
}

/**
 * Pixel Art Singapore Stamp Graphic - Merlion & Marina Bay Sands
 */
export function PixelSingaporeGlyph({
  className = "w-7 h-7",
  ...props
}: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`pixelated ${className}`}
      aria-hidden
      {...props}
    >
      {/* Merlion Head (Lion Mane & Crown) */}
      <rect x="6" y="3" width="5" height="1" fill="#FCE7B8" />
      <rect x="5" y="4" width="7" height="2" fill="#F5F6FC" />
      <rect x="10" y="4" width="2" height="1" fill="#FCE7B8" />
      <rect x="9" y="5" width="1" height="1" fill="#0A1123" />
      {/* Spouting Water stream */}
      <rect x="12" y="6" width="4" height="1" fill="#8387C3" />
      <rect x="15" y="7" width="3" height="1" fill="#F1BCF5" />
      <rect x="17" y="8" width="2" height="6" fill="#8387C3" fillOpacity="0.75" />
      {/* Merlion Body (Fish Scales) */}
      <rect x="6" y="6" width="5" height="3" fill="#F5F6FC" />
      <rect x="5" y="9" width="6" height="4" fill="#CAD0E5" />
      <rect x="6" y="13" width="5" height="3" fill="#959BB5" />
      <rect x="7" y="16" width="4" height="2" fill="#8387C3" />
      <rect x="5" y="17" width="3" height="2" fill="#FCE7B8" />
      {/* Marina Bay Sands Towers in background */}
      <rect x="13" y="11" width="2" height="7" fill="#8387C3" />
      <rect x="16" y="11" width="2" height="7" fill="#8387C3" />
      <rect x="19" y="11" width="2" height="7" fill="#8387C3" />
      <rect x="12" y="10" width="10" height="1" fill="#FCE7B8" />
      {/* Bay Water */}
      <rect x="2" y="20" width="20" height="1" fill="#8387C3" />
      <rect x="4" y="21" width="16" height="1" fill="#3A3E6C" />
    </svg>
  );
}

/**
 * Pixel Art Russia Stamp Graphic - St. Basil's Onion Dome Cathedral
 */
export function PixelRussiaGlyph({
  className = "w-7 h-7",
  ...props
}: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`pixelated ${className}`}
      aria-hidden
      {...props}
    >
      {/* Golden Cross Spire */}
      <rect x="11" y="2" width="2" height="3" fill="#FCE7B8" />
      <rect x="10" y="3" width="4" height="1" fill="#FCE7B8" />
      {/* Main Onion Dome (Patterned Ube & Gold) */}
      <rect x="11" y="5" width="2" height="1" fill="#F1BCF5" />
      <rect x="10" y="6" width="4" height="1" fill="#F1BCF5" />
      <rect x="9" y="7" width="6" height="3" fill="#8387C3" />
      <rect x="10" y="8" width="4" height="1" fill="#FCE7B8" />
      <rect x="10" y="10" width="4" height="1" fill="#3A3E6C" />
      {/* Side Domes */}
      <rect x="5" y="8" width="2" height="2" fill="#FCE7B8" />
      <rect x="4" y="10" width="4" height="2" fill="#FF8787" />
      <rect x="17" y="8" width="2" height="2" fill="#FCE7B8" />
      <rect x="16" y="10" width="4" height="2" fill="#FF8787" />
      {/* Cathedral Body & Arch Windows */}
      <rect x="4" y="12" width="16" height="7" fill="#3A3E6C" />
      <rect x="9" y="11" width="6" height="8" fill="#8387C3" />
      <rect x="11" y="13" width="2" height="3" fill="#FCE7B8" />
      <rect x="6" y="14" width="2" height="2" fill="#F1BCF5" />
      <rect x="16" y="14" width="2" height="2" fill="#F1BCF5" />
      {/* Base Platform */}
      <rect x="3" y="19" width="18" height="2" fill="#21274D" />
      <rect x="2" y="21" width="20" height="1" fill="#FCE7B8" fillOpacity="0.8" />
    </svg>
  );
}

/**
 * Pixel Art Dubai / UAE Stamp Graphic - Burj Khalifa & Palm Crescent
 */
export function PixelDubaiGlyph({
  className = "w-7 h-7",
  ...props
}: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`pixelated ${className}`}
      aria-hidden
      {...props}
    >
      {/* Crescent Moon in Desert Sky */}
      <rect x="16" y="3" width="3" height="3" fill="#FCE7B8" />
      <rect x="16" y="3" width="2" height="2" fill="#0A1123" />
      <rect x="19" y="3" width="1" height="1" fill="#FCE7B8" />
      {/* Burj Khalifa Spire Peak */}
      <rect x="11" y="2" width="2" height="4" fill="#FFF9E6" />
      <rect x="10" y="6" width="4" height="3" fill="#CAD0E5" />
      <rect x="11" y="7" width="2" height="2" fill="#FFFFFF" />
      {/* Tiered Skyscraper Body */}
      <rect x="9" y="9" width="6" height="3" fill="#8387C3" />
      <rect x="10" y="10" width="4" height="2" fill="#FFF9E6" />
      <rect x="8" y="12" width="8" height="4" fill="#3A3E6C" />
      <rect x="9" y="13" width="6" height="3" fill="#8387C3" />
      <rect x="7" y="16" width="10" height="4" fill="#21274D" />
      <rect x="9" y="17" width="6" height="3" fill="#FCE7B8" fillOpacity="0.85" />
      {/* Palm Tree on Side */}
      <rect x="3" y="13" width="3" height="1" fill="#FCE7B8" />
      <rect x="2" y="14" width="5" height="1" fill="#8387C3" />
      <rect x="4" y="15" width="1" height="4" fill="#FCE7B8" />
      {/* Golden Desert Dunes Base */}
      <rect x="1" y="20" width="22" height="1" fill="#FCE7B8" />
      <rect x="3" y="21" width="18" height="1" fill="#E6CB8F" />
      <rect x="5" y="22" width="14" height="1" fill="#3A3E6C" />
    </svg>
  );
}

/**
 * Pixel Art India Stamp Graphic - Taj Mahal & India Gate Lotus Motif
 */
export function PixelIndiaGlyph({
  className = "w-7 h-7",
  ...props
}: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`pixelated ${className}`}
      aria-hidden
      {...props}
    >
      {/* Finial Peak */}
      <rect x="11" y="2" width="2" height="2" fill="#FCE7B8" />
      {/* Taj Mahal Central Lotus Dome */}
      <rect x="11" y="4" width="2" height="1" fill="#FFFFFF" />
      <rect x="10" y="5" width="4" height="1" fill="#FFFFFF" />
      <rect x="9" y="6" width="6" height="3" fill="#FFFFFF" />
      <rect x="10" y="7" width="4" height="2" fill="#FFF9E6" />
      <rect x="9" y="9" width="6" height="1" fill="#CAD0E5" />
      {/* Side Domes (Chhatris) */}
      <rect x="6" y="7" width="2" height="2" fill="#FFFFFF" />
      <rect x="16" y="7" width="2" height="2" fill="#FFFFFF" />
      {/* Outer Minarets */}
      <rect x="2" y="6" width="2" height="12" fill="#CAD0E5" />
      <rect x="2" y="5" width="2" height="1" fill="#FCE7B8" />
      <rect x="20" y="6" width="2" height="12" fill="#CAD0E5" />
      <rect x="20" y="5" width="2" height="1" fill="#FCE7B8" />
      {/* Main Arch / Iwan Facade */}
      <rect x="5" y="10" width="14" height="9" fill="#3A3E6C" />
      <rect x="8" y="11" width="8" height="8" fill="#CAD0E5" />
      <rect x="10" y="13" width="4" height="6" fill="#0A1123" />
      <rect x="11" y="14" width="2" height="5" fill="#FCE7B8" />
      {/* Base Platform & Reflecting Pool */}
      <rect x="1" y="19" width="22" height="2" fill="#8387C3" />
      <rect x="4" y="21" width="16" height="1" fill="#F1BCF5" />
    </svg>
  );
}

/**
 * Pixel Art London Stamp Graphic - Big Ben Clock Tower & Crown
 */
export function PixelLondonGlyph({
  className = "w-7 h-7",
  ...props
}: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`pixelated ${className}`}
      aria-hidden
      {...props}
    >
      {/* Big Ben Spire */}
      <rect x="11" y="2" width="2" height="3" fill="#FCE7B8" />
      <rect x="10" y="5" width="4" height="2" fill="#8387C3" />
      <rect x="9" y="7" width="6" height="2" fill="#3A3E6C" />
      {/* Clock Face (Glowing Gold Dial) */}
      <rect x="8" y="9" width="8" height="5" fill="#FCE7B8" />
      <rect x="9" y="10" width="6" height="3" fill="#FFF9E6" />
      <rect x="11" y="11" width="2" height="1" fill="#0A1123" />
      <rect x="11" y="12" width="1" height="1" fill="#0A1123" />
      {/* Tower Shaft */}
      <rect x="8" y="14" width="8" height="6" fill="#3A3E6C" />
      <rect x="10" y="15" width="1" height="4" fill="#8387C3" />
      <rect x="13" y="15" width="1" height="4" fill="#8387C3" />
      {/* London Eye Wheel Silhouette on Side */}
      <rect x="2" y="8" width="4" height="4" fill="#F1BCF5" fillOpacity="0.75" />
      <rect x="3" y="9" width="2" height="2" fill="#0A1123" />
      <rect x="3" y="12" width="2" height="6" fill="#8387C3" />
      {/* Westminster Bridge & Thames Base */}
      <rect x="1" y="20" width="22" height="1" fill="#8387C3" />
      <rect x="3" y="21" width="18" height="1" fill="#F1BCF5" />
      <rect x="5" y="22" width="14" height="1" fill="#3A3E6C" />
    </svg>
  );
}

/**
 * Pixel Art Malaysia Stamp Graphic - Petronas Twin Towers
 */
export function PixelMalaysiaGlyph({
  className = "w-7 h-7",
  ...props
}: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`pixelated ${className}`}
      aria-hidden
      {...props}
    >
      {/* Spires */}
      <rect x="7" y="2" width="2" height="3" fill="#FFF9E6" />
      <rect x="15" y="2" width="2" height="3" fill="#FFF9E6" />
      {/* Upper Tiers */}
      <rect x="6" y="5" width="4" height="2" fill="#CAD0E5" />
      <rect x="14" y="5" width="4" height="2" fill="#CAD0E5" />
      <rect x="6" y="7" width="4" height="3" fill="#8387C3" />
      <rect x="14" y="7" width="4" height="3" fill="#8387C3" />
      {/* Mid Section with Skybridge */}
      <rect x="5" y="10" width="5" height="3" fill="#3A3E6C" />
      <rect x="14" y="10" width="5" height="3" fill="#3A3E6C" />
      {/* Skybridge Connecting the Towers */}
      <rect x="9" y="11" width="6" height="2" fill="#FCE7B8" />
      <rect x="10" y="11" width="4" height="1" fill="#FFFFFF" />
      {/* Lower Towers */}
      <rect x="5" y="13" width="5" height="6" fill="#8387C3" />
      <rect x="14" y="13" width="5" height="6" fill="#8387C3" />
      <rect x="7" y="14" width="1" height="4" fill="#FFFFFF" />
      <rect x="16" y="14" width="1" height="4" fill="#FFFFFF" />
      {/* Suria KLCC Base */}
      <rect x="4" y="19" width="16" height="2" fill="#21274D" />
      <rect x="2" y="21" width="20" height="1" fill="#F1BCF5" />
    </svg>
  );
}

/**
 * Pixel Art Thailand Stamp Graphic - Thai Wat / Pagoda Temple Spire
 */
export function PixelThailandGlyph({
  className = "w-7 h-7",
  ...props
}: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`pixelated ${className}`}
      aria-hidden
      {...props}
    >
      {/* Golden Chedi / Pagoda Spire */}
      <rect x="11" y="2" width="2" height="2" fill="#FCE7B8" />
      <rect x="10" y="4" width="4" height="1" fill="#FCE7B8" />
      <rect x="11" y="5" width="2" height="2" fill="#FFF9E6" />
      <rect x="9" y="7" width="6" height="2" fill="#FCE7B8" />
      <rect x="8" y="9" width="8" height="2" fill="#FF8787" />
      <rect x="7" y="11" width="10" height="2" fill="#FCE7B8" />
      {/* Curved Thai Roof Eaves (Chofa) */}
      <rect x="3" y="12" width="2" height="1" fill="#FCE7B8" />
      <rect x="19" y="12" width="2" height="1" fill="#FCE7B8" />
      <rect x="4" y="13" width="16" height="2" fill="#FF7582" />
      <rect x="2" y="14" width="2" height="1" fill="#FCE7B8" />
      <rect x="20" y="14" width="2" height="1" fill="#FCE7B8" />
      {/* Temple Sanctuary Hall & Pillars */}
      <rect x="5" y="15" width="14" height="4" fill="#3A3E6C" />
      <rect x="8" y="15" width="8" height="4" fill="#FCE7B8" />
      <rect x="10" y="16" width="4" height="3" fill="#8387C3" />
      {/* Lotus Pedestal Base */}
      <rect x="3" y="19" width="18" height="2" fill="#F1BCF5" />
      <rect x="5" y="21" width="14" height="1" fill="#FCE7B8" />
    </svg>
  );
}

/**
 * Pixel Art Hong Kong Stamp Graphic - Traditional Junk Boat Sail & Skyline
 */
export function PixelHongKongGlyph({
  className = "w-7 h-7",
  ...props
}: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`pixelated ${className}`}
      aria-hidden
      {...props}
    >
      {/* Hong Kong High-Rise Skyline in Background */}
      <rect x="2" y="6" width="2" height="10" fill="#3A3E6C" fillOpacity="0.7" />
      <rect x="5" y="4" width="3" height="12" fill="#8387C3" fillOpacity="0.8" />
      <rect x="18" y="5" width="3" height="11" fill="#8387C3" fillOpacity="0.8" />
      <rect x="19" y="3" width="1" height="3" fill="#FCE7B8" />
      {/* Traditional Crimson Junk Boat Ribbed Main Sail */}
      <rect x="11" y="4" width="2" height="1" fill="#FF7582" />
      <rect x="9" y="5" width="5" height="2" fill="#FF7582" />
      <rect x="8" y="7" width="7" height="2" fill="#FF7582" />
      <rect x="9" y="8" width="5" height="1" fill="#FCE7B8" />
      <rect x="7" y="9" width="9" height="3" fill="#FF7582" />
      <rect x="8" y="10" width="7" height="1" fill="#FCE7B8" />
      <rect x="7" y="12" width="9" height="2" fill="#FF7582" />
      {/* Front Fore-Sail */}
      <rect x="14" y="8" width="3" height="4" fill="#F1BCF5" />
      {/* Wooden Hull */}
      <rect x="6" y="15" width="12" height="2" fill="#FCE7B8" />
      <rect x="8" y="17" width="8" height="1" fill="#3A3E6C" />
      {/* Victoria Harbour Waves */}
      <rect x="2" y="19" width="20" height="1" fill="#8387C3" />
      <rect x="4" y="20" width="16" height="1" fill="#F1BCF5" />
      <rect x="6" y="21" width="12" height="1" fill="#3A3E6C" />
    </svg>
  );
}

/**
 * Pixel Art Macau Stamp Graphic - Ruins of St. Paul's & Lotus Emblem
 */
export function PixelMacauGlyph({
  className = "w-7 h-7",
  ...props
}: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`pixelated ${className}`}
      aria-hidden
      {...props}
    >
      {/* Top Cross */}
      <rect x="11" y="2" width="2" height="3" fill="#FCE7B8" />
      <rect x="10" y="3" width="4" height="1" fill="#FCE7B8" />
      {/* Triangular Pediment Facade */}
      <rect x="10" y="5" width="4" height="2" fill="#CAD0E5" />
      <rect x="8" y="7" width="8" height="2" fill="#CAD0E5" />
      <rect x="11" y="7" width="2" height="2" fill="#8387C3" />
      {/* Middle Tier with Windows/Niches */}
      <rect x="6" y="9" width="12" height="4" fill="#959BB5" />
      <rect x="8" y="10" width="2" height="2" fill="#0A1123" />
      <rect x="11" y="10" width="2" height="3" fill="#FCE7B8" />
      <rect x="14" y="10" width="2" height="2" fill="#0A1123" />
      {/* Lower Main Portal Tier */}
      <rect x="5" y="13" width="14" height="4" fill="#3A3E6C" />
      <rect x="7" y="14" width="2" height="3" fill="#8387C3" />
      <rect x="11" y="14" width="2" height="3" fill="#F1BCF5" />
      <rect x="15" y="14" width="2" height="3" fill="#8387C3" />
      {/* Grand Stone Staircase */}
      <rect x="4" y="17" width="16" height="1" fill="#8387C3" />
      <rect x="3" y="18" width="18" height="1" fill="#959BB5" />
      <rect x="2" y="19" width="20" height="1" fill="#CAD0E5" />
      {/* Macau Lotus Emblem Glow */}
      <rect x="10" y="21" width="4" height="1" fill="#F1BCF5" />
      <rect x="11" y="20" width="2" height="1" fill="#FFF9E6" />
    </svg>
  );
}

/**
 * Pixel Passport Crest / Emblem
 */
export function PixelPassportCrest({
  className = "w-4 h-4",
  ...props
}: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className={`pixelated ${className}`}
      aria-hidden
      {...props}
    >
      <rect x="7" y="1" width="2" height="1" fill="#FCE7B8" />
      <rect x="5" y="2" width="6" height="1" fill="#FCE7B8" />
      <rect x="4" y="3" width="8" height="1" fill="#FCE7B8" />
      <rect x="3" y="4" width="10" height="6" fill="#FCE7B8" fillOpacity="0.85" />
      <rect x="5" y="6" width="6" height="2" fill="#0A1123" />
      <rect x="7" y="5" width="2" height="4" fill="#FCE7B8" />
      <rect x="4" y="10" width="8" height="1" fill="#FCE7B8" />
      <rect x="5" y="11" width="6" height="1" fill="#FCE7B8" />
      <rect x="7" y="12" width="2" height="2" fill="#FCE7B8" />
    </svg>
  );
}

/**
 * Multi-Tone Pixel Badge with color variants
 */
export function PixelBadge({
  children,
  icon,
  active = false,
  variant = "ube",
  className = "",
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
  active?: boolean;
  variant?: "ube" | "gold" | "pink" | "cadet" | "american";
  className?: string;
}) {
  const variantStyles = {
    ube: "border-[#8387C3]/40 bg-[#0A1123]/85 text-[#D2D6E6] hover:border-[#8387C3] hover:text-[#FFFFFF]",
    gold: "border-[#FCE7B8]/40 bg-[#0A1123]/90 text-[#FCE7B8] shadow-[2px_2px_0px_#0A1123,0_0_12px_rgba(252,231,184,0.2)] hover:border-[#FCE7B8] hover:text-[#FFFFFF]",
    pink: "border-[#F1BCF5]/40 bg-[#0A1123]/90 text-[#F6D4F9] shadow-[2px_2px_0px_#0A1123,0_0_12px_rgba(241,188,245,0.2)] hover:border-[#F1BCF5] hover:text-[#FFFFFF]",
    cadet: "border-[#959BB5]/45 bg-[#18203C]/80 text-[#CAD0E5] hover:border-[#959BB5] hover:text-[#FFFFFF]",
    american: "border-[#3A3E6C] bg-[#3A3E6C]/60 text-[#F5F6FC] hover:border-[#8387C3]",
  };

  const dotColor =
    variant === "gold"
      ? "bg-[#FCE7B8]"
      : variant === "pink"
      ? "bg-[#F1BCF5]"
      : variant === "cadet"
      ? "bg-[#959BB5]"
      : "bg-[#8387C3]";

  return (
    <span
      className={`inline-flex items-center gap-2 border px-2.5 py-1 font-pixel text-[10px] tracking-wider shadow-[2px_2px_0px_#0A1123] backdrop-blur-md transition-all duration-200 ${variantStyles[variant]} ${className}`}
    >
      {active && (
        <span className="relative flex h-2 w-2">
          <span className={`absolute inline-flex h-full w-full animate-ping rounded-full ${dotColor} opacity-75`} />
          <span className={`relative inline-flex h-2 w-2 rounded-full ${dotColor}`} />
        </span>
      )}
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </span>
  );
}
