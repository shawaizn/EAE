import { useState } from 'react';
import { Plus } from 'lucide-react';
import { NoteItem } from './NoteItem';

export function NoteCategory({ category, notes, onAdd, onUpdate, onDelete }) {
  const [adding, setAdding] = useState(false);
  const [draft, setDraft] = useState('');
  const [saving, setSaving] = useState(false);

  const handleAdd = async () => {
    if (!draft.trim()) return;
    setSaving(true);
    try {
      await onAdd(draft.trim());
      setDraft('');
      setAdding(false);
    } catch (err) {
      console.error('Error adding note:', err);
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    setDraft('');
    setAdding(false);
  };

  return (
    <div className={`border-2 ${category.accent.border} rounded-lg bg-white/80 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-xl`}>
      <div className={`p-5 ${category.accent.bg} border-b-2 ${category.accent.border} flex items-center justify-between`}>
        <div className="flex items-center gap-3">
          <div className={`w-3 h-3 rounded-full ${category.accent.dot}`} />
          <h2 className={`text-lg font-bold ${category.accent.text}`}>{category.title}</h2>
        </div>
        <span className={`text-sm font-semibold ${category.accent.text} opacity-70`}>
          {notes.length} {notes.length === 1 ? 'note' : 'notes'}
        </span>
      </div>

      <div className="p-5 space-y-3">
        {notes.length === 0 && !adding && (
          <p className="text-slate-400 text-sm italic py-4 text-center">{category.empty}</p>
        )}

        {notes.map(note => (
          <NoteItem key={note.id} note={note} accent={category.accent} onUpdate={onUpdate} onDelete={onDelete} />
        ))}

        {adding ? (
          <div className="space-y-3">
            <textarea
              autoFocus
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Write your note..."
              className={`w-full p-3 border-2 ${category.accent.border} rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-offset-1 text-sm text-slate-800 placeholder-slate-400 min-h-[80px]`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) handleAdd();
                if (e.key === 'Escape') handleCancel();
              }}
            />
            <div className="flex gap-2 justify-end">
              <button
                onClick={handleCancel}
                className="px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-100 rounded-lg transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleAdd}
                disabled={!draft.trim() || saving}
                className={`px-4 py-1.5 text-sm text-white rounded-lg transition-colors font-medium ${category.accent.button} disabled:opacity-50`}
              >
                {saving ? 'Saving...' : 'Save'}
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setAdding(true)}
            className={`w-full flex items-center justify-center gap-2 py-2.5 border-2 border-dashed ${category.accent.border} rounded-lg ${category.accent.text} hover:${category.accent.bg} transition-colors text-sm font-semibold opacity-70 hover:opacity-100`}
          >
            <Plus size={16} />
            Add Note
          </button>
        )}
      </div>
    </div>
  );
}
