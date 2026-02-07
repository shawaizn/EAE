import { useState } from 'react';
import { Pencil, Trash2, Check, X } from 'lucide-react';

export function NoteItem({ note, accent, onUpdate, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [editContent, setEditContent] = useState(note.content);
  const [saving, setSaving] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleSave = async () => {
    if (!editContent.trim()) return;
    setSaving(true);
    try {
      await onUpdate(note.id, editContent.trim());
      setEditing(false);
    } catch (err) {
      console.error('Error updating note:', err);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    try {
      await onDelete(note.id);
    } catch (err) {
      console.error('Error deleting note:', err);
    }
  };

  const handleCancelEdit = () => {
    setEditContent(note.content);
    setEditing(false);
  };

  if (editing) {
    return (
      <div className={`p-3 rounded-lg border-2 ${accent.border} ${accent.bg}`}>
        <textarea
          autoFocus
          value={editContent}
          onChange={(e) => setEditContent(e.target.value)}
          className={`w-full p-2 border ${accent.border} rounded resize-none focus:outline-none text-sm text-slate-800 min-h-[60px]`}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) handleSave();
            if (e.key === 'Escape') handleCancelEdit();
          }}
        />
        <div className="flex gap-2 justify-end mt-2">
          <button onClick={handleCancelEdit} className="p-1.5 text-slate-500 hover:text-slate-700 transition-colors">
            <X size={16} />
          </button>
          <button
            onClick={handleSave}
            disabled={!editContent.trim() || saving}
            className={`p-1.5 ${accent.text} hover:opacity-80 transition-colors disabled:opacity-50`}
          >
            <Check size={16} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`group p-3 rounded-lg border border-slate-200 hover:border-slate-300 bg-white transition-all duration-200`}>
      <p className="text-sm text-slate-700 whitespace-pre-wrap leading-relaxed">{note.content}</p>
      <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-100">
        <span className="text-xs text-slate-400">
          {new Date(note.updated_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
        </span>
        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          {confirmDelete ? (
            <div className="flex items-center gap-1 text-xs">
              <span className="text-red-500 font-medium">Delete?</span>
              <button onClick={handleDelete} className="p-1 text-red-500 hover:text-red-700 transition-colors">
                <Check size={14} />
              </button>
              <button onClick={() => setConfirmDelete(false)} className="p-1 text-slate-400 hover:text-slate-600 transition-colors">
                <X size={14} />
              </button>
            </div>
          ) : (
            <>
              <button
                onClick={() => { setEditContent(note.content); setEditing(true); }}
                className="p-1 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <Pencil size={14} />
              </button>
              <button
                onClick={() => setConfirmDelete(true)}
                className="p-1 text-slate-400 hover:text-red-500 transition-colors"
              >
                <Trash2 size={14} />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
