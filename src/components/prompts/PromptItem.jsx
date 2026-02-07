import { useState } from 'react';
import { Pencil, Trash2, Check, X, Copy, ClipboardCheck } from 'lucide-react';

export function PromptItem({ prompt, accent, onUpdate, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(prompt.title);
  const [editContent, setEditContent] = useState(prompt.content);
  const [saving, setSaving] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSave = async () => {
    if (!editContent.trim()) return;
    setSaving(true);
    try {
      await onUpdate(prompt.id, editTitle.trim(), editContent.trim());
      setEditing(false);
    } catch (err) {
      console.error('Error updating prompt:', err);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    try {
      await onDelete(prompt.id);
    } catch (err) {
      console.error('Error deleting prompt:', err);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCancelEdit = () => {
    setEditTitle(prompt.title);
    setEditContent(prompt.content);
    setEditing(false);
  };

  if (editing) {
    return (
      <div className={`p-4 rounded-lg border-2 ${accent.border} ${accent.bg}`}>
        <input
          autoFocus
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          placeholder="Prompt title..."
          className={`w-full p-2 mb-2 border ${accent.border} rounded text-sm font-semibold text-slate-800 focus:outline-none`}
        />
        <textarea
          value={editContent}
          onChange={(e) => setEditContent(e.target.value)}
          className={`w-full p-2 border ${accent.border} rounded resize-none focus:outline-none text-sm text-slate-800 min-h-[80px]`}
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
    <div className="group p-4 rounded-lg border border-slate-200 hover:border-slate-300 bg-white transition-all duration-200">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          {prompt.title && (
            <h4 className="text-sm font-bold text-slate-900 mb-1.5">{prompt.title}</h4>
          )}
          <p className="text-sm text-slate-700 whitespace-pre-wrap leading-relaxed">{prompt.content}</p>
        </div>
        <button
          onClick={handleCopy}
          className={`flex-shrink-0 p-2 rounded-lg transition-all duration-200 ${
            copied
              ? `${accent.bg} ${accent.text}`
              : 'bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-600'
          }`}
          title="Copy prompt"
        >
          {copied ? <ClipboardCheck size={16} /> : <Copy size={16} />}
        </button>
      </div>
      <div className="flex items-center justify-between mt-3 pt-2 border-t border-slate-100">
        <span className="text-xs text-slate-400">
          {new Date(prompt.updated_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
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
                onClick={() => { setEditTitle(prompt.title); setEditContent(prompt.content); setEditing(true); }}
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
