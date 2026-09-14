import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Heart, Github, Linkedin, Code2, ArrowUp } from 'lucide-react';
import { ViewType } from './HeaderBar';

interface FooterLightProps {
  onNavigate: (view: ViewType) => void;
}

export const FooterLight: React.FC<FooterLightProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200 py-8 px-4 sm:px-6 lg:px-8 text-slate-500 text-xs transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="font-bold text-slate-800 text-sm">
            {PERSONAL_INFO.fullName}
          </div>
          <p className="text-slate-500 text-xs mt-0.5">
            B.Tech Computer Science &amp; Applied Mathematics • {PERSONAL_INFO.institutionFullName}
          </p>
        </div>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-600">
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="hover:text-[#4355B9] cursor-pointer"
          >
            Home
          </button>
          <span>•</span>
          <button
            type="button"
            onClick={() => onNavigate('about')}
            className="hover:text-[#4355B9] cursor-pointer"
          >
            About
          </button>
          <span>•</span>
          <button
            type="button"
            onClick={() => onNavigate('projects')}
            className="hover:text-[#4355B9] cursor-pointer"
          >
            Projects
          </button>
          <span>•</span>
          <button
            type="button"
            onClick={() => onNavigate('experience')}
            className="hover:text-[#4355B9] cursor-pointer"
          >
            Experience
          </button>
          <span>•</span>
          <button
            type="button"
            onClick={() => onNavigate('skills')}
            className="hover:text-[#4355B9] cursor-pointer"
          >
            Skills
          </button>
          <span>•</span>
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="hover:text-[#4355B9] cursor-pointer"
          >
            Contact
          </button>
        </div>

        {/* Back to top */}
        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors text-xs font-medium cursor-pointer"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          <span>Top</span>
        </button>
      </div>

      <div className="max-w-7xl mx-auto mt-6 pt-4 border-t border-slate-100 text-center text-slate-400 text-[11px]">
        Designed for Pallagani Lalitha Manohar &bull; Clean Light Reference Portfolio Architecture
      </div>
    </footer>
  );
};
