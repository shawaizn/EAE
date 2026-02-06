import { ChevronRight, Lock, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { theme } from '../../styles/theme';

export function ModuleProgressCard({ module, locked = false }) {
  const isComplete = module.progress === 100;
  const hasStarted = module.progress > 0;

  return (
    <Link
      to={!locked ? `/modules/${module.moduleId}` : '#'}
      className={`block p-5 sm:p-6 border-2 rounded-xl transition-all ${!locked ? 'hover:shadow-md cursor-pointer' : 'opacity-50 cursor-not-allowed'}`}
      style={{
        backgroundColor: theme.colors.background.card,
        borderColor: isComplete
          ? theme.colors.status.success
          : hasStarted
          ? theme.colors.primary.electric
          : theme.colors.border.subtle,
        boxShadow: isComplete
          ? `0 0 15px ${theme.colors.status.success}15`
          : hasStarted
          ? `0 0 15px ${theme.colors.primary.electric}15`
          : theme.shadows.subtle,
      }}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-base sm:text-lg font-bold" style={{ color: theme.colors.text.primary }}>
              Module {module.moduleId}
            </h3>
            {isComplete && <CheckCircle2 size={18} style={{ color: theme.colors.status.success }} />}
            {locked && <Lock size={18} style={{ color: theme.colors.text.muted }} />}
          </div>
          <p className="text-sm font-semibold mb-1" style={{ color: theme.colors.text.primary }}>
            {module.title}
          </p>
          <p className="text-xs sm:text-sm line-clamp-1" style={{ color: theme.colors.text.secondary }}>
            {module.narrative}
          </p>
        </div>
        <div className="flex flex-col items-end gap-2 flex-shrink-0">
          <div className="flex items-center gap-2 text-xs font-semibold" style={{ color: theme.colors.text.muted }}>
            <span>{module.completedLessons}/{module.totalLessons}</span>
            <span style={{ color: isComplete ? theme.colors.status.success : theme.colors.primary.electric }}>
              {Math.round(module.progress)}%
            </span>
          </div>
          {!locked && <ChevronRight size={16} style={{ color: theme.colors.text.muted }} />}
        </div>
      </div>

      <div className="h-2 overflow-hidden border rounded-full" style={{
        backgroundColor: theme.colors.background.subtle,
        borderColor: theme.colors.border.subtle,
      }}>
        <div
          className="h-full transition-all"
          style={{
            width: `${module.progress}%`,
            background: isComplete
              ? theme.colors.status.success
              : `linear-gradient(90deg, ${theme.colors.primary.electric} 0%, ${theme.colors.accent.cyan} 100%)`,
            transitionDuration: '1000ms',
          }}
        />
      </div>
    </Link>
  );
}
