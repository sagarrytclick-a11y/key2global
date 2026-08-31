"use client";

import { MCC_PG_NEWS_URL, pgNews } from "@/config/pg-news";
import { useApplyModal } from "@/context/ApplyModalContext";

const [featured, ...rest] = pgNews;
const bannerNews = pgNews.find((item) => item.headline) ?? featured;

function DateStamp({ date, label }: { date: string; label: string }) {
  const [day, month, year] = label.split(" ");

  return (
    <time
      dateTime={date}
      className="flex shrink-0 flex-col items-center justify-center rounded-xl bg-[#0d1f3c] px-3 py-2.5 text-center min-w-[4.5rem]"
    >
      <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-amber-300">
        {month}
      </span>
      <span className="text-[1.35rem] font-black leading-none text-white">{day}</span>
      <span className="mt-0.5 text-[9px] font-semibold tracking-wide text-blue-200/70">
        {year}
      </span>
    </time>
  );
}

function PdfBadge({ label, tone = "light" }: { label: string; tone?: "light" | "dark" }) {
  const styles =
    tone === "dark"
      ? "bg-rose-500/20 border-rose-400/30 text-rose-200"
      : "bg-rose-50 border-rose-100 text-rose-700";

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 text-[9px] font-black uppercase tracking-widest ${styles}`}>
      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
      {label}
    </span>
  );
}

export default function PgNewsEvents() {
  const { openModal } = useApplyModal();

  return (
    <section id="pg-news" className="bg-white scroll-mt-24">
      <a
        href={bannerNews.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Latest PG news: ${bannerNews.title}. Open official PDF.`}
        className="group block bg-[#0d1f3c] border-y border-white/10 hover:bg-[#122848] transition-colors"
      >
        <div className="flex flex-col sm:flex-row sm:items-center max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-16">
          <div className="shrink-0 flex items-center gap-2.5 py-2.5 sm:py-3.5 sm:pr-6 sm:mr-6 sm:border-r sm:border-white/25">
            <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse" aria-hidden />
            <span className="text-[11px] sm:text-[12px] font-black uppercase tracking-[0.2em] text-white whitespace-nowrap">
              Latest News
            </span>
          </div>
          <p className="min-w-0 flex-1 pb-3 sm:py-3.5 text-[13px] sm:text-[14px] font-medium leading-relaxed text-white/95">
            {bannerNews.headline ?? bannerNews.title}{" "}
            {bannerNews.isNew && (
              <span className="ml-1 inline-block align-middle rounded-[3px] bg-rose-600 px-1.5 py-[2px] text-[9px] font-black uppercase tracking-wider text-white">
                New
              </span>
            )}
          </p>
        </div>
      </a>

      <div className="py-[50px] px-6 sm:px-8 lg:px-16">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-amber-600 mb-3">
                MCC NEET-PG Counselling
              </p>
              <h2 className="font-black text-[2rem] sm:text-[2.6rem] leading-none tracking-tight text-gray-950">
                PG News &amp; Events
              </h2>
              <p className="mt-3 text-slate-500 font-medium text-[15px] max-w-xl">
                Official notices and allotment PDFs for MD / MS / DNB seats.
                Always verify on the MCC portal before you report.
              </p>
            </div>
            <a
              href={MCC_PG_NEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 self-start sm:self-auto text-[11px] font-bold tracking-[0.16em] uppercase text-slate-800 hover:text-amber-700 border-b-2 border-slate-800 hover:border-amber-600 pb-0.5 transition-colors"
            >
              MCC PG portal
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          </div>

          {/* Intro + Current Events — MCC-style two column, no empty gap */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10 items-start">
            <div className="lg:col-span-7">
              <h3 className="font-black text-[1.35rem] sm:text-[1.6rem] leading-snug tracking-tight text-slate-900">
                Online NEET – PG Seats Allotment process
              </h3>
              <p className="mt-4 text-[14px] leading-relaxed text-slate-600">
                As per the directions of the Hon&apos;ble Supreme Court of India,
                Directorate General of Health Services (DGHS), Ministry of Health
                &amp; Family Welfare, conducts online counselling for All India
                Quota postgraduate medical seats. Track MCC stray vacancy results,
                allotment lists and NRI eligibility notices here with official PDF
                links.
              </p>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { t: "Allotment letter", d: "Download from MCC / INTRAMCC only" },
                  { t: "Report with originals", d: "Reach allotted institute on schedule" },
                  { t: "NRI documents", d: "Guardian proof + affidavit ready" },
                ].map((item) => (
                  <div
                    key={item.t}
                    className="rounded-xl border border-slate-200 bg-[#f7f8fc] px-4 py-3.5"
                  >
                    <p className="text-[12px] font-black text-slate-900">{item.t}</p>
                    <p className="mt-1 text-[12px] leading-snug text-slate-500">{item.d}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={featured.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#0d1f3c] shadow-lg shadow-amber-500/20 hover:bg-amber-400 transition-colors"
                >
                  View more
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                    <path d="M7 17L17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <button
                  type="button"
                  onClick={openModal}
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-800 hover:border-amber-400 hover:text-amber-800 transition-colors"
                >
                  Talk to counsellor
                </button>
              </div>
            </div>

            <aside className="lg:col-span-5 rounded-2xl border border-slate-200 bg-[#f7f8fc] p-5 sm:p-6">
              <div className="flex items-center justify-between gap-3 mb-4">
                <h3 className="font-black text-[1.05rem] text-slate-900">Current Events</h3>
                <span className="rounded-full bg-rose-100 px-2.5 py-0.5 text-[9px] font-black uppercase tracking-widest text-rose-700">
                  {pgNews.length} live
                </span>
              </div>
              <ul className="divide-y divide-slate-200">
                {pgNews.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-3 py-3.5 first:pt-0 last:pb-0"
                    >
                      <span className="mt-1.5 text-slate-400 group-hover:text-amber-600 transition-colors" aria-hidden>
                        ▸
                      </span>
                      <span className="min-w-0">
                        <span className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="text-[10px] font-bold text-slate-400">{item.dateLabel}</span>
                          {item.isNew && (
                            <span className="rounded-[3px] bg-rose-600 px-1.5 py-[1px] text-[8px] font-black uppercase tracking-wider text-white">
                              New
                            </span>
                          )}
                        </span>
                        <span className="block text-[13px] font-semibold leading-snug text-slate-800 group-hover:text-amber-800 transition-colors">
                          {item.title}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={MCC_PG_NEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-amber-500 px-4 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#0d1f3c] hover:bg-amber-400 transition-colors"
              >
                View more on MCC
              </a>
            </aside>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-7 flex flex-col gap-3">
              <article className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0d1f3c] via-[#0f2a4a] to-[#163a5f] p-6 sm:p-8 text-white shadow-xl">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-white/10" aria-hidden />
                <div className="absolute -right-4 top-8 h-24 w-24 rounded-full border border-white/10" aria-hidden />

                <div className="relative flex flex-wrap items-center gap-2 mb-5">
                  {featured.isNew && (
                    <span className="rounded-full bg-amber-400 px-2.5 py-0.5 text-[9px] font-black uppercase tracking-widest text-[#0d1f3c]">
                      New
                    </span>
                  )}
                  <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest text-amber-200">
                    {featured.tag}
                  </span>
                  <time dateTime={featured.date} className="text-[11px] font-semibold text-blue-200/80">
                    {featured.dateLabel}
                  </time>
                  <PdfBadge label={featured.fileLabel ?? "PDF"} tone="dark" />
                </div>

                <h3 className="relative font-black text-[1.15rem] sm:text-[1.35rem] leading-snug tracking-tight">
                  {featured.title}
                </h3>
                <p className="relative mt-4 text-[14px] leading-relaxed text-blue-100/75 max-w-xl">
                  {featured.summary}
                </p>

                <div className="relative mt-8 flex flex-wrap gap-3">
                  <a
                    href={featured.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#0d1f3c] shadow-lg shadow-amber-500/25 hover:bg-amber-400 transition-colors"
                  >
                    Open official PDF
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                      <path d="M7 17L17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <button
                    type="button"
                    onClick={openModal}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/5 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-white hover:bg-white/10 transition-colors"
                  >
                    Get counselling
                  </button>
                </div>
              </article>

              <div className="flex flex-1 flex-col rounded-2xl border border-amber-100 bg-amber-50/70 p-6 sm:p-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-amber-800 mb-2">
                  Need help with these PG notices?
                </p>
                <h3 className="font-black text-[1.15rem] leading-snug text-slate-900">
                  Check allotment, NRI papers and reporting before the deadline.
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
                  Stray vacancy result, seat allotment PDF or NRI eligibility —
                  we map what applies to your NEET-PG rank and documents.
                </p>

                <div className="mt-4 space-y-2">
                  {pgNews.map((item) => (
                    <a
                      key={item.id}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 rounded-xl border border-amber-200/80 bg-white p-3.5 hover:border-amber-400 hover:shadow-sm transition-all"
                    >
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-rose-50 text-rose-600">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[10px] font-bold uppercase tracking-widest text-amber-800">
                          {item.fileLabel} · {item.dateLabel}
                        </span>
                        <span className="mt-0.5 block font-bold text-[13px] leading-snug text-slate-900">
                          {item.title}
                        </span>
                      </span>
                    </a>
                  ))}
                </div>

                <div className="mt-5 grid grid-cols-3 gap-2">
                  {[
                    { n: "01", t: "Open PDF" },
                    { n: "02", t: "Match rank" },
                    { n: "03", t: "Report seat" },
                  ].map((step) => (
                    <div
                      key={step.n}
                      className="rounded-xl border border-amber-100 bg-white px-3 py-3"
                    >
                      <p className="text-[10px] font-black tracking-widest text-amber-700">{step.n}</p>
                      <p className="mt-1 text-[12px] font-bold leading-snug text-slate-800">{step.t}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-3">
              {rest.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-4 rounded-2xl border border-slate-200 bg-[#f7f8fc] p-4 transition-all duration-200 hover:border-amber-300 hover:bg-white hover:shadow-md"
                >
                  <DateStamp date={item.date} label={item.dateLabel} />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="text-[9px] font-black uppercase tracking-widest text-amber-800 bg-amber-50 border border-amber-100 rounded px-2 py-0.5">
                        {item.tag}
                      </span>
                      {item.isNew && (
                        <span className="text-[9px] font-black uppercase tracking-widest text-rose-600">
                          New
                        </span>
                      )}
                      <PdfBadge label="PDF" />
                    </div>
                    <h3 className="font-bold text-[13.5px] leading-snug text-slate-900 group-hover:text-amber-800 transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[12px] text-slate-500 leading-relaxed line-clamp-2">
                      {item.summary}
                    </p>
                  </div>
                </a>
              ))}

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-2">
                  Quota abbreviations
                </p>
                <p className="text-[13px] font-semibold text-slate-800 mb-3">
                  Quick reference from the Stray Vacancy allotment PDF
                </p>
                <div className="grid grid-cols-2 gap-2 text-[12px]">
                  {[
                    ["AI", "All India"],
                    ["NR", "Non-Resident Indian"],
                    ["DU", "Delhi University"],
                    ["AD", "DNB Quota"],
                    ["GN", "Open Seat"],
                    ["BC", "OBC-NCL"],
                  ].map(([code, label]) => (
                    <div key={code} className="rounded-lg border border-slate-100 bg-[#f7f8fc] px-3 py-2">
                      <span className="font-black text-amber-700">{code}</span>
                      <span className="text-slate-500"> · {label}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={pgNews.find((n) => n.id === "stray-allotment-list-23-feb")?.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-amber-800 hover:text-amber-950"
                >
                  Full allotment PDF
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
