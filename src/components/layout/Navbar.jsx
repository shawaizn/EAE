import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useSidebar } from '../../context/SidebarContext';
import { LogoHorizontal } from '../branding/Logo';

export function Navbar({ user }) {
  const { sidebarOpen, setSidebarOpen } = useSidebar();

  return (
    <nav className="bg-white shadow-sm border-b-2 border-slate-200 sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-4">
            {user && (
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-900"
                title={sidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
              >
                {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            )}
            <Link to={user ? '/dashboard' : '/'} className="flex items-center">
              <LogoHorizontal size="sm" />
            </Link>
          </div>

          {!user && (
            <Link
              to="/login"
              className="px-6 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors font-semibold"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
