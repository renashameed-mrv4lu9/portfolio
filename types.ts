/** Trilingual text — provide { en, ar, ku } */
export type LocalizedText = { en: string; ar: string; ku: string };

/** Trilingual feature item */
export type LocalizedFeature = { title: LocalizedText; description: LocalizedText };

/** Trilingual tech stack category */
export type LocalizedTechStack = { category: LocalizedText; technologies: string[] };

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  isFeatured?: boolean;
  image?: string;
  link?: string;
  
  // Detailed Page Properties (English-only fallback)
  role?: string;
  platform?: string;
  overview?: string;
  features?: { title: string; description: string }[];
  techStack?: { category: string; technologies: string[] }[];
  technicalAchievements?: string;
  galleryImages?: string[];

  // Trilingual Page Properties (these take priority when present)
  i18n?: {
    title?: LocalizedText;
    category?: LocalizedText;
    description?: LocalizedText;
    role?: LocalizedText;
    platform?: LocalizedText;
    overview?: LocalizedText;
    features?: LocalizedFeature[];
    techStack?: LocalizedTechStack[];
    technicalAchievements?: LocalizedText;
  };
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
