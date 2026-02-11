import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Target, ArrowRight, BookOpen, Users, TrendingUp, ChevronDown, Sparkles, Shield, Rocket, Award, ExternalLink, CheckCircle } from 'lucide-react';
import { EnergeticBackground } from '../components/branding/EnergeticBackground';
import { LogoHorizontal } from '../components/branding/Logo';
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
  const [expandedService, setExpandedService] = useState(null);
  const [expandedModule, setExpandedModule] = useState(null);

  const toggleService = (serviceId) => {
    setExpandedService((prev) => (prev === serviceId ? null : serviceId));
  };

  const toggleModule = (moduleId) => {
    setExpandedModule((prev) => (prev === moduleId ? null : moduleId));
  };

  const services = [
    {
      id: 'education',
      icon: BookOpen,
      title: 'AI Education',
      description: 'Build team capability in AI. Frameworks and mental models, not just tools.',
      expandable: true
    },
    {
      id: 'strategy',
      icon: Target,
      title: 'AI Strategy',
      description: 'Identify where AI creates competitive advantage in your operations.',
      link: '/services/strategy'
    },
    {
      id: 'implementation',
      icon: Rocket,
      title: 'AI Implementation',
      description: 'Move from plan to practice. Deploy workflows that actually work.',
      link: '/services/implementation'
    }
  ];

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

        {/* Hero Section */}
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
              AI transformation partner
            </h1>

            <div className="max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <p className="text-lg sm:text-xl leading-relaxed tracking-wide" style={{ color: theme.colors.text.secondary }}>
                Here to help you remain competitive in an AI age
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

        {/* Services Section */}
        <section className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl mb-20 sm:mb-32 animate-fade-in-up" style={{
          animationDelay: '0.3s',
        }}>
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4" style={{
              backgroundColor: `${theme.colors.accent.cyan}10`,
            }}>
              <Target size={14} style={{ color: theme.colors.accent.cyan }} />
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: theme.colors.accent.cyan }}>
                Our Services
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-2" style={{
              letterSpacing: '-0.03em',
              color: theme.colors.text.primary,
            }}>
              Three Ways We Help
            </h2>
            <p style={{ color: theme.colors.text.secondary }}>
              AI Education, Strategy, and Implementation for SMBs
            </p>
          </div>

          <div className="space-y-4">
            {services.map((service, index) => {
              const isExpanded = expandedService === service.id;
              const IconComponent = service.icon;

              return (
                <div
                  key={service.id}
                  className="rounded-xl border-2 overflow-hidden transition-all"
                  style={{
                    backgroundColor: theme.colors.background.card,
                    borderColor: isExpanded ? theme.colors.accent.cyan : theme.colors.border.subtle,
                    boxShadow: isExpanded ? theme.shadows.medium : theme.shadows.subtle,
                  }}
                >
                  {service.expandable ? (
                    <>
                      <button
                        type="button"
                        onClick={() => toggleService(service.id)}
                        className="w-full text-left p-6 cursor-pointer group hover:bg-opacity-50 transition-colors"
                        style={{
                          backgroundColor: isExpanded ? `${theme.colors.accent.cyan}03` : 'transparent',
                        }}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform ${behavior.hoverScale ? 'group-hover:scale-105' : ''}`} style={{
                            background: `linear-gradient(135deg, ${theme.colors.primary.deep} 0%, ${theme.colors.primary.electric} 100%)`,
                            transitionDuration: '200ms',
                          }}>
                            <IconComponent size={24} style={{ color: 'white' }} />
                          </div>

                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-bold" style={{
                              color: theme.colors.text.primary,
                            }}>
                              {service.title}
                            </h3>
                            <p className="text-sm mt-1" style={{ color: theme.colors.text.secondary }}>
                              {service.description}
                            </p>
                          </div>
                          <ChevronDown
                            size={20}
                            style={{
                              color: isExpanded ? theme.colors.accent.cyan : theme.colors.text.muted,
                              transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                              transition: 'transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94), color 200ms ease',
                              flexShrink: 0,
                            }}
                          />
                        </div>
                      </button>

                      {/* Expanded AI Education Content */}
                      <div
                        style={{
                          maxHeight: isExpanded ? '5000px' : '0px',
                          opacity: isExpanded ? 1 : 0,
                          overflow: 'hidden',
                          transition: 'max-height 350ms cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 250ms ease',
                        }}
                      >
                        <div className="px-6 pb-6 border-t" style={{ borderColor: theme.colors.border.subtle }}>
                          <div className="pt-6 mb-8">
                            <h4 className="text-xl font-bold mb-4" style={{ color: theme.colors.text.primary }}>
                              12 Live Sessions Over 6 Weeks
                            </h4>
                            <p className="text-base leading-relaxed mb-4" style={{ color: theme.colors.text.secondary }}>
                              Strategic AI use from foundations to building.
                            </p>
                          </div>

                          <div className="space-y-3 mb-8">
                            {modulesData.map((module) => {
                              const isModuleExpanded = expandedModule === module.id;
                              return (
                                <div
                                  key={module.id}
                                  className="rounded-lg border overflow-hidden transition-all"
                                  style={{
                                    backgroundColor: theme.colors.background.subtle,
                                    borderColor: isModuleExpanded ? theme.colors.accent.cyan : theme.colors.border.subtle,
                                  }}
                                >
                                  <button
                                    type="button"
                                    onClick={() => toggleModule(module.id)}
                                    className="w-full text-left p-4 cursor-pointer group transition-colors"
                                    style={{
                                      backgroundColor: isModuleExpanded ? `${theme.colors.accent.cyan}03` : 'transparent',
                                    }}
                                  >
                                    <div className="flex items-center justify-between gap-3">
                                      <div className="flex items-center gap-3 min-w-0 flex-1">
                                        <span className="text-sm font-bold px-2.5 py-1 rounded flex-shrink-0" style={{
                                          backgroundColor: `${theme.colors.primary.electric}15`,
                                          color: theme.colors.primary.electric,
                                        }}>
                                          {module.id}
                                        </span>
                                        <div className="min-w-0 flex-1">
                                          <p className="font-semibold" style={{ color: theme.colors.text.primary }}>
                                            {module.title}
                                          </p>
                                          <p className="text-xs mt-0.5" style={{ color: theme.colors.text.muted }}>
                                            {module.lessons.length} lessons
                                          </p>
                                        </div>
                                      </div>
                                      <ChevronDown
                                        size={16}
                                        style={{
                                          color: isModuleExpanded ? theme.colors.accent.cyan : theme.colors.text.muted,
                                          transform: isModuleExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                                          transition: 'transform 300ms ease',
                                          flexShrink: 0,
                                        }}
                                      />
                                    </div>
                                  </button>

                                  <div
                                    style={{
                                      maxHeight: isModuleExpanded ? `${module.lessons.length * 40 + 100}px` : '0px',
                                      opacity: isModuleExpanded ? 1 : 0,
                                      overflow: 'hidden',
                                      transition: 'max-height 300ms ease, opacity 250ms ease',
                                    }}
                                  >
                                    <div className="px-4 pb-4 border-t" style={{ borderColor: theme.colors.border.subtle }}>
                                      <p className="text-sm leading-relaxed my-3" style={{ color: theme.colors.text.secondary }}>
                                        {moduleNarratives[index]}
                                      </p>
                                      <div className="space-y-2">
                                        {module.lessons.map((lesson) => (
                                          <div key={lesson.id} className="flex items-start gap-2 p-2">
                                            <span className="text-xs font-bold mt-0.5" style={{
                                              color: theme.colors.primary.electric,
                                            }}>
                                              {String(lesson.id).padStart(2, '0')}
                                            </span>
                                            <span className="text-sm flex-1" style={{ color: theme.colors.text.primary }}>
                                              {lesson.title}
                                            </span>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>

                          <div className="bg-slate-50 p-4 rounded-lg mb-6" style={{
                            backgroundColor: `${theme.colors.accent.cyan}08`,
                          }}>
                            <h5 className="font-semibold mb-3" style={{ color: theme.colors.text.primary }}>
                              Includes
                            </h5>
                            <ul className="space-y-2">
                              {[
                                '12 live teaching sessions (2 per week, 60 minutes)',
                                'Full platform access (notes, quizzes, activities, homework)',
                                'Email support throughout program',
                                'WhatsApp community for peer support',
                                'Custom AI tool building in final 4 sessions',
                                'Platform access continues 14 days after program ends'
                              ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm" style={{ color: theme.colors.text.secondary }}>
                                  <CheckCircle size={14} style={{ color: theme.colors.accent.cyan, marginTop: '2px', flexShrink: 0 }} />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <Link
                            to="/login"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold w-full justify-center transition-all"
                            style={{
                              backgroundColor: theme.colors.accent.cyan,
                              color: 'white',
                              boxShadow: theme.shadows.medium,
                            }}
                          >
                            Get Started <ArrowRight size={16} />
                          </Link>
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      to={service.link}
                      className="p-6 group transition-all flex items-center justify-between"
                      style={{
                        textDecoration: 'none',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = `${theme.colors.accent.cyan}03`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }}
                    >
                      <div className="flex items-center gap-4 flex-1">
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{
                          background: `linear-gradient(135deg, ${theme.colors.primary.deep} 0%, ${theme.colors.primary.electric} 100%)`,
                        }}>
                          <IconComponent size={24} style={{ color: 'white' }} />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-bold" style={{
                            color: theme.colors.text.primary,
                          }}>
                            {service.title}
                          </h3>
                          <p className="text-sm mt-1" style={{ color: theme.colors.text.secondary }}>
                            {service.description}
                          </p>
                        </div>
                      </div>
                      <ExternalLink size={20} style={{
                        color: theme.colors.accent.cyan,
                        flexShrink: 0,
                        marginLeft: '1rem',
                      }} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl mb-20 sm:mb-32 animate-fade-in-up" style={{
          animationDelay: '0.4s',
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
