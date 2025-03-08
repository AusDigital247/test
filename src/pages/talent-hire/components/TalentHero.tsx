import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

export default function TalentHero() {
  return (
    <div className="relative pt-32 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex justify-center mb-6">
            <Brain className="w-16 h-16 text-[#3DD2F0]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Hire Expert Tech Talent
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Access our pool of vetted developers, engineers, and consultants for your next project
          </p>
        </motion.div>
      </div>
    </div>
  );
}