import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import { OrbitXCaseStudy } from "@/components/projects/OrbitXCaseStudy";

export const metadata: Metadata = {
  title: "Wildfire Mapping and Analysis in Alberta - Vanshika Sharma",
  description:
    "OrbitX Datathon winning project mapping Alberta wildfires from NASA FIRMS MODIS data with climate context and Folium visualizations.",
};

export default function OrbitXPage() {
  const deckPath = path.join(
    process.cwd(),
    "public/projects/orbitx-datathon-ppt.pdf",
  );
  const deckSrc = fs.existsSync(deckPath)
    ? "/projects/orbitx-datathon-ppt.pdf"
    : null;

  return <OrbitXCaseStudy deckSrc={deckSrc} />;
}
