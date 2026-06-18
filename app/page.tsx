import React from 'react'
import dynamic from 'next/dynamic'
import HeroSection from './_component/Herosection'
import StatsBanner from './_component/Statsbanner'
import WebsiteSection from './_component/WebsiteSection'

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

const page = () => {
  return (
    <div className='overflow-x-hidden'>
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