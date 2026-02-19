import { useState, useMemo, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Search, X, Calendar,
  ChevronRight, Building2, Users,
  BarChart3, Megaphone, Briefcase, Settings,
  UserCheck, Monitor, TrendingUp, Shield, DollarSign, ArrowRight,
} from 'lucide-react';
import { LogoHorizontal } from '../components/branding/Logo';
import { toolkitEntries, departments } from '../data/aitoolkitData';
import { SolutionDrawer } from '../components/features/SolutionDrawer';

const DEPT_ALL = 'All';
const DIFF_ALL = 'All';

const DIFFICULTY_CONFIG = {
  Easy: { color: '#4ADE80', bg: 'rgba(74,222,128,0.1)', border: 'rgba(74,222,128,0.25)', dot: '#4ADE80', label: 'Easy' },
  Medium: { color: '#FCD34D', bg: 'rgba(252,211,77,0.1)', border: 'rgba(252,211,77,0.25)', dot: '#FCD34D', label: 'Medium' },
  Hard: { color: '#F87171', bg: 'rgba(248,113,113,0.1)', border: 'rgba(248,113,113,0.25)', dot: '#F87171', label: 'Hard' },
};

const DEPT_CONFIG = {
  'Customer Service': { accent: '#0EA5E9', bg: 'rgba(14,165,233,0.08)', border: 'rgba(14,165,233,0.18)', glow: 'rgba(14,165,233,0.06)', icon: Users },
  'Sales': { accent: '#10B981', bg: 'rgba(16,185,129,0.08)', border: 'rgba(16,185,129,0.18)', glow: 'rgba(16,185,129,0.06)', icon: TrendingUp },
  'Sales / Marketing': { accent: '#10B981', bg: 'rgba(16,185,129,0.08)', border: 'rgba(16,185,129,0.18)', glow: 'rgba(16,185,129,0.06)', icon: TrendingUp },
  'Sales / Admin': { accent: '#10B981', bg: 'rgba(16,185,129,0.08)', border: 'rgba(16,185,129,0.18)', glow: 'rgba(16,185,129,0.06)', icon: TrendingUp },
  'Marketing': { accent: '#F59E0B', bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.18)', glow: 'rgba(245,158,11,0.06)', icon: Megaphone },
  'Marketing / Sales': { accent: '#F59E0B', bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.18)', glow: 'rgba(245,158,11,0.06)', icon: Megaphone },
  'Operations': { accent: '#8B5CF6', bg: 'rgba(139,92,246,0.08)', border: 'rgba(139,92,246,0.18)', glow: 'rgba(139,92,246,0.06)', icon: Settings },
  'Operations / Project Management': { accent: '#8B5CF6', bg: 'rgba(139,92,246,0.08)', border: 'rgba(139,92,246,0.18)', glow: 'rgba(139,92,246,0.06)', icon: Settings },
  'Operations / HR': { accent: '#8B5CF6', bg: 'rgba(139,92,246,0.08)', border: 'rgba(139,92,246,0.18)', glow: 'rgba(139,92,246,0.06)', icon: Settings },
  'Operations / Marketing': { accent: '#8B5CF6', bg: 'rgba(139,92,246,0.08)', border: 'rgba(139,92,246,0.18)', glow: 'rgba(139,92,246,0.06)', icon: Settings },
  'Operations / Finance': { accent: '#8B5CF6', bg: 'rgba(139,92,246,0.08)', border: 'rgba(139,92,246,0.18)', glow: 'rgba(139,92,246,0.06)', icon: Settings },
  'Operations / Admin': { accent: '#8B5CF6', bg: 'rgba(139,92,246,0.08)', border: 'rgba(139,92,246,0.18)', glow: 'rgba(139,92,246,0.06)', icon: Settings },
  'Finance / Admin': { accent: '#EC4899', bg: 'rgba(236,72,153,0.08)', border: 'rgba(236,72,153,0.18)', glow: 'rgba(236,72,153,0.06)', icon: DollarSign },
  'Admin / Finance': { accent: '#EC4899', bg: 'rgba(236,72,153,0.08)', border: 'rgba(236,72,153,0.18)', glow: 'rgba(236,72,153,0.06)', icon: DollarSign },
  'Admin': { accent: '#EC4899', bg: 'rgba(236,72,153,0.08)', border: 'rgba(236,72,153,0.18)', glow: 'rgba(236,72,153,0.06)', icon: Briefcase },
  'HR': { accent: '#06B6D4', bg: 'rgba(6,182,212,0.08)', border: 'rgba(6,182,212,0.18)', glow: 'rgba(6,182,212,0.06)', icon: UserCheck },
  'Management': { accent: '#F97316', bg: 'rgba(249,115,22,0.08)', border: 'rgba(249,115,22,0.18)', glow: 'rgba(249,115,22,0.06)', icon: BarChart3 },
  'IT / Admin': { accent: '#64748B', bg: 'rgba(100,116,139,0.08)', border: 'rgba(100,116,139,0.18)', glow: 'rgba(100,116,139,0.06)', icon: Monitor },
  'Project Management / Operations': { accent: '#8B5CF6', bg: 'rgba(139,92,246,0.08)', border: 'rgba(139,92,246,0.18)', glow: 'rgba(139,92,246,0.06)', icon: Settings },
  'Project Management / Client Services': { accent: '#0EA5E9', bg: 'rgba(14,165,233,0.08)', border: 'rgba(14,165,233,0.18)', glow: 'rgba(14,165,233,0.06)', icon: Briefcase },
  'Customer Service / Operations': { accent: '#0EA5E9', bg: 'rgba(14,165,233,0.08)', border: 'rgba(14,165,233,0.18)', glow: 'rgba(14,165,233,0.06)', icon: Users },
  'Customer Service / Product': { accent: '#0EA5E9', bg: 'rgba(14,165,233,0.08)', border: 'rgba(14,165,233,0.18)', glow: 'rgba(14,165,233,0.06)', icon: Users },
  'Sales / Legal': { accent: '#10B981', bg: 'rgba(16,185,129,0.08)', border: 'rgba(16,185,129,0.18)', glow: 'rgba(16,185,129,0.06)', icon: Shield },
  'Sales / Operations': { accent: '#10B981', bg: 'rgba(16,185,129,0.08)', border: 'rgba(16,185,129,0.18)', glow: 'rgba(16,185,129,0.06)', icon: TrendingUp },
};

