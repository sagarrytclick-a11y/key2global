"use client";

import { useState, useMemo, useDeferredValue, startTransition } from "react";
import { useApplyModal } from "@/context/ApplyModalContext";
import Pagination from "@/app/_component/Pagination";
import {
  colleges,
  REGION_ORDER,
  PER_PAGE,
  type College,
} from "@/config/mbbs-college";

const ALL = "All States";

const POPULAR_STATES = [
  "Karnataka",
  "Maharashtra",
  "Tamil Nadu",
  "Uttar Pradesh",
  "Delhi",
  "Rajasthan",
] as const;

/** Pre-group by region once — avoids re-scanning all colleges on every filter change */
const collegesByRegion = REGION_ORDER.reduce(
  (map, region) => {
    map.set(
      region,
      colleges.filter((c) => c.region === region)
    );
    return map;
  },
  new Map<string, College[]>()
);

const chipBase =
  "px-4 py-2 rounded-full font-bold text-[11px] tracking-widest uppercase transition-all duration-200";
const chipActive =
  "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30";
const chipIdle =
  "bg-white text-gray-600 hover:text-emerald-600 border border-gray-200 hover:border-emerald-300";

function chipClass(active: boolean) {
  return `${chipBase} ${active ? chipActive : chipIdle}`;
}

function CollegeCard({ college }: { college: College }) {
  const { openModal } = useApplyModal();

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-44 w-full overflow-hidden bg-slate-100 sm:h-48">
        <img
          src={college.image}
          alt=""
          width={400}
          height={240}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <span className="inline-flex self-start rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
          {college.region}
        </span>
        <h3 className="mt-3 line-clamp-2 text-base font-bold leading-snug text-slate-900">
          {college.name}
        </h3>
        <p className="mt-2 flex items-center gap-1 text-sm text-slate-500">
          <svg className="h-3.5 w-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="truncate">{college.location}</span>
        </p>

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">Fees</p>
            <p className="mt-0.5 text-base font-bold text-slate-900">{college.fees ?? "On Request"}</p>
          </div>
          <button
            type="button"
            onClick={openModal}
            className="rounded-lg bg-emerald-600 px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-white transition hover:bg-emerald-700 active:scale-[0.98]"
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
  const [page, setPage] = useState(1);
  const deferredSearch = useDeferredValue(search.trim().toLowerCase());

  const filtered = useMemo(() => {
    const base =
      filter === ALL ? colleges : (collegesByRegion.get(filter) ?? []);

    if (!deferredSearch) return base;

    return base.filter(
      (c) =>
        c.name.toLowerCase().includes(deferredSearch) ||
        c.location.toLowerCase().includes(deferredSearch) ||
        c.region.toLowerCase().includes(deferredSearch)
    );
  }, [filter, deferredSearch]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * PER_PAGE;
  const visibleColleges = filtered.slice(start, start + PER_PAGE);
  const from = filtered.length === 0 ? 0 : start + 1;
  const to = Math.min(start + PER_PAGE, filtered.length);

  function selectState(next: string) {
    startTransition(() => {
      setFilter(next);
      setPage(1);
    });
  }

  function onSearchChange(value: string) {
    setSearch(value);
    startTransition(() => setPage(1));
  }

  function goToPage(next: number) {
    setPage(next);
    document.getElementById("colleges")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section id="colleges" className="bg-[#eef0f6] py-[50px] px-6 sm:px-8 lg:px-16">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-8">
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

        <div className="mb-6 mx-auto max-w-3xl flex flex-col sm:flex-row gap-3">
          <label htmlFor="mbbs-search" className="sr-only">
            Search colleges
          </label>
          <div className="relative flex-1">
            <svg
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              id="mbbs-search"
              type="search"
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search by college, city, or state…"
              className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm font-medium text-slate-800 shadow-sm outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
            />
          </div>

          <label htmlFor="mbbs-state" className="sr-only">
            Filter by state
          </label>
          <div className="relative sm:w-56 shrink-0">
            <svg
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <select
              id="mbbs-state"
              value={filter}
              onChange={(e) => selectState(e.target.value)}
              className="w-full appearance-none rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-10 text-sm font-semibold text-slate-800 shadow-sm outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 cursor-pointer"
            >
              <option value={ALL}>{ALL}</option>
              {REGION_ORDER.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            <svg
              className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          <button type="button" onClick={() => selectState(ALL)} className={chipClass(filter === ALL)}>
            All
          </button>
          {POPULAR_STATES.map((state) => (
            <button
              key={state}
              type="button"
              onClick={() => selectState(state)}
              className={chipClass(filter === state)}
            >
              {state}
            </button>
          ))}
        </div>

        <p className="mb-6 text-center text-sm font-semibold text-slate-500">
          {filtered.length === 0
            ? "No colleges found"
            : `Showing ${from}–${to} of ${filtered.length}${filter !== ALL ? ` in ${filter}` : ""}`}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleColleges.map((college) => (
            <CollegeCard
              key={`${college.region}-${college.name}-${college.location}`}
              college={college}
            />
          ))}
        </div>

        {visibleColleges.length === 0 && (
          <p className="text-center text-gray-500 font-semibold text-[15px] mt-12">
            No colleges found for this filter.
          </p>
        )}

        <Pagination
          page={currentPage}
          totalPages={totalPages}
          onChange={goToPage}
          accent="emerald"
        />
      </div>
    </section>
  );
}
