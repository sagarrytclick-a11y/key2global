"use client";

import Image from "next/image";
import Link from "next/link";
import { useApplyModal } from "@/context/ApplyModalContext";
import { pgNews } from "@/config/pg-news";

export default function PgHero() {
  const { openModal } = useApplyModal();
  const latest = pgNews[0];

  return (
    <section className="relative min-h-[62vh] bg-gradient-to-br from-[#0d1f3c] via-[#0f2a4a] to-[#1a365d] flex items-center overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" aria-hidden>
        <div className="absolute top-10 left-10 w-64 h-64 border border-white rounded-full" />
        <div className="absolute top-20 left-20 w-96 h-96 border border-white rounded-full" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 border border-white rounded-full" />
      </div>

      <div className="relative w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-16 py-[50px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-amber-400/30 bg-amber-400/10 backdrop-blur rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-amber-200">
                MCC NEET-PG Counselling Updates
              </span>
            </div>

            <h1 className="font-black leading-[1] tracking-[-0.02em] text-[clamp(2.4rem,5.5vw,4rem)]">
              <span className="block text-white">NEET-PG News</span>
              <span className="block text-amber-400">&amp; Seat Allotment</span>
            </h1>

            <p className="mt-6 text-[15px] font-medium leading-relaxed text-blue-200/80 max-w-[520px]">
              Official MCC notices for postgraduate medical counselling — NRI
              eligibility, stray vacancy results, and seat allotment lists with
              direct PDF downloads.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <button
                type="button"
                onClick={openModal}
                className="inline-flex items-center gap-2.5 bg-amber-500 hover:bg-amber-400 active:scale-[0.97] transition-all duration-200 text-[#0d1f3c] font-bold text-[11px] tracking-[0.2em] uppercase px-6 py-[14px] rounded-lg shadow-lg shadow-amber-500/25"
              >
                Get PG counselling
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <a
                href="#pg-news"
                className="inline-flex items-center font-bold text-[11px] tracking-[0.2em] uppercase px-6 py-[14px] rounded-lg border border-amber-400/40 hover:border-amber-300 text-amber-100 hover:text-white transition-all duration-200 active:scale-[0.97]"
              >
                View latest notices
              </a>
              <Link
                href="/MBBS"
                className="inline-flex items-center font-bold text-[11px] tracking-[0.2em] uppercase text-blue-200/80 hover:text-white transition-colors"
              >
                UG / MBBS news →
              </Link>
            </div>

            <a
              href={latest.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 flex max-w-xl items-start gap-3 rounded-xl border border-white/15 bg-white/5 p-4 hover:bg-white/10 transition-colors"
            >
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-rose-500/20 text-rose-300">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </span>
              <span className="min-w-0">
                <span className="block text-[10px] font-bold uppercase tracking-widest text-amber-300">
                  Latest · {latest.dateLabel}
                </span>
                <span className="mt-1 block text-[13px] font-semibold leading-snug text-white">
                  {latest.title}
                </span>
              </span>
            </a>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-amber-500/15 rounded-3xl blur-2xl" aria-hidden />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="https://i.pinimg.com/736x/6b/53/73/6b53731c6b8f07fac481ffc5c87f4639.jpg"
                  alt="NEET-PG medical counselling"
                  fill
                  priority
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-3">
                <p className="text-white font-bold text-lg">{pgNews.length}</p>
                <p className="text-blue-200 text-[10px] font-semibold uppercase tracking-wider">
                  Active PG Notices
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
