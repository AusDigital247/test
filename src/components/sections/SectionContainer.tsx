import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionContainerProps {
  children: ReactNode;
  title: string;
  highlightedText: string;
  description?: string;
  className?: string;
  variant?: 'dark' | 'light';
}

export default function SectionContainer({
  children,
  title,
  highlightedText,
  description,
  className = '',
  variant = 'dark'
}: SectionContainerProps) {
  const isDark = variant === 'dark';
  
  return (
    <div className={`
      ${isDark ? 'bg-[#0B0F17]' : 'bg-gradient-to-br from-slate-50 to-blue-50'} 
      py-24 relative overflow-hidden ${className}
    `}>
      <div className={`
        absolute inset-0 
        ${isDark 
          ? 'bg-gradient-to-b from-[#3DD2F0]/5 to-[#5D9EF0]/5' 
          : 'bg-gradient-to-b from-[#3DD2F0]/10 via-white/0 to-[#5D9EF0]/5'}
      `} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-6`}>
            {title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3DD2F0] to-[#5D9EF0]">
              {highlightedText}
            </span>
          </h2>
          {description && (
            <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
              {description}
            </p>
          )}
        </motion.div>
        {children}
      </div>
    </div>
  );
}