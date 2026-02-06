import { useAuth } from '../hooks/useAuth';
import { useProgress } from '../hooks/useProgress';
import { modulesData } from '../data/modulesData';
import { getLessonNumber } from '../lib/utils';
import { Link } from 'react-router-dom';
import { theme } from '../styles/theme';
import { ArrowRight, CheckCircle2, Lock, Zap, Rocket } from 'lucide-react';

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
  const { isComplete, loading } = useProgress(user?.id, []);

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

  const totalProgress = Math.round(allModules.reduce((acc, m) => acc + m.progress, 0) / 8);
  const completedModules = allModules.filter(m => m.progress === 100).length;
  const totalLessons = modulesData.reduce((acc, m) => acc + m.lessons.length, 0);
  const completedLessons = allModules.reduce((acc, m) => acc + m.completedLessons, 0);

  const currentLesson = !loading ? (() => {
    for (const module of modulesData) {
      for (const lesson of module.lessons) {
        const lessonNumber = getLessonNumber(module.id, lesson.id);
        if (!isComplete(lessonNumber, 'lesson')) {
          return {
            moduleId: module.id,
            lessonId: lesson.id,
            moduleTitle: module.title,
            lessonTitle: lesson.title
          };
        }
      }
    }
    return null;
  })() : null;

  const getModuleState = (index) => {
    const current = allModules[index];
    if (current.progress === 100) return 'completed';
    if (current.progress > 0) return 'in-progress';
    if (index === 0) {
      const hasInProgressModule = allModules.some(m => m.progress > 0 && m.progress < 100);
      if (!hasInProgressModule) return 'in-progress';
    }
    return 'incomplete';
  };

  return (
    <div className="w-full min-h-screen overflow-y-auto p-4 sm:p-6 lg:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2" style={{
            letterSpacing: '-0.02em',
            color: theme.colors.text.primary,
          }}>
            Your Progress
          </h1>
          <p className="text-sm sm:text-base" style={{ color: theme.colors.text.secondary }}>
            Track your journey through strategic AI implementation
          </p>
        </div>

        {currentLesson && (
          <Link
            to={`/modules/${currentLesson.moduleId}/lessons/${currentLesson.lessonId}`}
            className="block mb-8 p-5 sm:p-6 rounded-xl border-2 transition-all hover:shadow-lg group"
            style={{
              borderColor: theme.colors.accent.cyan,
              background: `linear-gradient(135deg, ${theme.colors.accent.cyan}08 0%, ${theme.colors.background.card} 100%)`,
              boxShadow: `0 0 20px ${theme.colors.accent.cyan}10`,
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2 rounded-lg flex-shrink-0" style={{
                  backgroundColor: `${theme.colors.accent.cyan}15`,
                }}>
                  <Zap size={20} style={{ color: theme.colors.accent.cyan }} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: theme.colors.accent.cyan }}>
                    Continue Learning
                  </p>
                  <p className="font-semibold truncate" style={{ color: theme.colors.text.primary }}>
                    {currentLesson.moduleTitle} &mdash; {currentLesson.lessonTitle}
                  </p>
                </div>
              </div>
              <ArrowRight size={20} style={{ color: theme.colors.accent.cyan }} className="flex-shrink-0 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        )}

        {!currentLesson && !loading && (
          <div className="mb-8 p-5 sm:p-6 rounded-xl border-2 text-center" style={{
            borderColor: theme.colors.status.success,
            background: `linear-gradient(135deg, ${theme.colors.status.success}08 0%, ${theme.colors.background.card} 100%)`,
          }}>
            <div className="flex items-center justify-center gap-2">
              <Rocket size={20} style={{ color: theme.colors.status.success }} />
              <p className="font-semibold" style={{ color: theme.colors.status.success }}>
                All Modules Complete!
              </p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="p-5 rounded-xl border" style={{
            borderColor: theme.colors.border.subtle,
            backgroundColor: theme.colors.background.card,
            boxShadow: theme.shadows.subtle,
          }}>
            <p className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: theme.colors.accent.cyan }}>
              {completedLessons}/{totalLessons}
            </p>
            <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: theme.colors.text.secondary }}>
              Lessons Completed
            </p>
          </div>

          <div className="p-5 rounded-xl border" style={{
            borderColor: theme.colors.border.subtle,
            backgroundColor: theme.colors.background.card,
            boxShadow: theme.shadows.subtle,
          }}>
            <p className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: theme.colors.primary.electric }}>
              {totalProgress}%
            </p>
            <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: theme.colors.text.secondary }}>
              Overall Progress
            </p>
          </div>

          <div className="p-5 rounded-xl border" style={{
            borderColor: theme.colors.border.subtle,
            backgroundColor: theme.colors.background.card,
            boxShadow: theme.shadows.subtle,
          }}>
            <p className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: theme.colors.accent.coral }}>
              {completedModules}/8
            </p>
            <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: theme.colors.text.secondary }}>
              Modules Done
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg sm:text-xl font-bold" style={{ color: theme.colors.text.primary }}>
            Module Progress
          </h2>
        </div>

        <div className="space-y-3">
          {allModules.map((module, index) => {
            const state = getModuleState(index);
            const isCompleted = state === 'completed';
            const isInProgress = state === 'in-progress';
            const isIncomplete = state === 'incomplete';

            let borderColor = theme.colors.border.subtle;
            let badgeStyle = {};
            let badgeIcon = null;
            let badgeText = 'Incomplete';

            if (isCompleted) {
              borderColor = theme.colors.status.success;
              badgeStyle = {
                backgroundColor: `${theme.colors.status.success}15`,
                color: theme.colors.status.success,
                border: `1px solid ${theme.colors.status.success}40`,
              };
              badgeIcon = <CheckCircle2 size={14} />;
              badgeText = 'Completed';
            } else if (isInProgress) {
              borderColor = theme.colors.primary.electric;
              badgeStyle = {
                background: `linear-gradient(135deg, ${theme.colors.primary.electric} 0%, ${theme.colors.accent.cyan} 100%)`,
                color: 'white',
                fontWeight: '600',
              };
              badgeText = 'Current';
            } else {
              badgeStyle = {
                backgroundColor: theme.colors.background.subtle,
                color: theme.colors.text.muted,
              };
              badgeIcon = <Lock size={14} />;
            }

            return (
              <Link
                key={module.moduleId}
                to={`/modules/${module.moduleId}`}
                className="block p-5 sm:p-6 border-2 rounded-xl transition-all hover:shadow-md"
                style={{
                  backgroundColor: theme.colors.background.card,
                  borderColor,
                  boxShadow: isInProgress ? `0 0 15px ${theme.colors.primary.electric}20` : theme.shadows.subtle,
                  opacity: isIncomplete ? 0.6 : 1,
                  pointerEvents: isIncomplete ? 'none' : 'auto',
                  cursor: isIncomplete ? 'not-allowed' : 'pointer',
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
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold whitespace-nowrap flex-shrink-0" style={badgeStyle}>
                    {badgeIcon}
                    {badgeText}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold tracking-wide" style={{ color: theme.colors.text.muted }}>
                    {module.completedLessons} / {module.totalLessons} lessons
                  </span>
                  <span className="text-xs" style={{ color: theme.colors.text.muted }}>
                    {Math.round(module.progress)}%
                  </span>
                </div>

                <div className="h-2 overflow-hidden border rounded-full" style={{
                  backgroundColor: theme.colors.background.subtle,
                  borderColor: theme.colors.border.subtle,
                }}>
                  <div
                    className="h-full transition-all"
                    style={{
                      width: `${module.progress}%`,
                      background: isCompleted
                        ? theme.colors.status.success
                        : `linear-gradient(90deg, ${theme.colors.primary.electric} 0%, ${theme.colors.accent.cyan} 100%)`,
                      transitionDuration: '1000ms',
                    }}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
