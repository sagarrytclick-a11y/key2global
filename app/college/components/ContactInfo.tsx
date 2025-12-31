import React from 'react';
import { Phone, MapPin } from 'lucide-react';

interface ContactInfoProps {
  title?: string;
  mapImageUrl?: string;
  address: string;
  pincode: string;
  phone: string;
  phoneNote?: string;
  onViewMapClick?: () => void;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  title = "Contact Information",
  mapImageUrl,
  address,
  pincode,
  phone,
  phoneNote,
  onViewMapClick,
}) => {
  return (
    <div className="bg-[#EFEBE0] rounded-xl p-6 border border-[#EFEBE0] shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-2 mb-4">
        <Phone className="w-5 h-5 text-[#E63946]" />
        <h3 className="font-bold text-lg text-[#2D2D2D]">
          {title}
        </h3>
      </div>

      {/* Map Image */}
      <div className="relative h-48 bg-[#F9F7F2] rounded-lg mb-4 overflow-hidden">
        <img
          src={mapImageUrl || "https://via.placeholder.com/400x300/e5e7eb/6b7280?text=Map+View"}
          alt="Map"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src =
              "https://via.placeholder.com/400x300/e5e7eb/6b7280?text=Map+View";
          }}
        />
        {onViewMapClick && (
          <button
            onClick={onViewMapClick}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-[#E63946] hover:bg-[#E63946] hover:opacity-90 text-white rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg transition-all"
          >
            <MapPin className="w-4 h-4" />
            View On Map
          </button>
        )}
      </div>

      <div className="space-y-3 text-sm">
        <div>
          <div className="text-[#2D2D2D] mb-1">Address</div>
          <div className="font-medium text-[#2D2D2D]">
            {address}
          </div>
        </div>
        <div>
          <div className="text-[#2D2D2D] mb-1">Pincode</div>
          <div className="font-medium text-[#2D2D2D]">{pincode}</div>
        </div>
        <div>
          <div className="text-[#2D2D2D] mb-1">Phone</div>
          <div className="font-medium text-[#E63946]">
            {phone}
            {phoneNote && (
              <span className="text-xs text-[#2D2D2D] ml-2">
                ({phoneNote})
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
