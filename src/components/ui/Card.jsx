import { theme } from '../../styles/theme';

export function Card({
  children,
  className = '',
  interactive = false,
  accent = 'cyan',
  onClick
}) {
  // Light organic cards with lightning strike accents
  const baseStyles = 'bg-white/95 backdrop-blur-sm rounded-lg border border-slate-200 p-8 transition-all';

  const interactiveStyles = interactive
    ? 'hover:shadow-xl cursor-pointer'
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
        boxShadow: theme.shadows.large,
        transition: theme.transitions.default,
      }}
    >
      {/* Lightning strike corner accents (sharp power moments) */}
      {interactive && (
        <>
          <div
            className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 opacity-0 group-hover:opacity-100 transition-all"
            style={{
              borderColor: accentColor,
              boxShadow: theme.shadows.glow.cyan,
              transition: theme.transitions.default,
            }}
          />
          <div
            className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 opacity-0 group-hover:opacity-100 transition-all"
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
