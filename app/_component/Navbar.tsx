"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { siteName, subsidiaries as subsidiarySites } from "@/siteidentity";
import { useApplyModal } from "@/context/ApplyModalContext";

const tickerItems = subsidiarySites.map((sub) =>
  `${sub.name}: ${sub.description}`
);

export default function Navbar() {
  const { openModal } = useApplyModal();
  const [tickerIndex, setTickerIndex] = useState(0);
  const [tickerVisible, setTickerVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <div className="w-full">
      {/* ── Ticker ── */}
      <div className="bg-[#0d1b3e] text-white text-sm font-semibold">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 flex items-center justify-center gap-8 py-2.5 min-h-[40px]">
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
            className="lg:hidden transition-all duration-300 text-center hover:text-blue-300 cursor-pointer inline-block text-sm font-medium"
            style={{ opacity: tickerVisible ? 1 : 0 }}
          >
            {tickerItems[tickerIndex]}
          </a>
        </div>
      </div>

      {/* ── Main Nav ── */}
      <header className="bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-sm sticky top-0 z-50 supports-[backdrop-filter]:bg-white/80">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 flex items-center h-[72px] gap-6">

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
          <nav aria-label="Main navigation" className="hidden lg:flex items-center flex-1 gap-1 ml-6">
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
            <Link href="/MBBS" className="px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-150 whitespace-nowrap text-center leading-tight">
              <span className="block">MBBS</span>
            </Link>

            <Link href="/btech" className="px-4 py-2.5 text-sm font-semibold text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-150 whitespace-nowrap text-center leading-tight">
              <span className="block">B.Tech & Lot</span>
            </Link>



            {/* Divider */}
            <div className="h-10 w-px bg-gray-200 mx-3 shrink-0" />

            {/* Apply CTA */}
            <button
              onClick={openModal}
              className="shrink-0 bg-blue-700 hover:bg-blue-800 active:scale-[0.97] transition-all duration-150 text-white rounded-lg px-6 py-2.5 text-center leading-tight shadow-lg shadow-blue-200/50 hover:shadow-xl hover:shadow-blue-300/40"
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
          className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-[600px] border-t border-gray-100 shadow-lg" : "max-h-0"}`}
        >
          <nav aria-label="Mobile navigation" className="bg-white px-5 py-4 flex flex-col gap-1">
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
            <Link href="" >
            </Link>

            <Link
              href="/MBBS"
              onClick={() => setMobileOpen(false)}
              className="px-4 py-3.5 text-base font-semibold text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
            >
              MBBS
            </Link>

            <Link href="/btech" className="px-4 py-3.5 text-base font-semibold text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors">
              B.Tech & IoT
            </Link>

            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-3" />

            <button
              onClick={() => {
                openModal();
                setMobileOpen(false);
              }}
              className="mx-4 mb-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg py-4 text-center font-bold text-sm tracking-widest uppercase transition-all duration-200 shadow-lg shadow-blue-200/50 w-full"
            >
              APPLY NOW
            </button>
          </nav>
        </div>
      </header>
    </div>
  );
}