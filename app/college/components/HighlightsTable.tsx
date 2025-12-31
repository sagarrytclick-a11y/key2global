import React from 'react';

interface HighlightItem {
  parameter: string;
  value: string;
  isLink?: boolean;
  links?: Array<{
    text: string;
    href: string;
  }>;
}

interface HighlightsTableProps {
  title?: string;
  highlights: HighlightItem[];
}

const HighlightsTable: React.FC<HighlightsTableProps> = ({
  title = "IIMA Highlights",
  highlights,
}) => {
  const renderValue = (item: HighlightItem) => {
    if (item.isLink && item.links) {
      return (
        <span>
          {item.links.map((link, index) => (
            <React.Fragment key={index}>
              <a
                href={link.href}
                className="text-[#E63946] hover:underline"
              >
                {link.text}
              </a>
              {index < item.links!.length - 1 && ", "}
            </React.Fragment>
          ))}
          {item.value.includes("+") && ` ${item.value.split("+")[1]}`}
        </span>
      );
    }
    return item.value;
  };

  return (
    <div className="bg-[#EFEBE0] rounded-xl p-6 border border-[#EFEBE0] shadow-sm hover:shadow-md transition-shadow">
      <h2 className="text-2xl font-bold text-[#2D2D2D] mb-4">
        {title}
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[#E63946] text-white">
              <th className="px-6 py-3 text-left font-semibold rounded-tl-lg">
                Parameter
              </th>
              <th className="px-6 py-3 text-left font-semibold rounded-tr-lg">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {highlights.map((item, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? "bg-[#F9F7F2]" : "bg-[#EFEBE0]"}
              >
                <td className="px-6 py-4 font-medium text-[#2D2D2D]">
                  {item.parameter}
                </td>
                <td className="px-6 py-4 text-[#2D2D2D]">
                  {renderValue(item)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HighlightsTable;
