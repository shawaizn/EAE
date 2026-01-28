export function ProgressBar({ progress, className = '' }) {
  return (
    <div className={`w-full bg-slate-200 rounded-full h-4 overflow-hidden ${className}`}>
      <div
        className="bg-cyan-600 h-full transition-all duration-500"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
