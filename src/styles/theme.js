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

  // Shadows (premium, layered depth)
  shadows: {
    subtle: '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.04)',
    default: '0 2px 4px 0 rgba(0, 0, 0, 0.06), 0 2px 4px -2px rgba(0, 0, 0, 0.06)',
    medium: '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -2px rgba(0, 0, 0, 0.08)',
    large: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
    '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.18)',

    // Accent glows (premium, sophisticated)
    glow: {
      cyan: '0 0 20px rgba(6, 182, 212, 0.25), 0 0 40px rgba(6, 182, 212, 0.12)',
      coral: '0 0 20px rgba(249, 115, 22, 0.25), 0 0 40px rgba(249, 115, 22, 0.12)',
      blue: '0 0 20px rgba(30, 64, 175, 0.25), 0 0 40px rgba(30, 64, 175, 0.12)',
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

  // Transitions (premium, refined easing)
  transitions: {
    fast: '150ms cubic-bezier(0.34, 1.56, 0.64, 1)',
    default: '200ms cubic-bezier(0.34, 1.56, 0.64, 1)',
    slow: '400ms cubic-bezier(0.34, 1.56, 0.64, 1)',
    smooth: '300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
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
