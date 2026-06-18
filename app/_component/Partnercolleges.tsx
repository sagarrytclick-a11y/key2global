"use client";

import React from "react";

const colleges = [
  {
    name: "Galgotias University",
    logo: "https://image-static.collegedunia.com/public/image/22-13:03-phelosophy.jpeg",
  },
  {
    name: "BITS Pilani",
    logo: "https://khuddam.in/wp-content/uploads/2019/03/1200px-BITS_Pilani-Logo.svg.png",
  },
  {
    name: "IIT Madras",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKYl-ijb1R6R951hkaUEiLot_T3x1ZwZoAsA&s",
  },
  {
    name: "AIIMS Delhi",
    logo: "https://upload.wikimedia.org/wikipedia/en/8/85/All_India_Institute_of_Medical_Sciences%2C_Delhi.svg",
  },
  {
    name: "IIT Delhi",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Indian_Institute_of_Technology_Delhi_Logo.svg/1280px-Indian_Institute_of_Technology_Delhi_Logo.svg.png",
  },
  {
    name: "SIBM Pune",
    logo: "https://careerchoice360.in/colleges/images/symbosis-logo.jpg",
  },
  {
    name: "NMIMS Mumbai",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx72ZW5GVIVHx7TE5suoeAEWu17n_JiuxiXg&s",
  },
  {
    name: "SPJIMR Mumbai",
    logo: "https://pbs.twimg.com/profile_images/1587494249809219584/48LwaPMb_400x400.jpg",
  },
];

const duplicatedColleges = [...colleges, ...colleges];

export default function PartnerColleges() {
  return (
    <section className="w-full bg-white py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 mb-12 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <svg className="w-3 h-3 text-[#4A90E2]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="2"/><ellipse cx="12" cy="12" rx="4" ry="10" strokeWidth="2"/><path d="M2 12h20M12 2a16 16 0 000 20 16 16 0 000-20z" strokeWidth="2"/></svg>
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#4A90E2]">
            Global Network
          </p>
        </div>

        <h2 className="font-black text-[#12141D] text-3xl md:text-4xl leading-tight">
          Our Partner Universities
        </h2>
      </div>

      {/* Slider */}
      <div className="relative flex w-full">
        <div className="flex animate-marquee whitespace-nowrap gap-12 py-6 items-center">
          {duplicatedColleges.map((college, idx) => (
            <div
              key={`${college.name}-${idx}`}
              className="flex flex-col items-center gap-4 min-w-[140px] sm:min-w-[180px] group"
            >
              <div className="relative">
                {/* Smaller Logo */}
                <div className="w-20 h-20 sm:w-28 sm:h-28 bg-white rounded-2xl flex items-center justify-center p-4 border border-slate-100 shadow-md group-hover:shadow-lg transition">
                  <img
                    src={college.logo}
                    alt={college.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition"
                  />
                </div>

                {/* Small Badge */}
                <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow border opacity-0 group-hover:opacity-100 transition">
                  <svg className="w-4 h-4 text-[#4A90E2]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
              </div>

              {/* Smaller Text */}
              <div className="text-center">
                <p className="text-sm sm:text-base font-semibold text-[#12141D] leading-tight">
                  {college.name}
                </p>

                <div className="flex items-center justify-center gap-1 mt-1 opacity-0 group-hover:opacity-100 transition">
                  <svg className="w-3 h-3 text-[#4A90E2]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
                  <span className="text-[9px] text-[#4A90E2] uppercase">
                    Partner
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Soft gradients */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
      </div>

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
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}