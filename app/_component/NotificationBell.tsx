"use client";

import React, { useState, useEffect, useRef } from "react";

const notifications = [
  {
    id: 1,
    title: "New Admission Cycle Open",
    desc: "Applications now open for Fall 2026 intake across USA, UK, Canada & Australia.",
    tag: "Important",
    type: "info",
  },
  {
    id: 2,
    title: "Free Counseling Session",
    desc: "Book a free 30-minute session with our expert counselors for personalized guidance.",
    tag: "Free",
    type: "success",
  },
  {
    id: 3,
    title: "IELTS Workshop This Weekend",
    desc: "Join our free IELTS preparation workshop. Limited seats available.",
    tag: "Event",
    type: "warning",
  },
  {
    id: 4,
    title: "Success Story: Riya M.",
    desc: "Congratulations! Riya secured admission at University of Edinburgh for MS Data Science.",
    tag: "Achievement",
    type: "success",
  },
  {
    id: 5,
    title: "New Partner Universities",
    desc: "We've added 15+ new partner universities in Germany and Ireland.",
    tag: "Update",
    type: "info",
  },
];

export default function NotificationBell() {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close panel when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Get tag color based on type
  const getTagColor = (type: string) => {
    switch (type) {
      case 'success':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'warning':
        return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'info':
        return 'text-blue-600 bg-blue-50 border-blue-200';
      default:
        return 'text-blue-600 bg-blue-50 border-blue-200';
    }
  };

  return (
    <div className="fixed bottom-25 left-8 z-[9999]" ref={panelRef}>
      {/* Bell Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex items-center justify-center w-14 h-14 bg-orange-500 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 border border-orange-400 group"
        aria-label="Toggle notifications"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`${isOpen ? "rotate-12" : "animate-[bell-ring_2s_infinite]"}`}
        >
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
        
        {/* Notification Badge */}
        {!isOpen && (
          <span className="absolute top-3 right-3 w-3.5 h-3.5 bg-white rounded-full border-2 border-orange-500 animate-pulse"></span>
        )}
      </button>

      {/* Offers Panel */}
      <div
        className={`absolute bottom-full left-0 mb-4 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden transition-all duration-300 origin-bottom-right ${
          isOpen ? "scale-100 opacity-100 visible" : "scale-90 opacity-0 invisible"
        }`}
      >
        <div className="p-5 border-b border-slate-50 flex justify-between items-center bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <h3 className="font-barlow-condensed font-black text-lg text-slate-900 uppercase tracking-tight">
              Notifications
            </h3>
          </div>
          <span className="text-xs font-semibold text-blue-600 bg-white px-2 py-1 rounded-full">
            {notifications.length} New
          </span>
        </div>

        <div className="max-h-[350px] overflow-y-auto p-4 space-y-3">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group cursor-pointer"
            >
              <div className="flex justify-between items-start mb-2">
                <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded border ${getTagColor(notification.type)}`}>
                  {notification.tag}
                </span>
                <span className="text-[10px] text-slate-400 font-medium">Just now</span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm mb-1.5 group-hover:text-blue-600 transition-colors">
                {notification.title}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {notification.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-t border-slate-100">
          <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-bold text-[10px] uppercase tracking-widest hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
            Mark All as Read
          </button>
        </div>
      </div>

      <style jsx global>{`
        @keyframes bell-ring {
          0%, 100% { transform: rotate(0); }
          5%, 15% { transform: rotate(10deg); }
          10%, 20% { transform: rotate(-10deg); }
          25% { transform: rotate(0); }
        }
      `}</style>
    </div>
  );
}
