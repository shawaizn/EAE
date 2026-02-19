import { useState, useMemo, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Search, X, Calendar, CheckCircle2, Zap, Wrench,
  Clock, DollarSign, ChevronRight, Filter, Building2, Users,
  BarChart3, ShoppingCart, Megaphone, Briefcase, Settings,
  UserCheck, Monitor, ArrowRight, TrendingUp, Shield,
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
  'Customer Service': { accent: '#0EA5E9', bg: 'rgba(14,165,233,0.1)', border: 'rgba(14,165,233,0.2)', icon: Users },
  'Sales': { accent: '#10B981', bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.2)', icon: TrendingUp },
  'Sales / Marketing': { accent: '#10B981', bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.2)', icon: TrendingUp },
  'Sales / Admin': { accent: '#10B981', bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.2)', icon: TrendingUp },
  'Marketing': { accent: '#F59E0B', bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.2)', icon: Megaphone },
  'Marketing / Sales': { accent: '#F59E0B', bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.2)', icon: Megaphone },
  'Operations': { accent: '#A78BFA', bg: 'rgba(167,139,250,0.1)', border: 'rgba(167,139,250,0.2)', icon: Settings },
  'Operations / Project Management': { accent: '#A78BFA', bg: 'rgba(167,139,250,0.1)', border: 'rgba(167,139,250,0.2)', icon: Settings },
  'Operations / HR': { accent: '#A78BFA', bg: 'rgba(167,139,250,0.1)', border: 'rgba(167,139,250,0.2)', icon: Settings },
  'Operations / Marketing': { accent: '#A78BFA', bg: 'rgba(167,139,250,0.1)', border: 'rgba(167,139,250,0.2)', icon: Settings },
  'Operations / Finance': { accent: '#A78BFA', bg: 'rgba(167,139,250,0.1)', border: 'rgba(167,139,250,0.2)', icon: Settings },
  'Operations / Admin': { accent: '#A78BFA', bg: 'rgba(167,139,250,0.1)', border: 'rgba(167,139,250,0.2)', icon: Settings },
  'Finance / Admin': { accent: '#EC4899', bg: 'rgba(236,72,153,0.1)', border: 'rgba(236,72,153,0.2)', icon: DollarSign },
  'Admin / Finance': { accent: '#EC4899', bg: 'rgba(236,72,153,0.1)', border: 'rgba(236,72,153,0.2)', icon: DollarSign },
  'Admin': { accent: '#EC4899', bg: 'rgba(236,72,153,0.1)', border: 'rgba(236,72,153,0.2)', icon: Briefcase },
  'HR': { accent: '#06B6D4', bg: 'rgba(6,182,212,0.1)', border: 'rgba(6,182,212,0.2)', icon: UserCheck },
  'Management': { accent: '#F97316', bg: 'rgba(249,115,22,0.1)', border: 'rgba(249,115,22,0.2)', icon: BarChart3 },
  'IT / Admin': { accent: '#64748B', bg: 'rgba(100,116,139,0.1)', border: 'rgba(100,116,139,0.2)', icon: Monitor },
  'Project Management / Operations': { accent: '#A78BFA', bg: 'rgba(167,139,250,0.1)', border: 'rgba(167,139,250,0.2)', icon: Settings },
  'Project Management / Client Services': { accent: '#0EA5E9', bg: 'rgba(14,165,233,0.1)', border: 'rgba(14,165,233,0.2)', icon: Briefcase },
  'Customer Service / Operations': { accent: '#0EA5E9', bg: 'rgba(14,165,233,0.1)', border: 'rgba(14,165,233,0.2)', icon: Users },
  'Customer Service / Product': { accent: '#0EA5E9', bg: 'rgba(14,165,233,0.1)', border: 'rgba(14,165,233,0.2)', icon: Users },
  'Sales / Legal': { accent: '#10B981', bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.2)', icon: Shield },
  'Sales / Operations': { accent: '#10B981', bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.2)', icon: TrendingUp },
};

function getDeptConfig(dept) {
  return DEPT_CONFIG[dept] || { accent: '#64748B', bg: 'rgba(100,116,139,0.1)', border: 'rgba(100,116,139,0.2)', icon: Building2 };
}

