import { useAuth } from '../hooks/useAuth';
import { useProgress } from '../hooks/useProgress';
import { modulesData } from '../data/modulesData';
import { getLessonNumber, getProgressStats } from '../lib/utils';
import { Link } from 'react-router-dom';
import { theme } from '../styles/theme';
import { CheckCircle2, Circle, Zap, TrendingUp } from 'lucide-react';

const moduleNarratives = [
  "Accelerated foundations -- what AI is, how it fits in technology history, and the evolution to machine learning.",
  "Evaluation frameworks -- how ChatGPT works, the autonomy ladder, and frameworks to evaluate ANY AI tool.",
  "Market structure -- how AI goes from research labs to products, who controls what, and business models.",
  "Strategic restraint -- when to use AI, when NOT to, which work to protect, and the five AI traps.",
  "Contextual prompting -- frameworks, meta-prompting, and building custom prompt libraries for YOUR workflow.",
  "Systems thinking -- building workflows around outcomes, creating playbooks that survive tool changes.",
  "Competitive positioning -- what skills increase in value, which advantages AI can't replicate.",
  "Systematic implementation -- building workflows that last, team collaboration, measuring real impact."
];

export function ProgressPage() {
  const { user } = useAuth();
  const { completions, isComplete, loading } = useProgress(user?.id, []);

  const stats = getProgressStats(completions);
  const totalLessons = 44;

  const allLessonsArray = Array.from({ length: totalLessons }, (_, i) => i + 1);

  const allModules = modulesData.map((module, index) => {
    const completedLessons = module.lessons.filter(
      lesson => isComplete(getLessonNumber(module.id, lesson.id), 'lesson')
    ).length;
    const progress = (completedLessons / module.lessons.length) * 100;
    return {
      moduleId: module.id,
      title: module.title,
      progress,
      completedLessons,
      totalLessons: module.lessons.length,
      narrative: moduleNarratives[index]
    };
  });

  const getLessonCompletionPercent = (lessonNum) => {
    const categories = stats.lessonCompletion[lessonNum] || [];
    return (categories.length / 5) * 100;
  };

  return (
    <div className="w-full min-h-screen overflow-y-auto p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2" style={{
            letterSpacing: '-0.02em',
            color: theme.colors.text.primary,
          }}>
            Learning Progress
          </h1>
          <p className="text-sm sm:text-base" style={{ color: theme.colors.text.secondary }}>
            Track your completion across all 44 lessons
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          <div className="p-4 rounded-xl border" style={{
            borderColor: theme.colors.border.subtle,
            backgroundColor: theme.colors.background.card,
            boxShadow: theme.shadows.subtle,
          }}>
            <p className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: theme.colors.primary.electric }}>
              {stats.percentComplete}%
            </p>
            <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: theme.colors.text.secondary }}>
              Overall
            </p>
          </div>

          <div className="p-4 rounded-xl border" style={{
            borderColor: theme.colors.border.subtle,
            backgroundColor: theme.colors.background.card,
            boxShadow: theme.shadows.subtle,
          }}>
            <p className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: theme.colors.accent.cyan }}>
              {stats.lessonsFullyCompleted}/44
            </p>
            <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: theme.colors.text.secondary }}>
              Completed
            </p>
          </div>

          <div className="p-4 rounded-xl border" style={{
            borderColor: theme.colors.border.subtle,
            backgroundColor: theme.colors.background.card,
            boxShadow: theme.shadows.subtle,
          }}>
            <p className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: theme.colors.accent.coral }}>
              {stats.lessonsStarted}
            </p>
            <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: theme.colors.text.secondary }}>
              Started
            </p>
          </div>

          <div className="p-4 rounded-xl border" style={{
            borderColor: theme.colors.border.subtle,
            backgroundColor: theme.colors.background.card,
            boxShadow: theme.shadows.subtle,
          }}>
            <p className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: theme.colors.status.success }}>
              {stats.totalCompleted}
            </p>
            <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: theme.colors.text.secondary }}>
              Items Done
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg sm:text-xl font-bold mb-4" style={{ color: theme.colors.text.primary }}>
            Lessons Overview
          </h2>
          <div className="grid grid-cols-6 sm:grid-cols-8 gap-2">
            {allLessonsArray.map(lessonNum => {
              const isCompleted = stats.lessonCompletion[lessonNum]?.length === 5;
              const hasStarted = (stats.lessonCompletion[lessonNum]?.length || 0) > 0;

              return (
                <Link
                  key={lessonNum}
                  to={`/modules/${Math.ceil(lessonNum / 6)}/lessons/${((lessonNum - 1) % 6) + 1}`}
                  className="aspect-square rounded-lg border-2 flex items-center justify-center transition-all hover:scale-110"
                  style={{
                    backgroundColor: isCompleted
                      ? `${theme.colors.status.success}20`
                      : hasStarted
                      ? `${theme.colors.primary.electric}20`
                      : theme.colors.background.card,
                    borderColor: isCompleted
                      ? theme.colors.status.success
                      : hasStarted
                      ? theme.colors.primary.electric
                      : theme.colors.border.subtle,
                    boxShadow: isCompleted
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

        <div className="mb-8">
          <h2 className="text-lg sm:text-xl font-bold mb-4" style={{ color: theme.colors.text.primary }}>
            Modules
          </h2>
          <div className="space-y-3">
            {allModules.map((module) => (
              <Link
                key={module.moduleId}
                to={`/modules/${module.moduleId}`}
                className="block p-5 sm:p-6 border-2 rounded-xl transition-all hover:shadow-md"
                style={{
                  backgroundColor: theme.colors.background.card,
                  borderColor: module.progress > 0 ? theme.colors.primary.electric : theme.colors.border.subtle,
                  boxShadow: module.progress > 0 ? `0 0 15px ${theme.colors.primary.electric}20` : theme.shadows.subtle,
                }}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-bold mb-1" style={{ color: theme.colors.text.primary }}>
                      Module {module.moduleId}: {module.title}
                    </h3>
                    <p className="text-xs sm:text-sm line-clamp-1" style={{ color: theme.colors.text.secondary }}>
                      {module.narrative}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold whitespace-nowrap flex-shrink-0" style={{ color: theme.colors.text.muted }}>
                    {module.completedLessons}/{module.totalLessons}
                    <span style={{ color: module.progress === 100 ? theme.colors.status.success : theme.colors.primary.electric }}>
                      {Math.round(module.progress)}%
                    </span>
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
                      background: module.progress === 100
                        ? theme.colors.status.success
                        : `linear-gradient(90deg, ${theme.colors.primary.electric} 0%, ${theme.colors.accent.cyan} 100%)`,
                      transitionDuration: '1000ms',
                    }}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
