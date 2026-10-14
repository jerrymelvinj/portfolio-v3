export interface ProjectDecision {
  title: string;
  rationale: string;
  outcome: string;
  details: string[];
}

export interface Project {
  id: string;
  slug: string;
  aliases?: string[];
  title: string;
  subtitle?: string;
  year: string;
  duration?: string;
  team?: string;
  role: string;
  client?: string;
  tags: string[];
  metricsBadges: string[];
  summary: string;
  impactMetrics: {
    label: string;
    value: string;
    description?: string;
  }[];
  challenge?: string;
  solution?: string;
  problemAnalysis?: {
    overview: string;
    frictionPoints: string[];
  };
  decisions?: ProjectDecision[];
  beforeAfterComparison?: {
    before: string[];
    after: string[];
  };
  keyDeliverables?: string[];
  technologies?: string[];
  accentColor?: string;
  liveUrl?: string;
}

export interface Capability {
  id: string;
  title: string;
  category: string;
  iconName: string;
  description: string;
  skills: string[];
  deliverables?: string[];
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
