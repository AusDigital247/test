import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function HeroContent() {
  const navigate = useNavigate();

  const handleConsultation = () => {
    navigate('/contact', { state: { requestDemo: true } });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 text-center lg:text-left"
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="inline-block px-4 py-2 rounded-full bg-[#3DD2F0]/10 text-[#3DD2F0] border border-[#3DD2F0]/30 mb-6"
      >
        Industry leaders choose to
      </motion.span>
      <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
        Build with
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3DD2F0] to-[#5D9EF0]"> AUS Digital</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-400 mb-8">
        Trusted by leading enterprises, visionary startups, and developers all over the world
      </p>
      <motion.div 
        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <button 
          onClick={handleConsultation}
          className="group px-8 py-4 rounded-full flex items-center justify-center space-x-2 text-lg font-semibold transition-all
            bg-gradient-to-r from-[#3DD2F0] to-[#5D9EF0] hover:from-[#2CC1E0] hover:to-[#4C8DE0]
            text-[#0B0F17] shadow-lg shadow-[#3DD2F0]/20"
        >
          <span>Start Building</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
        <button className="border-2 border-[#3DD2F0]/30 hover:border-[#3DD2F0]/50 hover:bg-[#3DD2F0]/10 
          text-white px-8 py-4 rounded-full text-lg font-semibold transition-all"
          onClick={() => navigate('/docs')}
        >
          View Documentation
        </button>
      </motion.div>
    </motion.div>
  );
}