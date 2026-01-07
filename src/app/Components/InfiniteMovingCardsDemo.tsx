"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { GraduationCap, BookOpen, Award, Star, Crown, Shield, MapPin, Target } from "lucide-react";


export function InfiniteMovingCardsDemo() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[length:24px_24px] opacity-20" />
      <div className="absolute top-10 left-20 w-64 h-64 bg-orange-500 rounded-full blur-[100px] opacity-10" />
      <div className="absolute bottom-10 right-20 w-80 h-80 bg-orange-400 rounded-full blur-[120px] opacity-8" />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-300 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
            <span>🏛️</span>
            Trusted By
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3 sm:mb-4 tracking-tight">
            World's Leading <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">Universities</span>
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg px-4">
            Our students gain admission to prestigious institutions worldwide through our exclusive partnerships and proven methodologies.
          </p>
        </div>

        {/* Moving Cards */}
        <div className="h-[16rem] flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={companies}
            direction="right"
            speed="fast"
          />
        </div>

        {/* Bottom stats */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-6 sm:gap-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl px-6 sm:px-8 py-3 sm:py-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400">500+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Partner Universities</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400">98%</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Acceptance Rate</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400">50+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const companies = [
  {
    name: "Harvard",
    icon: Crown,
  },
  {
    name: "Oxford",
    icon: Shield,
  },
  {
    name: "Cambridge",
    icon: BookOpen,
  },
  {
    name: "Stanford",
    icon: Star,
  },
  {
    name: "MIT",
    icon: Target,
  },
  {
    name: "Yale",
    icon: Award,
  },
  {
    name: "Princeton",
    icon: MapPin,
  },
  {
    name: "Columbia",
    icon: GraduationCap,
  },
];
