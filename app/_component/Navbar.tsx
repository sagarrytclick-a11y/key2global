"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { siteName, subsidiaries as subsidiarySites } from "@/siteidentity";
import { useApplyModal } from "@/context/ApplyModalContext";

const tickerItems = subsidiarySites.map(sub => 
  `${sub.name}: ${sub.description}`
);

const institutionLinks = [
  "bits Pilani",
  "AIIMS Delhi",
  "VIT VELLORE",
  "IIT Bombay",
];

const mobileNav = [
  { label: "Institutions", hasDropdown: true },
  ...subsidiarySites.map(sub => ({ label: sub.name, hasDropdown: false })),
  { label: "B.Tech & IoT", hasDropdown: false },
  { label: "Global BBA", hasDropdown: false },
  { label: "Student Login", hasDropdown: false },
];

export default function Navbar() {
  const { openModal } = useApplyModal();
  const [tickerIndex, setTickerIndex] = useState(0);
  const [tickerVisible, setTickerVisible] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileInstitutionsOpen, setMobileInstitutionsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Ticker cycling
  useEffect(() => {
    const id = setInterval(() => {
      setTickerVisible(false);
      setTimeout(() => {
        setTickerIndex((i) => (i + 1) % tickerItems.length);
        setTickerVisible(true);
      }, 350);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handle(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <div className="w-full">
      {/* ── Ticker ── */}
      <div className="bg-[#0d1b3e] text-white text-sm font-semibold">
        <div className="max-w-[1400px] mx-auto px-4 flex items-center justify-center gap-8 py-2.5 min-h-[40px]">
          {/* Desktop: show all 3 separated by | */}
          <div className="hidden lg:flex items-center gap-8 text-base w-full justify-between">
            {subsidiarySites.slice(0, 3).map((sub, i) => (
              <Link
                key={i}
                href={sub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:text-blue-300 transition-colors duration-200 cursor-pointer font-medium"
              >
                {sub.name}
                {i < 2 && <span className="text-white/30">|</span>}
              </Link>
            ))}
          </div>
          {/* Mobile: cycle single item */}
          <a
            href={subsidiarySites[tickerIndex % subsidiarySites.length]?.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="lg:hidden transition-opacity duration-300 text-center hover:text-blue-300 transition-colors duration-200 cursor-pointer inline-block text-sm font-medium"
            style={{ opacity: tickerVisible ? 1 : 0 }}
          >
            {tickerItems[tickerIndex]}
          </a>
        </div>
      </div>

      {/* ── Main Nav ── */}
      <header className="bg-white border-b border-gray-200 shadow-md sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex items-center h-[72px] gap-6">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="relative w-12 h-12 shrink-0">
              {/* K icon */}
             <Image src="/logo.png" alt="logo" width={48} height={48} />
              {/* small red accent dot */}
            </div>
            <div className="leading-none">
              <p className="font-black text-lg text-gray-900 tracking-tight">{siteName.split(' ')[0]} {siteName.split(' ')[1]}</p>
              <p className="font-black text-lg text-red-700 tracking-tight -mt-0.5">{siteName.split(' ')[2] || ''}</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center flex-1 gap-1 ml-6" ref={dropdownRef}>
            {/* Institutions dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen((v) => !v)}
                className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-150"
              >
                Institutions
                <svg
                  className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-100 rounded-xl shadow-xl py-2 z-50">
                  {institutionLinks.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="flex items-center gap-3 px-5 py-3 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-100 font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {subsidiarySites.slice(0, 3).map((sub) => (
              <a
                key={sub.name}
                href={sub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-150 whitespace-nowrap"
              >
                {sub.name}
              </a>
            ))}

            {/* Spacer */}
            <div className="flex-1" />

            {/* Right links */}
            <a href="#" className="px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-150 whitespace-nowrap text-center leading-tight">
              <span className="block">B.Tech & IoT</span>
            </a>
            <a href="#" className="px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-150 whitespace-nowrap text-center leading-tight">
              <span className="block">Global BBA</span>
            </a>
           

            {/* Divider */}
            <div className="h-10 w-px bg-gray-200 mx-3 shrink-0" />

            {/* Apply CTA */}
            <button
              onClick={openModal}
              className="shrink-0 bg-blue-700 hover:bg-blue-800 active:scale-[0.97] transition-all duration-150 text-white rounded-lg px-6 py-2.5 text-center leading-tight shadow-lg shadow-blue-200"
            >
              <span className="block font-bold text-xs tracking-widest uppercase">APPLY NOW</span>
            </button>
          </nav>

          {/* Mobile: spacer + hamburger */}
          <div className="flex-1 lg:hidden" />
          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block w-6 h-0.5 bg-gray-700 transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>

        {/* ── Mobile drawer ── */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-[600px] border-t border-gray-100" : "max-h-0"}`}
        >
          <nav className="bg-white px-5 py-4 flex flex-col gap-1">
            {/* Institutions */}
            <div>
              <button
                onClick={() => setMobileInstitutionsOpen((v) => !v)}
                className="w-full flex items-center justify-between px-4 py-3.5 text-base font-semibold text-gray-700 hover:text-blue-700 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Institutions
                <svg
                  className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${mobileInstitutionsOpen ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileInstitutionsOpen && (
                <div className="pl-6 pb-2 flex flex-col gap-1 mt-1">
                  {institutionLinks.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="flex items-center gap-3 px-4 py-3 text-sm text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {subsidiarySites.map((sub) => (
              <a
                key={sub.name}
                href={sub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 text-base font-semibold text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
              >
                {sub.name}
              </a>
            ))}

            <a href="#" className="px-4 py-3.5 text-base font-bold text-blue-700 hover:bg-blue-50 rounded-lg transition-colors">
              Student Login
            </a>

            <div className="h-px bg-gray-100 my-3" />

            <button
              onClick={() => {
                openModal();
                setMobileOpen(false);
              }}
              className="mx-4 mb-4 bg-blue-700 hover:bg-blue-800 text-white rounded-lg py-4 text-center font-bold text-sm tracking-widest uppercase transition-colors shadow-lg shadow-blue-200 w-full"
            >
              APPLY NOW
            </button>
          </nav>
        </div>
      </header>
    </div>
  );
}