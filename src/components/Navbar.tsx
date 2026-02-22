import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useReducedMotion, motionConfig } from "./Motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Events", href: "#events" },
  { name: "Team", href: "#team" },
  { name: "Join", href: "#join" },
  { name: "Announcements", href: "/announcements" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 50);
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll as any);
  }, []);

  const desktopContainer = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : -10 },
    show: {
      opacity: 1,
      y: 0,
      transition: reduceMotion
        ? { duration: 0.1 }
        : {
            duration: 0.45,
            ease: motionConfig.premiumEasing,
            staggerChildren: 0.06,
            delayChildren: 0.08,
          },
    },
  };

  const desktopItem = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : -10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: reduceMotion ? 0 : -22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: reduceMotion ? 0.2 : 0.55,
        ease: motionConfig.premiumEasing,
      }}
      style={{ willChange: "transform, opacity" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#050810]/80 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.a
            href="#"
            className="flex items-center space-x-3 group"
            style={{ willChange: "transform" }}
            whileHover={!reduceMotion ? { scale: 1.02 } : undefined}
            whileTap={!reduceMotion ? { scale: 0.98 } : undefined}
            transition={!reduceMotion ? { type: "spring", stiffness: 350, damping: 22 } : undefined}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <img src="/LOGO.svg" alt="MSA LBSCEK Logo" className="w-12 h-12 object-contain" />
            <div className="flex flex-col leading-tight">
              <span className="text-white font-semibold tracking-tight text-sm">MSA</span>
              <span className="text-gray-400 text-xs tracking-wide">LBSCEK</span>
            </div>
          </motion.a>

          {/* Desktop links (staggered as a group, not individually animated every render) */}
          <motion.div
            className="hidden md:flex items-center space-x-1"
            variants={desktopContainer}
            initial="hidden"
            animate="show"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                variants={desktopItem}
                className="px-4 py-2 text-gray-300 hover:text-white transition-colors relative group rounded-lg"
                style={{ willChange: "transform" }}
                whileHover={!reduceMotion ? { y: -1, scale: 1.04 } : undefined}
                whileTap={!reduceMotion ? { scale: 0.96 } : undefined}
                transition={!reduceMotion ? { type: "spring", stiffness: 350, damping: 22 } : undefined}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="relative z-10 font-medium tracking-tight">{link.name}</span>

                {!reduceMotion && (
                  <motion.div
                    className="absolute inset-0 bg-white/5 rounded-lg"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.18 }}
                  />
                )}
              </motion.a>
            ))}
          </motion.div>

          <motion.button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            style={{ willChange: "transform" }}
            whileTap={!reduceMotion ? { scale: 0.9 } : undefined}
            transition={!reduceMotion ? { type: "spring", stiffness: 500, damping: 28 } : undefined}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu with AnimatePresence so close animates too */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="md:hidden bg-[#050810]/95 backdrop-blur-xl border-b border-white/10 "
            style={{ willChange: "height, opacity" }}
          >
            <div className="px-6 py-4 space-y-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: reduceMotion ? 0 : -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: reduceMotion ? 0 : -12 }}
                  transition={{
                    delay: reduceMotion ? 0 : index * 0.04,
                    duration: 0.18,
                    ease: "easeOut",
                  }}
                  style={{ willChange: "transform, opacity" }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
