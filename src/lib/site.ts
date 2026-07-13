export const site = {
  name: "Vanshika Sharma",
  role: "CS Student & Data Analyst",
  intro:
    "Computer Science student at UBC building full-stack products and data-driven tools. Currently a Data Analyst Co-op at DarkVision Technologies, working across Python automation, ML workflows, and product QA.",
  email: "vanshikaasharmaa27@gmail.com",
  resumeUrl: "/resume.pdf",
  location: "Vancouver, BC",
  socials: {
    github: "https://github.com/vanshikaasharma",
    linkedin: "https://linkedin.com/in/vanshika-sharma27",
  },
} as const;

export const navLinks = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

export const about = {
  paragraphs: [
    "I'm a Computer Science student at the University of British Columbia with a focus on full-stack development, data analysis, and applied machine learning.",
    "At DarkVision Technologies, I work with ultrasound pipeline data, collaborate with ML researchers, and help ship analyst-facing tooling. Outside class and work, I build products that solve real operational problems — from inventory systems to community platforms.",
    "I'm especially interested in roles where engineering, data, and product thinking overlap.",
  ],
  facts: [
    { label: "School", value: "UBC — BSc Computer Science" },
    { label: "Expected Grad", value: "May 2028" },
    { label: "Location", value: "Vancouver, BC" },
    { label: "Currently", value: "Data Analyst Co-op @ DarkVision" },
  ],
} as const;

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Languages",
    items: ["Java", "Python", "SQL", "R", "Julia", "HTML", "CSS", "C", "C++"],
  },
  {
    category: "Frameworks",
    items: ["React", "Next.js", "Node.js", "Express.js", "Tailwind CSS"],
  },
  {
    category: "Tools",
    items: [
      "Git",
      "VS Code",
      "Jupyter",
      "Figma",
      "Tableau",
      "Power BI",
      "LaTeX",
      "Anaconda",
    ],
  },
];

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
      "Neon PostgreSQL",
      "NextAuth",
      "Vercel",
    ],
    repoUrl: "https://github.com/vanshikaasharma/H0Hackathon.git",
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
    repoUrl: "https://github.com/vanshikaasharma/LeftoverLove",
  },
  {
    title: "Digital Health Technologies Study",
    description:
      "A data-driven study of electronic prescription adoption across U.S. states, analyzing over 4 million healthcare records to uncover geographic and provider-type disparities in eRx usage.",
    tags: ["Python", "MongoDB", "SQL", "Matplotlib", "Seaborn"],
    repoUrl: "https://github.com/vanshikaasharma/CPSC368_Project.git",
  },
  {
    title: "BC Road Risk Intelligence Platform",
    description:
      "An ML-powered platform that scores street-level crash risk from 953K+ ICBC records, with hotspot maps and municipality insights delivered through a Streamlit dashboard.",
    tags: ["Python", "XGBoost", "Streamlit", "Time Series"],
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
  highlights: string[];
  initials: string;
};

export const experience: Experience[] = [
  {
    company: "DarkVision Technologies Inc.",
    role: "Data Analyst (Co-op)",
    period: "Jan 2026 – Present",
    description:
      "Analyzing ultrasound pipeline datasets and collaborating with the ML research team to improve analysis throughput, product quality, and analyst workflows.",
    tags: ["Python", "ML", "Power BI", "QA", "SQL"],
    initials: "DV",
    highlights: [
      "Analyzed 2,000+ weekly ultrasound pipeline datasets with Python automation",
      "Collaborated with the ML research team on model training for a new product",
      "Led internal QA for 7 releases, surfacing 20+ bugs and UX improvements",
      "Co-developed Power BI dashboards for analyst KPIs and anomaly reportability",
    ],
  },
  {
    company: "UBC Quantum Club",
    role: "Vice-President Technical",
    period: "Sept 2025 – Present",
    description:
      "Overseeing digital platforms and technical logistics to support learning, collaboration, and hybrid quantum computing workshops across a growing student community.",
    tags: ["Web", "Discord", "Events", "Leadership"],
    initials: "UQ",
    highlights: [
      "Oversee website and Discord platforms supporting 290+ members",
      "Manage technical logistics for club events and hybrid workshops",
      "Support learning and collaboration in quantum computing",
    ],
  },
];

export type Hackathon = {
  title: string;
  org: string;
  period: string;
  badge?: string;
  description: string;
  highlights: string[];
  tags: string[];
};

export const hackathons: Hackathon[] = [
  {
    title: "OrbitX Datathon",
    org: "UBC Orbit",
    period: "Apr 2025",
    badge: "Winner",
    description:
      "Used NASA MODIS/VIIRS wildfire data and Canadian burn-area boundaries to map high-risk wildfire zones in Alberta and propose early-warning ideas for community preparedness.",
    tags: ["Machine Learning", "Geospatial", "Python"],
    highlights: [
      "Analyzed NASA satellite wildfire data with Canadian National Fire Database boundaries",
      "Integrated climate, vegetation, and population datasets for risk assessment",
      "Proposed early warning solutions for community response",
    ],
  },
  {
    title: "GNEC Hackathon 2025",
    org: "GNEC",
    period: "May 2025",
    description:
      "Built a full-stack legal assistance platform with an AI chatbot, anonymous peer support, and lawyer matching focused on gender equality and reduced inequalities.",
    tags: ["Full-Stack", "AI", "SDG"],
    highlights: [
      "Engineered an AI chatbot for real-time legal guidance and resources",
      "Drove a 48% improvement in user engagement",
      "Implemented anonymous community support and lawyer-matching features",
    ],
  },
];

export const education = {
  school: "University of British Columbia",
  degree: "Bachelor of Science in Computer Science",
  gpa: "86%",
  period: "Expected Graduation: May 2028",
} as const;
