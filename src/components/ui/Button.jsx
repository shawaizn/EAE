import { behavior } from '../../styles/theme';

const AMBER = '#c17f3a';
const AMBER_DARK = '#a66830';

export function Button({ children, variant = 'primary', onClick, disabled, type = 'button', className = '', style = {} }) {
  const pressEffect = behavior.hoverScale ? 'active:scale-95 active:duration-75' : '';
  const baseClass = `px-4 sm:px-6 py-2 sm:py-3 rounded-md font-semibold transition-all duration-200 min-h-10 sm:min-h-11 focus:outline-none focus:ring-2 focus:ring-offset-2 ${pressEffect}`;

  const variantStyles = {
    primary: {
      className: `text-white focus:ring-energise-400 disabled:opacity-60 disabled:cursor-not-allowed`,
      style: { backgroundColor: AMBER },
      hoverStyle: { backgroundColor: AMBER_DARK },
    },
    secondary: {
      className: `bg-slate-200 text-slate-900 hover:bg-slate-300 hover:shadow-md focus:ring-energise-400 disabled:opacity-50 disabled:cursor-not-allowed`,
      style: {},
    },
    success: {
      className: `bg-green-600 text-white hover:bg-green-700 hover:shadow-md focus:ring-green-500 disabled:opacity-60 disabled:cursor-not-allowed`,
      style: {},
    },
    outline: {
      className: `text-energise-400 bg-white hover:bg-energise-50 focus:ring-energise-400 disabled:opacity-50 disabled:cursor-not-allowed`,
      style: { border: `2px solid ${AMBER}`, color: AMBER },
    },
  };

  const v = variantStyles[variant] || variantStyles.primary;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClass} ${v.className} ${className}`}
      style={{ ...v.style, ...style }}
      onMouseEnter={e => { if (!disabled && v.hoverStyle) Object.assign(e.currentTarget.style, v.hoverStyle); }}
      onMouseLeave={e => { if (!disabled && v.style) Object.assign(e.currentTarget.style, v.style); }}
    >
      {children}
    </button>
  );
}
