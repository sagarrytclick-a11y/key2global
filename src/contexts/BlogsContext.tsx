"use client";

import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { BlogPost, BlogFilters, BlogSortOption } from '@/lib/types';

// Blogs data - moved from blogs page to centralized location
const blogsData: BlogPost[] = [
  {
    id: 1,
    slug: "the-complete-guide-to-canadas-student-direct-stream-sds",
    category: "Visas",
    image: "https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "Nov 07, 2023",
    readTime: "7 min read",
    title: "The Complete Guide to Canada's Student Direct Stream (SDS)",
    description: "Applying for a Canadian study permit just got faster. Learn if you qualify for the SDS program and what...",
    author: { name: "Michael Chen", role: "Visa Expert", avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150" }
  },
  {
    id: 2,
    slug: "hidden-scholarships-for-international-students-in-australia",
    category: "Scholarships",
    image: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "Oct 15, 2023",
    readTime: "5 min read",
    title: "Hidden Scholarships for International Students in Australia",
    description: "Don't rely just on university websites. Here are 5 lesser-known scholarship funds that could cover...",
    author: { name: "Emma Wilson", role: "Scholarship Lead", avatar: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=150" }
  },
  {
    id: 3,
    slug: "cost-of-living-breakdown-london-vs-manchester",
    category: "Life Abroad",
    image: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "Sep 30, 2023",
    readTime: "6 min read",
    title: "Cost of Living Breakdown: London vs. Manchester",
    description: "Thinking about studying in the UK? We compare rent, transport, and food costs in two of England's...",
    author: { name: "David Kim", role: "Student Vlogger", avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150" }
  },
  {
    id: 4,
    slug: "top-5-universities-in-the-uk-for-computer-science",
    category: "University Rankings",
    image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "Oct 24, 2023",
    readTime: "5 min read",
    title: "Top 5 Universities in the UK for Computer Science: A 2024 Guide",
    description: "Discover the best institutions offering cutting-edge CS programs. From curriculum highlights to post-graduation career prospects...",
    author: { name: "Sarah Johnson", role: "Senior Counselor", avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150" }
  },
  {
    id: 5,
    slug: "student-visa-guide-for-uk-universities",
    category: "Student Visas",
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "Sep 15, 2023",
    readTime: "8 min read",
    title: "Complete Student Visa Guide for UK Universities",
    description: "Everything you need to know about applying for a UK student visa. Step-by-step guide with tips from our visa experts...",
    author: { name: "James Parker", role: "Visa Specialist", avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150" }
  },
  {
    id: 6,
    slug: "australia-vs-canada-which-is-better-for-international-students",
    category: "Life Abroad",
    image: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "Aug 28, 2023",
    readTime: "6 min read",
    title: "Australia vs Canada: Which is Better for International Students?",
    description: "Compare education quality, cost of living, post-study work options, and more. Make an informed decision about your study destination...",
    author: { name: "Lisa Chen", role: "International Student Advisor", avatar: "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=150" }
  }
];

const blogCategories = ["All Topics", "Student Visas", "University Rankings", "Scholarships", "Life Abroad"];

interface BlogsState {
  blogs: BlogPost[];
  filteredBlogs: BlogPost[];
  filters: BlogFilters;
  sortBy: BlogSortOption;
  currentPage: number;
  itemsPerPage: number;
  searchQuery: string;
  selectedCategory: string;
  categories: string[];
  isLoading: boolean;
  error: string | null;
}

type BlogsAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'SET_BLOGS'; payload: BlogPost[] }
  | { type: 'SET_FILTERS'; payload: Partial<BlogFilters> }
  | { type: 'SET_SORT'; payload: BlogSortOption }
  | { type: 'SET_PAGE'; payload: number }
  | { type: 'SET_SEARCH'; payload: string }
  | { type: 'SET_CATEGORY'; payload: string }
  | { type: 'RESET_FILTERS' };

const initialState: BlogsState = {
  blogs: blogsData,
  filteredBlogs: blogsData,
  filters: {},
  sortBy: 'date-desc',
  currentPage: 1,
  itemsPerPage: 6,
  searchQuery: '',
  selectedCategory: 'All Topics',
  categories: blogCategories,
  isLoading: false,
  error: null,
};

function blogsReducer(state: BlogsState, action: BlogsAction): BlogsState {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };

    case 'SET_ERROR':
      return { ...state, error: action.payload, isLoading: false };

    case 'SET_BLOGS':
      return { ...state, blogs: action.payload, filteredBlogs: action.payload };

    case 'SET_FILTERS':
      const newFilters = { ...state.filters, ...action.payload };
      const filtered = applyFilters(state.blogs, newFilters, state.searchQuery, state.selectedCategory);
      const sorted = applySorting(filtered, state.sortBy);
      return {
        ...state,
        filters: newFilters,
        filteredBlogs: sorted,
        currentPage: 1
      };

    case 'SET_SORT':
      const sortedBlogs = applySorting(state.filteredBlogs, action.payload);
      return { ...state, sortBy: action.payload, filteredBlogs: sortedBlogs, currentPage: 1 };

    case 'SET_PAGE':
      return { ...state, currentPage: action.payload };

    case 'SET_SEARCH':
      const searchFiltered = applyFilters(state.blogs, state.filters, action.payload, state.selectedCategory);
      const searchSorted = applySorting(searchFiltered, state.sortBy);
      return {
        ...state,
        searchQuery: action.payload,
        filteredBlogs: searchSorted,
        currentPage: 1
      };

    case 'SET_CATEGORY':
      const categoryFiltered = applyFilters(state.blogs, state.filters, state.searchQuery, action.payload);
      const categorySorted = applySorting(categoryFiltered, state.sortBy);
      return {
        ...state,
        selectedCategory: action.payload,
        filteredBlogs: categorySorted,
        currentPage: 1
      };

    case 'RESET_FILTERS':
      const resetFiltered = applySorting(state.blogs, state.sortBy);
      return {
        ...state,
        filters: {},
        searchQuery: '',
        selectedCategory: 'All Topics',
        filteredBlogs: resetFiltered,
        currentPage: 1
      };

    default:
      return state;
  }
}

function applyFilters(blogs: BlogPost[], filters: BlogFilters, searchQuery: string, selectedCategory: string): BlogPost[] {
  return blogs.filter(blog => {
    // Search query filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const matchesSearch = blog.title.toLowerCase().includes(query) ||
                           blog.description.toLowerCase().includes(query) ||
                           blog.category.toLowerCase().includes(query) ||
                           (blog.author?.name.toLowerCase().includes(query));
      if (!matchesSearch) return false;
    }

    // Category filter
    if (selectedCategory && selectedCategory !== 'All Topics' && blog.category !== selectedCategory) {
      return false;
    }

    // Date range filter
    if (filters.dateRange) {
      const blogDate = new Date(blog.date);
      const startDate = new Date(filters.dateRange[0]);
      const endDate = new Date(filters.dateRange[1]);
      if (blogDate < startDate || blogDate > endDate) {
        return false;
      }
    }

    return true;
  });
}

function applySorting(blogs: BlogPost[], sortBy: BlogSortOption): BlogPost[] {
  return [...blogs].sort((a, b) => {
    switch (sortBy) {
      case 'date-desc':
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case 'date-asc':
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case 'title-asc':
        return a.title.localeCompare(b.title);
      case 'title-desc':
        return b.title.localeCompare(a.title);
      case 'read-time-asc':
        return parseInt(a.readTime) - parseInt(b.readTime);
      case 'read-time-desc':
        return parseInt(b.readTime) - parseInt(a.readTime);
      default:
        return 0;
    }
  });
}

interface BlogsContextType {
  state: BlogsState;
  actions: {
    setFilters: (filters: Partial<BlogFilters>) => void;
    setSort: (sortBy: BlogSortOption) => void;
    setPage: (page: number) => void;
    setSearch: (query: string) => void;
    setCategory: (category: string) => void;
    resetFilters: () => void;
    getBlogBySlug: (slug: string) => BlogPost | undefined;
    getPaginatedBlogs: () => BlogPost[];
    getTotalPages: () => number;
    loadMore: () => void;
  };
}

const BlogsContext = createContext<BlogsContextType | undefined>(undefined);

export function BlogsProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(blogsReducer, initialState);

  const actions = {
    setFilters: (filters: Partial<BlogFilters>) => {
      dispatch({ type: 'SET_FILTERS', payload: filters });
    },

    setSort: (sortBy: BlogSortOption) => {
      dispatch({ type: 'SET_SORT', payload: sortBy });
    },

    setPage: (page: number) => {
      dispatch({ type: 'SET_PAGE', payload: page });
    },

    setSearch: (query: string) => {
      dispatch({ type: 'SET_SEARCH', payload: query });
    },

    setCategory: (category: string) => {
      dispatch({ type: 'SET_CATEGORY', payload: category });
    },

    resetFilters: () => {
      dispatch({ type: 'RESET_FILTERS' });
    },

    getBlogBySlug: (slug: string): BlogPost | undefined => {
      return state.blogs.find(blog => blog.slug === slug);
    },

    getPaginatedBlogs: (): BlogPost[] => {
      const startIndex = (state.currentPage - 1) * state.itemsPerPage;
      return state.filteredBlogs.slice(startIndex, startIndex + state.itemsPerPage);
    },

    getTotalPages: (): number => {
      return Math.ceil(state.filteredBlogs.length / state.itemsPerPage);
    },

    loadMore: () => {
      const newItemsPerPage = state.itemsPerPage + 6;
      dispatch({ type: 'SET_LOADING', payload: true });
      // Simulate API call delay
      setTimeout(() => {
        dispatch({ type: 'SET_LOADING', payload: false });
        // In a real app, this would load more data from an API
        // For now, we'll just increase the items per page
      }, 500);
    },
  };

  return (
    <BlogsContext.Provider value={{ state, actions }}>
      {children}
    </BlogsContext.Provider>
  );
}

export function useBlogs() {
  const context = useContext(BlogsContext);
  if (context === undefined) {
    throw new Error('useBlogs must be used within a BlogsProvider');
  }
  return context;
}
