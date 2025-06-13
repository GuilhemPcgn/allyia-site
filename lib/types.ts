export interface NavItem {
  title: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  quote: string;
}

export interface Value {
  title: string;
  description: string;
  icon: string;
}

export interface Commitment {
  title: string;
  description: string;
  icon: string;
}

export interface AppFeature {
  title: string;
  description: string;
  image: string;
  icon: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  category: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}