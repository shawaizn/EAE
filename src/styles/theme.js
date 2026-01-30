/**
 * Centralized Theme Configuration
 *
 * Change colors, shadows, borders, etc. here and they'll update across the entire app.
 * Makes it easy to experiment with different design directions.
 */

export const theme = {
  // Color Palette - Energy = Life (Organic + Lightning)
  colors: {
    // Base backgrounds
    background: {
      light: '#FFFFFF',
      subtle: '#F8FAFC', // Very light slate
      card: '#FFFFFF',
      overlay: 'rgba(255, 255, 255, 0.95)',
    },

    // Energy colors (warm, alive)
    energy: {
      sunrise: '#FF6B35', // Warm orange
      golden: '#FFA500', // Golden yellow
      sky: '#00B8D4', // Alive cyan (not cold)
      fresh: '#10B981', // Growth green
    },

    // Lightning accents (sharp, powerful)
    lightning: {
      white: '#FFFFFF',
      cyan: '#06b6d4',
      bright: '#22D3EE',
    },

    // Text colors
    text: {
      primary: '#1E293B', // Dark slate
      secondary: '#64748B', // Medium slate
      muted: '#94A3B8', // Light slate
      inverse: '#FFFFFF',
    },

    // Borders
    border: {
      subtle: '#E2E8F0',
      default: '#CBD5E1',
      strong: '#94A3B8',
    },

    // Status colors
    status: {
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444',
      info: '#3B82F6',
    },
  },

  // Shadows (natural depth)
  shadows: {
    subtle: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    medium: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    large: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',

    // Lightning glow (sharp power moments)
    lightning: {
      cyan: '0 0 20px rgba(0, 184, 212, 0.4)',
      white: '0 0 15px rgba(255, 255, 255, 0.6)',
      sunrise: '0 0 25px rgba(255, 107, 53, 0.3)',
    },
  },

  // Border radius (organic vs sharp)
  radius: {
    none: '0',
    sm: '0.25rem', // 4px - subtle
    default: '0.5rem', // 8px - balanced
    md: '0.75rem', // 12px - organic
    lg: '1rem', // 16px - flowing
    xl: '1.5rem', // 24px - very organic
    full: '9999px', // pill shape
  },

  // Spacing scale
  spacing: {
    xs: '0.5rem', // 8px
    sm: '1rem', // 16px
    md: '1.5rem', // 24px
    lg: '2rem', // 32px
    xl: '3rem', // 48px
    '2xl': '4rem', // 64px
  },

  // Transitions (organic flow)
  transitions: {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    default: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '500ms cubic-bezier(0.4, 0, 0.2, 1)',

    // Lightning strikes (sharp, powerful)
    lightning: '200ms cubic-bezier(0.4, 0, 0.2, 1)',
  },

  // Typography
  typography: {
    heading: {
      weight: 800, // Black
      tracking: '-0.02em', // Tight
    },
    body: {
      weight: 400,
      tracking: '0',
    },
    label: {
      weight: 600, // Semibold
      tracking: '0.025em', // Slightly wide
    },
  },
};

// Helper functions to get theme values easily
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
