"use client";

import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, Download, Scale, MapPin, Award, X } from 'lucide-react';

export default function CollegesPage() {
  const [streamsOpen, setStreamsOpen] = useState(true);
  const [courseGroupsOpen, setCourseGroupsOpen] = useState(true);
  const [statesOpen, setStatesOpen] = useState(true);
  const [sortBy, setSortBy] = useState('recommended');

  const colleges = [
    {
      id: 1,
      name: "IIM Ahmedabad Indian Institute of Management",
      logo: "🎓",
      location: "Ahmedabad",
      type: "Public/Government",
      examAccepted: "CAT",
      moreExams: 1,
      fees: "₹ 1.4 L - ₹ 35 L",
      medianSalary: "₹ 20 L - ₹ 34.5 L",
      totalCourses: 19,
      ranking: "QS World University Rankings #60",
      featured: false
    },
    {
      id: 2,
      name: "IIT Bombay - Indian Institute of Technology",
      logo: "🏛️",
      location: "Mumbai",
      type: "Public/Government",
      examAccepted: "JEE Main",
      moreExams: 2,
      fees: "₹ 4.5 L - ₹ 13.9 L",
      medianSalary: "₹ 15 L - ₹ 26.6 L",
      totalCourses: 29,
      ranking: "QS World University Rankings #129",
      featured: false
    },
    {
      id: 3,
      name: "All India Institute of Medical Sciences, Delhi",
      logo: "🏥",
      location: "Delhi",
      type: "Public/Government",
      examAccepted: "NEET",
      moreExams: 1,
      fees: "₹ 2.0 K - ₹ 5.9 K",
      medianSalary: "₹ 3.4 L - ₹ 3.4 Cr",
      totalCourses: 132,
      ranking: "NIRF #11",
      featured: false
    },
    {
      id: 4,
      name: "International Institute of Sports & Management",
      logo: "⚽",
      location: "Mumbai",
      type: "Private",
      examAccepted: "Direct Admission",
      moreExams: 0,
      fees: "₹ 3.5 L - ₹ 12 L",
      medianSalary: "₹ 4.5 L - ₹ 8 L",
      totalCourses: 8,
      ranking: null,
      featured: true
    }
  ];

  const streams = [
    { name: "Management", count: 2775 },
    { name: "Engineering", count: 2451 },
    { name: "IT and Software", count: 1945 },
    { name: "Science", count: 1606 },
    { name: "Medical", count: 1590 },
    { name: "Commerce", count: 1276 },
    { name: "Social Sciences", count: 1253 },
    { name: "Education", count: 791 }
  ];

  const courseGroups = [
    { name: "Master of Business Administration", count: 1752 },
    { name: "B.Sc.", count: 1726 },
    { name: "B.E. / B.Tech", count: 1725 },
    { name: "BBA", count: 1532 },
    { name: "Bachelor of Technology", count: 1527 },
    { name: "M.Sc.", count: 1335 },
    { name: "M.E./M.Tech", count: 1246 },
    { name: "BCA", count: 1232 }
  ];

  return (
    <div className="min-h-screen bg-[#F9F7F2]">
      {/* Header */}
    

      {/* Breadcrumb */}
      <div className="bg-[#EFEBE0] border-b">
        <div className="max-w-7xl mx-auto px-6 py-3 text-sm">
          <span className="text-[#2D2D2D]">Home</span>
          <span className="mx-2 text-[#2D2D2D]">›</span>
          <span className="text-[#E63946] font-medium">Colleges</span>
        </div>
      </div>

      {/* Ad Banner */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="bg-gradient-to-r from-[#EFEBE0] to-[#F9F7F2] rounded-xl p-6 flex items-center justify-between shadow-sm border border-[#EFEBE0]">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-[#FFB703] rounded-lg flex items-center justify-center shadow-md">
              <span className="text-3xl">🎓</span>
            </div>
            <div>
              <div className="text-[#E63946] font-bold text-2xl mb-1">ADMISSION OPEN</div>
              <div className="text-[#2D2D2D] font-medium">for PGDM (B & FS) Batch 2026 - 28</div>
            </div>
          </div>
          <button className="bg-[#E63946] text-white px-8 py-3 rounded-full font-bold hover:bg-[#E63946] hover:opacity-90 shadow-lg">
            APPLY NOW
          </button>
        </div>
      </div>

      {/* Title */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="bg-gradient-to-r from-[#EFEBE0] to-[#F9F7F2] rounded-lg p-6 shadow-sm border-l-4 border-[#E63946]">
          <h1 className="text-3xl font-bold text-[#2D2D2D]">
            Top Colleges in India - Rankings, Courses & Admission 2026
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-[#EFEBE0] rounded-lg shadow-sm p-4 sticky top-4">
              {/* Count */}
              <div className="bg-[#F9F7F2] rounded-lg p-4 mb-4 border border-[#EFEBE0]">
                <div className="text-sm text-[#2D2D2D]">Showing</div>
                <div className="text-2xl font-bold text-[#E63946]">5231</div>
                <div className="text-sm text-[#2D2D2D]">Colleges</div>
              </div>

              {/* Filter Header */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#EFEBE0]">
                <h3 className="font-bold text-[#2D2D2D]">Filter By</h3>
                <button className="text-[#E63946] text-sm font-medium hover:text-[#E63946] hover:opacity-80">
                  Reset All
                </button>
              </div>

              {/* Streams Filter */}
              <div className="mb-4">
                <button
                  onClick={() => setStreamsOpen(!streamsOpen)}
                  className="w-full flex items-center justify-between py-2 font-medium text-[#2D2D2D]"
                >
                  <span>Streams</span>
                  {streamsOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {streamsOpen && (
                  <div className="mt-3">
                    <div className="relative mb-3">
                      <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#2D2D2D]" />
                      <input
                        type="text"
                        placeholder="Search by Streams"
                        className="w-full pl-9 pr-3 py-2 border border-[#EFEBE0] rounded-lg text-sm bg-[#F9F7F2] focus:outline-none focus:ring-2 focus:ring-[#FFB703]"
                      />
                    </div>
                    <div className="space-y-2 max-h-64 overflow-y-auto">
                      {streams.map((stream, idx) => (
                        <label key={idx} className="flex items-center gap-2 hover:bg-[#F9F7F2] p-2 rounded cursor-pointer">
                          <input type="checkbox" className="w-4 h-4 text-[#E63946] rounded border-[#EFEBE0] focus:ring-[#FFB703]" />
                          <span className="text-sm text-[#2D2D2D] flex-1">{stream.name}</span>
                          <span className="text-xs text-[#2D2D2D]">({stream.count})</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Course Groups Filter */}
              <div className="mb-4 pt-4 border-t border-[#EFEBE0]">
                <button
                  onClick={() => setCourseGroupsOpen(!courseGroupsOpen)}
                  className="w-full flex items-center justify-between py-2 font-medium text-[#2D2D2D]"
                >
                  <span>Course Groups</span>
                  {courseGroupsOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {courseGroupsOpen && (
                  <div className="mt-3">
                    <div className="relative mb-3">
                      <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#2D2D2D]" />
                      <input
                        type="text"
                        placeholder="Search by Course Groups"
                        className="w-full pl-9 pr-3 py-2 border border-[#EFEBE0] rounded-lg text-sm bg-[#F9F7F2] focus:outline-none focus:ring-2 focus:ring-[#FFB703]"
                      />
                    </div>
                    <div className="space-y-2 max-h-64 overflow-y-auto">
                      {courseGroups.map((course, idx) => (
                        <label key={idx} className="flex items-center gap-2 hover:bg-[#F9F7F2] p-2 rounded cursor-pointer">
                          <input type="checkbox" className="w-4 h-4 text-[#E63946] rounded border-[#EFEBE0] focus:ring-[#FFB703]" />
                          <span className="text-sm text-[#2D2D2D] flex-1">{course.name}</span>
                          <span className="text-xs text-[#2D2D2D]">({course.count})</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* States Filter */}
              <div className="pt-4 border-t border-[#EFEBE0]">
                <button
                  onClick={() => setStatesOpen(!statesOpen)}
                  className="w-full flex items-center justify-between py-2 font-medium text-[#2D2D2D]"
                >
                  <span>States</span>
                  {statesOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {statesOpen && (
                  <div className="mt-3">
                    <div className="relative">
                      <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#2D2D2D]" />
                      <input
                        type="text"
                        placeholder="Search by States"
                        className="w-full pl-9 pr-3 py-2 border border-[#EFEBE0] rounded-lg text-sm bg-[#F9F7F2] focus:outline-none focus:ring-2 focus:ring-[#FFB703]"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Colleges List */}
          <div className="lg:col-span-3">
            {/* Active Filters & Sort */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-[#2D2D2D]">Active Filters:</span>
                <span className="bg-[#EFEBE0] text-[#E63946] px-3 py-1 rounded-full text-sm flex items-center gap-2 border border-[#EFEBE0]">
                  All colleges
                  <X className="w-3 h-3 cursor-pointer hover:text-[#E63946] hover:opacity-80" />
                </span>
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-[#EFEBE0] rounded-lg px-4 py-2 text-sm bg-[#EFEBE0] text-[#2D2D2D] focus:outline-none focus:ring-2 focus:ring-[#FFB703]"
              >
                <option value="recommended">Recommended</option>
                <option value="ranking">Ranking</option>
                <option value="fees-low">Fees: Low to High</option>
                <option value="fees-high">Fees: High to Low</option>
              </select>
            </div>

            {/* College Cards */}
            <div className="space-y-4">
              {colleges.map((college) => (
                <div key={college.id} className="bg-[#EFEBE0] rounded-lg shadow-sm hover:shadow-md transition-all border border-[#EFEBE0] overflow-hidden">
                  {college.featured && (
                    <div className="bg-gradient-to-r from-[#E63946] to-[#E63946] text-white px-4 py-1 text-xs font-medium flex items-center gap-1">
                      ⭐ Featured
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex gap-4">
                      {/* Logo */}
                      <div className="w-20 h-20 bg-gradient-to-br from-[#F9F7F2] to-[#EFEBE0] rounded-lg flex items-center justify-center text-4xl flex-shrink-0 border border-[#EFEBE0]">
                        {college.logo}
                      </div>

                      {/* Main Content */}
                      <div className="flex-1">
                        <h2 className="text-xl font-bold text-[#2D2D2D] mb-2 hover:text-[#E63946] cursor-pointer">
                          {college.name}
                        </h2>
                        <div className="flex items-center gap-4 text-sm text-[#2D2D2D] mb-4">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {college.location}
                          </span>
                          <span>•</span>
                          <span>{college.type}</span>
                        </div>

                        {/* Info Grid */}
                        <div className="grid grid-cols-4 gap-4 mb-4">
                          <div>
                            <div className="text-xs text-[#2D2D2D] mb-1">Exam Accepted</div>
                            <div className="font-medium text-[#2D2D2D]">
                              {college.examAccepted} 
                              {college.moreExams > 0 && (
                                <span className="text-[#E63946] text-xs ml-1">+{college.moreExams} More</span>
                              )}
                            </div>
                          </div>
                          <div>
                            <div className="text-xs text-[#2D2D2D] mb-1">Fees</div>
                            <div className="font-medium text-[#E63946]">{college.fees}</div>
                          </div>
                          <div>
                            <div className="text-xs text-[#2D2D2D] mb-1">Median Salary</div>
                            <div className="font-medium text-[#2D2D2D]">{college.medianSalary}</div>
                          </div>
                          <div>
                            <div className="text-xs text-[#2D2D2D] mb-1">Total Courses</div>
                            <div className="font-medium text-[#E63946]">{college.totalCourses} Courses</div>
                          </div>
                        </div>

                        {/* Links */}
                        <div className="flex items-center gap-4 text-sm">
                          <a href="#" className="text-[#E63946] hover:text-[#E63946] hover:opacity-80 font-medium">Placement</a>
                          <span className="text-[#EFEBE0]">|</span>
                          <a href="#" className="text-[#E63946] hover:text-[#E63946] hover:opacity-80 font-medium">Admission</a>
                          <span className="text-[#EFEBE0]">|</span>
                          <a href="#" className="text-[#E63946] hover:text-[#E63946] hover:opacity-80 font-medium">Facilities</a>
                          <span className="text-[#EFEBE0]">|</span>
                          <a href="#" className="text-[#E63946] hover:text-[#E63946] hover:opacity-80 font-medium">Ranking</a>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-col gap-2 w-48">
                        <button className="border border-[#E63946] text-[#E63946] px-4 py-2 rounded-lg font-medium hover:bg-[#EFEBE0] flex items-center justify-center gap-2 text-sm">
                          <Scale className="w-4 h-4" />
                          Compare
                        </button>
                        <button className="bg-[#FFB703] text-[#2D2D2D] px-4 py-2 rounded-lg font-medium hover:bg-[#FFB703] hover:opacity-90 flex items-center justify-center gap-2 text-sm">
                          <Download className="w-4 h-4" />
                          Brochure
                        </button>
                        <button className="bg-[#E63946] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#E63946] hover:opacity-90 flex items-center justify-center gap-2 text-sm">
                          Apply Now →
                        </button>
                      </div>
                    </div>

                    {/* Ranking Badge */}
                    {college.ranking && (
                      <div className="mt-4 pt-4 border-t border-[#EFEBE0] flex items-center justify-end">
                        <div className="flex items-center gap-2 text-sm">
                          <Award className="w-4 h-4 text-[#FFB703]" />
                          <span className="text-[#E63946] font-medium">Ranking -</span>
                          <span className="text-[#2D2D2D] font-bold">{college.ranking}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Call Button */}
      <button className="fixed bottom-6 right-6 w-14 h-14 bg-[#E63946] text-white rounded-full shadow-lg hover:bg-[#E63946] hover:opacity-90 flex items-center justify-center">
        <span className="text-2xl">📞</span>
      </button>
    </div>
  );
}