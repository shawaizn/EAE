import { Navbar } from './Navbar';
import { MainSidebar } from './MainSidebar';
import { useSidebar } from '../../context/SidebarContext';
import { useLocation, useEffect } from 'react';

export function Layout({ children, user, onSignOut }) {
  const { sidebarOpen, setSidebarOpen } = useSidebar();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/dashboard') {
      setSidebarOpen(true);
    }
  }, [location.pathname, setSidebarOpen]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar user={user} />
      <div className="flex pt-16 h-[calc(100vh-4rem)]">
        {/* Sidebar */}
        {sidebarOpen && (
          <aside className="w-64 bg-white border-r border-gray-300 h-[calc(100vh-4rem)] overflow-y-auto flex-shrink-0 fixed left-0 top-16 z-10">
            <MainSidebar user={user} onSignOut={onSignOut} />
          </aside>
        )}
        {sidebarOpen && <div className="w-64 flex-shrink-0" />}

        {/* Main Content */}
        <main className="flex-1 min-w-0 bg-white">
          {children}
        </main>
      </div>
    </div>
  );
}