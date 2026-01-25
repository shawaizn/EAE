import { Link, useLocation } from 'react-router-dom';
import { CATEGORIES } from '../../lib/utils';

export function CategoryTabs() {
  const location = useLocation();
  const currentPath = location.pathname.split('/')[1];

  return (
    <div className="border-b bg-white sticky top-16 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex gap-8 overflow-x-auto">
          {CATEGORIES.map(category => {
            const isActive = `/${currentPath}` === category.path;
            return (
              <Link
                key={category.id}
                to={category.path}
                className={`py-4 px-2 border-b-2 whitespace-nowrap ${
                  isActive
                    ? 'border-blue-600 text-blue-600 font-medium'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {category.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
