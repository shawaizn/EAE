import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Target, ArrowRight, BookOpen, Users, TrendingUp, ChevronDown, Sparkles, Shield, Rocket, Award } from 'lucide-react';
import { EnergeticBackground } from '../components/branding/EnergeticBackground';
import { LogoHorizontal } from '../components/branding/Logo';
import { FeaturesTable } from '../components/features/FeaturesTable';
import { modulesData } from '../data/modulesData';
import { activityData } from '../data/activityData';
import { theme, behavior } from '../styles/theme';

const moduleNarratives = [
  "Accelerated foundations -- what AI is, how it fits in technology history, and the evolution to machine learning. Understanding is a necessity, not a destination.",
  "Evaluation frameworks -- how ChatGPT works, the autonomy ladder, and frameworks to evaluate ANY AI tool that emerges. Tools change constantly. Evaluation frameworks don't.",
  "Market structure -- how AI goes from research labs to products, who controls what, the four types of AI products, and business models that determine access.",
  "Strategic restraint -- when to use AI, when NOT to, which work to protect, and the five AI traps that create dependency.",
  "Contextual prompting -- frameworks, meta-prompting, and building custom prompt libraries for YOUR workflow.",
  "Systems thinking -- building workflows around outcomes, creating playbooks that survive tool changes, and strategic filtering.",
  "Competitive positioning -- what skills increase in value, which advantages AI can't replicate, and building strategic assets.",
  "Systematic implementation -- building workflows that last, team collaboration, measuring real impact, and continuous improvement."
];

const totalLessons = modulesData.reduce((acc, m) => acc + m.lessons.length, 0);

