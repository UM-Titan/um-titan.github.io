export interface NavItem {
  id: string;
  label: string;
}

export interface Profile {
  name: string;
  shortName: string;
  labName: string;
  labAcronym: string;
  eyebrow: string;
  headline: string;
  headlineAccent: string;
  headlineTail?: string;
  intro: string;
  photo?: string;
  cvUrl?: string;
}

export interface ResearchThrust {
  title: string;
  summary: string;
  keyWork: string[];
}

export interface Person {
  name: string;
  detail: string;
}

export interface Alum {
  name: string;
  degree: string;
  placement?: string;
}

export interface Course {
  code: string;
  title: string;
  description: string;
}

export interface Recognition {
  year: string;
  title: string;
}

export interface ServiceItem {
  role: string;
  org: string;
}

export interface MediaItem {
  outlet: string;
  title: string;
  url: string;
}

export interface Publication {
  year: number;
  title: string;
  authors: string;
  venue: string;
  url?: string;
  featured?: boolean;
  type?: 'journal' | 'conference' | 'report';
}

export interface Contact {
  email: string;
  phone?: string;
  address: string[];
  links: { label: string; url: string }[];
}
