"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRightIcon } from "@/components/icons";

const GITHUB_URL = "https://github.com/vanshikaasharma/LeftoverLove";
const DEVPOST_URL = "https://devpost.com/software/leftover-love-bw94ok";

const capabilities = [
  {
    number: "01",
    title: "List Surplus",
    body: "Log extra food with expiry details through a simple web flow.",
  },
  {
    number: "02",
    title: "Find Nearby",
    body: "Seekers browse listings and view pickup spots on a live map.",
  },
  {
    number: "03",
    title: "Soil Credits",
    body: "Unclaimed items can move to community partners, earning credits.",
  },
];

const problemPoints = [
  "Edible food is thrown away while neighbours go hungry",
  "Household waste often comes from forgotten fridge and pantry items",
  "Getting surplus to people who need it is hard without local tooling",
];

const responsePoints = [
  "Role-based flows for providers and seekers",
  "Expiry-aware listings plus map pickup discovery",
  "Emergency requests and Soil Credits for community impact",
];

const workflow = [
  { number: "01", label: "Sign In" },
  { number: "02", label: "Choose Role" },
  { number: "03", label: "List or Browse" },
  { number: "04", label: "Claim Nearby" },
  { number: "05", label: "Earn Credits" },
];

const techBlocks = [
  {
    label: "Frontend",
    title: "React + TypeScript + Vite",
    body: "SPA with React Router pages for auth, dashboard, listings, browse, and emergency flows.",
  },
  {
    label: "UI",
    title: "Tailwind + shadcn/ui",
    body: "Composable Radix-based components for forms, dialogs, cards, and role selection.",
  },
  {
    label: "Data UX",
    title: "TanStack Query",
    body: "Client-side query patterns for listing and dashboard state across screens.",
  },
  {
    label: "Maps",
    title: "OpenStreetMap",
    body: "Pickup locations embed on a map so seekers can find food near them.",
  },
];

const learnings = [
  {
    title: "Scope",
    body: "A three-person team under time pressure means prioritizing the core share-and-claim loop first.",
  },
  {
    title: "Local first",
    body: "Food waste solutions work best when they are timely, nearby, and easy enough for everyday use.",
  },
  {
    title: "Incentives",
    body: "Soil Credits turn unused surplus into a reason to keep sharing instead of throwing food away.",
  },
];

const gallerySlots = [
  {
    fileHint: "leftover-love-browse.png",
    title: "Find Food",
    caption: "Browse free and reduced-price surplus nearby.",
  },
  {
    fileHint: "leftover-love-list.png",
    title: "Share Food",
    caption: "List donations or sales with expiry details.",
  },
  {
    fileHint: "leftover-love-soil-credits.png",
    title: "Soil Credits",
    caption: "Track donations, requests, and earned credits.",
  },
  {
    fileHint: "leftover-love-map.png",
    title: "Pickup Map",
    caption: "See listing details and pickup location on a map.",
  },
] as const;

type GalleryItem = {
  src: string;
  title: string;
  caption: string;
};

