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
    <div className="flex-1 overflow-y-auto" style={{ backgroundColor: theme.colors.background.base }}>
      <div className="max-w-screen-xl mx-auto px-8 py-8">
          {/* Breadcrumb */}
          {/* <div className="mb-8">
            <Link to="/dashboard" className="font-medium transition-colors" style={{ color: theme.colors.accent.cyan }}>
              Dashboard
            </Link>
            <span className="mx-2" style={{ color: theme.colors.text.muted }}>/</span>
            <Link to={`/modules/${moduleIdNum}`} className="font-medium transition-colors" style={{ color: theme.colors.accent.cyan }}>
              {module.title}
            </Link>
            <span className="mx-2" style={{ color: theme.colors.text.muted }}>/</span>
            <span className="font-medium" style={{ color: theme.colors.text.secondary }}>Recap</span>
          </div> */}

          {/* Header */}
          <div className="mb-24">
            <h1 className="text-5xl font-black mb-3" style={{
              letterSpacing: '-0.02em',
              color: theme.colors.text.primary
            }}>
              Module Recap
            </h1>
            <p className="text-lg font-medium" style={{ color: theme.colors.text.secondary }}>
              {module.title}
            </p>
          </div>

          {/* Module Notes */}
          <div className="mb-24 rounded-lg shadow-sm" style={{
            backgroundColor: theme.colors.background.card,
            borderWidth: '2px',
            borderColor: theme.colors.border.default,
          }}>
            <div className="p-6 flex items-center gap-3" style={{
              backgroundColor: `${theme.colors.text.primary}08`,
              borderBottomWidth: '2px',
              borderBottomColor: theme.colors.border.default,
            }}>
              <FileText size={24} style={{ color: theme.colors.accent.cyan }} />
              <h2 className="text-2xl font-black" style={{
                letterSpacing: '-0.02em',
                color: theme.colors.text.primary
              }}>Module Notes</h2>
            </div>
            <div className="p-12">
              {notesLoading ? (
                <p style={{
                  color: theme.colors.text.secondary,
                  fontStyle: 'italic'
                }}>Loading notes...</p>
              ) : notes && notes.sections ? (
                <div className="space-y-8">
                  {notes.sections.map((section, idx) => (
                    <div key={idx}>
                      <h3 className="text-xl font-bold mb-4" style={{ color: theme.colors.text.primary }}>
                        {section.name}
                      </h3>
                      {section.subsections && Array.isArray(section.subsections) ? (
                        <div className="space-y-4 pl-4">
                          {section.subsections.map((subsection, subIdx) => (
                            <div key={subIdx} className="pl-4" style={{
                              borderLeftWidth: '2px',
                              borderLeftColor: theme.colors.accent.cyan,
                            }}>
                              <h4 className="font-semibold mb-2" style={{ color: theme.colors.text.primary }}>
                                {subsection.title}
                              </h4>
                              <p className="leading-relaxed text-sm" style={{ color: theme.colors.text.secondary }}>
                                {subsection.content}
                              </p>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="leading-relaxed" style={{ color: theme.colors.text.secondary }}>
                          {section.content}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p style={{ color: theme.colors.text.secondary }}>
                  Comprehensive notes summarizing all {module.lessons.length} lessons in this module.
                </p>
              )}
            </div>
          </div>

          {/* Practice Quiz */}
          <div className="mb-24 rounded-lg shadow-sm" style={{
            backgroundColor: `${theme.colors.accent.cyan}15`,
            borderWidth: '2px',
            borderColor: theme.colors.accent.cyan,
          }}>
            <div className="p-12">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen size={28} style={{ color: theme.colors.accent.cyan }} />
                <h2 className="text-2xl font-black" style={{
                  letterSpacing: '-0.02em',
                  color: theme.colors.text.primary
                }}>Practice Quiz</h2>
              </div>
              <p className="mb-8 leading-relaxed text-lg" style={{ color: theme.colors.text.secondary }}>
                Test your knowledge with {module.lessons.length} lessons worth of questions.
              </p>
              <Link
                to={`/quiz/lesson/${moduleIdNum}`}
                className="inline-block px-8 py-4 text-white rounded-lg hover:opacity-90 transition-opacity font-semibold"
                style={{
                  backgroundColor: theme.colors.accent.cyan,
                }}
              >
                Start Module Quiz
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div className="pt-12 flex justify-between items-center" style={{
            borderTopWidth: '2px',
            borderTopColor: theme.colors.border.default,
          }}>
            {moduleIdNum > 1 ? (
              <Link
                to={`/modules/${moduleIdNum - 1}`}
                className="px-6 py-3 rounded-lg transition font-semibold border-2"
                style={{
                  color: theme.colors.text.primary,
                  borderColor: theme.colors.border.default,
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
                  backgroundColor: theme.colors.primary.deep,
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