import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Server, PhoneCall, Briefcase, Network, 
  Headphones, Cpu, ShieldCheck, Laptop, 
  CheckCircle2, ArrowRight, Layers, ShoppingBag, RefreshCw, ChevronDown 
} from 'lucide-react';

interface SolutionsPageProps {
  onOpenConsultation: (solutionTitle: string) => void;
}

interface SolutionDetail {
  id: string;
  name: string;
  targetAudience: string;
  summary: string;
  image: string;
  deliverables: string[];
  architecturePoints: string[];
}

export default function SolutionsPage({ onOpenConsultation }: SolutionsPageProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlItem = searchParams.get('item');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(urlItem || 'all');
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(false);

  useEffect(() => {
    setSelectedCategoryId(urlItem || 'all');
  }, [urlItem]);

  // The exact 10 categories requested by the user
  const categoryList = useMemo(() => [
    { id: 'complete-it-infrastructure', name: 'Complete IT Infrastructure' },
    { id: 'unified-it-telecom-management', name: 'Unified IT & Telecom Management' },
    { id: 'it-infrastructure-smes', name: 'IT Infrastructure for SMEs' },
    { id: 'multi-location-it-management', name: 'Multi-Location IT Management' },
    { id: 'call-centre-bpo-infrastructure', name: 'Call-Centre & BPO Infrastructure' },
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

  // Comprehensive details for each category
  const solutionsData: Record<string, SolutionDetail> = useMemo(() => ({
    'complete-it-infrastructure': {
      id: 'complete-it-infrastructure',
      name: 'Complete IT Infrastructure',
      targetAudience: 'Growing enterprises & corporate headquarters',
      summary: 'Turnkey IT architecture from structural cabling and rack enclosures to computing clusters, virtualization, storage, and centralized endpoint management.',
      image: '/assets/datacenter_servers.jpg',
      deliverables: [
        'Datacenter & Server Room Design',
        'Structured Category 6A & High-Speed Fiber Cabling',
        'High-Density Compute & Storage Deployment (Dell / HPE)',
        'Unified Active Directory / Identity & Access Policies'
      ],
      architecturePoints: [
        'Redundant Core Architecture with 99.99% Target Uptime',
        'Centralized Lights-Out Remote Management (iDRAC / iLO)',
        'Scalable Virtualization (VMware vSphere / Proxmox / Hyper-V)'
      ]
    },
    'unified-it-telecom-management': {
      id: 'unified-it-telecom-management',
      name: 'Unified IT & Telecom Management',
      targetAudience: 'Organizations with dispersed communications',
      summary: 'A converged single-vendor operational model unifying voice telephony, high-speed data networks, cybersecurity firewalls, and workstation support under one cohesive architecture.',
      image: '/assets/ue_telecom_voice.jpg',
      deliverables: [
        'Unified IP-PBX & Data Network Convergence',
        'Single Point of Escalation for Both IT Hardware & Voice Telecom',
        'Consolidated SLA Billing & Multi-Carrier Management',
        'Proactive Cross-Domain System Telemetry & Incident Alerts'
      ],
      architecturePoints: [
        'QoS-Enforced Voice Routing with Zero Packet Jitter',
        'Unified SLA Management with Pan-India Engineer Dispatch',
        'Zero Vendor Finger-Pointing Guarantee'
      ]
    },
    'it-infrastructure-smes': {
      id: 'it-infrastructure-smes',
      name: 'IT Infrastructure for SMEs',
      targetAudience: 'Small and medium business operations (20–150 seats)',
      summary: 'Right-sized, cost-efficient technology foundations designed for rapid deployment, high data resilience, and seamless scalability without excessive enterprise overhead.',
      image: '/assets/enterprise_laptop_hero.jpg',
      deliverables: [
        'Plug-and-play Compact Server Racks & Edge Switches',
        'Hybrid Cloud Backup with Ransomware-Proof Local Vaults',
        'Standardized Corporate Laptops & Desktop Workstations',
        'Fully Managed Anti-Virus, Patching & Remote Helpdesk'
      ],
      architecturePoints: [
        'Budget-Predictable Operational Model',
        'Fast 48-Hour Turnaround Deployment',
        'Minimal On-Premises Maintenance Overhead'
      ]
    },
    'multi-location-it-management': {
      id: 'multi-location-it-management',
      name: 'Multi-Location IT Management',
      targetAudience: 'Retail chains, regional branches & multi-facility firms',
      summary: 'Standardized IT blueprints rolled out across multiple geographic locations with secure SD-WAN encrypted tunnels, unified security policies, and coordinated nationwide engineer dispatch.',
      image: '/assets/network_security_firewall.jpg',
      deliverables: [
        'SD-WAN Site-to-Site Auto-Mesh & Traffic Prioritization',
        'Centralized Branch Firewall Policies & Content Filtering',
        'Standardized Regional Office Hardware Packages',
        'Coordinated Onsite Engineer Dispatch Across Major Metros'
      ],
      architecturePoints: [
        'Zero-Touch Branch Provisioning & Auto-Config',
        'Centralized NOC Telemetry & Cloud Oversight',
        'Identical High Performance & Security Across All Sites'
      ]
    },
    'call-centre-bpo-infrastructure': {
      id: 'call-centre-bpo-infrastructure',
      name: 'Call-Centre & BPO Infrastructure',
      targetAudience: 'Inbound customer support, outbound dialer centers & BPOs',
      summary: 'High-concurrency predictive dialers, multi-agent acoustic workstations, PRI/SIP gateway integration, call recording archives, and redundant ISP failover connectivity for non-stop operations.',
      image: '/assets/telecom_ip_phones.jpg',
      deliverables: [
        'High-Density Vicidial / Asterisk Dialer Server Clusters',
        'Noise-Canceling Agent Terminals & Commercial Headsets',
        'Dual ISP Automatic Link Failover with BGP Peering',
        'Custom CRM Screen-Pop & Webhook Telephony Integration'
      ],
      architecturePoints: [
        'Sub-15ms Low Voice Latency Carrier Architecture',
        '100% Call Recording Storage Compliance (Local & Cloud)',
        'Surge-Ready Scale from 50 to 1,000+ Concurrent Agents'
      ]
    },
    'network-design-implementation': {
      id: 'network-design-implementation',
      name: 'Network Design & Implementation',
      targetAudience: 'New facility setups, campus retrofits & tech upgrades',
      summary: 'Rigorous Layer 1 through Layer 7 engineering including cable layout schematics, wireless RF heatmap modeling, VLAN segmentation, core routing, and switch fabric provisioning.',
      image: '/assets/wifi_access_point.jpg',
      deliverables: [
        'Comprehensive Site Survey, Heatmap Modeling & Blueprints',
        'Certified Fiber Optic & Category 6A Structured Termination',
        'Layer 2/3 Switch VLAN Segmentation & OSPF/BGP Routing',
        'Post-Deployment Spectrum Verification & Heatmap Validation'
      ],
      architecturePoints: [
        'Clean Modular Rack Cable Dressing with Color-Coded Patching',
        'ISO/IEC-Standard Fluke Cable Test Certification',
        'High-Throughput 10Gbps/40Gbps SFP+ Backbone Links'
      ]
    },
    'firewall-network-security': {
      id: 'firewall-network-security',
      name: 'Firewall & Network Security',
      targetAudience: 'Regulated industries, legal, financial & corporate data',
      summary: 'Comprehensive perimeter defense, Zero-Trust network segmentation, multi-gigabit SSL traffic inspection, and encrypted VPN gateway access protecting corporate assets.',
      image: '/assets/network_security_firewall.jpg',
      deliverables: [
        'Next-Gen Firewall (NGFW) Deployment (Fortinet / Cisco / Sophos)',
        'Multi-Factor Authenticated SSL & IPsec VPN Portals',
        'Automated Daily Security Configuration Backups',
        'Quarterly Vulnerability Scanning & Rule Optimization'
      ],
      architecturePoints: [
        'Zero-Trust Network Access (ZTNA) Enforcement',
        'Real-Time Anti-Ransomware & Deep Packet Inspection',
        'High-Availability Active-Passive Clustering'
      ]
    },
    'workplace-remote-office': {
      id: 'workplace-remote-office',
      name: 'Workplace & Remote Office Infrastructure',
      targetAudience: 'Hybrid workforces and distributed teams',
      summary: 'End-to-end device provisioning, secure remote MDM enrollment, cloud identity sync, and virtual conferencing setups keeping employees productive and secure anywhere.',
      image: '/assets/dell_latitude_laptop.jpg',
      deliverables: [
        'Pre-Configured Enterprise Laptops Shipped Direct to Employees',
        'Mobile Device Management (MDM) & Microsoft Intune Enrollment',
        'Secure Always-On Home-Office VPN Connectors',
        'Turnkey Video Conference Room Bars & Smart Panels'
      ],
      architecturePoints: [
        'Zero-Touch Device Provisioning Directly Out of the Box',
        'Instant Remote Data Wipe & BitLocker Encryption',
        'Uniform Security Baseline Across On-Premises and Remote Staff'
      ]
    },
    'it-hardware-procurement': {
      id: 'it-hardware-procurement',
      name: 'IT Hardware Procurement',
      targetAudience: 'Corporate procurement desks, CTOs & IT directors',
      summary: 'Authorized tier-1 procurement for commercial laptops, desktop fleets, rack servers, network switches, and surveillance hardware at transparent corporate enterprise pricing.',
      image: '/assets/ue_hardware_procurement.jpg',
      deliverables: [
        'Direct OEM Authorized Supply Chain (Dell, HP, Lenovo, Cisco, Fortinet)',
        'Volume Enterprise Pricing & Flexible Payment Terms',
        'Pre-Delivery Burn-In Testing & Custom OS Image Flashing',
        'Pan-India Safe Transit & Asset Tagging'
      ],
      architecturePoints: [
        'Official OEM Warranties & Direct Support Entitlements',
        'Consistent Fleet Sourcing for Easy Spare Part Interoperability',
        'Next-Business-Day Replacement Coordination'
      ]
    },
    'it-asset-lifecycle-management': {
      id: 'it-asset-lifecycle-management',
      name: 'IT Asset Lifecycle Management',
      targetAudience: 'Enterprises managing aging computing and networking estates',
      summary: 'End-to-end governance covering procurement, deployment, warranty tracking, preventive health audits, hardware upgrades, and certified NIST-compliant data wiping upon retirement.',
      image: '/assets/why_data_backed.jpg',
      deliverables: [
        'Centralized Hardware Inventory & Warranty Tracking Ledger',
        'Scheduled Preventive Maintenance & Component Upgrades',
        'NIST 800-88 Cryptographic Data Erasure Certification',
        'Responsible E-Waste Recycling & Residual Value Buyback'
      ],
      architecturePoints: [
        'Predictable Total Cost of Ownership (TCO) Optimization',
        '100% Audit-Ready Compliance Certificates',
        'Zero Data Leakage Risk on Asset Decommissioning'
      ]
    }
  }), []);

  const currentCategoryObj = categoryList.find((c) => c.id === selectedCategoryId);
  const currentDetail = solutionsData[selectedCategoryId];

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
                    Solutions Domain
                  </span>
                  <p className="text-sm font-bold text-slate-900 truncate">
                    {selectedCategoryId === 'all'
                      ? 'Solutions Home'
                      : currentCategoryObj?.name || 'All Solutions'}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileCategoryOpen(!mobileCategoryOpen)}
                  className="px-3.5 py-2 min-h-[40px] rounded-xl bg-white border border-slate-200 text-xs font-semibold text-[#dc2626] shadow-2xs flex items-center gap-1.5 active:scale-95 transition-all shrink-0"
                >
                  <span>{mobileCategoryOpen ? 'Close' : 'Solutions'}</span>
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
                    Solutions Home
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
            {/* Solutions Home Link */}
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

          {/* Right Column: Cisco 3-Card Home OR Rich Enterprise Solution View */}
          <main className="lg:col-span-9">
            
            {/* 1. HOME VIEW: Cisco 3-Card Spotlight */}
            {selectedCategoryId === 'all' ? (
              <div className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-1">
                  
                  {/* Card 1: Complete IT Infrastructure */}
                  <div className="flex flex-col justify-between group">
                    <div>
                      <div className="h-44 sm:h-52 rounded-xl overflow-hidden mb-4 bg-slate-100">
                        <img
                          src="/assets/datacenter_servers.jpg"
                          alt="Complete IT Infrastructure"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                        Turnkey Enterprise Infrastructure
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                        From structural cabling and compute clusters to virtualization and Active Directory, architected for zero downtime.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleSelectCategory('complete-it-infrastructure')}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#dc2626] hover:underline"
                    >
                      <span>Explore architecture</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Card 2: Firewall & Network Security */}
                  <div className="flex flex-col justify-between group">
                    <div>
                      <div className="h-44 sm:h-52 rounded-xl overflow-hidden mb-4 bg-slate-100">
                        <img
                          src="/assets/network_security_firewall.jpg"
                          alt="Firewall & Network Security"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                        Zero-Trust Security & SD-WAN
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                        Enforce encrypted multi-branch VPN mesh, deep SSL inspection, and perimeter defense against emerging ransomware vectors.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleSelectCategory('firewall-network-security')}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#dc2626] hover:underline"
                    >
                      <span>Request security blueprint</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Card 3: Call-Centre & BPO Infrastructure */}
                  <div className="flex flex-col justify-between group">
                    <div>
                      <div className="h-44 sm:h-52 rounded-xl overflow-hidden mb-4 bg-slate-100">
                        <img
                          src="/assets/telecom_ip_phones.jpg"
                          alt="Call-Centre & BPO Infrastructure"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                        High-Concurrency Voice & Dialers
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                        Carrier-grade low-latency PRI/SIP gateways, automated dialers, and acoustic workstations engineered for 24/7 call flows.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleSelectCategory('call-centre-bpo-infrastructure')}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#dc2626] hover:underline"
                    >
                      <span>Consult voice architect</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </div>
            ) : (
              /* 2. CATEGORY VIEW: Clean, High-End Enterprise Solution Presentation */
              currentDetail && (
                <div className="space-y-8 animate-in fade-in duration-200">
                  
                  {/* Category Title Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                        {currentDetail.name}
                      </h2>
                      <span className="text-xs text-[#dc2626] font-semibold block mt-1">
                        Audience: {currentDetail.targetAudience}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => onOpenConsultation(currentDetail.name)}
                      className="px-5 py-2.5 rounded-full bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold transition-all shadow-soft-sm flex items-center gap-2 self-start sm:self-auto"
                    >
                      <span>Request Solution Blueprint</span>
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
                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                        {currentDetail.summary}
                      </p>

                      {/* Architecture Pillars */}
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                          Architectural Pillars
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {currentDetail.architecturePoints.map((point, idx) => (
                            <span
                              key={idx}
                              className="text-xs font-medium text-slate-800 bg-slate-100 border border-slate-200/80 px-3 py-1.5 rounded-lg"
                            >
                              {point}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Core Deliverables */}
                      <div className="pt-2 border-t border-slate-100">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-3">
                          Core Engineering Deliverables
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
                            Need a custom architecture or technical audit?
                          </span>
                          <span className="text-xs text-slate-500">
                            Our enterprise architects review site surveys and deliver tailored schematics within 48 hours.
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => onOpenConsultation(currentDetail.name)}
                          className="px-5 py-2 rounded-lg bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold transition-colors whitespace-nowrap"
                        >
                          Schedule Technical Review
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
