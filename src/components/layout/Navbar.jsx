import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useSidebar } from '../../context/SidebarContext';
import { LogoHorizontal } from '../branding/Logo';

export function Navbar({ user }) {
  const { sidebarOpen, setSidebarOpen } = useSidebar();

  return (
    <nav className="bg-[#0a0e27] shadow-lg border-b border-cyan-400/30 sticky top-0 z-20 relative">
      {/* Scan-line effect */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, rgba(0, 184, 212, 0.1) 0px, transparent 1px, transparent 2px, rgba(0, 184, 212, 0.1) 3px)',
          }}
        />
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-8 relative">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-4">
            {user && (
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 hover:bg-slate-800/50 rounded-sm transition-all duration-200 text-slate-200 hover:text-cyan-400 border border-transparent hover:border-cyan-400/30 group relative"
                title={sidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
              >
                {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/10 rounded-sm transition-all duration-200" />
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
              className="px-5 py-2 bg-slate-800/80 text-slate-200 rounded-sm hover:bg-slate-700 transition-all duration-200 font-semibold border border-slate-700/50 hover:border-slate-600 text-sm tracking-wide relative group overflow-hidden"
            >
              <span className="relative z-10">FEEDBACK</span>
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </a>
            {!user && (
              <Link
                to="/login"
                className="px-5 py-2 bg-cyan-500 text-slate-900 rounded-sm hover:bg-cyan-400 transition-all duration-200 font-bold border border-cyan-400/50 hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-500/30 text-sm tracking-wide relative group overflow-hidden"
              >
                <span className="relative z-10">LOGIN</span>
                {/* Glitch effect on hover */}
                <div className="absolute inset-0 bg-cyan-300/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-300" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
