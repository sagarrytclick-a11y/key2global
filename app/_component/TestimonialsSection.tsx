"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "B.Tech Student, Germany",
    feedback:
      "Key2Global made my dream of studying engineering in Germany possible. Everything from applications to visa was seamless.",
    avatar: "https://i.pinimg.com/736x/8d/b7/f6/8db7f6a91935bc5bbfd84a71fefcfd18.jpg",
  },
  {
    id: 2,
    name: "Ananya Patel",
    role: "MBBS Student, UK",
    feedback:
      "The counseling support was amazing. I secured admission in a top UK university without stress.",
    avatar: "https://i.pinimg.com/736x/89/4b/ff/894bff75c0b4ef5f34c9914377d13185.jpg",
  },
  {
    id: 3,
    name: "Ishita Rao",
    role: "BBA, Canada",
    feedback:
      "Highly professional team. They guided me from course selection to visa approval.",
    avatar: "https://i.pinimg.com/736x/3a/0c/d8/3a0cd8a35bb1c1d8390cd35987cd4a9e.jpg",
  },
  {
    id: 4,
    name: "Sneha Verma",
    role: "MBA, Australia",
    feedback:
      "Transparent process and great support. Got into a top MBA college.",
    avatar: "https://i.pinimg.com/736x/28/06/61/2806611f0d5d28ede2130650f6f96d71.jpg",
  },
  {
    id: 5,
    name: "Arjun Mehta",
    role: "B.Tech, USA",
    feedback:
      "Perfect guidance for US admissions. SOP and applications were handled perfectly.",
    avatar: "https://i.pinimg.com/736x/6e/7d/9d/6e7d9d8a15b47ace4a5e0abc7a10434c.jpg",
  },
  {
    id: 6,
    name: "Priya Nair",
    role: "BBA, Dubai",
    feedback:
      "Very smooth process. They helped me pick the right college.",
    avatar: "https://i.pinimg.com/736x/99/9d/ef/999defdd7eedf178f6b5cdff4024c7ee.jpg",
  },
  {
    id: 7,
    name: "Neha Kapoor",
    role: "MS, Ireland",
    feedback:
      "Quick visa approval and great support throughout.",
    avatar: "https://i.pinimg.com/736x/83/48/80/83488035f3803f0bc8a7d0d94c438535.jpg",
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Update items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const totalSlides = useMemo(
    () => Math.max(1, Math.ceil(testimonials.length / itemsPerView)),
    [itemsPerView]
  );

  // Auto slide (only when more than one slide exists)
  useEffect(() => {
    if (totalSlides <= 1) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev >= totalSlides - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const visibleTestimonials = useMemo(
    () => testimonials.slice(index * itemsPerView, index * itemsPerView + itemsPerView),
    [index, itemsPerView]
  );

  const displayTestimonials = useMemo(() => {
    const result = [...visibleTestimonials];
    while (result.length < itemsPerView) {
      result.push(testimonials[result.length % testimonials.length]);
    }
    return result;
  }, [itemsPerView, visibleTestimonials]);

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">
            Success Stories
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
            What Our Students Say
          </h3>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Real experiences from students who achieved their dreams with our guidance
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {displayTestimonials.map((t, idx) => (
              <div
                key={`${t.id}-${idx}`}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Quote Icon */}
                <div className="mb-4">
                  <svg className="w-10 h-10 text-blue-500 opacity-20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <p className="text-gray-700 italic mb-6 leading-relaxed text-sm sm:text-[15px]">
                  "{t.feedback}"
                </p>

                {/* Divider */}
                <div className="h-px bg-gray-200 mb-4" />

                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-blue-100 shrink-0">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">
                      {t.name}
                    </h4>
                    <p className="text-blue-600 text-xs font-semibold">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-3 sm:gap-6">
            {/* Previous Button */}
            <button
              onClick={() => setIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))}
              className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 flex items-center justify-center transition-all duration-200 group"
              aria-label="Previous testimonials"
            >
              <svg className="w-5 h-5 text-gray-600 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === index
                      ? "w-8 h-3 bg-blue-600"
                      : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={() => setIndex((prev) => (prev >= totalSlides - 1 ? 0 : prev + 1))}
              className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 flex items-center justify-center transition-all duration-200 group"
              aria-label="Next testimonials"
            >
              <svg className="w-5 h-5 text-gray-600 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}