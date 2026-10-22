import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  ShieldCheck, ArrowRight, Check, X, 
  Sparkles, BookOpen, ChevronDown, ChevronUp, 
  CheckCircle2, Clock, Wrench, Layers, PhoneCall,
  Server, Shield, Laptop, RefreshCw, FileCheck
} from 'lucide-react';
import { 
  SERVICES_DATA, 
  SLA_ESCALATION_LEVELS, 
  ServiceItem 
} from '../data/servicesData';

interface ServicesPageProps {
  onOpenQuickSupport: (serviceName?: string) => void;
}

export default function ServicesPage({ onOpenQuickSupport }: ServicesPageProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlItem = searchParams.get('item');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(urlItem || 'all');
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(false);
  const [deepDiveExpanded, setDeepDiveExpanded] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setSelectedCategoryId(urlItem || 'all');
  }, [urlItem]);

  // Complete list of all 18 enterprise services from the master website PDF
  const categoryList = useMemo(() => [
    { id: 'amc', name: 'Annual Maintenance Contracts (AMC)' },
    { id: 'managed-it-telecom', name: 'Managed IT and Telecom Services' },
    { id: 'remote-it-support', name: 'Remote IT Support' },
    { id: 'onsite-it-engineers', name: 'Onsite IT Engineers' },
    { id: 'desktop-laptop-support', name: 'Desktop & Laptop Support' },
    { id: 'server-network-support', name: 'Server & Network Support' },
    { id: 'network-cabling', name: 'Network Cabling' },
    { id: 'cctv-installation-management', name: 'CCTV installation and Management' },
    { id: 'firewall-management', name: 'Firewall Management' },
    { id: 'voip-telecom-support', name: 'VoIP & Telecom Support' },
    { id: 'pbx-dialer-support', name: 'PBX & Dialer Support' },
    { id: 'it-infrastructure-audits', name: 'IT Infrastructure Audits' },
    { id: 'network-firewall-audits', name: 'Network & Firewall Audits' },
    { id: 'it-migration-deployment', name: 'IT Migration & Deployment' },
    { id: 'data-wiping-secure-decommissioning', name: 'Data Wiping & Secure Decommissioning' },
    { id: 'office-relocation-it-setup', name: 'Office Relocation & IT Setup' },
    { id: 'emergency-it-support', name: 'Emergency IT Support' },
    { id: '24-5-and-24-7-support', name: '24/5 Support and Optional 24/7 Support' },
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

  const currentService: ServiceItem | undefined = SERVICES_DATA[selectedCategoryId];
  const currentCategoryObj = categoryList.find((c) => c.id === selectedCategoryId);

  // Standardized AMC Tiers for Home spotlight
  const amcTiers = useMemo(() => [
    {
      name: 'Essential Care AMC',
      badge: 'Standard SLA',
      description: 'Ideal for branch offices and growing SMEs needing dependable ongoing maintenance and scheduled health checks.',
      responseTime: '4-Hour Response',
      coverageTime: '24/5 Business Hours Support',
      features: [
        'Preventive quarterly hardware health checks',
        'Standard hardware replacement coordination',
        'Unlimited remote desktop & network support',
        'Quarterly OS security patching and cleanups',
        'Monthly operational health report'
      ]
    },
    {
      name: 'Corporate Advanced AMC',
      badge: 'Most Popular',
      highlighted: true,
      description: 'Designed for corporate environments requiring fast onsite response, dedicated engineers, and core switch/telecom coverage.',
      responseTime: '2-Hour Priority SLA',
      coverageTime: '24/5 with On-Call Weekend Support',
      features: [
        'Dedicated primary & secondary account engineers',
        'Immediate onsite dispatch for hardware faults',
        'Standby loaner hardware during repair cycles',
        'PBX, VoIP & Firewall continuous management',
        'Automated daily backup validation audits',
        'Monthly performance optimization reviews'
      ]
    },
    {
      name: 'Mission-Critical Platinum',
      badge: '24/7 Dedicated',
      description: 'Engineered for BPOs, 24/7 call centers, financial institutions, and datacenters where downtime directly costs revenue.',
      responseTime: 'Sub-60 Minute Emergency SLA',
      coverageTime: '24/7/365 Non-Stop NOC Monitoring',
      features: [
        'Dedicated Resident Engineers stationed on-premises',
        '24/7/365 Network Operations Center (NOC) oversight',
        'Guaranteed zero-loss dialer and PBX failover SLAs',
        'Full disaster recovery staging & drills',
        'Executive incident commander escalation',
        'NIST-compliant hardware data destruction'
      ]
    }
  ], []);

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
                    Enterprise Services &amp; AMC
                  </span>
                  <p className="text-sm font-bold text-slate-900 truncate">
                    {selectedCategoryId === 'all'
                      ? 'Services & AMC Home'
                      : currentService?.name || 'All Services'}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileCategoryOpen(!mobileCategoryOpen)}
                  className="px-3.5 py-2 min-h-[40px] rounded-xl bg-white border border-slate-200 text-xs font-semibold text-[#dc2626] shadow-2xs flex items-center gap-1.5 active:scale-95 transition-all shrink-0 cursor-pointer"
                >
                  <span>{mobileCategoryOpen ? 'Close' : 'Services'}</span>
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
                    <span>Services &amp; AMC Home</span>
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
            {/* Services & AMC Home Link */}
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
                Services &amp; AMC Home
              </button>
            </div>

            {/* Category List (18 Items - Clean names without #01 numbers) */}
            <ul className="space-y-1 max-h-[75vh] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-200">
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
            
            {/* VIEW 1: SERVICES & AMC HOME (SLA MATRIX + AMC TIERS + ALL 18 SERVICES) */}
            {selectedCategoryId === 'all' ? (
              <div className="space-y-8">
                
                {/* Official Enterprise Services Specification Hero */}
                <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs relative overflow-hidden">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#dc2626] text-xs font-bold uppercase tracking-wider mb-3">
                    <Sparkles className="w-3.5 h-3.5 text-[#dc2626]" />
                    <span>Official Enterprise Services Specification</span>
                  </div>

                  <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2 text-slate-900">
                    Unified Enterprise Services &amp; AMC
                  </h1>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl mb-5">
                    Full-spectrum IT operations, contractual maintenance, resident engineering, and mission-critical SLAs. Backed by guaranteed 2 to 4 hour emergency onsite dispatch, standby loaner hardware buffers, and our transparent 5-tier escalation matrix.
                  </p>

                  <div className="flex flex-wrap items-center gap-2 pt-3.5 border-t border-slate-100 text-xs">
                    <span className="bg-slate-50 text-slate-700 px-3 py-1 rounded-md border border-slate-200/80">
                      SLA Governance: <strong className="text-slate-900 font-semibold">5-Tier Escalation Path</strong>
                    </span>
                    <span className="bg-slate-50 text-slate-700 px-3 py-1 rounded-md border border-slate-200/80">
                      Response Time: <strong className="text-slate-900 font-semibold">Sub-60 Min to 4-Hour Onsite</strong>
                    </span>
                    <span className="bg-emerald-50 text-emerald-800 px-3 py-1 rounded-md border border-emerald-200">
                      Status: <strong className="text-emerald-700 font-semibold">Contractual SLA Guaranteed</strong>
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

                {/* Standardized AMC SLA Contract Tiers */}
                <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-4 bg-[#dc2626] rounded-full inline-block" />
                      <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                        Standardized Annual Maintenance Contract (AMC) Tiers
                      </h2>
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-50 border border-slate-200 px-2.5 py-0.5 rounded-full w-fit">
                      Comprehensive &amp; Non-Comprehensive
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-5">
                    Choose the right SLA governance level for your operations. All tiers include certified engineer visits, preventative maintenance, and standby loaner buffers:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {amcTiers.map((tier, idx) => (
                      <div
                        key={idx}
                        className={`rounded-2xl p-5 sm:p-6 border transition-all flex flex-col justify-between ${
                          tier.highlighted
                            ? 'bg-white border-[#dc2626] shadow-md ring-1 ring-[#dc2626]/20'
                            : 'bg-slate-50/70 border-slate-200/90 shadow-2xs hover:bg-white hover:shadow-xs'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                              tier.highlighted ? 'bg-red-50 text-[#dc2626] border border-red-200' : 'bg-slate-200/80 text-slate-700'
                            }`}>
                              {tier.badge}
                            </span>
                            <span className="text-xs font-bold text-[#dc2626]">
                              {tier.responseTime}
                            </span>
                          </div>

                          <h4 className="text-base font-bold text-slate-900 mb-1.5">
                            {tier.name}
                          </h4>

                          <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                            {tier.description}
                          </p>

                          <ul className="space-y-2 mb-6">
                            {tier.features.map((feat, fIdx) => (
                              <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                <span className="leading-relaxed">{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <button
                          type="button"
                          onClick={() => onOpenQuickSupport(`AMC Proposal: ${tier.name}`)}
                          className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer active:scale-95 ${
                            tier.highlighted
                              ? 'bg-[#dc2626] hover:bg-[#b91c1c] text-white shadow-soft-sm'
                              : 'bg-white hover:bg-slate-100 text-slate-800 border border-slate-200'
                          }`}
                        >
                          Request AMC Proposal
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Complete 18 Services Catalog Grid */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h2 className="text-lg font-bold text-slate-900 tracking-tight">
                        Explore All 18 Enterprise Services
                      </h2>
                      <p className="text-xs text-slate-500">
                        Select any service vertical to view operational scopes, comparison models, certified deliverables, and deep-dive engineering guides
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {categoryList.map((cat, idx) => {
                      const srv = SERVICES_DATA[cat.id];
                      if (!srv) return null;
                      return (
                        <div
                          key={srv.id}
                          className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
                        >
                          <div>
                            {/* Card Image Header */}
                            <div className="relative h-44 sm:h-48 rounded-xl overflow-hidden mb-4 bg-slate-100 border border-slate-200/70">
                              <img
                                src={srv.image}
                                alt={srv.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-900/15 to-transparent pointer-events-none" />
                              
                              <div className="absolute top-2.5 left-2.5">
                                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-slate-950/80 backdrop-blur-md text-white border border-white/10 uppercase tracking-wider">
                                  SERVICE {String(idx + 1).padStart(2, '0')}
                                </span>
                              </div>

                              <div className="absolute top-2.5 right-2.5">
                                <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/90 text-white backdrop-blur-md flex items-center gap-1 shadow-xs">
                                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                  SLA Guaranteed
                                </span>
                              </div>

                              <div className="absolute bottom-2.5 left-3 right-3 text-white">
                                <span className="text-[11px] font-bold text-red-300 block truncate">
                                  {srv.badge}
                                </span>
                              </div>
                            </div>

                            <h3 className="text-base font-bold text-slate-900 group-hover:text-[#dc2626] transition-colors leading-snug mb-1">
                              {srv.name}
                            </h3>

                            <span className="text-[11px] text-slate-500 block mb-2.5">
                              Ideal For: <strong className="text-slate-700">{srv.idealFor}</strong>
                            </span>

                            <p className="text-xs text-slate-600 leading-relaxed mb-3 line-clamp-2">
                              {srv.heroSubtitle}
                            </p>

                            {/* Value Pills */}
                            <div className="flex flex-wrap gap-1.5 mb-3">
                              {srv.valuePills.map((pill, idx) => (
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
                            <span className="text-[10px] text-slate-400 truncate max-w-[180px]">
                              SLA: {srv.sla}
                            </span>
                            <button
                              type="button"
                              onClick={() => handleSelectCategory(srv.id)}
                              className="text-xs font-bold text-[#dc2626] hover:text-[#b91c1c] inline-flex items-center gap-1 cursor-pointer"
                            >
                              <span>Explore Service</span>
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

              /* VIEW 2: SELECTED SERVICE SPECIFICATION (MATCHING SOLUTIONS BLUEPRINT DESIGN) */
              currentService && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  
                  {/* Service Header & Meta Banner: Split Hero with High-Resolution Showcase Image */}
                  <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-xs">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                      
                      {/* Left Side: Overview & Deliverables Meta */}
                      <div className="lg:col-span-7 space-y-3.5">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs font-bold text-[#dc2626] bg-red-50 border border-red-200 px-3 py-1 rounded-full">
                            {currentService.badge}
                          </span>
                          <span className="text-xs font-medium text-slate-500 bg-slate-100 border border-slate-200/70 px-2.5 py-0.5 rounded-full">
                            SLA: {currentService.sla}
                          </span>
                        </div>

                        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                          {currentService.name}
                        </h1>

                        <p className="text-xs text-slate-500 font-medium">
                          Ideal For: <strong className="text-slate-800">{currentService.idealFor}</strong>
                        </p>

                        <div className="pt-2 border-t border-slate-100">
                          <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5 leading-snug">
                            {currentService.heroSubtitle}
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3.5">
                            {currentService.heroParagraph}
                          </p>

                          {/* 3 Value Pills */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {currentService.valuePills.map((pill, idx) => (
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
                            onClick={() => onOpenQuickSupport(`Service Request: ${currentService.name}`)}
                            className="px-5 py-2.5 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold transition-all shadow-xs inline-flex items-center gap-2 cursor-pointer active:scale-95"
                          >
                            <span>Request Service Proposal</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      {/* Right Side: High-Definition Framed Architecture Showcase */}
                      <div className="lg:col-span-5">
                        <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-md group bg-slate-900 aspect-[4/3] sm:aspect-[16/11]">
                          <img
                            src={currentService.image}
                            alt={currentService.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/25 to-transparent pointer-events-none" />
                          
                          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                            <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-white border border-white/10 uppercase tracking-wider">
                              Service Blueprint
                            </span>
                            <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/90 text-white backdrop-blur-md flex items-center gap-1 shadow-xs">
                              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                              Contractual SLA
                            </span>
                          </div>

                          <div className="absolute bottom-3 left-3 right-3 text-white">
                            <p className="text-xs font-bold truncate drop-shadow-sm">
                              {currentService.name}
                            </p>
                            <p className="text-[10px] text-slate-300 truncate">
                              Coverage: {currentService.coverage}
                            </p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Specialty Comparison Section: Traditional Setup vs Unified Enterprise Contracted Model */}
                  <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-xs">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5 pb-3 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-5 bg-[#dc2626] rounded-full inline-block" />
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight uppercase">
                          Operational Delivery Model Comparison
                        </h3>
                      </div>
                      <span className="text-[11px] font-semibold text-slate-500 bg-slate-50 border border-slate-200 px-3 py-1 rounded-full w-fit">
                        Contractual Resiliency &amp; SLA Delivery
                      </span>
                    </div>

                    <div className="space-y-6">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
                        
                        {/* Box 1: Traditional Siloed / Ad-Hoc Setup */}
                        <div className="bg-slate-50/90 border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-2xs flex flex-col justify-between transition-all hover:border-slate-300">
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-3">
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-rose-50 text-rose-700 border border-rose-200 uppercase tracking-wide">
                                <span className="w-4 h-4 rounded-full bg-rose-200/80 text-rose-700 flex items-center justify-center text-[10px] font-black">✕</span>
                                <span>{currentService.comparisonData.traditionalTitle}</span>
                              </span>
                              <span className="text-[10px] font-semibold text-rose-600 bg-rose-50/60 px-2 py-0.5 rounded-md border border-rose-100">
                                High Risk
                              </span>
                            </div>

                            <p className="text-[11px] text-slate-500 mb-4 leading-relaxed">
                              Uncontracted ad-hoc repairs, zero SLA commitments, lengthy parts delays, and uncontrolled emergency billing.
                            </p>

                            <div className="space-y-3">
                              {currentService.comparisonData.traditionalPoints.map((pt, idx) => {
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
                            <span>⚠️ Uncontrolled downtime, unpredictable invoices &amp; zero SLA penalties</span>
                          </div>
                        </div>

                        {/* Box 2: Unified Enterprise Contracted SLA Model */}
                        <div className="bg-white border-2 border-emerald-500/40 rounded-2xl p-5 sm:p-6 shadow-sm relative overflow-hidden flex flex-col justify-between transition-all hover:shadow-md">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full pointer-events-none" />
                          
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-3">
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 uppercase tracking-wide">
                                <span className="w-4 h-4 rounded-full bg-emerald-200 text-emerald-800 flex items-center justify-center text-[10px] font-black">✓</span>
                                <span>{currentService.comparisonData.convergedTitle}</span>
                              </span>
                              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 uppercase tracking-wider">
                                Recommended Standard
                              </span>
                            </div>

                            <p className="text-[11px] text-slate-500 mb-4 leading-relaxed">
                              Guaranteed 2 to 4 hour emergency onsite arrival, standby loaner units, proactive quarterly servicing, and unified AMC.
                            </p>

                            <div className="space-y-3">
                              {currentService.comparisonData.convergedPoints.map((pt, idx) => {
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
                            <span>✨ Backed by dedicated primary/secondary engineers &amp; 5-tier escalation SLA</span>
                          </div>
                        </div>

                      </div>

                      {/* Visual Service Feature Banner */}
                      <div className="rounded-xl overflow-hidden border border-slate-200/80 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 p-4 sm:p-5 text-white flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-white/20 bg-slate-800">
                            <img src={currentService.image} alt="Service preview" className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <h4 className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                              <span>Service Delivery &amp; SLA Commitment</span>
                              <span className="text-[10px] bg-red-600 text-white font-mono px-1.5 py-0.2 rounded">5-Tier Escalation</span>
                            </h4>
                            <p className="text-[11px] text-slate-300">
                              Coverage: {currentService.coverage} • Emergency dispatch available across India.
                            </p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => onOpenQuickSupport(`Onsite Assessment: ${currentService.name}`)}
                          className="px-4 py-2 rounded-lg bg-white hover:bg-slate-100 text-slate-900 text-xs font-bold transition-all shadow-xs shrink-0 cursor-pointer active:scale-95"
                        >
                          Book Onsite Assessment
                        </button>
                      </div>

                    </div>
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
                      {currentService.coreAdvantages.map((adv, idx) => (
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
                      {currentService.handoverChecklist.map((item, idx) => (
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

                  {/* Engineering & Service Deep-Dive Guide (Expandable) */}
                  <div className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-6 shadow-xs">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-[#dc2626]" />
                        <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wide">
                          📖 Engineering &amp; Operational Deep Dive
                        </h3>
                      </div>
                      <span className="text-[10px] font-semibold text-slate-500 bg-white border border-slate-200 px-2.5 py-0.5 rounded-full">
                        {currentService.deepDive.readTime}
                      </span>
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-3 leading-snug">
                      {currentService.deepDive.title}
                    </h4>

                    {/* Deep dive content with toggle */}
                    <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
                      <p>{currentService.deepDive.paragraphs[0]}</p>

                      {deepDiveExpanded[currentService.id] && (
                        <div className="space-y-3 pt-2 animate-in fade-in duration-200">
                          {currentService.deepDive.paragraphs.slice(1).map((p, idx) => (
                            <p key={idx}>{p}</p>
                          ))}
                        </div>
                      )}

                      <button
                        type="button"
                        onClick={() => toggleDeepDive(currentService.id)}
                        className="text-xs font-bold text-[#dc2626] hover:text-[#b91c1c] inline-flex items-center gap-1 pt-1 cursor-pointer"
                      >
                        <span>{deepDiveExpanded[currentService.id] ? 'Collapse Technical Analysis' : 'Read Full Engineering Deep Dive'}</span>
                        {deepDiveExpanded[currentService.id] ? (
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
                        Authorized OEM Equipment &amp; Platforms:
                      </span>
                      <p className="text-xs font-bold text-slate-800">
                        {currentService.authorizedOem}
                      </p>
                      <p className="text-[11px] text-slate-500 mt-1">
                        Need a custom SLA contract or facility assessment? Our enterprise engineers visit your location and provide complete SLA proposals within 24 hours.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => onOpenQuickSupport(`Technical Proposal: ${currentService.name}`)}
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
