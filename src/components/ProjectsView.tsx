import React, { useState } from 'react';
import { ViewType } from './HeaderBar';
import {
  FolderGit2,
  ExternalLink,
  Github,
  ChevronDown,
  ChevronUp,
  Cpu,
  Layers,
  Terminal,
  Server,
  Sparkles,
  Search,
  Sprout,
  Droplets,
  CheckCircle2,
  RefreshCw,
  Building,
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';

interface ProjectsViewProps {
  onNavigate: (view: ViewType) => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({ onNavigate }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Interactive Live Demo 1: UniRetrieve Campus Asset Finder
  const [selectedZone, setSelectedZone] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const sampleUniRetrieveAssets = [
    {
      id: 'UR-101',
      title: 'HP Pavilion Laptop Charger (65W Type-C)',
      category: 'Electronics',
      zone: 'Central Library (1st Floor)',
      status: 'IN CUSTODY',
      reportedAt: 'Today, 10:15 AM',
      finderNote: 'Found near study cubicle #14.',
    },
    {
      id: 'UR-102',
      title: 'Casio Scientific Calculator FX-991EX',
      category: 'Stationery',
      zone: 'Academic Block A (Room 304)',
      status: 'VERIFICATION PENDING',
      reportedAt: 'Yesterday, 4:45 PM',
      finderNote: 'Left on podium after Math lecture.',
    },
    {
      id: 'UR-103',
      title: 'University Student ID Card (#2234)',
      category: 'IDs & Wallets',
      zone: 'Computer Center (Lab 2)',
      status: 'CLAIM APPROVED',
      reportedAt: '2 days ago',
      finderNote: 'Deposited at Security Desk.',
    },
  ];

  const filteredAssets = sampleUniRetrieveAssets.filter((item) => {
    const matchesZone = selectedZone === 'All' || item.zone.includes(selectedZone);
    const matchesQuery =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.zone.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesZone && matchesQuery;
  });

  // Interactive Live Demo 2: AgriGuard AI Crop Disease Diagnostic Sandbox
  const [leafSample, setLeafSample] = useState<'wheat' | 'tomato' | 'healthy'>('wheat');
  const [isDiagnosing, setIsDiagnosing] = useState(false);
  const [diagnosticResult, setDiagnosticResult] = useState({
    disease: 'Wheat Stem Rust (Puccinia graminis)',
    confidence: '97.4%',
    severity: 'HIGH / ACTIVE SPORULATION',
    prescription:
      'Apply Propiconazole 25% EC (1ml/L water) or Mancozeb 75% WP. Ensure crop aeration to reduce leaf moisture.',
    status: 'INFECTED',
  });

  const handleRunDiagnosis = (type: 'wheat' | 'tomato' | 'healthy') => {
    setLeafSample(type);
    setIsDiagnosing(true);
    setTimeout(() => {
      setIsDiagnosing(false);
      if (type === 'wheat') {
        setDiagnosticResult({
          disease: 'Wheat Stem Rust (Puccinia graminis)',
          confidence: '97.4%',
          severity: 'HIGH / ACTIVE SPORULATION',
          prescription:
            'Apply Propiconazole 25% EC (1ml/L water) or Mancozeb 75% WP. Ensure field drainage to reduce micro-climate humidity.',
          status: 'INFECTED',
        });
      } else if (type === 'tomato') {
        setDiagnosticResult({
          disease: 'Tomato Early Blight (Alternaria solani)',
          confidence: '94.8%',
          severity: 'MODERATE CONCENTRIC LESIONS',
          prescription:
            'Remove infected lower foliage. Spray Chlorothalonil 75% WP (2g/L). Implement drip irrigation to avoid splashing.',
          status: 'INFECTED',
        });
      } else {
        setDiagnosticResult({
          disease: 'Healthy Crop Sample (No Pathogens Detected)',
          confidence: '99.1%',
          severity: 'NORMAL VIGOR',
          prescription:
            'Plant exhibits optimal chlorophyll density. Continue regular balanced NPK fertilization schedule.',
          status: 'HEALTHY',
        });
      }
    }, 500);
  };

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div
      id="projects-view"
      className="min-h-[calc(100vh-4rem)] flex flex-col justify-start items-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-[#F4F6FB]"
    >
      <div className="w-full max-w-4xl mx-auto flex flex-col">
        {/* Project Cards (styled directly in the light theme format of Image 3) */}
        <div className="space-y-4 sm:space-y-5 mb-8">
          {PROJECTS_DATA.map((project) => {
            const isExpanded = expandedId === project.id;
            const isUniRetrieve = project.id === 'uniretrieve';
            const isAgriGuard = project.id === 'agriguard';

            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="rounded-2xl bg-white border border-slate-200/90 shadow-sm p-6 sm:p-7 transition-all duration-200 hover:shadow-md"
              >
                {/* Header Row: Title & Action Links */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                  <div>
                    <h2
                      id={`project-title-${project.id}`}
                      className="text-lg sm:text-xl font-bold text-[#233594] tracking-tight"
                    >
                      {project.title}
                    </h2>
                    <p className="text-xs font-medium text-slate-500 mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 self-start mt-1 sm:mt-0">
                    <a
                      id={`project-code-link-${project.id}`}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>

                    <button
                      type="button"
                      id={`project-toggle-details-${project.id}`}
                      onClick={() => toggleExpand(project.id)}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-semibold text-[#4355B9] bg-[#E8EAFF] hover:bg-[#DCE1FF] transition-colors cursor-pointer"
                    >
                      <span>{isExpanded ? 'Hide Specs' : 'View Specs & Demo'}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Project Description (matches single-sentence/paragraph from image 3) */}
                <p
                  id={`project-desc-${project.id}`}
                  className="text-sm text-slate-600 leading-relaxed mt-2 mb-4"
                >
                  {project.summary}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Expanded Details / Specs / Interactive Demo */}
                {isExpanded && (
                  <div className="mt-5 pt-4 border-t border-slate-100 space-y-4 animate-fadeIn">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5 text-[#4355B9]" />
                        <span>Architectural Highlights &amp; Accomplishments</span>
                      </h4>
                      <ul className="space-y-1.5">
                        {project.highlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className="text-xs text-slate-600 flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#4355B9] mt-1.5 shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Interactive Sandbox for UniRetrieve */}
                    {isUniRetrieve && (
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                            <Search className="w-4 h-4 text-[#4355B9]" />
                            <span>Live Simulator: UniRetrieve Campus Asset Finder</span>
                          </span>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                            React + Express + MongoDB
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-3">
                          {['All', 'Central Library', 'Academic Block A', 'Computer Center'].map((zone) => (
                            <button
                              key={zone}
                              type="button"
                              onClick={() => setSelectedZone(zone)}
                              className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                                selectedZone === zone
                                  ? 'bg-[#4355B9] text-white font-medium'
                                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                              }`}
                            >
                              {zone}
                            </button>
                          ))}
                        </div>

                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search asset title (e.g. Charger, Calculator)..."
                          className="w-full px-3 py-1.5 text-xs bg-white border border-slate-300 rounded-lg text-slate-700 focus:outline-none focus:border-[#4355B9] mb-3"
                        />

                        <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                          {filteredAssets.map((asset) => (
                            <div
                              key={asset.id}
                              className="p-2.5 rounded-lg bg-white border border-slate-200 flex items-center justify-between gap-2 text-xs"
                            >
                              <div>
                                <div className="font-semibold text-slate-800">{asset.title}</div>
                                <div className="text-[11px] text-slate-500">
                                  {asset.zone} • {asset.reportedAt}
                                </div>
                              </div>
                              <span
                                className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                  asset.status === 'CLAIM APPROVED'
                                    ? 'bg-emerald-100 text-emerald-800'
                                    : 'bg-indigo-100 text-indigo-800'
                                }`}
                              >
                                {asset.status}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Interactive Sandbox for AgriGuard */}
                    {isAgriGuard && (
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                            <Sprout className="w-4 h-4 text-emerald-600" />
                            <span>Live Simulator: AgriGuard CNN Disease Inference</span>
                          </span>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                            PyTorch + FastAPI
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-3">
                          <button
                            type="button"
                            onClick={() => handleRunDiagnosis('wheat')}
                            className={`px-3 py-1.5 rounded-lg text-xs transition-all cursor-pointer ${
                              leafSample === 'wheat'
                                ? 'bg-amber-600 text-white font-semibold'
                                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                            }`}
                          >
                            Sample: Wheat Rust
                          </button>
                          <button
                            type="button"
                            onClick={() => handleRunDiagnosis('tomato')}
                            className={`px-3 py-1.5 rounded-lg text-xs transition-all cursor-pointer ${
                              leafSample === 'tomato'
                                ? 'bg-rose-600 text-white font-semibold'
                                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                            }`}
                          >
                            Sample: Tomato Blight
                          </button>
                          <button
                            type="button"
                            onClick={() => handleRunDiagnosis('healthy')}
                            className={`px-3 py-1.5 rounded-lg text-xs transition-all cursor-pointer ${
                              leafSample === 'healthy'
                                ? 'bg-emerald-600 text-white font-semibold'
                                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                            }`}
                          >
                            Sample: Healthy Foliage
                          </button>
                        </div>

                        <div className="p-3 rounded-lg bg-white border border-slate-200 text-xs">
                          {isDiagnosing ? (
                            <div className="flex items-center justify-center gap-2 py-3 text-slate-600 font-medium">
                              <RefreshCw className="w-4 h-4 animate-spin text-[#4355B9]" />
                              <span>Running CNN convolution filters...</span>
                            </div>
                          ) : (
                            <div className="space-y-1.5">
                              <div className="flex justify-between items-center">
                                <span className="font-semibold text-slate-700">Diagnosis:</span>
                                <span
                                  className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                    diagnosticResult.status === 'HEALTHY'
                                      ? 'bg-emerald-100 text-emerald-800'
                                      : 'bg-rose-100 text-rose-800'
                                  }`}
                                >
                                  {diagnosticResult.status} ({diagnosticResult.confidence})
                                </span>
                              </div>
                              <div className="text-slate-800 font-medium">
                                {diagnosticResult.disease}
                              </div>
                              <div className="text-[11px] text-slate-500 pt-1 border-t border-slate-100">
                                <strong>Advisory:</strong> {diagnosticResult.prescription}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Primary "Back to Home" Button (exact match of Image 3) */}
        <div className="flex justify-center mb-6">
          <button
            type="button"
            id="projects-btn-back-home"
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
