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
      {/* Energetic Background - Visible Movement + Brand Colors */}
      <EnergeticBackground />

      <div className="max-w-7xl mx-auto px-8 py-8 relative z-10">
        {/* WELCOME SECTION */}
        <section className="mb-24 animate-fade-in-up">
          <p className="text-base font-semibold mb-2 tracking-wide" style={{ color: theme.colors.energy.sunrise }}>
            Welcome back
          </p>
          <h1 className="text-6xl font-black mb-4" style={{
            letterSpacing: '-0.02em',
            color: theme.colors.text.primary,
            background: `linear-gradient(135deg, ${theme.colors.text.primary} 0%, ${theme.colors.energy.sky} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Learn To Leverage AI
          </h1>
          <p className="text-lg font-semibold" style={{ color: theme.colors.text.secondary }}>
            Work doesn't have to be boring. Make it exciting and fulfilling.
          </p>
        </section>

        {/* STRATEGIC AI IMPLEMENTATION SECTION */}
        <section className="mb-24 p-12 bg-white/95 backdrop-blur-sm border border-slate-200 rounded-lg shadow-lg transition-all hover:shadow-xl animate-fade-in-up relative group" style={{
          animationDelay: '0.1s',
          boxShadow: theme.shadows.large,
        }}>
          {/* Lightning strike accents (sharp, powerful) */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 transition-all duration-200 opacity-0 group-hover:opacity-100" style={{
            borderColor: theme.colors.lightning.cyan,
            boxShadow: theme.shadows.lightning.cyan,
          }} />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 transition-all duration-200 opacity-0 group-hover:opacity-100" style={{
            borderColor: theme.colors.lightning.cyan,
            boxShadow: theme.shadows.lightning.cyan,
          }} />

          <div className="mb-2">
            <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: theme.colors.energy.sunrise }}>
              ENERGISE AI EDUCATION
            </p>
            <h2 className="text-3xl font-black mb-6" style={{
              letterSpacing: '-0.02em',
              color: theme.colors.text.primary,
            }}>
              Strategic AI Implementation
            </h2>
          </div>
          <p className="text-base mb-4 leading-relaxed max-w-3xl" style={{ color: theme.colors.text.secondary }}>
            The UK government and major tech companies are investing heavily in AI literacy—aiming to train "10 million workers by 2030" with courses on "AI fundamentals," "productivity tools," and "getting everyone AI-ready."
          </p>
          <p className="text-base mb-4 leading-relaxed max-w-3xl" style={{ color: theme.colors.text.secondary }}>
            That's good. Do those courses. AI literacy is essential.
          </p>
          <p className="text-base mb-8 leading-relaxed max-w-3xl" style={{ color: theme.colors.text.secondary }}>
            But here's what we've noticed: when everyone completes the same foundation, strategic application becomes the differentiator. Strategic AI Implementation is designed for what comes next—applying AI specifically to YOUR context, knowing when to use it (and when not to), and building systems that create competitive advantage instead of just completing training badges.
          </p>
          <p className="text-base font-semibold mb-8 max-w-3xl" style={{ color: theme.colors.text.primary }}>
            The government creates mass literacy. We help you build strategic capability on top of it.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 bg-gradient-to-br from-white to-slate-50 border-l-4 rounded-md shadow-md" style={{
              borderColor: theme.colors.energy.sunrise,
            }}>
              <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: theme.colors.text.muted }}>
                Total Duration
              </p>
              <p className="text-2xl font-black" style={{ color: theme.colors.text.primary }}>~22 Hours</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-white to-slate-50 border-l-4 rounded-md shadow-md" style={{
              borderColor: theme.colors.energy.sky,
            }}>
              <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: theme.colors.text.muted }}>
                Modules
              </p>
              <p className="text-2xl font-black" style={{ color: theme.colors.text.primary }}>8 Modules</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-white to-slate-50 border-l-4 rounded-md shadow-md" style={{
              borderColor: theme.colors.energy.fresh,
            }}>
              <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: theme.colors.text.muted }}>
                Format
              </p>
              <p className="text-2xl font-black" style={{ color: theme.colors.text.primary }}>Self-Paced</p>
            </div>
          </div>

        </section>

        {/* YOUR PROGRESS SECTION */}
        <section className="mb-24 p-12 bg-white/95 backdrop-blur-sm border border-slate-200 rounded-lg shadow-lg transition-all hover:shadow-xl hover:scale-[1.01] animate-fade-in-up animate-pulse-glow relative group" style={{
          animationDelay: '0.2s',
          boxShadow: theme.shadows.large,
        }}>
          {/* Lightning strike accents */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 transition-all duration-200 opacity-0 group-hover:opacity-100" style={{
            borderColor: theme.colors.energy.fresh,
            boxShadow: theme.shadows.lightning.cyan,
          }} />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 transition-all duration-200 opacity-0 group-hover:opacity-100" style={{
            borderColor: theme.colors.energy.fresh,
            boxShadow: theme.shadows.lightning.cyan,
          }} />

          <h2 className="text-3xl font-black mb-8" style={{
            letterSpacing: '-0.02em',
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
              <span className="text-3xl font-black animate-count-up" style={{
                background: `linear-gradient(135deg, ${theme.colors.energy.sky}, ${theme.colors.energy.fresh})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                {totalProgress}%
              </span>
            </div>
            {/* Use the ProgressBar component */}
            <div className="transform transition-all hover:scale-[1.02]">
              <div
                className="w-full h-4 overflow-hidden border rounded-md"
                style={{
                  backgroundColor: `${theme.colors.background.subtle}`,
                  borderColor: theme.colors.border.subtle,
                }}
              >
                <div
                  className="h-full transition-all duration-1000 relative animate-progress-fill"
                  style={{
                    width: `${totalProgress}%`,
                    background: `linear-gradient(90deg, ${theme.colors.energy.sky} 0%, ${theme.colors.energy.fresh} 100%)`,
                    boxShadow: `0 0 15px ${theme.colors.energy.sky}60`,
                  }}
                >
                  {totalProgress > 0 && (
                    <div
                      className="absolute right-0 top-0 bottom-0 w-1 animate-pulse"
                      style={{
                        backgroundColor: theme.colors.lightning.white,
                        boxShadow: theme.shadows.lightning.white,
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Lesson Stats - animated cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-white to-slate-50 border-l-4 rounded-md shadow-md transform transition-all hover:scale-105 hover:shadow-lg" style={{
              borderColor: theme.colors.energy.sky,
            }}>
              <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: theme.colors.text.muted }}>
                Lessons Completed
              </p>
              <p className="text-3xl font-black" style={{
                background: `linear-gradient(135deg, ${theme.colors.energy.sky}, ${theme.colors.energy.golden})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                {completedLessons} / {totalLessons}
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-white to-slate-50 border-l-4 rounded-md shadow-md transform transition-all hover:scale-105 hover:shadow-lg" style={{
              borderColor: theme.colors.energy.fresh,
            }}>
              <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: theme.colors.text.muted }}>
                Modules Completed
              </p>
              <p className="text-3xl font-black" style={{
                background: `linear-gradient(135deg, ${theme.colors.energy.fresh}, ${theme.colors.energy.sky})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                {completedModules} / 8
              </p>
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE SECTION */}
        <section className="mb-24 p-12 bg-white/95 backdrop-blur-sm border border-slate-200 rounded-lg shadow-lg transition-all hover:shadow-xl animate-fade-in-up relative group" style={{
          animationDelay: '0.3s',
          boxShadow: theme.shadows.large,
        }}>
          {/* Lightning strike accents */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 transition-all duration-200 opacity-0 group-hover:opacity-100" style={{
            borderColor: theme.colors.energy.sunrise,
            boxShadow: theme.shadows.lightning.cyan,
          }} />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 transition-all duration-200 opacity-0 group-hover:opacity-100" style={{
            borderColor: theme.colors.energy.sunrise,
            boxShadow: theme.shadows.lightning.cyan,
          }} />

          <h2 className="text-3xl font-black mb-8" style={{
            letterSpacing: '-0.02em',
            color: theme.colors.text.primary,
          }}>
            How This Differs
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2" style={{ borderColor: theme.colors.energy.sky }}>
                  <th className="text-left p-4 text-xs font-bold uppercase tracking-wider w-1/2" style={{ color: theme.colors.text.secondary }}>
                    "Government & Big Tech AI Training"
                  </th>
                  <th className="text-left p-4 text-xs font-bold uppercase tracking-wider w-1/2 bg-gradient-to-br from-sky-50 to-cyan-50" style={{ color: theme.colors.energy.sky }}>
                    Energise Strategic AI Implementation
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-slate-200 transition-all hover:bg-slate-50">
                  <td className="p-4" style={{ color: theme.colors.text.secondary }}>
                    <span className="font-semibold" style={{ color: theme.colors.text.primary }}>Goal:</span> "Mass AI adoption across 10M workers"
                  </td>
                  <td className="p-4 bg-gradient-to-br from-white to-sky-50" style={{ color: theme.colors.text.primary }}>
                    <span className="font-semibold" style={{ color: theme.colors.energy.sky }}>Goal:</span> Strategic competitive advantage for YOUR context
                  </td>
                </tr>
                <tr className="border-b border-slate-200 transition-all hover:bg-slate-50">
                  <td className="p-4" style={{ color: theme.colors.text.secondary }}>
                    <span className="font-semibold" style={{ color: theme.colors.text.primary }}>Audience:</span> "Everyone—generic training at scale"
                  </td>
                  <td className="p-4 bg-gradient-to-br from-white to-sky-50" style={{ color: theme.colors.text.primary }}>
                    <span className="font-semibold" style={{ color: theme.colors.energy.sky }}>Audience:</span> Those ready for strategic application
                  </td>
                </tr>
                <tr className="border-b border-slate-200 transition-all hover:bg-slate-50">
                  <td className="p-4" style={{ color: theme.colors.text.secondary }}>
                    <span className="font-semibold" style={{ color: theme.colors.text.primary }}>Focus:</span> "AI literacy and tool productivity"
                  </td>
                  <td className="p-4 bg-gradient-to-br from-white to-sky-50" style={{ color: theme.colors.text.primary }}>
                    <span className="font-semibold" style={{ color: theme.colors.energy.sky }}>Focus:</span> Strategic systems and positioning
                  </td>
                </tr>
                <tr className="border-b border-slate-200 transition-all hover:bg-slate-50">
                  <td className="p-4" style={{ color: theme.colors.text.secondary }}>
                    <span className="font-semibold" style={{ color: theme.colors.text.primary }}>Delivery:</span> "Scattered courses across platforms"
                  </td>
                  <td className="p-4 bg-gradient-to-br from-white to-sky-50" style={{ color: theme.colors.text.primary }}>
                    <span className="font-semibold" style={{ color: theme.colors.energy.sky }}>Delivery:</span> Integrated 8-module journey (44 lessons)
                  </td>
                </tr>
                <tr className="border-b-2" style={{ borderColor: theme.colors.energy.sunrise }}>
                  <td className="p-4 pt-6" colSpan="2">
                    <p className="font-bold text-xs uppercase tracking-wider mb-3" style={{ color: theme.colors.energy.sunrise }}>What You Learn</p>
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
                  <td className="p-4 bg-gradient-to-br from-white to-sky-50 align-top">
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
                <tr className="border-b-2" style={{ borderColor: theme.colors.energy.fresh }}>
                  <td className="p-4 pt-6" colSpan="2">
                    <p className="font-bold text-xs uppercase tracking-wider mb-3" style={{ color: theme.colors.energy.fresh }}>The Result</p>
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
                  <td className="p-4 bg-gradient-to-br from-white to-sky-50 align-top">
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
                  <td className="p-4 bg-gradient-to-br from-white to-sky-50" style={{ color: theme.colors.text.primary }}>
                    <span className="font-semibold" style={{ color: theme.colors.energy.sky }}>Investment:</span> Strategic capability investment
                  </td>
                </tr>
                <tr className="transition-all hover:bg-slate-50">
                  <td className="p-4" style={{ color: theme.colors.text.secondary }}>
                    <span className="font-semibold" style={{ color: theme.colors.text.primary }}>Best For:</span> "Getting the foundation everyone needs"
                  </td>
                  <td className="p-4 bg-gradient-to-br from-white to-sky-50" style={{ color: theme.colors.text.primary }}>
                    <span className="font-semibold" style={{ color: theme.colors.energy.sky }}>Best For:</span> Building competitive advantage after foundations
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* MODULE TIMELINE SECTION */}
        <section className="mb-24 p-12 bg-white/95 backdrop-blur-sm border border-slate-200 rounded-lg shadow-lg transition-all hover:shadow-xl animate-fade-in-up relative group" style={{
          animationDelay: '0.4s',
          boxShadow: theme.shadows.large,
        }}>
          {/* Lightning strike accents */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 transition-all duration-200 opacity-0 group-hover:opacity-100" style={{
            borderColor: theme.colors.energy.golden,
            boxShadow: theme.shadows.lightning.cyan,
          }} />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 transition-all duration-200 opacity-0 group-hover:opacity-100" style={{
            borderColor: theme.colors.energy.golden,
            boxShadow: theme.shadows.lightning.cyan,
          }} />

          <h2 className="text-3xl font-black mb-8" style={{
            letterSpacing: '-0.02em',
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
                borderColor = theme.colors.energy.fresh;
                bgStyle = { background: 'linear-gradient(to bottom right, white, rgb(240, 253, 244))' };
                badgeStyle = {
                  backgroundColor: `${theme.colors.energy.fresh}20`,
                  color: theme.colors.energy.fresh,
                  border: `1px solid ${theme.colors.energy.fresh}40`,
                };
                badgeText = 'Completed';
                opacityClass = '';
              } else if (isInProgress) {
                borderColor = theme.colors.energy.sky;
                bgStyle = { background: 'linear-gradient(to bottom right, white, rgb(240, 249, 255))' };
                shadowStyle = { boxShadow: `0 4px 20px ${theme.colors.energy.sky}20` };
                badgeStyle = {
                  backgroundColor: theme.colors.energy.sky,
                  color: 'white',
                  fontWeight: 'bold',
                };
                badgeText = 'Current';
                opacityClass = '';
              }

              return (
                <Link
                  key={module.moduleId}
                  to={`/modules/${module.moduleId}`}
                  className={`block p-6 rounded-lg border-2 ${opacityClass} transition-all duration-300 hover:shadow-xl hover:scale-[1.01] hover:-translate-y-1 group/module`}
                  style={{ ...bgStyle, borderColor, ...shadowStyle }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-black transition-colors duration-200 group-hover/module:opacity-80" style={{
                        color: theme.colors.text.primary,
                      }}>
                        Module {module.moduleId}: {module.title}
                      </h3>
                      <p className="text-sm mt-2" style={{ color: theme.colors.text.secondary }}>
                        {module.narrative}
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-md text-xs font-semibold whitespace-nowrap ml-4" style={badgeStyle}>
                      {badgeText}
                    </span>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xs font-semibold tracking-wide" style={{ color: theme.colors.text.muted }}>
                      {module.completedLessons} / {module.totalLessons} lessons
                    </span>
                    <span className="text-sm font-black" style={{ color: theme.colors.text.primary }}>
                      ~{Math.ceil(module.totalLessons * 0.5)} hours
                    </span>
                  </div>

                  {(isCompleted || isInProgress) && (
                    <div className="mt-4 h-3 overflow-hidden border rounded-md" style={{
                      backgroundColor: theme.colors.background.subtle,
                      borderColor: theme.colors.border.subtle,
                    }}>
                      <div
                        className="h-full transition-all duration-1000 relative"
                        style={{
                          width: `${module.progress}%`,
                          background: `linear-gradient(90deg, ${theme.colors.energy.sky} 0%, ${theme.colors.energy.fresh} 100%)`,
                          boxShadow: `0 0 12px ${theme.colors.energy.sky}50`,
                        }}
                      >
                        {module.progress > 0 && (
                          <div className="absolute right-0 top-0 bottom-0 w-1 animate-pulse" style={{
                            backgroundColor: theme.colors.lightning.white,
                            boxShadow: theme.shadows.lightning.white,
                          }} />
                        )}
                      </div>
                    </div>
                  )}
                </Link>
              );
            })}
          </div>
        </section>

        {/* NEXT STEPS SECTION - Energized CTA */}
        <section className="p-12 bg-gradient-to-br from-white via-sky-50 to-cyan-50 rounded-xl border-2 mb-24 shadow-2xl animate-fade-in-up transition-all hover:shadow-3xl hover:scale-[1.01] relative group overflow-hidden" style={{
          animationDelay: '0.5s',
          borderColor: theme.colors.energy.sky,
          boxShadow: `0 20px 40px ${theme.colors.energy.sky}30`,
        }}>
          {/* Animated gradient overlay for energy */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer opacity-30" />

          {/* Lightning corner accents - always visible, animated */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 animate-pulse-corner" style={{
            borderColor: theme.colors.energy.sunrise,
          }} />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 animate-pulse-corner" style={{
            borderColor: theme.colors.energy.sky,
            animationDelay: '0.5s',
          }} />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 animate-pulse-corner" style={{
            borderColor: theme.colors.energy.fresh,
            animationDelay: '1s',
          }} />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 animate-pulse-corner" style={{
            borderColor: theme.colors.energy.golden,
            animationDelay: '1.5s',
          }} />

          <div className="relative z-10">
            <h2 className="text-4xl font-black mb-4" style={{
              letterSpacing: '-0.02em',
              background: `linear-gradient(135deg, ${theme.colors.energy.sunrise}, ${theme.colors.energy.sky})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Next Steps
            </h2>
            <p className="text-base mb-8 max-w-2xl leading-relaxed" style={{ color: theme.colors.text.secondary }}>
              {currentLesson ? (
                <>
                  Continue with <span className="font-bold" style={{ color: theme.colors.energy.sky }}>{currentLesson.moduleTitle}</span> to keep building your capabilities. Every lesson completed brings you closer to transforming repetitive work into exciting possibilities.
                </>
              ) : (
                <>
                  You've completed all modules! Congratulations on your journey. Keep applying these concepts to create work that's fulfilling, not monotonous.
                </>
              )}
            </p>
            {currentLesson ? (
              <Link
                to={`/modules/${currentLesson.moduleId}/lessons/${currentLesson.lessonId}`}
                className="inline-block px-12 py-4 font-black rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 border-2 relative group/btn overflow-hidden"
                style={{
                  backgroundColor: theme.colors.energy.sky,
                  color: 'white',
                  borderColor: theme.colors.energy.sky,
                  boxShadow: `0 8px 24px ${theme.colors.energy.sky}40`,
                }}
              >
                <span className="relative z-10">Continue Learning →</span>
                {/* Lightning sweep effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700" />
              </Link>
            ) : (
              <button disabled className="px-12 py-4 font-black rounded-lg cursor-not-allowed border-2" style={{
                backgroundColor: theme.colors.background.subtle,
                color: theme.colors.text.muted,
                borderColor: theme.colors.border.default,
              }}>
                All Modules Complete ✓
              </button>
            )}
          </div>
        </section>
      </div>

      {/* Energetic Animations */}
      <style>{`
        /* Entrance - energetic bounce */
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
        }

        /* Shimmer effect - energy sweep */
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }

        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }

        /* Pulse corner - lightning strikes */
        @keyframes pulse-corner {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
        }

        .animate-pulse-corner {
          animation: pulse-corner 2s ease-in-out infinite;
        }

        /* Pulse glow - card energy */
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(0, 184, 212, 0.1);
          }
          50% {
            box-shadow: 0 0 40px rgba(0, 184, 212, 0.3);
          }
        }

        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        /* Progress fill - energetic growth */
        @keyframes progress-fill {
          0% {
            transform: scaleX(0);
            transform-origin: left;
          }
          100% {
            transform: scaleX(1);
            transform-origin: left;
          }
        }

        .animate-progress-fill {
          animation: progress-fill 1s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        /* Count up effect */
        @keyframes count-up {
          0% {
            transform: translateY(10px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-count-up {
          animation: count-up 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        /* Floating animation - gentle energy */
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        /* Respect prefers-reduced-motion */
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in-up,
          .animate-shimmer,
          .animate-pulse-corner,
          .animate-pulse-glow,
          .animate-progress-fill,
          .animate-count-up,
          .animate-float {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
}
