import React, { useState, useMemo } from 'react';
import {
  Code,
  Server,
  Layout,
  Database,
  CheckCircle2,
  Wrench,
  Search,
  Terminal,
  Sparkles,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryIcons: Record<string, React.ReactNode> = {
    languages: <Code className="w-4 h-4 text-cyan-400" />,
    backend: <Server className="w-4 h-4 text-indigo-400" />,
    frontend: <Layout className="w-4 h-4 text-sky-400" />,
    databases: <Database className="w-4 h-4 text-emerald-400" />,
    testing: <CheckCircle2 className="w-4 h-4 text-amber-400" />,
    devops: <Wrench className="w-4 h-4 text-rose-400" />,
  };

  const filterTabs = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'languages', label: 'Core CS & Languages' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'databases', label: 'Databases & Cloud' },
    { id: 'testing', label: 'Testing & QA' },
    { id: 'devops', label: 'DevOps & Tools' },
  ];

  // Filtered categories and skills
  const filteredCategories = useMemo(() => {
    return SKILL_CATEGORIES.map((cat) => {
      // Check category match
      const categoryMatches = selectedCategory === 'all' || selectedCategory === cat.id;
      if (!categoryMatches) return null;

      // Filter skills by search query
      const filteredSkills = cat.skills.filter((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase().trim())
      );

      if (filteredSkills.length === 0) return null;

      return {
        ...cat,
        skills: filteredSkills,
      };
    }).filter(Boolean);
  }, [selectedCategory, searchQuery]);

  return (
    <section
      id="skills"
      aria-label="Technical Skills Section"
      className="py-20 relative bg-[#0B0F17] border-t border-slate-800/80 bg-dot-pattern"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>02. TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Comprehensive Engineering Stack & Competencies
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Structured skill inventory spanning distributed backend architecture, full-stack systems, algorithmic core, and automated quality assurance.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Filter Tabs */}
          <div
            id="skills-category-tabs"
            className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto p-1 bg-slate-900/80 border border-slate-800 rounded-xl max-w-full"
          >
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                id={`skill-tab-${tab.id}`}
                type="button"
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === tab.id
                    ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              id="skill-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. Spring, Docker)..."
              className="w-full pl-9 pr-3 py-1.5 rounded-lg text-xs bg-slate-900/90 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors font-mono"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Skills Cards Grid */}
        {filteredCategories.length === 0 ? (
          <div className="p-12 text-center rounded-xl bg-slate-900/40 border border-slate-800 max-w-md mx-auto">
            <p className="text-sm text-slate-400 font-mono">No skills match &quot;{searchQuery}&quot;</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-3 text-xs text-cyan-400 hover:underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((category) => {
              if (!category) return null;
              return (
                <div
                  key={category.id}
                  id={`skill-card-${category.id}`}
                  className="rounded-xl backdrop-blur-md bg-slate-900/60 border border-slate-800 p-5 hover:border-slate-700/80 transition-all flex flex-col justify-between shadow-lg group hover:shadow-cyan-950/20"
                >
                  <div>
                    {/* Category Title */}
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/80">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 group-hover:border-cyan-500/30 transition-colors">
                          {categoryIcons[category.id] || <Sparkles className="w-4 h-4 text-cyan-400" />}
                        </div>
                        <h3 className="text-sm font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors">
                          {category.name}
                        </h3>
                      </div>
                      <span className="text-[11px] font-mono text-slate-500">
                        {category.skills.length} skills
                      </span>
                    </div>

                    {/* Skill Badges (NO fake progress bars, clean badges with hover glow) */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-md text-xs font-mono font-medium text-slate-300 bg-slate-950/70 border border-slate-800/90 hover:border-cyan-500/50 hover:text-cyan-300 hover:bg-slate-900 transition-all duration-150 inline-flex items-center gap-1.5 cursor-default select-none shadow-sm"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60 group-hover:bg-cyan-400" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
