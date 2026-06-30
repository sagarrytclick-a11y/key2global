const stats = [
  {
    value: "54,200+",
    label: "Certified Alumni Network",
    sub: "Updated as of June 2026",
  },
  {
    value: "1,200+",
    label: "Global Faculty Mentors",
    sub: "Direct Ivy-League Access",
  },
  {
    value: "320+",
    label: "Fortune 500 Partners",
    sub: "Placement & Internship Nodes",
  },
  {
    value: "$4.2M",
    label: "Scholarships Secured",
    sub: "Cumulative Student Savings",
  },
];

export default function StatsBanner() {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#1a2d5e] via-[#2d4a8a] to-[#1a2d5e] py-12 sm:py-16 px-6 sm:px-8 lg:px-16 overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="w-full h-full" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent" />
      
      <div className="relative max-w-[1280px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center lg:items-start text-center lg:text-left px-4 sm:px-6 py-4 lg:border-r lg:border-white/15 last:border-r-0"
            >
              <span className="font-black text-white text-[2.4rem] sm:text-[2.8rem] leading-none tracking-tight">
                {stat.value}
              </span>
              <span className="mt-2 text-[10px] font-bold tracking-[0.18em] uppercase text-blue-200">
                {stat.label}
              </span>
              <span className="mt-1 text-[10px] font-normal tracking-wide text-white/40">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
