export interface ProductItem {
  id: string;
  name: string;
  category: 'Computing' | 'Networking' | 'Security' | 'Telecom' | 'Connectivity';
  description: string;
  features: string[];
  specs: string;
  rentalAvailable: boolean;
  image?: string;
  badge?: string;
}

export interface SolutionItem {
  id: string;
  title: string;
  targetAudience: string;
  summary: string;
  deliverables: string[];
  architecturePoints: string[];
  icon: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  scope: string;
  sla: string;
  deliverables: string[];
  coverage: string;
}

export interface RentalTier {
  id: string;
  deviceType: string;
  minDuration: string;
  deploymentTime: string;
  idealFor: string;
  includesSupport: boolean;
}

export interface IndustryItem {
  id: string;
  title: string;
  challenges: string;
  engineeredSolution: string;
  keyProducts: string[];
}

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'laptops-desktops',
    name: 'Laptops & Desktops',
    category: 'Computing',
    description: 'Enterprise-grade workstations, ultrabooks, and desktop fleets engineered for high performance, remote management, and day-to-day corporate productivity.',
    features: ['vPro / TPM 2.0 Hardware Security', 'Pre-configured OS & Domain Join', 'Next-Business-Day Onsite Replacement', 'Standardized Fleet Deployments'],
    specs: 'Intel Core Ultra / AMD Ryzen Pro, 16GB-64GB RAM, NVMe Gen4 Storage',
    rentalAvailable: true,
    image: '/assets/enterprise_laptop_hero.jpg',
    badge: 'Rental Available'
  },
  {
    id: 'servers-storage',
    name: 'Servers & Storage',
    category: 'Computing',
    description: 'Rackmount, tower, and blade servers with enterprise SAN/NAS storage arrays configured for virtualization, mission-critical databases, and private cloud.',
    features: ['Redundant Hot-Swap Power Supplies', 'Hardware RAID Configurations', 'iDRAC / iLO Lights-Out Management', 'Scalable Flash & Hybrid Tiers'],
    specs: 'Dual-Socket Scalable Processors, Up to 2TB ECC DDR5, SAS/NVMe Arrays',
    rentalAvailable: false,
    image: '/assets/datacenter_servers.jpg',
    badge: 'Enterprise Grade'
  },
  {
    id: 'it-hardware-accessories',
    name: 'IT Hardware & Accessories',
    category: 'Computing',
    description: 'Enterprise peripherals, dual-monitor setups, docking stations, KVM consoles, uninterruptible power supplies (UPS), and modular rack components.',
    features: ['Universal Thunderbolt 4 Docks', 'Online Double-Conversion UPS', 'Commercial Monitor Arms & Panels', 'PDU & Rack Cable Trays'],
    specs: 'Tested for continuous 24/7 enterprise duty cycles',
    rentalAvailable: true,
    image: '/assets/ue_hardware_procurement.jpg',
    badge: 'Fast Dispatch'
  },
  {
    id: 'routers-network-switches',
    name: 'Routers & Network Switches',
    category: 'Networking',
    description: 'Layer 2/3 managed switches, PoE+ edge switches, and high-throughput core routers providing high backbone capacity, low latency, and zero-packet loss.',
    features: ['Gigabit & 10G/40G SFP+ Uplinks', 'PoE+ (802.3at) Power Budget', 'VLAN, QoS & LACP Trunking', 'High-Availability Stacking'],
    specs: 'Wire-speed switching fabric up to 176 Gbps with redundant power',
    rentalAvailable: true,
    image: '/assets/switch_cisco_catalyst_9300.jpg',
    badge: 'Core Infrastructure'
  },
  {
    id: 'firewalls-network-security',
    name: 'Firewalls & Network Security',
    category: 'Security',
    description: 'Next-Generation Firewalls (NGFW) with deep packet inspection, automated intrusion prevention (IPS), anti-ransomware filtering, and secure IPsec/SSL VPN tunnels.',
    features: ['Zero-Trust Network Access (ZTNA)', 'SSL Decryption & Application Control', 'High Availability Active-Passive Pairs', 'Centralized Cloud Threat Intelligence'],
    specs: 'Multi-Gigabit threat inspection throughput with real-time telemetry',
    rentalAvailable: true,
    image: '/assets/network_security_firewall.jpg',
    badge: 'Zero-Trust Ready'
  },
  {
    id: 'wifi-wireless-networking',
    name: 'Wi-Fi & Wireless Networking',
    category: 'Networking',
    description: 'High-density enterprise Wi-Fi 6 & Wi-Fi 7 access points, cloud-managed controllers, and seamless roaming architectures for modern distributed campuses.',
    features: ['Multi-User MIMO & OFDMA', 'Seamless 802.11r/k Fast Roaming', 'Guest Captive Portal & WPA3-Enterprise', 'RF Heatmap & Coverage Auditing'],
    specs: 'Supports 500+ concurrent clients per AP with beamforming precision',
    rentalAvailable: true,
    image: '/assets/wifi_tplink_eap670.jpg',
    badge: 'High Density'
  },
  {
    id: 'business-phones-ip-phones',
    name: 'Business Phones & IP Phones',
    category: 'Telecom',
    description: 'Executive HD voice IP desktop phones, Gigabit PoE desk sets, receptionist consoles with expansion modules, and wireless DECT handsets.',
    features: ['Optima HD Voice & Acoustic Shield', 'Gigabit Dual-Port Ethernet with PoE', 'Color Touchscreen & BLF Keys', 'Seamless SIP Trunk Integration'],
    specs: 'Standard SIP 2.0 protocol compatible with all major IP-PBX systems',
    rentalAvailable: true,
    image: '/assets/phone_cisco_8845.jpg',
    badge: 'VoIP Certified'
  },
  {
    id: 'cctv',
    name: 'CCTV Surveillance Systems',
    category: 'Security',
    description: 'Commercial IP surveillance cameras, dome, bullet, and PTZ optics with centralized Network Video Recorders (NVR) and remote multi-site surveillance monitoring.',
    features: ['4K Ultra HD & Starlight Night Vision', 'H.265+ Smart Codec Storage Saving', 'AI Smart Motion & Perimeter Detection', 'Encrypted Remote Live Video Access'],
    specs: 'Surveillance-grade RAID storage with automated 30-90 day archiving',
    rentalAvailable: false,
    image: '/assets/cctv_hikvision_2186_dome.jpg',
    badge: '4K AI Vision'
  },
  {
    id: 'pbx-business-telephony',
    name: 'PBX & Business Telephony',
    category: 'Telecom',
    description: 'On-premise IP-PBX appliances, hybrid telephony servers, and cloud PBX solutions uniting voice, video, IVR menus, call recording, and team collaboration.',
    features: ['Multi-Level Interactive Voice Response (IVR)', 'Automatic Call Distribution (ACD)', 'Voice-to-Email & Call Recording', 'Softphone Apps for iOS, Android & Windows'],
    specs: 'Scalable from 10 extensions to 2,000+ unified enterprise users',
    rentalAvailable: true,
    image: '/assets/telecom_ip_phones.jpg',
    badge: 'Telecom Core'
  },
  {
    id: 'call-centre-dialer-infrastructure',
    name: 'Call Center & Dialer Infrastructure',
    category: 'Telecom',
    description: 'Predictive, progressive, and manual dialers, agent performance dashboards, CRM integration connectors, and multi-tenant telephony infrastructure for BPOs.',
    features: ['Predictive & Auto-Dialing Algorithms', 'Live Call Barging, Whispering & Monitoring', 'Real-Time Queue Analytics & Wallboards', 'Integration with Zoho, Salesforce, Freshdesk'],
    specs: 'Capable of handling hundreds of concurrent outbound and inbound lines',
    rentalAvailable: true,
    image: '/assets/ue_telecom_voice.jpg',
    badge: 'BPO Ready'
  },
  {
    id: 'gsm-gateways-pri-fxo-fxs',
    name: 'GSM Gateways, PRI, FXO & FXS',
    category: 'Telecom',
    description: 'Carrier-grade VoIP gateways bridging GSM/4G SIM channels, traditional analog PSTN lines (FXO/FXS), and digital ISDN PRI/E1 trunks into modern IP networks.',
    features: ['4 to 32 Port 4G/LTE SIM Banks', 'Least Cost Routing (LCR) Rules', 'Hardware Echo Cancellation (DSP)', 'SMS Broadcasting & API Webhooks'],
    specs: 'Compatible with Asterisk, FreePBX, Cisco, Avaya, and Grandstream',
    rentalAvailable: true,
    image: '/assets/ue_telecom_voice.jpg',
    badge: 'Multi-SIM Support'
  },
  {
    id: 'software-business-licences',
    name: 'Software & Business Licences',
    category: 'Security',
    description: 'Authorized corporate licensing for Microsoft 365, Google Workspace, Windows Server CALs, endpoint anti-malware, and remote collaboration suites.',
    features: ['Official Partner Licensing Support', 'License Utilization Audits', 'Automated Renewal Management', 'Cloud Identity & Access Provisioning'],
    specs: 'Volume licensing agreements tailored to organizational headcount',
    rentalAvailable: false,
    image: '/assets/ue_amc_maintenance.jpg',
    badge: 'Tier-1 Partner'
  },
  {
    id: 'ill-leased-line',
    name: 'ILL (Internet Leased Line)',
    category: 'Connectivity',
    description: 'Dedicated 1:1 symmetrical bandwidth leased line connectivity with enterprise-grade SLA, guaranteed latency, and static IP blocks for critical operations.',
    features: ['1:1 Symmetrical Upload & Download', '99.5%+ Uptime Service Level Agreement', 'Dual-Ring Fiber Path Redundancy', '24/7 Managed NOC Monitoring'],
    specs: 'Speeds scalable from 20 Mbps to 1 Gbps with carrier BGP routing',
    rentalAvailable: false,
    image: '/assets/network_security_firewall.jpg',
    badge: '1:1 SLA Dedicated'
  },
  {
    id: 'managed-voip',
    name: 'Managed VOIP',
    category: 'Telecom',
    description: 'Fully hosted and monitored voice-over-IP communication infrastructure, ensuring crystal-clear international calling, crystal audio codecs, and zero jitter.',
    features: ['Dedicated Voice QoS Prioritization', 'Direct DID International Numbers', 'End-to-End Call Encryption (TLS/SRTP)', 'Proactive SIP Health Checks'],
    specs: 'Carrier-grade Session Border Controllers (SBC) for maximum uptime',
    rentalAvailable: true,
    image: '/assets/telecom_ip_phones.jpg',
    badge: 'Crystal HD Voice'
  }
];

