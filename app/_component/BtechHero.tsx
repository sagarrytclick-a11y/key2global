"use client";

import Image from "next/image";
import { useApplyModal } from "@/context/ApplyModalContext";
import { colleges } from "@/config/btech-college";

export default function BtechHero() {
  const { openModal } = useApplyModal();
  const featuredColleges = [colleges[0], colleges[7], colleges[14], colleges[21]];

  return (
    <section className="relative min-h-[70vh] bg-gradient-to-br from-[#0d1f3c] via-[#0f2a4a] to-[#1a365d] flex items-center overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute top-10 left-10 w-64 h-64 border border-white rounded-full" />
        <div className="absolute top-20 left-20 w-96 h-96 border border-white rounded-full" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 border border-white rounded-full" />
      </div>
      <div className="relative w-full max-w-[1280px] mx-auto px-6 sm:px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-blue-400/30 bg-blue-400/10 backdrop-blur rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-blue-300">
                2026–27 B.Tech Admissions Open
              </span>
            </div>
            <h1 className="font-black leading-[1] tracking-[-0.02em] text-[clamp(2.8rem,6vw,4.5rem)]">
              <span className="block text-white">Engineer Your</span>
              <span className="block text-blue-400">Future With</span>
              <span className="block text-white">India&apos;s Top</span>
              <span className="block text-white">Colleges.</span>
            </h1>
            <p className="mt-6 text-[15px] font-medium leading-relaxed text-blue-200/80 max-w-[500px]">
              Secure your seat at premier engineering institutions across India.
              From Delhi-NCR to Bangalore, we guide you through every step of
              the admission process.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <button
                onClick={openModal}
                className="inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 active:scale-[0.97] transition-all duration-200 text-white font-bold text-[11px] tracking-[0.2em] uppercase px-6 py-[14px] rounded-lg shadow-lg shadow-blue-600/30"
              >
                Apply for B.Tech
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <a
                href="#colleges"
                className="inline-flex items-center font-bold text-[11px] tracking-[0.2em] uppercase px-6 py-[14px] rounded-lg border border-blue-400/40 hover:border-blue-300 text-blue-200 hover:text-white transition-all duration-200 active:scale-[0.97] bg-transparent"
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
                <p className="text-blue-300/70 text-[11px] font-semibold tracking-wide">Partner Engineering Colleges</p>
              </div>
            </div>
          </div>

          {/* RIGHT - Image */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-500/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="https://i.pinimg.com/736x/fd/77/62/fd776246e277925be359a055c4e5328e.jpg"
                  alt="Engineering Campus"
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
