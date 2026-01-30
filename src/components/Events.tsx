import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, Users, ExternalLink } from 'lucide-react';

const featuredEvent = {
  title: 'Getting Started with Cybersecurity & Ethical Hacking',
  date: 'FEBRUARY 5, 2026',
  time: 'TIME WILL BE ANOUNCED',
  location: 'ONLINE : VIA GMEET',
  attendees: '80+',
  description:
    'An introductory webinar for beginners covering cybersecurity fundamentals, ethical hacking basics, real-world threats, and how modern digital systems are protected.',
  tags: ['Cybersecurity', 'Ethical Hacking', 'Digital Safety'],
  status: 'Upcoming',
};

const pastEvents = [
  {
    title: 'MSA CARNIVAL',
    date: 'Aug 10, 2025',
    venue: 'OpenMind Makerspace',
    attendees: '95+ participants',
    description:
      'MSA Carnival ’25 was an interactive tech carnival featuring hands-on workshops, talks, and challenges focused on practical development skills, Microsoft tools, and collaborative learning.',
    reelUrl: 'https://www.instagram.com/reel/DNbIJUyyg1o/',
    imageUrl: '/EVENTS/CARNIVAL.jpg',
  },
  {
    title: 'POP & PITCH',
    date: 'Sep 19, 2025',
    venue: 'Innovation Lab, LBSCEK',
    attendees: '60+ participants',
    description:
      'POP & PITCH was a high-energy creativity challenge where students used Microsoft 365 tools to turn ideas into impactful campaigns through hands-on design, teamwork, and confident pitching.',
    reelUrl: 'https://www.instagram.com/reel/DO_QorQksFg/',
    imageUrl: '/EVENTS/DESIGN.jpg',
  },
  {
    title: 'TECH ENHANCED VISION',
    date: 'Dec 22, 2025',
    venue: 'Seminar Hall, LBSCEK',
    attendees: '20+ participants',
    description:
      'Tech-Enhanced Vision focused on accessibility and inclusion, showcasing how thoughtful technology can empower the visually impaired and create more inclusive digital experiences.',
    reelUrl: 'https://www.instagram.com/reel/DSp7_AAEnv3/',
    imageUrl: '/EVENTS/TECHENCD.jpg',
  },
  {
    title: 'TECHLAUGHS - THECOMSHOW',
    date: 'Dec 22, 2025',
    venue: 'Auditorium, LBSCEK',
    attendees: '100+ participants',
    description:
      'TechLaughs at IEDC Summit 2025 delivered high-energy humor and nonstop laughter, serving as a perfect stress-buster that refreshed minds and uplifted campus spirits..',
    reelUrl: 'https://www.instagram.com/reel/DStwbcHEnL3/',
    imageUrl: '/EVENTS/TECHLAUGH.jpg',
  },
  {
    title: 'Power Up Your Code',
    date: 'Aug 10, 2025',
    venue: 'OpenMind Makerspace',
    attendees: '30+ participants',
    description:
      'APower Up Your Code was a hands-on workshop introducing essential Microsoft tools, helping students boost coding productivity, practical skills, and real-world development efficiency.',
    reelUrl: 'https://www.instagram.com/p/DNJGoqcSgbr/',
    imageUrl: '/EVENTS/POWERUP.jpg',
  },
];


export default function Events() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="events"
      className="relative py-32 bg-gradient-to-b from-[#050810] to-[#0a0f1e]"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-[#0078D4]/10 border border-[#0078D4]/20 mb-6">
            <span className="text-[#50A0E8] font-medium text-sm tracking-wide">
              EVENTS & WORKSHOPS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Learn. Build. Connect.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="relative rounded-2xl bg-gradient-to-br from-[#0078D4]/10 to-[#50A0E8]/5 border border-[#0078D4]/30 overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0078D4] rounded-full filter blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />

            <div className="relative p-8 md:p-12">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <div className="inline-block px-3 py-1 rounded-full bg-[#0078D4] text-white text-xs font-semibold mb-4">
                    {featuredEvent.status}
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                    {featuredEvent.title}
                  </h3>

                  <p className="text-gray-400 text-lg leading-relaxed mb-6">
                    {featuredEvent.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {featuredEvent.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <motion.a
  href="https://v0-cybersecurity-webinar.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center space-x-2 px-6 py-3 bg-[#0078D4] text-white font-semibold rounded-lg hover:bg-[#005fa3] transition-colors"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <span>Register Now</span>
  <ExternalLink className="w-4 h-4" />
</motion.a>

                </div>

                <div className="lg:w-80 space-y-4">
                  <div className="flex items-start space-x-3 p-4 rounded-xl bg-white/5 border border-white/10">
                    <Calendar className="w-5 h-5 text-[#50A0E8] mt-0.5" />
                    <div>
                      <div className="text-white font-semibold">
                        {featuredEvent.date}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {featuredEvent.time}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-4 rounded-xl bg-white/5 border border-white/10">
                    <MapPin className="w-5 h-5 text-[#50A0E8] mt-0.5" />
                    <div>
                      <div className="text-white font-semibold">Location</div>
                      <div className="text-gray-400 text-sm">
                        {featuredEvent.location}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-4 rounded-xl bg-white/5 border border-white/10">
                    <Users className="w-5 h-5 text-[#50A0E8] mt-0.5" />
                    <div>
                      <div className="text-white font-semibold">Expected</div>
                      <div className="text-gray-400 text-sm">
                        {featuredEvent.attendees} attendees
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 tracking-tight">
            Past Events
          </h3>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
            {pastEvents.map((event, index) => (
              <motion.a
                key={event.title}
                href={event.reelUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="group relative flex flex-col rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050810]/80 via-transparent to-transparent opacity-80 pointer-events-none" />
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    loading="lazy"
                    className="w-full aspect-[3/4] object-cover transform transition-transform duration-500 ease-out group-hover:scale-105 filter grayscale-[0.3] group-hover:grayscale-0 opacity-90 group-hover:opacity-100"
                  />

                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-black/60 border border-white/15 text-[11px] font-semibold uppercase tracking-wide text-gray-200 backdrop-blur-sm">
                      Past Event
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-gray-300">
                    <div className="inline-flex items-center space-x-1 px-2 py-1 rounded-full bg-black/40 border border-white/10 backdrop-blur-sm">
                      <Calendar className="w-3 h-3" />
                      <span className="truncate">{event.date}</span>
                    </div>
                    <div className="hidden sm:inline-flex items-center space-x-1 px-2 py-1 rounded-full bg-black/40 border border-white/10 backdrop-blur-sm">
                      <Users className="w-3 h-3" />
                      <span className="truncate">{event.attendees}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col flex-1 p-5 md:p-6">
                  <div className="mb-3">
                    <h4 className="text-lg font-semibold text-white tracking-tight mb-1 group-hover:text-[#50A0E8] transition-colors">
                      {event.title}
                    </h4>
                    <p className="text-xs text-gray-400">
                      {event.venue}
                    </p>
                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed line-clamp-3 mb-4">
                    {event.description}
                  </p>

                  <div className="mt-auto pt-2 flex items-center justify-between text-sm">
                    <span className="text-[11px] uppercase tracking-wide text-gray-500">
                      Event concluded
                    </span>

                    <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-lg bg-[#1a2335] text-[#8ab4ff] border border-white/5 group-hover:bg-[#0078D4]/10 group-hover:text-[#50A0E8] group-hover:border-[#0078D4]/60 transition-colors text-xs font-medium">
                      <span>View Highlights</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
