import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useProgress } from '../hooks/useProgress';
import { modulesData } from '../data/modulesData';
import { moduleIntros } from '../data/moduleIntros';
import { ProgressBar } from '../components/ui/ProgressBar';
import { Check } from 'lucide-react';
import { getLessonNumber } from '../lib/utils';

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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link to="/dashboard" className="text-blue-600 hover:text-blue-700">
              Dashboard
            </Link>
            <span className="mx-2 text-gray-400">&gt;</span>
            <span className="text-gray-600">{module.title}</span>
          </div>

          {/* Module Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">{module.title}</h1>
            <p className="text-gray-600">Module {moduleIdNum} of {modulesData.length}</p>
          </div>

          {/* Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold">Progress</h2>
              <span className="text-gray-600 text-sm">
                {completedLessons} of {module.lessons.length} lessons complete
              </span>
            </div>
            <ProgressBar progress={progress} />
          </div>

          {/* Module Introduction */}
          {moduleIntros[moduleIdNum] && (
            <div className="mb-8 bg-blue-50 rounded-lg p-6 space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-blue-900 mb-2">What You Already Know</h3>
                <p className="text-gray-700 leading-relaxed">{moduleIntros[moduleIdNum].activation}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-blue-900 mb-2">In This Module</h3>
                <p className="text-gray-700 leading-relaxed">{moduleIntros[moduleIdNum].zoom}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-blue-900 mb-2">Why This Matters</h3>
                <p className="text-gray-700 leading-relaxed">{moduleIntros[moduleIdNum].stakes}</p>
              </div>
            </div>
          )}

          {/* Lessons List */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Lessons</h2>
            <div className="space-y-3">
              {module.lessons.map((lesson) => {
                const completed = isComplete(getLessonNumber(moduleIdNum, lesson.id), 'lesson');
                return (
                  <Link
                    key={lesson.id}
                    to={`/modules/${moduleIdNum}/lessons/${lesson.id}`}
                    className="block p-4 border rounded-lg hover:bg-gray-50 transition"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-gray-900">Lesson {lesson.id}: {lesson.title}</h3>
                      </div>
                      {completed && (
                        <Check size={20} className="text-green-600" />
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Recap Button */}
          <div className="mt-8 pt-8 border-t">
            <Link
              to={`/modules/${moduleIdNum}/recap`}
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
            >
              Go to Module Recap
            </Link>
          </div>
        </div>
      </div>
  );
}