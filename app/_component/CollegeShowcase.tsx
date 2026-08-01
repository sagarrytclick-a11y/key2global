"use client";

import React from "react";
import { useApplyModal } from "@/context/ApplyModalContext";

const colleges = [
  {
    name: "IIT Delhi",
    fees: "₹2L - ₹2.5L/yr",
    rank: "NIRF #2",
    location: "New Delhi",
    image: "https://i.pinimg.com/736x/f8/e0/47/f8e0473676b29706f68059fb91d6d570.jpg",
  },
  {
    name: "IIM Ahmedabad",
    fees: "₹23L total",
    rank: "NIRF #1 (MBA)",
    location: "Ahmedabad",
    image: "https://educationpost.in/_next/image?url=https%3A%2F%2Fiirfranking2.s3.ap-south-1.amazonaws.com%2F1769843880086-iima.jpg&w=3840&q=75",
  },
  {
    name: "BITS Pilani",
    fees: "₹5L/yr",
    rank: "Top Private",
    location: "Pilani",
    image: "https://images.shiksha.com/mediadata/images/articles/1677134801phpMbAHiY.jpeg",
  },
  {
    name: "Delhi University",
    fees: "₹10K - ₹50K/yr",
    rank: "Top Arts & Commerce",
    location: "Delhi",
    image: "https://cdn.britannica.com/68/263768-050-69EEA7B7/Students-at-Delhi-University-north-campus-on-the-second-day-of-admissions-for-2021-22-on-October-5-2021-in-New-Delhi-India-University-of-Delhi.jpg",
  },
  {
    name: "NMIMS Mumbai",
    fees: "₹3L - ₹5L/yr",
    rank: "Top Private B-School",
    location: "Mumbai",
    image: "https://www.nmims.edu/images/home-slide/m-school-1.jpg",
  },
  {
    name: "VIT Vellore",
    fees: "₹2L - ₹4L/yr",
    rank: "Top Pvt Engineering",
    location: "Vellore",
    image: "https://images.shiksha.com/mediadata/images/articles/1656187006phpmZp2II.jpeg",
  },
];

const CollegeShowcase = () => {
  const { openModal } = useApplyModal();

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-[50px] px-6 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-8 text-center">
          <span className="inline-block text-[11px] font-bold tracking-[0.25em] uppercase text-blue-600 bg-blue-50 px-4 py-2 rounded-full mb-5">
            Premium Institutions
          </span>
          <h2 className="text-gray-900 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Top Partner Colleges
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {colleges.map((college) => (
            <article
              key={college.name}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-44 w-full overflow-hidden bg-slate-100 sm:h-48">
                <img
                  src={college.image}
                  alt=""
                  width={400}
                  height={240}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <span className="inline-flex self-start rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">
                  {college.rank}
                </span>
                <h3 className="mt-3 line-clamp-2 text-base font-bold leading-snug text-slate-900">
                  {college.name}
                </h3>
                <p className="mt-2 flex items-center gap-1 text-sm text-slate-500">
                  <svg className="h-3.5 w-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="truncate">{college.location}</span>
                </p>

                <div className="mt-auto flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">Fees</p>
                    <p className="mt-0.5 text-base font-bold text-slate-900">{college.fees}</p>
                  </div>
                  <button
                    type="button"
                    onClick={openModal}
                    className="rounded-lg bg-blue-600 px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-white transition hover:bg-blue-700 active:scale-[0.98]"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollegeShowcase;
