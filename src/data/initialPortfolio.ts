import { PortfolioData } from '../types/portfolio';

export const INITIAL_PORTFOLIO_DATA: PortfolioData = {
  name: "Mark Li",
  // Replace this path with your actual photo: commit a photo to public/images/ and update the path below.
  // Example: "/images/mark-profile.jpg" for a file at public/images/mark-profile.jpg
  photoUrl: "/images/sample-profile.jpg",
  bio: "High-achieving student at Maple Leaf International Academy–Shenzhen with distinguished performance in international mathematics competitions, computer science, and physics. Published researcher, teaching assistant, and founder of multiple school clubs, with a deep commitment to community service, the arts, and endurance athletics.",
  gradeLevel: "Grade 11 • Class of 2027",
  school: "Maple Leaf International Academy–Shenzhen",
  gpa: "AP Distinction Scholar",
  major: "Mathematics & Computer Science",
  heroButtons: {
    resumeText: "Download Resume",
    contactText: "Contact"
  },

  gpaDetails: "Earned the AP Distinction Scholar award for outstanding performance across multiple AP examinations. Achieved perfect scores (5) in AP Calculus AB, Microeconomics, Physics 1, Calculus BC, and Computer Science A. Currently completing AP Physics C: Mechanics, AP Physics C: Electricity & Magnetism, and AP Computer Science Principles.",

  courses: [
    { id: "c1", name: "AP Calculus AB", category: "AP", grade: "5" },
    { id: "c2", name: "AP Microeconomics", category: "AP", grade: "5" },
    { id: "c3", name: "AP Physics 1: Algebra-Based", category: "AP", grade: "5" },
    { id: "c4", name: "AP Calculus BC", category: "AP", grade: "5" },
    { id: "c5", name: "AP Computer Science A", category: "AP", grade: "5" },
    { id: "c6", name: "AP Statistics", category: "AP", grade: "4" },
    { id: "c7", name: "AP Physics C: Mechanics", category: "AP", grade: "In Progress" },
    { id: "c8", name: "AP Physics C: Electricity & Magnetism", category: "AP", grade: "In Progress" },
    { id: "c9", name: "AP Computer Science Principles", category: "AP", grade: "In Progress" },
    { id: "c10", name: "UK Summer School — English, Math & CS (Oxford)", category: "Advanced", grade: "" },
    { id: "c11", name: "AwesomeMath — Counting Strategies, Comp. Geometry, Algebra 2.5", category: "Advanced", grade: "" },
  ],

  distinctions: [
    {
      id: "d1",
      title: "BMO Global Merit Award & Round 2 Qualifier",
      year: "2025",
      description: "Earned the Global Merit Award in the British Mathematical Olympiad, qualified for Round 2, and was selected for the prestigious BMO Asian & Oxford Camp."
    },
    {
      id: "d2",
      title: "China National Gold — Continental Calculus League",
      year: "2025",
      description: "Awarded China National Gold, recognizing exceptional mastery of advanced calculus at the national competitive level."
    },
    {
      id: "d3",
      title: "AMC 12 Global Achievement Roll — Global Top 25%",
      year: "2026",
      description: "Placed in the Global Top 25% and achieved School Third Place on the AMC 12, earning a position on the Global Achievement Roll."
    },
    {
      id: "d4",
      title: "Honor Roll of Distinction — Mathematics League (Full Mark 135)",
      year: "2025",
      description: "Achieved a perfect score of 135 across all Mathematics League contest rounds, earning the Honor Roll of Distinction."
    },
  ],

  recognitions: [
    { id: "r1", title: "Honorary Zhou Enlai Scholarship, Maple Leaf International Academy", date: "2025–2027" },
    { id: "r2", title: "AP Distinction Scholar", date: "2025" },
    { id: "r3", title: "Published Researcher — Applied and Computational Engineering (CONF-CDS 2025)", date: "2025" },
  ],

  certifications: [
    {
      id: "cert1",
      name: "AwesomeMath Summer Program — Level 2 Completion",
      issuer: "AwesomeMath",
      year: "2024–2025",
    },
    {
      id: "cert2",
      name: "UK Summer School — English, Mathematics & Computer Science",
      issuer: "University of Oxford, St Peter's College",
      year: "2024",
    },
    {
      id: "cert3",
      name: "Piano Grade 10 Certification (Highest Level in China)",
      issuer: "China National Music Examination",
      year: "2024",
    },
  ],

  researchProjects: [
    {
      id: "res1",
      title: "The Study of the Solving Methods of the Rubik's Cube and the Analysis of Its Derived Algorithms",
      role: "Co-Author — Algorithm Analysis Lead",
      advisor: "Workshop led by Prof. Ciubotaru, University of Oxford",
      description: "Attended an Abstract Algebra workshop at the University of Oxford led by Professor Ciubotaru, resulting in a co-authored peer-reviewed paper on the mathematical solving methods and derived algorithms behind the Rubik's Cube. Led the algorithm analysis component. Paper accepted in the Application of Machine Learning in Engineering symposium (CONF-CDS 2025) and accepted for publication in Applied and Computational Engineering (Print ISSN: 2755-2721); submitted to the Conference Proceedings Citation Index (CPCI)."
    },
    {
      id: "res2",
      title: "Independent Military Game Design Project",
      role: "Lead Designer & Developer",
      advisor: "Independent Project",
      description: "Designed a military game featuring detailed reward and damage algorithms governing individual player interactions. Used CAD modeling to achieve terrain design with custom textures. Compiled a comprehensive product proposal including a full storyline and plot development."
    },
  ],

  competitions: [
    {
      id: "comp1",
      name: "British Mathematical Olympiad (BMO)",
      year: "2025",
      placement: "Global Merit Award • Round 2 Qualifier • Asian & Oxford Camp",
      description: "Earned the BMO Global Merit Award, qualified for Round 2, and was invited to the BMO Asian & Oxford Camp—among the highest honors available to competing student mathematicians globally.",
    },
    {
      id: "comp2",
      name: "Continental Calculus League",
      year: "2025",
      placement: "China National Gold",
      description: "Awarded China National Gold for exceptional mastery of advanced calculus in a national-level competition.",
    },
    {
      id: "comp3",
      name: "UKMT Senior Mathematical Challenge",
      year: "2025",
      placement: "Gold Award",
      description: "Received the Gold Award from the United Kingdom Mathematics Trust, placing among the top performers in the Senior Mathematical Challenge.",
    },
    {
      id: "comp4",
      name: "Mathematics League Contests",
      year: "2025",
      placement: "Honor Roll of Distinction (Perfect Score: 135)",
      description: "Achieved a perfect score of 135 across all Mathematics League contest rounds, earning the top-tier Honor Roll of Distinction recognition.",
    },
    {
      id: "comp5",
      name: "Euclid Contest — University of Waterloo",
      year: "2025",
      placement: "Top 25% Globally",
      description: "Placed in the global top 25% in the Euclid Contest, demonstrating strong problem-solving ability across advanced pre-university mathematics.",
    },
    {
      id: "comp6",
      name: "Australian Mathematics Competition",
      year: "2024–2025",
      placement: "Distinction Award (Two Consecutive Years)",
      description: "Earned the Distinction Award in two consecutive years, recognizing consistent excellence in mathematical reasoning and competition performance.",
    },
    {
      id: "comp7",
      name: "AMC 12 — American Mathematics Competition",
      year: "2026",
      placement: "Global Achievement Roll • Global Top 25% • School Third Place",
      description: "Placed in the Global Top 25% and achieved School Third Place, earning a position on the Global Achievement Roll.",
    },
    {
      id: "comp8",
      name: "HiMCM — High School Mathematical Contest in Modeling",
      year: "2026",
      placement: "Honorable Mention",
      description: "Led the Math Modeling Club team to an Honorable Mention in the 2025 HiMCM, applying mathematical modeling techniques to complex real-world problems.",
    },
  ],

  leadership: [
    {
      id: "lead1",
      organization: "Math Modeling Club, Maple Leaf International Academy–Shenzhen",
      role: "President & Founder",
      period: "09/2024–Present",
      responsibilities: [
        "Founded and lead the Math Modeling Club, guiding members to compete in HiMCM and IMMC.",
        "Organized mathematics lectures on topics such as Game Theory and underlying algorithms, enhancing strategic thinking and member engagement."
      ],
      accomplishments: [
        "Led club members to win awards in international HiMCM and IMMC mathematical modeling contests.",
        "Established a culture of rigorous interdisciplinary problem-solving at the school."
      ]
    },
    {
      id: "lead2",
      organization: "Board Game Club, Maple Leaf International Academy–Shenzhen",
      role: "Founder",
      period: "09/2024–Present",
      responsibilities: [
        "Spearheaded the rebranding and expansion from traditional games, successfully recruiting 8 new members.",
        "Organized large-scale events including the Mid-Autumn '24-Point' Math Competition and a club tournament."
      ],
      accomplishments: [
        "Grew club membership significantly through strategic event planning.",
        "Integrated mathematical problem-solving into recreational club activities."
      ]
    },
    {
      id: "lead3",
      organization: "Teaching Assistant — Calculus & Physics, Maple Leaf International Academy–Shenzhen",
      role: "Teaching Assistant",
      period: "02/2026–Present",
      responsibilities: [
        "Assist teachers with homework collection and grading for 30+ students.",
        "Tutor 10+ peers weekly in mathematics and science, and lead exam review sessions."
      ],
      accomplishments: [
        "Provided consistent academic support contributing to improved peer performance.",
        "Developed strong mentoring and communication skills through weekly tutoring."
      ]
    },
    {
      id: "lead4",
      organization: "AwesomeMath Summer Program",
      role: "Teaching Assistant",
      period: "08/2025",
      responsibilities: [
        "Advanced to Level 3 of the program and was competitively selected as a teaching assistant.",
        "Facilitated learning by providing one-on-one academic support to 20+ students and answering homework questions."
      ],
      accomplishments: [
        "Selected as TA from among program participants after advancing to the highest level.",
        "Supported 20+ students in mastering advanced mathematical topics during the intensive summer program."
      ]
    },
    {
      id: "lead5",
      organization: "Swimming Club, Maple Leaf International Academy–Shenzhen",
      role: "Dedicated Club Member",
      period: "01/2025–Present",
      responsibilities: [
        "Train rigorously in weekly practice sessions.",
        "Compete in school-sponsored swimming competitions."
      ],
      accomplishments: []
    },
  ],

  volunteer: [
    {
      id: "vol1",
      organization: "ASEEDER Hainan Rural School Initiative",
      role: "Lead Volunteer English Teacher",
      hours: 80,
      impact: "Served as lead English teacher for a two-week online program reaching 23 left-behind children in rural Hainan. Launched initiatives including 'game time' and 'cloud mentoring' to boost engagement and learning outcomes. Recognized with top team and affinity awards.",
      projectType: "Rural Education"
    },
    {
      id: "vol2",
      organization: "Jiuzhen Mountain Nursing Home & Kindergarten",
      role: "Volunteer",
      hours: 120,
      impact: "Spend quality time with elderly residents and young children by performing piano recitals and creating origami, bringing cultural enrichment and joy to both generations of the community.",
      projectType: "Community Care"
    },
    {
      id: "vol3",
      organization: "Maple Leaf International Academy",
      role: "Volunteer & Digital Content Maker",
      hours: 60,
      impact: "Create background music and promotional videos for school events. Design recruitment posters for school clubs, combining creative and technical skills to support a vibrant school community.",
      projectType: "School Community"
    },
  ],

  awards: [
    {
      id: "aw1",
      title: "Honorary Zhou Enlai Scholarship",
      category: "Scholarship",
      date: "2025–2027",
      description: "Prestigious multi-year scholarship awarded by Maple Leaf International Academy in recognition of outstanding academic performance, leadership, and character.",
    },
    {
      id: "aw2",
      title: "BMO Global Merit Award",
      category: "Academic",
      date: "2025",
      description: "Earned the Global Merit Award in the British Mathematical Olympiad, qualifying for Round 2 and selected for the BMO Asian & Oxford Camp.",
    },
    {
      id: "aw3",
      title: "Gold Award — UKMT Senior Mathematical Challenge",
      category: "Academic",
      date: "2025",
      description: "Received the Gold Award from the United Kingdom Mathematics Trust in the Senior Mathematical Challenge, placing among top performers internationally.",
    },
    {
      id: "aw4",
      title: "China National Gold — Continental Calculus League",
      category: "Academic",
      date: "2025",
      description: "Awarded China National Gold for exceptional mastery of advanced calculus in a national-level competition.",
    },
    {
      id: "aw5",
      title: "AP Distinction Scholar",
      category: "Academic",
      date: "2025",
      description: "Recognized as an AP Distinction Scholar for achieving perfect or near-perfect scores across five AP examinations.",
    },
    {
      id: "aw6",
      title: "Honorable Mention — HiMCM 2025",
      category: "Academic",
      date: "2026",
      description: "Recognized with Honorable Mention in the 2025 High School Mathematical Contest in Modeling for exceptional mathematical modeling and analytical rigor.",
    },
    {
      id: "aw7",
      title: "Top Team & Affinity Award — ASEEDER Initiative",
      category: "Certificate",
      date: "2024",
      description: "Won top team and affinity awards for excellence and impact as lead volunteer English teacher in the ASEEDER Hainan Rural School Initiative.",
    },
  ],

  projects: [
    {
      id: "proj1",
      title: "Military Game Design Project",
      category: "Game Design & Algorithms",
      description: "Designed a military game featuring detailed reward and damage algorithms governing individual player interactions. Used CAD modeling to achieve terrain design with custom textures. Compiled a comprehensive product proposal including full storyline and plot development.",
      tags: ["Game Design", "Algorithm Design", "CAD Modeling", "Product Proposal"]
    },
    {
      id: "proj2",
      title: "Rubik's Cube — Abstract Algebra & Derived Algorithms",
      category: "Mathematical Research",
      description: "Led the algorithm analysis component of a peer-reviewed research paper stemming from an Oxford workshop on Abstract Algebra. Explored group theory and its application to Rubik's Cube solving methods. Published in Applied and Computational Engineering.",
      tags: ["Abstract Algebra", "Group Theory", "Algorithms", "Research Paper"]
    },
  ],

  languages: [
    { id: "lang1", name: "Mandarin Chinese", proficiency: "Native" },
    { id: "lang2", name: "English", proficiency: "Advanced (TOEFL 88 / SAT 1320)" },
  ],

  skills: [
    { id: "sk1", name: "Competition Mathematics", category: "Mathematics" },
    { id: "sk2", name: "Mathematical Modeling", category: "Mathematics" },
    { id: "sk3", name: "Algorithmic Problem Solving", category: "Computer Science" },
    { id: "sk4", name: "Computer Science (AP Level)", category: "Computer Science" },
    { id: "sk5", name: "CAD Modeling", category: "Technical" },
    { id: "sk6", name: "Physics (AP Level — Mechanics & E&M)", category: "Science" },
    { id: "sk7", name: "Piano Performance (Grade 10, Highest in China)", category: "Arts" },
    { id: "sk8", name: "Video Editing & Music Composition", category: "Arts" },
    { id: "sk9", name: "Long-Distance Cycling", category: "Athletics" },
  ],

  creativeWork: [
    {
      id: "cw1",
      title: "Piano — Grade 10 Certification",
      type: "Classical Piano",
      description: "Achieved Grade 10 Piano certification (the highest level in China) after 9+ years of dedicated study. Performs solo at school events and community functions, including piano recitals at the Jiuzhen Mountain Nursing Home. Demonstrates poise, discipline, and a commitment to cultural contribution.",
    },
    {
      id: "cw2",
      title: "Long-Distance Cycling",
      type: "Endurance Athletics",
      description: "Trained as a long-distance cyclist since December 2022, completing iconic circuits including Huandong Lake and Qinghai Lake. These multi-day challenges demonstrate exceptional physical endurance, mental perseverance, and strategic planning.",
    },
    {
      id: "cw3",
      title: "Digital Content Creation — Music & Video",
      type: "Music & Video Production",
      description: "Creates original background music and promotional videos for school events at Maple Leaf International Academy. Designs club recruitment posters, blending creative vision with technical production skills.",
    },
  ],

  publications: [
    {
      id: "pub1",
      title: "The Study of the Solving Methods of the Rubik's Cube and the Analysis of Its Derived Algorithms",
      journal: "Applied and Computational Engineering (Print ISSN: 2755-2721) — CONF-CDS 2025 Symposium",
      date: "2025",
    }
  ],

  testScores: [
    { id: "ts1", testName: "SAT", score: "1320", date: "2025", details: "Math: 780 • Reading & Writing: 540" },
    { id: "ts2", testName: "TOEFL", score: "88", date: "2025", details: "Reading: 25 • Listening: 22 • Speaking: 18 • Writing: 23 • Personal Best: 93" },
  ],

  careerGoals: "Aspiring to pursue rigorous undergraduate study in Mathematics and Computer Science at a leading research university. Passionate about algorithmic research, mathematical modeling, and the intersection of theoretical mathematics with computational applications. Long-term ambitions include contributing to academic research and applying advanced mathematical frameworks to solve real-world challenges.",

  navLinks: [
    { id: "nav-hero", label: "Home", href: "#hero", visible: true },
    { id: "nav-acad", label: "Academics", href: "#academics", visible: true },
    { id: "nav-comp", label: "Competitions", href: "#competitions", visible: true },
    { id: "nav-lead", label: "Leadership", href: "#leadership", visible: true },
    { id: "nav-vol", label: "Service", href: "#volunteer", visible: true },
    { id: "nav-awards", label: "Awards", href: "#awards", visible: true },
    { id: "nav-high", label: "Highlights", href: "#highlights", visible: true },
    { id: "nav-contact", label: "Contact", href: "#contact", visible: true }
  ],

  contact: {
    email: "weial0345@gmail.com",
    phone: "+86 1820****638",
    qq: "",
    github: "",
    wechat: "",
    linkedin: ""
  },

  theme: {
    preset: "ivy-crimson",
    bgColor: "#ffffff",
    bgSecondary: "#f8fafc",
    textColor: "#0f172a",
    textSecondary: "#475569",
    accentColor: "#881337",
    accentLight: "#ffe4e6",
    fontFamily: "'Inter', sans-serif"
  }
};

