export interface EscalationLevel {
  level: string;
  role: string;
  badge: string;
  desc: string;
  accentColor: string;
  badgeColor: string;
}

export const SLA_ESCALATION_LEVELS: EscalationLevel[] = [
  {
    level: 'LEVEL 1',
    role: 'L1 Support Engineer',
    badge: 'First-Line Triage',
    desc: 'Immediate onsite and remote triage, user workstation help, desktop peripherals, printer connections, and basic Wi-Fi connectivity.',
    accentColor: 'border-t-blue-500',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200'
  },
  {
    level: 'LEVEL 2',
    role: 'L2 Senior Systems Tech',
    badge: 'Senior Technical Operations',
    desc: 'Server diagnostics, managed switch VLAN isolation, Next-Gen firewall rule management, PBX routing, and complex incident resolution.',
    accentColor: 'border-t-cyan-500',
    badgeColor: 'bg-cyan-50 text-cyan-700 border-cyan-200'
  },
  {
    level: 'LEVEL 3',
    role: 'Technical Team Lead',
    badge: 'Architecture Supervisor',
    desc: 'Emergency engineer field dispatch, architecture coordination, vendor escalation (OEM warranty claims), and cross-system incident analysis.',
    accentColor: 'border-t-emerald-500',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
  },
  {
    level: 'LEVEL 4',
    role: 'Head of Operations',
    badge: 'Contractual SLA Oversight',
    desc: 'Direct operational oversight, priority hardware buffer allocation, standby unit release, and strict contractual SLA enforcement.',
    accentColor: 'border-t-amber-500',
    badgeColor: 'bg-amber-50 text-amber-800 border-amber-200'
  },
  {
    level: 'LEVEL 5',
    role: 'Executive Leadership (CEO)',
    badge: 'Mission-Critical Governance',
    desc: 'Direct executive intervention and management priority for high-severity or mission-critical corporate infrastructure emergencies.',
    accentColor: 'border-t-red-500',
    badgeColor: 'bg-red-50 text-[#dc2626] border-red-200'
  }
];

export interface ServiceItem {
  id: string;
  name: string;
  badge: string;
  idealFor: string;
  heroSubtitle: string;
  heroParagraph: string;
  valuePills: string[];
  sla: string;
  metrics: string[];
  coverage: string;
  image: string;
  comparisonData: {
    traditionalTitle: string;
    traditionalPoints: string[];
    convergedTitle: string;
    convergedPoints: string[];
  };
  coreAdvantages: {
    title: string;
    desc: string;
  }[];
  handoverChecklist: string[];
  deepDive: {
    title: string;
    readTime: string;
    paragraphs: string[];
  };
  authorizedOem: string;
}

