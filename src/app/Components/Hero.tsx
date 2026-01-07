import Image from "next/image";
import { Phone, ArrowRight, Star } from "lucide-react";

export default function Hero() {
  // High-quality Pexels: A student in a modern library setting
  const heroImage = "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1200";
  
  const avatars = [
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100",
    "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100",
    "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100"
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-white pt-8 pb-4 md:pt-12 md:pb-6 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 md:w-1/3 h-full bg-slate-50 hidden lg:block" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-10 items-center">
          
          {/* LEFT: CONTENT AREA (Column 1-7) */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
              <Star size={14} className="fill-orange-600" />
              <span>Leading Global Education Partner</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 leading-[1.05] md:leading-[1.1] mb-3 md:mb-4">
              Unlock Your <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">
                Global Potential
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 mb-4 md:mb-6 max-w-lg leading-relaxed mx-auto lg:mx-0">
              Experience limitless possibilities with personalized guidance for international education. From university selection to visa approval, we bridge the gap to your dream future.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-6 md:mb-8">
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2 text-sm sm:text-base">
                Start Your Journey <ArrowRight size={18} />
              </button>

              <a href="tel:+923052223011" className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors group w-full sm:w-auto">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform">
                  <Phone size={16} className="sm:w-[18px] sm:h-[18px]" fill="currentColor" />
                </div>
                <div className="text-left flex-1 sm:flex-none">
                  <p className="text-xs text-slate-500 font-medium">Talk to an Expert</p>
                  <p className="font-bold text-slate-900 text-sm sm:text-base">+92-305-2223011</p>
                </div>
              </a>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 border-t border-slate-100 pt-6 sm:pt-8">
              <div className="flex -space-x-2 sm:-space-x-3">
                {avatars.map((url, i) => (
                  <div key={i} className="relative h-10 w-10 sm:h-12 sm:w-12 rounded-full border-4 border-white overflow-hidden shadow-sm">
                    <Image src={url} alt="User" fill className="object-cover" />
                  </div>
                ))}
              </div>
              <div className="text-center sm:text-left">
                <div className="flex justify-center sm:justify-start gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="sm:w-[14px] sm:h-[14px] fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-700">
                  Trusted by <span className="font-bold text-slate-900 text-sm sm:text-base">20,000+</span> ambitious students
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: VISUAL AREA (Column 8-12) */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="relative z-10 rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl lg:shadow-2xl transform rotate-1 lg:rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image
                src={heroImage}
                alt="Student Success"
                width={600}
                height={800}
                className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
                priority
              />
            </div>

            {/* Design Accents */}
            <div className="absolute -top-5 -right-5 lg:-top-10 lg:-right-10 w-32 h-32 lg:w-64 lg:h-64 bg-orange-100 rounded-full blur-2xl lg:blur-3xl opacity-50 -z-10" />
            <div className="absolute -bottom-5 -left-5 lg:-bottom-10 lg:-left-10 w-32 h-32 lg:w-64 lg:h-64 bg-rose-100 rounded-full blur-2xl lg:blur-3xl opacity-50 -z-10" />

            {/* Floating Card */}
            <div className="absolute bottom-4 -left-4 lg:bottom-10 lg:-left-8 z-20 bg-white/95 backdrop-blur-md p-4 lg:p-6 rounded-xl lg:rounded-2xl shadow-xl border border-white/20 hidden xs:block max-w-[180px] lg:max-w-[200px]">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-2 lg:mb-3">
                <Star size={20} className="lg:w-[24px] lg:h-[24px]" fill="currentColor" />
              </div>
              <p className="text-xs lg:text-sm font-bold text-slate-900">99% Visa Success Rate</p>
              <p className="text-xs text-slate-500 mt-1">Verified track record</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}