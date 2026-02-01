export function Button({ children, variant = 'primary', onClick, disabled, type = 'button', className = '' }) {
  const baseStyles = 'px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 transform active:scale-95 min-h-10 sm:min-h-11';

  const variants = {
    primary: 'bg-cyan-600 text-white hover:bg-cyan-700 hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-0.5 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none',
    secondary: 'bg-slate-200 text-slate-800 hover:bg-slate-300 hover:shadow-md hover:-translate-y-0.5 disabled:bg-slate-100 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none',
    success: 'bg-cyan-600 text-white hover:bg-cyan-700 hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-0.5 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none',
    outline: 'border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-50 hover:border-cyan-700 hover:shadow-md hover:shadow-cyan-500/20 hover:-translate-y-0.5 disabled:border-gray-400 disabled:text-gray-400 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none',
    purple: 'bg-violet-500 text-white hover:bg-violet-600 hover:shadow-lg hover:shadow-violet-500/30 hover:-translate-y-0.5 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none',
    orange: 'bg-orange-500 text-white hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none',
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
