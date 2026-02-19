import { theme } from '../../styles/theme';
import { BookOpen, Trophy, TrendingUp } from 'lucide-react';

export function IntegratedProgressHero({ stats, currentModuleInfo }) {
  const overallPercent = Math.round(stats.percentComplete);
  const circumference = 2 * Math.PI * 44;
  const progressOffset = circumference - (overallPercent / 100) * circumference;

  return (
    <div className="relative overflow-hidden rounded-xl border" style={{
      backgroundColor: theme.colors.background.card,
      borderColor: theme.colors.border.subtle,
    }}>
      <div className="flex items-center gap-6 px-6 py-5">
        <div className="relative flex-shrink-0">
          <svg width="100" height="100" className="transform -rotate-90">
            <circle
              cx="50"
              cy="50"
              r="44"
              fill="none"
              stroke={theme.colors.background.subtle}
              strokeWidth="8"
            />
            <circle
              cx="50"
              cy="50"
              r="44"
              fill="none"
              stroke={theme.colors.primary.electric}
              strokeWidth="8"
              strokeDasharray={circumference}
              strokeDashoffset={progressOffset}
              strokeLinecap="round"
              style={{ transition: 'stroke-dashoffset 1s ease' }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold" style={{ color: theme.colors.primary.electric }}>
              {overallPercent}%
            </span>
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <h1 className="text-xl font-bold mb-1" style={{
            letterSpacing: '-0.02em',
            color: theme.colors.text.primary,
          }}>
            Your Learning Progress
          </h1>
          <p className="text-sm mb-3" style={{ color: theme.colors.text.secondary }}>
            44 lessons across 8 modules
          </p>

          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <BookOpen size={14} style={{ color: theme.colors.accent.cyan }} />
              <span className="text-sm font-semibold" style={{ color: theme.colors.text.primary }}>
                {stats.lessonsCompleted}
                <span className="font-normal" style={{ color: theme.colors.text.muted }}> / 44 lessons</span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <TrendingUp size={14} style={{ color: theme.colors.accent.cyan }} />
              <span className="text-sm font-semibold" style={{ color: theme.colors.text.primary }}>
                Module {currentModuleInfo?.moduleId || '—'}
                <span className="font-normal" style={{ color: theme.colors.text.muted }}> of 8</span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Trophy size={14} style={{ color: theme.colors.accent.cyan }} />
              <span className="text-sm font-semibold" style={{ color: theme.colors.text.primary }}>
                {stats.modulesCompleted}
                <span className="font-normal" style={{ color: theme.colors.text.muted }}> modules complete</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
