import React from 'react';
import {
  GraduationCap,
  MapPin,
  Calendar,
  Award,
  Terminal,
  BookOpen,
} from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      aria-label="Education Section"
      className="py-20 relative bg-[#0B0F17] border-t border-slate-800/80 bg-dot-pattern"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>06. ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Education & Theoretical Foundations
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Solid foundation in computational mathematics, algorithmic analysis, discrete structures, and senior secondary sciences.
          </p>
        </div>

        {/* Education Milestones */}
        <div className="max-w-4xl mx-auto space-y-6">
          {EDUCATION_DATA.map((item, idx) => (
            <div
              key={idx}
              id={`education-item-${idx}`}
              className="rounded-xl backdrop-blur-md bg-slate-900/60 border border-slate-800 p-6 sm:p-7 hover:border-slate-700 transition-all shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-6 group"
            >
              {/* Institution details */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 group-hover:border-cyan-500/40 transition-colors shrink-0">
                  <GraduationCap className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-cyan-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3 inline" />
                      {item.location}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.institution}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                    {item.degree}
                  </p>
                </div>
              </div>

              {/* Score & Duration Badges */}
              <div className="flex flex-wrap md:flex-col items-start md:items-end justify-between md:justify-center gap-2 pt-4 md:pt-0 border-t md:border-t-0 border-slate-800/80 shrink-0">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 inline-flex items-center gap-1.5 shadow-sm">
                  <Award className="w-3.5 h-3.5" />
                  {item.score}
                </span>
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-slate-500" />
                  {item.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
