import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, X, ChevronDown, ChevronUp, Clock, PoundSterling, Calendar, CheckCircle2 } from 'lucide-react';
import { LogoHorizontal } from '../components/branding/Logo';
import { toolkitEntries, departments } from '../data/aitoolkitData';

const DEPT_ALL = 'All';
const DIFF_ALL = 'All';

function DifficultyPill({ difficulty }) {
  const isEasy = difficulty === 'Easy';
  return (
    <span
      className="px-2 py-0.5 rounded-full text-xs font-semibold"
      style={{
        background: isEasy ? 'rgba(34,197,94,0.12)' : 'rgba(251,191,36,0.12)',
        color: isEasy ? '#4ADE80' : '#FCD34D',
      }}
    >
      {difficulty}
    </span>
  );
}

function EntryCard({ entry }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="rounded-xl overflow-hidden transition-all duration-200"
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: `1px solid ${expanded ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.07)'}`,
      }}
    >
      <button
        onClick={() => setExpanded((v) => !v)}
        className="w-full text-left px-5 py-4 flex items-center gap-4"
      >
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-white mb-1.5 leading-snug">{entry.title}</p>
          <div className="flex flex-wrap items-center gap-2">
            <DifficultyPill difficulty={entry.difficulty} />
            <span className="text-xs font-medium" style={{ color: '#475569' }}>{entry.department}</span>
          </div>
        </div>
        <div className="flex-shrink-0" style={{ color: '#334155' }}>
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
      </button>

      {expanded && (
        <div className="px-5 pb-5" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="pt-4 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-lg" style={{ background: 'rgba(248,113,113,0.07)', border: '1px solid rgba(248,113,113,0.15)' }}>
                <p className="text-xs font-bold mb-1" style={{ color: '#F87171' }}>The problem</p>
                <p className="text-sm leading-relaxed" style={{ color: '#94A3B8' }}>{entry.problem}</p>
              </div>
              <div className="p-3.5 rounded-lg" style={{ background: 'rgba(74,222,128,0.07)', border: '1px solid rgba(74,222,128,0.15)' }}>
                <p className="text-xs font-bold mb-1" style={{ color: '#4ADE80' }}>The fix</p>
                <p className="text-sm leading-relaxed" style={{ color: '#94A3B8' }}>{entry.solution}</p>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider mb-1.5" style={{ color: '#334155' }}>How it works</p>
              <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>{entry.howItWorks}</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-start gap-2.5 p-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <PoundSterling size={14} className="mt-0.5 flex-shrink-0" style={{ color: '#475569' }} />
                <div>
                  <p className="text-xs font-semibold" style={{ color: '#475569' }}>Cost</p>
                  <p className="text-sm font-bold text-white">{entry.costRange}</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <Clock size={14} className="mt-0.5 flex-shrink-0" style={{ color: '#475569' }} />
                <div>
                  <p className="text-xs font-semibold" style={{ color: '#475569' }}>Setup time</p>
                  <p className="text-sm font-bold text-white">{entry.timeToSetup}</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider mb-1.5" style={{ color: '#334155' }}>What you need first</p>
              <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>{entry.whatYouNeed}</p>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: '#334155' }}>Tools</p>
              <div className="flex flex-wrap gap-1.5">
                {entry.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 rounded-md text-xs font-medium"
                    style={{ background: 'rgba(255,255,255,0.05)', color: '#64748B', border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
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
    <div className="min-h-screen w-full" style={{ background: '#080C14' }}>
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 10% 0%, rgba(14,165,233,0.05) 0%, transparent 50%),
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
          <div className="flex items-center gap-2 mb-2">
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
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-2" style={{ letterSpacing: '-0.02em' }}>
            Find your problem
          </h1>
          <p className="text-base" style={{ color: '#64748B' }}>
            Browse 60 common business problems and the AI solution for each. Search, filter by department, or just scroll.
          </p>
        </div>

        <div
          className="sticky top-0 z-10 py-3"
          style={{ background: '#080C14' }}
        >
          <div className="relative mb-2.5">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: '#334155' }} />
            <input
              type="text"
              placeholder="Search by problem, solution, or tool..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-9 py-2.5 rounded-xl text-sm outline-none text-white placeholder-slate-600"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)' }}
            />
            {search && (
              <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2" style={{ color: '#475569' }}>
                <X size={14} />
              </button>
            )}
          </div>

          <div className="flex gap-2 overflow-x-auto pb-0.5" style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
            {['All', 'Easy', 'Medium'].map((d) => (
              <FilterChip
                key={d}
                label={d === 'All' ? 'Any difficulty' : d}
                active={activeDiff === d}
                onClick={() => setActiveDiff(d)}
              />
            ))}
            <div className="w-px flex-shrink-0 self-stretch" style={{ background: 'rgba(255,255,255,0.08)' }} />
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

        <div className="flex items-center justify-between mb-3 mt-1">
          <p className="text-xs" style={{ color: '#334155' }}>
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
          <div className="space-y-2">
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
