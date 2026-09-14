import React, { useState } from 'react';
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
  AlertTriangle,
  ArrowUp,
  Activity,
  RefreshCw,
  Clock,
  ShieldCheck,
  Building,
  Tag,
  FileCheck,
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectItem } from '../types';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Full Stack & APIs' | 'AI & Full Stack'>('All');
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>('uniretrieve');

  // Interactive Live Demo 1: UniRetrieve Campus Asset Finder
  const [selectedZone, setSelectedZone] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const sampleUniRetrieveAssets = [
    {
      id: 'UR-101',
      title: 'HP Pavilion Laptop Charger (65W Type-C)',
      category: 'Electronics',
      zone: 'Central Library (1st Floor)',
      status: 'IN CUSTODY',
      reportedAt: 'Today, 10:15 AM',
      finderNote: 'Left near study cubicle #14.',
    },
    {
      id: 'UR-102',
      title: 'Casio Scientific Calculator FX-991EX',
      category: 'Stationery',
      zone: 'Academic Block A (Room 304)',
      status: 'VERIFICATION PENDING',
      reportedAt: 'Yesterday, 4:45 PM',
      finderNote: 'Found on the podium after Math lecture.',
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
    {
      id: 'UR-104',
      title: 'Digital Multimeter & Breadboard Kit',
      category: 'Electronics',
      zone: 'Academic Block B (ECE Lab)',
      status: 'IN CUSTODY',
      reportedAt: 'Sep 12, 11:30 AM',
      finderNote: 'Handed over to lab coordinator.',
    },
  ];

  const filteredAssets = sampleUniRetrieveAssets.filter((item) => {
    const matchesZone = selectedZone === 'All' || item.zone.includes(selectedZone);
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesQuery =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.zone.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesZone && matchesCategory && matchesQuery;
  });

  // Interactive Live Demo 2: AgriGuard AI Crop Disease Diagnostic Sandbox
  const [leafSample, setLeafSample] = useState<'wheat' | 'tomato' | 'healthy'>('wheat');
  const [isDiagnosing, setIsDiagnosing] = useState(false);
  const [diagnosticResult, setDiagnosticResult] = useState({
    disease: 'Wheat Stem Rust (Puccinia graminis)',
    confidence: '97.4%',
    severity: 'HIGH / ACTIVE SPORULATION',
    pathogen: 'Fungal Infection',
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
          pathogen: 'Fungal Pathogen',
          prescription:
            'Apply Propiconazole 25% EC (1ml/L water) or Mancozeb 75% WP. Ensure field drainage to reduce micro-climate humidity.',
          status: 'INFECTED',
        });
      } else if (type === 'tomato') {
        setDiagnosticResult({
          disease: 'Tomato Early Blight (Alternaria solani)',
          confidence: '94.8%',
          severity: 'MODERATE CONCENTRIC LESIONS',
          pathogen: 'Fungal Soilborne Pathogen',
          prescription:
            'Remove infected lower foliage. Spray Chlorothalonil 75% WP (2g/L). Implement drip irrigation to avoid splashing.',
          status: 'INFECTED',
        });
      } else {
        setDiagnosticResult({
          disease: 'Healthy Crop Sample (No Pathogens Detected)',
          confidence: '99.1%',
          severity: 'NORMAL VIGOR',
          pathogen: 'None Detected',
          prescription:
            'Plant exhibits optimal chlorophyll density. Continue regular balanced NPK fertilization schedule.',
          status: 'HEALTHY',
        });
      }
    }, 600);
  };

  const filteredProjects = PROJECTS_DATA.filter((proj) => {
    if (filter === 'All') return true;
    return proj.category === filter;
  });

  const toggleExpand = (id: string) => {
    setExpandedProjectId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="projects"
      aria-label="Featured Projects Section"
      className="py-20 relative bg-[#0B0F17] border-t border-slate-800/80 bg-grid-pattern"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>04. FEATURED PROJECTS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Production-Ready Systems & Software Engineering
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Real-world full-stack platforms and intelligent solutions engineered with Java Spring Boot, React.js, Node.js, and Python.
          </p>
        </div>

        {/* Filter Toggle Buttons */}
        <div className="flex items-center justify-center mb-10">
          <div
            id="projects-filter-group"
            className="inline-flex p-1 bg-slate-900/90 border border-slate-800 rounded-xl"
            role="group"
            aria-label="Filter projects"
          >
            {(['All', 'Full Stack & APIs', 'AI & Full Stack'] as const).map((cat) => (
              <button
                key={cat}
                id={`project-filter-${cat.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  filter === cat
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project: ProjectItem) => {
            const isExpanded = expandedProjectId === project.id;
            const isUniRetrieve = project.id === 'uniretrieve';
            const isAgriGuard = project.id === 'agriguard';

            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="rounded-xl backdrop-blur-md bg-slate-900/70 border border-slate-800 p-6 sm:p-7 flex flex-col justify-between shadow-xl hover:border-slate-700 transition-all group relative"
              >
                <div>
                  {/* Top Bar with Category & Links */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-medium text-cyan-300 bg-cyan-950/70 border border-cyan-800/60">
                      {isUniRetrieve ? (
                        <Search className="w-3.5 h-3.5 text-cyan-400" />
                      ) : isAgriGuard ? (
                        <Sprout className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Droplets className="w-3.5 h-3.5 text-blue-400" />
                      )}
                      <span>{project.category}</span>
                    </div>

                    <a
                      id={`project-github-link-${project.id}`}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs font-mono text-slate-400 hover:text-white transition-colors bg-slate-950/50 px-2.5 py-1 rounded border border-slate-800 hover:border-slate-700"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  </div>

                  {/* Project Title & Subtitle */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 font-medium mb-3">
                    {project.subtitle}
                  </p>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {project.summary}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-950/80 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Expandable Technical Highlights */}
                  {isExpanded && (
                    <div className="pt-4 border-t border-slate-800/80 space-y-2.5 mb-6">
                      <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                        <span>System Architecture & Highlights:</span>
                      </div>
                      <ul className="space-y-2">
                        {project.highlights.map((h, i) => (
                          <li
                            key={i}
                            className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Footer action bar */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => toggleExpand(project.id)}
                    className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
                  >
                    <span>{isExpanded ? 'Hide Specs' : 'View Specs'}</span>
                    {isExpanded ? (
                      <ChevronUp className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5" />
                    )}
                  </button>

                  <span className="text-[10px] font-mono text-slate-500">
                    {project.id === 'water-billing' ? 'Infosys Springboard' : 'C.R. Rao Institute'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* INTERACTIVE LIVE DEMO SHOWCASE SECTION */}
        <div className="mt-12 pt-12 border-t border-slate-800/80">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>INTERACTIVE DEMO SANDBOX</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Test Core Projects in Real-Time
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Interactive simulators demonstrating UniRetrieve campus search workflows and AgriGuard CNN disease diagnostic inferences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Live Demo 1: UniRetrieve Campus Lost & Found Simulator */}
            <div
              id="demo-uniretrieve-sandbox"
              className="p-6 sm:p-7 rounded-xl bg-slate-900/80 border border-blue-900/40 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <Search className="w-4 h-4 text-cyan-400" />
                    <h4 className="text-sm sm:text-base font-bold text-white">
                      UniRetrieve: Campus Asset Cataloging
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                    React + Express + MongoDB
                  </span>
                </div>

                <p className="text-xs text-slate-300 mb-4">
                  Filter campus assets across university zones or simulate catalog recovery status:
                </p>

                {/* Filters */}
                <div className="space-y-3 mb-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1 self-center">
                      <Building className="w-3 h-3 text-cyan-400" /> Zone:
                    </span>
                    {['All', 'Central Library', 'Academic Block A', 'Academic Block B', 'Computer Center'].map((zone) => (
                      <button
                        key={zone}
                        type="button"
                        onClick={() => setSelectedZone(zone)}
                        className={`px-2.5 py-1 rounded text-xs font-mono transition-all cursor-pointer ${
                          selectedZone === zone
                            ? 'bg-cyan-500 text-slate-950 font-bold'
                            : 'bg-slate-950 text-slate-400 border border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        {zone}
                      </button>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search asset title or note (e.g., Casio, Charger)..."
                      className="w-full px-3 py-1.5 text-xs bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-cyan-400 font-mono"
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={() => setSearchQuery('')}
                        className="px-2 text-xs font-mono text-slate-400 hover:text-white"
                      >
                        Clear
                      </button>
                    )}
                  </div>
                </div>

                {/* Simulated Catalog List */}
                <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
                  {filteredAssets.length === 0 ? (
                    <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 text-center text-xs font-mono text-slate-400">
                      No assets found matching current criteria.
                    </div>
                  ) : (
                    filteredAssets.map((asset) => (
                      <div
                        key={asset.id}
                        className="p-3 rounded-lg bg-slate-950/90 border border-slate-800 flex items-start justify-between gap-3 text-xs font-mono"
                      >
                        <div>
                          <div className="font-semibold text-slate-200">{asset.title}</div>
                          <div className="text-[11px] text-slate-400 flex items-center gap-1.5 mt-0.5">
                            <span className="text-cyan-400">{asset.zone}</span>
                            <span>•</span>
                            <span className="text-slate-500">{asset.reportedAt}</span>
                          </div>
                          <div className="text-[10px] text-slate-400 mt-1 italic">
                            &quot;{asset.finderNote}&quot;
                          </div>
                        </div>
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] whitespace-nowrap font-semibold shrink-0 ${
                            asset.status === 'CLAIM APPROVED'
                              ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                              : asset.status === 'IN CUSTODY'
                              ? 'bg-blue-950 text-blue-400 border border-blue-800'
                              : 'bg-amber-950 text-amber-400 border border-amber-800'
                          }`}
                        >
                          {asset.status}
                        </span>
                      </div>
                    ))
                  )}
                </div>
              </div>

              <div className="pt-3 mt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>Total Indexed: {sampleUniRetrieveAssets.length}</span>
                <span className="text-cyan-400">REST API Status: 200 OK</span>
              </div>
            </div>

            {/* Live Demo 2: AgriGuard AI Crop Disease Diagnostic Sandbox */}
            <div
              id="demo-agriguard-sandbox"
              className="p-6 sm:p-7 rounded-xl bg-slate-900/80 border border-blue-900/40 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <Sprout className="w-4 h-4 text-emerald-400" />
                    <h4 className="text-sm sm:text-base font-bold text-white">
                      AgriGuard: CNN Disease Classifier
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                    PyTorch + FastAPI + OpenCV
                  </span>
                </div>

                <p className="text-xs text-slate-300 mb-4">
                  Select a leaf photographic specimen to run deep learning inference and fetch localized treatment advisories:
                </p>

                {/* Leaf Sample Buttons */}
                <div className="flex flex-wrap gap-2 mb-5">
                  <button
                    type="button"
                    onClick={() => handleRunDiagnosis('wheat')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                      leafSample === 'wheat'
                        ? 'bg-amber-600 text-white font-semibold'
                        : 'bg-slate-950 text-slate-300 hover:bg-slate-800 border border-slate-800'
                    }`}
                  >
                    Specimen A: Wheat Rust
                  </button>

                  <button
                    type="button"
                    onClick={() => handleRunDiagnosis('tomato')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                      leafSample === 'tomato'
                        ? 'bg-rose-600 text-white font-semibold'
                        : 'bg-slate-950 text-slate-300 hover:bg-slate-800 border border-slate-800'
                    }`}
                  >
                    Specimen B: Tomato Blight
                  </button>

                  <button
                    type="button"
                    onClick={() => handleRunDiagnosis('healthy')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                      leafSample === 'healthy'
                        ? 'bg-emerald-600 text-white font-semibold'
                        : 'bg-slate-950 text-slate-300 hover:bg-slate-800 border border-slate-800'
                    }`}
                  >
                    Specimen C: Healthy Foliage
                  </button>
                </div>

                {/* Diagnostic Output Box */}
                <div className="p-4 rounded-lg bg-[#080D14] border border-slate-800 font-mono text-xs">
                  {isDiagnosing ? (
                    <div className="flex items-center gap-2 text-cyan-400 py-4 justify-center">
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Computing tensor convolutions & pathology confidence...</span>
                    </div>
                  ) : (
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Diagnosis:</span>
                        <span
                          className={`font-bold px-2 py-0.5 rounded text-[11px] ${
                            diagnosticResult.status === 'HEALTHY'
                              ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                              : 'bg-rose-950 text-rose-400 border border-rose-800'
                          }`}
                        >
                          {diagnosticResult.status}
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-slate-400">Pathology Name:</span>
                        <span className="text-slate-200 font-semibold">{diagnosticResult.disease}</span>
                      </div>

                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-slate-400">Confidence Metric:</span>
                        <span className="text-cyan-400 font-semibold">{diagnosticResult.confidence}</span>
                      </div>

                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-slate-400">Severity Assessment:</span>
                        <span className="text-amber-400">{diagnosticResult.severity}</span>
                      </div>

                      <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-300">
                        <strong className="text-cyan-300 block mb-1">Agronomic Advisory:</strong>
                        {diagnosticResult.prescription}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-3 mt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>Model: ResNet-50 / CNN</span>
                <span className="text-emerald-400">Accuracy: 94%+</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reference Navigation Bridge */}
        <div className="mt-12 text-center">
          <a
            href="#hero"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono text-slate-300 bg-slate-900 border border-slate-800 hover:border-cyan-400/60 hover:text-cyan-300 transition-colors shadow-sm"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Back to Home Overview</span>
          </a>
        </div>
      </div>
    </section>
  );
};
