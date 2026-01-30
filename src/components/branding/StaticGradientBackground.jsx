import React from 'react';

/**
 * StaticGradientBackground - Static gradient background for non-Dashboard pages
 *
 * Features:
 * - Beautiful gradient background with cyan, purple, and orange
 * - No animations - static background for lessons and other pages
 * - Same color scheme as EnergeticBackground for consistency
 */
export function StaticGradientBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Static gradient base layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-violet-50 to-orange-50" />

      {/* Static gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-violet-400/10 to-orange-400/10" />

      {/* Secondary gradient layer for depth */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-violet-300/5 to-cyan-300/5" />

      {/* Subtle grid pattern overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.02]">
        <defs>
          <pattern id="static-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="#0891b2"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#static-grid)" />
      </svg>

      {/* Radial gradient vignette for focus */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-white/30" />

      <style>{`
        /* Radial gradient utility */
        .bg-gradient-radial {
          background: radial-gradient(circle at center, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
}
