import { Menu, X } from 'lucide-react';
import { useSidebar } from '../../context/SidebarContext';

// Derive landing page base URL from the app basename so links work on any host
const landingBase = (import.meta.env.VITE_BASENAME || '/EAE/app').replace(/\/app$/, '') + '/';

export function Navbar({ user }) {
  const { sidebarOpen, setSidebarOpen } = useSidebar();

  return (
    <nav style={{
      background: 'rgba(250,248,245,0.92)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(193,127,58,0.15)',
      position: 'sticky',
      top: 0,
      zIndex: 50,
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>

          {/* Left: sidebar toggle + wordmark */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {user && (
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                aria-label={sidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#6b5c4e',
                  padding: '6px',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#c17f3a'}
                onMouseLeave={e => e.currentTarget.style.color = '#6b5c4e'}
              >
                {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            )}
            <a
              href={landingBase}
              style={{ textDecoration: 'none' }}
            >
              <span style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '1.35rem',
                fontWeight: 700,
                color: '#1a1612',
                letterSpacing: '-0.01em',
              }}>
                Energise <span style={{ color: '#c17f3a' }}>AI</span>
              </span>
            </a>
          </div>

          {/* Right: nav links — hidden on small screens to prevent overflow */}
          <div className="hidden md:flex" style={{ alignItems: 'center', gap: '24px' }}>
            <a
              href={`${landingBase}#services`}
              style={{ fontSize: '0.9rem', color: '#4a3f35', textDecoration: 'none', fontWeight: 500 }}
              onMouseEnter={e => e.currentTarget.style.color = '#c17f3a'}
              onMouseLeave={e => e.currentTarget.style.color = '#4a3f35'}
            >
              Services
            </a>
            <a
              href={`${landingBase}#why-us`}
              style={{ fontSize: '0.9rem', color: '#4a3f35', textDecoration: 'none', fontWeight: 500 }}
              onMouseEnter={e => e.currentTarget.style.color = '#c17f3a'}
              onMouseLeave={e => e.currentTarget.style.color = '#4a3f35'}
            >
              Why Us
            </a>
            <a
              href={`${landingBase}#pricing`}
              style={{ fontSize: '0.9rem', color: '#4a3f35', textDecoration: 'none', fontWeight: 500 }}
              onMouseEnter={e => e.currentTarget.style.color = '#c17f3a'}
              onMouseLeave={e => e.currentTarget.style.color = '#4a3f35'}
            >
              Pricing
            </a>
            <a
              href={`${landingBase}#contact`}
              style={{
                fontSize: '0.88rem',
                fontWeight: 700,
                color: '#faf8f5',
                background: '#c17f3a',
                border: '2px solid #c17f3a',
                borderRadius: '6px',
                padding: '7px 18px',
                textDecoration: 'none',
                transition: 'background 0.2s, color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#a66830'; e.currentTarget.style.borderColor = '#a66830'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#c17f3a'; e.currentTarget.style.borderColor = '#c17f3a'; }}
            >
              Contact
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
}
