import React from 'react';
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  ExternalLink,
  BookOpen,
} from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const issuerBadges: Record<string, { color: string; label: string; tagBg: string }> = {
    'Infosys Springboard': {
      color: 'text-cyan-400',
      label: 'Enterprise Training & Certification',
      tagBg: 'bg-cyan-950/60 border-cyan-800/60 text-cyan-300',
    },
    'HackerRank': {
      color: 'text-emerald-400',
      label: 'Technical Skill Verifications',
      tagBg: 'bg-emerald-950/60 border-emerald-800/60 text-emerald-300',
    },
    'University of Helsinki': {
      color: 'text-indigo-400',
      label: 'Academic AI Specialization',
      tagBg: 'bg-indigo-950/60 border-indigo-800/60 text-indigo-300',
    },
  };

  return (
    <section
      id="certifications"
      aria-label="Certifications and Credentials Section"
      className="py-20 relative bg-[#0B0F17] border-t border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>07. CREDENTIALS & CERTIFICATIONS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Verified Industry Competencies & Coursework
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Formal technical certifications validating Java full stack development, cloud deployment, relational databases, and AI fundamentals.
          </p>
        </div>

        {/* Certifications Grid by Issuer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CERTIFICATIONS_DATA.map((certGroup, idx) => {
            const meta = issuerBadges[certGroup.issuer] || {
              color: 'text-cyan-400',
              label: 'Accredited Certification',
              tagBg: 'bg-slate-800 border-slate-700 text-slate-300',
            };

            return (
              <div
                key={idx}
                id={`cert-group-${idx}`}
                className="rounded-xl backdrop-blur-md bg-slate-900/60 border border-slate-800 p-6 sm:p-7 flex flex-col justify-between shadow-xl hover:border-slate-700 transition-all group"
              >
                <div>
                  {/* Issuer Header */}
                  <div className="flex items-start justify-between gap-3 pb-4 mb-5 border-b border-slate-800">
                    <div>
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded text-[11px] font-mono font-medium border ${meta.tagBg} mb-2`}
                      >
                        {meta.label}
                      </span>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {certGroup.issuer}
                      </h3>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 shrink-0">
                      <ShieldCheck className={`w-5 h-5 ${meta.color}`} />
                    </div>
                  </div>

                  {/* Certified Items */}
                  <div className="space-y-2.5">
                    {certGroup.items.map((item, cIdx) => (
                      <div
                        key={cIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 p-2 rounded-lg bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
                      >
                        <CheckCircle2 className={`w-4 h-4 ${meta.color} mt-0.5 shrink-0`} />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer verification note */}
                <div className="pt-5 mt-6 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Verified Credential
                  </span>
                  <span>{certGroup.items.length} Modules</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
