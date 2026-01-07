'use client';

import React from 'react';
import Image from 'next/image';
import { MapPin, Award, DollarSign, Star, Users, CheckCircle, ArrowLeft, Share2, Globe, Calendar, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { useColleges } from '@/contexts/CollegesContext';

// --- Types ---
interface College {
  id: number;
  slug: string;
  name: string;
  location: string;
  rank: string;
  tuition: string;
  acceptance: string;
  employability?: string;
  rating?: string;
  students?: string;
  image: string;
  tags: string[];
  founded?: string;
  type?: string;
  website?: string;
}

// --- College Data ---
const universities: College[] = [
  {
    id: 1,
    slug: "university-college-london",
    name: "University College London",
    location: "London, United Kingdom",
    rank: "#28 Global",
    tuition: "£28,500",
    acceptance: "63%",
    employability: "92%",
    image: "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Public", "Scholarship", "Russell Group"],
    founded: "1826",
    type: "Public Research University",
    website: "https://www.ucl.ac.uk"
  },
  {
    id: 2,
    slug: "university-of-manchester",
    name: "University of Manchester",
    location: "Manchester, United Kingdom",
    rank: "#27 Global",
    tuition: "£24,500",
    acceptance: "59%",
    employability: "94%",
    image: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Russell Group", "Research Intensive"],
    founded: "1824",
    type: "Public Research University",
    website: "https://www.manchester.ac.uk"
  },
  {
    id: 3,
    slug: "kings-college-london",
    name: "King's College London",
    location: "London, United Kingdom",
    rank: "#35 Global",
    tuition: "£26,000",
    acceptance: "67%",
    students: "40k+",
    image: "https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Top Research", "Visa Support", "Medical Excellence"],
    founded: "1829",
    type: "Public Research University",
    website: "https://www.kcl.ac.uk"
  },
  {
    id: 4,
    slug: "university-of-bristol",
    name: "University of Bristol",
    location: "Bristol, United Kingdom",
    rank: "#61 Global",
    tuition: "£22,000",
    acceptance: "68%",
    rating: "4.5/5",
    image: "https://images.pexels.com/photos/207636/pexels-photo-207636.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Top 50 Research", "Innovation Hub"],
    founded: "1876",
    type: "Public Research University",
    website: "https://www.bristol.ac.uk"
  },
  {
    id: 5,
    slug: "university-of-toronto",
    name: "University of Toronto",
    location: "Toronto, Canada",
    rank: "#21 Global",
    tuition: "CAD $42,000",
    acceptance: "43%",
    employability: "96%",
    image: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Public", "Scholarship", "Research Powerhouse"],
    founded: "1827",
    type: "Public Research University",
    website: "https://www.utoronto.ca"
  },
  {
    id: 6,
    slug: "monash-university",
    name: "Monash University",
    location: "Melbourne, Australia",
    rank: "#42 Global",
    tuition: "AUD $35,000",
    acceptance: "40%",
    employability: "91%",
    image: "https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Public", "Innovation", "Global Partnerships"],
    founded: "1958",
    type: "Public Research University",
    website: "https://www.monash.edu"
  },
  {
    id: 7,
    slug: "imperial-college-london",
    name: "Imperial College London",
    location: "London, United Kingdom",
    rank: "#6 Global",
    tuition: "£35,000",
    acceptance: "14%",
    employability: "98%",
    image: "https://images.pexels.com/photos/207580/pexels-photo-207580.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["STEM Excellence", "Russell Group", "Innovation"],
    founded: "1907",
    type: "Public Research University",
    website: "https://www.imperial.ac.uk"
  },
  {
    id: 8,
    slug: "university-of-melbourne",
    name: "University of Melbourne",
    location: "Melbourne, Australia",
    rank: "#14 Global",
    tuition: "AUD $38,000",
    acceptance: "70%",
    employability: "93%",
    image: "https://images.pexels.com/photos/207678/pexels-photo-207678.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Public", "Research Intensive", "Global Recognition"],
    founded: "1853",
    type: "Public Research University",
    website: "https://www.unimelb.edu.au"
  },
];

