import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNotes } from '../hooks/useNotes';
import { NoteCategory } from '../components/notes/NoteCategory';
import { Clock, Sparkles, Heart, Target } from 'lucide-react';

const CATEGORIES = [
  {
    key: 'save_time',
    label: 'Save Time',
    icon: Clock,
    title: 'How can I save time with AI?',
    accent: { border: 'border-teal-400', bg: 'bg-teal-50', text: 'text-teal-700', button: 'bg-teal-600 hover:bg-teal-700', light: 'bg-teal-100', dot: 'bg-teal-500', ring: 'ring-teal-400', tabActive: 'bg-teal-600 text-white', tabHover: 'hover:bg-teal-50 hover:text-teal-700' },
    empty: 'Jot down ways AI helps you work faster.'
  },
  {
    key: 'higher_quality',
    label: 'Higher Quality',
    icon: Sparkles,
    title: 'How can I produce higher quality with AI?',
    accent: { border: 'border-blue-400', bg: 'bg-blue-50', text: 'text-blue-700', button: 'bg-blue-600 hover:bg-blue-700', light: 'bg-blue-100', dot: 'bg-blue-500', ring: 'ring-blue-400', tabActive: 'bg-blue-600 text-white', tabHover: 'hover:bg-blue-50 hover:text-blue-700' },
    empty: 'Note ideas for using AI to raise the bar on your work.'
  },
  {
    key: 'human_skills',
    label: 'Human Skills',
    icon: Heart,
    title: 'How can I develop human skills?',
    accent: { border: 'border-orange-400', bg: 'bg-orange-50', text: 'text-orange-700', button: 'bg-orange-600 hover:bg-orange-700', light: 'bg-orange-100', dot: 'bg-orange-500', ring: 'ring-orange-400', tabActive: 'bg-orange-600 text-white', tabHover: 'hover:bg-orange-50 hover:text-orange-700' },
    empty: 'Capture thoughts on the human skills AI can\'t replace.'
  },
  {
    key: 'goals',
    label: 'Goals',
    icon: Target,
    title: 'What are my goals?',
    accent: { border: 'border-emerald-400', bg: 'bg-emerald-50', text: 'text-emerald-700', button: 'bg-emerald-600 hover:bg-emerald-700', light: 'bg-emerald-100', dot: 'bg-emerald-500', ring: 'ring-emerald-400', tabActive: 'bg-emerald-600 text-white', tabHover: 'hover:bg-emerald-50 hover:text-emerald-700' },
    empty: 'Set goals for your AI learning journey.'
  }
];

export function NotesPage() {
  const { user } = useAuth();
  const { loading, addNote, updateNote, deleteNote, getNotesByCategory } = useNotes(user?.id);
  const [activeTab, setActiveTab] = useState('save_time');

  const activeCat = CATEGORIES.find(c => c.key === activeTab);

  if (loading) {
    return (
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-screen-xl mx-auto px-8 py-8">
          <div className="mb-10">
            <div className="h-12 w-48 bg-slate-200 rounded animate-pulse mb-3" />
            <div className="h-6 w-96 bg-slate-100 rounded animate-pulse" />
          </div>
          <div className="flex gap-2 mb-8">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="h-10 w-32 bg-slate-100 rounded-lg animate-pulse" />
            ))}
          </div>
          <div className="h-72 bg-slate-100 rounded-lg animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="max-w-screen-xl mx-auto px-8 py-8">
        <div className="mb-8">
          <h1 className="text-5xl font-black text-slate-900 mb-3" style={{ letterSpacing: '-0.02em' }}>
            Notes
          </h1>
          <p className="text-lg text-slate-600 font-medium">
            Capture your reflections and ideas as you learn
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map(cat => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.key;
            const count = getNotesByCategory(cat.key).length;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveTab(cat.key)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? `${cat.accent.tabActive} shadow-md scale-[1.02]`
                    : `text-slate-500 bg-white border border-slate-200 ${cat.accent.tabHover}`
                }`}
              >
                <Icon size={16} />
                <span>{cat.label}</span>
                {count > 0 && (
                  <span className={`ml-1 px-1.5 py-0.5 text-xs font-bold rounded-full leading-none ${
                    isActive ? 'bg-white/25' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div className="max-w-3xl">
          <NoteCategory
            key={activeCat.key}
            category={activeCat}
            notes={getNotesByCategory(activeCat.key)}
            onAdd={(content) => addNote(activeCat.key, content)}
            onUpdate={updateNote}
            onDelete={deleteNote}
          />
        </div>
      </div>
    </div>
  );
}
