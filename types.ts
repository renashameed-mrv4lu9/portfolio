export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  isFeatured?: boolean;
  image?: string;
  link?: string;
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  period: string;
  details?: string;
}
