import { Link } from 'react-router-dom';
import { Zap, Target, ArrowRight, BookOpen, Users, TrendingUp, ChevronRight } from 'lucide-react';
import { EnergeticBackground } from '../components/branding/EnergeticBackground';
import { LogoHorizontal } from '../components/branding/Logo';
import { modulesData } from '../data/modulesData';
import { theme } from '../styles/theme';

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
  return (
    <div className="w-full min-h-screen overflow-y-auto relative">
      <EnergeticBackground />

      <div className="relative z-10">
        <nav className="sticky top-0 z-20 bg-white/98 backdrop-blur-md border-b" style={{
          borderColor: theme.colors.border.subtle,
          boxShadow: theme.shadows.medium,
        }}>
          <div className="absolute bottom-0 left-0 right-0 h-px" style={{
            background: `linear-gradient(90deg, transparent, ${theme.colors.accent.cyan}60, ${theme.colors.accent.coral}60, transparent)`,
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
                  e.currentTarget.style.boxShadow = theme.shadows.glow.cyan;
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 0 rgba(6, 182, 212, 0.3)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span className="relative z-10">Sign In</span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-300" />
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
              background: `linear-gradient(135deg, ${theme.colors.primary.deep} 0%, ${theme.colors.primary.electric} 50%, ${theme.colors.accent.cyan} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
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

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 sm:mb-20 animate-fade-in-up" style={{
              animationDelay: '0.2s',
            }}>
              <Link
                to="/login"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 group"
                style={{
                  background: `linear-gradient(135deg, ${theme.colors.primary.electric} 0%, ${theme.colors.accent.cyan} 100%)`,
                  color: 'white',
                  boxShadow: `0 0 30px ${theme.colors.accent.cyan}40`,
                }}
              >
                Get Started <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 animate-fade-in-up" style={{
              animationDelay: '0.3s',
            }}>
              <div className="p-6 rounded-xl border backdrop-blur-sm transition-all hover:scale-105 hover:shadow-xl" style={{
                borderColor: theme.colors.accent.cyan,
                backgroundColor: `${theme.colors.accent.cyan}05`,
                boxShadow: theme.shadows.subtle,
              }}>
                <BookOpen size={28} className="mx-auto mb-3" style={{ color: theme.colors.accent.cyan }} />
                <p className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: theme.colors.accent.cyan }}>
                  {totalLessons}
                </p>
                <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: theme.colors.text.secondary }}>
                  Strategic Lessons
                </p>
              </div>

              <div className="p-6 rounded-xl border backdrop-blur-sm transition-all hover:scale-105 hover:shadow-xl" style={{
                borderColor: theme.colors.primary.electric,
                backgroundColor: `${theme.colors.primary.electric}05`,
                boxShadow: theme.shadows.subtle,
              }}>
                <Users size={28} className="mx-auto mb-3" style={{ color: theme.colors.primary.electric }} />
                <p className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: theme.colors.primary.electric }}>
                  8
                </p>
                <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: theme.colors.text.secondary }}>
                  Focused Modules
                </p>
              </div>

              <div className="p-6 rounded-xl border backdrop-blur-sm transition-all hover:scale-105 hover:shadow-xl" style={{
                borderColor: theme.colors.accent.coral,
                backgroundColor: `${theme.colors.accent.coral}05`,
                boxShadow: theme.shadows.subtle,
              }}>
                <TrendingUp size={28} className="mx-auto mb-3" style={{ color: theme.colors.accent.coral }} />
                <p className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: theme.colors.accent.coral }}>
                  10X
                </p>
                <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: theme.colors.text.secondary }}>
                  Output Multiplier
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl mb-20 sm:mb-32 animate-fade-in-up" style={{
          animationDelay: '0.4s',
        }}>
          <div className="p-8 sm:p-12 lg:p-16 rounded-2xl border-2 backdrop-blur-sm" style={{
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
              <h2 className="text-3xl sm:text-4xl font-bold mb-8" style={{
                letterSpacing: '-0.03em',
                color: theme.colors.text.primary,
              }}>
                Transform From Literacy to Leadership
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10">
              <div className="p-6 rounded-xl border backdrop-blur-sm transition-all hover:scale-105" style={{
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

              <div className="p-6 rounded-xl border backdrop-blur-sm transition-all hover:scale-105" style={{
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

              <div className="p-6 rounded-xl border backdrop-blur-sm transition-all hover:scale-105" style={{
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

            <div className="space-y-5 text-sm sm:text-base leading-relaxed">
              <p style={{ color: theme.colors.text.secondary }}>
                The UK government and major tech companies aim to train 10 million workers by 2030 with AI literacy courses -- that's essential. Free training from Microsoft, Google, and IBM. Thousands of LinkedIn posts, YouTube tutorials, and social media content teaching prompts and tools. AI literacy is becoming universal, not specialized.
              </p>
              <p style={{ color: theme.colors.text.secondary }}>
                <span className="font-semibold" style={{ color: theme.colors.text.primary }}>But here's what matters:</span> when everyone completes the same foundation, strategic application becomes the differentiator. Despite massive investment and content saturation, only 21% of UK workers feel confident using AI, and just 16% of businesses have successfully implemented it.
              </p>
              <p style={{ color: theme.colors.text.secondary }}>
                <span className="font-semibold" style={{ color: theme.colors.text.primary }}>We solve that gap.</span> We teach AI literacy accelerated for understanding, then add strategic capability on top. The result: save time and produce higher-quality output. Everything in one place, separating literacy from leadership, foundations from frameworks that create competitive advantage.
              </p>
              <p className="font-semibold" style={{ color: theme.colors.primary.deep }}>
                While most businesses train teams in AI tools, a small percentage are developing strategic capability. That small percentage is your future competition -- or your future position.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl mb-20 sm:mb-32 animate-fade-in-up" style={{
          animationDelay: '0.5s',
        }}>
          <div className="mb-12">
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

          <div className="space-y-4">
            {modulesData.map((module, index) => (
              <div
                key={module.id}
                className="group p-6 sm:p-8 border-2 rounded-xl transition-all hover:shadow-lg"
                style={{
                  backgroundColor: theme.colors.background.card,
                  borderColor: theme.colors.border.subtle,
                  boxShadow: theme.shadows.subtle,
                }}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold mb-2" style={{
                      color: theme.colors.text.primary,
                    }}>
                      Module {module.id}: {module.title}
                    </h3>
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
                  <span className="text-xs font-semibold tracking-wide" style={{ color: theme.colors.text.muted }}>
                    ~{Math.ceil(module.lessons.length * 0.5)} hours
                  </span>
                  <ChevronRight size={16} style={{ color: theme.colors.text.muted }} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </section>

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
              Join the program and develop frameworks that create lasting competitive advantage in AI.
            </p>
            <Link
              to="/login"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${theme.colors.accent.coral} 0%, ${theme.colors.primary.electric} 100%)`,
                color: 'white',
                boxShadow: `0 0 30px ${theme.colors.accent.coral}40`,
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
