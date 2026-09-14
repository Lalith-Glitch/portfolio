import React from 'react';
import {
  Briefcase,
  Calendar,
  Layers,
  CheckCircle2,
  Terminal,
  Server,
  Database,
  ShieldCheck,
} from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      aria-label="Professional Experience Section"
      className="py-20 relative bg-[#0B0F17] border-t border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>03. PROFESSIONAL EXPERIENCE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Industry Internship & Software Engineering Work
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Applied software development delivering production-aligned full stack solutions, enterprise architectures, and robust API workflows.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto">
          {EXPERIENCE_DATA.map((exp, idx) => (
            <div
              key={idx}
              id={`experience-item-${idx}`}
              className="relative pl-6 sm:pl-8 border-l-2 border-slate-800 pb-12 last:pb-0"
            >
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#0B0F17] border-2 border-cyan-400 flex items-center justify-center shadow-md shadow-cyan-500/20">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              </div>

              {/* Experience Card */}
              <div className="rounded-xl backdrop-blur-md bg-slate-900/70 border border-slate-800 p-6 sm:p-8 shadow-xl hover:border-slate-700 transition-all">
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-6 border-b border-slate-800">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono font-medium text-cyan-300 bg-cyan-950/80 border border-cyan-800/60 mb-2">
                      {exp.company}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-slate-950/70 px-3 py-1.5 rounded-lg border border-slate-800 self-start sm:self-center">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Project Focus Banner */}
                <div className="mb-6 p-4 rounded-lg bg-slate-950/80 border border-slate-800/90 flex items-start gap-3">
                  <div className="p-2 rounded bg-cyan-950/50 text-cyan-400 mt-0.5">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                      Internship Project
                    </div>
                    <div className="text-sm font-semibold text-slate-100 mt-0.5">
                      {exp.project}
                    </div>
                  </div>
                </div>

                {/* Key Responsibilities */}
                <div className="space-y-4 mb-6">
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Core Responsibilities & Technical Deliverables</span>
                  </h4>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li
                        key={rIdx}
                        className="text-xs sm:text-sm text-slate-300 flex items-start gap-3 leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Chips */}
                <div className="pt-4 border-t border-slate-800/80">
                  <div className="text-[11px] font-mono text-slate-400 mb-2.5">
                    Technologies Utilized:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono font-medium text-slate-300 bg-slate-950 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
