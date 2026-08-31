import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_component/Navbar";
import WhatsAppButton from "./_component/WhatsAppButton";
import NotificationBell from "./_component/NotificationBell";
import Footer from "./_component/Footer";
import ApplyModal from "./_component/ApplyModal";
import JsonLd from "./_component/JsonLd";
import { ApplyModalProvider } from "@/context/ApplyModalContext";
import { contact, siteDescription, siteName, tagline } from "@/siteidentity";
import {
  DEFAULT_KEYWORDS,
  SITE_OG_IMAGE,
  SITE_URL,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${siteName} | MBBS, NEET-PG & Study Abroad Counselling`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [...DEFAULT_KEYWORDS],
  authors: [{ name: siteName, url: SITE_URL }],
  creator: siteName,
  publisher: siteName,
  referrer: "origin-when-cross-origin",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-IN": SITE_URL,
      "x-default": SITE_URL,
    },
  },
  openGraph: {
    title: `${siteName} | MBBS, NEET-PG & Study Abroad Counselling`,
    description: siteDescription,
    url: SITE_URL,
    siteName,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: SITE_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${siteName} - ${tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | MBBS, NEET-PG & Study Abroad Counselling`,
    description: siteDescription,
    images: [SITE_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/logo.png", type: "image/png" }],
    apple: [{ url: "/logo.png" }],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/manifest.webmanifest",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || undefined,
  },
  category: "education",
  classification: "Education Consultancy",
  other: {
    "geo.region": "IN-DL",
    "geo.placename": "New Delhi",
    "geo.position": "28.5362;77.2853",
    ICBM: "28.5362, 77.2853",
    "contact:email": contact.email,
    "contact:phone_number": contact.phone,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col scroll-smooth">
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:bg-white focus:text-slate-900 focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Skip to main content
        </a>
        <ApplyModalProvider>
          <Navbar />
          <main id="main-content">{children}</main>
          <WhatsAppButton />
          <NotificationBell />
          <Footer />
          <ApplyModal />
        </ApplyModalProvider>
      </body>
    </html>
  );
}
