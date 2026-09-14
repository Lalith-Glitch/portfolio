import React, { useState } from 'react';
import { ArrowLeft, Menu, X, FileText, Github, Linkedin, Code2, Home, User, FolderGit2, Briefcase, GraduationCap, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export type ViewType = 'home' | 'about' | 'projects' | 'experience' | 'skills' | 'contact';

interface HeaderBarProps {
  activeView: ViewType;
  onNavigate: (view: ViewType) => void;
  onOpenResume: () => void;
}

export const HeaderBar: React.FC<HeaderBarProps> = ({
  activeView,
  onNavigate,
  onOpenResume,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getTitle = () => {
    switch (activeView) {
      case 'home':
        return 'My Portfolio';
      case 'about':
        return 'About Me';
      case 'projects':
        return 'My Projects';
      case 'experience':
        return 'Work Experience';
      case 'skills':
        return 'Skills & Education';
      case 'contact':
        return 'Contact Me';
      default:
        return 'My Portfolio';
    }
  };

  const navItems: { label: string; view: ViewType; icon: React.ReactNode }[] = [
    { label: 'Home', view: 'home', icon: <Home className="w-4 h-4" /> },
    { label: 'About', view: 'about', icon: <User className="w-4 h-4" /> },
    { label: 'Projects', view: 'projects', icon: <FolderGit2 className="w-4 h-4" /> },
    { label: 'Experience', view: 'experience', icon: <Briefcase className="w-4 h-4" /> },
    { label: 'Skills & Edu', view: 'skills', icon: <GraduationCap className="w-4 h-4" /> },
    { label: 'Contact', view: 'contact', icon: <Mail className="w-4 h-4" /> },
  ];

  const handleNavClick = (view: ViewType) => {
    onNavigate(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#4355B9] text-white shadow-md select-none transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between relative">
        {/* Left Side: Back Arrow Button (only if not on home) or Logo */}
        <div className="flex items-center min-w-[48px]">
          {activeView !== 'home' ? (
            <button
              type="button"
              id="header-back-button"
              onClick={() => handleNavClick('home')}
              className="flex items-center justify-center w-10 h-10 -ml-2 rounded-full hover:bg-white/15 active:bg-white/25 transition-colors cursor-pointer text-white focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Back to Home"
              title="Back to Home"
            >
              <ArrowLeft className="w-6 h-6 stroke-[2.5]" />
            </button>
          ) : (
            <button
              type="button"
              id="header-home-logo-button"
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2 text-white hover:opacity-90 transition-opacity cursor-pointer focus:outline-none"
            >
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs tracking-wider">
                {PERSONAL_INFO.initials}
              </div>
            </button>
          )}
        </div>

        {/* Center: Title (matching reference images) */}
        <div className="absolute left-1/2 -translate-x-1/2 text-center pointer-events-none">
          <h1
            id="header-page-title"
            className="text-lg sm:text-xl font-bold tracking-normal text-white drop-shadow-sm whitespace-nowrap"
          >
            {getTitle()}
          </h1>
        </div>

        {/* Right Side: Desktop Navigation Links + Resume Trigger + Mobile Menu Button */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 text-sm font-medium">
            {navItems.map((item) => (
              <button
                key={item.view}
                type="button"
                onClick={() => handleNavClick(item.view)}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer text-xs font-semibold ${
                  activeView === item.view
                    ? 'bg-white/25 text-white shadow-xs'
                    : 'text-white/85 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Resume Button */}
          <button
            type="button"
            id="header-resume-button"
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white text-[#4355B9] hover:bg-white/95 shadow-sm active:scale-95 transition-all cursor-pointer ml-1"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            id="header-mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/15 text-white transition-colors cursor-pointer focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="header-mobile-drawer"
          className="lg:hidden bg-[#3949AB] border-t border-white/15 px-4 pt-3 pb-5 space-y-1 text-sm shadow-xl animate-fadeIn"
        >
          <div className="grid grid-cols-2 gap-2 mb-3">
            {navItems.map((item) => (
              <button
                key={item.view}
                type="button"
                onClick={() => handleNavClick(item.view)}
                className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer text-left ${
                  activeView === item.view
                    ? 'bg-white text-[#4355B9] font-bold shadow-sm'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-white/15 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs font-bold bg-white text-[#4355B9] shadow-sm cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>View Resume (PDF/Print)</span>
            </button>

            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="LeetCode Profile"
              >
                <Code2 className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
