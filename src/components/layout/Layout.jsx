import { Navbar } from './Navbar';
import { MainSidebar } from './MainSidebar';
import { useSidebar } from '../../context/SidebarContext';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export function Layout({ children, user, onSignOut }) {
  const { sidebarOpen, setSidebarOpen } = useSidebar();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/progress') {
      setSidebarOpen(true);
    }
  }, [location.pathname, setSidebarOpen]);

  return (
    <div className="min-h-screen relative" style={{ background: '#faf8f5' }}>

      <Navbar user={user} />
      <div className="flex h-[calc(100vh-4rem)]">
        {sidebarOpen && (
          <aside className="w-64 bg-white border-r h-screen overflow-y-auto flex-shrink-0 fixed left-0 top-0 z-10 pt-16" style={{ borderColor: '#e8dfd4' }}>
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