export function Landing() {
  const [expandedModule, setExpandedModule] = useState(null);

  const toggleModule = (moduleId) => {
    setExpandedModule((prev) => (prev === moduleId ? null : moduleId));
  };

  const hoverStatClasses = behavior.hoverScale
    ? 'hover:scale-105 hover:shadow-xl'
    : 'hover:shadow-md';

  return (
    <div className="w-full min-h-screen overflow-y-auto relative">
      {behavior.animatedBackground && <EnergeticBackground />}

      <div className="relative z-10">
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
              <LogoHorizontal size="sm" />
              <Link
                to="/login"
                className="px-5 py-2 rounded-md font-bold text-sm relative group overflow-hidden border min-h-10 flex items-center"
                style={{
                  backgroundColor: theme.colors.accent.cyan,
                  color: 'white',
                  borderColor: theme.colors.accent.cyan,
                  boxShadow: '0 0 0 rgba(6, 182, 212, 0.3)',
                  transition: theme.transitions.fast,
                }}
                onMouseEnter={(e) => {
                  if (behavior.hoverGlow) {
                    e.currentTarget.style.boxShadow = theme.shadows.glow.cyan;
                  }
                  if (behavior.hoverScale) {
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 0 rgba(6, 182, 212, 0.3)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span className="relative z-10">Sign In</span>
                {behavior.hoverGlow && (
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-300" />
                )}
              </Link>
            </div>
          </div>
        </nav>

        <section className="min-h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 sm:py-0">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8 animate-fade-in-down" style={{
              borderColor: theme.colors.accent.cyan,
              backgroundColor: `${theme.colors.accent.cyan}08`,
            }}>
              <Zap size={16} style={{ color: theme.colors.accent.cyan }} />
              <span className="text-sm font-semibold tracking-wide" style={{ color: theme.colors.accent.cyan }}>
                Strategic AI Implementation
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in" style={{
              letterSpacing: '-0.03em',
              background: behavior.hoverGlow
                ? `linear-gradient(135deg, ${theme.colors.primary.deep} 0%, ${theme.colors.primary.electric} 50%, ${theme.colors.accent.cyan} 100%)`
                : undefined,
              WebkitBackgroundClip: behavior.hoverGlow ? 'text' : undefined,
              WebkitTextFillColor: behavior.hoverGlow ? 'transparent' : undefined,
              backgroundClip: behavior.hoverGlow ? 'text' : undefined,
              color: behavior.hoverGlow ? undefined : theme.colors.text.primary,
            }}>
              Achieve more.<br />Spend less.
            </h1>

            <div className="max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <p className="text-lg sm:text-xl leading-relaxed tracking-wide" style={{ color: theme.colors.text.secondary }}>
                Higher quality output. Faster delivery.
              </p>
              <p className="text-lg sm:text-xl mt-2 font-semibold tracking-wide" style={{ color: theme.colors.text.primary }}>
                Same team. <span style={{ color: theme.colors.accent.cyan }}>Different results.</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{
              animationDelay: '0.2s',
            }}>
              <Link
                to="/login"
                className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all ${behavior.hoverScale ? 'hover:scale-105' : 'hover:shadow-lg'} group`}
                style={{
                  background: `linear-gradient(135deg, ${theme.colors.primary.electric} 0%, ${theme.colors.accent.cyan} 100%)`,
                  color: 'white',
                  boxShadow: behavior.hoverGlow ? `0 0 30px ${theme.colors.accent.cyan}40` : theme.shadows.medium,
                }}
              >
                Get Started <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl mb-20 sm:mb-32 animate-fade-in-up" style={{
          animationDelay: '0.4s',
        }}>
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4" style={{
              backgroundColor: `${theme.colors.accent.cyan}10`,
            }}>
              <Target size={14} style={{ color: theme.colors.accent.cyan }} />
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: theme.colors.accent.cyan }}>
                What Makes This Different
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-2" style={{
              letterSpacing: '-0.03em',
              color: theme.colors.text.primary,
            }}>
              Transform From Literacy to Leadership
            </h2>
            <p style={{ color: theme.colors.text.secondary }}>
              Strategic AI training for teams that want competitive advantage
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
            <div className={`p-6 rounded-xl border backdrop-blur-sm transition-all ${hoverStatClasses}`} style={{
              borderColor: theme.colors.accent.cyan,
              backgroundColor: `${theme.colors.accent.cyan}05`,
              boxShadow: theme.shadows.subtle,
            }}>
              <p className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: theme.colors.accent.cyan }}>
                £391B &rarr; £3.5T
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider leading-tight" style={{ color: theme.colors.text.secondary }}>
                Global AI market growth by 2033
              </p>
            </div>

            <div className={`p-6 rounded-xl border backdrop-blur-sm transition-all ${hoverStatClasses}`} style={{
              borderColor: theme.colors.primary.electric,
              backgroundColor: `${theme.colors.primary.electric}05`,
              boxShadow: theme.shadows.subtle,
            }}>
              <p className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: theme.colors.primary.electric }}>
                10 Million Workers
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider leading-tight" style={{ color: theme.colors.text.secondary }}>
                UK government training by 2030
              </p>
            </div>

            <div className={`p-6 rounded-xl border backdrop-blur-sm transition-all ${hoverStatClasses}`} style={{
              borderColor: theme.colors.accent.coral,
              backgroundColor: `${theme.colors.accent.coral}05`,
              boxShadow: theme.shadows.subtle,
            }}>
              <p className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: theme.colors.accent.coral }}>
                78% of Organizations
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider leading-tight" style={{ color: theme.colors.text.secondary }}>
                Now using AI in business functions
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 rounded-xl border group transition-all" style={{
              borderColor: theme.colors.border.subtle,
              backgroundColor: theme.colors.background.card,
              boxShadow: theme.shadows.subtle,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = theme.colors.accent.cyan;
              e.currentTarget.style.backgroundColor = `${theme.colors.accent.cyan}03`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = theme.colors.border.subtle;
              e.currentTarget.style.backgroundColor = theme.colors.background.card;
            }}>
              <div className="flex items-start gap-4 mb-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform ${behavior.hoverScale ? 'group-hover:scale-110' : ''}`} style={{
                  backgroundColor: `${theme.colors.accent.cyan}12`,
                  transitionDuration: '200ms',
                }}>
                  <Sparkles size={20} style={{ color: theme.colors.accent.cyan }} />
                </div>
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: theme.colors.text.primary }}>
                    The Reality
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: theme.colors.text.secondary }}>
                    AI literacy is becoming universal. Free training from Microsoft, Google, IBM. Thousands of tutorials teaching prompts and tools. The UK government aims to train 10 million workers by 2030.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border group transition-all" style={{
              borderColor: theme.colors.border.subtle,
              backgroundColor: theme.colors.background.card,
              boxShadow: theme.shadows.subtle,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = theme.colors.primary.electric;
              e.currentTarget.style.backgroundColor = `${theme.colors.primary.electric}03`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = theme.colors.border.subtle;
              e.currentTarget.style.backgroundColor = theme.colors.background.card;
            }}>
              <div className="flex items-start gap-4 mb-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform ${behavior.hoverScale ? 'group-hover:scale-110' : ''}`} style={{
                  backgroundColor: `${theme.colors.primary.electric}12`,
                  transitionDuration: '200ms',
                }}>
                  <Shield size={20} style={{ color: theme.colors.primary.electric }} />
                </div>
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: theme.colors.text.primary }}>
                    The Gap
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: theme.colors.text.secondary }}>
                    Despite massive investment, only 21% of UK workers feel confident using AI, and just 16% of businesses have successfully implemented it. Literacy doesn't equal capability.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border group transition-all" style={{
              borderColor: theme.colors.border.subtle,
              backgroundColor: theme.colors.background.card,
              boxShadow: theme.shadows.subtle,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = theme.colors.accent.coral;
              e.currentTarget.style.backgroundColor = `${theme.colors.accent.coral}03`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = theme.colors.border.subtle;
              e.currentTarget.style.backgroundColor = theme.colors.background.card;
            }}>
              <div className="flex items-start gap-4 mb-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform ${behavior.hoverScale ? 'group-hover:scale-110' : ''}`} style={{
                  backgroundColor: `${theme.colors.accent.coral}12`,
                  transitionDuration: '200ms',
                }}>
                  <Rocket size={20} style={{ color: theme.colors.accent.coral }} />
                </div>
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: theme.colors.text.primary }}>
                    Our Solution
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: theme.colors.text.secondary }}>
                    We teach AI literacy accelerated for understanding, then add strategic capability on top. Save time and produce higher-quality output. Everything in one place.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border group transition-all" style={{
              borderColor: theme.colors.border.subtle,
              backgroundColor: theme.colors.background.card,
              boxShadow: theme.shadows.subtle,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = theme.colors.primary.deep;
              e.currentTarget.style.backgroundColor = `${theme.colors.primary.deep}03`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = theme.colors.border.subtle;
              e.currentTarget.style.backgroundColor = theme.colors.background.card;
            }}>
              <div className="flex items-start gap-4 mb-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform ${behavior.hoverScale ? 'group-hover:scale-110' : ''}`} style={{
                  backgroundColor: `${theme.colors.primary.deep}12`,
                  transitionDuration: '200ms',
                }}>
                  <Award size={20} style={{ color: theme.colors.primary.deep }} />
                </div>
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: theme.colors.text.primary }}>
                    Your Advantage
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: theme.colors.text.secondary }}>
                    While most businesses train teams in AI tools, a small percentage are developing strategic capability. That small percentage is your future competition -- or your future position.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FeaturesTable />

        <section className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl mb-20 sm:mb-32 animate-fade-in-up" style={{
          animationDelay: '0.5s',
        }}>
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4" style={{
              backgroundColor: `${theme.colors.primary.electric}10`,
            }}>
              <BookOpen size={14} style={{ color: theme.colors.primary.electric }} />
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: theme.colors.primary.electric }}>
                Curriculum
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-2" style={{
              letterSpacing: '-0.03em',
              color: theme.colors.text.primary,
            }}>
              The Learning Journey
            </h2>
            <p style={{ color: theme.colors.text.secondary }}>
              8 strategic modules designed to build competitive advantage
            </p>
          </div>

          <div className="space-y-3">
            {modulesData.map((module, index) => {
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
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform ${behavior.hoverScale ? 'group-hover:scale-105' : ''}`} style={{
                        background: `linear-gradient(135deg, ${theme.colors.primary.deep} 0%, ${theme.colors.primary.electric} 100%)`,
                        transitionDuration: '200ms',
                      }}>
                        <span className="text-lg font-bold text-white">
                          {module.id}
                        </span>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <h3 className="text-base sm:text-lg font-bold" style={{
                            color: theme.colors.text.primary,
                          }}>
                            {module.title}
                          </h3>
                          <div className="flex items-center gap-3 flex-shrink-0">
                            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold whitespace-nowrap" style={{
                              backgroundColor: `${theme.colors.primary.electric}10`,
                              color: theme.colors.primary.electric,
                            }}>
                              <BookOpen size={12} />
                              {module.lessons.length}
                            </div>
                            <ChevronDown
                              size={18}
                              style={{
                                color: isExpanded ? theme.colors.accent.cyan : theme.colors.text.muted,
                                transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                                transition: 'transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94), color 200ms ease',
                              }}
                            />
                          </div>
                        </div>
                        <p className="text-sm leading-relaxed" style={{
                          color: theme.colors.text.secondary,
                          display: isExpanded ? 'none' : 'block',
                        }}>
                          {moduleNarratives[index]}
                        </p>
                      </div>
                    </div>
                  </button>

                  <div
                    style={{
                      maxHeight: isExpanded ? `${module.lessons.length * 60 + 100}px` : '0px',
                      opacity: isExpanded ? 1 : 0,
                      overflow: 'hidden',
                      transition: 'max-height 350ms cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 250ms ease',
                    }}
                  >
                    <div className="px-6 pb-6">
                      <div className="pt-4 border-t mb-4" style={{ borderColor: theme.colors.border.subtle }}>
                        <p className="text-sm leading-relaxed" style={{ color: theme.colors.text.secondary }}>
                          {moduleNarratives[index]}
                        </p>
                      </div>

                      <div className="space-y-2">
                        {module.lessons.map((lesson) => (
                          <div
                            key={lesson.id}
                            className="flex items-center gap-4 p-3 rounded-lg transition-colors"
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
                            <span
                              className="text-xs font-bold w-8 h-8 flex items-center justify-center rounded-md flex-shrink-0"
                              style={{
                                backgroundColor: `${theme.colors.primary.electric}15`,
                                color: theme.colors.primary.electric,
                              }}
                            >
                              {String(lesson.id).padStart(2, '0')}
                            </span>
                            <span className="text-sm font-medium flex-1" style={{ color: theme.colors.text.primary }}>
                              {lesson.title}
                            </span>
                            {activityData[`${module.id}-${lesson.id}`]?.skill && (
                              <span
                                className="text-xs font-semibold px-3 py-1 rounded-full flex-shrink-0"
                                style={{
                                  backgroundColor: `${theme.colors.accent.cyan}12`,
                                  color: theme.colors.accent.cyan,
                                }}
                              >
                                {activityData[`${module.id}-${lesson.id}`].skill}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl mb-20 sm:mb-32 animate-fade-in-up" style={{
          animationDelay: '0.6s',
        }}>
          <div className="p-8 sm:p-12 lg:p-16 rounded-2xl border-2 text-center" style={{
            borderColor: theme.colors.accent.coral,
            background: `linear-gradient(135deg, ${theme.colors.accent.coral}08 0%, ${theme.colors.background.card} 100%)`,
            boxShadow: behavior.hoverGlow ? `0 0 40px ${theme.colors.accent.coral}15` : theme.shadows.large,
          }}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4" style={{
              letterSpacing: '-0.03em',
              color: theme.colors.text.primary,
            }}>
              Ready to Build Strategic Advantage?
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-8 leading-relaxed" style={{ color: theme.colors.text.secondary }}>
              Join the program and develop frameworks that create lasting competitive advantage in AI.
            </p>
            <Link
              to="/login"
              className={`inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all ${behavior.hoverScale ? 'hover:scale-105' : 'hover:shadow-lg'}`}
              style={{
                background: `linear-gradient(135deg, ${theme.colors.accent.coral} 0%, ${theme.colors.primary.electric} 100%)`,
                color: 'white',
                boxShadow: behavior.hoverGlow ? `0 0 30px ${theme.colors.accent.coral}40` : theme.shadows.medium,
              }}
            >
              Sign In to Start <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </div>

      <style>{`
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.6s ease-out forwards;
          opacity: 0;
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in-down,
          .animate-fade-in,
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