export const SOLUTIONS_DATA: SolutionItem[] = [
  {
    id: 'complete-it-infra',
    title: 'Complete IT Infrastructure',
    targetAudience: 'Growing enterprises & corporate headquarters',
    summary: 'Turnkey IT architecture from structural cabling and rack enclosures to computing clusters, virtualization, storage, and centralized endpoint management.',
    deliverables: ['Datacenter & Server Room Design', 'Structured Category 6A / Fiber Cabling', 'High-Density Compute & Storage Deployment', 'Unified Active Directory / Identity Policies'],
    architecturePoints: ['Redundant Core Architecture', 'Centralized Remote Management', 'Scalable Virtualization (VMware/Hyper-V)'],
    icon: 'Server'
  },
  {
    id: 'unified-it-telecom',
    title: 'Unified IT & Telecom Management',
    targetAudience: 'Organizations with dispersed communications',
    summary: 'A unified single-vendor operational model that converges voice telephony, data networks, security firewalls, and workstation support under one cohesive architecture.',
    deliverables: ['Unified IP-PBX & Data Network Convergence', 'Single Point of Escalation for IT & Voice', 'Consolidated Billing & Vendor Coordination', 'Proactive Cross-Domain System Telemetry'],
    architecturePoints: ['QoS-Enforced Voice Routing', 'Unified SLA Management', 'Zero Vendor Finger-Pointing'],
    icon: 'PhoneCall'
  },
  {
    id: 'it-infra-smes',
    title: 'IT Infrastructure for SMEs',
    targetAudience: 'Small and medium business operations (20-150 seats)',
    summary: 'Right-sized, cost-efficient technology foundations designed for rapid deployment, high data resilience, and seamless scalability without enterprise overhead.',
    deliverables: ['Plug-and-play Rack & Edge Networking', 'Hybrid Cloud & Secure Local Storage', 'Endpoint Standardized Workstations', 'Managed Anti-Ransomware & Backups'],
    architecturePoints: ['Budget-Predictable Architecture', 'Fast 48-Hour Turnaround', 'Minimal On-Premises Maintenance'],
    icon: 'Briefcase'
  },
  {
    id: 'multi-location-it',
    title: 'Multi-Location IT Management',
    targetAudience: 'Retail chains, regional branches & multi-facility firms',
    summary: 'Standardized IT blueprints rolled out across multiple geographic locations with secure SD-WAN inter-connectivity, unified security policies, and remote branch support.',
    deliverables: ['SD-WAN Site-to-Site Encrypted Mesh', 'Centralized Branch Firewall Policies', 'Standardized Branch Hardware Kits', 'Coordinated Onsite Dispatch Across Cities'],
    architecturePoints: ['Zero-Touch Branch Provisioning', 'Centralized Telemetry Dashboard', 'Equal Performance Across All Sites'],
    icon: 'Network'
  },
  {
    id: 'call-centre-bpo-infra',
    title: 'Call Center & BPO Infrastructure',
    targetAudience: 'Inbound customer support, outbound dialer centers & BPOs',
    summary: 'High-concurrency voice dialers, multi-agent acoustic workstations, PRI/SIP gateway integration, call recording archives, and failover connectivity for uninterrupted 24/7 call flows.',
    deliverables: ['High-Density Dialer Server Deployment', 'Noise-Canceling Agent Terminal Setup', 'Dual ISP Automatic Link Failover', 'Custom CRM Screen-Pop Telephony Integration'],
    architecturePoints: ['Sub-15ms Voice Latency Architecture', '100% Call Recording Storage Compliance', 'Surge-Ready Agent Scaling'],
    icon: 'Headphones'
  },
  {
    id: 'network-design-implementation',
    title: 'Network Design & Implementation',
    targetAudience: 'New facility setups, campus retrofits & tech upgrades',
    summary: 'Rigorous Layer 1 through Layer 7 engineering including cable layout schematics, wireless RF heatmap modeling, VLAN segmentation, core routing, and switch fabric provisioning.',
    deliverables: ['Comprehensive Site Survey & Blueprints', 'Certified Fiber Optic & Copper Termination', 'L2/L3 Switch VLAN & Routing Configuration', 'Post-Deployment Wi-Fi Spectrum Verification'],
    architecturePoints: ['Clean Modular Rack Cabling', 'ISO-Standard Cable Certification', 'High-Throughput 10Gbps Core Links'],
    icon: 'Cpu'
  },
  {
    id: 'firewall-network-security',
    title: 'Firewall & Network Security',
    targetAudience: 'Regulated industries, legal, financial & corporate data',
    summary: 'Comprehensive perimeter defense, Zero-Trust network segmentation, VPN gateway access for hybrid workforces, and proactive security monitoring against threat vectors.',
    deliverables: ['NGFW Policy Setup & Threat Inspection', 'Multi-Factor Authenticated SSL VPNs', 'Automated Daily Security Backups', 'Quarterly Vulnerability Scanning'],
    architecturePoints: ['Zero-Trust Architecture', 'Real-time Intrusion Prevention', 'Encrypted Remote Tunnels'],
    icon: 'ShieldCheck'
  },
  {
    id: 'workplace-remote-office',
    title: 'Workplace & Remote Office Infrastructure',
    targetAudience: 'Hybrid workforces and distributed teams',
    summary: 'End-to-end device deployment, secure remote MDM enrollment, cloud identity sync, and virtual conferencing setups that keep employees productive anywhere.',
    deliverables: ['Pre-Configured Laptops Shipped Direct to Employees', 'Mobile Device Management (MDM) Setup', 'Secure Home-Office VPN Connectors', 'Video Conference Room Solutions'],
    architecturePoints: ['Zero-Touch Device Enrollment', 'Remote Data Wipe Capabilities', 'Consistent Corporate Security Posture'],
    icon: 'Laptop'
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'amc',
    title: 'Annual Maintenance Contracts (AMC)',
    scope: 'Comprehensive and non-comprehensive contracts covering your entire hardware estate, network infrastructure, and telephony.',
    sla: 'Guaranteed 2 to 4 hour emergency response times with dedicated service engineers.',
    deliverables: ['Preventive quarterly health checks', 'Emergency onsite technician visits', 'Component replacement coverage', 'Regular firmware & patch updates'],
    coverage: 'Laptops, Desktops, Servers, Switches, Routers, PBX, Firewalls'
  },
  {
    id: 'managed-it-telecom',
    title: 'Managed IT and Telecom Services',
    scope: 'Full-spectrum outsourced technology operations. We act as your end-to-end IT department with proactive monitoring and dedicated oversight.',
    sla: '24/5 Standard Support with Optional 24/7 Mission-Critical SLA.',
    deliverables: ['Continuous network & server monitoring', 'Helpdesk ticketing portal with fast resolution', 'Vendor management for ISPs & software', 'Monthly operational review & metrics'],
    coverage: 'End-to-End Enterprise Operations'
  },
  {
    id: 'onsite-remote-engineers',
    title: 'Remote IT Support & Onsite IT Engineers',
    scope: 'Tier 1 to Tier 3 technical resources available via instant remote sessions or stationed directly as dedicated resident engineers inside your offices.',
    sla: 'Instant 15-minute remote response; dedicated resident engineer shifts.',
    deliverables: ['Live desktop troubleshooting via secure agent', 'Resident engineers stationed at your premises', 'Physical hardware swap and cable maintenance', 'VIP user priority executive assistance'],
    coverage: 'Workstations, Peripheral Systems, Local Network'
  },
  {
    id: 'server-network-support',
    title: 'Server & Network Support',
    scope: 'Specialized systems engineering for enterprise storage arrays, Active Directory domains, virtualization clusters, and switch routing fabrics.',
    sla: 'Critical severity level 1 incidents resolved with immediate escalation.',
    deliverables: ['Hypervisor tuning (ESXi, Proxmox, Hyper-V)', 'RAID rebuilds and storage expansion', 'Switch configuration, VLAN, and QoS adjustments', 'Disaster recovery and snapshot maintenance'],
    coverage: 'Datacenter Racks, Virtualization, Core Switches'
  },
  {
    id: 'it-infrastructure-audits',
    title: 'IT Infrastructure & Security Audits',
    scope: 'Deep-dive architectural review of your existing network topology, firewall rulesets, cable integrity, and hardware asset aging.',
    sla: 'Comprehensive written audit report and risk remediation roadmap within 5 business days.',
    deliverables: ['Firewall rules and open port vulnerability analysis', 'Network bottleneck & packet loss diagnostic', 'Hardware end-of-life (EOL) and warranty audit', 'Executive presentation with prioritized fixes'],
    coverage: 'Complete Enterprise Technology Estate'
  },
  {
    id: 'migration-deployment-relocation',
    title: 'IT Migration, Deployment & Office Relocation',
    scope: 'Safe decommission, transport, structured recabling, and rapid reactivation of your complete server room and office workstations during company moves.',
    sla: 'Weekend execution to ensure zero downtime on Monday morning.',
    deliverables: ['Pre-move physical tagging and inventory mapping', 'Safe climate-controlled server transit', 'New office structured cabling & rack mounting', 'Full system sanity testing before business hours'],
    coverage: 'Physical & Logical Office Relocation'
  },
  {
    id: 'data-wiping-decommissioning',
    title: 'Data Wiping & Secure Decommissioning',
    scope: 'Cryptographic data erasure and physical media sanitization adhering to NIST 800-88 standards for retired enterprise storage and laptops.',
    sla: 'Tamper-proof certificate of data destruction provided for compliance records.',
    deliverables: ['NIST 800-88 compliant multi-pass disk wiping', 'Hardware de-racking and asset disposal logging', 'Environmental e-waste recycling handling', 'Legal compliance compliance documentation'],
    coverage: 'Storage Disks, Laptops, Servers, Backup Media'
  },
  {
    id: 'emergency-support',
    title: 'Emergency IT Support (24/5 & 24/7 Optional)',
    scope: 'Rapid intervention team for critical outages, ransomware defense, fiber line cuts, server kernel crashes, and dialer failures.',
    sla: 'Immediate triage with dedicated incident commander dispatch.',
    deliverables: ['Rapid root-cause diagnosis and bypass routing', 'Standby replacement hardware provisioning', 'Off-hours emergency recovery procedures', 'Post-incident analysis and hardening report'],
    coverage: 'Mission-Critical Outages & Hardware Failures'
  }
];

