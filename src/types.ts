export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  liveUrl: string;
  codeUrl: string;
  readMoreUrl: string;
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readTime?: string;
}

export interface TimelineItem {
  organization: string;
  logo: string;
}

export interface Experience extends TimelineItem {
  type: "experience";
  role: string;
  period: string;
}

export interface Education extends TimelineItem {
  type: "education";
  degree: string;
  period: string;
}

export interface Certification extends TimelineItem {
  type: "certification";
  title: string;
  date: string;
  url: string;
}

export interface Skill {
  name: string;
  icon?: string;
  isTextIcon?: boolean;
}

export interface CONTACT {
  name: string;
  icon: string;
  url: string;
}
