import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
  variant?: 'dark' | 'light';
}

export default function FeatureGrid({ features, variant = 'dark' }: FeatureGridProps) {
  const isDark = variant === 'dark';

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
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
          <feature.icon className="w-12 h-12 text-[#3DD2F0] mb-4" />
          <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {feature.title}
          </h3>
          <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
            {feature.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}