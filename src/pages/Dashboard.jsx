import { useAuth } from '../hooks/useAuth';
import { useProgress } from '../hooks/useProgress';
import { modulesData } from '../data/modulesData';
import { getLessonNumber } from '../lib/utils';
import { Link } from 'react-router-dom';
import { EnergeticBackground } from '../components/branding/EnergeticBackground';

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
      {/* Animated Background */}
      <EnergeticBackground />

      <div className="max-w-7xl mx-auto px-8 py-8 relative z-10">
        {/* WELCOME SECTION */}
        <section className="mb-24 animate-fade-in-up">
          <p className="text-xl text-slate-400 font-light mb-2">
            Welcome back
          </p>
          <h1 className="text-6xl font-black text-slate-900 mb-4" style={{ letterSpacing: '-0.02em' }}>
            Learn To Leverage AI
          </h1>
          <p className="text-lg text-slate-600 font-semibold">
            Save time. Save effort. Achieve more.
          </p>
        </section>

        {/* STRATEGIC AI IMPLEMENTATION SECTION */}
        <section className="mb-24 p-12 bg-white/80 backdrop-blur-sm border-2 border-slate-200 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-cyan-400/50 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="mb-2">
            <p className="text-xs font-black uppercase tracking-wider text-cyan-600 mb-1">
              ENERGISE AI EDUCATION
            </p>
            <h2 className="text-3xl font-black text-slate-900 mb-6" style={{ letterSpacing: '-0.02em' }}>
              Strategic AI Implementation
            </h2>
          </div>
          <p className="text-base text-slate-700 mb-4 leading-relaxed max-w-3xl">
            The UK government and major tech companies are investing heavily in AI literacy—aiming to train "10 million workers by 2030" with courses on "AI fundamentals," "productivity tools," and "getting everyone AI-ready."
          </p>
          <p className="text-base text-slate-700 mb-4 leading-relaxed max-w-3xl">
            That's good. Do those courses. AI literacy is essential.
          </p>
          <p className="text-base text-slate-700 mb-8 leading-relaxed max-w-3xl">
            But here's what we've noticed: when everyone completes the same foundation, strategic application becomes the differentiator. Strategic AI Implementation is designed for what comes next—applying AI specifically to YOUR context, knowing when to use it (and when not to), and building systems that create competitive advantage instead of just completing training badges.
          </p>
          <p className="text-base text-slate-900 font-semibold mb-8 max-w-3xl">
            The government creates mass literacy. We help you build strategic capability on top of it.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 bg-white border-l-4 border-cyan-500 rounded-lg">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
                Total Duration
              </p>
              <p className="text-2xl font-black text-slate-900">~22 Hours</p>
            </div>
            <div className="p-6 bg-white border-l-4 border-cyan-500 rounded-lg">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
                Modules
              </p>
              <p className="text-2xl font-black text-slate-900">8 Modules</p>
            </div>
            <div className="p-6 bg-white border-l-4 border-cyan-500 rounded-lg">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
                Format
              </p>
              <p className="text-2xl font-black text-slate-900">Self-Paced</p>
            </div>
          </div>

        </section>

        {/* YOUR PROGRESS SECTION */}
        <section className="mb-24 p-12 bg-white/80 backdrop-blur-sm border-2 border-slate-200 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-violet-400/50 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl font-black text-slate-900 mb-8" style={{ letterSpacing: '-0.02em' }}>
            Your Progress
          </h2>

          {/* Overall Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-slate-700">
                Overall Completion
              </span>
              <span className="text-2xl font-black text-slate-900">
                {totalProgress}%
              </span>
            </div>
            <div className="h-4 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-cyan-500 transition-all duration-500"
                style={{ width: `${totalProgress}%` }}
              />
            </div>
          </div>

          {/* Lesson Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-slate-200 rounded-lg">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
                Lessons Completed
              </p>
              <p className="text-2xl font-black text-slate-900">
                {completedLessons} / {totalLessons}
              </p>
            </div>
            <div className="p-6 bg-white border border-slate-200 rounded-lg">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
                Modules Completed
              </p>
              <p className="text-2xl font-black text-slate-900">
                {completedModules} / 8
              </p>
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE SECTION */}
        <section className="mb-24 p-12 bg-white/80 backdrop-blur-sm border-2 border-slate-200 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-orange-400/50 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-3xl font-black text-slate-900 mb-8" style={{ letterSpacing: '-0.02em' }}>
            How This Differs
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-300">
                  <th className="text-left p-4 text-sm font-black text-slate-600 uppercase tracking-wider w-1/2">
                    "Government & Big Tech AI Training"
                  </th>
                  <th className="text-left p-4 text-sm font-black text-slate-900 uppercase tracking-wider w-1/2 bg-cyan-50">
                    Energise Strategic AI Implementation
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-slate-200">
                  <td className="p-4 text-slate-600">
                    <span className="font-semibold text-slate-700">Goal:</span> "Mass AI adoption across 10M workers"
                  </td>
                  <td className="p-4 bg-cyan-50 text-slate-900">
                    <span className="font-semibold">Goal:</span> Strategic competitive advantage for YOUR context
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 text-slate-600">
                    <span className="font-semibold text-slate-700">Audience:</span> "Everyone—generic training at scale"
                  </td>
                  <td className="p-4 bg-cyan-50 text-slate-900">
                    <span className="font-semibold">Audience:</span> Those ready for strategic application
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 text-slate-600">
                    <span className="font-semibold text-slate-700">Focus:</span> "AI literacy and tool productivity"
                  </td>
                  <td className="p-4 bg-cyan-50 text-slate-900">
                    <span className="font-semibold">Focus:</span> Strategic systems and positioning
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 text-slate-600">
                    <span className="font-semibold text-slate-700">Delivery:</span> "Scattered courses across platforms"
                  </td>
                  <td className="p-4 bg-cyan-50 text-slate-900">
                    <span className="font-semibold">Delivery:</span> Integrated 8-module journey (44 lessons)
                  </td>
                </tr>
                <tr className="border-b-2 border-slate-300">
                  <td className="p-4 pt-6" colSpan="2">
                    <p className="font-black text-slate-900 text-xs uppercase tracking-wider mb-3">What You Learn</p>
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 align-top">
                    <ul className="text-slate-600 space-y-2">
                      <li>✓ "How AI works" (foundations)</li>
                      <li>✓ "How to use AI tools" (ChatGPT, Copilot)</li>
                      <li>✓ "Prompt engineering basics"</li>
                      <li>✓ "Maximizing productivity through automation"</li>
                      <li className="text-slate-400">✗ Strategic restraint</li>
                      <li className="text-slate-400">✗ When NOT to use AI</li>
                      <li className="text-slate-400">✗ Building systems</li>
                      <li className="text-slate-400">✗ Career positioning</li>
                    </ul>
                  </td>
                  <td className="p-4 bg-cyan-50 align-top">
                    <ul className="text-slate-900 space-y-2">
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
                <tr className="border-b-2 border-slate-300">
                  <td className="p-4 pt-6" colSpan="2">
                    <p className="font-black text-slate-900 text-xs uppercase tracking-wider mb-3">The Result</p>
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 align-top">
                    <ul className="text-slate-600 space-y-2">
                      <li>• "You can use AI tools"</li>
                      <li>• "You're AI ready" (badge of completion)</li>
                      <li>• "You're productive" (like everyone else)</li>
                    </ul>
                  </td>
                  <td className="p-4 bg-cyan-50 align-top">
                    <ul className="text-slate-900 space-y-2">
                      <li>• You know WHERE AI creates advantage in YOUR context</li>
                      <li>• You're strategically positioned (actual capability)</li>
                      <li>• You're independent (with systems)</li>
                    </ul>
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-4 text-slate-600">
                    <span className="font-semibold text-slate-700">Investment:</span> Free (government-backed)
                  </td>
                  <td className="p-4 bg-cyan-50 text-slate-900">
                    <span className="font-semibold">Investment:</span> Strategic capability investment
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-600">
                    <span className="font-semibold text-slate-700">Best For:</span> "Getting the foundation everyone needs"
                  </td>
                  <td className="p-4 bg-cyan-50 text-slate-900">
                    <span className="font-semibold">Best For:</span> Building competitive advantage after foundations
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* MODULE TIMELINE SECTION */}
        <section className="mb-24 p-12 bg-white/80 backdrop-blur-sm border-2 border-slate-200 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-cyan-400/50 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-3xl font-black text-slate-900 mb-8" style={{ letterSpacing: '-0.02em' }}>
            Module Timeline
          </h2>

          <div className="space-y-4">
            {allModules.map((module, index) => {
              const state = getModuleState(index);
              const isCompleted = state === 'completed';
              const isInProgress = state === 'in-progress';
              const isIncomplete = state === 'incomplete';

              let borderClass = 'border-slate-200';
              let bgClass = 'bg-white';
              let ringClass = '';
              let badgeClass = 'bg-slate-100 text-slate-700';
              let badgeText = 'Incomplete';
              let opacityClass = 'opacity-60';

              if (isCompleted) {
                borderClass = 'border-cyan-400';
                bgClass = 'bg-white';
                badgeClass = 'bg-cyan-100 text-cyan-700';
                badgeText = 'Completed';
                opacityClass = '';
              } else if (isInProgress) {
                borderClass = 'border-slate-900';
                bgClass = 'bg-white';
                ringClass = 'ring-2 ring-cyan-500';
                badgeClass = 'bg-slate-900 text-white';
                badgeText = 'Current';
                opacityClass = '';
              }

              return (
                <Link
                  key={module.moduleId}
                  to={`/modules/${module.moduleId}`}
                  className={`block p-6 rounded-lg border-2 ${borderClass} ${bgClass} ${ringClass} ${opacityClass} transition-all hover:shadow-lg`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-black text-slate-900">
                        Module {module.moduleId}: {module.title}
                      </h3>
                      <p className="text-sm text-slate-600 mt-2">
                        {module.narrative}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ml-4 ${badgeClass}`}>
                      {badgeText}
                    </span>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xs font-semibold text-slate-600">
                      {module.completedLessons} / {module.totalLessons} lessons
                    </span>
                    <span className="text-sm font-black text-slate-900">
                      ~{Math.ceil(module.totalLessons * 0.5)} hours
                    </span>
                  </div>

                  {(isCompleted || isInProgress) && (
                    <div className="mt-4 h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-cyan-500 transition-all duration-500"
                        style={{ width: `${module.progress}%` }}
                      />
                    </div>
                  )}
                </Link>
              );
            })}
          </div>
        </section>

        {/* NEXT STEPS SECTION */}
        <section className="p-12 bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-xl border-2 border-cyan-400 mb-24 shadow-2xl shadow-cyan-500/30 animate-fade-in-up transition-all duration-300 hover:shadow-cyan-500/50 hover:-translate-y-1" style={{ animationDelay: '0.5s' }}>
          <h2 className="text-3xl font-black mb-4" style={{ letterSpacing: '-0.02em' }}>
            Next Steps
          </h2>
          <p className="text-base text-slate-200 mb-8 max-w-2xl leading-relaxed">
            {currentLesson ? (
              <>
                Continue with <span className="font-semibold">{currentLesson.moduleTitle}</span> to keep building your AI mastery. Every lesson completed brings you closer to becoming an AI expert who uses AI strategically to multiply your potential.
              </>
            ) : (
              <>
                You've completed all modules! Congratulations on your journey through AI education. Keep applying these concepts to stay ahead in the AI era.
              </>
            )}
          </p>
          {currentLesson ? (
            <Link
              to={`/modules/${currentLesson.moduleId}/lessons/${currentLesson.lessonId}`}
              className="inline-block px-12 py-4 bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-black rounded-lg transition-colors"
            >
              Continue Learning
            </Link>
          ) : (
            <button disabled className="px-12 py-4 bg-gray-400 text-gray-600 font-black rounded-lg cursor-not-allowed">
              All Modules Complete
            </button>
          )}
        </section>
      </div>

      {/* Entrance Animations */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }

        /* Respect prefers-reduced-motion */
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in-up {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}
