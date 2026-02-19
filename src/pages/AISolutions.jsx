import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Search, X, ChevronDown, ChevronUp, Clock, DollarSign, Wrench, Zap, Users, Tag,
} from 'lucide-react';
import { LogoHorizontal } from '../components/branding/Logo';
import { toolkitEntries, departments, difficulties } from '../data/aitoolkitData';

const SOURCE_COLORS = {
  'Pre-made service': { bg: 'rgba(14,165,233,0.12)', text: '#38BDF8', border: 'rgba(14,165,233,0.25)' },
  'Prompt-based': { bg: 'rgba(34,197,94,0.12)', text: '#4ADE80', border: 'rgba(34,197,94,0.25)' },
  'Knowledge base + LLM': { bg: 'rgba(251,191,36,0.12)', text: '#FCD34D', border: 'rgba(251,191,36,0.25)' },
  'AI-built application': { bg: 'rgba(249,115,22,0.12)', text: '#FB923C', border: 'rgba(249,115,22,0.25)' },
  'DIY automation': { bg: 'rgba(167,139,250,0.12)', text: '#A78BFA', border: 'rgba(167,139,250,0.25)' },
  'Pre-made service + Prompt': { bg: 'rgba(236,72,153,0.12)', text: '#F472B6', border: 'rgba(236,72,153,0.25)' },
  'Prompt + Pre-made service': { bg: 'rgba(236,72,153,0.12)', text: '#F472B6', border: 'rgba(236,72,153,0.25)' },
};

const DEPT_DEPT_ALL = 'All';
const DIFF_ALL = 'All';

function SourceBadge({ source }) {
  const colors = SOURCE_COLORS[source] || SOURCE_COLORS['Pre-made service'];
  return (
    <span
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold"
      style={{ background: colors.bg, color: colors.text, border: `1px solid ${colors.border}` }}
    >
      {source}
    </span>
  );
}

