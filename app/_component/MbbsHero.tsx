"use client";

import Image from "next/image";
import { useApplyModal } from "@/context/ApplyModalContext";
import { colleges, REGION_ORDER } from "@/config/mbbs-college";

const FEATURED_REGIONS = ["Delhi", "Maharashtra", "Karnataka", "Tamil Nadu"] as const;

const featuredColleges = FEATURED_REGIONS.map(
  (region, i) => colleges.find((c) => c.region === region) ?? colleges[i]
);

const COLLEGE_COUNT = colleges.length;
const STATE_COUNT = REGION_ORDER.length;

export default function MbbsHero() {
  const { openModal } = useApplyModal();

  return (
    <section className="relative min-h-[70vh] bg-gradient-to-br from-[#0d1f3c] via-[#0f2a4a] to-[#1a365d] flex items-center overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" aria-hidden>
        <div className="absolute top-10 left-10 w-64 h-64 border border-white rounded-full" />
        <div className="absolute top-20 left-20 w-96 h-96 border border-white rounded-full" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 border border-white rounded-full" />
      </div>

      <div className="relative w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-16 py-[50px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-emerald-400/30 bg-emerald-400/10 backdrop-blur rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-emerald-300">
                2026–27 MBBS Admissions Open
              </span>
            </div>

            <h1 className="font-black leading-[1] tracking-[-0.02em] text-[clamp(2.8rem,6vw,4.5rem)]">
              <span className="block text-white">Start Your Medical</span>
              <span className="block text-emerald-400">With India&apos;s Top Colleges</span>
            </h1>

            <p className="mt-6 text-[15px] font-medium leading-relaxed text-blue-200/80 max-w-[500px]">
              Explore {COLLEGE_COUNT} private MBBS colleges across every state.
              From NEET counselling to final admission, we guide you through
              every step of the journey.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <button
                type="button"
                onClick={openModal}
                className="inline-flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 active:scale-[0.97] transition-all duration-200 text-white font-bold text-[11px] tracking-[0.2em] uppercase px-6 py-[14px] rounded-lg shadow-lg shadow-emerald-600/30"
              >
                Apply for MBBS
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <a
                href="#colleges"
                className="inline-flex items-center font-bold text-[11px] tracking-[0.2em] uppercase px-6 py-[14px] rounded-lg border border-emerald-400/40 hover:border-emerald-300 text-emerald-200 hover:text-white transition-all duration-200 active:scale-[0.97] bg-transparent"
              >
                View Colleges
              </a>
              <a
                href="#news"
                className="inline-flex items-center font-bold text-[11px] tracking-[0.2em] uppercase text-emerald-300/90 hover:text-white transition-colors"
              >
                News &amp; Events
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
                      alt=""
                      width={40}
                      height={40}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-white font-bold text-lg leading-none">{COLLEGE_COUNT}</p>
                <p className="text-blue-300/70 text-[11px] font-semibold tracking-wide">
                  Private Medical Colleges
                </p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-emerald-500/20 rounded-3xl blur-2xl" aria-hidden />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="https://i.pinimg.com/736x/6b/53/73/6b53731c6b8f07fac481ffc5c87f4639.jpg"
                  alt="Medical College Campus"
                  fill
                  priority
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-3">
                <p className="text-white font-bold text-lg">{STATE_COUNT}</p>
                <p className="text-blue-200 text-[10px] font-semibold uppercase tracking-wider">
                  States & UTs Covered
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
