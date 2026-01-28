import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LogOut, User, ChevronRight, ChevronDown } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { modulesData } from '../../data/modulesData';

const tiers = [
  {
    id: 'beginner',
    name: 'Beginner',
    modules: [1, 2],
    color: {
      bg: 'bg-blue-50',
      activeBg: 'bg-blue-100',
      text: 'text-blue-700',
      hover: 'hover:bg-blue-100',
      border: 'border-l-blue-400'
    }
  },
  {
    id: 'intermediate',
    name: 'Intermediate',
    modules: [3, 4, 5],
    color: {
      bg: 'bg-amber-50',
      activeBg: 'bg-amber-100',
      text: 'text-amber-700',
      hover: 'hover:bg-amber-100',
      border: 'border-l-amber-400'
    }
  },
  {
    id: 'advanced',
    name: 'Advanced',
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
    navigate('/login');
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
      <nav className="p-6 space-y-1 flex-1 overflow-y-auto">
        <Link
          to="/dashboard"
          className={`block px-4 py-3 rounded-lg transition-colors ${
            isActive('/dashboard')
              ? 'bg-blue-100 text-blue-700 font-medium'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          Dashboard
        </Link>

        {tiers.map(tier => {
          const isExpanded = expandedTier === tier.id;
          const hasActiveModule = tier.modules.some(moduleId =>
            isActive(`/modules/${moduleId}`)
          );

          return (
            <div key={tier.id} className="space-y-1">
              <button
                onClick={() => toggleTier(tier.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                  hasActiveModule
                    ? `${tier.color.activeBg} ${tier.color.text} font-medium border-l-4 ${tier.color.border}`
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className="font-medium">{tier.name}</span>
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
                        className={`block px-4 py-2.5 rounded-lg transition-colors text-sm border-l-2 ${
                          isModuleActive
                            ? `${tier.color.activeBg} ${tier.color.text} font-medium ${tier.color.border}`
                            : `text-gray-600 hover:bg-gray-100 border-transparent`
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

        <Link
          to="/resources"
          className={`block px-4 py-3 rounded-lg transition-colors ${
            isActive('/resources')
              ? 'bg-blue-100 text-blue-700 font-medium'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          Resources
        </Link>
      </nav>

      {user && (
        <div className="border-t p-4 space-y-2">
          <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 rounded-lg">
            <User size={18} className="text-gray-600" />
            <span className="text-sm font-medium text-gray-700 truncate">{userName}</span>
          </div>
          <button
            onClick={handleSignOut}
            className="w-full flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-red-50 rounded-lg transition-colors text-sm"
          >
            <LogOut size={18} />
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}
