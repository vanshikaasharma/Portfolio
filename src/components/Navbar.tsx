"use client";

import { useEffect, useState } from "react";
import { Container } from "./Container";
import { PixelPlanet, PixelSparkle, PixelArrowUpRight } from "./pixel/PixelGlyphs";
import { navLinks, site } from "@/lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[#8387C3]/20 bg-[#0A1123]/92 shadow-[0_4px_24px_rgba(10,17,35,0.85)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container className="flex items-center justify-between py-3.5 sm:py-4">
        {/* Brand / Logo */}
        <a href="/#top" className="group flex items-center gap-2.5">
          <div className="grid h-9 w-9 place-items-center rounded border border-[#FCE7B8]/40 bg-[#18203C] text-[#FCE7B8] shadow-[2px_2px_0px_#0A1123] transition-all duration-200 group-hover:border-[#FCE7B8] group-hover:shadow-[0_0_12px_rgba(252,231,184,0.4)]">
            <PixelPlanet className="h-4 w-4 transition-transform group-hover:scale-110" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-[15px] font-semibold tracking-tight text-[#F5F6FC] transition-colors group-hover:text-[#FCE7B8]">
              {site.name}
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden items-center gap-1 rounded-full border border-[#8387C3]/25 bg-[#0E162E]/80 px-3 py-1 shadow-inner backdrop-blur-md lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative rounded-full px-3.5 py-1.5 font-pixel text-[11px] tracking-wider text-[#959BB5] transition-all hover:text-[#F5F6FC]"
            >
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">
                {link.label}
              </span>
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-gradient-to-r from-[#FCE7B8] to-[#F1BCF5] transition-all duration-200 group-hover:w-1/2" />
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-2.5">
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden items-center gap-1.5 rounded border border-[#FCE7B8]/40 bg-[#18203C]/90 px-3.5 py-1.5 font-pixel text-[10px] tracking-wider text-[#FCE7B8] shadow-[2px_2px_0px_#0A1123] transition-all hover:border-[#FCE7B8] hover:bg-[#FCE7B8] hover:text-[#0A1123] hover:shadow-[0_0_12px_rgba(252,231,184,0.4)] lg:inline-flex"
          >
            <PixelSparkle color="gold" className="h-2.5 w-2.5" />
            <span>RESUME</span>
            <PixelArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded border border-[#8387C3]/30 bg-[#0E162E] text-[#959BB5] shadow-[2px_2px_0px_#0A1123] lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <div className="space-y-1">
              <span
                className={`block h-0.5 w-4 bg-[#FCE7B8] transition-transform ${
                  open ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-4 bg-[#F1BCF5] transition-opacity ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-4 bg-[#8387C3] transition-transform ${
                  open ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </Container>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="border-b border-[#8387C3]/25 bg-[#0A1123]/98 px-6 py-4 shadow-2xl backdrop-blur-2xl lg:hidden">
          <Container className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded border border-transparent px-3 py-2 font-pixel text-xs text-[#CAD0E5] transition-all hover:border-[#8387C3]/30 hover:bg-[#18203C] hover:text-[#F5F6FC]"
              >
                <span>{link.label}</span>
                <span className="text-[#F1BCF5]">►</span>
              </a>
            ))}
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded border border-[#FCE7B8] bg-[#3A3E6C] px-3 py-2.5 font-pixel text-xs font-bold text-[#FCE7B8]"
            >
              <PixelSparkle color="gold" className="h-3 w-3" />
              <span>VIEW RESUME</span>
              <PixelArrowUpRight className="h-3 w-3" />
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
