"use client";

import Link from "next/link";
import { useApplyModal } from "@/context/ApplyModalContext";

const articles = [
  {
    id: 1,
    image: "https://i.pinimg.com/1200x/46/ea/a3/46eaa3cf81ed7bd7205aad0d7a259552.jpg",
    tag: "B.TECH TRENDS",
    tagColor: "#1d4ed8",
    tagBg: "#eff6ff",
    readTime: "5 MIN READ",
    title: "The Rise of Cyber-Physical Systems in 2025 Engineering Curriculums",
    excerpt:
      "How major German universities are pivoting their B.Tech programs to integrate real-time IoT diagnostics and machine learning at the…",
    author: "Dr. Marcus Stein",
  },
  {
    id: 2,
    image: "https://i.pinimg.com/736x/b2/03/1c/b2031c8c39c0e278d2909f375926c756.jpg",
    tag: "GLOBAL BBA",
    tagColor: "#b91c1c",
    tagBg: "#fef2f2",
    readTime: "8 MIN READ",
    title: "Post-Pandemic Shift: Why Global BBA Graduates are the New Tech-Leaders",
    excerpt:
      "The fusion of business analytics and global supply chain management is creating a surge in demand for specialized BBA graduates in…",
    author: "Sarah Jenkins, MBA",
  },
  {
    id: 3,
    image: "https://i.pinimg.com/736x/00/af/6c/00af6c21216df33bdb49c91c407025d7.jpg",
    tag: "IOT INNOVATION",
    tagColor: "#0369a1",
    tagBg: "#f0f9ff",
    readTime: "4 MIN READ",
    title: "Smart City Infrastructure: The Career Frontier for International Students",
    excerpt:
      "Analyzing the massive infrastructure investments in UAE and Singapore, and how international IoT students can position…",
    author: "Alan Turing Jr.",
  },
];

export default function KnowledgeHub() {
  const { openModal } = useApplyModal();
  
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-16">
      <div className="max-w-[1280px] mx-auto">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div className="text-center sm:text-left">
            <span className="inline-block text-[11px] font-bold tracking-[0.25em] uppercase text-blue-600 bg-blue-50 px-4 py-2 rounded-full mb-4">
              Scholastic Insights
            </span>
            <h2 className="font-black text-gray-950 text-[2rem] sm:text-[2.8rem] leading-none tracking-tight">
              Global Knowledge Hub
            </h2>
          </div>
          <Link
            href="/"
            className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.18em] uppercase text-gray-800 hover:text-blue-700 border-b-2 border-gray-800 hover:border-blue-700 pb-0.5 transition-colors duration-150 mb-1 shrink-0 group"
          >
            View All Articles
            <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image with overlay */}
              <div className="relative overflow-hidden h-[180px] sm:h-[190px]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Body */}
              <div className="p-5 sm:p-6 flex flex-col flex-1">
                {/* Tag + read time */}
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-[9.5px] font-black tracking-widest uppercase px-2.5 py-1 rounded-md"
                    style={{ color: article.tagColor, background: article.tagBg }}
                  >
                    {article.tag}
                  </span>
                  <span className="text-[10px] font-semibold text-gray-400 tracking-widest uppercase">
                    {article.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-black text-gray-950 text-[14px] sm:text-[15px] leading-snug tracking-tight mb-3 group-hover:text-blue-700 transition-colors duration-200">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-500 text-[12.5px] sm:text-[13px] font-normal leading-relaxed flex-1">
                  {article.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
                  <p className="text-[12px] font-medium text-gray-600">
                    By {article.author}
                  </p>
                  <button
                    onClick={openModal}
                    className="w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200 bg-gray-50 hover:bg-blue-50 group/btn cursor-pointer"
                    aria-label="Read more"
                  >
                    <svg className="w-4 h-4 text-gray-400 group-hover/btn:text-blue-600 transition-colors duration-200" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M2 8h12M9 4l5 4-5 4"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile view all */}
        <div className="mt-8 sm:hidden flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.18em] uppercase text-gray-800 hover:text-blue-700 border-b-2 border-gray-800 hover:border-blue-700 pb-0.5 transition-colors duration-150 group"
          >
            View All Articles
            <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}