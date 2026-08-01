"use client";

import { useState, useMemo } from "react";
import { useApplyModal } from "@/context/ApplyModalContext";
import Pagination from "@/app/_component/Pagination";
import { colleges, REGION_ORDER, PER_PAGE, type College } from "@/config/btech-college";

const ALL = "All Cities";

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
        <span className="inline-flex self-start rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">
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
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">Avg Fees</p>
            <p className="mt-0.5 text-base font-bold text-slate-900">{college.fees}</p>
          </div>
          <button
            type="button"
            onClick={openModal}
            className="rounded-lg bg-blue-600 px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-white transition hover:bg-blue-700 active:scale-[0.98]"
          >
            Apply Now
          </button>
        </div>
      </div>
    </article>
  );
}

export default function BtechCollegeCards() {
  const [filter, setFilter] = useState(ALL);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    if (filter === ALL) return colleges;
    return colleges.filter((c) => c.region === filter);
  }, [filter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * PER_PAGE;
  const visibleColleges = filtered.slice(start, start + PER_PAGE);
  const from = filtered.length === 0 ? 0 : start + 1;
  const to = Math.min(start + PER_PAGE, filtered.length);

  const filters = [ALL, ...REGION_ORDER];

  function goToPage(next: number) {
    setPage(next);
    document.getElementById("colleges")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section id="colleges" className="bg-[#eef0f6] py-[50px] px-6 sm:px-8 lg:px-16">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-8">
          <p className="text-[13px] font-bold tracking-[0.2em] uppercase text-blue-600 mb-4">
            India&apos;s Top Engineering Colleges
          </p>
          <h2 className="font-black text-[2.5rem] sm:text-[3.5rem] leading-[1.1] tracking-tight uppercase text-gray-950">
            Find Your <span className="text-blue-600">Dream College</span>
          </h2>
          <p className="text-gray-600 font-medium text-[16px] mt-4 max-w-2xl mx-auto">
            Curated selection of top B.Tech colleges across India with fee details
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => {
                setFilter(f);
                setPage(1);
              }}
              className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-full font-bold text-[10px] sm:text-[12px] tracking-widest uppercase transition-all duration-200 ${
                filter === f
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                  : "bg-white text-gray-600 hover:text-blue-600 border border-gray-200 hover:border-blue-300"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <p className="mb-6 text-center text-sm font-semibold text-slate-500">
          {filtered.length === 0
            ? "No colleges found"
            : `Showing ${from}–${to} of ${filtered.length}`}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleColleges.map((college, idx) => (
            <CollegeCard key={`${college.name}-${idx}`} college={college} />
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
          accent="blue"
        />
      </div>
    </section>
  );
}
