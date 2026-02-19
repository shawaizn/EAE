import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, X, ChevronDown, ChevronUp, Calendar, CheckCircle2, Zap, ArrowRight, Wrench } from 'lucide-react';
import { LogoHorizontal } from '../components/branding/Logo';
import { toolkitEntries, departments } from '../data/aitoolkitData';

const DEPT_ALL = 'All';
const DIFF_ALL = 'All';

const DIFFICULTY_CONFIG = {
  Easy: { color: '#4ADE80', bg: 'rgba(74,222,128,0.1)', border: 'rgba(74,222,128,0.2)', dot: '#4ADE80' },
  Medium: { color: '#FCD34D', bg: 'rgba(252,211,77,0.1)', border: 'rgba(252,211,77,0.2)', dot: '#FCD34D' },
  Hard: { color: '#F87171', bg: 'rgba(248,113,113,0.1)', border: 'rgba(248,113,113,0.2)', dot: '#F87171' },
};

const DEPT_COLORS = {
  'Customer Service': { accent: '#0EA5E9', bg: 'rgba(14,165,233,0.08)' },
  'Sales': { accent: '#10B981', bg: 'rgba(16,185,129,0.08)' },
  'Sales / Marketing': { accent: '#10B981', bg: 'rgba(16,185,129,0.08)' },
  'Sales / Admin': { accent: '#10B981', bg: 'rgba(16,185,129,0.08)' },
  'Marketing': { accent: '#F59E0B', bg: 'rgba(245,158,11,0.08)' },
  'Operations': { accent: '#8B5CF6', bg: 'rgba(139,92,246,0.08)' },
  'Finance': { accent: '#EC4899', bg: 'rgba(236,72,153,0.08)' },
  'HR': { accent: '#06B6D4', bg: 'rgba(6,182,212,0.08)' },
  'IT': { accent: '#64748B', bg: 'rgba(100,116,139,0.08)' },
};

function getDeptConfig(dept) {
  return DEPT_COLORS[dept] || { accent: '#475569', bg: 'rgba(71,85,105,0.08)' };
}

function EntryCard({ entry }) {
  const [expanded, setExpanded] = useState(false);
  const diff = DIFFICULTY_CONFIG[entry.difficulty] || DIFFICULTY_CONFIG.Medium;
  const dept = getDeptConfig(entry.department);

  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        background: expanded
          ? `linear-gradient(145deg, rgba(255,255,255,0.045) 0%, rgba(255,255,255,0.025) 100%)`
          : 'rgba(255,255,255,0.03)',
        border: `1px solid ${expanded ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.07)'}`,
        boxShadow: expanded ? '0 8px 40px rgba(0,0,0,0.3)' : 'none',
      }}
    >
      <button
        onClick={() => setExpanded((v) => !v)}
        className="w-full text-left px-5 pt-5 pb-4 group"
      >
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className="px-2.5 py-1 rounded-lg text-xs font-bold tracking-wide"
              style={{ background: dept.bg, color: dept.accent, border: `1px solid ${dept.accent}22` }}
            >
              {entry.department}
            </span>
            <span
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold"
              style={{ background: diff.bg, color: diff.color, border: `1px solid ${diff.border}` }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: diff.dot }}
              />
              {entry.difficulty}
            </span>
          </div>
          <div
            className="flex-shrink-0 mt-0.5 transition-transform duration-200"
            style={{
              color: expanded ? '#94A3B8' : '#334155',
              transform: expanded ? 'rotate(0deg)' : 'rotate(0deg)',
            }}
          >
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </div>
        </div>

        <h3 className="text-base font-bold text-white leading-snug mb-3 pr-2 group-hover:text-slate-200 transition-colors">
          {entry.title}
        </h3>

        <div
          className="flex items-start gap-2 px-3 py-2.5 rounded-xl"
          style={{ background: 'rgba(248,113,113,0.06)', border: '1px solid rgba(248,113,113,0.12)' }}
        >
          <span className="text-xs mt-0.5 flex-shrink-0" style={{ color: '#F87171' }}>Problem:</span>
          <p className="text-xs leading-relaxed line-clamp-2" style={{ color: '#94A3B8' }}>
            {entry.problem}
          </p>
        </div>
      </button>

      {expanded && (
        <div className="px-5 pb-5">
          <div
            className="flex items-start gap-2 px-3 py-2.5 rounded-xl mb-4"
            style={{ background: 'rgba(74,222,128,0.06)', border: '1px solid rgba(74,222,128,0.15)' }}
          >
            <Zap size={13} className="flex-shrink-0 mt-0.5" style={{ color: '#4ADE80' }} />
            <div>
              <p className="text-xs font-bold mb-0.5" style={{ color: '#4ADE80' }}>The AI fix</p>
              <p className="text-sm leading-relaxed" style={{ color: '#CBD5E1' }}>{entry.solution}</p>
            </div>
          </div>

          <div className="space-y-3 mb-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: '#334155' }}>How it works</p>
              <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>{entry.howItWorks}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: '#334155' }}>What you need first</p>
              <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>{entry.whatYouNeed}</p>
            </div>
          </div>

          <div
            className="pt-3"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div className="flex items-center gap-1.5 mb-2">
              <Wrench size={11} style={{ color: '#334155' }} />
              <p className="text-xs font-bold uppercase tracking-widest" style={{ color: '#334155' }}>Tools</p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {entry.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-2.5 py-1 rounded-lg text-xs font-medium"
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

          <button
            onClick={() => setExpanded(false)}
            className="mt-3 text-xs font-semibold transition-colors flex items-center gap-1"
            style={{ color: '#334155' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#64748B')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#334155')}
          >
            <ChevronUp size={12} />
            Collapse
          </button>
        </div>
      )}
    </div>
  );
}

