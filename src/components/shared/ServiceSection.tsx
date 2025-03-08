import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ServiceSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
  variant?: 'dark' | 'light';
}

export default function ServiceSection({ title, children, className = '', variant = 'dark' }: ServiceSectionProps) {
  const isDark = variant === 'dark';
  
  return (
    <section className={`py-16 ${isDark ? 'bg-[#0B0F17]' : 'bg-white'} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-8 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            {title}
          </h2>
          {children}
        </motion.div>
      </div>
    </section>
  );
}