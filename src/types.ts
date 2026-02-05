export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  liveUrl?: string;
  codeUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readTime?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  icon: string;
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  icon: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  icon: string;
}

export interface Skill {
  name: string;
  icon?: string;
  isTextIcon?: boolean;
}
