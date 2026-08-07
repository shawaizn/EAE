import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Target, MessageSquare, Calendar, ChevronRight, Lock, CheckCircle2, ArrowLeft, Lightbulb, Map, TrendingUp, Users } from 'lucide-react';

const BOOKING_URL = 'https://calendly.com/shawaiznaeem-104/intro-call';

const AMBER = '#c17f3a';
const AMBER_LIGHT = 'rgba(193,127,58,0.1)';
const AMBER_BORDER = 'rgba(193,127,58,0.25)';

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
    <div style={{ minHeight: '100vh', background: '#faf8f5' }}>

      {/* Nav */}
      <nav style={{
        background: 'rgba(250,248,245,0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(193,127,58,0.15)',
        position: 'sticky',
        top: 0,
        zIndex: 20,
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
          <button
            onClick={() => navigate(-1)}
            style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.875rem', fontWeight: 600, color: '#6b5c4e', background: 'none', border: 'none', cursor: 'pointer' }}
            onMouseEnter={e => e.currentTarget.style.color = AMBER}
            onMouseLeave={e => e.currentTarget.style.color = '#6b5c4e'}
          >
            <ArrowLeft size={16} /> Back
          </button>
          <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.35rem', fontWeight: 700, color: '#1a1612', letterSpacing: '-0.01em' }}>
            Energise <span style={{ color: AMBER }}>AI</span>
          </span>
          <div style={{ width: 60 }} />
        </div>
      </nav>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            padding: '4px 14px', borderRadius: '20px', marginBottom: '1.25rem',
            background: AMBER_LIGHT, border: `1px solid ${AMBER_BORDER}`,
            fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: AMBER,
          }}>
            <Target size={12} /> AI Consulting
          </div>
          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700,
            color: '#1a1612',
            letterSpacing: '-0.02em',
            lineHeight: 1.15,
            marginBottom: '1rem',
          }}>
            Find out exactly where<br />AI creates value for you
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#6b5c4e', maxWidth: '480px', margin: '0 auto', lineHeight: 1.65 }}>
            A focused two-step process. An AI interview to understand your business, then a one-on-one call to build your roadmap.
          </p>
        </div>

        {/* How it works */}
        <div style={{
          borderRadius: '12px', padding: '1.75rem 2rem', marginBottom: '2.5rem',
          background: '#ffffff', border: `1px solid #e8dfd4`,
        }}>
          <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#9a8a7a', marginBottom: '1.5rem' }}>
            How this works
          </p>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 0 }} className="flex-col sm:flex-row">
            <Step
              number={1}
              icon={MessageSquare}
              label="AI Interview"
              description="Answer questions about your business so we arrive at the call prepared."
              active={!interviewDone}
              done={interviewDone}
            />
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', padding: '0 1rem' }}>
              <div style={{
                height: '1px', flex: 1,
                background: interviewDone ? `linear-gradient(90deg, ${AMBER}, rgba(193,127,58,0.2))` : '#e8dfd4',
                transition: 'background 0.6s ease',
              }} />
              <ChevronRight size={16} style={{ color: interviewDone ? AMBER : '#d4c4b0', flexShrink: 0 }} />
            </div>
            <Step
              number={2}
              icon={Calendar}
              label="Book a Call"
              description="Pick a time. We review the interview together and build your strategy."
              active={interviewDone}
              done={false}
              locked={!interviewDone}
            />
          </div>
        </div>

        {/* What's included */}
        <div style={{ marginBottom: '2.5rem' }}>
          <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#9a8a7a', marginBottom: '1.25rem' }}>
            What the strategy includes
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
            {whatIsIncluded.map(item => {
              const Icon = item.icon;
              return (
                <div key={item.title} style={{
                  display: 'flex', alignItems: 'flex-start', gap: '1rem',
                  padding: '1.25rem', borderRadius: '10px',
                  background: '#ffffff', border: '1px solid #e8dfd4',
                }}>
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '8px', flexShrink: 0,
                    background: AMBER_LIGHT, border: `1px solid ${AMBER_BORDER}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={16} style={{ color: AMBER }} />
                  </div>
                  <div>
                    <p style={{ fontSize: '0.875rem', fontWeight: 700, color: '#1a1612', marginBottom: '0.25rem' }}>{item.title}</p>
                    <p style={{ fontSize: '0.825rem', color: '#6b5c4e', lineHeight: 1.6 }}>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step 1: Interview */}
        <div style={{
          borderRadius: '12px', overflow: 'hidden', marginBottom: '1.25rem',
          border: `1px solid ${AMBER_BORDER}`,
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '0.875rem 1.5rem',
            background: AMBER_LIGHT, borderBottom: `1px solid ${AMBER_BORDER}`,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: AMBER, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 800, color: 'white' }}>
                1
              </div>
              <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#1a1612' }}>AI Interview</span>
            </div>
            {interviewDone ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.75rem', fontWeight: 700, color: '#059669' }}>
                <CheckCircle2 size={14} /> Complete
              </div>
            ) : (
              <div style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                padding: '3px 10px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: 700,
                background: AMBER_LIGHT, color: AMBER, border: `1px solid ${AMBER_BORDER}`,
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: AMBER, animation: 'pulse 2s infinite' }} />
                Start here
              </div>
            )}
          </div>

          <div style={{ height: '560px', background: '#f4efe8' }}>
            <iframe
              src="https://app.relevanceai.com/agents/d7b62b/6ef140e56d41-4e20-bc3e-a953387246ab/96d09d11-a232-4c57-b6fd-11f8ba878c01/share?hide_tool_steps=false&hide_file_uploads=false&hide_conversation_list=false&bubble_style=agent&primary_color=%23c17f3a&bubble_icon=pd%2Fchat&input_placeholder_text=Type+your+message...&hide_logo=false&hide_description=false"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="microphone"
              title="AI Strategy Interview"
              style={{ display: 'block' }}
            />
          </div>

          {!interviewDone && (
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '0.875rem 1.5rem',
              background: '#faf8f5', borderTop: '1px solid #e8dfd4',
            }}>
              <p style={{ fontSize: '0.8rem', color: '#9a8a7a' }}>
                Complete the interview above, then mark it done to unlock your booking.
              </p>
              <button
                onClick={() => setInterviewDone(true)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '6px',
                  padding: '7px 16px', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer',
                  background: AMBER_LIGHT, color: AMBER, border: `1px solid ${AMBER_BORDER}`,
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(193,127,58,0.18)'}
                onMouseLeave={e => e.currentTarget.style.background = AMBER_LIGHT}
              >
                <CheckCircle2 size={14} /> Interview complete
              </button>
            </div>
          )}
        </div>

        {/* Step 2: Book */}
        <div style={{
          borderRadius: '12px', overflow: 'hidden',
          border: interviewDone ? `1px solid ${AMBER_BORDER}` : '1px solid #e8dfd4',
          opacity: interviewDone ? 1 : 0.5,
          transition: 'opacity 0.4s ease, border-color 0.4s ease',
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '0.875rem 1.5rem',
            background: interviewDone ? AMBER_LIGHT : '#f4efe8',
            borderBottom: `1px solid ${interviewDone ? AMBER_BORDER : '#e8dfd4'}`,
            transition: 'background 0.4s ease',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: interviewDone ? AMBER : '#e8dfd4',
                fontSize: '0.75rem', fontWeight: 800, color: interviewDone ? 'white' : '#b0a090',
                transition: 'background 0.4s ease',
              }}>
                {interviewDone ? '2' : <Lock size={12} />}
              </div>
              <span style={{ fontSize: '0.875rem', fontWeight: 700, color: interviewDone ? '#1a1612' : '#9a8a7a' }}>Book a Call</span>
            </div>
            {!interviewDone && (
              <span style={{ fontSize: '0.75rem', color: '#b0a090' }}>Unlocks after interview</span>
            )}
          </div>

          <div style={{
            padding: '2.5rem', textAlign: 'center',
            background: interviewDone ? 'rgba(193,127,58,0.03)' : '#f4efe8',
            transition: 'background 0.4s ease',
          }}>
            {interviewDone ? (
              <>
                <div style={{
                  width: '56px', height: '56px', borderRadius: '12px', margin: '0 auto 1.25rem',
                  background: AMBER_LIGHT, border: `1px solid ${AMBER_BORDER}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Calendar size={24} style={{ color: AMBER }} />
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.4rem', fontWeight: 700, color: '#1a1612', marginBottom: '0.5rem' }}>
                  You're ready to book
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#6b5c4e', maxWidth: '380px', margin: '0 auto 2rem', lineHeight: 1.65 }}>
                  Pick a time that works for you. We'll review what the interview captured and build your personalised AI strategy together.
                </p>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    padding: '0.875rem 2rem', borderRadius: '8px', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none',
                    background: AMBER, color: 'white',
                    transition: 'background 0.2s, transform 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#a66830'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = AMBER; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <Calendar size={17} /> Book Your Strategy Call <ChevronRight size={16} />
                </a>
              </>
            ) : (
              <div style={{ padding: '1rem 0' }}>
                <div style={{
                  width: '56px', height: '56px', borderRadius: '12px', margin: '0 auto 1rem',
                  background: '#e8dfd4', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Lock size={22} style={{ color: '#b0a090' }} />
                </div>
                <p style={{ fontSize: '0.875rem', fontWeight: 600, color: '#b0a090' }}>
                  Complete the AI interview above to unlock booking
                </p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

function Step({ number, icon: Icon, label, description, active, done, locked }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', flex: 1 }}>
      <div style={{
        width: '36px', height: '36px', borderRadius: '50%', flexShrink: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: done ? '#059669' : active ? AMBER : '#e8dfd4',
        border: `2px solid ${done ? '#059669' : active ? AMBER : '#e8dfd4'}`,
        transition: 'all 0.4s ease',
      }}>
        {done ? (
          <CheckCircle2 size={16} style={{ color: 'white' }} />
        ) : locked ? (
          <Lock size={13} style={{ color: '#b0a090' }} />
        ) : (
          <Icon size={15} style={{ color: active ? 'white' : '#b0a090' }} />
        )}
      </div>
      <div>
        <p style={{ fontSize: '0.875rem', fontWeight: 700, marginBottom: '2px', color: active || done ? '#1a1612' : '#9a8a7a' }}>
          Step {number} — {label}
        </p>
        <p style={{ fontSize: '0.8rem', color: '#9a8a7a', lineHeight: 1.55 }}>
          {description}
        </p>
      </div>
    </div>
  );
}