// Sample detailed content for each college - in a real app, this would come from a CMS or database
const getCollegeContent = (slug: string) => {
  const contents: Record<string, string> = {
    "university-college-london": `
      <h2>About University College London</h2>
      <p>University College London (UCL) is a public research university located in London, United Kingdom. It is a member of the Russell Group and is consistently ranked among the world's top universities.</p>

      <h2>Academic Excellence</h2>
      <p>UCL offers over 400 undergraduate programs and more than 675 graduate taught and research programs across a wide range of disciplines. The university is particularly renowned for its research output and innovation.</p>

      <h2>Student Life</h2>
      <p>Located in the heart of London, UCL provides students with unparalleled access to cultural, professional, and social opportunities. The university has numerous student societies and sports clubs.</p>

      <h2>International Community</h2>
      <p>With over 42,000 students from 150+ countries, UCL offers a truly international learning environment with comprehensive support services for international students.</p>
    `,
    "university-of-manchester": `
      <h2>About The University of Manchester</h2>
      <p>The University of Manchester is a public research university in Manchester, England. It was formed in 2004 by the merger of the University of Manchester Institute of Science and Technology (UMIST) and the Victoria University of Manchester.</p>

      <h2>Research Powerhouse</h2>
      <p>Manchester is home to numerous research institutes and centers of excellence. The university has been involved in groundbreaking discoveries and innovations throughout its history.</p>

      <h2>Campus Facilities</h2>
      <p>The university boasts modern facilities including state-of-the-art laboratories, libraries, sports centers, and student accommodation. The campus is well-connected to Manchester city center.</p>

      <h2>Career Prospects</h2>
      <p>Manchester graduates are highly sought after by employers worldwide. The university's strong industry connections provide excellent internship and job opportunities.</p>
    `,
    "kings-college-london": `
      <h2>About King's College London</h2>
      <p>King's College London (KCL) is one of the oldest and most prestigious universities in England. Founded in 1829, it has played a major role in many of the advances that have shaped modern life.</p>

      <h2>Health Sciences Excellence</h2>
      <p>KCL is particularly renowned for its health sciences programs, including medicine, dentistry, nursing, and biomedical research. The university is closely affiliated with several leading hospitals.</p>

      <h2>Global Partnerships</h2>
      <p>The university has established partnerships with leading institutions worldwide, offering students opportunities for international exchanges and collaborative research projects.</p>

      <h2>London Location</h2>
      <p>Situated in the heart of London, King's provides students with access to world-class museums, theaters, and professional opportunities in one of the world's most dynamic cities.</p>
    `,
    "university-of-bristol": `
      <h2>About The University of Bristol</h2>
      <p>The University of Bristol is a red brick research university located in Bristol, England. It received its royal charter in 1909 and is a member of the Russell Group.</p>

      <h2>Innovation and Research</h2>
      <p>Bristol is known for its innovative research across multiple disciplines. The university has been involved in numerous groundbreaking discoveries and maintains strong industry partnerships.</p>

      <h2>Student Experience</h2>
      <p>The university offers a vibrant student life with over 400 student clubs and societies. Bristol's location provides excellent access to outdoor activities and cultural attractions.</p>

      <h2>Graduate Outcomes</h2>
      <p>Bristol graduates consistently achieve excellent employment outcomes, with many securing positions at leading companies and organizations worldwide.</p>
    `,
    "university-of-toronto": `
      <h2>About The University of Toronto</h2>
      <p>The University of Toronto (U of T) is a public research university in Toronto, Ontario, Canada. It was founded as King's College in 1827 and has evolved into Canada's leading institution of learning.</p>

      <h2>Academic Excellence</h2>
      <p>U of T offers over 700 undergraduate and 200 graduate programs. The university is particularly strong in research and innovation, with numerous Nobel laureates among its faculty and alumni.</p>

      <h2>Campus Life</h2>
      <p>With three campuses across Toronto, students have access to diverse academic environments. The university offers extensive student services, including career counseling and health services.</p>

      <h2>Global Recognition</h2>
      <p>Toronto consistently ranks among the world's top universities and attracts students from around the globe seeking a world-class education in a multicultural environment.</p>
    `,
    "monash-university": `
      <h2>About Monash University</h2>
      <p>Monash University is a public research university based in Melbourne, Victoria, Australia. It was founded in 1958 and is the second oldest university in the state of Victoria.</p>

      <h2>Global Perspective</h2>
      <p>Monash is known for its international outlook, with campuses in Malaysia, South Africa, and Italy. The university offers numerous global exchange and study abroad opportunities.</p>

      <h2>Research Innovation</h2>
      <p>The university is a leader in research across multiple disciplines and has been involved in numerous technological innovations and scientific discoveries.</p>

      <h2>Industry Connections</h2>
      <p>Monash maintains strong partnerships with industry leaders, providing students with excellent internship and employment opportunities both in Australia and internationally.</p>
    `,
    "imperial-college-london": `
      <h2>About Imperial College London</h2>
      <p>Imperial College London is a world-leading university focused on science, engineering, medicine and business. Located in the heart of London, it is consistently ranked among the world's best universities.</p>

      <h2>STEM Focus</h2>
      <p>Imperial specializes in science, technology, engineering, and mathematics (STEM) subjects. The university is particularly renowned for its engineering and physical sciences programs.</p>

      <h2>Innovation and Entrepreneurship</h2>
      <p>The university has a strong focus on innovation and entrepreneurship, with dedicated centers and programs to support student startups and technological innovation.</p>

      <h2>Industry Partnerships</h2>
      <p>Imperial maintains close relationships with leading companies and organizations, providing students with access to cutting-edge research opportunities and industry internships.</p>
    `,
    "university-of-melbourne": `
      <h2>About The University of Melbourne</h2>
      <p>The University of Melbourne is Australia's second oldest university and is consistently ranked among the world's leading universities. Founded in 1853, it has a rich history of academic excellence.</p>

      <h2>Academic Reputation</h2>
      <p>Melbourne offers a comprehensive range of undergraduate and graduate programs across multiple disciplines. The university is particularly strong in research and professional education.</p>

      <h2>Research Excellence</h2>
      <p>The university is home to numerous research institutes and centers. Melbourne researchers have made significant contributions to various fields of knowledge.</p>

      <h2>Cultural Hub</h2>
      <p>Located in Melbourne, Australia's cultural capital, students have access to world-class museums, galleries, festivals, and sporting events throughout the year.</p>
    `
  };
  return contents[slug] || "";
};


