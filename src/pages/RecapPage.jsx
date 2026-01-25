import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useProgress } from '../hooks/useProgress';
import { modulesData } from '../data/modulesData';
import { Button } from '../components/ui/Button';
import { BookOpen, FileText } from 'lucide-react';
import { getLessonNumber } from '../lib/utils';

export function RecapPage() {
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

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link to="/dashboard" className="text-blue-600 hover:text-blue-700">
              Dashboard
            </Link>
            <span className="mx-2 text-gray-400">&gt;</span>
            <Link to={`/modules/${moduleIdNum}`} className="text-blue-600 hover:text-blue-700">
              {module.title}
            </Link>
            <span className="mx-2 text-gray-400">&gt;</span>
            <span className="text-gray-600">Recap</span>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Module Recap</h1>
            <p className="text-gray-600">{module.title}</p>
          </div>

          {/* Module Notes */}
          <div className="mb-8 border rounded-lg">
            <div className="p-4 bg-gray-50 flex items-center gap-2">
              <FileText size={20} className="text-blue-600" />
              <h2 className="font-semibold text-gray-900">Module Notes</h2>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                [Module {moduleIdNum} notes will be displayed here]
              </p>
              <p className="text-gray-600 text-sm">
                These are comprehensive notes summarizing all {module.lessons.length} lessons in this module.
              </p>
            </div>
          </div>

          {/* Practice Quiz */}
          <div className="mb-8 border rounded-lg bg-blue-50">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen size={20} className="text-blue-600" />
                <h2 className="font-semibold text-gray-900">Practice Quiz</h2>
              </div>
              <p className="text-gray-700 mb-6">
                Test your knowledge with {module.lessons.length} lessons worth of questions. 
              </p>
              <Link
                to={`/quiz/lesson/${moduleIdNum}`}
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
              >
                Start Module Quiz
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div className="pt-8 border-t flex justify-between">
            {moduleIdNum > 1 && (
              <Link
                to={`/modules/${moduleIdNum - 1}`}
                className="px-6 py-3 text-gray-700 border rounded-lg hover:bg-gray-50 transition font-medium"
              >
                ← Previous Module
              </Link>
            )}
            <div></div>
            {moduleIdNum < 8 && (
              <Link
                to={`/modules/${moduleIdNum + 1}`}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
              >
                Next Module →
              </Link>
            )}
          </div>
        </div>
      </div>
  );
}