import { Navbar } from './Navbar';
import { MainSidebar } from './MainSidebar';
import { useSidebar } from '../../context/SidebarContext';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { StaticGradientBackground } from '../branding/StaticGradientBackground';

export function Layout({ children, user, onSignOut }) {
  const { sidebarOpen, setSidebarOpen } = useSidebar();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/dashboard') {
      setSidebarOpen(true);
    }
  }, [location.pathname, setSidebarOpen]);

  return (
    <div className="min-h-screen relative">
      {/* Static gradient background for all pages */}
      <StaticGradientBackground />

      <Navbar user={user} />
      <div className="flex h-[calc(100vh-4rem)]">
        {sidebarOpen && (
          <aside className="w-64 bg-white/98 backdrop-blur-md border-r border-slate-100 h-screen overflow-y-auto flex-shrink-0 fixed left-0 top-0 z-10 pt-16 shadow-md">
            <MainSidebar user={user} onSignOut={onSignOut} />
          </aside>
        )}
        {sidebarOpen && <div className="w-64 flex-shrink-0" />}

        {/* Main Content */}
        <main className="flex-1 min-w-0 relative">
          {children}
        </main>
      </div>
    </div>
  );
}