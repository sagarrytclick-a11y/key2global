"use client";

import Image from "next/image";
import { useApplyModal } from "@/context/ApplyModalContext";

export default function HeroSection() {
  const { openModal } = useApplyModal();

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#eef0f6] via-white to-[#e8ecf4] flex items-center overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-amber-400/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-blue-600 rounded-full opacity-30" />
        <div className="absolute top-1/4 right-1/3 w-1.5 h-1.5 bg-indigo-600 rounded-full opacity-20" />
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-amber-500 rounded-full opacity-25" />
      </div>

      <div className="relative w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── LEFT ── */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md border border-gray-200/80 rounded-full px-5 py-2 mb-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500" />
              </span>
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-gray-600">
                2026–27 Enterprise Enrollment Open
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-black leading-[1] tracking-[-0.02em] text-[clamp(2.8rem,6vw,5rem)]">
              <span className="block text-gray-950">Empowering</span>
              <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                Global Futures.
              </span>
              <span className="block text-gray-950">Premium</span>
              <span className="block text-gray-950">Admissions.</span>
            </h1>

            {/* Body */}
            <p className="mt-7 text-[14px] sm:text-[15px] font-semibold leading-[1.7] text-gray-600 max-w-[420px] mx-auto lg:mx-0">
              Your premier scholastic gateway for elite tech, business, and medical
              careers. In partnership with our specialized subsidiaries, we
              provide comprehensive college placement and strategic academic
              guidance to secure your seat in global education hubs.
            </p>

            {/* CTAs */}
            <div className="mt-9 flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 items-stretch sm:items-center">
              <button
                onClick={openModal}
                className="group inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 active:scale-[0.97] transition-all duration-200 text-white font-bold text-[11px] tracking-[0.2em] uppercase px-7 py-[15px] rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 w-full sm:w-auto"
              >
                Apply to Colleges
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path d="M1.5 13.5L6 9M6 9C6 9 5 5.5 7.5 3C10 0.5 13.5 1.5 13.5 1.5C13.5 1.5 14.5 5 12 7.5C9.5 10 6 9 6 9ZM6 9L4 11" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="10" cy="5" r="1" fill="white" />
                </svg>
              </button>
              <a
                href="#partners"
                className="group inline-flex items-center font-bold text-[11px] tracking-[0.2em] uppercase px-7 py-[15px] rounded-xl border-2 border-gray-300 hover:border-gray-800 text-gray-700 hover:text-gray-950 transition-all duration-200 active:scale-[0.97] bg-white/80 hover:bg-white"
              >
                Our Partners
                <svg className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Subsidiaries List */}
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest border-b sm:border-b-0 sm:border-r border-gray-300 pb-2 sm:pb-0 sm:pr-6">Our Group</span>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-5">
                {["MedicalCounselling", "Edugayoverseas", "Alphaworldeducation"].map((name, i) => {
                  const colors = ["text-blue-700", "text-red-700", "text-amber-700"];
                  const bgColors = ["bg-blue-50", "bg-red-50", "bg-amber-50"];
                  return (
                    <span
                      key={name}
                      className={`${colors[i]} ${bgColors[i]} px-3 py-1.5 rounded-full text-[10px] font-bold tracking-tight uppercase border border-current/20 hover:shadow-sm transition-all duration-200`}
                    >
                      {name}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div className="flex flex-col gap-5">

            {/* ── AlphaWorld Education Card ── */}
            <div className="bg-gradient-to-br from-[#0d1f3c] to-[#1a365d] rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.18)] transition-shadow duration-300 relative group">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-[0.08]">
                <div className="absolute top-0 right-0 w-40 h-40 bg-amber-400 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-400 rounded-full blur-3xl" />
              </div>
              
              <div className="relative p-6 z-10">
                <div className="flex items-start justify-between mb-4">
                  <span className="bg-gradient-to-r from-amber-400/20 to-amber-500/10 text-amber-300 font-bold text-[9.5px] tracking-[0.18em] uppercase px-3 py-1 rounded-md border border-amber-400/20">
                    Featured Partner
                  </span>
                  <div className="text-right">
                    <p className="text-[9px] font-semibold tracking-[0.2em] uppercase text-white/50 mb-1">
                      Global Reach
                    </p>
                    <p className="font-black text-amber-400 text-[24px] leading-none tracking-tight">
                      15+
                    </p>
                    <p className="text-[9px] font-bold tracking-widest uppercase text-white/50 mt-1">
                      Countries
                    </p>
                  </div>
                </div>

                <h3 className="font-black text-white text-[18px] leading-snug tracking-tight mb-2">
                  AlphaWorldEducation.com
                </h3>
                <p className="text-[13px] text-white/70 leading-relaxed mb-6">
                  Your gateway to elite universities across USA, UK, Canada, Australia &amp; Europe. Expert guidance for B.Tech, MBA &amp; specialized programs.
                </p>

                <a
                  href="https://alphaworldeducation.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn w-full bg-amber-500 hover:bg-amber-400 active:scale-[0.98] transition-all duration-200 text-gray-900 font-bold text-[11px] tracking-[0.22em] uppercase py-[14px] rounded-lg inline-flex items-center justify-center gap-2"
                >
                  Explore Programs
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* ── Global Campuses Image Card ── */}
            <div className="relative rounded-2xl overflow-hidden h-[240px] shadow-[0_8px_40px_rgba(0,0,0,0.12)] group cursor-pointer">
              <Image
                src="https://i.pinimg.com/736x/f3/1b/00/f31b0078a93513b1493e9eabea7a9dec.jpg"
                alt="Global Campuses"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Caption */}
              <div className="absolute bottom-4 left-5">
                <p className="text-white font-bold text-[13.5px] tracking-tight">
                  Premium Global Campuses
                </p>
                <p className="text-white/60 font-normal text-[11px] mt-0.5">
                  Germany · UK · Canada · Singapore
                </p>
              </div>

              {/* Live badge */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-3 py-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
                </span>
                <span className="text-white font-semibold text-[10px] tracking-wide">
                  Live Placements
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
