import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Cloud, TrendingUp, Globe } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Learn by building',
    description: 'Hands-on projects and workshops',
  },
  {
    icon: Cloud,
    title: 'Microsoft ecosystem',
    description: 'Azure, GitHub, VS Code & more',
  },
  {
    icon: TrendingUp,
    title: 'Leadership',
    description: 'Develop professional skills',
  },
  {
    icon: Globe,
    title: 'Global network',
    description: 'Connect with ambassadors worldwide',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-32 bg-[#050810]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-2 rounded-full bg-[#0078D4]/10 border border-[#0078D4]/20 mb-6"
            >
              <span className="text-[#50A0E8] font-medium text-sm tracking-wide">
                ABOUT MSA
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              What is MSA?
            </h2>

            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              Microsoft Student Ambassadors is a global program that empowers
              student leaders to learn, build, and lead. At LBSCEK, we create a
              vibrant community where students explore cutting-edge technologies,
              collaborate on meaningful projects, and develop both technical and
              leadership skills that prepare them for successful careers in tech.
            </p>

            <p className="text-lg text-gray-400 leading-relaxed">
              Our mission is to foster innovation, encourage knowledge sharing,
              and provide opportunities for students to grow as developers,
              leaders, and changemakers in the technology landscape.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group"
              >
                <div className="flex items-start space-x-4 p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#0078D4]/50 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-[#0078D4] to-[#50A0E8] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <highlight.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-1 tracking-tight">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-400">{highlight.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,120,212,0.05),transparent_50%)] pointer-events-none" />
    </section>
  );
}
