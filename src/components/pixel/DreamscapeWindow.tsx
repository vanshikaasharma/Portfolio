"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  PixelMoon,
  PixelSparkle,
  PixelStar,
  PixelCloud,
  PixelTerminal,
  PixelHills,
  PixelPlanet,
  PixelComet,
  PixelDiamond,
} from "./PixelGlyphs";

type Tab = "scene" | "terminal" | "pillars";

const PANEL_HEIGHT = "h-[320px]";

export function DreamscapeWindow() {
  const [activeTab, setActiveTab] = useState<Tab>("scene");
  const [timeString, setTimeString] = useState("18:24 PST");
  const [sparkles, setSparkles] = useState<
    { id: number; x: number; y: number; color: "gold" | "pink" | "ube" | "cadet" }[]
  >([]);

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat("en-US", {
          timeZone: "America/Vancouver",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(now);
        setTimeString(`${formatted} PST`);
      } catch {
        setTimeString("--:-- PST");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const triggerSparkle = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const colors: ("gold" | "pink" | "ube" | "cadet")[] = [
      "gold",
      "pink",
      "ube",
      "cadet",
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const newSparkle = { id: Date.now() + Math.random(), x, y, color };
    setSparkles((prev) => [...prev.slice(-6), newSparkle]);
    setTimeout(() => {
      setSparkles((prev) => prev.filter((s) => s.id !== newSparkle.id));
    }, 1200);
  };

  return (
    <div className="relative mx-auto w-full max-w-lg select-none">
      <div
        aria-hidden
        className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-[#8387C3]/35 via-[#F1BCF5]/25 to-[#3A3E6C]/50 opacity-80 blur-xl animate-aura-pulse"
      />

      <div className="relative overflow-hidden rounded-xl border-2 border-[#8387C3]/40 bg-[#0A1123]/95 shadow-[4px_4px_0px_#0A1123,0_0_35px_rgba(131,135,195,0.25)] backdrop-blur-xl">
        {/* Title bar — time stays on one row */}
        <div className="flex items-center justify-between gap-3 border-b border-[#8387C3]/30 bg-gradient-to-r from-[#3A3E6C] via-[#1E2648] to-[#0A1123] px-3 py-2.5">
          <div className="flex min-w-0 items-center gap-2">
            <span className="h-2.5 w-2.5 shrink-0 rounded-sm bg-[#FCE7B8] shadow-[0_0_8px_#FCE7B8]" />
            <span className="truncate font-pixel text-[10px] font-bold tracking-wider text-[#F5F6FC] sm:text-[11px]">
              DREAMSCAPE v2.6
            </span>
          </div>

          <div className="flex shrink-0 items-center gap-1.5 whitespace-nowrap font-pixel text-[9px]">
            <span className="rounded border border-[#FCE7B8]/30 bg-[#0A1123]/70 px-1.5 py-0.5 tabular-nums text-[#FCE7B8]">
              {timeString}
            </span>
            <div className="flex items-center gap-1">
              <span className="grid h-4 w-4 place-items-center rounded border border-[#959BB5]/40 bg-[#18203C] text-[8px] text-[#959BB5]">
                _
              </span>
              <span className="grid h-4 w-4 place-items-center rounded border border-[#8387C3]/40 bg-[#3A3E6C] text-[8px] text-[#8387C3]">
                □
              </span>
              <span className="grid h-4 w-4 place-items-center rounded border border-[#F1BCF5]/50 bg-[#F1BCF5]/20 text-[8px] text-[#F1BCF5]">
                ×
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center border-b border-[#8387C3]/20 bg-[#0E162E]/95 px-2 pt-1.5 font-pixel text-[10px]">
          <button
            type="button"
            onClick={() => setActiveTab("scene")}
            className={`flex items-center gap-1.5 rounded-t-md px-2.5 py-1.5 transition-all sm:px-3 ${
              activeTab === "scene"
                ? "border-x border-t-2 border-[#8387C3] bg-[#18203C] text-[#F5F6FC] shadow-[0_-2px_8px_rgba(131,135,195,0.25)]"
                : "border-t border-transparent text-[#959BB5] hover:text-[#F1BCF5]"
            }`}
          >
            <PixelMoon className="h-3 w-3 text-[#F1BCF5]" />
            <span>SCENE</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("terminal")}
            className={`flex items-center gap-1.5 rounded-t-md px-2.5 py-1.5 transition-all sm:px-3 ${
              activeTab === "terminal"
                ? "border-x border-t-2 border-[#FCE7B8] bg-[#18203C] text-[#FCE7B8] shadow-[0_-2px_8px_rgba(252,231,184,0.2)]"
                : "border-t border-transparent text-[#959BB5] hover:text-[#FCE7B8]"
            }`}
          >
            <PixelTerminal className="h-3 w-3 text-[#FCE7B8]" />
            <span>SYS_LOG</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("pillars")}
            className={`flex items-center gap-1.5 rounded-t-md px-2.5 py-1.5 transition-all sm:px-3 ${
              activeTab === "pillars"
                ? "border-x border-t-2 border-[#8387C3] bg-[#18203C] text-[#F5F6FC] shadow-[0_-2px_8px_rgba(131,135,195,0.25)]"
                : "border-t border-transparent text-[#959BB5] hover:text-[#D2D6E6]"
            }`}
          >
            <PixelPlanet className="h-3 w-3" />
            <span>ORBIT</span>
          </button>
        </div>

        {/* Fixed-height body so tabs don't resize the window */}
        <div className={`relative ${PANEL_HEIGHT} p-4 sm:p-5`}>
          <AnimatePresence mode="wait">
            {activeTab === "scene" && (
              <motion.div
                key="scene"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
                onClick={triggerSparkle}
                className="group absolute inset-4 flex cursor-pointer flex-col justify-between overflow-hidden rounded-lg border border-[#8387C3]/30 bg-gradient-to-b from-[#18203C] via-[#0E162E] to-[#0A1123] p-4 shadow-inner sm:inset-5 sm:p-5"
              >
                {sparkles.map((sparkle) => (
                  <div
                    key={sparkle.id}
                    className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 animate-star-twinkle-fast"
                    style={{ left: sparkle.x, top: sparkle.y }}
                  >
                    <PixelStar
                      color={sparkle.color}
                      className="h-6 w-6 drop-shadow-[0_0_8px_rgba(252,231,184,0.9)]"
                    />
                  </div>
                ))}

                <div className="absolute inset-0 bg-pixel-grid opacity-35" />
                <div className="absolute -top-10 -right-10 h-44 w-44 rounded-full bg-[#F1BCF5]/25 blur-2xl animate-aura-pulse" />
                <div className="absolute -bottom-10 -left-10 h-44 w-44 rounded-full bg-[#3A3E6C]/60 blur-2xl" />

                <div className="absolute top-4 left-4 animate-float-gentle opacity-85">
                  <PixelCloud className="h-7 w-12 text-[#F1BCF5]" />
                </div>
                <div
                  className="absolute top-14 left-14 animate-float-gentle opacity-65"
                  style={{ animationDelay: "1.2s" }}
                >
                  <PixelCloud className="h-4 w-8 text-[#8387C3]" />
                </div>
                <div
                  className="absolute top-6 right-5 animate-float-gentle opacity-80"
                  style={{ animationDelay: "2.5s" }}
                >
                  <PixelPlanet className="h-6 w-6" />
                </div>
                <div
                  className="absolute top-20 right-14 opacity-90"
                  style={{ transform: "rotate(-18deg)" }}
                >
                  <PixelComet className="h-3.5 w-7 animate-float-gentle" />
                </div>
                <div className="absolute top-10 left-1/2 -translate-x-1/2">
                  <PixelStar color="gold" className="h-3 w-3 animate-star-twinkle" />
                </div>
                <div className="absolute top-16 left-7">
                  <PixelSparkle
                    color="pink"
                    className="h-2.5 w-2.5 animate-star-twinkle"
                    style={{ animationDelay: "0.8s" }}
                  />
                </div>
                <div className="absolute top-24 right-8">
                  <PixelDiamond className="h-3 w-3 animate-star-twinkle" />
                </div>
                <div className="absolute bottom-12 left-2 right-2 opacity-80">
                  <PixelHills className="h-8 w-full" />
                </div>

                <div className="relative flex items-start justify-between gap-3">
                  <div className="space-y-1.5">
                    <span className="inline-flex items-center gap-1.5 border border-[#FCE7B8]/40 bg-[#0A1123]/90 px-2 py-0.5 font-pixel text-[9px] text-[#FCE7B8] shadow-[1px_1px_0px_#0A1123]">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#FCE7B8] animate-pulse" />
                      data analyst @ darkvision
                    </span>
                    <p className="font-serif text-lg font-medium text-[#F5F6FC]">
                      Currently building
                    </p>
                    <p className="max-w-[15rem] font-pixel text-[10px] leading-relaxed text-[#959BB5]">
                      Image + text retrieval for inspection case libraries
                    </p>
                  </div>

                  <div className="relative shrink-0 p-1.5">
                    <div className="absolute inset-0 rounded-full bg-[#FCE7B8]/20 blur-md animate-aura-pulse" />
                    <PixelMoon className="relative h-12 w-12 text-[#F5F6FC] transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_14px_rgba(252,231,184,0.7)]" />
                    <PixelStar
                      color="gold"
                      className="absolute -right-1 top-0.5 h-2.5 w-2.5 animate-star-twinkle"
                    />
                    <PixelSparkle
                      color="ube"
                      className="absolute -left-0.5 bottom-1.5 h-2 w-2 animate-star-twinkle"
                      style={{ animationDelay: "1.4s" }}
                    />
                  </div>
                </div>

                <div className="relative my-2 flex items-center justify-around rounded-md border border-[#8387C3]/20 bg-[#0A1123]/60 py-2">
                  <div className="flex flex-col items-center gap-1">
                    <PixelSparkle color="pink" className="h-3 w-3 animate-star-twinkle" />
                    <span className="font-pixel text-[9px] text-[#F1BCF5]">FULL-STACK</span>
                  </div>
                  <div className="h-px w-6 bg-[#8387C3]/40" />
                  <div className="flex flex-col items-center gap-1">
                    <PixelStar
                      color="gold"
                      className="h-3.5 w-3.5 animate-star-twinkle"
                      style={{ animationDelay: "1s" }}
                    />
                    <span className="font-pixel text-[9px] text-[#FCE7B8]">APPLIED ML</span>
                  </div>
                  <div className="h-px w-6 bg-[#8387C3]/40" />
                  <div className="flex flex-col items-center gap-1">
                    <PixelSparkle
                      color="cadet"
                      className="h-3 w-3 animate-star-twinkle"
                      style={{ animationDelay: "2s" }}
                    />
                    <span className="font-pixel text-[9px] text-[#959BB5]">DATA</span>
                  </div>
                </div>

                <div className="relative z-[1] border-t border-[#8387C3]/20 pt-2 font-pixel text-[9px] text-[#8A8CAC]">
                  click canvas to spawn starlight
                </div>
              </motion.div>
            )}

            {activeTab === "terminal" && (
              <motion.div
                key="terminal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="absolute inset-4 flex flex-col justify-between overflow-hidden rounded-lg border border-[#FCE7B8]/30 bg-[#0A1123] p-4 font-pixel text-[11px] leading-relaxed shadow-inner sm:inset-5"
              >
                <div className="space-y-2 overflow-y-auto">
                  <div className="text-[#FCE7B8]">
                    <span className="text-[#959BB5]">$ </span>
                    <span>whoami</span>
                  </div>
                  <div className="pl-3 text-[#F5F6FC]">
                    &gt; builder · learner · shipper
                  </div>

                  <div className="text-[#FCE7B8]">
                    <span className="text-[#959BB5]">$ </span>
                    <span>cat darkvision_notes.txt</span>
                  </div>
                  <div className="rounded border border-[#3A3E6C] bg-[#18203C]/90 p-2.5 pl-3 text-[10px] text-[#959BB5]">
                    <p className="text-[#CAD0E5]">
                      CBIR library · image &amp; text search · similar cases + metadata
                    </p>
                    <p className="mt-1.5">
                      <span className="text-[#F1BCF5]">status</span>
                      <span className="text-[#8A8CAC]">: </span>
                      <span className="text-[#FCE7B8]">open to opportunities</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-1 text-[#FCE7B8]">
                    <span className="text-[#959BB5]">$ </span>
                    <span>ready_to_build.sh</span>
                    <span className="inline-block h-3.5 w-2 bg-[#FCE7B8] animate-pixel-blink" />
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-[#8387C3]/20 pt-2 font-pixel text-[9px] text-[#8A8CAC]">
                  <span className="text-[#959BB5]">bash 5.2.26</span>
                  <span className="text-[#FCE7B8]">utf-8 // active</span>
                </div>
              </motion.div>
            )}

            {activeTab === "pillars" && (
              <motion.div
                key="pillars"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="absolute inset-4 flex flex-col justify-between overflow-hidden rounded-lg border border-[#8387C3]/30 bg-gradient-to-b from-[#18203C] via-[#0E162E] to-[#0A1123] p-4 shadow-inner sm:inset-5 sm:p-5"
              >
                <div className="absolute inset-0 bg-pixel-grid opacity-25" />
                <div className="absolute -right-8 top-0 h-32 w-32 rounded-full bg-[#F1BCF5]/15 blur-2xl" />
                <div className="absolute -left-6 bottom-4 h-28 w-28 rounded-full bg-[#3A3E6C]/50 blur-2xl" />
                <div className="absolute right-6 top-5">
                  <PixelStar color="gold" className="h-2.5 w-2.5 animate-star-twinkle" />
                </div>
                <div className="absolute right-12 top-12">
                  <PixelSparkle
                    color="pink"
                    className="h-2 w-2 animate-star-twinkle"
                    style={{ animationDelay: "1.2s" }}
                  />
                </div>

                <div className="relative">
                  <p className="font-pixel text-[9px] tracking-wider text-[#FCE7B8]">
                    how I move through work
                  </p>

                  <div className="relative mt-4 space-y-0 pl-1">
                    {/* constellation stem */}
                    <div
                      aria-hidden
                      className="absolute bottom-3 left-[7px] top-3 w-px bg-gradient-to-b from-[#8387C3]/70 via-[#FCE7B8]/50 to-[#F1BCF5]/70"
                    />

                    <div className="relative flex gap-3 pb-4">
                      <span className="relative z-[1] mt-1.5 h-2 w-2 shrink-0 rounded-sm bg-[#8387C3] shadow-[0_0_8px_rgba(131,135,195,0.8)]" />
                      <div>
                        <p className="font-serif text-[15px] font-semibold text-[#F5F6FC]">
                          Build
                        </p>
                        <p className="mt-0.5 text-[11px] leading-snug text-[#959BB5]">
                          Full-stack products with clear architecture.
                        </p>
                      </div>
                    </div>

                    <div className="relative flex gap-3 pb-4">
                      <span className="relative z-[1] mt-1.5 h-2 w-2 shrink-0 rounded-sm bg-[#FCE7B8] shadow-[0_0_8px_rgba(252,231,184,0.85)]" />
                      <div>
                        <p className="font-serif text-[15px] font-semibold text-[#FCE7B8]">
                          Analyze
                        </p>
                        <p className="mt-0.5 text-[11px] leading-snug text-[#959BB5]">
                          Models and pipelines that turn data into decisions.
                        </p>
                      </div>
                    </div>

                    <div className="relative flex gap-3">
                      <span className="relative z-[1] mt-1.5 h-2 w-2 shrink-0 rounded-sm bg-[#F1BCF5] shadow-[0_0_8px_rgba(241,188,245,0.85)]" />
                      <div>
                        <p className="font-serif text-[15px] font-semibold text-[#F1BCF5]">
                          Ship
                        </p>
                        <p className="mt-0.5 text-[11px] leading-snug text-[#959BB5]">
                          Tools for real analysts, users, and teams.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative z-[1] flex items-center justify-between border-t border-[#8387C3]/20 pt-2 font-pixel text-[9px] text-[#8A8CAC]">
                  <span>constellation</span>
                  <span className="text-[#8387C3]">3 nodes</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
