import { useState } from 'react';
import { Check, Copy, ChevronDown } from 'lucide-react';
import { eduTheme as theme } from '../../styles/theme';
import { TUTOR_PROMPT } from '../../data/tutorPrompt';

const c = theme.colors;

// Step 1 on the dashboard: the AI tutor prompt, shown in full with a copy button
export function TutorPromptStep() {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(TUTOR_PROMPT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="rounded-2xl bg-white border-2 overflow-hidden" style={{ borderColor: c.brand.fill }}>
      <div className="p-5 sm:p-7">
        <div className="flex items-center gap-3">
          <span className="flex-none w-9 h-9 rounded-full flex items-center justify-center text-sm font-extrabold" style={{ backgroundColor: c.brand.fill, color: c.brand.onFill }}>1</span>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: c.accent.cyan }}>Step 1 · Start here</p>
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight" style={{ color: c.text.primary }}>Your AI tutor prompt</h2>
          </div>
        </div>
        <p className="mt-3 text-sm sm:text-base leading-relaxed" style={{ color: c.text.secondary }}>
          Use this prompt while you learn.
        </p>

        <div className="relative mt-4">
          <pre
            className="whitespace-pre-wrap break-words rounded-xl p-4 sm:p-5 text-[13px] sm:text-sm leading-relaxed overflow-hidden"
            style={{ backgroundColor: c.background.subtle, color: c.text.primary, fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace', maxHeight: expanded ? 'none' : '15rem' }}
          >
            {TUTOR_PROMPT}
          </pre>
          {!expanded && (
            <div className="absolute inset-x-0 bottom-0 h-20 rounded-b-xl pointer-events-none" style={{ background: `linear-gradient(to bottom, rgba(255,248,236,0), ${c.background.subtle})` }} />
          )}
        </div>

        <div className="mt-4 flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={copy}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold transition-opacity hover:opacity-90"
            style={{ backgroundColor: c.brand.fill, color: c.brand.onFill }}
          >
            {copied ? <Check size={18} /> : <Copy size={18} />}
            {copied ? 'Copied!' : 'Copy prompt'}
          </button>
          <button
            type="button"
            onClick={() => setExpanded(e => !e)}
            className="inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-lg font-semibold border"
            style={{ borderColor: c.border.default, color: c.text.primary }}
            aria-expanded={expanded}
          >
            {expanded ? 'Show less' : 'Show full prompt'}
            <ChevronDown size={16} className={`transition-transform ${expanded ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>
    </section>
  );
}
