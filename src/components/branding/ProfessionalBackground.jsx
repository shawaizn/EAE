import React from 'react';
import { theme } from '../../styles/theme';

/**
 * ProfessionalBackground - Clean, minimal background for Technical Authority design
 *
 * Design Philosophy:
 * - Professional polish for £400-600 premium platform
 * - Generous whitespace with subtle depth
 * - Human warmth through warm neutrals (not cold grays)
 * - Minimal, purposeful animation
 *
 * Features:
 * - Warm white base (#FAFAF9)
 * - Subtle blue gradient accents (5-10% opacity)
 * - Optional grid pattern for technical feel
 * - Minimal to moderate animation (200ms)
 */
export function ProfessionalBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" style={{ backgroundColor: theme.colors.background.base }}>
      {/* Subtle gradient accents - blue tints for authority */}
      <div className="absolute inset-0">
        {/* Top-right accent - electric blue */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-[0.08] animate-subtle-pulse"
          style={{
            background: `radial-gradient(circle, ${theme.colors.primary.electric} 0%, transparent 70%)`,
            top: '-10%',
            right: '-5%',
          }}
        />

        {/* Bottom-left accent - deep blue */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.06] animate-subtle-pulse-delayed"
          style={{
            background: `radial-gradient(circle, ${theme.colors.primary.deep} 0%, transparent 70%)`,
            bottom: '-5%',
            left: '-5%',
          }}
        />

        {/* Center accent - cyan (human warmth) */}
        <div
          className="absolute w-[400px] h-[400px] rounded-full blur-3xl opacity-[0.05]"
          style={{
            background: `radial-gradient(circle, ${theme.colors.accent.cyan} 0%, transparent 70%)`,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>

      {/* Optional subtle grid pattern for technical authority */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke={theme.colors.primary.deep}
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* CSS Animations */}
      <style>{`
        /* Subtle pulse - minimal, professional (200ms standard) */
        @keyframes subtle-pulse {
          0%, 100% {
            opacity: 0.08;
            transform: scale(1);
          }
          50% {
            opacity: 0.12;
            transform: scale(1.05);
          }
        }

        @keyframes subtle-pulse-delayed {
          0%, 100% {
            opacity: 0.06;
            transform: scale(1);
          }
          50% {
            opacity: 0.10;
            transform: scale(1.08);
          }
        }

        .animate-subtle-pulse {
          animation: subtle-pulse 12s ease-in-out infinite;
        }

        .animate-subtle-pulse-delayed {
          animation: subtle-pulse-delayed 15s ease-in-out infinite 3s;
        }

        /* Accessibility: Respect prefers-reduced-motion */
        @media (prefers-reduced-motion: reduce) {
          .animate-subtle-pulse,
          .animate-subtle-pulse-delayed {
            animation: none !important;
            opacity: 0.06 !important;
          }
        }
      `}</style>
    </div>
  );
}
