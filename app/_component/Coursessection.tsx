"use client";

import { useApplyModal } from "@/context/ApplyModalContext";

const courses = [
  {
    id: "btech",
    color: "#1d4ed8",
    borderColor: "#1d4ed8",
    bgAccent: "#eff6ff",
    icon: (
      <svg width="28" height="28" viewBox="0 0 26 26" fill="none">
        <rect x="2" y="5" width="22" height="15" rx="2" stroke="#1d4ed8" strokeWidth="2" />
        <path d="M8 11l3 3-3 3M13 17h5" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    category: "B.TECH & TECH PG",
    items: [
      { title: "COMPUTER SCIENCE (AI & ML)", desc: "Focus on Neural Networks & Deep Learning." },
      { title: "INTERNET OF THINGS (IOT)", desc: "Hardware-Software Integration Specialist." },
      { title: "CYBERSECURITY ENGINEERING", desc: "Enterprise Defense Architecture." },
    ],
    cta: "VIEW TECHNICAL CATALOG",
  },
  {
    id: "bba",
    color: "#b91c1c",
    borderColor: "#b91c1c",
    bgAccent: "#fef2f2",
    icon: (
      <svg width="28" height="28" viewBox="0 0 26 26" fill="none">
        <rect x="3" y="7" width="20" height="14" rx="2" stroke="#b91c1c" strokeWidth="2" />
        <path d="M3 11h20M9 7V5h8v2" stroke="#b91c1c" strokeWidth="2" strokeLinecap="round" />
        <rect x="10" y="13" width="6" height="4" rx="1" stroke="#b91c1c" strokeWidth="1.5" />
      </svg>
    ),
    category: "GLOBAL BBA & MBA",
    items: [
      { title: "GLOBAL FINANCE & FINTECH", desc: "Quantitative Analysis & Blockchain Ops." },
      { title: "DIGITAL MARKETING & ANALYTICS", desc: "Data-driven growth hacking for Fortune 500." },
      { title: "STRATEGIC ENTREPRENEURSHIP", desc: "Venture Capitalist focus & Scaling." },
    ],
    cta: "VIEW BUSINESS CATALOG",
  },
  {
    id: "medical",
    color: "#92400e",
    borderColor: "#a16207",
    bgAccent: "#fefce8",
    icon: (
      <svg width="28" height="28" viewBox="0 0 26 26" fill="none">
        <rect x="5" y="3" width="16" height="20" rx="2" stroke="#a16207" strokeWidth="2" />
        <path d="M13 8v10M8 13h10" stroke="#a16207" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    category: "SPECIALIZED MEDICAL",
    items: [
      { title: "MD RADIO-DIAGNOSIS", desc: "Highest demand PG specialization in India." },
      { title: "DERMATOLOGY (MD/DNB)", desc: "Clinical excellence & Aesthetic Medicine." },
      { title: "GENERAL SURGERY (MS)", desc: "Surgical robotics & Advanced Trauma." },
    ],
    cta: "VIEW MEDICAL CATALOG",
  },
];

function CheckIcon({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 17 17" fill="none" className="shrink-0 mt-0.5">
      <circle cx="8.5" cy="8.5" r="8.5" fill={color} opacity="0.15" />
      <path d="M5 8.5l2.5 2.5 5-5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function CoursesSection() {
  const { openModal } = useApplyModal();
  
  return (
    <section className="bg-white py-20 px-6 sm:px-10">
      <div className="max-w-[1280px] mx-auto">

        {/* Label */}
        <p className="text-[13px] text-center font-bold tracking-[0.2em] uppercase text-blue-600 mb-4">
          Enterprise Curriculum
        </p>

        {/* Heading */}
        <h2 className="font-black text-center text-[2.8rem] text-gray-950 text-[2.8rem] sm:text-[3.5rem] leading-[1.1] tracking-tight uppercase mb-6">
          Specialized Global Courses
        </h2>

        {/* Subheading */}
       <p className="text-gray-700 text-center font-medium text-[17px] leading-relaxed max-w-3xl mx-auto mb-16">
  We don&apos;t just find colleges; we architect careers in the most
  high-demand domains of the next decade. Explore our curated
  selection of elite programs.
</p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-[24px] flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              style={{
                border: `2px solid ${course.borderColor}`,
                boxShadow: `0 10px 30px -10px ${course.color}25`,
              }}
            >
              {/* Top color stripe */}
              <div className="h-1.5" style={{ background: course.color }} />

              <div className="p-8 flex flex-col flex-1">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: course.bgAccent }}
                >
                  {course.icon}
                </div>

                {/* Category Title */}
                <h3
                  className="font-black text-[20px] tracking-tight uppercase leading-tight mb-8"
                  style={{ color: course.color }}
                >
                  {course.category}
                </h3>

                {/* Items */}
                <ul className="flex flex-col gap-6 flex-1">
                  {course.items.map((item) => (
                    <li key={item.title} className="flex gap-4">
                      <CheckIcon color={course.color} />
                      <div>
                        <p className="font-bold text-gray-900 text-[15px] tracking-tight uppercase leading-tight">
                          {item.title}
                        </p>
                        <p className="text-gray-600 text-[14px] font-medium mt-1.5 leading-snug">
                          {item.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={openModal}
                  className="mt-10 w-full py-4 rounded-xl text-[13px] font-extrabold tracking-[0.15em] uppercase transition-all duration-200 active:scale-[0.97] shadow-sm cursor-pointer"
                  style={{
                    border: `2px solid ${course.borderColor}`,
                    color: course.color,
                    background: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    const btn = e.currentTarget as HTMLButtonElement;
                    btn.style.background = course.color;
                    btn.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    const btn = e.currentTarget as HTMLButtonElement;
                    btn.style.background = "transparent";
                    btn.style.color = course.color;
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