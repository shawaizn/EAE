export function Card({ children, className = '' }) {
  return (
    <div className={`bg-white rounded-lg shadow-sm border-2 border-slate-200 p-8 ${className}`}>
      {children}
    </div>
  );
}
