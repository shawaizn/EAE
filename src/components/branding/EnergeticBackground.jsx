import React, { useState } from 'react';
import { theme } from '../../styles/theme';

/**
 * EnergeticBackground - Dynamic, alive background with visible movement
 *
 * Design Philosophy:
 * - Energy = Life: Constant movement, warm colors, vitality
 * - Lightning Strikes: Sharp accents, geometric shapes, power moments
 * - Brand Colors: Sunrise orange, sky cyan, golden yellow, fresh green
 *
 * Features:
 * - Large floating energy orbs (VISIBLE movement)
 * - Animated geometric shapes
 * - Pulsing gradients
 * - Lightning bolt strikes
 * - Orbiting elements
 */
export function EnergeticBackground() {
  // Large energy orbs (VISIBLE, not subtle)
  const generateEnergyOrbs = () => {
    const orbs = [];
    const brandColors = [
      theme.colors.accent.coral,
      theme.colors.accent.cyan,
      theme.colors.primary.electric,
      theme.colors.accent.cyan,
    ];

    for (let i = 0; i < 12; i++) {
      orbs.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 150 + Math.random() * 250, // LARGER (150-400px)
        delay: Math.random() * 5,
        duration: 12 + Math.random() * 8,
        opacity: 0.25 + Math.random() * 0.35, // MORE VISIBLE (0.25-0.6)
        color: brandColors[i % 4],
        pulseDelay: Math.random() * 3,
      });
    }
    return orbs;
  };

  // Geometric shapes (circles, squares) that move
  const generateGeometricShapes = () => {
    const shapes = [];
    const brandColors = [
      theme.colors.accent.coral,
      theme.colors.accent.cyan,
      theme.colors.primary.electric,
      theme.colors.accent.cyan,
    ];

    for (let i = 0; i < 8; i++) {
      shapes.push({
        id: i,
        type: i % 2 === 0 ? 'circle' : 'square',
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 40 + Math.random() * 80,
        delay: Math.random() * 4,
        duration: 15 + Math.random() * 10,
        rotation: Math.random() * 360,
        color: brandColors[i % 4],
        opacity: 0.15 + Math.random() * 0.2,
      });
    }
    return shapes;
  };

  // Lightning bolts (visible power strikes)
  const generateLightningBolts = () => {
    const bolts = [];
    for (let i = 0; i < 5; i++) {
      bolts.push({
        id: i,
        x: 10 + Math.random() * 80,
        y: Math.random() * 100,
        rotation: -45 + Math.random() * 90,
        length: 120 + Math.random() * 180,
        delay: Math.random() * 6,
        duration: 4 + Math.random() * 3,
      });
    }
    return bolts;
  };

  const [energyOrbs] = useState(generateEnergyOrbs);
  const [geometricShapes] = useState(generateGeometricShapes);
  const [lightningBolts] = useState(generateLightningBolts);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-white via-slate-50 to-white">
      {/* Large pulsing gradient backgrounds (brand colors) */}
      <div className="absolute inset-0">
        {/* Sunrise gradient (warm orange) */}
        <div
          className="absolute w-[800px] h-[800px] rounded-full blur-3xl opacity-20 animate-pulse-glow-1"
          style={{
            background: `radial-gradient(circle, ${theme.colors.accent.coral}40 0%, transparent 70%)`,
            top: '10%',
            left: '15%',
          }}
        />

        {/* Sky gradient (fresh cyan) */}
        <div
          className="absolute w-[900px] h-[900px] rounded-full blur-3xl opacity-20 animate-pulse-glow-2"
          style={{
            background: `radial-gradient(circle, ${theme.colors.accent.cyan}40 0%, transparent 70%)`,
            top: '50%',
            right: '10%',
          }}
        />

        {/* Golden gradient (energy yellow) */}
        <div
          className="absolute w-[700px] h-[700px] rounded-full blur-3xl opacity-15 animate-pulse-glow-3"
          style={{
            background: `radial-gradient(circle, ${theme.colors.primary.electric}40 0%, transparent 70%)`,
            bottom: '15%',
            left: '40%',
          }}
        />

        {/* Fresh gradient (growth green) */}
        <div
          className="absolute w-[750px] h-[750px] rounded-full blur-3xl opacity-15 animate-pulse-glow-4"
          style={{
            background: `radial-gradient(circle, ${theme.colors.accent.cyan}40 0%, transparent 70%)`,
            top: '30%',
            left: '5%',
          }}
        />
      </div>

      {/* Large energy orbs (VISIBLE floating elements) */}
      <div className="absolute inset-0">
        {energyOrbs.map((orb) => (
          <div
            key={orb.id}
            className="absolute rounded-full blur-2xl animate-float-energetic animate-pulse-orb"
            style={{
              left: `${orb.x}%`,
              top: `${orb.y}%`,
              width: `${orb.size}px`,
              height: `${orb.size}px`,
              backgroundColor: orb.color,
              opacity: orb.opacity,
              animationDelay: `${orb.delay}s, ${orb.pulseDelay}s`,
              animationDuration: `${orb.duration}s, 3s`,
            }}
          />
        ))}
      </div>

      {/* Geometric shapes (circles and squares) */}
      <div className="absolute inset-0">
        {geometricShapes.map((shape) => (
          <div
            key={shape.id}
            className={`absolute animate-drift-rotate ${shape.type === 'circle' ? 'rounded-full' : 'rounded-lg'}`}
            style={{
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              width: `${shape.size}px`,
              height: `${shape.size}px`,
              backgroundColor: shape.color,
              opacity: shape.opacity,
              transform: `rotate(${shape.rotation}deg)`,
              animationDelay: `${shape.delay}s`,
              animationDuration: `${shape.duration}s`,
              border: `2px solid ${shape.color}`,
            }}
          />
        ))}
      </div>

      {/* Lightning bolts (sharp power strikes) */}
      <div className="absolute inset-0">
        {lightningBolts.map((bolt) => (
          <div
            key={bolt.id}
            className="absolute animate-lightning-strike"
            style={{
              left: `${bolt.x}%`,
              top: `${bolt.y}%`,
              width: `${bolt.length}px`,
              height: '3px',
              background: `linear-gradient(90deg, transparent, ${theme.colors.accent.cyan}, white, ${theme.colors.accent.cyan}, transparent)`,
              transform: `rotate(${bolt.rotation}deg)`,
              transformOrigin: 'left center',
              boxShadow: `0 0 10px ${theme.colors.accent.cyan}`,
              animationDelay: `${bolt.delay}s`,
              animationDuration: `${bolt.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Animated wave effect */}
      <div className="absolute bottom-0 left-0 right-0 h-64 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 300" preserveAspectRatio="none">
          <path
            className="animate-wave"
            d="M0,100 Q300,150 600,100 T1200,100 L1200,300 L0,300 Z"
            fill={theme.colors.accent.cyan}
            opacity="0.3"
          />
          <path
            className="animate-wave-reverse"
            d="M0,150 Q300,100 600,150 T1200,150 L1200,300 L0,300 Z"
            fill={theme.colors.accent.coral}
            opacity="0.2"
          />
        </svg>
      </div>

      {/* CSS Animations */}
      <style>{`
        /* Floating orbs - visible movement */
        @keyframes float-energetic {
          0%, 100% {
            transform: translate(0, 0) scale(1) rotate(0deg);
          }
          25% {
            transform: translate(100px, -100px) scale(1.15) rotate(10deg);
          }
          50% {
            transform: translate(-80px, -180px) scale(0.85) rotate(-15deg);
          }
          75% {
            transform: translate(-120px, -90px) scale(1.1) rotate(8deg);
          }
        }

        .animate-float-energetic {
          animation: float-energetic var(--duration, 20s) ease-in-out infinite;
        }

        /* Pulsing orbs */
        @keyframes pulse-orb {
          0%, 100% {
            opacity: var(--opacity, 0.4);
          }
          50% {
            opacity: calc(var(--opacity, 0.4) * 1.5);
          }
        }

        .animate-pulse-orb {
          animation: pulse-orb var(--pulse-duration, 3s) ease-in-out infinite;
        }

        /* Geometric shapes drift and rotate */
        @keyframes drift-rotate {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(50px, -70px) rotate(90deg);
          }
          50% {
            transform: translate(-60px, -140px) rotate(180deg);
          }
          75% {
            transform: translate(-90px, -70px) rotate(270deg);
          }
          100% {
            transform: translate(0, 0) rotate(360deg);
          }
        }

        .animate-drift-rotate {
          animation: drift-rotate var(--duration, 20s) linear infinite;
        }

        /* Lightning strikes */
        @keyframes lightning-strike {
          0%, 85%, 100% {
            opacity: 0;
            transform: rotate(var(--rotation)) scaleX(0);
          }
          87% {
            opacity: 1;
            transform: rotate(var(--rotation)) scaleX(1);
          }
          89% {
            opacity: 0.8;
            transform: rotate(var(--rotation)) scaleX(0.9);
          }
          91% {
            opacity: 1;
            transform: rotate(var(--rotation)) scaleX(1);
          }
          93% {
            opacity: 0;
            transform: rotate(var(--rotation)) scaleX(0.7);
          }
        }

        .animate-lightning-strike {
          animation: lightning-strike var(--duration, 5s) ease-in-out infinite;
        }

        /* Large gradient pulse animations */
        @keyframes pulse-glow-1 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.2;
          }
          50% {
            transform: translate(30px, -20px) scale(1.1);
            opacity: 0.3;
          }
        }

        @keyframes pulse-glow-2 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.2;
          }
          50% {
            transform: translate(-40px, 30px) scale(1.15);
            opacity: 0.3;
          }
        }

        @keyframes pulse-glow-3 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.15;
          }
          50% {
            transform: translate(20px, 40px) scale(1.12);
            opacity: 0.25;
          }
        }

        @keyframes pulse-glow-4 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.15;
          }
          50% {
            transform: translate(-30px, -30px) scale(1.08);
            opacity: 0.25;
          }
        }

        .animate-pulse-glow-1 {
          animation: pulse-glow-1 8s ease-in-out infinite;
        }

        .animate-pulse-glow-2 {
          animation: pulse-glow-2 10s ease-in-out infinite;
        }

        .animate-pulse-glow-3 {
          animation: pulse-glow-3 12s ease-in-out infinite;
        }

        .animate-pulse-glow-4 {
          animation: pulse-glow-4 9s ease-in-out infinite;
        }

        /* Wave animations */
        @keyframes wave {
          0% {
            d: path("M0,100 Q300,150 600,100 T1200,100 L1200,300 L0,300 Z");
          }
          50% {
            d: path("M0,150 Q300,100 600,150 T1200,150 L1200,300 L0,300 Z");
          }
          100% {
            d: path("M0,100 Q300,150 600,100 T1200,100 L1200,300 L0,300 Z");
          }
        }

        @keyframes wave-reverse {
          0% {
            d: path("M0,150 Q300,100 600,150 T1200,150 L1200,300 L0,300 Z");
          }
          50% {
            d: path("M0,100 Q300,150 600,100 T1200,100 L1200,300 L0,300 Z");
          }
          100% {
            d: path("M0,150 Q300,100 600,150 T1200,150 L1200,300 L0,300 Z");
          }
        }

        .animate-wave {
          animation: wave 15s ease-in-out infinite;
        }

        .animate-wave-reverse {
          animation: wave-reverse 18s ease-in-out infinite;
        }

        /* Accessibility: Respect prefers-reduced-motion */
        @media (prefers-reduced-motion: reduce) {
          .animate-float-energetic,
          .animate-pulse-orb,
          .animate-drift-rotate,
          .animate-lightning-strike,
          .animate-pulse-glow-1,
          .animate-pulse-glow-2,
          .animate-pulse-glow-3,
          .animate-pulse-glow-4,
          .animate-wave,
          .animate-wave-reverse {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
