// QuizTheme.js - Central styling configuration
// Bolt: Edit THIS FILE ONLY to match your app's design

export const colors = {
  // Primary brand color - buttons, highlights, active states
  primary: '#2563EB',
  primaryHover: '#1D4ED8',
  primaryLight: '#EFF6FF',

  // Feedback colors
  success: '#16A34A',
  successLight: '#DCFCE7',
  error: '#EF4444',
  errorLight: '#FEE2E2',
  
  // Background colors
  bg: '#F8FAFC',
  secondaryBg: '#FFFFFF',
  cardBg: '#FFFFFF',
  
  // Text colors
  text: '#1E293B',
  textSecondary: '#64748B',
  textMuted: '#94A3B8',
  
  // Border colors
  border: '#E2E8F0',
  borderFocus: '#2563EB',
};

export const spacing = {
  xs: '0.25rem',   // 4px
  sm: '0.5rem',    // 8px
  md: '1rem',      // 16px
  lg: '1.5rem',    // 24px
  xl: '2rem',      // 32px
  xxl: '3rem',     // 48px
};

export const typography = {
  // Font family
  fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  
  // Font sizes
  heading: '1.75rem',      // 28px
  subheading: '1.25rem',   // 20px
  body: '1rem',            // 16px
  small: '0.875rem',       // 14px
  tiny: '0.75rem',         // 12px
  
  // Line heights
  lineHeightTight: '1.25',
  lineHeightNormal: '1.5',
  lineHeightRelaxed: '1.75',
  
  // Font weights
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
};

export const borderRadius = '0.75rem';  // 12px
export const borderRadiusSmall = '0.5rem';  // 8px
export const borderRadiusLarge = '1rem';  // 16px

export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
  focus: '0 0 0 3px rgba(99, 102, 241, 0.3)',
};

export const transitions = {
  fast: '150ms ease',
  normal: '200ms ease',
  slow: '300ms ease',
};

// Export complete theme object for convenience
export const theme = {
  colors,
  spacing,
  typography,
  borderRadius,
  borderRadiusSmall,
  borderRadiusLarge,
  shadows,
  transitions,
};

export default theme;