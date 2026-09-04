import React from 'react';

export interface ScheduleItem {
  day: string;
  hours: string;
}

export interface SpiralNotebookProps {
  title: string;
  variant: 'blue' | 'yellow' | 'teal';
  items: ScheduleItem[];
  showStatusBadge?: boolean;
  isOpen?: boolean;
  statusText?: string;
  className?: string;
}

export const SpiralNotebook: React.FC<SpiralNotebookProps> = ({
  title,
  variant,
  items,
  showStatusBadge = false,
  isOpen = false,
  statusText,
  className = '',
}) => {
  const loops = Array.from({ length: 7 });

  const headerColors = {
    blue: 'bg-abj-blue text-white header-blue',
    teal: 'bg-abj-primary text-white header-blue',
    yellow: 'bg-abj-yellow text-abj-dark header-yellow',
  };

  const headerClass = headerColors[variant] || headerColors.blue;

  return (
    <div
      className={`relative w-full max-w-sm rounded-2xl bg-white shadow-abj-soft border-2 border-abj-dark/10 overflow-hidden flex flex-col transform transition-transform hover:-translate-y-1 ${className}`}
    >
      {/* Spiral Holes & Loops */}
      <div className="bg-abj-dark/90 px-3 py-1.5 flex justify-between items-center z-10">
        {loops.map((_, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-2.5 h-3 bg-[#E5E7EB] rounded-full border border-abj-dark/40 shadow-inner" />
          </div>
        ))}
      </div>

      {/* Header Tab */}
      <div className={`px-4 py-3 text-center font-extrabold tracking-wide text-sm md:text-base uppercase ${headerClass}`}>
        {title}
      </div>

      {/* Notebook Graph Page */}
      <div
        className="p-4 sm:p-5 flex-1 bg-[#F9F9F6] relative"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(136, 196, 185, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(136, 196, 185, 0.1) 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
      >
        <div className="space-y-2 text-xs sm:text-sm">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center border-b border-dashed border-abj-dark/15 pb-1 font-medium"
            >
              <span className="font-bold text-abj-dark uppercase tracking-wider">{item.day}</span>
              <span className="text-abj-dark/80 font-mono text-xs">{item.hours}</span>
            </div>
          ))}
        </div>

        {/* Live Status Badge */}
        {showStatusBadge && (
          <div className="mt-4 pt-2 flex items-center justify-center gap-2">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                isOpen
                  ? 'bg-[#EBF5F3] text-[#2F6D62] border border-[#88C4B9]'
                  : 'bg-[#FAEDEE] text-[#8C3A46] border border-[#CF7A86]'
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  isOpen ? 'bg-[#2F6D62] animate-pulse' : 'bg-[#8C3A46]'
                }`}
              />
              {statusText || (isOpen ? 'Ouvert actuellement' : 'Fermé actuellement')}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
