import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Laptop, Monitor, Server, Radio, 
  PhoneCall, Boxes, ArrowRight, CheckCircle2, Calculator, ShieldCheck, Clock, ChevronDown, X, Sparkles
} from 'lucide-react';

interface RentalServicesPageProps {
  onOpenQuickSupport: (serviceName?: string) => void;
}

export interface RentalProduct {
  id: string;
  categoryId: string;
  name: string;
  brand: string;
  image: string;
  specs: string[];
  rentalRate: string;
  minLease: string;
  stockStatus: string;
  highlight: string;
  includedAccessories: string[];
}

interface RentalDetail {
  id: string;
  name: string;
  duration: string;
  leadTime: string;
  summary: string;
  specs: string[];
  deliverables: string[];
  image: string;
  metrics: string[];
  whyExists: string;
  benefits: { title: string; desc: string }[];
}

// Enterprise Rental Products Catalog
export const RENTAL_PRODUCTS: RentalProduct[] = [
  // 1. Laptop Rental Products
  {
    id: 'rent-dell-latitude-5440',
    categoryId: 'laptop-rental',
    name: 'Dell Latitude 5440 Enterprise Ultrabook',
    brand: 'Dell',
    image: '/assets/dell_latitude_laptop.jpg',
    specs: [
      'Intel Core i5-1335U (10 Cores, up to 4.60 GHz)',
      '16GB DDR5 4800MHz Memory',
      '512GB PCIe NVMe Gen4 High-Speed SSD',
      '14.0" FHD IPS Anti-Glare (1920x1080) 250 nits',
      'Wi-Fi 6E, Bluetooth 5.3, Full HD IR Webcam'
    ],
    rentalRate: 'From ₹1,850 / month',
    minLease: '1 Month Minimum',
    stockStatus: '120+ Units in Staging',
    highlight: 'Top choice for remote corporate workforce and developers',
    includedAccessories: [
      'Original Dell 65W Type-C AC Adapter',
      'Targus Commercial Padded Laptop Backpack',
      'Dell Wireless Optical Mouse',
      'Pre-loaded Windows 11 Pro Enterprise & BitLocker'
    ]
  },
  {
    id: 'rent-lenovo-thinkpad-t14',
    categoryId: 'laptop-rental',
    name: 'Lenovo ThinkPad T14 Gen 4 Business Ultrabook',
    brand: 'Lenovo',
    image: '/assets/lenovo_thinkpad_laptop.jpg',
    specs: [
      'Intel Core i7-1355U (10 Cores) / AMD Ryzen 7 PRO',
      '32GB DDR5 Dual Channel RAM',
      '1TB NVMe PCIe Gen4 High-Speed SSD',
      '14.0" WUXGA (1920x1200) 400 nits Low Power IPS',
      'MIL-STD-810H Military-Tested Chassis'
    ],
    rentalRate: 'From ₹2,450 / month',
    minLease: '1 Month Minimum',
    stockStatus: '75+ Units in Staging',
    highlight: 'Legendary ThinkPad ergonomics, durability & long battery life',
    includedAccessories: [
      'Lenovo 65W GaN Rapid Power Adapter',
      'Lenovo ThinkPad Executive Sleeve',
      'Lenovo Dual-Mode Wireless Mouse',
      'Hardened Corporate OS Staging'
    ]
  },
  {
    id: 'rent-apple-macbook-pro-14',
    categoryId: 'laptop-rental',
    name: 'Apple MacBook Pro 14" M3 Pro',
    brand: 'Apple',
    image: '/assets/apple_macbook_pro.jpg',
    specs: [
      'Apple M3 Pro (11-Core CPU, 14-Core GPU)',
      '18GB Unified High-Bandwidth Memory',
      '512GB Superfast NVMe SSD Storage',
      '14.2" Liquid Retina XDR 120Hz ProMotion Display',
      'Up to 18 Hours Battery Life & MagSafe 3'
    ],
    rentalRate: 'From ₹4,500 / month',
    minLease: '1 Month Minimum',
    stockStatus: '35+ Units in Staging',
    highlight: 'Engineered for UX/UI designers, iOS devs & video leads',
    includedAccessories: [
      'Apple 70W USB-C Power Adapter',
      'Original MagSafe 3 Braided Fast Charging Cable',
      'Shock-Absorbing Hardshell Sleeve',
      'Pre-configured MDM Apple Business Profile Ready'
    ]
  },
  {
    id: 'rent-hp-elitebook-840',
    categoryId: 'laptop-rental',
    name: 'HP EliteBook 840 G10 Commercial Laptop',
    brand: 'HP',
    image: '/assets/hp_elitebook_laptop.jpg',
    specs: [
      'Intel 13th Gen Core i5-1345U vPro Enterprise',
      '16GB DDR5 5200MHz Memory',
      '512GB M.2 PCIe Gen4 NVMe SSD',
      '14.0" WUXGA Anti-Glare IPS with HP Sure View',
      '5MP IR Privacy Camera with Dual Mics'
    ],
    rentalRate: 'From ₹1,950 / month',
    minLease: '1 Month Minimum',
    stockStatus: '90+ Units in Staging',
    highlight: 'Sleek all-aluminum executive finish with hardware privacy screen',
    includedAccessories: [
      'HP 65W Smart USB-C Adapter',
      'HP Professional Slim Top-load Case',
      'HP Multi-Device Wireless Mouse',
      'Factory Enterprise Windows 11 Load'
    ]
  },

  // 2. Desktop Rental Products
  {
    id: 'rent-dell-optiplex-7010-micro',
    categoryId: 'desktop-rental',
    name: 'Dell OptiPlex 7010 Micro Workstation Bundle',
    brand: 'Dell',
    image: '/assets/dell_optiplex_desktop.jpg',
    specs: [
      'Intel Core i5-13500T (14 Cores, 20 Threads)',
      '16GB DDR5 4800MHz Memory',
      '512GB PCIe M.2 Gen4 NVMe SSD',
      'Dell 24" P2422H FHD IPS Monitor Included',
      'Ultra-compact 1-liter chassis with VESA mount'
    ],
    rentalRate: 'From ₹1,650 / month',
    minLease: '1 Month Minimum',
    stockStatus: '150+ Bundles Available',
    highlight: 'Zero desk clutter; mounts cleanly behind included Dell 24" monitor',
    includedAccessories: [
      'Dell 24-inch Borderless IPS Display',
      'Dell KB216 Wired Keyboard & MS116 Optical Mouse',
      'Behind-the-Monitor VESA Mounting Bracket',
      'DisplayPort / HDMI & Power Extension Cords'
    ]
  },
  {
    id: 'rent-hp-prodesk-600-sff',
    categoryId: 'desktop-rental',
    name: 'HP ProDesk 600 G9 SFF Business Bundle',
    brand: 'HP',
    image: '/assets/dell_optiplex_desktop.jpg',
    specs: [
      'Intel Core i7-13700 (16 Cores, 24 Threads, up to 5.2 GHz)',
      '32GB DDR5 High-Speed Memory',
      '1TB NVMe PCIe Gen4 High-Speed SSD',
      'HP 27" Full HD Anti-Glare IPS Display Included',
      'Dual DisplayPort 1.4 + HDMI 2.1 Outputs'
    ],
    rentalRate: 'From ₹2,350 / month',
    minLease: '1 Month Minimum',
    stockStatus: '60+ Bundles Available',
    highlight: 'Ideal for financial data analysts, multi-tab analysts & engineering',
    includedAccessories: [
      'HP 27" IPS ComfortView Display',
      'HP Business Keyboard & Precision Mouse',
      'Heavy-Duty Power Strip with Surge Suppression',
      'Pre-loaded Enterprise Security Stack'
    ]
  },
  {
    id: 'rent-dell-precision-3660-gpu',
    categoryId: 'desktop-rental',
    name: 'Dell Precision 3660 High-Compute GPU Tower',
    brand: 'Dell Precision',
    image: '/assets/gpu_graphics_hardware.jpg',
    specs: [
      'Intel Core i9-13900K (24 Cores, 32 Threads, 5.8 GHz)',
      '64GB ECC DDR5 Registered Memory',
      '2TB NVMe PCIe Gen4 SSD + 4TB Enterprise HDD',
      'NVIDIA RTX A4000 16GB Dedicated GDDR6 GPU',
      '1000W 92% Efficient Platinum Power Supply'
    ],
    rentalRate: 'From ₹6,800 / month',
    minLease: '1 Month Minimum',
    stockStatus: '20+ Units Available',
    highlight: 'Certified ISV workstation for AutoCAD, SolidWorks & AI deep learning',
    includedAccessories: [
      'Dell Premier Multi-Device Wireless Combo',
      'Dual 4K DisplayPort to HDMI Certified Adapters',
      'Dedicated 1kVA Pure Sine Wave Online UPS',
      'CAD / GPU Benchmark Verification Suite'
    ]
  },
  {
    id: 'rent-nvidia-rtx6000-workstation',
    categoryId: 'desktop-rental',
    name: 'NVIDIA RTX 6000 Ada Dual-GPU AI Engineering Workstation',
    brand: 'NVIDIA',
    image: '/assets/real_microchip_gpu.jpg',
    specs: [
      'Dual NVIDIA RTX 6000 Ada Generation (96GB Total VRAM)',
      'AMD Ryzen Threadripper PRO 5975WX (32 Cores, 64 Threads)',
      '256GB ECC DDR4 Registered Workstation Memory',
      '2x 2TB PCIe Gen4 NVMe M.2 High-Speed SSDs in RAID 0',
      '1600W Titanium 94% High-Efficiency Power Supply'
    ],
    rentalRate: 'From ₹18,500 / month',
    minLease: '1 Month Minimum',
    stockStatus: '8 Units in Staging',
    highlight: 'The ultimate on-premise generative AI development & neural rendering workstation',
    includedAccessories: [
      'Dual 4K Professional 27" UltraSharp Displays',
      'Precision Wireless Ergonomic Keyboard & Mouse',
      '2kVA Pure Sine Wave Online Dedicated UPS',
      'Full Ubuntu 22.04 LTS / Windows 11 Pro CUDA Suite'
    ]
  },

  // 3. Server Rental Products
  {
    id: 'rent-nvidia-dgx-h100',
    categoryId: 'server-rental',
    name: 'NVIDIA DGX H100 AI Supercomputer Server Rental',
    brand: 'NVIDIA',
    image: '/assets/real_server_cluster.jpg',
    specs: [
      '8x NVIDIA H100 SXM5 80GB GPUs (640GB HBM3 Memory)',
      '32 PFLOPS FP8 AI Performance with Transformer Engine',
      'Dual Intel Xeon Platinum 8480C Processors (112 Cores)',
      '2TB DDR5 ECC High-Bandwidth System Memory',
      '8x 400Gb/s OSFP InfiniBand / Ethernet Network Adapters'
    ],
    rentalRate: 'Custom Enterprise Lease / Monthly',
    minLease: '1 Month Minimum',
    stockStatus: 'AI Staging Lab Ready',
    highlight: 'Turnkey high-performance compute for LLM training, diffusion models & fine-tuning',
    includedAccessories: [
      'NVIDIA Base Command & AI Enterprise Software Stack',
      'Dual 100GbE QSFP Remote Management Interfaces',
      'Dedicated Enterprise AI Support SLA & Escalation',
      'Pre-staged PyTorch, TensorFlow & CUDA Driver Images'
    ]
  },
  {
    id: 'rent-dell-poweredge-r750',
    categoryId: 'server-rental',
    name: 'Dell PowerEdge R750 2U Enterprise Rack Server',
    brand: 'Dell PowerEdge',
    image: '/assets/datacenter_servers.jpg',
    specs: [
      'Dual Intel Xeon Silver 4314 (32 Threads Total)',
      '128GB ECC Registered DDR4/DDR5 Memory',
      '4x 1.92TB Enterprise Hot-Plug SAS/NVMe Mixed-Use SSDs',
      'PERC H755 RAID with 8GB NV Cache',
      'Dual Redundant 1400W Platinum Hot-Plug PSUs'
    ],
    rentalRate: 'From ₹14,500 / month',
    minLease: '3 Months Minimum',
    stockStatus: '18 Units Ready in Staging',
    highlight: 'Mission-critical database host, ERP staging & private cloud clusters',
    includedAccessories: [
      'Dell ReadyRails II Sliding Rails for 4-Post Racks',
      'Full iDRAC9 Enterprise Remote License & Dedicated Port',
      'Front Security Bezel with Key Lock',
      'Free VMware ESXi / Proxmox Staging Installation'
    ]
  },
  {
    id: 'rent-hpe-proliant-dl380-gen10',
    categoryId: 'server-rental',
    name: 'HPE ProLiant DL380 Gen10 2U High-Compute Node',
    brand: 'HPE',
    image: '/assets/hpe_proliant_server.jpg',
    specs: [
      'Dual Intel Xeon Gold 5218R (40 Cores / 80 Threads)',
      '256GB ECC DDR4 Registered SmartMemory',
      '8x 960GB Enterprise SATA/SAS SSDs in RAID 10',
      'HPE Smart Array P408i-a SR Gen10 12G Controller',
      'Quad 1GbE + Dual 10GbE SFP+ Network Adapters'
    ],
    rentalRate: 'From ₹21,000 / month',
    minLease: '3 Months Minimum',
    stockStatus: '12 Units Ready in Staging',
    highlight: 'High-density compute powerhouse for SAP HANA drills and migration',
    includedAccessories: [
      'HPE iLO 5 Advanced Management License',
      'HPE Ball-Bearing Sliding Rail Kit & Cable Arm',
      'Dual 800W Flex Slot Platinum Power Supplies',
      '2-Hour Pan-India Spare Part Replacement SLA'
    ]
  },
  {
    id: 'rent-dell-poweredge-r450',
    categoryId: 'server-rental',
    name: 'Dell PowerEdge R450 1U Edge Rack Server',
    brand: 'Dell PowerEdge',
    image: '/assets/datacenter_servers.jpg',
    specs: [
      'Single Intel Xeon Silver 4310 (12 Cores, 24 Threads)',
      '64GB ECC Registered DDR4 Memory',
      '2x 960GB Enterprise SATA SSDs in RAID 1 Mirror',
      'Dual 1GbE + Dual 10GbE SFP+ Network Interface Card',
      'Dual Redundant 600W Hot-Plug Power Supplies'
    ],
    rentalRate: 'From ₹9,500 / month',
    minLease: '1 Month Minimum',
    stockStatus: '25 Units Ready in Staging',
    highlight: 'Compact 1U form factor for branch virtualization, domain controllers & firewalls',
    includedAccessories: [
      '1U Static Tool-less Rack Rails',
      'iDRAC9 Basic Remote Web Access',
      'Dual Power Cables & Cat6 Patch Cables',
      'Onsite Handover & Diagnostic Testing'
    ]
  },

  // 4. Networking & Security Rental Products
  {
    id: 'rent-cisco-catalyst-9200l',
    categoryId: 'networking-security-rental',
    name: 'Cisco Catalyst 9200L 48-Port PoE+ Switch',
    brand: 'Cisco',
    image: '/assets/network_security_firewall.jpg',
    specs: [
      '48x 10/100/1000 PoE+ Ports with 740W Power Budget',
      '4x 10G SFP+ Fixed High-Speed Uplink Ports',
      'Up to 80 Gbps Hardware Stacking Capability',
      'Layer 3 Enterprise Routing (OSPF, RIP, Static)'
    ],
    rentalRate: 'From ₹3,800 / month',
    minLease: 'Daily / Weekly / Monthly',
    stockStatus: '45 Units Available',
    highlight: 'Ideal for conferences, hackathons, temporary project sites & expansions',
    includedAccessories: [
      '19" Standard Rack-Mount Brackets & Screws',
      'Cisco RJ45-to-DB9 / USB Console Cable',
      'Bundle of 10x Cat6 Certified Patch Cables',
      'Pre-configured Access, Voice & Guest VLANs'
    ]
  },
  {
    id: 'rent-fortinet-fortigate-60f',
    categoryId: 'networking-security-rental',
    name: 'Fortinet FortiGate 60F Next-Gen Firewall',
    brand: 'Fortinet',
    image: '/assets/network_security_firewall.jpg',
    specs: [
      '10x GE RJ45 Ports (Dual WAN, 1x DMZ, 7x Internal)',
      '10 Gbps Firewall Throughput & 1 Gbps IPS Throughput',
      '700 Mbps Next-Gen Threat Protection Throughput',
      'Integrated SD-WAN & Hardware SSL-VPN Engine'
    ],
    rentalRate: 'From ₹3,200 / month',
    minLease: 'Daily / Weekly / Monthly',
    stockStatus: '30 Units Available',
    highlight: 'Secure pop-up branch offices, temporary project sites & external audits',
    includedAccessories: [
      'Heavy-duty Power Adapter with Locking Nut',
      'High-Speed USB Console Cable',
      'Active FortiGuard Threat Protection License Included',
      'Pre-configured Site-to-Site IPsec VPN Staging'
    ]
  },
  {
    id: 'rent-aruba-ap22-wifi6',
    categoryId: 'networking-security-rental',
    name: 'Aruba Instant On AP22 Wi-Fi 6 High-Density Kit',
    brand: 'Aruba HPE',
    image: '/assets/wifi_access_point.jpg',
    specs: [
      'Wi-Fi 6 (802.11ax) 2x2:2 MU-MIMO Technology',
      'Up to 1.77 Gbps Aggregate Wireless Throughput',
      '75+ Active Client Concurrency per Access Point',
      'Smart Mesh Auto-Linking & Cloud App Management'
    ],
    rentalRate: 'From ₹950 / month per AP',
    minLease: 'Daily / Weekly / Monthly',
    stockStatus: '80 Units Available',
    highlight: 'Fast temporary wireless setup for exhibitions, townhalls & pop-up events',
    includedAccessories: [
      'Gigabit PoE Power Injector & Power Cord',
      'Ceiling T-Bar and Wall Mounting Clips',
      'Shielded Flat Cat6 Ethernet Cable',
      'Pre-configured Captive Guest Portal'
    ]
  },

  // 5. IP Phone, GSM Gateway & Telecom Equipment Rental
  {
    id: 'rent-grandstream-grp2614',
    categoryId: 'ip-phone-gsm-telecom-rental',
    name: 'Grandstream GRP2614 Carrier-Grade HD IP Phone',
    brand: 'Grandstream',
    image: '/assets/telecom_ip_phones.jpg',
    specs: [
      'Dual Color Displays (2.8" Main + 2.4" Digital BLF Screen)',
      '4 Lines, 4 SIP Accounts with 40 Virtual BLF Keys',
      'Integrated Dual-Band Wi-Fi 802.11ac & Bluetooth',
      'Dual Gigabit Ethernet Ports with 802.3af PoE'
    ],
    rentalRate: 'From ₹450 / month',
    minLease: '1 Month Minimum',
    stockStatus: '200+ Units Available',
    highlight: 'High-volume phone for BPO campaigns, sales desks & reception consoles',
    includedAccessories: [
      'Desk Stand with Dual Tilt Positions',
      'High-Fidelity Handset with Reinforced Armored Cord',
      'Cat6 RJ45 Patch Cable',
      'Pre-provisioned SIP Account Profiles'
    ]
  },
  {
    id: 'rent-cisco-8845-video',
    categoryId: 'ip-phone-gsm-telecom-rental',
    name: 'Cisco 8845 HD Video Desk Phone',
    brand: 'Cisco',
    image: '/assets/telecom_ip_phones.jpg',
    specs: [
      '720p HD Video Camera Built-In with Privacy Shutter',
      '5-inch 800x480 Widescreen Backlit Color Screen',
      'Wideband Audio (G.722) with Hardware Echo Suppression',
      'Dual Gigabit Ethernet Ports with Integrated PoE'
    ],
    rentalRate: 'From ₹1,100 / month',
    minLease: '1 Month Minimum',
    stockStatus: '60 Units Available',
    highlight: 'Direct one-touch video conferencing for CXO cabins and legal rooms',
    includedAccessories: [
      'Hearing Aid Compatible Handset with Coil Cord',
      'Ethernet Network Cable',
      'Wall / Desk Dual-Mode Bracket',
      'Cisco CallManager / FreePBX Auto-Provisioning'
    ]
  },
  {
    id: 'rent-dinstar-16-channel-gsm',
    categoryId: 'ip-phone-gsm-telecom-rental',
    name: 'Dinstar 16-Channel 4G/GSM VoIP Gateway',
    brand: 'Dinstar',
    image: '/assets/gsm_gateway_pri.jpg',
    specs: [
      '16 Concurrent 4G LTE / GSM Voice Channels',
      'Hot-Swappable Standard SIM Card Slots',
      'Full SIP v2.0 Compatibility (Vicidial, Asterisk, 3CX)',
      'Built-in SMS API & Automated SIM Balancing'
    ],
    rentalRate: 'From ₹4,200 / month',
    minLease: '1 Month Minimum',
    stockStatus: '25 Units Available',
    highlight: 'Cost-saving outbound GSM termination for call centers & verification IVRs',
    includedAccessories: [
      '16x High-Gain Multi-Band Magnetic Antennas',
      '19" 1U Rack Mount Brackets & Screws',
      'Industrial Grounding Wire & Power Supply',
      'Dialer SIP Trunk Configuration Guide'
    ]
  },

  // 6. Bulk Device Deployment
  {
    id: 'rent-bulk-corporate-fleet-50-100',
    categoryId: 'bulk-device-deployment',
    name: 'Corporate Fleet Deployment Bundle (50–100 Seats)',
    brand: 'Dell / HP Enterprise',
    image: '/assets/ue_equipment_rental.jpg',
    specs: [
      '50x Uniform Dell Latitude or OptiPlex Core i5 Systems',
      'Pre-configured Domain Joined, BitLocker & Antivirus',
      'Dedicated 5% Standby Spares Stored at Your Facility',
      'Drop-shipped Directly to 50+ Employee Residences'
    ],
    rentalRate: 'Enterprise Volume Discount',
    minLease: '3–12 Month Flexible Lease',
    stockStatus: 'Instant Staging Capacity',
    highlight: 'Zero downtime onboarding for rapid tech hiring and sudden branch ramp-ups',
    includedAccessories: [
      'Individual Drop-Ship Protective Mailer Boxes',
      'Custom Barcode Asset Tagging Mapped to Client CRM',
      'Dedicated Resident Logistics Coordinator',
      'Consolidated Monthly Enterprise Invoicing'
    ]
  },
  {
    id: 'rent-bulk-bpo-station-100-500',
    categoryId: 'bulk-device-deployment',
    name: 'Turnkey BPO & Contact Center Fleet (100–500 Seats)',
    brand: 'HP / Grandstream / Cisco',
    image: '/assets/ue_call_centre_bpo.jpg',
    specs: [
      'Intel Core i5 Micro Desktops + Dell 24" IPS Displays',
      'Commercial USB Call Center Noise-Canceling Headsets',
      'HD PoE Gigabit IP Phones with Auto-Provisioning',
      'Core Layer 2 Managed PoE Switching Infrastructure'
    ],
    rentalRate: 'Volume Tier Quotation',
    minLease: 'Flexible Term / Multi-Year',
    stockStatus: 'Warehoused in Mumbai / Pune / Delhi',
    highlight: 'Turnkey facility ready to dial within 48 hours of lease sign-off',
    includedAccessories: [
      'Complete Workstation Cabling & Desk Dressing',
      'Onsite Technical Deployment Engineers',
      '2-Hour Rapid Fault Swap Warranty Included',
      'Off-Balance Sheet 100% OPEX Structure'
    ]
  },

  // 7. Rental Enquiry
  {
    id: 'rent-custom-evaluation-fleet',
    categoryId: 'rental-enquiry',
    name: 'Custom Multi-Device Fleet Sizing & Evaluation Kit',
    brand: 'Multi-Vendor Tier-1',
    image: '/assets/why_client_first.jpg',
    specs: [
      'Customized Mix: Laptops, Desktops, Servers & Firewalls',
      '7-Day Proof-of-Concept Evaluation Units at No Cost',
      'Flexible Rent-to-Own & Residual Buyback Provisions',
      'Dedicated Senior Enterprise Account Specialist'
    ],
    rentalRate: 'Quoted within 2 Business Hours',
    minLease: 'Tailored Terms',
    stockStatus: 'Dedicated Priority Allocation',
    highlight: 'Ideal for customized computing specifications and multi-city delivery needs',
    includedAccessories: [
      'Comprehensive Technical Spec Evaluation Sheet',
      'Custom Master Services Agreement (MSA) SLA Terms',
      'Pan-India Multi-City Unified Billing Support',
      'End-of-Lease Certified DoD Data Sanitization'
    ]
  },
  {
    id: 'rent-short-term-event-kit',
    categoryId: 'rental-enquiry',
    name: 'Short-Term Event & Conference Hardware Fleet',
    brand: 'Multi-Vendor Tier-1',
    image: '/assets/ue_equipment_rental.jpg',
    specs: [
      'High-Performance Laptops, Registration PCs & Displays',
      'High-Density Wi-Fi 6 Enterprise Coverage Kit',
      'Onsite Dedicated Standby IT Engineers During Event',
      'Same-Day Delivery & Immediate Post-Event Teardown'
    ],
    rentalRate: 'Per-Day / Per-Event Custom Rates',
    minLease: '1 Day to 2 Weeks',
    stockStatus: 'Nationwide Readiness',
    highlight: 'Turnkey IT hardware for corporate AGMs, summits, hackathons & expos',
    includedAccessories: [
      'Hard Protective Flight Cases for Safe Transit',
      'Standby Backup Units On-Premises (0-Downtime Guarantee)',
      'Surge-Protected Power Strips & Cat6 Cabling',
      'Onsite Technical Operator Support'
    ]
  }
];

