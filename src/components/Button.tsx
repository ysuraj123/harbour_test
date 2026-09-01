import { ButtonProps } from '../types';

export function Button({ label, onClick, variant = 'primary', disabled = false, className = '' }: ButtonProps) {
  const base = 'px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants: Record<string, string> = {
    primary: 'bg-v1-teal text-white hover:bg-teal-600 focus:ring-teal-400',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-400',
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}