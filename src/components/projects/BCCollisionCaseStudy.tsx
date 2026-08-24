"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRightIcon } from "@/components/icons";

const GITHUB_URL =
  "https://github.com/vanshikaasharma/bc-collision-risk-predictor";

const focusAreas = [
  {
    number: "01",
    title: "Describe",
    body: "Summarize ~953k Lower Mainland ICBC crashes by city, hour, year, and collision type.",
  },
  {
    number: "02",
    title: "Score",
    body: "Group crashes into street/time contexts and score severity-weighted risk with XGBoost.",
  },
  {
    number: "03",
    title: "Validate",
    body: "Train on past years and test only the next year so holdout metrics stay honest.",
  },
];

const problemPoints = [
  "Crash risk is concentrated by place and time, not evenly across the region",
  "Raw counts hide severity differences between PDO and casualty corridors",
  "Models need next-year checks, not only in-sample accuracy",
];

const responsePoints = [
  "Clean ICBC open data and group into city + street + month + hour contexts",
  "Train classifier (% high-risk) and regressor (activity score) with XGBoost",
  "Ship Streamlit pages for maps, municipalities, and street risk lookup",
];

const workflow = [
  { number: "01", label: "Clean Export" },
  { number: "02", label: "Build Targets" },
  { number: "03", label: "Train Models" },
  { number: "04", label: "Holdout Test" },
  { number: "05", label: "Dashboard" },
];

const findings = [
  {
    number: "01",
    title: "Volume concentrates",
    body: "Vancouver, Surrey, and Burnaby dominate crash volume. Risk is geographically clustered, not evenly spread across the Lower Mainland.",
  },
  {
    number: "02",
    title: "Holdout holds up",
    body: "XGBoost classifier reaches ROC-AUC ~0.78 on both 2024 and 2025 next-year tests. Patterns stay stable across folds, not a one-year artifact.",
  },
  {
    number: "03",
    title: "Severity matters",
    body: "About 19% of records are casualty-related. Severity weighting surfaces injury corridors that raw counts alone would underplay.",
  },
];

const techBlocks = [
  {
    label: "Data",
    title: "ICBC open export",
    body: "Lower Mainland reported crashes (2021-2025), cleaned into ~739k grouped contexts with PDO/casualty severity weights.",
  },
  {
    label: "Models",
    title: "XGBoost duo",
    body: "Classifier predicts top-quartile high_risk contexts; regressor estimates risk_score. Temporal holdout leaves year out of features.",
  },
  {
    label: "App",
    title: "Streamlit + Plotly",
    body: "Executive summary, hotspot map, municipality analytics, and street risk lookup with % chance plus activity score.",
  },
  {
    label: "Pipeline",
    title: "Python scripts",
    body: "check_data → Target → train_models / train_regressor → joblib artifacts and metrics JSON for the dashboard.",
  },
];

const learnings = [
  {
    title: "Context over drivers",
    body: "Street/time grouping is actionable for municipalities without claiming per-driver crash probability.",
  },
  {
    title: "Honest holdout",
    body: "Walk-forward next-year tests expose whether patterns travel forward, not just how well they fit the past.",
  },
  {
    title: "Scope clearly",
    body: "Lower Mainland only, no weather features, and severity labels from the export. Saying what it is not builds trust.",
  },
];

/** Main analytical surfaces shown in Insights (2×2) */
const insightSlots = [
  {
    fileHint: "bc-collision-executive.png",
    title: "Executive Summary",
    caption:
      "Municipality volume, time-of-day peaks, yearly trend, and collision-type mix.",
  },
  {
    fileHint: "bc-collision-hotspots.png",
    title: "Hotspot Map",
    caption:
      "Lower Mainland hotspot clusters with crash KPIs and corridor views.",
  },
  {
    fileHint: "bc-collision-model-eval.png",
    title: "Model Evaluation",
    caption:
      "Walk-forward holdout: train on past years, test the next year only.",
  },
  {
    fileHint: "bc-collision-street-lookup.png",
    title: "Street Risk Lookup",
    caption:
      "Pick city, street, and time for high-risk probability and activity score.",
  },
] as const;

type PreviewSlide = {
  src: string;
  label: string;
};

