import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Target, ShieldCheck, Lock, MessageCircle, Mail, Instagram, Linkedin, Video, Monitor, Quote, RotateCcw, UserCheck } from 'lucide-react';
import { theme, behavior } from '../styles/theme';
import { LogoHorizontal } from '../components/branding/Logo';
import teacherPhoto from '../assets/shawaiz-teacher.jpg';
import { certificates } from '../data/certificates';
import { CertificateDialog, CertificateThumb } from '../components/features/CertificateDialog';
import { HeroVideo } from '../components/features/HeroVideo';
import adVideo from '../assets/ai-advantage-academy-ad.mp4';
import adPoster from '../assets/ai-advantage-academy-ad-poster.jpg';
import adVideoPortrait from '../assets/ai-advantage-academy-ad-portrait.mp4';
import adPosterPortrait from '../assets/ai-advantage-academy-ad-poster-portrait.jpg';

// Derive landing page base URL from the app basename so links work on any host
const landingBase = (import.meta.env.VITE_BASENAME || '/EAE/app').replace(/\/app$/, '') + '/';

export function AIEducationLanding() {
  useEffect(() => {
    const previous = document.title;
    document.title = 'AI Advantage Academy — Energise AI';
    return () => { document.title = previous; };
  }, []);

  // Certificate pop-up: null = closed, 'all' = every certificate, number = one certificate
  const [certView, setCertView] = useState(null);
  const [certFromAll, setCertFromAll] = useState(false);
  const showCert = useCallback((view, fromAll = false) => { setCertView(view); setCertFromAll(fromAll); }, []);
  const closeCert = useCallback(() => setCertView(null), []);

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
    { week: 1, title: 'What AI Is', description: 'Foundations of artificial intelligence' },
    { week: 2, title: 'AI Tools', description: 'Practical AI tools and how to use them' },
    { week: 3, title: 'Using AI Safely', description: 'Responsible and safe AI use' },
    { week: 4, title: 'Prompt Engineering', description: 'Getting great results from AI' },
    { week: 5, title: 'Building a Website with AI', description: 'Putting it all into practice' },
  ];

  const stats = [
    {
      value: '34%',
      text: 'higher average pay for UK workers with AI skills',
      source: 'PwC UK AI Jobs Barometer 2026',
      sourceUrl: 'https://www.pwc.co.uk/press-room/press-releases/research-commentary/2026/ai-jobs-barometer-2026.html',
    },
    {
      value: '#1',
      text: 'fastest-growing skill in the world to 2030: AI and big data',
      source: 'World Economic Forum, Future of Jobs Report 2025',
      sourceUrl: 'https://www.weforum.org/publications/the-future-of-jobs-report-2025/in-full/3-skills-outlook/',
    },
    {
      value: '39%',
      text: "of workers' core skills are expected to change by 2030",
      source: 'World Economic Forum, Future of Jobs Report 2025',
      sourceUrl: 'https://www.weforum.org/publications/the-future-of-jobs-report-2025/in-full/3-skills-outlook/',
    },
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
    { q: 'Who is this for?', a: "Young people aged 14 to 16. You know your child best, so it's up to you to decide if it's the right fit. If you're unsure, message us and we'll talk it through." },
    { q: 'Does my child need any experience with AI?', a: 'No. We start from the basics of what AI is and build up step by step.' },
    { q: 'When does it start?', a: "As soon as all 30 places are filled, and by 1st December at the latest. We'll tell you the exact start date as soon as the last place fills." },
    { q: 'How long is the course?', a: 'Ten live lessons, two a week for five weeks. Each lesson lasts one hour.' },
    { q: 'Do they get a certificate?', a: 'Yes. Students receive a certificate when they complete the course.' },
    { q: 'What if it turns out not to be for them?', a: "After the first lesson, if it's not for your child, just let us know and you'll get a full refund." },
    { q: 'What if they miss a lesson?', a: 'Lessons are recorded and shared privately with students on the course, so they can catch up. All the course material is also on the Energise AI learning platform.' },
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
              <a href="#curriculum" className="hidden sm:inline text-sm font-medium hover:text-cyan-600 transition-colors">Curriculum</a>
              <a href="#teacher" className="hidden sm:inline text-sm font-medium hover:text-cyan-600 transition-colors">Tutor</a>
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
      <section className="min-h-[calc(100svh-4rem)] flex items-center justify-center py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl mx-auto text-center">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: theme.colors.accent.cyan }}>
            Energise AI presents
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8" style={{ color: theme.colors.text.primary }}>
            AI Advantage Academy
          </h1>
          {/* Full-width landscape advert */}
          <div className="mx-auto w-full max-w-6xl">
            <HeroVideo
              landscape={{ src: adVideo, poster: adPoster }}
              portrait={{ src: adVideoPortrait, poster: adPosterPortrait }}
              title="AI Advantage Academy advert"
            />
          </div>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="#book"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-white transition-all hover:scale-105"
              style={{ backgroundColor: theme.colors.accent.cyan }}
            >
              Book a Place <ArrowRight size={18} />
            </a>
            <a
              href="#teacher"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-semibold border bg-white transition-all hover:shadow-md"
              style={{ borderColor: theme.colors.border.subtle, color: theme.colors.text.primary }}
            >
              Meet the Tutor
            </a>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section id="why" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: theme.colors.background.subtle }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center" style={{ color: theme.colors.text.primary }}>
            Why We Created This
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
            {stats.map((stat) => (
              <div key={stat.value} className="p-6 rounded-lg border bg-white text-center flex flex-col" style={{ borderColor: theme.colors.border.subtle }}>
                <p className="text-5xl font-bold mb-3" style={{ color: theme.colors.accent.cyan }}>
                  {stat.value}
                </p>
                <p className="flex-1 leading-relaxed font-medium" style={{ color: theme.colors.text.primary }}>
                  {stat.text}
                </p>
                <a
                  href={stat.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-xs hover:underline"
                  style={{ color: theme.colors.text.muted }}
                >
                  Source: {stat.source}
                </a>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-lg border bg-white text-center mb-8" style={{ borderColor: theme.colors.border.subtle }}>
            <p className="text-base leading-relaxed" style={{ color: theme.colors.text.secondary }}>
              <span className="italic">In a world changing this fast, traditional education alone may not be enough.</span>{' '}
              AI is drastically changing the future of work, and AI skills are becoming essential for success.
            </p>
          </div>

          <div className="p-8 rounded-lg border text-center" style={{
            borderColor: theme.colors.border.subtle,
            backgroundColor: theme.colors.background.card,
          }}>
            <Target size={40} className="mx-auto mb-4" style={{ color: theme.colors.accent.cyan }} />
            <h3 className="text-2xl font-bold mb-4" style={{ color: theme.colors.text.primary }}>
              Give your teenager the AI advantage for their future careers
            </h3>
            <a
              href="#book"
              className="inline-flex items-center justify-center gap-2 mt-2 px-7 py-3.5 rounded-lg font-semibold text-white transition-all hover:scale-105"
              style={{ backgroundColor: theme.colors.accent.cyan }}
            >
              Book a Place <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
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

          {/* Program Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-lg border text-center" style={{
              borderColor: theme.colors.border.subtle,
              backgroundColor: theme.colors.background.card,
            }}>
              <h3 className="font-semibold mb-2" style={{ color: theme.colors.text.primary }}>Start Date</h3>
              <p className="text-xl font-bold whitespace-nowrap" style={{ color: theme.colors.accent.cyan }}>
                By 1<sup>st</sup> December
              </p>
              <p className="text-sm" style={{ color: theme.colors.text.secondary }}>
                or sooner, once all 30 places fill
              </p>
            </div>

            <div className="p-6 rounded-lg border text-center" style={{
              borderColor: theme.colors.border.subtle,
              backgroundColor: theme.colors.background.card,
            }}>
              <h3 className="font-semibold mb-2" style={{ color: theme.colors.text.primary }}>Format</h3>
              <p className="text-lg" style={{ color: theme.colors.text.secondary }}>
                10 live online lessons
              </p>
              <p className="text-sm" style={{ color: theme.colors.text.secondary }}>
                2 a week for 5 weeks, 1 hour each
              </p>
            </div>

            <div className="p-6 rounded-lg border text-center" style={{
              borderColor: theme.colors.border.subtle,
              backgroundColor: theme.colors.background.card,
            }}>
              <h3 className="font-semibold mb-2" style={{ color: theme.colors.text.primary }}>Price</h3>
              <p className="text-2xl font-bold" style={{ color: theme.colors.accent.cyan }}>
                £40
              </p>
              <p className="text-sm" style={{ color: theme.colors.text.secondary }}>
                for the full course
              </p>
            </div>

            <div className="p-6 rounded-lg border text-center" style={{
              borderColor: theme.colors.border.subtle,
              backgroundColor: theme.colors.background.card,
            }}>
              <h3 className="font-semibold mb-2" style={{ color: theme.colors.text.primary }}>Certificate</h3>
              <p className="text-lg" style={{ color: theme.colors.text.secondary }}>
                Awarded on completion
              </p>
              <p className="text-sm" style={{ color: theme.colors.text.secondary }}>
                Ages 14 to 16
              </p>
            </div>
          </div>

          {/* Learn More Button */}
          <div className="text-center mt-12">
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
        </div>
      </section>

      {/* Teacher Section */}
      <section id="teacher" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: theme.colors.background.subtle }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center" style={{ color: theme.colors.text.primary }}>
            Meet the Tutor
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
                I&apos;ve also tutored GCSE students. This course brings the same patient, step-by-step approach to teaching young people how to use AI well.
              </p>
              <p className="leading-relaxed mt-4 font-medium" style={{ color: theme.colors.text.primary }}>
                I hold {certificates.length} Codecademy certificates in AI, machine learning and programming, including the Machine Learning/AI Engineer Career Path.
              </p>
            </div>
          </div>

          <h3 id="certificates" className="text-2xl font-bold mt-16 mb-2 text-center" style={{ color: theme.colors.text.primary }}>
            My Certificates
          </h3>
          <p className="text-sm text-center mb-8" style={{ color: theme.colors.text.secondary }}>
            {certificates.length} Codecademy certificates in AI, machine learning and programming. Tap one to see it in full.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-5">
            {certificates.slice(0, 3).map((c, i) => (
              <div key={c.title} className={i === 2 ? 'hidden sm:flex' : 'flex'}>
                <CertificateThumb cert={c} onClick={() => showCert(i)} />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button
              type="button"
              onClick={() => showCert('all')}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold border bg-white transition-all hover:shadow-md"
              style={{ borderColor: theme.colors.accent.cyan, color: theme.colors.accent.cyan }}
            >
              View all {certificates.length} certificates <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-center" style={{ color: theme.colors.text.primary }}>
            What Students Say
          </h2>
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
      <section id="book" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8" style={{ color: theme.colors.text.primary }}>
            Ready to Start Your AI Journey?
          </h2>

          <p className="inline-block mb-6 px-4 py-2 rounded-full border text-sm font-semibold" style={{
            borderColor: theme.colors.accent.cyan,
            backgroundColor: `${theme.colors.accent.cyan}08`,
            color: theme.colors.accent.cyan,
          }}>
            Only 30 places available
          </p>

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
                'Shawaiz texts you personally as soon as all 30 places fill, with your start date, joining details and platform login.',
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
      <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: theme.colors.background.subtle }}>
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

      <CertificateDialog
        certificates={certificates}
        view={certView}
        fromAll={certFromAll}
        onShow={showCert}
        onClose={closeCert}
      />

      {/* Footer */}
      <footer className="border-t py-8 px-4 sm:px-6 lg:px-8" style={{ borderColor: theme.colors.border.subtle }}>
        <div className="max-w-6xl mx-auto text-center">
          <p style={{ color: theme.colors.text.secondary }}>
            © 2026 Energise AI · AI Advantage Academy · <a href={landingBase} className="underline">energiseai.co.uk</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
