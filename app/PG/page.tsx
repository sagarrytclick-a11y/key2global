import type { Metadata } from "next";
import PgPageContent from "@/app/_component/PgPage";
import JsonLd from "@/app/_component/JsonLd";
import { pgNews } from "@/config/pg-news";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  faqJsonLd,
  serviceJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "NEET-PG News & Counselling | MCC Stray Round & Allotment PDFs",
  description:
    "Track MCC NEET-PG counselling updates: NRI eligibility notice, Stray Vacancy Round final result and seat allotment PDFs for MD, MS and DNB admissions.",
  path: "/PG",
  keywords: [
    "NEET PG counselling 2025",
    "MCC PG news",
    "stray vacancy round result",
    "PG seat allotment PDF",
    "NRI quota PG eligibility",
    "MD MS DNB admissions",
    "INTRAMCC allotment letter",
  ],
});

const faqs = [
  {
    question: "Where can I download the PG Stray Vacancy Round result?",
    answer:
      "Open the official MCC PDF linked on our PG News page for the Final Result of Stray Vacancy Round and download your provisional allotment letter from the MCC portal.",
  },
  {
    question: "What documents are needed for NRI quota in PG counselling?",
    answer:
      "MCC requires evidence that the sponsor is a bona fide legal guardian, plus an affidavit, as clarified in the Supreme Court eligibility criteria published in the NRI notice.",
  },
  {
    question: "Is the seat allotment list available as a PDF?",
    answer:
      "Yes. The NEET-PG Stray Vacancy Round seat allotment list PDF is linked on the PG News page with quota and category abbreviations.",
  },
];

const newsItemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "NEET-PG MCC Notices",
  itemListElement: pgNews.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "NewsArticle",
      headline: item.title,
      datePublished: item.date,
      description: item.summary,
      url: item.href,
      isAccessibleForFree: true,
      publisher: {
        "@type": "Organization",
        name: "Medical Counselling Committee (MCC)",
      },
    },
  })),
};

export default function PgRoutePage() {
  return (
    <div>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "NEET-PG News", path: "/PG" },
        ])}
      />
      <JsonLd
        data={serviceJsonLd({
          name: "NEET-PG Counselling Guidance",
          description:
            "Guidance for MCC NEET-PG notices, allotment reporting and NRI documentation.",
          path: "/PG",
          serviceType: "Postgraduate medical counselling",
        })}
      />
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={newsItemList} />
      <PgPageContent />
    </div>
  );
}
