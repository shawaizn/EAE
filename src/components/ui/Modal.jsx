import { X } from 'lucide-react';

export function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-[80vh] overflow-hidden border-2 border-slate-200" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between p-6 border-b-2 border-slate-200 bg-slate-50">
          <h2 className="text-2xl font-black text-slate-900" style={{ letterSpacing: '-0.02em' }}>{title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-200 rounded transition"
            aria-label="Close modal"
          >
            <X size={24} className="text-slate-600" />
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
