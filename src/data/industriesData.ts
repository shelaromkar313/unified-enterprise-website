export interface IndustryFaq {
  q: string;
  a: string;
}

export interface IndustryHelpPoint {
  title: string;
  desc: string;
}

export interface IndustryItem {
  id: string;
  number: string;
  name: string;
  tagline: string;
  lead: string;
  keyChallenges: string[];
  howWeHelpTitle: string;
  howWeHelpSubtitle?: string;
  howWeHelpPoints: IndustryHelpPoint[];
  whatWeCoverNote?: string;
  onePartnerNote?: string;
  keyBenefits?: string[];
  solutionsServices: string[];
  assignedEngineerNote: string;
  supportHours: string;
  faqs: IndustryFaq[];
  cta: {
    label: string;
    text: string;
    buttonText: string;
  };
  seo: {
    title: string;
    metaDescription: string;
    urlSlug: string;
    primaryKeyword: string;
  };
  image: string;
  badge: string;
  stats: { label: string; value: string }[];
}

export interface GovernanceItem {
  number: number;
  title: string;
  scope: string;
  detail: string;
}

export const DETAILS_TO_CONFIRM: GovernanceItem[] = [
  {
    number: 1,
    title: 'Assigned Engineer Model',
    scope: 'All 8 Industries',
    detail: 'Confirm the assigned-engineer arrangement and that L2 escalation is in place. The copy does not imply a permanently stationed engineer.'
  },
  {
    number: 2,
    title: '24/5 and Optional 24/7 Support',
    scope: 'Call Centres & Healthcare',
    detail: 'Confirm exactly what each level includes. Used on the Call Centres and Healthcare pages.'
  },
  {
    number: 3,
    title: 'Onsite Coverage and Service Locations',
    scope: 'Manufacturing, Multi-Location, SME',
    detail: 'Confirm where onsite engineers are available (Manufacturing, Multi-Location, SME). No locations are stated in the copy.'
  },
  {
    number: 4,
    title: 'AMC Scope',
    scope: 'All Contractual Maintenance',
    detail: 'Confirm what an AMC covers before it is promoted as a benefit.'
  },
  {
    number: 5,
    title: 'Dialer Platforms (Call Centres)',
    scope: 'Call Centres & BPOs',
    detail: 'Confirm which dialer and PBX platforms you support, and whether IVR and call routing can be offered.'
  },
  {
    number: 6,
    title: 'Coworking Network Separation',
    scope: 'Coworking Spaces',
    detail: 'Confirm you can design separate networks for staff, members and visitors.'
  },
  {
    number: 7,
    title: 'Rental Terms',
    scope: 'All Rental Services',
    detail: 'Confirm minimum periods and conditions for laptop, desktop, server, network and telecom rental.'
  },
  {
    number: 8,
    title: 'Data Wiping Method',
    scope: 'Remote, Healthcare, Multi-Location',
    detail: 'Confirm how Data Wiping & Secure Decommissioning is done before wording is strengthened (Remote, Healthcare, Multi-Location).'
  },
  {
    number: 9,
    title: 'Education Scope',
    scope: 'Education & Campus Labs',
    detail: 'Confirm what "practical laboratory setup" covers, and whether any smart classroom equipment can be supplied.'
  },
  {
    number: 10,
    title: 'Manufacturing Coordination',
    scope: 'Manufacturing & Industrial',
    detail: 'Confirm you are comfortable coordinating with customers\' automation vendors, as the copy states.'
  }
];

