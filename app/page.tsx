import React from 'react'
import HeroSection from './_component/Herosection'
import StatsBanner from './_component/Statsbanner'
import PartnerColleges from './_component/Partnercolleges'
import CoursesSection from './_component/Coursessection'
import AdmissionArchitecture from './_component/Admissionarchitecture'
import WebsiteSection from './_component/WebsiteSection'
import TestimonialsSection from './_component/TestimonialsSection'
import KnowledgeHub from './_component/Knowledgehub'
import CollegeShowcase from './_component/CollegeShowcase'
import FixedSideWidget from './_component/FixedSideWidget'

const page = () => {
  return (
    <div className='overflow-x-hidden'>
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
    </div>
  )
}

export default page