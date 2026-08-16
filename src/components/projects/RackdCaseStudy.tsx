"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRightIcon } from "@/components/icons";

const LIVE_URL = "https://rackd-seven.vercel.app";
const LIVE_HOST = "rackd-seven.vercel.app";
const GITHUB_URL = "https://github.com/vanshikaasharma/Rackd";

const capabilities = [
  {
    number: "01",
    title: "Multi-Platform",
    body: "Track one item across several marketplaces.",
  },
  {
    number: "02",
    title: "Delist Reminders",
    body: "Surface active listings after an item has already sold.",
  },
  {
    number: "03",
    title: "Profit Visibility",
    body: "Track sales, profit, and stale inventory.",
  },
];

const problemPoints = [
  "Forgotten active listings",
  "Double-selling risk",
  "Fragmented sales tracking",
];

const responsePoints = [
  "Centralized inventory",
  "Delist reminders",
  "Sales and profit tracking",
];

const workflow = [
  { number: "01", label: "Add Item" },
  { number: "02", label: "Track Listings" },
  { number: "03", label: "Mark Sold" },
  { number: "04", label: "Record Sale" },
  { number: "05", label: "Delist" },
];

const techBlocks = [
  {
    label: "Auth",
    title: "NextAuth + JWT",
    body: "Inventory stays scoped to each authenticated user.",
  },
  {
    label: "Data",
    title: "PostgreSQL",
    body: "Relational storage for items, listings, and sales.",
  },
  {
    label: "API",
    title: "Next.js Route Handlers",
    body: "Authenticated endpoints connect the application to persistent data.",
  },
  {
    label: "Consistency",
    title: "Database Transactions",
    body: "Sale and listing updates remain synchronized.",
  },
];

const learnings = [
  {
    title: "Product",
    body: "Designing useful workflows around real platform limitations.",
  },
  {
    title: "Data",
    body: "Structuring relational data for multi-platform inventory.",
  },
  {
    title: "Deployment",
    body: "Debugging authentication, database queries, and production configuration.",
  },
];

type GalleryItem = {
  src: string;
  caption: string;
  title: string;
};

function SectionReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}

function Label({ children }: { children: ReactNode }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8387C3]">
      {children}
    </p>
  );
}

