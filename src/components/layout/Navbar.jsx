import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useSidebar } from '../../context/SidebarContext';
import { LogoHorizontal } from '../branding/Logo';
import { theme } from '../../styles/theme';

export function Navbar({ user }) {
  const { sidebarOpen, setSidebarOpen } = useSidebar();

  return (
    <nav className="bg-white/98 backdrop-blur-md shadow-lg border-b border-slate-100 sticky top-0 z-20 relative" style={{
      boxShadow: theme.shadows.medium,
    }}>
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{
        background: `linear-gradient(90deg, transparent, ${theme.colors.accent.cyan}60, ${theme.colors.accent.coral}60, transparent)`,
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-16 sm:h-18">
          <div className="flex items-center gap-2 sm:gap-4 min-w-0">
            {user && (
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 rounded-md transition-all group relative border border-transparent flex-shrink-0 min-h-10 min-w-10 flex items-center justify-center"
                style={{
                  color: theme.colors.text.secondary,
                  transition: theme.transitions.fast,
                }}
                title={sidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = theme.colors.accent.cyan;
                  e.currentTarget.style.borderColor = `${theme.colors.accent.cyan}30`;
                  e.currentTarget.style.backgroundColor = `${theme.colors.accent.cyan}10`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = theme.colors.text.secondary;
                  e.currentTarget.style.borderColor = 'transparent';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {sidebarOpen ? <X size={18} className="sm:w-5 sm:h-5" /> : <Menu size={18} className="sm:w-5 sm:h-5" />}
              </button>
            )}
            <Link to={user ? '/dashboard' : '/'} className="flex items-center flex-shrink-0">
              <LogoHorizontal size="sm" />
            </Link>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <a
              href="https://tally.so/r/2EPBje"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 sm:px-5 py-2 rounded-md font-semibold text-xs sm:text-sm relative group overflow-hidden border min-h-10 flex items-center"
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
                className="px-3 sm:px-5 py-2 rounded-md font-bold text-xs sm:text-sm relative group overflow-hidden border min-h-10 flex items-center"
                style={{
                  backgroundColor: theme.colors.accent.cyan,
                  color: 'white',
                  borderColor: theme.colors.accent.cyan,
                  boxShadow: `0 0 0 rgba(6, 182, 212, 0.3)`,
                  transition: theme.transitions.fast,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = theme.shadows.glow.cyan;
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 0 rgba(6, 182, 212, 0.3)';
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
