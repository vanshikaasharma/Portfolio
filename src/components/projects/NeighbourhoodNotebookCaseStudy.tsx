"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRightIcon } from "@/components/icons";

const GITHUB_URL =
  "https://github.com/vanshikaasharma/Neighbourhood-Notebook";
const FIGMA_URL =
  "https://www.figma.com/proto/Ewt68oRb8tzPgGn85Pppo4/Neighborhood-Notebook-Mid-fi-Prototype?node-id=15-1489&t=Uc3F0lKNuIxisSzu-1";
const FIGJAM_URL =
  "https://www.figma.com/board/A4s6z9bAtC32kaMazsFcft/Notebook-Brainstorm?node-id=0-1&t=u7ahuUML4OH3VFyZ-1";
const FIGMA_EMBED_URL = `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(FIGMA_URL)}`;

const researchQuestions = [
  {
    number: "01",
    title: "Filter Efficiency",
    body: "How efficiently can users filter and sort recommendation feeds to find personally relevant places?",
  },
  {
    number: "02",
    title: "Contribution Clarity",
    body: "How intuitive is sharing reflections (reviews, ratings, photos) and saving recommendations?",
  },
  {
    number: "03",
    title: "Learnability",
    body: "Does the travel-journal metaphor and familiar app patterns reduce cognitive load for newcomers?",
  },
];

const problemPoints = [
  "Short-term residents lack time and local knowledge",
  "Dense travel apps overwhelm instead of guiding discovery",
  "Trust and personalisation are hard to read at a glance",
];

const responsePoints = [
  "Travel-journal metaphor with personal notebook collections",
  "Functional filter, bookmark, review, and publish flows in mid-fi Figma",
  "Cognitive walkthroughs, 3 pilots, then a 9-participant usability study",
];

const workflow = [
  { number: "01", label: "Pitch & Need" },
  { number: "02", label: "Lo-fi Sketches" },
  { number: "03", label: "Walkthroughs" },
  { number: "04", label: "Mid-fi Figma" },
  { number: "05", label: "Usability Study" },
];

const findings = [
  {
    number: "RQ1",
    title: "Filtering worked",
    body: "Most participants found filter and sort options clear and easy to apply. Feedback asked for tighter sets, price range, and neighbourhood selection inside filters.",
  },
  {
    number: "RQ2",
    title: "Reviews felt familiar",
    body: "Sharing ratings, photos, and bookmarks was generally intuitive. Minor friction: bookmark contrast, star placement, and wanting edit / past-activity flows.",
  },
  {
    number: "Insight",
    title: "Piloting mattered",
    body: "Three pilots fixed Wander Feed labeling, moved feeling filters into Sort & Filter, and clarified rating-then-review order before the main 9-person study.",
  },
];

const coreFlows = [
  {
    number: "01",
    title: "Filter & Sort",
    body: "Narrow recommendations by affordability, activity type, accessibility, rating, and vibe.",
  },
  {
    number: "02",
    title: "Save & Notebook",
    body: "Bookmark places and collect them into a personal neighbourhood notebook.",
  },
  {
    number: "03",
    title: "Review & Share",
    body: "Leave authentic reviews, then publish notebooks so others can follow the trail.",
  },
];

const designBlocks = [
  {
    label: "Must work",
    title: "Core interactive flows",
    body: "Filtering, bookmarks, reviews, notebook customization, publishing, and navigation had to be clickable for evaluation.",
  },
  {
    label: "Wizard-of-Oz",
    title: "Search & recommendations",
    body: "Search and the recommendation algorithm were scripted for study scenarios rather than fully built in Figma.",
  },
  {
    label: "Polish focus",
    title: "Notebook, ratings, saves",
    body: "Notebook collections, review detail, and saved lists were prioritised visually because they carry trust and authenticity.",
  },
  {
    label: "Deferred",
    title: "Gamification & extras",
    body: "Heavy gamification, deep profile setup, and full neighbourhood explore were kept rough or out of scope to protect clarity.",
  },
];

