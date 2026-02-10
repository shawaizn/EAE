import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useProgress } from '../hooks/useProgress';
import { modulesData } from '../data/modulesData';
import { moduleIntros } from '../data/moduleIntros';
import { ProgressBar } from '../components/ui/ProgressBar';
import { Check } from 'lucide-react';
import { getLessonNumber } from '../lib/utils';
import { BRAND } from '../lib/brandConstants';
import { behavior, theme } from '../styles/theme';
import { Button } from '../components/ui/Button';

export function ModulePage() {
  const { user, signOut } = useAuth();
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

  // Always show loading state while progress data is being fetched
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

  const hoverLessonClasses = behavior.hoverScale
    ? 'hover:border-cyan-600 hover:shadow-xl hover:-translate-y-1 hover:shadow-cyan-500/20'
    : 'hover:border-cyan-600 hover:shadow-md';

  const hoverProgressClasses = behavior.hoverScale
    ? 'hover:shadow-xl hover:border-violet-400/50'
    : 'hover:shadow-md';

  const hoverOverviewClasses = behavior.hoverGlow
    ? 'hover:shadow-2xl hover:shadow-cyan-500/20'
    : 'hover:shadow-lg';

  return (
    <div className="flex-1 overflow-y-auto relative" style={{ backgroundColor: theme.colors.background.base }}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 relative z-10">
          {/* Module Header */}
          <div className="mb-12 sm:mb-24">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-2 sm:mb-3" style={{
              letterSpacing: '-0.02em',
              color: theme.colors.text.primary
            }}>
              {module.title}
            </h1>
            <p className="text-sm sm:text-lg font-medium" style={{ color: theme.colors.text.secondary }}>
              Module {moduleIdNum} of {modulesData.length}
            </p>
          </div>

          {/* Progress */}
          <div className={`mb-12 sm:mb-24 rounded-lg p-4 sm:p-6 lg:p-8 shadow-lg transition-all duration-300 ${hoverProgressClasses}`} style={{
            backgroundColor: theme.colors.background.card,
            borderWidth: '2px',
            borderColor: theme.colors.border.default,
          }}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 mb-4">
              <h2 className="text-lg sm:text-2xl font-black" style={{
                letterSpacing: '-0.02em',
                color: theme.colors.text.primary
              }}>Your Progress</h2>
              <span className="text-sm sm:text-base font-semibold" style={{ color: theme.colors.text.secondary }}>
                {completedLessons} / {module.lessons.length} lessons
              </span>
            </div>
            <ProgressBar progress={progress} />
          </div>

          {/* Module Introduction */}
          {moduleIntros[moduleIdNum] && (
            <div className={`mb-12 sm:mb-24 rounded-lg overflow-hidden shadow-lg transition-all duration-300 ${hoverOverviewClasses}`} style={{
              backgroundColor: theme.colors.background.card,
              borderWidth: '2px',
              borderColor: theme.colors.accent.cyan,
            }}>
              <div className="p-4 sm:p-6" style={{
                backgroundColor: `${theme.colors.accent.cyan}15`,
                borderBottomWidth: '2px',
                borderBottomColor: theme.colors.accent.cyan,
              }}>
                <h2 className="text-lg sm:text-2xl font-black" style={{
                  letterSpacing: '-0.02em',
                  color: theme.colors.text.primary
                }}>
                  Module Overview
                </h2>
              </div>
              <div className="p-4 sm:p-8 lg:p-12 space-y-6 sm:space-y-8" style={{ backgroundColor: theme.colors.background.card }}>
                <div>
                  <h3 className="text-base sm:text-lg font-black mb-2 sm:mb-3" style={{
                    letterSpacing: '-0.02em',
                    color: theme.colors.text.primary
                  }}>
                    What You Already Know
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed" style={{ color: theme.colors.text.secondary }}>
                    {moduleIntros[moduleIdNum].activation}
                  </p>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black mb-2 sm:mb-3" style={{
                    letterSpacing: '-0.02em',
                    color: theme.colors.text.primary
                  }}>
                    In This Module
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed" style={{ color: theme.colors.text.secondary }}>
                    {moduleIntros[moduleIdNum].zoom}
                  </p>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black mb-2 sm:mb-3" style={{
                    letterSpacing: '-0.02em',
                    color: theme.colors.text.primary
                  }}>
                    Why This Matters
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed" style={{ color: theme.colors.text.secondary }}>
                    {moduleIntros[moduleIdNum].stakes}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Lessons List */}
          <div className="mb-12 sm:mb-24">
            <h2 className="text-lg sm:text-2xl font-black mb-4 sm:mb-6" style={{
              letterSpacing: '-0.02em',
              color: theme.colors.text.primary
            }}>Lessons</h2>
            <div className="space-y-2 sm:space-y-4">
              {module.lessons.map((lesson) => {
                const completed = isComplete(getLessonNumber(moduleIdNum, lesson.id), 'lesson');
                return (
                  <Link
                    key={lesson.id}
                    to={`/modules/${moduleIdNum}/lessons/${lesson.id}`}
                    className={`block p-3 sm:p-6 rounded-lg transition-all duration-300 ${hoverLessonClasses}`}
                    style={{
                      backgroundColor: theme.colors.background.card,
                      borderWidth: '2px',
                      borderColor: theme.colors.border.default,
                    }}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="min-w-0 flex-1">
                        <h3 className="text-base sm:text-lg font-semibold break-words" style={{ color: theme.colors.text.primary }}>
                          Lesson {lesson.id}: {lesson.title}
                        </h3>
                      </div>
                      {completed && (
                        <Check size={20} className="flex-shrink-0 sm:w-6 sm:h-6" style={{ color: theme.colors.status.success }} />
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Recap Button */}
          <div className="pt-6 sm:pt-12" style={{
            borderTopWidth: '2px',
            borderTopColor: theme.colors.border.default,
          }}>
            <Link
              to={`/modules/${moduleIdNum}/recap`}
              className="inline-block w-full sm:w-auto text-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:opacity-90 transition-opacity font-semibold text-sm sm:text-base text-white"
              style={{
                backgroundColor: theme.colors.primary.deep,
              }}
            >
              Go to Module Recap →
            </Link>
          </div>
        </div>
      </div>
  );
}
