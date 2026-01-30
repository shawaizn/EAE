export function Card({
  children,
  className = '',
  interactive = false,
  accent = 'cyan',
  onClick
}) {
  // Dark theme with sharp edges - tech interface aesthetic
  const baseStyles = 'bg-[#1a1f3a] rounded-md shadow-lg border border-slate-700/50 p-8 transition-all duration-200';

  const interactiveStyles = interactive
    ? 'hover:shadow-2xl hover:border-opacity-100 cursor-pointer hover:shadow-cyan-500/20'
    : '';

  const accentHoverStyles = {
    cyan: 'hover:border-cyan-400/80 hover:shadow-cyan-500/30',
    violet: 'hover:border-violet-400/80 hover:shadow-violet-500/30',
    orange: 'hover:border-orange-400/80 hover:shadow-orange-500/30',
    slate: 'hover:border-slate-400/80 hover:shadow-slate-500/20',
  };

  const accentStyles = interactive ? accentHoverStyles[accent] || accentHoverStyles.cyan : '';

  return (
    <div
      className={`${baseStyles} ${interactiveStyles} ${accentStyles} ${className} relative group`}
      onClick={onClick}
    >
      {/* Geometric corner accent */}
      {interactive && (
        <>
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400/0 group-hover:border-cyan-400/80 transition-all duration-200" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-400/0 group-hover:border-cyan-400/80 transition-all duration-200" />
        </>
      )}
      {children}
    </div>
  );
}
