export const site = {
  name: "Vanshika Sharma",
  role: "CS Student at UBC",
  intro:
    "Computer Science student at UBC learning by building full-stack products and data-driven tools. Previously a Data Analyst Co-op at DarkVision Technologies, working across Python automation, ML workflows, and product QA.",
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
    "I'm a Computer Science student at UBC drawn to software that helps communities thrive and makes everyday connection feel easier.",
    "I treat every project as a chance to stretch: ship something real, listen closely, and improve it. My time at DarkVision sharpened how I work with data and teams, and that same drive shows up in the products I build on my own.",
    "I stay curious, move with intention, and keep learning in public. I want the things I make to matter to someone beyond myself.",
  ],
  facts: [
    { label: "School", value: "UBC - BSc Computer Science with AI" },
    { label: "Expected Grad", value: "May 2028" },
    { label: "Location", value: "Vancouver, BC" },
    { label: "Recent Role", value: "Data Analyst at DarkVision" },
  ],
} as const;

export type StampInk = "gold" | "ube" | "pink" | "cadet" | "vermilion";

export type TravelStamp = {
  place: string;
  region: string;
  year: string;
  note?: string;
  ink: StampInk;
  /** degrees of rotation for a pressed-ink look */
  tilt?: number;
  icon:
    | "usa"
    | "canada"
    | "japan"
    | "singapore"
    | "russia"
    | "dubai"
    | "india"
    | "london"
    | "malaysia"
    | "thailand"
    | "hongkong"
    | "macau";
  subtext?: string;
};

