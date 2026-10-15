import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useSidebar } from '../../context/SidebarContext';
import { useAuth } from '../../hooks/useAuth';
import { eduTheme as theme } from '../../styles/theme';
import { LogoHorizontal } from '../branding/Logo';

// Learning platform top bar: just the Energise AI Education logo and the
// log in / log out button (plus the sidebar toggle once signed in).
export function Navbar({ showSidebarToggle = true }) {
  const { sidebarOpen, setSidebarOpen } = useSidebar();
  // Read the session here: App's copy of `user` can be stale right after login
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const c = theme.colors;

  const handleSignOut = async () => {
    await signOut();
    setSidebarOpen(false);
    // Full reload so every page drops the old session straight away
    window.location.assign(`${import.meta.env.VITE_BASENAME || '/EAE/app'}/login`);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b" style={{ borderColor: c.border.subtle }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 gap-3">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            {user && showSidebarToggle && (
              <button
                type="button"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                aria-label={sidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
                className="p-1.5 rounded-md transition-colors hover:bg-orange-50"
                style={{ color: c.text.secondary }}
              >
                {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            )}
            <Link to="/ai-education-landing" aria-label="Energise AI Education home" className="flex-shrink-0">
              <LogoHorizontal size="sm" accent={c.brand.fill} accentText={c.accent.cyan} />
            </Link>
          </div>

          {user ? (
            <button
              type="button"
              onClick={handleSignOut}
              className="px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap border transition-colors hover:bg-neutral-50"
              style={{ borderColor: c.border.default, color: c.text.primary }}
            >
              Log out
            </button>
          ) : pathname !== '/login' && (
            <button
              type="button"
              onClick={() => navigate('/login')}
              className="px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap"
              style={{ backgroundColor: c.brand.fill, color: c.brand.onFill }}
            >
              Log in
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
