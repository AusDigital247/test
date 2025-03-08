import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-indigo-950 via-indigo-900 to-indigo-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen pt-20 pb-16">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Transform Your Business with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300"> AI Innovation</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Harness the power of artificial intelligence to automate processes, reduce costs, and drive unprecedented growth for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-600 hover:to-teal-500 text-white px-8 py-4 rounded-lg flex items-center justify-center space-x-2 text-lg font-semibold transition-all">
                <span>Start Your AI Journey</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-emerald-400/30 hover:border-emerald-400/50 hover:bg-emerald-400/10 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all">
                View Case Studies
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-lg blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80"
              alt="AI Technology Visualization"
              className="relative rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}