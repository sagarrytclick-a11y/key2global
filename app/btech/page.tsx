import type { Metadata } from "next";
import BtechHero from "../_component/BtechHero";
import BtechCollegeCards from "../_component/BtechCollegeCards";
import JsonLd from "../_component/JsonLd";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  faqJsonLd,
  serviceJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "B.Tech Admissions India | Engineering College Counselling",
  description:
    "Explore top B.Tech colleges across India. Get counselling for AI & ML, IoT, Cybersecurity and private engineering admissions with Key2Education.",
  path: "/btech",
  keywords: [
    "B.Tech admissions 2026",
    "engineering colleges India",
    "AI ML B.Tech",
    "IoT engineering admissions",
    "private engineering colleges",
    "B.Tech counselling Delhi",
  ],
});

const faqs = [
  {
    question: "Which B.Tech specializations do you guide for?",
    answer:
      "We support Computer Science (AI & ML), Internet of Things (IoT), Cybersecurity and other high-demand engineering programs across India.",
  },
  {
    question: "Can Key2Education help with private engineering college admissions?",
    answer:
      "Yes. We help with college shortlisting, application timelines, fee clarity and admission counselling for premier private engineering institutions.",
  },
];

export default function BtechPage() {
  return (
    <div>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "B.Tech Admissions", path: "/btech" },
        ])}
      />
      <JsonLd
        data={serviceJsonLd({
          name: "B.Tech Admission Counselling",
          description:
            "Engineering college admissions guidance for B.Tech programs across India.",
          path: "/btech",
          serviceType: "Engineering admission counselling",
        })}
      />
      <JsonLd data={faqJsonLd(faqs)} />
      <BtechHero />
      <BtechCollegeCards />
    </div>
  );
}
