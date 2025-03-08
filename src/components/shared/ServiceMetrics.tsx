import { motion } from 'framer-motion';

interface Metric {
  value: string;
  label: string;
  trend?: 'up' | 'down';
}

interface ServiceMetricsProps {
  metrics: Metric[];
  variant?: 'dark' | 'light';
}

export default function ServiceMetrics({ metrics, variant = 'dark' }: ServiceMetricsProps) {
  const isDark = variant === 'dark';

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {metrics.map((metric, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`p-6 rounded-xl border ${
            isDark 
              ? 'bg-[#0B0F17]/50 border-[#3DD2F0]/10' 
              : 'bg-white/50 border-[#3DD2F0]/20'
          }`}
        >
          <div className={`text-2xl md:text-3xl font-bold mb-2 flex items-center ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            {metric.value}
            {metric.trend && (
              <span className={`ml-2 ${
                metric.trend === 'up' ? 'text-emerald-500' : 'text-rose-500'
              }`}>
                {metric.trend === 'up' ? '↑' : '↓'}
              </span>
            )}
          </div>
          <div className={isDark ? 'text-gray-400' : 'text-gray-600'}>
            {metric.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}