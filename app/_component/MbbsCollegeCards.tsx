"use client";

import { useState, useMemo, useDeferredValue } from "react";
import { useApplyModal } from "@/context/ApplyModalContext";
import { colleges, REGION_ORDER, PER_PAGE, type College } from "@/config/mbbs-college";

const ALL = "All States";

function CollegeCard({ college }: { college: College }) {
  const { openModal } = useApplyModal();
  const description = `${college.name} is a private medical institute in ${college.location}, ${college.region}, offering MBBS education with clinical exposure for aspiring doctors.`;

  return (
    <article className="group h-full rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-3 sm:p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex gap-3 sm:gap-4">
        <div className="relative h-24 w-24 sm:h-32 sm:w-32 flex-shrink-0 overflow-hidden rounded-xl sm:rounded-2xl">
          <img
            src={college.image}
            alt={college.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="min-w-0 flex-1">
          <span className="inline-flex rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
            {college.region}
          </span>
          <h3 className="mt-2 text-base font-black leading-snug text-slate-900">
            {college.name}, {college.location}
          </h3>
          <div className="mt-1 flex items-center gap-1 text-sm text-slate-500">
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            <span>{college.region}</span>
          </div>
        </div>
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-600">
        {description}
      </p>

      <div className="mt-4 rounded-2xl bg-slate-50 p-3">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
              Fees
            </p>
            <p className="mt-1 text-lg font-black text-slate-900">
              {college.fees ?? "On Request"}
            </p>
          </div>
          <button
            onClick={openModal}
            className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-3 sm:px-4 py-2.5 sm:py-3 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-200 hover:bg-emerald-700 active:scale-[0.98]"
          >
            Apply Now
          </button>
        </div>
      </div>
    </article>
  );
}

export default function MbbsCollegeCards() {
  const [filter, setFilter] = useState(ALL);
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(PER_PAGE);
  const deferredSearch = useDeferredValue(search.trim().toLowerCase());

  const filtered = useMemo(() => {
    let list = filter === ALL ? colleges : colleges.filter((c) => c.region === filter);
    if (deferredSearch) {
      list = list.filter(
        (c) =>
          c.name.toLowerCase().includes(deferredSearch) ||
          c.location.toLowerCase().includes(deferredSearch) ||
          c.region.toLowerCase().includes(deferredSearch)
      );
    }
    return list;
  }, [filter, deferredSearch]);

  // Show all colleges for a selected state; paginate only on "All States"
  const pageSize = filter === ALL && !deferredSearch ? visible : filtered.length;
  const visibleColleges = filtered.slice(0, pageSize);
  const hasMore = filter === ALL && !deferredSearch && visible < filtered.length;
  const filters = [ALL, ...REGION_ORDER];

  return (
    <section id="colleges" className="bg-[#eef0f6] py-16 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-16">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-14">
          <p className="text-[13px] font-bold tracking-[0.2em] uppercase text-emerald-600 mb-4">
            Private MBBS Colleges · State-wise
          </p>
          <h2 className="font-black text-[2.5rem] sm:text-[3.5rem] leading-[1.1] tracking-tight uppercase text-gray-950">
            Find Your <span className="text-emerald-600">Dream College</span>
          </h2>
          <p className="text-gray-600 font-medium text-[16px] mt-4 max-w-2xl mx-auto">
            {colleges.length} private medical colleges across India, listed state-wise
          </p>
        </div>

        <div className="mb-8 max-w-xl mx-auto">
          <label htmlFor="mbbs-search" className="sr-only">
            Search colleges
          </label>
          <div className="relative">
            <svg
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              id="mbbs-search"
              type="search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setVisible(PER_PAGE);
              }}
              placeholder="Search by college, city, or state…"
              className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm font-medium text-slate-800 shadow-sm outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
            />
          </div>
        </div>

        <div className="mb-12 flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-thin justify-start sm:flex-wrap sm:justify-center sm:overflow-visible">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => {
                setFilter(f);
                setVisible(PER_PAGE);
              }}
              className={`shrink-0 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full font-bold text-[10px] sm:text-[11px] tracking-widest uppercase transition-all duration-200 ${
                filter === f
                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30"
                  : "bg-white text-gray-600 hover:text-emerald-600 border border-gray-200 hover:border-emerald-300"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleColleges.map((college, idx) => (
            <CollegeCard key={`${college.name}-${college.location}-${idx}`} college={college} />
          ))}
        </div>

        {visibleColleges.length === 0 && (
          <p className="text-center text-gray-500 font-semibold text-[15px] mt-12">
            No colleges found for this filter.
          </p>
        )}

        {hasMore && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setVisible((v) => v + PER_PAGE)}
              className="inline-flex items-center gap-2 bg-white hover:bg-emerald-600 hover:text-white text-gray-800 font-bold text-[12px] tracking-[0.2em] uppercase px-8 py-4 rounded-xl border-2 border-gray-200 hover:border-emerald-600 transition-all duration-200 shadow-md"
            >
              Load More Colleges ({filtered.length - visible} left)
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
            </button>
          </div>
        )}

        {!hasMore && filtered.length > 0 && (
          <div className="text-center mt-12">
            <p className="text-gray-500 font-semibold text-[14px]">
              Showing all {filtered.length} college{filtered.length > 1 ? "s" : ""}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
