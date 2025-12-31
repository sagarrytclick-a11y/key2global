import React from 'react';
import { Phone, Download, ChevronRight } from 'lucide-react';

interface GetStartedCardProps {
  title?: string;
  subtitle?: string;
  description?: string;
  onEnquiryClick?: () => void;
  onBrochureClick?: () => void;
  onApplyClick?: () => void;
}

const GetStartedCard: React.FC<GetStartedCardProps> = ({
  title = "Get Started!",
  subtitle = "What are you waiting for?",
  description = "Discover Your Education Journey With Us",
  onEnquiryClick,
  onBrochureClick,
  onApplyClick,
}) => {
  return (
    <div className="bg-[#EFEBE0] rounded-xl p-6 border border-[#EFEBE0] shadow-sm hover:shadow-md transition-shadow">
      <h3 className="font-bold text-lg mb-4 text-[#2D2D2D]">
        {title}
      </h3>
      <p className="text-sm mb-2 text-[#2D2D2D]">
        {subtitle}
      </p>
      <p className="text-xs text-[#2D2D2D] mb-6">
        {description}
      </p>

      <div className="space-y-3">
        <button
          onClick={onEnquiryClick}
          className="w-full px-6 py-3 bg-[#F9F7F2] border-2 border-[#E63946] text-[#E63946] rounded-full font-semibold hover:bg-[#E63946] hover:text-white transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
        >
          <Phone className="w-4 h-4" />
          Enquiry Now
        </button>
        <button
          onClick={onBrochureClick}
          className="w-full px-6 py-3 bg-[#F9F7F2] hover:bg-[#EFEBE0] text-[#2D2D2D] rounded-full font-semibold transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
        >
          <Download className="w-4 h-4" />
          Brochure
        </button>
        <button
          onClick={onApplyClick}
          className="w-full px-6 py-3 bg-[#E63946] hover:bg-[#E63946] hover:opacity-90 text-white rounded-full font-semibold transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
        >
          Apply Now
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default GetStartedCard;
