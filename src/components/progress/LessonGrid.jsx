import { CheckCircle2, Circle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { theme, behavior } from '../../styles/theme';

export function LessonGrid({ lessons, stats, totalLessons = 44 }) {
  const hoverClasses = behavior.hoverScale ? 'hover:scale-110' : 'hover:shadow-sm';

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg sm:text-xl font-bold mb-4" style={{ color: theme.colors.text.primary }}>
          Lessons Overview
        </h2>
        <div className="grid grid-cols-6 sm:grid-cols-8 gap-2">
          {Array.from({ length: totalLessons }, (_, i) => i + 1).map(lessonNum => {
            const isCompleted = stats.lessonCompletion[lessonNum] === true;

            return (
              <Link
                key={lessonNum}
                to={`/modules/${Math.ceil(lessonNum / 6)}/lessons/${((lessonNum - 1) % 6) + 1}`}
                className={`aspect-square rounded-lg border-2 flex items-center justify-center transition-all ${hoverClasses} group relative`}
                style={{
                  backgroundColor: isCompleted
                    ? `${theme.colors.status.success}20`
                    : theme.colors.background.card,
                  borderColor: isCompleted
                    ? theme.colors.status.success
                    : theme.colors.border.subtle,
                  boxShadow: isCompleted && behavior.hoverGlow
                    ? `0 0 10px ${theme.colors.status.success}30`
                    : 'none',
                }}
              >
                <div className="text-center">
                  {isCompleted ? (
                    <CheckCircle2 size={20} style={{ color: theme.colors.status.success, margin: '0 auto' }} />
                  ) : (
                    <div className="text-xs font-bold" style={{ color: theme.colors.text.primary }}>
                      {lessonNum}
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
