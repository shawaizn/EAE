/**
 * Centralized Theme Configuration - Technical Authority
 *
 * Professional design system for premium AI education platform (£400-600)
 * Balance: Professional polish + human warmth
 *
 * Change colors, shadows, borders, etc. here and they'll update across the entire app.
 */

export const theme = {
  // Color Palette - Technical Authority
  colors: {
    // Primary colors (trust, intelligence, innovation)
    primary: {
      deep: '#1E40AF', // Deep blue - trust, authority
      electric: '#3B82F6', // Electric blue - innovation
      light: '#DBEAFE', // Light blue - backgrounds
    },

    // Accent colors
    accent: {
      cyan: '#06B6D4', // Cyan - energy, highlights, interactive
      coral: '#F97316', // Coral - human warmth, CTAs
    },

    // Base backgrounds (warm whites, not cold grays)
    background: {
      base: '#FAFAF9', // Warm white
      card: '#FFFFFF', // Pure white
      subtle: '#F4F4F5', // Very light warm gray
      overlay: 'rgba(255, 255, 255, 0.95)',
    },

    // Text colors (warm slate, not cold gray)
    text: {
      primary: '#0F172A', // Deep slate
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

  // Shadows (professional, subtle)
  shadows: {
    subtle: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    default: '0 2px 4px 0 rgba(0, 0, 0, 0.08)',
    medium: '0 4px 12px rgba(0, 0, 0, 0.08)',
    large: '0 8px 24px rgba(0, 0, 0, 0.12)',
    xl: '0 12px 32px rgba(0, 0, 0, 0.16)',

    // Accent glows (minimal, professional)
    glow: {
      cyan: '0 0 16px rgba(6, 182, 212, 0.2)',
      coral: '0 0 16px rgba(249, 115, 22, 0.2)',
      blue: '0 0 16px rgba(30, 64, 175, 0.2)',
    },
  },

  // Border radius (professional, 12px standard)
  radius: {
    none: '0',
    sm: '0.375rem', // 6px
    default: '0.75rem', // 12px - professional standard
    md: '0.75rem', // 12px
    lg: '1rem', // 16px
    xl: '1.5rem', // 24px
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

  // Transitions (minimal, professional - 200ms standard)
  transitions: {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    default: '200ms cubic-bezier(0.4, 0, 0.2, 1)', // Professional standard
    slow: '400ms cubic-bezier(0.4, 0, 0.2, 1)',
  },

  // Typography (Professional: Inter or Public Sans)
  typography: {
    family: {
      primary: 'Inter, system-ui, -apple-system, sans-serif',
      mono: 'ui-monospace, monospace',
    },
    heading: {
      weight: 700, // Bold (professional, not heavy)
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
