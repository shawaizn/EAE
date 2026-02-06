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
    <div className={`flex flex-col items-center gap-2 p-4 rounded-lg border transition-all ${unlocked ? 'hover:shadow-lg hover:scale-110 cursor-pointer' : ''}`} style={{
      backgroundColor: unlocked ? `linear-gradient(135deg, ${config.color}15 0%, ${config.color}08 100%)` : `${theme.colors.background.subtle}`,
      border: `2px solid ${unlocked ? `${config.color}40` : theme.colors.border.subtle}`,
      opacity: unlocked ? 1 : 0.4,
      transform: unlocked ? 'translateY(0)' : 'translateY(2px)',
    }}>
      <div className={`transition-transform ${unlocked ? 'animate-bounce' : ''}`} style={{ animationDuration: '0.6s' }}>
        <Icon size={28} style={{ color: unlocked ? config.color : theme.colors.text.muted }} />
      </div>
      <div className="text-center">
        <p className="text-xs font-bold" style={{ color: unlocked ? config.color : theme.colors.text.muted }}>
          {milestone}%
        </p>
        <p className="text-xs leading-tight" style={{ color: unlocked ? config.color : theme.colors.text.muted }}>
          {config.title}
        </p>
      </div>
    </div>
  );
}
