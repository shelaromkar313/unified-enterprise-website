import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Server, PhoneCall, Briefcase, Network, 
  Headphones, Cpu, ShieldCheck, Laptop, 
  CheckCircle2, ArrowRight, Layers, ShoppingBag, 
  RefreshCw, ChevronDown, Check, X, Sparkles,
  Zap, Building2, BookOpen, ChevronUp, FileCheck
} from 'lucide-react';
import { 
  SOLUTIONS_DATA, 
  SLA_ESCALATION_LEVELS, 
  SolutionItem 
} from '../data/solutionsData';

interface SolutionsPageProps {
  onOpenConsultation: (solutionTitle: string) => void;
}

export default function SolutionsPage({ onOpenConsultation }: SolutionsPageProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlItem = searchParams.get('item');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(urlItem || 'all');
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(false);
  const [deepDiveExpanded, setDeepDiveExpanded] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setSelectedCategoryId(urlItem || 'all');
  }, [urlItem]);

  // The exact 10 solutions from the official architectural blueprint PDF
  const categoryList = useMemo(() => [
    { id: 'complete-it-infrastructure', name: 'Complete IT Infrastructure' },
    { id: 'unified-it-telecom-management', name: 'Unified IT & Telecom Management' },
    { id: 'it-infrastructure-smes', name: 'IT Infrastructure for SMEs' },
    { id: 'multi-location-it-management', name: 'Multi-Location IT Management' },
    { id: 'call-centre-bpo-infrastructure', name: 'Call Center & BPO Infrastructure' },
    { id: 'network-design-implementation', name: 'Network Design & Implementation' },
    { id: 'firewall-network-security', name: 'Firewall & Network Security' },
    { id: 'workplace-remote-office', name: 'Workplace & Remote Office Infrastructure' },
    { id: 'it-hardware-procurement', name: 'IT Hardware Procurement' },
    { id: 'it-asset-lifecycle-management', name: 'IT Asset Lifecycle Management' },
  ], []);

  const handleSelectCategory = (id: string) => {
    setSelectedCategoryId(id);
    if (id === 'all') {
      searchParams.delete('item');
      setSearchParams(searchParams, { replace: true });
    } else {
      setSearchParams({ item: id }, { replace: true });
    }
  };

  const toggleDeepDive = (id: string) => {
    setDeepDiveExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const currentSolution: SolutionItem | undefined = SOLUTIONS_DATA[selectedCategoryId];
  const currentCategoryObj = categoryList.find(c => c.id === selectedCategoryId);

  return (
    <div className="min-h-[85vh] bg-white py-8 lg:py-12 border-b border-slate-100">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Mobile Category Selector */}
          <div className="lg:hidden col-span-1 mb-2">
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-3.5 shadow-2xs">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#dc2626] block">
                    Enterprise Solution Vertical
                  </span>
                  <p className="text-sm font-bold text-slate-900 truncate">
                    {selectedCategoryId === 'all'
                      ? 'Solutions Home'
                      : currentSolution?.name || 'All Solutions'}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileCategoryOpen(!mobileCategoryOpen)}
                  className="px-3.5 py-2 min-h-[40px] rounded-xl bg-white border border-slate-200 text-xs font-semibold text-[#dc2626] shadow-2xs flex items-center gap-1.5 active:scale-95 transition-all shrink-0 cursor-pointer"
                >
                  <span>{mobileCategoryOpen ? 'Close' : 'Solutions'}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${mobileCategoryOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {/* Collapsible Mobile Category List */}
              {mobileCategoryOpen && (
                <div className="mt-3 pt-3 border-t border-slate-200/80 max-h-[340px] overflow-y-auto space-y-1">
                  <button
                    onClick={() => {
                      handleSelectCategory('all');
                      setMobileCategoryOpen(false);
                    }}
                    className={`w-full text-left py-2.5 px-3 min-h-[42px] flex items-center justify-between rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                      selectedCategoryId === 'all' ? 'bg-[#dc2626] text-white font-bold' : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span>Solutions Home (Overview)</span>
                  </button>
                  {categoryList.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        handleSelectCategory(item.id);
                        setMobileCategoryOpen(false);
                      }}
                      className={`w-full text-left py-2.5 px-3 min-h-[42px] flex items-center justify-between rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                        selectedCategoryId === item.id ? 'bg-[#dc2626] text-white font-bold' : 'text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <span>{item.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Left Column: Clean Sidebar Navigation (Desktop) */}
          <aside className="hidden lg:block lg:col-span-3 border-r border-slate-200/90 pr-5 lg:sticky lg:top-28">
            {/* Solutions Home Link */}
            <div className="mb-4 pb-3 border-b border-slate-100">
              <button
                type="button"
                onClick={() => handleSelectCategory('all')}
                className={`relative text-left text-[13.5px] leading-snug transition-colors duration-150 block w-full py-1.5 pl-3.5 cursor-pointer ${
                  selectedCategoryId === 'all'
                    ? 'text-[#dc2626] font-bold'
                    : 'text-[#dc2626] hover:underline font-medium'
                }`}
              >
                {selectedCategoryId === 'all' && (
                  <span
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-[3.5px] h-[15px] bg-[#dc2626] rounded-full"
                    aria-hidden="true"
                  />
                )}
                Solutions Home
              </button>
            </div>

            {/* Category List */}
            <ul className="space-y-1">
              {categoryList.map((item) => {
                const isActive = selectedCategoryId === item.id;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => handleSelectCategory(item.id)}
                      className={`relative text-left text-[13px] leading-relaxed transition-colors duration-150 block w-full py-2 pl-3.5 pr-2 rounded-lg cursor-pointer ${
                        isActive
                          ? 'text-slate-900 font-bold bg-slate-50'
                          : 'text-slate-700 hover:text-[#dc2626] hover:bg-slate-50/60 font-normal'
                      }`}
                    >
                      {isActive && (
                        <span
                          className="absolute left-0 top-1/2 -translate-y-1/2 w-[3.5px] h-[15px] bg-[#dc2626] rounded-full"
                          aria-hidden="true"
                        />
                      )}
                      <span>{item.name}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </aside>

          {/* Right Column: Main Content */}
          <main className="lg:col-span-9 space-y-8">
            
            {/* VIEW 1: SOLUTIONS HOME (ALL 10 BLUEPRINT CATALOG + SLA MATRIX) */}
            {selectedCategoryId === 'all' ? (
              <div className="space-y-8">
                
                {/* Official Natural Architecture Blueprint Hero */}
                <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs relative overflow-hidden">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#dc2626] text-xs font-bold uppercase tracking-wider mb-3">
                    <Sparkles className="w-3.5 h-3.5 text-[#dc2626]" />
                    <span>Official Natural Architecture Blueprint</span>
                  </div>

                  <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2 text-slate-900">
                    Unified Enterprise Solutions
                  </h1>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl mb-5">
                    Master Architecture, Deep-Dive Technical Engineering &amp; Content Specification for enterprise IT infrastructure. Includes visual cards, custom specialty frameworks, certified handover deliverables, and original deep-dive engineering guides for every vertical.
                  </p>

                  <div className="flex flex-wrap items-center gap-2 pt-3.5 border-t border-slate-100 text-xs">
                    <span className="bg-slate-50 text-slate-700 px-3 py-1 rounded-md border border-slate-200/80">
                      Architecture: <strong className="text-slate-900 font-semibold">Customized by Specialty</strong>
                    </span>
                    <span className="bg-slate-50 text-slate-700 px-3 py-1 rounded-md border border-slate-200/80">
                      Content Depth: <strong className="text-slate-900 font-semibold">Cards, Deliverables + Deep-Dive Articles</strong>
                    </span>
                    <span className="bg-emerald-50 text-emerald-800 px-3 py-1 rounded-md border border-emerald-200">
                      Status: <strong className="text-emerald-700 font-semibold">Ready to Publish</strong>
                    </span>
                  </div>
                </div>

                {/* Official Enterprise SLA Escalation Matrix (PDF Page 1) */}
                <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-4 bg-[#dc2626] rounded-full inline-block" />
                      <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                        Official Enterprise SLA Escalation Matrix
                      </h2>
                    </div>
                    <span className="text-[11px] font-semibold text-red-600 bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-full w-fit">
                      Guaranteed Multi-Tier Governance
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-5">
                    Enterprise clients are never left stranded with junior technicians. Unified Enterprise enforces a transparent, 5-tier escalation path for all AMC, infrastructure, and technical support contracts, ensuring rapid progression up to executive leadership for high-severity incidents:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
                    {SLA_ESCALATION_LEVELS.map((lvl, idx) => (
                      <div
                        key={idx}
                        className={`bg-slate-50/70 border border-slate-200/80 rounded-xl p-3.5 border-t-4 ${lvl.accentColor} hover:bg-white hover:shadow-xs transition-all flex flex-col justify-between`}
                      >
                        <div>
                          <div className="flex items-center justify-between gap-1 mb-1.5">
                            <span className="text-[10px] font-mono font-bold text-slate-500 uppercase">
                              {lvl.level}
                            </span>
                            <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded border ${lvl.badgeColor}`}>
                              {lvl.badge}
                            </span>
                          </div>
                          <h4 className="text-xs font-bold text-slate-900 mb-1">
                            {lvl.role}
                          </h4>
                          <p className="text-[11px] text-slate-600 leading-snug">
                            {lvl.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 10 Solutions Grid (From the PDF) */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h2 className="text-lg font-bold text-slate-900 tracking-tight">
                        Explore All 10 Enterprise Solutions
                      </h2>
                      <p className="text-xs text-slate-500">
                        Select any vertical to view custom specialty frameworks, deliverables, and engineering guides
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {categoryList.map((cat) => {
                      const sol = SOLUTIONS_DATA[cat.id];
                      if (!sol) return null;
                      return (
                        <div
                          key={sol.id}
                          className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
                        >
                          <div>
                            {/* Card Image Header */}
                            <div className="relative h-44 sm:h-52 rounded-xl overflow-hidden mb-4 bg-slate-100 border border-slate-200/70">
                              <img
                                src={sol.image}
                                alt={sol.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-900/15 to-transparent pointer-events-none" />
                              
                              <div className="absolute top-2.5 left-2.5">
                                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-slate-950/80 backdrop-blur-md text-white border border-white/10 uppercase tracking-wider">
                                  {sol.solutionNumber}
                                </span>
                              </div>

                              <div className="absolute top-2.5 right-2.5">
                                <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/90 text-white backdrop-blur-md flex items-center gap-1 shadow-xs">
                                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                  Blueprint Ready
                                </span>
                              </div>

                              <div className="absolute bottom-2.5 left-3 right-3 text-white">
                                <span className="text-[11px] font-bold text-red-300 block truncate">
                                  {sol.badge}
                                </span>
                              </div>
                            </div>

                            {/* Card Content Header */}
                            <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#dc2626] transition-colors leading-snug mb-1">
                              {sol.name}
                            </h3>

                            <span className="text-[11px] text-slate-500 block mb-2.5">
                              Ideal For: <strong className="text-slate-700">{sol.idealFor}</strong>
                            </span>

                            <p className="text-xs text-slate-600 leading-relaxed mb-3 line-clamp-2">
                              {sol.heroSubtitle}
                            </p>

                            {/* Value Pills */}
                            <div className="flex flex-wrap gap-1.5 mb-3">
                              {sol.valuePills.map((pill, idx) => (
                                <span
                                  key={idx}
                                  className="text-[10px] font-medium bg-slate-50 border border-slate-200/70 text-slate-700 px-2 py-0.5 rounded-md inline-flex items-center gap-1"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#dc2626]" />
                                  {pill}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2 mt-2">
                            <span className="text-[10px] text-slate-400 truncate max-w-[200px]">
                              OEMs: {sol.authorizedOem.split(',')[0]} &amp; more
                            </span>
                            <button
                              type="button"
                              onClick={() => handleSelectCategory(sol.id)}
                              className="text-xs font-bold text-[#dc2626] hover:text-[#b91c1c] inline-flex items-center gap-1 cursor-pointer"
                            >
                              <span>Explore Blueprint</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>
            ) : (

              /* VIEW 2: SELECTED SOLUTION SPECIFICATION (100% MATCHING PDF CONTENT) */
              currentSolution && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  
                  {/* Solution Header & Meta Banner: Split Hero with High-Resolution Architecture Showcase */}
                  <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-xs">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                      
                      {/* Left Side: Overview & Deliverables Meta */}
                      <div className="lg:col-span-7 space-y-3.5">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs font-bold text-[#dc2626] bg-red-50 border border-red-200 px-3 py-1 rounded-full">
                            {currentSolution.badge}
                          </span>
                          <span className="text-xs font-medium text-slate-500 bg-slate-100 border border-slate-200/70 px-2.5 py-0.5 rounded-full">
                            SLA-Backed Multi-Tier Governance
                          </span>
                        </div>

                        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                          {currentSolution.name}
                        </h1>

                        <p className="text-xs text-slate-500 font-medium">
                          Ideal For: <strong className="text-slate-800">{currentSolution.idealFor}</strong>
                        </p>

                        <div className="pt-2 border-t border-slate-100">
                          <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5 leading-snug">
                            {currentSolution.heroSubtitle}
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3.5">
                            {currentSolution.heroParagraph}
                          </p>

                          {/* 3 Value Pills */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {currentSolution.valuePills.map((pill, idx) => (
                              <span
                                key={idx}
                                className="text-xs font-semibold bg-red-50/80 border border-red-100 text-[#dc2626] px-3 py-1 rounded-full inline-flex items-center gap-1.5"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#dc2626]" />
                                {pill}
                              </span>
                            ))}
                          </div>

                          <button
                            type="button"
                            onClick={() => onOpenConsultation(`${currentSolution.name} Blueprint Request`)}
                            className="px-5 py-2.5 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold transition-all shadow-xs inline-flex items-center gap-2 cursor-pointer active:scale-95"
                          >
                            <span>Request Engineering Blueprint</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      {/* Right Side: High-Definition Framed Architecture Showcase */}
                      <div className="lg:col-span-5">
                        <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-md group bg-slate-900 aspect-[4/3] sm:aspect-[16/11]">
                          <img
                            src={currentSolution.image}
                            alt={currentSolution.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/25 to-transparent pointer-events-none" />
                          
                          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                            <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-white border border-white/10 uppercase tracking-wider">
                              Architecture Blueprint
                            </span>
                            <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/90 text-white backdrop-blur-md flex items-center gap-1 shadow-xs">
                              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                              Certified Architecture
                            </span>
                          </div>

                          <div className="absolute bottom-3 left-3 right-3 text-white">
                            <p className="text-xs font-bold truncate drop-shadow-sm">
                              {currentSolution.name}
                            </p>
                            <p className="text-[10px] text-slate-300 truncate">
                              Authorized OEMs: {currentSolution.authorizedOem.split(',')[0]}
                            </p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Specialty Framework / Comparison Section (PDF Box 1) */}
                  <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-xs">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5 pb-3 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-5 bg-[#dc2626] rounded-full inline-block" />
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight uppercase">
                          {currentSolution.frameworkTitle}
                        </h3>
                      </div>
                      <span className="text-[11px] font-semibold text-slate-500 bg-slate-50 border border-slate-200 px-3 py-1 rounded-full w-fit">
                        Technical Comparison &amp; Architecture Model
                      </span>
                    </div>

                    {/* Comparison Model */}
                    {currentSolution.frameworkType === 'comparison' && currentSolution.comparisonData && (
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
                          
                          {/* Box 1: Traditional Siloed / Multi-Vendor Setup */}
                          <div className="bg-slate-50/90 border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-2xs flex flex-col justify-between transition-all hover:border-slate-300">
                            <div>
                              <div className="flex items-center justify-between gap-2 mb-3">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-rose-50 text-rose-700 border border-rose-200 uppercase tracking-wide">
                                  <span className="w-4 h-4 rounded-full bg-rose-200/80 text-rose-700 flex items-center justify-center text-[10px] font-black">✕</span>
                                  <span>{currentSolution.comparisonData.traditionalTitle}</span>
                                </span>
                                <span className="text-[10px] font-semibold text-rose-600 bg-rose-50/60 px-2 py-0.5 rounded-md border border-rose-100">
                                  Siloed Risk
                                </span>
                              </div>

                              <p className="text-[11px] text-slate-500 mb-4 leading-relaxed">
                                Multiple uncoordinated contractors, finger-pointing during outages, unmanaged power/cooling, and fragmented support billing.
                              </p>

                              <div className="space-y-3">
                                {currentSolution.comparisonData.traditionalPoints.map((pt, idx) => {
                                  const hasColon = pt.includes(':');
                                  const [title, ...rest] = hasColon ? pt.split(':') : ['', pt];
                                  return (
                                    <div
                                      key={idx}
                                      className="bg-white/90 border border-rose-100 rounded-xl p-3.5 flex items-start gap-3 shadow-2xs"
                                    >
                                      <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                                        ✕
                                      </span>
                                      <div className="text-xs text-slate-700 leading-relaxed">
                                        {hasColon ? (
                                          <>
                                            <strong className="text-slate-900 block font-semibold mb-0.5">{title}</strong>
                                            <span className="text-slate-600">{rest.join(':')}</span>
                                          </>
                                        ) : (
                                          <span className="text-slate-600">{pt}</span>
                                        )}
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>

                            <div className="pt-4 mt-5 border-t border-slate-200/70 flex items-center gap-2 text-[11px] text-rose-600 font-medium">
                              <span>⚠️ Incurs downtime, finger-pointing vendors &amp; degraded component lifespan</span>
                            </div>
                          </div>

                          {/* Box 2: Unified Enterprise Converged Model */}
                          <div className="bg-white border-2 border-emerald-500/40 rounded-2xl p-5 sm:p-6 shadow-sm relative overflow-hidden flex flex-col justify-between transition-all hover:shadow-md">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full pointer-events-none" />
                            
                            <div>
                              <div className="flex items-center justify-between gap-2 mb-3">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 uppercase tracking-wide">
                                  <span className="w-4 h-4 rounded-full bg-emerald-200 text-emerald-800 flex items-center justify-center text-[10px] font-black">✓</span>
                                  <span>{currentSolution.comparisonData.convergedTitle}</span>
                                </span>
                                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 uppercase tracking-wider">
                                  Recommended Standard
                                </span>
                              </div>

                              <p className="text-[11px] text-slate-500 mb-4 leading-relaxed">
                                Single accountable partner, dedicated on-site L1/L2 engineers, audit and modernization of existing equipment, and unified AMC.
                              </p>

                              <div className="space-y-3">
                                {currentSolution.comparisonData.convergedPoints.map((pt, idx) => {
                                  const hasColon = pt.includes(':');
                                  const [title, ...rest] = hasColon ? pt.split(':') : ['', pt];
                                  return (
                                    <div
                                      key={idx}
                                      className="bg-emerald-50/40 border border-emerald-200/80 rounded-xl p-3.5 flex items-start gap-3 shadow-2xs"
                                    >
                                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                                        ✓
                                      </span>
                                      <div className="text-xs text-slate-800 leading-relaxed">
                                        {hasColon ? (
                                          <>
                                            <strong className="text-slate-900 block font-semibold mb-0.5">{title}</strong>
                                            <span className="text-slate-700">{rest.join(':')}</span>
                                          </>
                                        ) : (
                                          <span className="text-slate-700">{pt}</span>
                                        )}
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>

                            <div className="pt-4 mt-5 border-t border-emerald-100 flex items-center gap-2 text-[11px] text-emerald-700 font-semibold">
                              <span>✨ Single accountable partner with guaranteed 5-Tier SLA governance</span>
                            </div>
                          </div>

                        </div>

                        {/* Visual Architecture Feature Banner */}
                        <div className="rounded-xl overflow-hidden border border-slate-200/80 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 p-4 sm:p-5 text-white flex flex-col md:flex-row items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-white/20 bg-slate-800">
                              <img src={currentSolution.image} alt="Architecture preview" className="w-full h-full object-cover" />
                            </div>
                            <div>
                              <h4 className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                                <span>Turnkey Deployment &amp; Modernization Blueprint</span>
                                <span className="text-[10px] bg-red-600 text-white font-mono px-1.5 py-0.2 rounded">5-Tier Escalation</span>
                              </h4>
                              <p className="text-[11px] text-slate-300">
                                Need our senior architects on-site? We survey physical floorplans, power phase balance, and cable pathways.
                              </p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => onOpenConsultation(`Onsite Survey: ${currentSolution.name}`)}
                            className="px-4 py-2 rounded-lg bg-white hover:bg-slate-100 text-slate-900 text-xs font-bold transition-all shadow-xs shrink-0 cursor-pointer active:scale-95"
                          >
                            Book On-Site Survey
                          </button>
                        </div>

                      </div>
                    )}

                    {/* Packages Model (e.g. Solution 03 SMEs) */}
                    {currentSolution.frameworkType === 'packages' && currentSolution.cardsData && (
                      <div className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                          {currentSolution.cardsData.map((pkg, idx) => (
                            <div
                              key={idx}
                              className="bg-white border-2 border-slate-200/80 hover:border-red-400/80 rounded-2xl p-5 sm:p-6 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
                            >
                              <div>
                                <span className="text-[10px] font-bold text-[#dc2626] bg-red-50 border border-red-200/80 px-2.5 py-1 rounded-md inline-block mb-3">
                                  {pkg.badge}
                                </span>
                                <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#dc2626] transition-colors mb-2 leading-snug">
                                  {pkg.title}
                                </h4>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                  {pkg.desc}
                                </p>
                              </div>
                              <div className="pt-3 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                                <span>Includes L1/L2 Onsite Support</span>
                                <span className="text-[#dc2626] font-bold">✓ Active AMC</span>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Visual Banner */}
                        <div className="rounded-xl overflow-hidden border border-slate-200/80 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 p-4 sm:p-5 text-white flex flex-col md:flex-row items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-white/20 bg-slate-800">
                              <img src={currentSolution.image} alt="Package preview" className="w-full h-full object-cover" />
                            </div>
                            <div>
                              <h4 className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                                <span>SME Managed Infrastructure &amp; On-Site AMC Support</span>
                                <span className="text-[10px] bg-red-600 text-white font-mono px-1.5 py-0.2 rounded">Zero CapEx Options</span>
                              </h4>
                              <p className="text-[11px] text-slate-300">
                                Predictable monthly support with zero lock-in contracts and dedicated on-site engineer visits.
                              </p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => onOpenConsultation(`SME Package Consultation: ${currentSolution.name}`)}
                            className="px-4 py-2 rounded-lg bg-white hover:bg-slate-100 text-slate-900 text-xs font-bold transition-all shadow-xs shrink-0 cursor-pointer active:scale-95"
                          >
                            Explore SME Plans
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Grid-4 Model (e.g. Solution 04 Multi-Location, Solution 07 Security) */}
                    {currentSolution.frameworkType === 'grid-4' && currentSolution.cardsData && (
                      <div className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                          {currentSolution.cardsData.map((card, idx) => (
                            <div
                              key={idx}
                              className="bg-slate-50/80 border border-slate-200/90 hover:border-red-300 rounded-2xl p-4.5 hover:bg-white hover:shadow-sm transition-all flex flex-col justify-between"
                            >
                              <div>
                                <div className="w-8 h-8 rounded-lg bg-red-50 border border-red-100 text-[#dc2626] font-bold text-xs flex items-center justify-center mb-2.5">
                                  0{idx + 1}
                                </div>
                                <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-1.5 leading-snug">
                                  {card.title}
                                </h4>
                                <p className="text-[11px] text-slate-600 leading-relaxed">
                                  {card.desc}
                                </p>
                              </div>
                              <div className="pt-2 mt-3 border-t border-slate-100 text-[10px] font-semibold text-emerald-700">
                                ✓ Certified Governance
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Visual Banner */}
                        <div className="rounded-xl overflow-hidden border border-slate-200/80 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 p-4 sm:p-5 text-white flex flex-col md:flex-row items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-white/20 bg-slate-800">
                              <img src={currentSolution.image} alt="Framework preview" className="w-full h-full object-cover" />
                            </div>
                            <div>
                              <h4 className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                                <span>Enterprise Architecture &amp; Governance Matrix</span>
                                <span className="text-[10px] bg-red-600 text-white font-mono px-1.5 py-0.2 rounded">Certified</span>
                              </h4>
                              <p className="text-[11px] text-slate-300">
                                Pre-configured hardware kits, multi-WAN failovers, and on-site L2 security engineer audits.
                              </p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => onOpenConsultation(`Architecture Consultation: ${currentSolution.name}`)}
                            className="px-4 py-2 rounded-lg bg-white hover:bg-slate-100 text-slate-900 text-xs font-bold transition-all shadow-xs shrink-0 cursor-pointer active:scale-95"
                          >
                            Schedule Technical Review
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Steps-4 & Stages-4 Model (e.g. Solution 08 Workplace, Solution 10 Lifecycle) */}
                    {(currentSolution.frameworkType === 'steps-4' || currentSolution.frameworkType === 'stages-4') && currentSolution.cardsData && (
                      <div className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                          {currentSolution.cardsData.map((step, idx) => (
                            <div
                              key={idx}
                              className="bg-slate-50/80 border border-slate-200/90 hover:border-red-300 rounded-2xl p-4.5 hover:bg-white hover:shadow-sm transition-all flex flex-col justify-between"
                            >
                              <div>
                                <span className="text-[10px] font-bold text-[#dc2626] bg-red-50 border border-red-200/60 px-2 py-0.5 rounded-md uppercase tracking-wider block w-fit mb-2">
                                  Phase {idx + 1}
                                </span>
                                <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-1.5 leading-snug">
                                  {step.title}
                                </h4>
                                <p className="text-[11px] text-slate-600 leading-relaxed">
                                  {step.desc}
                                </p>
                              </div>
                              <div className="pt-2 mt-3 border-t border-slate-100 text-[10px] font-semibold text-slate-400">
                                Milestone Verified
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Visual Banner */}
                        <div className="rounded-xl overflow-hidden border border-slate-200/80 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 p-4 sm:p-5 text-white flex flex-col md:flex-row items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-white/20 bg-slate-800">
                              <img src={currentSolution.image} alt="Phases preview" className="w-full h-full object-cover" />
                            </div>
                            <div>
                              <h4 className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                                <span>Turnkey Lifecycle Execution &amp; Onsite Support</span>
                                <span className="text-[10px] bg-red-600 text-white font-mono px-1.5 py-0.2 rounded">NIST 800-88</span>
                              </h4>
                              <p className="text-[11px] text-slate-300">
                                Extend estate usability by 24–36 months through targeted component upgrades and certified wiping.
                              </p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => onOpenConsultation(`Lifecycle Audit: ${currentSolution.name}`)}
                            className="px-4 py-2 rounded-lg bg-white hover:bg-slate-100 text-slate-900 text-xs font-bold transition-all shadow-xs shrink-0 cursor-pointer active:scale-95"
                          >
                            Book Hardware Audit
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Acquisitions-3 Model (e.g. Solution 09 Procurement) */}
                    {currentSolution.frameworkType === 'acquisitions-3' && currentSolution.cardsData && (
                      <div className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                          {currentSolution.cardsData.map((acq, idx) => (
                            <div
                              key={idx}
                              className="bg-white border-2 border-slate-200/80 hover:border-red-400/80 rounded-2xl p-5 sm:p-6 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
                            >
                              <div>
                                <span className="text-[10px] font-bold text-[#dc2626] bg-red-50 border border-red-200/80 px-2.5 py-1 rounded-md inline-block mb-3">
                                  Procurement Option 0{idx + 1}
                                </span>
                                <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#dc2626] transition-colors mb-2 leading-snug">
                                  {acq.title}
                                </h4>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                  {acq.desc}
                                </p>
                              </div>
                              <div className="pt-3 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                                <span>100% Factory Direct</span>
                                <span className="text-emerald-700 font-bold">✓ Official Warranty</span>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Visual Banner */}
                        <div className="rounded-xl overflow-hidden border border-slate-200/80 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 p-4 sm:p-5 text-white flex flex-col md:flex-row items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-white/20 bg-slate-800">
                              <img src={currentSolution.image} alt="Procurement preview" className="w-full h-full object-cover" />
                            </div>
                            <div>
                              <h4 className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                                <span>Authorized Tier-1 Dell, HP, Lenovo &amp; Acer Partner</span>
                                <span className="text-[10px] bg-red-600 text-white font-mono px-1.5 py-0.2 rounded">Tier-1 Direct</span>
                              </h4>
                              <p className="text-[11px] text-slate-300">
                                24-Hour pre-delivery diagnostic burn-in testing with full GST invoices and OEM warranty registration.
                              </p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => onOpenConsultation(`Hardware Quote: ${currentSolution.name}`)}
                            className="px-4 py-2 rounded-lg bg-white hover:bg-slate-100 text-slate-900 text-xs font-bold transition-all shadow-xs shrink-0 cursor-pointer active:scale-95"
                          >
                            Request Volume Pricing
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Core Business & Technical Advantages (3 Cards) */}
                  <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-1.5 h-4 bg-[#dc2626] rounded-full inline-block" />
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight uppercase">
                        Core Business &amp; Technical Advantages
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {currentSolution.coreAdvantages.map((adv, idx) => (
                        <div
                          key={idx}
                          className="bg-slate-50/70 border border-slate-200/80 rounded-xl p-4 hover:border-red-200 transition-all"
                        >
                          <div className="flex items-center gap-1.5 text-xs font-bold text-[#dc2626] mb-1.5">
                            <CheckCircle2 className="w-4 h-4 text-[#dc2626] shrink-0" />
                            <span>{adv.title}</span>
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {adv.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Certified Handover Checklist (4 Deliverables) */}
                  <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-1.5 h-4 bg-[#dc2626] rounded-full inline-block" />
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight uppercase">
                        What You Receive (Certified Handover Checklist)
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                      {currentSolution.handoverChecklist.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 bg-slate-50/80 p-3 rounded-xl border border-slate-100"
                        >
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Engineering Deep Dive & Guide (Expandable / Detailed) */}
                  <div className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-6 shadow-xs">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-[#dc2626]" />
                        <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wide">
                          📖 Engineering Deep Dive &amp; Guide
                        </h3>
                      </div>
                      <span className="text-[10px] font-semibold text-slate-500 bg-white border border-slate-200 px-2.5 py-0.5 rounded-full">
                        {currentSolution.deepDive.readTime}
                      </span>
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-3 leading-snug">
                      {currentSolution.deepDive.title}
                    </h4>

                    {/* Deep dive content with toggle */}
                    <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
                      <p>{currentSolution.deepDive.paragraphs[0]}</p>

                      {deepDiveExpanded[currentSolution.id] && (
                        <div className="space-y-3 pt-2 animate-in fade-in duration-200">
                          {currentSolution.deepDive.paragraphs.slice(1).map((p, idx) => (
                            <p key={idx}>{p}</p>
                          ))}
                        </div>
                      )}

                      <button
                        type="button"
                        onClick={() => toggleDeepDive(currentSolution.id)}
                        className="text-xs font-bold text-[#dc2626] hover:text-[#b91c1c] inline-flex items-center gap-1 pt-1 cursor-pointer"
                      >
                        <span>{deepDiveExpanded[currentSolution.id] ? 'Collapse Engineering Analysis' : 'Read Full Engineering Deep Dive'}</span>
                        {deepDiveExpanded[currentSolution.id] ? (
                          <ChevronUp className="w-3.5 h-3.5" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Authorized OEM Equipment & Schedule Review Footer */}
                  <div className="bg-white border border-slate-200/90 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
                    <div>
                      <span className="text-[11px] font-bold text-slate-500 block mb-0.5">
                        Authorized OEM Equipment:
                      </span>
                      <p className="text-xs font-bold text-slate-800">
                        {currentSolution.authorizedOem}
                      </p>
                      <p className="text-[11px] text-slate-500 mt-1">
                        Need a custom setup or site survey? Our enterprise engineers visit your location and provide complete architectural schematics within 48 hours.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => onOpenConsultation(`Technical Review: ${currentSolution.name}`)}
                      className="px-5 py-2.5 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold transition-all shadow-xs shrink-0 cursor-pointer flex items-center gap-1.5 active:scale-95"
                    >
                      <span>Schedule Technical Review ✨</span>
                    </button>
                  </div>

                </div>
              )
            )}

          </main>

        </div>
      </div>
    </div>
  );
}
