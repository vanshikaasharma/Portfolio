"use client";

import { useEffect, useState } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  animationDelay: string;
  animationDuration: string;
  type: "small" | "medium" | "sparkle";
  colorHex: string;
  glowColor: string;
}

export function PixelStarfield({ count = 42 }: { count?: number }) {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const starColors = [
      { hex: "#FCE7B8", glow: "rgba(252, 231, 184, 0.85)" }, // Champagne Gold
      { hex: "#F1BCF5", glow: "rgba(241, 188, 245, 0.85)" }, // Twilight Pink
      { hex: "#8387C3", glow: "rgba(131, 135, 195, 0.85)" }, // Ube
      { hex: "#959BB5", glow: "rgba(149, 155, 181, 0.75)" }, // Cadet Grey
      { hex: "#8A8CAC", glow: "rgba(138, 140, 172, 0.75)" }, // Cool Grey
    ];

    const starList: Star[] = [];

    for (let i = 0; i < count; i++) {
      const typeRand = Math.random();
      const type: "small" | "medium" | "sparkle" =
        typeRand > 0.82 ? "sparkle" : typeRand > 0.45 ? "medium" : "small";

      const color = starColors[i % starColors.length];

      starList.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: type === "sparkle" ? 10 : type === "medium" ? 4 : 2,
        opacity: Math.random() * 0.6 + 0.35,
        animationDelay: `${(Math.random() * 5).toFixed(1)}s`,
        animationDuration: `${(Math.random() * 3 + 2.5).toFixed(1)}s`,
        type,
        colorHex: color.hex,
        glowColor: color.glow,
      });
    }

    setStars(starList);
  }, [count]);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute pixelated animate-star-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            animationDelay: star.animationDelay,
            animationDuration: star.animationDuration,
          }}
        >
          {star.type === "sparkle" ? (
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              style={{ color: star.colorHex }}
            >
              <rect x="3" y="0" width="2" height="8" fill={star.colorHex} fillOpacity="0.85" />
              <rect x="0" y="3" width="8" height="2" fill={star.colorHex} fillOpacity="0.85" />
              <rect x="2" y="2" width="4" height="4" fill="#FFFFFF" />
              <rect x="3" y="3" width="2" height="2" fill="#FFF9E6" />
            </svg>
          ) : star.type === "medium" ? (
            <div
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                backgroundColor: star.colorHex,
                boxShadow: `0 0 7px ${star.glowColor}`,
              }}
            />
          ) : (
            <div
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                backgroundColor: star.colorHex,
                opacity: star.opacity,
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
