import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowRight, CheckCircle2, X, SlidersHorizontal, ShieldCheck, Laptop, Server, ChevronDown, Sparkles } from 'lucide-react';
import { CATALOG_PRODUCTS, CatalogProduct } from '../data/catalogData';
import { PRODUCTS_DATA, ProductItem } from '../data/ueContent';
import PbxTelephonyShowcase from '../components/sections/PbxTelephonyShowcase';
import CallCenterDialerShowcase from '../components/sections/CallCenterDialerShowcase';
import GsmGatewaysShowcase from '../components/sections/GsmGatewaysShowcase';
import SoftwareLicencesShowcase from '../components/sections/SoftwareLicencesShowcase';
import IllLeasedLineShowcase from '../components/sections/IllLeasedLineShowcase';
import ManagedVoipShowcase from '../components/sections/ManagedVoipShowcase';

interface ProductOverviewVertical {
  id: string;
  verticalNumber: string;
  badge: string;
  name: string;
  idealFor: string;
  description: string;
  valuePills: string[];
  image: string;
  statusBadge: string;
  oems: string;
}

const PROCUREMENT_MODELS = [
  {
    model: 'MODEL 01',
    role: 'Volume Tier Pricing',
    badge: 'CapEx Purchase',
    desc: 'Direct OEM enterprise pricing with tiered volume savings and official GST invoices for 100% input tax credit.',
    accentColor: 'border-t-blue-500',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200'
  },
  {
    model: 'MODEL 02',
    role: 'Zero Upfront Drain',
    badge: 'Flexible OpEx Rentals',
    desc: 'Preserve working capital with 1 to 36 month corporate rentals for laptops, workstations, and servers with free maintenance.',
    accentColor: 'border-t-emerald-500',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
  },
  {
    model: 'MODEL 03',
    role: 'Zero-Touch Ready',
    badge: 'Pre-Staged Fleet',
    desc: 'Standardized corporate OS imaging, BitLocker encryption, asset barcode tagging, and 24-hour hardware burn-in stress testing.',
    accentColor: 'border-t-purple-500',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200'
  },
  {
    model: 'MODEL 04',
    role: 'Pan-India Support',
    badge: 'Post-Warranty AMC',
    desc: 'Certified replacement spares buffer, on-site L1/L2 engineering dispatch, loaner machine stocks, and 4-hour breakdown SLAs.',
    accentColor: 'border-t-red-500',
    badgeColor: 'bg-red-50 text-[#dc2626] border-red-200'
  }
];