export const RENTAL_DATA: RentalTier[] = [
  {
    id: 'laptop-rental',
    deviceType: 'Enterprise Laptops',
    minDuration: 'Daily, Monthly, or Annual',
    deploymentTime: 'Dispatched within 24–48 hours',
    idealFor: 'Contract staff, temporary projects, remote teams, training workshops',
    includesSupport: true
  },
  {
    id: 'desktop-rental',
    deviceType: 'Commercial Desktop Fleets',
    minDuration: 'Flexible Monthly & Quarterly',
    deploymentTime: 'Bulk delivery available',
    idealFor: 'Back-office operations, call centers, accounting desks, testing labs',
    includesSupport: true
  },
  {
    id: 'server-rental',
    deviceType: 'High-Performance Rack Servers',
    minDuration: 'Quarterly to Multi-Year',
    deploymentTime: 'Custom configured to order',
    idealFor: 'Compute spikes, disaster recovery testing, ERP migrations, temporary staging',
    includesSupport: true
  },
  {
    id: 'network-rental',
    deviceType: 'Routers, Switches & Firewalls',
    minDuration: 'Event, Project, or Term Rental',
    deploymentTime: 'Ready-to-deploy pre-configured kits',
    idealFor: 'Exhibitions, corporate events, temporary construction sites, branch pop-ups',
    includesSupport: true
  },
  {
    id: 'telecom-rental',
    deviceType: 'IP Phones & GSM Gateways',
    minDuration: 'Short-term to Long-term',
    deploymentTime: 'Plug-and-play SIP pre-provisioned',
    idealFor: 'Call center ramp-ups, seasonal sales campaigns, pop-up branches',
    includesSupport: true
  },
  {
    id: 'bulk-deployment',
    deviceType: 'Turnkey 50–500+ Seat Deployments',
    minDuration: 'Custom Enterprise Agreement',
    deploymentTime: 'Phased rollout with dedicated onsite logistics',
    idealFor: 'New facility setups, BPO launches, large enterprise hiring batches',
    includesSupport: true
  }
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: 'smes',
    title: 'Small & Medium Enterprises (SMEs)',
    challenges: 'Limited internal IT staff, need for predictable technology costs, and risk of data loss or cybersecurity exposure.',
    engineeredSolution: 'Turnkey IT bundles with bundled AMC, cloud backup, next-gen firewall, and responsive remote helpdesk.',
    keyProducts: ['Laptops & Desktops', 'Firewalls & Network Security', 'Managed IT Support']
  },
  {
    id: 'call-centres-bpos',
    title: 'Call Centers & BPOs',
    challenges: 'High concurrency call traffic, strict voice latency thresholds, 24/7 uptime needs, and rapid agent headcount scaling.',
    engineeredSolution: 'Predictive dialer infrastructure, low-latency PRI/SIP gateways, noise-canceling telecom hardware, and equipment rental for fast ramps.',
    keyProducts: ['PBX & Business Telephony', 'Call Center & Dialer Infra', 'Equipment Rental']
  },
  {
    id: 'manufacturing-industrial',
    title: 'Manufacturing & Industrial Companies',
    challenges: 'Harsh physical environments, expansive shop floors requiring rugged networking, CCTV perimeter security, and inter-warehouse connectivity.',
    engineeredSolution: 'Industrial switches, long-range wireless APs, structured fiber backbones, high-definition CCTV, and onsite maintenance engineers.',
    keyProducts: ['Routers & Network Switches', 'CCTV Surveillance', 'Network Cabling']
  },
  {
    id: 'logistics-transportation',
    title: 'Logistics & Transportation',
    challenges: 'Geographically dispersed dispatch hubs, barcode terminal connectivity, reliable ILL leased line connectivity, and real-time CCTV monitoring.',
    engineeredSolution: 'High-availability SD-WAN mesh across warehouses, uninterrupted leased lines (ILL), and centralized telecom PBX extensions.',
    keyProducts: ['ILL Leased Lines', 'GSM Gateways', 'Multi-Location SD-WAN']
  },
  {
    id: 'multi-location-businesses',
    title: 'Multi-Location Businesses',
    challenges: 'Fragmented local IT vendors across cities, inconsistent security configurations, and difficulty enforcing company-wide IT compliance.',
    engineeredSolution: 'Single centralized AMC contract with nationwide hardware dispatch, standardized network equipment, and unified cloud monitoring.',
    keyProducts: ['Multi-Location IT Management', 'Unified AMC Contracts', 'Firewalls']
  },
  {
    id: 'professional-services',
    title: 'Professional Services',
    challenges: 'Law firms, financial consultants, and agencies requiring ironclad data confidentiality, remote collaboration, and zero device downtime.',
    engineeredSolution: 'vPro hardware-encrypted ultrabooks, secure SSL VPN access, automated cloud data backup, and executive priority white-glove support.',
    keyProducts: ['Laptops & Desktops', 'Zero-Trust Firewalls', 'Cloud Licences']
  },
  {
    id: 'remote-offices-distributed',
    title: 'Remote Offices & Distributed Workforces',
    challenges: 'Onboarding remote employees in different regions, device security away from office networks, and asset recovery upon offboarding.',
    engineeredSolution: 'Complete device provisioning and drop-shipping to employee doorsteps with pre-loaded security, MDM enrollment, and remote support.',
    keyProducts: ['Workplace Remote Infrastructure', 'Laptop Rentals', 'Remote IT Support']
  }
];

