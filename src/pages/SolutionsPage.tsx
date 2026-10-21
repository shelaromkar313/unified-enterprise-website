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
  whyExists: string;
  challengesSolved: { title: string; desc: string }[];
  metrics: string[];
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

  // Comprehensive details for each category with strategic business purpose
  const solutionsData: Record<string, SolutionDetail> = useMemo(() => ({
    'complete-it-infrastructure': {
      id: 'complete-it-infrastructure',
      name: 'Complete IT Infrastructure',
      targetAudience: 'Growing enterprises & corporate headquarters',
      summary: 'Turnkey IT architecture from structural cabling and rack enclosures to computing clusters, virtualization, storage, and centralized endpoint management.',
      image: '/assets/datacenter_servers.jpg',
      metrics: ['99.99% Core Uptime', 'Tier-1 Compute (Dell/HPE)', 'Turnkey Handover'],
      whyExists: 'Disjointed systems from multiple cabling, server, and networking vendors create operational friction and blame games. We deliver a unified, load-tested computing architecture under one accountable contract for maximum enterprise uptime.',
      challengesSolved: [
        { title: 'Zero Multi-Vendor Friction', desc: 'Single-source accountability across servers, storage, switches, and structured cabling.' },
        { title: 'N+1 Resilient Redundancy', desc: 'Prevents cascading outages with redundant power, cooling, and network links.' },
        { title: 'Rapid Facility Handover', desc: 'Accelerates corporate site setup timelines from months down to 2–3 weeks.' }
      ],
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
      metrics: ['Single SLA Contract', '<15ms Voice Jitter', '35% OpEx Savings'],
      whyExists: 'Voice telephony and IT networks often operate in isolated silos, causing downtime when calls drop or internet falters. We unify IP-PBX telephony, SIP trunks, switches, and firewalls under one SLA with a single emergency contact number.',
      challengesSolved: [
        { title: 'Halts Vendor Blame Games', desc: 'One number to call for both voice telephony and IT network incidents.' },
        { title: 'Lossless Voice QoS', desc: 'Enforces bandwidth prioritization so voice calls never stutter or disconnect.' },
        { title: 'Consolidated SLA Billing', desc: 'Reduces operational overhead by up to 35% through single-contract management.' }
      ],
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
      metrics: ['48-Hour Deployment', 'Predictable Monthly OpEx', 'Zero Ransomware Loss'],
      whyExists: 'Growing businesses need Fortune 500 stability and cyber protection without the burden of hiring costly in-house network architects. We provide turnkey compact server racks, automated backup vaults, and managed helpdesk at a predictable monthly cost.',
      challengesSolved: [
        { title: 'Ransomware-Proof Vaults', desc: 'Immutable hybrid cloud backups protect corporate data from extortion.' },
        { title: 'Predictable Monthly OpEx', desc: 'Eliminates surprise emergency repair invoices with fixed-rate SLAs.' },
        { title: 'Effortless Headcount Scale', desc: 'Expands from 20 to 150+ seats without requiring architectural re-work.' }
      ],
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
      metrics: ['Pan-India Dispatch', 'Zero-Touch SD-WAN', '100% Policy Parity'],
      whyExists: 'Branch offices, retail outlets, and regional sites frequently suffer from weak security policies and no onsite technical staff. We enforce nationwide IT parity with automated SD-WAN mesh tunnels backed by certified hands-on engineers across major metros.',
      challengesSolved: [
        { title: 'Branch Security Parity', desc: 'Extends uniform firewall policies and content filtering across all locations.' },
        { title: 'Self-Healing SD-WAN', desc: 'Replaces costly legacy MPLS lines with dynamic multi-ISP traffic routing.' },
        { title: 'Pan-India Dispatch', desc: 'Onsite certified technicians reach remote branches within hours of dispatch.' }
      ],
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
      name: 'Call Center & BPO Infrastructure',
      targetAudience: 'Inbound customer support, outbound dialer centers & BPOs',
      summary: 'High-concurrency predictive dialers, multi-agent acoustic workstations, PRI/SIP gateway integration, call recording archives, and redundant ISP failover connectivity for non-stop operations.',
      image: '/assets/telecom_ip_phones.jpg',
      metrics: ['Sub-15ms Voice Jitter', '99.999% Trunk Availability', '1,000+ Concurrent Lines'],
      whyExists: 'In contact centers, every second of dialer downtime or audio distortion directly incinerates revenue and triggers client SLA penalties. We engineer clustered predictive dialers, redundant carrier SIP gateways, and acoustic agent hardware for continuous 24/7 duty.',
      challengesSolved: [
        { title: 'High-Concurrency Stability', desc: 'Dialer clusters withstand peak morning outbound calling surges without lag.' },
        { title: 'Dual-ISP Auto Failover', desc: 'Zero dropped customer conversations via automated BGP carrier failover.' },
        { title: '100% Call Compliance', desc: 'Encrypted call recording archives satisfy regulatory storage requirements.' }
      ],
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
      metrics: ['10/40G Optical Backbone', 'Fluke Test Verified', '10-Year Cable Warranty'],
      whyExists: 'Over 70% of persistent network slowdowns and Wi-Fi dead zones stem from flawed physical cabling and amateur switch configurations. We engineer networks using precision RF heatmaps, certified structured Cat6A/fiber, and VLAN segmentation that scales for a decade.',
      challengesSolved: [
        { title: 'Zero Wi-Fi Dead Zones', desc: 'Heatmap modeling eliminates interference in high-density office zones.' },
        { title: 'Broadcast Storm Defense', desc: 'Hardened Layer 2/3 protocols prevent network freezes and packet loops.' },
        { title: 'Fluke-Tested Cabling', desc: 'Certified patch dressing with complete port labeling schematics.' }
      ],
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
      metrics: ['Zero-Trust ZTNA', 'Deep Packet SSL Inspection', '24/7 Threat Protection'],
      whyExists: 'Cyber threats and internal data leaks represent existential corporate risks that basic routers cannot prevent. We deploy Next-Generation Firewalls (Fortinet, Cisco, Sophos) with Zero-Trust access control, deep packet inspection, and encrypted remote VPN gateways.',
      challengesSolved: [
        { title: 'Real-Time Threat Blocking', desc: 'Stops zero-day exploits and polymorphic ransomware before reaching users.' },
        { title: 'Secure Hybrid VPNs', desc: 'Enforces Multi-Factor Authentication (MFA) for all remote staff tunnels.' },
        { title: 'Audit-Ready Compliance', desc: 'Aligns network security with ISO 27001, SOC 2, and data privacy frameworks.' }
      ],
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
      metrics: ['Zero-Touch MDM Enrollment', 'Instant Remote Wipe', 'Hybrid Conference Ready'],
      whyExists: 'Managing remote laptops across cities creates severe security vulnerabilities and onboarding friction. We deliver endpoint governance: pre-imaged enterprise laptops arrive at employee doorsteps with Intune MDM, BitLocker encryption, and video conferencing ready to go.',
      challengesSolved: [
        { title: '15-Minute Onboarding', desc: 'Zero-touch device enrollment enables immediate out-of-the-box productivity.' },
        { title: 'Instant Remote Wipe', desc: 'Remotely locks and wipes corporate data if a device is lost or compromised.' },
        { title: '1-Touch Video Rooms', desc: 'Smart conference room bars connect hybrid teams with clear audio and video.' }
      ],
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
      metrics: ['Authorized Tier-1 Partner', 'Direct OEM Warranty', '15-30% Cost Savings'],
      whyExists: 'Sourcing corporate hardware from unverified brokers risks counterfeit components, voided OEM warranties, and steep markups. As an authorized Tier-1 partner for Dell, HP, Lenovo, Cisco, and Fortinet, we provide direct enterprise pricing, burn-in diagnostics, and official warranties.',
      challengesSolved: [
        { title: '15% to 30% Cost Savings', desc: 'Volume enterprise pricing bypasses consumer retail markups.' },
        { title: 'Guaranteed OEM Genuine', desc: 'Direct supply chain ensures genuine components and active manufacturer support.' },
        { title: 'Zero Dead-On-Arrival', desc: 'Pre-dispatch stress testing and image flashing ensure instant deployment.' }
      ],
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
      metrics: ['NIST 800-88 Certified', 'Audit-Ready Ledger', 'Maximized Residual ROI'],
      whyExists: 'Aging hardware quietly drains IT maintenance budgets before creating severe data liability risks when retired. We govern physical technology assets throughout their lifespan—tracking warranties, upgrading components, and issuing certified NIST 800-88 data destruction certificates upon retirement.',
      challengesSolved: [
        { title: 'Proactive Refresh Cycles', desc: 'Forecasts hardware replacement to eliminate unbudgeted emergency failures.' },
        { title: 'NIST 800-88 Legal Immunity', desc: 'Tamper-evident data sanitization certificates ensure zero data leakage.' },
        { title: 'Residual Asset Recovery', desc: 'Recovers cash value through corporate hardware buyback and green recycling.' }
      ],
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

                  {/* Card 3: Call Center & BPO Infrastructure */}
                  <div className="flex flex-col justify-between group">
                    <div>
                      <div className="h-44 sm:h-52 rounded-xl overflow-hidden mb-4 bg-slate-100">
                        <img
                          src="/assets/telecom_ip_phones.jpg"
                          alt="Call Center & BPO Infrastructure"
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
                <div className="space-y-6 animate-in fade-in duration-200">
                  
                  {/* Category Title Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        {currentDetail.name}
                      </h2>
                      <span className="text-xs text-slate-500 font-medium block mt-1.5">
                        Target Audience: <strong className="text-slate-800">{currentDetail.targetAudience}</strong>
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => onOpenConsultation(currentDetail.name)}
                      className="px-5 py-2.5 rounded-full bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold transition-all shadow-soft-sm flex items-center gap-2 self-start sm:self-auto shrink-0"
                    >
                      <span>Request Solution Blueprint</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Minimized Split Hero Card: Executive Summary + Compact Framed Image + Key Metrics */}
                  <div className="bg-gradient-to-br from-slate-50 via-white to-slate-50 border border-slate-200/90 rounded-2xl p-5 sm:p-7 shadow-xs">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                      
                      {/* Left: Summary & Metric Pills */}
                      <div className="flex-1 space-y-3.5">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-4 bg-[#173B67] rounded-full inline-block" />
                          <h3 className="text-sm sm:text-base font-bold text-[#173B67] tracking-tight">
                            Executive Overview
                          </h3>
                        </div>
                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                          {currentDetail.summary}
                        </p>

                        {/* Quick Metrics Badges */}
                        <div className="flex flex-wrap items-center gap-2 pt-1">
                          {currentDetail.metrics.map((m, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-800 bg-white border border-slate-200/90 px-3 py-1.5 rounded-lg shadow-2xs"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#dc2626]" />
                              {m}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right: Minimized Image Frame */}
                      <div className="w-full lg:w-72 xl:w-80 h-44 sm:h-48 rounded-xl overflow-hidden border border-slate-200/90 shadow-sm relative group shrink-0 bg-slate-100">
                        <img
                          src={currentDetail.image}
                          alt={currentDetail.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                        <span className="absolute bottom-2.5 left-3 text-[11px] font-semibold text-white/95 bg-slate-900/70 backdrop-blur-xs px-2.5 py-0.5 rounded-md border border-white/20">
                          Architecture Preview
                        </span>
                      </div>

                    </div>
                  </div>

                  {/* Why This Solution Exists Section (Strategic Business Purpose) */}
                  <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 space-y-5 shadow-xs cisco-reveal">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-4 bg-[#dc2626] rounded-full inline-block" />
                      <h3 className="text-base sm:text-lg font-bold text-[#173B67] tracking-tight">
                        Why This Solution Exists at Unified Enterprise
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {currentDetail.whyExists}
                    </p>

                    {/* Key Business Challenges Solved */}
                    <div className="pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-2 mb-3.5">
                        <span className="w-1.5 h-4 bg-[#173B67] rounded-full inline-block" />
                        <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wide text-[#173B67]">
                          Strategic Challenges Solved For Your Organization
                        </h4>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 cisco-reveal cisco-stagger">
                        {currentDetail.challengesSolved.map((challenge, idx) => (
                          <div 
                            key={idx} 
                            className="bg-slate-50/80 hover:bg-slate-50 border border-slate-200/80 rounded-xl p-4 transition-colors space-y-1.5"
                          >
                            <div className="flex items-center gap-1.5 text-xs font-bold text-[#173B67]">
                              <CheckCircle2 className="w-4 h-4 text-[#dc2626] shrink-0" />
                              <span>{challenge.title}</span>
                            </div>
                            <p className="text-xs text-slate-600 leading-relaxed">
                              {challenge.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Technical Pillars & Core Engineering Deliverables */}
                  <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 space-y-6 shadow-xs cisco-reveal">
                    
                    {/* Architecture Pillars */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-1.5 h-4 bg-[#173B67] rounded-full inline-block" />
                        <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wide text-[#173B67]">
                          Core Architectural Pillars
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {currentDetail.architecturePoints.map((point, idx) => (
                          <span
                            key={idx}
                            className="text-xs font-medium text-slate-800 bg-slate-50 border border-slate-200/80 px-3 py-1.5 rounded-lg"
                          >
                            {point}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Core Deliverables */}
                    <div className="pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-1.5 h-4 bg-[#dc2626] rounded-full inline-block" />
                        <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wide text-[#173B67]">
                          Certified Engineering Deliverables
                        </h4>
                      </div>
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
                        className="px-5 py-2.5 rounded-lg bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold transition-colors whitespace-nowrap"
                      >
                        Schedule Technical Review
                      </button>
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
