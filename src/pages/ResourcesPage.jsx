import { useAuth } from '../hooks/useAuth';
import { Link } from 'react-router-dom';
import appFrameworkPdf from '../assets/app-framework.pdf';
import { theme } from '../styles/theme';

export function ResourcesPage() {
  const { user, signOut } = useAuth();

  return (
    <div className="flex-1 overflow-y-auto relative" style={{ backgroundColor: theme.colors.background.base }}>
      <div className="max-w-screen-xl mx-auto px-8 py-8 relative z-10">
          {/* Breadcrumb */}
          {/* <div className="mb-8">
            <Link to="/dashboard" className="font-medium transition-colors" style={{ color: theme.colors.accent.cyan }}>
              Dashboard
            </Link>
            <span className="mx-2" style={{ color: theme.colors.text.muted }}>/</span>
            <span className="font-medium" style={{ color: theme.colors.text.secondary }}>Resources</span>
          </div> */}

          {/* Header */}
          <div className="mb-24">
            <h1 className="text-5xl font-black mb-3" style={{
              letterSpacing: '-0.02em',
              color: theme.colors.text.primary
            }}>
              Resources
            </h1>
            <p className="text-lg font-medium" style={{ color: theme.colors.text.secondary }}>
              Tools, templates, and guides to support your learning
            </p>
          </div>

          {/* Learner Profile */}
          <div className="mb-24 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl" style={{
            backgroundColor: theme.colors.background.card,
            borderWidth: '2px',
            borderColor: theme.colors.border.default,
          }}>
            <div className="p-6" style={{
              backgroundColor: `${theme.colors.text.primary}08`,
              borderBottomWidth: '2px',
              borderBottomColor: theme.colors.border.default,
            }}>
              <h2 className="text-2xl font-black" style={{
                letterSpacing: '-0.02em',
                color: theme.colors.text.primary
              }}>
                Learner Profile Templates
              </h2>
            </div>
            <div className="p-12">
              <p className="mb-6 leading-relaxed" style={{ color: theme.colors.text.secondary }}>
                Create your learner profile to personalize your AI learning experience.
              </p>
              <p style={{ color: theme.colors.text.muted }}>
                [Learner profile templates will be displayed here]
              </p>
            </div>
          </div>

          {/* AI Prompts */}
          <div className="mb-24 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl" style={{
            backgroundColor: theme.colors.background.card,
            borderWidth: '2px',
            borderColor: theme.colors.border.default,
          }}>
            <div className="p-6" style={{
              backgroundColor: `${theme.colors.text.primary}08`,
              borderBottomWidth: '2px',
              borderBottomColor: theme.colors.border.default,
            }}>
              <h2 className="text-2xl font-black" style={{
                letterSpacing: '-0.02em',
                color: theme.colors.text.primary
              }}>
                AI Response Prompts
              </h2>
            </div>
            <div className="p-12">
              <p className="mb-6 leading-relaxed" style={{ color: theme.colors.text.secondary }}>
                Pre-built prompts to use with AI for explaining course content.
              </p>
              <p style={{ color: theme.colors.text.muted }}>
                [AI prompt templates will be displayed here]
              </p>
            </div>
          </div>

          {/* How-To Guides */}
          <div className="mb-24 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl" style={{
            backgroundColor: theme.colors.background.card,
            borderWidth: '2px',
            borderColor: theme.colors.border.default,
          }}>
            <div className="p-6" style={{
              backgroundColor: `${theme.colors.text.primary}08`,
              borderBottomWidth: '2px',
              borderBottomColor: theme.colors.border.default,
            }}>
              <h2 className="text-2xl font-black" style={{
                letterSpacing: '-0.02em',
                color: theme.colors.text.primary
              }}>
                How-To Guides
              </h2>
            </div>
            <div className="p-12">
              <p className="mb-8 leading-relaxed" style={{ color: theme.colors.text.secondary }}>
                Step-by-step guides for getting the most out of the course.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-6 rounded-lg transition-all duration-300 hover:shadow-lg" style={{
                  backgroundColor: theme.colors.background.card,
                  borderWidth: '2px',
                  borderColor: theme.colors.border.default,
                }}>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold" style={{ color: theme.colors.text.primary }}>
                      The APP Framework
                    </h3>
                    <p className="mt-2" style={{ color: theme.colors.text.secondary }}>
                      A comprehensive framework for understanding and applying key concepts
                    </p>
                  </div>
                  <a
                    href={appFrameworkPdf}
                    download="app-framework.pdf"
                    className="ml-6 px-6 py-3 text-white rounded-lg hover:opacity-90 transition-opacity font-semibold"
                    style={{
                      backgroundColor: theme.colors.accent.cyan,
                    }}
                  >
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}