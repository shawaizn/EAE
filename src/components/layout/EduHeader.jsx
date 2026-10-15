import { Link } from 'react-router-dom';
import { eduTheme as theme } from '../../styles/theme';
import { LogoHorizontal } from '../branding/Logo';

// Business site lives at /business on the same host as the app (/app).
const siteBase = (import.meta.env.VITE_BASENAME || '/EAE/app').replace(/\/app$/, '') + '/';

function SiteSwitch({ className }) {
  const c = theme.colors;
  return (
    <span className={`${className} p-[3px] rounded-full border`} style={{ borderColor: c.border.subtle, backgroundColor: '#F6F6F6' }} role="navigation" aria-label="Energise AI sites">
      <a href={`${siteBase}business/`} className="px-3 py-1.5 rounded-full text-xs font-semibold transition-colors hover:opacity-80" style={{ color: c.text.secondary }}>
        Business
      </a>
      <span aria-current="page" className="px-3 py-1.5 rounded-full text-xs font-semibold" style={{ backgroundColor: c.brand.fill, color: c.brand.onFill }}>
        Education
      </span>
    </span>
  );
}

// Header for the Energise AI Education pages: orange logo, optional section
// links, the Business | Education switch and Student login.
export function EduHeader({ links = [] }) {
  const c = theme.colors;
  return (
    <header className="sticky top-0 z-20 bg-white border-b" style={{ borderColor: c.border.subtle }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-3">
          <Link to="/ai-education-landing" aria-label="Energise AI Education home" className="flex-shrink-0">
            <LogoHorizontal size="sm" accent={c.brand.fill} accentText={c.accent.cyan} />
          </Link>
          <nav className="flex items-center gap-4 lg:gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hidden lg:inline text-sm font-medium transition-colors hover:opacity-70" style={{ color: c.text.primary }}>
                {l.label}
              </a>
            ))}
            <SiteSwitch className="hidden sm:inline-flex" />
            <Link
              to="/hub"
              className="px-3.5 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-colors"
              style={{ backgroundColor: c.text.primary, color: '#fff' }}
            >
              Student login
            </Link>
          </nav>
        </div>
        <div className="sm:hidden flex justify-center pb-2.5">
          <SiteSwitch className="inline-flex" />
        </div>
      </div>
    </header>
  );
}