const PRODUCT_OVERVIEW_VERTICALS: ProductOverviewVertical[] = [
  {
    id: 'laptops-desktops',
    verticalNumber: 'VERTICAL 01',
    badge: 'ENTERPRISE COMPUTING & WORKSTATIONS',
    name: 'Laptops & Desktops',
    idealFor: 'Corporate Offices, Hybrid Workforces & Enterprise Fleets',
    description: 'Commercial-grade ultrabooks, mobile workstations, and desktop fleets pre-configured with corporate OS images, BitLocker security, and flexible rental/buy options.',
    valuePills: ['Dell Latitude & OptiPlex', 'HP EliteBook & ProDesk', 'Lenovo ThinkPad T-Series'],
    image: '/assets/enterprise_laptop_hero.jpg',
    statusBadge: 'Fleet Ready',
    oems: 'Dell, HP, Lenovo, Acer, Apple'
  },
  {
    id: 'servers-storage',
    verticalNumber: 'VERTICAL 02',
    badge: 'DATACENTER & CLOUD CLUSTERS',
    name: 'Servers & Storage',
    idealFor: 'Datacenters, Private Clouds & Enterprise Virtualization',
    description: 'High-density 1U/2U rackmount and tower servers with hardware RAID, NVMe arrays, and dual-socket Xeon/EPYC processors engineered for mission-critical databases.',
    valuePills: ['Dual-Socket Scalable CPUs', 'Up to 8TB ECC DDR5', 'Hardware RAID & NVMe'],
    image: '/assets/datacenter_servers.jpg',
    statusBadge: 'Buy Only',
    oems: 'Dell PowerEdge, HPE ProLiant, Lenovo ThinkSystem'
  },
  {
    id: 'it-hardware-accessories',
    verticalNumber: 'VERTICAL 03',
    badge: 'PERIPHERALS, GPUS & ACCESSORIES',
    name: 'IT Hardware, GPUs & Accessories',
    idealFor: 'Engineering Desks, CAD/AI Workstations & Corporate Floors',
    description: 'Enterprise accessories including high-accuracy Logitech MX peripherals, NVIDIA AI/workstation GPUs, server memory, high-IOPS NVMe storage, and Thunderbolt 4 docks.',
    valuePills: ['NVIDIA RTX & H100 AI', 'Samsung ECC DDR5 RDIMMs', 'Dell Dual-4K Docks'],
    image: '/assets/ue_hardware_procurement.jpg',
    statusBadge: 'Buy Only',
    oems: 'Logitech, NVIDIA, Samsung, Micron, Dell'
  },
  {
    id: 'routers-network-switches',
    verticalNumber: 'VERTICAL 04',
    badge: 'CORE SWITCHING & ROUTING',
    name: 'Routers & Network Switches',
    idealFor: 'Campus Backbones, Office LANs & Voice/Data Networks',
    description: 'Layer 2/3 managed switches, PoE+ edge switches, and high-throughput core routers delivering line-rate switching, VLAN segmentation, and zero-packet drop audio.',
    valuePills: ['Gigabit & 10G SFP+ Uplinks', 'PoE+ (up to 740W Budget)', 'L2+ Routing & VLANs'],
    image: '/assets/switch_cisco_catalyst_9300.jpg',
    statusBadge: 'Immediate Dispatch',
    oems: 'Cisco Catalyst, Aruba CX, TP-Link JetStream, MikroTik'
  },
  {
    id: 'firewalls-network-security',
    verticalNumber: 'VERTICAL 05',
    badge: 'NEXT-GEN FIREWALLS & ZTNA',
    name: 'Firewalls & Network Security',
    idealFor: 'Corporate Perimeters, Financial Firms & Branch Security',
    description: 'Next-Generation Firewalls delivering hardware-accelerated deep packet inspection, automated intrusion prevention (IPS), zero-trust network access, and VPN tunnels.',
    valuePills: ['Deep SSL Packet Inspection', 'Multi-Gigabit Threat SLA', 'Built-in Secure SD-WAN'],
    image: '/assets/network_security_firewall.jpg',
    statusBadge: 'Security Audited',
    oems: 'Fortinet FortiGate, Cisco Firepower, SonicWall NSA'
  },
  {
    id: 'wifi-wireless-networking',
    verticalNumber: 'VERTICAL 06',
    badge: 'HIGH-DENSITY WI-FI 6 & 6E',
    name: 'Wi-Fi & Wireless Networking',
    idealFor: 'High-Density Offices, Tech Parks & Convention Centers',
    description: 'Enterprise ceiling and outdoor Wi-Fi 6 access points, cloud-managed SDN controllers, and fast-roaming mesh architectures engineered for zero-dropout connectivity.',
    valuePills: ['Wi-Fi 6 & 6E Tri-Band', '500+ Concurrent Clients/AP', 'Zero-Handoff Fast Roaming'],
    image: '/assets/wifi_access_point.jpg',
    statusBadge: 'Same-Day Dispatch',
    oems: 'Cisco Catalyst, Ruckus Wireless, TP-Link Omada'
  },
  {
    id: 'business-phones-ip-phones',
    verticalNumber: 'VERTICAL 07',
    badge: 'DESK IP PHONES & CONFERENCING',
    name: 'Business Phones & IP Phones',
    idealFor: 'Executive Desks, Operations Floors & Reception Consoles',
    description: 'Carrier-grade HD voice IP desk phones, Gigabit PoE sets with digital BLF key modules, smart touchscreen video phones, and 360-degree boardroom speakerphones.',
    valuePills: ['Optima HD Voice Codecs', 'Gigabit PoE & Dual-Screen', 'Acoustic Shield Noise Cancel'],
    image: '/assets/phone_cisco_8845.jpg',
    statusBadge: 'VoIP Certified',
    oems: 'Grandstream Networks, Cisco, Fanvil, Yealink, Poly'
  },
  {
    id: 'cctv',
    verticalNumber: 'VERTICAL 08',
    badge: 'ENTERPRISE VIDEO SURVEILLANCE',
    name: 'CCTV Surveillance Systems',
    idealFor: 'Datacenters, Commercial Campuses, Banks & Warehouses',
    description: 'Commercial 4K IP cameras, vandal-proof domes, long-range starlight bullets, and high-capacity NVRs with AI-powered perimeter defense and remote multi-site monitoring.',
    valuePills: ['4K Ultra HD & Night Vision', 'AI Human/Vehicle Classifier', 'RAID Multi-Bay NVR Storage'],
    image: '/assets/cctv_surveillance.jpg',
    statusBadge: '4K AI Vision',
    oems: 'Hikvision, CP PLUS, Dahua WizMind, Axis'
  },
  {
    id: 'pbx-business-telephony',
    verticalNumber: 'VERTICAL 09',
    badge: 'ON-PREMISE & CLOUD IP-PBX',
    name: 'PBX & Business Telephony',
    idealFor: 'Corporate Campuses, Multi-Floor Offices & Hospitals',
    description: 'Hybrid IP-PBX server appliances uniting office intercom, digital IVR menus, call recording, mobile softphone extensions, and multi-branch voice trunking.',
    valuePills: ['Multi-Level Dynamic IVR', 'Auto Call Distribution (ACD)', 'iOS & Android Softphones'],
    image: '/assets/telecom_ip_phones.jpg',
    statusBadge: 'Telecom Core',
    oems: 'Matrix Comsec ETERNITY, Grandstream UCM, Asterisk'
  },
  {
    id: 'call-centre-dialer-infrastructure',
    verticalNumber: 'VERTICAL 10',
    badge: 'DIALERS & CALL FLOOR HARDWARE',
    name: 'Call Center & Dialer Infrastructure',
    idealFor: 'Customer Support Centers, Tele-Sales & BPO Operations',
    description: 'Turnkey predictive, progressive, and auto-dialers, real-time agent wallboards, CRM screen-pops, heavy-duty agent workstations, and noise-canceling headsets.',
    valuePills: ['Predictive Auto-Dialing', 'Live Call Whispering & Barging', 'CRM Telephony Connectors'],
    image: '/assets/bpo_call_center_floor.jpg',
    statusBadge: 'BPO Ready',
    oems: 'Vicidial, Asterisk, Jabra Biz, Poly Blackwire, Dell'
  },
  {
    id: 'gsm-gateways-pri-fxo-fxs',
    verticalNumber: 'VERTICAL 11',
    badge: 'VOIP & TELECOM GATEWAYS',
    name: 'GSM Gateways, PRI, FXO & FXS',
    idealFor: 'Cost-Optimized Outbound Calling & Legacy Telephony Bridge',
    description: 'Carrier-grade 4G/LTE SIM banks, ISDN PRI/E1 digital trunk gateways, and analog FXO/FXS converters enabling seamless integration between legacy telecom and modern IP-PBX.',
    valuePills: ['Rent & Buy Available', '4 to 32 Port 4G SIM Banks', 'PSTN Lifeline Bypass'],
    image: '/assets/ue_telecom_voice.jpg',
    statusBadge: 'Rent / Buy Available',
    oems: 'Matrix Comsec, Dinstar, OpenVox, Grandstream'
  },
  {
    id: 'software-business-licences',
    verticalNumber: 'VERTICAL 12',
    badge: 'CORPORATE SOFTWARE & CLOUD',
    name: 'Software & Business Licences',
    idealFor: 'Corporate IT Teams, Remote Workforces & Compliance Audits',
    description: 'Official corporate volume licensing for Microsoft 365, Google Workspace, Windows Server infrastructure, and core desktop office applications.',
    valuePills: ['Authorized Cloud Partner', 'Volume Headcount Discounts', 'Zero-Downtime Email Migration'],
    image: '/assets/real_software_workspace.jpg',
    statusBadge: 'Cloud License',
    oems: 'Microsoft, Google Cloud, Sophos, Quick Heal, AWS'
  },
  {
    id: 'ill-leased-line',
    verticalNumber: 'VERTICAL 13',
    badge: 'ENTERPRISE DEDICATED FIBER',
    name: 'Internet Leased Line (ILL)',
    idealFor: 'Mission-Critical Offices, Cloud Workloads & Financial Systems',
    description: 'Dedicated 1:1 symmetrical high-speed fiber internet with carrier BGP routing, 99.5%+ uptime SLA, zero contention ratio, and static IP blocks with 24/7 proactive NOC monitoring.',
    valuePills: ['1:1 Symmetrical Bandwidth', '99.5%+ Uptime Guarantee', 'Dual-Ring Fiber Redundancy'],
    image: '/assets/datacenter_cabling_rack.jpg',
    statusBadge: '1:1 SLA Dedicated',
    oems: 'Tata Communications, Airtel Business, Reliance Jio Enterprise'
  },
  {
    id: 'managed-voip',
    verticalNumber: 'VERTICAL 14',
    badge: 'HOSTED CLOUD TELEPHONY',
    name: 'Managed VOIP & Cloud Telephony',
    idealFor: 'Distributed Teams, Multi-City Branches & Global Calling',
    description: 'Cloud-hosted business telephony with direct DID routing, sub-30ms packet latency, end-to-end SRTP/TLS encryption, and automated failover across redundant telecom carriers.',
    valuePills: ['Direct DID Virtual Numbers', 'End-to-End TLS/SRTP Security', 'Zero-Jitter Voice Priority'],
    image: '/assets/real_managed_voip_desk.jpg',
    statusBadge: 'Crystal HD Voice',
    oems: 'Unified Enterprise Cloud, AWS UVC PBX, Grandstream Wave'
  },
  {
    id: 'antivirus',
    verticalNumber: 'VERTICAL 15',
    badge: 'ENDPOINT SECURITY & EDR',
    name: 'Antivirus & Endpoint Security',
    idealFor: 'Enterprise Fleets, Remote Workforces & Financial Networks',
    description: 'Tier-1 enterprise endpoint protection, adaptive machine learning threat AI, automated ransomware file rollback, and cloud EDR forensics from the world’s leading cybersecurity vendors.',
    valuePills: ['Trellix & Symantec EDR', 'Sophos CryptoGuard Rollback', 'Bitdefender & Kaspersky'],
    image: '/assets/network_security_firewall.jpg',
    statusBadge: 'Buy Only',
    oems: 'McAfee / Trellix, Symantec, Trend Micro, Kaspersky, Bitdefender, ESET, Sophos'
  },
  {
    id: 'windows-licences',
    verticalNumber: 'VERTICAL 16',
    badge: 'GENUINE MICROSOFT OPERATING SYSTEMS',
    name: 'Windows Licences & Server OS',
    idealFor: 'Enterprise Workstations, Branch Servers & Virtualization Clusters',
    description: '100% genuine electronic licensing for Windows 11 Pro Commercial, Windows Server 2025/2022 Standard & Datacenter with Hotpatching, User/Device CALs, and RDS terminal server licenses.',
    valuePills: ['Windows 11 Pro ESD', 'Windows Server 2025 Standard', 'RDS CALs & Multi-User Tally'],
    image: '/assets/real_software_workspace.jpg',
    statusBadge: 'Buy Only',
    oems: 'Microsoft Tier-1 CSP, Volume Licensing'
  },
  {
    id: 'ai',
    verticalNumber: 'VERTICAL 17',
    badge: 'CONVERSATIONAL VOICE & SPEECH AI',
    name: 'AI Agents & Conversational Bots',
    idealFor: 'Customer Support Centers, Outbound Sales, BPO Operations & Banking',
    description: 'Autonomous conversational Voice AI agents, sub-150ms Speech-to-Text & Neural TTS across 12+ Indian regional languages, 100% automated call transcription with PII redaction, and emotion telemetry.',
    valuePills: ['Autonomous Voicebots', 'Sub-150ms STT & TTS', 'Sentiment Scoring & Barge-In'],
    image: '/assets/ue_call_centre_bpo.jpg',
    statusBadge: 'Next-Gen AI',
    oems: 'Unified Enterprise AI, AWS Cloud PBX, Neural Engine'
  }
];

