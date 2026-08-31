"use client";

import Image from "next/image";
import Link from "next/link";
import { useApplyModal } from "@/context/ApplyModalContext";

export default function HeroSection() {
  const { openModal } = useApplyModal();

  return (
    <section className="relative bg-gradient-to-br from-[#eef0f6] via-white to-[#e8ecf4] flex items-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="absolute -top-32 -right-32 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-10 sm:py-12 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* ── LEFT ── */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md border border-gray-200/80 rounded-full px-4 py-1.5 mb-5 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-gray-600">
                2026–27 Enterprise Enrollment Open
              </span>
            </div>

            <h1 className="font-black leading-[0.95] tracking-[-0.03em] text-[clamp(2.4rem,5vw,3.75rem)]">
              <span className="block text-gray-950">Empowering</span>
              <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                Global Futures.
              </span>
              <span className="block text-gray-950">Premium Admissions.</span>
            </h1>

            <p className="mt-4 text-[14px] sm:text-[15px] font-medium leading-relaxed text-gray-600 max-w-[460px] mx-auto lg:mx-0">
              Your premier scholastic gateway for elite tech, business, and medical
              careers. In partnership with our specialized subsidiaries, we
              provide college placement and strategic academic guidance for global hubs.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 items-stretch sm:items-center">
              <button
                onClick={openModal}
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 active:scale-[0.97] transition-all duration-200 text-white font-bold text-[11px] tracking-[0.18em] uppercase px-6 py-3.5 rounded-xl shadow-lg shadow-blue-500/25 w-full sm:w-auto"
              >
                Apply to Colleges
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden>
                  <path d="M1.5 13.5L6 9M6 9C6 9 5 5.5 7.5 3C10 0.5 13.5 1.5 13.5 1.5C13.5 1.5 14.5 5 12 7.5C9.5 10 6 9 6 9ZM6 9L4 11" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="10" cy="5" r="1" fill="white" />
                </svg>
              </button>
              <a
                href="#partners"
                className="group inline-flex items-center justify-center font-bold text-[11px] tracking-[0.18em] uppercase px-6 py-3.5 rounded-xl border-2 border-gray-300 hover:border-gray-800 text-gray-700 hover:text-gray-950 transition-all duration-200 active:scale-[0.97] bg-white/80 hover:bg-white"
              >
                Our Partners
                <svg className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest sm:border-r border-gray-300 sm:pr-4 shrink-0">
                Our Group
              </span>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {[
                  { name: "MedicalCounselling", color: "text-blue-700 bg-blue-50" },
                  { name: "Edugayoverseas", color: "text-red-700 bg-red-50" },
                  { name: "Alphaworldeducation", color: "text-amber-700 bg-amber-50" },
                ].map((item) => (
                  <span
                    key={item.name}
                    className={`${item.color} px-2.5 py-1 rounded-full text-[10px] font-bold tracking-tight uppercase border border-current/15`}
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 flex flex-wrap justify-center lg:justify-start gap-2">
              <Link
                href="/MBBS"
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-slate-700 hover:border-blue-300 hover:text-blue-700 transition-colors"
              >
                MBBS / UG
              </Link>
              <Link
                href="/PG"
                className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-amber-800 hover:border-amber-400 transition-colors"
              >
                PG News
              </Link>
              <Link
                href="/btech"
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-slate-700 hover:border-blue-300 hover:text-blue-700 transition-colors"
              >
                B.Tech
              </Link>
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="bg-gradient-to-br from-[#0d1f3c] to-[#1a365d] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)] relative">
              <div className="absolute inset-0 opacity-[0.08]" aria-hidden>
                <div className="absolute top-0 right-0 w-36 h-36 bg-amber-400 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-28 h-28 bg-blue-400 rounded-full blur-3xl" />
              </div>

              <div className="relative p-5 sm:p-6 z-10">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <span className="bg-amber-400/15 text-amber-300 font-bold text-[9.5px] tracking-[0.16em] uppercase px-2.5 py-1 rounded-md border border-amber-400/20">
                    Featured Partner
                  </span>
                  <div className="text-right shrink-0">
                    <p className="font-black text-amber-400 text-[22px] leading-none tracking-tight">15+</p>
                    <p className="text-[9px] font-bold tracking-widest uppercase text-white/50 mt-0.5">
                      Countries
                    </p>
                  </div>
                </div>

                <h3 className="font-black text-white text-[17px] leading-snug tracking-tight">
                  AlphaWorldEducation.com
                </h3>
                <p className="mt-2 text-[13px] text-white/70 leading-relaxed">
                  Elite universities across USA, UK, Canada, Australia &amp; Europe —
                  B.Tech, MBA and specialized programs with expert guidance.
                </p>

                <a
                  href="https://alphaworldeducation.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn mt-5 w-full bg-amber-500 hover:bg-amber-400 active:scale-[0.98] transition-all duration-200 text-gray-900 font-bold text-[11px] tracking-[0.18em] uppercase py-3.5 rounded-lg inline-flex items-center justify-center gap-2"
                >
                  Explore Programs
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-[200px] sm:h-[220px] shadow-[0_8px_32px_rgba(0,0,0,0.12)] group">
              <Image
                src="https://i.pinimg.com/736x/f3/1b/00/f31b0078a93513b1493e9eabea7a9dec.jpg"
                alt="Global Campuses"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between gap-3">
                <div>
                  <p className="text-white font-bold text-[13.5px] tracking-tight">
                    Premium Global Campuses
                  </p>
                  <p className="text-white/60 text-[11px] mt-0.5">
                    Germany · UK · Canada · Singapore
                  </p>
                </div>
                <div className="flex items-center gap-1.5 bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-2.5 py-1 shrink-0">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
                  </span>
                  <span className="text-white font-semibold text-[10px]">Live</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
