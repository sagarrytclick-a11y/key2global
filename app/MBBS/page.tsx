import type { Metadata } from "next";
import MbbsPageContent from "@/app/_component/MbbsPage";
import { siteName } from "@/siteidentity";

export const metadata: Metadata = {
  title: "MBBS Admissions",
  description:
    "Explore 177+ private MBBS colleges across India, listed state-wise. Get expert guidance for MBBS admissions, NEET counseling, and secure your seat with Key2Global.",
  keywords: [
    "MBBS admissions",
    "private medical colleges India",
    "NEET counseling",
    "MBBS colleges",
    "state wise MBBS colleges",
    "private MBBS colleges",
    "MBBS fees",
    "medical admission guidance",
  ],
  openGraph: {
    title: `MBBS Admissions | ${siteName}`,
    description:
      "Browse private MBBS colleges across every state in India with expert admission guidance.",
    url: "https://key2global.com/MBBS",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: `MBBS Admissions - ${siteName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `MBBS Admissions | ${siteName}`,
    description:
      "Browse private MBBS colleges across every state in India with expert admission guidance.",
  },
};

export default function MbbsPage() {
  return (
    <div>
      <MbbsPageContent />
    </div>
  );
}