const learnings = [
  {
    title: "Positive transfer",
    body: "Familiar filter and review patterns lowered cognitive load. People recognised the icons and moved faster.",
  },
  {
    title: "Prototype less",
    body: "Extra screens users never reached cost time that would have been better spent refining high-impact flows.",
  },
  {
    title: "Test on device",
    body: "Laptop remote sessions missed thumb-reach and tap-target cues that matter for a mobile-first design.",
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

function FigmaPreview({ className = "" }: { className?: string }) {
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
            Mid-fi prototype · Figma
          </span>
        </div>
        <a
          href={FIGMA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden shrink-0 text-[10px] uppercase tracking-[0.14em] text-[#8387C3] transition-colors hover:text-[#c8ccd9] sm:inline"
        >
          Open full screen
        </a>
      </div>

      <div className="relative h-[min(68vh,560px)] overflow-hidden bg-[#0f1629]">
        <iframe
          src={FIGMA_EMBED_URL}
          title="Neighbourhood Notebook Figma prototype"
          className="h-full w-full border-0"
          allowFullScreen
        />
      </div>
    </div>
  );
}

function DocumentPreview({
  src,
  fileLabel,
  emptyLabel,
  title,
  className = "",
  heightClass = "h-[min(70vh,640px)]",
}: {
  src?: string | null;
  fileLabel: string;
  emptyLabel: string;
  title: string;
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
            {fileLabel}
          </span>
        </div>
        {src ? (
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden shrink-0 text-[10px] uppercase tracking-[0.14em] text-[#8387C3] transition-colors hover:text-[#c8ccd9] sm:inline"
          >
            Open full screen
          </a>
        ) : null}
      </div>

      <div className={`relative overflow-hidden bg-[#0f1629] ${heightClass}`}>
        {src ? (
          <iframe
            src={`${src}#toolbar=0&navpanes=0&scrollbar=1`}
            title={title}
            className="h-full w-full border-0 bg-white"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8387C3]">
              {emptyLabel}
            </p>
            <p className="max-w-xs text-sm leading-relaxed text-[#8A8CAC]">
              Document not found in public assets.
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

export function NeighbourhoodNotebookCaseStudy({
  pitchSrc,
  lofiSrc,
}: {
  pitchSrc?: string | null;
  lofiSrc?: string | null;
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
              Interfaces & Experiences
            </motion.p>

            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-4 font-serif text-4xl font-semibold tracking-tight text-[#c8ccd9] sm:text-5xl lg:text-[3.25rem]"
            >
              Neighbourhood Notebook
            </motion.h1>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.12 }}
              className="mt-5 max-w-md space-y-3"
            >
              <p className="text-[15px] leading-relaxed text-[#959BB5]">
                A mobile UX concept that helps short-term residents in Vancouver
                discover authentic local spots through a travel-journal
                metaphor and vibe-based filtering.
              </p>
              <p className="text-[15px] leading-relaxed text-[#8A8CAC]">
                Team Capybara HCI project: from Shark Tank pitch and lo-fi
                sketches through cognitive walkthroughs to a 9-participant
                usability study.
              </p>
              <p className="pt-1 text-sm tracking-wide text-[#8387C3]">
                UI/UX · HCI · Figma · Usability Testing
              </p>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.22 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href={FIGMA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-[#3A3E6C] px-5 py-2.5 text-sm font-medium text-[#c8ccd9] transition-colors hover:bg-[#8387C3]"
              >
                Open Prototype
                <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-transparent px-5 py-2.5 text-sm font-medium text-[#c8ccd9] transition-colors hover:border-[#8387C3]/50 hover:text-white"
              >
                GitHub
                <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={FIGJAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-transparent px-5 py-2.5 text-sm font-medium text-[#c8ccd9] transition-colors hover:border-[#8387C3]/50 hover:text-white"
              >
                FigJam Board
                <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <FigmaPreview />
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
              Short-term residents in Vancouver need authentic local discovery
              that feels familiar, without the overload of dense travel apps.
            </p>
            <Pointers items={problemPoints} />
          </div>

          <div className="rounded-xl border border-[#8387C3]/20 bg-[#151c35] p-6 sm:p-7">
            <Label>The Approach</Label>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-[#959BB5]">
              A notebook metaphor, vibe filters, and familiar rating/review
              patterns, validated through pilots and a 9-participant study.
            </p>
            <Pointers items={responsePoints} />
          </div>
        </SectionReveal>

        <SectionReveal className="mt-16 border-t border-white/10 pt-12">
          <Label>Core Flows</Label>
          <p className="mt-3 max-w-lg text-[14px] leading-relaxed text-[#8A8CAC]">
            From the prototyping plan: these had to be fully interactive so we
            could evaluate personalised discovery, filtering, and contribution.
          </p>
          <div className="mt-7 grid gap-6 sm:grid-cols-3">
            {coreFlows.map((item, i) => (
              <motion.div
                key={item.title}
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
          <Label>Design Process</Label>
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
          <Label>From Pitch to Lo-fi</Label>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-[#8A8CAC]">
            Shark Tank locked the travel-journal direction. Lo-fi sketches then
            mapped notebook collections, Wander Feed, and review flows before
            cognitive walkthroughs and mid-fi Figma.
          </p>
          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            <DocumentPreview
              src={pitchSrc}
              fileLabel="Shark Tank Pitch.pdf"
              emptyLabel="Pitch Deck"
              title="Neighbourhood Notebook Shark Tank pitch deck"
              heightClass="h-[min(58vh,520px)]"
            />
            <DocumentPreview
              src={lofiSrc}
              fileLabel="Lo-fi Sketches.pdf"
              emptyLabel="Lo-fi Sketches"
              title="Neighbourhood Notebook lo-fi sketches"
              heightClass="h-[min(58vh,520px)]"
            />
          </div>
        </SectionReveal>

        <SectionReveal className="mt-16 border-t border-white/10 pt-12">
          <Label>A Little Deeper</Label>
          <div className="mt-7 grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {designBlocks.map((block, i) => (
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
