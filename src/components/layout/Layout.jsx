import { Navbar } from './Navbar';
import { MainSidebar } from './MainSidebar';
import { useSidebar } from '../../context/SidebarContext';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export function Layout({ children, user, onSignOut }) {
  const { sidebarOpen, setSidebarOpen } = useSidebar();
  const location = useLocation();

  // Only auto-open on desktop — on mobile it would crush the content column
  useEffect(() => {
    if (location.pathname === '/progress' && window.innerWidth >= 768) {
      setSidebarOpen(true);
    }
  }, [location.pathname, setSidebarOpen]);

  return (
    <div className="min-h-screen relative" style={{ background: '#faf8f5' }}>
      <Navbar user={user} />
      <div className="flex" style={{ minHeight: 'calc(100dvh - 4rem)' }}>

        {sidebarOpen && (
          <>
            {/* Backdrop — closes sidebar when tapped on mobile */}
            <div
              className="fixed inset-0 bg-black/30 z-30 md:hidden"
              onClick={() => setSidebarOpen(false)}
            />
            <aside
              className="bg-white border-r overflow-y-auto flex-shrink-0 fixed left-0 top-0 z-40 pt-16"
              style={{
                borderColor: '#e8dfd4',
                width: '16rem',
                height: '100dvh',
              }}
            >
              <MainSidebar
                user={user}
                onSignOut={onSignOut}
                onNavigate={() => {
                  if (window.innerWidth < 768) setSidebarOpen(false);
                }}
              />
            </aside>
          </>
        )}

        {/* Spacer only on desktop so content isn't crushed on mobile */}
        {sidebarOpen && <div className="hidden md:block flex-shrink-0" style={{ width: '16rem' }} />}

        {/* Main Content */}
        <main className="flex-1 min-w-0 relative">
          {children}
        </main>
      </div>
    </div>
  );
}
