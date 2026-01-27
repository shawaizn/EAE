import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useProgress } from '../hooks/useProgress';
import { Button } from '../components/ui/Button';
import { Check, Copy, ChevronDown, ChevronUp } from 'lucide-react';
import { modulesData } from '../data/modulesData';
import { lessonMedia } from '../data/lessonMedia';
import { getLessonNumber } from '../lib/utils';

export function LessonPage() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const { moduleId, lessonId } = useParams();
  const [showSummary, setShowSummary] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isMarking, setIsMarking] = useState(false);
  const { isComplete, toggleComplete, loading } = useProgress(user?.id, []);

  const moduleIdNum = parseInt(moduleId);
  const lessonIdNum = parseInt(lessonId);

  const module = modulesData.find(m => m.id === moduleIdNum);
  const lesson = module?.lessons.find(l => l.id === lessonIdNum);

  if (!module || !lesson) {
    return (
      <div className="flex-1 p-8">
        <p>Lesson not found</p>
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

  // After loading, calculate progress and access
  const lessonMedia_ = lessonMedia.getLesson(moduleIdNum, lessonIdNum);
  const globalLessonNumber = getLessonNumber(moduleIdNum, lessonIdNum);
  const completed = isComplete(globalLessonNumber, 'lesson');

  // Check if lesson media exists
  if (!lessonMedia_) {
    return (
      <div className="flex-1 p-8">
        <p>Lesson content not available</p>
      </div>
    );
  }

  const handleCopySummary = () => {
    navigator.clipboard.writeText(lessonMedia_.summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleToggleComplete = async () => {
    setIsMarking(true);
    try {
      await toggleComplete(globalLessonNumber, 'lesson');
    } catch (err) {
      console.error('Error toggling complete:', err);
    } finally {
      setIsMarking(false);
    }
  };

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
            <span className="text-gray-600">{lesson.title}</span>
          </div>

          {/* Video */}
          <div className="mb-8 bg-black rounded-lg overflow-hidden">
            <div dangerouslySetInnerHTML={{ __html: lessonMedia_.video }} />
          </div>

          {/* Summary Section */}
          <div className="mb-8 border rounded-lg">
            <button
              onClick={() => setShowSummary(!showSummary)}
              className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition"
            >
              <h3 className="font-semibold text-gray-900">Lesson Summary</h3>
              <div className="flex items-center gap-2">
                {!showSummary && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopySummary();
                    }}
                    className="p-2 hover:bg-gray-200 rounded transition"
                    title="Copy summary"
                  >
                    <Copy size={18} className={copied ? 'text-green-600' : 'text-gray-600'} />
                  </button>
                )}
                {showSummary ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
            </button>
            {showSummary && (
              <div className="p-4 border-t">
                <div className="prose prose-sm max-w-none text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: lessonMedia_.summary }} />
                <button
                  onClick={handleCopySummary}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded hover:bg-blue-100 transition text-sm font-medium"
                >
                  <Copy size={16} />
                  {copied ? 'Copied!' : 'Copy Summary'}
                </button>
              </div>
            )}
          </div>

          {/* Guide Section */}
          <div className="mb-8 border rounded-lg overflow-hidden">
            <div className="p-4 bg-gray-50">
              <h3 className="font-semibold text-gray-900">Guide</h3>
            </div>
            <div className="p-4 bg-white">
              <div dangerouslySetInnerHTML={{ __html: lessonMedia_.guide }} />
            </div>
          </div>

          {/* Activity Section */}
          <div className="mb-8 border rounded-lg">
            <div className="p-4 bg-gray-50">
              <h3 className="font-semibold text-gray-900">Activity</h3>
            </div>
            <div className="p-4 text-gray-700">
              <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: lessonMedia_.activity }} />
            </div>
          </div>

          {/* Mark Complete Button */}
          <div className="pt-8 border-t">
            <Button
              variant={completed ? 'success' : 'primary'}
              onClick={handleToggleComplete}
              disabled={isMarking}
              className="flex items-center gap-2"
            >
              {completed ? (
                <>
                  <Check size={18} /> Completed
                </>
              ) : (
                'Mark as Complete'
              )}
            </Button>
          </div>
        </div>
      </div>
  );
}