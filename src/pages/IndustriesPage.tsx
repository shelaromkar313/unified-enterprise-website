import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Building2, PhoneForwarded, Factory, Truck, 
  MapPin, Briefcase, Globe, ArrowRight, CheckCircle2, ShieldAlert, Cpu, ChevronDown 
} from 'lucide-react';

interface IndustriesPageProps {
  onOpenQuickSupport: (industryName?: string) => void;
}

interface IndustryDetail {
  id: string;
  name: string;
  challenges: string;
  engineeredSolution: string;
  keyProducts: string[];
  deliverables: string[];
  image: string;
}

export default function IndustriesPage({ onOpenQuickSupport }: IndustriesPageProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlItem = searchParams.get('item');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(urlItem || 'all');
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(false);

  useEffect(() => {
    setSelectedCategoryId(urlItem || 'all');
  }, [urlItem]);

  // Exact 7 categories requested by the user
  const categoryList = useMemo(() => [
    { id: 'smes', name: 'Small & Medium Enterprises' },
    { id: 'call-centres-bpos', name: 'Call Centers & BPOs' },
    { id: 'manufacturing-industrial', name: 'Manufacturing & Industrial Companies' },
    { id: 'logistics-transportation', name: 'Logistics & Transportation' },
    { id: 'multi-location-businesses', name: 'Multi-Location Businesses' },
    { id: 'professional-services', name: 'Professional Services' },
    { id: 'remote-offices-distributed', name: 'Remote Offices & Distributed Workforces' },
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

  // Detailed industry data
  const industriesData: Record<string, IndustryDetail> = useMemo(() => ({
    'smes': {
      id: 'smes',
      name: 'Small & Medium Enterprises',
      challenges: 'Limited internal IT staff, need for predictable technology expenses, risk of data loss from cyber threats, and difficulty scaling infrastructure without excessive overhead.',
      engineeredSolution: 'Turnkey IT packages bundling tier-1 business workstations, automated hybrid cloud backups, managed next-gen firewall protection, and responsive 24/5 helpdesk support.',
      keyProducts: ['Laptops & Desktops', 'Next-Gen Firewalls', 'Cloud Backups', 'Comprehensive AMC'],
      deliverables: [
        'Right-sized plug-and-play server racks and PoE switches',
        'Automated ransomware protection and continuous local snapshot vaulting',
        'Standardized Windows 11 Pro / macOS workstation fleets',
        'Dedicated remote helpdesk ticketing with 15-minute response SLA'
      ],
      image: '/assets/enterprise_laptop_hero.jpg'
    },
    'call-centres-bpos': {
      id: 'call-centres-bpos',
      name: 'Call Centers & BPOs',
      challenges: 'High concurrency voice traffic, sub-15ms voice latency requirements, 24/7/365 uninterrupted uptime mandates, and rapid seasonal agent scaling.',
      engineeredSolution: 'High-density predictive dialers, carrier-grade SIP/PRI gateways, noise-canceling telecom hardware, acoustic agent workstations, and hardware leasing for fast ramps.',
      keyProducts: ['Predictive Dialers', 'PRI & SIP Gateways', 'HD IP Phones', 'Equipment Rental'],
      deliverables: [
        'Vicidial / Asterisk high-availability cluster deployment',
        'Dual ISP automated link failover with BGP carrier peering',
        '100% voice recording compliance archiving with instant search',
        'Standby workstation buffer stored on-premises for immediate swap'
      ],
      image: '/assets/telecom_ip_phones.jpg'
    },
    'manufacturing-industrial': {
      id: 'manufacturing-industrial',
      name: 'Manufacturing & Industrial Companies',
      challenges: 'Harsh physical operating conditions, expansive shop floors requiring rugged networking, high-definition perimeter CCTV surveillance, and inter-warehouse connectivity.',
      engineeredSolution: 'Hardened industrial switches, long-range wireless APs, structured fiber optic backbones, AI perimeter surveillance, and resident onsite maintenance technicians.',
      keyProducts: ['Industrial Switches', 'AI 4K CCTV', 'Fiber Backbones', 'Resident Engineers'],
      deliverables: [
        'Dust- and vibration-resistant industrial DIN-rail network switches',
        'High-density 4K dome and PTZ surveillance with AI intrusion analytics',
        'Certified multi-mode fiber optic cabling between factory units',
        'Dedicated resident engineer on-site for immediate line equipment triage'
      ],
      image: '/assets/cctv_surveillance.jpg'
    },
    'logistics-transportation': {
      id: 'logistics-transportation',
      name: 'Logistics & Transportation',
      challenges: 'Geographically dispersed warehouse dispatch hubs, continuous barcode scanner Wi-Fi connectivity, uninterrupted ILL leased line connectivity, and centralized telecom extension routing.',
      engineeredSolution: 'High-availability SD-WAN auto-mesh connecting all depots, dedicated Internet Leased Lines (ILL), seamless roaming Wi-Fi for handheld scanners, and centralized IP-PBX.',
      keyProducts: ['ILL Leased Lines', 'SD-WAN Mesh', 'Seamless Wi-Fi Roaming', 'GSM Gateways'],
      deliverables: [
        'Site-to-site SD-WAN mesh ensuring zero disruption to inventory scanning',
        'Symmetric 1:1 Internet Leased Line (ILL) with 99.95% uptime SLA',
        'Multi-SSID Wi-Fi coverage across vast high-ceiling warehouse racks',
        'Centralized SIP extensions routing dispatch calls across all hubs'
      ],
      image: '/assets/wifi_access_point.jpg'
    },
    'multi-location-businesses': {
      id: 'multi-location-businesses',
      name: 'Multi-Location Businesses',
      challenges: 'Fragmented local IT vendors across different cities, inconsistent security policies, varied hardware models, and difficulty enforcing company-wide compliance.',
      engineeredSolution: 'A single centralized AMC contract with nationwide hardware dispatch, standardized network equipment blueprints, and unified cloud-managed monitoring.',
      keyProducts: ['Multi-Location SD-WAN', 'Unified AMC Contracts', 'Centralized Firewalls', 'Pan-India Dispatch'],
      deliverables: [
        'Identical hardware blueprints deployed across all regional branches',
        'Centralized firewall rule enforcement from corporate headquarters',
        'Single point of contact and consolidated monthly billing across India',
        'Coordinated onsite engineer dispatch across 100+ cities'
      ],
      image: '/assets/network_security_firewall.jpg'
    },
    'professional-services': {
      id: 'professional-services',
      name: 'Professional Services',
      challenges: 'Law firms, financial consultancies, and accounting agencies requiring ironclad client confidentiality, remote work mobility, and zero tolerance for device crashes.',
      engineeredSolution: 'Intel vPro hardware-encrypted ultrabooks, multi-factor authenticated SSL VPNs, automated cloud data backup vaults, and executive priority white-glove support.',
      keyProducts: ['vPro Ultrabooks', 'Zero-Trust SSL VPN', 'Encrypted Backups', 'VIP Priority Support'],
      deliverables: [
        'Enterprise BitLocker full-disk hardware encryption on all laptops',
        'Zero-Trust Network Access (ZTNA) with multi-factor authentication',
        'Automated real-time cloud file sync and version history recovery',
        'Dedicated VIP hotline connecting partners directly to senior engineers'
      ],
      image: '/assets/dell_latitude_laptop.jpg'
    },
    'remote-offices-distributed': {
      id: 'remote-offices-distributed',
      name: 'Remote Offices & Distributed Workforces',
      challenges: 'Onboarding remote employees in different states, securing devices outside office boundaries, maintaining asset tracking, and recovering equipment upon employee offboarding.',
      engineeredSolution: 'Complete device drop-shipping to employee doorsteps with pre-loaded corporate OS images, Microsoft Intune MDM enrollment, and remote helpdesk management.',
      keyProducts: ['Workplace Mobility', 'Commercial Laptop Rentals', 'Remote MDM', 'Reverse Logistics'],
      deliverables: [
        'Out-of-the-box zero-touch provisioning shipped directly to home addresses',
        'Remote lock and wipe capabilities in event of loss or theft',
        'Always-on corporate VPN tunnels with automatic threat filtering',
        'End-to-end reverse logistics and certified data wiping for offboarding'
      ],
      image: '/assets/why_client_first.jpg'
    }
  }), []);

  const currentDetail = industriesData[selectedCategoryId];
  const currentCategoryObj = categoryList.find((c) => c.id === selectedCategoryId);

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
                    Target Industry
                  </span>
                  <p className="text-sm font-bold text-slate-900 truncate">
                    {selectedCategoryId === 'all'
                      ? 'Industries Home'
                      : currentCategoryObj?.name || 'All Industries'}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileCategoryOpen(!mobileCategoryOpen)}
                  className="px-3.5 py-2 min-h-[40px] rounded-xl bg-white border border-slate-200 text-xs font-semibold text-[#dc2626] shadow-2xs flex items-center gap-1.5 active:scale-95 transition-all shrink-0"
                >
                  <span>{mobileCategoryOpen ? 'Close' : 'Industries'}</span>
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
                    Industries Home
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
            {/* Industries Home Link */}
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
                Industries Home
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

          {/* Right Column: Cisco 3-Card Home OR Rich Industry Presentation */}
          <main className="lg:col-span-9">
            
            {/* 1. HOME VIEW: Cisco 3-Card Spotlight */}
            {selectedCategoryId === 'all' ? (
              <div className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-1">
                  
                  {/* Card 1: Call Centers & BPOs */}
                  <div className="flex flex-col justify-between group">
                    <div>
                      <div className="h-44 sm:h-52 rounded-xl overflow-hidden mb-4 bg-slate-100">
                        <img
                          src="/assets/telecom_ip_phones.jpg"
                          alt="Call Centers & BPOs"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                        Call Centers & BPOs
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                        Predictive dialers, carrier-grade PRI/SIP trunks, noise-canceling headsets, and rapid leasing for fast agent scaling.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleSelectCategory('call-centres-bpos')}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#dc2626] hover:underline"
                    >
                      <span>Explore BPO solutions</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Card 2: Manufacturing & Industrial */}
                  <div className="flex flex-col justify-between group">
                    <div>
                      <div className="h-44 sm:h-52 rounded-xl overflow-hidden mb-4 bg-slate-100">
                        <img
                          src="/assets/cctv_surveillance.jpg"
                          alt="Manufacturing & Industrial"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                        Manufacturing & Plants
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                        Industrial DIN-rail switches, fiber optic shop-floor backbones, AI 4K CCTV surveillance, and resident engineers.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleSelectCategory('manufacturing-industrial')}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#dc2626] hover:underline"
                    >
                      <span>See industrial architecture</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Card 3: Multi-Location Businesses */}
                  <div className="flex flex-col justify-between group">
                    <div>
                      <div className="h-44 sm:h-52 rounded-xl overflow-hidden mb-4 bg-slate-100">
                        <img
                          src="/assets/network_security_firewall.jpg"
                          alt="Multi-Location Businesses"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                        Multi-Location Chains
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                        Unified Pan-India AMC contracts, automated SD-WAN mesh, and standardized network hardware across all regional offices.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleSelectCategory('multi-location-businesses')}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#dc2626] hover:underline"
                    >
                      <span>Learn about branch mesh</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </div>
            ) : (
              /* 2. CATEGORY VIEW: Rich Industry Presentation */
              currentDetail && (
                <div className="space-y-8 animate-in fade-in duration-200">
                  
                  {/* Category Title Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                        {currentDetail.name}
                      </h2>
                      <span className="text-xs text-[#dc2626] font-semibold block mt-1">
                        Tailored Sector Architecture & SLA
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => onOpenQuickSupport(`Industry Consultation: ${currentDetail.name}`)}
                      className="px-5 py-2.5 rounded-full bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold transition-all shadow-soft-sm flex items-center gap-2 self-start sm:self-auto"
                    >
                      <span>Request Sector Architecture</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Main Detail Card */}
                  <div className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs">
                    <div className="h-64 sm:h-80 w-full overflow-hidden bg-slate-100 relative">
                      <img
                        src={currentDetail.image}
                        alt={currentDetail.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                    </div>

                    <div className="p-6 sm:p-8 space-y-6">
                      
                      {/* Sector Challenges & Engineered Solution */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-amber-50/70 border border-amber-200/80 p-4 rounded-xl">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 flex items-center gap-1.5 mb-1.5">
                            <ShieldAlert className="w-4 h-4 text-amber-600" />
                            <span>Operational Challenges</span>
                          </span>
                          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                            {currentDetail.challenges}
                          </p>
                        </div>

                        <div className="bg-red-50/70 border border-red-200/80 p-4 rounded-xl">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[#dc2626] flex items-center gap-1.5 mb-1.5">
                            <Cpu className="w-4 h-4 text-[#dc2626]" />
                            <span>Engineered Technical Solution</span>
                          </span>
                          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                            {currentDetail.engineeredSolution}
                          </p>
                        </div>
                      </div>

                      {/* Key Tech Stack Pills */}
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                          Recommended Technology Stack
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {currentDetail.keyProducts.map((prod, idx) => (
                            <span
                              key={idx}
                              className="text-xs font-semibold text-slate-800 bg-slate-100 border border-slate-200/80 px-3 py-1.5 rounded-lg"
                            >
                              {prod}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Core Deliverables */}
                      <div className="pt-2 border-t border-slate-100">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-3">
                          Engineering Deliverables
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {currentDetail.deliverables.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                              <CheckCircle2 className="w-4 h-4 text-[#dc2626] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Card Action Banner */}
                      <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50 -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 p-6 rounded-b-2xl">
                        <div>
                          <span className="text-xs font-bold text-slate-900 block">
                            Operating in {currentDetail.name}?
                          </span>
                          <span className="text-xs text-slate-500">
                            Book a free 30-minute infrastructure assessment with our sector-certified engineers.
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => onOpenQuickSupport(`Assessment: ${currentDetail.name}`)}
                          className="px-5 py-2 rounded-lg bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold transition-colors whitespace-nowrap"
                        >
                          Book Free Assessment
                        </button>
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
