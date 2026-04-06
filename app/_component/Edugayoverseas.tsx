"use client";

import Image from 'next/image';
import { subsidiaries } from '@/siteidentity';

const nodes = ["Georgia", "Bangladesh", "Russia", "Kyrgyzstan"];

export default function EdugayOverseas() {
  const edugaySite = subsidiaries.find(s => s.name === "Edugaydoverseas");
  return (
    <section className="bg-[#f0f2f7] py-20 px-4 sm:px-10">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* ── LEFT — Image + floating cards ── */}
        <div className="relative flex items-center justify-center">

          {/* Main image */}
          <div className="w-full max-w-[390px] aspect-[4/3] rounded-2xl overflow-hidden shadow-xl shrink-0">
            <img
              src="https://i.pinimg.com/736x/c0/0b/fa/c00bfac4520ace7bf510f1a9bbf762be.jpg"
              alt="Overseas university campus"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating card — 98% Visa Approval */}
          <div className="absolute top-4 right-0 sm:right-[-10px] lg:right-[-30px] bg-red-600 rounded-2xl px-6 py-5 shadow-xl min-w-[150px]">
            <p className="font-black text-white text-[2.2rem] leading-none tracking-tight">
              98%
            </p>
            <p className="font-bold text-[9px] tracking-[0.22em] uppercase text-white/80 mt-1.5">
              Visa Approval Georgia
            </p>
          </div>

          {/* Floating card — Popular Nodes */}
          <div className="absolute bottom-4 right-0 sm:right-[-10px] lg:right-[-30px] bg-white rounded-2xl px-5 py-4 shadow-xl min-w-[150px]">
            <p className="font-black text-gray-900 text-[10px] tracking-[0.2em] uppercase mb-3">
              Popular Nodes
            </p>
            <ul className="flex flex-col gap-1.5">
              {nodes.map((node) => (
                <li key={node} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                  <span className="text-[12.5px] font-medium text-gray-700">{node}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── RIGHT ── */}
        <div>
          {/* Eyebrow */}
          <p className="text-[10px] font-bold tracking-[0.28em] uppercase text-blue-600 mb-4">
            Direct Admission Vertical
          </p>

          {/* Heading with Logo */}
          <div className="flex items-center gap-4 mb-6">
            <div className="relative w-16 h-16 shrink-0 bg-white rounded-lg p-2 shadow-md">
              <Image
                src="/logo/edugaydoverseas.png"
                alt="Edugaydoverseas Logo"
                fill
                className="object-contain"
                onError={(e) => {
                  // Fallback if logo doesn't exist - show globe icon
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    parent.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                        <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
                          <circle cx="16" cy="16" r="12" stroke="#2563eb" strokeWidth="2"/>
                          <ellipse cx="16" cy="16" rx="6" ry="12" stroke="#2563eb" strokeWidth="1.5"/>
                          <path d="M4 16h24M16 4c-4 4-6 8-6 12s2 8 6 12M16 4c4 4 6 8 6 12s-2 8-6 12" stroke="#2563eb" strokeWidth="1.5"/>
                        </svg>
                      </div>
                    `;
                  }
                }}
              />
            </div>
            <h2 className="font-black text-gray-950 text-[2rem] sm:text-[2.5rem] leading-[1.05] tracking-tight">
              Edugaydoverseas.com
            </h2>
          </div>

          {/* Body */}
          <p className="text-gray-700 font-semibold text-[14.5px] leading-[1.75] mb-8 max-w-md">
            Specialized Medical UG admission guidance in elite abroad medical
            colleges. We facilitate direct admission paths except for top 5
            major countries, providing affordable global healthcare education.
          </p>

          {/* Stat badges */}
          <div className="flex gap-4 mb-8">
            <div className="flex-1 border border-blue-200 rounded-xl px-5 py-4 bg-white shadow-sm">
              <p className="font-black text-gray-900 text-[1.5rem] leading-none tracking-tight">
                Zero
              </p>
              <p className="font-bold text-[9.5px] tracking-[0.2em] uppercase text-gray-400 mt-1.5">
                Donation Policy
              </p>
            </div>
            <div className="flex-1 border border-blue-200 rounded-xl px-5 py-4 bg-white shadow-sm">
              <p className="font-black text-gray-900 text-[1.5rem] leading-none tracking-tight">
                WHO
              </p>
              <p className="font-bold text-[9.5px] tracking-[0.2em] uppercase text-gray-400 mt-1.5">
                Recognized Institutes
              </p>
            </div>
          </div>

          {/* CTA */}
          <a
            href={edugaySite?.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full sm:w-auto min-w-[300px] bg-blue-700 hover:bg-blue-800 active:scale-[0.98] transition-all duration-200 text-white font-bold text-[11px] tracking-[0.22em] uppercase px-8 py-4 rounded-lg shadow-lg shadow-blue-200"
          >
            Explore Overseas Portals
          </a>
        </div>

      </div>
    </section>
  );
}