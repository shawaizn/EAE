import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNotes } from '../hooks/useNotes';
import { NoteCategory } from '../components/notes/NoteCategory';

const CATEGORIES = [
  {
    key: 'save_time',
    title: 'How can I save time with AI?',
    accent: { border: 'border-teal-400', bg: 'bg-teal-50', text: 'text-teal-700', button: 'bg-teal-600 hover:bg-teal-700', light: 'bg-teal-100', dot: 'bg-teal-500' },
    empty: 'Jot down ways AI helps you work faster.'
  },
  {
    key: 'higher_quality',
    title: 'How can I produce higher quality with AI?',
    accent: { border: 'border-blue-400', bg: 'bg-blue-50', text: 'text-blue-700', button: 'bg-blue-600 hover:bg-blue-700', light: 'bg-blue-100', dot: 'bg-blue-500' },
    empty: 'Note ideas for using AI to raise the bar on your work.'
  },
  {
    key: 'human_skills',
    title: 'How can I develop human skills?',
    accent: { border: 'border-orange-400', bg: 'bg-orange-50', text: 'text-orange-700', button: 'bg-orange-600 hover:bg-orange-700', light: 'bg-orange-100', dot: 'bg-orange-500' },
    empty: 'Capture thoughts on the human skills AI can\'t replace.'
  },
  {
    key: 'goals',
    title: 'What are my goals?',
    accent: { border: 'border-emerald-400', bg: 'bg-emerald-50', text: 'text-emerald-700', button: 'bg-emerald-600 hover:bg-emerald-700', light: 'bg-emerald-100', dot: 'bg-emerald-500' },
    empty: 'Set goals for your AI learning journey.'
  }
];

export function NotesPage() {
  const { user } = useAuth();
  const { loading, addNote, updateNote, deleteNote, getNotesByCategory } = useNotes(user?.id);

  if (loading) {
    return (
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-screen-xl mx-auto px-8 py-8">
          <div className="mb-24">
            <div className="h-12 w-48 bg-slate-200 rounded animate-pulse mb-3" />
            <div className="h-6 w-96 bg-slate-100 rounded animate-pulse" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="h-64 bg-slate-100 rounded-lg animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="max-w-screen-xl mx-auto px-8 py-8">
        <div className="mb-12">
          <h1 className="text-5xl font-black text-slate-900 mb-3" style={{ letterSpacing: '-0.02em' }}>
            Notes
          </h1>
          <p className="text-lg text-slate-600 font-medium">
            Capture your reflections and ideas as you learn
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {CATEGORIES.map(cat => (
            <NoteCategory
              key={cat.key}
              category={cat}
              notes={getNotesByCategory(cat.key)}
              onAdd={(content) => addNote(cat.key, content)}
              onUpdate={updateNote}
              onDelete={deleteNote}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