type PreviewSlide = {
  src: string;
  label: string;
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

function Pointers({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-2.5">
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

function AppWindow({
  slides = [],
  className = "",
}: {
  slides?: PreviewSlide[];
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const count = slides.length;
  const current = count > 0 ? slides[Math.min(index, count - 1)] : null;

  const goPrev = () => {
    if (count < 2) return;
    setIndex((i) => (i - 1 + count) % count);
  };

  const goNext = () => {
    if (count < 2) return;
    setIndex((i) => (i + 1) % count);
  };

  const arrowClass =
    "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-[#12182e] text-[#c8ccd9] transition-colors hover:border-[#8387C3]/50 hover:bg-[#151c35] hover:text-white";

  return (
    <div className={`flex items-center gap-2 sm:gap-3 ${className}`}>
      {count > 1 ? (
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous screen"
          className={arrowClass}
        >
          <span aria-hidden className="text-lg leading-none">
            ‹
          </span>
        </button>
      ) : null}

      <div className="min-w-0 flex-1 overflow-hidden rounded-xl border border-white/10 bg-[#12182e] transition-all duration-300 hover:border-[#8387C3]/45">
        <div className="flex items-center justify-between gap-2 border-b border-white/10 px-3 py-2.5 sm:px-4">
          <div className="flex min-w-0 items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#ff5f56]/75" />
            <span className="h-2 w-2 rounded-full bg-[#ffbd2e]/75" />
            <span className="h-2 w-2 rounded-full bg-[#27c93f]/75" />
            <span className="ml-2 truncate rounded bg-white/5 px-2.5 py-0.5 text-[10px] text-[#8A8CAC]">
              leftoverlove.app
            </span>
          </div>
          {count > 1 ? (
            <span className="shrink-0 text-[10px] tabular-nums tracking-[0.08em] text-[#8387C3]">
              {Math.min(index, count - 1) + 1} / {count}
            </span>
          ) : null}
        </div>

        <div className="relative bg-[#f0fdf4]">
          {current ? (
            <div className="relative aspect-[16/11] w-full min-h-[280px] overflow-hidden sm:min-h-[320px] lg:min-h-[360px]">
              <Image
                src={current.src}
                alt={current.label}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 640px"
                priority
              />
              <p className="absolute bottom-2 left-1/2 z-[1] -translate-x-1/2 rounded bg-black/45 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-[#c8ccd9]">
                {current.label}
              </p>
            </div>
          ) : (
            <div className="flex aspect-[16/11] min-h-[280px] flex-col items-center justify-center gap-3 px-6 text-center sm:min-h-[320px]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8387C3]">
                Application Preview
              </p>
              <p className="max-w-xs text-sm leading-relaxed text-[#8A8CAC]">
                Drop screenshots at
                <span className="mt-1 block font-mono text-[12px] text-[#959BB5]">
                  public/projects/leftover-love-preview-*.png
                </span>
              </p>
            </div>
          )}
        </div>
      </div>

      {count > 1 ? (
        <button
          type="button"
          onClick={goNext}
          aria-label="Next screen"
          className={arrowClass}
        >
          <span aria-hidden className="text-lg leading-none">
            ›
          </span>
        </button>
      ) : null}
    </div>
  );
}

function ImageSlot({
  title,
  caption,
  src,
  fileHint,
}: {
  title: string;
  caption: string;
  src?: string | null;
  fileHint: string;
}) {
  return (
    <figure className="overflow-hidden rounded-xl border border-white/10 bg-[#12182e]">
      <div className="relative aspect-[16/10] overflow-hidden bg-[#0f1629]">
        {src ? (
          <Image
            src={src}
            alt={title}
            fill
            className="object-contain object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 border border-dashed border-white/10 px-4 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8387C3]">
              Add Screenshot
            </p>
            <p className="font-mono text-[11px] text-[#8A8CAC]">{fileHint}</p>
          </div>
        )}
      </div>
      <figcaption className="border-t border-white/10 px-4 py-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#c8ccd9]">
          {title}
        </p>
        <p className="mt-1 text-[13px] text-[#8A8CAC]">{caption}</p>
      </figcaption>
    </figure>
  );
}

function Workflow() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <div className="mt-8 hidden items-start md:flex">
        {workflow.map((step, i) => (
          <div key={step.number} className="flex flex-1 items-start">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="flex flex-col items-center text-center"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#8387C3]/35 bg-[#151c35] text-[11px] font-semibold tracking-[0.08em] text-[#8387C3]">
                {step.number}
              </span>
              <p className="mt-3 max-w-[7.5rem] text-[11px] font-semibold uppercase tracking-[0.14em] text-[#c8ccd9]">
                {step.label}
              </p>
            </motion.div>
            {i < workflow.length - 1 ? (
              <div
                className="mt-5 h-px flex-1 bg-gradient-to-r from-[#8387C3]/40 to-transparent"
                aria-hidden
              />
            ) : null}
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-3 md:hidden">
        {workflow.map((step, i) => (
          <motion.div
            key={step.number}
            initial={reduceMotion ? false : { opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.04 }}
            className="flex items-center gap-3 border-l border-[#8387C3]/35 pl-4"
          >
            <span className="text-[11px] font-semibold tracking-[0.12em] text-[#8387C3]">
              {step.number}
            </span>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#c8ccd9]">
              {step.label}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export function LeftoverLoveCaseStudy({
  previewSlides = [],
  gallery = [],
}: {
  previewSlides?: PreviewSlide[];
  gallery?: GalleryItem[];
}) {
  const reduceMotion = useReducedMotion();
  const galleryByTitle = Object.fromEntries(
    gallery.map((item) => [item.title, item.src]),
  );

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

        <header className="mt-10 grid items-center gap-10 border-b border-white/10 pb-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-10">
          <div>
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8387C3]"
            >
              Interfaces & Experiences
            </motion.p>

            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-4 font-serif text-4xl font-semibold tracking-tight text-[#c8ccd9] sm:text-5xl lg:text-[3.25rem]"
            >
              Leftover Love
            </motion.h1>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.12 }}
              className="mt-5 max-w-md space-y-3"
            >
              <p className="text-[15px] leading-relaxed text-[#959BB5]">
                A hyperlocal food-sharing platform that connects surplus
                groceries with people nearby, before food expires.
              </p>
              <p className="text-[15px] leading-relaxed text-[#8A8CAC]">
                Built for youCode 2025 with a small team of three. Providers
                list surplus, seekers claim nearby items, and Soil Credits
                reward community redirection.
              </p>
              <p className="pt-1 text-sm tracking-wide text-[#8387C3]">
                React · TypeScript · Vite · Tailwind · OpenStreetMap
              </p>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.22 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-[#3A3E6C] px-5 py-2.5 text-sm font-medium text-[#c8ccd9] transition-colors hover:bg-[#8387C3]"
              >
                GitHub
                <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={DEVPOST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-transparent px-5 py-2.5 text-sm font-medium text-[#c8ccd9] transition-colors hover:border-[#8387C3]/50 hover:text-white"
              >
                Devpost
                <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <AppWindow slides={previewSlides} />
          </motion.div>
        </header>

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

        <SectionReveal className="mt-16 grid gap-4 md:grid-cols-2 md:gap-5">
          <div className="rounded-xl border border-white/10 bg-[#0f1629] p-6 sm:p-7">
            <Label>The Problem</Label>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-[#959BB5]">
              Too much edible food is wasted while food insecurity stays local
              and urgent.
            </p>
            <Pointers items={problemPoints} />
          </div>

          <div className="rounded-xl border border-[#8387C3]/20 bg-[#151c35] p-6 sm:p-7">
            <Label>The Response</Label>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-[#959BB5]">
              Leftover Love makes sharing surplus food feel as simple as a local
              pickup, with roles, maps, and community incentives.
            </p>
            <Pointers items={responsePoints} />
          </div>
        </SectionReveal>

        <SectionReveal className="mt-16 border-t border-white/10 pt-12">
          <Label>How It Works</Label>
          <Workflow />
        </SectionReveal>

        <SectionReveal className="mt-16">
          <Label>Key Features</Label>
          <p className="mt-3 max-w-lg text-[14px] leading-relaxed text-[#8A8CAC]">
            Find food, share surplus, earn Soil Credits, and pick up on the map.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {gallerySlots.map((slot, i) => (
              <motion.div
                key={slot.title}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
              >
                <ImageSlot
                  title={slot.title}
                  caption={slot.caption}
                  fileHint={slot.fileHint}
                  src={galleryByTitle[slot.title] ?? null}
                />
              </motion.div>
            ))}
          </div>
        </SectionReveal>

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
