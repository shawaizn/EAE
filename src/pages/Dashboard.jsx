import { useAuth } from '../hooks/useAuth';
import { useProgress } from '../hooks/useProgress';
import { modulesData } from '../data/modulesData';
import { getLessonNumber } from '../lib/utils';
import { Link } from 'react-router-dom';
import { EnergeticBackground } from '../components/branding/EnergeticBackground';
import { theme } from '../styles/theme';

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

  // Calculate progress for all modules from modulesData
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

  // Calculate current lesson (first uncompleted) only after loading is complete
  const currentLesson = !loading ? (() => {
    // Loop through all modules and lessons to find first uncompleted
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
    // All lessons completed
    return null;
  })() : null;

  // Keep currentModule for display purposes
  const currentModule = !loading ? (() => {
    const inProgress = allModules.find(m => m.progress > 0 && m.progress < 100);
    if (inProgress) return inProgress;

    const nextAvailable = allModules.find(m => m.progress === 0);
    if (nextAvailable) return nextAvailable;

    if (allModules.every(m => m.progress === 100)) return null;

    return allModules[0];
  })() : null;

  const getModuleState = (index) => {
    const current = allModules[index];
    if (current.progress === 100) return 'completed';
    if (current.progress > 0) return 'in-progress';

    // Special case: Module 1 should be 'current' if no other module is in progress
    if (index === 0) {
      const hasInProgressModule = allModules.some(m => m.progress > 0 && m.progress < 100);
      if (!hasInProgressModule) return 'in-progress';
    }

    return 'incomplete';
  };

  return (
    <div className="w-full h-full overflow-y-auto relative">
      {/* Energetic Background - Dynamic + Visible Movement */}
      <EnergeticBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 relative z-10">
        {/* WELCOME SECTION */}
        <section className="mb-16 sm:mb-24 animate-fade-in-up">
          <p className="text-sm sm:text-base font-semibold mb-2 tracking-wide" style={{ color: theme.colors.accent.coral }}>
            Welcome back
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4" style={{
            letterSpacing: '-0.02em',
            fontWeight: theme.typography.heading.weight,
            background: `linear-gradient(135deg, ${theme.colors.primary.deep} 0%, ${theme.colors.accent.cyan} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Learn To Leverage AI
          </h1>
          <p className="text-lg" style={{ color: theme.colors.text.secondary }}>
            Strategic AI implementation for professional results.
          </p>
        </section>

        {/* STRATEGIC AI IMPLEMENTATION SECTION */}
        <section className="mb-16 sm:mb-24 p-4 sm:p-8 lg:p-12 bg-white backdrop-blur-sm border rounded-xl transition-all animate-fade-in-up" style={{
          animationDelay: '0.1s',
          borderColor: theme.colors.border.subtle,
          borderRadius: theme.radius.default,
          boxShadow: theme.shadows.medium,
        }}>

          <div className="mb-2">
            <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: theme.colors.accent.cyan }}>
              ENERGISE AI EDUCATION
            </p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl mb-4 sm:mb-6" style={{
              letterSpacing: '-0.02em',
              fontWeight: theme.typography.heading.weight,
              color: theme.colors.text.primary,
            }}>
              Strategic AI Implementation
            </h2>
          </div>
          <p className="text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed max-w-3xl" style={{ color: theme.colors.text.secondary }}>
            The UK government and major tech companies are investing heavily in AI literacy—aiming to train "10 million workers by 2030" with courses on "AI fundamentals," "productivity tools," and "getting everyone AI-ready."
          </p>
          <p className="text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed max-w-3xl" style={{ color: theme.colors.text.secondary }}>
            That's good. Do those courses. AI literacy is essential.
          </p>
          <p className="text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed max-w-3xl" style={{ color: theme.colors.text.secondary }}>
            But here's what we've noticed: when everyone completes the same foundation, strategic application becomes the differentiator. Strategic AI Implementation is designed for what comes next—applying AI specifically to YOUR context, knowing when to use it (and when not to), and building systems that create competitive advantage instead of just completing training badges.
          </p>
          <p className="text-sm sm:text-base font-semibold mb-6 sm:mb-8 max-w-3xl" style={{ color: theme.colors.text.primary }}>
            The government creates mass literacy. We help you build strategic capability on top of it.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
            <div className="p-4 sm:p-6 border-l-4 rounded-md" style={{
              backgroundColor: theme.colors.background.card,
              borderColor: theme.colors.primary.electric,
              borderRadius: theme.radius.default,
              boxShadow: theme.shadows.subtle,
            }}>
              <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: theme.colors.text.muted }}>
                Total Duration
              </p>
              <p className="text-xl sm:text-2xl" style={{ color: theme.colors.text.primary, fontWeight: theme.typography.heading.weight }}>~22 Hours</p>
            </div>
            <div className="p-4 sm:p-6 border-l-4 rounded-md" style={{
              backgroundColor: theme.colors.background.card,
              borderColor: theme.colors.accent.cyan,
              borderRadius: theme.radius.default,
              boxShadow: theme.shadows.subtle,
            }}>
              <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: theme.colors.text.muted }}>
                Modules
              </p>
              <p className="text-xl sm:text-2xl" style={{ color: theme.colors.text.primary, fontWeight: theme.typography.heading.weight }}>8 Modules</p>
            </div>
            <div className="p-4 sm:p-6 border-l-4 rounded-md" style={{
              backgroundColor: theme.colors.background.card,
              borderColor: theme.colors.accent.coral,
              borderRadius: theme.radius.default,
              boxShadow: theme.shadows.subtle,
            }}>
              <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: theme.colors.text.muted }}>
                Format
              </p>
              <p className="text-xl sm:text-2xl" style={{ color: theme.colors.text.primary, fontWeight: theme.typography.heading.weight }}>Self-Paced</p>
            </div>
          </div>

        </section>

        {/* YOUR PROGRESS SECTION */}
        <section className="mb-16 sm:mb-24 p-4 sm:p-8 lg:p-12 bg-white backdrop-blur-sm border rounded-xl transition-all animate-fade-in-up" style={{
          animationDelay: '0.2s',
          borderColor: theme.colors.border.subtle,
          borderRadius: theme.radius.default,
          boxShadow: theme.shadows.medium,
        }}>
          <h2 className="text-xl sm:text-2xl lg:text-3xl mb-6 sm:mb-8" style={{
            letterSpacing: '-0.02em',
            fontWeight: theme.typography.heading.weight,
            color: theme.colors.text.primary,
          }}>
            Your Progress
          </h2>

          {/* Overall Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold tracking-wide" style={{ color: theme.colors.text.secondary }}>
                Overall Completion
              </span>
              <span className="text-3xl" style={{
                fontWeight: theme.typography.heading.weight,
                color: theme.colors.primary.deep,
              }}>
                {totalProgress}%
              </span>
            </div>
            {/* Progress bar */}
            <div className="transition-all">
              <div
                className="w-full h-4 overflow-hidden border rounded-md"
                style={{
                  backgroundColor: theme.colors.background.subtle,
                  borderColor: theme.colors.border.subtle,
                  borderRadius: theme.radius.sm,
                }}
              >
                <div
                  className="h-full transition-all"
                  style={{
                    width: `${totalProgress}%`,
                    background: `linear-gradient(90deg, ${theme.colors.primary.electric} 0%, ${theme.colors.accent.cyan} 100%)`,
                    transitionDuration: '1000ms',
                  }}
                />
              </div>
            </div>
          </div>

          {/* Lesson Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="p-4 sm:p-6 border-l-4 rounded-md transition-all" style={{
              backgroundColor: theme.colors.background.card,
              borderColor: theme.colors.accent.cyan,
              borderRadius: theme.radius.default,
              boxShadow: theme.shadows.subtle,
            }}>
              <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: theme.colors.text.muted }}>
                Lessons Completed
              </p>
              <p className="text-2xl sm:text-3xl" style={{
                fontWeight: theme.typography.heading.weight,
                color: theme.colors.primary.deep,
              }}>
                {completedLessons} / {totalLessons}
              </p>
            </div>
            <div className="p-4 sm:p-6 border-l-4 rounded-md transition-all" style={{
              backgroundColor: theme.colors.background.card,
              borderColor: theme.colors.accent.coral,
              borderRadius: theme.radius.default,
              boxShadow: theme.shadows.subtle,
            }}>
              <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: theme.colors.text.muted }}>
                Modules Completed
              </p>
              <p className="text-2xl sm:text-3xl" style={{
                fontWeight: theme.typography.heading.weight,
                color: theme.colors.primary.deep,
              }}>
                {completedModules} / 8
              </p>
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE SECTION */}
        <section className="mb-16 sm:mb-24 p-4 sm:p-8 lg:p-12 bg-white backdrop-blur-sm border rounded-xl transition-all animate-fade-in-up" style={{
          animationDelay: '0.3s',
          borderColor: theme.colors.border.subtle,
          borderRadius: theme.radius.default,
          boxShadow: theme.shadows.medium,
        }}>
          <h2 className="text-xl sm:text-2xl lg:text-3xl mb-6 sm:mb-8" style={{
            letterSpacing: '-0.02em',
            fontWeight: theme.typography.heading.weight,
            color: theme.colors.text.primary,
          }}>
            How This Differs
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2" style={{ borderColor: theme.colors.primary.electric }}>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-wider w-1/2" style={{ color: theme.colors.text.secondary }}>
                    "Government & Big Tech AI Training"
                  </th>
                  <th className="text-left p-4 text-xs font-semibold uppercase tracking-wider w-1/2" style={{
                    color: theme.colors.primary.deep,
                    backgroundColor: theme.colors.primary.light,
                  }}>
                    Energise Strategic AI Implementation
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-slate-200 transition-all hover:bg-slate-50">
                  <td className="p-4" style={{ color: theme.colors.text.secondary }}>
                    <span className="font-semibold" style={{ color: theme.colors.text.primary }}>Goal:</span> "Mass AI adoption across 10M workers"
                  </td>
                  <td className="p-4" style={{ color: theme.colors.text.primary, backgroundColor: theme.colors.primary.light }}>
                    <span className="font-semibold" style={{ color: theme.colors.primary.deep }}>Goal:</span> Strategic competitive advantage for YOUR context
                  </td>
                </tr>
                <tr className="border-b border-slate-200 transition-all hover:bg-slate-50">
                  <td className="p-4" style={{ color: theme.colors.text.secondary }}>
                    <span className="font-semibold" style={{ color: theme.colors.text.primary }}>Audience:</span> "Everyone—generic training at scale"
                  </td>
                  <td className="p-4" style={{ color: theme.colors.text.primary, backgroundColor: theme.colors.primary.light }}>
                    <span className="font-semibold" style={{ color: theme.colors.primary.deep }}>Audience:</span> Those ready for strategic application
                  </td>
                </tr>
                <tr className="border-b border-slate-200 transition-all hover:bg-slate-50">
                  <td className="p-4" style={{ color: theme.colors.text.secondary }}>
                    <span className="font-semibold" style={{ color: theme.colors.text.primary }}>Focus:</span> "AI literacy and tool productivity"
                  </td>
                  <td className="p-4" style={{ color: theme.colors.text.primary, backgroundColor: theme.colors.primary.light }}>
                    <span className="font-semibold" style={{ color: theme.colors.primary.deep }}>Focus:</span> Strategic systems and positioning
                  </td>
                </tr>
                <tr className="border-b border-slate-200 transition-all hover:bg-slate-50">
                  <td className="p-4" style={{ color: theme.colors.text.secondary }}>
                    <span className="font-semibold" style={{ color: theme.colors.text.primary }}>Delivery:</span> "Scattered courses across platforms"
                  </td>
                  <td className="p-4" style={{ color: theme.colors.text.primary, backgroundColor: theme.colors.primary.light }}>
                    <span className="font-semibold" style={{ color: theme.colors.primary.deep }}>Delivery:</span> Integrated 8-module journey (44 lessons)
                  </td>
                </tr>
                <tr className="border-b-2" style={{ borderColor: theme.colors.accent.cyan }}>
                  <td className="p-4 pt-6" colSpan="2">
                    <p className="font-semibold text-xs uppercase tracking-wider mb-3" style={{ color: theme.colors.accent.cyan }}>What You Learn</p>
                  </td>
                </tr>
                <tr className="border-b border-slate-200 transition-all hover:bg-slate-50">
                  <td className="p-4 align-top">
                    <ul className="space-y-2" style={{ color: theme.colors.text.secondary }}>
                      <li>✓ "How AI works" (foundations)</li>
                      <li>✓ "How to use AI tools" (ChatGPT, Copilot)</li>
                      <li>✓ "Prompt engineering basics"</li>
                      <li>✓ "Maximizing productivity through automation"</li>
                      <li className="opacity-40">✗ Strategic restraint</li>
                      <li className="opacity-40">✗ When NOT to use AI</li>
                      <li className="opacity-40">✗ Building systems</li>
                      <li className="opacity-40">✗ Career positioning</li>
                    </ul>
                  </td>
                  <td className="p-4 align-top" style={{ color: theme.colors.text.primary, backgroundColor: theme.colors.primary.light }}>
                    <ul className="space-y-2" style={{ color: theme.colors.text.primary }}>
                      <li>✓ How AI works IN YOUR CONTEXT</li>
                      <li>✓ When to use AI—and when NOT to</li>
                      <li>✓ Custom prompt libraries for YOUR workflow</li>
                      <li>✓ Strategic restraint and capability protection</li>
                      <li>✓ The five AI traps and prevention tactics</li>
                      <li>✓ Decision frameworks for YOUR context</li>
                      <li>✓ Playbooks and workflows that compound</li>
                      <li>✓ Strategic assets for lasting advantage</li>
                    </ul>
                  </td>
                </tr>
                <tr className="border-b-2" style={{ borderColor: theme.colors.accent.coral }}>
                  <td className="p-4 pt-6" colSpan="2">
                    <p className="font-semibold text-xs uppercase tracking-wider mb-3" style={{ color: theme.colors.accent.coral }}>The Result</p>
                  </td>
                </tr>
                <tr className="border-b border-slate-200 transition-all hover:bg-slate-50">
                  <td className="p-4 align-top">
                    <ul className="space-y-2" style={{ color: theme.colors.text.secondary }}>
                      <li>• "You can use AI tools"</li>
                      <li>• "You're AI ready" (badge of completion)</li>
                      <li>• "You're productive" (like everyone else)</li>
                    </ul>
                  </td>
                  <td className="p-4 align-top" style={{ color: theme.colors.text.primary, backgroundColor: theme.colors.primary.light }}>
                    <ul className="space-y-2" style={{ color: theme.colors.text.primary }}>
                      <li>• You know WHERE AI creates advantage in YOUR context</li>
                      <li>• You're strategically positioned (actual capability)</li>
                      <li>• You're independent (with systems)</li>
                    </ul>
                  </td>
                </tr>
                <tr className="border-b border-slate-200 transition-all hover:bg-slate-50">
                  <td className="p-4" style={{ color: theme.colors.text.secondary }}>
                    <span className="font-semibold" style={{ color: theme.colors.text.primary }}>Investment:</span> Free (government-backed)
                  </td>
                  <td className="p-4" style={{ color: theme.colors.text.primary, backgroundColor: theme.colors.primary.light }}>
                    <span className="font-semibold" style={{ color: theme.colors.primary.deep }}>Investment:</span> Strategic capability investment
                  </td>
                </tr>
                <tr className="transition-all hover:bg-slate-50">
                  <td className="p-4" style={{ color: theme.colors.text.secondary }}>
                    <span className="font-semibold" style={{ color: theme.colors.text.primary }}>Best For:</span> "Getting the foundation everyone needs"
                  </td>
                  <td className="p-4" style={{ color: theme.colors.text.primary, backgroundColor: theme.colors.primary.light }}>
                    <span className="font-semibold" style={{ color: theme.colors.primary.deep }}>Best For:</span> Building competitive advantage after foundations
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* MODULE TIMELINE SECTION */}
        <section className="mb-16 sm:mb-24 p-4 sm:p-8 lg:p-12 bg-white backdrop-blur-sm border rounded-xl transition-all animate-fade-in-up" style={{
          animationDelay: '0.4s',
          borderColor: theme.colors.border.subtle,
          borderRadius: theme.radius.default,
          boxShadow: theme.shadows.medium,
        }}>
          <h2 className="text-xl sm:text-2xl lg:text-3xl mb-6 sm:mb-8" style={{
            letterSpacing: '-0.02em',
            fontWeight: theme.typography.heading.weight,
            color: theme.colors.text.primary,
          }}>
            Module Timeline
          </h2>

          <div className="space-y-4">
            {allModules.map((module, index) => {
              const state = getModuleState(index);
              const isCompleted = state === 'completed';
              const isInProgress = state === 'in-progress';
              const isIncomplete = state === 'incomplete';

              let borderColor = theme.colors.border.subtle;
              let bgStyle = { backgroundColor: 'white' };
              let shadowStyle = {};
              let badgeStyle = {
                backgroundColor: theme.colors.background.subtle,
                color: theme.colors.text.muted,
              };
              let badgeText = 'Incomplete';
              let opacityClass = 'opacity-60';

              if (isCompleted) {
                borderColor = theme.colors.status.success;
                bgStyle = { backgroundColor: theme.colors.background.card };
                badgeStyle = {
                  backgroundColor: `${theme.colors.status.success}15`,
                  color: theme.colors.status.success,
                  border: `1px solid ${theme.colors.status.success}40`,
                };
                badgeText = 'Completed';
                opacityClass = '';
              } else if (isInProgress) {
                borderColor = theme.colors.primary.electric;
                bgStyle = { backgroundColor: theme.colors.background.card };
                shadowStyle = { boxShadow: theme.shadows.medium };
                badgeStyle = {
                  backgroundColor: theme.colors.primary.electric,
                  color: 'white',
                  fontWeight: '600',
                };
                badgeText = 'Current';
                opacityClass = '';
              }

              return (
                <Link
                  key={module.moduleId}
                  to={`/modules/${module.moduleId}`}
                  className={`block p-3 sm:p-6 border-2 ${opacityClass} transition-all`}
                  style={{
                    ...bgStyle,
                    borderColor,
                    ...shadowStyle,
                    borderRadius: theme.radius.default,
                  }}
                >
                  <div className="flex flex-col sm:flex-row items-start justify-between gap-2 sm:gap-4 sm:mb-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg transition-colors break-words" style={{
                        color: theme.colors.text.primary,
                        fontWeight: theme.typography.heading.weight,
                      }}>
                        Module {module.moduleId}: {module.title}
                      </h3>
                      <p className="text-xs sm:text-sm mt-1 sm:mt-2 line-clamp-2" style={{ color: theme.colors.text.secondary }}>
                        {module.narrative}
                      </p>
                    </div>
                    <span className="px-2 sm:px-3 py-1 rounded-md text-xs font-semibold whitespace-nowrap flex-shrink-0" style={badgeStyle}>
                      {badgeText}
                    </span>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xs font-semibold tracking-wide" style={{ color: theme.colors.text.muted }}>
                      {module.completedLessons} / {module.totalLessons} lessons
                    </span>
                    <span className="text-sm" style={{
                      color: theme.colors.text.primary,
                      fontWeight: theme.typography.label.weight,
                    }}>
                      ~{Math.ceil(module.totalLessons * 0.5)} hours
                    </span>
                  </div>

                  {(isCompleted || isInProgress) && (
                    <div className="mt-4 h-3 overflow-hidden border rounded-md" style={{
                      backgroundColor: theme.colors.background.subtle,
                      borderColor: theme.colors.border.subtle,
                      borderRadius: theme.radius.sm,
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

        {/* NEXT STEPS SECTION - Professional CTA */}
        <section className="p-4 sm:p-8 lg:p-12 bg-white rounded-xl border-2 mb-16 sm:mb-24 animate-fade-in-up transition-all" style={{
          animationDelay: '0.5s',
          borderColor: theme.colors.primary.electric,
          borderRadius: theme.radius.default,
          boxShadow: theme.shadows.large,
        }}>
          <div>
            <h2 className="text-2xl sm:text-3xl mb-3 sm:mb-4" style={{
              letterSpacing: '-0.02em',
              fontWeight: theme.typography.heading.weight,
              color: theme.colors.primary.deep,
            }}>
              Next Steps
            </h2>
            <p className="text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl leading-relaxed" style={{ color: theme.colors.text.secondary }}>
              {currentLesson ? (
                <>
                  Continue with <span className="font-semibold" style={{ color: theme.colors.primary.electric }}>{currentLesson.moduleTitle}</span> to build strategic AI capabilities.
                </>
              ) : (
                <>
                  You've completed all modules. Continue applying these frameworks to maintain your competitive advantage.
                </>
              )}
            </p>
            {currentLesson ? (
              <Link
                to={`/modules/${currentLesson.moduleId}/lessons/${currentLesson.lessonId}`}
                className="inline-block px-8 sm:px-10 py-3 rounded-lg transition-all text-sm sm:text-base w-full sm:w-auto text-center"
                style={{
                  backgroundColor: theme.colors.primary.electric,
                  color: 'white',
                  fontWeight: theme.typography.label.weight,
                  borderRadius: theme.radius.default,
                  boxShadow: theme.shadows.medium,
                }}
              >
                Continue Learning →
              </Link>
            ) : (
              <button disabled className="px-8 sm:px-10 py-3 rounded-lg cursor-not-allowed text-sm sm:text-base w-full sm:w-auto" style={{
                backgroundColor: theme.colors.background.subtle,
                color: theme.colors.text.muted,
                fontWeight: theme.typography.label.weight,
                borderRadius: theme.radius.default,
              }}>
                All Modules Complete ✓
              </button>
            )}
          </div>
        </section>
      </div>

      {/* Professional Animations - Minimal */}
      <style>{`
        /* Entrance - subtle fade */
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

        .animate-fade-in-up {
          animation: fade-in-up 0.4s ease-out forwards;
          opacity: 0;
        }

        /* Respect prefers-reduced-motion */
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
