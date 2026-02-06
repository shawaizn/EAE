import { Star, Trophy, Zap } from 'lucide-react';
import { theme } from '../../styles/theme';

const badgeConfig = {
  10: {
    icon: Star,
    title: 'Getting Started',
    color: theme.colors.accent.coral,
  },
  25: {
    icon: Zap,
    title: 'Quarter Way There',
    color: theme.colors.primary.electric,
  },
  50: {
    icon: Trophy,
    title: 'Halfway Mastery',
    color: theme.colors.accent.cyan,
  },
  75: {
    icon: Trophy,
    title: 'Almost There',
    color: theme.colors.status.success,
  },
  100: {
    icon: Trophy,
    title: 'Expert',
    color: theme.colors.status.success,
  },
};

export function AchievementBadge({ milestone, unlocked = false }) {
  const config = badgeConfig[milestone];
  if (!config) return null;

  const Icon = config.icon;

  return (
    <div className="flex flex-col items-center gap-2 p-3 rounded-lg" style={{
      backgroundColor: unlocked ? `${config.color}15` : `${theme.colors.background.subtle}`,
      border: `1px solid ${unlocked ? `${config.color}30` : theme.colors.border.subtle}`,
      opacity: unlocked ? 1 : 0.6,
    }}>
      <Icon size={24} style={{ color: unlocked ? config.color : theme.colors.text.muted }} />
      <div className="text-center">
        <p className="text-xs font-bold" style={{ color: unlocked ? config.color : theme.colors.text.muted }}>
          {milestone}%
        </p>
        <p className="text-xs" style={{ color: theme.colors.text.muted }}>
          {config.title}
        </p>
      </div>
    </div>
  );
}
