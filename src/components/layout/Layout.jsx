import { Navbar } from './Navbar';
import { MainSidebar } from './MainSidebar';
import { useSidebar } from '../../context/SidebarContext';

export function Layout({ children, user, onSignOut, hideDashboardHeader = false }) {
  const { sidebarOpen } = useSidebar();

  return (
    <div className="min-h-screen bg-white">
      {!hideDashboardHeader && <Navbar user={user} />}
      <div className={`flex ${!hideDashboardHeader ? 'pt-16' : ''}`}>
        {/* Sidebar */}
        {!hideDashboardHeader && sidebarOpen && (
          <aside className="w-64 bg-white border-r border-gray-300 h-[calc(100vh-4rem)] overflow-y-auto flex-shrink-0 fixed left-0 top-16 z-10">
            <MainSidebar user={user} onSignOut={onSignOut} />
          </aside>
        )}
        {!hideDashboardHeader && sidebarOpen && <div className="w-64 flex-shrink-0" />}

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          {children}
        </main>
      </div>
    </div>
  );
}