import { useAuth } from '../hooks/useAuth';
import { Link } from 'react-router-dom';
import appFrameworkPdf from '../assets/app-framework.pdf';
import { theme } from '../styles/theme';
import { FileText, Download, BookOpen } from 'lucide-react';

export function ResourcesPage() {
  const { user } = useAuth();

  return (
    <div className="flex-1 overflow-y-auto" style={{ backgroundColor: theme.colors.background.base }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="space-y-8">
          <div className="rounded-2xl border-2 overflow-hidden" style={{
            backgroundColor: theme.colors.background.card,
            borderColor: theme.colors.accent.coral,
          }}>
            <div className="relative p-8 lg:p-12">
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `linear-gradient(135deg, ${theme.colors.accent.coral} 0%, ${theme.colors.primary.electric} 100%)`,
              }} />

              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4" style={{
                  backgroundColor: `${theme.colors.accent.coral}15`,
                  border: `1px solid ${theme.colors.accent.coral}30`,
                }}>
                  <BookOpen size={14} style={{ color: theme.colors.accent.coral }} />
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: theme.colors.accent.coral }}>
                    Learning Resources
                  </span>
                </div>

                <h1 className="text-3xl lg:text-5xl font-bold mb-3" style={{
                  color: theme.colors.text.primary,
                  letterSpacing: '-0.02em',
                }}>
                  Resources
                </h1>
                <p className="text-lg leading-relaxed max-w-2xl" style={{ color: theme.colors.text.secondary }}>
                  Tools, templates, and guides to support your learning journey and maximize the value of your training.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="p-6 lg:p-8 rounded-xl border-2" style={{
              backgroundColor: theme.colors.background.card,
              borderColor: theme.colors.border.subtle,
            }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{
                  backgroundColor: `${theme.colors.primary.electric}15`,
                }}>
                  <FileText size={24} style={{ color: theme.colors.primary.electric }} />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold mb-2" style={{
                    color: theme.colors.text.primary,
                  }}>
                    Learner Profile Templates
                  </h2>
                  <p className="leading-relaxed mb-4" style={{ color: theme.colors.text.secondary }}>
                    Create your learner profile to personalize your AI learning experience and track your progress effectively.
                  </p>
                  <p className="text-sm px-4 py-3 rounded-lg" style={{
                    color: theme.colors.text.muted,
                    backgroundColor: theme.colors.background.subtle,
                  }}>
                    Coming soon: Downloadable templates for personalizing your learning journey
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 lg:p-8 rounded-xl border-2" style={{
              backgroundColor: theme.colors.background.card,
              borderColor: theme.colors.border.subtle,
            }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{
                  backgroundColor: `${theme.colors.accent.cyan}15`,
                }}>
                  <FileText size={24} style={{ color: theme.colors.accent.cyan }} />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold mb-2" style={{
                    color: theme.colors.text.primary,
                  }}>
                    AI Response Prompts
                  </h2>
                  <p className="leading-relaxed mb-4" style={{ color: theme.colors.text.secondary }}>
                    Pre-built prompts to use with AI for explaining course content, generating examples, and deepening your understanding.
                  </p>
                  <p className="text-sm px-4 py-3 rounded-lg" style={{
                    color: theme.colors.text.muted,
                    backgroundColor: theme.colors.background.subtle,
                  }}>
                    Coming soon: Curated AI prompt templates for enhanced learning
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 lg:p-8 rounded-xl border-2 transition-all hover:shadow-lg" style={{
              backgroundColor: theme.colors.background.card,
              borderColor: theme.colors.accent.coral,
            }}>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{
                  backgroundColor: `${theme.colors.accent.coral}15`,
                }}>
                  <FileText size={24} style={{ color: theme.colors.accent.coral }} />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold mb-2" style={{
                    color: theme.colors.text.primary,
                  }}>
                    How-To Guides
                  </h2>
                  <p className="leading-relaxed" style={{ color: theme.colors.text.secondary }}>
                    Step-by-step guides for getting the most out of the course and applying AI concepts to your work.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl border-2 transition-all hover:shadow-md" style={{
                backgroundColor: theme.colors.background.subtle,
                borderColor: theme.colors.border.subtle,
              }}>
                <div className="flex items-center justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2" style={{ color: theme.colors.text.primary }}>
                      The APP Framework
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: theme.colors.text.secondary }}>
                      A comprehensive framework for understanding and applying key AI concepts in your workflow
                    </p>
                  </div>
                  <a
                    href={appFrameworkPdf}
                    download="app-framework.pdf"
                    className="group flex items-center gap-2 px-6 py-3 text-white rounded-lg font-semibold transition-all hover:scale-105 flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${theme.colors.accent.coral} 0%, ${theme.colors.primary.electric} 100%)`,
                    }}
                  >
                    <Download size={18} />
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}