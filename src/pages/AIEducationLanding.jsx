import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Zap, Target, Users, Award, BookOpen, TrendingUp, ShieldCheck, Lock, MessageCircle, Mail, Instagram, Linkedin, Video, Monitor, Quote, RotateCcw, CalendarDays, UserCheck } from 'lucide-react';
import { theme, behavior } from '../styles/theme';
import { LogoHorizontal } from '../components/branding/Logo';
import teacherPhoto from '../assets/shawaiz-teacher.jpg';

// Derive landing page base URL from the app basename so links work on any host
const landingBase = (import.meta.env.VITE_BASENAME || '/EAE/app').replace(/\/app$/, '') + '/';

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

  const testimonials = [
    { name: 'Zain', quote: 'Very helpful, friendly, social. Great at explaining.' },
    { name: 'Rosa', quote: 'Helpful, good resources and time management (also got 9s).' },
    { name: 'Christian', quote: 'Helpful, patient, friendly and kind. Gets the job done, has a unique way of teaching.' },
  ];

  const reassurances = [
    { icon: UserCheck, title: 'Taught by Shawaiz', text: 'Every lesson is taught live by the founder of Energise AI. No outsourced tutors.' },
    { icon: Video, title: 'Live online lessons', text: 'Interactive lessons your child joins from home. Lessons can be recorded so nothing is missed.' },
    { icon: Monitor, title: 'Energise AI learning platform', text: 'Your child also gets access to our platform with video lessons, notes, quizzes and progress tracking.' },
    { icon: RotateCcw, title: 'Full refund after lesson one', text: "If it's not for your child after the first lesson, you get a full refund." },
  ];

  const faqs = [
    { q: 'Who is this for?', a: "Young people aged 16 and under. You know your child best, so it's up to you to decide if it's the right fit. If you're unsure, message us and we'll talk it through." },
    { q: 'Does my child need any experience with AI?', a: 'No. We start from the basics of what AI is and build up step by step.' },
    { q: 'When does it start?', a: 'The first lesson is on 1st November.' },
    { q: 'What if it turns out not to be for them?', a: "After the first lesson, if it's not for your child, just let us know and you'll get a full refund." },
    { q: 'What if they miss a lesson?', a: 'Lessons can be recorded, and all the course material is on the Energise AI learning platform, so they can catch up.' },
    { q: 'Is the payment secure?', a: 'Yes. Payments are handled by Stripe, one of the world’s largest payment providers. We never see or store your card details.' },
  ];

  const contacts = [
    { icon: MessageCircle, label: 'WhatsApp', value: '+44 7368 979016', href: 'https://wa.me/447368979016' },
    { icon: Mail, label: 'Email', value: 'shawaiznaeem.104@gmail.com', href: 'mailto:shawaiznaeem.104@gmail.com' },
    { icon: Instagram, label: 'Instagram', value: '@shawaiz_naeem1', href: 'https://www.instagram.com/shawaiz_naeem1/' },
    { icon: Linkedin, label: 'LinkedIn', value: 'Shawaiz Naeem', href: 'https://www.linkedin.com/in/shawaiz-naeem-1a871b3b1/' },
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-white border-b" style={{ borderColor: theme.colors.border.subtle }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href={landingBase} aria-label="Energise AI home">
              <LogoHorizontal size="sm" />
            </a>
            <nav className="flex items-center gap-8">
              <a href="#why" className="hidden sm:inline text-sm font-medium hover:text-cyan-600 transition-colors">Why</a>
              <a href="#about" className="hidden sm:inline text-sm font-medium hover:text-cyan-600 transition-colors">About</a>
              <a href="#curriculum" className="hidden sm:inline text-sm font-medium hover:text-cyan-600 transition-colors">Curriculum</a>
              <a href="#parents" className="hidden sm:inline text-sm font-medium hover:text-cyan-600 transition-colors">Parents</a>
              <a
                href={landingBase}
                className="flex items-center gap-2 text-sm font-medium transition-colors"
                style={{ color: theme.colors.accent.cyan }}
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Energise AI
              </a>
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
          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium" style={{ color: theme.colors.text.secondary }}>
            <span className="flex items-center gap-2"><CalendarDays size={16} style={{ color: theme.colors.accent.cyan }} />Starts 1st November</span>
            <span className="flex items-center gap-2"><Video size={16} style={{ color: theme.colors.accent.cyan }} />Live online lessons</span>
            <span className="flex items-center gap-2"><Users size={16} style={{ color: theme.colors.accent.cyan }} />Ages 16 and under</span>
            <span className="flex items-center gap-2"><RotateCcw size={16} style={{ color: theme.colors.accent.cyan }} />Full refund after lesson one</span>
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

      {/* Teacher Section */}
      <section id="teacher" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: theme.colors.background.subtle }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center" style={{ color: theme.colors.text.primary }}>
            Meet Your Child&apos;s Teacher
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center p-6 sm:p-8 rounded-lg border bg-white" style={{ borderColor: theme.colors.border.subtle }}>
            <img
              src={teacherPhoto}
              alt="Shawaiz Naeem, founder of Energise AI"
              className="md:col-span-2 w-full max-w-xs mx-auto rounded-lg object-cover aspect-[3/4]"
              loading="lazy"
            />
            <div className="md:col-span-3">
              <h3 className="text-2xl font-bold" style={{ color: theme.colors.text.primary }}>Shawaiz Naeem</h3>
              <p className="text-sm font-semibold uppercase tracking-wide mb-4" style={{ color: theme.colors.accent.cyan }}>
                Founder, Energise AI
              </p>
              <p className="leading-relaxed mb-4" style={{ color: theme.colors.text.secondary }}>
                I teach every lesson myself, live. I started Energise AI because AI, used the right way, makes things easier, saves time and expands what you&apos;re capable of. Used wrong, it delivers none of that.
              </p>
              <p className="leading-relaxed" style={{ color: theme.colors.text.secondary }}>
                Before Energise AI, I tutored GCSE students. This course brings the same patient, step-by-step approach to teaching young people how to use AI well.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mt-16 mb-2 text-center" style={{ color: theme.colors.text.primary }}>
            What My Past Students Say
          </h3>
          <p className="text-sm text-center mb-8" style={{ color: theme.colors.text.secondary }}>
            From Year 11 students I tutored for their GCSEs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <figure key={t.name} className="p-6 rounded-lg border bg-white flex flex-col" style={{ borderColor: theme.colors.border.subtle }}>
                <Quote size={24} className="mb-3" style={{ color: theme.colors.accent.cyan }} />
                <blockquote className="flex-1 leading-relaxed" style={{ color: theme.colors.text.primary }}>
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-sm font-semibold" style={{ color: theme.colors.text.secondary }}>
                  {t.name} · Year 11 student
                </figcaption>
              </figure>
            ))}
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
                1<sup>st</sup> November
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

      {/* Parent Reassurance Section */}
      <section id="parents" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: theme.colors.background.subtle }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center" style={{ color: theme.colors.text.primary }}>
            For Parents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {reassurances.map((r) => {
              const Icon = r.icon;
              return (
                <div key={r.title} className="flex items-start gap-4 p-6 rounded-lg border bg-white" style={{ borderColor: theme.colors.border.subtle }}>
                  <Icon size={24} className="flex-shrink-0 mt-1" style={{ color: theme.colors.accent.cyan }} />
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: theme.colors.text.primary }}>{r.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: theme.colors.text.secondary }}>{r.text}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: theme.colors.text.primary }}>
            Common Questions
          </h3>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group p-5 rounded-lg border bg-white" style={{ borderColor: theme.colors.border.subtle }}>
                <summary className="cursor-pointer font-semibold list-none flex justify-between items-center gap-4" style={{ color: theme.colors.text.primary }}>
                  {f.q}
                  <span className="text-xl transition-transform group-open:rotate-45" style={{ color: theme.colors.accent.cyan }}>+</span>
                </summary>
                <p className="mt-3 leading-relaxed" style={{ color: theme.colors.text.secondary }}>{f.a}</p>
              </details>
            ))}
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

          <div className="flex items-start sm:items-center justify-center gap-3 mb-6 p-4 rounded-lg text-left sm:text-center" style={{
            backgroundColor: `${theme.colors.accent.cyan}12`,
            color: theme.colors.text.primary,
          }}>
            <ShieldCheck size={22} className="flex-shrink-0" style={{ color: theme.colors.accent.cyan }} />
            <p className="font-semibold">Not for your child after the first lesson? You get a full refund.</p>
          </div>

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
            <p className="mt-4 flex items-center justify-center gap-2 text-sm" style={{ color: theme.colors.text.secondary }}>
              <Lock size={14} />
              Secure payment by Stripe. We never see your card details.
            </p>
          </div>

          <div className="mt-10 text-left">
            <h3 className="text-xl font-bold mb-4 text-center" style={{ color: theme.colors.text.primary }}>What happens after you book</h3>
            <ol className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                'Book securely through Stripe, adding your phone number at checkout.',
                'Shawaiz texts you personally before 1st November with your joining details and platform login.',
                "Your child joins the first lesson. If it's not for them, you get a full refund.",
              ].map((step, i) => (
                <li key={i} className="flex gap-3 p-5 rounded-lg border bg-white" style={{ borderColor: theme.colors.border.subtle }}>
                  <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ backgroundColor: theme.colors.accent.cyan }}>
                    {i + 1}
                  </span>
                  <span className="text-sm leading-relaxed" style={{ color: theme.colors.text.secondary }}>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: theme.colors.text.primary }}>
            Questions Before You Book?
          </h2>
          <p className="mb-8" style={{ color: theme.colors.text.secondary }}>
            Message Shawaiz directly. Happy to chat with you or your child before you decide.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {contacts.map((c) => {
              const Icon = c.icon;
              const external = c.href.startsWith('http');
              return (
                <a
                  key={c.label}
                  href={c.href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="flex items-center gap-4 p-5 rounded-lg border bg-white hover:shadow-md transition-all"
                  style={{ borderColor: theme.colors.border.subtle }}
                >
                  <Icon size={22} className="flex-shrink-0" style={{ color: theme.colors.accent.cyan }} />
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-wide" style={{ color: theme.colors.text.muted }}>{c.label}</span>
                    <span className="block font-medium break-words" style={{ color: theme.colors.text.primary }}>{c.value}</span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4 sm:px-6 lg:px-8" style={{ borderColor: theme.colors.border.subtle }}>
        <div className="max-w-6xl mx-auto text-center">
          <p style={{ color: theme.colors.text.secondary }}>
            © 2026 Energise AI Education · <a href={landingBase} className="underline">energiseai.co.uk</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
