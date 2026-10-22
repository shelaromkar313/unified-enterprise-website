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
    role: 'L1 Engineer',
    badge: 'First-Line Response',
    desc: 'Immediate onsite/remote triage, basic PC/laptop, printer, and Wi-Fi help.',
    accentColor: 'border-t-blue-500',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200'
  },
  {
    level: 'LEVEL 2',
    role: 'L2 Engineer',
    badge: 'Senior Systems Tech',
    desc: 'Server diagnostics, switch VLANs, firewall rules, and complex technical fixes.',
    accentColor: 'border-t-cyan-500',
    badgeColor: 'bg-cyan-50 text-cyan-700 border-cyan-200'
  },
  {
    level: 'LEVEL 3',
    role: 'Team Lead',
    badge: 'Technical Supervisor',
    desc: 'Resource dispatch, architecture coordination, and multi-team escalations.',
    accentColor: 'border-t-emerald-500',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
  },
  {
    level: 'LEVEL 4',
    role: 'Team Head',
    badge: 'Operations Head',
    desc: 'Direct operational oversight, priority resource allocation, and SLA compliance.',
    accentColor: 'border-t-amber-500',
    badgeColor: 'bg-amber-50 text-amber-800 border-amber-200'
  },
  {
    level: 'LEVEL 5',
    role: 'CEO Level',
    badge: 'Major Impact Only',
    desc: 'Direct executive intervention and management priority for mission-critical events.',
    accentColor: 'border-t-red-500',
    badgeColor: 'bg-red-50 text-[#dc2626] border-red-200'
  }
];

