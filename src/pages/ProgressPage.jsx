import { useAuth } from '../hooks/useAuth';
import { useProgress } from '../hooks/useProgress';
import { modulesData } from '../data/modulesData';
import { getLessonNumber, getProgressStats, getModuleAndLesson } from '../lib/utils';
import { theme } from '../styles/theme';
import {
  IntegratedProgressHero,
  ModuleTimeline,
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="space-y-8">
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

          <div className="grid lg:grid-cols-[1fr,380px] gap-8">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6" style={{
                  color: theme.colors.text.primary,
                  letterSpacing: '-0.02em'
                }}>
                  Modules & Lessons
                </h2>

                <div className="space-y-6">
                  {allModules.map(module => {
                    const moduleLessons = Array.from(
                      { length: module.totalLessons },
                      (_, i) => getLessonNumber(module.moduleId, i + 1)
                    );

                    return (
                      <ModuleLessonsBlock
                        key={module.moduleId}
                        module={module}
                        lessons={moduleLessons}
                        isComplete={isComplete}
                        getModuleAndLesson={getModuleAndLesson}
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <ModuleTimeline modules={allModules} />

              {bookmarks.length > 0 && (
                <div className="rounded-xl border p-5" style={{
                  backgroundColor: theme.colors.background.card,
                  borderColor: theme.colors.border.subtle,
                }}>
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2" style={{
                    color: theme.colors.text.primary
                  }}>
                    <Bookmark size={16} style={{ color: theme.colors.accent.cyan }} />
                    Bookmarks
                  </h3>

                  <div className="space-y-2">
                    {bookmarks.map(bm => {
                      const { moduleId, lessonId } = getModuleAndLesson(bm.lesson_number);
                      const module = modulesData.find(m => m.id === moduleId);
                      const lesson = module?.lessons.find(l => l.id === lessonId);
                      if (!module || !lesson) return null;

                      return (
                        <div
                          key={bm.id}
                          className="group relative p-3 rounded-lg border transition-all hover:shadow-sm"
                          style={{
                            backgroundColor: theme.colors.background.subtle,
                            borderColor: theme.colors.border.subtle
                          }}
                        >
                          <button
                            onClick={() => toggleBookmark(bm.lesson_number)}
                            className="absolute top-2 right-2 p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                            style={{ color: theme.colors.text.muted }}
                            title="Remove bookmark"
                          >
                            <X size={12} />
                          </button>

                          <Link to={`/modules/${moduleId}/lessons/${lessonId}`}>
                            <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{
                              color: theme.colors.accent.cyan
                            }}>
                              Module {moduleId}
                            </p>
                            <p className="text-sm font-medium pr-6" style={{
                              color: theme.colors.text.primary
                            }}>
                              {lesson.title}
                            </p>
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
