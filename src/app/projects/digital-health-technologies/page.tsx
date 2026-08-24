import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import { DigitalHealthCaseStudy } from "@/components/projects/DigitalHealthCaseStudy";

export const metadata: Metadata = {
  title: "Digital Health Technologies - Vanshika Sharma",
  description:
    "An academic study of U.S. electronic prescribing (eRx) adoption across urban and rural counties, prescription volume, and provider roles.",
};

const GALLERY_ASSETS = [
  {
    file: "dht-urban-rural.png",
    title: "Urban vs Rural",
    caption: "Urban areas adopt eRx more than rural ones.",
  },
  {
    file: "dht-volume.png",
    title: "Volume vs eRx",
    caption: "Higher prescribing states also use more eRx.",
  },
  {
    file: "dht-providers.png",
    title: "NP vs PA",
    caption: "Provider mix varies, so rollout should too.",
  },
] as const;

export default function DigitalHealthPage() {
  const projectsDir = path.join(process.cwd(), "public/projects");

  const paperCandidates = [
    "dht-research-paper.pdf",
    "dht-paper.pdf",
    "research-paper.pdf",
  ];
  const paperFile = paperCandidates.find((file) =>
    fs.existsSync(path.join(projectsDir, file)),
  );
  const paperSrc = paperFile ? `/projects/${paperFile}` : null;

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

  return <DigitalHealthCaseStudy paperSrc={paperSrc} gallery={gallery} />;
}
