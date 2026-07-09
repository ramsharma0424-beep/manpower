export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

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
  readTime: string;
  blocks: BlogBlock[];
};
