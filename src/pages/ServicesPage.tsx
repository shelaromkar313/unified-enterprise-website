import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  ShieldCheck, Clock, Check, ArrowRight, Wrench, 
  Users, AlertCircle, FileCheck, CheckCircle2, PhoneCall, Server, Wifi, ChevronDown 
} from 'lucide-react';

interface ServicesPageProps {
  onOpenQuickSupport: (serviceName?: string) => void;
}

interface ServiceDetail {
  id: string;
  name: string;
  scope: string;
  sla: string;
  deliverables: string[];
  coverage: string;
  image: string;
}

export default function ServicesPage({ onOpenQuickSupport }: ServicesPageProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlItem = searchParams.get('item');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(urlItem || 'all');
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(false);

  useEffect(() => {
    setSelectedCategoryId(urlItem || 'all');
  }, [urlItem]);

  // The exact 18 categories requested by the user
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

  // AMC Tiers for Home spotlight
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

  // Detailed data for all 18 categories
  const servicesData: Record<string, ServiceDetail> = useMemo(() => ({
    'amc': {
      id: 'amc',
      name: 'Annual Maintenance Contracts (AMC)',
      scope: 'Comprehensive and non-comprehensive contracts covering your entire hardware estate, network infrastructure, and telephony.',
      sla: 'Guaranteed 2 to 4 hour emergency response times with dedicated primary and secondary certified service engineers.',
      deliverables: ['Preventive quarterly health checks', 'Emergency onsite technician visits', 'Component replacement coverage & loaner units', 'Regular firmware & security patch updates'],
      coverage: 'Laptops, Desktops, Servers, Switches, Routers, PBX, Firewalls',
      image: '/assets/ue_amc_maintenance.jpg'
    },
    'managed-it-telecom': {
      id: 'managed-it-telecom',
      name: 'Managed IT and Telecom Services',
      scope: 'Full-spectrum outsourced technology operations. We act as your end-to-end IT department with proactive monitoring and dedicated oversight.',
      sla: '24/5 Standard Support with Optional 24/7 Mission-Critical SLA monitoring.',
      deliverables: ['Continuous network & server monitoring', 'Helpdesk ticketing portal with fast SLA resolution', 'ISP and vendor coordination for leased lines', 'Monthly operational review & executive metrics'],
      coverage: 'End-to-End Enterprise Operations & Telephony',
      image: '/assets/why_expertise.jpg'
    },
    'remote-it-support': {
      id: 'remote-it-support',
      name: 'Remote IT Support',
      scope: 'Fast-response tier-1 to tier-3 helpdesk support resolving operating system, driver, VPN, email client, and software errors via encrypted remote sessions.',
      sla: 'Instant 15-minute average remote response time.',
      deliverables: ['Live desktop troubleshooting via secure agent', 'User onboarding & software license provisioning', 'Virus & malware remediation', 'Domain join & password reset automation'],
      coverage: 'Workstations, Laptops, Mobile Devices, Cloud Applications',
      image: '/assets/enterprise_laptop_hero.jpg'
    },
    'onsite-it-engineers': {
      id: 'onsite-it-engineers',
      name: 'Onsite IT Engineers',
      scope: 'Certified desktop and network support specialists stationed directly at your company offices or dispatched on-demand for physical intervention.',
      sla: 'Permanent full-time resident shifts or 2-hour emergency dispatch.',
      deliverables: ['Dedicated resident engineer stationed at premises', 'Physical hardware swap and cable maintenance', 'Hands-on executive VIP user priority assistance', 'Asset tagging and local spare part management'],
      coverage: 'Local Office Workstations, Server Closets, Meeting Rooms',
      image: '/assets/why_client_first.jpg'
    },
    'desktop-laptop-support': {
      id: 'desktop-laptop-support',
      name: 'Desktop & Laptop Support',
      scope: 'Fleet-wide maintenance, hardware diagnosis, display/keyboard repairs, RAM/NVMe upgrades, and standardized OS provisioning for corporate fleets.',
      sla: 'Same-day turnaround for common component swaps; standby loaners provided.',
      deliverables: ['Standardized Windows 11 Pro / macOS image flashing', 'Hardware diagnostics & tier-1 parts replacement', 'Data migration between legacy and new machines', 'Preventive thermal cleaning and fan inspection'],
      coverage: 'Dell, HP, Lenovo, Apple, and ASUS Corporate Workstations',
      image: '/assets/dell_latitude_laptop.jpg'
    },
    'server-network-support': {
      id: 'server-network-support',
      name: 'Server & Network Support',
      scope: 'Specialized systems engineering for enterprise storage arrays, Active Directory domains, virtualization clusters, and switch routing fabrics.',
      sla: 'Critical level-1 incidents resolved with sub-1-hour escalation.',
      deliverables: ['Hypervisor tuning (ESXi, Proxmox, Hyper-V)', 'RAID rebuilds and storage expansion arrays', 'Switch configuration, VLAN, and QoS adjustments', 'Disaster recovery and backup snapshot verification'],
      coverage: 'Datacenter Racks, Virtualization Clusters, Core Switches',
      image: '/assets/datacenter_servers.jpg'
    },
    'network-cabling': {
      id: 'network-cabling',
      name: 'Network Cabling',
      scope: 'Structured cabling for server rooms, workstations, and wireless access points adhering to international EIA/TIA standards.',
      sla: '100% cable run Fluke test certification with zero packet loss guarantee.',
      deliverables: ['Category 6 / 6A copper & single/multi-mode fiber pulling', 'Server rack dressing, cable managers & patch panels', 'Cable pathway conduit & floor raceway installation', 'Full terminal labeling and port mapping documentation'],
      coverage: 'Server Rooms, Open Floor Workstations, Wireless AP Drops',
      image: '/assets/wifi_access_point.jpg'
    },
    'cctv-installation-management': {
      id: 'cctv-installation-management',
      name: 'CCTV installation and Management',
      scope: 'High-definition IP surveillance cameras, Network Video Recorders (NVR), AI perimeter detection, and remote monitoring consoles.',
      sla: '24/7 video recording guarantee with automated storage failover.',
      deliverables: ['4K dome, bullet, and PTZ camera positioning', 'Centralized NVR storage setup with 30–90 days retention', 'Remote mobile and desktop live-view client access', 'Motion detection, face recognition & line-crossing alerts'],
      coverage: 'Premises Entrances, Server Rooms, Work Floors, Warehouses',
      image: '/assets/cctv_surveillance.jpg'
    },
    'firewall-management': {
      id: 'firewall-management',
      name: 'Firewall Management',
      scope: 'Continuous administration, firmware patch application, rule optimization, SSL VPN management, and intrusion prevention policy enforcement.',
      sla: '24/7 threat signature updates and immediate blocking of detected anomalies.',
      deliverables: ['Granular firewall rule creation & least-privilege audits', 'SSL VPN & IPsec user credential management', 'IPS/IDS intrusion detection continuous tuning', 'Automated nightly configuration backups to secure repository'],
      coverage: 'Fortinet FortiGate, Cisco Secure Firewall, Sophos XGS',
      image: '/assets/network_security_firewall.jpg'
    },
    'voip-telecom-support': {
      id: 'voip-telecom-support',
      name: 'VoIP & Telecom Support',
      scope: 'SIP trunk management, IP phone configuration, voice quality optimization (QoS), and carrier coordination for crystal-clear business communication.',
      sla: '99.99% dial tone uptime SLA with jitter below 15ms.',
      deliverables: ['SIP trunking provisioning and DID routing', 'IP desk phone remote auto-provisioning', 'Voice VLAN tagging and bandwidth QoS reservation', 'Audio latency, packet loss, and jitter diagnostics'],
      coverage: 'Carrier SIP Trunks, IP Phones, Softphone Clients',
      image: '/assets/telecom_ip_phones.jpg'
    },
    'pbx-dialer-support': {
      id: 'pbx-dialer-support',
      name: 'PBX & Dialer Support',
      scope: 'Complete administration for on-premises IP-PBX systems, predictive dialers (Vicidial/Asterisk), IVR call flows, and agent call queues.',
      sla: 'Immediate hotline support for dialer drop rate or trunk outages.',
      deliverables: ['Campaign configuration and predictive dialer tuning', 'Interactive Voice Response (IVR) menu design & routing', 'Agent screen-pop CRM integration setup', '100% call recording storage management & archiving'],
      coverage: 'IP-PBX, Vicidial, Asterisk, FreePBX, Call-Center Fleets',
      image: '/assets/ue_telecom_voice.jpg'
    },
    'it-infrastructure-audits': {
      id: 'it-infrastructure-audits',
      name: 'IT Infrastructure Audits',
      scope: 'Comprehensive physical and logical evaluation of your hardware aging, power backups, server room cooling, cable clutter, and network topology.',
      sla: 'Complete written audit dossier delivered within 5 business days.',
      deliverables: ['Hardware warranty and lifecycle status audit', 'Server room power, UPS, and thermal health check', 'Network switch port utilization & redundancy analysis', 'Executive risk summary with actionable upgrade roadmap'],
      coverage: 'Entire Physical IT Infrastructure Estate',
      image: '/assets/why_data_backed.jpg'
    },
    'network-firewall-audits': {
      id: 'network-firewall-audits',
      name: 'Network & Firewall Audits',
      scope: 'Rigorous security evaluation of firewall rule sets, open ports, legacy VPN protocols, VLAN boundaries, and wireless RF leakages.',
      sla: 'Certified cybersecurity assessment with NIST framework alignment.',
      deliverables: ['Firewall shadow and redundant rule identification', 'External perimeter port vulnerability scanning', 'Internal VLAN isolation & segmentation check', 'Prioritized vulnerability remediation checklist'],
      coverage: 'Core Switches, Firewalls, Routers, Wireless Controllers',
      image: '/assets/network_security_firewall.jpg'
    },
    'it-migration-deployment': {
      id: 'it-migration-deployment',
      name: 'IT Migration & Deployment',
      scope: 'End-to-end hardware upgrades, OS rollouts, domain migrations, server virtualization shifts, and zero-loss email/data cutovers.',
      sla: 'Staged weekend migrations ensuring zero interruption to weekday business.',
      deliverables: ['Active Directory and domain controller upgrades', 'Physical-to-Virtual (P2V) server image migrations', 'Mass endpoint OS image deployment (100+ seats)', 'Comprehensive user sanity testing before Monday morning'],
      coverage: 'Servers, Active Directory, Workstations, Cloud SaaS',
      image: '/assets/hpe_proliant_server.jpg'
    },
    'data-wiping-secure-decommissioning': {
      id: 'data-wiping-secure-decommissioning',
      name: 'Data Wiping & Secure Decommissioning',
      scope: 'Cryptographic multi-pass data sanitization and physical destruction adhering to NIST 800-88 and DoD 5220.22-M guidelines for retired media.',
      sla: 'Tamper-evident legal certificate of destruction issued for each serial number.',
      deliverables: ['NIST 800-88 compliant 3-pass disk sanitization', 'Physical hard drive degaussing or mechanical crushing', 'Detailed asset serial number destruction audit log', 'Eco-friendly certified e-waste recycling handling'],
      coverage: 'SAS/SATA Hard Drives, NVMe SSDs, Backup Tapes, Laptops',
      image: '/assets/why_innovation.jpg'
    },
    'office-relocation-it-setup': {
      id: 'office-relocation-it-setup',
      name: 'Office Relocation & IT Setup',
      scope: 'Safe de-racking, climate-controlled transport, structured re-cabling, and reactivation of your entire server room and office desks during corporate moves.',
      sla: 'Executed over weekends with guaranteed readiness by Monday 8:00 AM.',
      deliverables: ['Pre-move physical tagging and port mapping', 'Shock-proof server and storage packaging & transit', 'New facility patch panel termination & rack mounting', 'Desktop workstation setup and connectivity testing'],
      coverage: 'Complete Server Racks, Workstations, Telecom PBX, Printers',
      image: '/assets/ue_hardware_procurement.jpg'
    },
    'emergency-it-support': {
      id: 'emergency-it-support',
      name: 'Emergency IT Support',
      scope: 'Rapid-response engineering taskforce on standby for critical hardware crashes, ransomware incidents, fiber cuts, and phone system blackouts.',
      sla: 'Sub-60 minute emergency technician dispatch or instant remote triage.',
      deliverables: ['Immediate root-cause diagnosis and traffic bypass routing', 'Standby loaner hardware provisioning from central hub', 'Off-hours emergency recovery procedures', 'Post-incident analysis and system hardening report'],
      coverage: 'Core Switches, Firewalls, Server Arrays, Primary Links',
      image: '/assets/why_expertise.jpg'
    },
    '24-5-and-24-7-support': {
      id: '24-5-and-24-7-support',
      name: '24/5 Support and Optional 24/7 Support',
      scope: 'Flexible support packages tailored to your operating hours, ranging from standard weekday business coverage to round-the-clock 365-day NOC monitoring.',
      sla: 'Strict contractual SLA guarantees backed by financial uptime credits.',
      deliverables: ['Custom shift coverage matching your company hours', '24/7/365 Network Operations Center (NOC) oversight', 'Multi-channel ticketing (hotline, email, web portal)', 'Quarterly SLA review meetings with dedicated account manager'],
      coverage: 'Full Organization Technology Ecosystem',
      image: '/assets/ue_amc_maintenance.jpg'
    }
  }), []);

  const currentDetail = servicesData[selectedCategoryId];
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
                    Services & AMC Selection
                  </span>
                  <p className="text-sm font-bold text-slate-900 truncate">
                    {selectedCategoryId === 'all'
                      ? 'Services & AMC Home'
                      : currentCategoryObj?.name || 'All Services'}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileCategoryOpen(!mobileCategoryOpen)}
                  className="px-3.5 py-2 min-h-[40px] rounded-xl bg-white border border-slate-200 text-xs font-semibold text-[#dc2626] shadow-2xs flex items-center gap-1.5 active:scale-95 transition-all shrink-0"
                >
                  <span>{mobileCategoryOpen ? 'Close' : 'Services'}</span>
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
                    Services & AMC Home
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
            {/* Services & AMC Home Link */}
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
                Services & AMC Home
              </button>
            </div>

            {/* Category List (18 Items) */}
            <ul className="space-y-1 max-h-[75vh] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-200">
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

          {/* Right Column: Cisco 3-Card Home OR Rich Service Presentation */}
          <main className="lg:col-span-9">
            
            {/* 1. HOME VIEW: Cisco 3-Card Spotlight + AMC SLA Tiers */}
            {selectedCategoryId === 'all' ? (
              <div className="space-y-12">
                
                {/* 3 Featured Spotlight Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-1">
                  
                  {/* Card 1: AMC SLAs */}
                  <div className="flex flex-col justify-between group">
                    <div>
                      <div className="h-44 sm:h-52 rounded-xl overflow-hidden mb-4 bg-slate-100">
                        <img
                          src="/assets/ue_amc_maintenance.jpg"
                          alt="Annual Maintenance Contracts"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                        SLA-Backed Annual Maintenance
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                        Preventive health checks, standby loaner units, and 2-4 hour onsite SLAs protecting your entire technology estate.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleSelectCategory('amc')}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#dc2626] hover:underline"
                    >
                      <span>Explore AMC contracts</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Card 2: Onsite Engineers */}
                  <div className="flex flex-col justify-between group">
                    <div>
                      <div className="h-44 sm:h-52 rounded-xl overflow-hidden mb-4 bg-slate-100">
                        <img
                          src="/assets/why_client_first.jpg"
                          alt="Onsite IT Engineers"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                        Resident Onsite IT Engineers
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                        Dedicated tier-1 to tier-3 certified systems engineers stationed right inside your facility for immediate hands-on support.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleSelectCategory('onsite-it-engineers')}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#dc2626] hover:underline"
                    >
                      <span>Book onsite engineer</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Card 3: IT Infrastructure Audits */}
                  <div className="flex flex-col justify-between group">
                    <div>
                      <div className="h-44 sm:h-52 rounded-xl overflow-hidden mb-4 bg-slate-100">
                        <img
                          src="/assets/why_data_backed.jpg"
                          alt="IT Infrastructure Audits"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                        Network & Security Audits
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                        Discover open vulnerabilities, aging hardware, and network bottlenecks with an exhaustive 360-degree technical assessment.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleSelectCategory('it-infrastructure-audits')}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#dc2626] hover:underline"
                    >
                      <span>Schedule an audit</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>

                {/* AMC SLA Tiers Showcase */}
                <div className="pt-8 border-t border-slate-100">
                  <div className="mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#dc2626] block">
                      Contract Tiers
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">
                      Standardized AMC Service Level Agreements
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {amcTiers.map((tier, idx) => (
                      <div
                        key={idx}
                        className={`rounded-2xl p-6 border transition-all flex flex-col justify-between ${
                          tier.highlighted
                            ? 'bg-white border-[#dc2626] shadow-md ring-1 ring-[#dc2626]/20'
                            : 'bg-white border-slate-200/90 shadow-2xs hover:shadow-sm'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800">
                              {tier.badge}
                            </span>
                            <span className="text-xs font-semibold text-[#dc2626]">
                              {tier.responseTime}
                            </span>
                          </div>

                          <h4 className="text-base font-bold text-slate-900 mb-2">
                            {tier.name}
                          </h4>

                          <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                            {tier.description}
                          </p>

                          <ul className="space-y-2 mb-6">
                            {tier.features.map((feat, fIdx) => (
                              <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                                <Check className="w-3.5 h-3.5 text-[#dc2626] shrink-0 mt-0.5" />
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <button
                          type="button"
                          onClick={() => onOpenQuickSupport(`AMC Proposal: ${tier.name}`)}
                          className={`w-full py-2.5 rounded-xl text-xs font-bold transition-colors ${
                            tier.highlighted
                              ? 'bg-[#dc2626] hover:bg-[#b91c1c] text-white shadow-soft-sm'
                              : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                          }`}
                        >
                          Request Proposal
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ) : (
              /* 2. CATEGORY VIEW: Dedicated Service Presentation */
              currentDetail && (
                <div className="space-y-8 animate-in fade-in duration-200">
                  
                  {/* Category Title Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                        {currentDetail.name}
                      </h2>
                      <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1.5 mt-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Guaranteed SLA: {currentDetail.sla}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => onOpenQuickSupport(`Service Request: ${currentDetail.name}`)}
                      className="px-5 py-2.5 rounded-full bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold transition-all shadow-soft-sm flex items-center gap-2 self-start sm:self-auto"
                    >
                      <span>Request Service Proposal</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Main Service Card */}
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
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                          Operational Scope
                        </span>
                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                          {currentDetail.scope}
                        </p>
                      </div>

                      {/* Covered Hardware & Systems */}
                      <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                          Systems & Equipment Covered
                        </span>
                        <p className="text-xs sm:text-sm font-semibold text-slate-900">
                          {currentDetail.coverage}
                        </p>
                      </div>

                      {/* Core Deliverables Checklist */}
                      <div className="pt-2 border-t border-slate-100">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-3">
                          Service Deliverables & Commitments
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
                            Require immediate assistance or a tailored SLA quote?
                          </span>
                          <span className="text-xs text-slate-500">
                            Our Pan-India engineering dispatch center connects you with certified technicians within 30 minutes.
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => onOpenQuickSupport(`Enquiry: ${currentDetail.name}`)}
                          className="px-5 py-2 rounded-lg bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold transition-colors whitespace-nowrap"
                        >
                          Contact Service Desk
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
