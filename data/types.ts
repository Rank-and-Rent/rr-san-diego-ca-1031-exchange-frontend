export type Slug = string;

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  slug: Slug;
  name: string;
  short: string;
  route: Slug;
  category: string;
  description: string;
  heroImage: string;
  tags: string[];
  workflows: string[];
  highlight: string;
  faqs: FAQItem[];
  cityVariant?: string;
}

export interface LocationItem {
  slug: Slug;
  name: string;
  parent?: Slug;
  route: Slug;
  type: "city" | "neighborhood" | "suburb" | "district" | "remote";
  priority?: number;
  heroImage: string;
  description: string;
  highlights: string[];
  faqs: FAQItem[];
}

export interface PropertyTypeItem {
  slug: Slug;
  name: string;
  route: Slug;
  heroImage: string;
  summary: string;
  valueDrivers: string[];
  tenantExamples: string[];
  leaseNotes?: string;
}

export interface InventoryCategory {
  slug: Slug;
  name: string;
  route: Slug;
  note?: string;
}

export interface ResourceLink {
  key: string;
  label: string;
  href: string;
}

export interface PageLayoutVariant {
  key: string;
  label: string;
  description: string;
  sections: string[];
  features?: {
    toc?: boolean;
    stickyCta?: boolean;
    sidebar?: boolean;
    heroStyle?: "image" | "gradient" | "map" | "abstract";
    schema?: string[];
  };
}

export interface LayoutAssignments {
  services: Record<string, string>;
  locations: Record<string, string>;
}

export interface BlogPost {
  slug: Slug;
  title: string;
  excerpt: string;
  publishedAt: string;
  readTime: string;
  heroImage: string;
  tags: string[];
  body: string[];
}

