import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Target, Users, Award, BookOpen, TrendingUp } from 'lucide-react';
import { theme, behavior } from '../styles/theme';
import { LogoHorizontal } from '../components/branding/Logo';

export function AIEducationLanding() {
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

  const curriculumWeeks = [
    { week: 1, title: 'What is AI', description: 'Foundations of Artificial Intelligence' },
    { week: 2, title: 'AI Products', description: 'Practical AI tools and applications' },
    { week: 3, title: 'Safe AI Use', description: 'Responsible and ethical AI practices' },
    { week: 4, title: 'Prompting', description: 'Mastering AI interaction techniques' },
    { week: 5, title: 'Website Build', description: 'Building with AI technology' },
  ];

  const benefits = [
    { icon: TrendingUp, text: 'Increased employability', color: '#0fa3b1' },
    { icon: Award, text: 'Higher salaries (£1000+)', color: '#0fa3b1' },
    { icon: Zap, text: 'Faster & smarter learning', color: '#0fa3b1' },
    { icon: Users, text: 'Confidence with technology', color: '#0fa3b1' },
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-white border-b" style={{ borderColor: theme.colors.border.subtle }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <LogoHorizontal size="sm" />
            <nav className="hidden sm:flex gap-8">
              <a href="#why" className="text-sm font-medium hover:text-cyan-600 transition-colors">Why</a>
              <a href="#about" className="text-sm font-medium hover:text-cyan-600 transition-colors">About</a>
              <a href="#curriculum" className="text-sm font-medium hover:text-cyan-600 transition-colors">Curriculum</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ color: theme.colors.text.primary }}>
              AI Education Program
            </h1>
            <p className="text-lg sm:text-xl" style={{ color: theme.colors.text.secondary }}>
              Give your teenager the AI advantage for their future careers
            </p>
          </div>
          <div className="inline-block px-4 py-2 rounded-full border" style={{
            borderColor: theme.colors.accent.cyan,
            backgroundColor: `${theme.colors.accent.cyan}08`,
          }}>
            <span className="text-sm font-semibold" style={{ color: theme.colors.accent.cyan }}>
              Only 29 spots available • First 15 students get £20 discount
            </span>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section id="why" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b" style={{
        background: `linear-gradient(135deg, ${theme.colors.accent.cyan}05 0%, transparent 100%)`
      }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center" style={{ color: theme.colors.text.primary }}>
            Why We Created This
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 rounded-lg border" style={{ borderColor: theme.colors.border.subtle }}>
              <p className="text-base leading-relaxed mb-4 italic" style={{ color: theme.colors.text.secondary }}>
                In a world changing this fast, traditional education alone may not be enough.
              </p>
              <p className="text-base leading-relaxed" style={{ color: theme.colors.text.secondary }}>
                AI is drastically changing the future of work, and AI skills are becoming essential for success.
              </p>
            </div>

            <div className="p-6 rounded-lg" style={{
              background: `linear-gradient(135deg, ${theme.colors.primary.electric} 0%, ${theme.colors.accent.cyan} 100%)`,
            }}>
              <p className="text-xl font-bold text-white mb-2">
                "UK employers pay around 14% more for AI-skilled roles"
              </p>
              <p className="text-white/90 text-sm">— PwC</p>
            </div>
          </div>

          <div className="p-8 rounded-lg border text-center" style={{
            borderColor: theme.colors.border.subtle,
            backgroundColor: theme.colors.background.card,
          }}>
            <Target size={40} className="mx-auto mb-4" style={{ color: theme.colors.accent.cyan }} />
            <h3 className="text-2xl font-bold mb-4" style={{ color: theme.colors.text.primary }}>
              Give your teenager the AI advantage for their future careers
            </h3>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center" style={{ color: theme.colors.text.primary }}>
            About Energise AI Education
          </h2>
          <div className="p-8 rounded-lg border" style={{
            borderColor: theme.colors.border.subtle,
            backgroundColor: theme.colors.background.card,
          }}>
            <p className="text-lg leading-relaxed" style={{ color: theme.colors.text.secondary }}>
              Energise AI Education is dedicated to equipping young people with essential AI skills and knowledge. We provide practical, hands-on training that goes beyond tools to build real understanding of AI's impact on careers, society, and the future of work.
            </p>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b" style={{
        background: `linear-gradient(135deg, ${theme.colors.accent.cyan}05 0%, transparent 100%)`
      }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center" style={{ color: theme.colors.text.primary }}>
            Our Curriculum
          </h2>

          {/* Week by Week */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            {curriculumWeeks.map((item) => (
              <div
                key={item.week}
                className="p-4 rounded-lg border text-center hover:shadow-md transition-all"
                style={{
                  borderColor: theme.colors.accent.cyan,
                  backgroundColor: `${theme.colors.accent.cyan}08`,
                }}
              >
                <div className="text-2xl font-bold mb-2" style={{ color: theme.colors.accent.cyan }}>
                  Week {item.week}
                </div>
                <h3 className="font-semibold mb-1" style={{ color: theme.colors.text.primary }}>
                  {item.title}
                </h3>
                <p className="text-sm" style={{ color: theme.colors.text.secondary }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Learn More Button */}
          <div className="text-center mb-12">
            <Link
              to="/program-curriculum"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${theme.colors.primary.electric} 0%, ${theme.colors.accent.cyan} 100%)`,
                color: 'white',
              }}
            >
              Learn More About Our Program <ArrowRight size={20} />
            </Link>
          </div>

          {/* Program Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg border text-center" style={{
              borderColor: theme.colors.border.subtle,
              backgroundColor: theme.colors.background.card,
            }}>
              <h3 className="font-semibold mb-2" style={{ color: theme.colors.text.primary }}>Start Date</h3>
              <p className="text-2xl font-bold" style={{ color: theme.colors.accent.cyan }}>
                18<sup>th</sup> May
              </p>
            </div>

            <div className="p-6 rounded-lg border text-center" style={{
              borderColor: theme.colors.border.subtle,
              backgroundColor: theme.colors.background.card,
            }}>
              <h3 className="font-semibold mb-2" style={{ color: theme.colors.text.primary }}>Format</h3>
              <p className="text-lg" style={{ color: theme.colors.text.secondary }}>
                1 hour online lessons
              </p>
              <p className="text-sm" style={{ color: theme.colors.text.secondary }}>
                10 lessons total
              </p>
            </div>

            <div className="p-6 rounded-lg border text-center" style={{
              borderColor: theme.colors.border.subtle,
              backgroundColor: theme.colors.background.card,
            }}>
              <h3 className="font-semibold mb-2" style={{ color: theme.colors.text.primary }}>Price</h3>
              <p className="text-2xl font-bold" style={{ color: theme.colors.accent.cyan }}>
                £11
              </p>
              <p className="text-sm" style={{ color: theme.colors.text.secondary }}>
                per lesson
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center" style={{ color: theme.colors.text.primary }}>
            AI Skills Give
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-6 rounded-lg border"
                  style={{
                    borderColor: theme.colors.border.subtle,
                    backgroundColor: theme.colors.background.card,
                  }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <Icon size={24} style={{ color: benefit.color }} />
                  </div>
                  <p className="text-lg font-semibold" style={{ color: theme.colors.text.primary }}>
                    {benefit.text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="p-8 rounded-lg border text-center bg-gradient-to-br" style={{
            borderColor: theme.colors.border.subtle,
            background: `linear-gradient(135deg, ${theme.colors.accent.cyan}08 0%, ${theme.colors.background.card} 100%)`,
          }}>
            <Award size={40} className="mx-auto mb-4" style={{ color: theme.colors.accent.cyan }} />
            <h3 className="text-2xl font-bold mb-2" style={{ color: theme.colors.text.primary }}>
              Receive a certificate upon completion
            </h3>
            <p style={{ color: theme.colors.text.secondary }}>
              Students who complete the program receive an official certificate
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b" style={{
        background: `linear-gradient(135deg, ${theme.colors.accent.cyan}08 0%, ${theme.colors.primary.deep}08 100%)`
      }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8" style={{ color: theme.colors.text.primary }}>
            Ready to Start Your AI Journey?
          </h2>

          <div className="p-8 rounded-lg border" style={{
            borderColor: theme.colors.border.subtle,
            backgroundColor: 'white',
          }}>
            {/* OLD STRIPE CODE - COMMENTED OUT FOR NOW */}
            {/* 
            <script async
              src="https://js.stripe.com/v3/buy-button.js">
            </script>

            <stripe-buy-button
              buy-button-id="buy_btn_1TQ3drJaju4Y4wsr7v4itBjq"
              publishable-key="pk_live_51RkVzzJaju4Y4wsrQsnGXWnUAr9vwAYU7OFPGgLtIcGxfNaW9AsBejXDTFtrCMGikdLzIL3pqvt6ryM0vKwltScV00KH4zcc30"
            >
            </stripe-buy-button>
            */}

            {/* NEW STRIPE BUY BUTTON */}
            <stripe-buy-button
              buy-button-id="buy_btn_1TQ3drJaju4Y4wsr7v4itBjq"
              publishable-key="pk_live_51RkVzzJaju4Y4wsrQsnGXWnUAr9vwAYU7OFPGgLtIcGxfNaW9AsBejXDTFtrCMGikdLzIL3pqvt6ryM0vKwltScV00KH4zcc30"
            >
            </stripe-buy-button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4 sm:px-6 lg:px-8" style={{ borderColor: theme.colors.border.subtle }}>
        <div className="max-w-6xl mx-auto text-center">
          <p style={{ color: theme.colors.text.secondary }}>
            © 2026 Energise AI Education. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
