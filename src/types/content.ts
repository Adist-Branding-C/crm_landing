export interface LlmBrand {
  name: string;
  slug: string;
  iconSrc: string;
  logoSrc?: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export interface PricingPlan {
  name: string;
  tagline: string;
  priceMonthly: number;
  priceMonthlyStruck?: number;
  badge?: string;
  highlighted?: boolean;
  ctaLabel: string;
  ctaHref: string;
  features: string[];
  icon?: string;
}

export interface TestimonialItem {
  quote: string;
  authorName: string;
  authorTitle: string;
  authorAvatar?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BlogPostSummary {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  href: string;
  coverImage?: string;
}

export interface FooterLinkColumn {
  title: string;
  links: { label: string; href: string }[];
}
