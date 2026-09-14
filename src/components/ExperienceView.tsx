import React from 'react';
import { ViewType } from './HeaderBar';
import { Briefcase, Calendar, MapPin, CheckCircle2, Server, Layers } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

interface ExperienceViewProps {
  onNavigate: (view: ViewType) => void;
}

export const ExperienceView: React.FC<ExperienceViewProps> = ({ onNavigate }) => {
  return (
    <div
      id="experience-view"
      className="min-h-[calc(100vh-4rem)] flex flex-col justify-start items-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-[#F4F6FB]"
    >
      <div className="w-full max-w-4xl mx-auto flex flex-col">
        <div className="space-y-6 mb-8">
          {EXPERIENCE_DATA.map((exp, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white border border-slate-200/90 shadow-sm p-6 sm:p-8"
            >
              {/* Role & Company */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 mb-2">
                    Virtual Internship
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#233594]">
                    {exp.role}
                  </h2>
                  <div className="text-sm font-semibold text-slate-700 mt-0.5">
                    {exp.company}
                  </div>
                </div>

                <div className="text-xs text-slate-500 font-medium sm:text-right space-y-1">
                  <div className="flex items-center sm:justify-end gap-1.5 text-slate-600">
                    <Calendar className="w-3.5 h-3.5 text-[#4355B9]" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1.5 text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>Hyderabad / Remote</span>
                  </div>
                </div>
              </div>

              {/* Project Title */}
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 mb-6">
                <div className="text-[11px] font-bold text-[#4355B9] uppercase tracking-wider">
                  Primary Enterprise Project
                </div>
                <div className="text-sm font-semibold text-slate-800 mt-0.5">
                  {exp.project}
                </div>
              </div>

              {/* Key Deliverables & Responsibilities */}
              <div className="mb-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Key Engineering Contributions &amp; Scope
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {exp.responsibilities.map((resp, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-xs text-slate-700 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Technologies Utilized
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-indigo-50 text-[#3F51B5] border border-indigo-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back to Home Button */}
        <div className="flex justify-center mb-6">
          <button
            type="button"
            id="experience-btn-back-home"
            onClick={() => onNavigate('home')}
            className="py-2.5 px-8 rounded-xl bg-[#4355B9] hover:bg-[#34449D] active:bg-[#2A3780] text-white font-semibold text-sm shadow-md transition-all duration-150 cursor-pointer text-center"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};