type GalleryItem = {
  src: string;
  title: string;
  caption: string;
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

      <div className="min-w-0 flex-1 overflow-hidden rounded-xl border border-white/10 bg-[#12182e] transition-colors duration-300 hover:border-[#8387C3]/45">
        <div className="flex items-center justify-between gap-2 border-b border-white/10 px-3 py-2.5 sm:px-4">
          <div className="flex min-w-0 items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#ff5f56]/75" />
            <span className="h-2 w-2 rounded-full bg-[#ffbd2e]/75" />
            <span className="h-2 w-2 rounded-full bg-[#27c93f]/75" />
            <span className="ml-2 truncate rounded bg-white/5 px-2.5 py-0.5 text-[10px] text-[#8A8CAC]">
              bc-road-risk.streamlit.app
            </span>
          </div>
          {count > 1 ? (
            <span className="shrink-0 text-[10px] tabular-nums tracking-[0.08em] text-[#8387C3]">
              {Math.min(index, count - 1) + 1} / {count}
            </span>
          ) : null}
        </div>

        {/* Fixed frame so carousel slides don't resize the card */}
        <div className="relative aspect-[4/3] w-full bg-[#ebe4d8]">
          {current ? (
            <>
              <Image
                src={current.src}
                alt={current.label}
                fill
                className="object-contain object-top"
                sizes="(max-width: 1024px) 100vw, 780px"
                priority
              />
              <p className="absolute bottom-2 left-1/2 z-[1] -translate-x-1/2 rounded bg-black/50 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-[#c8ccd9]">
                {current.label}
              </p>
            </>
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8387C3]">
                Dashboard Preview
              </p>
              <p className="max-w-xs text-sm leading-relaxed text-[#8A8CAC]">
                Drop screenshots at
                <span className="mt-1 block font-mono text-[12px] text-[#959BB5]">
                  public/projects/bc-collision-*.png
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
    <figure className="flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-[#12182e]">
      <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-[#ebe4d8]">
        {src ? (
          <Image
            src={src}
            alt={title}
            fill
            className="object-contain object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 border border-dashed border-white/10 bg-[#0f1629] px-4 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8387C3]">
              Add Screenshot
            </p>
            <p className="font-mono text-[11px] text-[#8A8CAC]">{fileHint}</p>
          </div>
        )}
      </div>
      <figcaption className="flex flex-1 flex-col border-t border-white/10 px-4 py-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#c8ccd9]">
          {title}
        </p>
        <p className="mt-1 text-[13px] leading-snug text-[#8A8CAC]">{caption}</p>
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

export function BCCollisionCaseStudy({
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
      <div className="mx-auto w-full max-w-7xl px-6 pb-24 pt-28 sm:px-8 sm:pb-28 sm:pt-32">
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

        <header className="mt-10 grid items-start gap-10 border-b border-white/10 pb-14 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-10">
          <div>
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8387C3]"
            >
              Data & Intelligence
            </motion.p>

            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-4 font-serif text-4xl font-semibold tracking-tight text-[#c8ccd9] sm:text-5xl lg:text-[3.25rem]"
            >
              BC Collision Predictor
            </motion.h1>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.12 }}
              className="mt-5 max-w-md space-y-3"
            >
              <p className="text-[15px] leading-relaxed text-[#959BB5]">
                End-to-end analytics on ICBC-reported crashes in the Lower
                Mainland (2021-2025): clean the export, score street/time risk
                with XGBoost, validate with walk-forward holdout, and explore in
                Streamlit.
              </p>
              <p className="text-[15px] leading-relaxed text-[#8A8CAC]">
                Context-level scoring for where and when risk clusters, not
                per-driver probability.
              </p>
              <p className="pt-1 text-sm tracking-wide text-[#8387C3]">
                Python · Pandas · XGBoost · scikit-learn · Streamlit · Plotly
              </p>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.22 }}
              className="mt-8"
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
          {focusAreas.map((item, i) => (
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
              Municipalities need clearer views of where crash risk clusters in
              time and place, with severity and honest next-year checks.
            </p>
            <Pointers items={problemPoints} />
          </div>

          <div className="rounded-xl border border-[#8387C3]/20 bg-[#151c35] p-6 sm:p-7">
            <Label>The Approach</Label>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-[#959BB5]">
              Group ICBC records into contexts, score severity-weighted risk,
              validate with walk-forward holdout, and ship a multi-page
              dashboard.
            </p>
            <Pointers items={responsePoints} />
          </div>
        </SectionReveal>

        <SectionReveal className="mt-16 border-t border-white/10 pt-12">
          <Label>How It Works</Label>
          <Workflow />
        </SectionReveal>

        <SectionReveal className="mt-16 border-t border-white/10 pt-12">
          <Label>Key Findings</Label>
          <div className="mt-7 grid gap-6 sm:grid-cols-3">
            {findings.map((item, i) => (
              <motion.div
                key={item.number}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="border-t border-white/10 pt-4"
              >
                <p className="text-[11px] font-semibold tracking-[0.16em] text-[#8387C3]">
                  {item.number}
                </p>
                <h3 className="mt-2 text-base font-medium text-[#c8ccd9]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[#8A8CAC]">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal className="mt-16">
          <Label>Insights</Label>
          <p className="mt-3 max-w-lg text-[14px] leading-relaxed text-[#8A8CAC]">
            Four core surfaces: executive summary, hotspot map, model holdout,
            and street-level risk lookup.
          </p>
          <div className="mt-6 grid auto-rows-fr gap-4 sm:grid-cols-2">
            {insightSlots.map((slot, i) => (
              <motion.div
                key={slot.title}
                className="h-full"
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
