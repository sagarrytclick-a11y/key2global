"use client";

import Image from 'next/image';
import { subsidiaries } from '@/siteidentity';

export default function MedicalCounselling() {
  const medicalSite = subsidiaries.find(s => s.name === "MedicalCounselling");
  return (
    <section className="bg-[#f5f6fa] py-20 px-4 sm:px-10">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">

        {/* ── LEFT ── */}
        <div className="lg:col-span-1">
          {/* Eyebrow */}
          <p className="text-[10px] bg-red-500 font-semibold flex items-center justify-center old tracking-[0.28em] p-3 rounded uppercase text-white mb-4">
            India Operations Wing
          </p>

          {/* Heading with Logo */}
          <a
            href={medicalSite?.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center flex-col sm:flex-row gap-4 mb-6 group hover:opacity-90 transition-opacity"
          >
            <div className="relative w-16 h-16 shrink-0">
              <Image
                src="/logo/medicalcounselling.png"
                alt="MedicalCounselling Logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="font-black text-gray-950 text-[1.8rem] sm:text-[2.5rem] tracking-tight wrap-break-word">
              MedicalCounselling.com
            </h2>
          </a>

          {/* Body */}
          <p className="text-gray-700 font-semibold text-[14px] leading-[1.75] mb-8 max-w-sm">
            Expert-led Medical UG/PG program admission counselling guidance
            specifically for Indian Medical Colleges. We navigate the complex
            NEET PG landscape for high-stakes placements.
          </p>

          {/* Feature rows */}
          <div className="flex flex-col gap-4 mb-9">
            {/* Row 1 */}
            <div className="flex items-start gap-4 border border-gray-200 bg-white rounded-xl px-4 py-3.5 shadow-sm">
              <div className="shrink-0 mt-0.5 w-9 h-9 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="2" y="4" width="14" height="10" rx="2" stroke="#b91c1c" strokeWidth="1.5" />
                  <path d="M5 8h3M5 11h5M10 8h3" stroke="#b91c1c" strokeWidth="1.3" strokeLinecap="round" />
                  <path d="M14 2l2 2-2 2" stroke="#b91c1c" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="font-black text-gray-900 text-[13px] tracking-tight">
                  NEET PG Strategy Matrix
                </p>
                <p className="text-gray-500 text-[12px] mt-0.5 font-normal">
                  Data-driven rank prediction and college matching.
                </p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex items-start gap-4 border border-gray-200 bg-white rounded-xl px-4 py-3.5 shadow-sm">
              <div className="shrink-0 mt-0.5 w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2 14V6l7-4 7 4v8" stroke="#1d4ed8" strokeWidth="1.5" strokeLinejoin="round" />
                  <rect x="6" y="9" width="6" height="5" stroke="#1d4ed8" strokeWidth="1.4" />
                  <path d="M4 14h10" stroke="#1d4ed8" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <p className="font-black text-gray-900 text-[13px] tracking-tight">
                  28 State Quota Expertise
                </p>
                <p className="text-gray-500 text-[12px] mt-0.5 font-normal">
                  Localized guidance for every medical seat in India.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <a
            href={medicalSite?.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 font-bold text-[11.5px] tracking-[0.2em] uppercase border-b border-blue-300 hover:border-blue-700 pb-0.5 transition-all duration-150"
          >
            Enter Medical Portal
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 4l4 3-4 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* ── CENTER — Image ── */}
        <div className="lg:col-span-1 flex items-stretch">
          <div className="w-full rounded-2xl overflow-hidden shadow-xl h-[320px] lg:h-full relative">
            <img
              src="/websites/medicalcounselling.png"
              alt="Medical counselling"
              className="w-full h-full object-cover"
            />
            {/* subtle bottom gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </div>
        </div>

        {/* ── RIGHT — Info Card ── */}
        <div className="lg:col-span-1">
          <div className="bg-[#2d4a8a] rounded-2xl p-7 h-full flex flex-col justify-between min-h-[280px] shadow-xl">
            {/* Top */}
            <div>
              <p className="text-[9.5px] font-bold tracking-[0.25em] uppercase text-white/50 mb-3">
                Top Trending Course
              </p>
              <h3 className="font-black text-white text-[1.5rem] leading-snug tracking-tight mb-4">
                MD Radio-Diagnosis<br />Specialization
              </h3>
              <p className="text-white/70 text-[13px] font-normal leading-relaxed">
                Highest demand for 2026. Expert vacancy tracking active.
              </p>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/10 my-6" />

            {/* Stat */}
            <div>
              <p className="font-black text-white text-[3rem] leading-none tracking-tight">
                450+
              </p>
              <p className="text-[9.5px] font-bold tracking-[0.22em] uppercase text-white/50 mt-1">
                Admissions Guided in 2023
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}