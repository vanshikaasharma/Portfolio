import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import { LeftoverLoveCaseStudy } from "@/components/projects/LeftoverLoveCaseStudy";

export const metadata: Metadata = {
  title: "Leftover Love - Vanshika Sharma",
  description:
    "A hyperlocal food-sharing web app that connects surplus groceries with nearby seekers before expiry.",
};

const PREVIEW_SLIDES = [
  { file: "leftover-love-preview-1.png", label: "Choose Mode" },
  { file: "leftover-love-preview-2.png", label: "My Account" },
  { file: "leftover-love-preview-3.png", label: "Help Center" },
  { file: "leftover-love-preview-4.png", label: "Donation History" },
] as const;

const GALLERY_ASSETS = [
  {
    file: "leftover-love-browse.png",
    title: "Find Food",
    caption: "Browse free and reduced-price surplus nearby.",
  },
  {
    file: "leftover-love-list.png",
    title: "Share Food",
    caption: "List donations or sales with expiry details.",
  },
  {
    file: "leftover-love-soil-credits.png",
    title: "Soil Credits",
    caption: "Track donations, requests, and earned credits.",
  },
  {
    file: "leftover-love-map.png",
    title: "Pickup Map",
    caption: "See listing details and pickup location on a map.",
  },
] as const;

export default function LeftoverLovePage() {
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
    <LeftoverLoveCaseStudy previewSlides={previewSlides} gallery={gallery} />
  );
}
