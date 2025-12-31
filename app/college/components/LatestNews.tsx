import React from 'react';
import { Calendar, ChevronRight } from 'lucide-react';

interface NewsArticle {
  title: string;
  date: string;
  onReadMore?: () => void;
}

interface LatestNewsProps {
  title?: string;
  articles: NewsArticle[];
}

const LatestNews: React.FC<LatestNewsProps> = ({
  title = "IIMA Latest news and articles",
  articles,
}) => {
  return (
    <div className="bg-[#EFEBE0] rounded-xl p-6 border border-[#EFEBE0] shadow-sm hover:shadow-md transition-shadow">
      <h3 className="font-bold text-lg mb-4 text-[#2D2D2D]">
        {title}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {articles.map((article, idx) => (
          <div
            key={idx}
            className="border border-[#EFEBE0] rounded-lg p-4 hover:shadow-md transition-shadow hover:border-[#E63946] bg-[#F9F7F2]"
          >
            <h4 className="font-semibold text-sm text-[#2D2D2D] mb-2 line-clamp-2">
              {article.title}
            </h4>
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#2D2D2D] flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {article.date}
              </span>
              <button
                onClick={article.onReadMore}
                className="text-[#E63946] text-xs font-semibold hover:underline flex items-center gap-1 group"
              >
                Read more
                <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
