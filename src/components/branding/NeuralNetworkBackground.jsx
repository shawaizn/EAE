import React, { useRef, useEffect } from 'react';

/**
 * NeuralNetworkBackground - Dark, tech-focused animated background
 *
 * Features:
 * - Deep navy-black background
 * - Animated grid with neural network nodes
 * - Electric cyan accent lines with glow
 * - Particle flow suggesting computation
 * - Sharp, precise aesthetic (not soft/comfortable)
 */
export function NeuralNetworkBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let nodes = [];
    let particles = [];

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initNodes();
    };

    // Initialize network nodes
    const initNodes = () => {
      nodes = [];
      const cols = Math.floor(canvas.width / 150);
      const rows = Math.floor(canvas.height / 150);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          nodes.push({
            x: (i + 0.5) * (canvas.width / cols) + (Math.random() - 0.5) * 40,
            y: (j + 0.5) * (canvas.height / rows) + (Math.random() - 0.5) * 40,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            connections: [],
            pulse: Math.random() * Math.PI * 2,
          });
        }
      }

      // Initialize particles
      particles = [];
      for (let i = 0; i < 30; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.3,
        });
      }
    };

    // Animation loop
    const animate = (time) => {
      ctx.fillStyle = '#0a0e27'; // Deep navy-black
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Update node position (subtle drift)
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += 0.02;

        // Boundary check
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Find nearby nodes for connections
        node.connections = [];
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - node.x;
          const dy = nodes[j].y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200) {
            node.connections.push({ node: nodes[j], distance });
          }
        }

        // Draw connections
        node.connections.forEach(({ node: connectedNode, distance }) => {
          const opacity = (1 - distance / 200) * 0.3;
          ctx.strokeStyle = `rgba(0, 184, 212, ${opacity})`; // Electric cyan
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(connectedNode.x, connectedNode.y);
          ctx.stroke();
        });

        // Draw node with pulse effect
        const pulseSize = 2 + Math.sin(node.pulse) * 1;
        const pulseOpacity = 0.6 + Math.sin(node.pulse) * 0.4;

        // Outer glow
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#00B8D4';
        ctx.fillStyle = `rgba(0, 184, 212, ${pulseOpacity})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseSize + 2, 0, Math.PI * 2);
        ctx.fill();

        // Inner core
        ctx.shadowBlur = 5;
        ctx.fillStyle = `rgba(255, 255, 255, ${pulseOpacity * 0.8})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseSize, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowBlur = 0;
      });

      // Update and draw particles
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle with glow
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#00B8D4';
        ctx.fillStyle = `rgba(0, 184, 212, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    if (!prefersReducedMotion) {
      animate(0);
    } else {
      // Static render for reduced motion
      ctx.fillStyle = '#0a0e27';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Canvas for neural network animation */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 184, 212, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 184, 212, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Vignette effect for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#0a0e27]/50" />

      <style>{`
        .bg-gradient-radial {
          background: radial-gradient(circle at center, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
}
