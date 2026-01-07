"use client";

import React from 'react';
import Image from 'next/image';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { useBlogs } from '@/contexts/BlogsContext';

// Sample blog content - in a real app, this would come from a CMS or database
const getBlogContent = (slug: string) => {
  const contents: Record<string, string> = {
    "the-complete-guide-to-canadas-student-direct-stream-sds": `
      <h2>Understanding the SDS Program</h2>
      <p>The Student Direct Stream (SDS) is Canada's fast-track student visa program designed to expedite the application process for students from certain countries. This program was introduced to streamline the visa process and reduce processing times for eligible international students.</p>

      <h2>Eligibility Requirements</h2>
      <p>To qualify for the SDS program, you must meet several criteria:</p>
      <ul>
        <li>Be a citizen of one of the eligible countries</li>
        <li>Have a valid acceptance letter from a designated learning institution</li>
        <li>Have a Guaranteed Investment Certificate (GIC) of CAD $10,000</li>
        <li>Meet the language proficiency requirements</li>
        <li>Have a clean medical examination</li>
      </ul>

      <h2>Processing Times</h2>
      <p>SDS applications are typically processed within 20 calendar days, compared to the standard 8-12 weeks for regular study permits. This makes it an attractive option for students who need to start their studies quickly.</p>

      <h2>Required Documents</h2>
      <p>Make sure you have all the necessary documents ready before applying:</p>
      <ul>
        <li>Valid passport</li>
        <li>Acceptance letter from a Canadian institution</li>
        <li>Proof of financial support</li>
        <li>Medical examination results</li>
        <li>Police certificate (if required)</li>
      </ul>
    `,
    "hidden-scholarships-for-international-students-in-australia": `
      <h2>Beyond the Obvious</h2>
      <p>While most international students are aware of the main scholarships offered by universities and the Australian government, there are many lesser-known funding opportunities that can significantly reduce your education costs.</p>

      <h2>Industry-Specific Scholarships</h2>
      <p>Many Australian companies offer scholarships to attract international talent in their field:</p>
      <ul>
        <li>Mining companies in Western Australia</li>
        <li>Technology firms in Sydney and Melbourne</li>
        <li>Agricultural organizations in regional areas</li>
        <li>Healthcare providers across major cities</li>
      </ul>

      <h2>Regional Scholarships</h2>
      <p>Australian states and territories offer targeted scholarships to attract international students to their regions:</p>
      <ul>
        <li>Victoria's Victoria India Doctoral Scholarships</li>
        <li>Queensland's Pacific Scholarships</li>
        <li>South Australia's Critical Industries Scholarships</li>
        <li>Western Australia's Premier's International Scholarship</li>
      </ul>

      <h2>Application Tips</h2>
      <p>When applying for these hidden scholarships:</p>
      <ul>
        <li>Research early - some deadlines are 6-12 months before course start</li>
        <li>Tailor your application to show how you benefit the sponsoring organization</li>
        <li>Network with alumni and current students</li>
        <li>Consider combining multiple scholarships</li>
      </ul>
    `,
    "cost-of-living-breakdown-london-vs-manchester": `
      <h2>Understanding Living Costs</h2>
      <p>When comparing London and Manchester, it's important to consider both the obvious differences and the hidden costs that can affect your budget as an international student.</p>

      <h2>Accommodation Costs</h2>
      <p>London's property market is notoriously expensive:</p>
      <ul>
        <li>Student halls: £150-£250 per week in London vs £120-£180 in Manchester</li>
        <li>Private rental: £800-£1,200/month in London vs £500-£800 in Manchester</li>
        <li>Shared house: £600-£900/month in London vs £400-£600 in Manchester</li>
      </ul>

      <h2>Transportation</h2>
      <p>Getting around London is more expensive but Manchester offers great value:</p>
      <ul>
        <li>Monthly student Oyster card: £80 in London</li>
        <li>Monthly student pass: £35 in Manchester</li>
        <li>Taxi/Uber: 20-30% cheaper in Manchester</li>
      </ul>

      <h2>Food and Groceries</h2>
      <p>Grocery costs are similar, but eating out varies significantly:</p>
      <ul>
        <li>Weekly groceries: £40-£60 in both cities</li>
        <li>Coffee: £3-£4 in London vs £2-£3 in Manchester</li>
        <li>Meal deal: £4-£5 in London vs £3-£4 in Manchester</li>
      </ul>

      <h2>Entertainment and Social Costs</h2>
      <p>Manchester often provides better value for student entertainment:</p>
      <ul>
        <li>Cinema tickets: £8-£12 in both cities</li>
        <li>Pub drinks: £4-£5 in London vs £3-£4 in Manchester</li>
        <li>Club entry: £10-£20 in London vs £5-£15 in Manchester</li>
      </ul>

      <h2>Final Thoughts</h2>
      <p>While London offers unparalleled opportunities and cultural experiences, Manchester provides excellent education at a significantly lower cost of living. Consider your priorities and budget when making your choice.</p>
    `
  };
  return contents[slug] || "";
};

export default function BlogPostPage() {
  const { actions } = useBlogs();
  const params = useParams();
  const slug = params.slug as string;

  // Find the blog post by slug
  const article = actions.getBlogBySlug(slug);

  // If article not found, show 404
  if (!article) {
    notFound();
  }

  const content = getBlogContent(slug);

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Navigation */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <Link href="/blogs" className="inline-flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors">
          <ArrowLeft size={16} />
          Back to Blogs
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-6 pb-20">
        <header className="mb-8">
          {/* Category Badge */}
          <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded-md text-sm font-bold uppercase mb-4">
            {article.category}
          </span>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-gray-500 mb-6">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{article.readTime}</span>
            </div>
            {article.author && (
              <div className="flex items-center gap-3">
                <div className="relative w-8 h-8 rounded-full overflow-hidden">
                  <Image src={article.author.avatar} alt={article.author.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="font-medium text-slate-900 text-sm">{article.author.name}</p>
                  <p className="text-xs">{article.author.role}</p>
                </div>
              </div>
            )}
          </div>

          {/* Featured Image */}
          <div className="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden mb-8">
            <Image src={article.image} alt={article.title} fill className="object-cover" />
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>

        {/* Share Section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">Share this article:</span>
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                <Share2 size={16} />
              </button>
            </div>
            <Link href="/blogs" className="text-orange-600 hover:text-orange-700 font-medium">
              Read more articles →
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