function DifficultyDot({ difficulty }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 text-xs font-semibold"
      style={{ color: difficulty === 'Easy' ? '#4ADE80' : '#FCD34D' }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full"
        style={{ background: difficulty === 'Easy' ? '#4ADE80' : '#FCD34D' }}
      />
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
        border: expanded ? '1px solid rgba(255,255,255,0.14)' : '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <button
        onClick={() => setExpanded((v) => !v)}
        className="w-full text-left p-5 flex items-start gap-4"
      >
        <div
          className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center text-xs font-black mt-0.5"
          style={{ background: 'rgba(255,255,255,0.06)', color: '#475569' }}
        >
          {entry.id}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-white leading-snug mb-2">{entry.title}</p>
          <div className="flex flex-wrap items-center gap-2">
            <DifficultyDot difficulty={entry.difficulty} />
            <span className="text-xs" style={{ color: '#334155' }}>·</span>
            <span className="text-xs font-medium" style={{ color: '#475569' }}>{entry.department}</span>
            <span className="text-xs" style={{ color: '#334155' }}>·</span>
            <SourceBadge source={entry.source} />
          </div>
        </div>
        <div className="flex-shrink-0 mt-1" style={{ color: '#475569' }}>
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
      </button>

      {expanded && (
        <div
          className="px-5 pb-5 pt-0"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div className="ml-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5 pt-4">
              <InfoBlock icon={X} label="Problem" value={entry.problem} color="#F87171" />
              <InfoBlock icon={Zap} label="Solution" value={entry.solution} color="#4ADE80" />
            </div>

            <div className="mb-4">
              <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: '#475569' }}>
                How it works
              </p>
              <p className="text-sm leading-relaxed" style={{ color: '#94A3B8' }}>
                {entry.howItWorks}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
              <MetaChip icon={DollarSign} label="Cost" value={entry.costRange} />
              <MetaChip icon={Clock} label="Setup time" value={entry.timeToSetup} />
              <MetaChip icon={Users} label="Business size" value={entry.businessSize} />
              <MetaChip icon={Tag} label="Difficulty" value={entry.difficulty} />
            </div>

            <div className="mb-4">
              <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: '#475569' }}>
                What you need
              </p>
              <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>
                {entry.whatYouNeed}
              </p>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: '#475569' }}>
                Tools
              </p>
              <div className="flex flex-wrap gap-2">
                {entry.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 rounded-md text-xs font-medium"
                    style={{ background: 'rgba(255,255,255,0.06)', color: '#94A3B8', border: '1px solid rgba(255,255,255,0.08)' }}
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

function InfoBlock({ icon: Icon, label, value, color }) {
  return (
    <div
      className="p-3.5 rounded-lg"
      style={{ background: `${color}08`, border: `1px solid ${color}20` }}
    >
      <p className="text-xs font-bold mb-1" style={{ color }}>
        {label}
      </p>
      <p className="text-xs leading-relaxed" style={{ color: '#94A3B8' }}>
        {value}
      </p>
    </div>
  );
}

function MetaChip({ icon: Icon, label, value }) {
  return (
    <div
      className="p-2.5 rounded-lg"
      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
    >
      <div className="flex items-center gap-1 mb-1">
        <Icon size={11} style={{ color: '#475569' }} />
        <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#475569' }}>
          {label}
        </p>
      </div>
      <p className="text-xs font-bold text-white">{value}</p>
    </div>
  );
}

function FilterPill({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap"
      style={{
        background: active ? 'rgba(245,158,11,0.18)' : 'rgba(255,255,255,0.04)',
        color: active ? '#F59E0B' : '#475569',
        border: active ? '1px solid rgba(245,158,11,0.35)' : '1px solid rgba(255,255,255,0.07)',
      }}
    >
      {label}
    </button>
  );
}

export function AISolutions() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [activeDept, setActiveDept] = useState(DEPT_DEPT_ALL);
  const [activeDiff, setActiveDiff] = useState(DIFF_ALL);

  const filtered = useMemo(() => {
    return toolkitEntries.filter((entry) => {
      const matchesDept =
        activeDept === DEPT_DEPT_ALL ||
        entry.department.toLowerCase().includes(activeDept.toLowerCase());
      const matchesDiff =
        activeDiff === DIFF_ALL || entry.difficulty === activeDiff;
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

  const easyCount = toolkitEntries.filter((e) => e.difficulty === 'Easy').length;
  const freeCount = toolkitEntries.filter((e) => e.costRange.startsWith('£0')).length;

  return (
    <div className="min-h-screen w-full" style={{ background: '#080C14' }}>
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 20% 0%, rgba(14,165,233,0.06) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 100%, rgba(245,158,11,0.04) 0%, transparent 50%)
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

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="text-center mb-10">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-5 tracking-widest uppercase"
            style={{ background: 'rgba(14,165,233,0.1)', color: '#38BDF8', border: '1px solid rgba(14,165,233,0.2)' }}
          >
            <Wrench size={12} />
            AI Solutions Toolkit
          </div>
          <h1
            className="text-4xl sm:text-5xl font-black text-white mb-3"
            style={{ letterSpacing: '-0.03em', lineHeight: 1.1 }}
          >
            60 AI solutions<br />for your business
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#64748B' }}>
            Real problems, practical fixes. Browse every solution, filter by department or difficulty, and find exactly what applies to you.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-10">
          <StatCard value="60" label="Solutions" />
          <StatCard value={`${easyCount}`} label="Easy to start" highlight />
          <StatCard value={`${freeCount}`} label="Free to try" />
        </div>

        <div
          className="sticky top-0 z-10 pb-4 pt-2"
          style={{ background: '#080C14' }}
        >
          <div className="relative mb-3">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: '#334155' }} />
            <input
              type="text"
              placeholder="Search problems, solutions, or tools..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-10 py-3 rounded-xl text-sm outline-none text-white placeholder-slate-600"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.09)',
              }}
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2"
                style={{ color: '#475569' }}
              >
                <X size={15} />
              </button>
            )}
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {difficulties.map((d) => (
              <FilterPill
                key={d}
                label={d === 'All' ? 'All difficulties' : d}
                active={activeDiff === d}
                onClick={() => setActiveDiff(d)}
              />
            ))}
            <div className="w-px self-stretch mx-1" style={{ background: 'rgba(255,255,255,0.08)' }} />
            {departments.map((dept) => (
              <FilterPill
                key={dept}
                label={dept}
                active={activeDept === dept}
                onClick={() => setActiveDept(dept)}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <p className="text-xs font-semibold" style={{ color: '#334155' }}>
            {filtered.length} of {toolkitEntries.length} solutions
          </p>
          {(activeDept !== DEPT_DEPT_ALL || activeDiff !== DIFF_ALL || search) && (
            <button
              onClick={() => { setActiveDept(DEPT_DEPT_ALL); setActiveDiff(DIFF_ALL); setSearch(''); }}
              className="text-xs font-semibold transition-colors"
              style={{ color: '#F59E0B' }}
            >
              Clear filters
            </button>
          )}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-lg font-bold text-white mb-2">No matches found</p>
            <p className="text-sm" style={{ color: '#475569' }}>Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="space-y-2">
            {filtered.map((entry) => (
              <EntryCard key={entry.id} entry={entry} />
            ))}
          </div>
        )}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}

function StatCard({ value, label, highlight }) {
  return (
    <div
      className="rounded-xl p-4 text-center"
      style={{
        background: highlight ? 'rgba(245,158,11,0.07)' : 'rgba(255,255,255,0.03)',
        border: highlight ? '1px solid rgba(245,158,11,0.2)' : '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <p
        className="text-2xl font-black mb-0.5"
        style={{ color: highlight ? '#F59E0B' : 'white' }}
      >
        {value}
      </p>
      <p className="text-xs font-medium" style={{ color: '#475569' }}>{label}</p>
    </div>
  );
}
