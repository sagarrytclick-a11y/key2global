"use client"

import React, { useState } from 'react';
import { Calendar, Phone, BookOpen, FileText, Award, Building2, Users, MapPin, ChevronRight } from 'lucide-react';

export default function ExamDetailPage() {
  const [activeTab, setActiveTab] = useState('info');

  // Dummy data - replace with actual data from API/props
  const examData = {
    name: "SLAT 2026",
    fullName: "Symbiosis Law Admission Test",
    logo: "🎓",
    examDate: "30 Dec '25",
    test1Date: "December 20, 2025",
    test2Date: "December 28, 2025",
    admitCardDate: "December 18, 2025",
    resultDate: "January 15, 2026",
    weightage: { slat: "70%", pi: "30%" },
    updatedOn: "19 Dec, 2025",
    updatedBy: "Amrita Das"
  };

  const upcomingExams = [
    { name: "UCEED", date: "18 Jan, 2026", color: "bg-blue-500" },
    { name: "CEED", date: "18 Jan, 2026", color: "bg-orange-500" },
    { name: "NIFT", date: "9 Feb, 2026", color: "bg-red-500" },
    { name: "IPU CET", date: "18 Apr, 2026 - 9 Jun, 2026", color: "bg-yellow-500" },
    { name: "AMUEEE", date: "26 Apr, 2026", color: "bg-green-500" }
  ];

  const colleges = [
    { name: "Symbiosis Law School, Pune", location: "Pune, Maharashtra", rank: "1", cutoff: "85+ percentile" },
    { name: "Symbiosis Law School, Noida", location: "Noida, Uttar Pradesh", rank: "2", cutoff: "80+ percentile" },
    { name: "Symbiosis Law School, Hyderabad", location: "Hyderabad, Telangana", rank: "3", cutoff: "75+ percentile" },
    { name: "Symbiosis Law School, Nagpur", location: "Nagpur, Maharashtra", rank: "4", cutoff: "70+ percentile" }
  ];

  const tabs = [
    { id: 'info', label: 'Info' },
    { id: 'question-paper', label: 'Question Paper' },
    { id: 'application', label: 'Application Process' },
    { id: 'cutoff', label: 'Cutoff' },
    { id: 'eligibility', label: 'Eligibility Criteria' },
    { id: 'admit-card', label: 'Admit Card' },
    { id: 'exam-pattern', label: 'Exam Pattern' },
    { id: 'books', label: 'Books' },
    { id: 'syllabus', label: 'Syllabus' },
    { id: 'results', label: 'Results' },
    { id: 'colleges', label: 'Colleges' }
  ];

  return (
    <div className="min-h-screen bg-[#F9F7F2]">
      

      {/* Breadcrumb */}
      <div className="bg-[#EFEBE0] border-b">
        <div className="max-w-7xl mx-auto px-6 py-3 text-sm text-[#2D2D2D]">
          Home &gt; SLAT &gt; Info
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Title Card */}
            <div className="bg-[#EFEBE0] rounded-lg shadow-sm p-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="text-5xl">{examData.logo}</div>
                <div className="flex-1">
                  <h1 className="text-2xl font-bold text-[#2D2D2D] mb-2">
                    {examData.name}: Test 1 (Dec 20), Test 2 Admit Card (Out), Result, Cutoff, Counselling
                  </h1>
                  <div className="flex items-center gap-4 text-sm text-[#2D2D2D]">
                    <span>Updated on {examData.updatedOn} by {examData.updatedBy}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 text-sm bg-[#F9F7F2] text-[#E63946] px-3 py-2 rounded-lg mb-2">
                    <Calendar className="w-4 h-4" />
                    Exam Date - {examData.examDate}
                  </div>
                  <button className="text-[#E63946] border border-[#E63946] px-4 py-2 rounded-lg text-sm hover:bg-[#EFEBE0] mb-2 w-full">
                    Free Counselling
                  </button>
                  <button className="bg-[#E63946] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#E63946] hover:opacity-90 w-full">
                    Get Free Mock Tests
                  </button>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-[#EFEBE0] rounded-lg shadow-sm mb-6 overflow-x-auto">
              <div className="flex border-b border-[#EFEBE0]">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'text-[#E63946] border-b-2 border-[#E63946]'
                        : 'text-[#2D2D2D] hover:text-[#E63946]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Content Area */}
            <div className="bg-[#EFEBE0] rounded-lg shadow-sm p-6">
              {activeTab === 'info' && (
                <div>
                  <div className="bg-[#F9F7F2] border-l-4 border-[#E63946] p-4 mb-6">
                    <p className="text-[#2D2D2D]">
                      SLAT 2026 Test 1 is going to be held tomorrow, <strong>{examData.test1Date}</strong>. Candidates should download the Test 1 Admit Card from the official website.
                      The SLAT 2026 Test 2 is scheduled to be held on <strong>{examData.test2Date}</strong>. Test 2 Admit Card was released on <strong>{examData.admitCardDate}</strong>.
                    </p>
                  </div>

                  <p className="text-[#2D2D2D] mb-4">
                    Qualifying students will be able to get admission into the B.A. LLB & B.B.A. LLB. programmes of the four Symbiosis Law Schools. During selection,
                    SLAT 2026 will carry <strong>{examData.weightage.slat} weightage</strong>, while the Personal Interview (PI) round will carry <strong>{examData.weightage.pi} weightage</strong>.
                    The SLAT 2026 Results will be released on <strong>{examData.resultDate}</strong>. Continue reading further to know more about the SLAT 2026 entrance exam in detail.
                  </p>

                  <div className="bg-[#E63946] text-white p-4 rounded-lg mb-6">
                    <h3 className="font-bold mb-4">Table of Contents</h3>
                    <ul className="space-y-2">
                      <li><a href="#" className="text-white hover:underline">SLAT 2026 Highlights</a></li>
                      <li><a href="#" className="text-white hover:underline">SLAT 2026 Exam Dates</a></li>
                      <li><a href="#" className="text-white hover:underline">SLAT 2026 Eligibility Criteria</a></li>
                      <li><a href="#" className="text-white hover:underline">SLAT 2026 Exam Pattern</a></li>
                      <li><a href="#" className="text-white hover:underline">SLAT 2026 Syllabus</a></li>
                      <li><a href="#" className="text-white opacity-80 hover:underline">+11 View More</a></li>
                    </ul>
                  </div>

                  <h2 className="text-2xl font-bold text-[#2D2D2D] mb-4">SLAT 2026 Highlights</h2>
                  <div className="border border-[#EFEBE0] rounded-lg overflow-hidden">
                    <table className="w-full">
                      <tbody>
                        <tr className="border-b border-[#EFEBE0]">
                          <td className="p-3 bg-[#F9F7F2] font-medium text-[#2D2D2D]">Exam Name</td>
                          <td className="p-3 text-[#2D2D2D]">Symbiosis Law Admission Test (SLAT)</td>
                        </tr>
                        <tr className="border-b border-[#EFEBE0]">
                          <td className="p-3 bg-[#F9F7F2] font-medium text-[#2D2D2D]">Conducting Body</td>
                          <td className="p-3 text-[#2D2D2D]">Symbiosis International University</td>
                        </tr>
                        <tr className="border-b border-[#EFEBE0]">
                          <td className="p-3 bg-[#F9F7F2] font-medium text-[#2D2D2D]">Exam Level</td>
                          <td className="p-3 text-[#2D2D2D]">National</td>
                        </tr>
                        <tr className="border-b border-[#EFEBE0]">
                          <td className="p-3 bg-[#F9F7F2] font-medium text-[#2D2D2D]">Exam Frequency</td>
                          <td className="p-3 text-[#2D2D2D]">Once a year</td>
                        </tr>
                        <tr>
                          <td className="p-3 bg-[#F9F7F2] font-medium text-[#2D2D2D]">Mode of Exam</td>
                          <td className="p-3 text-[#2D2D2D]">Computer Based Test (CBT)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === 'colleges' && (
                <div>
                  <h2 className="text-2xl font-bold text-[#2D2D2D] mb-4">Colleges Accepting SLAT 2026</h2>
                  <p className="text-[#2D2D2D] mb-6">
                    SLAT scores are accepted by the following Symbiosis Law Schools for admission to their B.A. LLB and B.B.A. LLB programmes.
                  </p>
                  <div className="space-y-4">
                    {colleges.map((college, index) => (
                      <div key={index} className="border border-[#EFEBE0] rounded-lg p-4 hover:shadow-md transition-shadow bg-[#F9F7F2]">
                        <div className="flex items-start justify-between">
                          <div className="flex gap-4">
                            <div className="w-12 h-12 bg-[#EFEBE0] rounded-lg flex items-center justify-center text-[#E63946] font-bold">
                              #{college.rank}
                            </div>
                            <div>
                              <h3 className="font-bold text-[#2D2D2D] mb-1">{college.name}</h3>
                              <div className="flex items-center gap-4 text-sm text-[#2D2D2D]">
                                <span className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4" />
                                  {college.location}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Award className="w-4 h-4" />
                                  Cutoff: {college.cutoff}
                                </span>
                              </div>
                            </div>
                          </div>
                          <button className="text-[#E63946] hover:text-[#E63946] hover:opacity-80">
                            <ChevronRight className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab !== 'info' && activeTab !== 'colleges' && (
                <div className="text-center py-12 text-[#2D2D2D]">
                  <FileText className="w-12 h-12 mx-auto mb-4 text-[#2D2D2D]" />
                  <p>Content for {tabs.find(t => t.id === activeTab)?.label} tab</p>
                  <p className="text-sm mt-2">This section will contain detailed information about {tabs.find(t => t.id === activeTab)?.label.toLowerCase()}</p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Upcoming Exams */}
            <div className="bg-[#EFEBE0] rounded-lg shadow-sm p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-[#2D2D2D] flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Upcoming Exams
                </h3>
              </div>
              <div className="space-y-3">
                {upcomingExams.map((exam, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 hover:bg-[#F9F7F2] rounded-lg cursor-pointer">
                    <div className={`w-10 h-10 ${exam.color} rounded-lg flex items-center justify-center text-white font-bold text-sm`}>
                      {exam.name.substring(0, 2)}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-[#2D2D2D]">{exam.name}</div>
                      <div className="text-sm text-[#2D2D2D]">{exam.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* News & Updates */}
            <div className="bg-[#2D2D2D] text-white rounded-lg shadow-sm p-6">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5" />
                News & Updates
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#FFB703] mt-1">•</span>
                  <span>SLAT 2026 Test 1 scheduled for December 20, 2025</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FFB703] mt-1">•</span>
                  <span>Admit cards for Test 2 released on official website</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FFB703] mt-1">•</span>
                  <span>Registration deadline extended till December 15</span>
                </li>
              </ul>
            </div>

            {/* Call to Action */}
            <div className="mt-6 bg-[#E63946] text-white rounded-lg shadow-sm p-6 text-center">
              <Phone className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">Need Help?</h3>
              <p className="text-sm mb-4">Get free counselling from our experts</p>
              <button className="bg-white text-[#E63946] px-6 py-2 rounded-lg font-medium hover:bg-[#F9F7F2] w-full">
                Call Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}