import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlossyCardProps {
  children: ReactNode;
  className?: string;
  hover?: 'lift' | 'glow' | 'both' | 'none';
}

export default function GlossyCard({ children, className = '', hover = 'both' }: GlossyCardProps) {
  const hoverEffects = {
    lift: 'hover:-translate-y-1',
    glow: 'hover:shadow-[0_0_30px_rgba(61,210,240,0.2)]',
    both: 'hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(61,210,240,0.2)]',
    none: ''
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`
        relative overflow-hidden rounded-xl
        bg-gradient-to-br from-white/90 to-white/50
        backdrop-blur-xl border border-white/20
        ${hoverEffects[hover]}
        transition-all duration-300
        ${className}
      `}
    >
      {/* Glossy overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent opacity-50" />
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
      
      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </motion.div>
  );
}