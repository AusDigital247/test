import { motion } from 'framer-motion';
import { LucideIcon, Sparkles, Zap, Shield, Clock } from 'lucide-react';
import SectionContainer from './SectionContainer';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeaturesProps {
  variant?: 'dark' | 'light';
}

const features = [
  {
    icon: Sparkles,
    title: 'Custom AI Solutions',
    description: 'Tailored AI implementations that adapt to your specific business needs and workflows.'
  },
  {
    icon: Zap,
    title: 'Rapid Development',
    description: 'Fast-paced development with continuous deployment and quick iterations.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security measures to protect your data and applications.'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock technical support and monitoring for your systems.'
  }
];

export default function Features({ variant = 'dark' }: FeaturesProps) {
  const isDark = variant === 'dark';

  return (
    <SectionContainer
      title="Why Choose"
      highlightedText="AUS Digital"
      description="We combine cutting-edge technology with industry expertise to deliver exceptional results"
      variant={variant}
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
    </SectionContainer>
  );
}