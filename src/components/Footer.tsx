import React from 'react';
import { ArrowUp, Github, Linkedin, Code2, Mail, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Coding', href: '#coding' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer
      id="portfolio-footer"
      aria-label="Footer"
      className="bg-[#080C12] border-t border-slate-800/80 pt-12 pb-8 text-slate-400 text-xs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row: Brand & Quick links & Back to top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-blue-950/70 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-mono font-bold text-xs">
              LM
            </div>
            <span className="text-sm font-semibold text-white tracking-tight">
              Pallagani Lalitha Manohar
            </span>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-cyan-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <button
            id="footer-back-to-top"
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-300 text-slate-300 text-xs font-mono transition-all cursor-pointer shadow-sm"
            aria-label="Back to top of page"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Row: Exact required text and socials */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          {/* EXACT REQUIRED TEXT */}
          <p
            id="footer-mandatory-title"
            className="text-slate-300 font-mono text-xs tracking-tight"
          >
            Pallagani Lalitha Manohar — Computer Science & Applied Mathematics | Java Full Stack Developer
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              id="footer-github-link"
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md bg-slate-900/60 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              id="footer-linkedin-link"
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md bg-slate-900/60 border border-slate-800 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              id="footer-leetcode-link"
              href={PERSONAL_INFO.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md bg-slate-900/60 border border-slate-800 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
              aria-label="LeetCode"
            >
              <Code2 className="w-4 h-4" />
            </a>
            <a
              id="footer-email-link"
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-md bg-slate-900/60 border border-slate-800 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
