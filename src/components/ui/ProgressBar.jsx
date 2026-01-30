export function ProgressBar({ progress, className = '' }) {
  return (
    <div className={`w-full bg-slate-800/50 rounded-sm h-4 overflow-hidden border border-slate-700/30 ${className}`}>
      <div
        className="h-full transition-all duration-500 relative"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #00B8D4 0%, #06b6d4 100%)',
          boxShadow: '0 0 10px rgba(0, 184, 212, 0.5)',
        }}
      >
        {/* Geometric end cap */}
        {progress > 0 && (
          <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/80 shadow-lg shadow-cyan-400/50" />
        )}
      </div>
    </div>
  );
}
