"use client";

import SearchHero from "../Components/SearchHero";
import FiltersSidebar from "../Components/FiltersSidebar";
import CollegeCard from "../Components/CollegeCard";
import { ArrowUpDown, SlidersHorizontal } from "lucide-react";
import { useColleges } from "@/contexts/CollegesContext";

export default function CollegesPage() {
  const { state, actions } = useColleges();

  const paginatedUniversities = actions.getPaginatedColleges();
  const totalPages = actions.getTotalPages();

  return (
    <div className="min-h-screen bg-white">
      <SearchHero />

      {/* Main Content */}
      <section className="bg-gradient-to-br from-slate-50 via-orange-50/20 to-red-50/20 py-8 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-4">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <FiltersSidebar />
            </div>

            {/* Results */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              {/* Header */}
              <div className="mb-6 sm:mb-8 flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Universities & Colleges</h2>
                    <p className="text-sm sm:text-base text-slate-600">
                      Showing <span className="font-semibold text-orange-600">{paginatedUniversities.length}</span> of{" "}
                      <span className="font-semibold">{state.filteredColleges.length}</span> results
                    </p>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3">
                    <SlidersHorizontal size={16} className="sm:w-[18px] sm:h-[18px] text-slate-400" />
                    <select
                      value={state.sortBy}
                      onChange={(e) => actions.setSort(e.target.value as any)}
                      className="rounded-lg sm:rounded-xl border border-slate-200 bg-white px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-slate-700 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all"
                    >
                      <option value="ranking-high">Ranking: High to Low</option>
                      <option value="ranking-low">Ranking: Low to High</option>
                      <option value="tuition-low">Tuition: Low to High</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* University Cards */}
              <div className="grid gap-4 sm:gap-6 lg:grid-cols-2 xl:grid-cols-2 mb-8 sm:mb-12">
                {paginatedUniversities.map((uni) => (
                  <CollegeCard key={uni.id} data={uni} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center">
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    <button
                      onClick={() => actions.setPage(Math.max(1, state.currentPage - 1))}
                      disabled={state.currentPage === 1}
                      className="flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg sm:rounded-xl hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                      ← Previous
                    </button>

                    <div className="flex gap-1 overflow-x-auto">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                          key={page}
                          onClick={() => actions.setPage(page)}
                          className={`h-8 w-8 sm:h-10 sm:w-10 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium transition-all flex-shrink-0 ${
                            page === state.currentPage
                              ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
                              : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                          }`}
                        >
                          {page}
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={() => actions.setPage(Math.min(totalPages, state.currentPage + 1))}
                      disabled={state.currentPage === totalPages}
                      className="flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg sm:rounded-xl hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                      Next →
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
