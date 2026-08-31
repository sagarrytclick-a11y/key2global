import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HeroSection from "./_component/Herosection";
import StatsBanner from "./_component/Statsbanner";
import WebsiteSection from "./_component/WebsiteSection";
import JsonLd from "./_component/JsonLd";
import { siteName, siteDescription } from "@/siteidentity";
import { buildPageMetadata, faqJsonLd, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Key2Education | MBBS, NEET-PG, B.Tech & Study Abroad Counselling",
    description: siteDescription,
    path: "/",
    keywords: [
      "best education consultancy Delhi",
      "NEET counselling Delhi",
      "MBBS admission consultant",
      "study abroad consultant India",
    ],
  }),
  title: {
    absolute: "Key2Education | MBBS, NEET-PG, B.Tech & Study Abroad Counselling",
  },
};

const MBBSAdPopup = dynamic(() => import("./_component/MBBSAdPopup"), {
  loading: () => null,
});

const FixedSideWidget = dynamic(() => import("./_component/FixedSideWidget"), {
  loading: () => null,
});

const CollegeShowcase = dynamic(() => import("./_component/CollegeShowcase"), {
  loading: () => <section className="h-[420px] w-full" />,
});

const PartnerColleges = dynamic(() => import("./_component/Partnercolleges"), {
  loading: () => <section className="h-[280px] w-full" />,
});

const CoursesSection = dynamic(() => import("./_component/Coursessection"), {
  loading: () => <section className="h-[320px] w-full" />,
});

const AdmissionArchitecture = dynamic(
  () => import("./_component/Admissionarchitecture"),
  {
    loading: () => <section className="h-[280px] w-full" />,
  }
);

const KnowledgeHub = dynamic(() => import("./_component/Knowledgehub"), {
  loading: () => <section className="h-[320px] w-full" />,
});

const TestimonialsSection = dynamic(
  () => import("./_component/TestimonialsSection"),
  {
    loading: () => <section className="h-[420px] w-full" />,
  }
);

const CollegeStrip = dynamic(() => import("./_component/CollegeStrip"), {
  loading: () => <section className="h-[180px] w-full" />,
});

const PgHomeSection = dynamic(() => import("./_component/PgHomeSection"), {
  loading: () => <section className="h-[420px] w-full" />,
});

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Specialized Global Courses",
  description:
    "Curated selection of elite programs in tech, business, and medical fields.",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      url: `${SITE_URL}/btech`,
      item: {
        "@type": "Course",
        name: "B.Tech & Tech PG Programs",
        description:
          "Computer Science (AI & ML), Internet of Things (IoT), Cybersecurity Engineering.",
        provider: { "@type": "Organization", name: siteName, url: SITE_URL },
        url: `${SITE_URL}/btech`,
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      url: `${SITE_URL}/MBBS`,
      item: {
        "@type": "Course",
        name: "MBBS & Medical UG Programs",
        description:
          "Private MBBS college admissions and NEET UG counselling across India.",
        provider: { "@type": "Organization", name: siteName, url: SITE_URL },
        url: `${SITE_URL}/MBBS`,
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      url: `${SITE_URL}/PG`,
      item: {
        "@type": "Course",
        name: "NEET-PG Medical Specializations",
        description:
          "MD Radio-Diagnosis, Dermatology (MD/DNB), General Surgery (MS) counselling support.",
        provider: { "@type": "Organization", name: siteName, url: SITE_URL },
        url: `${SITE_URL}/PG`,
      },
    },
  ],
};

const faqSchema = faqJsonLd([
  {
    question: "What services does Key2Education provide?",
    answer:
      "Key2Education offers MBBS and NEET-PG counselling, B.Tech admissions guidance, and study-abroad support through specialized partner brands.",
  },
  {
    question: "Do you help with MCC NEET UG and PG counselling?",
    answer:
      "Yes. We publish official MCC updates on our MBBS and PG pages and guide students through choice filling, locking, allotment and reporting.",
  },
  {
    question: "Where is Key2Education located?",
    answer:
      "Our office is at 320, 3rd Floor, U.S Complex, Mathura Road, Jasola, New Delhi, Delhi 110076.",
  },
]);

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <JsonLd data={courseSchema} />
      <JsonLd data={faqSchema} />
      <MBBSAdPopup />
      <FixedSideWidget />
      <div id="about">
        <HeroSection />
      </div>
      <WebsiteSection />
      <div id="pg-news">
        <PgHomeSection />
      </div>
      <StatsBanner />
      <div id="partners">
        <CollegeShowcase />
      </div>
      <div id="courses">
        <PartnerColleges />
        <CoursesSection />
      </div>
      <AdmissionArchitecture />
      <KnowledgeHub />
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <div id="contact" />
      <CollegeStrip />
    </div>
  );
}
