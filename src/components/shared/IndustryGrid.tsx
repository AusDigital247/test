import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface Industry {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

interface IndustryGridProps {
  industries: Industry[];
  variant?: 'dark' | 'light';
}

export default function IndustryGrid({ industries, variant = 'dark' }: IndustryGridProps) {
  const isDark = variant === 'dark';

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {industries.map((industry, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`p-6 rounded-xl border transition-all ${
            isDark
              ? 'bg-[#0B0F17]/50 border-[#3DD2F0]/10 hover:border-[#3DD2F0]/30'
              : 'bg-white/50 border-[#3DD2F0]/20 hover:border-[#3DD2F0]/40'
          }`}
        >
          <industry.icon className="w-12 h-12 text-[#3DD2F0] mb-4" />
          <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {industry.title}
          </h3>
          <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {industry.description}
          </p>
          <ul className="space-y-2">
            {industry.features.map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-[#3DD2F0] mr-2">•</span>
                <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}