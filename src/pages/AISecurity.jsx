import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { LogoHorizontal } from '../components/branding/Logo';

export function AISecurity() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full pb-32" style={{ background: '#080C14' }}>
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 80% 50% at 50% -10%, rgba(59,130,246,0.06) 0%, transparent 60%),
            radial-gradient(ellipse at 0% 100%, rgba(34,197,94,0.04) 0%, transparent 50%),
            radial-gradient(ellipse at 100% 100%, rgba(168,85,247,0.04) 0%, transparent 50%)
          `,
        }}
      />

      {/* Nav */}
      <nav
        className="relative z-20 flex items-center justify-between px-6 sm:px-10 h-16 border-b"
        style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(8,12,20,0.9)', backdropFilter: 'blur(12px)' }}
      >
        <button
          onClick={() => navigate('/hub')}
          className="flex items-center gap-2 text-sm font-medium transition-colors"
          style={{ color: '#475569' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#CBD5E1')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}
        >
          <ArrowLeft size={16} />
          Back
        </button>
        <LogoHorizontal size="sm" whiteMode={true} />
        <div style={{ width: 60 }} />
      </nav>

      {/* Hero */}
      <div className="relative z-10 px-4 sm:px-6 pt-20 pb-16 text-center">
        <p
          className="text-xs font-bold uppercase tracking-widest mb-6"
          style={{ color: '#3B82F6', letterSpacing: '0.2em' }}
        >
          Coming Soon
        </p>
        <h1
          className="text-4xl sm:text-6xl font-black text-white mb-6 mx-auto"
          style={{ letterSpacing: '-0.04em', lineHeight: 1.05, maxWidth: '640px' }}
        >
          AI Security.
        </h1>
        <p
          className="text-base sm:text-lg mb-12 mx-auto"
          style={{ color: '#4B5563', maxWidth: '480px', lineHeight: 1.6 }}
        >
          Comprehensive security practices for AI systems. Learn how to protect your data, validate AI outputs, and build trustworthy AI implementations.
        </p>

        {/* Coming Soon Status */}
        <div
          className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl"
          style={{
            background: 'rgba(59,130,246,0.08)',
            border: '1px solid rgba(59,130,246,0.2)',
          }}
        >
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#3B82F6', animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }} />
          <p className="text-sm font-semibold" style={{ color: '#60A5FA' }}>
            This section is in development. We're building comprehensive security training content.
          </p>
        </div>
      </div>

      {/* Content Preview */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 py-20">
        <div
          className="rounded-2xl p-8 sm:p-12"
          style={{
            background: 'linear-gradient(135deg, rgba(59,130,246,0.05) 0%, rgba(34,197,94,0.03) 100%)',
            border: '1px solid rgba(59,130,246,0.15)',
          }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8" style={{ letterSpacing: '-0.02em' }}>
            Topics Coming Soon
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: 'Prompt Injection & Attack Vectors',
                description: 'Understand common attack methods and how to build resilient AI systems.',
              },
              {
                title: 'Data Privacy & Model Security',
                description: 'Protect sensitive data in AI pipelines and secure your models.',
              },
              {
                title: 'AI Output Validation',
                description: 'Verify AI responses for accuracy, bias, and safety before deployment.',
              },
              {
                title: 'Access Control & Authentication',
                description: 'Implement proper security controls for AI systems and user access.',
              },
              {
                title: 'Model Governance & Auditing',
                description: 'Track, audit, and maintain transparency in AI decision-making.',
              },
              {
                title: 'Compliance & Risk Management',
                description: 'Navigate regulatory requirements and AI-specific compliance needs.',
              },
            ].map((topic, idx) => (
              <div key={idx} className="p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <h3 className="font-semibold text-white mb-2">{topic.title}</h3>
                <p className="text-sm" style={{ color: '#4B5563' }}>
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-8 py-16 text-center">
        <h3 className="text-xl font-bold text-white mb-4">Interested in AI Security Training?</h3>
        <p className="text-sm mb-6" style={{ color: '#4B5563' }}>
          Get early access notifications when this section launches.
        </p>
        <a
          href="https://calendly.com/shawaiznaeem-104/intro-call"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all"
          style={{
            background: 'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)',
            color: 'white',
            boxShadow: '0 4px 16px rgba(59,130,246,0.3)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(59,130,246,0.5)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(59,130,246,0.3)';
            e.currentTarget.style.transform = 'none';
          }}
        >
          Get Notified
        </a>
      </div>
    </div>
  );
}
