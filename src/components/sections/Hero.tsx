"use client";

import { motion } from "motion/react";
import { Container } from "../Container";
import { ArrowUpRightIcon, MailIcon } from "../icons";
import { site } from "@/lib/site";

const codeLines = [
  {
    indent: 0,
    text: (
      <>
        <span className="text-[#82aaff]">const</span>{" "}
        <span className="text-[#f5c396]">engineer</span> = {"{"}
      </>
    ),
  },
  {
    indent: 1,
    text: (
      <>
        <span className="text-foreground/70">name</span>:{" "}
        <span className="text-[#c3e88d]">&quot;{site.name}&quot;</span>,
      </>
    ),
  },
  {
    indent: 1,
    text: (
      <>
        <span className="text-foreground/70">role</span>:{" "}
        <span className="text-[#c3e88d]">&quot;{site.role}&quot;</span>,
      </>
    ),
  },
  {
    indent: 1,
    text: (
      <>
        <span className="text-foreground/70">focus</span>: [
        <span className="text-[#c3e88d]">&quot;full-stack&quot;</span>,{" "}
        <span className="text-[#c3e88d]">&quot;data&quot;</span>],
      </>
    ),
  },
  {
    indent: 1,
    text: (
      <>
        <span className="text-foreground/70">available</span>:{" "}
        <span className="text-[#82aaff]">true</span>,
      </>
    ),
  },
  { indent: 0, text: <>{"}"};</> },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-16"
    >
      <div className="bg-glow pointer-events-none absolute inset-0" />

      <Container className="relative grid gap-14 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-0">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-xs font-medium text-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for new opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="font-serif text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient">{site.name}</span>
            <br />
            {site.role}.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            {site.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-soft-lg"
            >
              View my work
              <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/40 hover:bg-card"
            >
              <MailIcon className="h-4 w-4" />
              Contact me
            </a>
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2 py-3 text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              Resume
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="shadow-soft-lg relative mx-auto w-full max-w-md rounded-3xl border border-border bg-card font-mono text-sm"
        >
          <div className="flex items-center gap-1.5 border-b border-border px-5 py-4">
            <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
            <span className="ml-3 text-xs text-subtle">about-me.ts</span>
          </div>
          <div className="space-y-1 px-6 py-6">
            {codeLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: 0.5 + i * 0.08 }}
                style={{ paddingLeft: `${line.indent * 1.25}rem` }}
                className="whitespace-pre text-foreground/90"
              >
                {line.text}
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + codeLines.length * 0.08 }}
              className="flex items-center gap-1.5 pt-1 text-subtle"
            >
              <span className="h-4 w-2 animate-[blink_1s_step-end_infinite] rounded-sm bg-accent" />
            </motion.div>
          </div>
        </motion.div>
      </Container>

      <motion.a
        href="#projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-subtle sm:flex"
      >
        Scroll
        <span className="flex h-8 w-5 items-start justify-center rounded-full border border-border p-1">
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent" />
        </span>
      </motion.a>
    </section>
  );
}
