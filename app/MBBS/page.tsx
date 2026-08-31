import type { Metadata } from "next";
import MbbsPageContent from "@/app/_component/MbbsPage";
import JsonLd from "@/app/_component/JsonLd";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  faqJsonLd,
  serviceJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "MBBS Admissions India | NEET UG Counselling & Private Colleges",
  description:
    "Explore 177+ private MBBS colleges state-wise. Get NEET UG counselling, MCC choice filling guidance, fees clarity and admission support with Key2Education.",
  path: "/MBBS",
  keywords: [
    "MBBS admissions 2026",
    "private MBBS colleges India",
    "NEET UG counselling",
    "MCC choice filling",
    "MBBS fees structure",
    "Delhi quota MBBS",
    "state wise MBBS colleges",
  ],
});

const faqs = [
  {
    question: "How can Key2Education help with MBBS admissions?",
    answer:
      "We guide students through NEET UG counselling, college shortlisting, state quota strategy, fees comparison and documentation for private medical colleges across India.",
  },
  {
    question: "Do you cover MCC UG medical counselling notices?",
    answer:
      "Yes. Our MBBS page highlights official MCC news such as choice locking, CW lists and registration updates so candidates can act on time.",
  },
  {
    question: "Which states’ private MBBS colleges are listed?",
    answer:
      "We list private MBBS colleges across major states and UTs including Delhi, Maharashtra, Karnataka, Tamil Nadu, Uttar Pradesh and more.",
  },
];

export default function MbbsPage() {
  return (
    <div>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "MBBS Admissions", path: "/MBBS" },
        ])}
      />
      <JsonLd
        data={serviceJsonLd({
          name: "MBBS Admission Counselling",
          description:
            "NEET UG counselling and private MBBS college admission guidance across India.",
          path: "/MBBS",
          serviceType: "Medical admission counselling",
        })}
      />
      <JsonLd data={faqJsonLd(faqs)} />
      <MbbsPageContent />
    </div>
  );
}
