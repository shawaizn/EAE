import { theme } from '../../styles/theme';

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

  return (
    <div
      className="p-4 sm:p-6 rounded-xl border transition-all hover:shadow-md"
      style={{
        backgroundColor: gradient ? `linear-gradient(135deg, ${bgColor} 0%, ${theme.colors.background.card} 100%)` : theme.colors.background.card,
        borderColor: `${accentColor}30`,
      }}
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="flex items-center gap-2">
          {Icon && <Icon size={20} style={{ color: accentColor }} />}
        </div>
      </div>
      <p className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: accentColor }}>
        {value}
      </p>
      <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider" style={{ color: theme.colors.text.secondary }}>
        {label}
      </p>
    </div>
  );
}
