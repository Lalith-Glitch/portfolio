import React, { useState, useEffect } from 'react';
import {
  X,
  Printer,
  Copy,
  Check,
  FileText,
  Mail,
  Phone,
  Linkedin,
  Github,
  Code2,
} from 'lucide-react';
import {
  PERSONAL_INFO,
  EXPERIENCE_DATA,
  PROJECTS_DATA,
  SKILL_CATEGORIES,
  EDUCATION_DATA,
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copiedText, setCopiedText] = useState(false);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyPlainText = async () => {
    const plainText = `
${PERSONAL_INFO.fullName.toUpperCase()}
Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone}
Location: ${PERSONAL_INFO.location}
Institution: ${PERSONAL_INFO.institutionFullName}
LinkedIn: ${PERSONAL_INFO.linkedin} | GitHub: ${PERSONAL_INFO.github} | LeetCode: ${PERSONAL_INFO.leetcode}

PROFESSIONAL SUMMARY
${PERSONAL_INFO.professionalSummary}

EDUCATION
${EDUCATION_DATA.map(
  (edu) =>
    `- ${edu.institution}\n  ${edu.degree} | Score: ${edu.score} (${edu.duration})`
).join('\n')}

INDUSTRY EXPERIENCE
${EXPERIENCE_DATA.map(
  (exp) =>
    `${exp.role} — ${exp.company} (${exp.duration})\nProject: ${exp.project}\nTech: ${exp.technologies.join(
      ', '
    )}\n${exp.responsibilities.map((r) => `- ${r}`).join('\n')}`
).join('\n\n')}

FEATURED PROJECTS
${PROJECTS_DATA.map(
  (proj) =>
    `1. ${proj.title} – ${proj.subtitle}\n   Tech: ${proj.techStack.join(', ')}\n${proj.highlights
      .map((h) => `   - ${h}`)
      .join('\n')}\n   GitHub: ${proj.githubUrl}`
).join('\n\n')}

TECHNICAL SKILLS
${SKILL_CATEGORIES.map((cat) => `${cat.name}: ${cat.skills.join(', ')}`).join('\n')}
    `.trim();

    try {
      await navigator.clipboard.writeText(plainText);
      setCopiedText(true);
      setTimeout(() => setCopiedText(false), 2000);
    } catch {
      setCopiedText(true);
      setTimeout(() => setCopiedText(false), 2000);
    }
  };

  return (
    <div
      id="resume-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-900/60 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      onClick={onClose}
    >
      <div
        id="resume-modal-content"
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Actions Header in Light Theme */}
        <div className="px-5 py-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#4355B9]" />
            <span
              id="resume-modal-title"
              className="text-xs sm:text-sm font-bold text-slate-800 tracking-tight"
            >
              Resume — {PERSONAL_INFO.fullName}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-[#4355B9]" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              type="button"
              onClick={handleCopyPlainText}
              className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
              title="Copy plain text format"
            >
              {copiedText ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-600 font-bold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#4355B9]" />
                  <span className="hidden sm:inline">Copy Text</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable ATS-Style Resume Sheet in Clean Light Theme */}
        <div className="overflow-y-auto p-6 sm:p-10 bg-white text-slate-700 text-xs leading-relaxed space-y-6">
          {/* Candidate Header */}
          <div className="text-center pb-6 border-b border-slate-200">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#283593] tracking-tight uppercase">
              {PERSONAL_INFO.fullName}
            </h1>
            <p className="text-xs text-slate-600 font-medium mt-1">
              {PERSONAL_INFO.primaryTitle} &bull; {PERSONAL_INFO.institutionFullName}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-2.5 text-[11px] text-slate-500">
              <span className="flex items-center gap-1 text-slate-700 font-medium">
                <Mail className="w-3.5 h-3.5 text-[#4355B9]" />
                {PERSONAL_INFO.email}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-slate-700 font-medium">
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                {PERSONAL_INFO.phone}
              </span>
              <span>•</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4355B9] font-medium hover:underline"
              >
                LinkedIn
              </a>
              <span>•</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4355B9] font-medium hover:underline"
              >
                GitHub
              </a>
              <span>•</span>
              <a
                href={PERSONAL_INFO.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFA116] font-medium hover:underline"
              >
                LeetCode
              </a>
              <span>•</span>
              <span>Hyderabad, Telangana, India</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#283593] pb-1 mb-2 border-b border-slate-200">
              Professional Summary
            </h2>
            <p className="text-slate-600 text-xs leading-relaxed">
              {PERSONAL_INFO.professionalSummary}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#283593] pb-1 mb-2 border-b border-slate-200">
              Education
            </h2>
            <div className="space-y-3 text-xs">
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row justify-between gap-1">
                  <div>
                    <span className="font-bold text-slate-900">{edu.institution}</span>,{' '}
                    <span className="text-slate-500">{edu.location}</span>
                    <div className="text-slate-600 font-medium">{edu.degree}</div>
                  </div>
                  <div className="sm:text-right text-slate-500">
                    <div className="font-bold text-[#4355B9]">{edu.score}</div>
                    <div>{edu.duration}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Industry Internship */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#283593] pb-1 mb-2 border-b border-slate-200">
              Industry Experience
            </h2>
            {EXPERIENCE_DATA.map((exp, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-bold text-slate-900">
                  <span>
                    {exp.role} — <span className="text-[#4355B9]">{exp.company}</span>
                  </span>
                  <span className="text-slate-500 font-normal">
                    {exp.duration}
                  </span>
                </div>
                <div className="text-[11px] text-slate-500">
                  Project: {exp.project} | Stack: {exp.technologies.join(', ')}
                </div>
                <ul className="list-disc list-inside space-y-1 text-slate-600 pl-1">
                  {exp.responsibilities.map((r, rIdx) => (
                    <li key={rIdx}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#283593] pb-1 mb-2 border-b border-slate-200">
              Key Engineering Projects
            </h2>
            <div className="space-y-4">
              {PROJECTS_DATA.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-900">
                    <span>
                      {proj.title} — <span className="text-slate-600 font-normal">{proj.subtitle}</span>
                    </span>
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#4355B9] text-[11px] font-semibold hover:underline"
                    >
                      GitHub Repo
                    </a>
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Tech Stack: {proj.techStack.join(', ')}
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-slate-600 pl-1">
                    {proj.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#283593] pb-1 mb-2 border-b border-slate-200">
              Technical Competencies
            </h2>
            <div className="space-y-1.5 text-xs">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.id} className="flex flex-col sm:flex-row gap-1">
                  <span className="font-bold text-slate-800 min-w-44">
                    {cat.name}:
                  </span>
                  <span className="text-slate-600">{cat.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
