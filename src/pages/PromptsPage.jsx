import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { usePrompts } from '../hooks/usePrompts';
import { PromptCategory } from '../components/prompts/PromptCategory';
import { Zap, PenTool, BarChart3, Lightbulb, Layers, Library } from 'lucide-react';
import { theme } from '../styles/theme';

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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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

  const totalPrompts = CATEGORIES.reduce((sum, cat) => sum + getPromptsByCategory(cat.key).length, 0);

  return (
    <div className="flex-1 overflow-y-auto" style={{ backgroundColor: theme.colors.background.base }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="space-y-8">
          <div className="rounded-2xl border-2 overflow-hidden" style={{
            backgroundColor: theme.colors.background.card,
            borderColor: theme.colors.primary.electric,
          }}>
            <div className="relative p-8 lg:p-12">
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `linear-gradient(135deg, ${theme.colors.primary.electric} 0%, ${theme.colors.accent.cyan} 100%)`,
              }} />

              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4" style={{
                  backgroundColor: `${theme.colors.primary.electric}15`,
                  border: `1px solid ${theme.colors.primary.electric}30`,
                }}>
                  <Library size={14} style={{ color: theme.colors.primary.electric }} />
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: theme.colors.primary.electric }}>
                    Prompt Library
                  </span>
                </div>

                <h1 className="text-3xl lg:text-5xl font-bold mb-3" style={{
                  color: theme.colors.text.primary,
                  letterSpacing: '-0.02em',
                }}>
                  Prompt Vault
                </h1>
                <p className="text-lg leading-relaxed max-w-2xl mb-6" style={{ color: theme.colors.text.secondary }}>
                  Build your personal library of AI prompts. Save, organize, and reuse your best prompts with one click.
                </p>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg" style={{
                  backgroundColor: `${theme.colors.primary.electric}10`,
                  border: `1px solid ${theme.colors.primary.electric}30`,
                }}>
                  <span className="text-2xl font-bold" style={{ color: theme.colors.primary.electric }}>
                    {totalPrompts}
                  </span>
                  <span className="text-sm font-semibold" style={{ color: theme.colors.text.secondary }}>
                    {totalPrompts === 1 ? 'prompt saved' : 'prompts saved'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
            {CATEGORIES.map(cat => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.key;
              const count = getPromptsByCategory(cat.key).length;
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
    </div>
  );
}
