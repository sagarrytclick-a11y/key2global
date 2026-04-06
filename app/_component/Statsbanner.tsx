"use client";

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
    <section className="w-full bg-[#2d4a8a] py-8 px-4 sm:px-8">
      <div className="max-w-[1280px] mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/20">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex flex-col px-6 sm:px-10 py-2 first:pl-0 last:pr-0"
          >
            <span className="font-black text-white text-[2.4rem] sm:text-[2.8rem] leading-none tracking-tight">
              {stat.value}
            </span>
            <span className="mt-2 text-[10px] font-bold tracking-[0.18em] uppercase text-white/80">
              {stat.label}
            </span>
            <span className="mt-1 text-[10px] font-normal tracking-wide text-white/50">
              {stat.sub}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}