const STATS = [
  { value: '60', label: 'AI solutions', icon: Zap },
  { value: '9', label: 'Departments covered', icon: Building2 },
  { value: '30 min', label: 'Fastest setup', icon: Clock },
  { value: '£0', label: 'Starting cost', icon: DollarSign },
];

const BEFORE_AFTER = [
  { before: '3 hours answering emails', after: '20 minutes reviewing AI drafts' },
  { before: 'CVs piling up for weeks', after: 'AI shortlist ready same day' },
  { before: 'Meeting notes lost in chats', after: 'Summaries emailed automatically' },
];

function SolutionCard({ entry, onClick }) {
  const [hovered, setHovered] = useState(false);
  const diff = DIFFICULTY_CONFIG[entry.difficulty] || DIFFICULTY_CONFIG.Medium;
  const dept = getDeptConfig(entry.department);

  return (
    <button
      onClick={() => onClick(entry)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-full text-left rounded-2xl overflow-hidden transition-all duration-200 flex flex-col"
      style={{
        background: hovered
          ? 'rgba(255,255,255,0.055)'
          : 'rgba(255,255,255,0.03)',
        border: `1px solid ${hovered ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.07)'}`,
        boxShadow: hovered ? '0 8px 32px rgba(0,0,0,0.25)' : 'none',
        transform: hovered ? 'translateY(-1px)' : 'none',
      }}
    >
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className="px-2.5 py-1 rounded-lg text-xs font-bold tracking-wide"
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
          <ChevronRight
            size={15}
            className="flex-shrink-0 mt-0.5 transition-transform duration-200"
            style={{
              color: hovered ? '#94A3B8' : '#1E293B',
              transform: hovered ? 'translateX(2px)' : 'none',
            }}
          />
        </div>

        <h3 className="text-sm font-bold text-white leading-snug mb-3">
          {entry.title}
        </h3>

        <div
          className="px-3 py-2.5 rounded-xl mb-3 flex-1"
          style={{ background: 'rgba(248,113,113,0.06)', border: '1px solid rgba(248,113,113,0.12)' }}
        >
          <p className="text-xs font-semibold mb-1" style={{ color: '#F87171' }}>Problem</p>
          <p className="text-xs leading-relaxed line-clamp-2" style={{ color: '#64748B' }}>
            {entry.problem}
          </p>
        </div>

        <div
          className="px-3 py-2.5 rounded-xl"
          style={{ background: 'rgba(74,222,128,0.05)', border: '1px solid rgba(74,222,128,0.12)' }}
        >
          <p className="text-xs font-semibold mb-1" style={{ color: '#4ADE80' }}>AI Fix</p>
          <p className="text-xs leading-relaxed line-clamp-2" style={{ color: '#64748B' }}>
            {entry.solution}
          </p>
        </div>
      </div>

      <div
        className="px-5 py-3 flex items-center justify-between"
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
      >
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-xs" style={{ color: '#334155' }}>
            <Clock size={11} />
            {entry.timeToSetup}
          </span>
          <span className="flex items-center gap-1 text-xs" style={{ color: '#334155' }}>
            <DollarSign size={11} />
            {entry.costRange}
          </span>
        </div>
        <span className="text-xs font-semibold" style={{ color: hovered ? '#38BDF8' : '#1E293B' }}>
          View details
        </span>
      </div>
    </button>
  );
}

function DeptFilterPill({ label, count, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap flex-shrink-0"
      style={{
        background: active ? 'rgba(14,165,233,0.15)' : 'rgba(255,255,255,0.04)',
        color: active ? '#38BDF8' : '#475569',
        border: active ? '1px solid rgba(14,165,233,0.3)' : '1px solid rgba(255,255,255,0.07)',
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

function StatBar() {
  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-4 gap-px overflow-hidden rounded-2xl"
      style={{ border: '1px solid rgba(255,255,255,0.08)' }}
    >
      {STATS.map(({ value, label, icon: Icon }, i) => (
        <div
          key={label}
          className="flex flex-col items-center justify-center py-5 px-4 gap-1.5"
          style={{
            background: i % 2 === 0 ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.02)',
          }}
        >
          <Icon size={16} style={{ color: '#334155' }} />
          <span className="text-2xl font-black text-white" style={{ letterSpacing: '-0.03em' }}>
            {value}
          </span>
          <span className="text-xs text-center" style={{ color: '#475569' }}>{label}</span>
        </div>
      ))}
    </div>
  );
}

export function AISolutions() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [activeDept, setActiveDept] = useState(DEPT_ALL);
  const [activeDiff, setActiveDiff] = useState(DIFF_ALL);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

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
    const onKey = (e) => {
      if (e.key === 'Escape') setSelectedEntry(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="min-h-screen w-full pb-32" style={{ background: '#080C14' }}>
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 10% 0%, rgba(14,165,233,0.07) 0%, transparent 55%),
            radial-gradient(ellipse at 90% 100%, rgba(245,158,11,0.05) 0%, transparent 55%),
            radial-gradient(ellipse at 50% 50%, rgba(16,185,129,0.02) 0%, transparent 60%)
          `,
        }}
      />

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

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">

        {/* Hero */}
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-black"
              style={{ background: 'rgba(14,165,233,0.2)', color: '#38BDF8' }}
            >
              1
            </div>
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#38BDF8' }}>
              Step 1 — Find your problem
            </span>
          </div>

          <h1
            className="text-3xl sm:text-5xl font-black text-white mb-4 leading-tight"
            style={{ letterSpacing: '-0.03em' }}
          >
            Every business problem.<br />
            <span style={{ color: '#38BDF8' }}>One AI fix.</span>
          </h1>

          <p className="text-base sm:text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: '#64748B' }}>
            60 common SME problems — each mapped to a proven AI solution, specific tools, and an honest setup guide. Find yours, then book a call and we'll implement it.
          </p>

          <StatBar />
        </div>

        {/* Search + Filters */}
        <div
          className="sticky top-0 z-10 pb-4 pt-2"
          style={{ background: 'linear-gradient(to bottom, #080C14 80%, transparent)' }}
        >
          <div className="flex gap-2 mb-3">
            <div className="relative flex-1">
              <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: '#334155' }} />
              <input
                type="text"
                placeholder="Search by problem, solution, tool, or department..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-9 py-3 rounded-xl text-sm outline-none text-white placeholder-slate-600"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
              />
              {search && (
                <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2" style={{ color: '#475569' }}>
                  <X size={14} />
                </button>
              )}
            </div>
            <button
              onClick={() => setShowFilters((v) => !v)}
              className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all sm:hidden"
              style={{
                background: showFilters ? 'rgba(14,165,233,0.15)' : 'rgba(255,255,255,0.05)',
                color: showFilters ? '#38BDF8' : '#475569',
                border: showFilters ? '1px solid rgba(14,165,233,0.3)' : '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <Filter size={14} />
              Filter
            </button>
          </div>

          {/* Desktop: always visible filter row */}
          <div className="hidden sm:flex gap-2 overflow-x-auto pb-0.5" style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
            <DeptFilterPill
              label="Any difficulty"
              active={activeDiff === DIFF_ALL}
              onClick={() => setActiveDiff(DIFF_ALL)}
            />
            {['Easy', 'Medium'].map((d) => (
              <DeptFilterPill
                key={d}
                label={d}
                active={activeDiff === d}
                onClick={() => setActiveDiff(d)}
              />
            ))}
            <div className="w-px flex-shrink-0 self-stretch my-1" style={{ background: 'rgba(255,255,255,0.08)' }} />
            {departments.map((dept) => (
              <DeptFilterPill
                key={dept}
                label={dept}
                count={dept === 'All' ? toolkitEntries.length : deptCounts[dept]}
                active={activeDept === dept}
                onClick={() => setActiveDept(dept)}
              />
            ))}
          </div>

          {/* Mobile: toggle filter panel */}
          {showFilters && (
            <div className="sm:hidden mt-2 p-4 rounded-xl space-y-3" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#334155' }}>Difficulty</p>
                <div className="flex gap-2 flex-wrap">
                  {[{ label: 'Any', value: DIFF_ALL }, { label: 'Easy', value: 'Easy' }, { label: 'Medium', value: 'Medium' }].map(({ label, value }) => (
                    <DeptFilterPill
                      key={value}
                      label={label}
                      active={activeDiff === value}
                      onClick={() => setActiveDiff(value)}
                    />
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#334155' }}>Department</p>
                <div className="flex gap-2 flex-wrap">
                  {departments.map((dept) => (
                    <DeptFilterPill
                      key={dept}
                      label={dept}
                      count={dept === 'All' ? toolkitEntries.length : deptCounts[dept]}
                      active={activeDept === dept}
                      onClick={() => { setActiveDept(dept); setShowFilters(false); }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results bar */}
        <div className="flex items-center justify-between mb-5">
          <p className="text-sm font-semibold" style={{ color: '#334155' }}>
            <span className="text-white">{filtered.length}</span>
            {' '}of {toolkitEntries.length} solutions
            {activeDept !== DEPT_ALL && <span style={{ color: '#38BDF8' }}> — {activeDept}</span>}
          </p>
          {hasFilters && (
            <button
              onClick={clearAll}
              className="text-xs font-semibold flex items-center gap-1 transition-colors"
              style={{ color: '#475569' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#94A3B8')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}
            >
              <X size={12} />
              Clear filters
            </button>
          )}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <Search size={22} style={{ color: '#334155' }} />
            </div>
            <p className="font-bold text-white mb-1">No solutions found</p>
            <p className="text-sm mb-4" style={{ color: '#475569' }}>Try a different search term or clear your filters</p>
            <button
              onClick={clearAll}
              className="text-sm font-semibold transition-colors"
              style={{ color: '#38BDF8' }}
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filtered.map((entry) => (
              <SolutionCard key={entry.id} entry={entry} onClick={setSelectedEntry} />
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div
          className="mt-16 rounded-2xl overflow-hidden"
          style={{ border: '1px solid rgba(255,255,255,0.1)' }}
        >
          <div
            className="px-6 sm:px-10 pt-10 pb-8 text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(14,165,233,0.08) 0%, rgba(245,158,11,0.06) 100%)',
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
            <p className="text-sm mb-8 max-w-md mx-auto" style={{ color: '#64748B' }}>
              Found a problem that fits? Book a free call and we'll map out exactly how to implement it — no technical knowledge needed.
            </p>

            {/* Before/After */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
              {BEFORE_AFTER.map(({ before, after }, i) => (
                <div
                  key={i}
                  className="rounded-xl p-4 text-left"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <div className="flex items-start gap-2 mb-2.5">
                    <X size={12} className="flex-shrink-0 mt-0.5" style={{ color: '#F87171' }} />
                    <p className="text-xs leading-snug" style={{ color: '#64748B' }}>{before}</p>
                  </div>
                  <div className="w-full h-px mb-2.5" style={{ background: 'rgba(255,255,255,0.06)' }} />
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={12} className="flex-shrink-0 mt-0.5" style={{ color: '#4ADE80' }} />
                    <p className="text-xs leading-snug font-medium" style={{ color: '#CBD5E1' }}>{after}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
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
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm transition-all"
              style={{
                background: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)',
                color: 'white',
                boxShadow: '0 4px 20px rgba(14,165,233,0.35)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 6px 30px rgba(14,165,233,0.5)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(14,165,233,0.35)';
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
        className="fixed bottom-0 left-0 right-0 z-30 px-4 py-3"
        style={{
          background: 'linear-gradient(to top, rgba(8,12,20,1) 60%, transparent)',
        }}
      >
        <div
          className="max-w-xl mx-auto flex items-center justify-between gap-4 px-4 py-3 rounded-xl"
          style={{
            background: 'linear-gradient(135deg, rgba(14,165,233,0.1) 0%, rgba(245,158,11,0.07) 100%)',
            border: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(8px)',
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
              <p className="text-xs hidden sm:block" style={{ color: '#64748B' }}>Book a free call — we'll handle the setup for you</p>
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
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 20px rgba(14,165,233,0.5)')}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 12px rgba(14,165,233,0.3)')}
          >
            <Calendar size={13} />
            Book free call
          </a>
        </div>
      </div>

      {/* Solution Drawer */}
      <SolutionDrawer
        entry={selectedEntry}
        onClose={() => setSelectedEntry(null)}
        getDeptConfig={getDeptConfig}
        DIFFICULTY_CONFIG={DIFFICULTY_CONFIG}
      />
    </div>
  );
}
