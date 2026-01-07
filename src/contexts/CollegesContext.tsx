"use client";

import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { College, CollegeFilters, SortOption } from '@/lib/types';

// Colleges data - moved from individual pages to centralized location
const collegesData: College[] = [
  {
    id: 1,
    slug: "university-college-london",
    name: "University College London",
    location: "London, United Kingdom",
    rank: "#28 Global",
    tuition: "£28,500",
    acceptance: "63%",
    employability: "92%",
    image: "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Public", "Scholarship", "Russell Group"],
    founded: "1826",
    type: "Public Research University",
    website: "https://www.ucl.ac.uk"
  },
  {
    id: 2,
    slug: "university-of-manchester",
    name: "University of Manchester",
    location: "Manchester, United Kingdom",
    rank: "#27 Global",
    tuition: "£24,500",
    acceptance: "59%",
    employability: "94%",
    image: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Russell Group", "Research Intensive"],
    founded: "1824",
    type: "Public Research University",
    website: "https://www.manchester.ac.uk"
  },
  {
    id: 3,
    slug: "kings-college-london",
    name: "King's College London",
    location: "London, United Kingdom",
    rank: "#35 Global",
    tuition: "£26,000",
    acceptance: "67%",
    students: "40k+",
    image: "https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Top Research", "Visa Support", "Medical Excellence"],
    founded: "1829",
    type: "Public Research University",
    website: "https://www.kcl.ac.uk"
  },
  {
    id: 4,
    slug: "university-of-bristol",
    name: "University of Bristol",
    location: "Bristol, United Kingdom",
    rank: "#61 Global",
    tuition: "£22,000",
    acceptance: "68%",
    rating: "4.5/5",
    image: "https://images.pexels.com/photos/207636/pexels-photo-207636.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Top 50 Research", "Innovation Hub"],
    founded: "1876",
    type: "Public Research University",
    website: "https://www.bristol.ac.uk"
  },
  {
    id: 5,
    slug: "university-of-toronto",
    name: "University of Toronto",
    location: "Toronto, Canada",
    rank: "#21 Global",
    tuition: "CAD $42,000",
    acceptance: "43%",
    employability: "96%",
    image: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Public", "Scholarship", "Research Powerhouse"],
    founded: "1827",
    type: "Public Research University",
    website: "https://www.utoronto.ca"
  },
  {
    id: 6,
    slug: "monash-university",
    name: "Monash University",
    location: "Melbourne, Australia",
    rank: "#42 Global",
    tuition: "AUD $35,000",
    acceptance: "40%",
    employability: "91%",
    image: "https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Public", "Innovation", "Global Partnerships"],
    founded: "1958",
    type: "Public Research University",
    website: "https://www.monash.edu"
  },
  {
    id: 7,
    slug: "imperial-college-london",
    name: "Imperial College London",
    location: "London, United Kingdom",
    rank: "#6 Global",
    tuition: "£35,000",
    acceptance: "14%",
    employability: "98%",
    image: "https://images.pexels.com/photos/207580/pexels-photo-207580.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["STEM Excellence", "Russell Group", "Innovation"],
    founded: "1907",
    type: "Public Research University",
    website: "https://www.imperial.ac.uk"
  },
  {
    id: 8,
    slug: "university-of-melbourne",
    name: "University of Melbourne",
    location: "Melbourne, Australia",
    rank: "#14 Global",
    tuition: "AUD $38,000",
    acceptance: "70%",
    employability: "93%",
    image: "https://images.pexels.com/photos/207678/pexels-photo-207678.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Public", "Research Intensive", "Global Recognition"],
    founded: "1853",
    type: "Public Research University",
    website: "https://www.unimelb.edu.au"
  },
];

interface CollegesState {
  colleges: College[];
  filteredColleges: College[];
  filters: CollegeFilters;
  sortBy: SortOption;
  currentPage: number;
  itemsPerPage: number;
  searchQuery: string;
  isLoading: boolean;
  error: string | null;
}

type CollegesAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'SET_COLLEGES'; payload: College[] }
  | { type: 'SET_FILTERS'; payload: Partial<CollegeFilters> }
  | { type: 'SET_SORT'; payload: SortOption }
  | { type: 'SET_PAGE'; payload: number }
  | { type: 'SET_SEARCH'; payload: string }
  | { type: 'RESET_FILTERS' };

const initialState: CollegesState = {
  colleges: collegesData,
  filteredColleges: collegesData,
  filters: {},
  sortBy: 'ranking-high',
  currentPage: 1,
  itemsPerPage: 8,
  searchQuery: '',
  isLoading: false,
  error: null,
};

