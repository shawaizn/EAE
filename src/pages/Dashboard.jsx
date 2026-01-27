import { useAuth } from '../hooks/useAuth';
import { useProgress } from '../hooks/useProgress';
import { modulesData } from '../data/modulesData';
import { getLessonNumber } from '../lib/utils';
import { Link } from 'react-router-dom';

export function Dashboard() {
  const { user } = useAuth();
  const { isComplete, loading } = useProgress(user?.id, []);

  const moduleNarratives = [
    "This module shows you how AI fits into the pattern of tools that change how humans work. It's not magic—it's just the next tool in a long line of tools.",
    "This module shows you exactly how AI works—from the moment you type something to the moment it responds, all the way up to AI systems that can make decisions and take actions by themselves.",
    "This module shows you that same journey for AI—how it goes from research labs into the thousands of products you see on your phone, and how to make sense of all of them.",
    "This module shows you exactly how to use AI correctly so it becomes your superpower instead of your downfall. You'll learn when to use it, when not to, and how to protect yourself from the traps.",
    "This module shows you how to communicate with AI so it becomes your personal expert assistant instead of a generic tool. Everyone has access to the same AI—what separates the people getting 10x better results is how they ask questions.",
    "This module shows you how to stop collecting AI tools and start building systems that work for you. You'll learn how the best AI users actually operate and make AI part of their daily work.",
    "This module shows you the game that's changing right now—the AI era. You'll learn how to position yourself to WIN in this changing world and what skills to build that will stay useful no matter what happens.",
    "Build your implementation strategy and best practices for using AI effectively in your work and life."
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

  // Calculate current module only after loading is complete
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
    return 'locked';
  };

  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* WELCOME SECTION */}
        <section className="mb-24">
          <h1 className="text-6xl font-black text-slate-900 mb-4" style={{ letterSpacing: '-0.02em' }}>
            Welcome Back
          </h1>
          <p className="text-lg text-slate-600 font-semibold">
            Continue your journey through AI education
          </p>
        </section>

        {/* ABOUT THIS COURSE SECTION */}
        <section className="mb-24 p-12 bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-xl">
          <h2 className="text-3xl font-black text-slate-900 mb-6" style={{ letterSpacing: '-0.02em' }}>
            About This Course
          </h2>
          <p className="text-base text-slate-700 mb-8 leading-relaxed max-w-3xl">
            Energise AI Education is a premium, comprehensive course designed for learners aged 15-60 who want to master AI. Over approximately 45 hours across 8 modules, you'll move from foundational concepts to advanced strategies. This isn't about collecting information—it's about building real, actionable capability. We refuse mediocrity and focus on what's right, not what's common.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 bg-white border-l-4 border-cyan-500 rounded-lg">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
                Total Duration
              </p>
              <p className="text-2xl font-black text-slate-900">~45 Hours</p>
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

          {/* Info Box */}
          <div className="p-6 bg-cyan-50 border-l-4 border-cyan-500">
            <p className="text-sm font-black uppercase tracking-wider text-slate-900 mb-3">
              You'll Master:
            </p>
            <ul className="text-sm text-slate-700 space-y-2">
              <li>• Foundational AI concepts and how they apply to your work</li>
              <li>• Advanced prompting techniques to get 10x better results</li>
              <li>• Strategic thinking about AI tools and when to use them</li>
              <li>• Building systems and workflows that multiply your productivity</li>
              <li>• Positioning yourself for success in the AI era</li>
            </ul>
          </div>
        </section>

        {/* YOUR PROGRESS SECTION */}
        <section className="mb-24 p-12 bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-xl">
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

        {/* MODULE TIMELINE SECTION */}
        <section className="mb-24 p-12 bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 rounded-xl">
          <h2 className="text-3xl font-black text-slate-900 mb-8" style={{ letterSpacing: '-0.02em' }}>
            Module Timeline
          </h2>

          <div className="space-y-4">
            {allModules.map((module, index) => {
              const state = getModuleState(index);
              const isCompleted = state === 'completed';
              const isInProgress = state === 'in-progress';
              const isLocked = state === 'locked';

              let borderClass = 'border-slate-200';
              let bgClass = 'bg-white';
              let ringClass = '';
              let badgeClass = 'bg-slate-100 text-slate-700';
              let badgeText = 'Locked';
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
                  className={`block p-6 rounded-lg border-2 ${borderClass} ${bgClass} ${ringClass} ${!isLocked ? '' : opacityClass} transition-all hover:shadow-lg`}
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
                      ~{Math.ceil(module.totalLessons / 8 * 5)} hours
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
        <section className="p-12 bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-xl border-2 border-cyan-400 mb-24">
          <h2 className="text-3xl font-black mb-4" style={{ letterSpacing: '-0.02em' }}>
            Next Steps
          </h2>
          <p className="text-base text-slate-200 mb-8 max-w-2xl leading-relaxed">
            {currentModule ? (
              <>
                Continue with <span className="font-semibold">{currentModule.title}</span> to keep building your AI mastery. Every lesson completed brings you closer to becoming an AI expert who uses AI strategically to multiply your potential.
              </>
            ) : (
              <>
                You've completed all modules! Congratulations on your journey through AI education. Keep applying these concepts to stay ahead in the AI era.
              </>
            )}
          </p>
          {currentModule ? (
            <Link
              to={`/modules/${currentModule.moduleId}`}
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
    </div>
  );
}
