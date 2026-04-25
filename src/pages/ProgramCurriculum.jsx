import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import { theme, behavior } from '../styles/theme';
import { LogoHorizontal } from '../components/branding/Logo';
import { FeaturesTable } from '../components/features/FeaturesTable';
import { modulesData } from '../data/modulesData';
import { activityData } from '../data/activityData';

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

export function ProgramCurriculum() {
  const [expandedModule, setExpandedModule] = useState(null);

  useEffect(() => {
    // Load Stripe buy button script
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/buy-button.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const toggleModule = (moduleId) => {
    setExpandedModule((prev) => (prev === moduleId ? null : moduleId));
  };

  const hoverStatClasses = behavior.hoverScale
    ? 'hover:scale-105 hover:shadow-xl'
    : 'hover:shadow-md';

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-white border-b" style={{ borderColor: theme.colors.border.subtle }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              to="/"
              className="flex items-center gap-1.5 px-3 py-2 rounded-md transition-colors hover:opacity-70"
              style={{ color: theme.colors.text.secondary }}
            >
              <ArrowLeft size={18} />
              <span className="text-sm font-medium">Back</span>
            </Link>
            <LogoHorizontal size="sm" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4" style={{ color: theme.colors.text.primary }}>
            AI Skills Curriculum
          </h1>
          <p className="text-lg sm:text-xl" style={{ color: theme.colors.text.secondary }}>
            What your child will learn and how we will teach them
          </p>
        </div>
      </section>

      {/* Platform Features Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 sm:mb-32">
        <div className="max-w-6xl mx-auto">
          <FeaturesTable />
        </div>
      </section>

      {/* Learning Journey Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 sm:mb-32">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-2" style={{
              letterSpacing: '-0.03em',
              color: theme.colors.text.primary,
            }}>
              The Learning Journey
            </h2>
            <p style={{ color: theme.colors.text.secondary }}>
              8 strategic modules designed to build AI skills
            </p>
          </div>

          <div className="space-y-4">
            {modulesData.map((module, index) => {
              const isExpanded = expandedModule === module.id;
              const weekNumber = Math.floor(index / 2) + 1;
              return (
                <div
                  key={module.id}
                  className="border-2 rounded-xl transition-all"
                  style={{
                    backgroundColor: theme.colors.background.card,
                    borderColor: isExpanded ? theme.colors.accent.cyan : theme.colors.border.subtle,
                    boxShadow: isExpanded ? theme.shadows.medium : theme.shadows.subtle,
                  }}
                >
                  <button
                    type="button"
                    onClick={() => toggleModule(module.id)}
                    className="w-full text-left p-6 sm:p-8 cursor-pointer group"
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-3 mb-2">
                          <div className="inline-flex items-center gap-2 px-2 py-1 rounded-md text-xs font-bold whitespace-nowrap flex-shrink-0" style={{
                            backgroundColor: `${theme.colors.accent.cyan}15`,
                            color: theme.colors.accent.cyan,
                          }}>
                            Week {weekNumber}
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold" style={{
                            color: theme.colors.text.primary,
                          }}>
                            Module {module.id}: {module.title}
                          </h3>
                        </div>
                        <p className="text-sm line-clamp-2" style={{ color: theme.colors.text.secondary }}>
                          {moduleNarratives[index]}
                        </p>
                      </div>
                      <div className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-semibold whitespace-nowrap flex-shrink-0" style={{
                        backgroundColor: `${theme.colors.primary.electric}10`,
                        color: theme.colors.primary.electric,
                      }}>
                        {module.lessons.length} lessons
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg" style={{
                        backgroundColor: `${theme.colors.accent.coral}15`,
                        color: theme.colors.accent.coral,
                      }}>
                        <span className="text-sm font-bold tracking-wide">
                          ~{Math.ceil(module.lessons.length * 0.5)} hours
                        </span>
                      </div>
                      <ChevronDown
                        size={16}
                        style={{
                          color: isExpanded ? theme.colors.accent.cyan : theme.colors.text.muted,
                          transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94), color 200ms ease',
                        }}
                      />
                    </div>
                  </button>

                  <div
                    style={{
                      maxHeight: isExpanded ? `${module.lessons.length * 64 + 60}px` : '0px',
                      opacity: isExpanded ? 1 : 0,
                      overflow: 'hidden',
                      transition: 'max-height 350ms cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 250ms ease',
                    }}
                  >
                    <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                      <div className="border-t pt-4" style={{ borderColor: theme.colors.border.subtle }}>
                        <div className="flex items-center gap-4 mb-2 px-0">
                          <span className="text-[10px] font-semibold uppercase tracking-widest w-6 flex-shrink-0" style={{ color: theme.colors.text.muted }}></span>
                          <span className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: theme.colors.text.muted }}>Lessons</span>
                          <span className="ml-auto text-[10px] font-semibold uppercase tracking-widest flex-shrink-0" style={{ color: theme.colors.text.muted }}>Skill</span>
                        </div>
                        {module.lessons.map((lesson, lessonIndex) => (
                          <div
                            key={lesson.id}
                            className="flex items-center gap-4 py-3"
                            style={{
                              borderBottom: lessonIndex < module.lessons.length - 1
                                ? `1px solid ${theme.colors.border.subtle}20`
                                : 'none',
                            }}
                          >
                            <span
                              className="text-xs font-bold w-6 text-right flex-shrink-0 tabular-nums"
                              style={{ color: theme.colors.text.muted }}
                            >
                              {String(lesson.id).padStart(2, '0')}
                            </span>
                            <span className="text-sm font-medium" style={{ color: theme.colors.text.primary }}>
                              {lesson.title}
                            </span>
                            {activityData[`${module.id}-${lesson.id}`]?.skill && (
                              <span
                                className="ml-auto text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0"
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 rounded-lg border" style={{
            borderColor: theme.colors.border.subtle,
            backgroundColor: 'white',
          }}>
            <stripe-buy-button
              buy-button-id="buy_btn_1TQ3drJaju4Y4wsr7v4itBjq"
              publishable-key="pk_live_51RkVzzJaju4Y4wsrQsnGXWnUAr9vwAYU7OFPGgLtIcGxfNaW9AsBejXDTFtrCMGikdLzIL3pqvt6ryM0vKwltScV00KH4zcc30"
            >
            </stripe-buy-button>
          </div>
        </div>
      </section>

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
