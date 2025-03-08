import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: Step[];
  variant?: 'dark' | 'light';
}

export default function ProcessSteps({ steps, variant = 'dark' }: ProcessStepsProps) {
  const isDark = variant === 'dark';

  return (
    <div className="relative">
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#3DD2F0]/20 via-[#5D9EF0]/20 to-[#3DD2F0]/20 -translate-y-1/2 hidden lg:block" />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative p-8 rounded-xl border transition-all ${
              isDark
                ? 'bg-[#0B0F17]/50 border-[#3DD2F0]/10 hover:border-[#3DD2F0]/30'
                : 'bg-white/50 border-[#3DD2F0]/20 hover:border-[#3DD2F0]/40'
            }`}
          >
            <div className="bg-gradient-to-r from-[#3DD2F0] to-[#5D9EF0] w-12 h-12 rounded-full flex items-center justify-center mb-6">
              <step.icon className="w-6 h-6 text-[#0B0F17]" />
            </div>
            <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {step.title}
            </h3>
            <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}