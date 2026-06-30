import type { Metadata } from "next";
import BtechHero from "../_component/BtechHero";
import BtechCollegeCards from "../_component/BtechCollegeCards";
import { siteName } from "@/siteidentity";

export const metadata: Metadata = {
  title: "B.Tech Admissions",
  description:
    "Explore top B.Tech colleges across India. Secure your seat at premier engineering institutions with expert admission guidance from Key2Global.",
  keywords: [
    "B.Tech admissions",
    "engineering colleges India",
    "B.Tech counseling",
    "top engineering colleges",
    "IIT admissions",
    "private engineering colleges",
    "B.Tech fees",
  ],
  openGraph: {
    title: `B.Tech Admissions | ${siteName}`,
    description:
      "Secure your seat at premier engineering institutions across India. Expert guidance for B.Tech admissions.",
    url: "https://key2global.com/btech",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: `B.Tech Admissions - ${siteName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `B.Tech Admissions | ${siteName}`,
    description:
      "Secure your seat at premier engineering institutions across India.",
  },
};

export default function BtechPage() {
  return (
    <div>
      <BtechHero />
      <BtechCollegeCards />
    </div>
  );
}