/** Places collected in the About passport stamp book. 12 countries (6 per row). */
export const travelStamps: TravelStamp[] = [
  // Row 1 (6 destinations)
  {
    place: "USA",
    region: "USA · ENTRY",
    year: "VISA",
    note: "United States",
    ink: "gold",
    tilt: -5,
    icon: "usa",
  },
  {
    place: "CANADA",
    region: "CAN · CAN",
    year: "ENTRY",
    note: "Great White North",
    ink: "vermilion",
    tilt: 4,
    icon: "canada",
  },
  {
    place: "JAPAN",
    region: "NIPPON · 日本",
    year: "2025",
    note: "Tokyo & Kyoto",
    ink: "pink",
    tilt: -4,
    icon: "japan",
  },
  {
    place: "SINGAPORE",
    region: "SGP · ENTRY",
    year: "VISA",
    note: "Lion City",
    ink: "ube",
    tilt: 5,
    icon: "singapore",
  },
  {
    place: "RUSSIA",
    region: "RUS · РОССИЯ",
    year: "ENTRY",
    note: "Eurasia",
    ink: "cadet",
    tilt: -6,
    icon: "russia",
  },
  {
    place: "DUBAI",
    region: "UAE · DXB",
    year: "ENTRY",
    note: "United Arab Emirates",
    ink: "gold",
    tilt: 4,
    icon: "dubai",
  },
  // Row 2 (6 destinations)
  {
    place: "INDIA",
    region: "IND · BHARAT",
    year: "ENTRY",
    note: "Subcontinent",
    ink: "gold",
    tilt: -4,
    icon: "india",
  },
  {
    place: "LONDON",
    region: "UK · GBR",
    year: "ENTRY",
    note: "United Kingdom",
    ink: "pink",
    tilt: 5,
    icon: "london",
  },
  {
    place: "MALAYSIA",
    region: "MYS · KUL",
    year: "ENTRY",
    note: "Southeast Asia",
    ink: "ube",
    tilt: -5,
    icon: "malaysia",
  },
  {
    place: "THAILAND",
    region: "THA · SIAM",
    year: "ENTRY",
    note: "Land of Smiles",
    ink: "vermilion",
    tilt: 4,
    icon: "thailand",
  },
  {
    place: "HONG KONG",
    region: "HKG · 香港",
    year: "ENTRY",
    note: "Pearl of the Orient",
    ink: "pink",
    tilt: -4,
    icon: "hongkong",
  },
  {
    place: "MACAU",
    region: "MAC · 澳門",
    year: "ENTRY",
    note: "Historic Centre",
    ink: "ube",
    tilt: 5,
    icon: "macau",
  },
];

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Languages",
    items: [
      "Python",
      "TypeScript",
      "Java",
      "SQL",
      "JavaScript",
      "R",
      "HTML",
      "CSS",
      "C",
      "C++",
    ],
  },
  {
    category: "Frameworks",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "Flask",
      "Vite",
      "Tailwind CSS",
      "Streamlit",
      "Swing",
    ],
  },
  {
    category: "Data & ML",
    items: [
      "Pandas",
      "NumPy",
      "scikit-learn",
      "XGBoost",
      "SciPy",
      "Seaborn",
      "Matplotlib",
      "Plotly",
      "Folium",
    ],
  },
  {
    category: "Tools",
    items: [
      "Git",
      "Jupyter",
      "VS Code",
      "Figma",
      "Tableau",
      "Power BI",
      "PostgreSQL",
      "SQLite",
      "LaTeX",
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
  /** Shown on the project card when built at a competition */
  hackathon?: {
    name: string;
    badge?: string;
  };
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
          "A Java desktop application for restaurant management, reservations, ordering, and reviews.",
        highlights: [
          "Owner tools for restaurants, menus, and review visibility",
          "Customer flows for browsing, reservations, orders, and ratings",
          "JSON file persistence with event logging across system changes",
        ],
        tags: ["Java", "Swing", "org.json", "JUnit"],
        repoUrl: "https://github.com/vanshikaasharma/E-Restaurant-Manager",
      },
      {
        slug: "fairforward",
        title: "FairForward",
        description:
          "A legal support platform that connects people to AI guidance, safe spaces, pro bono lawyers, and educational resources.",
        highlights: [
          "Mr. Hootsworth AI assistant for Canadian legal guidance",
          "Safe spaces map plus pro bono lawyer matching",
          "Legal glossary, community support, and resource hub",
        ],
        tags: ["React", "TypeScript", "Flask", "Tailwind", "SQLite"],
        repoUrl: "https://github.com/ParishaS2003/FairForward",
        liveUrl: "https://devpost.com/software/fair-forward",
        media: "web",
        hackathon: {
          name: "GNEC Hackathon 2025",
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
          "Lower Mainland ICBC crash analytics with XGBoost risk scoring, walk-forward holdout, and a Streamlit dashboard for hotspots and street lookup.",
        highlights: [
          "~953k crash records cleaned into ~739k street/time contexts",
          "XGBoost classifier and regressor with next-year holdout (ROC-AUC ~0.78)",
          "Streamlit pages for maps, municipality analytics, and street risk lookup",
        ],
        tags: ["Python", "XGBoost", "Streamlit", "Pandas", "Plotly"],
        image: "/projects/bc-collision-executive.png",
        repoUrl:
          "https://github.com/vanshikaasharma/bc-collision-risk-predictor",
        detail: {
          summary:
            "BC Road Risk Intelligence Platform analyzes ICBC-reported crashes in the Lower Mainland (2021-2025), scores where and when risk clusters, and checks generalization with walk-forward next-year holdout.",
          process:
            "Cleaned the ICBC export, grouped crashes into city/street/month/hour contexts with severity-weighted risk scores, trained classifier and regressor models, then shipped results in a multi-page Streamlit dashboard.",
          technical:
            "Python pipeline with pandas, scikit-learn, XGBoost, joblib, Plotly, and Streamlit. Temporal holdout trains on past years and tests only the next year; dashboard models use all years for interactive street lookup.",
          challenges:
            "Framing risk at context level rather than per-driver, keeping holdout honest without leaking year into features, and turning large open-data exports into municipal-facing views.",
          outcomes:
            "A dashboard covering executive KPIs, hotspot maps, municipality comparisons, and street-level % high-risk plus activity score lookups, with stable holdout metrics across 2024 and 2025 tests.",
        },
      },
      {
        slug: "nba-mvp-predictor",
        title: "NBA MVP Predictor",
        description:
          "Predicts MVP vote share from real NBA stats with a Streamlit dashboard for race cards, player comparison, and model insights.",
        highlights: [
          "Random forest regression on vote share across 24 NBA seasons",
          "Season-by-season cross-validation to avoid leaking future data",
          "Interactive dashboard with radar charts, feature importance, and top-3 MVP race",
        ],
        tags: ["Python", "scikit-learn", "Streamlit", "Plotly", "Pandas"],
        liveUrl: "https://devpost.com/software/nba-mvp-predictor",
        hackathon: {
          name: "AQX Sports Analytics Data Bowl",
        },
        detail: {
          summary:
            "NBA MVP Predictor estimates MVP vote share (0–100%) for qualified players each season, turning Basketball Reference stats into a data-backed MVP race dashboard.",
          process:
            "Scraped 24 seasons of player, team, and historical MVP voting data, compared linear, ridge, random forest, and gradient boosting models with temporal validation, then shipped results in Streamlit.",
          technical:
            "Built with Python, pandas, scikit-learn, Streamlit, and Plotly. Random forest led holdout metrics (R² ≈ 0.80) using 24 features spanning scoring, efficiency, playmaking, defense, and team win %.",
          challenges:
            "Handling Basketball Reference HTML table changes across eras, framing MVP as a spectrum rather than a binary label, and making advanced stats readable in the UI.",
          outcomes:
            "A season explorer (2001–2024) that surfaces top candidates, compares players, and shows which stats the model weights most for MVP voting.",
        },
      },
      {
        slug: "digital-health-technologies",
        title: "Digital Health Technologies",
        description:
          "An academic study of U.S. electronic prescribing (eRx) adoption across urban and rural counties, prescription volume, and provider roles.",
        highlights: [
          "Higher eRx adoption in urban counties than rural ones",
          "Prescription volume and eRx use rise together across states",
          "NP and PA workforce mix should shape how eRx is rolled out",
        ],
        tags: ["Python", "SQL", "Pandas", "SciPy", "Seaborn"],
        repoUrl:
          "https://github.com/vanshikaasharma/Digital-Health-Technologies",
      },
      {
        slug: "orbitx-wildfire-risk",
        title: "Wildfire Mapping and Analysis in Alberta",
        description:
          "Maps Alberta wildfires from NASA FIRMS MODIS data, joins climate records, and surfaces patterns that matter for preparedness.",
        highlights: [
          "Folium map of Alberta wildfire detections from NASA FIRMS",
          "City-level risk view plus lightning vs human-cause trends",
          "Climate merges and factor analysis for LT, RC, and RS drivers",
        ],
        tags: ["Python", "Pandas", "Folium", "scikit-learn", "Seaborn"],
        repoUrl: "https://github.com/vanshikaasharma/orbitX-datathon",
        hackathon: {
          name: "OrbitX Datathon",
          badge: "Winner",
        },
        detail: {
          summary:
            "OrbitX Datathon winning project that maps Alberta wildfire occurrences with NASA Natural Hazards data and historical climate records to support better preparation, response, and recovery.",
          process:
            "Filtered MODIS Canada detections to Alberta bounds, cleaned and explored brightness and confidence signals, labeled nearest cities with geopy, merged monthly climate stations, and visualized hotspots with Folium and Seaborn.",
          technical:
            "Jupyter workflow with pandas, numpy, scikit-learn (RandomForestClassifier pipeline), matplotlib, seaborn, Folium, and geopy. Datasets include NASA FIRMS MODIS and Alberta climate station CSVs.",
          challenges:
            "Aligning satellite detections with climate stations across space and time, and turning noisy geospatial joins into clear community-facing insights.",
          outcomes:
            "Interactive Alberta wildfire map, city distribution views, and analysis highlighting lightning, recreation, and residents as key drivers, with a long-run drop in burned area and a rise in human-caused incidents.",
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
          "A mobile UX concept that helps short-term residents in Vancouver discover authentic local spots through a travel-journal metaphor, vibe filters, and familiar review patterns.",
        highlights: [
          "Filter, bookmark, review, and publishable notebook flows in mid-fi Figma",
          "Lo-fi sketches and cognitive walkthroughs before a 9-participant usability study",
          "Wizard-of-Oz search/recs; polished notebooks and ratings for trust cues",
        ],
        tags: ["UI/UX", "HCI", "Figma", "Usability Testing"],
        repoUrl: "https://github.com/vanshikaasharma/Neighbourhood-Notebook",
        liveUrl:
          "https://www.figma.com/proto/Ewt68oRb8tzPgGn85Pppo4/Neighborhood-Notebook-Mid-fi-Prototype?node-id=15-1489&t=Uc3F0lKNuIxisSzu-1",
        media: "web",
        detail: {
          summary:
            "Neighbourhood Notebook is a mid-fi mobile prototype for short-term residents who need authentic Vancouver discovery without cognitive overload, framed as a personal travel notebook.",
          problem:
            "Newcomers and short-term residents have limited time and local knowledge. Dense travel apps make it hard to find trustworthy, personalised places quickly.",
          solution:
            "A journal-metaphor interface with neighbourhood collections, a Wander Feed, feeling-based filters, ratings, reviews, and save flows designed for on-the-go use.",
          process:
            "Shark Tank pitch, lo-fi sketches, cognitive walkthroughs, prototyping plan (core vs Wizard-of-Oz features), 3 pilots, mid-fi Figma, then a 9-participant usability study.",
          technical:
            "Designed in Figma with FigJam concepting. Core flows were interactive; search and recommendations were Wizard-of-Oz for study scenarios. Evaluation used think-aloud observation and a Qualtrics post-task questionnaire.",
          challenges:
            "Piloting exposed Wander Feed discoverability, crowded feeling filters, and review-entry confusion. Those were fixed before the main study. Remote laptop sessions limited mobile-specific observation.",
          outcomes:
            "Participants generally found filtering and reviewing intuitive. Recommendations include tighter filters, price range, tag cleanup, and places like ones you have loved elsewhere.",
          nextSteps:
            "Prioritise cross-city affinity recommendations, refine emotion-filter IA, and validate remaining flows on real mobile devices.",
        },
      },
      {
        slug: "leftover-love",
        title: "Leftover Love",
        description:
          "A hyperlocal food-sharing web app that connects surplus groceries with nearby seekers before expiry.",
        highlights: [
          "Provider and seeker roles for listing and claiming food",
          "Expiry-aware listings with map-based pickup discovery",
          "Soil Credits when surplus is redirected to community partners",
        ],
        tags: ["React", "TypeScript", "Vite", "Tailwind", "OpenStreetMap"],
        repoUrl: "https://github.com/vanshikaasharma/LeftoverLove",
        liveUrl: "https://devpost.com/software/leftover-love-bw94ok",
        media: "web",
        hackathon: {
          name: "youCode 2025",
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
    period: "May 2026 – Aug 2026",
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
      "Mapped Alberta wildfires from NASA FIRMS MODIS data, joined climate records, and surfaced lightning, recreation, and resident drivers for community preparedness.",
    tags: ["Python", "Pandas", "Folium", "scikit-learn", "Seaborn"],
    highlights: [
      "Built an interactive Folium map of Alberta wildfire detections",
      "Merged MODIS points with monthly climate station data",
      "Highlighted LT, RC, and RS as key occurrence factors",
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
