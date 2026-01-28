import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'Arjun Menon',
    role: 'Lead Ambassador',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400',
    socials: {
      instagram: '#',
      linkedin: '#',
      email: 'arjun@example.com',
    },
  },
  {
    name: 'Priya Sharma',
    role: 'Technical Lead',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
    socials: {
      instagram: '#',
      linkedin: '#',
      email: 'priya@example.com',
    },
  },
  {
    name: 'Rahul Kumar',
    role: 'Events Coordinator',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
    socials: {
      instagram: '#',
      linkedin: '#',
      email: 'rahul@example.com',
    },
  },
  {
    name: 'Sneha Patel',
    role: 'Community Manager',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    socials: {
      instagram: '#',
      linkedin: '#',
      email: 'sneha@example.com',
    },
  },
  {
    name: 'Karthik Reddy',
    role: 'Workshop Lead',
    image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400',
    socials: {
      instagram: '#',
      linkedin: '#',
      email: 'karthik@example.com',
    },
  },
  {
    name: 'Ananya Singh',
    role: 'Design Lead',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400',
    socials: {
      instagram: '#',
      linkedin: '#',
      email: 'ananya@example.com',
    },
  },
  {
    name: 'Vikram Joshi',
    role: 'Marketing Lead',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    socials: {
      instagram: '#',
      linkedin: '#',
      email: 'vikram@example.com',
    },
  },
  {
    name: 'Divya Nair',
    role: 'Content Lead',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
    socials: {
      instagram: '#',
      linkedin: '#',
      email: 'divya@example.com',
    },
  },
];

function TeamCard({ member, index }: { member: typeof teamMembers[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-gradient-to-br from-[#0078D4]/20 to-[#50A0E8]/10 border border-white/10 group-hover:border-[#0078D4]/50 transition-all duration-300">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#050810] via-[#050810]/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-bold text-white mb-1 tracking-tight">
            {member.name}
          </h3>
          <p className="text-[#50A0E8] text-sm font-medium">{member.role}</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="absolute top-4 right-4 flex flex-col space-y-2"
        >
          <a
            href={member.socials.instagram}
            className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-[#0078D4] hover:border-[#0078D4] transition-colors"
          >
            <Instagram className="w-5 h-5 text-white" />
          </a>
          <a
            href={member.socials.linkedin}
            className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-[#0078D4] hover:border-[#0078D4] transition-colors"
          >
            <Linkedin className="w-5 h-5 text-white" />
          </a>
          <a
            href={`mailto:${member.socials.email}`}
            className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-[#0078D4] hover:border-[#0078D4] transition-colors"
          >
            <Mail className="w-5 h-5 text-white" />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="team" className="relative py-32 bg-[#050810]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-[#0078D4]/10 border border-[#0078D4]/20 mb-6">
            <span className="text-[#50A0E8] font-medium text-sm tracking-wide">
              MEET THE TEAM
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-4">
            Execom 2024
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            The passionate team behind MSA LBSCEK, dedicated to building a
            thriving tech community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(80,160,232,0.05),transparent_50%)] pointer-events-none" />
    </section>
  );
}
