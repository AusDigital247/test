import React from 'react';
import { Sparkles, Zap, Shield, Clock } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

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

export default function Features() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-purple-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-purple-400">TechnovaAI</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We combine cutting-edge technology with industry expertise to deliver exceptional results.
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection
              key={index}
              className="bg-white/5 backdrop-blur-lg p-8 rounded-xl border border-white/10 hover:border-purple-400/50 transition-all"
            >
              <feature.icon className="w-12 h-12 text-purple-400 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}