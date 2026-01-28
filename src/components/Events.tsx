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
    'An introductory webinar designed for first-year students to explore the fundamentals of cybersecurity and ethical hacking, understand real-world security threats, and learn how digital systems are protected in today’s connected world.',
  tags: ['Cybersecurity', 'Ethical Hacking', 'Digital Safety'],
  status: 'Upcoming',
};

const pastEvents = [
  {
    title: "MSA CARNIVAL",
    date: "Aug 10, 2025",
    attendees: "95",
    reelUrl: "https://www.instagram.com/reel/DNbIJUyyg1o/",
  },
  {
    title: "POP & PITCH",
    date: "Sep 19, 2025",
    attendees: "60",
    reelUrl: "https://www.instagram.com/reel/DO_QorQksFg/",
  },
  {
    title: "TECH ENHANCED VISION",
    date: "Dec 22, 2025",
    attendees: "20",
    reelUrl: "https://www.instagram.com/reel/DSp7_AAEnv3/",
  },
  {
    title: "TECHLAUGHS - THECOMSHOW",
    date: "Dec 22, 2025",
    attendees: "100+",
    reelUrl: "https://www.instagram.com/reel/DStwbcHEnL3/",
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

          <div className="space-y-4">
            {pastEvents.map((event, index) => (
  <motion.a
    key={event.title}
    href={event.reelUrl}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, x: -20 }}
    animate={isInView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
    className="group relative block"
    whileHover={{ scale: 1.01 }}
    whileTap={{ scale: 0.99 }}
  >
    <div className="flex items-center space-x-4 p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#0078D4]/50 transition-all duration-300">
      <div className="hidden md:block w-2 h-2 rounded-full bg-[#0078D4]" />

      <div className="flex-1">
        <h4 className="text-lg font-semibold text-white group-hover:text-[#50A0E8] transition-colors">
          {event.title}
        </h4>
        <p className="text-xs text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
          View Instagram Reel →
        </p>
      </div>

      <div className="flex items-center space-x-6 text-gray-400 text-sm">
        <div className="flex items-center space-x-2">
          <Calendar className="w-4 h-4" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Users className="w-4 h-4" />
          <span>{event.attendees}</span>
        </div>
      </div>
    </div>

    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0078D4] to-[#50A0E8] opacity-0 group-hover:opacity-100 transition-opacity rounded-l-xl" />
  </motion.a>
))}

          </div>
        </motion.div>
      </div>
    </section>
  );
}
