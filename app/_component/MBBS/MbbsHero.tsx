"use client";

import Image from "next/image";
import { useApplyModal } from "@/context/ApplyModalContext";
import { colleges } from "@/config/mbbs-college";

export default function MbbsHero() {
  const { openModal } = useApplyModal();
  const featuredColleges = [colleges[0], colleges[7], colleges[14], colleges[21]];

  return (
    <section className="relative min-h-[70vh] bg-gradient-to-br from-[#0d1f3c] via-[#0f2a4a] to-[#1a365d] flex items-center overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute top-10 left-10 w-64 h-64 border border-white rounded-full" />
        <div className="absolute top-20 left-20 w-96 h-96 border border-white rounded-full" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 border border-white rounded-full" />
      </div>
      <div className="relative w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-16 py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-emerald-400/30 bg-emerald-400/10 backdrop-blur rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-emerald-300">
                2026–27 MBBS Admissions Open
              </span>
            </div>
            <h1 className="font-black leading-[1] tracking-[-0.02em] text-[clamp(2.8rem,6vw,4.5rem)]">
              <span className="block text-white">Begin Your</span>
              <span className="block text-emerald-400">Medical Journey</span>
              <span className="block text-white">With India&apos;s Top</span>
              <span className="block text-white">Medical Colleges.</span>
            </h1>
            <p className="mt-6 text-[15px] font-medium leading-relaxed text-blue-200/80 max-w-[500px]">
              Secure your seat at premier medical institutions across India.
              From NEET counselling to final admission, we guide you through
              every step of the journey.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <button
                onClick={openModal}
                className="inline-flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 active:scale-[0.97] transition-all duration-200 text-white font-bold text-[11px] tracking-[0.2em] uppercase px-6 py-[14px] rounded-lg shadow-lg shadow-emerald-600/30"
              >
                Apply for MBBS
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <a
                href="#colleges"
                className="inline-flex items-center font-bold text-[11px] tracking-[0.2em] uppercase px-6 py-[14px] rounded-lg border border-emerald-400/40 hover:border-emerald-300 text-emerald-200 hover:text-white transition-all duration-200 active:scale-[0.97] bg-transparent"
              >
                View Colleges
              </a>
            </div>
            <div className="mt-12 flex items-center gap-8">
              <div className="flex -space-x-3">
                {featuredColleges.map((college) => (
                  <div
                    key={college.name}
                    className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-[#0f2a4a] bg-slate-900"
                  >
                    <img
                      src={college.image}
                      alt={college.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-white font-bold text-lg leading-none">25+</p>
                <p className="text-blue-300/70 text-[11px] font-semibold tracking-wide">Partner Medical Colleges</p>
              </div>
            </div>
          </div>

          {/* RIGHT - Image */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-emerald-500/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1200&auto=format&fit=crop"
                  alt="Medical College Campus"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-3">
                <p className="text-white font-bold text-lg">#1</p>
                <p className="text-blue-200 text-[10px] font-semibold uppercase tracking-wider">Admissions Partner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}