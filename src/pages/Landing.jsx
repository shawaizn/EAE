import { Link } from 'react-router-dom';
import { Zap, Target, ArrowRight, BookOpen, Rocket, ExternalLink, Calendar, Mail } from 'lucide-react';
import { EnergeticBackground } from '../components/branding/EnergeticBackground';
import { LogoHorizontal } from '../components/branding/Logo';
import { theme, behavior } from '../styles/theme';

export function Landing() {

  const services = [
    {
      id: 'strategy',
      icon: Target,
      title: 'AI Strategy',
      description: 'Identify where AI saves you time or gives you an advantage.',
      link: '/ai-strategy'
    },
    {
      id: 'training',
      icon: BookOpen,
      title: 'AI Training',
      description: 'Build team capability in AI. Frameworks and mental models, not just tools.',
      link: '/ai-education'
    },
    {
      id: 'solutions',
      icon: Rocket,
      title: 'AI Solutions',
      description: 'Move from plan to practise. Deploy tools that give you measurable benefits.',
      link: '/ai-implementation'
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
              background: behavior.hoverGlow
                ? `linear-gradient(135deg, ${theme.colors.primary.deep} 0%, ${theme.colors.primary.electric} 50%, ${theme.colors.accent.cyan} 100%)`
                : undefined,
              WebkitBackgroundClip: behavior.hoverGlow ? 'text' : undefined,
              WebkitTextFillColor: behavior.hoverGlow ? 'transparent' : undefined,
              backgroundClip: behavior.hoverGlow ? 'text' : undefined,
              color: behavior.hoverGlow ? undefined : theme.colors.text.primary,
            }}>
              AI transformation partner
            </h1>

            <div className="max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <p className="text-lg sm:text-xl leading-relaxed tracking-wide" style={{ color: theme.colors.text.secondary }}>
                Here to help you remain competitive in an AI age
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{
              animationDelay: '0.2s',
            }}>
              <a
                href="https://calendly.com/shawaiznaeem-104/intro-call"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all ${behavior.hoverScale ? 'hover:scale-105' : 'hover:shadow-lg'} group`}
                style={{
                  background: `linear-gradient(135deg, ${theme.colors.primary.electric} 0%, ${theme.colors.accent.cyan} 100%)`,
                  color: 'white',
                  boxShadow: behavior.hoverGlow ? `0 0 30px ${theme.colors.accent.cyan}40` : theme.shadows.medium,
                }}
              >
                Book a Call <Calendar size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl mb-20 sm:mb-32 animate-fade-in-up" style={{
          animationDelay: '0.3s',
        }}>
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4" style={{
              backgroundColor: `${theme.colors.accent.cyan}10`,
            }}>
              <Target size={14} style={{ color: theme.colors.accent.cyan }} />
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: theme.colors.accent.cyan }}>
                Our Services
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-2" style={{
              letterSpacing: '-0.03em',
              color: theme.colors.text.primary,
            }}>
              Three Ways We Help
            </h2>
            <p style={{ color: theme.colors.text.secondary }}>
              AI Strategy, Training and Solutions for SMB's
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Link
                  key={service.id}
                  to={service.link}
                  className="p-8 rounded-lg border group transition-all h-full flex flex-col"
                  style={{
                    borderColor: theme.colors.border.subtle,
                    backgroundColor: theme.colors.background.card,
                    textDecoration: 'none',
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
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{
                    background: `linear-gradient(135deg, ${theme.colors.primary.deep} 0%, ${theme.colors.primary.electric} 100%)`,
                  }}>
                    <IconComponent size={24} style={{ color: 'white' }} />
                  </div>
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
              );
            })}
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl mb-20 sm:mb-32 animate-fade-in-up" style={{
          animationDelay: '0.4s',
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
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-8 leading-relaxed" style={{ color: theme.colors.text.secondary }}>
              Schedule a consultation to discuss how we can help you build strategic advantage in an AI-driven world.
            </p>
            <a
              href="https://calendly.com/shawaiznaeem-104/intro-call"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all ${behavior.hoverScale ? 'hover:scale-105' : 'hover:shadow-lg'} group`}
              style={{
                background: `linear-gradient(135deg, ${theme.colors.accent.coral} 0%, ${theme.colors.primary.electric} 100%)`,
                color: 'white',
                boxShadow: behavior.hoverGlow ? `0 0 30px ${theme.colors.accent.coral}40` : theme.shadows.medium,
              }}
            >
              Book a Call <Calendar size={20} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </section>

        {/* Contact Footer */}
        <footer className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl pb-12">
          <div className="border-t pt-8" style={{ borderColor: theme.colors.border.subtle }}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <Mail size={20} style={{ color: theme.colors.accent.cyan }} />
                <a
                  href="mailto:shawaizn@energiseai.co.uk"
                  className="text-base font-medium hover:underline transition-colors"
                  style={{ color: theme.colors.text.secondary }}
                  onMouseEnter={(e) => e.currentTarget.style.color = theme.colors.accent.cyan}
                  onMouseLeave={(e) => e.currentTarget.style.color = theme.colors.text.secondary}
                >
                  shawaizn@energiseai.co.uk
                </a>
              </div>
            </div>
          </div>
        </footer>
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
