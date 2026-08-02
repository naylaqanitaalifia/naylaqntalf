export interface Work {
  id: number;
  image: string;
  gallery?: string[];
  title: string;
  description: string;
  tools?: string[];
  timeline?: string;
  role?: string;
  problem_statement?: string;
  solution?: string;
  category: string;
  slug: string;
}
