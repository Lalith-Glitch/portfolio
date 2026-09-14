import React, { useState } from 'react';
import { HeaderBar, ViewType } from './components/HeaderBar';
import { HomeView } from './components/HomeView';
import { AboutView } from './components/AboutView';
import { ProjectsView } from './components/ProjectsView';
import { ExperienceView } from './components/ExperienceView';
import { SkillsView } from './components/SkillsView';
import { ContactView } from './components/ContactView';
import { FooterLight } from './components/FooterLight';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [activeView, setActiveView] = useState<ViewType>('home');
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleNavigate = (view: ViewType) => {
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F4F6FB] text-slate-800 flex flex-col selection:bg-[#3F51B5]/20 selection:text-[#3F51B5]">
      {/* Top Royal Blue Header Bar matching Reference Images */}
      <HeaderBar
        activeView={activeView}
        onNavigate={handleNavigate}
        onOpenResume={() => setIsResumeModalOpen(true)}
      />

      {/* Main View Area */}
      <main id="main-content" className="flex-grow">
        {activeView === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenResume={() => setIsResumeModalOpen(true)}
          />
        )}

        {activeView === 'about' && (
          <AboutView onNavigate={handleNavigate} />
        )}

        {activeView === 'projects' && (
          <ProjectsView onNavigate={handleNavigate} />
        )}

        {activeView === 'experience' && (
          <ExperienceView onNavigate={handleNavigate} />
        )}

        {activeView === 'skills' && (
          <SkillsView onNavigate={handleNavigate} />
        )}

        {activeView === 'contact' && (
          <ContactView onNavigate={handleNavigate} />
        )}
      </main>

      {/* Clean Light Footer */}
      <FooterLight onNavigate={handleNavigate} />

      {/* Resume Preview & Download Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
