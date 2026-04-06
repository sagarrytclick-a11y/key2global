"use client";

const steps = [
  {
    number: "01",
    label: "SMART COUNSELING",
    desc: "AI-driven profile evaluation and roadmap design.",
    borderColor: "#1d4ed8",
    iconColor: "#1d4ed8",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke="#1d4ed8" strokeWidth="1.8" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#1d4ed8" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="18" cy="6" r="2" fill="#1d4ed8" opacity="0.3" />
        <path d="M17 5l1 1 2-2" stroke="#1d4ed8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "02",
    label: "DOCUMENTATION",
    desc: "SOP crafting and transcript verification engine.",
    borderColor: "#b91c1c",
    iconColor: "#b91c1c",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="3" width="14" height="18" rx="2" stroke="#b91c1c" strokeWidth="1.8" />
        <path d="M8 8h8M8 12h8M8 16h5" stroke="#b91c1c" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "03",
    label: "VISA PROTOCOL",
    desc: "Strategic filing and mock interview simulations.",
    borderColor: "#a16207",
    iconColor: "#a16207",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="6" width="18" height="13" rx="2" stroke="#a16207" strokeWidth="1.8" />
        <path d="M7 10h4M7 14h6" stroke="#a16207" strokeWidth="1.6" strokeLinecap="round" />
        <rect x="14" y="10" width="4" height="4" rx="1" stroke="#a16207" strokeWidth="1.5" />
        <path d="M7 3l2 3M17 3l-2 3" stroke="#a16207" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "04",
    label: "DEPARTURE HUB",
    desc: "Pre-departure briefing and global travel logistics.",
    borderColor: "#111827",
    iconColor: "#111827",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 17l4-4 3 2 4-5 4 3" stroke="#111827" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 20h20" stroke="#111827" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M17 7l2-2 2 2-5 5-3-2" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "05",
    label: "CAMPUS LIFE",
    desc: "On-ground support and placement assistance.",
    borderColor: "#15803d",
    iconColor: "#15803d",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 3L2 9h20L12 3Z" stroke="#15803d" strokeWidth="1.8" strokeLinejoin="round" />
        <rect x="5" y="9" width="4" height="12" stroke="#15803d" strokeWidth="1.6" />
        <rect x="10" y="13" width="4" height="8" stroke="#15803d" strokeWidth="1.6" />
        <rect x="15" y="9" width="4" height="12" stroke="#15803d" strokeWidth="1.6" />
        <path d="M2 21h20" stroke="#15803d" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function AdmissionArchitecture() {
  return (
    <section className="bg-white py-20 px-4 sm:px-10 overflow-hidden">
      <div className="max-w-[1280px] mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[10.5px] font-bold tracking-[0.28em] uppercase text-blue-600 mb-4">
            Enterprise Workflow
          </p>
          <h2 className="font-black text-gray-950 text-[2.8rem] sm:text-[3.6rem] leading-none tracking-tight uppercase">
            The Admission Architecture
          </h2>
          {/* Red underline accent */}
          <div className="mx-auto mt-5 w-16 h-[3px] bg-red-600 rounded-full" />
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-px bg-gray-200 z-0" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-6 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center group">

                {/* Icon box */}
                <div
                  className="w-[76px] h-[76px] rounded-2xl bg-white flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
                  style={{
                    border: `2px solid ${step.borderColor}`,
                    boxShadow: `0 2px 16px 0 ${step.borderColor}18`,
                  }}
                >
                  {step.icon}
                </div>

                {/* Horizontal rule below icon */}
                <div
                  className="w-full h-[2px] mb-4"
                  style={{ background: `linear-gradient(to right, transparent, ${step.borderColor}40, transparent)` }}
                />

                {/* Number + label */}
                <p
                  className="font-black text-[12px] tracking-[0.12em] uppercase leading-snug mb-2"
                  style={{ color: step.borderColor }}
                >
                  {step.number}.{" "}
                  <span className="text-gray-950">{step.label}</span>
                </p>

                {/* Description */}
                <p className="text-gray-500 text-[12px] leading-relaxed font-normal max-w-[130px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}