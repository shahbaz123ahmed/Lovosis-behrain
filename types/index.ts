export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  subcategory?: string;
  description: string;
  imageUrl: string;
  imageUrls?: string[];
  specifications: Record<string, string>;
  features: string[];
  availability: 'In Stock' | 'Call for Info' | 'Request Quote' | 'Out of Stock';
  datasheetUrl?: string;
}

export interface Solution {
  id: string;
  name: string;
  slug: string;
  iconName: string;
  shortDesc: string;
  longDesc: string;
  problem: string;
  solution: string;
  products: string[];
  benefits: string[];
  imageUrl: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  imageUrl: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  businessType: string;
  rating: number;
  comment: string;
  initials: string;
}
