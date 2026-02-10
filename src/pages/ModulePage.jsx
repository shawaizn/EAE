import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useProgress } from '../hooks/useProgress';
import { modulesData } from '../data/modulesData';
import { moduleIntros } from '../data/moduleIntros';
import { Check, CheckCircle2, Circle, ArrowRight, BookOpen } from 'lucide-react';
import { getLessonNumber } from '../lib/utils';
import { theme } from '../styles/theme';

export function ModulePage() {
  const { user } = useAuth();
  const { moduleId } = useParams();
  const { isComplete, loading } = useProgress(user?.id, []);

  const moduleIdNum = parseInt(moduleId);
  const module = modulesData.find(m => m.id === moduleIdNum);

  if (!module) {
    return (
      <div className="flex-1 p-8">
        <p>Module not found</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  const completedLessons = module.lessons.filter(
    lesson => isComplete(getLessonNumber(moduleIdNum, lesson.id), 'lesson')
  ).length;
  const progress = (completedLessons / module.lessons.length) * 100;
  const nextLesson = module.lessons.find(
    lesson => !isComplete(getLessonNumber(moduleIdNum, lesson.id), 'lesson')
  );

  return (
    <div className="flex-1 overflow-y-auto" style={{ backgroundColor: theme.colors.background.base }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="space-y-8">
          <div className="rounded-2xl border-2 overflow-hidden" style={{
            backgroundColor: theme.colors.background.card,
            borderColor: theme.colors.primary.electric,
          }}>
            <div className="relative p-8 lg:p-12">
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `linear-gradient(135deg, ${theme.colors.primary.electric} 0%, ${theme.colors.accent.cyan} 100%)`,
              }} />

              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4" style={{
                  backgroundColor: `${theme.colors.primary.electric}15`,
                  border: `1px solid ${theme.colors.primary.electric}30`,
                }}>
                  <BookOpen size={14} style={{ color: theme.colors.primary.electric }} />
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: theme.colors.primary.electric }}>
                    Module {moduleIdNum} of {modulesData.length}
                  </span>
                </div>

                <h1 className="text-3xl lg:text-5xl font-bold mb-6" style={{
                  color: theme.colors.text.primary,
                  letterSpacing: '-0.02em',
                }}>
                  {module.title}
                </h1>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="p-4 rounded-xl" style={{
                    backgroundColor: `${theme.colors.primary.electric}08`,
                    border: `1px solid ${theme.colors.primary.electric}20`,
                  }}>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{
                      color: theme.colors.text.muted
                    }}>
                      Progress
                    </p>
                    <p className="text-2xl font-bold" style={{ color: theme.colors.primary.electric }}>
                      {Math.round(progress)}%
                    </p>
                  </div>

                  <div className="p-4 rounded-xl" style={{
                    backgroundColor: `${theme.colors.accent.cyan}08`,
                    border: `1px solid ${theme.colors.accent.cyan}20`,
                  }}>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{
                      color: theme.colors.text.muted
                    }}>
                      Completed
                    </p>
                    <p className="text-2xl font-bold" style={{ color: theme.colors.accent.cyan }}>
                      {completedLessons} / {module.lessons.length}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl" style={{
                    backgroundColor: `${theme.colors.accent.coral}08`,
                    border: `1px solid ${theme.colors.accent.coral}20`,
                  }}>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{
                      color: theme.colors.text.muted
                    }}>
                      Est. Time
                    </p>
                    <p className="text-2xl font-bold" style={{ color: theme.colors.accent.coral }}>
                      ~{Math.ceil(module.lessons.length * 0.5)}h
                    </p>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="h-3 rounded-full overflow-hidden" style={{
                    backgroundColor: `${theme.colors.primary.electric}15`,
                  }}>
                    <div
                      className="h-full transition-all duration-500"
                      style={{
                        width: `${progress}%`,
                        background: `linear-gradient(90deg, ${theme.colors.primary.electric} 0%, ${theme.colors.accent.cyan} 100%)`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {nextLesson && (
            <Link
              to={`/modules/${moduleIdNum}/lessons/${nextLesson.id}`}
              className="group block p-6 rounded-xl border-2 transition-all hover:shadow-lg"
              style={{
                backgroundColor: theme.colors.background.card,
                borderColor: theme.colors.accent.cyan,
              }}
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{
                    color: theme.colors.accent.cyan
                  }}>
                    Continue Learning
                  </p>
                  <h3 className="text-xl font-bold" style={{ color: theme.colors.text.primary }}>
                    Lesson {nextLesson.id}: {nextLesson.title}
                  </h3>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all group-hover:scale-110" style={{
                  backgroundColor: theme.colors.accent.cyan,
                }}>
                  <ArrowRight size={18} style={{ color: 'white' }} />
                </div>
              </div>
            </Link>
          )}

          {moduleIntros[moduleIdNum] && (
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl border" style={{
                backgroundColor: theme.colors.background.card,
                borderColor: theme.colors.border.subtle,
              }}>
                <h3 className="text-lg font-bold mb-3" style={{
                  color: theme.colors.text.primary
                }}>
                  What You Already Know
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: theme.colors.text.secondary }}>
                  {moduleIntros[moduleIdNum].activation}
                </p>
              </div>

              <div className="p-6 rounded-xl border" style={{
                backgroundColor: theme.colors.background.card,
                borderColor: theme.colors.border.subtle,
              }}>
                <h3 className="text-lg font-bold mb-3" style={{
                  color: theme.colors.text.primary
                }}>
                  In This Module
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: theme.colors.text.secondary }}>
                  {moduleIntros[moduleIdNum].zoom}
                </p>
              </div>

              <div className="p-6 rounded-xl border" style={{
                backgroundColor: theme.colors.background.card,
                borderColor: theme.colors.border.subtle,
              }}>
                <h3 className="text-lg font-bold mb-3" style={{
                  color: theme.colors.text.primary
                }}>
                  Why This Matters
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: theme.colors.text.secondary }}>
                  {moduleIntros[moduleIdNum].stakes}
                </p>
              </div>
            </div>
          )}

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{
              color: theme.colors.text.primary,
              letterSpacing: '-0.02em'
            }}>
              Lessons
            </h2>
            <div className="grid gap-3">
              {module.lessons.map((lesson) => {
                const completed = isComplete(getLessonNumber(moduleIdNum, lesson.id), 'lesson');
                return (
                  <Link
                    key={lesson.id}
                    to={`/modules/${moduleIdNum}/lessons/${lesson.id}`}
                    className="group flex items-center gap-4 p-5 rounded-xl border-2 transition-all hover:shadow-md"
                    style={{
                      backgroundColor: completed
                        ? `${theme.colors.status.success}05`
                        : theme.colors.background.card,
                      borderColor: completed
                        ? theme.colors.status.success
                        : theme.colors.border.subtle,
                    }}
                  >
                    <div className="flex-shrink-0">
                      {completed ? (
                        <CheckCircle2 size={24} style={{ color: theme.colors.status.success }} />
                      ) : (
                        <Circle size={24} style={{ color: theme.colors.border.subtle }} />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-semibold" style={{ color: theme.colors.text.primary }}>
                        Lesson {lesson.id}: {lesson.title}
                      </h3>
                    </div>
                    <ArrowRight size={20} className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: theme.colors.text.muted }} />
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <Link
              to={`/modules/${moduleIdNum}/recap`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 text-white"
              style={{
                background: `linear-gradient(135deg, ${theme.colors.primary.electric} 0%, ${theme.colors.accent.cyan} 100%)`,
              }}
            >
              View Module Recap <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
