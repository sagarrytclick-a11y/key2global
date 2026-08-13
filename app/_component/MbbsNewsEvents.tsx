"use client";

import { MCC_NEWS_URL, mbbsNews } from "@/config/mbbs-news";
import { useApplyModal } from "@/context/ApplyModalContext";

const [featured, ...rest] = mbbsNews;

function DateStamp({ date, label }: { date: string; label: string }) {
  const [day, month, year] = label.split(" ");

  return (
    <time
      dateTime={date}
      className="flex shrink-0 flex-col items-center justify-center rounded-xl bg-[#0d1f3c] px-3 py-2.5 text-center min-w-[4.5rem]"
    >
      <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-emerald-300">
        {month}
      </span>
      <span className="text-[1.35rem] font-black leading-none text-white">{day}</span>
      <span className="mt-0.5 text-[9px] font-semibold tracking-wide text-blue-200/70">
        {year}
      </span>
    </time>
  );
}

export default function MbbsNewsEvents() {
  const { openModal } = useApplyModal();

  return (
    <section id="news" className="bg-white scroll-mt-24">
      <div className="bg-[#0d1f3c] overflow-hidden border-y border-emerald-400/20">
        <div className="flex items-center gap-4 max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-16 py-2.5">
          <span className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-emerald-500 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
            Live
          </span>
          <div className="min-w-0 flex-1 overflow-hidden">
            <div className="flex w-max animate-marquee-fast">
              {[...mbbsNews, ...mbbsNews].map((item, i) => (
                <span
                  key={`${item.id}-${i}`}
                  className="flex items-center gap-3 pr-10 text-[12px] font-medium text-blue-100/90"
                >
                  <span className="h-1 w-1 rounded-full bg-emerald-400 shrink-0" />
                  {item.title}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="py-[50px] px-6 sm:px-8 lg:px-16">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-emerald-600 mb-3">
                MCC UG Counselling 2026–27
              </p>
              <h2 className="font-black text-[2rem] sm:text-[2.6rem] leading-none tracking-tight text-gray-950">
                News &amp; Events
              </h2>
              <p className="mt-3 text-slate-500 font-medium text-[15px] max-w-xl">
                Official notices for MBBS, BDS, BAMS, BUMS &amp; BHMS admissions.
                Always verify on the MCC portal before you act.
              </p>
            </div>
            <a
              href={MCC_NEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 self-start sm:self-auto text-[11px] font-bold tracking-[0.16em] uppercase text-slate-800 hover:text-emerald-700 border-b-2 border-slate-800 hover:border-emerald-600 pb-0.5 transition-colors"
            >
              All MCC notices
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-7 flex flex-col gap-3">
              <article className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0d1f3c] via-[#0f2a4a] to-[#163a5f] p-6 sm:p-8 text-white shadow-xl">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-white/10" aria-hidden />
                <div className="absolute -right-4 top-8 h-24 w-24 rounded-full border border-white/10" aria-hidden />

                <div className="relative flex flex-wrap items-center gap-2 mb-5">
                  {featured.isNew && (
                    <span className="rounded-full bg-emerald-400 px-2.5 py-0.5 text-[9px] font-black uppercase tracking-widest text-[#0d1f3c]">
                      New
                    </span>
                  )}
                  <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest text-emerald-200">
                    {featured.tag}
                  </span>
                  <time dateTime={featured.date} className="text-[11px] font-semibold text-blue-200/80">
                    {featured.dateLabel}
                  </time>
                </div>

                <h3 className="relative font-black text-[1.15rem] sm:text-[1.35rem] leading-snug tracking-tight">
                  {featured.title}
                </h3>
                <p className="relative mt-4 text-[14px] leading-relaxed text-blue-100/75 max-w-xl">
                  {featured.summary}
                </p>

                <div className="relative mt-8 flex flex-wrap gap-3">
                  <a
                    href={MCC_NEWS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-white shadow-lg shadow-emerald-500/25 hover:bg-emerald-400 transition-colors"
                  >
                    View official list
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

              <div className="flex flex-1 flex-col justify-between rounded-2xl border border-emerald-100 bg-emerald-50/70 p-6 sm:p-7">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-emerald-700 mb-2">
                    Need help with these notices?
                  </p>
                  <h3 className="font-black text-[1.15rem] leading-snug text-slate-900">
                    Check your name, quota and next step before choice filling.
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
                    CW list, Puducherry domicile, PwBD boards or reset registration — we will tell you exactly what applies to your NEET profile.
                  </p>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-2">
                  {[
                    { n: "01", t: "Match roll no." },
                    { n: "02", t: "Confirm quota" },
                    { n: "03", t: "Fill choices" },
                  ].map((step) => (
                    <div
                      key={step.n}
                      className="rounded-xl border border-emerald-100 bg-white px-3 py-3"
                    >
                      <p className="text-[10px] font-black tracking-widest text-emerald-600">{step.n}</p>
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
                  href={MCC_NEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-4 rounded-2xl border border-slate-200 bg-[#f7f8fc] p-4 transition-all duration-200 hover:border-emerald-300 hover:bg-white hover:shadow-md"
                >
                  <DateStamp date={item.date} label={item.dateLabel} />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="text-[9px] font-black uppercase tracking-widest text-emerald-700 bg-emerald-50 border border-emerald-100 rounded px-2 py-0.5">
                        {item.tag}
                      </span>
                      {item.isNew && (
                        <span className="text-[9px] font-black uppercase tracking-widest text-rose-600">
                          New
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-[13.5px] leading-snug text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[12px] text-slate-500 leading-relaxed line-clamp-2">
                      {item.summary}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
