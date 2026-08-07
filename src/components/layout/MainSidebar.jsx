import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, ChevronDown, Lock } from 'lucide-react';
import { modulesData } from '../../data/modulesData';
import { lang } from '../../styles/theme';

const tiers = [
  {
    id: 'beginner',
    modules: [1, 2],
    locked: false,
    color: {
      bg: 'bg-cyan-50',
      activeBg: 'bg-cyan-100',
      text: 'text-cyan-700',
      hover: 'hover:bg-cyan-100',
      border: 'border-l-cyan-600'
    }
  },
  {
    id: 'intermediate',
    modules: [3, 4, 5],
    locked: true,
    color: {
      bg: 'bg-slate-100',
      activeBg: 'bg-slate-200',
      text: 'text-slate-900',
      hover: 'hover:bg-slate-200',
      border: 'border-l-slate-900'
    }
  },
  {
    id: 'advanced',
    modules: [6, 7, 8],
    locked: true,
    color: {
      bg: 'bg-slate-50',
      activeBg: 'bg-slate-100',
      text: 'text-slate-700',
      hover: 'hover:bg-slate-100',
      border: 'border-l-slate-400'
    }
  }
];

export function MainSidebar({ user }) {
  const [expandedTier, setExpandedTier] = useState(null);
  const location = useLocation();

  // Auto-expand tier containing current module
  useEffect(() => {
    const moduleMatch = location.pathname.match(/\/modules\/(\d+)/);
    if (moduleMatch) {
      const currentModuleId = parseInt(moduleMatch[1]);
      const tierWithModule = tiers.find(tier => tier.modules.includes(currentModuleId));
      if (tierWithModule && expandedTier !== tierWithModule.id) {
        setExpandedTier(tierWithModule.id);
      }
    }
  }, [location.pathname]);

  const toggleTier = (tierId) => {
    setExpandedTier(prev => prev === tierId ? null : tierId);
  };

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + '/');

  const shortenTitle = (title, maxLength = 30) => {
    if (title.length <= maxLength) return title;
    return title.substring(0, maxLength - 3) + '...';
  };

  return (
    <div className="flex flex-col h-full">
      <nav className="p-4 space-y-1 flex-1 overflow-y-auto">

        {/* Progress */}
        <Link
          to="/progress"
          className={`block px-4 py-3 rounded-lg transition-colors font-semibold text-sm ${
            isActive('/progress')
              ? 'bg-slate-900 text-white'
              : 'text-slate-700 hover:bg-slate-100'
          }`}
        >
          Progress
        </Link>

        {/* Curriculum heading */}
        <div className="pt-4 pb-1 flex items-center gap-3 px-4">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">Curriculum</span>
          <div className="flex-1 h-px bg-slate-200" />
        </div>

        {tiers.map(tier => {
          const tierLabel = lang.tierLabels[tier.id] || tier.id;
          const isExpanded = expandedTier === tier.id;
          const hasActiveModule = tier.modules.some(moduleId => isActive(`/modules/${moduleId}`));

          return (
            <div key={tier.id} className="space-y-1">
              <button
                onClick={() => toggleTier(tier.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors font-semibold text-sm ${
                  hasActiveModule
                    ? `${tier.color.activeBg} ${tier.color.text} border-l-4 ${tier.color.border}`
                    : tier.locked
                      ? 'text-slate-400 hover:bg-slate-50'
                      : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <span className="flex items-center gap-2">
                  {tier.locked && <Lock size={13} className="flex-shrink-0" />}
                  {tierLabel}
                </span>
                {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </button>

              {isExpanded && (
                <div className="ml-2 space-y-1">
                  {tier.modules.map(moduleId => {
                    const module = modulesData.find(m => m.id === moduleId);
                    if (!module) return null;
                    const isModuleActive = isActive(`/modules/${moduleId}`);

                    return (
                      <Link
                        key={moduleId}
                        to={`/modules/${moduleId}`}
                        className={`block px-4 py-2.5 rounded-lg transition-colors text-sm border-l-2 font-medium ${
                          isModuleActive
                            ? `${tier.color.activeBg} ${tier.color.text} ${tier.color.border}`
                            : `${tier.color.bg} text-slate-600 ${tier.color.hover} ${tier.color.border}`
                        }`}
                      >
                        {shortenTitle(module.title)}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}

        {/* Resources heading */}
        <div className="pt-4 pb-1 flex items-center gap-3 px-4">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">Resources</span>
          <div className="flex-1 h-px bg-slate-200" />
        </div>

        <Link
          to="/notes"
          className={`block px-4 py-3 rounded-lg transition-colors font-semibold text-sm ${
            isActive('/notes') ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100'
          }`}
        >
          Notes
        </Link>

        <Link
          to="/prompts"
          className={`block px-4 py-3 rounded-lg transition-colors font-semibold text-sm ${
            isActive('/prompts') ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100'
          }`}
        >
          Prompt Vault
        </Link>

        <Link
          to="/resources"
          className={`block px-4 py-3 rounded-lg transition-colors font-semibold text-sm ${
            isActive('/resources') ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100'
          }`}
        >
          Resources
        </Link>

        <Link
          to="/certificate"
          className={`block px-4 py-3 rounded-lg transition-colors font-semibold text-sm ${
            isActive('/certificate') ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100'
          }`}
        >
          Certificate
        </Link>

      </nav>
    </div>
  );
}
