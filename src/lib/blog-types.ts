export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "table"; caption: string; headers: string[]; rows: string[][] };

export type BlogLink = {
  href: string;
  label: string;
};

export type BlogFaq = {
  question: string;
  answer: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  keywords: string[];
  image: string;
  imageAlt: string;
  category: string;
  date: string;
  isoDate: string;
  readTime: string;
  /** Self-contained answer for search snippets and AI citations. */
  directAnswer?: string;
  blocks: BlogBlock[];
  faqs?: BlogFaq[];
  related?: BlogLink[];
};
