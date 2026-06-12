export interface NavLink {
  id: string;
  label: string;
  href: string;
  visible: boolean;
}

export interface Course {
  id: string;
  name: string;
  category: 'AP' | 'Honors' | 'Advanced';
  grade?: string;
}

export interface AcademicDistinction {
  id: string;
  title: string;
  year: string;
  description: string;
}

export interface Recognition {
  id: string;
  title: string;
  date: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  link?: string;
}

export interface ResearchProject {
  id: string;
  title: string;
  role: string;
  description: string;
  advisor?: string;
}

export interface Competition {
  id: string;
  name: string;
  year: string;
  placement: string;
  description: string;
  link?: string;
}

export interface LeadershipRole {
  id: string;
  organization: string;
  role: string;
  period: string;
  responsibilities: string[];
  accomplishments: string[];
}

export interface VolunteerEntry {
  id: string;
  organization: string;
  role: string;
  hours: number;
  impact: string;
  projectType?: string;
}

export interface Award {
  id: string;
  title: string;
  category: 'Scholarship' | 'Academic' | 'Certificate' | 'Badge';
  date: string;
  description: string;
  amount?: string;
}

export interface PersonalProject {
  id: string;
  title: string;
  category: string;
  description: string;
  link?: string;
  tags: string[];
}

export interface Language {
  id: string;
  name: string;
  proficiency: string;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
}

export interface CreativeWork {
  id: string;
  title: string;
  type: string;
  description: string;
  link?: string;
}

export interface Publication {
  id: string;
  title: string;
  journal: string;
  date: string;
  link?: string;
}

export interface TestScore {
  id: string;
  testName: string;
  score: string;
  date: string;
  details?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  qq: string;
  github: string;
  wechat: string;
  linkedin: string;
}

export interface ThemeSettings {
  preset: string;
  bgColor: string;
  bgSecondary: string;
  textColor: string;
  textSecondary: string;
  accentColor: string;
  accentLight: string;
  fontFamily: string;
}

export interface PortfolioData {
  // Hero & Identity
  name: string;
  photoUrl: string;
  bio: string;
  gradeLevel: string;
  school: string;
  gpa: string;
  major: string;
  heroButtons: {
    resumeText: string;
    contactText: string;
  };

  // Sections Data
  gpaDetails: string;
  courses: Course[];
  distinctions: AcademicDistinction[];
  recognitions: Recognition[];
  certifications: Certification[];
  researchProjects: ResearchProject[];

  competitions: Competition[];
  leadership: LeadershipRole[];
  volunteer: VolunteerEntry[];
  awards: Award[];

  // Additional Highlights
  projects: PersonalProject[];
  languages: Language[];
  skills: Skill[];
  creativeWork: CreativeWork[];
  publications: Publication[];
  testScores: TestScore[];
  careerGoals: string;

  // Navigation & Contact
  navLinks: NavLink[];
  contact: ContactInfo;

  // Customization
  theme: ThemeSettings;
}
