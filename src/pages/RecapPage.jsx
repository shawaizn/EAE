import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useProgress } from '../hooks/useProgress';
import { modulesData } from '../data/modulesData';
import { Button } from '../components/ui/Button';
import { BookOpen, FileText } from 'lucide-react';
import { getLessonNumber } from '../lib/utils';
import { getModuleNotes } from '../lib/notesFetch';
import { useState, useEffect } from 'react';
import { theme } from '../styles/theme';

export function RecapPage() {
  const { user, signOut } = useAuth();
  const { moduleId } = useParams();
  const { isComplete, loading } = useProgress(user?.id, []);
  const [notes, setNotes] = useState(null);
  const [notesLoading, setNotesLoading] = useState(true);

  const moduleIdNum = parseInt(moduleId);
  const module = modulesData.find(m => m.id === moduleIdNum);

  useEffect(() => {
    const fetchNotes = async () => {
      setNotesLoading(true);
      const moduleNotes = await getModuleNotes(moduleIdNum);
      setNotes(moduleNotes);
      setNotesLoading(false);
    };
    if (moduleIdNum) {
      fetchNotes();
    }
  }, [moduleIdNum]);

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
    <div className="flex-1 overflow-y-auto" style={{ backgroundColor: COLORS.bg }}>
      <div className="max-w-screen-xl mx-auto px-8 py-8">
          {/* Breadcrumb */}
          {/* <div className="mb-8">
            <Link to="/dashboard" className="font-medium transition-colors" style={{ color: COLORS.accent }}>
              Dashboard
            </Link>
            <span className="mx-2" style={{ color: COLORS.textMuted }}>/</span>
            <Link to={`/modules/${moduleIdNum}`} className="font-medium transition-colors" style={{ color: COLORS.accent }}>
              {module.title}
            </Link>
            <span className="mx-2" style={{ color: COLORS.textMuted }}>/</span>
            <span className="font-medium" style={{ color: COLORS.textSecondary }}>Recap</span>
          </div> */}

          {/* Header */}
          <div className="mb-24">
            <h1 className="text-5xl font-black mb-3" style={{
              letterSpacing: '-0.02em',
              color: COLORS.textPrimary
            }}>
              Module Recap
            </h1>
            <p className="text-lg font-medium" style={{ color: COLORS.textSecondary }}>
              {module.title}
            </p>
          </div>

          {/* Module Notes */}
          <div className="mb-24 rounded-lg shadow-sm" style={{
            backgroundColor: COLORS.cardBg,
            borderWidth: '2px',
            borderColor: COLORS.border,
          }}>
            <div className="p-6 flex items-center gap-3" style={{
              backgroundColor: `${COLORS.textPrimary}08`,
              borderBottomWidth: '2px',
              borderBottomColor: COLORS.border,
            }}>
              <FileText size={24} style={{ color: COLORS.accent }} />
              <h2 className="text-2xl font-black" style={{
                letterSpacing: '-0.02em',
                color: COLORS.textPrimary
              }}>Module Notes</h2>
            </div>
            <div className="p-12">
              {notesLoading ? (
                <p style={{
                  color: COLORS.textSecondary,
                  fontStyle: 'italic'
                }}>Loading notes...</p>
              ) : notes && notes.sections ? (
                <div className="space-y-8">
                  {notes.sections.map((section, idx) => (
                    <div key={idx}>
                      <h3 className="text-xl font-bold mb-4" style={{ color: COLORS.textPrimary }}>
                        {section.name}
                      </h3>
                      {section.subsections && Array.isArray(section.subsections) ? (
                        <div className="space-y-4 pl-4">
                          {section.subsections.map((subsection, subIdx) => (
                            <div key={subIdx} className="pl-4" style={{
                              borderLeftWidth: '2px',
                              borderLeftColor: COLORS.accent,
                            }}>
                              <h4 className="font-semibold mb-2" style={{ color: COLORS.textPrimary }}>
                                {subsection.title}
                              </h4>
                              <p className="leading-relaxed text-sm" style={{ color: COLORS.textSecondary }}>
                                {subsection.content}
                              </p>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="leading-relaxed" style={{ color: COLORS.textSecondary }}>
                          {section.content}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p style={{ color: COLORS.textSecondary }}>
                  Comprehensive notes summarizing all {module.lessons.length} lessons in this module.
                </p>
              )}
            </div>
          </div>

          {/* Practice Quiz */}
          <div className="mb-24 rounded-lg shadow-sm" style={{
            backgroundColor: `${COLORS.accent}15`,
            borderWidth: '2px',
            borderColor: COLORS.accent,
          }}>
            <div className="p-12">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen size={28} style={{ color: COLORS.accent }} />
                <h2 className="text-2xl font-black" style={{
                  letterSpacing: '-0.02em',
                  color: COLORS.textPrimary
                }}>Practice Quiz</h2>
              </div>
              <p className="mb-8 leading-relaxed text-lg" style={{ color: COLORS.textSecondary }}>
                Test your knowledge with {module.lessons.length} lessons worth of questions.
              </p>
              <Link
                to={`/quiz/lesson/${moduleIdNum}`}
                className="inline-block px-8 py-4 text-white rounded-lg hover:opacity-90 transition-opacity font-semibold"
                style={{
                  backgroundColor: COLORS.accent,
                }}
              >
                Start Module Quiz
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div className="pt-12 flex justify-between items-center" style={{
            borderTopWidth: '2px',
            borderTopColor: COLORS.border,
          }}>
            {moduleIdNum > 1 ? (
              <Link
                to={`/modules/${moduleIdNum - 1}`}
                className="px-6 py-3 rounded-lg transition font-semibold border-2"
                style={{
                  color: COLORS.textPrimary,
                  borderColor: COLORS.border,
                }}
              >
                ← Previous Module
              </Link>
            ) : (
              <div></div>
            )}
            {moduleIdNum < 8 && (
              <Link
                to={`/modules/${moduleIdNum + 1}`}
                className="px-8 py-4 text-white rounded-lg hover:opacity-90 transition-opacity font-semibold"
                style={{
                  backgroundColor: COLORS.primary,
                }}
              >
                Next Module →
              </Link>
            )}
          </div>
        </div>
      </div>
  );
}