function getDeptConfig(dept) {
  return DEPT_CONFIG[dept] || { accent: '#64748B', bg: 'rgba(100,116,139,0.08)', border: 'rgba(100,116,139,0.18)', glow: 'rgba(100,116,139,0.06)', icon: Building2 };
}

function SolutionCard({ entry, onClick }) {
  const [hovered, setHovered] = useState(false);
  const diff = DIFFICULTY_CONFIG[entry.difficulty] || DIFFICULTY_CONFIG.Medium;
  const dept = getDeptConfig(entry.department);
  const Icon = dept.icon;

  return (
    <button
      onClick={() => onClick(entry)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-full text-left rounded-2xl transition-all duration-300 flex flex-col"
      style={{
        background: hovered
          ? `linear-gradient(160deg, ${dept.glow} 0%, rgba(255,255,255,0.04) 100%)`
          : 'rgba(255,255,255,0.03)',
        border: `1px solid ${hovered ? dept.border : 'rgba(255,255,255,0.07)'}`,
        boxShadow: hovered ? `0 8px 32px rgba(0,0,0,0.25), 0 0 0 1px ${dept.border}` : 'none',
        transform: hovered ? 'translateY(-2px)' : 'none',
        minHeight: '220px',
      }}
    >
      <div
        className="h-1 w-full rounded-t-2xl"
        style={{ background: hovered ? dept.accent : 'transparent', transition: 'background 0.3s' }}
      />

      <div className="flex flex-col flex-1 p-6 gap-4">
        <div className="flex items-start justify-between gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: dept.bg, border: `1px solid ${dept.border}` }}
          >
            <Icon size={18} style={{ color: dept.accent }} />
          </div>
          <div className="flex items-center gap-1.5 flex-shrink-0 mt-0.5">
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: diff.dot }}
            />
            <span className="text-xs font-medium" style={{ color: diff.color }}>{entry.difficulty}</span>
          </div>
        </div>

        <div className="flex-1">
          <p className="text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: dept.accent }}>
            {entry.department}
          </p>
          <h3
            className="font-bold text-white leading-snug mb-3"
            style={{ fontSize: '0.95rem', letterSpacing: '-0.01em' }}
          >
            {entry.title}
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: '#4B5563' }}>
            {entry.solution}
          </p>
        </div>

        <div className="flex items-center justify-end pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <ChevronRight
            size={15}
            className="flex-shrink-0 transition-all duration-200"
            style={{
              color: hovered ? dept.accent : '#1E293B',
              transform: hovered ? 'translateX(2px)' : 'none',
            }}
          />
        </div>
      </div>
    </button>
  );
}

