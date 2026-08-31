"use client";

import Link from "next/link";
import { pgNews } from "@/config/pg-news";
import { useApplyModal } from "@/context/ApplyModalContext";

export default function PgHomeSection() {
  const { openModal } = useApplyModal();
  const latest = pgNews[0];

  return (
    <section className="bg-white py-[50px] px-6 sm:px-8 lg:px-16 border-y border-slate-100">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-amber-600 mb-3">
              NEET-PG · MCC Notices
            </p>
            <h2 className="font-black text-[2rem] sm:text-[2.4rem] leading-none tracking-tight text-gray-950">
              PG Medical News
            </h2>
            <p className="mt-3 text-slate-500 font-medium text-[15px] max-w-xl">
              Stray vacancy results, seat allotment PDFs and NRI eligibility —
              same official updates, on Key2Education.
            </p>
          </div>
          <Link
            href="/PG"
            className="inline-flex items-center gap-1.5 self-start sm:self-auto text-[11px] font-bold tracking-[0.16em] uppercase text-slate-800 hover:text-amber-700 border-b-2 border-slate-800 hover:border-amber-600 pb-0.5 transition-colors"
          >
            Open PG news page
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M7 7h10v10" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <a
            href={latest.href}
            target="_blank"
            rel="noopener noreferrer"
            className="lg:col-span-5 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0d1f3c] via-[#0f2a4a] to-[#163a5f] p-6 sm:p-7 text-white shadow-lg"
          >
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="rounded-full bg-amber-400 px-2.5 py-0.5 text-[9px] font-black uppercase tracking-widest text-[#0d1f3c]">
                New
              </span>
              <span className="text-[11px] font-semibold text-blue-200/80">{latest.dateLabel}</span>
              <span className="rounded-md bg-rose-500/20 border border-rose-400/30 px-2 py-0.5 text-[9px] font-black uppercase tracking-widest text-rose-200">
                PDF
              </span>
            </div>
            <h3 className="font-black text-[1.1rem] leading-snug tracking-tight group-hover:text-amber-200 transition-colors">
              {latest.title}
            </h3>
            <p className="mt-3 text-[13px] leading-relaxed text-blue-100/70 line-clamp-3">
              {latest.summary}
            </p>
            <span className="mt-6 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-amber-300">
              Open official PDF
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M7 7h10v10" />
              </svg>
            </span>
          </a>

          <div className="lg:col-span-7 flex flex-col gap-3">
            {pgNews.slice(0, 3).map((item) => (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-4 rounded-2xl border border-slate-200 bg-[#f7f8fc] p-4 hover:border-amber-300 hover:bg-white hover:shadow-md transition-all"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-600 border border-rose-100">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-[9px] font-black uppercase tracking-widest text-amber-800 bg-amber-50 border border-amber-100 rounded px-2 py-0.5">
                      {item.tag}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400">{item.dateLabel}</span>
                  </div>
                  <h3 className="font-bold text-[13.5px] leading-snug text-slate-900 group-hover:text-amber-800 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                </div>
              </a>
            ))}

            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                href="/PG"
                className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#0d1f3c] hover:bg-amber-400 transition-colors"
              >
                All PG notices
              </Link>
              <button
                type="button"
                onClick={openModal}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-800 hover:border-amber-400 transition-colors"
              >
                Apply for PG
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
