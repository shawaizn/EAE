import { Flame } from 'lucide-react';
import { theme } from '../../styles/theme';

export function StreakIndicator({ days = 0 }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-lg" style={{
      backgroundColor: `${theme.colors.accent.coral}10`,
      border: `1px solid ${theme.colors.accent.coral}30`,
    }}>
      <Flame size={18} style={{ color: theme.colors.accent.coral }} />
      <span className="text-sm font-semibold" style={{ color: theme.colors.accent.coral }}>
        {days} day streak
      </span>
    </div>
  );
}