export interface SolutionItem {
  id: string;
  solutionNumber: string;
  badge: string;
  name: string;
  idealFor: string;
  heroSubtitle: string;
  heroParagraph: string;
  valuePills: string[];
  image: string;
  frameworkType: 'comparison' | 'packages' | 'grid-4' | 'steps-4' | 'stages-4' | 'acquisitions-3';
  frameworkTitle: string;
  comparisonData?: {
    traditionalTitle: string;
    traditionalPoints: string[];
    convergedTitle: string;
    convergedPoints: string[];
  };
  cardsData?: {
    title: string;
    desc: string;
    badge?: string;
  }[];
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

export const SOLUTIONS_DATA: Record<string, SolutionItem> = {
  'complete-it-infrastructure': {
    id: 'complete-it-infrastructure',
    solutionNumber: 'SOLUTION 01',
    badge: 'NEW BUILDS, EXISTING MODERNIZATION & AMC',
    name: 'Complete IT Infrastructure',
    idealFor: 'Growing Enterprises, Corporate Offices & Manufacturing Facilities',
    heroSubtitle: 'Onsite Architect Surveys, Turnkey Server Rooms & Complete Support for New and Existing Estates',
    heroParagraph: 'Whether you are setting up a brand-new facility or need to audit and upgrade an existing, struggling server room, Unified Enterprise delivers complete physical and virtual infrastructure. Our senior Solutions Architects visit your facility on-site to inspect power, cooling, cabling, and compute loads. We deliver turnkey server builds, structured cabling, and take over ongoing Comprehensive & Non-Comprehensive AMCs for your existing hardware.',
    valuePills: ['Onsite Architect Facility Survey', 'New Setups & Existing Upgrades', 'Turnkey Handover & AMC Support'],
    image: '/assets/datacenter_servers.jpg',
    frameworkType: 'comparison',
    frameworkTitle: 'HOW WE HANDLE NEW AND EXISTING INFRASTRUCTURE',
    comparisonData: {
      traditionalTitle: 'Traditional Siloed / Multi-Vendor Setup',
      traditionalPoints: [
        'New Infrastructure Projects: Disjointed contractors for electricals, AC, and compute cause unbalanced power phases and localized thermal hotspots that degrade server lifespans by up to 40%.'
      ],
      convergedTitle: 'Unified Enterprise Converged Model',
      convergedPoints: [
        'Existing Infrastructure Support & Modernization: We audit your current server room, identify thermal bottlenecks and cable clutter, perform component upgrades (RAM, SSDs, PSUs), and take over full operational maintenance under unified AMC contracts.'
      ]
    },
    coreAdvantages: [
      {
        title: 'On-Site Solution Architect Visits',
        desc: 'Our architects personally inspect your site for power balancing, heat dissipation, structural cable routes, and rack positioning before designing any schematic.'
      },
      {
        title: 'Support for Existing Hardware Estates',
        desc: "You don't need to replace working equipment. We audit, repair, re-cable, and maintain your existing servers, storage, and network switches."
      },
      {
        title: 'Comprehensive & Non-Comprehensive AMCs',
        desc: 'Flexible maintenance agreements covering preventive health checks, emergency technician visits, and hardware spare parts replacement.'
      }
    ],
    handoverChecklist: [
      'Onsite physical facility survey and 3D server rack elevation schematics.',
      'Turnkey rack assembly, Category 6A structured copper, and fiber optic cabling.',
      'Clustered server deployment (Dell / HPE) and virtualization setup (VMware / Hyper-V).',
      'Full infrastructure audit report and ongoing AMC maintenance contract handover.'
    ],
    deepDive: {
      title: 'Engineering High-Availability Enterprise Infrastructure: On-Site Architect Surveys, New Server Rooms & Modernizing Existing Estates',
      readTime: '4 min read',
      paragraphs: [
        'Building or modernizing an enterprise IT computing facility requires direct on-site physical inspection. Remote desktop estimates cannot accurately gauge building power harmonics, electrical phase balancing, floor weight tolerances, or heat dissipation dynamics. When organizations attempt to assemble a server room using disconnected contractors (relying on a local electrician for wiring, an independent AC technician for cooling, and a hardware broker for servers), the result is uncoordinated systems: unbalanced power phases cause unexpected circuit breaker trips, while localized thermal hotspots degrade server component lifespans by up to 40%.',
        'At Unified Enterprise, our senior Solutions Architects personally visit your facility on-site. We conduct thorough pre-procurement surveys, calculate BTU heat loads, inspect power distribution units (PDUs), and design comprehensive 3D rack elevation blueprints. For new facility setups, we deliver turnkey computing estates within 2 to 3 weeks, deploying N+1 double-conversion online UPS systems that provide zero-transfer-time battery power to bridge generator synchronization gaps cleanly.',
        'Crucially, our engineering expertise extends to existing infrastructure. If your organization already has an operational server room that suffers from cable clutter, high temperatures, or aging hardware, our team audits your existing setup. We re-terminate and dress messy cabling, perform component upgrades (adding RAM, hot-swap SSDs, and redundant power supplies to existing Dell and HPE servers), and assume complete operational maintenance under unified Comprehensive and Non-Comprehensive AMCs. This ensures your existing technology investments are protected and modernized without forcing you into expensive, unnecessary replacements.'
      ]
    },
    authorizedOem: 'Dell PowerEdge, HPE ProLiant, APC Smart-UPS, Schneider Electric Racks, CommScope Systimax'
  },

  'unified-it-telecom-management': {
    id: 'unified-it-telecom-management',
    solutionNumber: 'SOLUTION 02',
    badge: 'VOICE PBX, DATA NETWORKS & HARDWARE AMC',
    name: 'Unified IT & Telecom Management',
    idealFor: 'Corporate Offices, Multi-Floor Campuses & Organizations with Intercom & Desk Phones',
    heroSubtitle: 'Converged Office Voice Telephony, Data Switching & Unified Onsite Hardware Maintenance',
    heroParagraph: 'Stop coordinating separate contractors for your office intercom, phone lines, internet routers, and desktop computers. Unified Enterprise unifies your IP-PBX telephony, SIP trunks, managed switches, and Wi-Fi under a single service contract. We provide on-site L1 and L2 engineers to handle day-to-day user desk phones, troubleshoot network ports, and maintain your existing voice and IT hardware.',
    valuePills: ['Lossless Voice Priority (QoS)', 'On-Site L1/L2 Engineer Support', 'Complete Voice & IT Hardware AMC'],
    image: '/assets/ue_telecom_voice.jpg',
    frameworkType: 'comparison',
    frameworkTitle: 'OLD FRAGMENTED SETUP VS. UNIFIED HARDWARE & TELECOM MANAGEMENT',
    comparisonData: {
      traditionalTitle: 'Traditional Siloed / Multi-Vendor Setup',
      traditionalPoints: [
        'Separate monthly bills and repairmen for intercom PBX, office internet, and desktop PCs.',
        'Voice calls stutter or drop whenever staff download files because networks are unmanaged.',
        'Phone vendors blame your router; internet technicians blame your telephone exchange.'
      ],
      convergedTitle: 'Unified Enterprise Converged Model',
      convergedPoints: [
        'Single unified maintenance contract (AMC) covering office phone systems, switches, and computer hardware.',
        'Smart voice priority routing (DiffServ QoS) ensures desk phones and softphone calls never stutter or drop.',
        'One accountable partner: our on-site L1/L2 engineers handle both telephone extensions and network switches.'
      ]
    },
    coreAdvantages: [
      {
        title: 'On-Site L1 & L2 Support Engineers',
        desc: 'Dedicated engineers stationed on-site or dispatched on-demand to handle desk phone configuration, user laptop issues, and network cabling.'
      },
      {
        title: 'Support for Existing PBX & Phone Systems',
        desc: 'We maintain, reprogram, and service your existing Matrix, Grandstream, or Panasonic PBX boxes under our comprehensive AMC.'
      },
      {
        title: 'Lossless Voice Quality Routing',
        desc: 'Automated Voice VLANs separate voice calls from heavy data downloads, keeping customer and internal calls crystal-clear.'
      }
    ],
    handoverChecklist: [
      'Hybrid IP-PBX system deployment or existing PBX reprogramming (Matrix, Grandstream).',
      'PoE managed switch configuration with dynamic Voice VLAN priority tagging.',
      'Desktop executive IP-phones, softphones, and digital IVR menu programming.',
      'Dedicated on-site engineer visit schedule and monthly maintenance SLA reporting.'
    ],
    deepDive: {
      title: 'Converged Voice & Data Management: Eliminating Vendor Blame Games with On-Site L1/L2 Engineers and Complete Hardware AMCs',
      readTime: '4 min read',
      paragraphs: [
        'Voice telephony and corporate computer networks operate under fundamentally different transmission mechanics. While email and web browsing tolerate temporary packet retransmissions over TCP, real-time voice conversations rely on sensitive UDP streams. Human ears detect speech stutter, acoustic jitter, and robotic distortion with as little as 30 milliseconds of latency or 1% packet loss. When phone PBX systems share an unmanaged network with employee desktops, large file downloads choke telephone bandwidth. When calls drop, telephone vendors blame the office router, and internet technicians blame the PBX hardware.',
        'Unified Enterprise eliminates this operational division by providing a single converged management model for both voice and data hardware. We deploy or re-configure managed switches with automated Voice VLANs (using LLDP-MED) and Layer-3 DiffServ Quality of Service (QoS) tagging, guaranteeing that voice audio receives priority queue forwarding ahead of bulk data downloads.',
        'To support your daily operations, we provide dedicated on-site L1 and L2 support engineers. Our L1 engineers handle day-to-day desktop phone setups, extension re-routing, and user laptop connections, while our L2 engineers manage core switch VLANs, PBX call flows, and firewall security. Furthermore, we provide complete Annual Maintenance Contracts (AMCs) for your existing PBX boxes (Matrix, Grandstream, Panasonic) and network switches, giving your business a single accountable partner with guaranteed onsite response times.'
      ]
    },
    authorizedOem: 'Matrix Comsec ETERNITY, Grandstream Networks, Yealink Enterprise, Fortinet FortiVoice'
  },

  'it-infrastructure-smes': {
    id: 'it-infrastructure-smes',
    solutionNumber: 'SOLUTION 03',
    badge: 'SMALL & MEDIUM BUSINESS IT SUPPORT',
    name: 'IT Infrastructure for SMEs',
    idealFor: 'Small & Medium Businesses (20 to 150 Workstations), Clinics, Regional Offices & Firms',
    heroSubtitle: 'Complete Office IT Setup, Onsite L1/L2 Support & Ransomware Backups at a Fixed Monthly Cost',
    heroParagraph: 'Growing businesses need reliable computers, fast Wi-Fi, safe accounting backups, and quick help when technology breaks, without the expense of hiring an expensive internal IT team. We supply, set up, and maintain your entire office IT: compact server racks, commercial Wi-Fi, daily ransomware-proof backups for Tally and accounting, and friendly on-site L1/L2 engineer support on a predictable monthly AMC.',
    valuePills: ['Onsite L1/L2 Engineer Support', 'Ransomware-Proof Tally Vault', 'Fixed Monthly Hardware AMC'],
    image: '/assets/modern_enterprise_office.jpg',
    frameworkType: 'packages',
    frameworkTitle: 'RIGHT-SIZED PACKAGES FOR GROWING BUSINESSES',
    cardsData: [
      {
        title: 'Starter Package (20–35 Seats)',
        desc: 'Compact soundproof 9U server cabinet, commercial Wi-Fi 6, automated local Tally/accounting backup vault, and on-demand L1 onsite help.',
        badge: '20–35 Seats'
      },
      {
        title: 'Growth Package (35–75 Seats)',
        desc: '15U server rack, 24-port PoE switch, dual-WAN backup internet router, cloud-mirrored backups, and scheduled weekly onsite L1 engineer visits.',
        badge: '35–75 Seats'
      },
      {
        title: 'Scale Enterprise (75–150 Seats)',
        desc: 'Full 24U rack, clustered Dell servers, Next-Gen firewall perimeter defense, dedicated on-site L1/L2 engineers, and priority hardware AMC.',
        badge: '75–150 Seats'
      }
    ],
    coreAdvantages: [
      {
        title: 'On-Site L1 & L2 Support Engineers',
        desc: 'Friendly, certified technicians visit your office to fix slow computers, configure software, connect printers, and assist your employees in person.'
      },
      {
        title: 'Ransomware-Proof Accounting Backups',
        desc: 'Automated daily snapshots stored in an air-gapped local vault and mirrored offsite so your Tally data can never be encrypted or held hostage.'
      },
      {
        title: 'Complete Maintenance for Existing PCs',
        desc: 'We take over your existing computers, laptops, and networking under our AMC, tuning up slow machines and keeping everything running smoothly.'
      }
    ],
    handoverChecklist: [
      'Compact, quiet server cabinet with battery power backup (UPS) and organized patch cabling.',
      'Fast commercial office Wi-Fi with separate logins for staff and visitors.',
      'Automated daily backup system configured for Tally, Busy, and shared office documents.',
      'Dedicated L1/L2 on-site engineer support schedule and remote helpdesk ticketing.'
    ],
    deepDive: {
      title: 'The SME Technology Blueprint: Achieving Enterprise Stability, Onsite L1/L2 Help, and Ransomware Protection on a Predictable Budget',
      readTime: '4 min read',
      paragraphs: [
        'Small and medium businesses (20 to 150 employees) face a common IT dilemma: they need stable computers, fast Wi-Fi, and safe financial backups, but cannot justify paying tens of lakhs annually for an internal IT department. Consequently, many SMEs operate with unmanaged home routers, unbacked-up shared PCs running accounting software, and ad-hoc local repairmen. This creates severe vulnerability: a single ransomware payload delivered through phishing can encrypt central accounting databases (Tally, Busy, or ERP), bringing daily billing to a dead stop and causing irreversible financial damage.',
        'Unified Enterprise delivers a complete, right-sized technology foundation engineered specifically for growing commercial offices. We install compact, soundproof server racks that house silent commercial-grade switches, battery backups, and local storage vaults without requiring dedicated server room construction or noisy air conditioning.',
        'Our data protection strategy enforces an automated 3-2-1 backup topology: company accounting databases and shared folders are snapshotted locally onto an air-gapped business NAS every 4 hours using immutable, read-only volume versions that ransomware cannot encrypt or overwrite. Every night, an encrypted mirror is synchronized offsite. Supported by our on-site L1 and L2 engineers who visit your office regularly to resolve employee computer issues and tune up slow machines, growing companies gain enterprise-grade stability under a fixed, predictable monthly AMC.'
      ]
    },
    authorizedOem: 'Dell OptiPlex Fleets, HP ProDesk, Synology Plus Series NAS, Aruba Instant On, Sophos XGS Firewalls'
  },

  'multi-location-it-management': {
    id: 'multi-location-it-management',
    solutionNumber: 'SOLUTION 04',
    badge: 'BRANCH NETWORKS, HARDWARE DISPATCH & ONSITE AMC',
    name: 'Multi-Location IT Management',
    idealFor: 'Companies with Regional Branches, Retail Showrooms, Multi-City Offices & Warehouses',
    heroSubtitle: 'Standardized Branch Hardware, Multi-WAN Internet Failover & Onsite Engineer Dispatch',
    heroParagraph: 'Managing computers and networks across multiple regional branches or retail showrooms is difficult when local broadband cuts out and there is no technical staff on-site. Unified Enterprise delivers standardized, pre-configured branch hardware kits, installs dual-WAN routers with automatic 4G/5G mobile backup so branch internet never dies, and coordinates on-site engineer visits and hardware maintenance across your locations.',
    valuePills: ['Automatic 4G/5G Internet Backup', 'Pre-Configured Branch Kits', 'Onsite L1/L2 Regional Dispatch'],
    image: '/assets/real_datacenter_servers.jpg',
    frameworkType: 'grid-4',
    frameworkTitle: 'HOW WE MANAGE AND PROTECT YOUR BRANCH OFFICES',
    cardsData: [
      {
        title: '⚡ Automatic Internet Failover',
        desc: 'Dual-WAN branch routers automatically switch from broadband fiber to 4G/5G mobile backup within half a second if local cables cut out.'
      },
      {
        title: '⚡ Standardized Branch Hardware Kits',
        desc: 'We assemble, test, and ship complete plug-and-play kits (router, switch, Wi-Fi AP, mini UPS) ready to connect to your central head office.'
      },
      {
        title: '⚡ Onsite Engineer Regional Dispatch',
        desc: 'When a branch computer or router fails, our certified L1/L2 field engineers visit the branch location with replacement components.'
      },
      {
        title: '⚡ Multi-Location Hardware AMC',
        desc: 'Consolidate all branch computer, printer, and network maintenance under a single unified corporate AMC agreement.'
      }
    ],
    coreAdvantages: [
      {
        title: 'Onsite Regional Engineer Dispatch',
        desc: 'Field technicians dispatched to your branch locations to troubleshoot computers, repair hardware, and replace faulty equipment on-site.'
      },
      {
        title: 'Automatic 4G/5G Connection Backup',
        desc: 'Keeps branch operations and internal internet connected through secondary mobile cellular links during broadband fiber disruptions.'
      },
      {
        title: 'Single Corporate AMC Contract',
        desc: 'Eliminates dealing with different local computer repair shops in every city by covering all branches under one unified contract.'
      }
    ],
    handoverChecklist: [
      'Pre-configured branch hardware kit (multi-WAN failover router, PoE switch, Wi-Fi AP, and mini UPS).',
      'Secure encrypted VPN tunnel setup connecting branch offices back to head office servers.',
      'Central cloud dashboard for monitoring branch device status and internet health.',
      'Multi-branch hardware maintenance agreement (AMC) with on-site technician dispatch.'
    ],
    deepDive: {
      title: 'Managing Distributed Branch IT: Standardized Hardware Kits, Multi-WAN Automatic Failover & Onsite Engineer Dispatch',
      readTime: '4 min read',
      paragraphs: [
        'Operating multiple regional branch offices, retail showrooms, or warehouses creates serious IT headaches. Local broadband connections in Tier-2 and Tier-3 cities suffer from frequent, unannounced physical fiber cuts due to road construction and utility digging. When a branch loses internet connectivity, local computers go offline, branch staff cannot access central inventory systems, and central headquarters IT has no visibility into the issue. Furthermore, hiring different unverified local computer repair shops in every city results in unpredictable service quality and inflated invoices.',
        'Unified Enterprise provides standardized branch infrastructure management. We build, test, and ship complete pre-configured branch hardware kits containing a multi-WAN router, PoE switch, commercial Wi-Fi access point, and power backup. Each branch router is configured with active dual-WAN auto-failover: if the primary terrestrial fiber broadband connection cuts out, the router automatically switches all branch traffic to a secondary 4G/5G mobile cellular backup link within 500 milliseconds, ensuring branch staff stay connected to central head office ERPs without manual rebooting.',
        'To support physical hardware at regional locations, Unified Enterprise coordinates nationwide on-site engineer dispatch. When a branch computer, printer, or switch experiences a physical failure, our certified L1/L2 field engineers visit the branch location with replacement components. By consolidating all branch computer and networking hardware under a single corporate AMC agreement, multi-location enterprises gain consistent IT reliability and predictable operational costs across all cities.'
      ]
    },
    authorizedOem: 'Fortinet FortiGate, Peplink Balance Multi-WAN, Aruba Instant On, Dell & HP Workstations'
  },

  'call-centre-bpo-infrastructure': {
    id: 'call-centre-bpo-infrastructure',
    solutionNumber: 'SOLUTION 05',
    badge: 'NEW BUILDS, EXISTING FLOOR TAKEOVER & AMC',
    name: 'Call-Centre & BPO Infrastructure',
    idealFor: 'Customer Support Centers, Tele-Sales Operations & Existing BPO Call Floors',
    heroSubtitle: 'Complete Support for New & Existing Call Centers: Workstations, Headsets & Dedicated Floor AMC',
    heroParagraph: 'Whether you are setting up a brand-new call floor or need a reliable partner to take over, repair, and maintain your existing calling setup, Unified Enterprise provides complete hardware governance. We supply new Dell/HP commercial desktops and noise-canceling headsets, and we actively take over existing call-center floors, servicing existing agent PCs, repairing headsets, maintaining PRI/SIP gateway racks, keeping on-site buffer spares, and stationing dedicated L1/L2 engineers directly on your floor under comprehensive AMC.',
    valuePills: ['Take Over Existing Floor AMC', 'Dedicated Onsite Floor Engineers', 'Repairs for Existing PCs & Headsets'],
    image: '/assets/telecom_ip_phones.jpg',
    frameworkType: 'comparison',
    frameworkTitle: 'SUPPORTING BOTH EXISTING CALL FLOORS AND NEW EXPANSIONS',
    comparisonData: {
      traditionalTitle: 'Traditional Siloed / Multi-Vendor Setup',
      traditionalPoints: [
        'Taking Over Existing Calling Floors: We audit and service your current agent PCs, repair crackling headsets, re-terminate messy floor cabling, tune up existing PRI/telephony gateway racks, and eliminate floor downtime under a single comprehensive AMC.'
      ],
      convergedTitle: 'Unified Enterprise Converged Model',
      convergedPoints: [
        'New Call Floor Buildouts & Scaling: Complete turnkey procurement and setup of heavy-duty Dell/HP agent PCs, dual-monitor mounts, professional noise-canceling headsets (Jabra/Poly), and rackmount telephony servers with on-site buffer stock.'
      ]
    },
    coreAdvantages: [
      {
        title: 'Take Over & Maintain Existing Floors',
        desc: "You don't need to buy new hardware. We audit, repair, tune up, and maintain your existing agent workstations, headsets, and telephony racks under unified AMC."
      },
      {
        title: 'On-Site Floor Support Engineers',
        desc: 'L1/L2 hardware engineers stationed directly on your call floor to immediately fix freezing PCs, swap faulty headsets from on-site buffer stock, and resolve port drops.'
      },
      {
        title: 'BPO Hardware AMC & Rapid Spares',
        desc: 'Comprehensive hardware maintenance with on-site buffer inventory of spare keyboards, mice, headsets, power supplies, and desktop PCs.'
      }
    ],
    handoverChecklist: [
      'Takeover audit, health check, and comprehensive AMC for existing agent PC fleets and headsets.',
      'Commercial agent PC deployment (compact Dell/HP desktops, SSD storage, and dual-monitor stands).',
      'Professional noise-canceling headsets (Jabra Biz Series / Poly) with acoustic voice shielding.',
      'Dedicated on-site L1/L2 floor engineer schedule with on-site buffer replacement stock.'
    ],
    deepDive: {
      title: 'Call-Centre & BPO Hardware Infrastructure: Supporting Existing Floors, Heavy-Duty Workstations & Dedicated Floor AMC',
      readTime: '4 min read',
      paragraphs: [
        'In high-velocity contact centers and BPO operations, physical hardware reliability directly impacts client SLAs and company profitability. When an agent\'s workstation freezes, a headset microphone crackles, or a network switch port disconnects, paid agent hours are wasted and customer satisfaction drops. High employee density creates harsh operational conditions: workstations run continuously across multiple 8-hour shifts, while hundreds of simultaneous conversations create intense acoustic background chatter that bleeds into customer calls.',
        'Unified Enterprise provides complete hardware governance for both existing calling floors and new expansions. If your organization already has an operational BPO setup, you do not need to replace working equipment. We actively step in to take over existing call-center floors under our comprehensive AMC: our engineers audit your current agent PCs, repair crackling headsets, re-terminate messy floor wiring, tune up existing PRI/telephony gateway racks, and maintain an on-site buffer inventory of spare keyboards, mice, power supplies, and desktop PCs for instantaneous hot-swapping.',
        'For new floor buildouts, we supply heavy-duty commercial desktop PC fleets (Dell OptiPlex, HP ProDesk) configured with high-speed solid-state storage and dual-monitor mounts, equipped with professional noise-canceling headsets (Jabra Biz Series / Poly Blackwire). Most importantly, we provide dedicated on-site L1 and L2 support engineers stationed directly on your call floor to resolve hardware faults in real time, ensuring your calling seats operate non-stop 24/7.'
      ]
    },
    authorizedOem: 'Dell OptiPlex Fleets, HP ProDesk, Jabra Biz Series, Poly Blackwire, Matrix Comsec, Grandstream'
  },

  'network-design-implementation': {
    id: 'network-design-implementation',
    solutionNumber: 'SOLUTION 06',
    badge: 'ONSITE SURVEYS, STRUCTURED CABLING & SWITCHING',
    name: 'Network Design & Implementation',
    idealFor: 'New Facility Build-Outs, Office Expansions, Renovations & Existing Network Cleanups',
    heroSubtitle: 'Onsite Physical Cable Surveys, Fluke-Tested Structured Cabling & Existing Network Overhauls',
    heroParagraph: 'Over 70% of persistent office internet slowdowns and dropped connections are caused by amateur wiring, tangled rack cabling, and poor Wi-Fi coverage. Our senior network engineers visit your facility on-site to survey cable routes and measure wireless propagation. We design and install certified structured Category 6A and fiber backbones for new offices, and we completely clean up, re-terminate, and modernize existing messy networks under full AMC support.',
    valuePills: ['Onsite Physical Route Survey', '100% Fluke-Tested & Certified', 'Existing Cable Cleanup & AMC'],
    image: '/assets/datacenter_cabling_rack.jpg',
    frameworkType: 'comparison',
    frameworkTitle: 'BEFORE VS. AFTER: PROFESSIONAL NETWORK TRANSFORMATION',
    comparisonData: {
      traditionalTitle: 'Traditional Siloed / Multi-Vendor Setup',
      traditionalPoints: [
        "Tangled, unlabeled 'spaghetti' cables behind server racks that nobody can trace or fix.",
        'Wi-Fi signals drop when employees walk between meeting rooms and private cabins.',
        'Unmanaged switches cause broadcast loops and freeze internal office networks.'
      ],
      convergedTitle: 'Unified Enterprise Converged Model',
      convergedPoints: [
        'Concealed, color-coded, labeled Cat6A cabling neatly organized into labeled modular patch bays.',
        'Onsite wireless survey ensures ceiling access points deliver seamless roaming with zero dropouts.',
        'Enterprise managed switching with isolated VLANs separating corporate PCs, voice phones, and guest Wi-Fi.'
      ]
    },
    coreAdvantages: [
      {
        title: 'Onsite Physical Cable Surveys',
        desc: 'Our engineers personally inspect your office floor plans, false ceilings, and riser conduits to map the cleanest, safest cable pathways.'
      },
      {
        title: 'Existing Network Cable Cleanup',
        desc: 'We take over messy, tangled existing server racks, tracing lines, re-terminating bad ports, labeling all drops, and dressing cables neatly.'
      },
      {
        title: 'Fluke DSX Laboratory Testing',
        desc: 'Every single cable run is tested with professional Fluke diagnostic scanners, verifying gigabit speed, crosstalk, and return loss.'
      }
    ],
    handoverChecklist: [
      'Detailed CAD architectural cabling path blueprints and server rack elevation schematics.',
      'Certified structured cabling installation using Category 6A copper and fiber optic backbones.',
      'Individual Fluke DSX CableAnalyzer test reports proving every port runs at maximum speed.',
      'Managed L2/L3 switch configuration and ongoing network hardware AMC support.'
    ],
    deepDive: {
      title: 'Structured Network Engineering: On-Site Physical Surveys, Fluke-Certified Cabling & Overhauling Existing Messy Networks',
      readTime: '4 min read',
      paragraphs: [
        'Industry telemetry indicates that over 70% of persistent office internet slowdowns, dropped video meetings, and network disconnects originate at Layer 1, the physical cabling and wireless environment. Amateur cabling installations frequently suffer from pinched wires, excessive bend radiuses, unshielded proximity to high-voltage electrical lines, and the use of cheap Copper-Clad Aluminum (CCA) wiring that rapidly degrades. Once office false ceilings and walls are closed, troubleshooting bad wiring is disruptive and expensive.',
        'Unified Enterprise approaches networking with civil and electrical precision. Our senior network engineers visit your facility in person to survey cable routes, inspect riser shafts, and assess building materials. We install 100% solid bare copper Category 6A cabling and fiber optic backbones that deliver full gigabit throughput. Every installed cable drop is independently tested with laboratory-grade Fluke DSX-8000 CableAnalyzers, verifying wiremap, near-end crosstalk (NEXT), and return loss to provide certified compliance reports.',
        'For existing facilities, we specialize in comprehensive network cable cleanups. If your server room currently suffers from a messy, tangled \'spaghetti\' rack where nobody knows which wire goes where, our engineers trace every line, re-terminate faulty keystone jacks, dress cables into neat vertical managers, and label every port. We then configure managed switches with isolated VLANs separating corporate computers, VoIP phones, and guest Wi-Fi, taking over ongoing network maintenance under our comprehensive AMC.'
      ]
    },
    authorizedOem: 'Aruba CX Series, CommScope Systimax, Schneider Electric Actassi, Fluke Networks, D-Link Enterprise'
  },

  'firewall-network-security': {
    id: 'firewall-network-security',
    solutionNumber: 'SOLUTION 07',
    badge: 'EXISTING SECURITY AUDITS, NGFW & AMC',
    name: 'Firewall & Network Security',
    idealFor: 'Corporate Offices, Financial Firms, Legal Practices & Companies Protecting Data',
    heroSubtitle: 'Comprehensive Security Audits for Existing Firewalls, Next-Gen Protection & Onsite AMC',
    heroParagraph: 'Basic routers provide almost zero defense against modern ransomware, phishing scams, and unauthorized data leaks. Unified Enterprise deploys Next-Generation Firewalls (Fortinet, Sophos) and provides complete Security Audits for your existing firewall setups. Our certified L2 security engineers inspect your existing firewall configuration, clean up redundant access rules, close vulnerable open ports, upgrade firmware, and maintain your security appliance under dedicated AMC.',
    valuePills: ['Audits for Existing Firewalls', 'Zero-Trust Network Isolation', 'Onsite L2 Security Engineer Support'],
    image: '/assets/network_security_firewall.jpg',
    frameworkType: 'grid-4',
    frameworkTitle: 'COMPREHENSIVE SECURITY AUDITS & ONGOING MANAGEMENT',
    cardsData: [
      {
        title: 'Existing Firewall Security Audit',
        desc: 'We review your current firewall rules, close unused ports, remove outdated employee access policies, and patch security vulnerabilities.'
      },
      {
        title: 'Deep SSL Traffic Inspection',
        desc: 'Scans encrypted web downloads in real time, stopping hidden ransomware and malicious attachments before they touch laptops.'
      },
      {
        title: 'Zero-Trust Internal Isolation',
        desc: 'Separates guest Wi-Fi from internal accounting and database servers, preventing viruses from spreading across departments.'
      },
      {
        title: 'Encrypted Work-From-Home VPN',
        desc: 'Remote employees connect through encrypted tunnels with Mobile Phone 2-Factor Authentication (OTP) for safe login anywhere.'
      }
    ],
    coreAdvantages: [
      {
        title: 'Audits & Rule Cleanup for Existing Firewalls',
        desc: 'Already have a firewall? Our L2 engineers audit your configuration, optimize traffic rules, update firmware, and fix security loopholes.'
      },
      {
        title: 'Dedicated Firewall AMC & Monitoring',
        desc: 'Ongoing maintenance contract covering daily threat signature updates, emergency incident response, and hardware health checks.'
      },
      {
        title: 'On-Site L2 Security Engineers',
        desc: 'Certified network security engineers handle policy changes, VPN user onboarding, and threat isolation directly at your facility.'
      }
    ],
    handoverChecklist: [
      'Comprehensive security audit report identifying vulnerabilities in your existing setup.',
      'Next-Gen Firewall installation or existing appliance reconfiguration (Fortinet, Sophos).',
      'Secure client SSL-VPN setup with two-factor authentication (MFA/OTP) for remote workers.',
      'Monthly executive threat summary report and dedicated firewall hardware AMC agreement.'
    ],
    deepDive: {
      title: 'Corporate Firewall & Cyber Defense: Comprehensive Audits for Existing Firewalls, Next-Gen Protection & On-Site Security AMC',
      readTime: '4 min read',
      paragraphs: [
        'Standard internet routers provided by broadband vendors have zero defenses against modern ransomware, phishing payloads, and data theft. Even companies that previously purchased commercial firewalls often suffer breaches because their appliances are misconfigured: outdated firmware is left unpatched, default administrator passwords remain unchanged, and dozens of legacy firewall rules remain wide open after past projects ended.',
        'Unified Enterprise provides comprehensive Security Audits for your existing firewalls and network infrastructure. Our certified L2 network security engineers examine your existing Fortinet, Sophos, or other firewall appliances. We conduct a complete configuration review: identifying open vulnerable ports, removing redundant and conflicting access rules, updating firmware to eliminate known exploits, and tuning Intrusion Prevention System (IPS) policies to your specific business requirements.',
        'For active protection, we deploy Next-Generation Firewalls with hardware-accelerated deep SSL inspection that decrypts and scans encrypted web traffic in real time, stopping malicious payloads before they reach user laptops. We enforce Zero-Trust internal network isolation, ensuring that visitor Wi-Fi or infected employee laptops cannot access core accounting and database servers. Backed by our ongoing Firewall AMC, our L2 engineers handle policy updates, configure secure work-from-home VPN access with mobile phone two-factor authentication (MFA/OTP), and deliver monthly executive threat audit reports.'
      ]
    },
    authorizedOem: 'Fortinet FortiGate (60F to 200F Series), Sophos XGS Appliances, FortiClient EMS, Sophos Intercept X'
  },

  'workplace-remote-office': {
    id: 'workplace-remote-office',
    solutionNumber: 'SOLUTION 08',
    badge: 'NEW LAPTOPS, EXISTING FLEET AMC & ONSITE L1 HELP',
    name: 'Workplace & Remote Office Infrastructure',
    idealFor: 'Hybrid Workforces, Corporate Offices & Distributed Employee Teams',
    heroSubtitle: 'Pre-Configured Laptops, Complete AMC for Existing Fleets & Onsite L1/L2 User Support',
    heroParagraph: 'Managing laptops and office setups across distributed teams creates constant headaches whether you are purchasing new laptops or struggling with existing ones. Unified Enterprise handles both: we supply pre-configured Dell, HP, Lenovo, and Acer laptops with full-disk encryption, and we take over existing company laptop fleets, re-imaging machines, installing security baselines, upgrading slow SSDs/RAM, and providing dedicated on-site L1/L2 engineer support under a single fleet AMC.',
    valuePills: ['Manage Existing & New Laptop Fleets', 'Onsite L1/L2 User Helpdesk', 'Complete Laptop Fleet AMC'],
    image: '/assets/docking_station_hardware.jpg',
    frameworkType: 'steps-4',
    frameworkTitle: 'COMPLETE WORKPLACE SUPPORT: FROM EXISTING FLEETS TO BOARDROOMS',
    cardsData: [
      {
        title: 'Step 1: Existing Fleet Takeover & Sourcing',
        desc: 'We audit and take over existing employee laptops, or procure new Dell, HP, Lenovo, and Acer commercial laptops with company software and BitLocker encryption.'
      },
      {
        title: 'Step 2: Onsite L1/L2 User Support',
        desc: 'Stationed or visiting on-site engineers assist office staff with laptop onboarding, printer connections, Wi-Fi, and day-to-day software issues.'
      },
      {
        title: 'Step 3: Boardroom 4K Video Collaboration',
        desc: 'Installation of turnkey smart video bars (Logitech / Poly) with beamforming microphones that eliminate room echo during executive meetings.'
      },
      {
        title: 'Step 4: Rapid Replacement Swap Pool',
        desc: 'We maintain pre-staged buffer laptops in our warehouse, dispatching a replacement within 24 hours if an employee machine breaks down.'
      }
    ],
    coreAdvantages: [
      {
        title: 'Take Over Existing Laptop Fleets',
        desc: 'You don\'t need to buy all-new machines. We audit, re-image, update, and maintain your existing company laptops under our fleet AMC, giving older machines a speed boost with SSD and RAM upgrades.'
      },
      {
        title: 'On-Site L1/L2 User Helpdesk',
        desc: 'Friendly on-site technical engineers assist employees with day-to-day software questions, laptop tune-ups, email setup, and peripherals.'
      },
      {
        title: 'Complete Laptop Fleet AMC',
        desc: 'Comprehensive hardware maintenance covering routine servicing, thermal cleaning, broken screen/keyboard repairs, and spare parts.'
      }
    ],
    handoverChecklist: [
      'Audit, re-imaging, and AMC takeover for existing company laptop and desktop fleets.',
      'Pre-configured commercial corporate laptop fleet (Dell, HP, Lenovo, Acer) with BitLocker.',
      'Boardroom and huddle room video conferencing installation (smart 4K camera, microphones, and touch controllers).',
      'Dedicated on-site L1/L2 engineer support schedule and laptop fleet AMC contract.'
    ],
    deepDive: {
      title: 'Turnkey Workplace Infrastructure: Managing Existing Laptop Fleets, Pre-Configured New Laptops & Onsite L1/L2 Support',
      readTime: '4 min read',
      paragraphs: [
        'Managing laptops, remote employee hardware, and meeting room collaboration across distributed teams creates constant operational friction. When companies hire new employees or transition to hybrid work, managing an aging, mixed fleet of laptops causes constant IT support tickets. Furthermore, when employees work from home, unencrypted laptops pose severe data leak risks if lost or stolen. In the office, executive boardroom meetings are frequently disrupted by muffled audio, grainy webcams, and room echo.',
        'Unified Enterprise provides complete end-to-end workplace hardware governance for both existing employee fleets and new equipment rollouts. You do not need to buy all-new laptops; we can take over your existing company laptop fleet under our comprehensive AMC. Our engineers audit your current machines, re-image systems with standardized software, install corporate antivirus and hardware BitLocker encryption, upgrade slow storage, and provide ongoing remote and on-site L1/L2 technical support to keep staff productive.',
        'For new equipment, we supply commercial Dell, HP, Lenovo, and Acer enterprise laptops pre-configured with corporate images and zero-touch deployment. To support physical office facilities, our on-site engineers handle daily desktop support, printer troubleshooting, and local network assistance. For meeting rooms, we install turnkey 4K smart video conference bars (Logitech Rally, Poly Studio) equipped with beamforming microphone arrays that automatically track active speakers and eliminate background ambient room noise.'
      ]
    },
    authorizedOem: 'Dell Latitude 5000/7000, HP EliteBook & ProBook, Lenovo ThinkPad T/L Series, Logitech Rally, Microsoft Intune'
  },

  'it-hardware-procurement': {
    id: 'it-hardware-procurement',
    solutionNumber: 'SOLUTION 09',
    badge: 'AUTHORIZED TIER-1 SOURCING, RENTALS & AMC',
    name: 'IT Hardware Procurement',
    idealFor: 'Corporate Procurement Teams, Business Owners & IT Operations Heads',
    heroSubtitle: 'Authorized Tier-1 Dell, HP, Lenovo & Acer Sourcing, Flexible Rentals & Comprehensive Hardware AMC',
    heroParagraph: 'Buying corporate computers from unverified brokers or retail shops risks non-OEM duplicate RAM, voided manufacturer warranties, and steep distributor markups. As an authorized corporate partner for Dell, HP, Lenovo, and Acer, Unified Enterprise provides 100% factory-sealed laptops, desktops, and servers. We offer outright purchase with volume enterprise discounts, flexible short/long-term rental plans (OpEx), mandatory 24-hour factory burn-in testing, and comprehensive ongoing AMC support.',
    valuePills: ['100% Authorized Dell, HP, Lenovo & Acer', 'Flexible Purchase & Rental Options', 'Complete Post-Warranty AMC'],
    image: '/assets/ue_hardware_procurement.jpg',
    frameworkType: 'acquisitions-3',
    frameworkTitle: '3 FLEXIBLE WAYS TO ACQUIRE YOUR CORPORATE HARDWARE',
    cardsData: [
      {
        title: '💼 Outright Purchase (CapEx)',
        desc: 'Direct corporate enterprise pricing with volume tier discounts, official GST invoices for full input tax credit, and direct OEM manufacturer warranty registration.'
      },
      {
        title: '💼 Monthly Rental Leases (OpEx)',
        desc: 'Preserve corporate working capital. Rent commercial Dell, HP, Lenovo, and Acer laptop fleets for 6, 12, or 24 months with zero upfront capital drain and free maintenance.'
      },
      {
        title: '💼 Comprehensive Post-Warranty AMC',
        desc: 'When manufacturer warranties expire, our in-house hardware engineering team takes over with complete AMC coverage including genuine spare parts and on-site repair.'
      }
    ],
    coreAdvantages: [
      {
        title: '100% Authorized Tier-1 Sourcing',
        desc: 'Direct partner sourcing for Dell Technologies, HP Commercial, and Lenovo. Every serial number is genuine and verified in manufacturer databases.'
      },
      {
        title: 'Zero \'Dead on Arrival\' Hardware',
        desc: 'Every machine undergoes a 24-hour diagnostic burn-in stress test in our testing lab before it is delivered to your facility.'
      },
      {
        title: 'On-Site Hardware Maintenance & Repairs',
        desc: 'Our certified technicians handle physical repairs, motherboard servicing, RAM/SSD upgrades, and component replacements on-site.'
      }
    ],
    handoverChecklist: [
      'Transparent corporate commercial quote with volume-tiered discounts and model-wise specifications.',
      'Official OEM manufacturer warranty paperwork directly registered under your corporate account.',
      'Pre-delivery burn-in diagnostic test certificates verifying drive health, memory, and thermal performance.',
      'Comprehensive hardware asset ledger with serial numbers and ongoing hardware AMC contract.'
    ],
    deepDive: {
      title: 'Authorized Corporate Hardware Procurement: Direct Dell, HP, Lenovo & Acer Sourcing, Flexible Rentals & Comprehensive Post-Warranty AMC',
      readTime: '4 min read',
      paragraphs: [
        'Procuring enterprise computer hardware requires balancing reliable performance with smart financial management. Sourcing business laptops and servers through unverified computer dealers or retail consumer channels exposes organizations to counterfeit components (such as non-OEM RAM or cloned power supplies), voided manufacturer support warranties, and refurbished units misrepresented as new. Furthermore, paying large upfront capital costs (CapEx) for 50 to 100+ new workstations can strain corporate liquidity and tie up working capital that could be used for business growth.',
        'Unified Enterprise is an Authorized Corporate Partner for global technology leaders: Dell Technologies, HP Commercial, Lenovo, and Acer Commercial. We supply 100% factory-sealed commercial laptops, desktop fleets, and rackmount servers with verifiable serial numbers registered directly in official OEM manufacturer databases, backed by transparent corporate GST invoices for full input tax credit.',
        'We offer complete financial flexibility to match your cash flow requirements: outright capital purchase with volume discounts, 100% tax-deductible monthly operating rental leases (OpEx) that preserve working capital, and structured Rent-to-Own lease plans. Every single machine undergoes mandatory 24-hour diagnostic burn-in stress testing in our technical facility before delivery, completely eliminating \'Dead-on-Arrival\' (DOA) failures. Once manufacturer warranties expire, our in-house hardware engineering team provides comprehensive post-warranty AMCs with genuine spare parts and rapid on-site repair.'
      ]
    },
    authorizedOem: 'Dell Technologies (PowerEdge, Latitude, OptiPlex), HP Commercial (ProLiant, EliteBook, ProDesk), Lenovo Commercial (ThinkPad, ThinkCentre), Acer Commercial (TravelMate, Veriton)'
  },

  'it-asset-lifecycle-management': {
    id: 'it-asset-lifecycle-management',
    solutionNumber: 'SOLUTION 10',
    badge: 'MANAGING EXISTING AGING ESTATES, UPGRADES & WIPING',
    name: 'IT Asset Lifecycle Management',
    idealFor: 'Enterprises Managing Aging Computers, Laptops & Distributed Server Hardware',
    heroSubtitle: 'Handle & Maintain Your Existing Aging IT Assets: Extend Fleet Life by 2–3 Years and Certified NIST 800-88 Data Destruction',
    heroParagraph: 'You don\'t need to prematurely scrap your existing hardware estate when computers begin to slow down. Unified Enterprise takes over, audits, and actively maintains your existing aging computers, laptops, and server racks right where they stand. Through targeted component upgrades (RAM, SSDs, thermal servicing), we make existing machines perform like new, extending fleet usability by an extra 2 to 3 years under unified AMC before executing certified NIST 800-88 data destruction upon final retirement.',
    valuePills: ['Manage Existing Aging Hardware', 'Extend Existing Fleet Life by 2–3 Yrs', 'Certified NIST 800-88 Data Wiping'],
    image: '/assets/dell_optiplex_desktop.jpg',
    frameworkType: 'stages-4',
    frameworkTitle: 'THE 4-STAGE IT ASSET LIFECYCLE GOVERNANCE',
    cardsData: [
      {
        title: 'Stage 1: Onsite Physical Audit & Tagging',
        desc: 'Our engineers visit your office, barcode/QR-tag every existing laptop, desktop, server, and switch, and build an audit-ready register of specs, users, and age.'
      },
      {
        title: 'Stage 2: Mid-Life Hardware Performance Boost',
        desc: 'Instead of replacing 3-year-old laptops, we clone slow HDDs to fast SSDs and expand RAM, doubling speed and adding 24–36 months of life at 15–20% of replacement cost.'
      },
      {
        title: 'Stage 3: Certified NIST 800-88 Data Erasure',
        desc: 'Before retiring old hard drives, we run certified military-grade cryptographic software wiping and physical degaussing, backed by legal compliance certificates.'
      },
      {
        title: 'Stage 4: Hardware Buyback & Authorized E-Waste',
        desc: 'We recover residual cash value through hardware buybacks and channel electronic scrap through Government-authorized, ISO 14001 compliant recyclers.'
      }
    ],
    coreAdvantages: [
      {
        title: 'Governance for Existing Hardware Estates',
        desc: 'We take over and actively maintain your existing aging laptops, desktops, and server racks, tracking health, organizing serial ledgers, and providing regular servicing so you don\'t have to throw them away.'
      },
      {
        title: 'High-ROI Component Upgrades',
        desc: 'Cost-effective RAM expansions, SSD upgrades, and thermal servicing that make sluggish 3-year-old computers perform like brand-new machines.'
      },
      {
        title: 'Certified Data Destruction Certificates',
        desc: 'Tamper-proof legal certificates proving hard drives were permanently sanitized in compliance with NIST 800-88 standards.'
      }
    ],
    handoverChecklist: [
      'Onsite comprehensive physical IT inventory audit with barcode/QR asset labeling across all workstations and servers.',
      'Comprehensive maintenance and AMC takeover agreement for existing aging hardware estates.',
      'Component upgrade execution (SSD cloning and RAM expansions) extending machine operational lifespan.',
      'Formal, audit-ready NIST 800-88 Certificate of Data Erasure and authorized environmental E-Waste disposal manifest.'
    ],
    deepDive: {
      title: 'Corporate IT Asset Governance: Managing Existing Aging Hardware Estates, Component Upgrades & Certified NIST 800-88 Data Wiping',
      readTime: '4 min read',
      paragraphs: [
        'Corporate computer hardware naturally experiences performance decline after 2 to 3 years: cooling fans collect dust, thermal paste dries out, and mechanical hard drives slow down. Many companies respond by prematurely scrapping 3-year-old laptops, incurring massive capital replacement costs. Even more concerning, when older computers are retired, discarded hard drives are frequently left in unsecured office storage closets or given to informal scrap buyers, creating massive data leak risks and legal liabilities under modern data protection regulations.',
        'Unified Enterprise delivers complete technology lifecycle governance centered on managing and maintaining your existing hardware estate. You don\'t need to throw away or scrap your existing computers when they begin to lag. Our engineering team conducts onsite physical inventory audits across your facilities, applying durable metallic barcode/QR asset tags to all laptops, desktops, servers, and switches. We build an audit-ready digital asset register detailing serial numbers, hardware specifications, user assignments, and warranty expiration dates so you have complete visibility over what equipment you own.',
        'To maximize hardware ROI, we perform mid-life component upgrades right where your machines stand: by cloning aging HDDs to high-speed NVMe solid-state drives, maxing out RAM, and conducting internal thermal fan servicing, we double operational speed and extend computer lifespans by an additional 24 to 36 months at a fraction of the cost of buying new machines. When equipment finally reaches true end-of-life, we execute certified multi-pass cryptographic data wiping and physical degaussing compliant with international NIST 800-88 Rev. 1 standards, issuing official legal Certificates of Data Destruction before channeling hardware through Government-authorized, ISO 14001 compliant electronic waste recyclers.'
      ]
    },
    authorizedOem: 'Blancco Certified Eraser, WhiteCanyon WipeDrive, Zebra Asset Scanners, Snipe-IT Enterprise, Hard Drive Degaussers'
  }
};
