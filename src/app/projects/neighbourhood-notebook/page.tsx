import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import { NeighbourhoodNotebookCaseStudy } from "@/components/projects/NeighbourhoodNotebookCaseStudy";

export const metadata: Metadata = {
  title: "Neighbourhood Notebook - Vanshika Sharma",
  description:
    "A mobile UX concept that helps short-term residents in Vancouver discover authentic local spots through a travel-journal metaphor, vibe filters, and usability-tested review flows.",
};

export default function NeighbourhoodNotebookPage() {
  const projectsDir = path.join(process.cwd(), "public/projects");

  const pitchFile = [
    "neighbourhood-notebook-pitch.pdf",
    "neighbourhood-notebook-shark-tank.pdf",
  ].find((file) => fs.existsSync(path.join(projectsDir, file)));

  const lofiFile = [
    "neighbourhood-notebook-lofi.pdf",
    "neighbourhood-notebook-lofi-sketches.pdf",
  ].find((file) => fs.existsSync(path.join(projectsDir, file)));

  return (
    <NeighbourhoodNotebookCaseStudy
      pitchSrc={pitchFile ? `/projects/${pitchFile}` : null}
      lofiSrc={lofiFile ? `/projects/${lofiFile}` : null}
    />
  );
}
