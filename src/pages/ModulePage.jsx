import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useProgress } from '../hooks/useProgress';
import { modulesData } from '../data/modulesData';
import { moduleIntros } from '../data/moduleIntros';
import { ProgressBar } from '../components/ui/ProgressBar';
import { Check } from 'lucide-react';
import { getLessonNumber } from '../lib/utils';
import { BRAND } from '../lib/brandConstants';

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

  return (
    <div className="flex-1 overflow-y-auto relative">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 relative z-10">
          {/* Breadcrumb */}
          {/* <div className="mb-8">
            <Link to="/dashboard" className="text-cyan-600 hover:text-cyan-700 font-medium transition-colors">
              Dashboard
            </Link>
            <span className="mx-2 text-slate-400">/</span>
            <span className="text-slate-600 font-medium">{module.title}</span>
          </div> */}

          {/* Module Header */}
          <div className="mb-12 sm:mb-24">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-2 sm:mb-3" style={{ letterSpacing: '-0.02em' }}>
              {module.title}
            </h1>
            <p className="text-sm sm:text-lg text-slate-600 font-medium">Module {moduleIdNum} of {modulesData.length}</p>
          </div>

          {/* Progress */}
          <div className="mb-12 sm:mb-24 border-2 border-slate-200 rounded-lg p-4 sm:p-6 lg:p-8 shadow-lg bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:border-violet-400/50">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 mb-4">
              <h2 className="text-lg sm:text-2xl font-black text-slate-900" style={{ letterSpacing: '-0.02em' }}>Your Progress</h2>
              <span className="text-sm sm:text-base text-slate-700 font-semibold">
                {completedLessons} / {module.lessons.length} lessons
              </span>
            </div>
            <ProgressBar progress={progress} />
          </div>

          {/* Module Introduction */}
          {moduleIntros[moduleIdNum] && (
            <div className="mb-12 sm:mb-24 border-2 border-cyan-600 rounded-lg overflow-hidden shadow-lg bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div className="p-4 sm:p-6 bg-cyan-50 border-b-2 border-cyan-600">
                <h2 className="text-lg sm:text-2xl font-black text-slate-900" style={{ letterSpacing: '-0.02em' }}>
                  Module Overview
                </h2>
              </div>
              <div className="p-4 sm:p-8 lg:p-12 bg-white space-y-6 sm:space-y-8">
                <div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 mb-2 sm:mb-3" style={{ letterSpacing: '-0.02em' }}>
                    What You Already Know
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{moduleIntros[moduleIdNum].activation}</p>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 mb-2 sm:mb-3" style={{ letterSpacing: '-0.02em' }}>
                    In This Module
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{moduleIntros[moduleIdNum].zoom}</p>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 mb-2 sm:mb-3" style={{ letterSpacing: '-0.02em' }}>
                    Why This Matters
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{moduleIntros[moduleIdNum].stakes}</p>
                </div>
              </div>
            </div>
          )}

          {/* Lessons List */}
          <div className="mb-12 sm:mb-24">
            <h2 className="text-lg sm:text-2xl font-black text-slate-900 mb-4 sm:mb-6" style={{ letterSpacing: '-0.02em' }}>Lessons</h2>
            <div className="space-y-2 sm:space-y-4">
              {module.lessons.map((lesson) => {
                const completed = isComplete(getLessonNumber(moduleIdNum, lesson.id), 'lesson');
                return (
                  <Link
                    key={lesson.id}
                    to={`/modules/${moduleIdNum}/lessons/${lesson.id}`}
                    className="block p-3 sm:p-6 border-2 border-slate-200 rounded-lg bg-white/80 backdrop-blur-sm hover:border-cyan-600 hover:shadow-xl hover:-translate-y-1 hover:shadow-cyan-500/20 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="min-w-0 flex-1">
                        <h3 className="text-base sm:text-lg font-semibold text-slate-900 break-words">
                          Lesson {lesson.id}: {lesson.title}
                        </h3>
                      </div>
                      {completed && (
                        <Check size={20} className="text-cyan-600 flex-shrink-0 sm:w-6 sm:h-6" />
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Recap Button */}
          <div className="pt-6 sm:pt-12 border-t-2 border-slate-200">
            <Link
              to={`/modules/${moduleIdNum}/recap`}
              className="inline-block w-full sm:w-auto text-center px-6 sm:px-8 py-3 sm:py-4 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-semibold text-sm sm:text-base"
            >
              Go to Module Recap →
            </Link>
          </div>
        </div>
      </div>
  );
}