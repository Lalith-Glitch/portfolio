import React from 'react';
import { ViewType } from './HeaderBar';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  User,
  FolderGit2,
  Briefcase,
  GraduationCap,
  Mail,
  FileText,
  Github,
  Linkedin,
  Code2,
  Sparkles,
  ExternalLink,
  MapPin,
  CheckCircle2,
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (view: ViewType) => void;
  onOpenResume: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenResume }) => {
  return (
    <div
      id="home-view"
      className="min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center py-12 px-4 sm:px-6 bg-[#F4F6FB]"
    >
      <div className="w-full max-w-xl mx-auto flex flex-col items-center text-center">
        {/* Circular Avatar Icon (matching Image 1's soft lavender/periwinkle circle) */}
        <div
          id="home-avatar-circle"
          className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-[#E5E9FA] border-2 border-[#D5DEFA] flex items-center justify-center shadow-sm mb-6 transition-transform hover:scale-105"
        >
          <span className="text-[#4355B9] font-extrabold text-3xl sm:text-4xl tracking-tight select-none">
            {PERSONAL_INFO.initials}
          </span>
        </div>

        {/* Candidate Name in Bold Royal Blue */}
        <h1
          id="home-candidate-name"
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#283593] tracking-wide mb-2 uppercase"
        >
          {PERSONAL_INFO.fullName}
        </h1>

        {/* Primary Subtitle */}
        <p
          id="home-subtitle"
          className="text-sm sm:text-base text-slate-600 font-medium mb-1"
        >
          B.Tech 3rd Year • Computer Science &amp; Applied Mathematics
        </p>

        {/* Institution & CGPA / Status */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-slate-500 font-normal mb-8">
          <span className="font-semibold text-slate-700">CR Rao AIMSCS (CGPA: 7.32)</span>
          <span>•</span>
          <span className="text-[#3F51B5] font-semibold">Infosys Springboard Intern</span>
        </div>

        {/* The Two Primary Buttons from Reference Image 1 */}
        <div className="flex flex-col items-center gap-3.5 w-full max-w-xs mb-8">
          <button
            type="button"
            id="home-btn-about-me"
            onClick={() => onNavigate('about')}
            className="w-full py-2.5 px-8 rounded-xl bg-[#4355B9] hover:bg-[#34449D] active:bg-[#2A3780] text-white font-semibold text-sm shadow-md transition-all duration-150 cursor-pointer text-center tracking-wide"
          >
            About Me
          </button>

          <button
            type="button"
            id="home-btn-projects"
            onClick={() => onNavigate('projects')}
            className="w-full py-2.5 px-8 rounded-xl bg-[#4355B9] hover:bg-[#34449D] active:bg-[#2A3780] text-white font-semibold text-sm shadow-md transition-all duration-150 cursor-pointer text-center tracking-wide"
          >
            Projects
          </button>
        </div>

        {/* Additional Navigation Options (Preserving Full Profile Depth) */}
        <div className="w-full max-w-md pt-4 border-t border-slate-200/80 mb-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
            Explore Portfolio Sections
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            <button
              type="button"
              id="home-pill-experience"
              onClick={() => onNavigate('experience')}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-white text-slate-700 border border-slate-200 hover:border-[#4355B9] hover:text-[#4355B9] transition-colors shadow-xs cursor-pointer"
            >
              <Briefcase className="w-3.5 h-3.5 text-[#4355B9]" />
              <span>Experience &amp; Internship</span>
            </button>

            <button
              type="button"
              id="home-pill-skills"
              onClick={() => onNavigate('skills')}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-white text-slate-700 border border-slate-200 hover:border-[#4355B9] hover:text-[#4355B9] transition-colors shadow-xs cursor-pointer"
            >
              <GraduationCap className="w-3.5 h-3.5 text-[#4355B9]" />
              <span>Skills &amp; Education</span>
            </button>

            <button
              type="button"
              id="home-pill-contact"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-white text-slate-700 border border-slate-200 hover:border-[#4355B9] hover:text-[#4355B9] transition-colors shadow-xs cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5 text-[#4355B9]" />
              <span>Contact Me</span>
            </button>

            <button
              type="button"
              id="home-pill-resume"
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-50 text-[#3F51B5] border border-indigo-200 hover:bg-indigo-100 transition-colors shadow-xs cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Resume</span>
            </button>
          </div>
        </div>

        {/* Verified Profile Links & Contact Quick Links */}
        <div className="flex items-center justify-center gap-4 text-slate-600">
          <a
            id="home-link-github"
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-[#4355B9] transition-colors p-1"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <span className="text-slate-300">•</span>

          <a
            id="home-link-linkedin"
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-[#4355B9] transition-colors p-1"
          >
            <Linkedin className="w-4 h-4 text-[#0A66C2]" />
            <span>LinkedIn</span>
          </a>

          <span className="text-slate-300">•</span>

          <a
            id="home-link-leetcode"
            href={PERSONAL_INFO.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-[#FFA116] transition-colors p-1"
          >
            <Code2 className="w-4 h-4 text-[#FFA116]" />
            <span>LeetCode</span>
          </a>
        </div>
      </div>
    </div>
  );
};
