import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, Users, ExternalLink } from 'lucide-react';
import { SectionReveal, AnimatedText, AnimatedButton } from './animations';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ANIMATION_CONFIG } from '@/utils/animations';

const featuredEvent = {
  title: 'Getting Started with Cybersecurity & Ethical Hacking',
  date: 'FEBRUARY 5, 2026',
  time: 'TIME WILL BE ANOUNCED',
  location: 'ONLINE : VIA GMEET',
  attendees: '80+',
  description:
    'An introductory webinar designed for first-year students to explore the fundamentals of cybersecurity and ethical hacking, understand real-world security threats, and learn how digital systems are protected in today's connected world.',
  tags: ['Cybersecurity', 'Ethical Hacking', 'Digital Safety'],
  status: 'Upcoming',
};

const pastEvents = [
  {
    title: 'MSA CARNIVAL',
    date: 'Aug 10, 2025',
    attendees: '95',
    reelUrl: 'https://www.instagram.com/reel/DNbIJUyyg1o/',
    posterUrl: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    title: 'POP & PITCH',
    date: 'Sep 19, 2025',
    attendees: '60',
    reelUrl: 'https://www.instagram.com/reel/DO_QorQksFg/',
    posterUrl: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    title: 'TECH ENHANCED VISION',
    date: 'Dec 22, 2025',
    attendees: '20',
    reelUrl: 'https://www.instagram.com/reel/DSp7_AAEnv3/',
    posterUrl: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    title: 'TECHLAUGHS - THECOMSHOW',
    date: 'Dec 22, 2025',
    attendees: '100+',
    reelUrl: 'https://www.instagram.com/reel/DStwbcHEnL3/',
    posterUrl: 'https://images.pexels.com/photos/3945632/pexels-photo-3945632.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
];

export default function Events() {
  const { ref: containerRef, isInView } = useScrollAnimation();

  return (
    <section
      id="events"
      className="relative py-32 bg-gradient-to-b from-[#050810] to-[#0a0f1e]"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionReveal className="text-center mb-16" variant="fadeInUp">
          <div className="inline-block px-4 py-2 rounded-full bg-[#0078D4]/10 border border-[#0078D4]/20 mb-6">
            <motion.span
              className="text-[#50A0E8] font-medium text-sm tracking-wide"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: ANIMATION_CONFIG.durations.base / 1000,
                ease: ANIMATION_CONFIG.easing.smooth,
                delay: 0.1,
              }}
            >
              EVENTS & WORKSHOPS
            </motion.span>
          </div>
          <AnimatedText
            as="h2"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight"
            delay={0.15}
          >
            Learn. Build. Connect.
          </AnimatedText>
        </SectionReveal>

        <SectionReveal
          className="text-center mb-12 max-w-3xl mx-auto"
          variant="fadeInUp"
          delay={0.2}
        >
          <motion.p
            className="text-lg text-gray-400 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: ANIMATION_CONFIG.durations.base / 1000,
              ease: ANIMATION_CONFIG.easing.smooth,
              delay: 0.25,
            }}
          >
            Explore MSA LBSCEK events — workshops, talks, and community sessions. Check upcoming events and browse past highlights.
          </motion.p>
        </SectionReveal>

        <SectionReveal className="mb-20" variant="fadeInUp" delay={0.3}>
          <div className="relative rounded-2xl bg-gradient-to-br from-[#0078D4]/10 to-[#50A0E8]/5 border border-[#0078D4]/30 overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0078D4] rounded-full filter blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />

            <div className="relative p-8 md:p-12">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <motion.div
                    className="inline-block px-3 py-1 rounded-full bg-[#0078D4] text-white text-xs font-semibold mb-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: ANIMATION_CONFIG.durations.short / 1000,
                      ease: ANIMATION_CONFIG.easing.smooth,
                      delay: 0.35,
                    }}
                  >
                    {featuredEvent.status}
                  </motion.div>

                  <AnimatedText
                    as="h3"
                    className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"
                    delay={0.4}
                  >
                    {featuredEvent.title}
                  </AnimatedText>

                  <motion.p
                    className="text-gray-400 text-lg leading-relaxed mb-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: ANIMATION_CONFIG.durations.base / 1000,
                      ease: ANIMATION_CONFIG.easing.smooth,
                      delay: 0.45,
                    }}
                  >
                    {featuredEvent.description}
                  </motion.p>

                  <motion.div
                    className="flex flex-wrap gap-2 mb-8"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{
                      duration: ANIMATION_CONFIG.durations.base / 1000,
                      ease: ANIMATION_CONFIG.easing.smooth,
                      delay: 0.5,
                      staggerChildren: ANIMATION_CONFIG.stagger.short,
                    }}
                  >
                    {featuredEvent.tags.map((tag, index) => (
                      <motion.span
                        key={tag}
                        className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm"
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{
                          duration: ANIMATION_CONFIG.durations.base / 1000,
                          ease: ANIMATION_CONFIG.easing.smooth,
                          delay: 0.5 + index * ANIMATION_CONFIG.stagger.short,
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: ANIMATION_CONFIG.durations.base / 1000,
                      ease: ANIMATION_CONFIG.easing.smooth,
                      delay: 0.55,
                    }}
                  >
                    <AnimatedButton
                      onClick={() =>
                        window.open(
                          'https://v0-cybersecurity-webinar.vercel.app/',
                          '_blank'
                        )
                      }
                      variant="primary"
                    >
                      <span>Register Now</span>
                      <ExternalLink className="w-4 h-4" />
                    </AnimatedButton>
                  </motion.div>
                </div>

                <div className="lg:w-80 space-y-4">
                  {[
                    {
                      icon: Calendar,
                      label: 'Date',
                      value: featuredEvent.date,
                      subvalue: featuredEvent.time,
                    },
                    {
                      icon: MapPin,
                      label: 'Location',
                      value: featuredEvent.location,
                    },
                    {
                      icon: Users,
                      label: 'Expected',
                      value: `${featuredEvent.attendees} attendees`,
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      className="flex items-start space-x-3 p-4 rounded-xl bg-white/5 border border-white/10"
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: ANIMATION_CONFIG.durations.base / 1000,
                        ease: ANIMATION_CONFIG.easing.smooth,
                        delay: 0.35 + index * 0.08,
                      }}
                    >
                      <item.icon className="w-5 h-5 text-[#50A0E8] mt-0.5" />
                      <div>
                        <div className="text-white font-semibold">{item.label}</div>
                        <div className="text-gray-400 text-sm">{item.value}</div>
                        {item.subvalue && (
                          <div className="text-gray-500 text-xs mt-1">
                            {item.subvalue}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal variant="fadeInUp" delay={0.4}>
          <h3 className="text-2xl font-bold text-white mb-8 tracking-tight">
            Past Events
          </h3>

          <div className="space-y-4">
            {pastEvents.map((event, index) => (
              <motion.a
                key={event.title}
                href={event.reelUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: ANIMATION_CONFIG.durations.base / 1000,
                  ease: ANIMATION_CONFIG.easing.smooth,
                  delay: 0.45 + index * ANIMATION_CONFIG.stagger.base,
                }}
                className="group relative block"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex flex-col sm:flex-row gap-4 p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#0078D4]/50 transition-all duration-300">
                  <div className="flex-shrink-0 w-full sm:w-32 h-48 sm:h-auto rounded-lg overflow-hidden bg-white/5 border border-white/10 shadow-md aspect-[3/4]">
                    <motion.img
                      src={event.posterUrl}
                      alt={event.title}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{
                        duration: ANIMATION_CONFIG.durations.short / 1000,
                        ease: ANIMATION_CONFIG.easing.smooth,
                      }}
                    />
                  </div>

                  <div className="flex items-center space-x-4 flex-1 min-w-0">
                    <div className="hidden sm:block w-2 h-2 rounded-full bg-[#0078D4] flex-shrink-0" />

                    <div className="flex-1 min-w-0">
                      <motion.h4
                        className="text-lg font-semibold text-white group-hover:text-[#50A0E8] transition-colors truncate"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{
                          duration: ANIMATION_CONFIG.durations.base / 1000,
                          ease: ANIMATION_CONFIG.easing.smooth,
                          delay:
                            0.45 + index * ANIMATION_CONFIG.stagger.base,
                        }}
                      >
                        {event.title}
                      </motion.h4>
                      <motion.p
                        className="text-xs text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{
                          duration: ANIMATION_CONFIG.durations.short / 1000,
                        }}
                      >
                        View Instagram Reel →
                      </motion.p>
                    </div>

                    <div className="flex items-center space-x-4 sm:space-x-6 text-gray-400 text-sm flex-shrink-0">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span className="hidden sm:inline">{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span>{event.attendees}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0078D4] to-[#50A0E8] opacity-0 group-hover:opacity-100 transition-opacity rounded-l-xl"
                  initial={{ scaleY: 0 }}
                  whileHover={{ scaleY: 1 }}
                  transition={{
                    duration: ANIMATION_CONFIG.durations.short / 1000,
                  }}
                  style={{ originY: 'top' }}
                />
              </motion.a>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
