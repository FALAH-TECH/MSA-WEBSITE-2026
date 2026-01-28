import { motion } from "framer-motion";
import { Mail, MapPin, Instagram, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-[#050810] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        {/* Top section */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          
          {/* Branding */}
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <img
                src="/LOGO.svg"
                alt="MSA LBSCEK Logo"
                className="w-12 h-12 rounded-lg object-contain"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-white font-semibold tracking-tight text-lg">
                  MSA LBSCEK
                </span>
                <span className="text-gray-400 text-sm">
                  Microsoft Student Ambassadors
                </span>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed max-w-md">
              Building the next generation of tech leaders through community,
              learning, and innovation.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg mb-4">
              Get in Touch
            </h3>

            <motion.a
              href="mailto:msa@lbscek.edu"
              className="flex items-center space-x-3 text-gray-400 hover:text-[#50A0E8] transition-colors group"
              whileHover={{ x: 5 }}
            >
              <Mail className="w-5 h-5" />
              <span>mlsalbscek@gmail.com</span>
            </motion.a>

            <motion.div
              className="flex items-start space-x-3 text-gray-400"
              whileHover={{ x: 5 }}
            >
              <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>
                Lal Bahadur Shastri College of Engineering
                <br />
                Kasaragod, Kerala, India
              </span>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 Microsoft Learn Student Ambassadors LBSCEK. All rights reserved.
          </p>

          {/* Social links */}
          <div className="flex items-center space-x-4">
            
            <motion.a
              href="https://www.instagram.com/msa.lbscek/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MSA LBSCEK Instagram"
              className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0078D4] hover:border-[#0078D4] transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Instagram className="w-5 h-5" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/company/mlsalbscek/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MSA LBSCEK LinkedIn"
              className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0078D4] hover:border-[#0078D4] transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>

            {/* Optional GitHub (remove if not needed) */}
            <motion.a
              href="#"
              aria-label="GitHub"
              className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0078D4] hover:border-[#0078D4] transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>

          </div>
        </div>
      </div>
    </footer>
  );
}
