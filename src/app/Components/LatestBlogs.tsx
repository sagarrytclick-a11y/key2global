import React from 'react';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight } from 'lucide-react'; // Using lucide-react for icons

interface BlogCardProps {
  category: string;
  image: string;
  date: string;
  readTime: string;
  title: string;
  description: string;
}

const BlogCard = ({ category, image, date, readTime, title, description }: BlogCardProps) => {
  return (
    <div className="flex flex-col group cursor-pointer bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100 overflow-hidden">
      {/* Image Container */}
      <div className="relative h-48 sm:h-56 lg:h-64 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-orange-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
          {category}
        </span>
      </div>

      {/* Content Container */}
      <div className="p-4 sm:p-6">
        {/* Metadata */}
        <div className="flex items-center gap-3 sm:gap-4 text-slate-500 text-xs sm:text-sm mb-3 sm:mb-4">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Calendar size={14} className="sm:w-[16px] sm:h-[16px] text-orange-500" />
            <span className="font-medium">{date}</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Clock size={14} className="sm:w-[16px] sm:h-[16px] text-orange-500" />
            <span className="font-medium">{readTime}</span>
          </div>
        </div>

        {/* Content */}
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3 leading-tight group-hover:text-orange-600 transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-slate-600 text-xs sm:text-sm line-clamp-3 mb-4 sm:mb-6 leading-relaxed">
          {description}
        </p>

        {/* Link */}
        <button className="flex items-center gap-1.5 sm:gap-2 text-orange-600 font-bold text-xs sm:text-sm hover:text-orange-700 transition-all group/btn">
          Read Article
          <ArrowRight size={14} className="sm:w-[16px] sm:h-[16px] transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default function LatestBlogs() {
  const blogs = [
    {
      category: "Guides",
      image: "https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=600", // Student with passport/visa documents
      date: "Oct 12, 2024",
      readTime: "5 min read",
      title: "Complete Guide to USA Student Visas for 2025 Intake",
      description: "Navigating the F-1 visa process can be daunting. Here is a step-by-step breakdown of documents, interviews..."
    },
    {
      category: "Scholarships",
      image: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=600", // Graduation cap with money/scholarship theme
      date: "Sep 28, 2024",
      readTime: "3 min read",
      title: "Top 5 Fully Funded Scholarships in UK for International Students",
      description: "Don't let finances hold you back. Explore the Chevening, Commonwealth, and University-specific grants availabl..."
    },
    {
      category: "Success",
      image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600", // Student studying with books
      date: "Sep 15, 2024",
      readTime: "4 min read",
      title: "How I scored 8.0 in IELTS: Tips from a Top Scorer",
      description: "Preparation strategies, resources, and mindset shifts that helped me ace the IELTS exam in just one month."
    }
  ];

  return (
    <section id="blog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-br from-white via-orange-50/20 to-slate-50">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-32 left-20 w-48 h-48 sm:w-80 sm:h-80 bg-orange-100 rounded-full blur-[80px] sm:blur-[120px] opacity-30" />
        <div className="absolute bottom-32 right-20 w-64 h-64 sm:w-96 sm:h-96 bg-orange-200 rounded-full blur-[80px] sm:blur-[100px] opacity-25" />
      </div>

      <div className="relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
            <span>📝</span>
            Educational Insights
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4 sm:mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Latest</span> Blogs
          </h2>

          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4">
            Stay informed with expert insights, study abroad tips, and success stories from Key2Global.
          </p>

          {/* Blog stats */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            <div className="flex items-center gap-2 text-slate-600">
              <span className="text-orange-500">📚</span>
              <span className="font-semibold text-sm sm:text-base">50+ Articles</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <span className="text-orange-500">👥</span>
              <span className="font-semibold text-sm sm:text-base">Expert Writers</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <span className="text-orange-500">📈</span>
              <span className="font-semibold text-sm sm:text-base">Updated Weekly</span>
            </div>
          </div>
        </div>

        {/* View all button */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <button className="flex items-center gap-2 sm:gap-3 bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:bg-orange-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base">
            View all articles
            <ArrowRight size={18} className="sm:w-[20px] sm:h-[20px]" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
}