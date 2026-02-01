import { X } from 'lucide-react';

export function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm transition-opacity duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white/99 rounded-md shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden border border-slate-100 transition-all duration-200 transform"
        onClick={(e) => e.stopPropagation()}
        style={{
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)'
        }}
      >
        <div className="flex items-center justify-between px-8 py-6 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white">
          <h2 className="text-2xl font-bold text-slate-900" style={{ letterSpacing: '-0.02em' }}>{title}</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-md transition-all duration-200 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            aria-label="Close modal"
          >
            <X size={24} className="text-slate-500 hover:text-slate-700" />
          </button>
        </div>
        <div className="p-8 overflow-y-auto max-h-[calc(80vh-80px)]">
          <div className="prose prose-sm max-w-none text-slate-700 leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
