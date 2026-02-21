import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Target, MessageSquare, Calendar, ChevronRight, Lock, CheckCircle2, ArrowLeft, Lightbulb, Map, TrendingUp, Users } from 'lucide-react';
import { LogoHorizontal } from '../components/branding/Logo';

const BOOKING_URL = 'https://calendly.com/shawaiznaeem-104/intro-call';

const whatIsIncluded = [
  {
    icon: Lightbulb,
    title: 'AI Opportunity Audit',
    description: 'We map every part of your business against AI capabilities to surface real opportunities — not just hype.',
  },
  {
    icon: Map,
    title: 'Prioritised Roadmap',
    description: 'A clear, sequenced plan showing which processes to automate first, based on impact and effort.',
  },
  {
    icon: TrendingUp,
    title: 'Competitive Positioning',
    description: 'Understand how AI can widen your advantage over competitors in your specific market.',
  },
  {
    icon: Users,
    title: 'Team Readiness Review',
    description: 'Identify skill gaps and adoption risks so your strategy lands — not just exists on paper.',
  },
];

export function AIStrategy() {
  const navigate = useNavigate();
  const [interviewDone, setInterviewDone] = useState(false);

  return (
    <div className="min-h-screen w-full" style={{ background: '#080C14' }}>
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 15% 0%, rgba(217,119,6,0.07) 0%, transparent 50%),
            radial-gradient(ellipse at 85% 100%, rgba(245,158,11,0.05) 0%, transparent 50%)
          `,
        }}
      />

      <nav
        className="relative z-20 flex items-center justify-between px-6 sm:px-10 h-16 border-b"
        style={{ borderColor: 'rgba(255,255,255,0.06)' }}
      >
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm font-medium transition-colors"
          style={{ color: '#64748B' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#CBD5E1')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#64748B')}
        >
          <ArrowLeft size={16} />
          Back
        </button>
        <LogoHorizontal size="sm" whiteMode={true} />
        <div style={{ width: 60 }} />
      </nav>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-6 tracking-widest uppercase"
            style={{ background: 'rgba(217,119,6,0.12)', color: '#F59E0B', border: '1px solid rgba(217,119,6,0.25)' }}
          >
            <Target size={12} />
            AI Strategy
          </div>
          <h1
            className="text-4xl sm:text-5xl font-black text-white mb-4"
            style={{ letterSpacing: '-0.03em', lineHeight: 1.1 }}
          >
            Find out exactly where<br />AI creates value for you
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#94A3B8' }}>
            A focused two-step process. An AI interview to understand your business, then a one-on-one call to build your roadmap.
          </p>
        </div>

        <div
          className="rounded-2xl p-6 sm:p-8 mb-12"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
        >
          <p
            className="text-xs font-bold tracking-widest uppercase mb-6"
            style={{ color: '#64748B' }}
          >
            How this works
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-0">
            <Step
              number={1}
              icon={MessageSquare}
              label="AI Interview"
              description="Answer questions about your business so we arrive at the call prepared."
              active={!interviewDone}
              done={interviewDone}
              color="#F59E0B"
            />
            <div className="hidden sm:flex flex-1 items-center justify-center px-4">
              <div
                className="h-px w-full"
                style={{
                  background: interviewDone
                    ? 'linear-gradient(90deg, #F59E0B, rgba(245,158,11,0.2))'
                    : 'rgba(255,255,255,0.08)',
                  transition: 'background 0.6s ease',
                }}
              />
              <ChevronRight size={16} style={{ color: interviewDone ? '#F59E0B' : '#334155', flexShrink: 0 }} />
            </div>
            <Step
              number={2}
              icon={Calendar}
              label="Book a Call"
              description="Pick a time. We review the interview together and build your strategy."
              active={interviewDone}
              done={false}
              locked={!interviewDone}
              color="#F59E0B"
            />
          </div>
        </div>

        <div className="mb-12">
          <p
            className="text-xs font-bold tracking-widest uppercase mb-6"
            style={{ color: '#64748B' }}
          >
            What the strategy includes
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whatIsIncluded.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-5 rounded-xl"
                  style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'rgba(217,119,6,0.12)', border: '1px solid rgba(217,119,6,0.2)' }}
                  >
                    <Icon size={16} style={{ color: '#F59E0B' }} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white mb-1">{item.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div
          id="step-1"
          className="rounded-2xl overflow-hidden mb-6"
          style={{ border: '1px solid rgba(217,119,6,0.25)' }}
        >
          <div
            className="flex items-center justify-between px-6 py-4"
            style={{ background: 'rgba(217,119,6,0.08)', borderBottom: '1px solid rgba(217,119,6,0.15)' }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-black"
                style={{ background: '#F59E0B', color: '#000' }}
              >
                1
              </div>
              <span className="text-sm font-bold text-white">AI Interview</span>
            </div>
            {interviewDone ? (
              <div className="flex items-center gap-1.5 text-xs font-bold" style={{ color: '#4ADE80' }}>
                <CheckCircle2 size={14} />
                Complete
              </div>
            ) : (
              <div
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold"
                style={{ background: 'rgba(8,145,178,0.15)', color: '#22D3EE', border: '1px solid rgba(8,145,178,0.3)' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Start here
              </div>
            )}
          </div>

          <div className="relative" style={{ height: 560, background: '#0c0f18' }}>
            <iframe
              src="https://app.relevanceai.com/agents/d7b62b/6ef140e56d41-4e20-bc3e-a953387246ab/96d09d11-a232-4c57-b6fd-11f8ba878c01/share?hide_tool_steps=false&hide_file_uploads=false&hide_conversation_list=false&bubble_style=agent&primary_color=%23685FFF&bubble_icon=pd%2Fchat&input_placeholder_text=Type+your+message...&hide_logo=false&hide_description=false"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="microphone"
              title="AI Strategy Interview"
              style={{ display: 'block' }}
            />
          </div>

          {!interviewDone && (
            <div
              className="flex items-center justify-between px-6 py-4"
              style={{ background: 'rgba(0,0,0,0.3)', borderTop: '1px solid rgba(255,255,255,0.05)' }}
            >
              <p className="text-xs" style={{ color: '#475569' }}>
                Complete the interview above, then mark it done to unlock your booking.
              </p>
              <button
                onClick={() => setInterviewDone(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all"
                style={{
                  background: 'rgba(245,158,11,0.15)',
                  color: '#F59E0B',
                  border: '1px solid rgba(245,158,11,0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(245,158,11,0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(245,158,11,0.15)';
                }}
              >
                <CheckCircle2 size={15} />
                Interview complete
              </button>
            </div>
          )}
        </div>

        <div
          id="step-2"
          className="rounded-2xl overflow-hidden transition-all duration-500"
          style={{
            border: interviewDone ? '1px solid rgba(245,158,11,0.25)' : '1px solid rgba(255,255,255,0.06)',
            opacity: interviewDone ? 1 : 0.45,
          }}
        >
          <div
            className="flex items-center justify-between px-6 py-4"
            style={{
              background: interviewDone ? 'rgba(217,119,6,0.08)' : 'rgba(255,255,255,0.02)',
              borderBottom: `1px solid ${interviewDone ? 'rgba(217,119,6,0.15)' : 'rgba(255,255,255,0.05)'}`,
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-black transition-all duration-500"
                style={{
                  background: interviewDone ? '#F59E0B' : 'rgba(255,255,255,0.08)',
                  color: interviewDone ? '#000' : '#475569',
                }}
              >
                {interviewDone ? '2' : <Lock size={12} />}
              </div>
              <span className="text-sm font-bold" style={{ color: interviewDone ? 'white' : '#475569' }}>
                Book a Call
              </span>
            </div>
            {!interviewDone && (
              <span className="text-xs font-semibold" style={{ color: '#334155' }}>
                Unlocks after interview
              </span>
            )}
          </div>

          <div
            className="p-8 sm:p-10 text-center"
            style={{ background: interviewDone ? 'rgba(217,119,6,0.04)' : 'rgba(0,0,0,0.2)' }}
          >
            {interviewDone ? (
              <>
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ background: 'rgba(217,119,6,0.15)', border: '1px solid rgba(217,119,6,0.3)' }}
                >
                  <Calendar size={26} style={{ color: '#F59E0B' }} />
                </div>
                <h3 className="text-xl font-black text-white mb-2" style={{ letterSpacing: '-0.02em' }}>
                  You're ready to book
                </h3>
                <p className="text-sm mb-8 max-w-sm mx-auto" style={{ color: '#64748B' }}>
                  Pick a time that works for you. We'll review what the interview captured and build your personalised AI strategy together.
                </p>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-sm transition-all"
                  style={{
                    background: 'linear-gradient(135deg, #D97706 0%, #F59E0B 100%)',
                    color: '#000',
                    boxShadow: '0 8px 24px -4px rgba(217,119,6,0.4)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 12px 32px -4px rgba(217,119,6,0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 24px -4px rgba(217,119,6,0.4)';
                  }}
                >
                  <Calendar size={17} />
                  Book Your Strategy Call
                  <ChevronRight size={16} />
                </a>
              </>
            ) : (
              <div className="py-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <Lock size={22} style={{ color: '#334155' }} />
                </div>
                <p className="text-sm font-semibold" style={{ color: '#334155' }}>
                  Complete the AI interview above to unlock booking
                </p>
              </div>
            )}
          </div>
        </div>

      </div>

      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

function Step({ number, icon: Icon, label, description, active, done, locked, color }) {
  return (
    <div className="flex items-start gap-3 flex-1">
      <div
        className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-400"
        style={{
          background: done ? '#4ADE80' : active ? color : 'rgba(255,255,255,0.06)',
          border: `2px solid ${done ? '#4ADE80' : active ? color : 'rgba(255,255,255,0.1)'}`,
        }}
      >
        {done ? (
          <CheckCircle2 size={16} style={{ color: '#000' }} />
        ) : locked ? (
          <Lock size={14} style={{ color: '#334155' }} />
        ) : (
          <Icon size={15} style={{ color: active ? '#000' : '#475569' }} />
        )}
      </div>
      <div>
        <p
          className="text-sm font-bold mb-0.5"
          style={{ color: active || done ? 'white' : '#475569' }}
        >
          Step {number} — {label}
        </p>
        <p className="text-xs leading-relaxed" style={{ color: '#475569' }}>
          {description}
        </p>
      </div>
    </div>
  );
}
