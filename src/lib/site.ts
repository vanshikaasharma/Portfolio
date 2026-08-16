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
  { label: "Home", href: "/#top" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
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
  slug: string;
  title: string;
  description: string;
  highlights: string[];
  tags: string[];
  image?: string;
  images?: string[];
  liveUrl?: string;
  repoUrl?: string;
  /** Optional media label for interactive / XR / Unity work */
  media?: "web" | "unity" | "xr" | "spatial" | "interactive";
  detail?: {
    summary?: string;
    problem?: string;
    solution?: string;
    impact?: string;
    process?: string;
    technical?: string;
    architecture?: string[];
    features?: string[];
    dataModel?: string;
    challenges?: string;
    outcomes?: string;
    nextSteps?: string;
  };
};

export type ProjectCategory = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  projects: Project[];
};

export const projectCategories: ProjectCategory[] = [
  {
    id: "products-platforms",
    title: "Products & Platforms",
    subtitle: "Software Engineering · Full-Stack · Systems",
    description:
      "Building end-to-end applications with a focus on functionality, architecture, and scalable user experiences.",
    projects: [
      {
        slug: "reverie",
        title: "Reverie",
        description:
          "A spoiler-safe social reading platform that lets readers discuss books without seeing content beyond their current reading progress.",
        highlights: [
          "Progress-gated chapter discussions",
          "Private and public book clubs",
          "Book discovery and voting",
        ],
        tags: ["React", "TypeScript", "Node.js", "PostgreSQL"],
        detail: {
          summary:
            "Reverie is a social reading product designed around spoiler safety. Readers can join clubs, discuss chapters, and discover books while staying aligned to each member’s reading progress.",
          process:
            "Started from the spoiler problem in online book communities, then mapped club workflows, discussion permissions, and discovery loops into a full-stack product architecture.",
          technical:
            "Built as a React and TypeScript client with a Node.js API and PostgreSQL data model for users, clubs, progress states, and proposal voting.",
          challenges:
            "Designing permission rules that feel invisible to the reader while remaining reliable across clubs, progress states, and shared discussion threads.",
          outcomes:
            "A coherent product direction for spoiler-safe social reading, with clear club mechanics and a scalable foundation for membership and discussion features.",
        },
      },
      {
        slug: "rackd",
        title: "Rackd",
        description:
          "Inventory management for resellers selling across multiple marketplaces.",
        highlights: [
          "Multi-platform inventory management",
          "Sales logging and profit tracking",
          "Delist reminders after an item sells",
        ],
        tags: [
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Neon PostgreSQL",
          "NextAuth",
          "Vercel",
        ],
        liveUrl: "https://rackd-seven.vercel.app",
        repoUrl: "https://github.com/vanshikaasharma/Rackd",
      },
      {
        slug: "e-restaurant-manager",
        title: "E-Restaurant Manager",
        description:
          "An operations platform for restaurants to manage menus, orders, and day-to-day service workflows in one connected system.",
        highlights: [
          "Centralized menu and order management",
          "Service workflows built for daily restaurant operations",
          "Connected systems view for front-of-house and kitchen needs",
        ],
        tags: ["Full-Stack", "Systems", "Web"],
        detail: {
          summary:
            "E-Restaurant Manager brings menu, order, and service coordination into a single platform designed for operational clarity.",
          process:
            "Focused on restaurant service loops first—menu updates, order handoff, and status visibility—before expanding into broader management tooling.",
          technical:
            "Structured as a full-stack web system with shared state across operational views and a modular foundation for future restaurant integrations.",
          challenges:
            "Keeping workflows fast and readable under real service pressure without overcomplicating the interface.",
          outcomes:
            "A grounded operations product concept for restaurants that reduces context-switching across daily service tasks.",
        },
      },
      {
        slug: "expense-tracker",
        title: "Expense Tracker",
        description:
          "A personal finance application for logging spending, organizing categories, and reviewing financial patterns over time.",
        highlights: [
          "Fast expense logging and categorization",
          "Clear views of spending patterns over time",
          "Lightweight structure for ongoing personal budgeting",
        ],
        tags: ["Full-Stack", "Web", "Data"],
        detail: {
          summary:
            "Expense Tracker helps individuals capture spending quickly and review where money goes without a heavyweight finance tool.",
          process:
            "Designed around the daily habit of logging expenses, then layered category organization and trend review for longer-term insight.",
          technical:
            "Built as a full-stack web application with a data model focused on transactions, categories, and time-based summaries.",
          challenges:
            "Balancing speed of entry with enough structure to make later analysis useful.",
          outcomes:
            "A simple, maintainable finance tracker that supports both quick capture and clearer spending reflection.",
        },
      },
    ],
  },
  {
    id: "data-intelligence",
    title: "Data & Intelligence",
    subtitle: "Machine Learning · Predictive Modeling · Data Science",
    description:
      "Using data, models, and computational methods to uncover patterns, make predictions, and solve complex problems.",
    projects: [
      {
        slug: "bc-collision-predictor",
        title: "BC Collision Predictor",
        description:
          "An ML-powered platform that scores street-level crash risk from 953K+ ICBC records, with hotspot maps and municipality insights.",
        highlights: [
          "Street-level crash risk scoring from large-scale ICBC data",
          "Hotspot mapping for high-risk corridors",
          "Municipality-facing insights through a Streamlit dashboard",
        ],
        tags: ["Python", "XGBoost", "Streamlit", "Time Series"],
        detail: {
          summary:
            "BC Collision Predictor turns historical crash data into actionable street-level risk scores and visual intelligence for decision-makers.",
          process:
            "Started from raw ICBC records, engineered spatial and temporal features, then translated model outputs into maps and municipal summaries.",
          technical:
            "Used Python and XGBoost for predictive modeling, with Streamlit for interactive exploration of risk scores and hotspot patterns.",
          challenges:
            "Working across noisy geospatial records while keeping predictions interpretable enough for municipal use.",
          outcomes:
            "A predictive risk platform that surfaces collision hotspots and supports more informed local safety analysis.",
        },
      },
      {
        slug: "aqx-sports",
        title: "AQX Sports",
        description:
          "A sports intelligence project applying predictive modeling and performance data to surface patterns that support better decision-making.",
        highlights: [
          "Predictive modeling on sports performance signals",
          "Pattern discovery across player and match data",
          "Decision-oriented insights for coaches and analysts",
        ],
        tags: ["Machine Learning", "Python", "Sports Analytics"],
        detail: {
          summary:
            "AQX Sports explores how predictive models and performance data can turn athletic signals into clearer competitive insights.",
          process:
            "Framed the problem around decision support, then experimented with feature sets and models that highlight meaningful performance patterns.",
          technical:
            "Developed with Python-based machine learning workflows tailored to sports analytics use cases.",
          challenges:
            "Extracting stable, actionable signals from noisy performance data without overfitting to short-term variance.",
          outcomes:
            "A sports intelligence direction focused on prediction, pattern recognition, and practical decision support.",
        },
      },
      {
        slug: "digital-health-studies",
        title: "Digital Health Studies",
        description:
          "A data-driven study of electronic prescription adoption across U.S. states, analyzing over 4 million healthcare records.",
        highlights: [
          "Analysis of 4M+ healthcare records",
          "Geographic and provider-type disparity findings",
          "Clear visual storytelling for eRx adoption patterns",
        ],
        tags: ["Python", "MongoDB", "SQL", "Matplotlib", "Seaborn"],
        repoUrl: "https://github.com/vanshikaasharma/CPSC368_Project.git",
        detail: {
          summary:
            "Digital Health Studies investigates how electronic prescription adoption varies across states and provider types using large-scale healthcare data.",
          process:
            "Combined database querying, statistical exploration, and visualization to move from raw records to disparity-focused findings.",
          technical:
            "Used Python with MongoDB and SQL for data access, alongside Matplotlib and Seaborn for analytical visualization.",
          challenges:
            "Making sense of a multi-million-record dataset while keeping geographic and provider comparisons rigorous and readable.",
          outcomes:
            "A study that clarifies where eRx adoption diverges and why those differences matter for digital health equity.",
        },
      },
    ],
  },
  {
    id: "insights-analytics",
    title: "Insights & Analytics",
    subtitle: "Data Analysis · Visualization · Decision-Making",
    description:
      "Turning raw and complex datasets into clear insights, visual stories, and actionable recommendations.",
    projects: [
      {
        slug: "ubc-bolt-peak-mountain-resort",
        title: "UBC BOLT — Peak Mountain Resort",
        description:
          "An analytics engagement for Peak Mountain Resort that translates operational and visitor data into clear recommendations for decision-makers.",
        highlights: [
          "Operational and visitor data synthesis",
          "Decision-ready recommendations for resort leadership",
          "Visual storytelling tailored to business stakeholders",
        ],
        tags: ["Data Analysis", "Visualization", "Consulting"],
        detail: {
          summary:
            "This UBC BOLT engagement helped Peak Mountain Resort turn operational and visitor data into insights leadership could use.",
          process:
            "Moved from exploratory analysis to stakeholder-facing recommendations, emphasizing clarity over complexity.",
          technical:
            "Combined data analysis and visualization techniques suited to consulting-style deliverables and executive review.",
          challenges:
            "Distilling messy operational data into a small set of recommendations that feel both credible and actionable.",
          outcomes:
            "A concise analytics narrative that supports better resort decision-making around visitors and operations.",
        },
      },
    ],
  },
  {
    id: "competitions",
    title: "Competitions",
    subtitle: "Hackathons · Datathons · Timed Builds",
    description:
      "Time-boxed competitions where product thinking, data, and engineering come together under pressure.",
    projects: [
      {
        slug: "orbitx-datathon",
        title: "OrbitX Datathon",
        description:
          "Mapped high-risk wildfire zones in Alberta using NASA satellite data and Canadian burn-area boundaries to support community preparedness.",
        highlights: [
          "Winner at UBC Orbit OrbitX Datathon",
          "Integrated NASA MODIS/VIIRS wildfire data",
          "Proposed early-warning ideas for community response",
        ],
        tags: ["Machine Learning", "Geospatial", "Python"],
        detail: {
          summary:
            "OrbitX Datathon focused on translating satellite and burn-area data into wildfire risk maps and preparedness recommendations for Alberta communities.",
          process:
            "Layered remote sensing data with local boundary and population context to identify high-risk zones and communication opportunities.",
          technical:
            "Built geospatial analysis workflows in Python, combining wildfire observations with climate and vegetation signals.",
          challenges:
            "Aligning heterogeneous geospatial datasets into a coherent risk narrative that communities could act on.",
          outcomes:
            "A datathon-winning direction for early warning and wildfire preparedness grounded in satellite intelligence.",
        },
      },
      {
        slug: "gnec-hackathon-2025",
        title: "GNEC Hackathon 2025",
        description:
          "Built a full-stack legal assistance platform with an AI chatbot, anonymous peer support, and lawyer matching focused on gender equality and reduced inequalities.",
        highlights: [
          "AI chatbot for real-time legal guidance and resources",
          "Anonymous community support and lawyer matching",
          "Engagement-focused product flows for social-impact users",
        ],
        tags: ["Full-Stack", "AI", "SDG"],
        detail: {
          summary:
            "GNEC Hackathon 2025 centered on building a legal assistance product that combines AI guidance, peer support, and lawyer matching around equity-focused SDG themes.",
          process:
            "Scoped user needs around access to legal information, then mapped chatbot, community, and matching flows into a cohesive product experience.",
          technical:
            "Delivered as a full-stack application with AI-assisted guidance and role-aware support features for seekers and community participants.",
          challenges:
            "Balancing anonymity, trust, and useful guidance inside a short hackathon build window.",
          outcomes:
            "A social-impact platform concept that paired legal support with community connection and measurable engagement improvements.",
        },
      },
    ],
  },
  {
    id: "interfaces-experiences",
    title: "Interfaces & Experiences",
    subtitle: "UI/UX · HCI · Product Design · Interactive Technology",
    description:
      "Designing thoughtful digital experiences at the intersection of technology, usability, and human interaction.",
    projects: [
      {
        slug: "neighbourhood-notebook",
        title: "Neighbourhood Notebook",
        description:
          "A community-centered interface for capturing and sharing local stories, designed around clarity, trust, and everyday usability.",
        highlights: [
          "Local storytelling flows built for everyday use",
          "Interface patterns centered on trust and clarity",
          "Community sharing without unnecessary complexity",
        ],
        tags: ["UI/UX", "HCI", "Product Design"],
        media: "web",
        detail: {
          summary:
            "Neighbourhood Notebook is an interface concept for communities to collect and share local stories in a calm, trustworthy way.",
          process:
            "Grounded the design in HCI principles—low friction contribution, readable browsing, and cues that support community trust.",
          technical:
            "Explored as a product design and interaction system with room to extend into web, interactive media, or future spatial formats.",
          challenges:
            "Making contribution feel welcoming without creating noisy or overwhelming community feeds.",
          outcomes:
            "A clear product direction for neighbourhood storytelling with a flexible foundation for future interactive work.",
        },
      },
      {
        slug: "leftover-love",
        title: "Leftover Love",
        description:
          "A food-sharing platform that connects providers with recipients through listings, emergency requests, and map-based location services.",
        highlights: [
          "Role-based flows for providers and recipients",
          "Real-time listings and emergency request support",
          "Map-based discovery for nearby food sharing",
        ],
        tags: [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Context API",
          "OpenStreetMap",
        ],
        repoUrl: "https://github.com/vanshikaasharma/LeftoverLove",
        media: "web",
        detail: {
          summary:
            "Leftover Love connects food providers and recipients through a practical sharing platform designed around urgency, location, and trust.",
          process:
            "Designed role-based journeys first, then layered listing, request, and mapping features around real food-sharing scenarios.",
          technical:
            "Built with React, TypeScript, Tailwind CSS, Context API state management, and OpenStreetMap for location services.",
          challenges:
            "Supporting both everyday listings and emergency requests without making the interface feel chaotic.",
          outcomes:
            "A usable community food-sharing product that pairs social impact goals with clear interaction design.",
        },
      },
      {
        slug: "fairforward",
        title: "FairForward",
        description:
          "An interactive experience focused on equitable access and user-centered flows at the intersection of design and human-computer interaction.",
        highlights: [
          "Equity-centered interaction design",
          "User flows shaped around access and clarity",
          "Interactive experience bridging product and HCI",
        ],
        tags: ["UI/UX", "HCI", "Interactive"],
        media: "interactive",
        detail: {
          summary:
            "FairForward explores how interactive product design can support more equitable access through carefully considered user flows.",
          process:
            "Used HCI framing to evaluate access barriers, then translated those insights into interaction patterns and experience structure.",
          technical:
            "Positioned as an interactive experience with a flexible media model that can grow into web, Unity, XR, or spatial work over time.",
          challenges:
            "Keeping equity goals concrete in interaction decisions rather than treating them as abstract principles.",
          outcomes:
            "A design-led interactive project that connects usability, access, and human-centered product thinking.",
        },
      },
    ],
  },
];

