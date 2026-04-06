import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./_component/Navbar";
import WhatsAppButton from "./_component/WhatsAppButton";
import NotificationBell from "./_component/NotificationBell";
import Footer from "./_component/Footer";
import ApplyModal from "./_component/ApplyModal";
import { ApplyModalProvider } from "@/context/ApplyModalContext";
import { siteName, tagline, siteDescription } from "@/siteidentity";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: `${siteName} - ${tagline}`,
  description: siteDescription,
  icons: {
    icon: "/favicon.ico",
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
        <ApplyModalProvider>
          <Navbar />
          {children}
          <WhatsAppButton />
          <NotificationBell />
          <Footer />
          <ApplyModal />
        </ApplyModalProvider>
      </body>
    </html>
  );
}
