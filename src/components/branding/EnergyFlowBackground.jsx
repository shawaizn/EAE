import React, { useState } from 'react';
import { theme } from '../../styles/theme';

/**
 * EnergyFlowBackground - Organic flow + lightning strikes
 *
 * Design Philosophy:
 * - Base: Flowing, warm, organic (sunrise energy)
 * - Accents: Sharp, powerful lightning strikes
 * - Feeling: "Natural energy with moments of concentrated power"
 *
 * Easy to customize via theme.js
 */
export function EnergyFlowBackground() {
  // Generate energy particles (subtle, organic)
  const generateParticles = () => {
    const particles = [];
    const count = 25;

    for (let i = 0; i < count; i++) {
      particles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 60 + Math.random() * 120,
        delay: Math.random() * 8,
        duration: 15 + Math.random() * 10,
        opacity: 0.15 + Math.random() * 0.25,
        color: i % 3 === 0 ? theme.colors.energy.sunrise :
               i % 3 === 1 ? theme.colors.energy.sky :
               theme.colors.energy.golden,
      });
    }
    return particles;
  };

  // Generate lightning strikes (sharp, geometric)
  const generateLightningStrikes = () => {
    const strikes = [];
    const count = 6;

    for (let i = 0; i < count; i++) {
      strikes.push({
        id: i,
        x: 20 + Math.random() * 60,
        y: Math.random() * 100,
        rotation: -30 + Math.random() * 60,
        length: 100 + Math.random() * 200,
        width: 1 + Math.random() * 2,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 2,
      });
    }
    return strikes;
  };

  const [particles] = useState(generateParticles);
  const [lightningStrikes] = useState(generateLightningStrikes);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-white">
      {/* Organic flowing gradients (sunrise energy) */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 animate-flow-gradient"
          style={{
            background: `radial-gradient(circle at 20% 30%, ${theme.colors.energy.sunrise}15 0%, transparent 50%),
                        radial-gradient(circle at 80% 70%, ${theme.colors.energy.sky}15 0%, transparent 50%),
                        radial-gradient(circle at 50% 50%, ${theme.colors.energy.golden}10 0%, transparent 60%)`,
          }}
        />
      </div>

      {/* Flowing energy particles (organic) */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full blur-3xl animate-float-smooth"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              backgroundColor: particle.color,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Lightning strikes (sharp, powerful accents) */}
      <div className="absolute inset-0 opacity-10">
        {lightningStrikes.map((strike) => (
          <div
            key={strike.id}
            className="absolute animate-lightning-flash"
            style={{
              left: `${strike.x}%`,
              top: `${strike.y}%`,
              width: `${strike.length}px`,
              height: `${strike.width}px`,
              background: `linear-gradient(90deg, transparent, ${theme.colors.lightning.cyan}, transparent)`,
              transform: `rotate(${strike.rotation}deg)`,
              transformOrigin: 'left center',
              animationDelay: `${strike.delay}s`,
              animationDuration: `${strike.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Subtle geometric overlay (lightning grid - very faint) */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(${theme.colors.lightning.cyan} 1px, transparent 1px),
              linear-gradient(90deg, ${theme.colors.lightning.cyan} 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes flow-gradient {
          0%, 100% {
            transform: translate(0, 0) scale(1) rotate(0deg);
            opacity: 1;
          }
          33% {
            transform: translate(5%, -5%) scale(1.1) rotate(2deg);
            opacity: 0.9;
          }
          66% {
            transform: translate(-5%, 5%) scale(1.05) rotate(-2deg);
            opacity: 0.95;
          }
        }

        @keyframes float-smooth {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(60px, -80px) scale(1.1);
          }
          50% {
            transform: translate(-50px, -120px) scale(0.9);
          }
          75% {
            transform: translate(-80px, -60px) scale(1.05);
          }
        }

        @keyframes lightning-flash {
          0%, 90%, 100% {
            opacity: 0;
            transform: scaleX(0) rotate(var(--rotation));
          }
          92% {
            opacity: 1;
            transform: scaleX(1) rotate(var(--rotation));
          }
          96% {
            opacity: 0;
            transform: scaleX(0.8) rotate(var(--rotation));
          }
        }

        .animate-flow-gradient {
          animation: flow-gradient 20s ease-in-out infinite;
        }

        .animate-float-smooth {
          animation: float-smooth var(--duration, 20s) ease-in-out infinite;
        }

        .animate-lightning-flash {
          animation: lightning-flash var(--duration, 5s) ease-in-out infinite;
        }

        /* Accessibility: Respect prefers-reduced-motion */
        @media (prefers-reduced-motion: reduce) {
          .animate-flow-gradient,
          .animate-float-smooth,
          .animate-lightning-flash {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
