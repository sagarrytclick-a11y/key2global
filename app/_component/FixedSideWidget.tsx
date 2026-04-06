"use client";

import Image from "next/image";
import { subsidiaries } from '@/siteidentity';

export default function FixedSideWidget() {
  // Get the first 3 subsidiary websites
  const sites = subsidiaries.slice(0, 3);

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3">
      {sites.map((site, index) => (
        <a
          key={site.name}
          href={site.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-16 h-16 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 border-2 border-gray-100 hover:border-blue-500 overflow-hidden"
          title={site.description}
        >
          {/* Logo/Image container */}
          <div className="w-full h-full flex items-center justify-center p-2">
            {index === 0 && (
              // MedicalCounselling - Actual logo
              <div className="relative w-full h-full">
                <Image
                  src="/logo/medicalcounselling.png"
                  alt="MedicalCounselling"
                  fill
                  className="object-contain"
                />
              </div>
            )}
            {index === 1 && (
              // Edugaydoverseas - Globe icon (no logo available)
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
               <Image
                  src="/logo/edugaayds.png"
                  alt="AlphaWorldEducation"
                  fill
                  className="object-contain"
                />
              </div>
            )}
            {index === 2 && (
              // AlphaWorldEducation - Actual logo
              <div className="relative w-full h-full">
                <Image
                  src="/logo/alphaworld.png"
                  alt="AlphaWorldEducation"
                  fill
                  className="object-contain"
                />
              </div>
            )}
          </div>

          {/* Hover tooltip */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-gray-900 text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none shadow-xl">
            {site.name}
            <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
          </div>
        </a>
      ))}
    </div>
  );
}
