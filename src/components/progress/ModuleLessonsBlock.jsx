import { theme } from '../../styles/theme';
import { CheckCircle2, Circle, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ModuleLessonsBlock({ module, lessons, isComplete, getModuleAndLesson }) {
  const tierColors = {
    1: { bg: `${theme.colors.primary.electric}08`, border: `${theme.colors.primary.electric}30`, text: theme.colors.primary.electric },
    2: { bg: `${theme.colors.accent.cyan}08`, border: `${theme.colors.accent.cyan}30`, text: theme.colors.accent.cyan },
    3: { bg: `${theme.colors.primary.deep}08`, border: `${theme.colors.primary.deep}30`, text: theme.colors.primary.deep },
  };

  const getTier = (moduleId) => {
    if (moduleId <= 2) return 1;
    if (moduleId <= 5) return 2;
    return 3;
  };

  const tier = getTier(module.moduleId);
  const tierColor = tierColors[tier];

  return (
    <div className="rounded-xl border overflow-hidden" style={{
      backgroundColor: theme.colors.background.card,
      borderColor: module.progress === 100 ? theme.colors.status.success : theme.colors.border.subtle,
    }}>
      <div className="p-5" style={{
        backgroundColor: tierColor.bg,
        borderBottom: `1px solid ${tierColor.border}`,
      }}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: tierColor.text }}>
                Module {module.moduleId}
              </span>
              {module.progress === 100 && (
                <CheckCircle2 size={16} style={{ color: theme.colors.status.success }} />
              )}
            </div>
            <h3 className="text-lg font-bold mb-1" style={{ color: theme.colors.text.primary }}>
              {module.title}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: theme.colors.text.secondary }}>
              {module.narrative}
            </p>
          </div>

          <div className="text-right flex-shrink-0">
            <p className="text-2xl font-bold mb-1" style={{
              color: module.progress === 100 ? theme.colors.status.success : tierColor.text
            }}>
              {Math.round(module.progress)}%
            </p>
            <p className="text-xs font-semibold" style={{ color: theme.colors.text.muted }}>
              {module.completedLessons} / {module.totalLessons} lessons
            </p>
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {lessons.map((lessonNum) => {
            const { moduleId, lessonId } = getModuleAndLesson(lessonNum);
            const completed = isComplete(lessonNum, 'lesson');

            return (
              <Link
                key={lessonNum}
                to={`/modules/${moduleId}/lessons/${lessonId}`}
                className="group flex items-center gap-3 p-3 rounded-lg border transition-all hover:shadow-sm"
                style={{
                  backgroundColor: completed ? `${theme.colors.status.success}08` : theme.colors.background.subtle,
                  borderColor: completed ? theme.colors.status.success : theme.colors.border.subtle,
                }}
              >
                <div className="flex-shrink-0">
                  {completed ? (
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{
                      backgroundColor: theme.colors.status.success,
                    }}>
                      <CheckCircle2 size={14} style={{ color: 'white' }} />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full flex items-center justify-center border" style={{
                      borderColor: theme.colors.border.default,
                      color: theme.colors.text.muted,
                    }}>
                      <span className="text-xs font-bold">{lessonId}</span>
                    </div>
                  )}
                </div>

                <span className="text-sm font-medium flex-1 min-w-0" style={{
                  color: completed ? theme.colors.status.success : theme.colors.text.primary
                }}>
                  Lesson {lessonId}
                </span>

                <ChevronRight
                  size={14}
                  className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: theme.colors.text.muted }}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
