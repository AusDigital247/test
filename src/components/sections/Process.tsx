import { MessageSquare, Code2, Database, Rocket } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';
import SectionContainer from './SectionContainer';

const steps = [
  {
    icon: MessageSquare,
    title: 'Consultation',
    description: 'We start by understanding your business needs and challenges.'
  },
  {
    icon: Code2,
    title: 'Solution Design',
    description: 'Our experts design a tailored solution for your specific requirements.'
  },
  {
    icon: Database,
    title: 'Implementation',
    description: 'We develop and integrate the solution into your existing workflow.'
  },
  {
    icon: Rocket,
    title: 'Launch & Support',
    description: 'We ensure smooth deployment and provide ongoing support.'
  }
];

interface ProcessProps {
  variant?: 'dark' | 'light';
}

export default function Process({ variant = 'dark' }: ProcessProps) {
  const isDark = variant === 'dark';

  return (
    <SectionContainer
      title="Our"
      highlightedText="Process"
      description="A streamlined approach to implementing AI solutions for your business"
      variant={variant}
    >
      <div className="relative">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#3DD2F0]/20 via-[#5D9EF0]/20 to-[#3DD2F0]/20 -translate-y-1/2 hidden lg:block" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <AnimatedSection
              key={index}
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
            </AnimatedSection>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}