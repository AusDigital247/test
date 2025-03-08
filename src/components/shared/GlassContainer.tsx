import { ReactNode } from 'react';

interface GlassContainerProps {
  children: ReactNode;
  className?: string;
  variant?: 'light' | 'dark';
}

export default function GlassContainer({ children, className = '', variant = 'light' }: GlassContainerProps) {
  const baseStyles = variant === 'light' 
    ? 'bg-white/80 border-white/20'
    : 'bg-gray-900/80 border-gray-700/20';

  return (
    <div className={`
      backdrop-blur-xl
      ${baseStyles}
      border rounded-xl
      shadow-lg shadow-black/5
      ${className}
    `}>
      {children}
    </div>
  );
}