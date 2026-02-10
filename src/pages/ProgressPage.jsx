import { useAuth } from '../hooks/useAuth';
import { useProgress } from '../hooks/useProgress';
import { modulesData } from '../data/modulesData';
import { getLessonNumber, getProgressStats } from '../lib/utils';
import { behavior, lang, theme } from '../styles/theme';
import { StreakIndicator, ProgressRing, StatCard, AchievementBadge, ModuleProgressCard, LessonGrid } from '../components/progress';
import { TrendingUp, CheckCircle2, Bookmark, X } from 'lucide-react';
import { useBookmarks } from '../hooks/useBookmarks';
import { Link } from 'react-router-dom';
import { getModuleAndLesson } from '../lib/utils';

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

  const getPowerLevel = (percentComplete) => {
    if (percentComplete >= 75) return lang.levelLabels[75];
    if (percentComplete >= 50) return lang.levelLabels[50];
    if (percentComplete >= 25) return lang.levelLabels[25];
    if (percentComplete > 0) return lang.levelLabels[10];
    return lang.levelLabels[0];
  };

  return (
    <div className="w-full min-h-screen overflow-y-auto p-4 sm:p-6 lg:p-8" style={{ backgroundColor: COLORS.bg }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <div>
              <h1 className="text-3xl sm:text-5xl font-bold mb-2" style={{
                letterSpacing: '-0.02em',
                color: COLORS.textPrimary,
              }}>
                {lang.progressTitle}
              </h1>
              <p className="text-sm sm:text-base" style={{ color: COLORS.textSecondary }}>
                {lang.progressSubtitle}
              </p>
            </div>
            {behavior.showStreakIndicator && (
              <div className="flex gap-3">
                <StreakIndicator days={0} />
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <StatCard
            icon={TrendingUp}
            label="Overall Progress"
            value={`${stats.percentComplete}%`}
            color="electric"
            gradient={true}
          />
          <StatCard
            icon={CheckCircle2}
            label="Completed"
            value={`${stats.lessonsCompleted}/44`}
            color="success"
          />
          <div className={`p-4 sm:p-6 rounded-xl border transition-all ${behavior.hoverScale ? 'hover:shadow-lg hover:scale-105' : 'hover:shadow-md'} group cursor-default`} style={{
            backgroundColor: `linear-gradient(135deg, ${COLORS.primaryElectric}10 0%, ${COLORS.cardBg} 100%)`,
            borderColor: `${COLORS.primaryElectric}30`,
          }}>
            <div className="flex items-center gap-2 p-2 rounded-lg transition-all w-fit mb-3" style={{ backgroundColor: `${COLORS.primaryElectric}15` }} />

            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: COLORS.textSecondary }}>
              {behavior.gamificationLanguage ? 'Your Level' : 'Status'}
            </p>
            <p className="text-3xl sm:text-4xl font-bold transition-colors" style={{ color: COLORS.primaryElectric }}>
              {getPowerLevel(stats.percentComplete)}
            </p>
          </div>
        </div>

        {behavior.showAchievementBadges && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
            {[10, 25, 50, 75, 100].map(milestone => (
              <AchievementBadge
                key={milestone}
                milestone={milestone}
                unlocked={stats.percentComplete >= milestone}
              />
            ))}
          </div>
        )}

        <div className="mb-8">
          <LessonGrid lessons={allLessonsArray} stats={stats} totalLessons={totalLessons} />
        </div>

        {bookmarks.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2" style={{ color: COLORS.textPrimary }}>
              <Bookmark size={20} style={{ color: COLORS.accent }} />
              Bookmarked Lessons
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {bookmarks.map(bm => {
                const { moduleId, lessonId } = getModuleAndLesson(bm.lesson_number);
                const module = modulesData.find(m => m.id === moduleId);
                const lesson = module?.lessons.find(l => l.id === lessonId);
                if (!module || !lesson) return null;
                return (
                  <div key={bm.id} className="group relative p-4 rounded-xl border bg-white hover:shadow-md transition-all" style={{ borderColor: COLORS.border }}>
                    <button
                      onClick={() => toggleBookmark(bm.lesson_number)}
                      className="absolute top-3 right-3 p-1 rounded-md text-slate-300 hover:text-red-400 hover:bg-red-50 opacity-0 group-hover:opacity-100 transition-all"
                      title="Remove bookmark"
                    >
                      <X size={14} />
                    </button>
                    <Link to={`/modules/${moduleId}/lessons/${lessonId}`} className="block">
                      <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: COLORS.accent }}>
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

        <div className="mb-8">
          <h2 className="text-lg sm:text-xl font-bold mb-4" style={{ color: COLORS.textPrimary }}>
            Modules
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
