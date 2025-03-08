{`import { useState, useEffect } from 'react';
import { Menu, X, Brain, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import HeaderLink from './HeaderLink';

interface HeaderProps {
  theme?: 'light' | 'dark';
}

export default function Header({ theme = 'dark' }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showLocations, setShowLocations] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'AI Solutions', path: '/services/ai-integration' },
    { name: 'Software Development', path: '/services/web-development' },
    { name: 'Data Engineering', path: '/services/data-engineering' },
    { name: 'AI Agents & Chatbots', path: '/services/ai-agents' },
    { name: 'Data Analytics', path: '/services/analytics' },
    { name: 'Digital Marketing', path: '/services/seo-services' }
  ];

  const locations = [
    { name: 'Toronto', path: '/services/ai-integration/toronto' },
    { name: 'Kitchener', path: '/services/ai-integration/kitchener' },
    { name: 'London', path: '/services/ai-integration/london' }
  ];

  const menuItems = [
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Documentation', path: '/docs' }
  ];

  const handleConsultation = () => {
    navigate('/contact', { state: { requestDemo: true } });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={\`fixed w-full z-50 transition-all duration-300 \${
        scrolled 
          ? 'bg-[#0C1018]/95 backdrop-blur-lg shadow-lg shadow-[#3DD2F0]/5'
          : 'bg-[#0C1018]/80'
      } border-b border-[#3DD2F0]/10\`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.7 }}
            >
              <Brain className="h-8 w-8 text-[#3DD2F0]" />
            </motion.div>
            <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#3DD2F0] to-[#5D9EF0]">
              AUS Digital
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <button
                className="flex items-center space-x-1 text-gray-300 hover:text-[#3DD2F0] transition-colors"
                onMouseEnter={() => setShowServices(true)}
                onMouseLeave={() => setShowServices(false)}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {showServices && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 mt-2 w-64 rounded-lg bg-[#0B0F17]/95 backdrop-blur-lg border border-[#3DD2F0]/10 shadow-xl"
                    onMouseEnter={() => setShowServices(true)}
                    onMouseLeave={() => setShowServices(false)}
                  >
                    <div className="py-2">
                      {services.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className="block px-4 py-2 text-gray-300 hover:text-[#3DD2F0] hover:bg-white/5 transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="relative">
              <button
                className="flex items-center space-x-1 text-gray-300 hover:text-[#3DD2F0] transition-colors"
                onMouseEnter={() => setShowLocations(true)}
                onMouseLeave={() => setShowLocations(false)}
              >
                <span>Locations</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {showLocations && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 mt-2 w-64 rounded-lg bg-[#0B0F17]/95 backdrop-blur-lg border border-[#3DD2F0]/10 shadow-xl"
                    onMouseEnter={() => setShowLocations(true)}
                    onMouseLeave={() => setShowLocations(false)}
                  >
                    <div className="py-2">
                      {locations.map((location) => (
                        <Link
                          key={location.path}
                          to={location.path}
                          className="block px-4 py-2 text-gray-300 hover:text-[#3DD2F0] hover:bg-white/5 transition-colors"
                        >
                          {location.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {menuItems.map((item) => (
              <HeaderLink key={item.path} to={item.path}>
                {item.name}
              </HeaderLink>
            ))}
            
            <button
              onClick={handleConsultation}
              className="px-6 py-2.5 rounded-full font-medium transition-all
                bg-gradient-to-r from-[#3DD2F0] to-[#5D9EF0] hover:from-[#2CC1E0] hover:to-[#4C8DE0]
                text-[#0B0F17] shadow-lg shadow-[#3DD2F0]/20 hover:shadow-[#3DD2F0]/30"
            >
              Free Consultation
            </button>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0B0F17]/95 backdrop-blur-lg border-t border-[#3DD2F0]/10"
          >
            <div className="px-4 py-6 space-y-4">
              <div className="space-y-2">
                <div className="font-medium text-gray-300 px-4">Services</div>
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="block px-4 py-2 text-gray-400 hover:text-[#3DD2F0] hover:bg-white/5 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              <div className="space-y-2">
                <div className="font-medium text-gray-300 px-4">Locations</div>
                {locations.map((location) => (
                  <Link
                    key={location.path}
                    to={location.path}
                    className="block px-4 py-2 text-gray-400 hover:text-[#3DD2F0] hover:bg-white/5 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {location.name}
                  </Link>
                ))}
              </div>
              
              {menuItems.map((item) => (
                <motion.div
                  key={item.path}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    to={item.path}
                    className="block px-4 py-2 text-gray-400 hover:text-[#3DD2F0] hover:bg-white/5 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <button
                  onClick={() => {
                    handleConsultation();
                    setIsOpen(false);
                  }}
                  className="w-full px-6 py-3 rounded-full font-medium text-center
                    bg-gradient-to-r from-[#3DD2F0] to-[#5D9EF0]
                    text-[#0B0F17] shadow-lg shadow-[#3DD2F0]/20"
                >
                  Free Consultation
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}`}