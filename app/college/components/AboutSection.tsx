import React from 'react';
import { ChevronRight } from 'lucide-react';

interface AboutSectionProps {
  title?: string;
  paragraphs: string[];
  onReadMore?: () => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  title = "About IIMA",
  paragraphs,
  onReadMore,
}) => {
  return (
    <div className="bg-[#EFEBE0] rounded-xl p-6 border border-[#EFEBE0] shadow-sm hover:shadow-md transition-shadow">
      <h2 className="text-2xl font-bold text-[#2D2D2D] mb-4">
        {title}
      </h2>

      <div className="text-[#2D2D2D] leading-relaxed space-y-4">
        {paragraphs.map((paragraph, index) => (
          <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
        ))}
      </div>

      {onReadMore && (
        <button
          onClick={onReadMore}
          className="text-[#E63946] font-semibold text-sm mt-4 hover:underline flex items-center gap-1 group"
        >
          Read More
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      )}
    </div>
  );
};

export default AboutSection;
