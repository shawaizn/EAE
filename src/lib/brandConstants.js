/**
 * Brand Foundation Constants
 *
 * Central source of truth for all brand styling across the app.
 * Use these constants to maintain consistency and enable easy updates.
 */

export const BRAND = {
  // Colors
  colors: {
    primary: 'cyan-600',      // Teal #0891b2
    primaryHover: 'cyan-700',
    primaryLight: 'cyan-500',
    charcoal: 'slate-900',    // #1e293b
    border: 'slate-200',
    subtleBg: 'slate-50',
    neutralBg: 'slate-100',
    // NEW: Energetic complementary colors
    electricPurple: 'violet-500',    // #8B5CF6 - Secondary energy color
    electricPurpleHover: 'violet-600', // #7C3AED
    deepPurple: 'violet-700',        // #6D28D9 - Depth variant
    vibrantOrange: 'orange-500',     // #F97316 - Accent highlights
    vibrantOrangeHover: 'orange-600', // #EA580C
    text: {
      primary: 'slate-900',
      secondary: 'slate-700',
      tertiary: 'slate-600',
      light: 'slate-400',
    }
  },

  // Gradient combinations for animated backgrounds
  gradients: {
    energetic: 'from-cyan-500 via-violet-500 to-orange-500',
    cyanPurple: 'from-cyan-600 to-violet-600',
    purpleOrange: 'from-violet-600 to-orange-600',
    deepEnergy: 'from-cyan-700 via-violet-700 to-orange-700',
  },

  // Animation settings
  animations: {
    duration: {
      fast: '200ms',
      normal: '300ms',
      slow: '500ms',
      gradient: '15s',
    },
    easing: {
      default: 'ease-in-out',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
    }
  },

  // Typography
  typography: {
    headline: {
      weight: 'font-black',           // 900
      spacing: 'tracking-tight',      // -0.02em
      sizes: {
        xl: 'text-6xl',
        lg: 'text-5xl',
        md: 'text-3xl',
        sm: 'text-2xl',
      }
    },
    body: {
      weight: 'font-normal',          // 400
      semibold: 'font-semibold',      // 500-600
      medium: 'font-medium',          // 500
    }
  },

  // Spacing
  spacing: {
    maxWidth: 'max-w-screen-xl',    // 1280px
    padding: {
      desktop: 'px-8',               // 32px
      mobile: 'px-4',                // 16px
      section: 'py-8',
    },
    section: 'mb-24',                // 96px between sections
    card: 'p-12',                    // Card padding
  },

  // Borders & Shadows
  borders: {
    default: 'border-2 border-slate-200',
    subtle: 'border border-slate-200',
    accent: 'border-2 border-cyan-600',
  },
  shadows: {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
  },

  // Common patterns
  patterns: {
    card: 'border-2 border-slate-200 rounded-lg shadow-sm',
    cardHeader: 'p-6 bg-slate-50 border-b-2 border-slate-200',
    button: {
      primary: 'bg-cyan-600 text-white hover:bg-cyan-700 transition-colors',
      secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200 transition',
      charcoal: 'bg-slate-900 text-white hover:bg-slate-800 transition-colors',
    },
    link: 'text-cyan-600 hover:text-cyan-700 font-medium transition-colors',
  }
};

// Helper to generate headline styles
export const headlineStyle = (size = 'lg') => ({
  className: `${BRAND.typography.headline.sizes[size]} ${BRAND.typography.headline.weight} ${BRAND.colors.text.primary}`,
  style: { letterSpacing: '-0.02em' }
});

// Helper for section headers
export const sectionHeaderStyle = (size = 'sm') => ({
  className: `${BRAND.typography.headline.sizes[size]} ${BRAND.typography.headline.weight} ${BRAND.colors.text.primary}`,
  style: { letterSpacing: '-0.02em' }
});
