import { Users, Building2, Award, TrendingUp } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';
import SectionContainer from './SectionContainer';

const stats = [
  {
    icon: Users,
    value: '20+',
    label: 'Clients Served',
    description: 'Trusted by businesses worldwide'
  },
  {
    icon: Building2,
    value: '50+',
    label: 'Enterprise Solutions',
    description: 'Deployed at scale'
  },
  {
    icon: Award,
    value: '98%',
    label: 'Client Satisfaction',
    description: 'Based on client feedback'
  },
  {
    icon: TrendingUp,
    value: '40%',
    label: 'Average Cost Reduction',
    description: 'Through AI automation'
  }
];

interface StatsProps {
  variant?: 'dark' | 'light';
}

export default function Stats({ variant = 'dark' }: StatsProps) {
  const isDark = variant === 'dark';

  return (
    <SectionContainer
      title="Our"
      highlightedText="Impact"
      description="Delivering measurable results for businesses worldwide"
      variant={variant}
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <AnimatedSection
            key={index}
            className={`p-8 rounded-xl border transition-all ${
              isDark
                ? 'bg-[#0B0F17]/50 border-[#3DD2F0]/10 hover:border-[#3DD2F0]/30'
                : 'bg-white/50 border-[#3DD2F0]/20 hover:border-[#3DD2F0]/40'
            }`}
          >
            <stat.icon className="w-12 h-12 text-[#3DD2F0] mb-4" />
            <div className={`text-4xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {stat.value}
            </div>
            <div className="text-lg font-semibold text-[#3DD2F0] mb-2">{stat.label}</div>
            <div className={isDark ? 'text-gray-400' : 'text-gray-600'}>
              {stat.description}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </SectionContainer>
  );
}