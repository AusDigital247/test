import { motion } from 'framer-motion';

export default function NeonGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#3DD2F0]/5 to-[#5D9EF0]/5" />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(61, 210, 240, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(93, 158, 240, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
          maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)'
        }}
      />
    </div>
  );
}