export function Button({ children, variant = 'primary', onClick, disabled, type = 'button', className = '' }) {
  const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-colors';

  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed',
    success: 'bg-green-600 text-white hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 disabled:border-gray-400 disabled:text-gray-400 disabled:cursor-not-allowed'
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
