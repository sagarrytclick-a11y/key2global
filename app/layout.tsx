import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_component/Navbar";
import WhatsAppButton from "./_component/WhatsAppButton";
import NotificationBell from "./_component/NotificationBell";
import Footer from "./_component/Footer";
import ApplyModal from "./_component/ApplyModal";
import { ApplyModalProvider } from "@/context/ApplyModalContext";
import { siteName, tagline, siteDescription } from "@/siteidentity";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://key2global.com"),
  title: {
    default: `${siteName} - ${tagline}`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "education consultancy",
    "study abroad",
    "college admissions",
    "B.Tech admissions",
    "MBBS abroad",
    "career counseling",
    "global education",
    "university admissions",
    "India education",
    "overseas education",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    title: `${siteName} - ${tagline}`,
    description: siteDescription,
    url: "https://key2global.com",
    siteName: siteName,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: `${siteName} - ${tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} - ${tagline}`,
    description: siteDescription,
    images: ["/banner.png"],
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
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "",
  },
  category: "education",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  alternateName: "Key2Global",
  description: siteDescription,
  url: "https://key2global.com",
  logo: "https://key2global.com/logo.png",
  foundingDate: "2020",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-6239311536",
    contactType: "customer service",
    availableLanguage: ["English", "Hindi"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "320, 3rd Floor, U.S Complex, Mathura Road, Jasola",
    addressLocality: "Delhi",
    addressRegion: "Delhi",
    postalCode: "110076",
    addressCountry: "IN",
  },
  sameAs: [
    "https://linkedin.com/company/key2global",
    "https://twitter.com/key2global",
    "https://facebook.com/key2global",
    "https://www.instagram.com/key2education",
    "https://youtube.com/@key2global",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: "https://key2global.com",
  description: siteDescription,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://key2global.com/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col scroll-smooth">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:bg-white focus:text-slate-900 focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
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
