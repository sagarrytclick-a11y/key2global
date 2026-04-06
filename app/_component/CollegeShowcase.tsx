"use client";

import React from "react";
import { CheckCircle2, MapPin, GraduationCap } from "lucide-react";
import { useApplyModal } from "@/context/ApplyModalContext";

const colleges = [
  {
    name: "IIT DELHI",
    est: "1961",
    fees: "₹2L - ₹2.5L/yr",
    rank: "NIRF #2",
    tag: "TOP ENGINEERING INSTITUTE",
    location: "New Delhi",
    courses: "B.Tech, M.Tech",
    placement: "Avg ₹20 LPA",
    image: "https://i.pinimg.com/736x/f8/e0/47/f8e0473676b29706f68059fb91d6d570.jpg",
  },
  {
    name: "IIM AHMEDABAD",
    est: "1961",
    fees: "₹23L total",
    rank: "NIRF #1 (MBA)",
    tag: "INDIA'S BEST B-SCHOOL",
    location: "Ahmedabad",
    courses: "BBA (IPM), MBA",
    placement: "Avg ₹34 LPA",
    image: "https://educationpost.in/_next/image?url=https%3A%2F%2Fiirfranking2.s3.ap-south-1.amazonaws.com%2F1769843880086-iima.jpg&w=3840&q=75",
  },
  {
    name: "BITS PILANI",
    est: "1964",
    fees: "₹5L/yr",
    rank: "Top Private",
    tag: "PREMIER PRIVATE TECH",
    location: "Pilani",
    courses: "B.Tech, MBA",
    placement: "Avg ₹18 LPA",
    image: "https://images.shiksha.com/mediadata/images/articles/1677134801phpMbAHiY.jpeg",
  },
  {
    name: "DELHI UNIVERSITY",
    est: "1922",
    fees: "₹10K - ₹50K/yr",
    rank: "Top Arts & Commerce",
    tag: "BEST FOR BBA & COMMERCE",
    location: "Delhi",
    courses: "BBA, B.Com",
    placement: "Avg ₹6 LPA",
    image: "https://www.thehawk.in/_next/image?url=https%3A%2F%2Fd2py10ayqu2jji.cloudfront.net%2Fd8877ad0-6e83-487a-b0a4-57763b8190bc%2Fdelhi-university-557ca474-c1d1-45b2-a97b-152043fd14ab.jpg&w=3840&q=75",
  },
  {
    name: "NMIMS MUMBAI",
    est: "1981",
    fees: "₹3L - ₹5L/yr",
    rank: "Top Private B-School",
    tag: "INDUSTRY-ORIENTED PROGRAMS",
    location: "Mumbai",
    courses: "BBA, MBA",
    placement: "Avg ₹10 LPA",
    image: "https://www.nmims.edu/images/home-slide/m-school-1.jpg",
  },
  {
    name: "VIT VELLORE",
    est: "1984",
    fees: "₹2L - ₹4L/yr",
    rank: "Top Pvt Engineering",
    tag: "STRONG PLACEMENTS",
    location: "Vellore",
    courses: "B.Tech, MBA",
    placement: "Avg ₹9 LPA",
    image: "https://images.shiksha.com/mediadata/images/articles/1656187006phpmZp2II.jpeg",
  },
];

const CollegeShowcase = () => {
  const { openModal } = useApplyModal();
  
  return (
    <section className="bg-white py-16 px-6 font-sans text-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-black font-bold tracking-widest text-xs mb-2">
            INDIA'S TOP INSTITUTES
          </p>
          <h2 className="text-black text-5xl md:text-6xl font-black leading-tight">
            TOP COLLEGES
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {colleges.map((college, index) => (
            <div
              key={index}
              className="bg-[#F8FAFC] rounded-3xl overflow-hidden shadow-xl flex flex-col hover:scale-[1.02] transition"
            >
              {/* Image */}
              <div className="relative h-48">
                <img
                  src={college.image}
                  alt={college.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                <div className="absolute top-4 right-4 bg-white/80 text-black text-[10px] px-2 py-1 rounded font-semibold">
                  EST. {college.est}
                </div>

                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-black text-lg">
                    {college.name}
                  </h3>
                  <p className="text-xs text-gray-200 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {college.location}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col gap-4 flex-grow text-black">
                <div className="flex justify-between text-sm">
                  <div>
                    <p className="text-gray-600 font-semibold">Fees</p>
                    <p className="font-bold">{college.fees}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600 font-semibold">Rank</p>
                    <p className="font-bold">{college.rank}</p>
                  </div>
                </div>

                <div className="text-sm">
                  <p className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4" />
                    {college.courses}
                  </p>
                  <p className="font-semibold mt-1">
                    {college.placement}
                  </p>
                </div>

                <div className="bg-gray-200 rounded-lg p-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-xs font-semibold">
                    {college.tag}
                  </span>
                </div>

                <button 
                  onClick={openModal}
                  className="mt-auto w-full bg-black hover:bg-gray-800 text-white py-2 rounded-xl text-xs font-bold uppercase transition-all duration-200 hover:shadow-lg active:scale-[0.98]"
                >
                  View Details
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