import { theme, behavior } from '../../styles/theme';

export function StatCard({ icon: Icon, label, value, color = 'electric', gradient = false }) {
  const colorMap = {
    electric: theme.colors.primary.electric,
    cyan: theme.colors.accent.cyan,
    coral: theme.colors.accent.coral,
    success: theme.colors.status.success,
  };

  const bgColorMap = {
    electric: `${theme.colors.primary.electric}10`,
    cyan: `${theme.colors.accent.cyan}10`,
    coral: `${theme.colors.accent.coral}10`,
    success: `${theme.colors.status.success}10`,
  };

  const accentColor = colorMap[color];
  const bgColor = bgColorMap[color];

  const hoverClasses = behavior.hoverScale
    ? 'hover:shadow-lg hover:scale-105'
    : 'hover:shadow-md';

  const iconHover = behavior.iconRotateOnHover
    ? 'transition-transform group-hover:rotate-12'
    : '';

  return (
    <div
      className={`p-4 sm:p-6 rounded-xl border transition-all ${hoverClasses} group cursor-default`}
      style={{
        backgroundColor: gradient ? `linear-gradient(135deg, ${bgColor} 0%, ${theme.colors.background.card} 100%)` : theme.colors.background.card,
        borderColor: `${accentColor}30`,
      }}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2 p-2 rounded-lg transition-all" style={{ backgroundColor: `${accentColor}15` }}>
          {Icon && <Icon size={20} style={{ color: accentColor }} className={iconHover} />}
        </div>
      </div>
      <p className="text-3xl sm:text-4xl font-bold mb-2 transition-colors" style={{ color: accentColor }}>
        {value}
      </p>
      <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest" style={{ color: theme.colors.text.secondary }}>
        {label}
      </p>
    </div>
  );
}