export const SERVICES_DATA: Record<string, ServiceItem> = {
  'amc': {
    id: 'amc',
    name: 'Annual Maintenance Contracts (AMC)',
    badge: 'COMPREHENSIVE & NON-COMPREHENSIVE COVERAGE',
    idealFor: 'Enterprises, Corporate Offices, Manufacturing Facilities & BPOs Managing IT Fleets',
    heroSubtitle: 'Guaranteed 2 to 4 Hour Onsite SLA, Preventive Quarterly Health Checks & Buffer Spares',
    heroParagraph: 'Transform unpredictable repair costs and chaotic emergency calls into contractual uptime. Unified Enterprise delivers complete physical and operational maintenance for your computers, laptops, servers, switches, and voice systems. We provide scheduled quarterly preventive tune-ups, standby loaner units during component repair, and dedicated L1/L2 certified engineers with guaranteed response SLAs.',
    valuePills: ['2-4 Hour Emergency Onsite SLA', 'Free Standby Loaner Hardware', 'Quarterly Preventive Health Audits'],
    sla: 'Guaranteed 2 to 4 Hour Emergency Response',
    metrics: ['Sub-4hr Onsite SLA', '100% Spares Coverage', '5-Tier Escalation Path'],
    coverage: 'Laptops, Desktops, Servers, SAN Storage, Switches, Routers, PBX, Firewalls',
    image: '/assets/ue_amc_support.jpg',
    comparisonData: {
      traditionalTitle: 'Traditional Ad-Hoc / Local Repair Setup',
      traditionalPoints: [
        'Unpredictable Invoices: Random local repair technicians charge exorbitant ad-hoc fees for emergency callouts.',
        'Lengthy Business Downtime: Waiting days for spare parts or motherboard repairs leaves staff idle and unproductive.',
        'Zero Accountability: Technicians blame your software or power lines with no SLA commitments or penalty clauses.'
      ],
      convergedTitle: 'Unified Enterprise Contracted AMC Model',
      convergedPoints: [
        'Fixed Predictable Budget: Comprehensive contracts cover labor, routine servicing, and genuine OEM spare parts.',
        'Instant Hot-Swap Buffer: Pre-staged standby loaner laptops, desktops, and switches keep operations active during repairs.',
        'Guaranteed Contractual SLA: 2 to 4 hour emergency onsite arrival backed by our transparent 5-tier escalation path.'
      ]
    },
    coreAdvantages: [
      {
        title: 'Dedicated Certified Engineers',
        desc: 'Assigned primary and secondary L1/L2 engineers who know your office network, security policies, and hardware setup intimately.'
      },
      {
        title: 'Standby Buffer Inventory',
        desc: 'We maintain on-site and regional warehouse buffer stock of power supplies, RAM, SSDs, keyboards, and loaner machines.'
      },
      {
        title: 'Proactive Quarterly Maintenance',
        desc: 'Routine internal fan cleaning, thermal paste refresh, OS security patching, and drive health diagnostics prevent sudden failures.'
      }
    ],
    handoverChecklist: [
      'Comprehensive physical estate audit and serialized hardware register setup.',
      'Signed SLA contract specifying 2 to 4 hour emergency dispatch commitments.',
      'Quarterly preventive maintenance visit calendar with executive sign-off sheets.',
      'Access to Unified Enterprise multi-channel ticketing portal and dedicated account manager.'
    ],
    deepDive: {
      title: 'Architecting IT Resiliency: How Enterprise AMCs Eliminate Hidden Downtime Costs and Hardware Lifespan Degradation',
      readTime: '4 min read',
      paragraphs: [
        'Operating corporate IT without a structured Annual Maintenance Contract (AMC) is one of the most expensive financial risks a business can take. When an unmanaged server power supply blows, an office core switch ports burn out, or 10 laptops blue-screen during month-end billing, companies scramble for ad-hoc neighborhood computer repair shops. Unverified technicians often introduce non-OEM duplicate parts, void manufacturer support, and take days to diagnose root causes, leaving entire office departments paralyzed.',
        'Unified Enterprise provides SLA-backed contractual governance through Comprehensive and Non-Comprehensive AMCs. Under our Comprehensive AMC, all labor, emergency visits, component repairs, and genuine OEM replacement parts (SSDs, RAM, motherboards, fans, power supplies) are 100% covered under a predictable quarterly or annual fee. For companies maintaining direct manufacturer warranties on newer equipment, our Non-Comprehensive AMC provides unlimited certified engineer dispatch, OS patching, and network optimization.',
        'Crucially, our service delivery incorporates an immediate hot-swap loaner program: if an executive laptop or mission-critical switch requires bench repair, our engineer delivers and configures a pre-staged standby loaner unit on the spot, ensuring your employees continue working with zero productivity loss while repairs proceed.'
      ]
    },
    authorizedOem: 'Dell Technologies, HP Commercial, Lenovo Commercial, Cisco Systems, Fortinet, Matrix Comsec'
  },

  'managed-it-telecom': {
    id: 'managed-it-telecom',
    name: 'Managed IT and Telecom Services',
    badge: 'END-TO-END OUTSOURCED OPERATIONS & NOC',
    idealFor: 'Growing Mid-Market Enterprises & Companies Without an Internal IT Department',
    heroSubtitle: 'Complete Technology Operations: 24/7 Monitoring, Voice PBX Governance & Single Partner Accountability',
    heroParagraph: 'Hiring separate in-house network administrators, desktop technicians, and telecom specialists creates unsustainable payroll overhead. Unified Enterprise acts as your outsourced IT and Telecom department. We manage your cloud PBX, employee laptops, server clusters, network switches, and internet leased lines under continuous proactive monitoring and guaranteed multi-tier SLAs.',
    valuePills: ['Complete Outsourced IT Operations', '24/7 NOC Telemetry Oversight', 'Zero Internal HR Payroll Overhead'],
    sla: '24/5 Business Hours with Optional 24/7 NOC Monitoring',
    metrics: ['24/7 Telemetry', 'Zero HR Overhead', 'Single Point of Contact'],
    coverage: 'End-to-End Enterprise IT, IP-PBX, Wi-Fi, Cloud & Leased Lines',
    image: '/assets/ue_amc_support.jpg',
    comparisonData: {
      traditionalTitle: 'Fragmented Internal IT / Multi-Vendor Overhead',
      traditionalPoints: [
        'Costly Internal Payroll: Paying separate salaries, benefits, and recruiting fees for sysadmins, telecom, and helpdesk staff.',
        'Vendor Blame Game: Phone vendors blame your internet router; broadband providers blame your PBX when calls drop.',
        'Reactive Firefighting: Problems are only addressed after employees complain about sluggish systems or downtime.'
      ],
      convergedTitle: 'Unified Enterprise Managed Services Model',
      convergedPoints: [
        'Predictable Flat Monthly Cost: A full multi-tiered technical team (L1 to L3) at a fraction of full-time employee overhead.',
        'Single Accountable Partner: One contract covers desk phones, core switches, cloud servers, and ISP leased lines.',
        'Proactive Telemetry Oversight: 24/7 automated monitoring resolves latency spikes and disk capacity before outages hit.'
      ]
    },
    coreAdvantages: [
      {
        title: 'Converged Voice & IT Governance',
        desc: 'We manage both your computer networks and your office phone systems, ensuring QoS voice priority without vendor disputes.'
      },
      {
        title: 'Single Point of Escalation',
        desc: 'One dedicated service desk number and ticketing portal for every technology issue across all departments.'
      },
      {
        title: 'Vendor Leased-Line Management',
        desc: 'We coordinate directly with Airtel, Tata, and Jio to diagnose and resolve ISP fiber cuts and routing latency.'
      }
    ],
    handoverChecklist: [
      'Full IT and telecom operational onboarding with asset discovery and network topology mapping.',
      'Deployment of proactive monitoring agents across all servers, switches, and gateway appliances.',
      'Corporate helpdesk portal access with user email and WhatsApp ticketing integration.',
      'Monthly executive IT health reporting detailing ticket resolution velocity and uptime percentages.'
    ],
    deepDive: {
      title: 'The Modern Managed IT Paradigm: How Converging Voice and Data Under One Provider Reduces Overhead by 40%',
      readTime: '4 min read',
      paragraphs: [
        'In traditional enterprise setups, companies manage technology in silos: desktop PCs are handled by one local vendor, office intercoms and PBX by a telephone contractor, and internet leased lines by an external telecom representative. When call drops or slow ERP connections occur, each vendor points fingers at the other. Meanwhile, executive management wastes hours coordinating between contractors while payroll continues to burn.',
        'Unified Enterprise eliminates this division through our Managed IT and Telecom service framework. We assume total operational ownership of your technology estate. Our network operations team configures Layer-3 Quality of Service (DiffServ QoS) to ensure critical voice calls take priority over bulk software updates, while our systems engineers manage active directory policies, employee onboarding, and cloud backups.',
        'By partnering with Unified Enterprise, organizations gain the collective expertise of certified network architects, cybersecurity specialists, and telecom engineers without the friction of managing an expensive internal IT hierarchy.'
      ]
    },
    authorizedOem: 'Dell, HP Commercial, Fortinet, Matrix Comsec, Cisco Systems, Aruba Instant On'
  },

  'remote-it-support': {
    id: 'remote-it-support',
    name: 'Remote IT Support',
    badge: 'RAPID HELP DESK & 15-MINUTE FIRST RESPONSE',
    idealFor: 'Distributed Workforces, Remote Employees, Regional Branches & Corporate Desktops',
    heroSubtitle: 'Instant Remote Helpdesk, Multi-Channel Ticketing & 15-Minute Critical First Response',
    heroParagraph: 'Eliminate hours of waiting for a technician to travel across the city. Unified Enterprise provides instant, secure remote helpdesk support for your office and remote employees. Through enterprise encrypted remote access tools, our certified technicians resolve software glitches, email configuration errors, VPN dropouts, and printer issues within minutes.',
    valuePills: ['15-Minute First Response SLA', 'Multi-Channel Helpdesk Ticketing', 'Encrypted Remote Screen Session'],
    sla: 'Sub-15 Minute Ticket Triage & Remote Connection',
    metrics: ['85% First-Contact Resolution', '15-Min Response', 'Zero Travel Delay'],
    coverage: 'Windows, macOS, Linux, Outlook, Office 365, VPN & Peripheral Drivers',
    image: '/assets/why_innovation.jpg',
    comparisonData: {
      traditionalTitle: 'Traditional Onsite-Only IT Support',
      traditionalPoints: [
        'Delayed Assistance: Technicians take 2 to 4 hours navigating city traffic to fix simple software or email glitches.',
        'Lost Employee Hours: Staff members sit idle unable to bill clients or submit invoices while waiting for physical help.',
        'Unmanaged Ticketing: Requests sent over WhatsApp or phone calls get lost without tracking or SLA accountability.'
      ],
      convergedTitle: 'Unified Enterprise Remote Helpdesk Model',
      convergedPoints: [
        'Instant Connection: Certified engineers securely access user screens within 15 minutes of ticket generation.',
        'High First-Contact Resolution: Over 85% of software, email, driver, and VPN problems solved on the very first call.',
        'Transparent Helpdesk Portal: Track ticket statuses, resolution times, and employee satisfaction in real time.'
      ]
    },
    coreAdvantages: [
      {
        title: 'Enterprise Encrypted Access',
        desc: 'Zero-trust remote support sessions requiring explicit employee permission with full audit trail logging.'
      },
      {
        title: 'Multi-Channel Ticket Logging',
        desc: 'Employees raise tickets via email, dedicated phone hotline, web portal, or integrated corporate chat.'
      },
      {
        title: 'Automated Patch Management',
        desc: 'Silent background deployment of OS updates, antivirus definitions, and productivity software without interrupting users.'
      }
    ],
    handoverChecklist: [
      'Deployment of secure lightweight remote support agents across corporate laptops and desktops.',
      'Employee onboarding guide with quick-dial support phone numbers and ticketing email addresses.',
      'Customized escalation workflows for VIP executives and mission-critical accounting workstations.',
      'Monthly helpdesk analytics reporting detailing average resolution time and common incident categories.'
    ],
    deepDive: {
      title: 'Scaling Distributed Workforces: Achieving 85% First-Contact Resolution Through Enterprise Remote Helpdesk Governance',
      readTime: '4 min read',
      paragraphs: [
        'With modern hybrid and distributed work models, waiting for an IT technician to physically visit an office desk is an outdated, costly practice. Over 80% of daily IT support tickets (such as Outlook profile corruptions, network drive disconnections, VPN client misconfigurations, or printer spooler errors) are strictly software-level issues that do not require physical screwdriver interventions.',
        'Unified Enterprise deploys an enterprise-grade remote support infrastructure that connects certified L1 and L2 technicians directly to employee screens within minutes. Every remote session utilizes 256-bit AES encryption with multi-factor authorization and explicit user consent prompts, ensuring corporate compliance and data privacy.',
        'For issues that cannot be resolved remotely (such as physical hardware damage or severe motherboard failure), our remote desk automatically coordinates with our nationwide on-site engineer dispatch network, transitioning the ticket seamlessly to physical technician deployment without the user having to re-explain their problem.'
      ]
    },
    authorizedOem: 'Microsoft 365, Google Workspace, AnyDesk Enterprise, TeamViewer Tensor, Splashtop'
  },

  'onsite-it-engineers': {
    id: 'onsite-it-engineers',
    name: 'Onsite IT Engineers',
    badge: 'RESIDENT & DISPATCHED HARDWARE SPECIALISTS',
    idealFor: 'Corporate Head Offices, Multi-Floor Campuses, Call Centers & Industrial Plants',
    heroSubtitle: 'Dedicated Resident Engineers Stationed at Your Facility or Dispatched on Demand',
    heroParagraph: 'Ensure immediate hands-on technical support for your office staff, conference rooms, and server infrastructure. Unified Enterprise stations full-time, dedicated L1, L2, and L3 Resident Engineers directly inside your facility, or provides scheduled on-demand visits. Our engineers handle desktop setups, boardroom video meetings, network switch port patching, and server room hardware maintenance.',
    valuePills: ['Dedicated Resident Engineers', 'Immediate In-Person Troubleshooting', 'Boardroom & Event AV Support'],
    sla: 'Immediate On-Premises Escalation / Scheduled On-Demand Visits',
    metrics: ['Zero Commute Delay', 'L1-L3 Certified', 'Permanent Onsite Backup'],
    coverage: 'Physical Server Rooms, Employee Workstations, Boardrooms, Racks & Cables',
    image: '/assets/about_team_culture.jpg',
    comparisonData: {
      traditionalTitle: 'Unreliable Local Freelance Technicians',
      traditionalPoints: [
        'Inconsistent Skill Sets: Freelancers lack enterprise certifications and frequently misconfigure core switch VLANs.',
        'High Absenteeism: Independent technicians fail to arrive when sick with zero backup coverage for your office.',
        'No Long-Term Vision: Local repairmen treat symptoms without maintaining cabling ledgers or hardware inventories.'
      ],
      convergedTitle: 'Unified Enterprise Resident Engineer Model',
      convergedPoints: [
        'Certified Enterprise Talent: Thoroughly vetted, background-checked engineers certified in Dell, Cisco, and Microsoft.',
        'Guaranteed Standby Replacement: If your assigned resident engineer takes leave, we immediately dispatch a certified backup.',
        'Structured Infrastructure Ownership: Continuous asset tracking, server room hygiene, and cable management documentation.'
      ]
    },
    coreAdvantages: [
      {
        title: 'Permanent Onsite Presence',
        desc: 'Engineers walk directly to employee desks within seconds to solve laptop, printer, or peripheral problems in person.'
      },
      {
        title: 'Executive Boardroom Concierge',
        desc: 'Pre-meeting AV checks, video conferencing setup, and active standby during critical executive leadership calls.'
      },
      {
        title: 'Server Room Physical Custody',
        desc: 'Routine inspection of rack temperatures, UPS battery indicators, and physical cable labeling.'
      }
    ],
    handoverChecklist: [
      'Dedicated Resident Engineer deployment agreement detailing daily working hours and scope of responsibilities.',
      'Certified standby replacement protocol ensuring 100% staff continuity during employee leave.',
      'Daily physical maintenance checklist covering server room temperature logs and backup checks.',
      'Weekly operational review between your management and Unified Enterprise Account Team.'
    ],
    deepDive: {
      title: 'The Value of On-Premises IT: Why High-Velocity Organizations Depend on Dedicated Resident Engineers',
      readTime: '4 min read',
      paragraphs: [
        'In high-pressure corporate environments (such as financial trading desks, legal offices, call floors, and manufacturing plant administration), remote support cannot replace the physical presence of a skilled technician. When an executive boardroom presentation fails to connect to the display screen, an office printer jams with sensitive client contracts, or a server rack begins beeping due to an overheating power supply, companies need immediate hands-on action.',
        'Unified Enterprise provides dedicated Resident Engineers who integrate directly into your daily operations. Our engineers are trained in both enterprise hardware maintenance and corporate etiquette, providing friendly, professional assistance to staff members while adhering to strict security protocols.',
        'Crucially, our client organizations avoid the administrative headaches of recruiting, payroll, and benefits for IT technicians. If an assigned resident engineer takes annual leave or falls ill, Unified Enterprise automatically dispatches a fully briefed, certified standby engineer from our technical pool, ensuring your facility is never left without technical coverage.'
      ]
    },
    authorizedOem: 'Dell OptiPlex, HP EliteBook, Lenovo ThinkPad, Cisco Switches, Logitech Rally Boardrooms'
  },

  'desktop-laptop-support': {
    id: 'desktop-laptop-support',
    name: 'Desktop & Laptop Support',
    badge: 'COMMERCIAL FLEET HARDWARE & OS MAINTENANCE',
    idealFor: 'Enterprises Managing Mixed PC Fleets (Dell, HP, Lenovo, Acer, Apple Mac)',
    heroSubtitle: 'Complete Fleet Lifecycle: OS Imaging, BitLocker Encryption, Component Upgrades & Repairs',
    heroParagraph: 'Keep your employee computer fleet running at peak performance. Unified Enterprise provides comprehensive maintenance for desktop PCs and laptops. We handle standardized corporate OS imaging, BitLocker/FileVault hardware encryption, thermal fan servicing, broken screen and keyboard repairs, and high-speed NVMe SSD and RAM expansions that double workstation speed.',
    valuePills: ['Corporate OS Zero-Touch Imaging', 'Hardware Upgrades (RAM/SSD)', 'Physical Screen & Keyboard Repairs'],
    sla: '4-Hour Turnaround on Routine Repairs / Standby Loaner Swaps',
    metrics: ['24-Hour Buffer Replacement', '100% BitLocker Enforced', 'Double Fleet Lifespan'],
    coverage: 'Dell Latitude/OptiPlex, HP EliteBook/ProDesk, Lenovo ThinkPad, Apple MacBook',
    image: '/assets/enterprise_laptop_hero.jpg',
    comparisonData: {
      traditionalTitle: 'Fragmented Consumer Laptop Servicing',
      traditionalPoints: [
        'Retail Consumer Centers: Taking company laptops to crowded commercial retail centers takes 10 to 14 days for basic repairs.',
        'Data Privacy Vulnerability: Consumer shops access laptops without non-disclosure agreements, risking intellectual property leaks.',
        'Incompatible Operating Systems: Non-standardized OS installations cause constant printer and domain login errors.'
      ],
      convergedTitle: 'Unified Enterprise Fleet Governance Model',
      convergedPoints: [
        'Dedicated Enterprise Repair Lab: Corporate turnaround times with genuine OEM parts and standby replacement units.',
        'Strict Data Protection: Full-disk BitLocker/FileVault encryption enforced prior to any hardware maintenance.',
        'Standardized Corporate Image: Every machine re-imaged with corporate security baselines and unified domain policies.'
      ]
    },
    coreAdvantages: [
      {
        title: 'Thermal & Fan Overhauls',
        desc: 'Routine physical cleaning of cooling fins and fresh thermal paste application prevents processor throttling and overheating.'
      },
      {
        title: 'High-ROI Component Boosts',
        desc: 'Cloning sluggish hard drives to fast NVMe solid-state drives and maxing out RAM adds 2–3 extra years of life to existing laptops.'
      },
      {
        title: 'Accidental Damage Repair',
        desc: 'Rapid replacement of broken displays, sticky keyboards, faulty hinges, and swollen batteries.'
      }
    ],
    handoverChecklist: [
      'Comprehensive laptop fleet diagnostic report detailing battery health, storage wear, and thermal status.',
      'Deployment of standardized corporate Windows 11 / macOS golden images across all machines.',
      'Centralized BitLocker recovery key escrow and antivirus management enrollment.',
      'Fleet maintenance agreement covering physical repairs and component upgrades.'
    ],
    deepDive: {
      title: 'Extending Commercial PC Usability: Maximizing Fleet ROI Through Proactive Thermal Care and Storage Upgrades',
      readTime: '4 min read',
      paragraphs: [
        'Modern enterprise laptops and desktops represent a major capital investment. However, after 2 to 3 years of daily corporate use, employee machines often begin to lag: cooling channels collect airborne lint and dust, manufacturer thermal paste hardens, and mechanical drives or early SATA SSDs experience performance decay. Many organizations assume these machines must be scrapped, budgeting lakhs for unnecessary replacements.',
        'Unified Enterprise implements a systematic fleet rejuvenation strategy. In our enterprise hardware lab or right at your facility, our technicians conduct non-destructive hardware refreshes: disassembling machines to clean fans, applying aerospace-grade thermal interface materials, and cloning existing operating systems onto high-speed Gen4 NVMe SSDs while expanding RAM.',
        'This procedure doubles operational benchmark speeds and extends computer usability by 24 to 36 months at roughly 15% of the cost of new equipment. Combined with our standardized corporate OS imaging and BitLocker encryption governance, your enterprise achieves maximum capital efficiency.'
      ]
    },
    authorizedOem: 'Dell Latitude & Precision, HP EliteBook & ZBook, Lenovo ThinkPad T/X Series, Apple MacBook Pro'
  },

  'server-network-support': {
    id: 'server-network-support',
    name: 'Server & Network Support',
    badge: 'CORE COMPUTE, STORAGE & SWITCHING SLA',
    idealFor: 'Data Centers, Corporate Server Rooms, Virtualized Clusters & High-Density Facilities',
    heroSubtitle: 'Mission-Critical Server Upgrades, SAN Storage Maintenance & L2/L3 Switch VLAN Management',
    heroParagraph: 'Ensure 99.99% uptime for your core line-of-business applications and central data storage. Unified Enterprise maintains enterprise rackmount servers (Dell PowerEdge, HPE ProLiant), SAN/NAS storage arrays, and core L2/L3 managed network switches. We handle RAID rebuilds, hot-swap PSU replacements, VMware/Hyper-V hypervisor tuning, and switch VLAN segmentation.',
    valuePills: ['RAID Diagnostic & Drive Rebuilds', 'VMware & Hyper-V Hypervisor Tuning', 'Core L2/L3 VLAN Trunking Support'],
    sla: 'Sub-2 Hour Emergency Response for P1 Server & Switch Outages',
    metrics: ['99.99% Core Uptime', 'Zero-Loss RAID Rebuilds', 'Redundant Power SLAs'],
    coverage: 'Dell PowerEdge, HPE ProLiant, Synology/QNAP NAS, Cisco Catalyst, Aruba CX',
    image: '/assets/real_datacenter_servers.jpg',
    comparisonData: {
      traditionalTitle: 'Ad-Hoc Server Room Management',
      traditionalPoints: [
        'Unmonitored RAID Arrays: Silent drive failures in RAID 5/6 go unnoticed until a second drive dies, destroying corporate data.',
        'Unbalanced Power Phases: Overloaded server rack PDUs trip during peak hours, shutting down central accounting databases.',
        'Network Broadcast Storms: Unmanaged switches lack Spanning Tree Protocol (STP), causing catastrophic loop freezes.'
      ],
      convergedTitle: 'Unified Enterprise Server & Network Model',
      convergedPoints: [
        'Proactive Hardware Telemetry: IPMI/iDRAC/iLO monitoring alerts our NOC to failing drives and thermal spikes immediately.',
        'Engineered Redundancy: Dual redundant power supplies routed through separate UPS phases prevent single-point failures.',
        'Hardened Layer-2/3 Switching: Rapid Spanning Tree (RSTP), loop protection, and dynamic VLANs isolate traffic cleanly.'
      ]
    },
    coreAdvantages: [
      {
        title: 'Zero-Downtime Component Swaps',
        desc: 'Hot-swapping faulty hard drives, redundant power supplies, and chassis fans while servers remain fully operational.'
      },
      {
        title: 'Hypervisor Virtualization Tuning',
        desc: 'Optimizing resource allocation for virtual machines (VMs) on VMware ESXi and Microsoft Hyper-V to eliminate CPU bottlenecks.'
      },
      {
        title: 'SAN/NAS High-Speed Backbones',
        desc: 'Configuring 10GbE and 25GbE optical fiber trunks connecting storage arrays to compute servers for instantaneous data transfers.'
      }
    ],
    handoverChecklist: [
      '3D server rack elevation diagram and serialized component configuration audit.',
      'Active iDRAC / iLO out-of-band management configuration for remote emergency diagnostics.',
      'Comprehensive RAID array health certification and automated hot-spare configuration.',
      'Core switch VLAN topology map and port allocation manifest.'
    ],
    deepDive: {
      title: 'Engineering 99.99% Infrastructure Uptime: Hardware Telemetry, Virtualization Clusters & RAID Resiliency',
      readTime: '4 min read',
      paragraphs: [
        'Modern enterprise operations depend fundamentally on the uninterrupted reliability of core compute and storage hardware. When an enterprise database server freezes or an office core switch drops its routing tables, all business activities (including accounting billing, warehouse inventory picking, and branch synchronization) grind to a complete halt.',
        'Unified Enterprise applies strict systems engineering to server and network maintenance. We utilize out-of-band management controllers (Dell iDRAC, HPE iLO) configured with automated telemetry forwarding. If a cooling fan slows below threshold RPMs, a power supply voltage fluctuates, or a SAS drive registers SMART predictive failure errors, our NOC is alerted instantly, allowing our engineers to dispatch replacement components before a fatal outage occurs.',
        'Furthermore, we specialize in high-availability virtualization. By clustering physical servers running VMware vSphere or Microsoft Hyper-V with shared storage failover, we ensure that if a physical server motherboard fails, all running virtual machines automatically migrate to secondary clustered nodes within seconds, guaranteeing transparent operational continuity.'
      ]
    },
    authorizedOem: 'Dell PowerEdge R660/R760, HPE ProLiant DL380, Cisco Catalyst 9200/9300, Aruba CX 6200, Synology Enterprise'
  },

  'network-cabling': {
    id: 'network-cabling',
    name: 'Network Cabling',
    badge: 'CERTIFIED CAT6A COPPER & FIBER OPTICS',
    idealFor: 'New Facilities, Office Expansions, Multi-Floor Campuses & Server Room Overhauls',
    heroSubtitle: 'Fluke DSX-8000 Certified Structured Cabling, Fiber Backbones & Rack Cable Cleanup',
    heroParagraph: 'Amateur network wiring and tangled server rack cabling cause persistent data packet drops, video meeting freezes, and phantom connection issues. Unified Enterprise designs and installs certified Category 6A structured copper and multi-mode fiber optic cabling backbones. We test 100% of cable drops with laboratory-grade Fluke CableAnalyzers and completely overhaul messy existing server rooms.',
    valuePills: ['100% Solid Bare Copper (No CCA)', 'Fluke DSX-8000 Certified Reports', 'Messy Spaghetti Rack Cleanups'],
    sla: 'Fluke-Certified Full Gigabit / 10-Gigabit Pass Performance',
    metrics: ['Fluke Certified', 'Zero CCA Guarantee', '10-Gigabit Ready'],
    coverage: 'Category 6A, Cat6, OM3/OM4 Fiber Optics, Patch Panels, Server Racks & Riser Trunks',
    image: '/assets/ue_network_design.jpg',
    comparisonData: {
      traditionalTitle: 'Amateur / Low-Bid Cabling Work',
      traditionalPoints: [
        'Cheap CCA Wire: Copper-Clad Aluminum (CCA) cables introduce severe resistance, heat buildup, and packet loss.',
        'Tangled Spaghetti Racks: Unlabeled, messy cable bundles that nobody can trace, leading to accidental disconnects.',
        'Zero Certification: Contractors test with basic $10 continuity lights that fail to detect high-frequency crosstalk.'
      ],
      convergedTitle: 'Unified Enterprise Certified Cabling Model',
      convergedPoints: [
        '100% Solid Bare Copper: Genuine Category 6A cabling supporting true 10Gbps transmission speeds and PoE++ power.',
        'Modular Organized Racks: Color-coded patch cords, vertical cable managers, and clean laser-etched port labels.',
        'Fluke DSX Test Documentation: Individual printed laboratory diagnostic reports proving return loss and NEXT compliance.'
      ]
    },
    coreAdvantages: [
      {
        title: 'Physical Cable Route Surveys',
        desc: 'Our engineers personally inspect office floor plans, ceiling voids, and riser ducts to ensure optimal pathway routing.'
      },
      {
        title: 'Existing Rack Overhauls',
        desc: 'We trace messy existing cables, re-terminate bad keystone jacks, install modular managers, and label all ports neatly.'
      },
      {
        title: 'High-Power PoE++ Compatibility',
        desc: 'Heavy-gauge solid copper wiring safely powers high-draw Wi-Fi 6 access points, PTZ CCTV cameras, and IP desk phones.'
      }
    ],
    handoverChecklist: [
      'CAD architectural cabling pathway schematics and rack elevation diagrams.',
      'Individual Fluke DSX-8000 CableAnalyzer certified test reports for every installed port.',
      'Port-to-desk cross-connect mapping ledger for simple future administration.',
      '25-year structural cabling component warranty documentation.'
    ],
    deepDive: {
      title: 'Layer-1 Precision: Why Fluke-Certified Cat6A Structured Cabling is the Foundation of Enterprise Speed',
      readTime: '4 min read',
      paragraphs: [
        'Industry diagnostic studies reveal that over 70% of persistent corporate network slowdowns originate at Layer 1, the physical cabling. While modern switches and computers can negotiate gigabit connections, substandard physical wiring causes high packet retransmissions over TCP and robotic audio dropouts over UDP. Many low-bid electrical contractors use Copper-Clad Aluminum (CCA) wiring, exceed tight bend radiuses, or pull data cables directly parallel to high-voltage electrical conduits, inducing electromagnetic interference.',
        'Unified Enterprise approaches structured cabling with architectural and electrical rigor. We exclusively deploy 100% solid bare copper Category 6 and 6A cables from Tier-1 manufacturers (CommScope Systimax, Schneider Electric). Our technicians dress cables into modular patch panels with velcro ties, maintaining pair twist right up to the termination point.',
        'Most importantly, we test every drop using calibrated Fluke DSX-8000 CableAnalyzers, evaluating Near-End Crosstalk (NEXT), Return Loss, and Attenuation-to-Crosstalk Ratio (ACR). We hand over complete certified PDF test manifests proving each port achieves full gigabit and 10-gigabit throughput.'
      ]
    },
    authorizedOem: 'CommScope Systimax, Schneider Electric Actassi, D-Link Enterprise, Fluke Networks'
  },

  'cctv-installation-management': {
    id: 'cctv-installation-management',
    name: 'CCTV installation and Management',
    badge: 'IP SURVEILLANCE, NVR STORAGE & AMC',
    idealFor: 'Corporate Offices, Commercial Buildings, Warehouses & Retail Facilities',
    heroSubtitle: 'High-Definition IP CCTV, Redundant NVR Storage & Complete Camera Hardware AMC',
    heroParagraph: 'Ensure round-the-clock physical security and perimeter monitoring for your facilities. Unified Enterprise designs, installs, and maintains complete commercial IP surveillance systems. We deploy 4K AI-powered cameras, license plate recognition (LPR), long-term NVR storage vaults with RAID protection, and provide ongoing camera maintenance under comprehensive AMC.',
    valuePills: ['Commercial 4K & Night-Vision IP Cameras', 'RAID-Protected NVR Video Vaults', 'Camera Lens Cleaning & Hardware AMC'],
    sla: 'Continuous Recording & Rapid Onsite Camera Replacement SLA',
    metrics: ['4K Ultra-HD', '30-90 Day Storage', 'AI Face & Vehicle Detect'],
    coverage: 'Hikvision, Dahua, CP Plus, Axis, NVR Storage, PoE Switches & Optical Links',
    image: '/assets/cctv_surveillance.jpg',
    comparisonData: {
      traditionalTitle: 'Unmanaged Consumer CCTV Systems',
      traditionalPoints: [
        'Silent Storage Failure: NVR hard drives fail quietly, leaving business owners with zero recorded video when incidents happen.',
        'Dirty Blurry Lenses: Lenses collect dust and cobwebs, rendering night-vision recordings unusable for identification.',
        'Weak Network Security: Default passwords and open router ports expose security cameras to unauthorized internet viewing.'
      ],
      convergedTitle: 'Unified Enterprise Managed CCTV Model',
      convergedPoints: [
        'Automated Storage Health Monitoring: NVR drive health is monitored continuously with automated alerts for disk degradation.',
        'Routine Lens & Housing Maintenance: Quarterly physical servicing, lens cleaning, refocusing, and weather seal checks.',
        'Isolated Surveillance VLAN: Cameras operate inside an isolated, encrypted network with zero exposure to guest Wi-Fi.'
      ]
    },
    coreAdvantages: [
      {
        title: 'Smart AI Analytics',
        desc: 'Intelligent line-crossing, motion zone detection, and vehicle license plate recognition reduce false alarms.'
      },
      {
        title: 'Long-Term Redundant Storage',
        desc: 'Surveillance-grade hard drives arranged in RAID 5/6 configurations provide 30 to 90 days of continuous recording.'
      },
      {
        title: 'Secure Remote Mobile Viewing',
        desc: 'Authorized executives view crystal-clear live and recorded camera footage via encrypted smartphone applications.'
      }
    ],
    handoverChecklist: [
      'Facility camera placement schematic showing field-of-view coverage angles and zero blind spots.',
      'NVR storage calculation manifest proving minimum 30/60/90-day retention capacity.',
      'Mobile app and desktop CMS client installation on authorized executive devices.',
      'Comprehensive CCTV hardware AMC agreement covering camera replacement and routine maintenance.'
    ],
    deepDive: {
      title: 'Commercial IP Surveillance Architecture: Storage Retention, AI Perimeter Security & Routine AMC Care',
      readTime: '4 min read',
      paragraphs: [
        'Commercial video surveillance systems serve as an organization’s primary physical defense against theft, unauthorized access, and liability disputes. However, many commercial CCTV systems fail precisely when needed most: hard drives in consumer-grade recorders overheat, camera lenses collect ambient dust and glare, and amateur coaxial wiring degrades over time.',
        'Unified Enterprise deploys robust, IP-based surveillance architectures utilizing Power-over-Ethernet (PoE) technology. We run individual Category 6 cables to high-definition cameras, eliminating separate power adapters. Our systems feature smart AI edge detection, filtering out rain, shadows, and small animals while alerting security personnel immediately upon human or vehicle perimeter breach.',
        'Under our CCTV Maintenance Contracts (AMC), our field technicians conduct quarterly preventive visits: cleaning optical glass lenses, testing infrared night-vision illumination, verifying UPS battery backup runtimes, and confirming that NVR hard drive storage arrays are recording reliably.'
      ]
    },
    authorizedOem: 'Hikvision Enterprise, Dahua Technology, CP PLUS Professional, Axis Communications, Western Digital Purple'
  },

  'firewall-management': {
    id: 'firewall-management',
    name: 'Firewall Management',
    badge: 'NEXT-GEN FIREWALL AUDITS, POLICIES & AMC',
    idealFor: 'Enterprises Protecting Corporate Data, Financial Networks & Remote VPN Workforces',
    heroSubtitle: 'Next-Gen Firewall Deployment, Access Rule Optimization & Ongoing Security AMC',
    heroParagraph: 'Broadband routers have zero capability to stop modern ransomware, malware payloads, or unauthorized data exfiltration. Unified Enterprise provides complete Next-Generation Firewall (NGFW) governance (Fortinet, Sophos). Our certified L2 security engineers inspect your existing firewall configuration, clean up outdated access rules, enforce deep SSL decryption, manage secure remote VPN tunnels, and provide ongoing hardware maintenance under dedicated AMC.',
    valuePills: ['Audits for Existing Firewalls', 'Deep SSL Traffic Inspection', 'Secure Work-From-Home SSL-VPN'],
    sla: 'Immediate Threat Isolation & Monthly Policy Security Reviews',
    metrics: ['Zero-Trust Policy', 'MFA VPN Access', 'Daily Threat Updates'],
    coverage: 'Fortinet FortiGate, Sophos XGS, SonicWall, Check Point, Cisco Firepower',
    image: '/assets/network_security_firewall.jpg',
    comparisonData: {
      traditionalTitle: 'Unmanaged / Misconfigured Firewalls',
      traditionalPoints: [
        'Outdated Firmware: Appliances operate on years-old firmware with known security exploits that hackers actively target.',
        'Chaotic Legacy Rules: Hundreds of wide-open "Any-to-Any" firewall policies left behind after past vendor projects.',
        'Unencrypted Remote Logins: Remote employees connect using weak passwords without multi-factor authentication (MFA).'
      ],
      convergedTitle: 'Unified Enterprise Managed Firewall Model',
      convergedPoints: [
        'Automated Threat Signatures: Daily synchronization with global threat intelligence feeds stops zero-day exploits.',
        'Strict Least-Privilege Policies: Redundant rules purged; internal accounting and ERP servers isolated behind Zero-Trust zones.',
        'Encrypted 2FA/MFA VPN: Remote employees connect through secure encrypted tunnels with Mobile Phone OTP verification.'
      ]
    },
    coreAdvantages: [
      {
        title: 'Deep SSL Traffic Inspection',
        desc: 'Decrypts and scans encrypted web downloads in real time, stopping hidden ransomware attachments before they hit PCs.'
      },
      {
        title: 'Zero-Trust Departmental Isolation',
        desc: 'Prevents guest Wi-Fi and infected user laptops from accessing sensitive corporate accounting databases.'
      },
      {
        title: 'Dedicated Security AMC',
        desc: 'Continuous firmware patching, emergency breach isolation, and monthly executive cyber defense audit reports.'
      }
    ],
    handoverChecklist: [
      'Comprehensive security audit report identifying vulnerabilities in your existing network perimeter.',
      'Hardened Next-Gen Firewall installation or existing appliance rule reconfiguration.',
      'Secure client SSL-VPN configuration with two-factor authentication (MFA/OTP) for remote workers.',
      'Monthly threat telemetry report detailing blocked attacks, bandwidth usage, and policy compliance.'
    ],
    deepDive: {
      title: 'Next-Gen Perimeter Defense: Eliminating Legacy Rule Vulnerabilities and Securing Remote Workforce VPNs',
      readTime: '4 min read',
      paragraphs: [
        'A corporate firewall is the critical digital gatekeeper standing between an enterprise’s private intellectual property and the public internet. However, having a commercial firewall box in your server rack provides false comfort if the unit is misconfigured. In over 80% of corporate security audits conducted by our team, we discover dangerous configuration errors: administrator passwords left at defaults, outdated firmware unpatched for over 18 months, and legacy firewall rules that allow unrestricted inbound traffic.',
        'Unified Enterprise provides end-to-end Firewall Management. Our certified L2 network security engineers examine your existing appliance (Fortinet FortiGate, Sophos XGS). We conduct an exhaustive rule-base audit: closing unused ports, removing redundant rules, and activating hardware-accelerated deep packet inspection.',
        'For distributed employees, we deploy secure SSL-VPN tunnels integrated with Mobile Phone One-Time Passwords (OTP/MFA). This ensures that even if an employee’s laptop password is compromised, attackers cannot access central corporate servers without physical mobile phone authorization.'
      ]
    },
    authorizedOem: 'Fortinet FortiGate (40F to 200F), Sophos XGS Series, SonicWall TZ/NSA, FortiClient EMS'
  },

  'voip-telecom-support': {
    id: 'voip-telecom-support',
    name: 'VoIP & Telecom Support',
    badge: 'VOICE QUALITY QOS, SIP TRUNKS & IP PHONES',
    idealFor: 'Corporate Offices, Distributed Campuses & Multi-Line Business Environments',
    heroSubtitle: 'Crystal-Clear Voice Routing, SIP Trunk Integration & Desktop IP Phone Management',
    heroParagraph: 'Eliminate stuttering audio, dropped customer calls, and expensive legacy phone bills. Unified Enterprise delivers converged VoIP and telecommunication support. We deploy and manage enterprise SIP trunks, IP desk phones, and managed PoE switches. Through Layer-3 DiffServ Quality of Service (QoS) routing, we guarantee that phone conversations always receive priority over heavy internet downloads.',
    valuePills: ['Lossless Voice Quality Routing (QoS)', 'SIP Trunk Multi-Provider Integration', 'Executive Desktop IP Phone Fleets'],
    sla: 'Sub-30 Minute Triage for Voice Line Drops / Guaranteed QoS Routing',
    metrics: ['<30ms Voice Latency', 'Zero Call Drops', 'Automatic Voice VLAN'],
    coverage: 'Yealink, Grandstream, Cisco, Poly, Matrix, Cloud SIP Trunks & PRI Gateways',
    image: '/assets/telecom_ip_phones.jpg',
    comparisonData: {
      traditionalTitle: 'Fragmented Analog PBX / Unmanaged Voice',
      traditionalPoints: [
        'Robotic Voice Stutter: Phone calls stutter or drop whenever staff members download large files or update software.',
        'Expensive Copper Wiring: Separate telephone wiring for every desk requires costly cabling repairs whenever desks move.',
        'Vendor Blame Game: Phone vendors blame your internet router; broadband technicians blame your telephone exchange.'
      ],
      convergedTitle: 'Unified Enterprise Converged Voice Model',
      convergedPoints: [
        'Smart Quality of Service (QoS): Voice traffic receives automated priority queue forwarding ahead of data traffic.',
        'Unified Ethernet Wiring: IP desk phones share the existing computer network cable with built-in gigabit passthrough.',
        'Single Accountable Partner: Our certified engineers handle both the network switches and the phone extensions.'
      ]
    },
    coreAdvantages: [
      {
        title: 'Automated Voice VLANs',
        desc: 'Switches automatically detect IP desk phones using LLDP-MED, isolating voice traffic onto a dedicated high-priority channel.'
      },
      {
        title: 'Multi-Line SIP Trunk Redundancy',
        desc: 'Dual SIP carrier integration automatically routes outbound calls through backup telecom links if one provider fails.'
      },
      {
        title: 'Executive Desk Phone Deployment',
        desc: 'Installation of high-definition color screen IP phones with conference speakerphones and mobile softphone apps.'
      }
    ],
    handoverChecklist: [
      'VoIP network readiness assessment report verifying jitter, packet loss, and latency metrics.',
      'Enterprise IP-phone deployment and extension mapping ledger for all staff desks.',
      'PoE managed switch configuration with automated Voice VLAN and Layer-3 QoS tagging.',
      'Comprehensive VoIP hardware maintenance and telecom support agreement.'
    ],
    deepDive: {
      title: 'The Mechanics of Crystal-Clear VoIP: Eliminating Acoustic Jitter Through Layer-3 QoS and Automated Voice VLANs',
      readTime: '4 min read',
      paragraphs: [
        'Voice over IP operates under completely different physical transmission dynamics than general web browsing. While web pages and email tolerate temporary packet delays over TCP, real-time voice calls depend on sensitive UDP audio packets. Human ears detect speech stutter, acoustic jitter, and metallic robotic distortion with as little as 30 milliseconds of latency or 1% packet loss.',
        'Unified Enterprise eliminates VoIP degradation by engineering converged networks with voice priority. We configure managed switches with automated Voice VLANs utilizing LLDP-MED protocol: the moment an IP desk phone is plugged into any network port, the switch recognizes it and routes voice traffic into an isolated high-priority queue.',
        'We enforce Layer-3 DiffServ Quality of Service (QoS) tagging, guaranteeing that customer phone calls receive forwarding priority ahead of background software updates or YouTube video streams. Backed by our ongoing maintenance contracts, your enterprise enjoys crystal-clear voice communication.'
      ]
    },
    authorizedOem: 'Yealink Enterprise, Grandstream Networks, Cisco IP Phones, Poly VVX Series, Matrix Comsec'
  },

  'pbx-dialer-support': {
    id: 'pbx-dialer-support',
    name: 'PBX & Dialer Support',
    badge: 'CALL CENTER TELEPHONY, GATEWAYS & AMC',
    idealFor: 'Call Centers, Tele-Sales Floors, Customer Care Operations & BPOs',
    heroSubtitle: 'Complete Telephony Governance: Turnkey Dialer Setup, PRI/SIP Gateways & Floor AMC',
    heroParagraph: 'Ensure zero downtime for your call floor and customer service lines. Unified Enterprise provides specialized engineering support for PBX telephony exchanges, GSM gateways, PRI/FXO cards, and predictive dialer servers. We service your existing telephony gateway racks, repair agent headsets, configure call routing IVRs, and station dedicated L1/L2 floor support engineers under comprehensive AMC.',
    valuePills: ['Predictive Dialer Server Support', 'PRI & GSM Gateway Integration', 'On-Site Call Floor AMC Engineers'],
    sla: 'Sub-30 Minute Emergency Response for Floor Down Incidents',
    metrics: ['Zero Floor Downtime', 'On-Site Buffer Stock', 'PRI/SIP Failover'],
    coverage: 'Matrix ETERNITY, Grandstream UCM, Vicidial, Asterisk, Yeastar, AudioCodes Gateways',
    image: '/assets/ue_call_centre_bpo.jpg',
    comparisonData: {
      traditionalTitle: 'Unmanaged BPO Telephony Setups',
      traditionalPoints: [
        'Dialer Freezes: Telephony servers crash during peak calling shifts, causing thousands in lost agent payroll.',
        'Crackling Headsets & Audio Drops: Unmanaged floor cabling and worn headset cables degrade customer conversation quality.',
        'No Onsite Technical Help: Floor supervisors struggle with gateway errors while waiting hours for external technician visits.'
      ],
      convergedTitle: 'Unified Enterprise BPO Telephony Model',
      convergedPoints: [
        'Clustered Dialer Architecture: High-availability dialer servers with automated SIP trunk failover prevent shift stoppages.',
        'On-Site Spares Buffer: Immediate hot-swap replacement for broken agent headsets, keyboards, and desktop PCs directly on the floor.',
        'Dedicated Floor Engineers: Certified L1/L2 hardware engineers stationed directly on your calling floor for instant fixes.'
      ]
    },
    coreAdvantages: [
      {
        title: 'Support for Existing PBX Racks',
        desc: 'You do not need to replace working equipment. We audit, repair, re-cable, and maintain your existing telephony hardware.'
      },
      {
        title: 'Resident Floor Support Engineers',
        desc: 'Dedicated technicians stationed right on your call floor to immediately fix freezing PCs and swap faulty headsets.'
      },
      {
        title: 'PRI & GSM Gateway Redundancy',
        desc: 'Automatic routing of customer calls between landline PRI circuits and mobile GSM SIM banks for minimum call costs.'
      }
    ],
    handoverChecklist: [
      'Comprehensive telephony rack audit, PRI line testing, and dialer server configuration review.',
      'Deployment of professional noise-canceling headsets with acoustic voice shielding.',
      'Onsite buffer inventory setup (spare headsets, cables, power supplies, and agent PCs).',
      'Dedicated on-site L1/L2 floor engineer schedule and monthly call floor maintenance SLA.'
    ],
    deepDive: {
      title: 'High-Density Call Center Telephony: Maximizing BPO Agent Utilization Through Hardware Governance and Onsite Floor AMC',
      readTime: '4 min read',
      paragraphs: [
        'In high-density contact centers and BPO tele-sales floors, technical infrastructure reliability directly dictates revenue. If an agent workstation freezes, a headset microphone crackles, or a telephony gateway disconnects from the carrier, paid agent hours are completely wasted. High employee density creates rigorous operating conditions: machines run continuously across multiple 8-hour shifts, and physical cabling takes constant wear.',
        'Unified Enterprise provides specialized hardware and systems governance for calling operations. We actively take over existing call-center estates under our comprehensive AMC: our engineers audit your current agent PCs, repair crackling headsets, re-terminate messy floor wiring, tune up existing PRI/telephony gateway racks, and maintain an on-site buffer inventory of spare parts for instantaneous replacement.',
        'Most importantly, we provide dedicated on-site L1 and L2 support engineers stationed directly on your call floor to resolve hardware faults in real time, ensuring your calling seats operate non-stop 24/7.'
      ]
    },
    authorizedOem: 'Matrix Comsec ETERNITY, Grandstream UCM, Vicidial Enterprise, Jabra Biz Series, Poly Blackwire'
  },

  'it-infrastructure-audits': {
    id: 'it-infrastructure-audits',
    name: 'IT Infrastructure Audits',
    badge: '360-DEGREE ARCHITECTURAL ASSESSMENTS',
    idealFor: 'Enterprises Planning Expansions, Acquisitions, Upgrades or Resolving Chronic Slowness',
    heroSubtitle: 'Comprehensive Physical & Virtual Audits: Power Phase Balancing, Heat Loads & Hardware Health',
    heroParagraph: 'You cannot optimize what you have not accurately measured. Unified Enterprise conducts exhaustive on-site IT Infrastructure Audits. Our senior Solutions Architects physically inspect your facilities: calculating electrical power phase balancing, BTU thermal heat loads, server rack elevation limits, and network cabling integrity to deliver an actionable, audit-ready engineering blueprint.',
    valuePills: ['Onsite Senior Architect Inspection', 'Power Balancing & Thermal Calculations', 'Audit-Ready Executive Blueprint'],
    sla: 'Full Comprehensive Audit Report Delivered Within 5 Business Days',
    metrics: ['360° Physical Audit', 'Thermal Heat Mapping', 'Executive Roadmap'],
    coverage: 'Server Rooms, Power Racks, UPS Systems, Cabling, Switches, Compute & Storage',
    image: '/assets/why_data_backed.jpg',
    comparisonData: {
      traditionalTitle: 'Remote Desktop-Only "Audits"',
      traditionalPoints: [
        'Surface-Level Scans: Automated software scans cannot detect loose electrical wiring, hot rack zones, or degraded fans.',
        'Generic Vendor Recommendations: Generic reports designed solely to push expensive new hardware purchases.',
        'No Physical Inspection: Blind to floor load tolerances, tangled patch cables, and ungrounded server cabinets.'
      ],
      convergedTitle: 'Unified Enterprise Physical Engineering Audit',
      convergedPoints: [
        'Hands-On Onsite Survey: Senior Solutions Architects physically inspect power distribution, cooling, and cable runs.',
        'Practical Modernization Roadmap: We identify how to upgrade and extend the life of existing equipment before recommending new buys.',
        'Comprehensive 3D Schematics: Complete rack elevations, electrical phase charts, and thermal remediation blueprints.'
      ]
    },
    coreAdvantages: [
      {
        title: 'Electrical Phase Balancing',
        desc: 'Measuring current draw across all phases to prevent unexpected circuit breaker trips and transformer overloads.'
      },
      {
        title: 'Thermal Hotspot Identification',
        desc: 'Calibrated thermal imaging detects trapped heat pockets behind server racks that degrade processor lifespans.'
      },
      {
        title: 'Hardware Estate Ledger',
        desc: 'Complete serialized inventory of all laptops, desktops, servers, and switches with age and warranty expiration dates.'
      }
    ],
    handoverChecklist: [
      'Comprehensive 360-degree IT infrastructure audit document with executive summary and technical analysis.',
      'Thermal imaging photographic analysis and electrical power consumption report.',
      'Full hardware asset register with serial numbers, specifications, and modernization recommendations.',
      'Prioritized 12-month technology investment roadmap with estimated budget allocations.'
    ],
    deepDive: {
      title: 'The Science of Infrastructure Auditing: Why Physical Inspection Outperforms Automated Software Scans Every Time',
      readTime: '4 min read',
      paragraphs: [
        'Many technology consulting firms conduct "infrastructure audits" by simply emailing a lightweight software scanner to run across the local network. While software discovers IP addresses and operating system versions, it is completely blind to the physical realities that dictate infrastructure stability: electrical phase balance across power distribution units (PDUs), floor weight tolerance, copper cable bend radiuses, and localized thermal hotspots.',
        'At Unified Enterprise, our senior Solutions Architects personally visit your facility. We measure actual BTU heat loads generated by running servers, inspect UPS battery internal resistance, and check that server cabinets have proper cold-aisle / hot-aisle airflow containment.',
        'Our audit reports provide actionable engineering clarity: we show you exactly which existing machines can be upgraded with RAM and SSDs to extend their life, how to re-balance electrical phases across server racks, and how to eliminate cabling bottlenecks without spending lakhs on unnecessary replacements.'
      ]
    },
    authorizedOem: 'Fluke Networks, Schneider Electric, APC Smart-UPS, Dell Technologies, HPE'
  },

  'network-firewall-audits': {
    id: 'network-firewall-audits',
    name: 'Network & Firewall Audits',
    badge: 'CYBERSECURITY & LAYER-2/3 VULNERABILITY AUDITS',
    idealFor: 'Enterprises Preparing for ISO 27001, SOC2, Financial Audits or Cyber Insurance',
    heroSubtitle: 'Exhaustive Penetration Testing, Firewall Rule Optimization & Zero-Trust Verification',
    heroParagraph: 'Ensure your network perimeter is impenetrable against modern ransomware, insider threats, and compliance violations. Unified Enterprise conducts thorough Network and Firewall Security Audits. Our certified L2/L3 security engineers analyze your firewall rules, test for vulnerable open ports, verify Wi-Fi guest isolation, and deliver compliance-ready audit manifests.',
    valuePills: ['Firewall Rule-Base Optimization', 'Vulnerability Port Scanning', 'Zero-Trust Internal Isolation Audit'],
    sla: 'Full Penetration & Vulnerability Manifest Delivered in 48 Hours',
    metrics: ['ISO 27001 Ready', 'Zero-Trust Verified', 'Confidential SLA'],
    coverage: 'Perimeter Firewalls, Core Switches, Wi-Fi APs, VPN Gateways & DMZ Hosts',
    image: '/assets/cybersecurity_firewall_rack.jpg',
    comparisonData: {
      traditionalTitle: 'Annual "Check-the-Box" Audits',
      traditionalPoints: [
        'Superficial Checklists: Generic questionnaires that fail to test actual firewall packet inspection capabilities.',
        'Ignored Internal Risks: Focuses only on the internet perimeter while ignoring lateral malware movement inside the office.',
        'No Rule Cleanup: Leaves legacy firewall rules intact, continuing to expose internal databases to risk.'
      ],
      convergedTitle: 'Unified Enterprise Technical Security Audit',
      convergedPoints: [
        'Live Penetration & Port Testing: Active scanning of external and internal IP ranges to identify exploitable services.',
        'Rigorous Rule Cleanup: Removal of overlapping, redundant, and dangerous "Any-to-Any" access policies.',
        'Lateral Movement Defense: Verification of VLAN segmentation ensuring compromised laptops cannot access financial databases.'
      ]
    },
    coreAdvantages: [
      {
        title: 'Firewall Policy Pruning',
        desc: 'Identifying and eliminating shadow rules and outdated employee VPN accounts left open after past projects.'
      },
      {
        title: 'Deep SSL Inspection Testing',
        desc: 'Verifying whether your security appliance actively decrypts and inspects encrypted web traffic for hidden malware.'
      },
      {
        title: 'Compliance-Ready Documentation',
        desc: 'Detailed technical audit manifests ready for submission to regulatory bodies and cyber insurance underwriters.'
      }
    ],
    handoverChecklist: [
      'Comprehensive vulnerability assessment report detailing identified risks categorized by CVSS severity.',
      'Firewall rule optimization recommendations with step-by-step remediation commands.',
      'Network topology diagram illustrating Zero-Trust security zones and isolated VLANs.',
      'Formal Executive Security Attestation signed by our Senior Cybersecurity Architect.'
    ],
    deepDive: {
      title: 'Closing the Perimeter Gaps: How Regular Firewall Audits Protect Enterprises from Ransomware Breaches',
      readTime: '4 min read',
      paragraphs: [
        'Over 90% of successful corporate network breaches do not occur because hackers discovered a complex zero-day flaw in hardware; they occur because of simple configuration drift: an outdated firewall firmware version was never patched, an external vendor VPN account was left active after a 2-week trial, or a temporary "Allow All" troubleshooting rule was never revoked.',
        'Unified Enterprise conducts deep-dive technical security assessments for corporate networks. Our certified engineers analyze every line of your firewall configuration: identifying dangerous rule conflicts, testing whether intrusion prevention systems (IPS) are actively dropping exploit payloads, and verifying that guest Wi-Fi networks have zero routing pathways into internal finance servers.',
        'We deliver an executive summary for business leadership alongside an actionable technical remediation guide for IT staff, ensuring your corporate data remains secure and compliant.'
      ]
    },
    authorizedOem: 'Fortinet FortiGate, Sophos XGS, Cisco Firepower, Palo Alto Networks, Wireshark'
  },

  'it-migration-deployment': {
    id: 'it-migration-deployment',
    name: 'IT Migration & Deployment',
    badge: 'TURNKEY RE-PLATFORMING & DATA TRANSITIONS',
    idealFor: 'Enterprises Transitioning to New Servers, Cloud Platforms or Upgrading Infrastructure',
    heroSubtitle: 'Zero-Downtime Data Center Transitions, Server Migrations & Turnkey Hardware Deployments',
    heroParagraph: 'Upgrading central enterprise servers or moving workloads between physical and virtual environments is filled with risk if performed without tested failover plans. Unified Enterprise executes structured, zero-downtime IT migrations. We migrate Active Directory, enterprise databases (SQL, Oracle), accounting systems (Tally, ERP), and virtual machines with pre-tested rollback contingencies.',
    valuePills: ['Zero-Downtime Weekend Migrations', 'Pre-Tested Rollback Contingencies', 'Full Turnkey Hardware Deployment'],
    sla: 'Guaranteed Cutover Windows with Zero Business Hours Disruption',
    metrics: ['Zero Data Loss', 'Weekend Cutover', '100% Rollback Safe'],
    coverage: 'Physical-to-Virtual (P2V), Active Directory, Databases, File Servers & SAN Storage',
    image: '/assets/datacenter_cabling_rack.jpg',
    comparisonData: {
      traditionalTitle: 'High-Risk Ad-Hoc Migrations',
      traditionalPoints: [
        'Extended Mid-Week Downtime: Migrations executed during business hours that unexpectedly stall, halting billing.',
        'Corrupted Database Records: Unverified data transfers that damage financial transaction ledgers and customer history.',
        'No Rollback Plan: When something fails, technicians cannot restore the old system, leaving the company in crisis.'
      ],
      convergedTitle: 'Unified Enterprise Structured Migration Model',
      convergedPoints: [
        'Off-Hours & Weekend Execution: Cutover scheduled during Friday night or weekends, ensuring business opens normally Monday morning.',
        'Bit-Level Data Verification: Cryptographic checksum validation guarantees 100% data integrity with zero record corruption.',
        'Full Fallback Contingency: The existing system remains 100% functional on standby until the new platform is fully verified.'
      ]
    },
    coreAdvantages: [
      {
        title: 'Pre-Migration Sandbox Testing',
        desc: 'We clone your production workloads into an isolated staging environment to test application compatibility before touching live systems.'
      },
      {
        title: 'Physical-to-Virtual (P2V) Speed',
        desc: 'Converting aging physical tower servers into lightweight virtual machines on modern clustered hardware.'
      },
      {
        title: 'Turnkey Hardware Staging',
        desc: 'New servers and switches are fully assembled, burned-in for 24 hours, and patched in our facility prior to onsite delivery.'
      }
    ],
    handoverChecklist: [
      'Comprehensive migration master plan detailing step-by-step cutover timeline and responsibilities.',
      'Pre-migration data backup verification and cryptographic integrity certificates.',
      'Post-cutover user acceptance testing (UAT) sign-off across all core business applications.',
      'Dedicated on-site engineer floor presence during the first live business day post-migration.'
    ],
    deepDive: {
      title: 'The Blueprint for Zero-Downtime Migrations: Sandbox Testing, Checksum Validation & Contingency Rollbacks',
      readTime: '4 min read',
      paragraphs: [
        'Migrating enterprise servers and databases is among the highest-risk operations an IT organization can undertake. A single failed cutover can prevent billing, delay supply chain shipments, and corrupt years of accounting history. Most failed migrations occur because teams attempt live transitions without sandbox testing or tested rollback plans.',
        'Unified Enterprise follows a disciplined engineering protocol for infrastructure transitions. Prior to any live cutover, we clone production environments into an isolated sandbox to test application dependencies, database schema migrations, and user authentication. Migration cutovers are scheduled exclusively during off-hours (Friday evenings or holiday weekends).',
        'Throughout the process, the original production server remains completely intact and synchronized on standby. Only after extensive User Acceptance Testing (UAT) proves all applications are operating with full integrity is the final DNS cutover executed, guaranteeing zero disruption to corporate operations.'
      ]
    },
    authorizedOem: 'Dell PowerEdge, VMware vSphere, Microsoft Hyper-V, Veeam Backup, Synology NAS'
  },

  'data-wiping-secure-decommissioning': {
    id: 'data-wiping-secure-decommissioning',
    name: 'Data Wiping & Secure Decommissioning',
    badge: 'NIST 800-88 CRYPTOGRAPHIC ERASURE & ISO RECYCLING',
    idealFor: 'Enterprises Retiring Old Computers, Laptops, Hard Drives & Datacenter Storage',
    heroSubtitle: 'Military-Grade NIST 800-88 Data Sanitization & Authorized Environmental E-Waste Disposal',
    heroParagraph: 'Throwing old hard drives into storage closets or selling retired laptops to unverified scrap dealers creates catastrophic data breach and regulatory liabilities. Unified Enterprise provides certified, military-grade data destruction compliant with NIST 800-88 Rev. 1 standards. We execute multi-pass cryptographic software wiping, physical magnetic degaussing, issue tamper-proof legal erasure certificates, and channel hardware through Government-authorized recyclers.',
    valuePills: ['NIST 800-88 Certified Sanitization', 'Tamper-Proof Legal Certificates', 'Authorized Environmental E-Waste Disposal'],
    sla: 'Serialized Compliance Erasure Certificates Issued for 100% of Drives',
    metrics: ['NIST 800-88 Rev. 1', 'ISO 14001 Recycled', '100% Legal Immunity'],
    coverage: 'HDDs, SSDs, NVMe, Server Storage Arrays, Laptops, Desktops & Tapes',
    image: '/assets/why_expertise.jpg',
    comparisonData: {
      traditionalTitle: 'Informal Scrap Disposal / Basic Formatting',
      traditionalPoints: [
        'Simple "Format" Fails: Basic Windows formatting leaves raw customer data easily recoverable with free internet recovery tools.',
        'Storage Closet Leak Risk: Storing old hard drives in unsecured office closets invites internal employee theft.',
        'Severe Legal Penalties: Zero documentation proving data was destroyed violates privacy laws and triggers massive fines.'
      ],
      convergedTitle: 'Unified Enterprise Certified Sanitization Model',
      convergedPoints: [
        'NIST 800-88 Cryptographic Erasure: Multi-pass overwriting and cryptographic sanitization makes data recovery physically impossible.',
        'Serialized Legal Certificates: Individual certificates recorded per hard drive serial number for auditor sign-off.',
        'Environmentally Certified E-Waste: Residual hardware channeled exclusively through Government-authorized, ISO 14001 recyclers.'
      ]
    },
    coreAdvantages: [
      {
        title: 'Certified NIST 800-88 Standards',
        desc: 'Recognized by international data privacy regulators, compliance auditors, and corporate legal departments.'
      },
      {
        title: 'Physical Magnetic Degaussing',
        desc: 'High-intensity electromagnetic degaussing permanently scrambles magnetic platters for drives that cannot be booted.'
      },
      {
        title: 'Residual Value Recovery',
        desc: 'Recover cash value through corporate hardware buyback programs for decommissioned laptops and servers.'
      }
    ],
    handoverChecklist: [
      'Comprehensive physical ledger recording serial numbers, drive types, and source machines.',
      'Formal NIST 800-88 Certificate of Data Sanitization signed by our Certified Security Officer.',
      'Government-authorized Environmental E-Waste Disposal Manifest complying with ISO 14001.',
      'Financial credit ledger detailing residual buyback value credited toward future services.'
    ],
    deepDive: {
      title: 'The Legal Imperative of Data Sanitization: NIST 800-88 Standards, Degaussing & Mitigating Post-Retirement Liabilities',
      readTime: '4 min read',
      paragraphs: [
        'When corporate computer hardware reaches the end of its operational life, retired machines continue to represent an enormous risk surface. Simply clicking "format drive" or re-installing Windows does not destroy underlying data; it merely deletes file allocation pointers, leaving customer records, accounting spreadsheets, and employee passwords completely readable using basic forensics tools.',
        'Unified Enterprise eliminates this liability through certified data destruction compliant with NIST Special Publication 800-88 Revision 1 (Guidelines for Media Sanitization). For working drives, our technicians execute multi-pass cryptographic data overwriting with random bit patterns followed by full-sector verification. For failed or legacy mechanical drives, we perform high-intensity electromagnetic degaussing.',
        'We deliver serialized, tamper-proof legal Certificates of Data Destruction detailing drive models, capacities, and serial numbers. This provides your board of directors and compliance auditors with complete legal immunity before equipment is routed through Government-authorized environmental recyclers.'
      ]
    },
    authorizedOem: 'Blancco Enterprise Eraser, WhiteCanyon WipeDrive, Garner Degaussers, Snipe-IT Asset Management'
  },

  'office-relocation-it-setup': {
    id: 'office-relocation-it-setup',
    name: 'Office Relocation & IT Setup',
    badge: 'TURNKEY DE-INSTALLATION & RE-COMMISSIONING',
    idealFor: 'Companies Moving to New Offices, Expanding Campuses or Consolidating Facilities',
    heroSubtitle: 'Complete Office IT Relocation: Safe De-Installation, Transport & Day-One Ready Turnkey Setup',
    heroParagraph: 'Moving an office without experienced IT logistics risks broken server motherboards, tangled cabling, lost equipment, and days of delayed business operations. Unified Enterprise manages complete, turnkey office technology relocations. We label and safely de-install your servers, switches, and workstations, handle specialized shock-resistant transport, install structured cabling at the new facility, and ensure every employee is fully operational on Day One.',
    valuePills: ['Turnkey Weekend IT Relocation', 'Shock-Resistant Specialized Transport', 'Day-One Operational Guarantee'],
    sla: 'Zero Business-Hours Disruption / Weekend Cutover Guarantee',
    metrics: ['Zero Hardware Damage', 'Weekend Relocation', 'Day-1 Ready'],
    coverage: 'Server Racks, Compute, Storage, Workstations, Wi-Fi, CCTV, PBX & Cabling',
    image: '/assets/modern_enterprise_office.jpg',
    comparisonData: {
      traditionalTitle: 'General Furniture Movers Handling IT',
      traditionalPoints: [
        'Physical Hardware Damage: General moving laborers pile fragile servers and monitors into open trucks without anti-static protection.',
        'Disorganized Cables: Unlabeled cables cut or tossed into boxes, resulting in days of troubleshooting at the new site.',
        'Delayed Business Opening: Employees arrive Monday morning to non-working internet, disconnected phones, and unbooted servers.'
      ],
      convergedTitle: 'Unified Enterprise IT Relocation Model',
      convergedPoints: [
        'Certified IT Logistics: Technical engineers safely disconnect, anti-static wrap, and pack all servers, switches, and PCs.',
        'Pre-Wired Destination Facility: Cat6A cabling, Wi-Fi access points, and server racks installed and tested prior to the move.',
        'Day-One Ready Guarantee: Weekend move completed by Sunday afternoon, with engineers on-site Monday morning to assist staff.'
      ]
    },
    coreAdvantages: [
      {
        title: 'New Site Pre-Readiness',
        desc: 'We inspect the new office weeks in advance, installing cabling, internet connections, and server room cooling beforehand.'
      },
      {
        title: 'Serialized Asset Tracking',
        desc: 'Every laptop, monitor, keyboard, and server is barcode-tagged so equipment arrives at the exact designated desk.'
      },
      {
        title: 'Day-One Onsite Support Pool',
        desc: 'A full team of technicians stationed at the new facility on opening morning to assist employees with monitors and logins.'
      }
    ],
    handoverChecklist: [
      'Comprehensive pre-relocation IT asset ledger and desk assignment mapping blueprint.',
      'Destination facility readiness sign-off verifying electrical power, internet leased lines, and cooling.',
      'Post-relocation system verification check covering all servers, phones, internet, and printers.',
      'Dedicated on-site technician team stationed at the new office during the entire Day-One opening shift.'
    ],
    deepDive: {
      title: 'Zero-Downtime Corporate Relocations: Managing IT Logistics, Pre-Wired Facilities & Day-One Employee Readiness',
      readTime: '4 min read',
      paragraphs: [
        'Relocating a corporate office is a complex logistical challenge where technology represents the greatest operational bottleneck. Standard moving companies understand furniture, but lack understanding of static electricity, fragile server motherboard mounts, optical fiber bend tolerances, and delicate hard drive spindle mechanics. A single dropped server chassis can erase weeks of company productivity.',
        'Unified Enterprise provides end-to-end technology relocation governance. Long before moving day, our network engineering team visits the new facility to design structured Cat6A cabling, mount server racks, install ceiling Wi-Fi access points, and verify that commercial ISP leased lines are fully activated and tested.',
        'Over the move weekend, our certified technicians label, shut down, anti-static wrap, and transport all hardware in specialized shock-resistant padding. By Sunday afternoon, all equipment is racked, powered, and connectivity-tested. When your staff arrives on Monday morning, their computers, phones, and network folders are fully operational.'
      ]
    },
    authorizedOem: 'Dell, HP, Cisco, CommScope Systimax, APC Smart-UPS, Pelicase Protective Transport'
  },

  'emergency-it-support': {
    id: 'emergency-it-support',
    name: 'Emergency IT Support',
    badge: 'CRITICAL OUTAGE TRIAGE & 60-MIN DISPATCH',
    idealFor: 'Enterprises Facing Catastrophic Server Crashes, Ransomware Attacks or Core Network Freezes',
    heroSubtitle: 'Rapid Emergency Response: Sub-60 Minute Dispatch, Threat Containment & Rapid Recovery',
    heroParagraph: 'When a core database crashes, a ransomware notification appears on office screens, or a primary network switch fails during peak business hours, every minute of delay costs thousands in lost revenue. Unified Enterprise provides high-priority Emergency IT Support. Our certified Senior Escalation Engineers mobilize immediately to isolate threats, deploy standby hardware, restore backups, and recover operations.',
    valuePills: ['Sub-60 Minute Priority Dispatch', 'Emergency Ransomware Threat Containment', 'Standby Emergency Hardware Pools'],
    sla: 'Immediate Phone Triage & Sub-60 Minute Physical Dispatch',
    metrics: ['Sub-60 Min Dispatch', '24/7 Hotlines', 'Immediate Threat Isolation'],
    coverage: 'Core Server Failures, Ransomware Breaches, Core Switch Freezes & Power Outages',
    image: '/assets/cybersecurity_firewall_rack.jpg',
    comparisonData: {
      traditionalTitle: 'Standard Office Support Lines',
      traditionalPoints: [
        'Voicemail Runarounds: Emergency calls routed to generic call center queues with next-business-day response promises.',
        'Unqualified Technicians: Junior staff lack the technical authority to rebuild RAID arrays or isolate zero-day network threats.',
        'No Spare Hardware: Technicians identify the broken part but have no replacement equipment available on weekends.'
      ],
      convergedTitle: 'Unified Enterprise Emergency Response Protocol',
      convergedPoints: [
        'Direct Escalation Commander: Emergency hotline connects you immediately to an experienced L3 Systems Architect.',
        'Sub-60 Minute Physical Mobilization: Field engineers dispatched with emergency component spares and diagnostic tools.',
        'Pre-Staged Hardware Buffer: Immediate release of loaner servers, switches, and firewalls from our regional warehouse.'
      ]
    },
    coreAdvantages: [
      {
        title: 'Emergency Ransomware Isolation',
        desc: 'Immediate network segment disconnection and process killing to halt encryption before it reaches secondary backups.'
      },
      {
        title: 'Emergency Standby Hardware',
        desc: 'Rapid deployment of loaner switches, power supplies, and temporary routers to bypass burned-out appliances.'
      },
      {
        title: 'Data Recovery Execution',
        desc: 'Restoration of corrupted accounting and database records from air-gapped immutable backup vaults.'
      }
    ],
    handoverChecklist: [
      'Immediate technical incident containment report identifying root cause and quarantined systems.',
      'Restoration verification manifest proving all core applications and databases are operational.',
      'Post-incident forensic root cause analysis (RCA) document with prevention recommendations.',
      'Emergency maintenance debrief meeting with executive leadership.'
    ],
    deepDive: {
      title: 'Incident Command Protocol: How Rapid Threat Containment and Emergency Hardware Pools Avert Catastrophic Outages',
      readTime: '4 min read',
      paragraphs: [
        'When an infrastructure catastrophe strikes (whether caused by an electrical surge that fries a core switch backplane, a failed storage controller that drops a critical database, or a malicious phishing payload that begins encrypting network shares), the first 60 minutes dictate whether the event is a minor operational hiccup or an existential corporate disaster.',
        'Unified Enterprise enforces a military-grade Incident Command Protocol for emergency interventions. When an emergency call is initiated, the ticket bypasses general helpdesk queues and lands directly on the screen of an L3 Senior Systems Architect. Our engineer initiates immediate remote containment, severing compromised network VLANs to halt lateral infection spread.',
        'Simultaneously, our dispatch center mobilizes a field technician armed with pre-staged emergency buffer components (replacement switches, SAS storage drives, and modular power supplies) from our regional warehouse. By combining rapid containment with immediate physical spare deployment, we restore critical operations in hours rather than days.'
      ]
    },
    authorizedOem: 'Dell PowerEdge, Cisco Systems, Fortinet, APC Smart-UPS, Veeam Emergency Recovery'
  },

  '24-5-and-24-7-support': {
    id: '24-5-and-24-7-support',
    name: '24/5 Support and Optional 24/7 Support',
    badge: 'ROUND-THE-CLOCK NOC MONITORING & SLA',
    idealFor: 'BPOs, Global Support Operations, Continuous Manufacturing & Healthcare Facilities',
    heroSubtitle: 'Continuous 24/7/365 Network Operations Center (NOC) Oversight & Multi-Shift Engineering',
    heroParagraph: 'Modern enterprise operations do not sleep at 6:00 PM. Businesses operating multi-shift call centers, international client contracts, or continuous manufacturing lines require round-the-clock IT reliability. Unified Enterprise delivers standard 24/5 business support and optional 24/7/365 mission-critical coverage. Our Network Operations Center (NOC) monitors your systems non-stop, resolving alerts while your team sleeps.',
    valuePills: ['Continuous 24/7/365 NOC Oversight', 'Multi-Shift Certified Staffing', 'Guaranteed Night-Shift Response SLAs'],
    sla: 'Continuous 24/7/365 Active Monitoring with Sub-30 Minute Response',
    metrics: ['24/7/365 NOC', 'Zero Shift Lags', 'Multi-Timezone Support'],
    coverage: 'Continuous Compute, Storage, PBX Telephony, Internet Links & Branch Operations',
    image: '/assets/why_client_first.jpg',
    comparisonData: {
      traditionalTitle: 'Standard 9-to-5 IT Vendors',
      traditionalPoints: [
        'Dark Hours Vulnerability: Systems crash at 8:00 PM Friday night and remain broken until Monday morning, losing weekend revenue.',
        'Exhausted Internal Staff: Forcing daytime employees to answer midnight emergency calls leads to burnout and employee turnover.',
        'Delayed Night-Shift Resolution: Second-shift call center agents left helpless when telephony or VPNs fail after hours.'
      ],
      convergedTitle: 'Unified Enterprise 24/7 Operational Model',
      convergedPoints: [
        'Continuous Active Monitoring: NOC telemetry continuously checks server health, disk thresholds, and network latency.',
        'Dedicated Shift Engineers: Certified technicians staffed specifically across night and weekend shifts for immediate help.',
        'Weekend Maintenance Windows: Routine patching and server reboots executed during off-peak hours with zero business impact.'
      ]
    },
    coreAdvantages: [
      {
        title: '24/7/365 Active NOC Telemetry',
        desc: 'Continuous real-time monitoring of server CPU loads, disk storage thresholds, switch port drops, and internet links.'
      },
      {
        title: 'Multi-Shift User Support',
        desc: 'Evening and graveyard shift call center agents receive the exact same fast, friendly technical assistance as daytime staff.'
      },
      {
        title: 'Silent Off-Hours Patching',
        desc: 'We execute operating system updates and firewall firmware upgrades during deep night hours when staff are offline.'
      }
    ],
    handoverChecklist: [
      '24/7/365 NOC monitoring integration across all servers, firewalls, and core switches.',
      'Multi-tier escalation contact tree establishing executive notification thresholds for midnight incidents.',
      'Weekly automated SLA compliance reporting detailing nighttime ticket resolution velocity.',
      'Quarterly operational review meetings with dedicated enterprise service delivery manager.'
    ],
    deepDive: {
      title: 'The Always-On Enterprise: Why 24/7 NOC Telemetry is Essential for Global Service Delivery and Multi-Shift Reliability',
      readTime: '4 min read',
      paragraphs: [
        'In an increasingly globalized business ecosystem, the traditional 9:00 AM to 5:00 PM office IT support model is fundamentally obsolete. Call centers handle customer inquiries across global time zones, manufacturing equipment operates continuous assembly shifts, and e-commerce platforms process transactions 24 hours a day. When an unmonitored server hard drive fills to capacity at 2:00 AM, waiting until the morning shift arrives results in hours of lost productivity.',
        'Unified Enterprise provides continuous 24/7/365 infrastructure monitoring and multi-shift engineering support. Our central Network Operations Center (NOC) operates continuously, utilizing automated synthetic transactions and SNMP telemetry to verify the health of servers, database services, and network links every 60 seconds.',
        'If an alert triggers during the night, our shift engineers resolve the bottleneck proactively, often before your daytime workforce even wakes up. By shifting routine system updates, disk defragmentation, and firmware patches to off-peak night windows, your enterprise achieves maximum daytime productivity.'
      ]
    },
    authorizedOem: 'Dell Technologies, Cisco Systems, Fortinet, Matrix Comsec, VMware, Zabbix Enterprise'
  }
};
