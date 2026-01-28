import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useProgress } from '../hooks/useProgress';
import { Button } from '../components/ui/Button';
import { Modal } from '../components/ui/Modal';
import { Check, Copy, ChevronDown, ChevronUp } from 'lucide-react';
import { modulesData } from '../data/modulesData';
import { lessonMedia } from '../data/lessonMedia';
import { activityData } from '../data/activityData';
import { getLessonNumber } from '../lib/utils';

export function LessonPage() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const { moduleId, lessonId } = useParams();
  const [showSummary, setShowSummary] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isMarking, setIsMarking] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
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
  const activityKey = `${moduleIdNum}-${lessonIdNum}`;
  const activity = activityData[activityKey];
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
            <span className="text-slate-600 font-medium">{lesson.title}</span>
          </div>

          {/* Lesson Title */}
          <h1 className="text-5xl font-black text-slate-900 mb-24" style={{ letterSpacing: '-0.02em' }}>
            {lesson.title}
          </h1>

          {/* Video */}
          <div className="mb-24 bg-black rounded-lg overflow-hidden shadow-lg">
            <div dangerouslySetInnerHTML={{ __html: lessonMedia_.video }} />
          </div>

          {/* Summary Section */}
          <div className="mb-24 border-2 border-slate-200 rounded-lg shadow-sm">
            <button
              onClick={() => setShowSummary(!showSummary)}
              className="w-full flex items-center justify-between p-6 bg-slate-50 hover:bg-slate-100 transition"
            >
              <h2 className="text-2xl font-black text-slate-900" style={{ letterSpacing: '-0.02em' }}>Lesson Summary</h2>
              <div className="flex items-center gap-3">
                {!showSummary && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopySummary();
                    }}
                    className="p-2 hover:bg-slate-200 rounded transition"
                    title="Copy summary"
                  >
                    <Copy size={20} className={copied ? 'text-cyan-600' : 'text-slate-600'} />
                  </button>
                )}
                {showSummary ? <ChevronUp size={24} className="text-slate-600" /> : <ChevronDown size={24} className="text-slate-600" />}
              </div>
            </button>
            {showSummary && (
              <div className="p-6 border-t-2 border-slate-200">
                <div className="prose prose-sm max-w-none text-slate-700 mb-6" dangerouslySetInnerHTML={{ __html: lessonMedia_.summary }} />
                <button
                  onClick={handleCopySummary}
                  className="flex items-center gap-2 px-6 py-3 bg-slate-100 text-slate-800 rounded-lg hover:bg-slate-200 transition font-medium"
                >
                  <Copy size={18} />
                  {copied ? 'Copied!' : 'Copy Summary'}
                </button>
              </div>
            )}
          </div>

          {/* Guide Section */}
          <div className="mb-24 border-2 border-slate-200 rounded-lg overflow-hidden shadow-sm">
            <div className="p-6 bg-slate-50 border-b-2 border-slate-200">
              <h2 className="text-2xl font-black text-slate-900" style={{ letterSpacing: '-0.02em' }}>Guide</h2>
            </div>
            <div className="p-12 bg-white">
              <div dangerouslySetInnerHTML={{ __html: lessonMedia_.guide }} />
            </div>
          </div>

          {/* Activity Section */}
          {activity && (
            <div className="mb-24 border-2 border-slate-200 rounded-lg shadow-sm">
              <div className="p-6 bg-slate-50 border-b-2 border-slate-200">
                <h2 className="text-2xl font-black text-slate-900" style={{ letterSpacing: '-0.02em' }}>Skill</h2>
              </div>
              <div className="p-12 text-slate-700 space-y-8">
                {/* Skill */}
                <div>
                  <h3 className="text-lg font-black text-slate-900 mb-3" style={{ letterSpacing: '-0.02em' }}>Skills You're Building:</h3>
                  <p className="text-lg font-semibold text-cyan-600">{activity.skill}</p>
                </div>

                {/* Connection */}
                <div>
                  <h3 className="text-lg font-black text-slate-900 mb-3" style={{ letterSpacing: '-0.02em' }}>Connection:</h3>
                  <p className="text-slate-700 leading-relaxed">{activity.connection}</p>
                </div>

                {/* Activity */}
                <div>
                  <h3 className="text-lg font-black text-slate-900 mb-3" style={{ letterSpacing: '-0.02em' }}>Activity:</h3>
                  <div className="text-slate-700 whitespace-pre-line leading-relaxed">{activity.activity}</div>
                </div>

                {/* Why this matters */}
                <div>
                  <h3 className="text-lg font-black text-slate-900 mb-3" style={{ letterSpacing: '-0.02em' }}>Why this matters:</h3>
                  <p className="text-slate-700 leading-relaxed">{activity.whyMatters}</p>
                </div>

                {/* Audience Buttons */}
                <div className="pt-6 border-t-2 border-slate-200">
                  <h3 className="text-lg font-black text-slate-900 mb-6" style={{ letterSpacing: '-0.02em' }}>Apply this as:</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <button
                      onClick={() => setActiveModal('learners')}
                      className="px-6 py-4 bg-slate-100 text-slate-900 rounded-lg hover:bg-slate-200 transition font-semibold border-2 border-slate-200"
                    >
                      📚 Learners
                    </button>
                    <button
                      onClick={() => setActiveModal('employees')}
                      className="px-6 py-4 bg-slate-100 text-slate-900 rounded-lg hover:bg-slate-200 transition font-semibold border-2 border-slate-200"
                    >
                      💼 Employees
                    </button>
                    <button
                      onClick={() => setActiveModal('selfEmployed')}
                      className="px-6 py-4 bg-slate-100 text-slate-900 rounded-lg hover:bg-slate-200 transition font-semibold border-2 border-slate-200"
                    >
                      🚀 Self-Employed
                    </button>
                    <button
                      onClick={() => setActiveModal('businesses')}
                      className="px-6 py-4 bg-slate-100 text-slate-900 rounded-lg hover:bg-slate-200 transition font-semibold border-2 border-slate-200"
                    >
                      🏢 Businesses
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Modals */}
          <Modal
            isOpen={activeModal === 'learners'}
            onClose={() => setActiveModal(null)}
            title="For Learners"
          >
            <div className="whitespace-pre-line">{activity?.learners}</div>
          </Modal>

          <Modal
            isOpen={activeModal === 'employees'}
            onClose={() => setActiveModal(null)}
            title="For Employees"
          >
            <div className="whitespace-pre-line">{activity?.employees}</div>
          </Modal>

          <Modal
            isOpen={activeModal === 'selfEmployed'}
            onClose={() => setActiveModal(null)}
            title="For Self-Employed"
          >
            <div className="whitespace-pre-line">{activity?.selfEmployed}</div>
          </Modal>

          <Modal
            isOpen={activeModal === 'businesses'}
            onClose={() => setActiveModal(null)}
            title="For Businesses"
          >
            <div className="whitespace-pre-line">{activity?.businesses}</div>
          </Modal>

          {/* Mark Complete Button */}
          <div className="pt-12 border-t-2 border-slate-200">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button
                variant={completed ? 'success' : 'primary'}
                onClick={handleToggleComplete}
                disabled={isMarking}
                className="flex items-center gap-2"
              >
                {completed ? (
                  <>
                    <Check size={20} /> Completed
                  </>
                ) : (
                  'Mark as Complete'
                )}
              </Button>

              {completed && (() => {
                // Find next lesson
                const currentLessonIndex = module.lessons.findIndex(l => l.id === lessonIdNum);
                const nextLesson = module.lessons[currentLessonIndex + 1];

                if (nextLesson) {
                  // Next lesson in same module
                  return (
                    <Link
                      to={`/modules/${moduleIdNum}/lessons/${nextLesson.id}`}
                      className="px-6 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors"
                    >
                      Next Lesson →
                    </Link>
                  );
                } else {
                  // Last lesson in module - go to recap
                  return (
                    <Link
                      to={`/modules/${moduleIdNum}/recap`}
                      className="px-6 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors"
                    >
                      View Module Recap →
                    </Link>
                  );
                }
              })()}
            </div>
          </div>
        </div>
      </div>
  );
}