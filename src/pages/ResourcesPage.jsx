import { useAuth } from '../hooks/useAuth';
import { Link } from 'react-router-dom';
import appFrameworkPdf from '../assets/app-framework.pdf';
import { theme } from '../styles/theme';

export function ResourcesPage() {
  const { user, signOut } = useAuth();

  return (
    <div className="flex-1 overflow-y-auto relative" style={{ backgroundColor: COLORS.bg }}>
      <div className="max-w-screen-xl mx-auto px-8 py-8 relative z-10">
          {/* Breadcrumb */}
          {/* <div className="mb-8">
            <Link to="/dashboard" className="font-medium transition-colors" style={{ color: COLORS.accent }}>
              Dashboard
            </Link>
            <span className="mx-2" style={{ color: COLORS.textMuted }}>/</span>
            <span className="font-medium" style={{ color: COLORS.textSecondary }}>Resources</span>
          </div> */}

          {/* Header */}
          <div className="mb-24">
            <h1 className="text-5xl font-black mb-3" style={{
              letterSpacing: '-0.02em',
              color: COLORS.textPrimary
            }}>
              Resources
            </h1>
            <p className="text-lg font-medium" style={{ color: COLORS.textSecondary }}>
              Tools, templates, and guides to support your learning
            </p>
          </div>

          {/* Learner Profile */}
          <div className="mb-24 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl" style={{
            backgroundColor: COLORS.cardBg,
            borderWidth: '2px',
            borderColor: COLORS.border,
          }}>
            <div className="p-6" style={{
              backgroundColor: `${COLORS.textPrimary}08`,
              borderBottomWidth: '2px',
              borderBottomColor: COLORS.border,
            }}>
              <h2 className="text-2xl font-black" style={{
                letterSpacing: '-0.02em',
                color: COLORS.textPrimary
              }}>
                Learner Profile Templates
              </h2>
            </div>
            <div className="p-12">
              <p className="mb-6 leading-relaxed" style={{ color: COLORS.textSecondary }}>
                Create your learner profile to personalize your AI learning experience.
              </p>
              <p style={{ color: COLORS.textMuted }}>
                [Learner profile templates will be displayed here]
              </p>
            </div>
          </div>

          {/* AI Prompts */}
          <div className="mb-24 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl" style={{
            backgroundColor: COLORS.cardBg,
            borderWidth: '2px',
            borderColor: COLORS.border,
          }}>
            <div className="p-6" style={{
              backgroundColor: `${COLORS.textPrimary}08`,
              borderBottomWidth: '2px',
              borderBottomColor: COLORS.border,
            }}>
              <h2 className="text-2xl font-black" style={{
                letterSpacing: '-0.02em',
                color: COLORS.textPrimary
              }}>
                AI Response Prompts
              </h2>
            </div>
            <div className="p-12">
              <p className="mb-6 leading-relaxed" style={{ color: COLORS.textSecondary }}>
                Pre-built prompts to use with AI for explaining course content.
              </p>
              <p style={{ color: COLORS.textMuted }}>
                [AI prompt templates will be displayed here]
              </p>
            </div>
          </div>

          {/* How-To Guides */}
          <div className="mb-24 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl" style={{
            backgroundColor: COLORS.cardBg,
            borderWidth: '2px',
            borderColor: COLORS.border,
          }}>
            <div className="p-6" style={{
              backgroundColor: `${COLORS.textPrimary}08`,
              borderBottomWidth: '2px',
              borderBottomColor: COLORS.border,
            }}>
              <h2 className="text-2xl font-black" style={{
                letterSpacing: '-0.02em',
                color: COLORS.textPrimary
              }}>
                How-To Guides
              </h2>
            </div>
            <div className="p-12">
              <p className="mb-8 leading-relaxed" style={{ color: COLORS.textSecondary }}>
                Step-by-step guides for getting the most out of the course.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-6 rounded-lg transition-all duration-300 hover:shadow-lg" style={{
                  backgroundColor: COLORS.cardBg,
                  borderWidth: '2px',
                  borderColor: COLORS.border,
                }}>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold" style={{ color: COLORS.textPrimary }}>
                      The APP Framework
                    </h3>
                    <p className="mt-2" style={{ color: COLORS.textSecondary }}>
                      A comprehensive framework for understanding and applying key concepts
                    </p>
                  </div>
                  <a
                    href={appFrameworkPdf}
                    download="app-framework.pdf"
                    className="ml-6 px-6 py-3 text-white rounded-lg hover:opacity-90 transition-opacity font-semibold"
                    style={{
                      backgroundColor: COLORS.accent,
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