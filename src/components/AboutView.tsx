import React from 'react';
import { ViewType } from './HeaderBar';
import { User, GraduationCap, Briefcase, Award, Code2, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutViewProps {
  onNavigate: (view: ViewType) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div
      id="about-view"
      className="min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8 bg-[#F4F6FB]"
    >
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
        {/* Main Reference Card (directly reflecting Image 2) */}
        <div
          id="about-main-card"
          className="w-full rounded-2xl bg-[#EEF2F6] border border-slate-200/80 p-8 sm:p-12 shadow-sm text-center mb-8 relative transition-all"
        >
          {/* Centered User Icon in Royal Blue (as in Image 2) */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-[#E0E7FF] flex items-center justify-center text-[#4355B9]">
              <User className="w-8 h-8 fill-current text-[#4355B9]" />
            </div>
          </div>

          {/* Primary Bio Paragraph (from reference template adapted to Manohar's credentials) */}
          <p
            id="about-bio-text"
            className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed max-w-2xl mx-auto mb-8"
          >
            Hello! I&apos;m <strong className="text-slate-900 font-semibold">{PERSONAL_INFO.fullName}</strong>, a passionate Computer Science &amp; Applied Mathematics student from <strong className="text-[#283593] font-semibold">{PERSONAL_INFO.institution}</strong>. I love exploring modern technologies, building scalable Java Spring Boot REST microservices, and crafting creative digital projects that solve real-world problems.
          </p>

          {/* Primary "Back to Home" Button (exact match of Image 2) */}
          <div className="flex justify-center">
            <button
              type="button"
              id="about-btn-back-home"
              onClick={() => onNavigate('home')}
              className="py-2.5 px-8 rounded-xl bg-[#4355B9] hover:bg-[#34449D] active:bg-[#2A3780] text-white font-semibold text-sm shadow-md transition-all duration-150 cursor-pointer text-center"
            >
              Back to Home
            </button>
          </div>
        </div>

        {/* Extended Credentials & Pillars in Clean Light Theme */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {/* Academic Profile */}
          <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-xs">
            <div className="flex items-center gap-2 text-[#4355B9] font-bold text-xs uppercase tracking-wider mb-2">
              <GraduationCap className="w-4 h-4" />
              <span>Academics</span>
            </div>
            <div className="text-sm font-bold text-slate-800">
              C.R. Rao Institute (AIMSCS)
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              B.Tech CS &amp; Applied Math (2022–2026)
            </div>
            <div className="mt-2 inline-block px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 text-xs font-semibold">
              CGPA: 7.32 / 10.0
            </div>
          </div>

          {/* Enterprise Internship */}
          <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-xs">
            <div className="flex items-center gap-2 text-[#4355B9] font-bold text-xs uppercase tracking-wider mb-2">
              <Briefcase className="w-4 h-4" />
              <span>Industry Experience</span>
            </div>
            <div className="text-sm font-bold text-slate-800">
              Infosys Springboard
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              Java Full Stack Virtual Internship
            </div>
            <div className="mt-2 inline-block px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-xs font-semibold">
              Spring Boot &amp; React
            </div>
          </div>

          {/* Algorithmic Foundation */}
          <div className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-xs">
            <div className="flex items-center gap-2 text-[#4355B9] font-bold text-xs uppercase tracking-wider mb-2">
              <Code2 className="w-4 h-4" />
              <span>Problem Solving</span>
            </div>
            <div className="text-sm font-bold text-slate-800">
              LeetCode &amp; SIH
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              DSA in Java &amp; C++
            </div>
            <div className="mt-2 inline-block px-2 py-0.5 rounded bg-amber-50 text-amber-800 text-xs font-semibold">
              Smart India Hackathon Qualifier
            </div>
          </div>
        </div>

        {/* Secondary Navigation Shortcut */}
        <div className="flex items-center justify-center gap-4 text-xs font-medium text-slate-500">
          <button
            type="button"
            onClick={() => onNavigate('projects')}
            className="text-[#4355B9] hover:underline flex items-center gap-1 cursor-pointer font-semibold"
          >
            <span>Proceed to My Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
