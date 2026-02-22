import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { LogoHorizontal } from '../components/branding/Logo';
import { BookOpen, Target, Cpu, Zap, LogOut, ArrowRight, Lock, X, Shield } from 'lucide-react';

function ComingSoonModal({ title, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <X size={20} />
        </button>
        <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
          <Lock size={22} className="text-slate-400" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          This area is currently in development. Check back soon.
        </p>
        <button
          onClick={onClose}
          className="mt-6 px-6 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-700 transition-colors"
        >
          Got it
        </button>
      </div>
    </div>
  );
}

function EducationTile({ onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative overflow-hidden w-full h-full rounded-2xl transition-all duration-300"
      style={{
        background: '#0F172A',
        boxShadow: hovered
          ? '0 24px 48px -8px rgba(8,145,178,0.35), 0 0 0 1px rgba(8,145,178,0.2)'
          : '0 4px 16px -2px rgba(0,0,0,0.2)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
      }}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(8,145,178,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(8,145,178,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
        }}
      />
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, #0891b2 0%, transparent 70%)',
          transform: 'translate(30%, -30%)',
        }}
      />

      <div className="relative z-10 p-10 h-full flex flex-col items-center justify-center min-h-[260px] gap-5">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center"
          style={{ background: 'rgba(8,145,178,0.2)', border: '1px solid rgba(8,145,178,0.3)' }}
        >
          <BookOpen size={28} className="text-cyan-400" />
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-black text-white mb-3" style={{ letterSpacing: '-0.02em' }}>
            AI Education
          </h2>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase"
            style={{ background: 'rgba(8,145,178,0.15)', color: '#22D3EE', border: '1px solid rgba(8,145,178,0.3)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Available Now
          </div>
        </div>

        <div
          className="flex items-center gap-1.5 text-cyan-400 text-sm font-semibold transition-transform duration-200"
          style={{ transform: hovered ? 'translateX(4px)' : 'translateX(0)' }}
        >
          Enter <ArrowRight size={16} />
        </div>
      </div>
    </button>
  );
}