export function getAllProjects(): Project[] {
  return projectCategories.flatMap((category) => category.projects);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((project) => project.slug === slug);
}

export function getProjectCategory(
  slug: string,
): ProjectCategory | undefined {
  return projectCategories.find((category) =>
    category.projects.some((project) => project.slug === slug),
  );
}

export type ExperienceType =
  | "Co-op"
  | "Internship"
  | "Part-time"
  | "Student Leadership"
  | "Student Organization"
  | "Volunteer"
  | "Research"
  | "Project Leadership";

export type Experience = {
  company: string;
  role: string;
  type: ExperienceType;
  period: string;
  description?: string;
  tags: string[];
  /** Metadata label above the tag line */
  metaLabel?: "Built With" | "Focus";
  highlights: string[];
  initials?: string;
};

export const experience: Experience[] = [
  {
    company: "DarkVision Technologies Inc.",
    role: "Data Analyst",
    type: "Co-op",
    period: "May 2026 – Present",
    metaLabel: "Built With",
    tags: [
      "Python",
      "React",
      "FastAPI",
      "CLIP",
      "Vector Search",
      "Power BI",
      "SQL",
    ],
    highlights: [
      "Analyzed complex ultrasound imaging data and built Python automation to streamline feature validation, anomaly analysis, and recurring analytical workflows.",
      "Built a full-stack internal reference library using React, FastAPI, CLIP, and vector search, enabling analysts to retrieve visually and semantically similar historical examples for more consistent analysis and quality control.",
      "Supported machine learning research, software QA, and analytics initiatives, contributing to model-development workflows, product validation, and Power BI dashboards for internal reporting and decision-making.",
    ],
  },
  {
    company: "UBC Quantum Club",
    role: "VP Technical",
    type: "Student Leadership",
    period: "2025 – 2026",
    metaLabel: "Focus",
    tags: ["Web Development", "Technical Events", "Community"],
    highlights: [
      "Oversee website and Discord platforms supporting 290+ members",
      "Manage technical logistics for club events and hybrid workshops",
      "Support learning and collaboration in quantum computing",
    ],
  },
  {
    company: "UBC IEEE",
    role: "Marketing Coordinator",
    type: "Student Leadership",
    period: "Sept 2025 – April 2026",
    metaLabel: "Focus",
    tags: [
      "Marketing Strategy",
      "Content Design",
      "Outreach",
      "Event Promotion",
    ],
    highlights: [
      "Led marketing and promotional strategy for club events and technical workshops",
      "Designed digital content and campaign materials to improve student engagement",
      "Coordinated outreach across social channels and worked with technical executives on event promotion",
    ],
  },
  {
    company: "Best Buy",
    role: "Customer Service Representative",
    type: "Part-time",
    period: "Feb 2023 – May 2023",
    metaLabel: "Focus",
    tags: [
      "Customer Experience",
      "Communication",
      "Sales",
      "Problem Solving",
    ],
    highlights: [
      "Supported customers with product, service, and account needs in a high-volume retail environment",
      "Contributed to team customer-satisfaction performance and consistently drove membership/service enrollments",
      "Built strong communication, problem-solving, and customer-facing skills",
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
