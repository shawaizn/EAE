import { useAuth } from '../hooks/useAuth';
import { useProgress } from '../hooks/useProgress';
import { modulesData } from '../data/modulesData';
import { getLessonNumber } from '../lib/utils';
import { Link } from 'react-router-dom';
import { EnergeticBackground } from '../components/branding/EnergeticBackground';
import { theme } from '../styles/theme';
import { ArrowRight, Zap, Target, Rocket, CheckCircle2, Lock } from 'lucide-react';

export function Dashboard() {
  const { user } = useAuth();
  const { isComplete, loading } = useProgress(user?.id, []);

  const moduleNarratives = [
    "Government courses teach \"comprehensive AI fundamentals over weeks.\" We teach accelerated foundations—what AI is, how it fits in technology history, and the evolution to machine learning—condensed into focused lessons. Understanding is a necessity, not a destination. Get the foundation quickly so you can move to strategic application.",
    "Government courses teach \"technical deep-dives into AI mechanics.\" We teach evaluation frameworks—how ChatGPT works, the autonomy ladder (LLMs → Workflows → Agents), and frameworks to evaluate ANY AI tool that emerges. Tools change constantly. Evaluation frameworks don't.",
    "Government courses teach \"popular AI tools and productivity apps.\" We teach market structure—how AI goes from research labs to products, who controls what in the AI pyramid, the four types of AI products, and business models that determine access. When you understand market forces, you make strategic choices instead of chasing trends.",
    "Government courses don't teach this. Their goal is \"maximizing AI adoption\"—using AI everywhere. We teach strategic restraint—when to use AI, when NOT to, which work to protect, and the five AI traps that create dependency. Using AI for everything weakens you. Strategic usage strengthens you.",
    "Government courses teach \"prompt engineering frameworks\"—and do this well with basics like CO-STAR. We teach contextual prompting—frameworks, meta-prompting (having AI improve your prompts), and building custom prompt libraries for YOUR workflow. Everyone learns the same basics. Custom libraries create efficiency advantage.",
    "Government courses teach \"AI tool catalogs and productivity tips.\" We teach systems thinking—building workflows around outcomes (not specific tools), creating playbooks that survive tool changes, and strategic filtering. Tools become obsolete. Systems compound value over time.",
    "Government courses don't teach this. Their goal is \"ensuring everyone can work with AI\"—not helping you position strategically as AI literacy becomes universal. We teach competitive positioning—what skills increase in value, which advantages AI can't replicate, and building strategic assets. When everyone has AI literacy, positioning differentiates.",
    "Government courses teach \"getting started with AI and using it productively.\" We teach systematic implementation—building workflows that last, team collaboration strategies, measuring real impact (not just activity), and continuous improvement. Implementation separates those who complete training from those who create lasting capability."
  ];

  const allModules = modulesData.map((module, index) => {
    const completedLessons = module.lessons.filter(
      lesson => isComplete(getLessonNumber(module.id, lesson.id), 'lesson')
    ).length;
    const progress = (completedLessons / module.lessons.length) * 100;
    return {
      moduleId: module.id,
      title: module.title,
      progress,
      completedLessons,
      totalLessons: module.lessons.length,
      narrative: moduleNarratives[index]
    };
  });

  const totalProgress = Math.round(allModules.reduce((acc, m) => acc + m.progress, 0) / 8);
  const completedModules = allModules.filter(m => m.progress === 100).length;
  const totalLessons = modulesData.reduce((acc, m) => acc + m.lessons.length, 0);
  const completedLessons = allModules.reduce((acc, m) => acc + m.completedLessons, 0);

  const currentLesson = !loading ? (() => {
    for (const module of modulesData) {
      for (const lesson of module.lessons) {
        const lessonNumber = getLessonNumber(module.id, lesson.id);
        if (!isComplete(lessonNumber, 'lesson')) {
          return {
            moduleId: module.id,
            lessonId: lesson.id,
            moduleTitle: module.title,
            lessonTitle: lesson.title
          };
        }
      }
    }
    return null;
  })() : null;

  const getModuleState = (index) => {
    const current = allModules[index];
    if (current.progress === 100) return 'completed';
    if (current.progress > 0) return 'in-progress';
    if (index === 0) {
      const hasInProgressModule = allModules.some(m => m.progress > 0 && m.progress < 100);
      if (!hasInProgressModule) return 'in-progress';
    }
    return 'incomplete';
  };

  return (
    <div className="w-full min-h-screen overflow-y-auto relative">
      <EnergeticBackground />

      <div className="relative z-10">
        {/* HERO SECTION */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 sm:py-0">
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
              background: `linear-gradient(135deg, ${theme.colors.primary.deep} 0%, ${theme.colors.primary.electric} 50%, ${theme.colors.accent.cyan} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Master AI<br />For Competitive Advantage
            </h1>

            <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in-up" style={{
              color: theme.colors.text.secondary,
              animationDelay: '0.1s',
            }}>
              When everyone has AI literacy, positioning differentiates. Learn frameworks, decision-making systems, and strategic restraint—not just tools.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 sm:mb-20 animate-fade-in-up" style={{
              animationDelay: '0.2s',
            }}>
              {currentLesson ? (
                <Link
                  to={`/modules/${currentLesson.moduleId}/lessons/${currentLesson.lessonId}`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 group"
                  style={{
                    background: `linear-gradient(135deg, ${theme.colors.primary.electric} 0%, ${theme.colors.accent.cyan} 100%)`,
                    color: 'white',
                    boxShadow: `0 0 30px ${theme.colors.accent.cyan}40`,
                  }}
                >
                  Continue Learning <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              ) : (
                <div className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold" style={{
                  background: `linear-gradient(135deg, ${theme.colors.status.success} 0%, ${theme.colors.status.success} 100%)`,
                  color: 'white',
                }}>
                  <Rocket size={20} /> All Modules Complete!
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 animate-fade-in-up" style={{
              animationDelay: '0.3s',
            }}>
              <div className="p-6 rounded-xl border backdrop-blur-sm transition-all hover:scale-105 hover:shadow-xl" style={{
                borderColor: theme.colors.accent.cyan,
                backgroundColor: `${theme.colors.accent.cyan}05`,
                boxShadow: theme.shadows.subtle,
              }}>
                <p className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: theme.colors.accent.cyan }}>
                  {completedLessons}/{totalLessons}
                </p>
                <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: theme.colors.text.secondary }}>
                  Lessons Completed
                </p>
              </div>

              <div className="p-6 rounded-xl border backdrop-blur-sm transition-all hover:scale-105 hover:shadow-xl" style={{
                borderColor: theme.colors.primary.electric,
                backgroundColor: `${theme.colors.primary.electric}05`,
                boxShadow: theme.shadows.subtle,
              }}>
                <p className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: theme.colors.primary.electric }}>
                  {totalProgress}%
                </p>
                <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: theme.colors.text.secondary }}>
                  Overall Progress
                </p>
              </div>

              <div className="p-6 rounded-xl border backdrop-blur-sm transition-all hover:scale-105 hover:shadow-xl" style={{
                borderColor: theme.colors.accent.coral,
                backgroundColor: `${theme.colors.accent.coral}05`,
                boxShadow: theme.shadows.subtle,
              }}>
                <p className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: theme.colors.accent.coral }}>
                  {completedModules}/8
                </p>
                <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: theme.colors.text.secondary }}>
                  Modules Done
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTEXT SECTION */}
        <section className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl mb-20 sm:mb-32 animate-fade-in-up" style={{
          animationDelay: '0.4s',
        }}>
          <div className="p-8 sm:p-12 lg:p-16 rounded-2xl border-2 backdrop-blur-sm transition-all" style={{
            borderColor: `${theme.colors.primary.electric}40`,
            background: `linear-gradient(135deg, ${theme.colors.primary.light}30 0%, ${theme.colors.background.card} 100%)`,
            boxShadow: `0 0 40px ${theme.colors.primary.electric}15`,
          }}>
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4" style={{
                backgroundColor: `${theme.colors.accent.cyan}10`,
              }}>
                <Target size={14} style={{ color: theme.colors.accent.cyan }} />
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: theme.colors.accent.cyan }}>
                  What Makes This Different
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{
                letterSpacing: '-0.03em',
                color: theme.colors.text.primary,
              }}>
                Transform From Literacy to Leadership
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: theme.colors.text.secondary }}>
                  The UK government and major tech companies aim to train "10 million workers by 2030" with AI literacy courses. That's essential.
                </p>
                <p className="text-sm leading-relaxed font-semibold" style={{ color: theme.colors.text.primary }}>
                  But here's what matters: when everyone completes the same foundation, strategic application becomes the differentiator.
                </p>
              </div>
              <div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: theme.colors.text.secondary }}>
                  We've built 8 integrated modules that take you beyond literacy to strategic capability—applying AI specifically to YOUR context, knowing when to use it (and when not to), and building systems that create lasting competitive advantage.
                </p>
                <p className="text-sm leading-relaxed font-semibold" style={{ color: theme.colors.primary.deep }}>
                  The government creates mass literacy. We help you build strategic capability on top of it.
                </p>
              </div>
            </div>

            <div className="h-px" style={{ backgroundColor: theme.colors.border.subtle, marginBottom: '2rem' }} />

            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: theme.colors.accent.cyan }}>
                  ~22 Hours
                </p>
                <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: theme.colors.text.secondary }}>
                  Total Duration
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: theme.colors.primary.electric }}>
                  8 Modules
                </p>
                <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: theme.colors.text.secondary }}>
                  Integrated Journey
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: theme.colors.accent.coral }}>
                  44 Lessons
                </p>
                <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: theme.colors.text.secondary }}>
                  Self-Paced
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MODULES GRID - Premium Display */}
        <section className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl mb-20 sm:mb-32 animate-fade-in-up" style={{
          animationDelay: '0.5s',
        }}>
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-2" style={{
              letterSpacing: '-0.03em',
              color: theme.colors.text.primary,
            }}>
              Your Learning Journey
            </h2>
            <p style={{ color: theme.colors.text.secondary }}>
              Progress through strategic AI modules designed to build competitive advantage
            </p>
          </div>

          <div className="space-y-4">
            {allModules.map((module, index) => {
              const state = getModuleState(index);
              const isCompleted = state === 'completed';
              const isInProgress = state === 'in-progress';
              const isIncomplete = state === 'incomplete';

              let borderGlow = '';
              let bgStyle = { backgroundColor: 'white' };
              let badgeStyle = {
                backgroundColor: theme.colors.background.subtle,
                color: theme.colors.text.muted,
              };
              let badgeIcon = null;
              let badgeText = 'Incomplete';

              if (isCompleted) {
                bgStyle = { backgroundColor: theme.colors.background.card };
                badgeStyle = {
                  backgroundColor: `${theme.colors.status.success}15`,
                  color: theme.colors.status.success,
                  border: `1px solid ${theme.colors.status.success}40`,
                };
                badgeIcon = <CheckCircle2 size={16} />;
                badgeText = 'Completed';
              } else if (isInProgress) {
                bgStyle = { backgroundColor: theme.colors.background.card };
                borderGlow = `0 0 20px ${theme.colors.primary.electric}30`;
                badgeStyle = {
                  background: `linear-gradient(135deg, ${theme.colors.primary.electric} 0%, ${theme.colors.accent.cyan} 100%)`,
                  color: 'white',
                  fontWeight: '600',
                };
                badgeText = 'Current';
              } else {
                badgeStyle = {
                  backgroundColor: theme.colors.background.subtle,
                  color: theme.colors.text.muted,
                };
                badgeIcon = <Lock size={16} />;
              }

              return (
                <Link
                  key={module.moduleId}
                  to={`/modules/${module.moduleId}`}
                  className="group block p-6 sm:p-8 border-2 rounded-xl transition-all hover:scale-102"
                  style={{
                    ...bgStyle,
                    borderColor: isCompleted ? theme.colors.status.success : isInProgress ? theme.colors.primary.electric : theme.colors.border.subtle,
                    boxShadow: borderGlow || theme.shadows.subtle,
                    opacity: isIncomplete ? 0.6 : 1,
                    pointerEvents: isIncomplete ? 'none' : 'auto',
                    cursor: isIncomplete ? 'not-allowed' : 'pointer',
                  }}
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold mb-2 transition-colors" style={{
                        color: theme.colors.text.primary,
                      }}>
                        Module {module.moduleId}: {module.title}
                      </h3>
                      <p className="text-sm line-clamp-2" style={{ color: theme.colors.text.secondary }}>
                        {module.narrative}
                      </p>
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold whitespace-nowrap flex-shrink-0" style={badgeStyle}>
                      {badgeIcon}
                      {badgeText}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold tracking-wide" style={{ color: theme.colors.text.muted }}>
                      {module.completedLessons} / {module.totalLessons} lessons
                    </span>
                    <span className="text-sm" style={{ color: theme.colors.text.secondary }}>
                      ~{Math.ceil(module.totalLessons * 0.5)} hours
                    </span>
                  </div>

                  {(isCompleted || isInProgress) && (
                    <div className="h-2 overflow-hidden border rounded-full" style={{
                      backgroundColor: theme.colors.background.subtle,
                      borderColor: theme.colors.border.subtle,
                    }}>
                      <div
                        className="h-full transition-all"
                        style={{
                          width: `${module.progress}%`,
                          background: `linear-gradient(90deg, ${theme.colors.primary.electric} 0%, ${theme.colors.accent.cyan} 100%)`,
                          transitionDuration: '1000ms',
                        }}
                      />
                    </div>
                  )}
                </Link>
              );
            })}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl mb-20 sm:mb-32 animate-fade-in-up" style={{
          animationDelay: '0.6s',
        }}>
          <div className="p-8 sm:p-12 lg:p-16 rounded-2xl border-2 text-center" style={{
            borderColor: theme.colors.accent.coral,
            background: `linear-gradient(135deg, ${theme.colors.accent.coral}08 0%, ${theme.colors.background.card} 100%)`,
            boxShadow: `0 0 40px ${theme.colors.accent.coral}15`,
          }}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4" style={{
              letterSpacing: '-0.03em',
              color: theme.colors.text.primary,
            }}>
              Ready to Build Strategic Advantage?
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-8 leading-relaxed" style={{ color: theme.colors.text.secondary }}>
              {currentLesson ? (
                <>
                  Continue with <span className="font-semibold" style={{ color: theme.colors.primary.electric }}>{currentLesson.moduleTitle}</span> to develop frameworks that create lasting competitive advantage in AI.
                </>
              ) : (
                <>
                  You've completed all modules. Apply these frameworks continuously to maintain and strengthen your competitive positioning.
                </>
              )}
            </p>
            {currentLesson && (
              <Link
                to={`/modules/${currentLesson.moduleId}/lessons/${currentLesson.lessonId}`}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, ${theme.colors.accent.coral} 0%, ${theme.colors.primary.electric} 100%)`,
                  color: 'white',
                  boxShadow: `0 0 30px ${theme.colors.accent.coral}40`,
                }}
              >
                Start Next Lesson <ArrowRight size={20} />
              </Link>
            )}
          </div>
        </section>
      </div>

      <style>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
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
