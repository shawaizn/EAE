import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Navbar } from './Navbar';
import { eduTheme as theme } from '../../styles/theme';

// Learning platform page frame: top bar, then the page. Every page except
// the dashboard gets a "Dashboard" link, which is how students get around
// (like Codecademy's home), so there is no sidebar.
// `bare` pages (lessons) draw their own frame below the top bar.
export function Layout({ children, backToDashboard = true, bare = false }) {
  const c = theme.colors;
  return (
    <div className="min-h-screen flex flex-col" style={{ background: c.background.subtle }}>
      <Navbar />
      {!bare && backToDashboard && (
        <div className="border-b bg-white" style={{ borderColor: c.border.subtle }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 h-11 flex items-center">
            <Link to="/hub" className="inline-flex items-center gap-1 text-sm font-semibold hover:opacity-70" style={{ color: c.text.primary }}>
              <ChevronLeft size={16} /> Dashboard
            </Link>
          </div>
        </div>
      )}
      <main className="flex-1 min-w-0">{children}</main>
    </div>
  );
}
