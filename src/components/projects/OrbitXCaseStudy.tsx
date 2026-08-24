"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRightIcon } from "@/components/icons";

const GITHUB_URL = "https://github.com/vanshikaasharma/orbitX-datathon";

const focusAreas = [
  {
    number: "01",
    title: "Map",
    body: "Plot Alberta wildfire detections from NASA FIRMS MODIS on an interactive Folium map.",
  },
  {
    number: "02",
    title: "Analyze",
    body: "Break down burned area and incident trends by lightning, human causes, and fire size.",
  },
  {
    number: "03",
    title: "Explain",
    body: "Surface the strongest drivers of occurrence: lightning (LT), recreation (RC), and residents (RS).",
  },
];

const problemPoints = [
  "Wildfire risk is geographic, seasonal, and uneven across communities",
  "Satellite detections alone are hard to act on without local context",
  "Climate and human activity both shape where fires concentrate",
];

const responsePoints = [
  "Filter NASA FIRMS MODIS Canada data to Alberta bounds",
  "Join climate station months and label nearest cities",
  "Visualize hotspots, correlations, and cause trends for response ideas",
];

const workflow = [
  { number: "01", label: "Ingest MODIS" },
  { number: "02", label: "Filter Alberta" },
  { number: "03", label: "Clean & Model" },
  { number: "04", label: "Join Climate" },
  { number: "05", label: "Map & Present" },
];

const findings = [
  {
    number: "01",
    title: "Drivers that matter",
    body: "Statistical analysis pointed to lightning (LT), recreation (RC), and residents (RS) as the three strongest factors tied to wildfire occurrence.",
  },
  {
    number: "02",
    title: "Burned area trend",
    body: "Over roughly 60 years, total burned area trends downward even as the geography of risk stays highly concentrated.",
  },
  {
    number: "03",
    title: "Human-caused rise",
    body: "Human-caused incidents increase in the 21st century, which shifts preparedness toward recreation and residential exposure, not only lightning.",
  },
];

const techBlocks = [
  {
    label: "Satellite",
    title: "NASA FIRMS MODIS",
    body: "Filtered 2023 Canada detections to Alberta latitude and longitude bounds, then explored brightness, FRP, and confidence signals.",
  },
  {
    label: "Notebook",
    title: "Jupyter · pandas",
    body: "datathon__orbitx.ipynb holds cleaning, city labeling with geopy, monthly climate merges, heatmaps, and Folium map export.",
  },
  {
    label: "Modeling",
    title: "scikit-learn",
    body: "RandomForestClassifier pipeline with scaling and cross-validation on detection features such as brightness, scan, track, and FRP.",
  },
  {
    label: "Maps & Charts",
    title: "Folium · Seaborn",
    body: "Interactive wildfire point map plus day/night counts, city distribution, and correlation heatmaps for presentation.",
  },
];

const learnings = [
  {
    title: "Context over points",
    body: "A detection is only useful once it is tied to nearby cities, climate, and likely cause.",
  },
  {
    title: "Joins are the hard part",
    body: "Matching satellite rows to climate stations across space and month needed binning and tolerance, not a clean key.",
  },
  {
    title: "Actionable framing",
    body: "The win came from translating maps and factors into preparation, response, and recovery ideas for communities.",
  },
];

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

function DeckPreview({
  deckSrc,
  className = "",
  heightClass = "h-[min(52vh,420px)]",
}: {
  deckSrc?: string | null;
  className?: string;
  heightClass?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-white/10 bg-[#12182e] transition-all duration-300 hover:border-[#8387C3]/45 ${className}`}
    >
      <div className="flex items-center justify-between gap-2 border-b border-white/10 px-3 py-2.5 sm:px-4">
        <div className="flex min-w-0 items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#ff5f56]/75" />
          <span className="h-2 w-2 rounded-full bg-[#ffbd2e]/75" />
          <span className="h-2 w-2 rounded-full bg-[#27c93f]/75" />
          <span className="ml-2 truncate rounded bg-white/5 px-2.5 py-0.5 text-[10px] text-[#8A8CAC]">
            OrbitX datathon deck.pdf
          </span>
        </div>
        <span className="hidden shrink-0 text-[10px] uppercase tracking-[0.14em] text-[#8387C3] sm:inline">
          Scroll to read
        </span>
      </div>

      <div className={`relative overflow-hidden bg-[#0f1629] ${heightClass}`}>
        {deckSrc ? (
          <iframe
            src={`${deckSrc}#toolbar=0&navpanes=0&scrollbar=1`}
            title="OrbitX datathon presentation"
            className="h-full w-full border-0 bg-white"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8387C3]">
              Presentation
            </p>
            <p className="max-w-xs text-sm leading-relaxed text-[#8A8CAC]">
              Drop the PDF at
              <span className="mt-1 block font-mono text-[12px] text-[#959BB5]">
                public/projects/orbitx-datathon-ppt.pdf
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
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

export function OrbitXCaseStudy({
  deckSrc,
}: {
  deckSrc?: string | null;
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

        <header className="mt-10 grid items-center gap-10 border-b border-white/10 pb-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12">
          <div>
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8387C3]"
            >
              Insights & Analytics · OrbitX Datathon Winner
            </motion.p>

            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-4 font-serif text-4xl font-semibold tracking-tight text-[#c8ccd9] sm:text-5xl lg:text-[3.1rem]"
            >
              Wildfire Mapping and Analysis in Alberta
            </motion.h1>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.12 }}
              className="mt-5 max-w-md space-y-3"
            >
              <p className="text-[15px] leading-relaxed text-[#959BB5]">
                Maps Alberta wildfire occurrences from NASA Natural Hazards data
                and historical climate records to explain geographic patterns and
                support better preparation, response, and recovery.
              </p>
              <p className="text-[15px] leading-relaxed text-[#8A8CAC]">
                Built for the OrbitX Datathon with FIRMS MODIS detections,
                Alberta climate CSVs, and a Folium wildfire map.
              </p>
              <p className="pt-1 text-sm tracking-wide text-[#8387C3]">
                Python · Pandas · Folium · scikit-learn · Seaborn · geopy
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
              {deckSrc ? (
                <a
                  href={deckSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-transparent px-5 py-2.5 text-sm font-medium text-[#c8ccd9] transition-colors hover:border-[#8387C3]/50 hover:text-white"
                >
                  Open Deck
                  <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ) : null}
            </motion.div>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <DeckPreview
              deckSrc={deckSrc}
              heightClass="h-[min(62vh,520px)]"
            />
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
              Communities need clearer wildfire intelligence than raw satellite
              points. Risk has to be mapped, attributed, and tied to local
              climate and activity.
            </p>
            <Pointers items={problemPoints} />
          </div>

          <div className="rounded-xl border border-[#8387C3]/20 bg-[#151c35] p-6 sm:p-7">
            <Label>The Approach</Label>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-[#959BB5]">
              Filter NASA FIRMS to Alberta, enrich with climate and nearest-city
              context, then visualize patterns that support preparedness ideas.
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
