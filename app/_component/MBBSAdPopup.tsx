"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const SimpleImagePopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imagePreloaded, setImagePreloaded] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.src = "/banner.png";
    img.onload = () => setImagePreloaded(true);
    img.onerror = () => setImagePreloaded(true);
  }, []);

  useEffect(() => {
    if (!imagePreloaded) return;
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, [imagePreloaded]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-lg overflow-hidden shadow-2xl">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 z-10 bg-white/50 hover:bg-white/80 text-black/70 rounded-full p-2 transition-all duration-300"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <div className="p-1">
          <Image
            src="/banner.png"
            alt="Doctor"
            width={800}
            height={450}
            className={`w-full h-auto rounded-xl ${imageLoaded ? "opacity-100" : "opacity-0"}`}
            priority
            onLoad={() => setImageLoaded(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default SimpleImagePopup;