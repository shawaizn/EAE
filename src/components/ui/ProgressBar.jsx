import { theme, behavior } from '../../styles/theme';

export function ProgressBar({ progress, className = '' }) {
  const glowShadow = behavior.progressBarGlow
    ? `0 0 20px ${theme.colors.accent.cyan}50, inset 0 1px 2px rgba(255, 255, 255, 0.5)`
    : 'none';

  return (
    <div
      className={`w-full h-3 overflow-hidden rounded-full ${className}`}
      style={{
        backgroundColor: theme.colors.background.subtle,
      }}
    >
      <div
        className="h-full transition-all duration-500 relative"
        style={{
          width: `${progress}%`,
          background: `linear-gradient(90deg, ${theme.colors.accent.cyan} 0%, ${theme.colors.primary.electric} 50%, ${theme.colors.accent.cyan} 100%)`,
          boxShadow: glowShadow,
        }}
      >
        {progress > 0 && behavior.progressBarGlow && (
          <div
            className="absolute right-0 top-0 bottom-0 w-0.5"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              boxShadow: `0 0 8px ${theme.colors.accent.cyan}80`,
            }}
          />
        )}
      </div>
    </div>
  );
}
