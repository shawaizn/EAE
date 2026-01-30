import { theme } from '../../styles/theme';

export function ProgressBar({ progress, className = '' }) {
  return (
    <div
      className={`w-full h-4 overflow-hidden border rounded-md ${className}`}
      style={{
        backgroundColor: `${theme.colors.background.subtle}`,
        borderColor: theme.colors.border.subtle,
      }}
    >
      <div
        className="h-full transition-all duration-500 relative"
        style={{
          width: `${progress}%`,
          background: `linear-gradient(90deg, ${theme.colors.energy.sky} 0%, ${theme.colors.energy.fresh} 100%)`,
          boxShadow: `0 0 10px ${theme.colors.energy.sky}60`,
        }}
      >
        {/* Lightning strike end cap (sharp power point) */}
        {progress > 0 && (
          <div
            className="absolute right-0 top-0 bottom-0 w-1"
            style={{
              backgroundColor: theme.colors.lightning.white,
              boxShadow: theme.shadows.lightning.white,
            }}
          />
        )}
      </div>
    </div>
  );
}
