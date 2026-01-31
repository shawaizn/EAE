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
import { getLessonNumber, parseMarkdownToHTML } from '../lib/utils';

export function LessonPage() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const { moduleId, lessonId } = useParams();
  const [showSummary, setShowSummary] = useState(true);
  const [showSkill, setShowSkill] = useState(false);
  const [showGuide, setShowGuide] = useState(false);
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

  const convertHtmlToText = (html) => {
    // Create a temporary DOM element to parse HTML
    const temp = document.createElement('div');
    temp.innerHTML = html;

    let text = '';

    // Process each child node
    const processNode = (node, indent = '') => {
      if (node.nodeType === Node.TEXT_NODE) {
        const trimmed = node.textContent.trim();
        if (trimmed) {
          text += trimmed + ' ';
        }
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        const tagName = node.tagName.toLowerCase();

        if (tagName === 'h3' || tagName === 'h2') {
          // Add heading with line breaks
          if (text.trim()) text = text.trim() + '\n\n';
          text += node.textContent.trim().toUpperCase() + '\n\n';
        } else if (tagName === 'ul') {
          // Process unordered list
          if (text.trim()) text = text.trim() + '\n';
          Array.from(node.children).forEach(li => {
            if (li.tagName.toLowerCase() === 'li') {
              text += '• ' + li.textContent.trim() + '\n';
            }
          });
          text += '\n';
        } else if (tagName === 'ol') {
          // Process ordered list
          if (text.trim()) text = text.trim() + '\n';
          Array.from(node.children).forEach((li, index) => {
            if (li.tagName.toLowerCase() === 'li') {
              text += `${index + 1}. ${li.textContent.trim()}\n`;
            }
          });
          text += '\n';
        } else if (tagName === 'p') {
          // Add paragraph with line breaks
          if (text.trim()) text = text.trim() + '\n\n';
          Array.from(node.childNodes).forEach(child => processNode(child));
          text = text.trim() + '\n';
        } else if (tagName === 'br') {
          text += '\n';
        } else if (tagName === 'div') {
          // Process div children
          Array.from(node.childNodes).forEach(child => processNode(child));
        } else {
          // For other elements, just process children
          Array.from(node.childNodes).forEach(child => processNode(child));
        }
      }
    };

    Array.from(temp.childNodes).forEach(child => processNode(child));

    // Clean up extra whitespace and normalize line breaks
    text = text.replace(/[ \t]+/g, ' '); // Replace multiple spaces with single space
    text = text.replace(/\n\s+/g, '\n'); // Remove spaces at beginning of lines
    text = text.replace(/\n{3,}/g, '\n\n'); // Replace multiple line breaks with double

    return text.trim();
  };

  const handleCopySummary = () => {
    const plainText = convertHtmlToText(lessonMedia_.summary);
    navigator.clipboard.writeText(plainText);
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
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {/* Breadcrumb */}
          {/* <div className="mb-8">
            <Link to="/dashboard" className="text-cyan-600 hover:text-cyan-700 font-medium transition-colors">
              Dashboard
            </Link>
            <span className="mx-2 text-slate-400">/</span>
            <Link to={`/modules/${moduleIdNum}`} className="text-cyan-600 hover:text-cyan-700 font-medium transition-colors">
              {module.title}
            </Link>
            <span className="mx-2 text-slate-400">/</span>
            <span className="text-slate-600 font-medium">{lesson.title}</span>
          </div> */}

          {/* Lesson Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-12 sm:mb-24" style={{ letterSpacing: '-0.02em' }}>
            {lesson.title}
          </h1>

          {/* Video */}
          <div className="mb-12 sm:mb-24 bg-black rounded-lg overflow-hidden shadow-lg">
            <div dangerouslySetInnerHTML={{ __html: lessonMedia_.video }} />
          </div>

          {/* Summary Section */}
          <div className="mb-12 sm:mb-24 border-2 border-slate-200 rounded-lg shadow-sm">
            <button
              onClick={() => setShowSummary(!showSummary)}
              className="w-full flex items-center justify-between p-4 sm:p-6 bg-slate-50 hover:bg-slate-100 transition"
            >
              <h2 className="text-lg sm:text-2xl font-black text-slate-900" style={{ letterSpacing: '-0.02em' }}>Lesson Summary</h2>
              <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                {!showSummary && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopySummary();
                    }}
                    className="p-2 hover:bg-slate-200 rounded transition"
                    title="Copy summary"
                  >
                    <Copy size={18} className={`${copied ? 'text-cyan-600' : 'text-slate-600'} sm:w-5 sm:h-5`} />
                  </button>
                )}
                {showSummary ? <ChevronUp size={20} className="text-slate-600 sm:w-6 sm:h-6" /> : <ChevronDown size={20} className="text-slate-600 sm:w-6 sm:h-6" />}
              </div>
            </button>
            {showSummary && (
              <div className="p-4 sm:p-6 border-t-2 border-slate-200">
                <div className="prose prose-sm max-w-none text-slate-700 mb-4 sm:mb-6" dangerouslySetInnerHTML={{ __html: lessonMedia_.summary }} />
                <button
                  onClick={handleCopySummary}
                  className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-slate-100 text-slate-800 rounded-lg hover:bg-slate-200 transition font-medium text-sm sm:text-base w-full sm:w-auto justify-center sm:justify-start"
                >
                  <Copy size={16} />
                  {copied ? 'Copied!' : 'Copy Summary'}
                </button>
              </div>
            )}
          </div>

          {/* Activity Section */}
          {activity && (
            <div className="mb-12 sm:mb-24 border-2 border-slate-200 rounded-lg shadow-sm">
              <button
                onClick={() => setShowSkill(!showSkill)}
                className="w-full flex items-center justify-between p-4 sm:p-6 bg-slate-50 hover:bg-slate-100 transition"
              >
                <h2 className="text-lg sm:text-2xl font-black text-slate-900 break-words" style={{ letterSpacing: '-0.02em' }}>
                  Skill{activity.skill && `: ${activity.skill}`}
                </h2>
                {showSkill ? <ChevronUp size={20} className="text-slate-600 flex-shrink-0 sm:w-6 sm:h-6" /> : <ChevronDown size={20} className="text-slate-600 flex-shrink-0 sm:w-6 sm:h-6" />}
              </button>
              {showSkill && (
              <div className="p-4 sm:p-8 lg:p-12 text-slate-700 space-y-6 sm:space-y-8 border-t-2 border-slate-200">
                {/* Skill */}
                <div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 mb-2 sm:mb-3" style={{ letterSpacing: '-0.02em' }}>Skills You're Building:</h3>
                  <p className="text-base sm:text-lg font-semibold text-cyan-600">{activity.skill}</p>
                </div>

                {/* Connection */}
                <div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 mb-2 sm:mb-3" style={{ letterSpacing: '-0.02em' }}>Connection:</h3>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{activity.connection}</p>
                </div>

                {/* Activity */}
                <div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 mb-2 sm:mb-3" style={{ letterSpacing: '-0.02em' }}>Activity:</h3>
                  <div className="text-sm sm:text-base text-slate-700 whitespace-pre-line leading-relaxed">{activity.activity}</div>
                </div>

                {/* Why this matters */}
                <div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 mb-2 sm:mb-3" style={{ letterSpacing: '-0.02em' }}>Why this matters:</h3>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{activity.whyMatters}</p>
                </div>

                {/* Audience Buttons */}
                <div className="pt-4 sm:pt-6 border-t-2 border-slate-200">
                  <h3 className="text-base sm:text-lg font-black text-slate-900 mb-4 sm:mb-6" style={{ letterSpacing: '-0.02em' }}>Apply this as:</h3>
                  <div className="grid grid-cols-2 gap-2 sm:gap-4">
                    <button
                      onClick={() => setActiveModal('learners')}
                      className="px-3 sm:px-6 py-2 sm:py-4 bg-slate-100 text-slate-900 rounded-lg hover:bg-slate-200 transition font-semibold border-2 border-slate-200 text-xs sm:text-sm"
                    >
                      📚 Learners
                    </button>
                    <button
                      onClick={() => setActiveModal('employees')}
                      className="px-3 sm:px-6 py-2 sm:py-4 bg-slate-100 text-slate-900 rounded-lg hover:bg-slate-200 transition font-semibold border-2 border-slate-200 text-xs sm:text-sm"
                    >
                      💼 Employees
                    </button>
                    <button
                      onClick={() => setActiveModal('selfEmployed')}
                      className="px-3 sm:px-6 py-2 sm:py-4 bg-slate-100 text-slate-900 rounded-lg hover:bg-slate-200 transition font-semibold border-2 border-slate-200 text-xs sm:text-sm"
                    >
                      🚀 Self-Employed
                    </button>
                    <button
                      onClick={() => setActiveModal('businesses')}
                      className="px-3 sm:px-6 py-2 sm:py-4 bg-slate-100 text-slate-900 rounded-lg hover:bg-slate-200 transition font-semibold border-2 border-slate-200 text-xs sm:text-sm"
                    >
                      🏢 Businesses
                    </button>
                  </div>
                </div>
              </div>
              )}
            </div>
          )}

          {/* Guide Section */}
          <div className="mb-12 sm:mb-24 border-2 border-slate-200 rounded-lg shadow-sm">
            <button
              onClick={() => setShowGuide(!showGuide)}
              className="w-full flex items-center justify-between p-4 sm:p-6 bg-slate-50 hover:bg-slate-100 transition"
            >
              <h2 className="text-lg sm:text-2xl font-black text-slate-900" style={{ letterSpacing: '-0.02em' }}>Guide</h2>
              {showGuide ? <ChevronUp size={20} className="text-slate-600 flex-shrink-0 sm:w-6 sm:h-6" /> : <ChevronDown size={20} className="text-slate-600 flex-shrink-0 sm:w-6 sm:h-6" />}
            </button>
            {showGuide && (
              <div className="p-4 sm:p-8 lg:p-12 bg-white border-t-2 border-slate-200 prose prose-sm max-w-none" style={{ fontSize: '0.875rem' }}>
                <div dangerouslySetInnerHTML={{ __html: lessonMedia_.guide }} />
              </div>
            )}
          </div>

          {/* Modals */}
          <Modal
            isOpen={activeModal === 'learners'}
            onClose={() => setActiveModal(null)}
            title="For Learners"
          >
            <div
              className="prose prose-sm max-w-none text-slate-700"
              dangerouslySetInnerHTML={{ __html: parseMarkdownToHTML(activity?.learners) }}
            />
          </Modal>

          <Modal
            isOpen={activeModal === 'employees'}
            onClose={() => setActiveModal(null)}
            title="For Employees"
          >
            <div
              className="prose prose-sm max-w-none text-slate-700"
              dangerouslySetInnerHTML={{ __html: parseMarkdownToHTML(activity?.employees) }}
            />
          </Modal>

          <Modal
            isOpen={activeModal === 'selfEmployed'}
            onClose={() => setActiveModal(null)}
            title="For Self-Employed"
          >
            <div
              className="prose prose-sm max-w-none text-slate-700"
              dangerouslySetInnerHTML={{ __html: parseMarkdownToHTML(activity?.selfEmployed) }}
            />
          </Modal>

          <Modal
            isOpen={activeModal === 'businesses'}
            onClose={() => setActiveModal(null)}
            title="For Businesses"
          >
            <div
              className="prose prose-sm max-w-none text-slate-700"
              dangerouslySetInnerHTML={{ __html: parseMarkdownToHTML(activity?.businesses) }}
            />
          </Modal>

          {/* Mark Complete Button */}
          <div className="pt-6 sm:pt-12 border-t-2 border-slate-200">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4">
              <Button
                variant={completed ? 'success' : 'primary'}
                onClick={handleToggleComplete}
                disabled={isMarking}
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 text-sm sm:text-base flex-1 sm:flex-none"
              >
                {completed ? (
                  <>
                    <Check size={18} /> Completed
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
                      className="px-4 sm:px-6 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors text-sm sm:text-base text-center flex-1 sm:flex-none"
                    >
                      Next Lesson →
                    </Link>
                  );
                } else {
                  // Last lesson in module - go to recap
                  return (
                    <Link
                      to={`/modules/${moduleIdNum}/recap`}
                      className="px-4 sm:px-6 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors text-sm sm:text-base text-center flex-1 sm:flex-none"
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