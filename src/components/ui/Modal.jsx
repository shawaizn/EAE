import { X } from 'lucide-react';
import { theme } from '../../styles/theme';

export function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm transition-opacity duration-200"
      onClick={onClose}
    >
      <div
        className="rounded-lg shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden border transition-all duration-200 transform"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: theme.colors.background.card,
          borderColor: theme.colors.border.subtle,
          boxShadow: theme.shadows.large,
        }}
      >
        <div className="flex items-center justify-between px-8 py-6 border-b" style={{
          borderColor: theme.colors.border.subtle,
          backgroundColor: theme.colors.background.subtle,
        }}>
          <h2 className="text-2xl font-bold" style={{
            letterSpacing: '-0.02em',
            color: theme.colors.text.primary
          }}>
            {title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-md transition-all duration-200 hover:shadow-sm focus:outline-none focus:ring-2"
            style={{
              backgroundColor: 'transparent',
              focusRing: `2px solid ${theme.colors.accent.cyan}`,
              color: theme.colors.text.muted,
            }}
            aria-label="Close modal"
          >
            <X size={24} style={{ color: theme.colors.text.secondary }} />
          </button>
        </div>
        <div className="p-8 overflow-y-auto max-h-[calc(80vh-80px)]">
          <div className="prose prose-sm max-w-none leading-relaxed" style={{
            color: theme.colors.text.secondary
          }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
