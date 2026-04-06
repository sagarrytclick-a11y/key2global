"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useApplyModal } from "@/context/ApplyModalContext";

function useCountdown() {
  const [time, setTime] = useState({ h: 8, m: 24, s: 15 });
  useEffect(() => {
    const id = setInterval(() => {
      setTime((prev) => {
        const { h, m, s } = prev;
        if (s > 0) return { h, m, s: s - 1 };
        if (m > 0) return { h, m: m - 1, s: 59 };
        if (h > 0) return { h: h - 1, m: 59, s: 59 };
        clearInterval(id);
        return { h: 0, m: 0, s: 0 };
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function HeroSection() {
  const { openModal } = useApplyModal();
  const timer = useCountdown();

  return (
    <section className="min-h-screen bg-[#eef0f6] flex items-center">
      <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── LEFT ── */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-gray-300 bg-white/80 backdrop-blur rounded-full px-4 py-1.5 mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-gray-500">
                2026–27 Enterprise Enrollment Open
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-black leading-[1] tracking-[-0.02em] text-[clamp(3rem,6.5vw,5rem)]">
              <span className="block text-gray-950">Empowering</span>
              <span className="block text-blue-600">Global Futures.</span>
              <span className="block text-gray-950">Premium</span>
              <span className="block text-gray-950">Admissions.</span>
            </h1>

            {/* Body */}
            <p className="mt-7 text-[14px] font-semibold leading-[1.7] text-gray-700 max-w-[400px]">
              Your premier scholastic gateway for elite tech, business, and medical
              careers. In partnership with our specialized subsidiaries, we
              provide comprehensive college placement and strategic academic
              guidance to secure your seat in global education hubs.
            </p>

            {/* CTAs */}
            <div className="mt-9 flex flex-wrap gap-4 items-center">
              <button
                onClick={openModal}
                className="inline-flex items-center gap-2.5 bg-blue-700 hover:bg-blue-800 active:scale-[0.97] transition-all duration-200 text-white font-bold text-[11px] tracking-[0.2em] uppercase px-6 py-[14px] rounded-lg shadow-lg shadow-blue-200"
              >
                Apply to Colleges
                {/* rocket icon */}
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path d="M1.5 13.5L6 9M6 9C6 9 5 5.5 7.5 3C10 0.5 13.5 1.5 13.5 1.5C13.5 1.5 14.5 5 12 7.5C9.5 10 6 9 6 9ZM6 9L4 11" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="10" cy="5" r="1" fill="white" />
                </svg>
              </button>
              <a
                href="#"
                className="inline-flex items-center font-bold text-[11px] tracking-[0.2em] uppercase px-6 py-[14px] rounded-lg border border-gray-400 hover:border-gray-700 text-gray-800 hover:text-gray-950 transition-all duration-200 active:scale-[0.97] bg-transparent"
              >
                Our Partners
              </a>
            </div>

            {/* Subsidiaries List */}
            <div className="mt-10 flex items-center gap-6">
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest border-r border-gray-300 pr-6">Our Group</span>
              <div className="flex flex-wrap gap-5 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
                <span className="text-[10px] font-black tracking-tight text-blue-900 uppercase">MedicalCounselling</span>
                <span className="text-[10px] font-black tracking-tight text-red-900 uppercase">Edugayoverseas</span>
                <span className="text-[10px] font-black tracking-tight text-yellow-900 uppercase">Alphaworldeducation</span>
              </div>
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div className="flex flex-col gap-5">

            {/* ── AlphaWorld Education Card ── */}
            <div className="bg-gradient-to-br from-[#0d1f3c] to-[#1a365d] rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.15)] relative">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-400 rounded-full blur-3xl" />
              </div>
              
              <div className="relative p-6 z-10">
                <div className="flex items-start justify-between mb-4">
                  <span className="bg-amber-400/20 text-amber-300 font-bold text-[9.5px] tracking-[0.18em] uppercase px-2.5 py-1 rounded-sm border border-amber-400/30">
                    ✨ Featured Partner
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
                  className="w-full bg-amber-500 hover:bg-amber-400 active:scale-[0.98] transition-all duration-200 text-gray-900 font-bold text-[11px] tracking-[0.22em] uppercase py-[14px] rounded-lg inline-block text-center"
                >
                  Explore Programs →
                </a>
              </div>
            </div>

            {/* ── Global Campuses Image Card ── */}
            <div className="relative rounded-2xl overflow-hidden h-[240px] shadow-[0_8px_40px_rgb a(0,0,0,0.18)]">
              <Image
                src="https://i.pinimg.com/736x/f3/1b/00/f31b0078a93513b1493e9eabea7a9dec.jpg"
                alt="Global Campuses"
                fill
                className="object-cover"
              />

              {/* Bottom overlay for text readability */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent" />

              {/* Caption */}
              <div className="absolute bottom-4 left-5">
                <p className="text-white font-bold text-[13.5px] tracking-tight">
                  Premium Global Campuses
                </p>
                <p className="text-white/50 font-normal text-[11px] mt-0.5">
                  Germany · UK · Canada · Singapore
                </p>
              </div>

              {/* Live badge */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-3 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
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