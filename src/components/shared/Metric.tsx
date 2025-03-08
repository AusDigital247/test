import { motion } from 'framer-motion';

interface MetricProps {
  value: string;
  label: string;
  description: string;
  variant?: 'dark' | 'light';
}

export default function Metric({ value, label, description, variant = 'dark' }: MetricProps) {
  const isDark = variant === 'dark';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`p-6 rounded-xl border transition-all ${
        isDark
          ? 'bg-[#0B0F17]/50 border-[#3DD2F0]/10'
          : 'bg-white/50 border-[#3DD2F0]/20'
      }`}
    >
      <div className={`text-4xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        {value}
      </div>
      <div className="text-lg font-semibold text-[#3DD2F0] mb-2">{label}</div>
      <div className={isDark ? 'text-gray-400' : 'text-gray-600'}>
        {description}
      </div>
    </motion.div>
  );
}