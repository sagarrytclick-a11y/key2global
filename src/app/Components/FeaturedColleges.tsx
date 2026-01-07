import React, { useState, useRef } from "react";
import {
    Landmark,
    GraduationCap,
    BookOpen,
    Building2,
    ChevronLeft,
    ChevronRight,
  } from "lucide-react";

  type College = {
    name: string;
    country: string;
    rank: string;
    icon: React.ReactElement;
  };
  
  const colleges: College[] = [
    {
      name: "University of Toronto",
      country: "Canada",
      rank: "QS Rank #21",
      icon: <Landmark size={28} />,
    },
    {
      name: "Monash University",
      country: "Australia",
      rank: "QS Rank #42",
      icon: <GraduationCap size={28} />,
    },
    {
      name: "Imperial College",
      country: "United Kingdom",
      rank: "QS Rank #6",
      icon: <BookOpen size={28} />,
    },
    {
      name: "New York University",
      country: "USA",
      rank: "QS Rank #38",
      icon: <Building2 size={28} />,
    },
    {
      name: "New York University",
      country: "USA",
      rank: "QS Rank #38",
      icon: <Building2 size={28} />,
    }, {
      name: "New York University",
      country: "USA",
      rank: "QS Rank #38",
      icon: <Building2 size={28} />,
    }, {
      name: "New York University",
      country: "USA",
      rank: "QS Rank #38",
      icon: <Building2 size={28} />,
    },
  ];
  
  export default function FeaturedColleges() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % colleges.length);
      carouselRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
    };

    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + colleges.length) % colleges.length);
      carouselRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
    };

    return (
      <section id="universities" className="bg-gradient-to-br from-white via-orange-50/30 to-slate-50 py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-64 h-64 sm:w-96 sm:h-96 bg-orange-100 rounded-full blur-[80px] sm:blur-[100px] opacity-30" />
          <div className="absolute bottom-20 right-10 w-48 h-48 sm:w-80 sm:h-80 bg-orange-200 rounded-full blur-[60px] sm:blur-[80px] opacity-20" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Heading */}
          <div className="mb-8 sm:mb-12 lg:mb-16 text-center">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
              <span>🏛️</span>
              Elite Partnerships
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4 sm:mb-6 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">World-Class</span> Universities
            </h2>

            <p className="mx-auto mt-4 sm:mt-6 max-w-3xl text-lg sm:text-xl text-slate-600 leading-relaxed mb-6 sm:mb-8 px-4">
              Direct partnerships with <strong className="text-orange-600">500+ prestigious institutions</strong> worldwide.
              Skip the guesswork—get insider access to admissions teams, exclusive scholarships, and guaranteed placement support.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-8 mb-6 sm:mb-8">
              <div className="flex items-center gap-2 text-slate-600">
                <span className="text-green-500">✓</span>
                <span className="font-semibold text-sm sm:text-base">Direct Admissions Access</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <span className="text-green-500">✓</span>
                <span className="font-semibold text-sm sm:text-base">Exclusive Scholarships</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <span className="text-green-500">✓</span>
                <span className="font-semibold text-sm sm:text-base">Guaranteed Support</span>
              </div>
            </div>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white border border-slate-200 rounded-full p-2 shadow-lg transition-all duration-200 hover:shadow-xl"
              aria-label="Previous colleges"
            >
              <ChevronLeft size={24} className="text-slate-600" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white border border-slate-200 rounded-full p-2 shadow-lg transition-all duration-200 hover:shadow-xl"
              aria-label="Next colleges"
            >
              <ChevronRight size={24} className="text-slate-600" />
            </button>

            {/* Cards Carousel */}
            <div
              ref={carouselRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {colleges.map((college, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-80 rounded-2xl sm:rounded-3xl border border-slate-100 bg-white p-6 sm:p-8 text-center shadow-sm transition hover:shadow-md"
                >
                  {/* Icon */}
                  <div className="mx-auto mb-4 sm:mb-6 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-slate-50 text-slate-800">
                    {college.icon}
                  </div>

                  {/* Name */}
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
                    {college.name}
                  </h3>

                  {/* Country */}
                  <p className="mt-1 sm:mt-2 text-xs sm:text-sm font-semibold uppercase tracking-wide text-orange-500">
                    {college.country}
                  </p>

                  {/* Divider */}
                  <div className="my-4 sm:my-6 h-px w-full bg-slate-100" />

                  {/* Rank */}
                  <p className="text-xs sm:text-sm text-slate-400">{college.rank}</p>
                </div>
              ))}
            </div>

            {/* Dots Indicator */}
            {/* <div className="flex justify-center gap-2 mt-6">
              {colleges.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                    carouselRef.current?.scrollTo({
                      left: index * 320,
                      behavior: 'smooth'
                    });
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    currentSlide === index ? 'bg-orange-500 w-6' : 'bg-slate-300'
                  }`}
                  aria-label={`Go to college ${index + 1}`}
                />
              ))}
            </div> */}
          </div>
        </div>
      </section>
    );
  }
  