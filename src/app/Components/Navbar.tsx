"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import ContactForm from "./ContactForm";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/service" },
    { name: "Colleges", href: "/colleges" },
    { name: "Blog", href: "/blogs" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white shadow-sm"
    }`}>
      {/* TOP CONTACT BAR */}
      <div className="hidden bg-gradient-to-r from-slate-900 to-slate-800 text-white lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-sm">
          <div className="flex items-center gap-6">
            <a
              href="tel:+923052223011"
              className="flex items-center gap-2 hover:text-orange-400 transition-colors duration-200"
            >
              <Phone size={14} />
              <span className="hidden xl:inline">+92-305-2223011</span>
              <span className="xl:hidden">Call Us</span>
            </a>
            <a
              href="mailto:info@key2global.com"
              className="flex items-center gap-2 hover:text-orange-400 transition-colors duration-200"
            >
              <Mail size={14} />
              <span className="hidden xl:inline">info@key2global.com</span>
              <span className="xl:hidden">Email</span>
            </a>
          </div>

          <div className="flex items-center gap-2 text-slate-300">
            <MapPin size={14} />
            <span className="hidden xl:inline">Key2Global Education Services, Faisalabad, Pakistan</span>
            <span className="xl:hidden">Faisalabad, Pakistan</span>
          </div>
        </div>
      </div>

      {/* MAIN NAVIGATION */}
      <div className="border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 lg:h-20 items-center justify-between">
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative flex items-center gap-2">
                <Image
                  src="/key2global-logo.png"
                  alt="Key2Global"
                  width={60}
                  height={60}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <h1 className="font-semibold text-xl">Key2Global</h1>
              </div>
              
            </Link>

            {/* DESKTOP NAVIGATION */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-medium text-slate-700 hover:text-orange-500 transition-all duration-200 group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-orange-500 transition-all duration-200 group-hover:w-full group-hover:left-0"></span>
                </Link>
              ))}
            </nav>

            {/* CTA BUTTON */}
            <div className="hidden lg:block">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Get Started
                <ChevronDown size={16} className="rotate-[-90deg]" />
              </button>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={24} className="text-slate-700" />
              ) : (
                <Menu size={24} className="text-slate-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      }`}>
        <div className="bg-white border-t border-slate-100 px-4 py-6">
          {/* Mobile Contact Info */}
          <div className="mb-6 space-y-3 pb-4 border-b border-slate-100">
            <a
              href="tel:+923052223011"
              className="flex items-center gap-3 text-slate-700 hover:text-orange-500 transition-colors duration-200"
            >
              <Phone size={16} />
              <span className="text-sm">+92-305-2223011</span>
            </a>
            <a
              href="mailto:info@alphaworldeducation.com"
              className="flex items-center gap-3 text-slate-700 hover:text-orange-500 transition-colors duration-200"
            >
              <Mail size={16} />
              <span className="text-sm">info@alphaworldeducation.com</span>
            </a>
            <div className="flex items-start gap-3 text-slate-600">
              <MapPin size={16} className="mt-0.5 flex-shrink-0" />
              <span className="text-sm">7A Plaza, near cars&car, people colony 1, Faisalabad</span>
            </div>
          </div>

          {/* Mobile Navigation */}
          <nav className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile CTA */}
          <div className="mt-6 pt-4 border-t border-slate-100">
            <button
              onClick={() => {
                setIsOpen(false);
                setIsModalOpen(true);
              }}
              className="block w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold text-center px-6 py-3 rounded-full transition-all duration-300"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>

      {/* GET STARTED MODAL */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          {/* Backdrop */}
          <div
            className="absolute inset-0"
            onClick={() => setIsModalOpen(false)}
          />

          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full max-w-sm sm:max-w-md mx-4 transform transition-all duration-300 scale-100 z-10">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-2 -right-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full p-2 shadow-lg transition-colors duration-200 z-10"
              aria-label="Close modal"
            >
              <X size={16} />
            </button>

            {/* Modal Header */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-t-2xl">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Ready to Start Your Journey?</h3>
                  <p className="text-orange-100 text-sm mt-1">Let's connect and discuss your options</p>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <ContactForm onClose={() => setIsModalOpen(false)} isModal={true} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
