import { theme } from '../../styles/theme';
import { BookOpen, Trophy, TrendingUp } from 'lucide-react';

export function IntegratedProgressHero({ stats, currentModuleInfo }) {
  const overallPercent = Math.round(stats.percentComplete);
  const circumference = 2 * Math.PI * 70;
  const progressOffset = circumference - (overallPercent / 100) * circumference;

  return (
    <div className="relative overflow-hidden rounded-2xl border" style={{
      backgroundColor: theme.colors.background.card,
      borderColor: theme.colors.border.subtle,
    }}>
      <div className="grid lg:grid-cols-[1fr,auto] gap-8 p-8 lg:p-12">
        <div className="space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4" style={{
              backgroundColor: `${theme.colors.primary.electric}10`,
              border: `1px solid ${theme.colors.primary.electric}30`,
            }}>
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme.colors.status.success }} />
              <span className="text-xs font-semibold" style={{ color: theme.colors.primary.electric }}>
                In Progress
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold mb-3" style={{
              letterSpacing: '-0.03em',
              color: theme.colors.text.primary,
            }}>
              Your Learning Path
            </h1>

            <p className="text-lg leading-relaxed max-w-2xl" style={{ color: theme.colors.text.secondary }}>
              Building mastery across <strong style={{ color: theme.colors.text.primary }}>44 strategic lessons</strong> in
              <strong style={{ color: theme.colors.text.primary }}> 8 comprehensive modules</strong>
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 pt-2">
            <div className="space-y-1">
              <div className="flex items-center gap-2 mb-1">
                <BookOpen size={16} style={{ color: theme.colors.accent.cyan }} />
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: theme.colors.text.muted }}>
                  Completed
                </span>
              </div>
              <p className="text-3xl font-bold" style={{ color: theme.colors.text.primary }}>
                {stats.lessonsCompleted}
                <span className="text-xl font-normal ml-1" style={{ color: theme.colors.text.muted }}>
                  / 44
                </span>
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp size={16} style={{ color: theme.colors.accent.cyan }} />
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: theme.colors.text.muted }}>
                  Current Module
                </span>
              </div>
              <p className="text-3xl font-bold" style={{ color: theme.colors.text.primary }}>
                {currentModuleInfo?.moduleId || '—'}
                <span className="text-xl font-normal ml-1" style={{ color: theme.colors.text.muted }}>
                  of 8
                </span>
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 mb-1">
                <Trophy size={16} style={{ color: theme.colors.accent.cyan }} />
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: theme.colors.text.muted }}>
                  Modules Done
                </span>
              </div>
              <p className="text-3xl font-bold" style={{ color: theme.colors.text.primary }}>
                {stats.modulesCompleted}
                <span className="text-xl font-normal ml-1" style={{ color: theme.colors.text.muted }}>
                  / 8
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center lg:justify-end">
          <div className="relative">
            <svg width="180" height="180" className="transform -rotate-90">
              <circle
                cx="90"
                cy="90"
                r="70"
                fill="none"
                stroke={theme.colors.background.subtle}
                strokeWidth="12"
              />
              <circle
                cx="90"
                cy="90"
                r="70"
                fill="none"
                stroke={theme.colors.primary.electric}
                strokeWidth="12"
                strokeDasharray={circumference}
                strokeDashoffset={progressOffset}
                strokeLinecap="round"
                style={{ transition: 'stroke-dashoffset 1s ease' }}
              />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl font-bold" style={{ color: theme.colors.primary.electric }}>
                {overallPercent}
              </span>
              <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: theme.colors.text.muted }}>
                Complete
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
