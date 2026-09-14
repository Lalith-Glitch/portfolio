import React, { useState } from 'react';
import {
  ArrowDown,
  FileText,
  Github,
  Linkedin,
  Code2,
  Mail,
  Copy,
  Check,
  Terminal,
  Sparkles,
  Layers,
  Activity,
  User,
  GraduationCap,
  FolderGit2,
  Cpu,
  Database,
  Sprout,
  Droplets,
  Search,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [activeTab, setActiveTab] = useState<'water' | 'uniretrieve' | 'agriguard' | 'telemetry'>('water');
  const [codeCopied, setCodeCopied] = useState(false);

  // Project 1: Infosys Springboard - Smart Water Usage & Automated Billing Management Platform (Java & Spring Boot)
  const springBootJavaCode = `/**
 * Smart Water Usage & Automated Billing Management Platform
 * Enterprise Spring Boot REST Microservice with JPA/Hibernate
 * Author: Pallagani Lalitha Manohar (Infosys Springboard Intern)
 */
@RestController
@RequestMapping("/api/v1/water-billing")
@CrossOrigin(origins = "*")
public class WaterBillingController {

    private final WaterBillingService billingService;
    private final TelemetryIngestionService telemetryService;

    @Autowired
    public WaterBillingController(WaterBillingService billingService,
                                  TelemetryIngestionService telemetryService) {
        this.billingService = billingService;
        this.telemetryService = telemetryService;
    }

    @PostMapping("/telemetry")
    public ResponseEntity<IngestionReceipt> ingestMeterReadings(
            @Valid @RequestBody WaterMeterPayload payload) {
        // Ingest telemetry with validation & transactional persistence
        IngestionReceipt receipt = telemetryService.recordConsumption(payload);
        return ResponseEntity.status(HttpStatus.CREATED).body(receipt);
    }

    @GetMapping("/invoices/{accountId}/generate")
    @Transactional(readOnly = true)
    public ResponseEntity<InvoiceStatement> generateMonthlyInvoice(
            @PathVariable("accountId") String accountId,
            @RequestParam("billingCycle") String cycle) {
        // Tiered tariff calculation & automated PDF invoice data
        InvoiceStatement invoice = billingService.calculateTariff(accountId, cycle);
        return ResponseEntity.ok(invoice);
    }
}`;

  // Project 2: UniRetrieve Platform (Node.js & Express REST API)
  const uniRetrieveCode = `/**
 * UniRetrieve Campus Asset Cataloging & Recovery Platform
 * Express.js & MongoDB REST Controller with Zone Filtering
 * Author: Pallagani Lalitha Manohar
 */
const express = require('express');
const router = express.Router();
const ItemListing = require('../models/ItemListing');
const authMiddleware = require('../middleware/auth');

// GET /api/v1/items/search - Filter campus assets by category & zone
router.get('/search', async (req, res) => {
  try {
    const { category, zone, status = 'ACTIVE' } = req.query;
    const queryFilter = { status };

    if (category && category !== 'ALL') queryFilter.category = category;
    if (zone && zone !== 'ALL') queryFilter.campusZone = zone;

    const assets = await ItemListing.find(queryFilter)
      .sort({ reportedAt: -1 })
      .select('title category campusZone dateFound claimStatus imageThumbnail');

    res.status(200).json({ success: true, count: assets.length, data: assets });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Catalog query failed' });
  }
});

module.exports = router;`;

  // Project 3: AgriGuard AI (Python / FastAPI Crop Leaf Diagnosis Inference)
  const agriGuardPythonCode = `"""
AgriGuard AI - Crop Leaf Disease Diagnosis & Yield Advisory Engine
CNN Model Inference with Localized Agronomic Treatment Recommendation
Author: Pallagani Lalitha Manohar (C.R. Rao Institute)
"""
import torch
import numpy as np
from fastapi import FastAPI, UploadFile, File
from PIL import Image
import torchvision.transforms as transforms

app = FastAPI(title="AgriGuard Crop Disease Classifier")

CROP_CLASSES = [
    "Healthy_Crop", "Tomato_Early_Blight", "Wheat_Stem_Rust",
    "Corn_Common_Rust", "Potato_Late_Blight"
]

@app.post("/api/v1/diagnose")
async def diagnose_leaf(file: UploadFile = File(...)):
    image = Image.open(file.file).convert("RGB")
    tensor = transform_pipeline(image).unsqueeze(0)
    
    with torch.no_grad():
        outputs = model(tensor)
        confidence, predicted_idx = torch.max(outputs, 1)
        disease_name = CROP_CLASSES[predicted_idx.item()]
        
    return {
        "disease": disease_name,
        "confidence": round(confidence.item() * 100, 2),
        "severity": "MODERATE" if confidence > 0.85 else "EARLY_STAGE",
        "advisory": get_organic_treatment_plan(disease_name)
    }`;

  const telemetryJson = `{
  "engineer": "Pallagani Lalitha Manohar",
  "institution": "C.R. Rao Advanced Institute (AIMSCS)",
  "degree": "B.Tech in Computer Science and Applied Mathematics",
  "academicStanding": {
    "currentYear": "Undergraduate (2022 - 2026)",
    "cgpa": "7.32 / 10.0",
    "highSchool": "Narayana Junior College (96.4%)"
  },
  "internship": {
    "organization": "Infosys Springboard",
    "role": "Java Full Stack Developer Intern",
    "project": "Smart Water Usage Monitoring and Automated Billing Management Platform",
    "stack": ["Java", "Spring Boot", "MySQL", "React.js", "Hibernate"]
  },
  "flagshipProjects": [
    "UniRetrieve (Campus Lost & Found Cataloging Platform)",
    "AgriGuard (AI Crop Disease Diagnostic Engine)"
  ],
  "verifiedProfiles": {
    "leetCode": "https://leetcode.com/u/lalithamanohar",
    "gitHub": "https://github.com/lalithamanohar",
    "linkedIn": "https://linkedin.com/in/lalithamanohar"
  },
  "status": "AVAILABLE FOR SOFTWARE ENGINEERING ROLES & INTERNSHIPS"
}`;

  const getActiveCode = () => {
    switch (activeTab) {
      case 'water':
        return springBootJavaCode;
      case 'uniretrieve':
        return uniRetrieveCode;
      case 'agriguard':
        return agriGuardPythonCode;
      case 'telemetry':
        return telemetryJson;
      default:
        return springBootJavaCode;
    }
  };

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(getActiveCode());
      setCodeCopied(true);
      setTimeout(() => setCodeCopied(false), 2000);
    } catch {
      setCodeCopied(true);
      setTimeout(() => setCodeCopied(false), 2000);
    }
  };

  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="relative min-h-screen pt-24 pb-16 md:pt-28 md:pb-24 flex items-center justify-center bg-grid-pattern overflow-hidden"
    >
      {/* Ambient background glow accents in Royal Blue and Electric Cyan */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[350px] bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Reference-Inspired Announcement & Academic Pill */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
          <div
            id="hero-availability-badge"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-blue-950/70 border border-blue-500/40 text-blue-300 shadow-sm shadow-blue-950/50"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span>{PERSONAL_INFO.availabilityBadge}</span>
          </div>

          <div
            id="hero-institution-pill"
            className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-medium text-slate-300 bg-slate-900/80 border border-slate-700/80 shadow-sm"
          >
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span>CR Rao AIMSCS • CS & Applied Mathematics</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Candidate Portrait, Identity & Key CTAs */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-start text-left">
            {/* Executive Developer Avatar & Badge (Directly elevating reference's circular avatar) */}
            <div className="flex items-center gap-5 mb-6">
              <div
                id="hero-avatar-container"
                className="relative group cursor-pointer"
                title="Pallagani Lalitha Manohar - C.R. Rao Institute"
              >
                {/* Outer animated gradient glow */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 opacity-75 blur-md group-hover:opacity-100 transition duration-500 animate-pulse" />

                {/* Avatar Badge Circle */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-slate-900 via-blue-950 to-[#0F172A] border-2 border-cyan-400/80 p-1 flex items-center justify-center shadow-xl">
                  <div className="w-full h-full rounded-full bg-[#0B0F19] flex flex-col items-center justify-center text-center">
                    <span className="text-xl sm:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-300 via-white to-blue-400 bg-clip-text text-transparent">
                      {PERSONAL_INFO.initials}
                    </span>
                    <span className="text-[9px] font-mono text-cyan-400/90 font-semibold tracking-wider uppercase">
                      JAVA
                    </span>
                  </div>
                </div>

                {/* Online status radar dot */}
                <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#0B0F17] shadow-sm flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                </span>
              </div>

              {/* Identity Details */}
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    B.Tech (CGPA 7.32)
                  </span>
                  <span className="text-xs font-mono text-slate-400">CR Rao AIMSCS</span>
                </div>
                <h1
                  id="hero-candidate-name"
                  className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mt-1"
                >
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-xs sm:text-sm text-cyan-400 font-mono flex items-center gap-1.5 mt-0.5 font-semibold">
                  <Layers className="w-3.5 h-3.5 text-cyan-400" />
                  {PERSONAL_INFO.primaryTitle}
                </p>
              </div>
            </div>

            {/* Core Reference Bio / Tagline */}
            <div
              id="hero-reference-quote-box"
              className="p-4 sm:p-5 rounded-xl bg-slate-900/70 border border-slate-800/90 backdrop-blur-md mb-6 w-full shadow-lg relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-400" />
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                &ldquo;Hello! I&apos;m <strong className="text-white font-semibold">Pallagani Lalitha Manohar</strong>, an enthusiastic Computer Science & Applied Mathematics undergraduate at <span className="text-cyan-400 font-medium">C.R. Rao Institute</span> and Virtual Intern at <span className="text-blue-400 font-medium">Infosys Springboard</span>. I specialize in building robust enterprise Java backends, scalable RESTful microservices, and modern full-stack web applications.&rdquo;
              </p>
            </div>

            {/* Featured Projects Highlight Pills (Ref: UniRetrieve & AgriGuard & Infosys Platform) */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900/90 border border-slate-700/80 text-slate-300 hover:border-cyan-400/60 hover:text-cyan-300 transition-all shadow-sm"
              >
                <Search className="w-3.5 h-3.5 text-cyan-400" />
                <span>UniRetrieve (Campus Portal)</span>
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900/90 border border-slate-700/80 text-slate-300 hover:border-emerald-400/60 hover:text-emerald-300 transition-all shadow-sm"
              >
                <Sprout className="w-3.5 h-3.5 text-emerald-400" />
                <span>AgriGuard (AI Crop Diagnostics)</span>
              </a>
              <a
                href="#experience"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900/90 border border-slate-700/80 text-slate-300 hover:border-blue-400/60 hover:text-blue-300 transition-all shadow-sm"
              >
                <Droplets className="w-3.5 h-3.5 text-blue-400" />
                <span>Smart Water Billing (Spring Boot)</span>
              </a>
            </div>

            {/* Primary Action Buttons (Directly echoing reference's two primary actions + professional actions) */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 w-full">
              {/* Reference Button 1: Projects */}
              <a
                id="hero-cta-projects"
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition-all shadow-lg shadow-blue-600/30 active:scale-95"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>Explore Projects</span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-white/20 text-white font-bold ml-1">
                  UniRetrieve & AgriGuard
                </span>
              </a>

              {/* Reference Button 2: About Me */}
              <a
                id="hero-cta-about"
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-slate-200 bg-slate-900/90 border border-slate-700 hover:border-cyan-400/70 hover:text-cyan-300 hover:bg-slate-800/80 transition-all shadow-sm active:scale-95 cursor-pointer"
              >
                <User className="w-4 h-4 text-cyan-400" />
                <span>About Me</span>
              </a>

              {/* Professional Action: Resume Preview */}
              <button
                id="hero-cta-resume"
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-medium text-slate-300 bg-slate-900/60 border border-slate-800 hover:border-slate-700 hover:text-white transition-all cursor-pointer shadow-sm"
              >
                <FileText className="w-4 h-4 text-slate-400" />
                <span>Resume</span>
              </button>

              {/* Professional Action: Contact */}
              <a
                id="hero-cta-contact"
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-medium text-slate-400 hover:text-cyan-300 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </a>
            </div>

            {/* Social Links & Verified Badges */}
            <div className="pt-6 border-t border-slate-800/80 w-full flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <a
                  id="hero-social-github"
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-mono text-slate-400 bg-slate-900/60 border border-slate-800 hover:border-slate-700 hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  id="hero-social-linkedin"
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-mono text-slate-400 bg-slate-900/60 border border-cyan-400/50 hover:text-cyan-300 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  id="hero-social-leetcode"
                  href={PERSONAL_INFO.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-mono text-slate-400 bg-slate-900/60 border border-slate-800 hover:border-amber-400/50 hover:text-amber-300 transition-colors"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>LeetCode</span>
                </a>
              </div>

              <div className="text-xs text-slate-400 font-mono flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                <span>CR Rao AIMSCS • CGPA 7.32</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Code Terminal & Project Inspector */}
          <div className="lg:col-span-6 xl:col-span-5 w-full">
            <div
              id="hero-terminal-card"
              className="rounded-xl overflow-hidden backdrop-blur-md bg-slate-900/90 border border-slate-800 shadow-2xl shadow-black/70 relative"
            >
              {/* Window Header */}
              <div className="px-4 py-3 bg-slate-950/90 border-b border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-600/50" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600/50" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600/50" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span>manohar@aimscs-workspace</span>
                  </span>
                </div>

                {/* Copy button */}
                <button
                  id="terminal-copy-button"
                  type="button"
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded bg-slate-800/80 text-slate-300 hover:text-cyan-300 hover:bg-slate-700/80 transition-colors cursor-pointer"
                  title="Copy code to clipboard"
                  aria-label="Copy code to clipboard"
                >
                  {codeCopied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-slate-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Terminal Tabs (Real Java, Node, Python projects) */}
              <div className="px-3 pt-2 bg-slate-950/50 border-b border-slate-800/60 flex items-center gap-1 text-xs font-mono overflow-x-auto">
                <button
                  type="button"
                  id="tab-btn-water"
                  onClick={() => setActiveTab('water')}
                  className={`px-3 py-1.5 rounded-t-md transition-colors flex items-center gap-1.5 text-xs whitespace-nowrap ${
                    activeTab === 'water'
                      ? 'bg-slate-900 text-cyan-400 border-t-2 border-t-cyan-400 border-x border-slate-800'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
                  }`}
                >
                  <span className="text-orange-400 font-bold">☕</span>
                  <span>WaterBilling.java</span>
                </button>

                <button
                  type="button"
                  id="tab-btn-uniretrieve"
                  onClick={() => setActiveTab('uniretrieve')}
                  className={`px-3 py-1.5 rounded-t-md transition-colors flex items-center gap-1.5 text-xs whitespace-nowrap ${
                    activeTab === 'uniretrieve'
                      ? 'bg-slate-900 text-cyan-400 border-t-2 border-t-cyan-400 border-x border-slate-800'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
                  }`}
                >
                  <span className="text-emerald-400 font-bold">JS</span>
                  <span>UniRetrieve.js</span>
                </button>

                <button
                  type="button"
                  id="tab-btn-agriguard"
                  onClick={() => setActiveTab('agriguard')}
                  className={`px-3 py-1.5 rounded-t-md transition-colors flex items-center gap-1.5 text-xs whitespace-nowrap ${
                    activeTab === 'agriguard'
                      ? 'bg-slate-900 text-cyan-400 border-t-2 border-t-cyan-400 border-x border-slate-800'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
                  }`}
                >
                  <span className="text-sky-400 font-bold">🐍</span>
                  <span>AgriGuard.py</span>
                </button>

                <button
                  type="button"
                  id="tab-btn-telemetry"
                  onClick={() => setActiveTab('telemetry')}
                  className={`px-3 py-1.5 rounded-t-md transition-colors flex items-center gap-1.5 text-xs whitespace-nowrap ${
                    activeTab === 'telemetry'
                      ? 'bg-slate-900 text-cyan-400 border-t-2 border-t-cyan-400 border-x border-slate-800'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
                  }`}
                >
                  <Activity className="w-3 h-3 text-cyan-400" />
                  <span>status.json</span>
                </button>
              </div>

              {/* Terminal Code Body */}
              <div className="p-4 bg-[#090D14] overflow-x-auto font-mono text-[11px] sm:text-xs leading-relaxed max-h-[380px] min-h-[340px]">
                <pre className="text-slate-300 whitespace-pre">
                  <code>{getActiveCode()}</code>
                </pre>
              </div>

              {/* Terminal Status Bar */}
              <div className="px-4 py-2.5 bg-slate-950 border-t border-slate-800/80 flex items-center justify-between text-[10px] sm:text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Spring Boot & React: RUNNING</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>UTF-8</span>
                  <span className="text-cyan-400">CR Rao AIMSCS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
