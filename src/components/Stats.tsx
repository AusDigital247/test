import React from 'react';
import { Users, Building2, Award, TrendingUp } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const stats = [
  {
    icon: Users,
    value: '200+',
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

export default function Stats() {
  return (
    <div className="bg-[#0B0F17] py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#3DD2F0]/5 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedSection
              key={index}
              className="bg-[#0B0F17]/50 backdrop-blur-sm p-8 rounded-xl border border-[#3DD2F0]/10 hover:border-[#3DD2F0]/30 transition-all"
            >
              <stat.icon className="w-12 h-12 text-[#3DD2F0] mb-4" />
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-[#3DD2F0] mb-2">{stat.label}</div>
              <div className="text-gray-400">{stat.description}</div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}