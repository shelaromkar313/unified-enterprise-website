import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Building2, PhoneCall, Factory, Network, 
  Laptop, Users, HeartPulse, School,
  ArrowRight, CheckCircle2, ChevronDown, ChevronUp,
  Sparkles, ShieldCheck, ShieldAlert, Clock, 
  FileCheck, HelpCircle, Check, Info, Layers
} from 'lucide-react';
import { 
  INDUSTRIES_DATA, 
  DETAILS_TO_CONFIRM,
  IndustryItem 
} from '../data/industriesData';

interface IndustriesPageProps {
  onOpenQuickSupport: (industryName?: string) => void;
}

export default function IndustriesPage({ onOpenQuickSupport }: IndustriesPageProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlItem = searchParams.get('item');

  // Map any legacy aliases to current canonical IDs
  const canonicalId = useMemo(() => {
    if (!urlItem) return 'all';
    if (urlItem === 'smes') return 'small-medium-enterprises';
    if (urlItem === 'remote-offices-distributed') return 'remote-offices-distributed-workforces';
    if (urlItem === 'logistics-transportation' || urlItem === 'professional-services') return 'all';
    return urlItem;
  }, [urlItem]);

  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(canonicalId);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(false);
  const [expandedFaqs, setExpandedFaqs] = useState<Record<string, boolean>>({});
  const [governanceOpen, setGovernanceOpen] = useState(false);

  useEffect(() => {
    setSelectedCategoryId(canonicalId);
  }, [canonicalId]);

  // Exact 8 industry verticals from the official specification PDF
  const categoryList = useMemo(() => [
    { id: 'small-medium-enterprises', name: 'Small & Medium Enterprises', icon: Building2 },
    { id: 'call-centres-bpos', name: 'Call Centres & BPOs', icon: PhoneCall },
    { id: 'manufacturing-industrial', name: 'Manufacturing & Industrial Companies', icon: Factory },
    { id: 'multi-location-businesses', name: 'Multi-Location Businesses', icon: Network },
    { id: 'remote-offices-distributed-workforces', name: 'Remote Offices & Distributed Workforces', icon: Laptop },
    { id: 'coworking-spaces', name: 'Coworking Spaces', icon: Users },
    { id: 'healthcare', name: 'Healthcare', icon: HeartPulse },
    { id: 'education', name: 'Education', icon: School },
  ], []);

  const handleSelectCategory = (id: string) => {
    setSelectedCategoryId(id);
    if (id === 'all') {
      searchParams.delete('item');
      setSearchParams(searchParams, { replace: true });
    } else {
      setSearchParams({ item: id }, { replace: true });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleFaq = (key: string) => {
    setExpandedFaqs(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const currentIndustry: IndustryItem | undefined = INDUSTRIES_DATA[selectedCategoryId];
  const currentCategoryObj = categoryList.find(c => c.id === selectedCategoryId);

  return (
    <div className="min-h-[85vh] bg-white py-5 sm:py-8 lg:py-12 border-b border-slate-100">
      <div className="max-w-[1536px] mx-auto px-3 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-start">
          
          {/* Mobile Category Selector */}
          <div className="lg:hidden col-span-1 mb-1">
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-3 shadow-2xs">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#dc2626] block">
                    Target Industry Sector
                  </span>
                  <p className="text-sm font-bold text-slate-900 truncate">
                    {selectedCategoryId === 'all'
                      ? 'Industries Home'
                      : currentIndustry?.name || 'All Industries'}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileCategoryOpen(!mobileCategoryOpen)}
                  className="px-3.5 py-2 min-h-[40px] rounded-xl bg-white border border-slate-200 text-xs font-semibold text-[#dc2626] shadow-2xs flex items-center gap-1.5 active:scale-95 transition-all shrink-0 cursor-pointer"
                >
                  <span>{mobileCategoryOpen ? 'Close' : 'Industries'}</span>
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
                    <span>Industries Home</span>
                    {selectedCategoryId === 'all' && <Check className="w-4 h-4 text-white" />}
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
                      <span className="truncate">{item.name}</span>
                      {selectedCategoryId === item.id && <Check className="w-4 h-4 text-white" />}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Left Column: Cisco-Style Minimalist Sidebar Navigation (Desktop) */}
          <aside className="hidden lg:block lg:col-span-3 border-r border-slate-200/90 pr-5 lg:sticky lg:top-28">
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
                Industries Home
              </button>
            </div>

            <ul className="space-y-1">
              {categoryList.map((item) => {
                const isActive = selectedCategoryId === item.id;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => handleSelectCategory(item.id)}
                      className={`relative text-left text-[13.5px] leading-relaxed transition-colors duration-150 block w-full py-1.5 pl-3.5 cursor-pointer ${
                        isActive
                          ? 'text-slate-900 font-bold'
                          : 'text-slate-700 hover:text-[#dc2626] font-normal'
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

            {/* Quick SLA & Support Commitment Card */}
            <div className="mt-8 pt-5 border-t border-slate-100">
              <div className="bg-slate-50/80 rounded-xl p-3.5 border border-slate-200/80 text-xs text-slate-600 space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-slate-900">
                  <ShieldCheck className="w-4 h-4 text-[#dc2626]" />
                  <span>Assigned Engineer Guarantee</span>
                </div>
                <p className="text-[11px] leading-relaxed text-slate-500">
                  Every industry vertical receives dedicated L1 triage and guaranteed L2 escalation for complex technical faults.
                </p>
                <button
                  type="button"
                  onClick={() => onOpenQuickSupport('General Industry Consultation')}
                  className="w-full text-center py-1.5 px-2 bg-white border border-slate-200 rounded-lg text-[11px] font-semibold text-[#dc2626] hover:bg-red-50 transition-colors cursor-pointer"
                >
                  Consult Sector Architect
                </button>
              </div>
            </div>
          </aside>

          {/* Right Column: Main Content */}
          <main className="lg:col-span-9 space-y-8">
            
            {/* ======================================================== */}
            {/* VIEW 1: INDUSTRIES HOME (ALL 8 SECTORS CATALOG + SLA MATRIX) */}
            {/* ======================================================== */}
            {selectedCategoryId === 'all' ? (
              <div className="space-y-8">
                
                {/* Official Industry Solutions Architecture Hero */}
                <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-7 shadow-xs relative overflow-hidden">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#dc2626] text-xs font-bold uppercase tracking-wider mb-3">
                    <Sparkles className="w-3.5 h-3.5 text-[#dc2626]" />
                    <span>Official Industry Solutions Architecture</span>
                  </div>

                  <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2 text-slate-900">
                    Unified Enterprise Industry Solutions
                  </h1>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl mb-5">
                    Purpose-built IT, telecom, security, and hardware infrastructure tailored for specific operational environments. From small businesses and high-density BPO call floors to industrial factory sites, multi-branch operations, healthcare facilities, and educational campuses.
                  </p>

                  <div className="flex flex-wrap items-center gap-2 pt-3.5 border-t border-slate-100 text-xs">
                    <span className="bg-slate-50 text-slate-700 px-3 py-1 rounded-md border border-slate-200/80">
                      Sectors: <strong className="text-slate-900 font-semibold">8 Specialized Verticals</strong>
                    </span>
                    <span className="bg-slate-50 text-slate-700 px-3 py-1 rounded-md border border-slate-200/80">
                      Engineering Model: <strong className="text-slate-900 font-semibold">Assigned Engineer + L2 Escalation</strong>
                    </span>
                    <span className="bg-emerald-50 text-emerald-800 px-3 py-1 rounded-md border border-emerald-200">
                      Status: <strong className="text-emerald-700 font-semibold">Contractual Governance</strong>
                    </span>
                  </div>
                </div>

                {/* Industry Engineering Commitments (Assigned Engineer + L2 Escalation + Remote/Onsite) */}
                <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-6 shadow-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-4 bg-[#dc2626] rounded-full inline-block" />
                      <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                        Cross-Sector Service &amp; Support Standards
                      </h2>
                    </div>
                    <span className="text-[11px] font-semibold text-red-600 bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-full w-fit">
                      Contractual Governance Across All 8 Sectors
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-5">
                    Unified Enterprise Solutions operates a standardized engineering model across all industry verticals, ensuring client operations never stall due to unassigned technicians or slow escalations:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                    <div className="bg-slate-50/70 border border-slate-200/80 rounded-xl p-3.5 border-t-4 border-t-blue-500 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-mono font-bold text-blue-600 uppercase block mb-1">
                          ENGINEER MODEL
                        </span>
                        <h4 className="text-xs font-bold text-slate-900 mb-1">Assigned Engineer</h4>
                        <p className="text-[11px] text-slate-600 leading-snug">
                          Helps manage your day-to-day IT and telecom requirements, infrastructure needs, and technical issues.
                        </p>
                      </div>
                    </div>

                    <div className="bg-slate-50/70 border border-slate-200/80 rounded-xl p-3.5 border-t-4 border-t-cyan-500 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-mono font-bold text-cyan-600 uppercase block mb-1">
                          ESCALATION PATH
                        </span>
                        <h4 className="text-xs font-bold text-slate-900 mb-1">L2 Support Escalation</h4>
                        <p className="text-[11px] text-slate-600 leading-snug">
                          Complex server, switch VLAN, firewall, or PBX issues are immediately escalated to senior L2 systems architects.
                        </p>
                      </div>
                    </div>

                    <div className="bg-slate-50/70 border border-slate-200/80 rounded-xl p-3.5 border-t-4 border-t-emerald-500 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-mono font-bold text-emerald-600 uppercase block mb-1">
                          SUPPORT CHANNELS
                        </span>
                        <h4 className="text-xs font-bold text-slate-900 mb-1">Remote &amp; Onsite Visits</h4>
                        <p className="text-[11px] text-slate-600 leading-snug">
                          Remote IT Support for fast triage within minutes; Onsite IT Engineers dispatched whenever physical replacement is required.
                        </p>
                      </div>
                    </div>

                    <div className="bg-slate-50/70 border border-slate-200/80 rounded-xl p-3.5 border-t-4 border-t-red-500 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-mono font-bold text-red-600 uppercase block mb-1">
                          HOURS &amp; AMC
                        </span>
                        <h4 className="text-xs font-bold text-slate-900 mb-1">24/5 &amp; Optional 24/7</h4>
                        <p className="text-[11px] text-slate-600 leading-snug">
                          Standard 24/5 coverage with 24/7 continuous hotlines for mission-critical call centers and healthcare facilities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 8 Industry Catalog Grid */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-4 bg-[#dc2626] rounded-full inline-block" />
                      <h2 className="text-lg font-bold text-slate-900 tracking-tight">
                        Explore All 8 Industry Blueprints
                      </h2>
                    </div>
                    <span className="text-xs font-semibold text-slate-500">
                      8 Sectors Available
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                    {categoryList.map((cat, idx) => {
                      const ind = INDUSTRIES_DATA[cat.id];
                      if (!ind) return null;
                      const IconComponent = cat.icon;

                      return (
                        <div
                          key={cat.id}
                          className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group"
                        >
                          <div>
                            {/* Card Image Header */}
                            <div className="relative h-44 sm:h-48 rounded-xl overflow-hidden mb-4 bg-slate-100 border border-slate-200/70">
                              <img
                                src={ind.image}
                                alt={ind.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/15 to-transparent pointer-events-none" />
                              <div className="absolute top-2.5 left-2.5">
                                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-slate-950/80 backdrop-blur-md text-white border border-white/10 uppercase tracking-wider">
                                  {ind.number}
                                </span>
                              </div>
                              <div className="absolute bottom-2.5 left-3 right-3 text-white">
                                <span className="text-[11px] font-bold text-red-300 block truncate">
                                  {ind.badge}
                                </span>
                                <span className="text-[10px] text-slate-300 block truncate">
                                  {ind.supportHours}
                                </span>
                              </div>
                            </div>

                            {/* Card Header */}
                            <div className="flex items-start gap-3 mb-2">
                              <div className="p-2 rounded-lg bg-red-50 text-[#dc2626] shrink-0">
                                <IconComponent className="w-5 h-5" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#dc2626] transition-colors leading-snug">
                                  {ind.name}
                                </h3>
                                <p className="text-xs font-semibold text-[#dc2626]">
                                  {ind.tagline}
                                </p>
                              </div>
                            </div>

                            {/* Lead Description */}
                            <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                              {ind.lead}
                            </p>

                            {/* Key Challenges Preview */}
                            <div className="mb-4 bg-slate-50/80 p-3 rounded-xl border border-slate-100">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                                Primary Sector Challenges
                              </span>
                              <ul className="space-y-1">
                                {ind.keyChallenges.slice(0, 2).map((ch, chIdx) => (
                                  <li key={chIdx} className="text-[11px] text-slate-600 flex items-start gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1 shrink-0" />
                                    <span className="line-clamp-1">{ch}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Solutions Cloud Preview */}
                            <div className="flex flex-wrap gap-1.5 mb-4">
                              {ind.solutionsServices.slice(0, 4).map((s, sIdx) => (
                                <span
                                  key={sIdx}
                                  className="text-[10px] font-medium text-slate-600 bg-slate-100 border border-slate-200/80 px-2 py-0.5 rounded-md"
                                >
                                  {s}
                                </span>
                              ))}
                              {ind.solutionsServices.length > 4 && (
                                <span className="text-[10px] font-semibold text-slate-400 px-1 py-0.5">
                                  +{ind.solutionsServices.length - 4} more
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                            <button
                              type="button"
                              onClick={() => handleSelectCategory(ind.id)}
                              className="text-xs font-bold text-[#dc2626] hover:underline flex items-center gap-1 cursor-pointer"
                            >
                              <span>Explore Sector Blueprint</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>

                            <button
                              type="button"
                              onClick={() => onOpenQuickSupport(`${ind.cta.label}: ${ind.name}`)}
                              className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-[#dc2626] text-white text-[11px] font-semibold transition-colors cursor-pointer"
                            >
                              {ind.cta.buttonText}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Pre-Publishing Governance & Operational Details Matrix (PDF Page 14) */}
                <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-4 bg-slate-900 rounded-full inline-block" />
                      <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                        Operational Governance &amp; Details Specification (Master PDF Page 14)
                      </h2>
                    </div>
                    <button
                      type="button"
                      onClick={() => setGovernanceOpen(!governanceOpen)}
                      className="px-3 py-1 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer w-fit"
                    >
                      <span>{governanceOpen ? 'Hide Governance Details' : 'View All 10 Verification Checkpoints'}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${governanceOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    The 10 operational checkpoints confirmed before client rollout to ensure strict alignment with enterprise SLAs, engineer models, dialer platforms, and compliance scopes:
                  </p>

                  <div className={`grid grid-cols-1 md:grid-cols-2 gap-3 transition-all ${governanceOpen ? 'block' : 'hidden'}`}>
                    {DETAILS_TO_CONFIRM.map((gov) => (
                      <div
                        key={gov.number}
                        className="bg-slate-50/80 border border-slate-200/80 rounded-xl p-3.5 flex items-start gap-3"
                      >
                        <span className="w-6 h-6 rounded-md bg-slate-900 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {gov.number}
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-1 mb-1">
                            <h4 className="text-xs font-bold text-slate-900 truncate">
                              {gov.title}
                            </h4>
                            <span className="text-[10px] font-semibold text-slate-500 bg-white px-2 py-0.2 rounded border border-slate-200/80 shrink-0">
                              {gov.scope}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-600 leading-snug">
                            {gov.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {!governanceOpen && (
                    <div className="text-center py-2">
                      <button
                        type="button"
                        onClick={() => setGovernanceOpen(true)}
                        className="text-xs font-semibold text-[#dc2626] hover:underline cursor-pointer"
                      >
                        Expand 10 Operational Checkpoints (Assigned Engineer, 24/7 Support, AMC Scope, Dialer Platforms, etc.)
                      </button>
                    </div>
                  )}
                </div>

              </div>
            ) : (
              /* ======================================================== */
              /* VIEW 2: DEDICATED INDUSTRY VERTICAL SPECIFICATION VIEW   */
              /* ======================================================== */
              currentIndustry && (
                <div className="space-y-8 animate-in fade-in duration-200">
                  
                  {/* Breadcrumb Navigation */}
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <button
                      type="button"
                      onClick={() => handleSelectCategory('all')}
                      className="hover:text-[#dc2626] transition-colors cursor-pointer"
                    >
                      Industries Home
                    </button>
                    <span>/</span>
                    <span className="text-slate-900 font-semibold">{currentIndustry.name}</span>
                  </div>

                  {/* Top Split Hero Card (Matching Solutions & Services Pages) */}
                  <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-7 shadow-xs relative overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                      
                      {/* Left Side: Sector Metadata & Action */}
                      <div className="lg:col-span-7 space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#dc2626] text-xs font-bold uppercase tracking-wider">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>{currentIndustry.number} · {currentIndustry.badge}</span>
                        </div>

                        <div>
                          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                            {currentIndustry.name}
                          </h1>
                          <p className="text-sm sm:text-base font-semibold text-[#dc2626] mt-1.5 leading-snug">
                            {currentIndustry.tagline}
                          </p>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {currentIndustry.lead}
                        </p>

                        {/* Stats Badges */}
                        <div className="flex flex-wrap gap-2 pt-1">
                          {currentIndustry.stats.map((st, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-xs font-medium text-slate-700 bg-slate-50 border border-slate-200/90 px-3 py-1 rounded-lg"
                            >
                              {st.label}: <strong className="text-slate-900">{st.value}</strong>
                            </span>
                          ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="pt-2 flex flex-wrap items-center gap-3">
                          <button
                            type="button"
                            onClick={() => onOpenQuickSupport(`${currentIndustry.cta.label}: ${currentIndustry.name}`)}
                            className="px-5 py-2.5 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold transition-all shadow-xs flex items-center gap-2 cursor-pointer active:scale-95"
                          >
                            <span>{currentIndustry.cta.buttonText}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>

                          <button
                            type="button"
                            onClick={() => onOpenQuickSupport(`Technical Proposal: ${currentIndustry.name}`)}
                            className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-slate-300 text-slate-700 text-xs font-semibold transition-all cursor-pointer"
                          >
                            Request Architecture Proposal
                          </button>
                        </div>
                      </div>

                      {/* Right Side: High-Definition Framed Architectural Showcase */}
                      <div className="lg:col-span-5">
                        <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-md group bg-slate-900 aspect-[4/3] sm:aspect-[16/11]">
                          <img
                            src={currentIndustry.image}
                            alt={currentIndustry.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/25 to-transparent pointer-events-none" />
                          
                          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                            <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-white border border-white/10 uppercase tracking-wider">
                              Industry Blueprint
                            </span>
                            <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/90 text-white backdrop-blur-md flex items-center gap-1 shadow-xs">
                              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                              Certified Architecture
                            </span>
                          </div>

                          <div className="absolute bottom-3 left-3 right-3 text-white">
                            <p className="text-xs font-bold truncate drop-shadow-sm">
                              {currentIndustry.name}
                            </p>
                            <p className="text-[10px] text-slate-300 truncate">
                              Support: {currentIndustry.supportHours}
                            </p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Section 2: Key Challenges vs How We Help Split Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 items-stretch">
                    
                    {/* Left: Key Challenges */}
                    <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-6 shadow-xs flex flex-col justify-between border-t-4 border-t-rose-500">
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <span className="p-1.5 rounded-lg bg-rose-50 text-rose-600">
                            <ShieldAlert className="w-4 h-4" />
                          </span>
                          <h3 className="text-base font-bold text-slate-900 tracking-tight">
                            Key Operational Challenges
                          </h3>
                        </div>

                        <ul className="space-y-3">
                          {currentIndustry.keyChallenges.map((challenge, chIdx) => (
                            <li key={chIdx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                              <span>{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-500">
                        Identified from actual enterprise client audits across Indian metropolitan and tier-2 locations.
                      </div>
                    </div>

                    {/* Right: How We Help / Calling Infrastructure / What We Provide */}
                    <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-6 shadow-xs flex flex-col justify-between border-t-4 border-t-emerald-500">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600">
                            <CheckCircle2 className="w-4 h-4" />
                          </span>
                          <h3 className="text-base font-bold text-slate-900 tracking-tight">
                            {currentIndustry.howWeHelpTitle}
                          </h3>
                        </div>

                        {currentIndustry.howWeHelpSubtitle && (
                          <p className="text-xs text-slate-500 italic mb-4">
                            {currentIndustry.howWeHelpSubtitle}
                          </p>
                        )}

                        {/* What We Cover Note (for Manufacturing) */}
                        {currentIndustry.whatWeCoverNote && (
                          <div className="mb-4 p-3 bg-blue-50/70 border border-blue-200/80 rounded-xl text-xs text-blue-900 leading-relaxed">
                            <span className="font-bold block mb-0.5">Scope Boundary:</span>
                            {currentIndustry.whatWeCoverNote}
                          </div>
                        )}

                        <div className="space-y-3">
                          {currentIndustry.howWeHelpPoints.map((pt, ptIdx) => (
                            <div key={ptIdx} className="flex items-start gap-2.5 text-xs">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                              <div>
                                <strong className="text-slate-900 font-bold block">{pt.title}</strong>
                                <span className="text-slate-600 leading-relaxed">{pt.desc}</span>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* One Partner Note (for Coworking) */}
                        {currentIndustry.onePartnerNote && (
                          <div className="mt-4 p-3 bg-amber-50/80 border border-amber-200/80 rounded-xl text-xs text-amber-900 leading-relaxed">
                            {currentIndustry.onePartnerNote}
                          </div>
                        )}
                      </div>

                      <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-emerald-700 font-semibold flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5" />
                        <span>All deliverables backed by guaranteed response and resolution SLAs</span>
                      </div>
                    </div>

                  </div>

                  {/* Section 3: Key Benefits (if present in PDF) */}
                  {currentIndustry.keyBenefits && currentIndustry.keyBenefits.length > 0 && (
                    <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-6 shadow-xs">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="w-1.5 h-4 bg-[#dc2626] rounded-full inline-block" />
                        <h3 className="text-base font-bold text-slate-900 tracking-tight">
                          Key Operational Benefits
                        </h3>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                        {currentIndustry.keyBenefits.map((benefit, bIdx) => (
                          <div key={bIdx} className="bg-slate-50/80 border border-slate-200/80 rounded-xl p-3.5 sm:p-4 flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="text-xs font-medium text-slate-800 leading-relaxed">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Section 4: Solutions & Services + Assigned Engineer Guarantee */}
                  <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-6 shadow-xs space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-4 bg-[#dc2626] rounded-full inline-block" />
                        <h3 className="text-base font-bold text-slate-900 tracking-tight">
                          Our Solutions &amp; Services for {currentIndustry.name}
                        </h3>
                      </div>
                      <span className="text-xs text-slate-500 font-medium">
                        {currentIndustry.solutionsServices.length} Integrated Offerings
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {currentIndustry.solutionsServices.map((sol, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200/90 text-xs font-semibold text-slate-800 hover:border-[#dc2626]/40 transition-colors"
                        >
                          {sol}
                        </span>
                      ))}
                    </div>

                    {/* Assigned Engineer Guarantee Callout */}
                    <div className="p-3.5 sm:p-4 bg-slate-50 border border-slate-200/90 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="space-y-1">
                        <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                          <Users className="w-4 h-4 text-[#dc2626]" />
                          <span>Assigned Engineer Support Model</span>
                        </span>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {currentIndustry.assignedEngineerNote}
                        </p>
                      </div>

                      <div className="shrink-0 flex items-center gap-2">
                        <span className="text-[11px] font-semibold text-slate-700 bg-white px-2.5 py-1 rounded-md border border-slate-200">
                          {currentIndustry.supportHours}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Section 5: Frequently Asked Questions */}
                  <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-6 shadow-xs space-y-4">
                    <div className="flex items-center gap-2 mb-1">
                      <HelpCircle className="w-4 h-4 text-[#dc2626]" />
                      <h3 className="text-base font-bold text-slate-900 tracking-tight">
                        Frequently Asked Questions ({currentIndustry.name})
                      </h3>
                    </div>

                    <div className="space-y-3">
                      {currentIndustry.faqs.map((faq, fIdx) => {
                        const faqKey = `${currentIndustry.id}-faq-${fIdx}`;
                        const isOpen = expandedFaqs[faqKey] ?? true; // default open for readability

                        return (
                          <div
                            key={fIdx}
                            className="border border-slate-200/80 rounded-xl overflow-hidden bg-slate-50/50"
                          >
                            <button
                              type="button"
                              onClick={() => toggleFaq(faqKey)}
                              className="w-full text-left p-3.5 sm:p-4 flex items-center justify-between gap-3 font-bold text-xs text-slate-900 hover:text-[#dc2626] transition-colors cursor-pointer"
                            >
                              <span>{faq.q}</span>
                              {isOpen ? (
                                <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
                              ) : (
                                <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                              )}
                            </button>
                            {isOpen && (
                              <div className="px-3.5 sm:px-4 pb-3.5 sm:pb-4 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                                {faq.a}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Section 6: High-Conversion Assessment / Quote CTA Bar (Matching PDF Bottom Block) */}
                  <div className="bg-white border-2 border-slate-200/90 border-l-4 border-l-[#dc2626] rounded-2xl p-4 sm:p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-5">
                    <div className="space-y-1">
                      <span className="text-sm font-extrabold text-slate-900 block tracking-tight">
                        {currentIndustry.cta.label}
                      </span>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {currentIndustry.cta.text}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => onOpenQuickSupport(`${currentIndustry.cta.label}: ${currentIndustry.name}`)}
                      className="w-full sm:w-auto min-h-[42px] px-6 py-2.5 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold transition-all shadow-xs shrink-0 cursor-pointer flex items-center justify-center gap-2 active:scale-95"
                    >
                      <span>{currentIndustry.cta.buttonText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Section 7: SEO & Technical Architecture Specification */}
                  <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-[11px] text-slate-500 space-y-2">
                    <div className="flex items-center justify-between text-slate-700 font-bold">
                      <span className="flex items-center gap-1.5">
                        <FileCheck className="w-3.5 h-3.5 text-[#dc2626]" />
                        <span>SEO &amp; Infrastructure Metadata</span>
                      </span>
                      <span className="font-mono text-[10px] text-slate-400">
                        {currentIndustry.seo.urlSlug}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] pt-1 border-t border-slate-200/60">
                      <div>
                        <strong className="text-slate-700">SEO Title:</strong> {currentIndustry.seo.title}
                      </div>
                      <div>
                        <strong className="text-slate-700">Primary Keyword:</strong> {currentIndustry.seo.primaryKeyword}
                      </div>
                      <div className="sm:col-span-2">
                        <strong className="text-slate-700">Meta Description:</strong> {currentIndustry.seo.metaDescription}
                      </div>
                    </div>
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
