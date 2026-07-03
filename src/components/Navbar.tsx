"use client";

import { useEffect, useState } from "react";
import { Container } from "./Container";
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

  const initials = site.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <Container className="flex h-18 items-center justify-between py-3">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-accent font-serif text-sm font-semibold text-foreground">
            {initials}
          </span>
          <span className="hidden text-sm font-medium text-foreground sm:inline">
            {site.name}
          </span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full bg-accent p-1.5 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm text-foreground/85 transition-colors hover:bg-card/20 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden w-[120px] md:block" aria-hidden />

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-5 bg-current transition-transform ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-transform ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </Container>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm text-muted transition-colors hover:bg-accent hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </Container>
        </div>
      )}
    </header>
  );
}
