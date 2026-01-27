import { useAuth } from '../hooks/useAuth';
import { useProgress } from '../hooks/useProgress';
import { modulesData } from '../data/modulesData';
import { getLessonNumber } from '../lib/utils';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export function Dashboard() {
  const { user } = useAuth();
  const [userName, setUserName] = useState('');
  const { isComplete, loading } = useProgress(user?.id, []);

  useEffect(() => {
    if (user) {
      fetchUserName();
    }
  }, [user]);

  const fetchUserName = async () => {
    const { data } = await supabase
      .from('profiles')
      .select('full_name')
      .eq('id', user.id)
      .maybeSingle();
    if (data?.full_name) {
      setUserName(data.full_name);
    }
  };

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

  // Calculate current module only after loading is complete
  const currentModule = !loading ? (() => {
    // First, find any module in progress (started but not completed)
    const inProgress = allModules.find(m => m.progress > 0 && m.progress < 100);
    if (inProgress) return inProgress;

    // Next, find the first module with 0 progress
    const nextAvailable = allModules.find(m => m.progress === 0);
    if (nextAvailable) return nextAvailable;

    // If all modules are complete, return null (no current module)
    if (allModules.every(m => m.progress === 100)) return null;

    // Fallback to module 1
    return allModules[0];
  })() : null;

  const getModuleState = (index) => {
    const current = allModules[index];
    if (current.progress === 100) return 'completed';
    if (current.progress > 0) return 'in-progress';
    return 'available';
  };

  // Progress ring circumference for SVG animation
  const circumference = 2 * Math.PI * 45; // radius 45

  return (
    <div className="flex-1 flex flex-col min-w-0">
      {/* Content */}
      <div className="flex-1 overflow-y-auto bg-white">
          <div className="w-full px-4 sm:px-6 lg:px-8 py-16">
          {/* HEADER */}
          <div className="mb-20 text-center">
            <h1 className="text-6xl font-black text-gray-900 mb-3 tracking-tight">
              Multiply Your Potential
            </h1>
            <p className="text-xl text-gray-700 font-semibold mb-1">
              Work quicker. Work better. Work bigger.
            </p>
            <p className="text-base text-gray-600">
              More effective, more efficient = more productive
            </p>
          </div>

          {/* CURRENT MODULE SECTION */}
          {currentModule && currentModule.progress !== 100 && (
            <div className="mb-20 flex justify-center">
              <div className="w-full max-w-2xl border border-gray-300 rounded-lg p-10">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-3">
                  You Are Here
                </p>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {currentModule.title}
                </h2>
                <p className="text-gray-700 text-base mb-8 leading-relaxed">
                  {currentModule.narrative}
                </p>

                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-gray-600">
                    {currentModule.completedLessons} of {currentModule.totalLessons} lessons
                  </span>
                  <span className="text-3xl font-bold text-gray-900">
                    {Math.round(currentModule.progress)}%
                  </span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gray-900 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${currentModule.progress}%` }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* THE MAP - HORIZONTAL FLOW */}
          <div className="mb-20">
            <div className="flex justify-center">
              <div className="w-full px-4">
                <div className="flex items-end gap-8 py-12 justify-center flex-wrap">

                  {/* Modules */}
                  {allModules.map((module, index) => {
                    const state = getModuleState(index);
                    const isCompleted = state === 'completed';
                    const isInProgress = state === 'in-progress';
                    const isAvailable = state === 'available';
                    const isLast = index === allModules.length - 1;

                    const strokeDashoffset =
                      circumference - (module.progress / 100) * circumference;

                    return (
                      <div
                        key={module.moduleId}
                        className="flex flex-col items-center"
                      >
                        {/* Peak marker for last module */}
                        {isLast && (
                          <div className="mb-4 text-4xl">🏔️</div>
                        )}

                        {/* Progress Ring */}
                        <div
                          className="relative w-24 h-24 flex items-center justify-center transition-all duration-300"
                        >
                          {/* Ring Background */}
                          <svg
                            className="absolute w-24 h-24 transform -rotate-90"
                            viewBox="0 0 100 100"
                          >
                            <circle
                              cx="50"
                              cy="50"
                              r="45"
                              fill="none"
                              stroke="#f3f4f6"
                              strokeWidth="3"
                            />
                            {/* Progress Ring */}
                            <circle
                              cx="50"
                              cy="50"
                              r="45"
                              fill="none"
                              stroke={
                                isCompleted
                                  ? '#111827'
                                  : isInProgress
                                  ? '#111827'
                                  : '#d1d5db'
                              }
                              strokeWidth="3"
                              strokeDasharray={circumference}
                              strokeDashoffset={strokeDashoffset}
                              strokeLinecap="round"
                              className="transition-all duration-500"
                            />
                          </svg>

                          {/* Center Content */}
                          <div className="relative z-10 text-center">
                            <div className="text-2xl font-bold text-gray-900">
                              {isCompleted ? '✓' : isInProgress ? '★' : module.moduleId}
                            </div>
                          </div>
                        </div>

                        {/* Module Info */}
                        <div className="mt-6 text-center">
                          <h3 className="text-sm font-bold text-gray-900">
                            Module {module.moduleId}
                          </h3>
                          <p className="text-xs text-gray-600 mt-1">
                            {module.completedLessons}/{module.totalLessons}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* STATS */}
          <div className="flex justify-center mb-20">
            <div className="w-full max-w-2xl grid grid-cols-3 gap-6">
              <div className="p-6 border border-gray-300 rounded-lg text-center">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
                  Multiplication
                </p>
                <p className="text-4xl font-black text-gray-900">{totalProgress}%</p>
              </div>
              <div className="p-6 border border-gray-300 rounded-lg text-center">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
                  Completed
                </p>
                <p className="text-4xl font-black text-gray-900">{completedModules}/8</p>
              </div>
              <div className="p-6 border border-gray-300 rounded-lg text-center">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
                  Lessons
                </p>
                <p className="text-4xl font-black text-gray-900">
                  {allModules.reduce((acc, m) => acc + m.completedLessons, 0)}/{modulesData.reduce((acc, m) => acc + m.lessons.length, 0)}
                </p>
              </div>
            </div>
          </div>

          {/* PHILOSOPHY */}
          <div className="flex justify-center pb-20">
            <div className="w-full max-w-2xl p-10 border border-gray-300 rounded-lg text-center">
              <p className="text-lg leading-relaxed text-gray-900">
                <span className="font-bold">Use AI. Don't let AI use you.</span> AI is a multiplier. Every module unlocks another dimension of your potential. The summit awaits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}