interface ProductsPageProps {
  onOpenInquiry: (productName: string) => void;
}

export default function ProductsPage({ onOpenInquiry }: ProductsPageProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlItem = searchParams.get('item');

  // Selected category state ('all' or specific category ID)
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(urlItem || 'all');
  
  // Brand filter state (for sub-filtering, e.g. Dell, HP, Lenovo)
  const [selectedBrand, setSelectedBrand] = useState<string>('All');

  // Mobile category drawer state
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState<boolean>(false);

  // Modal inspection state
  const [inspectProduct, setInspectProduct] = useState<CatalogProduct | null>(null);
  const [activeModalImage, setActiveModalImage] = useState<string | null>(null);

  const openInspectModal = (product: CatalogProduct) => {
    setInspectProduct(product);
    setActiveModalImage(product.image);
  };

  // Sync with URL query parameter
  useEffect(() => {
    const resolvedCategory = urlItem === 'ai-agents' ? 'ai' : (urlItem || 'all');
    setSelectedCategoryId(resolvedCategory);
    setSelectedBrand('All');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [urlItem]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setInspectProduct(null);
    };
    if (inspectProduct) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [inspectProduct]);

  // The exact categories requested
  const categoryList = useMemo(() => [
    { id: 'laptops-desktops', name: 'Laptops & Desktops' },
    { id: 'servers-storage', name: 'Servers & Storage' },
    { id: 'it-hardware-accessories', name: 'IT Hardware, GPUs & Accessories' },
    { id: 'routers-network-switches', name: 'Routers & Network Switches' },
    { id: 'firewalls-network-security', name: 'Firewalls & Network Security' },
    { id: 'antivirus', name: 'Antivirus' },
    { id: 'windows-licences', name: 'Windows Licences' },
    { id: 'ai', name: 'AI Agents' },
    { id: 'wifi-wireless-networking', name: 'Wi-Fi & Wireless Networking' },
    { id: 'business-phones-ip-phones', name: 'Business Phones & IP Phones' },
    { id: 'cctv', name: 'CCTV' },
    { id: 'pbx-business-telephony', name: 'PBX & Business Telephony' },
    { id: 'call-centre-dialer-infrastructure', name: 'Call Center & Dialer Infrastructure' },
    { id: 'gsm-gateways-pri-fxo-fxs', name: 'GSM Gateways, PRI, FXO & FXS' },
    { id: 'software-business-licences', name: 'Software & Business Licences' },
    { id: 'ill-leased-line', name: 'Internet Leased Line (ILL)' },
    { id: 'managed-voip', name: 'Managed VOIP' },
  ], []);

  const handleSelectCategory = (id: string) => {
    setSelectedCategoryId(id);
    setSelectedBrand('All');
    if (id === 'all') {
      searchParams.delete('item');
      setSearchParams(searchParams, { replace: true });
    } else {
      setSearchParams({ item: id }, { replace: true });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Products belonging to the selected category from CATALOG_PRODUCTS
  const categoryCatalogProducts = useMemo(() => {
    if (selectedCategoryId === 'antivirus') {
      return CATALOG_PRODUCTS.filter((p) => p.categoryId === 'antivirus' || p.subCategory === 'antivirus');
    }
    if (selectedCategoryId === 'firewalls-network-security') {
      return CATALOG_PRODUCTS.filter((p) => p.categoryId === 'firewalls-network-security' && p.subCategory !== 'antivirus');
    }
    return CATALOG_PRODUCTS.filter((p) => p.categoryId === selectedCategoryId);
  }, [selectedCategoryId]);

  // Available brands for the current category
  const availableBrands = useMemo(() => {
    const brands = Array.from(new Set(categoryCatalogProducts.map((p) => p.brand)));
    return ['All', ...brands];
  }, [categoryCatalogProducts]);

  // Filtered products for display
  const displayedCatalogProducts = useMemo(() => {
    if (selectedBrand === 'All') return categoryCatalogProducts;
    return categoryCatalogProducts.filter((p) => p.brand === selectedBrand);
  }, [categoryCatalogProducts, selectedBrand]);

  // Fallback product info if category not in CATALOG_PRODUCTS
  const fallbackProduct = useMemo(() => {
    if (categoryCatalogProducts.length > 0) return null;
    return PRODUCTS_DATA.find((p) => p.id === selectedCategoryId);
  }, [selectedCategoryId, categoryCatalogProducts]);

  const currentCategoryObj = categoryList.find((c) => c.id === selectedCategoryId);

  return (
    <div className="min-h-[85vh] bg-white py-4 sm:py-6 lg:py-7 border-b border-slate-100">
      <div className="max-w-[1536px] mx-auto px-3 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-10 items-start">
          
          {/* Mobile Category Selector (Visible on mobile/tablet < lg) */}
          <div className="lg:hidden col-span-1 mb-2">
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-3.5 shadow-2xs">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#dc2626] block">
                    Category Selection
                  </span>
                  <p className="text-sm font-bold text-slate-900 truncate">
                    {selectedCategoryId === 'all'
                      ? 'Products and Services Home'
                      : currentCategoryObj?.name || 'All Products'}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileCategoryOpen(!mobileCategoryOpen)}
                  className="px-3.5 py-2 min-h-[40px] rounded-xl bg-white border border-slate-200 text-xs font-semibold text-[#dc2626] shadow-2xs flex items-center gap-1.5 active:scale-95 transition-all shrink-0"
                >
                  <span>{mobileCategoryOpen ? 'Close' : 'Categories'}</span>
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
                    Products and Services Home
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
          <aside className="hidden lg:block lg:col-span-3 border-r border-slate-200/90 pr-5 lg:sticky lg:top-4 max-h-[calc(100vh-2rem)] overflow-y-auto overscroll-contain [scrollbar-width:thin] [scrollbar-color:#e2e8f0_transparent]">
            {/* Products and Services Home Link */}
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
                Products and Services Home
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

          {/* Right Column: Cisco 3-Card Home OR Rich E-Commerce Product Catalog */}
          <main className="lg:col-span-9">
            
            {/* 1. HOME VIEW: Official Enterprise Hardware Portfolio & 14 Verticals Grid (Matching Solutions & Services First Page) */}
            {selectedCategoryId === 'all' ? (
              <div className="space-y-8">
                
                {/* Official Enterprise Hardware & Products Specification Hero */}
                <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs relative overflow-hidden">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#dc2626] text-xs font-bold uppercase tracking-wider mb-3">
                    <Sparkles className="w-3.5 h-3.5 text-[#dc2626]" />
                    <span>Official Enterprise Hardware &amp; Products Portfolio</span>
                  </div>

                  <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2 text-slate-900">
                    Unified Enterprise Products &amp; Sourcing
                  </h1>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl mb-5">
                    Authorized Tier-1 corporate IT hardware procurement, flexible operating lease rentals (OpEx), and carrier-grade cloud telephony. Featuring 100% genuine factory-sealed commercial estates from Dell, HP, Lenovo, Cisco, and Fortinet with official GST input tax credit, pan-India logistics, and post-warranty AMC support.
                  </p>

                  <div className="flex flex-wrap items-center gap-2 pt-3.5 border-t border-slate-100 text-xs">
                    <span className="bg-slate-50 text-slate-700 px-3 py-1 rounded-md border border-slate-200/80">
                      OEM Authorization: <strong className="text-slate-900 font-semibold">Tier-1 Dell, HP, Lenovo, Cisco &amp; Fortinet</strong>
                    </span>
                    <span className="bg-slate-50 text-slate-700 px-3 py-1 rounded-md border border-slate-200/80">
                      Procurement Flexibility: <strong className="text-slate-900 font-semibold">CapEx Outright &amp; OpEx Rentals (1–36 Mo)</strong>
                    </span>
                    <span className="bg-emerald-50 text-emerald-800 px-3 py-1 rounded-md border border-emerald-200">
                      Pre-Delivery Lab: <strong className="text-emerald-700 font-semibold">24-Hour Stress Testing Verified</strong>
                    </span>
                  </div>
                </div>

                {/* Enterprise Acquisition & Procurement Framework (4 Models) */}
                <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-4 bg-[#dc2626] rounded-full inline-block" />
                      <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                        Enterprise Acquisition &amp; Procurement Framework
                      </h2>
                    </div>
                    <span className="text-[11px] font-semibold text-red-600 bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-full w-fit">
                      Flexible CapEx &amp; OpEx Models
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-5">
                    We eliminate supply-chain friction, distributor markups, and dead-on-arrival risks through 4 structured corporate procurement channels:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                    {PROCUREMENT_MODELS.map((m, idx) => (
                      <div
                        key={idx}
                        className={`bg-slate-50/70 border border-slate-200/80 rounded-xl p-3.5 border-t-4 ${m.accentColor} hover:bg-white hover:shadow-xs transition-all flex flex-col justify-between`}
                      >
                        <div>
                          <div className="flex items-center justify-between gap-1 mb-1.5">
                            <span className="text-[10px] font-mono font-bold text-slate-500 uppercase">
                              {m.model}
                            </span>
                            <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded border ${m.badgeColor}`}>
                              {m.badge}
                            </span>
                          </div>
                          <h4 className="text-xs font-bold text-slate-900 mb-1">
                            {m.role}
                          </h4>
                          <p className="text-[11px] text-slate-600 leading-snug">
                            {m.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Explore All 17 Product & Infrastructure Verticals Catalog Grid */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h2 className="text-lg font-bold text-slate-900 tracking-tight">
                        Explore All 17 Product &amp; Infrastructure Verticals
                      </h2>
                      <p className="text-xs text-slate-500">
                        Select any category to view full hardware inventories, enterprise technical specifications, brand filters, and instant quote requests
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 cisco-stagger">
                    {PRODUCT_OVERVIEW_VERTICALS.map((vert) => (
                      <div
                        key={vert.id}
                        className="cisco-reveal bg-white border border-slate-200/90 rounded-2xl p-5 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
                      >
                        <div>
                          {/* Card Image Header */}
                          <div className="relative h-44 sm:h-52 rounded-xl overflow-hidden mb-4 bg-slate-100 border border-slate-200/70">
                            <img
                              src={vert.image}
                              alt={vert.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-900/15 to-transparent pointer-events-none" />
                            
                            <div className="absolute top-2.5 left-2.5">
                              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-slate-950/80 backdrop-blur-md text-white border border-white/10 uppercase tracking-wider">
                                {vert.verticalNumber}
                              </span>
                            </div>

                            <div className="absolute top-2.5 right-2.5">
                              <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/90 text-white backdrop-blur-md flex items-center gap-1 shadow-xs">
                                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                {vert.statusBadge}
                              </span>
                            </div>

                            <div className="absolute bottom-2.5 left-3 right-3 text-white">
                              <span className="text-[11px] font-bold text-red-300 block truncate">
                                {vert.badge}
                              </span>
                            </div>
                          </div>

                          {/* Card Content Header */}
                          <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#dc2626] transition-colors leading-snug mb-1">
                            {vert.name}
                          </h3>

                          <span className="text-[11px] text-slate-500 block mb-2.5">
                            Ideal For: <strong className="text-slate-700">{vert.idealFor}</strong>
                          </span>

                          <p className="text-xs text-slate-600 leading-relaxed mb-3 line-clamp-2">
                            {vert.description}
                          </p>

                          {/* Value Pills */}
                          <div className="flex flex-wrap gap-1.5 mb-3">
                            {vert.valuePills.map((pill, idx) => (
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
                            OEMs: {vert.oems}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleSelectCategory(vert.id)}
                            className="text-xs font-bold text-[#dc2626] hover:text-[#b91c1c] inline-flex items-center gap-1 cursor-pointer"
                          >
                            <span>Explore Products</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ) : (
              /* 2. CATEGORY VIEW: Clean, High-End Enterprise Product Grid (Dell / HP / Amazon Business Style) */
              <div className="space-y-6">
                
                {/* Category Header Bar (Only for standard catalog categories with brand filters) */}
                {!['pbx-business-telephony', 'call-centre-dialer-infrastructure', 'gsm-gateways-pri-fxo-fxs', 'software-business-licences', 'ill-leased-line', 'managed-voip', 'ai'].includes(selectedCategoryId) && (
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                        {currentCategoryObj?.name}
                      </h2>
                    </div>

                    {/* Brand Filter Pills */}
                    {availableBrands.length > 2 && (
                      <div className="flex items-center flex-wrap gap-1.5">
                        <span className="text-xs text-slate-400 mr-1 font-medium">Brand:</span>
                        {availableBrands.map((brand) => (
                          <button
                            key={brand}
                            onClick={() => setSelectedBrand(brand)}
                            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                              selectedBrand === brand
                                ? 'bg-[#dc2626] text-white shadow-2xs'
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                            }`}
                          >
                            {brand}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}



                {/* If we have specific catalog models for this category */}
                {displayedCatalogProducts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 cisco-stagger">
                    {displayedCatalogProducts.map((product) => (
                      <article
                        key={product.id}
                        className="cisco-reveal bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                      >
                        <div>
                          {/* Product Image Container */}
                          {/* Product Image Container */}
                          {(() => {
                            const isLifestyleCover =
                              product.id === 'grandstream-grp2615-ip-phone' ||
                              product.id === 'acer-travellite-tl14-52m' ||
                              product.id === 'yealink-cp965-conference-phone' ||
                              product.id === 'dell-latitude-7440' ||
                              product.id === 'hp-elitebook-840-g10' ||
                              product.id === 'lenovo-thinkpad-x1-carbon-gen11' ||
                              product.id === 'apple-macbook-pro-16-m3' ||
                              (!['antivirus', 'windows-licences', 'firewalls-network-security', 'wifi-wireless-networking', 'routers-network-switches', 'business-phones-ip-phones'].includes(product.categoryId) && product.brand !== 'Acer');

                            return (
                              <div className={`relative h-52 bg-white overflow-hidden flex items-center justify-center border-b border-slate-100 ${
                                isLifestyleCover ? 'p-0' : 'p-3'
                              }`}>
                                <img
                                  src={product.image}
                                  alt={product.name}
                                  className={`w-full h-full ${
                                    isLifestyleCover
                                      ? 'object-cover group-hover:scale-105'
                                      : 'object-contain p-2 group-hover:scale-105'
                                  } transition-transform duration-500`}
                                  loading="lazy"
                                />
                                {/* Brand Badge */}
                                <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-slate-800 text-[11px] font-bold px-2.5 py-0.5 rounded-md shadow-2xs border border-slate-200/80">
                                  {product.brand}
                                </span>
                                {product.rentalAvailable ? (
                                  <span className="absolute top-3 right-3 bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-2xs">
                                    Rent / Buy
                                  </span>
                                ) : (
                                  <span className="absolute top-3 right-3 bg-slate-800 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-2xs">
                                    Buy Only
                                  </span>
                                )}
                              </div>
                            );
                          })()}

                          {/* Body Content */}
                          <div className="p-5">
                            <h3 className="text-base font-bold text-slate-900 group-hover:text-[#dc2626] transition-colors mb-2.5 leading-snug">
                              {product.name}
                            </h3>

                            {/* Clean Specification Chips */}
                            <div className="flex flex-wrap gap-1.5 mb-3.5">
                              {product.keyPills.map((pill, idx) => (
                                <span
                                  key={idx}
                                  className="text-[10px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md"
                                >
                                  {pill}
                                </span>
                              ))}
                            </div>

                            {/* Stock Indicator */}
                            <div className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                              <span>{product.stockStatus}</span>
                            </div>
                          </div>
                        </div>

                        {/* Card Footer Actions */}
                        <div className="p-5 pt-0 border-t border-slate-100 mt-2 flex items-center gap-2">
                          <button
                            onClick={() => onOpenInquiry(`Inquiry: ${product.brand} - ${product.name}`)}
                            className="flex-1 py-2 px-3 rounded-lg bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold transition-colors text-center cursor-pointer"
                          >
                            {product.rentalAvailable ? 'Request Quote' : 'Request Buy Quote'}
                          </button>
                          <button
                            onClick={() => openInspectModal(product)}
                            className="py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
                          >
                            Quick View
                          </button>
                        </div>
                      </article>
                    ))}
                  </div>
                ) : selectedCategoryId === 'ai' ? (
                  <SoftwareLicencesShowcase onOpenInquiry={onOpenInquiry} initialTab="voice-ai" mode="ai" />
                ) : selectedCategoryId === 'pbx-business-telephony' ? (
                  <PbxTelephonyShowcase onOpenInquiry={onOpenInquiry} />
                ) : selectedCategoryId === 'call-centre-dialer-infrastructure' ? (
                  <CallCenterDialerShowcase onOpenInquiry={onOpenInquiry} />
                ) : selectedCategoryId === 'gsm-gateways-pri-fxo-fxs' ? (
                  <GsmGatewaysShowcase onOpenInquiry={onOpenInquiry} />
                ) : selectedCategoryId === 'software-business-licences' ? (
                  <SoftwareLicencesShowcase onOpenInquiry={onOpenInquiry} initialTab="all" mode="all-licences" />
                ) : selectedCategoryId === 'ill-leased-line' ? (
                  <IllLeasedLineShowcase onOpenInquiry={onOpenInquiry} />
                ) : selectedCategoryId === 'managed-voip' ? (
                  <ManagedVoipShowcase onOpenInquiry={onOpenInquiry} />
                ) : fallbackProduct ? (
                  /* Fallback clean presentation for remaining categories */
                  <div className="max-w-2xl bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs p-6 sm:p-8">
                    <div className="h-36 sm:h-44 max-w-md rounded-xl overflow-hidden mb-5 bg-slate-100">
                      <img
                        src={fallbackProduct.image || '/assets/ue_hardware_procurement.jpg'}
                        alt={fallbackProduct.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {fallbackProduct.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                      {fallbackProduct.description}
                    </p>
                    
                    <div className="bg-slate-50 border border-slate-200/80 p-3.5 rounded-xl mb-6">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                        Enterprise Specifications
                      </span>
                      <p className="text-xs font-mono text-slate-800">
                        {fallbackProduct.specs}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => onOpenInquiry(`Inquiry: ${fallbackProduct.name}`)}
                        className="px-6 py-2.5 rounded-lg bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold transition-colors"
                      >
                        Request Official Quote
                      </button>
                      <button
                        onClick={() => handleSelectCategory('all')}
                        className="px-4 py-2.5 text-xs font-medium text-slate-500 hover:text-slate-800 transition-colors"
                      >
                        Back to Overview
                      </button>
                    </div>
                  </div>
                ) : null}

              </div>
            )}
          </main>

        </div>
      </div>

      {/* 3. Clean Quick View Modal (Dell / HP Commercial Style) */}
      {inspectProduct && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150 overflow-y-auto"
          onClick={() => setInspectProduct(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full p-4 sm:p-6 lg:p-8 shadow-2xl border border-slate-200 relative my-auto max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-3 mb-4 sm:mb-5">
              <div className="min-w-0 flex-1">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#dc2626] bg-red-50 px-2.5 py-0.5 rounded-full inline-block mb-1.5">
                  {inspectProduct.brand} {inspectProduct.categoryId === 'windows-licences' ? 'Operating System & Server License' : (inspectProduct.subCategory === 'antivirus' || inspectProduct.categoryId === 'antivirus') ? 'Cybersecurity Software' : 'Enterprise Hardware'}
                </span>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 leading-snug break-words">
                  {inspectProduct.name}
                </h3>
              </div>
              <button
                onClick={() => setInspectProduct(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors shrink-0 min-h-[32px] min-w-[32px]"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Image Box */}
            <div className="h-56 sm:h-64 rounded-xl overflow-hidden mb-3 bg-white border border-slate-100 flex items-center justify-center p-4">
              <img
                src={activeModalImage || inspectProduct.image}
                alt={inspectProduct.name}
                className={`max-h-full max-w-full ${
                  inspectProduct.categoryId === 'antivirus' || inspectProduct.categoryId === 'windows-licences' || inspectProduct.subCategory === 'antivirus' || inspectProduct.brand === 'Acer' || inspectProduct.categoryId === 'firewalls-network-security' || inspectProduct.categoryId === 'wifi-wireless-networking' || inspectProduct.categoryId === 'routers-network-switches' || inspectProduct.categoryId === 'business-phones-ip-phones'
                    ? 'object-contain'
                    : 'object-cover rounded-lg'
                }`}
              />
            </div>

            {/* Multi-angle Gallery Thumbnails */}
            {inspectProduct.gallery && inspectProduct.gallery.length > 1 && (
              <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-1">
                {inspectProduct.gallery.map((imgUrl, gIdx) => {
                  const isCurrent = (activeModalImage || inspectProduct.image) === imgUrl;
                  return (
                    <button
                      key={gIdx}
                      type="button"
                      onClick={() => setActiveModalImage(imgUrl)}
                      className={`h-14 w-20 rounded-lg border-2 p-1 bg-white shrink-0 transition-all flex items-center justify-center overflow-hidden cursor-pointer ${
                        isCurrent
                          ? 'border-[#dc2626] ring-2 ring-red-100 shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={imgUrl}
                        alt={`Angle ${gIdx + 1}`}
                        className="max-h-full max-w-full object-contain"
                      />
                    </button>
                  );
                })}
                <span className="text-[10px] text-slate-400 font-medium ml-1">
                  Click to switch angles
                </span>
              </div>
            )}

            {/* Detailed Technical Specs Table */}
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 mb-6 space-y-2 text-xs">
              {Object.entries(inspectProduct.specs).map(([key, val]) => {
                if (!val) return null;
                const label = key
                  .replace(/([A-Z])/g, ' $1')
                  .replace(/^./, (str) => str.toUpperCase());
                return (
                  <div key={key} className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-slate-200/60 last:border-b-0 gap-1">
                    <span className="font-semibold text-slate-500 capitalize">{label}:</span>
                    <span className={`font-medium text-left sm:text-right sm:max-w-md ${key === 'warranty' ? 'text-[#dc2626] font-bold' : 'text-slate-800'}`}>{val}</span>
                  </div>
                );
              })}
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setInspectProduct(null)}
                className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg transition-colors min-h-[40px]"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  const pName = `${inspectProduct.brand} ${inspectProduct.name}`;
                  setInspectProduct(null);
                  onOpenInquiry(`Inquiry: ${pName}`);
                }}
                className="px-5 py-2.5 rounded-lg bg-[#dc2626] hover:bg-[#b91c1c] active:bg-[#991b1b] text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 min-h-[40px]"
              >
                <span>{inspectProduct.rentalAvailable ? 'Request Quotation' : 'Request Buy Quotation'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
