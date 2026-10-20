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
  whyExists: string;
  benefits: { title: string; desc: string }[];
  metrics: string[];
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

  // Detailed data for all 18 categories with strategic business purpose
  const servicesData: Record<string, ServiceDetail> = useMemo(() => ({
    'amc': {
      id: 'amc',
      name: 'Annual Maintenance Contracts (AMC)',
      scope: 'Comprehensive and non-comprehensive contracts covering your entire hardware estate, network infrastructure, and telephony.',
      sla: 'Guaranteed 2 to 4 hour emergency response times with dedicated primary and secondary certified service engineers.',
      metrics: ['2-4 Hour Emergency SLA', 'Free Standby Loaner Hardware', 'Quarterly Preventive Health Checks'],
      whyExists: 'Hardware component failures are inevitable, but unexpected downtime paralyzes business revenue. Our AMC contracts transform unpredictable repair costs and chaotic emergency calls into guaranteed contractual uptime with dedicated certified engineers.',
      benefits: [
        { title: '2-4 Hour Emergency Dispatch', desc: 'Direct onsite technician deployment for critical hardware failures.' },
        { title: 'Free Standby Loaner Hardware', desc: 'Eliminates business downtime while components are being repaired.' },
        { title: '40% Lower Maintenance Cost', desc: 'Saves substantially over uncontracted ad-hoc emergency service bills.' }
      ],
      deliverables: ['Preventive quarterly health checks', 'Emergency onsite technician visits', 'Component replacement coverage & loaner units', 'Regular firmware & security patch updates'],
      coverage: 'Laptops, Desktops, Servers, Switches, Routers, PBX, Firewalls',
      image: '/assets/ue_amc_maintenance.jpg'
    },
    'managed-it-telecom': {
      id: 'managed-it-telecom',
      name: 'Managed IT and Telecom Services',
      scope: 'Full-spectrum outsourced technology operations. We act as your end-to-end IT department with proactive monitoring and dedicated oversight.',
      sla: '24/5 Standard Support with Optional 24/7 Mission-Critical SLA monitoring.',
      metrics: ['24/7 NOC Telemetry', 'Single SLA Accountability', 'Zero Internal HR Overhead'],
      whyExists: 'Retaining an in-house team of network engineers, sysadmins, and telecom experts creates massive payroll and recruitment overhead. We provide a complete outsourced IT department with continuous proactive telemetry and single-source accountability.',
      benefits: [
        { title: 'Single Point of Escalation', desc: 'One number to call for desktops, servers, firewalls, and voice systems.' },
        { title: 'Proactive 24/7 Monitoring', desc: 'Detects and resolves bottlenecks before office staff experience drops.' },
        { title: 'Zero Internal HR Overhead', desc: 'Full IT department coverage at a predictable flat monthly expense.' }
      ],
      deliverables: ['Continuous network & server monitoring', 'Helpdesk ticketing portal with fast SLA resolution', 'ISP and vendor coordination for leased lines', 'Monthly operational review & executive metrics'],
      coverage: 'End-to-End Enterprise Operations & Telephony',
      image: '/assets/why_expertise.jpg'
    },
    'remote-it-support': {
      id: 'remote-it-support',
      name: 'Remote IT Support',
      scope: 'Fast-response tier-1 to tier-3 helpdesk support resolving operating system, driver, VPN, email client, and software errors via encrypted remote sessions.',
      sla: 'Instant 15-minute average remote response time.',
      metrics: ['15-Min Response Time', '82% First-Call Resolution', 'Encrypted Remote Tunnel'],
      whyExists: 'When an employee encounters an OS error, VPN drop, or software crash, waiting hours for an onsite technician kills productivity. Our technicians connect within 15 minutes to diagnose and resolve software and network issues instantly.',
      benefits: [
        { title: 'Sub-15 Minute Response', desc: 'Instant encrypted remote login resolves desktop errors with zero travel wait.' },
        { title: '82% First-Call Resolution', desc: 'Resolves VPN, email, driver, and software faults on the initial call.' },
        { title: 'Encrypted Session Privacy', desc: 'Enterprise-grade remote access with end-to-end security compliance.' }
      ],
      deliverables: ['Live desktop troubleshooting via secure agent', 'User onboarding & software license provisioning', 'Virus & malware remediation', 'Domain join & password reset automation'],
      coverage: 'Workstations, Laptops, Mobile Devices, Cloud Applications',
      image: '/assets/enterprise_laptop_hero.jpg'
    },
    'onsite-it-engineers': {
      id: 'onsite-it-engineers',
      name: 'Onsite IT Engineers',
      scope: 'Certified desktop and network support specialists stationed directly at your company offices or dispatched on-demand for physical intervention.',
      sla: 'Permanent full-time resident shifts or 2-hour emergency dispatch.',
      metrics: ['Stationed On-Premises', 'VIP Executive Support', 'Zero-Minute Travel Latency'],
      whyExists: 'Critical server closets, executive suites, and physical infrastructure cannot be serviced through remote screens alone. We station dedicated resident engineers directly on your floor to handle physical interventions and hands-on maintenance.',
      benefits: [
        { title: 'Zero Travel Delay', desc: 'Resident certified engineers stationed directly on your corporate floor.' },
        { title: 'VIP Executive Support', desc: 'Immediate white-glove assistance for boardroom AV and executive desks.' },
        { title: 'Hardware Spares Management', desc: 'Real-time asset tagging, physical cable swaps, and local inventory.' }
      ],
      deliverables: ['Dedicated resident engineer stationed at premises', 'Physical hardware swap and cable maintenance', 'Hands-on executive VIP user priority assistance', 'Asset tagging and local spare part management'],
      coverage: 'Local Office Workstations, Server Closets, Meeting Rooms',
      image: '/assets/why_client_first.jpg'
    },
    'desktop-laptop-support': {
      id: 'desktop-laptop-support',
      name: 'Desktop & Laptop Support',
      scope: 'Fleet-wide maintenance, hardware diagnosis, display/keyboard repairs, RAM/NVMe upgrades, and standardized OS provisioning for corporate fleets.',
      sla: 'Same-day turnaround for common component swaps; standby loaners provided.',
      metrics: ['Same-Day Turnaround', 'Certified OEM Parts', 'Fleet Health Maintenance'],
      whyExists: 'A corporate fleet with broken keyboards, failing SSDs, or corrupted operating systems directly halts daily business. We provide standardized imaging, thermal servicing, and certified parts replacement to maintain uninterrupted employee output.',
      benefits: [
        { title: 'Same-Day Turnaround', desc: 'Fast component swaps with certified OEM parts (Dell, HP, Lenovo, Apple).' },
        { title: 'Standardized OS Provisioning', desc: 'Secure Windows 11 / macOS imaging with automated domain enrollment.' },
        { title: 'Preventive Thermal Servicing', desc: 'Cleaning and diagnostic checks prevent throttling and extend machine life.' }
      ],
      deliverables: ['Standardized Windows 11 Pro / macOS image flashing', 'Hardware diagnostics & tier-1 parts replacement', 'Data migration between legacy and new machines', 'Preventive thermal cleaning and fan inspection'],
      coverage: 'Dell, HP, Lenovo, Apple, and ASUS Corporate Workstations',
      image: '/assets/dell_latitude_laptop.jpg'
    },
    'server-network-support': {
      id: 'server-network-support',
      name: 'Server & Network Support',
      scope: 'Specialized systems engineering for enterprise storage arrays, Active Directory domains, virtualization clusters, and switch routing fabrics.',
      sla: 'Critical level-1 incidents resolved with sub-1-hour escalation.',
      metrics: ['<1 Hr Priority SLA', 'Enterprise SAN & Hypervisor', 'Snapshot Recovery Drills'],
      whyExists: 'Datacenters host critical customer databases and enterprise systems where an unexpected crash can cost millions. We provide specialized hypervisor, SAN storage, and routing administration backed by sub-1-hour escalation SLAs.',
      benefits: [
        { title: 'Sub-1-Hour Critical Escalation', desc: 'Rapid priority response for hypervisor, storage, and switch disruptions.' },
        { title: 'Virtualization & SAN Tuning', desc: 'Expert administration of VMware ESXi, Proxmox, and Hyper-V clusters.' },
        { title: 'Automated Snapshot Drills', desc: 'Daily backup validation ensures rapid disaster recovery readiness.' }
      ],
      deliverables: ['Hypervisor tuning (ESXi, Proxmox, Hyper-V)', 'RAID rebuilds and storage expansion arrays', 'Switch configuration, VLAN, and QoS adjustments', 'Disaster recovery and backup snapshot verification'],
      coverage: 'Datacenter Racks, Virtualization Clusters, Core Switches',
      image: '/assets/datacenter_servers.jpg'
    },
    'network-cabling': {
      id: 'network-cabling',
      name: 'Network Cabling',
      scope: 'Structured cabling for server rooms, workstations, and wireless access points adhering to international EIA/TIA standards.',
      sla: '100% cable run Fluke test certification with zero packet loss guarantee.',
      metrics: ['Fluke Certified 100%', 'Cat6A / Single-Mode Fiber', 'Color-Coded Patching'],
      whyExists: 'High-speed switches cannot perform if the underlying physical cables are poorly terminated or uncertified. We build immaculate Layer-1 structured cabling systems tested to ISO/IEC standards and backed by certified Fluke test dossiers.',
      benefits: [
        { title: '100% Fluke Test Certified', desc: 'Rigorous DTX/DSX cable verification guarantees zero dropped packets.' },
        { title: 'Color-Coded Modular Racks', desc: 'Clean patch dressing and labeled ports eliminate cable closet clutter.' },
        { title: '25-Year Component Warranty', desc: 'Enterprise-grade structured cabling certified to international standards.' }
      ],
      deliverables: ['Category 6 / 6A copper & single/multi-mode fiber pulling', 'Server rack dressing, cable managers & patch panels', 'Cable pathway conduit & floor raceway installation', 'Full terminal labeling and port mapping documentation'],
      coverage: 'Server Rooms, Open Floor Workstations, Wireless AP Drops',
      image: '/assets/wifi_access_point.jpg'
    },
    'cctv-installation-management': {
      id: 'cctv-installation-management',
      name: 'CCTV installation and Management',
      scope: 'High-definition IP surveillance cameras, Network Video Recorders (NVR), AI perimeter detection, and remote monitoring consoles.',
      sla: '24/7 video recording guarantee with automated storage failover.',
      metrics: ['4K Ultra-HD Clarity', '30-90 Day NVR Retention', 'AI Perimeter Detection'],
      whyExists: 'Physical security vulnerabilities and unrecorded incidents expose facilities to severe loss and liability. We engineer 4K IP surveillance networks with AI perimeter alerts and secure remote viewing to protect your workplace round the clock.',
      benefits: [
        { title: '4K Ultra-HD Clarity', desc: 'Night-vision coverage eliminates surveillance blind spots across facilities.' },
        { title: 'AI Perimeter Alerts', desc: 'Automated tripwires send instant mobile alerts for unauthorized entries.' },
        { title: '30 to 90-Day Retention', desc: 'Tamper-proof NVR storage arrays ensure reliable video archives.' }
      ],
      deliverables: ['4K dome, bullet, and PTZ camera positioning', 'Centralized NVR storage setup with 30–90 days retention', 'Remote mobile and desktop live-view client access', 'Motion detection, face recognition & line-crossing alerts'],
      coverage: 'Premises Entrances, Server Rooms, Work Floors, Warehouses',
      image: '/assets/cctv_surveillance.jpg'
    },
    'firewall-management': {
      id: 'firewall-management',
      name: 'Firewall Management',
      scope: 'Continuous administration, firmware patch application, rule optimization, SSL VPN management, and intrusion prevention policy enforcement.',
      sla: '24/7 threat signature updates and immediate blocking of detected anomalies.',
      metrics: ['24/7 Signature Updates', 'Zero-Trust Rule Auditing', 'Multi-Factor SSL VPN'],
      whyExists: 'Outdated or misconfigured firewalls provide a false sense of security while leaving open backdoors for attackers. We maintain strict Zero-Trust rules, 24/7 threat signature updates, and encrypted remote VPNs to keep corporate data locked down.',
      benefits: [
        { title: 'Continuous Threat Defense', desc: '24/7 signature updates block zero-day exploits and ransomware.' },
        { title: 'Least-Privilege Rule Audits', desc: 'Regular policy reviews close open ports and eliminate obsolete access.' },
        { title: 'Multi-Factor SSL VPNs', desc: 'Secure, encrypted gateway portals for hybrid and remote employees.' }
      ],
      deliverables: ['Granular firewall rule creation & least-privilege audits', 'SSL VPN & IPsec user credential management', 'IPS/IDS intrusion detection continuous tuning', 'Automated nightly configuration backups to secure repository'],
      coverage: 'Fortinet FortiGate, Cisco Secure Firewall, Sophos XGS',
      image: '/assets/network_security_firewall.jpg'
    },
    'voip-telecom-support': {
      id: 'voip-telecom-support',
      name: 'VoIP & Telecom Support',
      scope: 'SIP trunk management, IP phone configuration, voice quality optimization (QoS), and carrier coordination for crystal-clear business communication.',
      sla: '99.99% dial tone uptime SLA with jitter below 15ms.',
      metrics: ['99.99% Dial Tone SLA', '<15ms Ultra-Low Jitter', 'Carrier Coordination'],
      whyExists: 'Dropped calls and distorted audio instantly destroy credibility during critical client conversations. We implement strict QoS voice reservations, SIP trunk balancing, and carrier coordination to ensure crystal-clear enterprise audio.',
      benefits: [
        { title: '99.99% Dial Tone SLA', desc: 'Carrier-grade voice clarity with latency and jitter kept under 15ms.' },
        { title: 'Bandwidth QoS Reservation', desc: 'Guarantees call quality so downloads never choke telephone conversations.' },
        { title: 'Direct Carrier Escalation', desc: 'We interface directly with Airtel, Tata, and Jio to fix leased lines.' }
      ],
      deliverables: ['SIP trunking provisioning and DID routing', 'IP desk phone remote auto-provisioning', 'Voice VLAN tagging and bandwidth QoS reservation', 'Audio latency, packet loss, and jitter diagnostics'],
      coverage: 'Carrier SIP Trunks, IP Phones, Softphone Clients',
      image: '/assets/telecom_ip_phones.jpg'
    },
    'pbx-dialer-support': {
      id: 'pbx-dialer-support',
      name: 'PBX & Dialer Support',
      scope: 'Complete administration for on-premises IP-PBX systems, predictive dialers (Vicidial/Asterisk), IVR call flows, and agent call queues.',
      sla: 'Immediate hotline support for dialer drop rate or trunk outages.',
      metrics: ['Zero-Downtime Vicidial', 'CRM Screen-Pop Sync', '100% Call Archiving'],
      whyExists: 'Call center operations freeze when dialers malfunction, leaving hundreds of agents idle. We maintain high-concurrency Vicidial and Asterisk clusters, dynamic IVR flows, and automated call recording to keep agent queues productive.',
      benefits: [
        { title: 'Zero-Downtime Dialer Pools', desc: 'Vicidial and Asterisk server clusters handle high-volume calling.' },
        { title: 'CRM Screen-Pop Sync', desc: 'Instant customer record display speeds up agent workflow and talk time.' },
        { title: '100% Call Recording Vault', desc: 'Automated local and cloud archiving satisfies compliance requirements.' }
      ],
      deliverables: ['Campaign configuration and predictive dialer tuning', 'Interactive Voice Response (IVR) menu design & routing', 'Agent screen-pop CRM integration setup', '100% call recording storage management & archiving'],
      coverage: 'IP-PBX, Vicidial, Asterisk, FreePBX, Call-Center Fleets',
      image: '/assets/ue_telecom_voice.jpg'
    },
    'it-infrastructure-audits': {
      id: 'it-infrastructure-audits',
      name: 'IT Infrastructure Audits',
      scope: 'Comprehensive physical and logical evaluation of your hardware aging, power backups, server room cooling, cable clutter, and network topology.',
      sla: 'Complete written audit dossier delivered within 5 business days.',
      metrics: ['Full Physical Audit', 'Thermal & UPS Health', '5-Day Dossier Handover'],
      whyExists: 'Most enterprises only discover failing UPS batteries or overheating servers after an outage strikes. We provide comprehensive preventive diagnostics covering thermal health, power backups, and switch topology to stop outages before they occur.',
      benefits: [
        { title: 'Full Physical Health Audit', desc: 'Exposes single points of failure in power, cooling, and network links.' },
        { title: 'Actionable Upgrade Roadmap', desc: 'Prioritized risk report with executive budget recommendations.' },
        { title: '5-Day Written Dossier', desc: 'Comprehensive technical documentation delivered within 5 business days.' }
      ],
      deliverables: ['Hardware warranty and lifecycle status audit', 'Server room power, UPS, and thermal health check', 'Network switch port utilization & redundancy analysis', 'Executive risk summary with actionable upgrade roadmap'],
      coverage: 'Entire Physical IT Infrastructure Estate',
      image: '/assets/why_data_backed.jpg'
    },
    'network-firewall-audits': {
      id: 'network-firewall-audits',
      name: 'Network & Firewall Audits',
      scope: 'Rigorous security evaluation of firewall rule sets, open ports, legacy VPN protocols, VLAN boundaries, and wireless RF leakages.',
      sla: 'Certified cybersecurity assessment with NIST framework alignment.',
      metrics: ['NIST & ISO 27001 Aligned', 'Shadow Rule Elimination', 'Vulnerability Remediated'],
      whyExists: 'Firewall rules become cluttered over time, creating accidental vulnerabilities and performance bottlenecks. We scan your network perimeter, eliminate redundant rules, and verify VLAN segmentation against NIST cybersecurity guidelines.',
      benefits: [
        { title: 'NIST & ISO 27001 Aligned', desc: 'Comprehensive perimeter vulnerability scanning and compliance checks.' },
        { title: 'Shadow Rule Elimination', desc: 'Cleans bloated firewall tables to boost network throughput.' },
        { title: 'VLAN Boundary Verification', desc: 'Ensures strict network isolation between departments and guest Wi-Fi.' }
      ],
      deliverables: ['Firewall shadow and redundant rule identification', 'External perimeter port vulnerability scanning', 'Internal VLAN isolation & segmentation check', 'Prioritized vulnerability remediation checklist'],
      coverage: 'Core Switches, Firewalls, Routers, Wireless Controllers',
      image: '/assets/network_security_firewall.jpg'
    },
    'it-migration-deployment': {
      id: 'it-migration-deployment',
      name: 'IT Migration & Deployment',
      scope: 'End-to-end hardware upgrades, OS rollouts, domain migrations, server virtualization shifts, and zero-loss email/data cutovers.',
      sla: 'Staged weekend migrations ensuring zero interruption to weekday business.',
      metrics: ['Zero Business Downtime', 'Weekend Execution Window', 'Mass Fleet Imaging'],
      whyExists: 'Upgrading servers or replacing 200 employee laptops during work hours causes massive productivity loss. We execute complex migrations over weekends so employees return on Monday morning with zero operational disruption.',
      benefits: [
        { title: 'Zero Weekday Downtime', desc: 'Staged weekend transitions ensure zero disruption to business hours.' },
        { title: 'Active Directory Upgrades', desc: 'Seamless domain migrations and Physical-to-Virtual (P2V) shifts.' },
        { title: 'Mass Fleet Image Flashing', desc: 'Pre-configures 100+ workstations simultaneously for immediate use.' }
      ],
      deliverables: ['Active Directory and domain controller upgrades', 'Physical-to-Virtual (P2V) server image migrations', 'Mass endpoint OS image deployment (100+ seats)', 'Comprehensive user sanity testing before Monday morning'],
      coverage: 'Servers, Active Directory, Workstations, Cloud SaaS',
      image: '/assets/hpe_proliant_server.jpg'
    },
    'data-wiping-secure-decommissioning': {
      id: 'data-wiping-secure-decommissioning',
      name: 'Data Wiping & Secure Decommissioning',
      scope: 'Cryptographic multi-pass data sanitization and physical destruction adhering to NIST 800-88 and DoD 5220.22-M guidelines for retired media.',
      sla: 'Tamper-evident legal certificate of destruction issued for each serial number.',
      metrics: ['NIST 800-88 Certified', 'Legal Certificate Issued', 'Zero Data Leak Risk'],
      whyExists: 'Retiring old machines without certified data wiping invites catastrophic corporate data leaks and legal penalties. We execute NIST 800-88 compliant sanitization and issue tamper-evident serial-numbered certificates for legal compliance.',
      benefits: [
        { title: 'NIST 800-88 Certified', desc: 'Cryptographic multi-pass sanitization guarantees data is unrecoverable.' },
        { title: 'Tamper-Evident Certificates', desc: 'Legal documentation of destruction protecting corporate liability.' },
        { title: 'Eco-Friendly E-Waste Buyback', desc: 'Responsible recycling with residual cash value recovery.' }
      ],
      deliverables: ['NIST 800-88 compliant 3-pass disk sanitization', 'Physical hard drive degaussing or mechanical crushing', 'Detailed asset serial number destruction audit log', 'Eco-friendly certified e-waste recycling handling'],
      coverage: 'SAS/SATA Hard Drives, NVMe SSDs, Backup Tapes, Laptops',
      image: '/assets/why_innovation.jpg'
    },
    'office-relocation-it-setup': {
      id: 'office-relocation-it-setup',
      name: 'Office Relocation & IT Setup',
      scope: 'Safe de-racking, climate-controlled transport, structured re-cabling, and reactivation of your entire server room and office desks during corporate moves.',
      sla: 'Executed over weekends with guaranteed readiness by Monday 8:00 AM.',
      metrics: ['Monday 8 AM Readiness', 'Shock-Proof Logistics', 'Pre-Move Port Mapping'],
      whyExists: 'Moving office locations risks dropped hardware and mislabeled cables that can delay business for days. We manage turnkey relocations: safe de-racking, shock-proof transport, structured re-cabling, and guaranteed Monday 8:00 AM readiness.',
      benefits: [
        { title: 'Monday 8:00 AM Readiness', desc: 'Executed over weekends with desktops and server racks fully tested.' },
        { title: 'Pre-Move Port Mapping', desc: 'Precise hardware labeling eliminates reconnection and cable errors.' },
        { title: 'Shock-Proof Transit Logistics', desc: 'Specialized handling protects delicate server clusters and storage.' }
      ],
      deliverables: ['Pre-move physical tagging and port mapping', 'Shock-proof server and storage packaging & transit', 'New facility patch panel termination & rack mounting', 'Desktop workstation setup and connectivity testing'],
      coverage: 'Complete Server Racks, Workstations, Telecom PBX, Printers',
      image: '/assets/ue_hardware_procurement.jpg'
    },
    'emergency-it-support': {
      id: 'emergency-it-support',
      name: 'Emergency IT Support',
      scope: 'Rapid-response engineering taskforce on standby for critical hardware crashes, ransomware incidents, fiber cuts, and phone system blackouts.',
      sla: 'Sub-60 minute emergency technician dispatch or instant remote triage.',
      metrics: ['<60 Min Dispatch', 'Emergency Loaner Hub', '24/7 Incident Hotline'],
      whyExists: 'When core switches fail or fiber lines are cut, waiting for ordinary business hours stalls revenue. Our emergency taskforce dispatches within 60 minutes with standby loaner hardware to restore operational stability immediately.',
      benefits: [
        { title: 'Sub-60 Minute Dispatch', desc: 'Rapid technician deployment for server crashes and fiber link cuts.' },
        { title: 'Standby Loaner Hardware Hub', desc: 'Temporary routers and switches deployed immediately to bypass outages.' },
        { title: 'Post-Mortem Root Cause Fix', desc: 'In-depth analysis prevents repeat failure and hardens system defenses.' }
      ],
      deliverables: ['Immediate root-cause diagnosis and traffic bypass routing', 'Standby loaner hardware provisioning from central hub', 'Off-hours emergency recovery procedures', 'Post-incident analysis and system hardening report'],
      coverage: 'Core Switches, Firewalls, Server Arrays, Primary Links',
      image: '/assets/why_expertise.jpg'
    },
    '24-5-and-24-7-support': {
      id: '24-5-and-24-7-support',
      name: '24/5 Support and Optional 24/7 Support',
      scope: 'Flexible support packages tailored to your operating hours, ranging from standard weekday business coverage to round-the-clock 365-day NOC monitoring.',
      sla: 'Strict contractual SLA guarantees backed by financial uptime credits.',
      metrics: ['24/7/365 NOC Oversight', 'Contractual Uptime SLA', 'Custom Shift Matching'],
      whyExists: 'Modern 24/7 businesses and offshore teams cannot afford IT gaps outside standard office hours. We provide flexible shift coverage backed by 24/7/365 NOC monitoring and contractual uptime SLAs for continuous peace of mind.',
      benefits: [
        { title: 'Continuous NOC Oversight', desc: '24/7/365 monitoring alerts technicians to network drops while you sleep.' },
        { title: 'Contractual Uptime SLA', desc: 'Financially backed support guarantees rapid resolution times.' },
        { title: 'Custom Operating Shifts', desc: 'Shift schedules precisely match your business and branch working hours.' }
      ],
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
                <div className="space-y-6 animate-in fade-in duration-200">
                  
                  {/* Category Title Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        {currentDetail.name}
                      </h2>
                      <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1.5 mt-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Guaranteed SLA: {currentDetail.sla}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => onOpenQuickSupport(`Service Request: ${currentDetail.name}`)}
                      className="px-5 py-2.5 rounded-full bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold transition-all shadow-soft-sm flex items-center gap-2 self-start sm:self-auto shrink-0"
                    >
                      <span>Request Service Proposal</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Minimized Split Hero Card: Operational Scope + Compact Framed Image + Key Metrics */}
                  <div className="bg-gradient-to-br from-slate-50 via-white to-slate-50 border border-slate-200/90 rounded-2xl p-5 sm:p-7 shadow-xs">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                      
                      {/* Left: Scope Summary & Metric Pills */}
                      <div className="flex-1 space-y-3.5">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-4 bg-[#173B67] rounded-full inline-block" />
                          <h3 className="text-sm sm:text-base font-bold text-[#173B67] tracking-tight">
                            Operational Scope & SLA Delivery
                          </h3>
                        </div>
                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                          {currentDetail.scope}
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
                          Field-Certified SLA
                        </span>
                      </div>

                    </div>
                  </div>

                  {/* Why This Service Exists Section (Strategic Enterprise Purpose) */}
                  <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 space-y-5 shadow-xs cisco-reveal">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-4 bg-[#dc2626] rounded-full inline-block" />
                      <h3 className="text-base sm:text-lg font-bold text-[#173B67] tracking-tight">
                        Why This Service Exists at Unified Enterprise
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {currentDetail.whyExists}
                    </p>

                    {/* Key Strategic Benefits Solved */}
                    <div className="pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-2 mb-3.5">
                        <span className="w-1.5 h-4 bg-[#173B67] rounded-full inline-block" />
                        <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wide text-[#173B67]">
                          Strategic Advantages & Pain Points Solved
                        </h4>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 cisco-reveal cisco-stagger">
                        {currentDetail.benefits.map((benefit, idx) => (
                          <div 
                            key={idx} 
                            className="bg-slate-50/80 hover:bg-slate-50 border border-slate-200/80 rounded-xl p-4 transition-colors space-y-1.5"
                          >
                            <div className="flex items-center gap-1.5 text-xs font-bold text-[#173B67]">
                              <CheckCircle2 className="w-4 h-4 text-[#dc2626] shrink-0" />
                              <span>{benefit.title}</span>
                            </div>
                            <p className="text-xs text-slate-600 leading-relaxed">
                              {benefit.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Systems Covered & Service Deliverables */}
                  <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 space-y-6 shadow-xs cisco-reveal">
                    
                    {/* Covered Hardware & Systems */}
                    <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-1.5 h-3.5 bg-[#173B67] rounded-full inline-block" />
                        <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wide text-[#173B67]">
                          Systems & Equipment Covered Under Contract
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm font-semibold text-slate-800">
                        {currentDetail.coverage}
                      </p>
                    </div>

                    {/* Core Deliverables Checklist */}
                    <div className="pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-1.5 h-4 bg-[#dc2626] rounded-full inline-block" />
                        <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wide text-[#173B67]">
                          Service Deliverables & Contractual Commitments
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
                          Require immediate assistance or a tailored SLA quote?
                        </span>
                        <span className="text-xs text-slate-500">
                          Our Pan-India engineering dispatch center connects you with certified technicians within 30 minutes.
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => onOpenQuickSupport(`Enquiry: ${currentDetail.name}`)}
                        className="px-5 py-2.5 rounded-lg bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold transition-colors whitespace-nowrap"
                      >
                        Contact Service Desk
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
