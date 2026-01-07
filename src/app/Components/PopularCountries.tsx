"use client"
import React from 'react';
import { ArrowRight } from 'lucide-react'; // Optional: using lucide-react for the arrow icon

const destinations = [
  {
    name: 'United Kingdom',
    image: 'https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?auto=format&fit=crop&q=80', // Replace with your map graphic
    bgClass: 'bg-[#004D54]',
  },
  {
    name: 'USA',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&q=80',
    bgClass: 'bg-[#D6E2E2]',
  },
  {
    name: 'Canada',
    image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&q=80',
    bgClass: 'bg-[#A3C9C1]',
  },
  {
    name: 'Australia',
    image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80',
    bgClass: 'bg-[#E5D5B5]',
  },
];

const PopularCountries = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 max-w-7xl mx-auto font-sans relative overflow-hidden bg-gradient-to-br from-white via-orange-50/20 to-slate-50">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-32 left-20 w-72 h-72 bg-orange-100 rounded-full blur-[100px] opacity-30" />
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-orange-200 rounded-full blur-[120px] opacity-25" />
      </div>

      <div className="text-center mb-12 sm:mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-8">
          <span>🌍</span>
          Study Destinations
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4 sm:mb-6 tracking-tight">
          Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Popular Countries</span>
        </h2>

        <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4">
          Choose from <strong className="text-orange-600">50+ countries</strong> worldwide with our expert guidance.
          Each destination offers unique opportunities, cultural experiences, and world-class education.
        </p>

        {/* Country stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-slate-100">
            <div className="text-xl sm:text-2xl font-bold text-orange-600 mb-1">50+</div>
            <div className="text-xs sm:text-sm text-slate-500 uppercase tracking-wide">Countries</div>
          </div>
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-slate-100">
            <div className="text-xl sm:text-2xl font-bold text-orange-600 mb-1">500+</div>
            <div className="text-xs sm:text-sm text-slate-500 uppercase tracking-wide">Universities</div>
          </div>
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-slate-100">
            <div className="text-xl sm:text-2xl font-bold text-orange-600 mb-1">$2.5B+</div>
            <div className="text-xs sm:text-sm text-slate-500 uppercase tracking-wide">Scholarships</div>
          </div>
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-slate-100">
            <div className="text-xl sm:text-2xl font-bold text-orange-600 mb-1">15K+</div>
            <div className="text-xs sm:text-sm text-slate-500 uppercase tracking-wide">Students Placed</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {destinations.map((country) => (
          <div
            key={country.name}
            className={`group relative h-[300px] sm:h-[350px] lg:h-[400px] rounded-2xl sm:rounded-[2rem] overflow-hidden cursor-pointer shadow-lg transition-transform duration-300 hover:-translate-y-2 ${country.bgClass}`}
          >
            {/* Map Overlay Image */}
            <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 lg:p-8">
              <img
                src={country.image}
                alt={`${country.name} map`}
                className="w-full h-full object-contain opacity-80 mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Bottom Gradient for Text Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 flex justify-between items-center">
              <h3 className="text-white text-xl sm:text-2xl font-bold">
                {country.name}
              </h3>
              <div className="bg-white/20 backdrop-blur-md rounded-full p-2 text-white transition-all duration-300 group-hover:bg-white group-hover:text-black">
                <ArrowRight size={18} className="sm:w-[20px] sm:h-[20px]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCountries;