import { Star, Trophy, Zap } from 'lucide-react';
import { theme, behavior, lang } from '../../styles/theme';

const badgeConfig = {
  10: { icon: Star, color: theme.colors.accent.coral },
  25: { icon: Zap, color: theme.colors.primary.electric },
  50: { icon: Trophy, color: theme.colors.accent.cyan },
  75: { icon: Trophy, color: theme.colors.status.success },
  100: { icon: Trophy, color: theme.colors.status.success },
};

export function AchievementBadge({ milestone, unlocked = false }) {
  const config = badgeConfig[milestone];
  if (!config) return null;

  const title = lang.achievementTitles[milestone] || `${milestone}%`;
  const Icon = config.icon;

  const hoverClasses = unlocked && behavior.hoverScale
    ? 'hover:shadow-lg hover:scale-110 cursor-pointer'
    : unlocked
    ? 'hover:shadow-md cursor-pointer'
    : '';

  const bounceClass = unlocked && behavior.hoverScale ? 'animate-bounce' : '';

  return (
    <div className={`flex flex-col items-center gap-2 p-4 rounded-lg border transition-all ${hoverClasses}`} style={{
      backgroundColor: unlocked ? `linear-gradient(135deg, ${config.color}15 0%, ${config.color}08 100%)` : `${theme.colors.background.subtle}`,
      border: `2px solid ${unlocked ? `${config.color}40` : theme.colors.border.subtle}`,
      opacity: unlocked ? 1 : 0.4,
      transform: unlocked ? 'translateY(0)' : 'translateY(2px)',
    }}>
      <div className={`transition-transform ${bounceClass}`} style={{ animationDuration: '0.6s' }}>
        <Icon size={28} style={{ color: unlocked ? config.color : theme.colors.text.muted }} />
      </div>
      <div className="text-center">
        <p className="text-xs font-bold" style={{ color: unlocked ? config.color : theme.colors.text.muted }}>
          {milestone}%
        </p>
        <p className="text-xs leading-tight" style={{ color: unlocked ? config.color : theme.colors.text.muted }}>
          {title}
        </p>
      </div>
    </div>
  );
}
