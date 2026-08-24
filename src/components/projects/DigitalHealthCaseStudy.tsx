"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRightIcon } from "@/components/icons";

const GITHUB_URL =
  "https://github.com/vanshikaasharma/Digital-Health-Technologies";
const PAPER_URL =
  "https://github.com/vanshikaasharma/Digital-Health-Technologies/blob/main/Research%20paper.pdf";

const researchQuestions = [
  {
    number: "01",
    title: "Urban vs Rural",
    body: "How does eRx adoption differ between urban and rural counties within a state?",
  },
  {
    number: "02",
    title: "Volume vs Adoption",
    body: "How has prescription volume varied across regions, and how does it compare to eRx trends?",
  },
  {
    number: "03",
    title: "Provider Roles",
    body: "How does eRx share compare between nurse practitioners and physician assistants across states?",
  },
];

const problemPoints = [
  "Adoption of eRx is uneven across geography and roles",
  "Rural providers face infrastructure and training gaps",
  "One-size-fits-all rollout ignores workforce composition",
];

const responsePoints = [
  "Join national eRx, Medicaid, and RUCC datasets",
  "EDA, feature engineering, and stratified sampling",
  "t-tests and Pearson correlation to test disparities",
];

const workflow = [
  { number: "01", label: "Ingest Data" },
  { number: "02", label: "Clean & Join" },
  { number: "03", label: "Engineer Features" },
  { number: "04", label: "Visualize" },
  { number: "05", label: "Test Statistically" },
];

const findings = [
  {
    number: "RQ1",
    title: "Urban and rural gap is real",
    body: "Across 1,797 rural and 1,137 urban counties, urban areas show higher eRx adoption. A t-test confirmed the difference is statistically significant, pointing to real gaps in rural digital infrastructure.",
  },
  {
    number: "RQ2",
    title: "Volume tracks with eRx",
    body: "State-level prescription volume and eRx use are strongly positively correlated. High-volume states like CA and NY also lead in electronic prescribing, though system readiness, not volume alone, likely drives uptake.",
  },
  {
    number: "RQ3",
    title: "Workforce shape matters",
    body: "NP and PA distributions differ significantly across states. eRx support should follow who actually practices in each region, not a uniform national playbook.",
  },
];

const techBlocks = [
  {
    label: "Language",
    title: "Python",
    body: "Pandas and NumPy for cleaning, joins, stratification, and feature engineering on multi-source healthcare data.",
  },
  {
    label: "Query",
    title: "SQL",
    body: "Structured queries extract and join eRx and utilization fields used to answer each research question.",
  },
  {
    label: "Notebook",
    title: "Jupyter",
    body: "cpsc_368_proj.ipynb holds EDA, visualization, and the statistical tests reported in the paper.",
  },
  {
    label: "Stats & Viz",
    title: "SciPy · Seaborn · Matplotlib",
    body: "Two-sample t-tests, Pearson correlation, and charts that surface urban vs rural and provider-type patterns.",
  },
];

const learnings = [
  {
    title: "Equity lens",
    body: "Digital health gains only stick if rural counties get intentional infrastructure and training investment.",
  },
  {
    title: "Methods",
    body: "Descriptive EDA plus simple inferential tests can still produce policy-relevant, defensible findings.",
  },
  {
    title: "Context",
    body: "Correlation is not causation. Shared system maturity likely underlies both volume and eRx uptake.",
  },
];

const gallerySlots = [
  {
    fileHint: "dht-urban-rural.png",
    title: "Urban vs Rural",
    caption: "Urban areas adopt eRx more than rural ones.",
  },
  {
    fileHint: "dht-volume.png",
    title: "Volume vs eRx",
    caption: "Higher prescribing states also use more eRx.",
  },
  {
    fileHint: "dht-providers.png",
    title: "NP vs PA",
    caption: "Provider mix varies, so rollout should too.",
  },
] as const;

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

function PaperPreview({
  paperSrc,
  className = "",
  heightClass = "h-[min(52vh,420px)]",
}: {
  paperSrc?: string | null;
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
            Research paper.pdf
          </span>
        </div>
        <span className="hidden shrink-0 text-[10px] uppercase tracking-[0.14em] text-[#8387C3] sm:inline">
          Scroll to read
        </span>
      </div>

      <div className={`relative overflow-hidden bg-[#0f1629] ${heightClass}`}>
        {paperSrc ? (
          <iframe
            src={`${paperSrc}#toolbar=0&navpanes=0&scrollbar=1`}
            title="Research paper preview"
            className="h-full w-full border-0 bg-white"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8387C3]">
              Research Paper
            </p>
            <p className="max-w-xs text-sm leading-relaxed text-[#8A8CAC]">
              Drop the PDF at
              <span className="mt-1 block font-mono text-[12px] text-[#959BB5]">
                public/projects/dht-research-paper.pdf
              </span>
            </p>
          </div>
        )}
      </div>
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
      <div className="relative aspect-[16/10] overflow-hidden">
        {src ? (
          <Image
            src={src}
            alt={title}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 border border-dashed border-white/10 bg-[#0f1629] px-4 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8387C3]">
              Add Chart
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

export function DigitalHealthCaseStudy({
  paperSrc,
  gallery = [],
}: {
  paperSrc?: string | null;
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

        <header className="mt-10 grid items-center gap-10 border-b border-white/10 pb-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12">
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
              Digital Health Technologies
            </motion.h1>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.12 }}
              className="mt-5 max-w-md space-y-3"
            >
              <p className="text-[15px] leading-relaxed text-[#959BB5]">
                An academic study of electronic prescribing (eRx) adoption across
                the U.S.: geography, prescription volume, and provider roles.
              </p>
              <p className="text-[15px] leading-relaxed text-[#8A8CAC]">
                Co-authored with two other members.
                Built on Surescripts, Medicaid utilization, and RUCC data for
                2013.
              </p>
              <p className="pt-1 text-sm tracking-wide text-[#8387C3]">
                Python · SQL · Pandas · SciPy · Seaborn · Matplotlib
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
                href={paperSrc ?? PAPER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-transparent px-5 py-2.5 text-sm font-medium text-[#c8ccd9] transition-colors hover:border-[#8387C3]/50 hover:text-white"
              >
                Open Paper
                <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <PaperPreview
              paperSrc={paperSrc}
              heightClass="h-[min(62vh,520px)]"
            />
          </motion.div>
        </header>

        <SectionReveal className="mt-12 grid gap-4 sm:grid-cols-3 sm:gap-5">
          {researchQuestions.map((item, i) => (
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
              eRx can cut medication errors and admin friction, but only where
              infrastructure, policy, and training actually reach providers.
            </p>
            <Pointers items={problemPoints} />
          </div>

          <div className="rounded-xl border border-[#8387C3]/20 bg-[#151c35] p-6 sm:p-7">
            <Label>The Approach</Label>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-[#959BB5]">
              Quantitative analysis of national datasets with EDA, stratified
              sampling (~100k from 3.67M Medicaid rows), and inferential tests.
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
          <Label>Visualizations</Label>
          <p className="mt-3 max-w-lg text-[14px] leading-relaxed text-[#8A8CAC]">
            Simple summaries of the three main findings.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
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
