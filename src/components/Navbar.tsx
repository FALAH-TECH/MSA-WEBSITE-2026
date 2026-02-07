import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useReducedMotion, motionConfig } from './Motion';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Events', href: '#events' },
  { name: 'Team', href: '#team' },
  { name: 'Join', href: '#join' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: reduceMotion ? 0 : -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduceMotion ? 0.2 : motionConfig.duration.normal, ease: motionConfig.premiumEasing }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050810]/80 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.a
            href="#"
            className="flex items-center space-x-3 group"
            whileHover={!reduceMotion ? { scale: 1.02 } : undefined}
            whileTap={!reduceMotion ? { scale: 0.98 } : undefined}
          >
            <img
              src="/LOGO.svg"
              alt="MSA LBSCEK Logo"
              className="w-12 h-12 object-contain"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-white font-semibold tracking-tight text-sm">
                MSA
              </span>
              <span className="text-gray-400 text-xs tracking-wide">
                LBSCEK
              </span>
            </div>
          </motion.a>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-gray-300 hover:text-white transition-colors relative group"
                initial={{ opacity: 0, y: reduceMotion ? 0 : -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: reduceMotion ? 0 : index * 0.06 + 0.1,
                  duration: motionConfig.duration.normal,
                  ease: motionConfig.premiumEasing,
                }}
                whileHover={!reduceMotion ? { scale: 1.05 } : undefined}
                whileTap={!reduceMotion ? { scale: 0.95 } : undefined}
              >
                <span className="relative z-10 font-medium tracking-tight">
                  {link.name}
                </span>
                {!reduceMotion && (
                  <motion.div
                    className="absolute inset-0 bg-white/5 rounded-lg"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: motionConfig.hoverDuration }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          <motion.button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={!reduceMotion ? { scale: 0.9 } : undefined}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: motionConfig.duration.fast }}
          className="md:hidden bg-[#050810]/95 backdrop-blur-xl border-b border-white/10"
        >
          <div className="px-6 py-4 space-y-2">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: index * 0.06,
                  duration: motionConfig.duration.fast,
                }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
