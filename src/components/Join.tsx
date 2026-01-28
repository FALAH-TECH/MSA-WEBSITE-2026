import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const benefits = [
  'Access to exclusive Microsoft resources and tools',
  'Hands-on workshops and technical training',
  'Networking with industry professionals',
  'Leadership development opportunities',
  'Portfolio-building project experience',
  'Global MSA community connection',
];

export default function Join() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="join"
      className="relative py-32 bg-gradient-to-b from-[#0a0f1e] to-[#050810] overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-[#0078D4] rounded-full filter blur-3xl opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            x: ['-50%', '-45%', '-50%'],
            y: ['-50%', '-55%', '-50%'],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="w-24 h-1 bg-gradient-to-r from-[#0078D4] to-[#50A0E8] mx-auto mb-8 origin-center"
          />

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
            Ready to level up your
            <br />
            <span className="bg-gradient-to-r from-[#0078D4] to-[#50A0E8] bg-clip-text text-transparent">
              tech journey?
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Join Microsoft Student Ambassadors at LBSCEK and become part of a
            community that empowers you to learn, build, and lead.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 mb-12"
        >
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <CheckCircle2 className="w-6 h-6 text-[#50A0E8] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              className="group relative px-8 py-4 bg-[#0078D4] text-white font-semibold rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>Apply Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#0078D4] to-[#50A0E8]"
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              className="px-8 py-4 bg-white/5 text-white font-semibold rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <p className="text-gray-500 text-sm">
            Applications are reviewed on a rolling basis. Join us today!
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0078D4] to-transparent origin-center"
      />
    </section>
  );
}
