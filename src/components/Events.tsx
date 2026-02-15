import { Calendar, Users, ExternalLink } from "lucide-react";

export type EventItem = {
  title: string;
  date: string;
  dateSortKey: string; // ISO-ish for sorting e.g. "2026-02-05"
  venue?: string;
  location?: string;
  attendees: string;
  description: string;
  imageUrl: string;
  reelUrl?: string;
  registerUrl?: string;
  status: "upcoming" | "past";
  tags?: string[];
  time?: string;
};

// All events in one list; we split by status and sort
const allEvents: EventItem[] = [
  {
    title: "Getting Started with Cybersecurity & Ethical Hacking",
    date: "Feb 5, 2026",
    dateSortKey: "2026-02-05",
    venue: "ONLINE : VIA GMEET",
    attendees: "80+ participants",
    description:
      "An introductory webinar for beginners covering cybersecurity fundamentals, ethical hacking basics, real-world threats, and how modern digital systems are protected.",
    imageUrl: "/EVENTS/cybersecurity.jpg",
    registerUrl: "https://v0-cybersecurity-webinar.vercel.app/",
    status: "past",
    tags: ["Cybersecurity", "Ethical Hacking", "Digital Safety"],
  },
  {
    title: "MSA CARNIVAL",
    date: "Aug 10, 2025",
    dateSortKey: "2025-08-10",
    venue: "OpenMind Makerspace",
    attendees: "95+ participants",
    description:
      "MSA Carnival '25 was an interactive tech carnival featuring hands-on workshops, talks, and challenges focused on practical development skills, Microsoft tools, and collaborative learning.",
    reelUrl: "https://www.instagram.com/reel/DNbIJUyyg1o/",
    imageUrl: "/EVENTS/CARNIVAL.jpg",
    status: "past",
  },
  {
    title: "POP & PITCH",
    date: "Sep 19, 2025",
    dateSortKey: "2025-09-19",
    venue: "Innovation Lab, LBSCEK",
    attendees: "60+ participants",
    description:
      "POP & PITCH was a high-energy creativity challenge where students used Microsoft 365 tools to turn ideas into impactful campaigns through hands-on design, teamwork, and confident pitching.",
    reelUrl: "https://www.instagram.com/reel/DO_QorQksFg/",
    imageUrl: "/EVENTS/DESIGN.jpg",
    status: "past",
  },
  {
    title: "TECH ENHANCED VISION",
    date: "Dec 22, 2025",
    dateSortKey: "2025-12-22",
    venue: "Seminar Hall, LBSCEK",
    attendees: "20+ participants",
    description:
      "Tech-Enhanced Vision focused on accessibility and inclusion, showcasing how thoughtful technology can empower the visually impaired and create more inclusive digital experiences.",
    reelUrl: "https://www.instagram.com/reel/DSp7_AAEnv3/",
    imageUrl: "/EVENTS/TECHENCD.jpg",
    status: "past",
  },
  {
    title: "TECHLAUGHS - THECOMSHOW",
    date: "Dec 22, 2025",
    dateSortKey: "2025-12-22",
    venue: "Auditorium, LBSCEK",
    attendees: "100+ participants",
    description:
      "TechLaughs at IEDC Summit 2025 delivered high-energy humor and nonstop laughter, serving as a perfect stress-buster that refreshed minds and uplifted campus spirits.",
    reelUrl: "https://www.instagram.com/reel/DStwbcHEnL3/",
    imageUrl: "/EVENTS/TECHLAUGH.jpg",
    status: "past",
  },
  {
    title: "Power Up Your Code",
    date: "Aug 10, 2025",
    dateSortKey: "2025-08-10",
    venue: "OpenMind Makerspace",
    attendees: "30+ participants",
    description:
      "Power Up Your Code was a hands-on workshop introducing essential Microsoft tools, helping students boost coding productivity, practical skills, and real-world development efficiency.",
    reelUrl: "https://www.instagram.com/p/DNJGoqcSgbr/",
    imageUrl: "/EVENTS/POWERUP.jpg",
    status: "past",
  },
];

const upcomingEvents = [...allEvents.filter((e) => e.status === "upcoming")].sort((a, b) =>
  a.dateSortKey.localeCompare(b.dateSortKey)
);
const pastEvents = [...allEvents.filter((e) => e.status === "past")].sort((a, b) =>
  b.dateSortKey.localeCompare(a.dateSortKey)
);

function EventCard({ event, index }: { event: EventItem; index: number }) {
  const href = event.status === "past" ? event.reelUrl ?? event.registerUrl : event.registerUrl;

  return (
    <div>
      <a
        href={href ?? "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex flex-col rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/15 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full cursor-pointer"
      >
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#050810]/80 via-transparent to-transparent opacity-80 pointer-events-none" />

          <img
            src={event.imageUrl}
            alt={event.title}
            loading="lazy"
            className="w-full aspect-[3/4] object-cover transform transition-transform duration-500 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
          />

          {/* Keep these STATIC (no whileInView) — MotionItem already animates the card in */}
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-black/60 border border-white/15 text-[11px] font-semibold uppercase tracking-wide text-gray-200 backdrop-blur-sm">
              {event.status === "past" ? "Past Event" : "Upcoming"}
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
            <p className="text-xs text-gray-400">{event.venue ?? event.location}</p>
          </div>

          <p className="text-sm text-gray-400 leading-relaxed line-clamp-3 mb-4">{event.description}</p>

          <div className="mt-auto pt-2 flex items-center justify-between text-sm">
            <span className="text-[11px] uppercase tracking-wide text-gray-500">
              {event.status === "past" ? "Event concluded" : "Register now"}
            </span>

            <span
              className="inline-flex items-center space-x-1 px-3 py-1 rounded-lg bg-[#1a2335] text-[#8ab4ff] border border-white/5 group-hover:bg-[#0078D4]/10 group-hover:text-[#50A0E8] group-hover:border-[#0078D4]/60 transition-colors text-xs font-medium"
            >
              <span>{event.status === "past" ? "View Highlights" : "Register"}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}

function EventsGrid({ title, events }: { title: string; events: EventItem[] }) {
  if (events.length === 0) return null;

  return (
    <div
    >
      <h3 className="text-2xl font-bold text-white tracking-tight">
        {title}
      </h3>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr mt-12">
        {events.map((event, index) => (
          <EventCard key={event.title + event.date} event={event} index={index} />
        ))}
      </div>
    </div>
  );
}

export default function Events() {
  return (
    <section id="events" className="relative py-36 bg-gradient-to-b from-[#050810] via-[#0a1628]/80 to-[#050810]">
      {/* Subtle top accent line for visual intent */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#0078D4]/40 to-transparent"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className="text-center mb-20"
        >
          <div
            className="inline-block px-4 py-2 rounded-full bg-[#0078D4]/10 border border-[#0078D4]/30 mb-8 backdrop-blur-sm"
          >
            <span className="text-[#50A0E8] font-semibold text-xs tracking-widest">EVENTS & WORKSHOPS</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Learn. Build. Connect.
          </h2>
        </div>

        {upcomingEvents.length > 0 && (
          <div className="mb-24">
            <EventsGrid title="Upcoming Events" events={upcomingEvents} />
          </div>
        )}

        <div className={upcomingEvents.length > 0 ? "mt-20" : ""}>
          <EventsGrid title="Past Events" events={pastEvents} />
        </div>
      </div>
    </section>
  );
}
