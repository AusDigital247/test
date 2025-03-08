import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AnimatedBackground from '../effects/AnimatedBackground';
import ParticlesBackground from '../particles/ParticlesBackground';
import TypedHeading from './TypedHeading';

const typedWords = [
  "AI Solutions",
  "Software Development",
  "Data Engineering",
  "Cloud Solutions"
];

export default function Hero() {
  const navigate = useNavigate();

  const handleConsultation = () => {
    navigate('/contact', { state: { requestDemo: true } });
  };

  return (
    <div className="relative min-h-[100svh] bg-[#0B0F17] text-white overflow-hidden">
      <AnimatedBackground />
      <ParticlesBackground />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-[100svh] flex items-center py-20 lg:py-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-3xl mx-auto lg:mx-0"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-block px-4 py-2 rounded-full bg-[#3DD2F0]/10 text-[#3DD2F0] 
                border border-[#3DD2F0]/30 mb-6 text-sm sm:text-base"
            >
              Empowering Business Growth Through AI Technology
            </motion.span>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Transform Your Business with{' '}
              <TypedHeading words={typedWords} />
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl">
              Delivering innovative, distinctive Software solutions leveraging advanced AI 
              to make your business more profitable and competitive
            </p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <button 
                onClick={handleConsultation}
                className="px-6 py-3 rounded-full text-base sm:text-lg font-medium transition-all
                  bg-gradient-to-r from-[#3DD2F0] to-[#5D9EF0] hover:from-[#2CC1E0] hover:to-[#4C8DE0]
                  text-[#0B0F17] shadow-lg shadow-[#3DD2F0]/20 flex items-center justify-center space-x-2"
              >
                <span>Start Your Digital Transformation</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button 
                onClick={() => navigate('/about')}
                className="px-6 py-3 rounded-full text-base sm:text-lg font-medium
                  border border-[#3DD2F0]/30 hover:border-[#3DD2F0]/50 hover:bg-[#3DD2F0]/10 
                  text-white transition-all"
              >
                Learn More About Us
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}