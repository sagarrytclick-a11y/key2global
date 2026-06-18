import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./_component/Navbar";
import WhatsAppButton from "./_component/WhatsAppButton";
import NotificationBell from "./_component/NotificationBell";
import Footer from "./_component/Footer";
import ApplyModal from "./_component/ApplyModal";
import { ApplyModalProvider } from "@/context/ApplyModalContext";
import { siteName, tagline, siteDescription } from "@/siteidentity";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://key2global.com"),
  title: `${siteName} - ${tagline}`,
  description: siteDescription,
  openGraph: {
    title: `${siteName} - ${tagline}`,
    description: siteDescription,
    type: "website",
    siteName: siteName,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} - ${tagline}`,
    description: siteDescription,
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  description: siteDescription,
  url: "https://key2global.com",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-6239311536",
    contactType: "customer service",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "320, 3rd Floor, U.S Complex, Mathura Road, Jasola",
    addressLocality: "Delhi",
    addressRegion: "Delhi",
    postalCode: "110076",
    addressCountry: "IN",
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
      className={`${poppins.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col scroll-smooth">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
