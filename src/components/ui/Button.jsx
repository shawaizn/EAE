export function Button({ children, variant = 'primary', onClick, disabled, type = 'button', className = '' }) {
  const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-colors';

  const variants = {
    primary: 'bg-cyan-600 text-white hover:bg-cyan-700 disabled:bg-gray-400 disabled:cursor-not-allowed',
    secondary: 'bg-slate-200 text-slate-800 hover:bg-slate-300 disabled:bg-slate-100 disabled:cursor-not-allowed',
    success: 'bg-cyan-600 text-white hover:bg-cyan-700 disabled:bg-gray-400 disabled:cursor-not-allowed',
    outline: 'border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-50 disabled:border-gray-400 disabled:text-gray-400 disabled:cursor-not-allowed'
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
