import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Target, ArrowRight, CheckCircle2, Wrench, Zap as ZapIcon, ChevronDown, ArrowLeft, Code, Bot, FileText, Share2, Cpu } from 'lucide-react';
import { EnergeticBackground } from '../components/branding/EnergeticBackground';
import { LogoHorizontal } from '../components/branding/Logo';
import { theme, behavior } from '../styles/theme';

const implementations = [
  {
    title: 'Website Chatbots',
    description: 'AI-powered customer support and engagement, live on your website.',
    icon: Bot,
  },
  {
    title: 'Proposal Automation',
    description: 'Generate proposals in seconds. Custom templates, smart data insertion.',
    icon: FileText,
  },
  {
    title: 'Social Media Tools',
    description: 'Content creation, scheduling, and performance optimization automated.',
    icon: Share2,
  },
  {
    title: 'Custom GPTs',
    description: 'Specialized AI models trained on your data and processes.',
    icon: Cpu,
  },
  {
    title: 'Document Makers',
    description: 'Automatically generate reports, presentations, and documents.',
    icon: Code,
  },
  {
    title: 'AI Agents',
    description: 'Autonomous systems that handle complex multi-step workflows.',
    icon: Zap,
  },
];

const benefits = [
  'Get working tools, not just plans',
  'Fully custom to your business',
  'Integrated with your existing systems',
  'Team trained and ready to use',
  'Ongoing support and optimization',
];

