import React from 'react';
import {
  Code,
  Terminal,
  Cpu,
  Server,
  Sparkles,
  GraduationCap,
  FolderGit2,
  ArrowUp,
  ShieldCheck,
  Layers,
  CheckCircle2,
  Briefcase,
  Database,
  Sprout,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: <Server className="w-5 h-5 text-cyan-400" />,
      title: 'Enterprise Java & Spring Boot Microservices',
      description:
        'Architecting robust, production-aligned backend services, designing RESTful microservices, and implementing ACID-compliant transactional persistence with Hibernate/JPA and MySQL.',
    },
    {
      icon: <Layers className="w-5 h-5 text-blue-400" />,
      title: 'Full Stack Web Architecture',
      description:
        'Engineering end-to-end applications with React.js, Node.js, and Express.js, featuring normalized database schemas, authenticated API routes, and clean responsive interfaces.',
    },
    {
      icon: <Cpu className="w-5 h-5 text-indigo-400" />,
      title: 'Computer Science & Computational Mathematics',
      description:
        'Formed by rigorous coursework at C.R. Rao Institute—mastering discrete mathematics, algorithmic optimization, data structures, and object-oriented design in Java & C++.',
    },
    {
      icon: <Sprout className="w-5 h-5 text-emerald-400" />,
      title: 'Machine Learning & Applied AI (AgriGuard)',
      description:
        'Translating deep learning convolutional neural network (CNN) models into accessible diagnostic tools to identify agricultural crop diseases and deliver targeted advisories.',
    },
  ];

  return (
    <section
      id="about"
      aria-label="About Section"
      className="py-20 relative bg-[#0B0F17] border-t border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>01. ABOUT ME</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Engineering Scalable Software & Solving Real-World Problems
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Computer Science & Applied Mathematics undergraduate at C.R. Rao Institute and Java Full Stack Intern at Infosys Springboard.
          </p>
        </div>

        {/* Highlight Reference Card */}
        <div className="max-w-4xl mx-auto mb-14">
          <div
            id="about-reference-quote-card"
            className="p-6 sm:p-8 rounded-2xl backdrop-blur-md bg-gradient-to-br from-blue-950/40 via-slate-900/80 to-[#0B0F17] border border-blue-500/30 shadow-2xl relative overflow-hidden"
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              {/* User Avatar Circle */}
              <div className="relative shrink-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 p-0.5 shadow-lg">
                  <div className="w-full h-full rounded-full bg-[#0B0F19] flex items-center justify-center text-cyan-300 font-extrabold text-xl font-mono">
                    {PERSONAL_INFO.initials}
                  </div>
                </div>
                <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#0B0F19]" />
              </div>

              {/* Quote from Reference */}
              <div className="text-center sm:text-left flex-1">
                <div className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono text-cyan-400 bg-cyan-950/80 border border-cyan-800/60 mb-2">
                  C.R. Rao Institute (AIMSCS) • CGPA 7.32
                </div>
                <blockquote className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium mb-4 italic">
                  &ldquo;{PERSONAL_INFO.quote}&rdquo;
                </blockquote>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-mono text-slate-400 pt-3 border-t border-slate-800">
                  <span className="flex items-center gap-1 text-slate-300">
                    <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                    B.Tech CS & Applied Mathematics (2022 – 2026)
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-cyan-300">
                    <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
                    Infosys Springboard Intern
                  </span>
                  <span>•</span>
                  <a
                    href="#projects"
                    className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold"
                  >
                    <FolderGit2 className="w-3.5 h-3.5" />
                    View Featured Projects &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Professional Summary & Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div
              id="about-summary-card"
              className="p-6 sm:p-8 rounded-xl backdrop-blur-md bg-slate-900/70 border border-slate-800 shadow-xl"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-cyan-400" />
                <span>Undergraduate Journey & Engineering Philosophy</span>
              </h3>
              <p
                id="about-professional-summary"
                className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6"
              >
                {PERSONAL_INFO.professionalSummary}
              </p>

              {/* Fast Facts Matrix */}
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                  <div className="text-[11px] text-slate-400 font-mono">Institution</div>
                  <div className="text-xs sm:text-sm font-semibold text-cyan-300 mt-1">
                    CR Rao AIMSCS
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                  <div className="text-[11px] text-slate-400 font-mono">Academic Standing</div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">
                    CGPA 7.32 / 10.0
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 col-span-2 sm:col-span-1">
                  <div className="text-[11px] text-slate-400 font-mono">Internship</div>
                  <div className="text-xs sm:text-sm font-semibold text-emerald-400 mt-1">
                    Infosys Springboard
                  </div>
                </div>
              </div>
            </div>

            {/* Reference navigation bridge */}
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center justify-between">
              <a
                href="#hero"
                className="text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Home Overview</span>
              </a>

              <a
                href="#projects"
                className="text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5 font-semibold"
              >
                <span>Jump to Projects</span>
                <FolderGit2 className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right: Technical Pillars */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-mono font-medium text-slate-400 uppercase tracking-wider mb-2">
              Core Technical Pillars
            </h3>
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                id={`about-pillar-${idx}`}
                className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors shadow-sm group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 group-hover:border-cyan-500/40 transition-colors shrink-0">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
