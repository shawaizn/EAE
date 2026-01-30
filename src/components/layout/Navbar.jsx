import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useSidebar } from '../../context/SidebarContext';
import { LogoHorizontal } from '../branding/Logo';
import { theme } from '../../styles/theme';

export function Navbar({ user }) {
  const { sidebarOpen, setSidebarOpen } = useSidebar();

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-md border-b-2 sticky top-0 z-20 relative" style={{
      borderColor: theme.colors.border.subtle,
      boxShadow: theme.shadows.medium,
    }}>
      {/* Subtle energy gradient at bottom (lightning strike accent) */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{
        background: `linear-gradient(90deg, transparent, ${theme.colors.energy.sky}80, ${theme.colors.energy.sunrise}80, transparent)`,
      }} />

      <div className="max-w-7xl mx-auto px-8 relative">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-4">
            {user && (
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 rounded-md transition-all group relative border border-transparent"
                style={{
                  color: theme.colors.text.secondary,
                  transition: theme.transitions.fast,
                }}
                title={sidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = theme.colors.energy.sky;
                  e.currentTarget.style.borderColor = `${theme.colors.energy.sky}30`;
                  e.currentTarget.style.backgroundColor = `${theme.colors.energy.sky}10`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = theme.colors.text.secondary;
                  e.currentTarget.style.borderColor = 'transparent';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            )}
            <Link to={user ? '/dashboard' : '/'} className="flex items-center">
              <LogoHorizontal size="sm" />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://tally.so/r/2EPBje"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-md font-semibold text-sm relative group overflow-hidden border"
              style={{
                backgroundColor: theme.colors.background.subtle,
                color: theme.colors.text.secondary,
                borderColor: theme.colors.border.default,
                transition: theme.transitions.fast,
              }}
            >
              <span className="relative z-10">Feedback</span>
            </a>
            {!user && (
              <Link
                to="/login"
                className="px-5 py-2 rounded-md font-bold text-sm relative group overflow-hidden border"
                style={{
                  backgroundColor: theme.colors.energy.sky,
                  color: 'white',
                  borderColor: theme.colors.energy.sky,
                  boxShadow: `0 0 0 rgba(0, 184, 212, 0.3)`,
                  transition: theme.transitions.fast,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = theme.shadows.lightning.cyan;
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 0 rgba(0, 184, 212, 0.3)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span className="relative z-10">Login</span>
                {/* Lightning flash on hover */}
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-300" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
