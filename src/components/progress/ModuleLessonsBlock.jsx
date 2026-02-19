import { useState } from 'react';
import { theme } from '../../styles/theme';
import { CheckCircle2, ChevronDown, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { modulesData } from '../../data/modulesData';

export function ModuleLessonsBlock({ module, lessons, isComplete, getModuleAndLesson, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen ?? false);

  const moduleData = modulesData.find(m => m.id === module.moduleId);

  const tierColors = {
    1: { accent: theme.colors.primary.electric },
    2: { accent: theme.colors.accent.cyan },
    3: { accent: theme.colors.primary.deep },
  };

  const getTier = (moduleId) => {
    if (moduleId <= 2) return 1;
    if (moduleId <= 5) return 2;
    return 3;
  };

  const tier = getTier(module.moduleId);
  const accentColor = tierColors[tier].accent;
  const isFullyComplete = module.progress === 100;
  const progressColor = isFullyComplete ? theme.colors.status.success : accentColor;

  return (
    <div className="rounded-xl border overflow-hidden" style={{
      backgroundColor: theme.colors.background.card,
      borderColor: isFullyComplete ? theme.colors.status.success : theme.colors.border.subtle,
    }}>
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full text-left flex items-center gap-4 px-5 py-4 transition-colors hover:bg-slate-50/60"
      >
        <div className="flex-1 min-w-0 flex items-center gap-4">
          <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold" style={{
            backgroundColor: isFullyComplete ? theme.colors.status.success : `${accentColor}15`,
            color: isFullyComplete ? 'white' : accentColor,
          }}>
            {isFullyComplete ? <CheckCircle2 size={16} color="white" /> : module.moduleId}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: accentColor }}>
                Module {module.moduleId}
              </span>
            </div>
            <p className="text-sm font-semibold truncate" style={{ color: theme.colors.text.primary }}>
              {module.title}
            </p>
          </div>
        </div>

        <div className="flex-shrink-0 flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-3">
            <div className="w-24 h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: `${accentColor}15` }}>
              <div className="h-full rounded-full transition-all duration-500" style={{
                width: `${module.progress}%`,
                backgroundColor: progressColor,
              }} />
            </div>
            <span className="text-sm font-semibold w-10 text-right" style={{ color: progressColor }}>
              {Math.round(module.progress)}%
            </span>
          </div>

          <span className="text-xs font-medium hidden sm:block" style={{ color: theme.colors.text.muted }}>
            {module.completedLessons}/{module.totalLessons}
          </span>

          {open
            ? <ChevronDown size={16} style={{ color: theme.colors.text.muted }} />
            : <ChevronRight size={16} style={{ color: theme.colors.text.muted }} />
          }
        </div>
      </button>

      {open && (
        <div className="border-t px-5 py-4" style={{ borderColor: theme.colors.border.subtle }}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {lessons.map((lessonNum) => {
              const { moduleId, lessonId } = getModuleAndLesson(lessonNum);
              const completed = isComplete(lessonNum, 'lesson');
              const lessonData = moduleData?.lessons.find(l => l.id === lessonId);
              const lessonTitle = lessonData?.title || `Lesson ${lessonId}`;

              return (
                <Link
                  key={lessonNum}
                  to={`/modules/${moduleId}/lessons/${lessonId}`}
                  className="group flex items-center gap-3 p-3 rounded-lg border transition-all hover:shadow-sm"
                  style={{
                    backgroundColor: completed ? `${theme.colors.status.success}08` : theme.colors.background.subtle,
                    borderColor: completed ? `${theme.colors.status.success}40` : theme.colors.border.subtle,
                  }}
                >
                  <div className="flex-shrink-0">
                    {completed ? (
                      <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{
                        backgroundColor: theme.colors.status.success,
                      }}>
                        <CheckCircle2 size={13} style={{ color: 'white' }} />
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

                  <span className="text-sm font-medium flex-1 min-w-0 truncate" style={{
                    color: completed ? theme.colors.status.success : theme.colors.text.primary
                  }}>
                    {lessonTitle}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
