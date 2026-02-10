import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LogOut, User, ChevronRight, ChevronDown } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { modulesData } from '../../data/modulesData';
import { lang } from '../../styles/theme';

const tiers = [
  {
    id: 'beginner',
    modules: [1, 2],
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
    color: {
      bg: 'bg-slate-50',
      activeBg: 'bg-slate-100',
      text: 'text-slate-700',
      hover: 'hover:bg-slate-100',
      border: 'border-l-slate-400'
    }
  }
];

export function MainSidebar({ user, onSignOut }) {
  const [userName, setUserName] = useState('User');
  const [expandedTier, setExpandedTier] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetchUserName();
    }
  }, [user]);

  // Auto-expand tier containing current module
  useEffect(() => {
    const currentPath = location.pathname;
    const moduleMatch = currentPath.match(/\/modules\/(\d+)/);
    if (moduleMatch) {
      const currentModuleId = parseInt(moduleMatch[1]);
      const tierWithModule = tiers.find(tier => tier.modules.includes(currentModuleId));
      if (tierWithModule && expandedTier !== tierWithModule.id) {
        setExpandedTier(tierWithModule.id);
      }
    }
  }, [location.pathname]);

  const fetchUserName = async () => {
    const { data } = await supabase
      .from('profiles')
      .select('full_name')
      .eq('id', user.id)
      .maybeSingle();
    if (data?.full_name) {
      setUserName(data.full_name);
    }
  };

  const handleSignOut = async () => {
    await onSignOut();
    navigate('/');
  };

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
      <nav className="p-6 space-y-2 flex-1 overflow-y-auto">
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

        <div className="pt-2 pb-1">
          <p className="px-4 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">Curriculum</p>
        </div>

        {tiers.map(tier => {
          const tierLabel = lang.tierLabels[tier.id] || tier.id;
          const isExpanded = expandedTier === tier.id;
          const hasActiveModule = tier.modules.some(moduleId =>
            isActive(`/modules/${moduleId}`)
          );

          return (
            <div key={tier.id} className="space-y-1">
              <button
                onClick={() => toggleTier(tier.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors font-semibold ${
                  hasActiveModule
                    ? `${tier.color.activeBg} ${tier.color.text} border-l-4 ${tier.color.border}`
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <span>{tierLabel}</span>
                {isExpanded ? (
                  <ChevronDown size={18} />
                ) : (
                  <ChevronRight size={18} />
                )}
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

        <div className="pt-4 pb-1">
          <p className="px-4 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">Resources</p>
        </div>

        <Link
          to="/notes"
          className={`block px-4 py-3 rounded-lg transition-colors font-semibold text-sm ${
            isActive('/notes')
              ? 'bg-slate-900 text-white'
              : 'text-slate-700 hover:bg-slate-100'
          }`}
        >
          Notes
        </Link>

        <Link
          to="/prompts"
          className={`block px-4 py-3 rounded-lg transition-colors font-semibold text-sm ${
            isActive('/prompts')
              ? 'bg-slate-900 text-white'
              : 'text-slate-700 hover:bg-slate-100'
          }`}
        >
          Prompt Vault
        </Link>

        <Link
          to="/resources"
          className={`block px-4 py-3 rounded-lg transition-colors font-semibold text-sm ${
            isActive('/resources')
              ? 'bg-slate-900 text-white'
              : 'text-slate-700 hover:bg-slate-100'
          }`}
        >
          Resources
        </Link>

        <Link
          to="/certificate"
          className={`block px-4 py-3 rounded-lg transition-colors font-semibold text-sm ${
            isActive('/certificate')
              ? 'bg-slate-900 text-white'
              : 'text-slate-700 hover:bg-slate-100'
          }`}
        >
          Certificate
        </Link>
      </nav>

      {user && (
        <div className="border-t-2 border-slate-200 p-4 space-y-2">
          <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 rounded-lg">
            <User size={18} className="text-slate-600" />
            <span className="text-sm font-semibold text-slate-700 truncate">{userName}</span>
          </div>
          <button
            onClick={handleSignOut}
            className="w-full flex items-center gap-2 px-4 py-2 text-slate-700 hover:bg-red-50 rounded-lg transition-colors text-sm font-medium"
          >
            <LogOut size={18} />
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}
