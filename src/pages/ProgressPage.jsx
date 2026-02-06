import { useAuth } from '../hooks/useAuth';
import { useProgress } from '../hooks/useProgress';
import { modulesData } from '../data/modulesData';
import { getLessonNumber, getProgressStats } from '../lib/utils';
import { theme } from '../styles/theme';
import { StreakIndicator, ProgressRing, StatCard, AchievementBadge, ModuleProgressCard, LessonGrid } from '../components/progress';
import { BookOpen, Zap, TrendingUp, CheckCircle2 } from 'lucide-react';

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

  const getPowerLevel = (percentComplete) => {
    if (percentComplete >= 75) return 'Expert';
    if (percentComplete >= 50) return 'Advanced';
    if (percentComplete >= 25) return 'Intermediate';
    if (percentComplete > 0) return 'Beginner';
    return 'Just Starting';
  };

  return (
    <div className="w-full min-h-screen overflow-y-auto p-4 sm:p-6 lg:p-8" style={{ backgroundColor: theme.colors.background.base }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <div>
              <h1 className="text-3xl sm:text-5xl font-bold mb-2" style={{
                letterSpacing: '-0.02em',
                color: theme.colors.text.primary,
              }}>
                Your Learning Journey
              </h1>
              <p className="text-sm sm:text-base" style={{ color: theme.colors.text.secondary }}>
                Master AI strategy across 44 lessons
              </p>
            </div>
            <div className="flex gap-3">
              <StreakIndicator days={0} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
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
            value={`${stats.lessonsFullyCompleted}/44`}
            color="success"
          />
          <StatCard
            icon={Zap}
            label="Started"
            value={stats.lessonsStarted}
            color="coral"
          />
          <StatCard
            icon={BookOpen}
            label="Items Done"
            value={stats.totalCompleted}
            color="cyan"
          />
          <div className="p-4 sm:p-6 rounded-xl border transition-all" style={{
            backgroundColor: `linear-gradient(135deg, ${theme.colors.background.card} 0%, ${theme.colors.background.subtle} 100%)`,
            borderColor: `${theme.colors.primary.electric}30`,
          }}>
            <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: theme.colors.text.secondary }}>
              Level
            </p>
            <p className="text-2xl sm:text-3xl font-bold" style={{ color: theme.colors.primary.electric }}>
              {getPowerLevel(stats.percentComplete)}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {[10, 25, 50, 75, 100].map(milestone => (
            <AchievementBadge
              key={milestone}
              milestone={milestone}
              unlocked={stats.percentComplete >= milestone}
            />
          ))}
        </div>

        <div className="mb-8">
          <LessonGrid lessons={allLessonsArray} stats={stats} totalLessons={totalLessons} />
        </div>

        <div className="mb-8">
          <h2 className="text-lg sm:text-xl font-bold mb-4" style={{ color: theme.colors.text.primary }}>
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
