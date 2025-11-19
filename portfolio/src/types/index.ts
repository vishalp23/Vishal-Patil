/**
 * Type definitions for the portfolio website
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  github: string;
  demo?: string;
  image: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  current?: boolean;
  responsibilities: string[];
  technologies: string[];
}

export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
  icon?: string;
  level?: number;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NavLink {
  name: string;
  path: string;
}