function collegesReducer(state: CollegesState, action: CollegesAction): CollegesState {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };

    case 'SET_ERROR':
      return { ...state, error: action.payload, isLoading: false };

    case 'SET_COLLEGES':
      return { ...state, colleges: action.payload, filteredColleges: action.payload };

    case 'SET_FILTERS':
      const newFilters = { ...state.filters, ...action.payload };
      const filtered = applyFilters(state.colleges, newFilters, state.searchQuery);
      const sorted = applySorting(filtered, state.sortBy);
      return {
        ...state,
        filters: newFilters,
        filteredColleges: sorted,
        currentPage: 1 // Reset to first page when filters change
      };

    case 'SET_SORT':
      const sortedColleges = applySorting(state.filteredColleges, action.payload);
      return { ...state, sortBy: action.payload, filteredColleges: sortedColleges, currentPage: 1 };

    case 'SET_PAGE':
      return { ...state, currentPage: action.payload };

    case 'SET_SEARCH':
      const searchFiltered = applyFilters(state.colleges, state.filters, action.payload);
      const searchSorted = applySorting(searchFiltered, state.sortBy);
      return {
        ...state,
        searchQuery: action.payload,
        filteredColleges: searchSorted,
        currentPage: 1
      };

    case 'RESET_FILTERS':
      const resetFiltered = applySorting(state.colleges, state.sortBy);
      return {
        ...state,
        filters: {},
        searchQuery: '',
        filteredColleges: resetFiltered,
        currentPage: 1
      };

    default:
      return state;
  }
}

function applyFilters(colleges: College[], filters: CollegeFilters, searchQuery: string): College[] {
  return colleges.filter(college => {
    // Search query filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const matchesSearch = college.name.toLowerCase().includes(query) ||
                           college.location.toLowerCase().includes(query) ||
                           college.tags.some(tag => tag.toLowerCase().includes(query));
      if (!matchesSearch) return false;
    }

    // Location filter
    if (filters.location && !college.location.toLowerCase().includes(filters.location.toLowerCase())) {
      return false;
    }

    // Type filter
    if (filters.type && college.type !== filters.type) {
      return false;
    }

    // Tuition range filter
    if (filters.tuitionRange) {
      const tuition = parseInt(college.tuition.replace(/[^0-9]/g, ''));
      if (tuition < filters.tuitionRange[0] || tuition > filters.tuitionRange[1]) {
        return false;
      }
    }

    // Acceptance rate filter
    if (filters.acceptanceRate) {
      const acceptance = parseInt(college.acceptance);
      if (acceptance > filters.acceptanceRate) {
        return false;
      }
    }

    // Ranking range filter
    if (filters.rankingRange) {
      const rank = parseInt(college.rank.split('#')[1]);
      if (rank < filters.rankingRange[0] || rank > filters.rankingRange[1]) {
        return false;
      }
    }

    // Tags filter
    if (filters.tags && filters.tags.length > 0) {
      const hasAllTags = filters.tags.every(tag => college.tags.includes(tag));
      if (!hasAllTags) return false;
    }

    return true;
  });
}

function applySorting(colleges: College[], sortBy: SortOption): College[] {
  return [...colleges].sort((a, b) => {
    switch (sortBy) {
      case 'ranking-high':
        return parseInt(a.rank.split('#')[1]) - parseInt(b.rank.split('#')[1]);
      case 'ranking-low':
        return parseInt(b.rank.split('#')[1]) - parseInt(a.rank.split('#')[1]);
      case 'tuition-low':
        return parseInt(a.tuition.replace(/[^0-9]/g, '')) - parseInt(b.tuition.replace(/[^0-9]/g, ''));
      case 'tuition-high':
        return parseInt(b.tuition.replace(/[^0-9]/g, '')) - parseInt(a.tuition.replace(/[^0-9]/g, ''));
      case 'name-asc':
        return a.name.localeCompare(b.name);
      case 'name-desc':
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });
}

interface CollegesContextType {
  state: CollegesState;
  actions: {
    setFilters: (filters: Partial<CollegeFilters>) => void;
    setSort: (sortBy: SortOption) => void;
    setPage: (page: number) => void;
    setSearch: (query: string) => void;
    resetFilters: () => void;
    getCollegeBySlug: (slug: string) => College | undefined;
    getPaginatedColleges: () => College[];
    getTotalPages: () => number;
  };
}

const CollegesContext = createContext<CollegesContextType | undefined>(undefined);

export function CollegesProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(collegesReducer, initialState);

  const actions = {
    setFilters: (filters: Partial<CollegeFilters>) => {
      dispatch({ type: 'SET_FILTERS', payload: filters });
    },

    setSort: (sortBy: SortOption) => {
      dispatch({ type: 'SET_SORT', payload: sortBy });
    },

    setPage: (page: number) => {
      dispatch({ type: 'SET_PAGE', payload: page });
    },

    setSearch: (query: string) => {
      dispatch({ type: 'SET_SEARCH', payload: query });
    },

    resetFilters: () => {
      dispatch({ type: 'RESET_FILTERS' });
    },

    getCollegeBySlug: (slug: string): College | undefined => {
      return state.colleges.find(college => college.slug === slug);
    },

    getPaginatedColleges: (): College[] => {
      const startIndex = (state.currentPage - 1) * state.itemsPerPage;
      return state.filteredColleges.slice(startIndex, startIndex + state.itemsPerPage);
    },

    getTotalPages: (): number => {
      return Math.ceil(state.filteredColleges.length / state.itemsPerPage);
    },
  };

  return (
    <CollegesContext.Provider value={{ state, actions }}>
      {children}
    </CollegesContext.Provider>
  );
}

export function useColleges() {
  const context = useContext(CollegesContext);
  if (context === undefined) {
    throw new Error('useColleges must be used within a CollegesProvider');
  }
  return context;
}
