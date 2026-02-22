import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail } from "lucide-react";
import {
  SectionWrapper,
  useReducedMotion,
  motionConfig,
  scrollReveal,
} from "./Motion";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  socials?: {
    instagram?: string;
    linkedin?: string;
    email?: string;
  };
};

const teamMembers: TeamMember[] = [
  {
    name: "Thanseeha Nasrin P M",
    role: "Campus Lead",
    image: "/Team/thanseeha.jpg",
    socials: { instagram: "", linkedin: "", email: "" },
  },
  {
    name: "Aysha Bahjath",
    role: "Campus Co-Lead",
    image: "/Team/aysha-bahjath.jpg",
    socials: { instagram: "", linkedin: "", email: "" },
  },
  {
    name: "Fathimath Shirin Sana C A",
    role: "Outreach Lead",
    image: "/Team/shirin.jpg",
    socials: { instagram: "", linkedin: "", email: "" },
  },
  {
    name: "Chandhana Rajesh",
    role: "Outreach Co-Lead",
    image: "/Team/chandhana.jpg",
    socials: { instagram: "", linkedin: "", email: "" },
  },
  {
    name: "Falah Muhammed Fazal",
    role: "Tech Lead",
    image: "/Team/falah.jpg",
    socials: { instagram: "", linkedin: "", email: "" },
  },
  {
    name: "Hana M K",
    role: "Creative & Design Lead",
    image: "/Team/hana.jpg",
    socials: { instagram: "", linkedin: "", email: "" },
  },
  {
    name: "Khadeejath Shahama Parveen",
    role: "Media Lead",
    image: "/Team/shahama.jpg",
    socials: { instagram: "", linkedin: "", email: "" },
  },
  {
    name: "Fayiza H",
    role: "Strategy Lead",
    image: "/Team/fayiza.jpg",
    socials: { instagram: "", linkedin: "", email: "" },
  },
  {
    name: "Karthika Santosh",
    role: "Content Lead",
    image: "/Team/karthika.jpg",
    socials: { instagram: "", linkedin: "", email: "" },
  },
  {
    name: "Limna K",
    role: "Content Co-Lead",
    image: "/Team/limna.jpg",
    socials: { instagram: "", linkedin: "", email: "" },
  },
  {
    name: "HAJARA RANA NK",
    role: "Strategy Co-Lead",
    image: "/Team/rana.jpg",
    socials: { instagram: "", linkedin: "", email: "" },
  },
];

function SocialIconButton({
  href,
  children,
  label,
}: {
  href: string;
  children: React.ReactNode;
  label: string;
}) {
  if (!href) return null;

  const isMail = href.startsWith("mailto:");
  const isExternal = !isMail && href.startsWith("http");

  return (
    <motion.a
      href={href}
      aria-label={label}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-[#0078D4] hover:border-[#0078D4] transition-colors"
      whileHover={{ y: -2, scale: 1.08 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {children}
    </motion.a>
  );
}

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  const reduceMotion = useReducedMotion();
  const emailHref = member.socials?.email ? `mailto:${member.socials.email}` : "";

  return (
    <motion.div
      className="group relative"
      // Fade + small rise, no stagger delay beyond index * 0.04
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.35,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: Math.min(index * 0.04, 0.25), // cap delay at 0.25s so last cards don't wait forever
      }}
    >
      <motion.div
        className="relative aspect-[3/4] rounded-xl bg-gradient-to-br from-[#0078D4]/20 to-[#50A0E8]/10 border border-white/10 group-hover:border-[#0078D4]/50 transition-colors duration-300 shadow-lg hover:shadow-xl overflow-hidden"
        whileHover={!reduceMotion ? { y: -6, scale: 1.02 } : undefined}
        whileTap={!reduceMotion ? { scale: 0.99 } : undefined}
        transition={{ type: "spring", stiffness: 380, damping: 26 }}
        style={{ willChange: "transform" }}
      >
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050810] via-[#050810]/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

        {/* Name + Role */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-bold text-white mb-1 tracking-tight">
            {member.name}
          </h3>
          <p className="text-[#50A0E8] text-sm font-medium">{member.role}</p>
        </div>

        {/* Socials */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <SocialIconButton
            href={member.socials?.instagram || ""}
            label={`${member.name} Instagram`}
          >
            <Instagram className="w-5 h-5 text-white" />
          </SocialIconButton>
          <SocialIconButton
            href={member.socials?.linkedin || ""}
            label={`${member.name} LinkedIn`}
          >
            <Linkedin className="w-5 h-5 text-white" />
          </SocialIconButton>
          <SocialIconButton href={emailHref} label={`${member.name} Email`}>
            <Mail className="w-5 h-5 text-white" />
          </SocialIconButton>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Team() {
  return (
    <SectionWrapper id="team" className="relative py-28 bg-[#050810]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={scrollReveal.initial}
          whileInView={scrollReveal.whileInView}
          viewport={scrollReveal.viewport}
          transition={{
            duration: motionConfig.sectionEntry.duration,
            ease: motionConfig.premiumEasing,
          }}
          style={{ willChange: "transform, opacity" }}
        >
          <motion.div
            className="inline-block px-4 py-2 rounded-full bg-[#0078D4]/10 border border-[#0078D4]/20 mb-6"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.35,
              ease: motionConfig.premiumEasing,
            }}
            style={{ willChange: "transform, opacity" }}
          >
            <span className="text-[#50A0E8] font-medium text-sm tracking-wide">
              MEET THE TEAM
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-4">
            Execom 2026
          </h2>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
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

      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(80,160,232,0.06),transparent_55%)] pointer-events-none" />
    </SectionWrapper>
  );
}
