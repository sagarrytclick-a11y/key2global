import Link from "next/link";
import React from "react";

interface College {
  image: string;
  name: string;
  location: string;
  logo: React.ReactNode;
  topRated: boolean;
  tuition: string;
  acceptance: string;
  undergrad: string;
  sat: string;
  slug: string;
}

const CollegeCard = ({ college }: { college: College }) => {
  return (
    <div className="bg-[#EFEBE0] rounded-2xl overflow-hidden shadow-sm border border-[#EFEBE0] hover:shadow-md transition-shadow">
      {/* College Image Header */}
      <div className="h-40 relative">
        <img
          src={college.image}
          alt={college.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 bg-[#F9F7F2]/80 p-1.5 rounded-full backdrop-blur-sm cursor-pointer hover:bg-[#F9F7F2] transition-colors">
          <span className="text-[#E63946] text-xs">💙</span>
        </div>
        {college.topRated && (
          <div className="absolute bottom-3 left-3 bg-[#FFB703] px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider text-[#2D2D2D] shadow-sm">
            Top Rated
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-bold text-lg text-[#2D2D2D] leading-tight">
              {college.name}
            </h3>
            <p className="text-xs text-[#2D2D2D] mt-1 flex items-center gap-1">
              📍 {college.location}
            </p>
          </div>
          <div className="w-10 h-10 bg-[#F9F7F2] rounded-lg flex items-center justify-center border border-[#EFEBE0] text-xl">
            {college.logo}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-y-4 gap-x-2 border-t border-dashed border-[#EFEBE0] pt-4 mb-6">
          <div>
            <p className="text-[10px] text-[#2D2D2D] uppercase font-bold">
              Tuition
            </p>
            <p className="text-sm font-bold text-[#2D2D2D]">{college.tuition}</p>
          </div>
          <div>
            <p className="text-[10px] text-[#2D2D2D] uppercase font-bold">
              Acceptance
            </p>
            <p className="text-sm font-bold text-[#E63946]">
              {college.acceptance}
            </p>
          </div>
          <div>
            <p className="text-[10px] text-[#2D2D2D] uppercase font-bold">
              Undergrad
            </p>
            <p className="text-sm font-bold text-[#2D2D2D]">
              {college.undergrad}
            </p>
          </div>
          <div>
            <p className="text-[10px] text-[#2D2D2D] uppercase font-bold">
              SAT Range
            </p>
            <p className="text-sm font-bold text-[#2D2D2D]">{college.sat}</p>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-[#EFEBE0]">
          <label className="flex items-center gap-2 text-xs font-semibold text-[#2D2D2D] cursor-pointer">
            <input
              type="checkbox"
              className="rounded-full border-[#EFEBE0] text-[#E63946] focus:ring-[#FFB703]"
            />
            Compare
          </label>

          <button className="text-xs font-bold text-[#E63946] hover:underline">
            <Link
              href={`/college/${college.slug}`}
              className="text-xs font-bold text-[#E63946] hover:underline"
            >
              View Profile
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;