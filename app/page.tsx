import React from 'react'
import dynamic from 'next/dynamic'
import HeroSection from './_component/Herosection'
import StatsBanner from './_component/Statsbanner'
import WebsiteSection from './_component/WebsiteSection'
import JsonLd from './_component/JsonLd'
import { siteName } from '@/siteidentity'

const MBBSAdPopup = dynamic(() => import('./_component/MBBSAdPopup'), {
  loading: () => null,
})

const FixedSideWidget = dynamic(() => import('./_component/FixedSideWidget'), {
  loading: () => null,
})

const CollegeShowcase = dynamic(() => import('./_component/CollegeShowcase'), {
  loading: () => <section className="h-[420px] w-full" />,
})

const PartnerColleges = dynamic(() => import('./_component/Partnercolleges'), {
  loading: () => <section className="h-[280px] w-full" />,
})

const CoursesSection = dynamic(() => import('./_component/Coursessection'), {
  loading: () => <section className="h-[320px] w-full" />,
})

const AdmissionArchitecture = dynamic(() => import('./_component/Admissionarchitecture'), {
  loading: () => <section className="h-[280px] w-full" />,
})

const KnowledgeHub = dynamic(() => import('./_component/Knowledgehub'), {
  loading: () => <section className="h-[320px] w-full" />,
})

const TestimonialsSection = dynamic(() => import('./_component/TestimonialsSection'), {
  loading: () => <section className="h-[420px] w-full" />,
})

const CollegeStrip = dynamic(() => import('./_component/CollegeStrip'), {
  loading: () => <section className="h-[180px] w-full" />,
})

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Specialized Global Courses",
  description: "Curated selection of elite programs in tech, business, and medical fields.",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Course",
        name: "B.Tech & Tech PG Programs",
        description: "Computer Science (AI & ML), Internet of Things (IoT), Cybersecurity Engineering.",
        provider: { "@type": "Organization", name: siteName },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Course",
        name: "Global BBA & MBA Programs",
        description: "Global Finance & Fintech, Digital Marketing & Analytics, Strategic Entrepreneurship.",
        provider: { "@type": "Organization", name: siteName },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Course",
        name: "Specialized Medical Programs",
        description: "MD Radio-Diagnosis, Dermatology (MD/DNB), General Surgery (MS).",
        provider: { "@type": "Organization", name: siteName },
      },
    },
  ],
};

const testimonialSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Student Success Stories",
  description: "Real experiences from students who achieved their dreams.",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Review",
        author: { "@type": "Person", name: "Rahul Sharma" },
        reviewBody: "Key2Global made my dream of studying engineering in Germany possible. Everything from applications to visa was seamless.",
        reviewRating: { "@type": "Rating", ratingValue: 5 },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Review",
        author: { "@type": "Person", name: "Ananya Patel" },
        reviewBody: "The counseling support was amazing. I secured admission in a top UK university without stress.",
        reviewRating: { "@type": "Rating", ratingValue: 5 },
      },
    },
  ],
};

const page = () => {
  return (
    <div className='overflow-x-hidden'>
      <JsonLd data={courseSchema} />
      <JsonLd data={testimonialSchema} />
      <MBBSAdPopup />
      <FixedSideWidget />
      <div id="about">
        <HeroSection />
      </div>
      <WebsiteSection />
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
      <div id="contact"></div>
      <CollegeStrip />
    </div>
  )
}

export default page