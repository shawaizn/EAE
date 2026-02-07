import { useState } from 'react';
import { Plus } from 'lucide-react';
import { PromptItem } from './PromptItem';

export function PromptCategory({ category, prompts, onAdd, onUpdate, onDelete }) {
  const [adding, setAdding] = useState(false);
  const [draftTitle, setDraftTitle] = useState('');
  const [draftContent, setDraftContent] = useState('');
  const [saving, setSaving] = useState(false);

  const handleAdd = async () => {
    if (!draftContent.trim()) return;
    setSaving(true);
    try {
      await onAdd(draftTitle.trim(), draftContent.trim());
      setDraftTitle('');
      setDraftContent('');
      setAdding(false);
    } catch (err) {
      console.error('Error adding prompt:', err);
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    setDraftTitle('');
    setDraftContent('');
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
          {prompts.length} {prompts.length === 1 ? 'prompt' : 'prompts'}
        </span>
      </div>

      <div className="p-5 space-y-3">
        {prompts.length === 0 && !adding && (
          <p className="text-slate-400 text-sm italic py-4 text-center">{category.empty}</p>
        )}

        {prompts.map(prompt => (
          <PromptItem key={prompt.id} prompt={prompt} accent={category.accent} onUpdate={onUpdate} onDelete={onDelete} />
        ))}

        {adding ? (
          <div className="space-y-3">
            <input
              autoFocus
              value={draftTitle}
              onChange={(e) => setDraftTitle(e.target.value)}
              placeholder="Prompt title (optional)..."
              className={`w-full p-3 border-2 ${category.accent.border} rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 text-sm font-semibold text-slate-800 placeholder-slate-400`}
            />
            <textarea
              value={draftContent}
              onChange={(e) => setDraftContent(e.target.value)}
              placeholder="Write your prompt..."
              className={`w-full p-3 border-2 ${category.accent.border} rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-offset-1 text-sm text-slate-800 placeholder-slate-400 min-h-[100px]`}
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
                disabled={!draftContent.trim() || saving}
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
            Add Prompt
          </button>
        )}
      </div>
    </div>
  );
}
