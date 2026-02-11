import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown, BookOpen, Users, TrendingUp, Zap, Target, Award, CheckCircle, ArrowRight, Mail } from 'lucide-react';
import { EnergeticBackground } from '../components/branding/EnergeticBackground';
import { LogoHorizontal } from '../components/branding/Logo';
import { modulesData } from '../data/modulesData';
import { activityData } from '../data/activityData';
import { landingContent } from '../data/landing';
import { theme, behavior } from '../styles/theme';

const featureIcons = {
  'Zap': Zap,
  'Target': Target,
  'Award': Award,
};

export function AIEducation() {
  const [expandedModule, setExpandedModule] = useState(null);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleModule = (moduleId) => {
    setExpandedModule((prev) => (prev === moduleId ? null : moduleId));
  };

  const toggleFaq = (index) => {
    setExpandedFaq((prev) => (prev === index ? null : index));
  };

  const totalLessons = modulesData.reduce((acc, m) => acc + m.lessons.length, 0);

  return (
    <div className="w-full min-h-screen overflow-y-auto relative">
      {behavior.animatedBackground && <EnergeticBackground />}

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="sticky top-0 z-20 bg-white/98 backdrop-blur-md border-b" style={{
          borderColor: theme.colors.border.subtle,
          boxShadow: theme.shadows.medium,
        }}>
          <div className="absolute bottom-0 left-0 right-0 h-px" style={{
            background: behavior.hoverGlow
              ? `linear-gradient(90deg, transparent, ${theme.colors.accent.cyan}60, ${theme.colors.accent.coral}60, transparent)`
              : `linear-gradient(90deg, transparent, ${theme.colors.border.default}80, transparent)`,
          }} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16 sm:h-18">
              <div className="flex items-center gap-4">
                <Link
                  to="/"
                  className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                  style={{
                    backgroundColor: behavior.hoverScale ? 'transparent' : undefined,
                  }}
                >
                  <ArrowLeft size={20} style={{ color: theme.colors.text.secondary }} />
                </Link>
                <LogoHorizontal size="sm" />
              </div>
              <Link
                to="/login"
                className="px-5 py-2 rounded-md font-bold text-sm relative group overflow-hidden border min-h-10 flex items-center"
                style={{
                  backgroundColor: theme.colors.text.secondary,
                  color: 'white',
                  borderColor: theme.colors.text.secondary,
                  transition: theme.transitions.fast,
                }}
              >
                <span className="relative z-10">Sign In</span>
              </Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <section className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-20 sm:py-32 animate-fade-in-up">
          {/* Header */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6" style={{
              backgroundColor: `${theme.colors.accent.cyan}10`,
            }}>
              <BookOpen size={14} style={{ color: theme.colors.accent.cyan }} />
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: theme.colors.accent.cyan }}>
                Curriculum
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4" style={{
              letterSpacing: '-0.03em',
              color: theme.colors.text.primary,
            }}>
              AI Education Program
            </h1>
            <p className="text-lg leading-relaxed max-w-2xl" style={{ color: theme.colors.text.secondary }}>
              12 live sessions over 6 weeks. Strategic AI use from foundations to building.
            </p>
          </div>

          {/* What Makes This Different - Features */}
          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12" style={{
              letterSpacing: '-0.03em',
              color: theme.colors.text.primary,
            }}>
              What Makes This Different
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {landingContent.features.map((feature, idx) => {
                const IconComponent = featureIcons[feature.icon];
                return (
                  <div
                    key={idx}
                    className="p-8 rounded-xl border"
                    style={{
                      borderColor: theme.colors.border.subtle,
                      backgroundColor: `${theme.colors.primary.electric}05`,
                      boxShadow: theme.shadows.subtle,
                    }}
                  >
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{
                      background: `linear-gradient(135deg, ${theme.colors.primary.deep} 0%, ${theme.colors.primary.electric} 100%)`,
                    }}>
                      <IconComponent size={24} style={{ color: 'white' }} />
                    </div>
                    <h3 className="text-lg font-bold mb-2" style={{ color: theme.colors.text.primary }}>
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: theme.colors.text.secondary }}>
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Course Overview Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-20">
            <div className={`p-6 rounded-xl border backdrop-blur-sm transition-all ${behavior.hoverScale ? 'hover:scale-105' : 'hover:shadow-md'}`} style={{
              borderColor: theme.colors.accent.cyan,
              backgroundColor: `${theme.colors.accent.cyan}05`,
              boxShadow: theme.shadows.subtle,
            }}>
              <p className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: theme.colors.accent.cyan }}>
                12 Sessions
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider leading-tight" style={{ color: theme.colors.text.secondary }}>
                2 per week, 60 minutes each
              </p>
            </div>

            <div className={`p-6 rounded-xl border backdrop-blur-sm transition-all ${behavior.hoverScale ? 'hover:scale-105' : 'hover:shadow-md'}`} style={{
              borderColor: theme.colors.primary.electric,
              backgroundColor: `${theme.colors.primary.electric}05`,
              boxShadow: theme.shadows.subtle,
            }}>
              <p className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: theme.colors.primary.electric }}>
                8 Modules
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider leading-tight" style={{ color: theme.colors.text.secondary }}>
                {totalLessons} lessons + skills training
              </p>
            </div>

            <div className={`p-6 rounded-xl border backdrop-blur-sm transition-all ${behavior.hoverScale ? 'hover:scale-105' : 'hover:shadow-md'}`} style={{
              borderColor: theme.colors.accent.coral,
              backgroundColor: `${theme.colors.accent.coral}05`,
              boxShadow: theme.shadows.subtle,
            }}>
              <p className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: theme.colors.accent.coral }}>
                6 Weeks
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider leading-tight" style={{ color: theme.colors.text.secondary }}>
                Plus 14 days platform access
              </p>
            </div>
          </div>

          {/* Curriculum */}
          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12" style={{
              letterSpacing: '-0.03em',
              color: theme.colors.text.primary,
            }}>
              {landingContent.curriculum.heading}
            </h2>

            <div className="space-y-3">
              {modulesData.map((module) => {
                const isExpanded = expandedModule === module.id;
                return (
                  <div
                    key={module.id}
                    className="rounded-xl border-2 overflow-hidden transition-all"
                    style={{
                      backgroundColor: theme.colors.background.card,
                      borderColor: isExpanded ? theme.colors.accent.cyan : theme.colors.border.subtle,
                      boxShadow: isExpanded ? theme.shadows.medium : theme.shadows.subtle,
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => toggleModule(module.id)}
                      className="w-full text-left p-6 cursor-pointer group hover:bg-opacity-50 transition-colors"
                      style={{
                        backgroundColor: isExpanded ? `${theme.colors.accent.cyan}03` : 'transparent',
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform ${behavior.hoverScale ? 'group-hover:scale-110' : ''}`} style={{
                          background: `linear-gradient(135deg, ${theme.colors.primary.deep} 0%, ${theme.colors.primary.electric} 100%)`,
                          transitionDuration: '200ms',
                        }}>
                          <span className="text-lg font-bold text-white">
                            {module.id}
                          </span>
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="text-base sm:text-lg font-bold mb-1" style={{
                            color: theme.colors.text.primary,
                          }}>
                            {module.title}
                          </h3>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-xs font-semibold px-2.5 py-1 rounded-md" style={{
                              backgroundColor: `${theme.colors.primary.electric}10`,
                              color: theme.colors.primary.electric,
                            }}>
                              {module.lessons.length} lessons
                            </span>
                            {module.lessons[0] && activityData[`${module.id}-${module.lessons[0].id}`]?.skill && (
                              <span className="text-xs font-semibold px-2.5 py-1 rounded-md" style={{
                                backgroundColor: `${theme.colors.accent.cyan}10`,
                                color: theme.colors.accent.cyan,
                              }}>
                                Skills training included
                              </span>
                            )}
                          </div>
                        </div>
                        <ChevronDown
                          size={18}
                          style={{
                            color: isExpanded ? theme.colors.accent.cyan : theme.colors.text.muted,
                            transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94), color 200ms ease',
                            flexShrink: 0,
                          }}
                        />
                      </div>
                    </button>

                    <div
                      style={{
                        maxHeight: isExpanded ? `${module.lessons.length * 80 + 100}px` : '0px',
                        opacity: isExpanded ? 1 : 0,
                        overflow: 'hidden',
                        transition: 'max-height 350ms cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 250ms ease',
                      }}
                    >
                      <div className="px-6 pb-6 border-t" style={{ borderColor: theme.colors.border.subtle }}>
                        <div className="space-y-3 pt-4">
                          {module.lessons.map((lesson) => {
                            const lessonActivity = activityData[`${module.id}-${lesson.id}`];
                            return (
                              <div
                                key={lesson.id}
                                className="p-4 rounded-lg transition-colors"
                                style={{
                                  backgroundColor: theme.colors.background.subtle,
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.backgroundColor = `${theme.colors.accent.cyan}08`;
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.backgroundColor = theme.colors.background.subtle;
                                }}
                              >
                                <div className="flex items-start gap-3 justify-between">
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                      <span
                                        className="text-xs font-bold w-6 h-6 flex items-center justify-center rounded flex-shrink-0"
                                        style={{
                                          backgroundColor: `${theme.colors.primary.electric}15`,
                                          color: theme.colors.primary.electric,
                                        }}
                                      >
                                        {String(lesson.id).padStart(2, '0')}
                                      </span>
                                      <span className="text-sm font-semibold" style={{ color: theme.colors.text.primary }}>
                                        {lesson.title}
                                      </span>
                                    </div>
                                    {lessonActivity?.skill && (
                                      <p className="text-xs ml-8 mt-1" style={{ color: theme.colors.text.secondary }}>
                                        <strong>Skill:</strong> {lessonActivity.skill}
                                      </p>
                                    )}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12" style={{
              letterSpacing: '-0.03em',
              color: theme.colors.text.primary,
            }}>
              {landingContent.howItWorks.heading}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {landingContent.howItWorks.steps.map((step, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center font-bold text-2xl" style={{
                    backgroundColor: `${theme.colors.accent.cyan}15`,
                    color: theme.colors.accent.cyan,
                  }}>
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold mb-3" style={{ color: theme.colors.text.primary }}>
                    {step.title}
                  </h3>
                  <p style={{ color: theme.colors.text.secondary }}>
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Who It's For */}
          <div className="mb-20 p-8 sm:p-12 rounded-xl border" style={{
            borderColor: theme.colors.accent.cyan,
            backgroundColor: `${theme.colors.accent.cyan}05`,
          }}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-8" style={{
              color: theme.colors.text.primary,
              letterSpacing: '-0.03em',
            }}>
              {landingContent.audience.heading}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-lg font-bold mb-4" style={{ color: theme.colors.accent.cyan }}>
                  Good Fit For
                </h3>
                <ul className="space-y-2">
                  {landingContent.audience.goodFit.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle size={18} style={{ color: theme.colors.accent.cyan, marginTop: '2px', flexShrink: 0 }} />
                      <span style={{ color: theme.colors.text.secondary }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4" style={{ color: theme.colors.accent.coral }}>
                  Not a Good Fit
                </h3>
                <ul className="space-y-2">
                  {landingContent.audience.notGoodFit.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span style={{ color: theme.colors.accent.coral, marginTop: '2px', flexShrink: 0 }}>✕</span>
                      <span style={{ color: theme.colors.text.secondary }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* What's Included */}
          <div className="mb-20 p-8 sm:p-12 rounded-xl border" style={{
            borderColor: theme.colors.accent.cyan,
            backgroundColor: `${theme.colors.accent.cyan}05`,
          }}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-8" style={{
              color: theme.colors.text.primary,
              letterSpacing: '-0.03em',
            }}>
              What's Included
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {landingContent.curriculum.includes.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle size={20} style={{ color: theme.colors.accent.cyan, marginTop: '2px', flexShrink: 0 }} />
                  <span style={{ color: theme.colors.text.secondary }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div className="mb-20 p-8 sm:p-12 rounded-xl border-2 text-center" style={{
            borderColor: theme.colors.accent.coral,
            background: `linear-gradient(135deg, ${theme.colors.accent.coral}08 0%, ${theme.colors.background.card} 100%)`,
          }}>
            <h2 className="text-3xl font-bold mb-4" style={{
              letterSpacing: '-0.03em',
              color: theme.colors.text.primary,
            }}>
              {landingContent.pricing.heading}
            </h2>
            <div className="mb-6">
              <p className="text-5xl font-bold mb-2" style={{ color: theme.colors.accent.coral }}>
                {landingContent.pricing.amount}
              </p>
              <p style={{ color: theme.colors.text.secondary }}>
                {landingContent.pricing.nextCohort}
              </p>
            </div>
            <div className="max-w-2xl mx-auto mb-8 text-left">
              <h3 className="font-bold mb-3 text-lg" style={{ color: theme.colors.text.primary }}>
                Includes:
              </h3>
              <ul className="space-y-2">
                {landingContent.pricing.includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={18} style={{ color: theme.colors.accent.coral, marginTop: '2px', flexShrink: 0 }} />
                    <span style={{ color: theme.colors.text.secondary }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              to="/login"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all"
              style={{
                background: `linear-gradient(135deg, ${theme.colors.accent.coral} 0%, ${theme.colors.primary.electric} 100%)`,
                color: 'white',
                boxShadow: behavior.hoverGlow ? `0 0 30px ${theme.colors.accent.coral}40` : theme.shadows.medium,
              }}
              onMouseEnter={(e) => {
                if (behavior.hoverScale) e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Get Started <ArrowRight size={18} />
            </Link>
          </div>

          {/* FAQ */}
          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12" style={{
              letterSpacing: '-0.03em',
              color: theme.colors.text.primary,
            }}>
              {landingContent.faq.heading}
            </h2>

            <div className="space-y-3">
              {landingContent.faq.questions.map((item, idx) => {
                const isExpanded = expandedFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-xl border-2 overflow-hidden transition-all"
                    style={{
                      backgroundColor: theme.colors.background.card,
                      borderColor: isExpanded ? theme.colors.accent.cyan : theme.colors.border.subtle,
                      boxShadow: isExpanded ? theme.shadows.medium : theme.shadows.subtle,
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left p-6 cursor-pointer group transition-colors"
                      style={{
                        backgroundColor: isExpanded ? `${theme.colors.accent.cyan}03` : 'transparent',
                      }}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-base sm:text-lg font-bold" style={{
                          color: theme.colors.text.primary,
                        }}>
                          {item.question}
                        </h3>
                        <ChevronDown
                          size={18}
                          style={{
                            color: isExpanded ? theme.colors.accent.cyan : theme.colors.text.muted,
                            transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94), color 200ms ease',
                            flexShrink: 0,
                          }}
                        />
                      </div>
                    </button>

                    <div
                      style={{
                        maxHeight: isExpanded ? '500px' : '0px',
                        opacity: isExpanded ? 1 : 0,
                        overflow: 'hidden',
                        transition: 'max-height 350ms cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 250ms ease',
                      }}
                    >
                      <div className="px-6 pb-6 border-t" style={{ borderColor: theme.colors.border.subtle }}>
                        <p className="text-base leading-relaxed pt-4" style={{ color: theme.colors.text.secondary }}>
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="p-8 sm:p-12 rounded-xl border-2 text-center" style={{
            borderColor: theme.colors.accent.coral,
            background: `linear-gradient(135deg, ${theme.colors.accent.coral}08 0%, ${theme.colors.background.card} 100%)`,
            boxShadow: behavior.hoverGlow ? `0 0 40px ${theme.colors.accent.coral}15` : theme.shadows.large,
          }}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4" style={{
              letterSpacing: '-0.03em',
              color: theme.colors.text.primary,
            }}>
              {landingContent.finalCta.heading}
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-8 leading-relaxed" style={{ color: theme.colors.text.secondary }}>
              {landingContent.finalCta.description}
            </p>
            <Link
              to="/login"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all"
              style={{
                background: `linear-gradient(135deg, ${theme.colors.accent.coral} 0%, ${theme.colors.primary.electric} 100%)`,
                color: 'white',
                boxShadow: behavior.hoverGlow ? `0 0 30px ${theme.colors.accent.coral}40` : theme.shadows.medium,
              }}
              onMouseEnter={(e) => {
                if (behavior.hoverScale) e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {landingContent.finalCta.button} <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in-up {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
}
