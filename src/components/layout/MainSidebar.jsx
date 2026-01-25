import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LogOut, User, ChevronDown, ChevronUp } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { modulesData } from '../../data/modulesData';

export function MainSidebar({ user, onSignOut }) {
  const [userName, setUserName] = useState('User');
  const [expandedModules, setExpandedModules] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetchUserName();
    }
  }, [user]);

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

  const toggleModule = (moduleId) => {
    setExpandedModules(prev => ({
      ...prev,
      [moduleId]: !prev[moduleId]
    }));
  };

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + '/');

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

        {modulesData.map(module => (
          <div key={module.id}>
            <div className="flex items-center">
              <Link
                to={`/modules/${module.id}`}
                className={`flex-1 px-4 py-3 rounded-lg transition-colors ${
                  isActive(`/modules/${module.id}`)
                    ? 'bg-blue-100 text-blue-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Module {module.id}
              </Link>
              <button
                onClick={() => toggleModule(module.id)}
                className="px-3 py-3 transition text-gray-600 hover:text-gray-900"
                title="Toggle lessons"
              >
                {expandedModules[module.id] ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>
            </div>

            {expandedModules[module.id] && (
              <div className="ml-4 space-y-1 mt-1">
                {module.lessons.map(lesson => (
                  <Link
                    key={lesson.id}
                    to={`/modules/${module.id}/lessons/${lesson.id}`}
                    className={`block px-4 py-2 rounded-lg text-sm transition-colors ${
                      isActive(`/modules/${module.id}/lessons/${lesson.id}`)
                        ? 'bg-blue-100 text-blue-700 font-medium'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    Lesson {lesson.id}
                  </Link>
                ))}
                <Link
                  to={`/modules/${module.id}/recap`}
                  className={`block px-4 py-2 rounded-lg text-sm transition-colors font-medium ${
                    isActive(`/modules/${module.id}/recap`)
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                >
                  Recap
                </Link>
              </div>
            )}
          </div>
        ))}

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