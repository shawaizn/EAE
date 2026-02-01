import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Menu, X, Check } from 'lucide-react';
import { CATEGORIES } from '../../lib/utils';

export function Sidebar({ lessonNumber, currentCategory, isComplete }) {
  const [isOpen, setIsOpen] = useState(false);
  const params = useParams();

  const toggleSidebar = () => setIsOpen(!isOpen);

  const SidebarContent = () => (
    <div className="p-6">
      <h3 className="text-lg font-bold mb-6 text-slate-900">Lesson {lessonNumber}</h3>
      <nav className="space-y-1">
        {CATEGORIES.map(category => {
          const categoryKey = category.id === 'practice-questions' ? 'practice_questions' : category.id;
          const isActive = currentCategory === category.id;
          const completed = isComplete(parseInt(lessonNumber), categoryKey);

          return (
            <Link
              key={category.id}
              to={`${category.path}/lesson/${lessonNumber}`}
              onClick={() => setIsOpen(false)}
              className={`flex items-center justify-between px-4 py-3 rounded-md transition-all duration-200 ${
                isActive
                  ? 'bg-cyan-50 text-cyan-700 font-medium shadow-sm'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <span>{category.label}</span>
              {completed && <Check size={18} className="text-green-600" />}
            </Link>
          );
        })}
      </nav>
    </div>
  );

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-20 left-4 z-50 p-2 bg-white rounded-lg shadow-lg"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}

      <aside
        className={`
          fixed lg:sticky top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-white border-r
          transform transition-transform duration-300 z-40
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <SidebarContent />
      </aside>
    </>
  );
}