function StrategyTile({ onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative overflow-hidden w-full h-full rounded-2xl transition-all duration-300"
      style={{
        background: hovered ? '#1a1a2e' : '#12121f',
        boxShadow: hovered
          ? '0 24px 48px -8px rgba(217,119,6,0.25), 0 0 0 1px rgba(217,119,6,0.15)'
          : '0 4px 16px -2px rgba(0,0,0,0.2)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute bottom-0 left-0 w-full h-1 transition-all duration-500"
          style={{
            background: 'linear-gradient(90deg, transparent, #D97706, #F59E0B, transparent)',
            opacity: hovered ? 1 : 0.4,
          }}
        />
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute border border-amber-500/10 rounded-full"
            style={{
              width: `${(i + 1) * 120}px`,
              height: `${(i + 1) * 120}px`,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              opacity: hovered ? 0.15 : 0.06,
              transition: 'opacity 0.4s ease',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 p-10 h-full flex flex-col items-center justify-center min-h-[260px] gap-5">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center"
          style={{ background: 'rgba(217,119,6,0.12)', border: '1px solid rgba(217,119,6,0.2)' }}
        >
          <Target size={28} style={{ color: '#F59E0B' }} />
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-black text-white mb-3" style={{ letterSpacing: '-0.02em' }}>
            AI Strategy
          </h2>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase"
            style={{ background: 'rgba(217,119,6,0.12)', color: '#F59E0B', border: '1px solid rgba(217,119,6,0.25)' }}
          >
            <Lock size={10} />
            Coming Soon
          </div>
        </div>
      </div>
    </button>
  );
}

function SolutionsTile({ onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative overflow-hidden w-full h-full rounded-2xl transition-all duration-300"
      style={{
        background: 'linear-gradient(135deg, #0c1a0c 0%, #0d1a14 50%, #0a1520 100%)',
        boxShadow: hovered
          ? '0 24px 48px -8px rgba(16,185,129,0.2), 0 0 0 1px rgba(16,185,129,0.15)'
          : '0 4px 16px -2px rgba(0,0,0,0.2)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0" />
              <stop offset="50%" stopColor="#10B981" stopOpacity="1" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[0, 1, 2, 3, 4].map((i) => (
            <line
              key={i}
              x1={i * 90}
              y1="0"
              x2={i * 90 + 200}
              y2="300"
              stroke="url(#lineGrad)"
              strokeWidth="1"
              opacity={hovered ? 0.8 : 0.4}
              style={{ transition: 'opacity 0.4s ease' }}
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 p-10 h-full flex flex-col items-center justify-center min-h-[260px] gap-5">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center"
          style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)' }}
        >
          <Cpu size={28} style={{ color: '#34D399' }} />
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-black text-white mb-3" style={{ letterSpacing: '-0.02em' }}>
            AI Solutions
          </h2>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase"
            style={{ background: 'rgba(16,185,129,0.1)', color: '#34D399', border: '1px solid rgba(16,185,129,0.2)' }}
          >
            <Lock size={10} />
            Coming Soon
          </div>
        </div>
      </div>
    </button>
  );
}

function SecurityTile({ onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative overflow-hidden w-full h-full rounded-2xl transition-all duration-300"
      style={{
        background: 'linear-gradient(135deg, #0c1428 0%, #0d1a28 50%, #0a1a28 100%)',
        boxShadow: hovered
          ? '0 24px 48px -8px rgba(59,130,246,0.2), 0 0 0 1px rgba(59,130,246,0.15)'
          : '0 4px 16px -2px rgba(0,0,0,0.2)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="securityGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="1" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[0, 1, 2, 3, 4].map((i) => (
            <line
              key={i}
              x1={i * 90}
              y1="0"
              x2={i * 90 + 200}
              y2="300"
              stroke="url(#securityGrad)"
              strokeWidth="1"
              opacity={hovered ? 0.8 : 0.4}
              style={{ transition: 'opacity 0.4s ease' }}
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 p-10 h-full flex flex-col items-center justify-center min-h-[260px] gap-5">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center"
          style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)' }}
        >
          <Shield size={28} style={{ color: '#60A5FA' }} />
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-black text-white mb-3" style={{ letterSpacing: '-0.02em' }}>
            AI Security
          </h2>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase"
            style={{ background: 'rgba(59,130,246,0.1)', color: '#60A5FA', border: '1px solid rgba(59,130,246,0.2)' }}
          >
            <Lock size={10} />
            Coming Soon
          </div>
        </div>
      </div>
    </button>
  );
}

function IrreplacibleTile({ onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative overflow-hidden w-full h-full rounded-2xl transition-all duration-300"
      style={{
        background: 'linear-gradient(145deg, #1a0f0a 0%, #1f1208 50%, #1a1008 100%)',
        boxShadow: hovered
          ? '0 24px 48px -8px rgba(245,158,11,0.2), 0 0 0 1px rgba(245,158,11,0.12)'
          : '0 4px 16px -2px rgba(0,0,0,0.2)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: `radial-gradient(ellipse at 80% 20%, rgba(245,158,11,0.08) 0%, transparent 60%)` }}
        />
        <div
          className="absolute bottom-0 right-0 w-48 h-48 rounded-full opacity-5"
          style={{
            background: 'radial-gradient(circle, #F59E0B 0%, transparent 70%)',
            transform: 'translate(20%, 20%)',
          }}
        />
      </div>

      <div className="relative z-10 p-10 h-full flex flex-col items-center justify-center min-h-[260px] gap-5">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center"
          style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.15)' }}
        >
          <Zap size={28} style={{ color: '#FCD34D' }} />
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-black text-white mb-3" style={{ letterSpacing: '-0.02em' }}>
            Irreplaceable Skills
          </h2>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase"
            style={{ background: 'rgba(245,158,11,0.08)', color: '#FCD34D', border: '1px solid rgba(245,158,11,0.18)' }}
          >
            <Lock size={10} />
            Coming Soon
          </div>
        </div>
      </div>
    </button>
  );
}

export function HubPage() {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();
  const [comingSoonTitle, setComingSoonTitle] = useState(null);

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <div
      className="min-h-screen w-full relative overflow-x-hidden"
      style={{ background: '#080C14' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 20% 0%, rgba(8,145,178,0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 100%, rgba(30,64,175,0.06) 0%, transparent 50%)
          `,
        }}
      />

      <nav className="relative z-20 flex items-center justify-between px-6 sm:px-10 h-16 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
        <LogoHorizontal size="sm" whiteMode={true} />
        <div className="flex items-center gap-4">
          {user?.email && (
            <span className="hidden sm:block text-xs text-slate-500 font-medium">{user.email}</span>
          )}
          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors px-3 py-1.5 rounded-lg hover:bg-white/5"
          >
            <LogOut size={15} />
            <span className="hidden sm:inline">Sign out</span>
          </button>
        </div>
      </nav>

      <main className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="relative h-72 sm:h-80 lg:h-96">
          {/* Center: AI Education */}
          <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 z-20">
            <EducationTile onClick={() => navigate('/progress')} />
          </div>

          {/* Top Left: AI Strategy */}
          <div className="absolute top-0 left-0 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 z-10">
            <StrategyTile onClick={() => navigate('/ai-strategy')} />
          </div>

          {/* Top Right: AI Solutions */}
          <div className="absolute top-0 right-0 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 z-10">
            <SolutionsTile onClick={() => navigate('/ai-solutions')} />
          </div>

          {/* Bottom Left: AI Security */}
          <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 z-10">
            <SecurityTile onClick={() => navigate('/ai-security')} />
          </div>

          {/* Bottom Right: Irreplaceable Skills */}
          <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 z-10">
            <IrreplacibleTile onClick={() => setComingSoonTitle('Irreplaceable Skills')} />
          </div>
        </div>
      </main>

      {comingSoonTitle && (
        <ComingSoonModal title={comingSoonTitle} onClose={() => setComingSoonTitle(null)} />
      )}
    </div>
  );
}
