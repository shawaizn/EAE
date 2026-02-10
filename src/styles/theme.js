/**
 * Centralized Theme Configuration
 *
 * DESIGN_MODE controls the entire look and feel.
 * Change this single line to switch between design systems:
 *   'current'    = Original lively/playful design
 *   'enterprise' = Business-focused, credibility-first design
 */
export const DESIGN_MODE = 'enterprise';

// ─── Theme Profiles ─────────────────────────────────────────────

const currentTheme = {
  colors: {
    primary: {
      deep: '#1E40AF',
      electric: '#3B82F6',
      light: '#DBEAFE',
    },
    accent: {
      cyan: '#06B6D4',
      coral: '#F97316',
    },
    background: {
      base: '#FAFAF9',
      card: '#FFFFFF',
      subtle: '#F4F4F5',
      overlay: 'rgba(255, 255, 255, 0.95)',
    },
    text: {
      primary: '#0F172A',
      secondary: '#64748B',
      muted: '#94A3B8',
      inverse: '#FFFFFF',
    },
    border: {
      subtle: '#E2E8F0',
      default: '#CBD5E1',
      strong: '#94A3B8',
    },
    status: {
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444',
      info: '#3B82F6',
    },
  },
  shadows: {
    subtle: '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.04)',
    default: '0 2px 4px 0 rgba(0, 0, 0, 0.06), 0 2px 4px -2px rgba(0, 0, 0, 0.06)',
    medium: '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -2px rgba(0, 0, 0, 0.08)',
    large: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
    '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.18)',
    glow: {
      cyan: '0 0 20px rgba(6, 182, 212, 0.25), 0 0 40px rgba(6, 182, 212, 0.12)',
      coral: '0 0 20px rgba(249, 115, 22, 0.25), 0 0 40px rgba(249, 115, 22, 0.12)',
      blue: '0 0 20px rgba(30, 64, 175, 0.25), 0 0 40px rgba(30, 64, 175, 0.12)',
    },
  },
  radius: {
    none: '0',
    sm: '0.375rem',
    default: '0.75rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.5rem',
    full: '9999px',
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    '2xl': '4rem',
  },
  transitions: {
    fast: '150ms cubic-bezier(0.34, 1.56, 0.64, 1)',
    default: '200ms cubic-bezier(0.34, 1.56, 0.64, 1)',
    slow: '400ms cubic-bezier(0.34, 1.56, 0.64, 1)',
    smooth: '300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  },
  typography: {
    family: {
      primary: 'Inter, system-ui, -apple-system, sans-serif',
      mono: 'ui-monospace, monospace',
    },
    heading: { weight: 700, tracking: '-0.02em' },
    body: { weight: 400, tracking: '0' },
    label: { weight: 600, tracking: '0.025em' },
  },
  behavior: {
    hoverScale: true,
    hoverGlow: true,
    animatedBackground: true,
    bouncyEasing: true,
    cornerBrackets: true,
    iconRotateOnHover: true,
    showAchievementBadges: true,
    showStreakIndicator: true,
    gamificationLanguage: true,
    progressBarGlow: true,
  },
  language: {
    progressTitle: 'Your Learning Journey',
    progressSubtitle: 'Master AI strategy across 44 lessons',
    levelLabels: {
      0: 'Just Starting',
      10: 'Beginner',
      25: 'Intermediate',
      50: 'Advanced',
      75: 'Expert',
    },
    tierLabels: {
      beginner: 'Beginner',
      intermediate: 'Intermediate',
      advanced: 'Advanced',
    },
    achievementTitles: {
      10: 'Getting Started',
      25: 'Quarter Way There',
      50: 'Halfway Mastery',
      75: 'Almost There',
      100: 'Expert',
    },
    audienceLabels: {
      learners: '📚 Learners',
      employees: '💼 Employees',
      selfEmployed: '🚀 Self-Employed',
      businesses: '🏢 Businesses',
    },
  },
};

const enterpriseTheme = {
  colors: {
    primary: {
      deep: '#1E293B',
      electric: '#1E40AF',
      light: '#EFF6FF',
    },
    accent: {
      cyan: '#0369A1',
      coral: '#D97706',
    },
    background: {
      base: '#FAFAF9',
      card: '#FFFFFF',
      subtle: '#F8FAFC',
      overlay: 'rgba(255, 255, 255, 0.97)',
    },
    text: {
      primary: '#0F172A',
      secondary: '#475569',
      muted: '#94A3B8',
      inverse: '#FFFFFF',
    },
    border: {
      subtle: '#E2E8F0',
      default: '#CBD5E1',
      strong: '#94A3B8',
    },
    status: {
      success: '#059669',
      warning: '#D97706',
      error: '#DC2626',
      info: '#1E40AF',
    },
  },
  shadows: {
    subtle: '0 1px 2px 0 rgba(0, 0, 0, 0.03)',
    default: '0 1px 3px 0 rgba(0, 0, 0, 0.06), 0 1px 2px -1px rgba(0, 0, 0, 0.06)',
    medium: '0 4px 6px -1px rgba(0, 0, 0, 0.06), 0 2px 4px -2px rgba(0, 0, 0, 0.04)',
    large: '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.12)',
    '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.15)',
    glow: {
      cyan: '0 1px 3px rgba(0, 0, 0, 0.08)',
      coral: '0 1px 3px rgba(0, 0, 0, 0.08)',
      blue: '0 1px 3px rgba(0, 0, 0, 0.08)',
    },
  },
  radius: {
    none: '0',
    sm: '0.375rem',
    default: '0.5rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    full: '9999px',
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    '2xl': '4rem',
  },
  transitions: {
    fast: '150ms ease',
    default: '200ms ease',
    slow: '350ms ease',
    smooth: '300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  },
  typography: {
    family: {
      primary: 'Inter, system-ui, -apple-system, sans-serif',
      mono: 'ui-monospace, monospace',
    },
    heading: { weight: 700, tracking: '-0.02em' },
    body: { weight: 400, tracking: '0' },
    label: { weight: 600, tracking: '0.025em' },
  },
  behavior: {
    hoverScale: false,
    hoverGlow: false,
    animatedBackground: false,
    bouncyEasing: false,
    cornerBrackets: false,
    iconRotateOnHover: false,
    showAchievementBadges: false,
    showStreakIndicator: false,
    gamificationLanguage: false,
    progressBarGlow: false,
  },
  language: {
    progressTitle: 'Your Training Progress',
    progressSubtitle: 'Track your learning across 44 lessons in 8 strategic modules',
    levelLabels: {
      0: 'Not Started',
      10: 'In Progress',
      25: 'Building Knowledge',
      50: 'Proficient',
      75: 'Advanced',
    },
    tierLabels: {
      beginner: 'Foundation',
      intermediate: 'Application',
      advanced: 'Strategy',
    },
    achievementTitles: {
      10: '10% Complete',
      25: '25% Complete',
      50: '50% Complete',
      75: '75% Complete',
      100: 'Complete',
    },
    audienceLabels: {
      learners: 'Individual Learners',
      employees: 'Employees',
      selfEmployed: 'Self-Employed',
      businesses: 'Business Teams',
    },
  },
};

// ─── Active Theme ────────────────────────────────────────────────

export const theme = DESIGN_MODE === 'enterprise' ? enterpriseTheme : currentTheme;

// ─── Helpers ─────────────────────────────────────────────────────

export const getColor = (path) => {
  const keys = path.split('.');
  let value = theme.colors;
  for (const key of keys) {
    value = value[key];
  }
  return value;
};

export const getShadow = (key) => theme.shadows[key] || theme.shadows.default;
export const getRadius = (key) => theme.radius[key] || theme.radius.default;
export const getTransition = (key) => theme.transitions[key] || theme.transitions.default;

export const designMode = DESIGN_MODE;
export const behavior = theme.behavior;
export const lang = theme.language;
