import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Building, Target, Compass, Award, 
  MapPin, Users, CheckCircle2, ArrowRight, ShieldCheck, HeartHandshake, Briefcase, Sparkles, ChevronDown 
} from 'lucide-react';

interface AboutUsPageProps {
  onOpenQuickSupport: (subject?: string) => void;
}

export default function AboutUsPage({ onOpenQuickSupport }: AboutUsPageProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlItem = searchParams.get('item');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(urlItem || 'all');
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(false);

  useEffect(() => {
    setSelectedCategoryId(urlItem || 'all');
  }, [urlItem]);

  // Exact 7 categories requested by the user
  const categoryList = useMemo(() => [
    { id: 'company-overview', name: 'Company Overview' },
    { id: 'our-vision-mission', name: 'Our Vision & Mission' },
    { id: 'leadership', name: 'Leadership' },
    { id: 'our-approach', name: 'Our Approach' },
    { id: 'service-locations', name: 'Service Locations' },
    { id: 'vendor-technology-partners', name: 'Vendor & Technology Partners' },
    { id: 'careers', name: 'Careers' },
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

  const steps = [
    {
      num: '01',
      title: 'Architectural Audit & Discovery',
      desc: 'Onsite site survey, traffic analysis, power budget verification, and legacy bottleneck auditing.'
    },
    {
      num: '02',
      title: 'Tailored Blueprint & Procurement',
      desc: 'Direct tier-1 vendor supply chain sourcing, custom rack schematics, and pre-deployment burn-in tests.'
    },
    {
      num: '03',
      title: 'Non-Disruptive Deployment',
      desc: 'Staged weekend migrations, structured cabling, Zero-Touch OS image flashing, and PBX route validation.'
    },
    {
      num: '04',
      title: '24/5 & 24/7 Managed Governance',
      desc: 'Continuous NOC telemetry, quarterly hardware health inspections, and strict 2-4 hour onsite SLA response.'
    }
  ];

  const locations = [
    { city: 'New Delhi & NCR', role: 'Headquarters & Central Dispatch Warehouse', address: 'Okhla Industrial Area Phase-III, New Delhi – 110020' },
    { city: 'Mumbai', role: 'Western Region Operations & Logistics Hub', address: 'Bandra-Kurla Complex (BKC), Mumbai – 400051' },
    { city: 'Bengaluru', role: 'South Tech Hub & Engineering Center', address: 'Electronic City Phase 1, Bengaluru – 560100' },
    { city: 'Hyderabad', role: 'BPO Infrastructure & Voice Telecom Desk', address: 'HITEC City, Madhapur, Hyderabad – 500081' },
  ];

  const partners = [
    { name: 'Cisco Systems', tier: 'Premier Certified Partner', role: 'Enterprise Routing, Catalyst Switches, Wi-Fi 6 & IP Telephony' },
    { name: 'Dell Technologies', tier: 'Authorized Titanium Partner', role: 'Latitude Laptops, OptiPlex Desktops & PowerEdge Rack Servers' },
    { name: 'HP Enterprise & HP Inc.', tier: 'Gold Partner', role: 'EliteBook Workstations, ProLiant Servers & Aruba Networking' },
    { name: 'Fortinet', tier: 'Advanced Security Partner', role: 'FortiGate Next-Generation Firewalls & Zero-Trust Architecture' },
    { name: 'Lenovo', tier: 'Commercial PC Partner', role: 'ThinkPad Ultrabooks, ThinkCentre Workstations & Edge Servers' },
    { name: 'Microsoft', tier: 'Cloud Solutions Provider', role: 'Windows 11 Pro, Microsoft 365, Azure & Intune Device Management' },
  ];

  return (
    <div className="min-h-[85vh] bg-white py-10 lg:py-14 border-b border-slate-100">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Mobile Category Selector (Visible on mobile/tablet < lg) */}
          <div className="lg:hidden col-span-1 mb-2">
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-3.5 shadow-2xs">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#dc2626] block">
                    Company Section
                  </span>
                  <p className="text-sm font-bold text-slate-900 truncate">
                    {selectedCategoryId === 'all'
                      ? 'About Us Home'
                      : categoryList.find(c => c.id === selectedCategoryId)?.name || 'All Sections'}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileCategoryOpen(!mobileCategoryOpen)}
                  className="px-3.5 py-2 min-h-[40px] rounded-xl bg-white border border-slate-200 text-xs font-semibold text-[#dc2626] shadow-2xs flex items-center gap-1.5 active:scale-95 transition-all shrink-0"
                >
                  <span>{mobileCategoryOpen ? 'Close' : 'Sections'}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${mobileCategoryOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {/* Collapsible Mobile Category List */}
              {mobileCategoryOpen && (
                <div className="mt-3 pt-3 border-t border-slate-200/80 max-h-[300px] overflow-y-auto space-y-1">
                  <button
                    onClick={() => {
                      handleSelectCategory('all');
                      setMobileCategoryOpen(false);
                    }}
                    className={`w-full text-left py-2.5 px-3 min-h-[42px] flex items-center rounded-lg text-xs font-medium transition-colors ${
                      selectedCategoryId === 'all' ? 'bg-[#dc2626] text-white font-bold' : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    About Us Home
                  </button>
                  {categoryList.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        handleSelectCategory(item.id);
                        setMobileCategoryOpen(false);
                      }}
                      className={`w-full text-left py-2.5 px-3 min-h-[42px] flex items-center rounded-lg text-xs font-medium transition-colors ${
                        selectedCategoryId === item.id ? 'bg-[#dc2626] text-white font-bold' : 'text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Left Column: Clean Cisco-Style Minimalist Navigation (Desktop) */}
          <aside className="hidden lg:block lg:col-span-3 border-r border-slate-200/90 pr-5 lg:sticky lg:top-28">
            {/* About Us Home Link */}
            <div className="mb-4 pb-3 border-b border-slate-100">
              <button
                type="button"
                onClick={() => handleSelectCategory('all')}
                className={`relative text-left text-[13.5px] leading-snug transition-colors duration-150 block w-full py-1.5 pl-3.5 ${
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
                About Us Home
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
                      className={`relative text-left text-[13.5px] leading-relaxed transition-colors duration-150 block w-full py-1.5 pl-3.5 ${
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
          </aside>

          {/* Right Column: Cisco 3-Card Home OR Rich Detail View */}
          <main className="lg:col-span-9">
            
            {/* 1. HOME VIEW: Cisco 3-Card Spotlight */}
            {selectedCategoryId === 'all' ? (
              <div className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-1">
                  
                  {/* Card 1: Company Overview */}
                  <div className="flex flex-col justify-between group">
                    <div>
                      <div className="h-44 sm:h-52 rounded-xl overflow-hidden mb-4 bg-slate-100">
                        <img
                          src="/assets/why_expertise.jpg"
                          alt="Company Overview"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                        Unified Enterprise Architecture
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                        Delivering high-performance IT infrastructure, networking, hardware rental, and SLA-backed maintenance across India.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleSelectCategory('company-overview')}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#dc2626] hover:underline"
                    >
                      <span>Explore company overview</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Card 2: Service Locations */}
                  <div className="flex flex-col justify-between group">
                    <div>
                      <div className="h-44 sm:h-52 rounded-xl overflow-hidden mb-4 bg-slate-100">
                        <img
                          src="/assets/why_client_first.jpg"
                          alt="Service Locations"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                        Pan-India Engineering Hubs
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                        Headquarters in Delhi NCR with regional operations in Mumbai, Bengaluru, and Hyderabad supporting 100+ cities.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleSelectCategory('service-locations')}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#dc2626] hover:underline"
                    >
                      <span>View our locations</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Card 3: Vendor Alliances */}
                  <div className="flex flex-col justify-between group">
                    <div>
                      <div className="h-44 sm:h-52 rounded-xl overflow-hidden mb-4 bg-slate-100">
                        <img
                          src="/assets/why_innovation.jpg"
                          alt="Vendor & Technology Partners"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                        Tier-1 OEM Technology Partners
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                        Direct procurement and certified engineering alliances with Cisco, Dell, HP, Fortinet, Lenovo, and Microsoft.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleSelectCategory('vendor-technology-partners')}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#dc2626] hover:underline"
                    >
                      <span>View OEM partnerships</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </div>
            ) : (
              /* 2. CATEGORY VIEW: Clean, High-End Presentation for Selected About Us Topic */
              <div className="space-y-8 animate-in fade-in duration-200">
                
                {selectedCategoryId === 'company-overview' && (
                  <div className="space-y-6">
                    <div className="pb-4 border-b border-slate-100">
                      <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Company Overview</h2>
                      <span className="text-xs text-[#dc2626] font-semibold block mt-1">
                        Over 8 Years of Enterprise IT Infrastructure Excellence
                      </span>
                    </div>

                    <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 space-y-6 shadow-2xs">
                      <div className="h-64 sm:h-72 w-full rounded-xl overflow-hidden bg-slate-100">
                        <img src="/assets/why_expertise.jpg" alt="Company Overview" className="w-full h-full object-cover" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">
                        Eliminating the Multi-Vendor Fault Line
                      </h3>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        Softcentric & Unified Enterprise Solutions was established to resolve the critical friction point in enterprise operations: finger-pointing between separate hardware vendors, network engineers, telecom providers, and maintenance contractors.
                      </p>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        By integrating Tier-1 hardware procurement, carrier-grade telecom gateways, and certified SLA maintenance under one single roof, we deliver seamless uptime and single-point accountability for over 450+ corporate clients nationwide.
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-100">
                        <div className="text-center p-3 bg-slate-50 rounded-xl">
                          <span className="text-2xl font-black text-[#dc2626] block">8+</span>
                          <span className="text-xs text-slate-600 font-medium">Years Active</span>
                        </div>
                        <div className="text-center p-3 bg-slate-50 rounded-xl">
                          <span className="text-2xl font-black text-[#dc2626] block">450+</span>
                          <span className="text-xs text-slate-600 font-medium">Enterprise Clients</span>
                        </div>
                        <div className="text-center p-3 bg-slate-50 rounded-xl">
                          <span className="text-2xl font-black text-[#dc2626] block">100+</span>
                          <span className="text-xs text-slate-600 font-medium">Cities Supported</span>
                        </div>
                        <div className="text-center p-3 bg-slate-50 rounded-xl">
                          <span className="text-2xl font-black text-[#dc2626] block">99.9%</span>
                          <span className="text-xs text-slate-600 font-medium">SLA Adherence</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {selectedCategoryId === 'our-vision-mission' && (
                  <div className="space-y-6">
                    <div className="pb-4 border-b border-slate-100">
                      <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Our Vision & Mission</h2>
                      <span className="text-xs text-[#dc2626] font-semibold block mt-1">Guiding Principles and Long-Term Commitments</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-2xs space-y-4">
                        <div className="w-12 h-12 rounded-xl bg-red-50 text-[#dc2626] flex items-center justify-center">
                          <Compass className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">Our Vision</h3>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          To be India’s most trusted unified technology infrastructure partner, renowned for making enterprise-grade computing, networking, and telecom accessible, resilient, and zero-disruption for businesses of every scale.
                        </p>
                      </div>

                      <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-2xs space-y-4">
                        <div className="w-12 h-12 rounded-xl bg-red-50 text-[#dc2626] flex items-center justify-center">
                          <Target className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          To empower enterprises with tailored IT architectures, genuine OEM procurement, flexible OPEX leasing, and ironclad 2-4 hour onsite maintenance SLAs, eliminating downtime and fostering sustainable digital growth.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {selectedCategoryId === 'leadership' && (
                  <div className="space-y-6">
                    <div className="pb-4 border-b border-slate-100">
                      <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Leadership & Engineering Governance</h2>
                      <span className="text-xs text-[#dc2626] font-semibold block mt-1">Experienced Technology Architects Steering Excellence</span>
                    </div>

                    <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-2xs space-y-6">
                      <p className="text-sm text-slate-700 leading-relaxed">
                        Our leadership team comprises veteran network architects, telecom engineers, and datacenter infrastructure consultants with decades of combined experience across multinational deployments, defense communications, and tier-1 carrier environments.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                        <div className="p-5 bg-slate-50 border border-slate-200/80 rounded-xl">
                          <span className="text-xs font-bold uppercase tracking-wider text-[#dc2626] block mb-1">Architecture Desk</span>
                          <h4 className="text-base font-bold text-slate-900 mb-1">Infrastructure & Core Networking</h4>
                          <p className="text-xs text-slate-600 leading-relaxed">Oversees Layer 2/3 core switches, fiber backbones, and Zero-Trust firewall topologies.</p>
                        </div>
                        <div className="p-5 bg-slate-50 border border-slate-200/80 rounded-xl">
                          <span className="text-xs font-bold uppercase tracking-wider text-[#dc2626] block mb-1">Telecom Desk</span>
                          <h4 className="text-base font-bold text-slate-900 mb-1">Voice & BPO Engineering</h4>
                          <p className="text-xs text-slate-600 leading-relaxed">Directs high-concurrency predictive dialers, SIP trunking, and PBX telephony flows.</p>
                        </div>
                        <div className="p-5 bg-slate-50 border border-slate-200/80 rounded-xl">
                          <span className="text-xs font-bold uppercase tracking-wider text-[#dc2626] block mb-1">Operations Desk</span>
                          <h4 className="text-base font-bold text-slate-900 mb-1">Pan-India Dispatch & SLAs</h4>
                          <p className="text-xs text-slate-600 leading-relaxed">Enforces guaranteed 2-4 hour onsite SLA dispatches across all metro branches.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {selectedCategoryId === 'our-approach' && (
                  <div className="space-y-6">
                    <div className="pb-4 border-b border-slate-100">
                      <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Our 4-Stage Engineering Approach</h2>
                      <span className="text-xs text-[#dc2626] font-semibold block mt-1">Structured Methodology for Zero Business Disruption</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {steps.map((step, idx) => (
                        <div key={idx} className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-2xs space-y-3">
                          <span className="text-2xl font-black text-[#dc2626]">{step.num}</span>
                          <h4 className="text-base font-bold text-slate-900">{step.title}</h4>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedCategoryId === 'service-locations' && (
                  <div className="space-y-6">
                    <div className="pb-4 border-b border-slate-100">
                      <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Pan-India Service Locations & Warehouses</h2>
                      <span className="text-xs text-[#dc2626] font-semibold block mt-1">Regional Engineering Hubs & Same-Day Dispatch Depots</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {locations.map((loc, idx) => (
                        <div key={idx} className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-2xs space-y-2">
                          <div className="flex items-center gap-2 text-[#dc2626]">
                            <MapPin className="w-4 h-4 shrink-0" />
                            <h4 className="text-base font-bold text-slate-900">{loc.city}</h4>
                          </div>
                          <span className="text-xs font-semibold text-[#dc2626] block">{loc.role}</span>
                          <p className="text-xs text-slate-600 leading-relaxed">{loc.address}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedCategoryId === 'vendor-technology-partners' && (
                  <div className="space-y-6">
                    <div className="pb-4 border-b border-slate-100">
                      <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Vendor & Technology Partners</h2>
                      <span className="text-xs text-[#dc2626] font-semibold block mt-1">Authorized Tier-1 Direct OEM Procurement Alliances</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {partners.map((partner, idx) => (
                        <div key={idx} className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-2xs space-y-2">
                          <div className="flex items-center justify-between">
                            <h4 className="text-base font-bold text-slate-900">{partner.name}</h4>
                            <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-red-50 text-[#dc2626]">
                              {partner.tier}
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed">{partner.role}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedCategoryId === 'careers' && (
                  <div className="space-y-6">
                    <div className="pb-4 border-b border-slate-100">
                      <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Careers at Softcentric & Unified Enterprise</h2>
                      <span className="text-xs text-[#dc2626] font-semibold block mt-1">Join Our High-Performance Systems & Network Engineering Teams</span>
                    </div>

                    <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-2xs space-y-5">
                      <p className="text-sm text-slate-700 leading-relaxed">
                        We are continuously seeking certified network architects (CCNA/CCNP), telecom engineers, resident systems administrators, and enterprise procurement executives.
                      </p>
                      <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-xl">
                        <span className="text-xs font-bold text-slate-900 block mb-1">Open Positions:</span>
                        <ul className="text-xs text-slate-700 space-y-1.5 list-disc list-inside">
                          <li>Senior Network Engineer (Cisco / Fortinet Certified) - Delhi NCR & Bengaluru</li>
                          <li>Voice Telecom & Asterisk PBX Specialist - Hyderabad</li>
                          <li>Resident IT Desktop & Server Engineers - Mumbai & Delhi NCR</li>
                          <li>Commercial Hardware Procurement Specialist - Delhi NCR</li>
                        </ul>
                      </div>
                      <button
                        type="button"
                        onClick={() => onOpenQuickSupport('Careers Application')}
                        className="px-6 py-2.5 rounded-lg bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold transition-all shadow-soft-sm"
                      >
                        Submit Your Resume
                      </button>
                    </div>
                  </div>
                )}

              </div>
            )}

          </main>

        </div>
      </div>
    </div>
  );
}
