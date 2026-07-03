export const site = {
  name: "Your Name",
  role: "Software Engineer",
  intro:
    "Full-stack engineer focused on clean architecture, great developer experience, and products people love to use. Currently open to new opportunities.",
  email: "you@example.com",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/yourhandle",
    linkedin: "https://linkedin.com/in/yourhandle",
    twitter: "https://twitter.com/yourhandle",
  },
} as const;

export const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Projects", href: "#projects" },
] as const;

export type Project = {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  liveUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Rackd",
    description:
      "A full-stack inventory dashboard for clothing resellers to manage multi-platform listings, sales, and profit tracking from one interface — with delist alerts that reduce double-selling risk.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Amazon Aurora PostgreSQL",
      "Vercel",
    ],
  },
  {
    title: "Leftover Love",
    description:
      "A food-sharing platform that connects providers with recipients through role-based auth, real-time listings, emergency requests, and map-based location services.",
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Context API",
      "OpenStreetMap",
    ],
  },
  {
    title: "Digital Health Technologies Study",
    description:
      "A data-driven study of electronic prescription adoption across U.S. states, analyzing over 4 million healthcare records to uncover geographic and provider-type disparities in eRx usage.",
    tags: ["Python", "MongoDB", "SQL", "Matplotlib", "Seaborn"],
  },
  {
    title: "BC Road Risk Intelligence Platform",
    description:
      "An ML-powered platform that scores street-level crash risk from 953K+ ICBC records, with hotspot maps and municipality insights delivered through a Streamlit dashboard.",
    tags: ["Python", "XGBoost", "Streamlit", "Time Series"],
  },
];
