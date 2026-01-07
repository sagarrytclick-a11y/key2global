import React from 'react';
import Link from 'next/link';
import { 
  GraduationCap, 
  Globe, 
  Mail, 
  Phone, 
  SendHorizontal 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-24 pb-12 px-6 border-t border-slate-700 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-96 h-96 bg-orange-500 rounded-full blur-[150px] opacity-5" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-orange-400 rounded-full blur-[120px] opacity-5" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Newsletter CTA Section */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 mb-12 sm:mb-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">Ready to Start Your Journey?</h3>
            <p className="text-orange-100 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
              Join thousands of successful students. Get personalized guidance and exclusive insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 font-medium outline-none focus:bg-white/30 focus:border-orange-400 transition-all text-sm sm:text-base"
              />
              <button className="bg-white text-orange-600 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold hover:bg-orange-50 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base">
                Get Started →
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">

          {/* Brand Section */}
          <div className="flex flex-col gap-4 sm:gap-6 col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 p-1.5 sm:p-2 rounded-lg sm:rounded-xl shadow-lg">
                <GraduationCap className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
              </div>
              <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white">Key2Global</span>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-[15px] max-w-xs">
              Empowering students to achieve their global education dreams through personalized guidance and expert counseling.
            </p>
            <div className="flex gap-3 sm:gap-4 text-gray-400">
              <Globe className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer hover:text-orange-400 hover:scale-110 transition-all duration-200" />
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer hover:text-orange-400 hover:scale-110 transition-all duration-200" />
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer hover:text-orange-400 hover:scale-110 transition-all duration-200" />
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="font-bold text-white mb-6 tracking-wide">SERVICES</h4>
            <ul className="flex flex-col gap-4 text-gray-300 text-[15px]">
              <li><Link href="#" className="hover:text-orange-400 hover:translate-x-1 transition-all duration-200 inline-block">University Admissions</Link></li>
              <li><Link href="#" className="hover:text-orange-400 hover:translate-x-1 transition-all duration-200 inline-block">Visa Counseling</Link></li>
              <li><Link href="#" className="hover:text-orange-400 hover:translate-x-1 transition-all duration-200 inline-block">Scholarship Guidance</Link></li>
              <li><Link href="#" className="hover:text-orange-400 hover:translate-x-1 transition-all duration-200 inline-block">Test Preparation</Link></li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h4 className="font-bold text-white mb-6 tracking-wide">COMPANY</h4>
            <ul className="flex flex-col gap-4 text-gray-300 text-[15px]">
              <li><Link href="#" className="hover:text-orange-400 hover:translate-x-1 transition-all duration-200 inline-block">About Us</Link></li>
              <li><Link href="#" className="hover:text-orange-400 hover:translate-x-1 transition-all duration-200 inline-block">Success Stories</Link></li>
              <li><Link href="#" className="hover:text-orange-400 hover:translate-x-1 transition-all duration-200 inline-block">Events</Link></li>
              <li><Link href="#" className="hover:text-orange-400 hover:translate-x-1 transition-all duration-200 inline-block">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-1">
            <h4 className="font-bold text-white mb-6 tracking-wide">STAY UPDATED</h4>
            <p className="text-gray-300 text-[15px] mb-6">
              Subscribe to our newsletter for scholarship updates and exclusive insights.
            </p>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden">
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent px-4 py-3 w-full outline-none text-white placeholder-gray-400 text-[15px] focus:placeholder-gray-300"
              />
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-3.5 hover:from-orange-600 hover:to-red-600 transition-all duration-200 hover:scale-105">
                <SendHorizontal className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 sm:pt-12 lg:pt-16 border-t border-slate-700/50">
          <div className="flex flex-col gap-8 sm:gap-12 mb-6 sm:mb-8">
            <div className="text-center lg:text-left">
              <p className="text-gray-300 text-xs sm:text-sm mb-2 font-medium">© 2024 Key2Global. All rights reserved.</p>
              <p className="text-gray-400 text-xs">Empowering dreams, shaping futures worldwide</p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm">
              <Link href="#" className="text-gray-400 hover:text-orange-400 hover:scale-105 transition-all duration-200">Privacy Policy</Link>
              <Link href="#" className="text-gray-400 hover:text-orange-400 hover:scale-105 transition-all duration-200">Terms of Service</Link>
              <Link href="#" className="text-gray-400 hover:text-orange-400 hover:scale-105 transition-all duration-200">Cookie Policy</Link>
              <Link href="#" className="text-gray-400 hover:text-orange-400 hover:scale-105 transition-all duration-200">Contact Us</Link>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-gray-300 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <span className="text-green-400 text-sm sm:text-lg">●</span>
                <span className="font-medium">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400 text-sm sm:text-lg">●</span>
                <span className="font-medium">100% Secure</span>
              </div>
            </div>
          </div>

          {/* Additional Trust Indicators */}
          <div className="pt-6 sm:pt-8 border-t border-slate-700/30">
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-orange-400">🔒</span>
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-400">📧</span>
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-400">🏆</span>
                <span>ISO Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">⭐</span>
                <span>4.9/5 Trustpilot</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;