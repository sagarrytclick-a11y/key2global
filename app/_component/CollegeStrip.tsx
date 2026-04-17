"use client";

import React from 'react';

const colleges = [
  { name: "IIT Delhi" },
  { name: "BITS PILANI" },
  { name: "NMIMS Mumbai" },
  { name: "Delhi University" },
  { name: "Vit vellore" },
  { name: "ISMS Pune" },
  { name: "medicalcounselling.co.in" },
  { name: "alphaworldeducation.com" },
  { name: "edugaaydsoverseas.com" },
];

// Duplicate the array for seamless infinite scroll
const duplicatedColleges = [...colleges, ...colleges];

export default function CollegeStrip() {
  return (
    <div className="w-full bg-gradient-to-r z-10 from-slate-900 to-slate-800 py-2 fixed bottom-0 overflow-hidden">
      <div className="relative">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-800 to-transparent z-10"></div>
        
        {/* Infinite scrolling strip */}
        <div className="flex animate-marquee whitespace-nowrap">
          {duplicatedColleges.map((college, index) => (
            <div
              key={`${college.name}-${index}`}
              className="flex items-center gap-3 px-8 py-3 border-r border-slate-700 last:border-r-0"
            >
              <div className="flex items-center gap-3">
                {/* College icon */}
              
                
                {/* College name */}
                <div className="flex flex-col">
                  <span className="text-white font-semibold text-sm tracking-tight">
                    {college.name}
                  </span>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* CSS for animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
