import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { BookOpen, Target, Cpu, Zap, Shield, ArrowRight } from 'lucide-react';

const SERVICES = [
  {
    id: 'education',
    title: 'AI Education',
    desc: 'Your structured learning path. 44 lessons across 8 modules of hands-on AI strategy.',
    icon: BookOpen,
    available: true,
    route: '/progress',
  },
  {
    id: 'strategy',
    title: 'AI Strategy',
    desc: 'Identify exactly where AI creates the most value in your business — before you spend a penny on implementation.',
    icon: Target,
    available: false,
  },
  {
    id: 'solutions',
    title: 'AI Solutions',
    desc: 'Custom implementation support and AI tooling built around your team\'s actual workflows.',
    icon: Cpu,
    available: false,
  },
  {
    id: 'security',
    title: 'AI Security',
    desc: 'Risk frameworks and compliance guidance for responsible AI deployment.',
    icon: Shield,
    available: false,
  },
  {
    id: 'skills',
    title: 'Irreplaceable Skills',
    desc: 'The human capabilities that grow more valuable as AI advances.',
    icon: Zap,
    available: false,
  },
];

export function HubPage() {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const firstName = user?.username
    ? user.username.charAt(0).toUpperCase() + user.username.slice(1)
    : '';

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
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
          <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.35rem', fontWeight: 700, color: '#1a1612', letterSpacing: '-0.01em' }}>
            Energise <span style={{ color: '#c17f3a' }}>AI</span>
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            {user?.email && (
              <span style={{ fontSize: '0.8rem', color: '#9a8a7a', display: 'none' }}
                className="sm:block"
              >{user.email}</span>
            )}
            <button
              onClick={handleSignOut}
              style={{ fontSize: '0.85rem', color: '#6b5c4e', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', padding: '4px 0' }}
              onMouseEnter={e => e.currentTarget.style.color = '#c17f3a'}
              onMouseLeave={e => e.currentTarget.style.color = '#6b5c4e'}
            >
              Sign out
            </button>
          </div>
        </div>
      </nav>

      {/* Main */}
      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: 700,
            color: '#1a1612',
            letterSpacing: '-0.02em',
            marginBottom: '0.4rem',
          }}>
            {firstName ? `Welcome back, ${firstName}.` : 'Welcome back.'}
          </h1>
          <p style={{ color: '#6b5c4e', fontSize: '1rem' }}>Choose where to continue.</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.25rem',
        }}>
          {SERVICES.map(service => {
            const Icon = service.icon;

            if (service.available) {
              return (
                <button
                  key={service.id}
                  onClick={() => navigate(service.route)}
                  style={{
                    textAlign: 'left',
                    background: '#ffffff',
                    border: '2px solid #c17f3a',
                    borderRadius: '12px',
                    padding: '1.75rem',
                    cursor: 'pointer',
                    transition: 'box-shadow 0.2s, transform 0.2s',
                    boxShadow: 'none',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(193,127,58,0.15)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(193,127,58,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={22} style={{ color: '#c17f3a' }} />
                    </div>
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#c17f3a', background: 'rgba(193,127,58,0.1)', padding: '3px 10px', borderRadius: '20px' }}>
                      Available
                    </span>
                  </div>
                  <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.3rem', fontWeight: 700, color: '#1a1612', marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>
                    {service.title}
                  </h2>
                  <p style={{ fontSize: '0.875rem', color: '#6b5c4e', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                    {service.desc}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#c17f3a', fontSize: '0.875rem', fontWeight: 600 }}>
                    Enter <ArrowRight size={15} />
                  </div>
                </button>
              );
            }

            return (
              <div
                key={service.id}
                style={{
                  textAlign: 'left',
                  background: '#f4efe8',
                  border: '2px solid #e8dfd4',
                  borderRadius: '12px',
                  padding: '1.75rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: '#e8dfd4', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={22} style={{ color: '#b0a090' }} />
                  </div>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#b0a090', background: '#e8dfd4', padding: '3px 10px', borderRadius: '20px' }}>
                    Coming Soon
                  </span>
                </div>
                <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.3rem', fontWeight: 700, color: '#b0a090', marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>
                  {service.title}
                </h2>
                <p style={{ fontSize: '0.875rem', color: '#b0a090', lineHeight: 1.65 }}>
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