function Pointers({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  return (
    <ul className={`mt-5 space-y-2.5 ${className}`}>
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-2.5 text-[14px] leading-relaxed text-[#959BB5] sm:text-[15px]"
        >
          <span className="shrink-0 text-[#8387C3]" aria-hidden>
            →
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function BrowserPreview({
  previewSrc,
  className = "",
}: {
  previewSrc?: string | null;
  className?: string;
}) {
  return (
    <a
      href={LIVE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block overflow-hidden rounded-xl border border-white/10 bg-[#12182e] transition-all duration-300 hover:-translate-y-1 hover:border-[#8387C3]/45 ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2.5 sm:px-4">
        <span className="h-2 w-2 rounded-full bg-[#ff5f56]/75" />
        <span className="h-2 w-2 rounded-full bg-[#ffbd2e]/75" />
        <span className="h-2 w-2 rounded-full bg-[#27c93f]/75" />
        <span className="ml-2 truncate rounded bg-white/5 px-2.5 py-0.5 text-[10px] text-[#8A8CAC]">
          {LIVE_HOST}
        </span>
      </div>

      <div className="relative aspect-[16/10] overflow-hidden">
        {previewSrc ? (
          <Image
            src={previewSrc}
            alt="Rackd application preview"
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 1024px) 100vw, 560px"
            priority
          />
        ) : (
          <div className="flex h-full flex-col justify-between bg-[#0f1629] p-4 transition-transform duration-500 group-hover:scale-[1.02] sm:p-5">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <div className="flex items-center gap-2">
                <span className="grid h-6 w-6 place-items-center rounded-md bg-[#8387C3]/20 text-[10px] font-semibold text-[#8387C3]">
                  R
                </span>
                <span className="text-xs font-medium text-[#c8ccd9]">Rackd</span>
              </div>
              <span className="text-[10px] uppercase tracking-[0.14em] text-[#8A8CAC]">
                Inventory
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 py-4">
              {["24", "$1.2k", "3"].map((value, i) => (
                <div
                  key={value}
                  className="rounded-lg border border-white/5 bg-[#151c35] px-2 py-2.5"
                >
                  <p className="text-[9px] uppercase tracking-[0.12em] text-[#8A8CAC]">
                    {["Items", "Profit", "Delist"][i]}
                  </p>
                  <p className="mt-1 text-sm font-medium text-[#c8ccd9]">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              {[
                ["Vintage Denim Jacket", "Active"],
                ["Nike Dunk Low", "Needs delist"],
                ["Leather Crossbody", "Sold"],
              ].map(([name, status]) => (
                <div
                  key={name}
                  className="flex items-center gap-3 rounded-lg border border-white/5 bg-[#151c35]/80 px-3 py-2"
                >
                  <div className="h-8 w-8 shrink-0 rounded-md bg-gradient-to-br from-[#3A3E6C] to-[#8387C3]/35" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs text-[#c8ccd9]">{name}</p>
                  </div>
                  <span
                    className={`shrink-0 text-[9px] uppercase tracking-wide ${
                      status === "Needs delist"
                        ? "text-[#8387C3]"
                        : "text-[#8A8CAC]"
                    }`}
                  >
                    {status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-white/10 px-3 py-3 sm:px-4">
        <span className="truncate text-xs text-[#8A8CAC] sm:text-sm">
          {LIVE_HOST}
        </span>
        <span className="inline-flex shrink-0 items-center gap-1 text-xs font-medium text-[#c8ccd9] sm:text-sm">
          Open Demo
          <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </a>
  );
}

function Workflow() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      {/* Desktop */}
      <div className="relative mt-8 hidden lg:block">
        <motion.div
          className="absolute left-[6%] right-[6%] top-[1.15rem] h-px origin-left bg-[#3A3E6C]"
          initial={reduceMotion ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="relative grid grid-cols-5 gap-3">
          {workflow.map((step, i) => (
            <motion.div
              key={step.number}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: 0.12 + i * 0.08 }}
              className="flex flex-col items-center text-center"
            >
              <span className="relative z-10 grid h-9 w-9 place-items-center rounded-full border border-[#8387C3]/40 bg-[#0A1123] text-[11px] font-semibold text-[#8387C3]">
                {step.number}
              </span>
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#c8ccd9]">
                {step.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile / tablet vertical stepper */}
      <div className="relative mt-8 lg:hidden">
        <div className="absolute bottom-3 left-[17px] top-3 w-px bg-[#3A3E6C]" />
        <div className="relative space-y-5">
          {workflow.map((step, i) => (
            <motion.div
              key={step.number}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              className="flex items-center gap-4"
            >
              <span className="relative z-10 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#8387C3]/40 bg-[#0A1123] text-[11px] font-semibold text-[#8387C3]">
                {step.number}
              </span>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#c8ccd9]">
                {step.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export function RackdCaseStudy({
  previewSrc,
  gallery = [],
}: {
  previewSrc?: string | null;
  gallery?: GalleryItem[];
}) {
  const reduceMotion = useReducedMotion();

  return (
    <main className="min-h-screen bg-[#0A1123] text-[#959BB5]">
      <div className="mx-auto w-full max-w-6xl px-6 pb-24 pt-28 sm:px-8 sm:pb-28 sm:pt-32">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-sm text-[#8A8CAC] transition-colors hover:text-[#c8ccd9]"
          >
            ← Back to projects
          </Link>
        </motion.div>

        {/* 1. Hero */}
        <header className="mt-10 grid items-center gap-10 border-b border-white/10 pb-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12">
          <div>
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8387C3]"
            >
              Products & Platforms
            </motion.p>

            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-4 font-serif text-4xl font-semibold tracking-tight text-[#c8ccd9] sm:text-5xl lg:text-6xl"
            >
              RACKD
            </motion.h1>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.12 }}
              className="mt-5 max-w-md space-y-3"
            >
              <p className="text-[15px] leading-relaxed text-[#959BB5]">
                Inventory management for resellers selling across multiple
                marketplaces.
              </p>
              <p className="text-[15px] leading-relaxed text-[#8A8CAC]">
                Rackd keeps listings, sales, profit, and delist reminders in one
                place.
              </p>
              <p className="pt-1 text-sm tracking-wide text-[#8387C3]">
                Next.js · React · TypeScript · PostgreSQL · NextAuth
              </p>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.22 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href={LIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-[#3A3E6C] px-5 py-2.5 text-sm font-medium text-[#c8ccd9] transition-colors hover:bg-[#8387C3]"
              >
                View Live Demo
                <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-[#c8ccd9] transition-colors hover:border-[#8387C3]/50 hover:text-[#8387C3]"
              >
                GitHub
                <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <BrowserPreview previewSrc={previewSrc} />
          </motion.div>
        </header>

        {/* 2. Capability blocks */}
        <SectionReveal className="mt-12 grid gap-4 sm:grid-cols-3 sm:gap-5">
          {capabilities.map((item, i) => (
            <motion.div
              key={item.title}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="border-t border-white/10 pt-4"
            >
              <p className="text-[11px] font-semibold tracking-[0.16em] text-[#8387C3]">
                {item.number}
              </p>
              <h2 className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#c8ccd9]">
                {item.title}
              </h2>
              <p className="mt-2 text-[14px] leading-relaxed text-[#8A8CAC]">
                {item.body}
              </p>
            </motion.div>
          ))}
        </SectionReveal>

        {/* 3. Problem / Response */}
        <SectionReveal className="mt-16 grid gap-4 md:grid-cols-2 md:gap-5">
          <div className="rounded-xl border border-white/10 bg-[#0f1629] p-6 sm:p-7">
            <Label>The Problem</Label>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-[#959BB5]">
              One item can exist across several marketplaces, making post-sale
              cleanup difficult.
            </p>
            <Pointers items={problemPoints} />
          </div>

          <div className="rounded-xl border border-[#8387C3]/20 bg-[#151c35] p-6 sm:p-7">
            <Label>The Response</Label>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-[#959BB5]">
              Rackd centralizes inventory and introduces an explicit post-sale
              delisting workflow.
            </p>
            <Pointers items={responsePoints} />
          </div>
        </SectionReveal>

        {/* 4. How it works */}
        <SectionReveal className="mt-16 border-t border-white/10 pt-12">
          <Label>How It Works</Label>
          <Workflow />
        </SectionReveal>

        {/* 5. Gallery only if real assets exist */}
        {gallery.length > 0 && (
          <SectionReveal className="mt-16">
            <Label>Product UI</Label>
            <div
              className={`mt-6 grid gap-4 ${
                gallery.length === 1
                  ? "grid-cols-1"
                  : gallery.length === 2
                    ? "md:grid-cols-2"
                    : "md:grid-cols-3"
              }`}
            >
              {gallery.map((item, i) => (
                <motion.figure
                  key={item.src}
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className={`overflow-hidden rounded-xl border border-white/10 bg-[#12182e] ${
                    gallery.length >= 3 && i === 0 ? "md:col-span-3" : ""
                  }`}
                >
                  <div
                    className={`relative overflow-hidden ${
                      gallery.length >= 3 && i === 0
                        ? "aspect-[21/9]"
                        : "aspect-[16/10]"
                    }`}
                  >
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <figcaption className="border-t border-white/10 px-4 py-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#c8ccd9]">
                      {item.title}
                    </p>
                    <p className="mt-1 text-[13px] text-[#8A8CAC]">
                      {item.caption}
                    </p>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </SectionReveal>
        )}

        {/* 6. A little deeper */}
        <SectionReveal className="mt-16 border-t border-white/10 pt-12">
          <Label>A Little Deeper</Label>
          <div className="mt-7 grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {techBlocks.map((block, i) => (
              <motion.div
                key={block.label}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="border-t border-white/10 pt-4"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8387C3]">
                  {block.label}
                </p>
                <h3 className="mt-2 text-base font-medium text-[#c8ccd9]">
                  {block.title}
                </h3>
                <p className="mt-2 max-w-xs text-[14px] leading-relaxed text-[#8A8CAC]">
                  {block.body}
                </p>
              </motion.div>
            ))}
          </div>
        </SectionReveal>

        {/* 7. What I learned */}
        <SectionReveal className="mt-16">
          <Label>What I Learned</Label>
          <div className="mt-7 grid gap-6 sm:grid-cols-3">
            {learnings.map((item, i) => (
              <motion.div
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
              >
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8A8CAC]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[#959BB5]">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </main>
  );
}
