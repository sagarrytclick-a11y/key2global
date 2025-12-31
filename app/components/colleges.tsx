import Link from "next/link";
import React from "react";
import CollegeCard from "./CollegeCard";

const articles = [
  { title: "How to write a killer essay", time: "5 min read" },
  { title: "Understanding FAFSA & Aid", time: "8 min read" },
  { title: "Campus visit checklist", time: "3 min read" },
];

// Mock data based on the image
const COLLEGES = [
  {
    slug: "iit-bombay",
    name: "IIT Bombay",
    location: "Mumbai, Maharashtra",
    tuition: "₹2,25,000/yr",
    acceptance: "0.8%",
    undergrad: "5,200",
    sat: "JEE Adv: 99.9%ile",
    topRated: true,
    logo: "🏛️",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    slug: "iit-delhi",
    name: "IIT Delhi",
    location: "New Delhi, Delhi",
    tuition: "₹2,25,000/yr",
    acceptance: "0.9%",
    undergrad: "4,800",
    sat: "JEE Adv: 99.8%ile",
    topRated: true,
    logo: "🎓",
    image:
      "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGVnZSUyMGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    slug: "bits-pilani",
    name: "BITS Pilani",
    location: "Pilani, Rajasthan",
    tuition: "₹4,50,000/yr",
    acceptance: "2.5%",
    undergrad: "4,200",
    sat: "BITSAT: 320+",
    topRated: false,
    logo: "⚙️",
    image:
      "https://images.unsplash.com/photo-1592066575517-58df903152f2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGVnZSUyMGJ1aWxkaW5nfGVufDB8fDB8fHww",
  },
  {
    slug: "delhi-university",
    name: "Delhi University",
    location: "New Delhi, Delhi",
    tuition: "₹25,000/yr",
    acceptance: "15%",
    undergrad: "1,32,000",
    sat: "CUET: 650+",
    topRated: false,
    logo: "📚",
    image:
      "https://t4.ftcdn.net/jpg/04/98/14/49/360_F_498144940_DkzvRAkgBv1ILU6DiDeMZr6vUufPOra4.jpg",
  },
  {
    slug: "iim-ahmedabad",
    name: "IIM Ahmedabad",
    location: "Ahmedabad, Gujarat",
    tuition: "₹33,00,000/2yr",
    acceptance: "0.5%",
    undergrad: "395",
    sat: "CAT: 99.5%ile",
    topRated: true,
    logo: "💼",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Corpus_Christi_College_New_Court%2C_Cambridge%2C_UK_-_Diliff.jpg/500px-Corpus_Christi_College_New_Court%2C_Cambridge%2C_UK_-_Diliff.jpg",
  },
  {
    slug: "nit-trichy",
    name: "NIT Trichy",
    location: "Tiruchirappalli, Tamil Nadu",
    tuition: "₹1,50,000/yr",
    acceptance: "3%",
    undergrad: "3,600",
    sat: "JEE Main: 98%ile",
    topRated: false,
    logo: "🔧",
    image:
      "https://media.istockphoto.com/id/185233958/photo/community-college-building.jpg?s=612x612&w=0&k=20&c=kjD6v3eQAJFZTNS_kJCCW40nfsTjTRQHIuvn3-sdklI=",
  },
];

const ExploreColleges: React.FC = () => {
  return (
    <div className="bg-[#F9F7F2] min-h-screen p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header and Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-[#2D2D2D]">
              Explore Colleges
            </h2>
            <p className="text-[#2D2D2D]">
              Refine your search to find the perfect match.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              "Public vs Private",
              "SAT Score",
              "Tuition < $20k",
              "Acceptance Rate",
            ].map((filter) => (
              <button
                key={filter}
                className="px-4 py-1.5 bg-[#EFEBE0] border border-[#EFEBE0] rounded-full text-sm font-medium text-[#2D2D2D] hover:bg-[#EFEBE0] hover:opacity-80 flex items-center gap-2"
              >
                {filter} <span className="text-[10px]">▼</span>
              </button>
            ))}
            <button className="px-4 py-1.5 bg-[#EFEBE0] border border-[#EFEBE0] rounded-full text-sm font-medium text-[#2D2D2D] hover:bg-[#EFEBE0] hover:opacity-80 flex items-center gap-2">
              All Filters <span className="rotate-90">≡</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* College Grid */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {COLLEGES.map((college, idx) => (
              <CollegeCard college={college} key={idx} />
            ))}
          </div>

          {/* Sidebar Section */}
          <div className="flex flex-col gap-6">
            {/* Latest News */}
            <div className="bg-[#EFEBE0] p-6 rounded-2xl border border-[#EFEBE0] shadow-sm">
              <h3 className="font-semibold text-[#2D2D2D] text-sm mb-6">
                Latest News
              </h3>

              <div className="space-y-5">
                {articles.map((tip, i) => (
                  <div key={i} className="group cursor-pointer">
                    <h4 className="text-sm font-semibold text-[#2D2D2D] group-hover:text-[#E63946] transition">
                      {tip.title}
                    </h4>
                    <p className="text-[11px] text-[#2D2D2D] mt-1 uppercase">
                      {tip.time}
                    </p>
                  </div>
                ))}
              </div>

              <button className="w-full text-center text-xs font-semibold text-[#E63946] mt-8 hover:underline">
                View All News
              </button>
            </div>

            {/* College of the Month */}
            <div className="bg-[#EFEBE0] p-6 rounded-2xl border border-[#EFEBE0] shadow-sm">
              <h3 className="font-semibold text-[#2D2D2D] text-sm mb-4">
                College of the Month
              </h3>

              <div className="mb-3">
                <h4 className="text-sm font-semibold text-[#2D2D2D]">
                  Duke University
                </h4>
                <p className="text-[11px] text-[#2D2D2D]">
                  Durham, North Carolina
                </p>
              </div>

              <p className="text-[12px] text-[#2D2D2D] leading-relaxed mb-6">
                Duke University is known for its strong academic reputation,
                research-driven culture, and vibrant campus life. It
                consistently ranks among the top universities worldwide.
              </p>

              <button className="w-full py-2.5 bg-[#F9F7F2] text-[#E63946] text-xs font-semibold rounded-xl border border-[#EFEBE0] hover:bg-[#EFEBE0] transition">
                Explore College
              </button>
            </div>
          </div>
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-12">
          <button className="px-8 py-2.5 bg-[#EFEBE0] border border-[#EFEBE0] rounded-full text-sm font-bold text-[#2D2D2D] hover:shadow-md transition-shadow">
            Load More Colleges
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreColleges;