export default function RentalServicesPage({ onOpenQuickSupport }: RentalServicesPageProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlItem = searchParams.get('item');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(urlItem || 'all');
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(false);

  // Modal inspection state for rental products
  const [inspectRentalProduct, setInspectRentalProduct] = useState<RentalProduct | null>(null);

  // Calculator State
  const [selectedDevice, setSelectedDevice] = useState<string>('Enterprise Laptops');
  const [quantity, setQuantity] = useState<number>(25);
  const [duration, setDuration] = useState<string>('3 Months');

  useEffect(() => {
    setSelectedCategoryId(urlItem || 'all');
  }, [urlItem]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setInspectRentalProduct(null);
    };
    if (inspectRentalProduct) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [inspectRentalProduct]);

  // Exact 7 categories requested by the user
  const categoryList = useMemo(() => [
    { id: 'laptop-rental', name: 'Laptop Rental' },
    { id: 'desktop-rental', name: 'Desktop Rental' },
    { id: 'server-rental', name: 'Server Rental' },
    { id: 'networking-security-rental', name: 'Networking & Security Equipment Rental' },
    { id: 'ip-phone-gsm-telecom-rental', name: 'IP Phone, GSM Gateway & Telecom Equipment Rental' },
    { id: 'bulk-device-deployment', name: 'Bulk Device Deployment' },
    { id: 'rental-enquiry', name: 'Rental Enquiry' },
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

  const handleCalculatorSubmit = () => {
    onOpenQuickSupport(`Rental Enquiry: ${quantity}x ${selectedDevice} for ${duration}`);
  };

  // Products filtered for the currently selected category
  const currentCategoryProducts = useMemo(() => {
    return RENTAL_PRODUCTS.filter((p) => p.categoryId === selectedCategoryId);
  }, [selectedCategoryId]);

  // Detailed data for all rental categories
  const rentalData: Record<string, RentalDetail> = useMemo(() => ({
    'laptop-rental': {
      id: 'laptop-rental',
      name: 'Commercial Laptop Rental',
      duration: 'Flexible: Daily, Monthly, or Annual Leasing',
      leadTime: 'Dispatched within 24–48 hours Pan-India',
      summary: 'Tier-1 commercial ultrabooks and laptops from Dell, HP, Lenovo, and Apple pre-loaded with your corporate OS image, BitLocker encryption, and domain configuration.',
      metrics: ['24–48h Pan-India Dispatch', 'Zero CapEx Drain', '100% Tax-Deductible OPEX'],
      whyExists: 'Organizations expanding their remote or hybrid workforce require rapid computing access without committing substantial upfront capital or enduring 6-week OEM manufacturing delays.',
      benefits: [
        { title: 'Zero Capital Expenditure', desc: 'Preserve cash flow by moving hardware costs from balance-sheet CapEx to 100% tax-deductible monthly operating expenses.' },
        { title: 'Same-Day Standby Replacements', desc: 'Local buffer stock ensures immediate hardware replacement within 4 hours if a machine experiences any hardware defect.' },
        { title: 'Multi-City Remote Drop-Shipping', desc: 'We deliver pre-imaged, secure laptops directly to employee residences across 100+ cities in India with doorstep unboxing.' }
      ],
      specs: [
        'Intel Core i5 / i7 / Ultra or Apple M-Series chips',
        '16GB to 32GB RAM with fast NVMe PCIe Gen4 SSDs',
        'FHD / QHD anti-glare anti-fatigue displays',
        'OEM chargers, commercial carry bags & wired/wireless mice included'
      ],
      deliverables: [
        'Same-day standby hardware replacement warranty',
        'Pre-configured VPN, antivirus & domain policies',
        'Individual drop-shipping to remote employees across India',
        'Scheduled hardware maintenance and thermal servicing'
      ],
      image: '/assets/dell_latitude_laptop.jpg'
    },
    'desktop-rental': {
      id: 'desktop-rental',
      name: 'Commercial Desktop & Workstation Rental',
      duration: 'Monthly, Quarterly, or Multi-Year Terms',
      leadTime: 'Dispatched within 24–48 hours in bulk volumes',
      summary: 'High-density Micro, SFF, and Tower desktop PCs from Dell OptiPlex and HP ProDesk, paired with professional 24-inch or 27-inch IPS monitors.',
      metrics: ['Dual-Screen Ready', 'Pre-Cabled Bundles', 'Zero Maintenance Overhead'],
      whyExists: 'High-density office floors, customer support centers, and design labs need reliable, uniform desktop hardware with full peripherals and zero maintenance burden.',
      benefits: [
        { title: 'Turnkey Workspace Bundles', desc: 'Each machine arrives complete with an IPS monitor, commercial keyboard, optical mouse, power cables, and display connectors.' },
        { title: 'Ultra-Compact Desk Footprints', desc: 'Micro and SFF desktops mount behind monitors or under desks to maximize available corporate office workspace.' },
        { title: 'Hardware Upgrades Included', desc: 'Easily scale RAM or GPU compute mid-contract as software requirements increase without buying new equipment.' }
      ],
      specs: [
        'Intel 12th/13th/14th Gen Core i5/i7 Processors',
        '16GB to 64GB DDR4/DDR5 high-speed memory',
        '24-inch FHD IPS bezel-less monitors included',
        'Commercial keyboards, mice, power cables, and HDMI/DP cords'
      ],
      deliverables: [
        'Complete workstation assembly and desk cable dressing',
        'Standby loaner desktops stationed on-site for instant swap',
        'Support for dual-monitor configurations and graphic accelerators',
        'Quarterly OS health maintenance and performance audits'
      ],
      image: '/assets/dell_optiplex_desktop.jpg'
    },
    'server-rental': {
      id: 'server-rental',
      name: 'Enterprise Rack Server Rental',
      duration: '1 Month to 3 Years with Scaling Options',
      leadTime: 'Configured to custom order in 48–72 hours',
      summary: 'Dell PowerEdge and HPE ProLiant 1U/2U rack servers provisioned for compute spikes, private cloud testing, ERP migrations, or disaster recovery drills.',
      metrics: ['Tier-1 Dual Xeon / EPYC', 'Hot-Swap Enterprise SAS/NVMe', '2-Hour Pan-India Spare SLA'],
      whyExists: 'Cloud bills can spiral out of control during large-scale database migrations or private compute jobs; dedicated rented servers provide predictable performance at a fraction of cloud egress costs.',
      benefits: [
        { title: 'Custom Compute Provisioning', desc: 'Configure exact CPU core counts, multi-terabyte ECC memory, and hardware RAID controllers to match your workload benchmarks.' },
        { title: 'Full Out-of-Band Remote Access', desc: 'Dedicated Dell iDRAC or HPE iLO Enterprise licenses give your sysadmins bare-metal remote console control 24/7.' },
        { title: 'Pre-Staged Hypervisors', desc: 'Arrives pre-installed with your chosen virtualization layer (VMware ESXi, Proxmox, or Windows Hyper-V) ready to rack.' }
      ],
      specs: [
        'Dual Intel Xeon Scalable or AMD EPYC Processors',
        '64GB up to 512GB ECC Registered DDR4/DDR5 Memory',
        'Hardware RAID Controllers with Hot-Swap Enterprise SAS/NVMe SSDs',
        'Dual Redundant Platinum Hot-Plug Power Supplies'
      ],
      deliverables: [
        'Pre-installed hypervisor (VMware ESXi, Hyper-V, Proxmox)',
        'Full iDRAC / iLO Enterprise remote management access',
        'Immediate 2-hour onsite engineer response for hardware faults',
        'Optional secure off-site data replication staging'
      ],
      image: '/assets/hpe_proliant_server.jpg'
    },
    'networking-security-rental': {
      id: 'networking-security-rental',
      name: 'Networking & Security Equipment Rental',
      duration: 'Event, Project, or Term Rental',
      leadTime: 'Ready-to-deploy pre-configured kits in 24 hours',
      summary: 'Layer 2/3 Cisco switches, Fortinet firewalls, and high-density Wi-Fi 6 access points available for short-term projects, conferences, or branch pop-ups.',
      metrics: ['Zero-Trust Firewall Ready', 'High-Density Wi-Fi 6', 'Pre-Configured VLAN Staging'],
      whyExists: 'Temporary event venues, construction project headquarters, and disaster recovery hot sites require carrier-grade network backbones without the commitment of a multi-year purchase.',
      benefits: [
        { title: 'Plug-and-Play Network Kits', desc: 'Switches and firewalls are pre-programmed with your designated IP subnets, VLANs, and firewall rules before leaving our facility.' },
        { title: 'Flight Case Transit Safety', desc: 'All networking gear is shipped in reinforced flight cases complete with patch cables, rack brackets, and console cords.' },
        { title: 'Onsite Deployment Engineers', desc: 'Optional senior network specialists handle rack mounting, cabling, RF survey tuning, and end-of-event teardown.' }
      ],
      specs: [
        'Cisco Catalyst 24/48-Port PoE+ Gigabit Switches',
        'Fortinet FortiGate / Cisco Secure Next-Gen Firewalls',
        'High-density indoor/outdoor Wi-Fi 6 APs with POE injectors',
        'Pre-terminated Category 6 patch cables & flight cases'
      ],
      deliverables: [
        'Pre-configured VLANs, routing, and SSID parameters',
        'Onsite network engineer staging and teardown assistance',
        'Zero-Trust secure VPN credentials for temporary staff',
        'Full Fluke test certification on all provided cabling'
      ],
      image: '/assets/network_security_firewall.jpg'
    },
    'ip-phone-gsm-telecom-rental': {
      id: 'ip-phone-gsm-telecom-rental',
      name: 'IP Phone, GSM Gateway & Telecom Equipment Rental',
      duration: 'Short-Term Campaigns to Long-Term Leasing',
      leadTime: 'Pre-configured and dispatched in 24 hours',
      summary: 'Cisco, Grandstream, and Yealink HD IP phones, 8 to 32 port GSM gateways, and PRI PCI cards for rapid call center expansions and seasonal campaigns.',
      metrics: ['HD Wideband Audio', '4G LTE SIM Rotation', 'Asterisk / FreePBX Auto-Provisioning'],
      whyExists: 'Surge telemarketing campaigns, festive sales drives, and seasonal customer support initiatives require instant voice connectivity without tying up capital in telecommunications hardware.',
      benefits: [
        { title: 'Instant PBX Compatibility', desc: 'Phones are pre-registered to your cloud PBX, Asterisk, Vicidial, or 3CX server so agents simply plug in and dial.' },
        { title: 'SIM Failover & Cost Reduction', desc: 'Multi-port GSM gateways route calls across mobile networks, eliminating expensive PSTN trunk fees during mass campaigns.' },
        { title: 'Zero Defect Handset Guarantee', desc: 'Any dropped or malfunctioning handset is swapped immediately from local staging stock with zero call center interruption.' }
      ],
      specs: [
        'Cisco 7800/8800 Series & Grandstream HD IP Phones',
        '8, 16, and 32-Channel GSM/4G SIM Gateways',
        'Commercial call center noise-canceling USB headsets',
        'Compact Asterisk / FreePBX server appliances'
      ],
      deliverables: [
        'Auto-provisioning directly to your local or cloud PBX',
        'SIM rotation and SMS campaign routing assistance',
        'Quick swap warranty for any damaged or dropped handsets',
        'Voice codec optimization for crystal-clear HD audio'
      ],
      image: '/assets/telecom_ip_phones.jpg'
    },
    'bulk-device-deployment': {
      id: 'bulk-device-deployment',
      name: 'Bulk Device Deployment (50–500+ Seats)',
      duration: 'Custom Enterprise Rental Agreement',
      leadTime: 'Phased rollout with dedicated onsite logistics',
      summary: 'Turnkey fleet provisioning for large enterprise hiring batches, newly opened BPO centers, and multi-city corporate expansions with dedicated logistical management.',
      metrics: ['50–500+ Machines Ready', 'Custom Asset Tag Registry', 'Resident Logistics Manager'],
      whyExists: 'Rolling out hundreds of laptops or desktops across multiple offices introduces supply chain friction, asset tagging overhead, and deployment delays when managed in-house.',
      benefits: [
        { title: 'Unified Hardware Baseline', desc: 'Equip hundreds of employees with the exact same machine revision and OEM image, simplifying corporate IT administration.' },
        { title: 'On-Site Buffer Inventory', desc: 'We station a permanent 5% spare pool at your facility, enabling your IT team to swap faulty units within 5 minutes.' },
        { title: 'Comprehensive Lifecycle Management', desc: 'At the end of your contract, enjoy seamless hardware refresh, certified DoD-standard data wiping, and zero disposal liability.' }
      ],
      specs: [
        'Uniform hardware specifications across hundreds of machines',
        'Pre-imaged OS with corporate software licenses and certificates',
        'Custom asset tag barcoding and digital registry mapping',
        'Dedicated spare unit buffer stored directly at your office'
      ],
      deliverables: [
        'Dedicated resident logistics team for facility rollouts',
        'Scheduled batch deliveries matched to hiring milestones',
        'Consolidated monthly enterprise lease invoicing',
        'End-of-lease certified data wiping and seamless renewal'
      ],
      image: '/assets/ue_equipment_rental.jpg'
    },
    'rental-enquiry': {
      id: 'rental-enquiry',
      name: 'Custom Fleet Rental Enquiry',
      duration: 'Tailored to your organizational schedule',
      leadTime: 'Immediate quotation within 2 business hours',
      summary: 'Speak directly with our hardware leasing team to customize computing specifications, lease terms, buyback options, or multi-city distribution.',
      metrics: ['Formal Quote in 2 Hours', 'Custom SLA Terms', 'Zero Security Deposit for Corporates'],
      whyExists: 'Enterprise IT procurement often involves complex hybrid requirements combining compute, storage, security, and remote drop-shipping under one unified master services agreement.',
      benefits: [
        { title: 'Tailored Financial Models', desc: 'Choose between pure operating leases, rent-to-own arrangements, or seasonal month-to-month contracts tailored to your budget.' },
        { title: 'Proof-of-Concept Evaluation', desc: 'Receive trial hardware units at your office for technical benchmarking before finalizing multi-seat fleet contracts.' },
        { title: 'Dedicated Account Executive', desc: 'A single point of contact coordinates delivery schedules, hardware additions, billing adjustments, and onsite support SLAs.' }
      ],
      specs: [
        'Mix-and-match workstation, server, and networking bundles',
        'Flexible OPEX financing with zero capital expenditure',
        'Pan-India delivery across 100+ cities and tier-2 regions',
        'Comprehensive maintenance agreements included in all rates'
      ],
      deliverables: [
        'Formal commercial quotation with volume pricing tiers',
        'Sample evaluation units provided for technical testing',
        'Dedicated enterprise relationship account manager',
        'Custom Master Services Agreement (MSA) SLA terms'
      ],
      image: '/assets/why_client_first.jpg'
    }
  }), []);

  const currentDetail = rentalData[selectedCategoryId];
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
                    Equipment Fleet
                  </span>
                  <p className="text-sm font-bold text-slate-900 truncate">
                    {selectedCategoryId === 'all'
                      ? 'Rental Services Home'
                      : currentCategoryObj?.name || 'All Rentals'}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileCategoryOpen(!mobileCategoryOpen)}
                  className="px-3.5 py-2 min-h-[40px] rounded-xl bg-white border border-slate-200 text-xs font-semibold text-[#dc2626] shadow-2xs flex items-center gap-1.5 active:scale-95 transition-all shrink-0"
                >
                  <span>{mobileCategoryOpen ? 'Close' : 'Equipment'}</span>
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
                    Rental Services Home
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
            {/* Rental Services Home Link */}
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
                Rental Services Home
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

          {/* Right Column: Cisco 3-Card Home OR Rich Rental Product View */}
          <main className="lg:col-span-9">
            
            {/* 1. HOME VIEW: Cisco 3-Card Spotlight + Interactive Fleet Sizing Calculator */}
            {selectedCategoryId === 'all' ? (
              <div className="space-y-12">
                
                {/* 3 Featured Spotlight Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-1">
                  
                  {/* Card 1: Laptop Rental */}
                  <div className="flex flex-col justify-between group">
                    <div>
                      <div className="h-44 sm:h-52 rounded-xl overflow-hidden mb-4 bg-slate-100">
                        <img
                          src="/assets/dell_latitude_laptop.jpg"
                          alt="Laptop Rental"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                        Corporate Laptop Fleets
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                        Dell Latitude, HP EliteBook, and Lenovo ThinkPad ultrabooks pre-configured with Windows 11 Pro and domain encryption.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleSelectCategory('laptop-rental')}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#dc2626] hover:underline"
                    >
                      <span>Explore laptop leasing</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Card 2: Server Rental */}
                  <div className="flex flex-col justify-between group">
                    <div>
                      <div className="h-44 sm:h-52 rounded-xl overflow-hidden mb-4 bg-slate-100">
                        <img
                          src="/assets/hpe_proliant_server.jpg"
                          alt="Server Rental"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                        High-Compute Server Arrays
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                        Dell PowerEdge and HPE ProLiant rack servers configured with hot-swap SAS/NVMe arrays for temporary workloads.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleSelectCategory('server-rental')}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#dc2626] hover:underline"
                    >
                      <span>Explore server rentals</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Card 3: Bulk Deployment */}
                  <div className="flex flex-col justify-between group">
                    <div>
                      <div className="h-44 sm:h-52 rounded-xl overflow-hidden mb-4 bg-slate-100">
                        <img
                          src="/assets/ue_equipment_rental.jpg"
                          alt="Bulk Deployment"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                        Turnkey 50–500+ Seat Deployments
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                        Phased nationwide deployment with resident engineers, asset tagging, and complete standby replacement pools.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleSelectCategory('bulk-device-deployment')}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#dc2626] hover:underline"
                    >
                      <span>View bulk programs</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>

                {/* Interactive Fleet Sizing Calculator */}
                <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#dc2626] mb-2">
                    <Calculator className="w-4 h-4" />
                    <span>Instant Fleet Calculator</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Configure Your Deployment Sizing
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mb-6 max-w-2xl">
                    Select your preferred device class, unit volume, and rental term to receive an immediate formal procurement quote.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">Hardware Category</label>
                      <select
                        value={selectedDevice}
                        onChange={(e) => setSelectedDevice(e.target.value)}
                        className="w-full px-3 py-2 bg-white rounded-lg border border-slate-300 text-xs font-medium text-slate-800 focus:outline-hidden focus:border-[#dc2626]"
                      >
                        <option value="Enterprise Laptops">Enterprise Laptops (vPro / Core i5/i7)</option>
                        <option value="Commercial Desktops">Commercial Desktop Workstations</option>
                        <option value="Rack Servers">2U High-Compute Rack Servers</option>
                        <option value="Core Switches & Firewalls">Routers, Switches & Firewalls</option>
                        <option value="IP Telecom & Gateways">IP Phones & GSM Gateways</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">Required Quantity</label>
                      <select
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-white rounded-lg border border-slate-300 text-xs font-medium text-slate-800 focus:outline-hidden focus:border-[#dc2626]"
                      >
                        <option value={10}>10 Units (Small Pilot)</option>
                        <option value={25}>25 Units (Branch / Project)</option>
                        <option value={50}>50 Units (Mid-tier Corporate)</option>
                        <option value={100}>100 Units (BPO Scale)</option>
                        <option value={250}>250+ Units (Enterprise Rollout)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">Lease Term</label>
                      <select
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        className="w-full px-3 py-2 bg-white rounded-lg border border-slate-300 text-xs font-medium text-slate-800 focus:outline-hidden focus:border-[#dc2626]"
                      >
                        <option value="1 Month">1 Month (Event / Temporary)</option>
                        <option value="3 Months">3 Months (Project Deployment)</option>
                        <option value="6 Months">6 Months (Extended Contract)</option>
                        <option value="12 Months">12 Months (Annual Fleet Lease)</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-200">
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-[#dc2626]" />
                      <span>Includes full maintenance warranty and standby loaners</span>
                    </div>
                    <button
                      type="button"
                      onClick={handleCalculatorSubmit}
                      className="px-6 py-2.5 rounded-lg bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold transition-all shadow-soft-sm"
                    >
                      Generate Custom Quote
                    </button>
                  </div>
                </div>

              </div>
            ) : (
              /* 2. CATEGORY VIEW: Detailed Rental Category Presentation with Products Catalog */
              currentDetail && (
                <div className="space-y-10 animate-in fade-in duration-200">
                  
                  {/* Category Title Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                        {currentDetail.name}
                      </h2>
                      <span className="text-xs text-[#dc2626] font-semibold block mt-1">
                        Deployment SLA: {currentDetail.leadTime}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => onOpenQuickSupport(`Rental Request: ${currentDetail.name}`)}
                      className="px-5 py-2.5 rounded-full bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold transition-all shadow-soft-sm flex items-center gap-2 self-start sm:self-auto"
                    >
                      <span>Request Rental Quotation</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Executive Split Hero Panel (Compact image replacing the oversized full banner) */}
                  <div className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-6 sm:p-7">
                    <div className="flex flex-col-reverse lg:flex-row gap-6 items-center">
                      <div className="flex-1 space-y-4">
                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                          {currentDetail.summary}
                        </p>

                        {/* Metric Highlights */}
                        <div className="flex flex-wrap gap-2 pt-1">
                          {currentDetail.metrics.map((metric, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-white border border-slate-200/90 text-slate-700 shadow-2xs"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#dc2626]" />
                              {metric}
                            </span>
                          ))}
                        </div>

                        {/* Why This Category Matters */}
                        <div className="pt-2 border-t border-slate-200/70">
                          <p className="text-xs text-slate-600 leading-relaxed">
                            <strong className="text-slate-900 font-semibold">Strategic Value: </strong>
                            {currentDetail.whyExists}
                          </p>
                        </div>
                      </div>

                      {/* Minimized Framed Image Card */}
                      <div className="w-full lg:w-72 xl:w-80 h-44 sm:h-48 rounded-xl overflow-hidden border border-slate-200 shadow-2xs relative group shrink-0 bg-slate-100">
                        <img
                          src={currentDetail.image}
                          alt={currentDetail.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-2.5 left-3 right-3 text-white flex items-center justify-between">
                          <span className="text-[11px] font-bold uppercase tracking-wider bg-[#dc2626] px-2 py-0.5 rounded shadow-2xs">
                            Verified Fleet
                          </span>
                          <span className="text-[10px] text-slate-200 font-medium">
                            Zero Deposit
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 3. AVAILABLE FLEET FOR IMMEDIATE RENTAL (Products Catalog) */}
                  <div className="space-y-4 cisco-reveal">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-100">
                      <div className="flex items-center gap-2.5">
                        <span className="w-1.5 h-6 bg-[#dc2626] rounded-full shrink-0" />
                        <h3 className="text-xl font-bold text-[#173B67] tracking-tight">
                          Available Fleet for Immediate Rental
                        </h3>
                      </div>
                      <span className="text-xs text-slate-500 font-medium">
                        {currentCategoryProducts.length} Configured Models Ready for Dispatch
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      All units undergo certified hardware diagnostic runs, thermal paste refresh, clean OS imaging, and include full standby replacement guarantees.
                    </p>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 pt-2 cisco-reveal cisco-stagger">
                      {currentCategoryProducts.map((product) => (
                        <article
                          key={product.id}
                          className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                        >
                          <div>
                            {/* Product Image Box */}
                            <div className="h-44 sm:h-48 bg-slate-50 border-b border-slate-100 relative overflow-hidden flex items-center justify-center p-3">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
                              />
                              
                              {/* Brand Badge */}
                              <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs border border-slate-200/80 text-slate-800 text-[10px] font-bold px-2 py-0.5 rounded shadow-2xs">
                                {product.brand}
                              </span>

                              {/* Availability Pill */}
                              <span className="absolute top-3 right-3 bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-2xs flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                {product.stockStatus}
                              </span>
                            </div>

                            {/* Product Info */}
                            <div className="p-5 space-y-3">
                              <div>
                                <h4 className="text-base font-bold text-slate-900 group-hover:text-[#dc2626] transition-colors leading-snug">
                                  {product.name}
                                </h4>
                                <p className="text-[11px] text-[#dc2626] font-semibold mt-1">
                                  {product.highlight}
                                </p>
                              </div>

                              {/* Specs Chips */}
                              <div className="space-y-1.5 bg-slate-50 border border-slate-200/70 p-3 rounded-xl">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                                  Technical Specifications
                                </span>
                                {product.specs.slice(0, 3).map((spec, sIdx) => (
                                  <div key={sIdx} className="flex items-start gap-1.5 text-xs text-slate-700">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#dc2626] shrink-0 mt-1.5" />
                                    <span className="line-clamp-1">{spec}</span>
                                  </div>
                                ))}
                              </div>

                              {/* Rental Rate and Minimum Lease */}
                              <div className="flex items-center justify-between pt-1 text-xs">
                                <div>
                                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                                    Rental Terms
                                  </span>
                                  <span className="font-bold text-slate-900">
                                    {product.rentalRate}
                                  </span>
                                </div>
                                <div className="text-right">
                                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                                    Commitment
                                  </span>
                                  <span className="text-slate-600 font-medium">
                                    {product.minLease}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="p-5 pt-0 border-t border-slate-100 flex items-center gap-2 mt-2">
                            <button
                              type="button"
                              onClick={() => onOpenQuickSupport(`Rental Inquiry: ${product.name} (${product.rentalRate})`)}
                              className="flex-1 py-2.5 px-3 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold transition-colors text-center shadow-2xs"
                            >
                              Request Rental Quote
                            </button>
                            <button
                              type="button"
                              onClick={() => setInspectRentalProduct(product)}
                              className="py-2.5 px-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
                            >
                              Quick View
                            </button>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>

                  {/* 4. Strategic Benefits: Why Lease from Unified Enterprise */}
                  <div className="space-y-4 pt-4 cisco-reveal">
                    <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
                      <span className="w-1.5 h-6 bg-[#dc2626] rounded-full shrink-0" />
                      <h3 className="text-xl font-bold text-[#173B67] tracking-tight">
                        Why Lease Hardware from Unified Enterprise
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 cisco-reveal cisco-stagger">
                      {currentDetail.benefits.map((b, idx) => (
                        <div
                          key={idx}
                          className="bg-white border border-slate-200/90 rounded-xl p-5 shadow-2xs space-y-2 hover:border-slate-300 transition-colors"
                        >
                          <div className="w-8 h-8 rounded-lg bg-red-50 text-[#dc2626] flex items-center justify-center font-bold text-xs">
                            0{idx + 1}
                          </div>
                          <h4 className="text-sm font-bold text-[#173B67]">
                            {b.title}
                          </h4>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {b.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 5. Hardware Standards & Lease Terms Checklist */}
                  <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 space-y-6 shadow-2xs cisco-reveal">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Technical Standards */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="w-1.5 h-4 bg-[#dc2626] rounded-full" />
                          <h4 className="text-sm font-bold text-[#173B67]">
                            Hardware Configurations & Standards
                          </h4>
                        </div>
                        <div className="space-y-2">
                          {currentDetail.specs.map((spec, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 border border-slate-200/70 p-2.5 rounded-lg">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#dc2626] shrink-0 mt-1.5" />
                              <span>{spec}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Included Commitments */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="w-1.5 h-4 bg-[#dc2626] rounded-full" />
                          <h4 className="text-sm font-bold text-[#173B67]">
                            Lease Terms & Maintenance Commitments
                          </h4>
                        </div>
                        <div className="space-y-2.5">
                          {currentDetail.deliverables.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                              <CheckCircle2 className="w-4 h-4 text-[#dc2626] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Action Banner */}
                    <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50 -mx-6 sm:-mx-7 -mb-6 sm:-mb-7 p-6 rounded-b-2xl">
                      <div>
                        <span className="text-xs font-bold text-slate-900 block">
                          Terms: {currentDetail.duration}
                        </span>
                        <span className="text-xs text-slate-500">
                          Available with zero capital expenditure and same-day standby replacement pools across India.
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => onOpenQuickSupport(`Enquiry: ${currentDetail.name}`)}
                        className="px-6 py-2.5 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold transition-colors whitespace-nowrap shadow-soft-sm"
                      >
                        Book Fleet Consultation
                      </button>
                    </div>
                  </div>

                </div>
              )
            )}

          </main>

        </div>
      </div>

      {/* QUICK VIEW INSPECTION MODAL FOR RENTAL PRODUCTS */}
      {inspectRentalProduct && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setInspectRentalProduct(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#dc2626] block">
                  {inspectRentalProduct.brand} • Ready to Deploy
                </span>
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  {inspectRentalProduct.name}
                </h3>
                <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1.5 mt-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  {inspectRentalProduct.stockStatus}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setInspectRentalProduct(null)}
                className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image + Highlights */}
            <div className="flex flex-col sm:flex-row gap-5 items-center bg-slate-50 border border-slate-200/80 p-4 rounded-xl">
              <div className="w-full sm:w-44 h-36 rounded-lg overflow-hidden bg-white border border-slate-200/70 shrink-0">
                <img
                  src={inspectRentalProduct.image}
                  alt={inspectRentalProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-2 flex-1">
                <span className="text-xs font-bold text-slate-900 block">
                  Deployment Highlight
                </span>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {inspectRentalProduct.highlight}
                </p>
                <div className="flex flex-wrap gap-2 pt-1 text-xs">
                  <span className="px-2.5 py-1 bg-white rounded-md border border-slate-200 font-bold text-[#dc2626]">
                    {inspectRentalProduct.rentalRate}
                  </span>
                  <span className="px-2.5 py-1 bg-white rounded-md border border-slate-200 text-slate-600 font-medium">
                    {inspectRentalProduct.minLease}
                  </span>
                </div>
              </div>
            </div>

            {/* Full Specs List */}
            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <span className="w-1.5 h-4 bg-[#dc2626] rounded-full" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#173B67]">
                  Detailed Hardware Specifications
                </h4>
              </div>
              <div className="space-y-1.5 bg-slate-50 border border-slate-200/80 p-3.5 rounded-xl">
                {inspectRentalProduct.specs.map((spec, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#dc2626] shrink-0 mt-1.5" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Included Accessories */}
            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <span className="w-1.5 h-4 bg-[#dc2626] rounded-full" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#173B67]">
                  Included Peripherals & Deliverables
                </h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {inspectRentalProduct.includedAccessories.map((acc, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 border border-slate-200/60 p-2 rounded-lg">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{acc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setInspectRentalProduct(null)}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                Close Preview
              </button>
              <button
                type="button"
                onClick={() => {
                  const prd = inspectRentalProduct;
                  setInspectRentalProduct(null);
                  onOpenQuickSupport(`Rental Booking: ${prd.name} (${prd.rentalRate})`);
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold transition-all shadow-soft-sm flex items-center justify-center gap-2"
              >
                <span>Request Quotation for this Unit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
