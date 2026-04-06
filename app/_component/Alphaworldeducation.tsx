"use client";

import Image from 'next/image';
import { subsidiaries } from '@/siteidentity';

const regions = [
  {
    id: "usa",
    title: "USA & CAN",
    desc: "Ivy League preparation and Ivy-adjacent technical institutions. F1 visa sponsorship expertise.",
    items: ["Data Science & AI Masters", "Global Executive MBA"],
    cta: "NORTH AMERICA GATEWAY",
  },
  {
    id: "uk",
    title: "UK & GER",
    desc: "Research-heavy technical hubs. Focused on Automotive Engineering, IoT, and Fintech.",
    items: ["M.Eng Robotics Systems", "Strategic Fin Management"],
    cta: "EUROPE HUB",
  },
  {
    id: "aus",
    title: "AUS & NZ",
    desc: "Agri-tech, Hospitality Management, and Clinical Research specialization corridors.",
    items: ["Post-Study Work Pathways", "PR Focused Courses"],
    cta: "OCEANIA PATHWAY",
  },
];

export default function AlphaWorldEducation() {
  const alphaSite = subsidiaries.find(s => s.name === "AlphaWorldEducation");
  return (
    <section
      className="relative py-20 px-4 sm:px-10 overflow-hidden"
      style={{ background: "#0d1f3c" }}
    >
      {/* World map watermark */}
      <div
        className="absolute inset-0 opacity-[0.07] bg-center bg-no-repeat bg-cover pointer-events-none"
        style={{
          backgroundImage: `url("/websites/alphaworldeducation.png")`,
        }}
      />

      {/* Subtle radial glow center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(255,180,0,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-amber-400 mb-5">
            The Global Multi-Disciplinary Hub
          </p>
          
          {/* Logo and Domain Name */}
          <a
            href={alphaSite?.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-4 mb-6 flex-col sm:flex-row group hover:opacity-90 transition-opacity"
          >
            <div className="relative w-20 h-20 shrink-0 bg-white/10 rounded-xl p-3 backdrop-blur-sm">
              <Image
                src="/logo/alphaworld.png"
                alt="AlphaWorldEducation Logo"
                fill
                className="object-contain"
              />
            </div>
            <h2
              className="font-black text-white flex leading-none tracking-tight uppercase text-left"
              style={{ fontSize: "clamp(1.4rem, 5vw, 3.5rem)" }}
            >
              ALPHAWORLDEDUCATION.COM
            </h2>
          </a>
          
          <p className="text-white/70 font-semibold text-[14.5px] leading-[1.75] mt-6 max-w-2xl mx-auto">
            The ultimate gateway to elite non-medical UG/PG programs across
            the Top 5 major countries: USA, Canada, Australia, UK, and New
            Zealand. Plus high-innovation corridors in Germany, Dubai, and
            Ireland.
          </p>
        </div>

        {/* Region cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {regions.map((region) => (
            <div
              key={region.id}
              className="rounded-2xl flex flex-col p-7 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(4px)",
              }}
            >
              {/* Title */}
              <h3 className="font-black text-amber-400 text-[1.6rem] leading-none tracking-tight mb-4 uppercase">
                {region.title}
              </h3>

              {/* Desc */}
              <p className="text-white/60 text-[12.5px] font-normal leading-relaxed mb-5">
                {region.desc}
              </p>

              {/* Bullet items */}
              <ul className="flex flex-col gap-2 mb-8 flex-1">
                {region.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                    <span className="text-white/80 text-[12.5px] font-semibold">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={alphaSite?.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-lg text-[10.5px] font-bold tracking-[0.2em] uppercase transition-all duration-200 active:scale-[0.98] inline-block text-center"
                style={{
                  border: "1px solid rgba(255,255,255,0.25)",
                  color: "rgba(255,255,255,0.8)",
                  background: "transparent",
                }}
                onMouseEnter={(e) => {
                  const btn = e.currentTarget as HTMLAnchorElement;
                  btn.style.background = "rgba(255,255,255,0.1)";
                  btn.style.color = "#fff";
                  btn.style.borderColor = "rgba(255,255,255,0.5)";
                }}
                onMouseLeave={(e) => {
                  const btn = e.currentTarget as HTMLAnchorElement;
                  btn.style.background = "transparent";
                  btn.style.color = "rgba(255,255,255,0.8)";
                  btn.style.borderColor = "rgba(255,255,255,0.25)";
                }}
              >
                {region.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}