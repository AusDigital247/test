import React from 'react';
import { Brain, Code, Database, Search, MessageSquareCode, LineChart } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const services = [
  {
    icon: Brain,
    title: "AI Integration",
    description: "Custom AI solutions to automate processes, reduce costs, and enhance decision-making capabilities."
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Modern, responsive websites and web applications built with cutting-edge technologies."
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Robust data pipelines and infrastructure to power your AI and analytics initiatives."
  },
  {
    icon: MessageSquareCode,
    title: "AI Agents & Chatbots",
    description: "Intelligent conversational agents to enhance customer service and automate support."
  },
  {
    icon: Search,
    title: "SEO Services",
    description: "Data-driven SEO strategies to improve visibility and drive organic traffic."
  },
  {
    icon: LineChart,
    title: "Analytics",
    description: "Advanced analytics solutions for data-driven decision making."
  }
];

export default function Services() {
  return (
    <div className="py-24 bg-[#0B0F17]/95 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#5D9EF0]/5 to-[#3DD2F0]/5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3DD2F0] to-[#5D9EF0]">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive AI and software solutions to drive your business forward
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection
              key={index}
              className="p-6 rounded-xl border border-[#3DD2F0]/10 hover:border-[#3DD2F0]/30 
                bg-gradient-to-br from-[#0B0F17]/80 to-[#0B0F17]/40 backdrop-blur-sm
                transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <service.icon className="w-12 h-12 text-[#3DD2F0] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}