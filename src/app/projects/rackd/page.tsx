import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import { RackdCaseStudy } from "@/components/projects/RackdCaseStudy";

export const metadata: Metadata = {
  title: "Rackd - Vanshika Sharma",
  description:
    "Inventory management for resellers selling across multiple marketplaces.",
};

const GALLERY_ASSETS = [
  {
    file: "rackd-inventory.png",
    title: "Inventory",
    caption: "Manage items and marketplace listings.",
  },
  {
    file: "rackd-analytics.png",
    title: "Analytics",
    caption: "Track profit, sales, and stale inventory.",
  },
  {
    file: "rackd-delisting.png",
    title: "Delisting",
    caption: "See which marketplace listings still require action.",
  },
] as const;

export default function RackdPage() {
  const projectsDir = path.join(process.cwd(), "public/projects");

  const previewCandidates = [
    "rackd-preview.png",
    "rackd-preview.jpg",
    "rackd-preview.webp",
  ];
  const previewFile = previewCandidates.find((file) =>
    fs.existsSync(path.join(projectsDir, file)),
  );
  const previewSrc = previewFile ? `/projects/${previewFile}` : null;

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

  return <RackdCaseStudy previewSrc={previewSrc} gallery={gallery} />;
}
