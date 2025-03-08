import React from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function CTA() {
  return (
    <div className="bg-[#0B0F17] py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#5D9EF0]/5 to-[#3DD2F0]/5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection>
          <div className="bg-gradient-to-r from-[#3DD2F0]/10 to-[#5D9EF0]/10 backdrop-blur-sm 
            rounded-2xl p-12 md:p-16 border border-[#3DD2F0]/20">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3DD2F0] to-[#5D9EF0]">
                  AI
                </span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Book a free consultation to discover how our AI solutions can reduce costs and drive growth for your business.
              </p>
              <button className="bg-gradient-to-r from-[#3DD2F0] to-[#5D9EF0] hover:from-[#2CC1E0] hover:to-[#4C8DE0]
                text-[#0B0F17] px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 mx-auto 
                shadow-lg shadow-[#3DD2F0]/20 hover:shadow-[#3DD2F0]/30 transition-all">
                <span>Schedule Your Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}