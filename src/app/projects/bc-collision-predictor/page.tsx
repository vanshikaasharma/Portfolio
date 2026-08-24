import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import { BCCollisionCaseStudy } from "@/components/projects/BCCollisionCaseStudy";

export const metadata: Metadata = {
  title: "BC Collision Predictor - Vanshika Sharma",
  description:
    "Lower Mainland ICBC crash analytics with XGBoost risk scoring, walk-forward holdout, and a Streamlit dashboard.",
};

/** Supporting views in the top hero carousel */
const PREVIEW_SLIDES = [
  { file: "bc-collision-crash-density.png", label: "Crash Density" },
  { file: "bc-collision-corridors.png", label: "Top Corridors" },
  { file: "bc-collision-municipality.png", label: "Municipality Analytics" },
  { file: "bc-collision-high-risk.png", label: "High-Risk Contexts" },
  { file: "bc-collision-muni-compare.png", label: "City Comparison" },
] as const;

/** Main feature screens in Insights (2×2) */
const GALLERY_ASSETS = [
  {
    file: "bc-collision-executive.png",
    title: "Executive Summary",
    caption:
      "Municipality volume, time-of-day peaks, yearly trend, and collision-type mix.",
  },
  {
    file: "bc-collision-hotspots.png",
    title: "Hotspot Map",
    caption:
      "Lower Mainland hotspot clusters with crash KPIs and corridor views.",
  },
  {
    file: "bc-collision-model-eval.png",
    title: "Model Evaluation",
    caption:
      "Walk-forward holdout: train on past years, test the next year only.",
  },
  {
    file: "bc-collision-street-lookup.png",
    title: "Street Risk Lookup",
    caption:
      "Pick city, street, and time for high-risk probability and activity score.",
  },
] as const;

export default function BCCollisionPage() {
  const projectsDir = path.join(process.cwd(), "public/projects");

  const previewSlides = PREVIEW_SLIDES.flatMap((slide) => {
    const fullPath = path.join(projectsDir, slide.file);
    if (!fs.existsSync(fullPath)) return [];
    return [{ src: `/projects/${slide.file}`, label: slide.label }];
  });

  const gallery = GALLERY_ASSETS.flatMap((asset) => {
    const fullPath = path.join(projectsDir, asset.file);
    if (!fs.existsSync(fullPath)) return [];
    return [
      {
        src: `/projects/${asset.file}`,
        title: asset.title,
        caption: asset.caption,
      },
    ];
  });

  return (
    <BCCollisionCaseStudy previewSlides={previewSlides} gallery={gallery} />
  );
}
