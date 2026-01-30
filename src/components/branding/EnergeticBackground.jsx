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
    const count = 40; // Number of floating orbs - increased for more energy

    for (let i = 0; i < count; i++) {
      orbs.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 40 + Math.random() * 160, // 40-200px - wider range
        animationDelay: Math.random() * 6,
        floatDuration: 12 + Math.random() * 12, // 12-24s - faster animations
        opacity: 0.1 + Math.random() * 0.35, // 0.1-0.45 - more variety
        color: ['cyan', 'violet', 'orange'][Math.floor(Math.random() * 3)],
        pulseDelay: Math.random() * 5,
        pulseDuration: 3 + Math.random() * 4, // 3-7s pulse
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
            className="absolute rounded-full blur-2xl animate-float-orb animate-pulse-orb"
            style={{
              left: `${orb.x}%`,
              top: `${orb.y}%`,
              width: `${orb.size}px`,
              height: `${orb.size}px`,
              opacity: orb.opacity,
              animationDuration: `${orb.floatDuration}s, ${orb.pulseDuration}s`,
              animationDelay: `${orb.animationDelay}s, ${orb.pulseDelay}s`,
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
            transform: translate(0, 0) scale(1) rotate(0deg);
            opacity: 1;
          }
          25% {
            transform: translate(8%, -8%) scale(1.1) rotate(1deg);
            opacity: 0.9;
          }
          50% {
            transform: translate(-8%, 8%) scale(1.15) rotate(-1deg);
            opacity: 0.85;
          }
          75% {
            transform: translate(5%, 5%) scale(1.08) rotate(0.5deg);
            opacity: 0.92;
          }
        }

        @keyframes gradient-shift-reverse {
          0%, 100% {
            transform: translate(0, 0) scale(1) rotate(0deg);
            opacity: 1;
          }
          25% {
            transform: translate(-8%, 8%) scale(1.08) rotate(-1deg);
            opacity: 0.85;
          }
          50% {
            transform: translate(8%, -8%) scale(1.15) rotate(1deg);
            opacity: 0.9;
          }
          75% {
            transform: translate(-5%, -5%) scale(1.1) rotate(-0.5deg);
            opacity: 0.88;
          }
        }

        @keyframes float-orb {
          0%, 100% {
            transform: translate(0, 0) scale(1) rotate(0deg);
          }
          20% {
            transform: translate(80px, -100px) scale(1.15) rotate(15deg);
          }
          40% {
            transform: translate(-70px, -150px) scale(0.85) rotate(-20deg);
          }
          60% {
            transform: translate(-90px, -80px) scale(1.1) rotate(10deg);
          }
          80% {
            transform: translate(60px, -120px) scale(0.95) rotate(-15deg);
          }
        }

        @keyframes pulse-orb {
          0%, 100% {
            opacity: var(--orb-opacity, 0.3);
            filter: blur(2rem);
          }
          50% {
            opacity: calc(var(--orb-opacity, 0.3) * 1.5);
            filter: blur(3rem);
          }
        }

        .animate-gradient-shift {
          animation: gradient-shift 18s ease-in-out infinite;
        }

        .animate-gradient-shift-reverse {
          animation: gradient-shift-reverse 22s ease-in-out infinite;
        }

        .animate-float-orb {
          animation: float-orb var(--duration, 20s) ease-in-out infinite;
        }

        .animate-pulse-orb {
          animation: pulse-orb var(--pulse-duration, 5s) ease-in-out infinite;
        }

        /* Accessibility: Respect prefers-reduced-motion */
        @media (prefers-reduced-motion: reduce) {
          .animate-gradient-shift,
          .animate-gradient-shift-reverse,
          .animate-float-orb,
          .animate-pulse-orb {
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
