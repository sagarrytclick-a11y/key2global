import { Calendar, ExternalLink } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Exam {
  logo: React.ReactNode;
  mode: string;
  name: string;
  title?: string;
  date: string;
  slug: string;
}

function ExamCard({ exam }: { exam: Exam }) {
    return (
      <div className="group shadow-sm bg-[#EFEBE0] border border-[#EFEBE0] rounded-xl flex flex-col justify-between transition-all duration-300 hover:border-[#FFB703] hover:shadow-md">
        <div className="p-5">
          {/* Top Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="h-10 w-12 flex items-center justify-center bg-[#F9F7F2] rounded-lg border border-[#EFEBE0] text-[10px] font-black text-[#2D2D2D] uppercase tracking-tighter text-center leading-tight">
              {exam.logo}
            </div>
            <span
              className={`text-[10px] uppercase tracking-wider px-2 py-1 rounded-md font-bold ${
                exam.mode === "Online"
                  ? "bg-[#EFEBE0] text-[#E63946]"
                  : "bg-[#EFEBE0] text-[#FFB703]"
              }`}
            >
              {exam.mode}
            </span>
          </div>
  
          {/* Info Section */}
          <div className="mb-6">
            <h3 className="font-bold text-lg text-[#2D2D2D] leading-tight group-hover:text-[#E63946] transition-colors">
              {exam.name}
            </h3>
            <p className="text-xs text-[#2D2D2D] mt-1 font-medium italic">
              {exam.title || "Entrance Exam"}
            </p>
          </div>
  
          {/* Simplified Date */}
          <div className="flex items-center gap-2 text-[#2D2D2D]">
            <Calendar className="w-3.5 h-3.5 text-[#FFB703]" />
            <span className="text-xs font-semibold">{exam.date}</span>
          </div>
        </div>
  
        {/* Action Footer */}
        <div className="px-5 pb-5 mt-2 flex gap-3">
          <button className="flex-1 text-[13px] font-bold text-[#2D2D2D] hover:text-[#E63946] transition-colors py-2">
            Details
          </button>
          <Link
            href={`/exam/${exam.slug}`}
            className="flex-[1.5] bg-[#E63946] hover:bg-[#E63946] hover:opacity-90 text-white text-[13px] font-bold py-2 rounded-lg transition-all flex items-center justify-center gap-2 shadow-sm shadow-[#E63946]/20"
          >
            Apply Now
            <ExternalLink className="w-3 h-3" />
          </Link>
        </div>
      </div>
    );
  }

  export default ExamCard;