export function AIImplementation() {
  const [expandedTool, setExpandedTool] = useState(null);

  const toggleTool = (toolIndex) => {
    setExpandedTool((prev) => (prev === toolIndex ? null : toolIndex));
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
              <div className="flex items-center gap-3">
                <Link
                  to="/"
                  className="flex items-center gap-1.5 px-3 py-2 rounded-md transition-colors hover:opacity-70"
                  style={{ color: theme.colors.text.secondary }}
                >
                  <ArrowLeft size={18} />
                  <span className="text-sm font-medium hidden sm:inline">Back to Landing</span>
                </Link>
                <div className="hidden sm:block w-px h-6" style={{ backgroundColor: theme.colors.border.subtle }} />
                <span className="text-sm font-semibold" style={{ color: theme.colors.text.secondary }}>
                  AI Implementation
                </span>
              </div>
              <div className="flex items-center gap-4">
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
          </div>
        </nav>

        {/* Hero Section */}
        <section className="min-h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 sm:py-0">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8 animate-fade-in-down" style={{
              borderColor: theme.colors.accent.cyan,
              backgroundColor: `${theme.colors.accent.cyan}08`,
            }}>
              <Wrench size={16} style={{ color: theme.colors.accent.cyan }} />
              <span className="text-sm font-semibold tracking-wide" style={{ color: theme.colors.accent.cyan }}>
                From Strategy to Live
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 leading-tight animate-fade-in" style={{
              letterSpacing: '-0.03em',
              background: behavior.hoverGlow
                ? `linear-gradient(135deg, ${theme.colors.primary.deep} 0%, ${theme.colors.primary.electric} 50%, ${theme.colors.accent.cyan} 100%)`
                : undefined,
              WebkitBackgroundClip: behavior.hoverGlow ? 'text' : undefined,
              WebkitTextFillColor: behavior.hoverGlow ? 'transparent' : undefined,
              backgroundClip: behavior.hoverGlow ? 'text' : undefined,
              color: behavior.hoverGlow ? undefined : theme.colors.text.primary,
            }}>
              AI tools that actually work.
            </h1>

            <div className="max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <p className="text-xl sm:text-2xl font-semibold leading-relaxed tracking-wide mb-4" style={{ color: theme.colors.accent.cyan }}>
                We build or set up the AI tools your team needs.
              </p>
              <p className="text-lg sm:text-xl leading-relaxed tracking-wide" style={{ color: theme.colors.text.secondary }}>
                Custom solutions, fully integrated, ready to use on day one.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 sm:mb-20 animate-fade-in-up" style={{
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

        {/* Problem & Solution Section */}
        <section className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl mb-20 sm:mb-32 animate-fade-in-up" style={{
          animationDelay: '0.4s',
        }}>
          <div className="p-8 sm:p-12 lg:p-16 rounded-2xl border-2 backdrop-blur-sm" style={{
            borderColor: `${theme.colors.primary.electric}40`,
            background: `linear-gradient(135deg, ${theme.colors.primary.light}30 0%, ${theme.colors.background.card} 100%)`,
            boxShadow: behavior.hoverGlow ? `0 0 40px ${theme.colors.primary.electric}15` : theme.shadows.large,
          }}>
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4" style={{
                backgroundColor: `${theme.colors.accent.cyan}10`,
              }}>
                <Wrench size={14} style={{ color: theme.colors.accent.cyan }} />
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: theme.colors.accent.cyan }}>
                  The Implementation Gap
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-8" style={{
                letterSpacing: '-0.03em',
                color: theme.colors.text.primary,
              }}>
                Great Plans Don't Implement Themselves
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="p-8 rounded-lg" style={{
                backgroundColor: `${theme.colors.accent.coral}10`,
                borderLeft: `4px solid ${theme.colors.accent.coral}`,
              }}>
                <p className="text-lg font-semibold mb-4" style={{ color: theme.colors.accent.coral }}>
                  The Problem
                </p>
                <div className="space-y-3" style={{ color: theme.colors.text.secondary }}>
                  <p className="text-sm leading-relaxed">
                    You know which AI tools would help. But actually setting them up? That's a different story. Integration is complex. Customization requires technical expertise. And even when you get it working, your team needs training.
                  </p>
                  <p className="text-sm leading-relaxed">
                    Most businesses either skip implementation entirely or waste months trying to figure it out on their own.
                  </p>
                </div>
              </div>

              <div className="p-8 rounded-lg" style={{
                backgroundColor: `${theme.colors.accent.cyan}10`,
                borderLeft: `4px solid ${theme.colors.accent.cyan}`,
              }}>
                <p className="text-lg font-semibold mb-4" style={{ color: theme.colors.accent.cyan }}>
                  The Solution
                </p>
                <div className="space-y-3" style={{ color: theme.colors.text.secondary }}>
                  <p className="text-sm leading-relaxed">
                    We handle the entire implementation. Whether you need us to set up existing tools or build custom solutions from scratch, we deliver working systems on day one.
                  </p>
                  <p className="text-sm leading-relaxed">
                    Your team gets training, integration with your existing systems, and ongoing support. No guesswork. Just tools that work.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg" style={{
              backgroundColor: `${theme.colors.primary.deep}08`,
              borderTop: `2px solid ${theme.colors.primary.electric}`,
            }}>
              <p className="text-center text-sm leading-relaxed" style={{ color: theme.colors.text.secondary }}>
                <span style={{ color: theme.colors.primary.deep, fontWeight: '600' }}>Strategy + Execution = Results.</span>
              </p>
            </div>
          </div>
        </section>

        {/* What We Build Section */}
        <section className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl mb-20 sm:mb-32 animate-fade-in-up" style={{
          animationDelay: '0.5s',
        }}>
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4" style={{
              backgroundColor: `${theme.colors.accent.cyan}10`,
            }}>
              <ZapIcon size={14} style={{ color: theme.colors.accent.cyan }} />
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: theme.colors.accent.cyan }}>
                Implementation Examples
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-2" style={{
              letterSpacing: '-0.03em',
              color: theme.colors.text.primary,
            }}>
              AI Tools We Build or Set Up
            </h2>
            <p style={{ color: theme.colors.text.secondary }}>
              Custom solutions tailored to your exact business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {implementations.map((impl, index) => {
              const IconComponent = impl.icon;
              return (
                <div
                  key={index}
                  className={`p-8 rounded-xl border backdrop-blur-sm transition-all ${hoverStatClasses}`}
                  style={{
                    borderColor: theme.colors.accent.cyan,
                    backgroundColor: `${theme.colors.accent.cyan}05`,
                    boxShadow: theme.shadows.subtle,
                  }}
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{
                    background: `linear-gradient(135deg, ${theme.colors.primary.deep} 0%, ${theme.colors.primary.electric} 100%)`,
                  }}>
                    <IconComponent size={24} style={{ color: 'white' }} />
                  </div>
                  <h3 className="text-lg font-bold mb-3" style={{ color: theme.colors.text.primary }}>
                    {impl.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: theme.colors.text.secondary }}>
                    {impl.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* What Makes This Different Section */}
        <section className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl mb-20 sm:mb-32 animate-fade-in-up" style={{
          animationDelay: '0.6s',
        }}>
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4" style={{
              backgroundColor: `${theme.colors.accent.cyan}10`,
            }}>
              <Zap size={14} style={{ color: theme.colors.accent.cyan }} />
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: theme.colors.accent.cyan }}>
                Why Choose Us
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{
              letterSpacing: '-0.03em',
              color: theme.colors.text.primary,
            }}>
              What Makes This Different
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border backdrop-blur-sm transition-all ${hoverStatClasses}`}
                style={{
                  borderColor: theme.colors.accent.coral,
                  backgroundColor: `${theme.colors.accent.coral}05`,
                  boxShadow: theme.shadows.subtle,
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                }}
              >
                <CheckCircle2
                  size={24}
                  style={{
                    color: theme.colors.accent.coral,
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                />
                <p style={{ color: theme.colors.text.primary, fontWeight: '500' }}>
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl mb-20 sm:mb-32 animate-fade-in-up" style={{
          animationDelay: '0.7s',
        }}>
          <div className="p-8 sm:p-12 lg:p-16 rounded-2xl border-2 backdrop-blur-sm" style={{
            borderColor: `${theme.colors.primary.electric}40`,
            background: `linear-gradient(135deg, ${theme.colors.accent.cyan}08 0%, ${theme.colors.background.card} 100%)`,
            boxShadow: behavior.hoverGlow ? `0 0 40px ${theme.colors.primary.electric}15` : theme.shadows.large,
          }}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-12" style={{
              letterSpacing: '-0.03em',
              color: theme.colors.text.primary,
            }}>
              How We Work
            </h2>

            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" style={{
                    background: `linear-gradient(135deg, ${theme.colors.primary.deep} 0%, ${theme.colors.primary.electric} 100%)`,
                  }}>
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: theme.colors.text.primary }}>
                    Understand Your Needs
                  </h3>
                  <p style={{ color: theme.colors.text.secondary }}>
                    We dive deep into your workflows, systems, and goals. What tools will create the most impact? How should they integrate?
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" style={{
                    background: `linear-gradient(135deg, ${theme.colors.primary.deep} 0%, ${theme.colors.primary.electric} 100%)`,
                  }}>
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: theme.colors.text.primary }}>
                    Build or Configure
                  </h3>
                  <p style={{ color: theme.colors.text.secondary }}>
                    We either set up existing tools or build custom solutions from scratch. Everything is tailored to your business, not the other way around.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" style={{
                    background: `linear-gradient(135deg, ${theme.colors.primary.deep} 0%, ${theme.colors.primary.electric} 100%)`,
                  }}>
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: theme.colors.text.primary }}>
                    Train and Deploy
                  </h3>
                  <p style={{ color: theme.colors.text.secondary }}>
                    Your team gets trained. Systems are fully integrated. Everything goes live with your team ready to use it.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" style={{
                    background: `linear-gradient(135deg, ${theme.colors.primary.deep} 0%, ${theme.colors.primary.electric} 100%)`,
                  }}>
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: theme.colors.text.primary }}>
                    Optimize and Support
                  </h3>
                  <p style={{ color: theme.colors.text.secondary }}>
                    We monitor performance, gather feedback, and continuously improve. Your tools get better over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl mb-20 sm:mb-32 animate-fade-in-up" style={{
          animationDelay: '0.8s',
        }}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className={`p-6 rounded-xl border backdrop-blur-sm transition-all ${hoverStatClasses}`} style={{
              borderColor: theme.colors.accent.cyan,
              backgroundColor: `${theme.colors.accent.cyan}05`,
              boxShadow: theme.shadows.subtle,
              textAlign: 'center',
            }}>
              <p className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: theme.colors.accent.cyan }}>
                50% Time
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider leading-tight" style={{ color: theme.colors.text.secondary }}>
                Faster than building in-house
              </p>
            </div>

            <div className={`p-6 rounded-xl border backdrop-blur-sm transition-all ${hoverStatClasses}`} style={{
              borderColor: theme.colors.primary.electric,
              backgroundColor: `${theme.colors.primary.electric}05`,
              boxShadow: theme.shadows.subtle,
              textAlign: 'center',
            }}>
              <p className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: theme.colors.primary.electric }}>
                100% Custom
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider leading-tight" style={{ color: theme.colors.text.secondary }}>
                Built for your specific business
              </p>
            </div>

            <div className={`p-6 rounded-xl border backdrop-blur-sm transition-all ${hoverStatClasses}`} style={{
              borderColor: theme.colors.accent.coral,
              backgroundColor: `${theme.colors.accent.coral}05`,
              boxShadow: theme.shadows.subtle,
              textAlign: 'center',
            }}>
              <p className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: theme.colors.accent.coral }}>
                Day 1 Live
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider leading-tight" style={{ color: theme.colors.text.secondary }}>
                Ready to use immediately
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl mb-20 sm:mb-32 animate-fade-in-up" style={{
          animationDelay: '0.9s',
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
              Ready to deploy AI that actually works?
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-8 leading-relaxed" style={{ color: theme.colors.text.secondary }}>
              Tell us what you need. We'll build or set up the tools. Your team will be using them within weeks.
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
              Start Your Implementation <ArrowRight size={20} />
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
