import type { Metadata } from "next";
import {
  address,
  contact,
  siteDescription,
  siteName,
  socialMedia,
  tagline,
} from "@/siteidentity";

export const SITE_URL = "https://key2global.com";
export const SITE_OG_IMAGE = "/banner.png";
export const SITE_LOGO = "/logo.png";

export const DEFAULT_KEYWORDS = [
  "Key2Education",
  "Key2Global",
  "education consultancy India",
  "NEET counselling",
  "MBBS admissions India",
  "NEET PG counselling",
  "B.Tech admissions",
  "study abroad consultancy",
  "medical college admission guidance",
  "college admissions Delhi",
  "overseas education",
  "MCC counselling guidance",
  "private medical colleges India",
  "career counseling India",
] as const;

type BuildPageMetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
  type?: "website" | "article";
};

export function absoluteUrl(path = "/"): string {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildPageMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  image = SITE_OG_IMAGE,
  noIndex = false,
  type = "website",
}: BuildPageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = title.includes(siteName) ? title : undefined;

  return {
    title,
    description,
    keywords: [...DEFAULT_KEYWORDS, ...keywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle ?? `${title} | ${siteName}`,
      description,
      url,
      siteName,
      type,
      locale: "en_IN",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${title} - ${siteName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle ?? `${title} | ${siteName}`,
      description,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: true }
      : {
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
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "EducationalOrganization", "LocalBusiness"],
    "@id": `${SITE_URL}/#organization`,
    name: siteName,
    alternateName: ["Key2Global", "Key 2 Education"],
    description: siteDescription,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(SITE_LOGO),
      width: 512,
      height: 512,
    },
    image: absoluteUrl(SITE_OG_IMAGE),
    email: contact.email,
    telephone: contact.phone,
    foundingDate: "2020",
    slogan: tagline,
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.5362,
      longitude: 77.2853,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: contact.phone,
        contactType: "admissions",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
      {
        "@type": "ContactPoint",
        telephone: contact.whatsapp,
        contactType: "customer support",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    ],
    sameAs: [
      socialMedia.linkedin,
      socialMedia.twitter,
      socialMedia.facebook,
      socialMedia.instagram.split("?")[0],
      socialMedia.youtube,
    ],
    knowsAbout: [
      "NEET UG counselling",
      "NEET PG counselling",
      "MBBS admissions",
      "B.Tech admissions",
      "Study abroad consultancy",
      "Medical college placement",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: siteName,
    url: SITE_URL,
    description: siteDescription,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-IN",
  };
}

export function breadcrumbJsonLd(
  items: Array<{ name: string; path: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function serviceJsonLd(input: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    serviceType: input.serviceType,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  };
}
