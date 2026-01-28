import React, { useEffect, useState } from 'react';

export function AnimatedLoginBackground() {
  // Generate random positions for logos
  const generateLogos = () => {
    const logos = [];
    const count = 12; // Number of logos

    for (let i = 0; i < count; i++) {
      logos.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 40 + Math.random() * 60,
        animationDelay: Math.random() * 5,
        floatDuration: 15 + Math.random() * 10,
        opacity: 0.1 + Math.random() * 0.3,
      });
    }
    return logos;
  };

  const [logos] = useState(generateLogos);

  return (
    <div className="fixed inset-0 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 via-transparent to-slate-900/50 animate-pulse"
           style={{ animationDuration: '8s' }} />

      {/* Electric grid lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#14b8a6" strokeWidth="0.5" />
          </pattern>

          {/* Lightning bolt filter for glow effect */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Animated electric lines */}
        <ElectricLines logos={logos} />
      </svg>

      {/* Floating logos */}
      <div className="absolute inset-0">
        {logos.map((logo) => (
          <div
            key={logo.id}
            className="absolute"
            style={{
              left: `${logo.x}%`,
              top: `${logo.y}%`,
              animation: `float ${logo.floatDuration}s ease-in-out infinite`,
              animationDelay: `${logo.animationDelay}s`,
            }}
          >
            <FloatingLogo size={logo.size} opacity={logo.opacity} delay={logo.animationDelay} />
          </div>
        ))}
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(20px, -30px) rotate(5deg);
          }
          50% {
            transform: translate(-15px, -50px) rotate(-5deg);
          }
          75% {
            transform: translate(-25px, -25px) rotate(3deg);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            filter: drop-shadow(0 0 2px #14b8a6) drop-shadow(0 0 8px #14b8a6);
            opacity: 0.6;
          }
          50% {
            filter: drop-shadow(0 0 8px #14b8a6) drop-shadow(0 0 20px #14b8a6);
            opacity: 1;
          }
        }

        @keyframes electric-flow {
          0% {
            stroke-dashoffset: 1000;
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
}

// Floating Logo Component with pulse/glow animation
function FloatingLogo({ size, opacity, delay }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 140 140"
      style={{
        opacity,
        animation: `pulse-glow 3s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      {/* Top arc - teal */}
      <path
        d="M 25 70 A 45 45 0 0 1 115 70"
        stroke="#14b8a6"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Bottom arc - charcoal */}
      <path
        d="M 115 70 A 45 45 0 0 1 25 70"
        stroke="#1e293b"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Activation dot */}
      <circle cx="110" cy="38" r="2.5" fill="#14b8a6" />
      {/* Radiating lines */}
      <line x1="110" y1="32" x2="110" y2="20" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="116" y1="38" x2="128" y2="38" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="114" y1="34" x2="122" y2="26" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" />

      {/* Solid geometric E inside loop */}
      <rect x="52" y="52" width="8" height="36" fill="#1e293b" rx="1" />
      <rect x="52" y="52" width="30" height="7" fill="#1e293b" rx="1" />
      <rect x="52" y="67" width="26" height="6" fill="#1e293b" rx="1" />
      <rect x="52" y="81" width="30" height="7" fill="#1e293b" rx="1" />
    </svg>
  );
}

// Electric Lines connecting logos
function ElectricLines({ logos }) {
  // Create connections between nearby logos
  const connections = [];

  for (let i = 0; i < logos.length; i++) {
    for (let j = i + 1; j < logos.length; j++) {
      const distance = Math.sqrt(
        Math.pow(logos[i].x - logos[j].x, 2) +
        Math.pow(logos[i].y - logos[j].y, 2)
      );

      // Only connect logos that are reasonably close
      if (distance < 40 && Math.random() > 0.7) {
        connections.push({
          x1: `${logos[i].x}%`,
          y1: `${logos[i].y}%`,
          x2: `${logos[j].x}%`,
          y2: `${logos[j].y}%`,
          delay: Math.random() * 5,
        });
      }
    }
  }

  return (
    <>
      {connections.map((conn, idx) => (
        <line
          key={idx}
          x1={conn.x1}
          y1={conn.y1}
          x2={conn.x2}
          y2={conn.y2}
          stroke="#14b8a6"
          strokeWidth="1"
          strokeDasharray="5,5"
          opacity="0.4"
          filter="url(#glow)"
          style={{
            animation: `electric-flow 3s linear infinite`,
            animationDelay: `${conn.delay}s`,
          }}
        />
      ))}
    </>
  );
}
