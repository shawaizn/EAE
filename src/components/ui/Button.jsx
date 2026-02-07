import { behavior } from '../../styles/theme';

export function Button({ children, variant = 'primary', onClick, disabled, type = 'button', className = '' }) {
  const hoverLift = behavior.hoverScale ? 'hover:-translate-y-0.5' : '';
  const pressEffect = behavior.hoverScale ? 'active:scale-95 active:duration-75' : '';

  const baseStyles = `px-4 sm:px-6 py-2 sm:py-3 rounded-md font-semibold transition-all duration-200 transform ${pressEffect} min-h-10 sm:min-h-11 focus:outline-none focus:ring-2 focus:ring-offset-2`;

  const variants = {
    primary: `bg-cyan-600 text-white hover:bg-cyan-700 ${behavior.hoverGlow ? 'hover:shadow-lg hover:shadow-cyan-500/40' : 'hover:shadow-md'} ${hoverLift} focus:ring-cyan-500 disabled:bg-slate-400 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none`,
    secondary: `bg-slate-200 text-slate-900 hover:bg-slate-300 hover:shadow-md ${hoverLift} focus:ring-slate-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none`,
    success: `bg-green-600 text-white hover:bg-green-700 ${behavior.hoverGlow ? 'hover:shadow-lg hover:shadow-green-500/40' : 'hover:shadow-md'} ${hoverLift} focus:ring-green-500 disabled:bg-slate-400 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none`,
    outline: `border-2 border-cyan-600 text-cyan-600 bg-white hover:bg-cyan-50 hover:border-cyan-700 hover:shadow-md ${behavior.hoverGlow ? 'hover:shadow-cyan-500/30' : ''} ${hoverLift} focus:ring-cyan-500 disabled:border-slate-400 disabled:text-slate-400 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none`,
    purple: `bg-blue-600 text-white hover:bg-blue-700 ${behavior.hoverGlow ? 'hover:shadow-lg hover:shadow-blue-500/40' : 'hover:shadow-md'} ${hoverLift} focus:ring-blue-500 disabled:bg-slate-400 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none`,
    orange: `bg-orange-600 text-white hover:bg-orange-700 ${behavior.hoverGlow ? 'hover:shadow-lg hover:shadow-orange-500/40' : 'hover:shadow-md'} ${hoverLift} focus:ring-orange-500 disabled:bg-slate-400 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none`,
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
