export interface PersonalInfo {
  name: string;
  titles: string[];
  headline: string;
  email: string;
  alternateEmail: string;
  phone: string;
  location: string;
  hometown: string;
  availability: string;
  linkedin: string;
  github: string;
  photoUrl?: string;
}

export interface MetricSnapshot {
  label: string;
  value: string;
  target: number;
  isDecimal?: boolean;
  suffix?: string;
  subtext: string;
  badge: string;
  icon: string;
  accentColor: string;
}

export interface SkillItem {
  name: string;
  category: 'programming' | 'visualization' | 'database' | 'concepts';
  level: string;
  description: string;
  icon: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  businessProblem: string;
  solution: string;
  technologies: string[];
  highlights: string[];
  codeSnippet?: {
    filename: string;
    language: string;
    code: string;
  };
  githubUrl?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  score: string;
  scoreLabel: string;
  description: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  duration: string;
  type: string;
  highlights: string[];
  tags: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year?: string;
  category: 'analytics' | 'productivity' | 'finance';
  description: string;
}

export interface AchievementItem {
  title: string;
  metric: string;
  description: string;
  icon: string;
  color: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  metrics: MetricSnapshot[];
  about: {
    summary: string[];
    quote: string;
    coreCompetencies: { title: string; description: string; icon: string }[];
  };
  skills: SkillItem[];
  projects: ProjectItem[];
  workflow: { step: string; title: string; description: string }[];
  experience: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  achievements: AchievementItem[];
}
