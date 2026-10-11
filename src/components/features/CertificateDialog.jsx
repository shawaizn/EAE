import { useEffect, useRef } from 'react';
import { ArrowLeft, ExternalLink, FileText, X } from 'lucide-react';
import { theme } from '../../styles/theme';

// Pop-up for the course page certificates. `view` is null (closed), 'all'
// (grid of every certificate) or a certificate index (that certificate large).
export function CertificateDialog({ certificates, view, fromAll, onShow, onClose }) {
  const closeRef = useRef(null);
  const bodyRef = useRef(null);
  const isOpen = view !== null;

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.documentElement.style.overflow = '';
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    closeRef.current?.focus();
    if (bodyRef.current) bodyRef.current.scrollTop = 0;
  }, [isOpen, view]);

  if (!isOpen) return null;

  const cert = view === 'all' ? null : certificates[view];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(26,22,18,0.55)', backdropFilter: 'blur(3px)' }}
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={cert ? cert.title : 'All certificates'}
        className="relative w-full rounded-2xl bg-white flex flex-col"
        style={{
          maxWidth: cert ? '640px' : '880px',
          maxHeight: 'calc(100dvh - 32px)',
          boxShadow: '0 32px 80px rgba(26,22,18,0.25)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full flex items-center justify-center"
          style={{ backgroundColor: theme.colors.background.subtle, color: theme.colors.text.primary }}
        >
          <X size={20} />
        </button>

        <div ref={bodyRef} className="overflow-y-auto p-5 pt-14 sm:p-8 sm:pt-14">
          {cert ? (
            <>
              {fromAll && (
                <button
                  type="button"
                  onClick={() => onShow('all')}
                  className="absolute top-5 left-5 sm:left-8 inline-flex items-center gap-1 text-sm font-semibold"
                  style={{ color: theme.colors.accent.cyan }}
                >
                  <ArrowLeft size={16} /> All certificates
                </button>
              )}
              <img
                src={cert.image}
                alt={`Codecademy certificate: ${cert.title}`}
                width={640}
                height={511}
                className="w-full h-auto rounded-lg border"
                style={{ borderColor: theme.colors.border.subtle }}
              />
              <p className="mt-5 text-xs font-semibold uppercase tracking-wide" style={{ color: theme.colors.accent.cyan }}>
                Codecademy {cert.kind} · {cert.date}
              </p>
              <h3 className="mt-1 text-xl sm:text-2xl font-bold" style={{ color: theme.colors.text.primary }}>
                {cert.title}
              </h3>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={cert.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white"
                  style={{ backgroundColor: theme.colors.accent.cyan }}
                >
                  <FileText size={18} /> Open PDF
                </a>
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold border"
                  style={{ borderColor: theme.colors.border.subtle, color: theme.colors.text.primary }}
                >
                  <ExternalLink size={18} /> Verify on Codecademy
                </a>
              </div>
            </>
          ) : (
            <>
              <h3 className="text-2xl font-bold mb-1" style={{ color: theme.colors.text.primary }}>
                All {certificates.length} Certificates
              </h3>
              <p className="text-sm mb-6" style={{ color: theme.colors.text.secondary }}>
                Tap a certificate to see it in full.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {certificates.map((c, i) => (
                  <CertificateThumb key={c.title} cert={c} onClick={() => onShow(i, true)} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// Compact certificate card: preview image, type/date and title.
export function CertificateThumb({ cert, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group w-full flex flex-col text-left rounded-lg border bg-white overflow-hidden transition-shadow hover:shadow-md"
      style={{ borderColor: theme.colors.border.subtle }}
      aria-label={`View ${cert.title} certificate`}
    >
      <img
        src={cert.image}
        alt=""
        width={640}
        height={511}
        className="w-full h-auto border-b"
        style={{ borderColor: theme.colors.border.subtle }}
        loading="lazy"
      />
      <span className="p-3 flex flex-col flex-1">
        <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wide" style={{ color: theme.colors.accent.cyan }}>
          {cert.kind} · {cert.date}
        </span>
        <span className="text-sm font-semibold mt-1" style={{ color: theme.colors.text.primary }}>
          {cert.title}
        </span>
      </span>
    </button>
  );
}