function FilterPill({ label, count, active, accent, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 whitespace-nowrap flex-shrink-0"
      style={{
        background: active ? 'rgba(14,165,233,0.12)' : 'rgba(255,255,255,0.04)',
        color: active ? '#38BDF8' : '#475569',
        border: active ? '1px solid rgba(14,165,233,0.25)' : '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {label}
      {count !== undefined && (
        <span
          className="px-1.5 py-0.5 rounded-md text-xs font-bold"
          style={{
            background: active ? 'rgba(14,165,233,0.2)' : 'rgba(255,255,255,0.06)',
            color: active ? '#38BDF8' : '#334155',
          }}
        >
          {count}
        </span>
      )}
    </button>
  );
}

export function AISolutions() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [activeDept, setActiveDept] = useState(DEPT_ALL);
  const [activeDiff, setActiveDiff] = useState(DIFF_ALL);
  const [selectedEntry, setSelectedEntry] = useState(null);

  const deptCounts = useMemo(() => {
    const counts = {};
    toolkitEntries.forEach((e) => {
      const match = departments.find(
        (d) => d !== 'All' && e.department.toLowerCase().includes(d.toLowerCase())
      );
      if (match) counts[match] = (counts[match] || 0) + 1;
    });
    return counts;
  }, []);

  const filtered = useMemo(() => {
    return toolkitEntries.filter((entry) => {
      const matchesDept =
        activeDept === DEPT_ALL ||
        entry.department.toLowerCase().includes(activeDept.toLowerCase());
      const matchesDiff = activeDiff === DIFF_ALL || entry.difficulty === activeDiff;
      const q = search.toLowerCase().trim();
      const matchesSearch =
        !q ||
        entry.title.toLowerCase().includes(q) ||
        entry.problem.toLowerCase().includes(q) ||
        entry.solution.toLowerCase().includes(q) ||
        entry.department.toLowerCase().includes(q) ||
        entry.tools.some((t) => t.toLowerCase().includes(q));
      return matchesDept && matchesDiff && matchesSearch;
    });
  }, [search, activeDept, activeDiff]);

  const hasFilters = activeDept !== DEPT_ALL || activeDiff !== DIFF_ALL || search;

  const clearAll = useCallback(() => {
    setActiveDept(DEPT_ALL);
    setActiveDiff(DIFF_ALL);
    setSearch('');
  }, []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setSelectedEntry(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="min-h-screen w-full pb-32" style={{ background: '#080C14' }}>
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 80% 50% at 50% -10%, rgba(14,165,233,0.06) 0%, transparent 60%),
            radial-gradient(ellipse at 0% 100%, rgba(16,185,129,0.04) 0%, transparent 50%),
            radial-gradient(ellipse at 100% 100%, rgba(245,158,11,0.04) 0%, transparent 50%)
          `,
        }}
      />

      {/* Nav */}
      <nav
        className="relative z-20 flex items-center justify-between px-6 sm:px-10 h-16 border-b"
        style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(8,12,20,0.9)', backdropFilter: 'blur(12px)' }}
      >
        <button
          onClick={() => navigate('/hub')}
          className="flex items-center gap-2 text-sm font-medium transition-colors"
          style={{ color: '#475569' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#CBD5E1')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}
        >
          <ArrowLeft size={16} />
          Back
        </button>
        <LogoHorizontal size="sm" />
        <div style={{ width: 60 }} />
      </nav>

      {/* Hero */}
      <div className="relative z-10 px-4 sm:px-6 pt-20 pb-16 text-center">
        <p
          className="text-xs font-bold uppercase tracking-widest mb-6"
          style={{ color: '#0EA5E9', letterSpacing: '0.2em' }}
        >
          AI Toolkit for SMEs
        </p>
        <h1
          className="text-4xl sm:text-6xl font-black text-white mb-6 mx-auto"
          style={{ letterSpacing: '-0.04em', lineHeight: 1.05, maxWidth: '640px' }}
        >
          Pick your fix.
        </h1>
        <p
          className="text-base sm:text-lg mb-12 mx-auto"
          style={{ color: '#4B5563', maxWidth: '480px', lineHeight: 1.6 }}
        >
          60 common business problems, each mapped to a proven AI solution you can start using this week.
        </p>

        {/* Search */}
        <div className="relative mx-auto" style={{ maxWidth: '540px' }}>
          <Search
            size={17}
            className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
            style={{ color: '#334155' }}
          />
          <input
            type="text"
            placeholder="Search by problem, tool, or department..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-10 py-4 rounded-2xl text-sm outline-none text-white placeholder-slate-600"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              fontSize: '0.9rem',
            }}
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 transition-colors"
              style={{ color: '#475569' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#94A3B8')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}
            >
              <X size={15} />
            </button>
          )}
        </div>
      </div>

      {/* Filters + Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">

        {/* Filter pills */}
        <div
          className="sticky top-0 z-10 py-4"
          style={{ background: 'linear-gradient(to bottom, #080C14 70%, transparent)' }}
        >
          <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <FilterPill
              label="Any difficulty"
              active={activeDiff === DIFF_ALL}
              onClick={() => setActiveDiff(DIFF_ALL)}
            />
            {['Easy', 'Medium'].map((d) => (
              <FilterPill
                key={d}
                label={d}
                active={activeDiff === d}
                onClick={() => setActiveDiff(d)}
              />
            ))}
            <div className="w-px flex-shrink-0 self-stretch my-1 mx-1" style={{ background: 'rgba(255,255,255,0.07)' }} />
            {departments.map((dept) => (
              <FilterPill
                key={dept}
                label={dept}
                count={dept === 'All' ? toolkitEntries.length : deptCounts[dept]}
                active={activeDept === dept}
                onClick={() => setActiveDept(dept)}
              />
            ))}
          </div>
        </div>

        {/* Results bar */}
        <div className="flex items-center justify-between mb-8 mt-2">
          <p className="text-sm" style={{ color: '#334155' }}>
            <span className="font-bold text-white">{filtered.length}</span>
            <span> of {toolkitEntries.length} solutions</span>
            {activeDept !== DEPT_ALL && (
              <span style={{ color: '#38BDF8' }}> — {activeDept}</span>
            )}
          </p>
          {hasFilters && (
            <button
              onClick={clearAll}
              className="text-xs font-semibold flex items-center gap-1.5 transition-colors"
              style={{ color: '#475569' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#94A3B8')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}
            >
              <X size={12} />
              Clear
            </button>
          )}
        </div>

        {/* Card Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <Search size={22} style={{ color: '#334155' }} />
            </div>
            <p className="font-bold text-white mb-2">No solutions found</p>
            <p className="text-sm mb-6" style={{ color: '#475569' }}>Try a different term or clear your filters</p>
            <button
              onClick={clearAll}
              className="text-sm font-semibold transition-colors"
              style={{ color: '#38BDF8' }}
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((entry) => (
              <SolutionCard key={entry.id} entry={entry} onClick={setSelectedEntry} />
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div
          className="mt-24 rounded-3xl overflow-hidden"
          style={{ border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <div
            className="px-8 sm:px-16 py-16 text-center"
            style={{
              background: 'linear-gradient(160deg, rgba(14,165,233,0.06) 0%, rgba(8,12,20,1) 60%)',
            }}
          >
            <h2
              className="text-3xl sm:text-4xl font-black text-white mb-4"
              style={{ letterSpacing: '-0.03em' }}
            >
              Get it built for you.
            </h2>
            <p className="text-base mb-10 mx-auto" style={{ color: '#4B5563', maxWidth: '400px', lineHeight: 1.6 }}>
              Found a problem that fits? Book a free call and we'll map out exactly how to implement it.
            </p>
            <a
              href="https://calendly.com/shawaiznaeem-104/intro-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-sm transition-all"
              style={{
                background: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)',
                color: 'white',
                boxShadow: '0 4px 24px rgba(14,165,233,0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 36px rgba(14,165,233,0.5)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 24px rgba(14,165,233,0.3)';
                e.currentTarget.style.transform = 'none';
              }}
            >
              <Calendar size={16} />
              Book a free call
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Floating CTA */}
      <div
        className="fixed bottom-0 left-0 right-0 z-30 flex justify-center px-4 py-4"
        style={{ background: 'linear-gradient(to top, rgba(8,12,20,1) 50%, transparent)' }}
      >
        <a
          href="https://calendly.com/shawaiznaeem-104/intro-call"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-bold text-sm transition-all"
          style={{
            background: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)',
            color: 'white',
            boxShadow: '0 4px 24px rgba(14,165,233,0.35)',
            backdropFilter: 'blur(8px)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 8px 36px rgba(14,165,233,0.5)';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 24px rgba(14,165,233,0.35)';
            e.currentTarget.style.transform = 'none';
          }}
        >
          <Calendar size={15} />
          Book a free call
        </a>
      </div>

      <SolutionDrawer
        entry={selectedEntry}
        onClose={() => setSelectedEntry(null)}
        getDeptConfig={getDeptConfig}
        DIFFICULTY_CONFIG={DIFFICULTY_CONFIG}
      />
    </div>
  );
}
