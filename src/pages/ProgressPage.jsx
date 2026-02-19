import { useAuth } from '../hooks/useAuth';
import { useProgress } from '../hooks/useProgress';
import { modulesData } from '../data/modulesData';
import { getLessonNumber, getProgressStats, getModuleAndLesson } from '../lib/utils';
import { theme } from '../styles/theme';
import {
  IntegratedProgressHero,
  ModuleLessonsBlock,
  ContinueLearningCard
} from '../components/progress';
import { Bookmark, X } from 'lucide-react';
import { useBookmarks } from '../hooks/useBookmarks';
import { Link } from 'react-router-dom';

const moduleNarratives = [
  "Learn what AI is, how it fits in technology history, and the evolution from programming to machine learning.",
  "Understand how ChatGPT works, the autonomy ladder, and frameworks to evaluate any AI tool in your workflow.",
  "Explore how AI moves from research labs to products, who controls what, and the business models driving development.",
  "Discover when to use AI and when not to, which work to protect, and how to avoid the five most common AI traps.",
  "Master contextual prompting frameworks, meta-prompting techniques, and build custom prompt libraries for your needs.",
  "Learn systems thinking for building workflows around outcomes and creating playbooks that survive tool changes.",
  "Identify which skills increase in value with AI and understand the competitive advantages AI cannot replicate.",
  "Build systematic implementation strategies, enable team collaboration, and learn to measure real business impact."
];

export function ProgressPage() {
  const { user } = useAuth();
  const { completions, isComplete, loading } = useProgress(user?.id, []);
  const { bookmarks, toggleBookmark } = useBookmarks(user?.id);

  const stats = getProgressStats(completions);

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
      narrative: moduleNarratives[index],
      lessons: module.lessons
    };
  });

  const currentModule = allModules.find(m => m.progress > 0 && m.progress < 100) || allModules[0];
  const nextIncompleteModule = allModules.find(m => m.progress < 100);
  const nextIncompleteLesson = nextIncompleteModule?.lessons?.find(
    l => !isComplete(getLessonNumber(nextIncompleteModule.moduleId, l.id), 'lesson')
  );

  const modulesCompleted = allModules.filter(m => m.progress === 100).length;

  return (
    <div className="w-full min-h-screen overflow-y-auto" style={{ backgroundColor: theme.colors.background.base }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          <IntegratedProgressHero
            stats={{ ...stats, modulesCompleted }}
            currentModuleInfo={currentModule}
          />

          {nextIncompleteModule && nextIncompleteLesson && (
            <ContinueLearningCard
              nextModule={nextIncompleteModule}
              nextLesson={nextIncompleteLesson}
            />
          )}

          {bookmarks.length > 0 && (
            <div className="rounded-xl border p-5" style={{
              backgroundColor: theme.colors.background.card,
              borderColor: theme.colors.border.subtle,
            }}>
              <h3 className="text-sm font-bold mb-3 flex items-center gap-2" style={{
                color: theme.colors.text.primary
              }}>
                <Bookmark size={14} style={{ color: theme.colors.accent.cyan }} />
                Bookmarks
              </h3>

              <div className="flex flex-wrap gap-2">
                {bookmarks.map(bm => {
                  const { moduleId, lessonId } = getModuleAndLesson(bm.lesson_number);
                  const module = modulesData.find(m => m.id === moduleId);
                  const lesson = module?.lessons.find(l => l.id === lessonId);
                  if (!module || !lesson) return null;

                  return (
                    <div
                      key={bm.id}
                      className="group relative inline-flex items-center gap-2 px-3 py-2 rounded-lg border transition-all"
                      style={{
                        backgroundColor: theme.colors.background.subtle,
                        borderColor: theme.colors.border.subtle
                      }}
                    >
                      <Link to={`/modules/${moduleId}/lessons/${lessonId}`} className="flex items-center gap-2">
                        <span className="text-xs font-semibold" style={{ color: theme.colors.accent.cyan }}>
                          M{moduleId}L{lessonId}
                        </span>
                        <span className="text-xs font-medium" style={{ color: theme.colors.text.primary }}>
                          {lesson.title}
                        </span>
                      </Link>
                      <button
                        onClick={() => toggleBookmark(bm.lesson_number)}
                        className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ color: theme.colors.text.muted }}
                        title="Remove bookmark"
                      >
                        <X size={12} />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <div>
            <h2 className="text-lg font-bold mb-4" style={{
              color: theme.colors.text.primary,
              letterSpacing: '-0.02em'
            }}>
              Modules & Lessons
            </h2>

            <div className="space-y-2">
              {allModules.map(module => {
                const moduleLessons = Array.from(
                  { length: module.totalLessons },
                  (_, i) => getLessonNumber(module.moduleId, i + 1)
                );
                const isDefaultOpen = currentModule?.moduleId === module.moduleId;

                return (
                  <ModuleLessonsBlock
                    key={module.moduleId}
                    module={module}
                    lessons={moduleLessons}
                    isComplete={isComplete}
                    getModuleAndLesson={getModuleAndLesson}
                    defaultOpen={isDefaultOpen}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
