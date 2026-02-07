import { theme, behavior } from '../../styles/theme';

export function Card({
  children,
  className = '',
  interactive = false,
  accent = 'cyan',
  onClick
}) {
  const baseStyles = 'bg-white/98 backdrop-blur-md rounded-md border border-slate-100 p-8 transition-all duration-200';

  const interactiveStyles = interactive
    ? behavior.hoverScale
      ? 'hover:shadow-2xl hover:-translate-y-1 cursor-pointer'
      : 'hover:shadow-lg cursor-pointer'
    : '';

  const accentColors = {
    cyan: theme.colors.accent.cyan,
    coral: theme.colors.accent.coral,
    blue: theme.colors.primary.deep,
  };

  const accentColor = accentColors[accent] || accentColors.cyan;

  return (
    <div
      className={`${baseStyles} ${interactiveStyles} ${className} relative group`}
      onClick={onClick}
      style={{
        boxShadow: interactive ? theme.shadows.large : theme.shadows.medium,
        transition: theme.transitions.default,
      }}
    >
      {interactive && behavior.cornerBrackets && (
        <>
          <div
            className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 opacity-0 group-hover:opacity-100 transition-all"
            style={{
              borderColor: accentColor,
              boxShadow: theme.shadows.glow.cyan,
              transition: theme.transitions.default,
            }}
          />
          <div
            className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 opacity-0 group-hover:opacity-100 transition-all"
            style={{
              borderColor: accentColor,
              boxShadow: theme.shadows.glow.cyan,
              transition: theme.transitions.default,
            }}
          />
        </>
      )}
      {children}
    </div>
  );
}
