import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { usePrompts } from '../hooks/usePrompts';
import { PromptCategory } from '../components/prompts/PromptCategory';
import { Zap, PenTool, BarChart3, Lightbulb, Layers } from 'lucide-react';

const CATEGORIES = [
  {
    key: 'productivity',
    label: 'Productivity',
    icon: Zap,
    title: 'Speed up your workflow',
    accent: { border: 'border-teal-400', bg: 'bg-teal-50', text: 'text-teal-700', button: 'bg-teal-600 hover:bg-teal-700', light: 'bg-teal-100', dot: 'bg-teal-500', ring: 'ring-teal-400', tabActive: 'bg-teal-600 text-white', tabHover: 'hover:bg-teal-50 hover:text-teal-700' },
    empty: 'Save prompts that help you get things done faster.'
  },
  {
    key: 'writing',
    label: 'Writing',
    icon: PenTool,
    title: 'Writing and communication',
    accent: { border: 'border-blue-400', bg: 'bg-blue-50', text: 'text-blue-700', button: 'bg-blue-600 hover:bg-blue-700', light: 'bg-blue-100', dot: 'bg-blue-500', ring: 'ring-blue-400', tabActive: 'bg-blue-600 text-white', tabHover: 'hover:bg-blue-50 hover:text-blue-700' },
    empty: 'Store prompts for emails, articles, reports, and more.'
  },
  {
    key: 'analysis',
    label: 'Analysis',
    icon: BarChart3,
    title: 'Research and analysis',
    accent: { border: 'border-amber-400', bg: 'bg-amber-50', text: 'text-amber-700', button: 'bg-amber-600 hover:bg-amber-700', light: 'bg-amber-100', dot: 'bg-amber-500', ring: 'ring-amber-400', tabActive: 'bg-amber-600 text-white', tabHover: 'hover:bg-amber-50 hover:text-amber-700' },
    empty: 'Collect prompts for data analysis, research, and critical thinking.'
  },
  {
    key: 'creative',
    label: 'Creative',
    icon: Lightbulb,
    title: 'Creative and brainstorming',
    accent: { border: 'border-emerald-400', bg: 'bg-emerald-50', text: 'text-emerald-700', button: 'bg-emerald-600 hover:bg-emerald-700', light: 'bg-emerald-100', dot: 'bg-emerald-500', ring: 'ring-emerald-400', tabActive: 'bg-emerald-600 text-white', tabHover: 'hover:bg-emerald-50 hover:text-emerald-700' },
    empty: 'Keep prompts for ideation, brainstorming, and creative work.'
  },
  {
    key: 'custom',
    label: 'Custom',
    icon: Layers,
    title: 'Your custom prompts',
    accent: { border: 'border-slate-400', bg: 'bg-slate-50', text: 'text-slate-700', button: 'bg-slate-600 hover:bg-slate-700', light: 'bg-slate-100', dot: 'bg-slate-500', ring: 'ring-slate-400', tabActive: 'bg-slate-600 text-white', tabHover: 'hover:bg-slate-50 hover:text-slate-700' },
    empty: 'A catch-all for any prompts that don\'t fit other categories.'
  }
];

export function PromptsPage() {
  const { user } = useAuth();
  const { loading, addPrompt, updatePrompt, deletePrompt, getPromptsByCategory } = usePrompts(user?.id);
  const [activeTab, setActiveTab] = useState('productivity');

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
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="h-10 w-28 bg-slate-100 rounded-lg animate-pulse" />
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
            Prompt Vault
          </h1>
          <p className="text-lg text-slate-600 font-medium">
            Build your personal library of AI prompts -- copy any prompt with one click
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map(cat => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.key;
            const count = getPromptsByCategory(cat.key).length;
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
          <PromptCategory
            key={activeCat.key}
            category={activeCat}
            prompts={getPromptsByCategory(activeCat.key)}
            onAdd={(title, content) => addPrompt(activeCat.key, title, content)}
            onUpdate={updatePrompt}
            onDelete={deletePrompt}
          />
        </div>
      </div>
    </div>
  );
}
