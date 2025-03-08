export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  author: string;
  tags: string[];
  image: string;
  readTime: number;
  content: React.ReactNode;
}