export const THEME_PRESETS = [
  {
    id: "ivy-crimson",
    name: "Classic Ivy Crimson",
    bgColor: "#ffffff",
    bgSecondary: "#f8fafc",
    textColor: "#0f172a",
    textSecondary: "#475569",
    accentColor: "#881337",
    accentLight: "#ffe4e6",
  },
  {
    id: "stanford-cardinal",
    name: "Stanford Cardinal",
    bgColor: "#ffffff",
    bgSecondary: "#fefefe",
    textColor: "#1c1917",
    textSecondary: "#57534e",
    accentColor: "#8c1515",
    accentLight: "#fee2e2",
  },
  {
    id: "berkeley-blue",
    name: "Berkeley Blue & Gold",
    bgColor: "#ffffff",
    bgSecondary: "#f1f5f9",
    textColor: "#0f172a",
    textSecondary: "#334155",
    accentColor: "#003262",
    accentLight: "#e0f2fe",
  },
  {
    id: "mit-silver",
    name: "MIT Tech Slate",
    bgColor: "#0b0f19",
    bgSecondary: "#111827",
    textColor: "#f3f4f6",
    textSecondary: "#9ca3af",
    accentColor: "#3b82f6",
    accentLight: "#1e3a8a",
  },
  {
    id: "oxford-emerald",
    name: "Oxford Prestige Emerald",
    bgColor: "#ffffff",
    bgSecondary: "#f4fbf7",
    textColor: "#064e3b",
    textSecondary: "#047857",
    accentColor: "#065f46",
    accentLight: "#d1fae5",
  },
  {
    id: "elegant-minimalist",
    name: "Pure Minimalist Slate",
    bgColor: "#fafafa",
    bgSecondary: "#ffffff",
    textColor: "#18181b",
    textSecondary: "#52525b",
    accentColor: "#27272a",
    accentLight: "#f4f4f5",
  }
];
