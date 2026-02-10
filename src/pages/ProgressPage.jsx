import { useAuth } from '../hooks/useAuth';
import { useProgress } from '../hooks/useProgress';
import { modulesData } from '../data/modulesData';
import { getLessonNumber, getProgressStats, getModuleAndLesson } from '../lib/utils';
import { behavior, lang, theme } from '../styles/theme';
import { StatCard, ModuleProgressCard, LessonGrid } from '../components/progress';
import { CheckCircle2, Bookmark, X, ChevronRight } from 'lucide-react';
import { useBookmarks } from '../hooks/useBookmarks';
import { Link } from 'react-router-dom';

const COLORS = {
  bg: theme.colors.background.light || theme.colors.background.base,
  cardBg: theme.colors.background.card,
  textPrimary: theme.colors.text.primary,
  textSecondary: theme.colors.text.secondary,
  accent: theme.colors.accent.cyan,
  primary: theme.colors.primary.deep,
  primaryElectric: theme.colors.primary.electric,
  border: theme.colors.border.subtle,
};

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
  const { bookmarks, toggleBookmark } = useBookmarks(user?.id);

  const stats = getProgressStats(completions);
  const totalLessons = 44;

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

  const nextIncompleteModule = allModules.find(m => m.progress < 100);
  const nextIncompleteLesson = nextIncompleteModule
    ? nextIncompleteModule.lessons?.find(l => !isComplete(getLessonNumber(nextIncompleteModule.moduleId, l.id), 'lesson'))
    : null;

  return (
    <div className="w-full min-h-screen overflow-y-auto p-4 sm:p-6 lg:p-8" style={{ backgroundColor: COLORS.bg }}>
      <div className="max-w-6xl mx-auto">
        {/* Header: Clear orientation */}
        <div className="mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold mb-2" style={{
            letterSpacing: '-0.02em',
            color: COLORS.textPrimary,
          }}>
            {lang.progressTitle}
          </h1>
          <p className="text-base sm:text-lg" style={{ color: COLORS.textSecondary }}>
            {lang.progressSubtitle}
          </p>
        </div>

        {/* Key Metrics: Scan-friendly summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <StatCard
            icon={CheckCircle2}
            label="Lessons Completed"
            value={`${stats.lessonsCompleted}/44`}
            color="success"
          />
          <StatCard
            icon={CheckCircle2}
            label="Modules In Progress"
            value={`${allModules.filter(m => m.progress > 0 && m.progress < 100).length}/${allModules.length}`}
            color="cyan"
          />
          <div className="p-4 sm:p-6 rounded-xl border transition-all hover:shadow-md" style={{
            backgroundColor: COLORS.cardBg,
            borderColor: COLORS.border,
          }}>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: COLORS.textSecondary }}>
              Overall Progress
            </p>
            <p className="text-4xl sm:text-5xl font-bold" style={{ color: COLORS.primaryElectric }}>
              {Math.round(stats.percentComplete)}%
            </p>
          </div>
        </div>

        {/* Next Steps: Clear call to action */}
        {nextIncompleteModule && (
          <div className="mb-10 p-5 sm:p-6 rounded-xl border" style={{
            backgroundColor: `${COLORS.primaryElectric}08`,
            borderColor: `${COLORS.primaryElectric}30`,
          }}>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: COLORS.textSecondary }}>
              Next Module to Start
            </p>
            <Link
              to={`/modules/${nextIncompleteModule.moduleId}`}
              className="flex items-center justify-between gap-3 hover:gap-4 transition-all group"
            >
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-bold mb-1" style={{ color: COLORS.textPrimary }}>
                  {nextIncompleteModule.title}
                </h3>
                <p className="text-sm line-clamp-1" style={{ color: COLORS.textSecondary }}>
                  {nextIncompleteModule.narrative}
                </p>
              </div>
              <ChevronRight size={20} style={{ color: COLORS.accent, flexShrink: 0 }} />
            </Link>
          </div>
        )}

        {/* Lesson Overview: Quick glance */}
        <div className="mb-10">
          <LessonGrid lessons={Array.from({ length: totalLessons }, (_, i) => i + 1)} stats={stats} totalLessons={totalLessons} />
        </div>

        {/* Bookmarked Lessons: Quick access */}
        {bookmarks.length > 0 && (
          <div className="mb-10">
            <h2 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2" style={{ color: COLORS.textPrimary }}>
              <Bookmark size={18} style={{ color: COLORS.accent }} />
              Saved for Later
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {bookmarks.map(bm => {
                const { moduleId, lessonId } = getModuleAndLesson(bm.lesson_number);
                const module = modulesData.find(m => m.id === moduleId);
                const lesson = module?.lessons.find(l => l.id === lessonId);
                if (!module || !lesson) return null;
                return (
                  <div key={bm.id} className="group relative p-4 rounded-xl border transition-all hover:shadow-md" style={{
                    backgroundColor: COLORS.cardBg,
                    borderColor: COLORS.border
                  }}>
                    <button
                      onClick={() => toggleBookmark(bm.lesson_number)}
                      className="absolute top-3 right-3 p-1 rounded-md text-slate-300 hover:text-slate-500 opacity-0 group-hover:opacity-100 transition-all"
                      title="Remove bookmark"
                    >
                      <X size={14} />
                    </button>
                    <Link to={`/modules/${moduleId}/lessons/${lessonId}`} className="block">
                      <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: COLORS.accent }}>
                        Module {moduleId}
                      </p>
                      <p className="text-sm font-bold pr-6" style={{ color: COLORS.textPrimary }}>
                        {lesson.title}
                      </p>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Module Curriculum: Complete view */}
        <div className="mb-8">
          <h2 className="text-lg sm:text-xl font-bold mb-4" style={{ color: COLORS.textPrimary }}>
            Module Curriculum
          </h2>
          <div className="space-y-3">
            {allModules.map((module) => (
              <ModuleProgressCard key={module.moduleId} module={module} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