export default function CollegePage() {
  const { actions } = useColleges();
  const params = useParams();
  const slug = params.slug as string;

  // Find the college by slug
  const college = actions.getCollegeBySlug(slug);

  // If college not found, show 404
  if (!college) {
    notFound();
  }

  const content = getCollegeContent(slug);

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <Link href="/colleges" className="inline-flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors text-sm sm:text-base">
          <ArrowLeft size={14} className="sm:w-[16px] sm:h-[16px]" />
          Back to Colleges
        </Link>
      </div>

      {/* College Header */}
      <article className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 sm:pb-20">
        <header className="mb-8 sm:mb-12">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
            {college.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 sm:px-3 py-1 text-xs font-medium text-orange-700 border border-orange-100"
              >
                <CheckCircle size={8} className="sm:w-[10px] sm:h-[10px]" />
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">
            {college.name}
          </h1>

          {/* Location */}
          <div className="flex items-center gap-2 text-gray-600 mb-4 sm:mb-6">
            <MapPin size={18} className="sm:w-[20px] sm:h-[20px] text-orange-500" />
            <span className="text-base sm:text-lg font-medium">{college.location}</span>
          </div>

          {/* Meta Information */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="text-center p-3 sm:p-4 bg-slate-50 rounded-xl">
              <div className="text-lg sm:text-2xl font-bold text-slate-900">{college.rank}</div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">Global Ranking</div>
            </div>
            <div className="text-center p-3 sm:p-4 bg-slate-50 rounded-xl">
              <div className="text-lg sm:text-2xl font-bold text-slate-900">{college.tuition}</div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">Annual Tuition</div>
            </div>
            <div className="text-center p-3 sm:p-4 bg-slate-50 rounded-xl">
              <div className="text-lg sm:text-2xl font-bold text-slate-900">{college.acceptance}</div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">Acceptance Rate</div>
            </div>
            {college.employability && (
              <div className="text-center p-3 sm:p-4 bg-slate-50 rounded-xl">
                <div className="text-lg sm:text-2xl font-bold text-slate-900">{college.employability}</div>
                <div className="text-xs sm:text-sm text-gray-500 mt-1">Employability</div>
              </div>
            )}
          </div>

          {/* Additional Info */}
          <div className="flex flex-wrap gap-4 sm:gap-6 text-gray-600 mb-6 sm:mb-8">
            {college.founded && (
              <div className="flex items-center gap-2">
                <Calendar size={14} className="sm:w-[16px] sm:h-[16px]" />
                <span className="text-sm sm:text-base">Founded {college.founded}</span>
              </div>
            )}
            {college.type && (
              <div className="flex items-center gap-2">
                <BookOpen size={14} className="sm:w-[16px] sm:h-[16px]" />
                <span className="text-sm sm:text-base">{college.type}</span>
              </div>
            )}
            {college.students && (
              <div className="flex items-center gap-2">
                <Users size={14} className="sm:w-[16px] sm:h-[16px]" />
                <span className="text-sm sm:text-base">{college.students} Students</span>
              </div>
            )}
            {college.website && (
              <div className="flex items-center gap-2">
                <Globe size={14} className="sm:w-[16px] sm:h-[16px]" />
                <a href={college.website} target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 text-sm sm:text-base">
                  Official Website
                </a>
              </div>
            )}
          </div>

          {/* Featured Image */}
          <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 w-full rounded-xl sm:rounded-2xl overflow-hidden mb-6 sm:mb-8">
            <Image src={college.image} alt={college.name} fill className="object-cover" />
          </div>
        </header>

        {/* College Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>

        {/* Apply Now Section */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Ready to Start Your Journey?</h3>
          <p className="text-orange-100 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            Take the first step towards studying at {college.name}. Our expert counselors will guide you through the application process.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href={`/contact?college=${college.slug}`}
              className="bg-white text-orange-600 font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg sm:rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              Apply Now
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg sm:rounded-xl hover:bg-white hover:text-orange-600 transition-all duration-200 text-sm sm:text-base"
            >
              Get More Info
            </Link>
          </div>
        </div>

        {/* Share Section */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="text-sm text-gray-500">Share this college:</span>
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                <Share2 size={14} className="sm:w-[16px] sm:h-[16px]" />
              </button>
            </div>
            <Link href="/colleges" className="text-orange-600 hover:text-orange-700 font-medium text-sm sm:text-base">
              View more colleges →
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

