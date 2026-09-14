import React from 'react';
import { ViewType } from './HeaderBar';
import { GraduationCap, Award, Cpu, CheckCircle } from 'lucide-react';
import { SKILL_CATEGORIES, EDUCATION_DATA, CERTIFICATIONS_DATA } from '../data/portfolioData';

interface SkillsViewProps {
  onNavigate: (view: ViewType) => void;
}

export const SkillsView: React.FC<SkillsViewProps> = ({ onNavigate }) => {
  return (
    <div
      id="skills-view"
      className="min-h-[calc(100vh-4rem)] flex flex-col justify-start items-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-[#F4F6FB]"
    >
      <div className="w-full max-w-4xl mx-auto flex flex-col">
        {/* Technical Skills Section */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-[#233594] mb-4 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-[#4355B9]" />
            <span>Technical Skills &amp; Competencies</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SKILL_CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs"
              >
                <h3 className="text-sm font-bold text-slate-800 mb-3 border-b border-slate-100 pb-2">
                  {cat.name}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-50 text-slate-700 border border-slate-200/70"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Timeline */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-[#233594] mb-4 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-[#4355B9]" />
            <span>Academic Background</span>
          </h2>

          <div className="space-y-4">
            {EDUCATION_DATA.map((edu, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col sm:flex-row justify-between sm:items-center gap-3"
              >
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    {edu.degree}
                  </h3>
                  <div className="text-sm text-[#4355B9] font-medium mt-0.5">
                    {edu.institution}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    {edu.location}
                  </div>
                </div>

                <div className="sm:text-right shrink-0">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-[#3F51B5] border border-indigo-100">
                    {edu.score}
                  </span>
                  <div className="text-xs text-slate-400 mt-1 font-medium">
                    {edu.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Badges */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-[#233594] mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-[#4355B9]" />
            <span>Certifications &amp; Credentials</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {CERTIFICATIONS_DATA.map((cert, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-bold text-[#4355B9] uppercase tracking-wider mb-2 flex items-center justify-between">
                    <span>{cert.issuer}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <ul className="space-y-1.5 mt-2">
                    {cert.items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="text-xs text-slate-700 leading-snug flex items-start gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4355B9] mt-1 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Back to Home Button */}
        <div className="flex justify-center mb-6">
          <button
            type="button"
            id="skills-btn-back-home"
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
