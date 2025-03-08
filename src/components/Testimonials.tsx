import React from 'react';
import { Star } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const testimonials = [
  {
    quote: "TechnovaAI transformed our customer service with their AI solution. We've seen a 45% reduction in response times.",
    author: "Sarah Chen",
    position: "CTO, TechStart Inc.",
    rating: 5
  },
  {
    quote: "Their expertise in AI and data engineering helped us streamline our operations and reduce costs significantly.",
    author: "Michael Rodriguez",
    position: "Operations Director, DataFlow",
    rating: 5
  },
  {
    quote: "The team's approach to AI integration was methodical and effective. They delivered exactly what we needed.",
    author: "Amanda Lee",
    position: "CEO, InnovateNow",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <div className="bg-[#0B0F17] py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#3DD2F0]/5 to-[#5D9EF0]/5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3DD2F0] to-[#5D9EF0]">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See how we've helped businesses achieve their goals
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection
              key={index}
              className="bg-[#0B0F17]/50 backdrop-blur-sm p-8 rounded-xl 
                border border-[#3DD2F0]/10 hover:border-[#3DD2F0]/30 transition-all"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#3DD2F0] fill-[#3DD2F0]" />
                ))}
              </div>
              <blockquote className="text-lg text-gray-300 mb-6">"{testimonial.quote}"</blockquote>
              <div className="text-white font-semibold">{testimonial.author}</div>
              <div className="text-[#3DD2F0]">{testimonial.position}</div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}