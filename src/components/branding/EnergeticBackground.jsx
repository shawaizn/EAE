import React, { useState } from 'react';

/**
 * EnergeticBackground - Dynamic animated background for non-lesson pages
 *
 * Features:
 * - Animated gradient background with cyan, purple, and orange
 * - Floating energy particles (orbs)
 * - Respects prefers-reduced-motion for accessibility
 * - Pure CSS animations for performance
 */
export function EnergeticBackground() {
  // Generate random positions for energy orbs
  const generateOrbs = () => {
    const orbs = [];
    const count = 20; // Number of floating orbs

    for (let i = 0; i < count; i++) {
      orbs.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 60 + Math.random() * 120, // 60-180px
        animationDelay: Math.random() * 8,
        floatDuration: 20 + Math.random() * 15, // 20-35s
        opacity: 0.15 + Math.random() * 0.25, // 0.15-0.4
        color: ['cyan', 'violet', 'orange'][Math.floor(Math.random() * 3)],
      });
    }
    return orbs;
  };

  const [orbs] = useState(generateOrbs);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient base layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-violet-50 to-orange-50" />

      {/* Flowing gradient overlay - animates position */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-violet-400/20 to-orange-400/20 animate-gradient-shift"
      />

      {/* Secondary gradient layer for depth */}
      <div
        className="absolute inset-0 bg-gradient-to-tr from-transparent via-violet-300/10 to-cyan-300/10 animate-gradient-shift-reverse"
      />

      {/* Subtle grid pattern overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
        <defs>
          <pattern id="energy-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="#0891b2"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#energy-grid)" />
      </svg>

      {/* Floating energy orbs */}
      <div className="absolute inset-0">
        {orbs.map((orb) => (
          <div
            key={orb.id}
            className="absolute rounded-full blur-2xl animate-float-orb"
            style={{
              left: `${orb.x}%`,
              top: `${orb.y}%`,
              width: `${orb.size}px`,
              height: `${orb.size}px`,
              opacity: orb.opacity,
              animationDuration: `${orb.floatDuration}s`,
              animationDelay: `${orb.animationDelay}s`,
              backgroundColor:
                orb.color === 'cyan' ? '#06b6d4' :
                orb.color === 'violet' ? '#8b5cf6' :
                '#f97316',
            }}
          />
        ))}
      </div>

      {/* Radial gradient vignette for focus */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-white/40" />

      {/* CSS Animations */}
      <style>{`
        @keyframes gradient-shift {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          25% {
            transform: translate(5%, -5%) scale(1.05);
            opacity: 0.9;
          }
          50% {
            transform: translate(-5%, 5%) scale(1.1);
            opacity: 0.8;
          }
          75% {
            transform: translate(3%, 3%) scale(1.05);
            opacity: 0.9;
          }
        }

        @keyframes gradient-shift-reverse {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          25% {
            transform: translate(-5%, 5%) scale(1.05);
            opacity: 0.8;
          }
          50% {
            transform: translate(5%, -5%) scale(1.1);
            opacity: 0.9;
          }
          75% {
            transform: translate(-3%, -3%) scale(1.05);
            opacity: 0.85;
          }
        }

        @keyframes float-orb {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(50px, -80px) scale(1.1);
          }
          50% {
            transform: translate(-40px, -120px) scale(0.9);
          }
          75% {
            transform: translate(-60px, -60px) scale(1.05);
          }
        }

        .animate-gradient-shift {
          animation: gradient-shift 25s ease-in-out infinite;
        }

        .animate-gradient-shift-reverse {
          animation: gradient-shift-reverse 30s ease-in-out infinite;
        }

        .animate-float-orb {
          animation: float-orb var(--duration, 25s) ease-in-out infinite;
        }

        /* Accessibility: Respect prefers-reduced-motion */
        @media (prefers-reduced-motion: reduce) {
          .animate-gradient-shift,
          .animate-gradient-shift-reverse,
          .animate-float-orb {
            animation: none;
          }
        }

        /* Radial gradient utility */
        .bg-gradient-radial {
          background: radial-gradient(circle at center, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
}
