import { useEffect, useRef } from 'react';
import { X, Calendar, Clock, DollarSign, Zap, Wrench, CheckCircle, ArrowRight, Users } from 'lucide-react';

export function SolutionDrawer({ entry, onClose, getDeptConfig, DIFFICULTY_CONFIG }) {
  const overlayRef = useRef(null);
  const isOpen = !!entry;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!entry && !isOpen) return null;

  const diff = entry ? (DIFFICULTY_CONFIG[entry.difficulty] || DIFFICULTY_CONFIG.Medium) : null;
  const dept = entry ? getDeptConfig(entry.department) : null;

  const DIFFICULTY_STEPS = {
    Easy: 1,
    Medium: 2,
    Hard: 3,
  };

  return (
    <>
      <div
        ref={overlayRef}
        onClick={onClose}
        className="fixed inset-0 z-40 transition-opacity duration-300"
        style={{
          background: 'rgba(0,0,0,0.65)',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          backdropFilter: 'blur(4px)',
        }}
      />

      <div
        className="fixed inset-y-0 right-0 z-50 flex flex-col overflow-hidden"
        style={{
          width: '100%',
          maxWidth: '560px',
          background: '#0D1424',
          borderLeft: '1px solid rgba(255,255,255,0.1)',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          boxShadow: isOpen ? '-20px 0 60px rgba(0,0,0,0.5)' : 'none',
        }}
      >
        {entry && (
          <>
            {/* Drawer Header */}
            <div
              className="flex-shrink-0 px-6 py-4 flex items-center justify-between"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
            >
              <div className="flex items-center gap-2.5">
                <span
                  className="px-2.5 py-1 rounded-lg text-xs font-bold"
                  style={{ background: dept.bg, color: dept.accent, border: `1px solid ${dept.border}` }}
                >
                  {entry.department}
                </span>
                <span
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold"
                  style={{ background: diff.bg, color: diff.color, border: `1px solid ${diff.border}` }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: diff.dot }} />
                  {entry.difficulty}
                </span>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                style={{ background: 'rgba(255,255,255,0.05)', color: '#475569' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.09)';
                  e.currentTarget.style.color = '#CBD5E1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.color = '#475569';
                }}
              >
                <X size={15} />
              </button>
            </div>

            {/* Drawer Body */}
            <div className="flex-1 overflow-y-auto">
              <div className="px-6 py-6">

                {/* Title */}
                <h2
                  className="text-xl font-black text-white leading-tight mb-5"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  {entry.title}
                </h2>

                {/* Key stats row */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { icon: Clock, label: 'Setup time', value: entry.timeToSetup },
                    { icon: DollarSign, label: 'Cost', value: entry.costRange },
                    { icon: Users, label: 'Business size', value: entry.businessSize },
                  ].map(({ icon: Icon, label, value }) => (
                    <div
                      key={label}
                      className="rounded-xl p-3 flex flex-col gap-1"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                    >
                      <Icon size={13} style={{ color: '#334155' }} />
                      <p className="text-xs" style={{ color: '#475569' }}>{label}</p>
                      <p className="text-xs font-bold text-white leading-tight">{value}</p>
                    </div>
                  ))}
                </div>

                {/* Difficulty meter */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs font-bold uppercase tracking-widest" style={{ color: '#334155' }}>
                      Setup difficulty
                    </p>
                    <span className="text-xs font-semibold" style={{ color: diff.color }}>
                      {entry.difficulty}
                    </span>
                  </div>
                  <div className="flex gap-1.5">
                    {[1, 2, 3].map((step) => {
                      const filled = step <= (DIFFICULTY_STEPS[entry.difficulty] || 1);
                      return (
                        <div
                          key={step}
                          className="flex-1 h-1.5 rounded-full transition-all"
                          style={{
                            background: filled ? diff.color : 'rgba(255,255,255,0.07)',
                          }}
                        />
                      );
                    })}
                  </div>
                </div>

                {/* Problem */}
                <div
                  className="rounded-xl p-4 mb-4"
                  style={{ background: 'rgba(248,113,113,0.06)', border: '1px solid rgba(248,113,113,0.14)' }}
                >
                  <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#F87171' }}>
                    The Problem
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: '#94A3B8' }}>
                    {entry.problem}
                  </p>
                </div>

                {/* Solution */}
                <div
                  className="rounded-xl p-4 mb-4"
                  style={{ background: 'rgba(74,222,128,0.05)', border: '1px solid rgba(74,222,128,0.14)' }}
                >
                  <div className="flex items-center gap-1.5 mb-2">
                    <Zap size={12} style={{ color: '#4ADE80' }} />
                    <p className="text-xs font-bold uppercase tracking-widest" style={{ color: '#4ADE80' }}>
                      The AI Fix
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: '#CBD5E1' }}>
                    {entry.solution}
                  </p>
                </div>

                {/* How it works */}
                <div className="mb-4">
                  <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#334155' }}>
                    How it works
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>
                    {entry.howItWorks}
                  </p>
                </div>

                {/* What you need */}
                <div
                  className="rounded-xl p-4 mb-5"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <div className="flex items-center gap-1.5 mb-2">
                    <CheckCircle size={12} style={{ color: '#38BDF8' }} />
                    <p className="text-xs font-bold uppercase tracking-widest" style={{ color: '#38BDF8' }}>
                      What you need first
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>
                    {entry.whatYouNeed}
                  </p>
                </div>

                {/* Tools */}
                <div
                  className="pt-4"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div className="flex items-center gap-1.5 mb-3">
                    <Wrench size={12} style={{ color: '#334155' }} />
                    <p className="text-xs font-bold uppercase tracking-widest" style={{ color: '#334155' }}>
                      Recommended tools
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {entry.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium"
                        style={{
                          background: 'rgba(255,255,255,0.05)',
                          color: '#94A3B8',
                          border: '1px solid rgba(255,255,255,0.09)',
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Drawer Footer CTA */}
            <div
              className="flex-shrink-0 px-6 py-5"
              style={{ borderTop: '1px solid rgba(255,255,255,0.08)', background: 'rgba(8,12,20,0.8)' }}
            >
              <p className="text-sm font-semibold text-white mb-1">Ready to implement this?</p>
              <p className="text-xs mb-4" style={{ color: '#475569' }}>
                Book a free call and we'll handle the setup for your business — no technical knowledge needed.
              </p>
              <a
                href="https://calendly.com/shawaiznaeem-104/intro-call"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all"
                style={{
                  background: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)',
                  color: 'white',
                  boxShadow: '0 4px 20px rgba(14,165,233,0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 6px 28px rgba(14,165,233,0.45)';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(14,165,233,0.3)';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                <Calendar size={15} />
                Book a free call
                <ArrowRight size={14} />
              </a>
            </div>
          </>
        )}
      </div>
    </>
  );
}
