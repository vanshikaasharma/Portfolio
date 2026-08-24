import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import { FairForwardCaseStudy } from "@/components/projects/FairForwardCaseStudy";

export const metadata: Metadata = {
  title: "FairForward - Vanshika Sharma",
  description:
    "A legal support platform with AI guidance, safe spaces, and pro bono lawyer connections.",
};

const PREVIEW_SLIDES = [
  { file: "fairforward-preview.png", label: "Home" },
  { file: "fairforward-welcome.png", label: "Welcome" },
  { file: "fairforward-resources.png", label: "Resources" },
  { file: "fairforward-emergency.png", label: "Emergency" },
] as const;

const GALLERY_ASSETS = [
  {
    file: "fairforward-assistant.png",
    title: "Legal Assistant",
    caption: "Chat with Mr. Hootsworth for guidance.",
  },
  {
    file: "fairforward-community.png",
    title: "Community",
    caption: "Share experiences in the support hub.",
  },
  {
    file: "fairforward-lawyers.png",
    title: "Pro Bono",
    caption: "Qualify and connect with free legal help.",
  },
  {
    file: "fairforward-glossary.png",
    title: "Legal Terms",
    caption: "Search and browse the glossary.",
  },
] as const;

export default function FairForwardPage() {
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
    <FairForwardCaseStudy previewSlides={previewSlides} gallery={gallery} />
  );
}
