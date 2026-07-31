"use client";

import { useApplyModal } from "@/context/ApplyModalContext";

const courses = [
  {
    id: "btech",
    color: "#1d4ed8",
    borderColor: "#1d4ed8",
    bgAccent: "#eff6ff",
    gradient: "from-blue-600 to-blue-700",
    icon: (
      <svg width="28" height="28" viewBox="0 0 26 26" fill="none">
        <rect x="2" y="5" width="22" height="15" rx="2" stroke="#1d4ed8" strokeWidth="2" />
        <path d="M8 11l3 3-3 3M13 17h5" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    category: "B.TECH & TECH PG",
    items: [
      { title: "Computer Science (AI & ML)", desc: "Focus on Neural Networks & Deep Learning." },
      { title: "Internet of Things (IoT)", desc: "Hardware-Software Integration Specialist." },
      { title: "Cybersecurity Engineering", desc: "Enterprise Defense Architecture." },
    ],
    cta: "View Technical Catalog",
  },
  {
    id: "bba",
    color: "#b91c1c",
    borderColor: "#b91c1c",
    bgAccent: "#fef2f2",
    gradient: "from-red-600 to-red-700",
    icon: (
      <svg width="28" height="28" viewBox="0 0 26 26" fill="none">
        <rect x="3" y="7" width="20" height="14" rx="2" stroke="#b91c1c" strokeWidth="2" />
        <path d="M3 11h20M9 7V5h8v2" stroke="#b91c1c" strokeWidth="2" strokeLinecap="round" />
        <rect x="10" y="13" width="6" height="4" rx="1" stroke="#b91c1c" strokeWidth="1.5" />
      </svg>
    ),
    category: "Global BBA & MBA",
    items: [
      { title: "Global Finance & Fintech", desc: "Quantitative Analysis & Blockchain Ops." },
      { title: "Digital Marketing & Analytics", desc: "Data-driven growth hacking for Fortune 500." },
      { title: "Strategic Entrepreneurship", desc: "Venture Capitalist focus & Scaling." },
    ],
    cta: "View Business Catalog",
  },
  {
    id: "medical",
    color: "#92400e",
    borderColor: "#a16207",
    bgAccent: "#fefce8",
    gradient: "from-amber-600 to-amber-700",
    icon: (
      <svg width="28" height="28" viewBox="0 0 26 26" fill="none">
        <rect x="5" y="3" width="16" height="20" rx="2" stroke="#a16207" strokeWidth="2" />
        <path d="M13 8v10M8 13h10" stroke="#a16207" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    category: "Specialized Medical",
    items: [
      { title: "MD Radio-Diagnosis", desc: "Highest demand PG specialization in India." },
      { title: "Dermatology (MD/DNB)", desc: "Clinical excellence & Aesthetic Medicine." },
      { title: "General Surgery (MS)", desc: "Surgical robotics & Advanced Trauma." },
    ],
    cta: "View Medical Catalog",
  },
];

function CheckIcon({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 17 17" fill="none" className="shrink-0 mt-0.5">
      <circle cx="8.5" cy="8.5" r="8.5" fill={color} opacity="0.12" />
      <path d="M5 8.5l2.5 2.5 5-5" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function CoursesSection() {
  const { openModal } = useApplyModal();
  
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-16">
      <div className="max-w-[1280px] mx-auto">

        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-[11px] font-bold tracking-[0.25em] uppercase text-blue-600 bg-blue-50 px-4 py-2 rounded-full mb-5">
            Enterprise Curriculum
          </span>
          <h2 className="font-black text-[2rem] sm:text-[2.8rem] md:text-[3.5rem] text-gray-950 leading-[1.1] tracking-tight mb-6">
            Specialized Global Courses
          </h2>
          <p className="text-gray-600 text-[15px] sm:text-[17px] leading-relaxed max-w-3xl mx-auto font-medium">
            We don&apos;t just find colleges; we architect careers in the most
            high-demand domains of the next decade. Explore our curated
            selection of elite programs.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {courses.map((course) => (
              <div
                key={course.id}
                className="group bg-white rounded-2xl flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5"
                style={{
                  border: `1.5px solid ${course.borderColor}30`,
                  boxShadow: `0 8px 30px -12px ${course.color}30`,
                }}
              >
                {/* Top gradient stripe */}
                <div className={`h-2 bg-gradient-to-r ${course.gradient}`} />

                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105"
                    style={{ background: `linear-gradient(135deg, ${course.bgAccent}, white)` }}
                  >
                    {course.icon}
                  </div>

                  {/* Category Title */}
                  <h3
                    className="font-black text-lg sm:text-xl tracking-tight uppercase leading-tight mb-6 sm:mb-8"
                    style={{ color: course.color }}
                  >
                    {course.category}
                  </h3>

                  {/* Items */}
                  <ul className="flex flex-col gap-5 sm:gap-6 flex-1">
                    {course.items.map((item) => (
                      <li key={item.title} className="flex gap-4">
                        <CheckIcon color={course.color} />
                        <div>
                          <p className="font-bold text-gray-900 text-[14px] sm:text-[15px] tracking-tight leading-tight">
                            {item.title}
                          </p>
                          <p className="text-gray-500 text-[13px] sm:text-[14px] font-medium mt-1.5 leading-snug">
                            {item.desc}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    onClick={openModal}
                    className="mt-8 sm:mt-10 w-full py-4 rounded-xl text-xs font-extrabold tracking-[0.15em] uppercase transition-all duration-200 active:scale-[0.97] shadow-sm cursor-pointer"
                    style={{
                      border: `1.5px solid ${course.borderColor}`,
                      color: course.color,
                      background: "transparent",
                    }}
                    onMouseEnter={(e) => {
                      const btn = e.currentTarget as HTMLButtonElement;
                      btn.style.background = `linear-gradient(135deg, ${course.color}, ${course.color}dd)`;
                      btn.style.color = "#fff";
                      btn.style.borderColor = "transparent";
                    }}
                    onMouseLeave={(e) => {
                      const btn = e.currentTarget as HTMLButtonElement;
                      btn.style.background = "transparent";
                      btn.style.color = course.color;
                      btn.style.borderColor = course.borderColor;
                    }}
                  >
                    {course.cta}
                  </button>
                </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
}
