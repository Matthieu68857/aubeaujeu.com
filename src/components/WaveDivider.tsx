import React from 'react';

export interface WaveDividerProps {
  color: string;
  variant?: 'gentle' | 'curved' | 'double';
  inverted?: boolean;
  className?: string;
  height?: number | string;
}

const PATHS = {
  gentle: 'M0,40 C320,80 480,10 720,50 C960,90 1200,30 1440,60 L1440,120 L0,120 Z',
  curved: 'M0,60 C240,110 480,20 720,70 C960,120 1200,40 1440,80 L1440,120 L0,120 Z',
  double: 'M0,30 C180,70 360,10 540,50 C720,90 900,20 1080,60 C1260,100 1380,30 1440,50 L1440,120 L0,120 Z',
};

export const WaveDivider: React.FC<WaveDividerProps> = ({
  color,
  variant = 'gentle',
  inverted = false,
  className = '',
}) => {
  const pathData = PATHS[variant] || PATHS.gentle;

  return (
    <div
      className={`w-full overflow-hidden leading-none pointer-events-none select-none ${
        inverted ? 'rotate-180 -mb-[1px]' : '-mt-[1px]'
      } ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-10 sm:h-16 md:h-24 block"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d={pathData} fill={color} />
      </svg>
    </div>
  );
};
