// Logo Component - Energise AI Education
// Two variants: Horizontal (with text) and Circular (icon only)

import React from 'react';

// HORIZONTAL LOGO - Use in headers, marketing, full branding
export function LogoHorizontal({ size = 'md', whiteMode = false }) {
  const sizeMap = {
    sm: { svg: 48, text: 'text-lg' },
    md: { svg: 64, text: 'text-xl' },
    lg: { svg: 80, text: 'text-2xl' }
  };

  const { svg, text } = sizeMap[size];

  const topArcColor = '#0891b2';
  const bottomArcColor = whiteMode ? '#ffffff' : '#1a2332';
  const dotsColor = '#0891b2';
  const linesColor = '#0891b2';
  const energiseColor = whiteMode ? '#ffffff' : '#1a2332';
  const eLetter = whiteMode ? '#ffffff' : '#1a2332';

  return (
    <div className="flex items-center gap-4">
      <svg width={svg} height={svg} viewBox="0 0 64 64" className="flex-shrink-0">
        {/* Top arc - always teal */}
        <path d="M 16 32 A 16 16 0 0 1 48 32" stroke={topArcColor} strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* Bottom arc - dark navy or white */}
        <path d="M 48 32 A 16 16 0 0 1 16 32" stroke={bottomArcColor} strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* Activation dot - always teal */}
        <circle cx="48" cy="18" r="2" fill={dotsColor} />
        {/* Radiating lines - always teal */}
        <line x1="48" y1="14" x2="48" y2="6" stroke={linesColor} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="52" y1="18" x2="60" y2="18" stroke={linesColor} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="51" y1="15" x2="57" y2="9" stroke={linesColor} strokeWidth="1.5" strokeLinecap="round" />

        {/* E letter inside the loop - dark navy or white */}
        <rect x="24" y="24" width="3.5" height="16" fill={eLetter} rx="0.5" />
        <rect x="24" y="24" width="13" height="3" fill={eLetter} rx="0.5" />
        <rect x="24" y="30.5" width="11" height="2.5" fill={eLetter} rx="0.5" />
        <rect x="24" y="37" width="13" height="3" fill={eLetter} rx="0.5" />
      </svg>

      <div>
        <p className={`${text} font-black`} style={{color: energiseColor, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', letterSpacing: '-0.02em'}}>
          Energise
        </p>
        <p className="text-xs font-semibold" style={{color: '#0891b2', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', letterSpacing: '0.05em'}}>
          AI EDUCATION
        </p>
      </div>
    </div>
  );
}

// CIRCULAR LOGO - Use in app icons, favicons, badges, profile pictures
export function LogoCircular({ size = 'md', whiteMode = false }) {
  const sizeMap = {
    sm: 48,
    md: 80,
    lg: 120,
    xl: 180
  };

  const svgSize = sizeMap[size];

  const topArcColor = '#0891b2';
  const bottomArcColor = whiteMode ? '#ffffff' : '#1a2332';
  const dotsColor = '#0891b2';
  const linesColor = '#0891b2';
  const eLetter = whiteMode ? '#ffffff' : '#1a2332';

  return (
    <svg width={svgSize} height={svgSize} viewBox="0 0 140 140" className="flex-shrink-0">
      {/* Top arc - always teal */}
      <path d="M 25 70 A 45 45 0 0 1 115 70" stroke={topArcColor} strokeWidth="5" fill="none" strokeLinecap="round" />
      {/* Bottom arc - dark navy or white */}
      <path d="M 115 70 A 45 45 0 0 1 25 70" stroke={bottomArcColor} strokeWidth="5" fill="none" strokeLinecap="round" />
      {/* Activation dot - always teal */}
      <circle cx="110" cy="38" r="2.5" fill={dotsColor} />
      {/* Radiating lines - always teal */}
      <line x1="110" y1="32" x2="110" y2="20" stroke={linesColor} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="116" y1="38" x2="128" y2="38" stroke={linesColor} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="114" y1="34" x2="122" y2="26" stroke={linesColor} strokeWidth="1.5" strokeLinecap="round" />

      {/* Solid geometric E inside loop - dark navy or white */}
      <rect x="52" y="52" width="8" height="36" fill={eLetter} rx="1" />
      <rect x="52" y="52" width="30" height="7" fill={eLetter} rx="1" />
      <rect x="52" y="67" width="26" height="6" fill={eLetter} rx="1" />
      <rect x="52" y="81" width="30" height="7" fill={eLetter} rx="1" />
    </svg>
  );
}
