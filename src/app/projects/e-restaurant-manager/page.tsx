import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import { ERestaurantCaseStudy } from "@/components/projects/ERestaurantCaseStudy";

export const metadata: Metadata = {
  title: "E-Restaurant Manager - Vanshika Sharma",
  description:
    "A Java desktop application for restaurant management, reservations, ordering, and reviews.",
};

const PREVIEW_SLIDES = [
  { file: "e-restaurant-preview-1.png", label: "Main Menu" },
  { file: "e-restaurant-owner.png", label: "Owner Options" },
  { file: "e-restaurant-customer.png", label: "Customer Options" },
] as const;

const GALLERY_ASSETS = [
  {
    file: "e-restaurant-menu.png",
    title: "Menu Management",
    caption: "Add menu items with name, category, and price.",
  },
  {
    file: "e-restaurant-preview-2.png",
    title: "Reservations",
    caption: "Book a table with date, time, and guest count.",
  },
  {
    file: "e-restaurant-preview-3.png",
    title: "Reviews",
    caption: "Read customer ratings and comments by restaurant.",
  },
] as const;

export default function ERestaurantPage() {
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
    <ERestaurantCaseStudy previewSlides={previewSlides} gallery={gallery} />
  );
}
