export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  project: string;
  technologies: string[];
  responsibilities: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  category: string;
  techStack: string[];
  highlights: string[];
  githubUrl: string;
  demoType?: 'uniretrieve' | 'agriguard' | 'moderation' | 'weather' | string;
}

export interface EducationItem {
  institution: string;
  location: string;
  degree: string;
  score: string;
  duration: string;
}

export interface CertificationItem {
  issuer: string;
  items: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
