// Types for the Key2Global App

export interface College {
  id: number;
  slug: string;
  name: string;
  location: string;
  rank: string;
  tuition: string;
  acceptance: string;
  employability?: string;
  rating?: string;
  students?: string;
  image: string;
  tags: string[];
  founded?: string;
  type?: string;
  website?: string;
}

export interface BlogPost {
  id: number;
  slug: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
  title: string;
  description: string;
  author?: {
    name: string;
    role: string;
    avatar: string;
  };
}

export interface CollegeFilters {
  location?: string;
  type?: string;
  tuitionRange?: [number, number];
  acceptanceRate?: number;
  rankingRange?: [number, number];
  tags?: string[];
}

export interface BlogFilters {
  category?: string;
  searchQuery?: string;
  dateRange?: [string, string];
}

export type SortOption = 'ranking-high' | 'ranking-low' | 'tuition-low' | 'tuition-high' | 'name-asc' | 'name-desc';

export type BlogSortOption = 'date-desc' | 'date-asc' | 'title-asc' | 'title-desc' | 'read-time-asc' | 'read-time-desc';
