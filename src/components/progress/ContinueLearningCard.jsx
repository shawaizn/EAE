import { theme } from '../../styles/theme';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ContinueLearningCard({ nextModule, nextLesson }) {
  if (!nextModule || !nextLesson) return null;

  return (
    <Link
      to={`/modules/${nextModule.moduleId}/lessons/${nextLesson.id}`}
      className="group block relative overflow-hidden rounded-2xl border-2"
      style={{
        backgroundColor: theme.colors.background.card,
        borderColor: theme.colors.primary.electric,
      }}
    >
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(135deg, ${theme.colors.primary.electric} 0%, ${theme.colors.accent.cyan} 100%)`,
      }} />

      <div className="relative p-6 lg:p-8">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3" style={{
              backgroundColor: `${theme.colors.primary.electric}15`,
              border: `1px solid ${theme.colors.primary.electric}30`,
            }}>
              <BookOpen size={14} style={{ color: theme.colors.primary.electric }} />
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: theme.colors.primary.electric }}>
                Continue Learning
              </span>
            </div>

            <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{
              color: theme.colors.text.muted
            }}>
              Module {nextModule.moduleId} • Lesson {nextLesson.id}
            </p>

            <h2 className="text-2xl lg:text-3xl font-bold mb-2" style={{
              color: theme.colors.text.primary,
              letterSpacing: '-0.02em',
            }}>
              {nextLesson.title}
            </h2>

            <p className="text-base leading-relaxed max-w-2xl" style={{
              color: theme.colors.text.secondary
            }}>
              {nextModule.narrative}
            </p>
          </div>

          <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all group-hover:scale-110" style={{
            backgroundColor: theme.colors.primary.electric,
          }}>
            <ArrowRight size={20} style={{ color: 'white' }} />
          </div>
        </div>

        <div className="flex items-center gap-4 pt-4 border-t" style={{
          borderColor: theme.colors.border.subtle,
        }}>
          <div className="flex-1">
            <div className="h-2 rounded-full overflow-hidden" style={{
              backgroundColor: `${theme.colors.primary.electric}15`,
            }}>
              <div
                className="h-full transition-all"
                style={{
                  width: `${nextModule.progress}%`,
                  backgroundColor: theme.colors.primary.electric,
                }}
              />
            </div>
          </div>
          <p className="text-sm font-semibold" style={{ color: theme.colors.text.muted }}>
            {nextModule.completedLessons} / {nextModule.totalLessons} complete
          </p>
        </div>
      </div>
    </Link>
  );
}
