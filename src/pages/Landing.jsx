import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Brain, Zap, CheckCircle, ExternalLink } from 'lucide-react';
import { EnergeticBackground } from '../components/branding/EnergeticBackground';
import { LogoHorizontal } from '../components/branding/Logo';
import { theme, behavior } from '../styles/theme';

export function Landing() {
  const services = [
    {
      id: 'education',
      title: 'AI Education',
      description: 'Build team capability in AI. Frameworks and mental models, not just tools.',
      link: '/services/education'
    },
    {
      id: 'strategy',
      title: 'AI Strategy',
      description: 'Identify where AI creates competitive advantage in your operations.',
      link: '/services/strategy'
    },
    {
      id: 'implementation',
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
        <section className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 sm:py-0">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in" style={{
              letterSpacing: '-0.03em',
              color: theme.colors.text.primary,
            }}>
              AI is leaving SMBs behind.
            </h1>

            <p className="text-lg sm:text-xl leading-relaxed mb-8 animate-fade-in-up" style={{
              animationDelay: '0.1s',
              color: theme.colors.text.secondary,
              maxWidth: '500px',
              margin: '0 auto 2rem'
            }}>
              Slower operations. Worse output. Less profit. Your competitors have no barriers to entry—they can appear overnight.
            </p>

            <Link
              to="#assessment"
              className={`inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all animate-fade-in-up`}
              style={{
                animationDelay: '0.2s',
                backgroundColor: theme.colors.accent.cyan,
                color: 'white',
                boxShadow: behavior.hoverGlow ? `0 0 30px ${theme.colors.accent.cyan}40` : theme.shadows.medium,
              }}
              onMouseEnter={(e) => {
                if (behavior.hoverScale) e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Book Free Assessment <ArrowRight size={20} />
            </Link>
          </div>
        </section>

        {/* Problem Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-32 max-w-4xl mx-auto animate-fade-in-up" style={{
          animationDelay: '0.3s',
        }}>
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{
              letterSpacing: '-0.03em',
              color: theme.colors.text.primary,
            }}>
              The Real Problem
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: theme.colors.text.secondary }}>
              AI isn't developing in a straight line. It's accelerating. Every month brings new capabilities, new tools, new possibilities. Teams that don't keep up don't just fall behind—they become liabilities. Your processes get slower. Your output quality drops. You lose people to competitors who move faster.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 p-5 rounded-lg" style={{ backgroundColor: `${theme.colors.accent.cyan}05` }}>
              <Zap size={24} style={{ color: theme.colors.accent.cyan, flexShrink: 0 }} />
              <div>
                <h3 className="font-semibold mb-2" style={{ color: theme.colors.text.primary }}>Competitive exposure</h3>
                <p style={{ color: theme.colors.text.secondary }}>No moat, no barriers. A well-resourced competitor can enter your market tomorrow using AI.</p>
              </div>
            </div>

            <div className="flex gap-4 p-5 rounded-lg" style={{ backgroundColor: `${theme.colors.primary.electric}05` }}>
              <Brain size={24} style={{ color: theme.colors.primary.electric, flexShrink: 0 }} />
              <div>
                <h3 className="font-semibold mb-2" style={{ color: theme.colors.text.primary }}>Skill gaps stay wide</h3>
                <p style={{ color: theme.colors.text.secondary }}>Free training teaches tools. Not strategy. Not how to create lasting competitive advantage.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Solutions Fail Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-32 max-w-4xl mx-auto animate-fade-in-up" style={{
          animationDelay: '0.4s',
        }}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12" style={{
            letterSpacing: '-0.03em',
            color: theme.colors.text.primary,
          }}>
            Why Most Solutions Fail
          </h2>

          <div className="space-y-6">
            <div className="p-6 rounded-lg border" style={{
              borderColor: theme.colors.border.subtle,
              backgroundColor: theme.colors.background.card,
            }}>
              <h3 className="font-semibold mb-2 text-lg" style={{ color: theme.colors.text.primary }}>Tool-focused training</h3>
              <p style={{ color: theme.colors.text.secondary }}>Teams learn ChatGPT, then the tool changes. Knowledge becomes obsolete.</p>
            </div>

            <div className="p-6 rounded-lg border" style={{
              borderColor: theme.colors.border.subtle,
              backgroundColor: theme.colors.background.card,
            }}>
              <h3 className="font-semibold mb-2 text-lg" style={{ color: theme.colors.text.primary }}>Generic approaches</h3>
              <p style={{ color: theme.colors.text.secondary }}>Frameworks built for enterprises don't translate to your specific operations.</p>
            </div>

            <div className="p-6 rounded-lg border" style={{
              borderColor: theme.colors.border.subtle,
              backgroundColor: theme.colors.background.card,
            }}>
              <h3 className="font-semibold mb-2 text-lg" style={{ color: theme.colors.text.primary }}>Dependency over capability</h3>
              <p style={{ color: theme.colors.text.secondary }}>When you outsource the thinking, you lose the ability to adapt when AI changes.</p>
            </div>
          </div>
        </section>

        {/* Three Services Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-32 max-w-6xl mx-auto animate-fade-in-up" style={{
          animationDelay: '0.5s',
        }}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center" style={{
            letterSpacing: '-0.03em',
            color: theme.colors.text.primary,
          }}>
            How We Help
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                to={service.link}
                className="p-8 rounded-lg border group transition-all h-full flex flex-col"
                style={{
                  borderColor: theme.colors.border.subtle,
                  backgroundColor: theme.colors.background.card,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = theme.colors.accent.cyan;
                  e.currentTarget.style.backgroundColor = `${theme.colors.accent.cyan}05`;
                  if (behavior.hoverScale) {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = theme.colors.border.subtle;
                  e.currentTarget.style.backgroundColor = theme.colors.background.card;
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <h3 className="text-xl font-bold mb-3" style={{ color: theme.colors.text.primary }}>
                  {service.title}
                </h3>
                <p className="text-base leading-relaxed flex-1" style={{ color: theme.colors.text.secondary }}>
                  {service.description}
                </p>
                <div className="flex items-center gap-2 mt-6 text-sm font-semibold" style={{ color: theme.colors.accent.cyan }}>
                  Learn more <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Differentiator Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-32 max-w-4xl mx-auto animate-fade-in-up" style={{
          animationDelay: '0.6s',
        }}>
          <div className="p-8 sm:p-12 rounded-lg border" style={{
            borderColor: theme.colors.accent.cyan,
            backgroundColor: `${theme.colors.accent.cyan}05`,
          }}>
            <div className="flex items-start gap-4">
              <CheckCircle size={28} style={{ color: theme.colors.accent.cyan, flexShrink: 0, marginTop: '4px' }} />
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{
                  color: theme.colors.text.primary,
                  letterSpacing: '-0.03em',
                }}>
                  Why We're Different
                </h2>
                <p className="text-base leading-relaxed mb-4" style={{ color: theme.colors.text.secondary }}>
                  We have a built-in education platform. This means your team doesn't just gain frameworks—they gain <strong>capability</strong>. They can adapt as AI changes. They understand the thinking behind the strategy.
                </p>
                <p style={{ color: theme.colors.text.secondary }}>
                  Most consultants create dependency. They come, tell you what to do, and leave. You're stuck. We do the opposite.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="assessment"
          className="px-4 sm:px-6 lg:px-8 py-20 sm:py-32 max-w-4xl mx-auto text-center animate-fade-in-up"
          style={{
            animationDelay: '0.7s',
          }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{
            letterSpacing: '-0.03em',
            color: theme.colors.text.primary,
          }}>
            Ready to Catch Up?
          </h2>

          <p className="text-lg leading-relaxed mb-10 max-w-2xl mx-auto" style={{ color: theme.colors.text.secondary }}>
            Start with a free diagnostic. We'll assess where your business stands with AI, identify your biggest opportunities, and show you exactly what needs to happen next.
          </p>

          <Link
            to="/book-assessment"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all"
            style={{
              backgroundColor: theme.colors.accent.cyan,
              color: 'white',
              boxShadow: behavior.hoverGlow ? `0 0 30px ${theme.colors.accent.cyan}40` : theme.shadows.medium,
            }}
            onMouseEnter={(e) => {
              if (behavior.hoverScale) e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Book Free Assessment <ArrowRight size={20} />
          </Link>

          <p className="text-sm mt-8" style={{ color: theme.colors.text.muted }}>
            30 minutes. No sales pitch. Just honest advice.
          </p>
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
