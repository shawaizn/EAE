export function Card({
  children,
  className = '',
  interactive = false,
  accent = 'cyan',
  onClick
}) {
  const baseStyles = 'bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border-2 border-slate-200 p-8 transition-all duration-300';

  const interactiveStyles = interactive
    ? 'hover:shadow-xl hover:-translate-y-1 hover:border-opacity-80 cursor-pointer'
    : '';

  const accentHoverStyles = {
    cyan: 'hover:border-cyan-400 hover:shadow-cyan-500/20',
    violet: 'hover:border-violet-400 hover:shadow-violet-500/20',
    orange: 'hover:border-orange-400 hover:shadow-orange-500/20',
    slate: 'hover:border-slate-300 hover:shadow-slate-500/10',
  };

  const accentStyles = interactive ? accentHoverStyles[accent] || accentHoverStyles.cyan : '';

  return (
    <div
      className={`${baseStyles} ${interactiveStyles} ${accentStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
