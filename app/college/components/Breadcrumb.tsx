import React from 'react';

interface BreadcrumbProps {
  items: Array<{
    label: string;
    href?: string;
    isActive?: boolean;
  }>;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <div className="bg-[#EFEBE0] border-b">
      <div className="max-w-7xl mx-auto px-8 py-3">
        <div className="flex items-center gap-2 text-sm text-[#2D2D2D]">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              {item.href ? (
                <a href={item.href} className="hover:text-[#E63946] transition-colors">
                  {item.label}
                </a>
              ) : (
                <span className={item.isActive ? "text-[#E63946] font-medium" : ""}>
                  {item.label}
                </span>
              )}
              {index < items.length - 1 && <span>›</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