export const INDUSTRIES_DATA: Record<string, IndustryItem> = {
  // 1. Small & Medium Enterprises (Page 2)
  'small-medium-enterprises': {
    id: 'small-medium-enterprises',
    number: 'INDUSTRY 1 OF 8',
    name: 'Small & Medium Enterprises',
    tagline: 'IT and telecom support sized for growing businesses',
    badge: 'Growing Business Architecture',
    lead: 'Growing businesses depend on computers, networks, Wi-Fi and business phones but rarely have a full IT team. Unified Enterprise Solutions supports both your IT and telecom needs, from laptops, networking and security to PBX, VoIP and calling solutions, with an assigned engineer for day-to-day needs and L2 escalation for complex issues.',
    keyChallenges: [
      'No in-house IT. Problems wait until someone has time, and small issues grow into downtime.',
      'Recurring faults. Slow computers, patchy Wi-Fi and unmanaged equipment slow everyone down.',
      'Security gaps. A basic router is often the only protection for business data.',
      'Fast growth. New offices and new hires need equipment, network and phones set up quickly.'
    ],
    howWeHelpTitle: 'HOW WE HELP',
    howWeHelpPoints: [
      {
        title: 'Assigned Engineer',
        desc: 'Helps manage your day-to-day IT and telecom requirements, infrastructure needs and technical issues. Complex issues are escalated to L2 support where required.'
      },
      {
        title: 'Remote or Onsite Support',
        desc: 'Remote IT Support for quick fixes; Onsite IT Engineers when a visit is needed.'
      },
      {
        title: 'Right-Sized Infrastructure',
        desc: 'Computers, networking, firewall and storage matched to your size, not an enterprise.'
      },
      {
        title: 'Planned Maintenance',
        desc: 'An Annual Maintenance Contract (AMC) keeps equipment looked after.'
      }
    ],
    solutionsServices: [
      'Desktop & Laptop Support',
      'Managed IT and Telecom Services',
      'Network Design & Implementation',
      'Firewalls & Network Security',
      'IT Hardware Procurement',
      'PBX & Managed VoIP',
      'Laptop & Desktop Rental',
      'AMC'
    ],
    assignedEngineerNote: 'Need equipment for a short period? Rental is available, and our team can recommend only what your business actually needs.',
    supportHours: 'Business Hours Remote & Onsite with L2 Escalation',
    faqs: [
      {
        q: 'Do we need a server?',
        a: 'Not always. We assess your needs first and recommend a server or storage only where it makes sense.'
      },
      {
        q: 'Can you support our computers, Wi-Fi and phones together?',
        a: 'Yes. Managed IT and Telecom Services cover your devices, network and business phones through one provider.'
      },
      {
        q: 'Can we rent equipment instead of buying?',
        a: 'Yes. Laptop, Desktop, Server, Networking & Security and IP Phone & Telecom Equipment Rental are available for new staff or temporary needs.'
      }
    ],
    cta: {
      label: 'Book a Free IT Assessment',
      text: 'Tell us about your office and we will recommend a right-sized setup.',
      buttonText: 'Book Free Assessment'
    },
    seo: {
      title: 'SME IT Support & Setup | Unified Enterprise Solutions',
      metaDescription: 'Managed IT support, networking, security, phones and equipment rental for small and medium businesses, with an assigned engineer and L2 escalation.',
      urlSlug: '/industries/small-medium-enterprises',
      primaryKeyword: 'IT support for small business'
    },
    image: '/assets/enterprise_laptop_hero.jpg',
    stats: [
      { label: 'Escalation Path', value: 'L1 to L2 Tech Escalation' },
      { label: 'Support Model', value: 'Remote + Onsite' },
      { label: 'Contract Type', value: 'Right-Sized AMC' }
    ]
  },

  // 2. Call Centres & BPOs (Page 3-4)
  'call-centres-bpos': {
    id: 'call-centres-bpos',
    number: 'INDUSTRY 2 OF 8',
    name: 'Call Centres & BPOs',
    tagline: 'Dialer, PBX and agent infrastructure for daily calling operations',
    badge: 'Mission-Critical Floor Operations',
    lead: 'Every minute agents cannot dial or answer costs a call centre money. We support calling dialers and telecom infrastructure, including installation, configuration and troubleshooting, and supply the agent computers, phones and network that keep your floor connected.',
    keyChallenges: [
      'Dialer or PBX faults that stop campaigns and leave agents idle.',
      'Seats added quickly when a new campaign starts.',
      'Mixed lines and unplanned networks that affect call experience.'
    ],
    howWeHelpTitle: 'CALLING INFRASTRUCTURE WE SUPPORT',
    howWeHelpSubtitle: 'The right setup depends on your connectivity and existing systems.',
    howWeHelpPoints: [
      {
        title: 'PBX & Business Telephony',
        desc: 'Connects extensions and manages internal and external calls.'
      },
      {
        title: 'Managed VoIP and SIP',
        desc: 'Voice calls carried over your internet connection.'
      },
      {
        title: 'Calling Dialers',
        desc: 'Installation, configuration and troubleshooting. Call routing and IVR menus where your system supports them.'
      },
      {
        title: 'GSM Gateways, PRI, FXO & FXS',
        desc: 'Link your system to mobile and traditional lines where needed.'
      },
      {
        title: 'IP Phones and Agent Desktops',
        desc: 'Equipment for every seat.'
      }
    ],
    solutionsServices: [
      'Call-Centre & BPO Infrastructure',
      'PBX & Dialer Support',
      'VoIP & Telecom Support',
      'Network Design & Implementation',
      'Firewall Management',
      'ILL',
      'Laptops & Desktops',
      'Bulk Device Deployment',
      'IP Phone, GSM Gateway & Telecom Equipment Rental'
    ],
    assignedEngineerNote: 'Support is remote and onsite, with 24/5 support and optional 24/7 support for longer operating hours. An assigned engineer helps manage your day-to-day IT and telecom requirements, infrastructure needs and technical issues, with complex issues escalated to L2 support where required.',
    supportHours: '24/5 Standard · Optional 24/7 Support',
    faqs: [
      {
        q: 'What is a dialer?',
        a: 'Software that manages calling activity, such as outbound campaigns. Features depend on the platform chosen.'
      },
      {
        q: 'Can you support our existing PBX or dialer?',
        a: 'Tell us the platform when you request a quote and we will confirm what we can support.'
      },
      {
        q: 'Can we rent equipment for a short campaign?',
        a: 'Yes. Laptops, desktops, IP phones, GSM gateways and telecom equipment are available for rent.'
      }
    ],
    cta: {
      label: 'Request a Quote',
      text: 'Share your seat count and current setup and we will propose a calling infrastructure plan.',
      buttonText: 'Request Call Floor Quote'
    },
    seo: {
      title: 'Call Centre IT & PBX Support | Unified Enterprise Solutions',
      metaDescription: 'PBX, managed VoIP, dialer support, agent computers and network security for call centres and BPOs. Buy or rent equipment.',
      urlSlug: '/industries/call-centres-bpos',
      primaryKeyword: 'call centre IT infrastructure'
    },
    image: '/assets/telecom_ip_phones.jpg',
    stats: [
      { label: 'Uptime SLA', value: 'High Availability Voice' },
      { label: 'Support Coverage', value: '24/5 & Optional 24/7' },
      { label: 'Hardware Buffer', value: 'Onsite Agent Spares' }
    ]
  },

  // 3. Manufacturing & Industrial Companies (Page 5-6)
  'manufacturing-industrial': {
    id: 'manufacturing-industrial',
    number: 'INDUSTRY 3 OF 8',
    name: 'Manufacturing & Industrial Companies',
    tagline: 'IT, network and CCTV infrastructure for factories, warehouses and offices',
    badge: 'Industrial Plant IT & Security',
    lead: 'Factories need dependable IT beyond the production line: office systems, site-wide networks and security cameras. We provide CCTV and IT infrastructure for manufacturing sites, so teams can communicate, reach business systems and keep visibility across every building.',
    keyChallenges: [
      'Buildings spread across a site. Network Design & Implementation and Network Cabling connect offices, warehouses and new areas.',
      'Limited visibility. CCTV Installation and Management covers gates, loading areas and stores.',
      'Cyber risk on shared networks. Firewalls & Network Security, Firewall Management and Network & Firewall Audits.',
      'Ageing equipment and downtime. AMC, Server & Network Support and Onsite IT Engineers.',
      'Expansion. Complete IT Infrastructure for new buildings and operational areas.'
    ],
    howWeHelpTitle: 'WHAT WE COVER',
    whatWeCoverNote: 'We provide the IT side of your site: computers, networking, servers, firewalls, CCTV and support. We do not provide industrial automation or machine-control systems, but we plan the IT network to work alongside your automation vendors.',
    howWeHelpPoints: [
      {
        title: 'Buildings Spread Across a Site',
        desc: 'Network Design & Implementation and Network Cabling connect offices, warehouses and new areas.'
      },
      {
        title: 'Limited Visibility',
        desc: 'CCTV Installation and Management covers gates, loading areas and stores.'
      },
      {
        title: 'Cyber Risk on Shared Networks',
        desc: 'Firewalls & Network Security, Firewall Management and Network & Firewall Audits.'
      },
      {
        title: 'Ageing Equipment & Downtime',
        desc: 'AMC, Server & Network Support and Onsite IT Engineers.'
      },
      {
        title: 'Expansion',
        desc: 'Complete IT Infrastructure for new buildings and operational areas.'
      }
    ],
    keyBenefits: [
      'Clear visibility across gates, stores and work areas.',
      'Fewer network interruptions for office and operational teams.',
      'Room to grow, with network and CCTV that extend to each new building.'
    ],
    solutionsServices: [
      'Network Design & Implementation',
      'Network Cabling',
      'CCTV Installation & Management',
      'Firewalls & Network Security',
      'Firewall Management',
      'Network & Firewall Audits',
      'AMC',
      'Server & Network Support',
      'Onsite IT Engineers',
      'Routers & Network Switches',
      'Wi-Fi & Wireless Networking',
      'Servers & Storage',
      'Laptops & Desktops'
    ],
    assignedEngineerNote: 'An assigned engineer helps manage your day-to-day IT and telecom requirements, infrastructure needs and technical issues, with complex issues escalated to L2 support where required.',
    supportHours: 'Onsite Plant Engineers & Remote Triage',
    faqs: [
      {
        q: 'Do you work on machine control or automation?',
        a: 'No. We provide IT, networking and CCTV infrastructure and can coordinate with your automation vendors on the network.'
      },
      {
        q: 'Can you extend our network to a new building?',
        a: 'Yes. We design and install the network and cabling for new buildings and areas.'
      },
      {
        q: 'What does an IT infrastructure audit cover?',
        a: 'We review your network, firewall and equipment and recommend improvements.'
      }
    ],
    cta: {
      label: 'Book a Free IT Assessment',
      text: 'We will review your site and recommend the right network, CCTV and support plan.',
      buttonText: 'Book Plant Assessment'
    },
    seo: {
      title: 'Manufacturing IT & CCTV | Unified Enterprise Solutions',
      metaDescription: 'CCTV, networking, firewalls, servers and IT support for factories, warehouses and industrial offices. IT infrastructure, not machine control.',
      urlSlug: '/industries/manufacturing-industrial',
      primaryKeyword: 'manufacturing IT infrastructure'
    },
    image: '/assets/cctv_surveillance.jpg',
    stats: [
      { label: 'Plant Visibility', value: 'Gates, Stores & Perimeters' },
      { label: 'Automation Interface', value: 'Vendor IT Coordination' },
      { label: 'Site Connectivity', value: 'Inter-Building Fiber' }
    ]
  },

  // 4. Multi-Location Businesses (Page 7)
  'multi-location-businesses': {
    id: 'multi-location-businesses',
    number: 'INDUSTRY 4 OF 8',
    name: 'Multi-Location Businesses',
    tagline: 'One coordinated IT and telecom partner for every branch',
    badge: 'Standardized Branch Infrastructure',
    lead: 'When every branch buys and supports its own technology, costs rise and security varies from site to site. We help businesses manage IT infrastructure across offices, branches and locations with standard setups, coordinated support and one accountable provider for IT and telecom.',
    keyChallenges: [
      'Mismatched equipment at every branch makes support slower.',
      'Slow new-branch openings because each one is planned from scratch.',
      'Uneven security and support from one site to the next.',
      'No clear record of what each location owns or when it needs replacing.'
    ],
    howWeHelpTitle: 'HOW WE HELP',
    howWeHelpSubtitle: 'You can standardise in stages, so there is no need to replace everything at once.',
    howWeHelpPoints: [
      {
        title: 'Standard Branch Setup',
        desc: 'Define one set of computers, network equipment and phones, then repeat it.'
      },
      {
        title: 'New Branch Setup',
        desc: 'We take responsibility for the complete IT and telecom infrastructure when you open a new branch: computers, laptops, networking, Wi-Fi, security equipment, business phones, PBX/VoIP, calling infrastructure and other equipment based on the branch’s requirements.'
      },
      {
        title: 'Assigned Engineer',
        desc: 'Helps manage your day-to-day IT and telecom requirements and technical issues, with complex issues escalated to L2 support where required. Remote IT Support is available, and onsite engineers where needed.'
      },
      {
        title: 'Lifecycle Control',
        desc: 'IT Asset Lifecycle Management, plus Network & Firewall Audits across sites.'
      }
    ],
    solutionsServices: [
      'Multi-Location IT Management',
      'Network Design & Implementation',
      'Office Relocation & IT Setup',
      'PBX & Managed VoIP',
      'ILL',
      'AMC',
      'IT Asset Lifecycle Management',
      'Network & Firewall Audits'
    ],
    assignedEngineerNote: 'Telephony can be coordinated across sites through PBX or managed VoIP, and Remote IT Support helps resolve everyday issues without a site visit.',
    supportHours: 'Pan-India Multi-Branch Remote & Onsite Dispatch',
    faqs: [
      {
        q: 'Can we start with one branch?',
        a: 'Yes. Begin with one site or one need and extend from there.'
      },
      {
        q: 'Can all branches share one phone system?',
        a: 'Often, through PBX or managed VoIP, depending on each site’s connectivity.'
      },
      {
        q: 'Do you support branches in different cities?',
        a: 'Yes, we support businesses with branches in different cities. Share your branch list with a quote request so we can plan your rollout.'
      }
    ],
    cta: {
      label: 'Request a Quote',
      text: 'Send us your branch list and we will outline a coordinated plan.',
      buttonText: 'Request Branch Rollout Plan'
    },
    seo: {
      title: 'Multi-Location IT Management | Unified Enterprise Solutions',
      metaDescription: 'Coordinated IT and telecom for multi-branch businesses: standard setups, procurement, support, audits and office relocation.',
      urlSlug: '/industries/multi-location-businesses',
      primaryKeyword: 'multi-location IT management'
    },
    image: '/assets/network_security_firewall.jpg',
    stats: [
      { label: 'Rollout Velocity', value: 'Turnkey Branch Kits' },
      { label: 'Management', value: 'Single Accountable SLA' },
      { label: 'Telephony', value: 'Inter-Branch PBX Mesh' }
    ]
  },

  // 5. Remote Offices & Distributed Workforces (Page 8-9)
  'remote-offices-distributed-workforces': {
    id: 'remote-offices-distributed-workforces',
    number: 'INDUSTRY 5 OF 8',
    name: 'Remote Offices & Distributed Workforces',
    tagline: 'Equip and support your team wherever they work',
    badge: 'Distributed Team Enablement',
    lead: 'When employees work from home, remote offices or different cities, IT becomes harder to see and manage. We help businesses supply laptops and desktops, support staff remotely, set up small offices and retire old devices safely.',
    keyChallenges: [
      'New hires waiting for equipment while work piles up.',
      'Support for staff who are not in the office.',
      'Temporary teams and short projects that do not justify buying hardware.',
      'Retired devices that still hold company data.'
    ],
    howWeHelpTitle: 'HOW WE HELP',
    howWeHelpSubtitle: 'Need a team ready quickly? Bulk Device Deployment prepares many devices together, and Remote IT Support helps resolve everyday issues without a site visit.',
    howWeHelpPoints: [
      {
        title: 'Equip',
        desc: 'IT Hardware Procurement, Laptop Rental, Desktop Rental and Bulk Device Deployment.'
      },
      {
        title: 'Support',
        desc: 'Remote IT Support, with Desktop & Laptop Support for hardware faults.'
      },
      {
        title: 'Secure',
        desc: 'Workplace & Remote Office Infrastructure with Firewalls & Network Security for small offices.'
      },
      {
        title: 'Retire',
        desc: 'Data Wiping & Secure Decommissioning, with IT Asset Lifecycle Management to track equipment.'
      }
    ],
    keyBenefits: [
      'Faster, more consistent onboarding with standard equipment for each role.',
      'Flexible buy-or-rent options for permanent and temporary staff.',
      'A clear record of equipment across every location.'
    ],
    solutionsServices: [
      'IT Hardware Procurement',
      'Laptop Rental',
      'Desktop Rental',
      'Bulk Device Deployment',
      'Remote IT Support',
      'Desktop & Laptop Support',
      'Workplace & Remote Office Infrastructure',
      'Firewalls & Network Security',
      'Data Wiping & Secure Decommissioning',
      'IT Asset Lifecycle Management',
      'IT Migration & Deployment',
      'Office Relocation & IT Setup'
    ],
    assignedEngineerNote: 'An assigned engineer helps manage your day-to-day IT and telecom requirements, infrastructure needs and technical issues, with complex issues escalated to L2 support where required.',
    supportHours: 'Rapid Remote Helpdesk & Secure Logistics',
    faqs: [
      {
        q: 'Can we rent laptops for a short project?',
        a: 'Yes. Laptop Rental and Desktop Rental are available. Terms are confirmed in your quote.'
      },
      {
        q: 'Can you set up a small remote office?',
        a: 'Yes. We provide computers, networking, Wi-Fi and security for small locations.'
      },
      {
        q: 'What happens to data on retired devices?',
        a: 'Data Wiping & Secure Decommissioning removes company data before a device is reused or disposed of.'
      }
    ],
    cta: {
      label: 'Send a Rental Enquiry',
      text: 'Tell us how many people and for how long, and we will propose equipment and support.',
      buttonText: 'Send Rental Enquiry'
    },
    seo: {
      title: 'Remote Workforce IT Equipment | Unified Enterprise Solutions',
      metaDescription: 'Laptops, rentals, remote IT support, security and secure device retirement for remote offices and distributed teams.',
      urlSlug: '/industries/remote-offices-distributed-workforces',
      primaryKeyword: 'IT equipment for remote employees'
    },
    image: '/assets/dell_latitude_laptop.jpg',
    stats: [
      { label: 'Onboarding Speed', value: 'Pre-Imaged Fleets' },
      { label: 'Device Options', value: 'Buy or Flexible Rent' },
      { label: 'Retirement Security', value: 'Certified Data Wipe' }
    ]
  },

  // 6. Coworking Spaces (Page 10)
  'coworking-spaces': {
    id: 'coworking-spaces',
    number: 'INDUSTRY 6 OF 8',
    name: 'Coworking Spaces',
    tagline: 'IT and telecom setup for cabins, offices and workspaces, ready for your tenants',
    badge: 'Multi-Tenant Commercial Workspaces',
    lead: 'Coworking and commercial workspace owners rent cabins, offices and floors to different companies, and each space needs working IT and telecom before tenants can start. Unified Enterprise Solutions sets up and equips each cabin or workspace with the IT and telecom infrastructure it needs.',
    keyChallenges: [
      'Each new tenant has varying workstation, display, phone, and bandwidth demands.',
      'Complex multi-tenant network separation required between rival companies sharing the floor.',
      'High turnover of members requiring rapid cabin teardown and re-provisioning.',
      'Unreliable Wi-Fi and patchy conference room technology driving away high-paying enterprise tenants.'
    ],
    howWeHelpTitle: 'WHAT WE PROVIDE',
    whatWeCoverNote: 'We provide these solutions to you, the workspace owner, based on the requirements of each cabin or floor. We handle the technology setup needed to make each cabin or workspace operational. We do not rent cabins or provide real estate.',
    howWeHelpPoints: [
      {
        title: 'Computers and Devices',
        desc: 'PCs, laptops, monitors and accessories.'
      },
      {
        title: 'Telecom',
        desc: 'Business phones, IP phones, PBX, VoIP and calling solutions.'
      },
      {
        title: 'Network',
        desc: 'Networking and internet connectivity equipment, plus Wi-Fi.'
      },
      {
        title: 'Security',
        desc: 'CCTV, firewalls and network security.'
      },
      {
        title: 'Other Equipment',
        desc: 'Any other IT or telecom equipment the space requires.'
      }
    ],
    onePartnerNote: 'One Partner for Every Tenant: We coordinate directly with you to understand your requirements and arrange the IT and telecom setup for the companies using the space. One partner for both IT and telecom keeps setup and ongoing technical support simple across tenants, so you do not have to coordinate every requirement yourself.',
    solutionsServices: [
      'Complete IT Infrastructure',
      'IT Hardware & Accessories',
      'Laptops & Desktops',
      'Business Phones & IP Phones',
      'PBX & Business Telephony',
      'Managed VoIP',
      'Wi-Fi & Wireless Networking',
      'CCTV Installation and Management',
      'Firewalls & Network Security',
      'Bulk Device Deployment',
      'AMC',
      'Laptop and Desktop Rental'
    ],
    assignedEngineerNote: 'An assigned engineer helps manage your day-to-day IT and telecom requirements, infrastructure needs and technical issues, with complex issues escalated to L2 support where required.',
    supportHours: 'Workspace Floor Support & Fast Tenant Turnaround',
    faqs: [
      {
        q: 'Do you rent cabins or provide office space?',
        a: 'No. We provide IT and telecom setup and equipment to workspace owners. We do not rent cabins or provide real estate.'
      },
      {
        q: 'Can you equip cabins for the companies that will use them?',
        a: 'Yes. Tell us each cabin’s requirements and we will set up the IT and telecom infrastructure it needs.'
      },
      {
        q: 'Can you support the space after setup?',
        a: 'Yes. We offer ongoing technical support, remote and onsite, and AMC options for the equipment we set up.'
      }
    ],
    cta: {
      label: 'Book a Free IT Assessment',
      text: 'Tell us about your cabins or floors and we will propose the IT and telecom setup.',
      buttonText: 'Book Workspace Assessment'
    },
    seo: {
      title: 'Coworking Space IT Setup | Unified Enterprise Solutions',
      metaDescription: 'Networking, Wi-Fi, computers, CCTV and phones for coworking spaces and small teams. Buy or rent equipment, with ongoing IT support.',
      urlSlug: '/industries/coworking-spaces',
      primaryKeyword: 'coworking space IT setup'
    },
    image: '/assets/modern_enterprise_office.jpg',
    stats: [
      { label: 'Role', value: 'Technology Partner' },
      { label: 'Network Architecture', value: 'VLAN Tenant Isolation' },
      { label: 'Cabin Readiness', value: 'Turnkey Hardware Setup' }
    ]
  },

  // 7. Healthcare (Page 11-12)
  'healthcare': {
    id: 'healthcare',
    number: 'INDUSTRY 7 OF 8',
    name: 'Healthcare',
    tagline: 'Phones, computers, network and CCTV for healthcare facilities',
    badge: 'Clinical IT & Telephony Infrastructure',
    lead: 'Reception, billing and clinical teams all rely on working phones, computers and networks. We provide PBX, PRI and GSM gateways, business phones, IT equipment, CCTV, infrastructure setup and technical support for healthcare facilities, so administration and coordination between departments run smoothly. Our focus is technology infrastructure, not medical services.',
    keyChallenges: [
      'Busy reception lines and slow communication between departments.',
      'Front-desk computer faults that delay appointments and billing.',
      'Sensitive information sharing a network with visitor access.',
      'Premises that need monitoring, from entrances to common areas.'
    ],
    howWeHelpTitle: 'HOW WE HELP',
    howWeHelpPoints: [
      {
        title: 'Better Communication',
        desc: 'PBX & Business Telephony, business phones and IP phones connect reception and departments by extension, with PRI and GSM Gateways linking your system to your telephone and mobile lines. Managed VoIP is also available where it suits.'
      },
      {
        title: 'Dependable Equipment',
        desc: 'Desktop & Laptop Support, AMC and Emergency IT Support keep workstations running.'
      },
      {
        title: 'Cybersecurity',
        desc: 'Firewalls & Network Security, Firewall Management and Network & Firewall Audits help protect internal systems and keep them separate from visitor access.'
      },
      {
        title: 'Safe Retirement',
        desc: 'Data Wiping & Secure Decommissioning for old computers.'
      },
      {
        title: 'Premises Visibility',
        desc: 'CCTV Installation and Management for entrances and common areas.'
      }
    ],
    solutionsServices: [
      'GSM Gateways, PRI, FXO & FXS',
      'PBX & Business Telephony',
      'Servers & Storage',
      'Wi-Fi & Wireless Networking',
      'Network Cabling',
      'CCTV Installation and Management',
      'Firewalls & Network Security',
      'IT Infrastructure Audits',
      'Onsite IT Engineers',
      'Laptop and Desktop Rental',
      'AMC & Emergency Support'
    ],
    assignedEngineerNote: '24/5 support is available, with optional 24/7 support. An assigned engineer helps manage your day-to-day IT and telecom requirements, infrastructure needs and technical issues, with complex issues escalated to L2 support where required.',
    supportHours: '24/5 Standard · Optional 24/7 Support',
    faqs: [
      {
        q: 'Do you provide hospital or clinical software?',
        a: 'No. We provide the phones, computers, network, cameras and support around your software.'
      },
      {
        q: 'Can reception and departments call each other?',
        a: 'Yes. A PBX connects internal extensions, with PRI and GSM gateways handling outside lines. Managed VoIP is also available. Features depend on the system chosen.'
      },
      {
        q: 'Do you offer after-hours support?',
        a: '24/5 support is available, with optional 24/7 support. Coverage is confirmed in your proposal.'
      }
    ],
    cta: {
      label: 'Book a Free IT Assessment',
      text: 'We will review your facility and recommend phones, network and support.',
      buttonText: 'Book Facility Assessment'
    },
    seo: {
      title: 'Healthcare IT & Phone Systems | Unified Enterprise Solutions',
      metaDescription: 'PBX, PRI, GSM gateways, business phones, computers, network security and CCTV for healthcare facilities, with onsite and remote IT support.',
      urlSlug: '/industries/healthcare',
      primaryKeyword: 'healthcare IT infrastructure'
    },
    image: '/assets/datacenter_servers.jpg',
    stats: [
      { label: 'Patient Data Protection', value: 'Isolated Patient/Guest VLAN' },
      { label: 'Support Coverage', value: '24/5 & Optional 24/7' },
      { label: 'Department Telephony', value: 'Multi-Extension PBX' }
    ]
  },

  // 8. Education (Page 13)
  'education': {
    id: 'education',
    number: 'INDUSTRY 8 OF 8',
    name: 'Education',
    tagline: 'Computer labs, campus networks and CCTV for schools, colleges and training institutes',
    badge: 'Campus Labs & Education Networks',
    lead: 'Students and staff rely on computer labs, Wi-Fi and secure networks every day. We help schools, colleges and training institutes build and maintain IT infrastructure, including computers, practical lab setup, networking, network security, CCTV and technical support.',
    keyChallenges: [
      'Heavy daily use of lab computers by many students.',
      'Wi-Fi demand peaks at class changes and exam time.',
      'Campuses spread across several blocks, labs and hostels.',
      'Seasonal needs for short batches, entrance tests and exams.'
    ],
    howWeHelpTitle: 'LABS AND CAMPUS NETWORKING',
    howWeHelpSubtitle: 'We start with an IT Infrastructure Audit of your labs, network and equipment, then recommend upgrades in phases.',
    howWeHelpPoints: [
      {
        title: 'Computer Labs',
        desc: 'Laptops & Desktops, Bulk Device Deployment and practical laboratory setup.'
      },
      {
        title: 'Campus Network',
        desc: 'Network Cabling, Routers & Network Switches and Wi-Fi planned for peak use, not average use.'
      },
      {
        title: 'Network Security',
        desc: 'Firewalls & Network Security at the campus edge.'
      },
      {
        title: 'Campus Safety',
        desc: 'CCTV Installation and Management for entrances, corridors and common areas.'
      }
    ],
    solutionsServices: [
      'IT Infrastructure Audits',
      'Servers & Storage',
      'Desktop, Laptop, Server & Network Support',
      'AMC',
      'IT Hardware Procurement',
      'Laptop and Desktop Rental',
      'Bulk Device Deployment',
      'Network Cabling & Switches',
      'Campus Wi-Fi APs',
      'CCTV Installation'
    ],
    assignedEngineerNote: 'Rent equipment for exams and new batches, or buy in phases as budgets allow. An assigned engineer helps manage your day-to-day IT and telecom requirements, infrastructure needs and technical issues, with complex issues escalated to L2 support where required.',
    supportHours: 'On-Demand Batch Ramp-Up & Campus AMC',
    faqs: [
      {
        q: 'Can you cover our whole campus with Wi-Fi?',
        a: 'Usually. The design depends on your buildings and users, so we start with an assessment.'
      },
      {
        q: 'Can we rent computers for exams or short courses?',
        a: 'Yes. Desktop Rental, Laptop Rental and Bulk Device Deployment are available.'
      },
      {
        q: 'Do you supply smart classroom systems?',
        a: 'These are not part of our listed offerings. Tell us your requirement and we will confirm what we can do.'
      }
    ],
    cta: {
      label: 'Book a Free IT Assessment',
      text: 'We will review your campus or lab and recommend a practical plan.',
      buttonText: 'Book Campus Assessment'
    },
    seo: {
      title: 'School & College IT Setup | Unified Enterprise Solutions',
      metaDescription: 'Computer labs, campus Wi-Fi, network security, CCTV and IT support for schools, colleges and training institutes.',
      urlSlug: '/industries/education',
      primaryKeyword: 'school IT infrastructure'
    },
    image: '/assets/dell_optiplex_desktop.jpg',
    stats: [
      { label: 'Lab Infrastructure', value: 'Bulk Workstations & Rentals' },
      { label: 'Campus Wi-Fi', value: 'High Density Peak Sizing' },
      { label: 'Safety & Audit', value: 'CCTV + Phased Upgrades' }
    ]
  }
};
