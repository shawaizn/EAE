import { theme } from '../../styles/theme';

export function ProgressRing({ percentage, label = 'Progress' }) {
  const size = 120;
  const circumference = 2 * Math.PI * (size / 2 - 8);
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="absolute" style={{ transform: 'rotate(-90deg)' }}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={size / 2 - 8}
            fill="none"
            stroke={theme.colors.background.subtle}
            strokeWidth="6"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={size / 2 - 8}
            fill="none"
            stroke={theme.colors.primary.electric}
            strokeWidth="6"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{
              transition: `stroke-dashoffset ${theme.transitions.slow}`,
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <div className="text-2xl font-bold" style={{ color: theme.colors.primary.electric }}>
            {Math.round(percentage)}%
          </div>
        </div>
      </div>
      <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: theme.colors.text.secondary }}>
        {label}
      </p>
    </div>
  );
}
