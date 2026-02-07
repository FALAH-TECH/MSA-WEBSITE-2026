import { Code2, Cloud, TrendingUp, Globe } from 'lucide-react';
import { MotionItem, MotionSection } from './Motion';

const highlights = [
  { icon: Code2, title: 'Learn by building', description: 'Hands-on projects and workshops' },
  { icon: Cloud, title: 'Microsoft ecosystem', description: 'Azure, GitHub, VS Code & more' },
  { icon: TrendingUp, title: 'Leadership', description: 'Develop professional skills' },
  { icon: Globe, title: 'Global network', description: 'Connect with ambassadors worldwide' },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 bg-[#050810]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <MotionSection className="" slideOffset={24}>
            <div className="inline-block px-4 py-2 rounded-full bg-[#0078D4]/10 border border-[#0078D4]/20 mb-6">
              <span className="text-[#50A0E8] font-medium text-sm tracking-wide">
                ABOUT MSA
              </span>
            </div>

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
              MSA (Microsoft Learn Student Ambassadors) is an MNC-approved global student community directly run by Microsoft, one of the world's biggest multinational tech companies.
            </p>
          </MotionSection>

          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <MotionItem key={highlight.title} index={index} staggerDelay={0.1} yOffset={20}>
                <div className="group flex items-start space-x-4 p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#0078D4]/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
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
              </MotionItem>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,120,212,0.05),transparent_50%)] pointer-events-none" />
    </section>
  );
}