function FilterChip({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap flex-shrink-0"
      style={{
        background: active ? 'rgba(14,165,233,0.15)' : 'rgba(255,255,255,0.04)',
        color: active ? '#38BDF8' : '#475569',
        border: active ? '1px solid rgba(14,165,233,0.3)' : '1px solid rgba(255,255,255,0.07)',
      }}
    >
      {label}
    </button>
  );
}

function FloatingCTA() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-30 px-4 py-3"
      style={{
        background: 'linear-gradient(to top, rgba(8,12,20,1) 50%, rgba(8,12,20,0))',
      }}
    >
      <div
        className="max-w-3xl mx-auto flex items-center justify-between gap-4 px-4 py-3 rounded-xl"
        style={{
          background: 'linear-gradient(135deg, rgba(14,165,233,0.1) 0%, rgba(245,158,11,0.07) 100%)',
          border: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <div className="flex items-center gap-3 min-w-0">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0"
            style={{ background: 'rgba(245,158,11,0.2)', color: '#F59E0B' }}
          >
            2
          </div>
          <div className="min-w-0">
            <p className="text-sm font-bold text-white leading-tight">Found your problem?</p>
            <p className="text-xs hidden sm:block" style={{ color: '#64748B' }}>Book a free call — we'll handle the setup, no jargon</p>
          </div>
        </div>
        <a
          href="https://calendly.com/shawaiznaeem-104/intro-call"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg font-bold text-xs transition-all"
          style={{
            background: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)',
            color: 'white',
            boxShadow: '0 2px 12px rgba(14,165,233,0.3)',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 20px rgba(14,165,233,0.45)')}
          onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 12px rgba(14,165,233,0.3)')}
        >
          <Calendar size={13} />
          Book free call
        </a>
      </div>
    </div>
  );
}

export function AISolutions() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [activeDept, setActiveDept] = useState(DEPT_ALL);
  const [activeDiff, setActiveDiff] = useState(DIFF_ALL);

  const filtered = useMemo(() => {
    return toolkitEntries.filter((entry) => {
      const matchesDept =
        activeDept === DEPT_ALL ||
        entry.department.toLowerCase().includes(activeDept.toLowerCase());
      const matchesDiff = activeDiff === DIFF_ALL || entry.difficulty === activeDiff;
      const q = search.toLowerCase();
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

  return (
    <div className="min-h-screen w-full pb-28" style={{ background: '#080C14' }}>
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 10% 0%, rgba(14,165,233,0.06) 0%, transparent 50%),
            radial-gradient(ellipse at 90% 90%, rgba(245,158,11,0.04) 0%, transparent 50%)
          `,
        }}
      />

      <nav
        className="relative z-20 flex items-center justify-between px-6 sm:px-10 h-16 border-b"
        style={{ borderColor: 'rgba(255,255,255,0.06)' }}
      >
        <button
          onClick={() => navigate('/hub')}
          className="flex items-center gap-2 text-sm font-medium transition-colors"
          style={{ color: '#64748B' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#CBD5E1')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#64748B')}
        >
          <ArrowLeft size={16} />
          Back
        </button>
        <LogoHorizontal size="sm" />
        <div style={{ width: 60 }} />
      </nav>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14">

        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-black"
              style={{ background: 'rgba(14,165,233,0.2)', color: '#38BDF8' }}
            >
              1
            </div>
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#38BDF8' }}>
              Step 1
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-3" style={{ letterSpacing: '-0.02em' }}>
            Find your problem
          </h1>
          <p className="text-base leading-relaxed" style={{ color: '#64748B' }}>
            60 common business problems — each with a proven AI fix. Find one that sounds like your team, then book a call and we'll set it up for you.
          </p>
        </div>

        <div
          className="sticky top-0 z-10 pb-3 pt-2"
          style={{ background: 'linear-gradient(to bottom, #080C14 85%, transparent)' }}
        >
          <div className="relative mb-2.5">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: '#334155' }} />
            <input
              type="text"
              placeholder="Search by problem, solution, or tool..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-9 py-2.5 rounded-xl text-sm outline-none text-white placeholder-slate-600"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)' }}
            />
            {search && (
              <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2" style={{ color: '#475569' }}>
                <X size={14} />
              </button>
            )}
          </div>

          <div className="flex gap-2 overflow-x-auto pb-0.5" style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
            {['All', 'Easy', 'Medium', 'Hard'].map((d) => (
              <FilterChip
                key={d}
                label={d === 'All' ? 'Any difficulty' : d}
                active={activeDiff === d}
                onClick={() => setActiveDiff(d)}
              />
            ))}
            <div className="w-px flex-shrink-0 self-stretch my-1" style={{ background: 'rgba(255,255,255,0.08)' }} />
            {departments.map((dept) => (
              <FilterChip
                key={dept}
                label={dept}
                active={activeDept === dept}
                onClick={() => setActiveDept(dept)}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mb-4 mt-1">
          <p className="text-xs font-medium" style={{ color: '#334155' }}>
            {filtered.length} solution{filtered.length !== 1 ? 's' : ''}
          </p>
          {hasFilters && (
            <button
              onClick={() => { setActiveDept(DEPT_ALL); setActiveDiff(DIFF_ALL); setSearch(''); }}
              className="text-xs font-semibold"
              style={{ color: '#475569' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#94A3B8')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}
            >
              Clear all
            </button>
          )}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="font-semibold text-white mb-1">No results</p>
            <p className="text-sm" style={{ color: '#475569' }}>Try a different search or clear your filters</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map((entry) => (
              <EntryCard key={entry.id} entry={entry} />
            ))}
          </div>
        )}

        <div
          className="mt-14 rounded-2xl p-8 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(14,165,233,0.08) 0%, rgba(245,158,11,0.06) 100%)',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-black"
              style={{ background: 'rgba(245,158,11,0.2)', color: '#F59E0B' }}
            >
              2
            </div>
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#F59E0B' }}>
              Step 2
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white mb-2" style={{ letterSpacing: '-0.02em' }}>
            Get it built for you
          </h2>
          <p className="text-sm mb-6 max-w-md mx-auto" style={{ color: '#64748B' }}>
            Found a problem that fits? Book a free call and we'll map out exactly how to implement it in your business — no technical knowledge needed.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            {['We handle the setup', 'No jargon', 'Done in days, not months'].map((point) => (
              <div key={point} className="flex items-center gap-1.5">
                <CheckCircle2 size={14} style={{ color: '#4ADE80' }} />
                <span className="text-sm font-medium" style={{ color: '#94A3B8' }}>{point}</span>
              </div>
            ))}
          </div>

          <a
            href="https://calendly.com/shawaiznaeem-104/intro-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm transition-all"
            style={{
              background: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)',
              color: 'white',
              boxShadow: '0 4px 20px rgba(14,165,233,0.3)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 6px 28px rgba(14,165,233,0.45)')}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 4px 20px rgba(14,165,233,0.3)')}
          >
            <Calendar size={16} />
            Book a free call
          </a>
        </div>
      </div>

      <FloatingCTA />
    </div>
  );
}
