import { theme } from '../../styles/theme';
import { CheckCircle2, Circle, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ModuleTimeline({ modules }) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold" style={{
        color: theme.colors.text.primary,
        letterSpacing: '-0.02em'
      }}>
        Learning Journey
      </h2>

      <div className="relative">
        <div className="absolute left-4 top-8 bottom-8 w-0.5" style={{
          backgroundColor: theme.colors.border.default,
        }} />

        <div className="space-y-1">
          {modules.map((module, index) => {
            const isComplete = module.progress === 100;
            const isInProgress = module.progress > 0 && module.progress < 100;
            const isNext = !isComplete && !isInProgress && (index === 0 || modules[index - 1].progress === 100);
            const isLocked = !isComplete && !isInProgress && !isNext;

            return (
              <Link
                key={module.moduleId}
                to={!isLocked ? `/modules/${module.moduleId}` : '#'}
                className={`relative block group ${isLocked ? 'pointer-events-none' : ''}`}
              >
                <div className={`flex gap-4 p-4 rounded-xl transition-all ${
                  !isLocked ? 'hover:bg-slate-50/50' : ''
                }`}>
                  <div className="relative z-10 flex-shrink-0 mt-1">
                    {isComplete ? (
                      <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{
                        backgroundColor: theme.colors.status.success,
                      }}>
                        <CheckCircle2 size={18} style={{ color: 'white' }} />
                      </div>
                    ) : isInProgress || isNext ? (
                      <div className="w-8 h-8 rounded-full flex items-center justify-center border-2" style={{
                        backgroundColor: theme.colors.background.card,
                        borderColor: theme.colors.primary.electric,
                      }}>
                        <span className="text-sm font-bold" style={{ color: theme.colors.primary.electric }}>
                          {module.moduleId}
                        </span>
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full flex items-center justify-center border-2" style={{
                        backgroundColor: theme.colors.background.card,
                        borderColor: theme.colors.border.default,
                      }}>
                        <Lock size={14} style={{ color: theme.colors.text.muted }} />
                      </div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0 pt-0.5">
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{
                          color: isComplete
                            ? theme.colors.status.success
                            : isInProgress || isNext
                            ? theme.colors.primary.electric
                            : theme.colors.text.muted
                        }}>
                          Module {module.moduleId}
                          {isNext && ' • Next'}
                        </p>
                        <h3 className="text-base font-bold mb-1" style={{
                          color: isLocked ? theme.colors.text.muted : theme.colors.text.primary
                        }}>
                          {module.title}
                        </h3>
                      </div>

                      {!isLocked && (
                        <div className="text-right flex-shrink-0">
                          <p className="text-sm font-bold" style={{
                            color: isComplete ? theme.colors.status.success : theme.colors.primary.electric
                          }}>
                            {Math.round(module.progress)}%
                          </p>
                          <p className="text-xs" style={{ color: theme.colors.text.muted }}>
                            {module.completedLessons}/{module.totalLessons}
                          </p>
                        </div>
                      )}
                    </div>

                    {(isInProgress || isNext) && (
                      <div className="h-1.5 rounded-full overflow-hidden mt-3" style={{
                        backgroundColor: theme.colors.background.subtle,
                      }}>
                        <div
                          className="h-full transition-all duration-700"
                          style={{
                            width: `${module.progress}%`,
                            backgroundColor: theme.colors.primary.electric,
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
