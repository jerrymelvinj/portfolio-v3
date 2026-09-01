export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  client?: string;
  tags: string[];
  summary: string;
  impactMetrics: {
    label: string;
    value: string;
    description?: string;
  }[];
  challenge: string;
  solution: string;
  keyDeliverables: string[];
  technologies: string[];
  accentColor: string;
}

export interface Capability {
  id: string;
  title: string;
  category: string;
  iconName: string;
  description: string;
  skills: string[];
  deliverables: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
}
