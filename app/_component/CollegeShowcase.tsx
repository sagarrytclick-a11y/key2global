"use client";

import React from "react";
import { MapPin, ArrowRight } from "lucide-react";
import { useApplyModal } from "@/context/ApplyModalContext";

const colleges = [
  {
    name: "IIT DELHI",
    est: "1961",
    fees: "₹2L - ₹2.5L/yr",
    rank: "NIRF #2",
    location: "New Delhi",
    placement: "Avg ₹20 LPA",
    image: "https://i.pinimg.com/736x/f8/e0/47/f8e0473676b29706f68059fb91d6d570.jpg",
  },
  {
    name: "IIM AHMEDABAD",
    est: "1961",
    fees: "₹23L total",
    rank: "NIRF #1 (MBA)",
    location: "Ahmedabad",
    placement: "Avg ₹34 LPA",
    image: "https://educationpost.in/_next/image?url=https%3A%2F%2Fiirfranking2.s3.ap-south-1.amazonaws.com%2F1769843880086-iima.jpg&w=3840&q=75",
  },
  {
    name: "BITS PILANI",
    est: "1964",
    fees: "₹5L/yr",
    rank: "Top Private",
    location: "Pilani",
    placement: "Avg ₹18 LPA",
    image: "https://images.shiksha.com/mediadata/images/articles/1677134801phpMbAHiY.jpeg",
  },
  {
    name: "DELHI UNIVERSITY",
    est: "1922",
    fees: "₹10K - ₹50K/yr",
    rank: "Top Arts & Commerce",
    location: "Delhi",
    placement: "Avg ₹6 LPA",
    image: "https://www.thehawk.in/_next/image?url=https%3A%2F%2Fd2py10ayqu2jji.cloudfront.net%2Fd8877ad0-6e83-487a-b0a4-57763b8190bc%2Fdelhi-university-557ca474-c1d1-45b2-a97b-152043fd14ab.jpg&w=3840&q=75",
  },
  {
    name: "NMIMS MUMBAI",
    est: "1981",
    fees: "₹3L - ₹5L/yr",
    rank: "Top Private B-School",
    location: "Mumbai",
    placement: "Avg ₹10 LPA",
    image: "https://www.nmims.edu/images/home-slide/m-school-1.jpg",
  },
  {
    name: "VIT VELLORE",
    est: "1984",
    fees: "₹2L - ₹4L/yr",
    rank: "Top Pvt Engineering",
    location: "Vellore",
    placement: "Avg ₹9 LPA",
    image: "https://images.shiksha.com/mediadata/images/articles/1656187006phpmZp2II.jpeg",
  },
];

const CollegeShowcase = () => {
  const { openModal } = useApplyModal();
  
  return (
    <section className="bg-white py-24 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Simple Header */}
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-black text-4xl md:text-6xl font-black uppercase tracking-tighter">
            Top <span className="text-black">Colleges.</span>
          </h2>
        </div>

        {/* Minimal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {colleges.map((college, index) => (
            <div key={index} className="group flex flex-col cursor-pointer">
              {/* Image - Clean rounded corners, no borders */}
              <div className="relative h-80 w-full rounded-2xl overflow-hidden mb-6">
                <img
                  src={college.image}
                  alt={college.name}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-black font-black text-2xl tracking-tight uppercase">
                    {college.name}
                  </h3>
                  <span className="text-[10px] font-bold text-black border border-black px-2 py-1 rounded">
                    {college.rank}
                  </span>
                </div>
                
                <p className="text-sm text-slate-500 flex items-center gap-1 mb-6 font-medium">
                  <MapPin className="w-3.5 h-3.5" /> {college.location}
                </p>

                {/* Flat Stats */}
                <div className="flex gap-8 mb-8 border-t border-slate-100 pt-4">
                  <div>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Placement</p>
                    <p className="text-sm font-bold text-black">{college.placement}</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Fees</p>
                    <p className="text-sm font-bold text-black">{college.fees}</p>
                  </div>
                </div>

                {/* Minimalist Black Button */}
                <button 
                  onClick={openModal}
                  className="w-full py-4 bg-black text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-slate-800 transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  View Full Details
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollegeShowcase;