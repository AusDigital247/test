import React from 'react';
import { MessageSquare, Code2, Database, Rocket } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

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

export default function Process() {
  return (
    <div className="bg-[#0B0F17] py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#5D9EF0]/5 to-[#3DD2F0]/5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3DD2F0] to-[#5D9EF0]">Process</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A streamlined approach to implementing AI solutions for your business
          </p>
        </AnimatedSection>
        
        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#3DD2F0]/20 via-[#5D9EF0]/20 to-[#3DD2F0]/20 -translate-y-1/2 hidden lg:block" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <AnimatedSection
                key={index}
                className="relative bg-[#0B0F17]/50 backdrop-blur-sm p-8 rounded-xl 
                  border border-[#3DD2F0]/10 hover:border-[#3DD2F0]/30 transition-all"
              >
                <div className="bg-gradient-to-r from-[#3DD2F0] to-[#5D9EF0] 
                  w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <step.icon className="w-6 h-6 text-[#0B0F17]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}