export const CORE_PILLARS = [
  {
    title: 'Enterprise IT Infrastructure',
    tagline: 'Compute, Storage & Workspace Fleets',
    description: 'Tier-1 laptops, desktops, and datacenter rack servers built for demanding enterprise workloads.',
    metric: '99.95% Availability',
    icon: 'Layers'
  },
  {
    title: 'Core Networking & Security',
    tagline: 'Switches, Firewalls & Fiber Backbone',
    description: 'Wire-speed switching fabrics and Next-Gen Firewalls delivering Zero-Trust perimeter protection.',
    metric: '10Gbps+ Core Fabric',
    icon: 'ShieldCheck'
  },
  {
    title: 'Unified Telecom & VoIP',
    tagline: 'PBX, IP Phones & BPO Call Systems',
    description: 'Carrier-grade SIP telephony, automated dialers, and enterprise IP phones connecting teams globally.',
    metric: 'Carrier-Grade SIP',
    icon: 'PhoneCall'
  },
  {
    title: 'Managed AMC & Rapid Support',
    tagline: 'Onsite Engineers & 24/5 - 24/7 SLAs',
    description: 'Guaranteed rapid resolution, preventive audits, and certified engineers backing your operation.',
    metric: '2-4 Hour Rapid SLA',
    icon: 'Clock'
  }
];
