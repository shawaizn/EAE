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
      <div className="max-w-screen-xl mx-auto px-8 py-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link to="/dashboard" className="text-cyan-600 hover:text-cyan-700 font-medium transition-colors">
              Dashboard
            </Link>
            <span className="mx-2 text-slate-400">/</span>
            <Link to={`/modules/${moduleIdNum}`} className="text-cyan-600 hover:text-cyan-700 font-medium transition-colors">
              {module.title}
            </Link>
            <span className="mx-2 text-slate-400">/</span>
            <span className="text-slate-600 font-medium">Recap</span>
          </div>

          {/* Header */}
          <div className="mb-24">
            <h1 className="text-5xl font-black text-slate-900 mb-3" style={{ letterSpacing: '-0.02em' }}>
              Module Recap
            </h1>
            <p className="text-lg text-slate-600 font-medium">{module.title}</p>
          </div>

          {/* Module Notes */}
          <div className="mb-24 border-2 border-slate-200 rounded-lg shadow-sm">
            <div className="p-6 bg-slate-50 border-b-2 border-slate-200 flex items-center gap-3">
              <FileText size={24} className="text-cyan-600" />
              <h2 className="text-2xl font-black text-slate-900" style={{ letterSpacing: '-0.02em' }}>Module Notes</h2>
            </div>
            <div className="p-12">
              <p className="text-slate-700 mb-6 leading-relaxed">
                [Module {moduleIdNum} notes will be displayed here]
              </p>
              <p className="text-slate-600">
                These are comprehensive notes summarizing all {module.lessons.length} lessons in this module.
              </p>
            </div>
          </div>

          {/* Practice Quiz */}
          <div className="mb-24 border-2 border-cyan-600 rounded-lg bg-cyan-50 shadow-sm">
            <div className="p-12">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen size={28} className="text-cyan-600" />
                <h2 className="text-2xl font-black text-slate-900" style={{ letterSpacing: '-0.02em' }}>Practice Quiz</h2>
              </div>
              <p className="text-slate-700 mb-8 leading-relaxed text-lg">
                Test your knowledge with {module.lessons.length} lessons worth of questions.
              </p>
              <Link
                to={`/quiz/lesson/${moduleIdNum}`}
                className="inline-block px-8 py-4 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors font-semibold"
              >
                Start Module Quiz
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div className="pt-12 border-t-2 border-slate-200 flex justify-between items-center">
            {moduleIdNum > 1 ? (
              <Link
                to={`/modules/${moduleIdNum - 1}`}
                className="px-6 py-3 text-slate-900 border-2 border-slate-200 rounded-lg hover:bg-slate-50 transition font-semibold"
              >
                ← Previous Module
              </Link>
            ) : (
              <div></div>
            )}
            {moduleIdNum < 8 && (
              <Link
                to={`/modules/${moduleIdNum + 1}`}
                className="px-8 py-4 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-semibold"
              >
                Next Module →
              </Link>
            )}
          </div>
        </div>
      </div>
  );
}