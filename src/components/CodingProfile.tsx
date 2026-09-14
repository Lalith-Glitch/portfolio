import React from 'react';
import {
  Code2,
  Trophy,
  ExternalLink,
  Terminal,
  Cpu,
  CheckCircle,
  GitBranch,
} from 'lucide-react';
import { CODING_JOURNEY, PERSONAL_INFO } from '../data/portfolioData';

export const CodingProfile: React.FC = () => {
  return (
    <section
      id="coding"
      aria-label="Algorithmic Problem Solving and Hackathons"
      className="py-20 relative bg-[#0B0F17] border-t border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>05. BEYOND PROJECTS & ALGORITHMS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Algorithmic Rigor & Hackathon Engineering
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Continuous dedication to algorithmic problem solving, clean Object-Oriented Design, and competitive engineering hackathons.
          </p>
        </div>

        {/* Highlight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1: LeetCode & Problem Solving */}
          <div
            id="coding-leetcode-card"
            className="rounded-xl backdrop-blur-md bg-slate-900/70 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between shadow-xl hover:border-amber-500/40 transition-all group"
          >
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 group-hover:border-amber-500/50 transition-colors">
                    <Code2 className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">LeetCode Profile</h3>
                    <p className="text-xs font-mono text-amber-400/90">
                      @{CODING_JOURNEY.leetcodeHandle}
                    </p>
                  </div>
                </div>

                <a
                  id="coding-leetcode-profile-btn"
                  href={PERSONAL_INFO.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono font-medium text-amber-300 bg-amber-950/50 border border-amber-800/60 hover:bg-amber-900/60 hover:border-amber-400 transition-all cursor-pointer shadow-sm"
                  aria-label="View Lalitha Manohar's LeetCode profile"
                >
                  <span>Open Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Active problem solver practicing complex Data Structures & Algorithms, multithreading concurrency, and dynamic memory models with strict adherence to optimal time and space complexity.
              </p>

              {/* Core Focus Badges */}
              <div className="space-y-2.5 mb-6">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Algorithmic Focus Areas
                </div>
                {CODING_JOURNEY.coreFocusAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs text-slate-300 font-mono p-2 rounded bg-slate-950/70 border border-slate-800/80"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Primary Language: Java & C++</span>
              <span className="text-amber-400 font-medium">DSA & OOP Focus</span>
            </div>
          </div>

          {/* Card 2: Smart India Hackathon & Hackathon Participation */}
          <div
            id="coding-sih-card"
            className="rounded-xl backdrop-blur-md bg-slate-900/70 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between shadow-xl hover:border-cyan-500/40 transition-all group"
          >
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 group-hover:border-cyan-500/50 transition-colors">
                    <Trophy className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Smart India Hackathon</h3>
                    <p className="text-xs font-mono text-cyan-400/90">SIH Internal Qualifier</p>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded text-[11px] font-mono font-medium text-emerald-300 bg-emerald-950/60 border border-emerald-800/60">
                  Active Participant
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Represented university in the competitive Smart India Hackathon internal qualifier, collaborating under high-pressure sprint conditions to architect viable software architectures addressing national problem statements.
              </p>

              <div className="p-4 rounded-lg bg-slate-950/80 border border-slate-800 space-y-3 mb-6">
                <div className="flex items-start gap-2.5">
                  <Cpu className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  <div className="text-xs text-slate-300">
                    <strong className="text-white block">Rapid Prototyping:</strong>
                    Translating ambiguous specifications into structured entity schemas and working REST microservices.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <GitBranch className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                  <div className="text-xs text-slate-300">
                    <strong className="text-white block">Team Collaboration:</strong>
                    Version control workflow, modular task delegation, and cross-functional integration under tight timeframes.
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>National Hackathon Track</span>
              <span className="text-cyan-400 font-medium">SIH Qualifier</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
