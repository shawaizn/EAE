import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNotes } from '../hooks/useNotes';
import { NoteCategory } from '../components/notes/NoteCategory';
import { Clock, Sparkles, Heart, Target, BookMarked } from 'lucide-react';
import { theme } from '../styles/theme';

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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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

  const totalNotes = CATEGORIES.reduce((sum, cat) => sum + getNotesByCategory(cat.key).length, 0);

  return (
    <div className="flex-1 overflow-y-auto" style={{ backgroundColor: theme.colors.background.base }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="space-y-8">
          <div className="rounded-2xl border-2 overflow-hidden" style={{
            backgroundColor: theme.colors.background.card,
            borderColor: theme.colors.accent.cyan,
          }}>
            <div className="relative p-8 lg:p-12">
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `linear-gradient(135deg, ${theme.colors.accent.cyan} 0%, ${theme.colors.primary.electric} 100%)`,
              }} />

              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4" style={{
                  backgroundColor: `${theme.colors.accent.cyan}15`,
                  border: `1px solid ${theme.colors.accent.cyan}30`,
                }}>
                  <BookMarked size={14} style={{ color: theme.colors.accent.cyan }} />
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: theme.colors.accent.cyan }}>
                    Personal Workspace
                  </span>
                </div>

                <h1 className="text-3xl lg:text-5xl font-bold mb-3" style={{
                  color: theme.colors.text.primary,
                  letterSpacing: '-0.02em',
                }}>
                  Notes
                </h1>
                <p className="text-lg leading-relaxed max-w-2xl mb-6" style={{ color: theme.colors.text.secondary }}>
                  Capture your reflections and ideas as you learn. Build a personal knowledge base that grows with your journey.
                </p>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg" style={{
                  backgroundColor: `${theme.colors.accent.cyan}10`,
                  border: `1px solid ${theme.colors.accent.cyan}30`,
                }}>
                  <span className="text-2xl font-bold" style={{ color: theme.colors.accent.cyan }}>
                    {totalNotes}
                  </span>
                  <span className="text-sm font-semibold" style={{ color: theme.colors.text.secondary }}>
                    {totalNotes === 1 ? 'note saved' : 'notes saved'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {CATEGORIES.map(cat => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.key;
              const count = getNotesByCategory(cat.key).length;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveTab(cat.key)}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${
                    isActive ? 'shadow-lg scale-[1.02]' : 'hover:shadow-md hover:scale-[1.01]'
                  }`}
                  style={{
                    backgroundColor: isActive
                      ? theme.colors.background.card
                      : theme.colors.background.subtle,
                    borderColor: isActive
                      ? cat.accent.border.replace('border-', '#')
                      : theme.colors.border.subtle,
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <Icon size={20} style={{
                      color: isActive ? cat.accent.text.replace('text-', '#') : theme.colors.text.muted
                    }} />
                    {count > 0 && (
                      <span className="px-2 py-0.5 text-xs font-bold rounded-full" style={{
                        backgroundColor: isActive ? `${cat.accent.border.replace('border-', '#')}20` : theme.colors.background.card,
                        color: isActive ? cat.accent.text.replace('text-', '#') : theme.colors.text.muted,
                      }}>
                        {count}
                      </span>
                    )}
                  </div>
                  <p className="font-semibold text-sm" style={{
                    color: isActive ? theme.colors.text.primary : theme.colors.text.secondary
                  }}>
                    {cat.label}
                  </p>
                </button>
              );
            })}
          </div>

          <div>
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
    </div>
  );
}
