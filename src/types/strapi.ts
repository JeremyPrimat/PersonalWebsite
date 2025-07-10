export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  slug: string;
  publishedAt: string;
  readTime: string;
  category: string;
  featuredImage?: {
    url: string;
    alternativeText?: string;
  };
  externalLink?: string;
}

export interface Question {
  id: number;
  title: string;
  content: string;
  category: string;
  slug: string;
  featured: boolean;
  image?: {
    url: string;
    alternativeText?: string;
  };
}

export interface Skill {
  id: number;
  name: string;
  category: string;
  level?: number;
  color?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  image?: {
    url: string;
    alternativeText?: string;
  };
}

export interface Profile {
  id: number;
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  linkedinUrl?: string;
  githubUrl?: string;
  profileImage?: {
    url: string;
    alternativeText?: string;
  };
  roles: string[];
}