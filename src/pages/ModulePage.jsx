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
    <div className="flex-1 overflow-y-auto">
      <div className="max-w-screen-xl mx-auto px-8 py-8">
          {/* Breadcrumb */}
          {/* <div className="mb-8">
            <Link to="/dashboard" className="text-cyan-600 hover:text-cyan-700 font-medium transition-colors">
              Dashboard
            </Link>
            <span className="mx-2 text-slate-400">/</span>
            <span className="text-slate-600 font-medium">{module.title}</span>
          </div> */}

          {/* Module Header */}
          <div className="mb-24">
            <h1 className="text-5xl font-black text-slate-900 mb-3" style={{ letterSpacing: '-0.02em' }}>
              {module.title}
            </h1>
            <p className="text-lg text-slate-600 font-medium">Module {moduleIdNum} of {modulesData.length}</p>
          </div>

          {/* Progress */}
          <div className="mb-24 border-2 border-slate-200 rounded-lg p-8 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-black text-slate-900" style={{ letterSpacing: '-0.02em' }}>Your Progress</h2>
              <span className="text-slate-700 font-semibold">
                {completedLessons} / {module.lessons.length} lessons
              </span>
            </div>
            <ProgressBar progress={progress} />
          </div>

          {/* Module Introduction */}
          {moduleIntros[moduleIdNum] && (
            <div className="mb-24 border-2 border-cyan-600 rounded-lg overflow-hidden shadow-sm">
              <div className="p-6 bg-cyan-50 border-b-2 border-cyan-600">
                <h2 className="text-2xl font-black text-slate-900" style={{ letterSpacing: '-0.02em' }}>
                  Module Overview
                </h2>
              </div>
              <div className="p-12 bg-white space-y-8">
                <div>
                  <h3 className="text-lg font-black text-slate-900 mb-3" style={{ letterSpacing: '-0.02em' }}>
                    What You Already Know
                  </h3>
                  <p className="text-slate-700 leading-relaxed">{moduleIntros[moduleIdNum].activation}</p>
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900 mb-3" style={{ letterSpacing: '-0.02em' }}>
                    In This Module
                  </h3>
                  <p className="text-slate-700 leading-relaxed">{moduleIntros[moduleIdNum].zoom}</p>
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900 mb-3" style={{ letterSpacing: '-0.02em' }}>
                    Why This Matters
                  </h3>
                  <p className="text-slate-700 leading-relaxed">{moduleIntros[moduleIdNum].stakes}</p>
                </div>
              </div>
            </div>
          )}

          {/* Lessons List */}
          <div className="mb-24">
            <h2 className="text-2xl font-black text-slate-900 mb-6" style={{ letterSpacing: '-0.02em' }}>Lessons</h2>
            <div className="space-y-4">
              {module.lessons.map((lesson) => {
                const completed = isComplete(getLessonNumber(moduleIdNum, lesson.id), 'lesson');
                return (
                  <Link
                    key={lesson.id}
                    to={`/modules/${moduleIdNum}/lessons/${lesson.id}`}
                    className="block p-6 border-2 border-slate-200 rounded-lg hover:border-cyan-600 hover:shadow-md transition"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">
                          Lesson {lesson.id}: {lesson.title}
                        </h3>
                      </div>
                      {completed && (
                        <Check size={24} className="text-cyan-600" />
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Recap Button */}
          <div className="pt-12 border-t-2 border-slate-200">
            <Link
              to={`/modules/${moduleIdNum}/recap`}
              className="inline-block px-8 py-4 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-semibold"
            >
              Go to Module Recap →
            </Link>
          </div>
        </div>
      </div>
  );
}