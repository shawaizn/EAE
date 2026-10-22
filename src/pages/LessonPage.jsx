import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useProgress } from '../hooks/useProgress';
import { Modal } from '../components/ui/Modal';
import { Check, Copy, ChevronDown, ChevronUp, Bookmark, ArrowLeft, ArrowRight, ListOrdered, X } from 'lucide-react';
import { modulesData } from '../data/modulesData';
import { lessonMedia } from '../data/lessonMedia';
import { activityData } from '../data/activityData';
import { getLessonNumber, parseMarkdownToHTML } from '../lib/utils';
import { useBookmarks } from '../hooks/useBookmarks';
import { lang, eduTheme as theme } from '../styles/theme';
import { CourseOutline } from '../components/course/CourseOutline';
import { neighbours, lessonPath } from '../lib/course';

const COLORS = {
  bg: theme.colors.background.light || theme.colors.background.base,
  cardBg: theme.colors.background.card,
  textPrimary: theme.colors.text.primary,
  textSecondary: theme.colors.text.secondary,
  textMuted: theme.colors.text.muted,
  accent: theme.colors.accent.cyan,
  accentLight: `${theme.colors.accent.cyan}15`,
  primary: theme.colors.primary.deep,
  border: theme.colors.border.subtle,
  success: theme.colors.status.success,
  brand: theme.colors.brand.fill,
  onBrand: theme.colors.brand.onFill,
  brandSoft: theme.colors.brand.soft,
};

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
  const [showOutline, setShowOutline] = useState(false);
  const { isComplete, toggleComplete, markComplete, loading } = useProgress(user?.id, []);
  const { isBookmarked, toggleBookmark } = useBookmarks(user?.id);

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

  // Back / Next stay inside the module; after the last lesson comes the
  // module's notes & quiz (like a Codecademy module checkpoint)
  const { prev, next } = neighbours(moduleIdNum, lessonIdNum);
  const backTo = prev && prev.moduleId === moduleIdNum ? lessonPath(prev) : `/modules/${moduleIdNum}`;
  const nextTo = next && next.moduleId === moduleIdNum ? lessonPath(next) : `/modules/${moduleIdNum}/recap`;
  const nextLabel = next && next.moduleId === moduleIdNum ? 'Next lesson' : 'Notes & quiz';
  const position = module.lessons.findIndex(l => l.id === lessonIdNum) + 1;

  // Next marks the lesson complete, then moves on
  const handleNext = async () => {
    if (!completed) await markComplete(globalLessonNumber, 'lesson');
    navigate(nextTo);
  };

  return (
    <div className="flex" style={{ backgroundColor: COLORS.bg }}>
      {/* Course outline: always visible on large screens, a drawer on phones */}
      <aside className="hidden lg:block w-80 flex-none border-r bg-white sticky top-16 self-start overflow-y-auto" style={{ borderColor: COLORS.border, height: 'calc(100dvh - 4rem - 4.5rem)' }}>
        <CourseOutline moduleId={moduleIdNum} lessonId={lessonIdNum} user={user} isComplete={isComplete} />
      </aside>
      {showOutline && (
        <div className="lg:hidden fixed inset-0 z-[60]">
          <div className="absolute inset-0 bg-black/40" onClick={() => setShowOutline(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-[85%] max-w-sm bg-white overflow-y-auto shadow-xl">
            <button type="button" onClick={() => setShowOutline(false)} className="absolute top-3 right-3 p-2 rounded-full" style={{ color: COLORS.textSecondary }} aria-label="Close outline">
              <X size={20} />
            </button>
            <CourseOutline moduleId={moduleIdNum} lessonId={lessonIdNum} user={user} isComplete={isComplete} onNavigate={() => setShowOutline(false)} />
          </div>
        </div>
      )}

      <div className="flex-1 min-w-0 pb-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          {/* Breadcrumb + title */}
          <p className="text-sm font-semibold" style={{ color: COLORS.textMuted }}>
            <Link to={`/modules/${moduleIdNum}`} className="hover:underline" style={{ color: COLORS.accent }}>Module {moduleIdNum}: {module.title}</Link>
            <span> · Lesson {position} of {module.lessons.length}</span>
          </p>
          <div className="flex items-start justify-between gap-4 mt-2 mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-4xl font-extrabold" style={{
              letterSpacing: '-0.02em',
              color: COLORS.textPrimary
            }}>
              {lesson.title}
            </h1>
            <button
              onClick={() => toggleBookmark(globalLessonNumber)}
              className="flex-shrink-0 mt-1 p-2.5 rounded-lg border transition-all duration-200"
              style={{
                backgroundColor: isBookmarked(globalLessonNumber) ? `${COLORS.accent}15` : COLORS.cardBg,
                borderColor: isBookmarked(globalLessonNumber) ? COLORS.accent : COLORS.border,
                color: isBookmarked(globalLessonNumber) ? COLORS.accent : COLORS.textMuted,
              }}
              title={isBookmarked(globalLessonNumber) ? 'Remove bookmark' : 'Bookmark this lesson'}
            >
              <Bookmark size={20} fill={isBookmarked(globalLessonNumber) ? 'currentColor' : 'none'} />
            </button>
          </div>

          {/* Video */}
          <div className="lesson-video-wrapper mb-8 bg-black rounded-xl overflow-hidden shadow-lg">
            <div dangerouslySetInnerHTML={{ __html: lessonMedia_.video }} />
          </div>

          {/* Summary Section */}
          <div className="mb-5 rounded-xl overflow-hidden" style={{
            backgroundColor: COLORS.cardBg,
            borderWidth: '1px',
            borderColor: COLORS.border,
          }}>
            <button
              onClick={() => setShowSummary(!showSummary)}
              className="w-full flex items-center justify-between p-4 sm:p-6 transition"
              style={{
                backgroundColor: `${COLORS.textPrimary}08`,
              }}
            >
              <h2 className="text-lg sm:text-xl font-extrabold" style={{
                letterSpacing: '-0.02em',
                color: COLORS.textPrimary
              }}>Lesson Summary</h2>
              <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                {!showSummary && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopySummary();
                    }}
                    className="p-2 rounded transition"
                    style={{
                      color: copied ? COLORS.accent : COLORS.textSecondary
                    }}
                    title="Copy summary"
                  >
                    <Copy size={18} className="sm:w-5 sm:h-5" />
                  </button>
                )}
                {showSummary ? <ChevronUp size={20} className="sm:w-6 sm:h-6" style={{ color: COLORS.textSecondary }} /> : <ChevronDown size={20} className="sm:w-6 sm:h-6" style={{ color: COLORS.textSecondary }} />}
              </div>
            </button>
            {showSummary && (
              <div className="p-4 sm:p-6" style={{
                borderTopWidth: '2px',
                borderTopColor: COLORS.border,
              }}>
                <div className="prose prose-sm max-w-none mb-4 sm:mb-6" style={{ color: COLORS.textSecondary }} dangerouslySetInnerHTML={{ __html: lessonMedia_.summary }} />
                <button
                  onClick={handleCopySummary}
                  className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition font-medium text-sm sm:text-base w-full sm:w-auto justify-center sm:justify-start"
                  style={{
                    backgroundColor: `${COLORS.textPrimary}10`,
                    color: COLORS.textPrimary,
                  }}
                >
                  <Copy size={16} />
                  {copied ? 'Copied!' : 'Copy Summary'}
                </button>
              </div>
            )}
          </div>

          {/* Activity Section */}
          {activity && (
            <div className="mb-5 rounded-xl overflow-hidden" style={{
              backgroundColor: COLORS.cardBg,
              borderWidth: '1px',
              borderColor: COLORS.border,
            }}>
              <button
                onClick={() => setShowSkill(!showSkill)}
                className="w-full flex items-center justify-between p-4 sm:p-6 transition"
                style={{
                  backgroundColor: `${COLORS.textPrimary}08`,
                }}
              >
                <h2 className="text-lg sm:text-xl font-extrabold break-words text-left" style={{
                  letterSpacing: '-0.02em',
                  color: COLORS.textPrimary
                }}>
                  Skill{activity.skill && `: ${activity.skill}`}
                </h2>
                {showSkill ? <ChevronUp size={20} className="flex-shrink-0 sm:w-6 sm:h-6" style={{ color: COLORS.textSecondary }} /> : <ChevronDown size={20} className="flex-shrink-0 sm:w-6 sm:h-6" style={{ color: COLORS.textSecondary }} />}
              </button>
              {showSkill && (
              <div className="p-4 sm:p-8 lg:p-12 space-y-6 sm:space-y-8" style={{
                borderTopWidth: '2px',
                borderTopColor: COLORS.border,
                color: COLORS.textSecondary
              }}>
                {/* Skill */}
                <div>
                  <h3 className="text-base sm:text-lg font-black mb-2 sm:mb-3" style={{
                    letterSpacing: '-0.02em',
                    color: COLORS.textPrimary
                  }}>Skills You're Building:</h3>
                  <p className="text-base sm:text-lg font-semibold" style={{ color: COLORS.accent }}>
                    {activity.skill}
                  </p>
                </div>

                {/* Connection */}
                <div>
                  <h3 className="text-base sm:text-lg font-black mb-2 sm:mb-3" style={{
                    letterSpacing: '-0.02em',
                    color: COLORS.textPrimary
                  }}>Connection:</h3>
                  <p className="text-sm sm:text-base leading-relaxed" style={{ color: COLORS.textSecondary }}>
                    {activity.connection}
                  </p>
                </div>

                {/* Activity */}
                <div>
                  <h3 className="text-base sm:text-lg font-black mb-2 sm:mb-3" style={{
                    letterSpacing: '-0.02em',
                    color: COLORS.textPrimary
                  }}>Activity:</h3>
                  <div className="text-sm sm:text-base whitespace-pre-line leading-relaxed" style={{ color: COLORS.textSecondary }}>
                    {activity.activity}
                  </div>
                </div>

                {/* Why this matters */}
                <div>
                  <h3 className="text-base sm:text-lg font-black mb-2 sm:mb-3" style={{
                    letterSpacing: '-0.02em',
                    color: COLORS.textPrimary
                  }}>Why this matters:</h3>
                  <p className="text-sm sm:text-base leading-relaxed" style={{ color: COLORS.textSecondary }}>
                    {activity.whyMatters}
                  </p>
                </div>

                {/* Audience Buttons */}
                <div className="pt-4 sm:pt-6" style={{
                  borderTopWidth: '2px',
                  borderTopColor: COLORS.border,
                }}>
                  <h3 className="text-base sm:text-lg font-black mb-4 sm:mb-6" style={{
                    letterSpacing: '-0.02em',
                    color: COLORS.textPrimary
                  }}>Apply this as:</h3>
                  <div className="grid grid-cols-2 gap-2 sm:gap-4">
                    <button
                      onClick={() => setActiveModal('learners')}
                      className="px-3 sm:px-6 py-2 sm:py-4 rounded-lg transition font-semibold border-2 text-xs sm:text-sm"
                      style={{
                        backgroundColor: `${COLORS.textPrimary}10`,
                        color: COLORS.textPrimary,
                        borderColor: COLORS.border,
                      }}
                    >
                      {lang.audienceLabels.learners}
                    </button>
                    <button
                      onClick={() => setActiveModal('employees')}
                      className="px-3 sm:px-6 py-2 sm:py-4 rounded-lg transition font-semibold border-2 text-xs sm:text-sm"
                      style={{
                        backgroundColor: `${COLORS.textPrimary}10`,
                        color: COLORS.textPrimary,
                        borderColor: COLORS.border,
                      }}
                    >
                      {lang.audienceLabels.employees}
                    </button>
                    <button
                      onClick={() => setActiveModal('selfEmployed')}
                      className="px-3 sm:px-6 py-2 sm:py-4 rounded-lg transition font-semibold border-2 text-xs sm:text-sm"
                      style={{
                        backgroundColor: `${COLORS.textPrimary}10`,
                        color: COLORS.textPrimary,
                        borderColor: COLORS.border,
                      }}
                    >
                      {lang.audienceLabels.selfEmployed}
                    </button>
                    <button
                      onClick={() => setActiveModal('businesses')}
                      className="px-3 sm:px-6 py-2 sm:py-4 rounded-lg transition font-semibold border-2 text-xs sm:text-sm"
                      style={{
                        backgroundColor: `${COLORS.textPrimary}10`,
                        color: COLORS.textPrimary,
                        borderColor: COLORS.border,
                      }}
                    >
                      {lang.audienceLabels.businesses}
                    </button>
                  </div>
                </div>
              </div>
              )}
            </div>
          )}

          {/* Guide Section */}
          <div className="mb-5 rounded-xl overflow-hidden" style={{
            backgroundColor: COLORS.cardBg,
            borderWidth: '1px',
            borderColor: COLORS.border,
          }}>
            <button
              onClick={() => setShowGuide(!showGuide)}
              className="w-full flex items-center justify-between p-4 sm:p-6 transition"
              style={{
                backgroundColor: `${COLORS.textPrimary}08`,
              }}
            >
              <h2 className="text-lg sm:text-xl font-extrabold" style={{
                letterSpacing: '-0.02em',
                color: COLORS.textPrimary
              }}>Guide</h2>
              {showGuide ? <ChevronUp size={20} className="flex-shrink-0 sm:w-6 sm:h-6" style={{ color: COLORS.textSecondary }} /> : <ChevronDown size={20} className="flex-shrink-0 sm:w-6 sm:h-6" style={{ color: COLORS.textSecondary }} />}
            </button>
            {showGuide && (
              <div className="p-4 sm:p-8 lg:p-12 prose prose-sm max-w-none" style={{
                borderTopWidth: '2px',
                borderTopColor: COLORS.border,
                color: COLORS.textSecondary,
                fontSize: '0.875rem'
              }}>
                <div dangerouslySetInnerHTML={{ __html: lessonMedia_.guide }} />
              </div>
            )}
          </div>

          {/* Modals */}
          <Modal
            isOpen={activeModal === 'learners'}
            onClose={() => setActiveModal(null)}
            title="For Individual Learners"
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
            title="For Business Teams"
          >
            <div
              className="prose prose-sm max-w-none text-slate-700"
              dangerouslySetInnerHTML={{ __html: parseMarkdownToHTML(activity?.businesses) }}
            />
          </Modal>

        </div>
      </div>

      {/* Bottom bar: Back · progress through the module · Next */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-white border-t" style={{ borderColor: COLORS.border }}>
        <div className="h-[4.5rem] px-3 sm:px-6 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => setShowOutline(true)} className="lg:hidden p-2.5 rounded-lg border" style={{ borderColor: COLORS.border, color: COLORS.textPrimary }} aria-label="Course outline">
              <ListOrdered size={18} />
            </button>
            <Link to={backTo} className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2.5 rounded-lg border text-sm font-semibold" style={{ borderColor: COLORS.border, color: COLORS.textPrimary }}>
              <ArrowLeft size={16} /> Back
            </Link>
          </div>

          <div className="hidden sm:flex flex-col items-center gap-1.5">
            <span className="text-xs font-semibold" style={{ color: COLORS.textSecondary }}>Lesson {position} of {module.lessons.length}</span>
            <span className="flex gap-1.5" aria-hidden="true">
              {module.lessons.map(l => {
                const here = l.id === lessonIdNum;
                const done = isComplete(getLessonNumber(moduleIdNum, l.id), 'lesson');
                return <span key={l.id} className="h-1.5 rounded-full" style={{ width: here ? 22 : 14, backgroundColor: done || here ? COLORS.brand : '#E8DCC6' }} />;
              })}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleToggleComplete}
              disabled={isMarking}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-2.5 rounded-lg text-sm font-semibold"
              style={completed ? { color: COLORS.textPrimary, backgroundColor: COLORS.brandSoft } : { color: COLORS.textSecondary }}
              title={completed ? 'Mark as not complete' : 'Mark as complete'}
            >
              <Check size={16} /> {completed ? 'Completed' : 'Mark complete'}
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-lg text-sm font-bold"
              style={{ backgroundColor: COLORS.brand, color: COLORS.onBrand }}
            >
              {nextLabel} <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
