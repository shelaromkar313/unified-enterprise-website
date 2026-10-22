import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Laptop, Monitor, Server, Radio,
  PhoneCall, Boxes, ArrowRight, CheckCircle2, Calculator, ShieldCheck, Clock, ChevronDown, X, Sparkles,
  Sliders, Cpu, Wrench, Layers, RefreshCw, Building2, Zap, FileText, Check, HardDrive
} from 'lucide-react';

interface RentalServicesPageProps {
  onOpenQuickSupport: (serviceName?: string) => void;
}

export interface RentalProduct {
  id: string;
  categoryId: string;
  subCategory?: 'grandstream' | 'fanvil' | 'gsm-gateway';
  tier?: 'basic' | 'advance' | 'premium';
  name: string;
  brand: string;
  image: string;
  processor?: string;
  ram?: string;
  ssd?: string;
  bestFor?: string;
  specs: string[];
  rentalRate: string;
  minLease?: string;
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

// 4 Acquisition & Rental Framework Models
const RENTAL_FRAMEWORK_MODELS = [
  {
    model: 'MODEL 01',
    role: '100% OpEx Tax Shield',
    badge: 'Zero CapEx Drain',
    desc: 'Eliminate heavy upfront hardware outlays. 100% of monthly corporate lease payments are fully tax-deductible as operating business expenses.',
    accentColor: 'border-t-blue-500',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200'
  },
  {
    model: 'MODEL 02',
    role: 'Pan-India Doorstep Logistics',
    badge: '24–48h Dispatch',
    desc: 'Pre-imaged, domain-joined, and BitLocker-encrypted systems drop-shipped directly to employee residences and corporate offices across 100+ cities.',
    accentColor: 'border-t-emerald-500',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
  },
  {
    model: 'MODEL 03',
    role: 'On-Site 5% Standby Spares',
    badge: 'Zero Work Downtime',
    desc: 'We station a permanent 5% buffer inventory directly inside your facility, enabling your internal IT team to swap faulty machines in under 5 minutes.',
    accentColor: 'border-t-purple-500',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200'
  },
  {
    model: 'MODEL 04',
    role: 'Certified DoD Data Sanitization',
    badge: 'Zero Asset Liability',
    desc: 'Enjoy seamless hardware refresh cycles at the end of your 2-year lease with certified DoD 5220.22-M data wiping and zero electronic disposal liability.',
    accentColor: 'border-t-red-500',
    badgeColor: 'bg-red-50 text-[#dc2626] border-red-200'
  }
];

// Enterprise Rental Products Catalog
export const RENTAL_PRODUCTS: RentalProduct[] = [
  // --- 1. LAPTOP RENTAL PRODUCTS (Basic, Advance, Premium) ---
  {
    id: 'rent-laptop-basic-tier',
    categoryId: 'laptop-rental',
    tier: 'basic',
    name: 'Intel Core i3 Enterprise Laptop (Basic Tier)',
    brand: 'Dell / HP / Acer',
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&auto=format&fit=crop&q=80',
    processor: 'Intel Core i3 (12th/13th Gen)',
    ram: '8 GB DDR4',
    ssd: '256 GB NVMe SSD',
    bestFor: 'Basic office operations, web CRM, email & administrative documentation',
    specs: [
      'Intel Core i3 12th/13th Gen Multi-Core Processor',
      '8 GB DDR4 High-Speed RAM (Expandable to 16GB)',
      '256 GB PCIe NVMe SSD High-Speed Storage',
      '14.0" Full HD (1920x1080) Anti-Glare IPS Display',
      'HD Webcam with Privacy Shutter, Dual Array Mic, Wi-Fi 6'
    ],
    rentalRate: 'Custom Quotation',
    minLease: 'Minimum 2 Years Agreement',
    stockStatus: 'Available for Immediate Dispatch',
    highlight: 'Reliable, power-efficient ultrabook engineered for everyday billing, documentation, and office tasks',
    includedAccessories: [
      'OEM 65W Rapid Power Adapter & Cable',
      'Commercial Padded Water-Resistant Laptop Backpack',
      'Precision Optical Wireless / USB Mouse',
      'Standard Corporate Windows 11 Pro Pre-installed & Security Configured'
    ]
  },
  {
    id: 'rent-laptop-advance-tier',
    categoryId: 'laptop-rental',
    tier: 'advance',
    name: 'Intel Core i5 Business Laptop (Advance Tier)',
    brand: 'Dell Latitude / HP EliteBook',
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&auto=format&fit=crop&q=80',
    processor: 'Intel Core i5 (13th/14th Gen)',
    ram: '16 GB DDR5',
    ssd: '512 GB PCIe NVMe SSD',
    bestFor: 'Multitasking, corporate ERP, business intelligence & daily professional workflow',
    specs: [
      'Intel Core i5-1335U / 1345U (10 Cores, up to 4.70 GHz)',
      '16 GB DDR5 4800MHz High-Speed Memory',
      '512 GB PCIe Gen4 M.2 NVMe SSD Storage',
      '14.0" Full HD IPS Anti-Glare (1920x1080) 300 nits',
      'Wi-Fi 6E, Bluetooth 5.3, Backlit Keyboard & IR Facial Webcam'
    ],
    rentalRate: 'Custom Quotation',
    minLease: 'Minimum 2 Years Agreement',
    stockStatus: 'Available for Immediate Dispatch',
    highlight: 'The standard choice for corporate knowledge workers, mid-level executives, and sales fleets',
    includedAccessories: [
      'Original USB-C 65W GaN Rapid Charger',
      'Executive Padded Laptop Sleeve & Heavy-Duty Bag',
      'Precision Dual-Mode Optical Wireless Mouse',
      'Domain Join, BitLocker Encryption & Corporate Endpoint Security Stack'
    ]
  },
  {
    id: 'rent-laptop-premium-tier',
    categoryId: 'laptop-rental',
    tier: 'premium',
    name: 'Intel Core i7 Flagship Workstation Laptop (Premium Tier)',
    brand: 'Lenovo ThinkPad T-Series / Dell Latitude',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&auto=format&fit=crop&q=80',
    processor: 'Intel Core i7 (13th/14th Gen)',
    ram: '16–32 GB DDR5',
    ssd: '512 GB–1 TB NVMe SSD',
    bestFor: 'Heavy multitasking, software development, data science, financial models & CAD',
    specs: [
      'Intel Core i7-1365U / 14700H (up to 5.0 GHz Turbo)',
      '16 GB to 32 GB High-Speed DDR5 Dual-Channel Memory',
      '512 GB to 1 TB Ultra-Fast PCIe Gen4 NVMe SSD',
      '14.0" or 15.6" WUXGA / 2K IPS 400 nits Anti-Glare Display',
      'Thunderbolt 4, Wi-Fi 6E, Fingerprint Reader, MIL-STD-810H Military Spec'
    ],
    rentalRate: 'Custom Quotation',
    minLease: 'Minimum 2 Years Agreement',
    stockStatus: 'Available for Immediate Dispatch',
    highlight: 'Heavy-duty corporate compute built for engineers, senior management, and high-compute workloads',
    includedAccessories: [
      'Fast Power Delivery 100W GaN USB-C Charger',
      'Heavy-Duty Executive Hardshell Case & Protective Sleeve',
      'Ergonomic Bluetooth / 2.4GHz Dual Wireless Mouse',
      'Performance-Tuned Corporate OS with BitLocker & Antivirus'
    ]
  },
  {
    id: 'rent-laptop-apple-macbook-pro',
    categoryId: 'laptop-rental',
    tier: 'premium',
    name: 'Apple MacBook Pro 14" (Apple M3 / M3 Pro Silicon)',
    brand: 'Apple',
    image: '/assets/apple_macbook_pro.jpg',
    processor: 'Apple M3 Pro (11-Core CPU, 14-Core GPU)',
    ram: '18 GB Unified Memory',
    ssd: '512 GB High-Speed SSD',
    bestFor: 'iOS / Mobile App Developers, Creative UI/UX Designers & CXOs',
    specs: [
      'Apple M3 Pro Chip with 11-Core CPU and 14-Core GPU',
      '18 GB Unified High-Bandwidth Memory',
      '512 GB Superfast Unified SSD Storage',
      '14.2" Liquid Retina XDR Display (3024x1964) with ProMotion 120Hz',
      'Up to 18 Hours Battery Life, 3x Thunderbolt 4 Ports, HDMI, SDXC, MagSafe 3'
    ],
    rentalRate: 'Custom Quotation',
    minLease: 'Minimum 2 Years Agreement',
    stockStatus: 'Available for Immediate Dispatch',
    highlight: 'Industry-standard powerhouse for mobile software engineering, video rendering, and UI design',
    includedAccessories: [
      'Apple 70W USB-C Power Adapter & Braided MagSafe 3 Cable',
      'Premium Padded Hardshell Travel Sleeve',
      'Apple Magic Mouse or Logitech MX Master Precision Mouse',
      'MDM-Ready Apple Business Manager Enrollment Support'
    ]
  },

  // --- 2. DESKTOP RENTAL PRODUCTS (Basic, Advance, Premium) ---
  {
    id: 'rent-desktop-basic-tier',
    categoryId: 'desktop-rental',
    tier: 'basic',
    name: 'Intel Core i3 Enterprise Desktop Workstation (Basic Tier)',
    brand: 'Dell OptiPlex / HP ProDesk / Lenovo ThinkCentre',
    image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=800&auto=format&fit=crop&q=80',
    processor: 'Intel Core i3 (12th/13th Gen)',
    ram: '8 GB DDR4',
    ssd: '256 GB NVMe SSD',
    bestFor: 'Basic office operations, data entry, CRM portals & billing desks',
    specs: [
      'Intel Core i3 12th/13th Gen Processor (Multi-Core)',
      '8 GB DDR4 High-Speed RAM',
      '256 GB PCIe NVMe Fast Boot SSD',
      'Dell / HP 22" Full HD IPS Anti-Glare Monitor Included',
      'Ultra-compact SFF / Micro chassis with USB 3.2, DisplayPort & HDMI ports'
    ],
    rentalRate: 'Custom Quotation',
    minLease: 'Minimum 2 Years Agreement',
    stockStatus: 'Available for Immediate Dispatch',
    highlight: 'Reliable, compact desktop setup built for general office operations, billing desks, and administration',
    includedAccessories: [
      '22-inch Borderless Full HD IPS Anti-Glare Display',
      'OEM USB Business Keyboard & Optical Mouse Combo',
      'Heavy-Duty Ergonomic Monitor Stand & Power Leads',
      'Standard Corporate Windows 11 Pro Pre-installed & HDMI/DP Cords'
    ]
  },
  {
    id: 'rent-desktop-advance-tier',
    categoryId: 'desktop-rental',
    tier: 'advance',
    name: 'Intel Core i5 Commercial Desktop Workstation (Advance Tier)',
    brand: 'Dell OptiPlex / HP ProDesk / Lenovo',
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?w=800&auto=format&fit=crop&q=80',
    processor: 'Intel Core i5 (13th/14th Gen)',
    ram: '16 GB DDR4/DDR5',
    ssd: '512 GB PCIe NVMe SSD',
    bestFor: 'Multitasking, corporate ERP, financial analytics & high-load business apps',
    specs: [
      'Intel Core i5-13500 / 14500 (14 Cores, 20 Threads, up to 4.80 GHz)',
      '16 GB DDR4/DDR5 High-Speed Memory',
      '512 GB PCIe M.2 NVMe High-Speed SSD',
      'Dell / HP 24" Borderless Full HD IPS Monitor with ComfortView',
      'Dual DisplayPort + HDMI output, Gigabit LAN & TPM 2.0 Enterprise Security'
    ],
    rentalRate: 'Custom Quotation',
    minLease: 'Minimum 2 Years Agreement',
    stockStatus: 'Available for Immediate Dispatch',
    highlight: 'Optimized high-efficiency workstation for multitasking, finance analytics, BPO management, and corporate ERPs',
    includedAccessories: [
      'Dell / HP 24-inch Borderless FHD IPS ComfortView Display',
      'Precision Business Keyboard & High-DPI Optical Mouse',
      'Behind-the-Monitor VESA Mount or Desk Cable Dressing',
      'Corporate Antivirus, Domain Join & BitLocker Encryption Pre-Configured'
    ]
  },
  {
    id: 'rent-desktop-premium-tier',
    categoryId: 'desktop-rental',
    tier: 'premium',
    name: 'Intel Core i7 High-Performance Desktop (Premium Tier)',
    brand: 'Dell OptiPlex / Precision / HP EliteDesk',
    image: '/assets/desktop_i7_workstation.jpg',
    processor: 'Intel Core i7 (13th/14th Gen)',
    ram: '16–32 GB DDR5',
    ssd: '512 GB–1 TB Gen4 SSD',
    bestFor: 'Software development, demanding data science, 2D/3D CAD & dual-monitor setups',
    specs: [
      'Intel Core i7-13700 / 14700 (16 Cores, 24 Threads, up to 5.40 GHz)',
      '16 GB to 32 GB High-Speed DDR5 Memory',
      '512 GB to 1 TB Ultra-Fast PCIe Gen4 NVMe SSD',
      'Dell / HP 27" Full HD / 2K QHD IPS Display with ComfortView Plus',
      'Dual/Triple Display Outputs, High-Throughput I/O & ISV Certified'
    ],
    rentalRate: 'Custom Quotation',
    minLease: 'Minimum 2 Years Agreement',
    stockStatus: 'Available for Immediate Dispatch',
    highlight: 'Built for software engineering, heavy data computation, multi-screen workspaces, and resource-heavy software',
    includedAccessories: [
      'Dell / HP 27-inch Anti-Glare ComfortView Plus IPS Display',
      'Executive Wireless / Multi-Device Keyboard & Mouse Combo',
      'Dedicated Surge-Protected Heavy-Duty Power Rail',
      'Performance-Tuned Corporate OS & Comprehensive Warranty Staging'
    ]
  },

  // --- 3. IP PHONE, GSM GATEWAY & TELECOM EQUIPMENT RENTAL ---
  {
    id: 'rent-grandstream-gxp-series',
    categoryId: 'ip-phone-gsm-telecom-rental',
    subCategory: 'grandstream',
    name: 'Grandstream GXP1620 / GXP1625 HD IP Phone',
    brand: 'Grandstream',
    image: '/assets/phone_grandstream_grp2616.png',
    specs: [
      '2 SIP Accounts, 2 Line Keys, 3 XML Programmable Context-Sensitive Soft Keys',
      '132 x 48 Pixel Backlit Graphical LCD Display',
      'Dual Switched 10/100 Mbps Ports, Integrated PoE (GXP1625)',
      'HD Audio on Speakerphone and Handset with Acoustic Echo Cancellation',
      '3-Way Audio Conferencing, EHS Support for Plantronics / Jabra Headsets'
    ],
    rentalRate: 'Custom Quotation',
    minLease: 'Minimum 2 Years Agreement',
    stockStatus: 'Available for Immediate Dispatch',
    highlight: 'Reliable, clear HD voice IP phone built for standard enterprise workstations, front offices, and BPO call desks',
    includedAccessories: [
      'Original Grandstream Handset with Armored Coil Cord',
      'Universal 5V Power Adapter (or PoE Network Powered)',
      'Dual-Position Ergonomic Desk Stand / Wall-Mount Bracket',
      'Cat6 High-Speed RJ45 Ethernet Patch Cable',
      'Auto-Provisioning Profiles for Asterisk, Vicidial, FreePBX & 3CX'
    ]
  },
  {
    id: 'rent-fanvil-x7a-android',
    categoryId: 'ip-phone-gsm-telecom-rental',
    subCategory: 'fanvil',
    name: 'Fanvil X7A Enterprise Android Touch Screen IP Phone',
    brand: 'Fanvil',
    image: '/assets/phone_fanvil_x7.png',
    specs: [
      '7-inch (1024x600) Capacitive Color Touch Screen',
      '20 SIP Lines with Up to 112 One-Touch DSS / BLF Keys',
      'Android 9.0 OS with Third-Party Business App & CRM Support',
      'Built-in Dual-Band Wi-Fi (2.4G/5G) & Bluetooth 4.2',
      'Dual Gigabit Ethernet Ports with Integrated 802.3at PoE',
      'Harman Speaker & Opus Codec for Crystal-Clear HD Audio'
    ],
    rentalRate: 'Custom Quotation',
    minLease: 'Minimum 2 Years Agreement',
    stockStatus: 'Available for Immediate Dispatch',
    highlight: 'Premium executive Android touch phone featuring 7-inch display, built-in Wi-Fi & Bluetooth for managerial desks and CXO suites',
    includedAccessories: [
      'Wideband HD Handset with Noise Isolation Cord',
      'Dual-Angle Desktop Stand (40° and 50°)',
      'Cat6 Shielded Gigabit Patch Cable',
      'Optional Fanvil CM60 USB HD Camera Interface Support',
      'Cloud Provisioning via Fanvil FDMCS / Enterprise SIP Trunking'
    ]
  },
  {
    id: 'rent-dinstar-gsm-gateway',
    categoryId: 'ip-phone-gsm-telecom-rental',
    subCategory: 'gsm-gateway',
    name: 'Dinstar / Matrix 16-Port 4G VoIP GSM Gateway',
    brand: 'Dinstar / Matrix Comsec',
    image: '/assets/gsm_voip_gateway_16port.jpg',
    specs: [
      '16 Channels 4G LTE / GSM SIM Cards Concurrent Voice Calling',
      'SIP Protocol Support (RFC3261) compatible with Asterisk, Vicidial & 3CX',
      'Intelligent SIM Rotation based on Call Minutes, SMS Quota & Carrier balance',
      'Hot-Swappable SIM Trays, SMS API Gateway for Two-Factor Verification',
      'Dual 10/100M Network Ports, Hardware Echo Cancellation (G.168 128ms)'
    ],
    rentalRate: 'Custom Quotation',
    minLease: 'Minimum 2 Years Agreement',
    stockStatus: 'Available for Immediate Dispatch',
    highlight: 'Multi-SIM mobile voice gateway for automated outbound dialers, branch telecom bypass, and SMS verification',
    includedAccessories: [
      '16x High-Gain Multi-Band 4G/GSM Antennas with Magnetic Extension Bases',
      'Standard 19-inch 1U Rackmount Ears & Screws',
      'Dual AC Power Adapter (100–240V Surge Protected)',
      'Web-GUI Administration & Remote CDR Logging Utility'
    ]
  },

  // --- 4. BULK DEVICE DEPLOYMENT ---
  {
    id: 'rent-bulk-corporate-fleet-50-100',
    categoryId: 'bulk-device-deployment',
    name: 'Corporate Fleet Deployment Bundle (50–100 Seats)',
    brand: 'Dell / HP Enterprise',
    image: '/assets/ue_equipment_rental.jpg',
    specs: [
      'Uniform Dell Latitude or OptiPlex Core i5 Systems',
      'Pre-configured Domain Joined, BitLocker & Antivirus',
      'Dedicated 5% Standby Spares Stored at Your Facility',
      'Drop-shipped Directly to Employee Residences Across India'
    ],
    rentalRate: 'Custom Enterprise Quotation',
    minLease: 'Minimum 2 Years Agreement',
    stockStatus: 'Available for Immediate Dispatch',
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
    rentalRate: 'Custom Enterprise Quotation',
    minLease: 'Minimum 2 Years Agreement',
    stockStatus: 'Available for Immediate Dispatch',
    highlight: 'Turnkey facility ready to dial within 48 hours of lease sign-off',
    includedAccessories: [
      'Complete Workstation Cabling & Desk Dressing',
      'Onsite Technical Deployment Engineers',
      '2-Hour Rapid Fault Swap Warranty Included',
      'Off-Balance Sheet 100% OPEX Structure'
    ]
  },

  // --- 5. RENTAL ENQUIRY ---
  {
    id: 'rent-custom-evaluation-fleet',
    categoryId: 'rental-enquiry',
    name: 'Custom Multi-Device Fleet Sizing & Evaluation Kit',
    brand: 'Multi-Vendor Tier-1',
    image: '/assets/why_client_first.jpg',
    specs: [
      'Customized Mix: Laptops, Desktops, Servers & Firewalls',
      'Proof-of-Concept Evaluation Units Available',
      'Flexible Long-Term Enterprise Deployment Terms',
      'Dedicated Senior Enterprise Account Specialist'
    ],
    rentalRate: 'Formal Quotation on Request',
    minLease: 'Minimum 2 Years Agreement',
    stockStatus: 'Available for Immediate Dispatch',
    highlight: 'Ideal for customized computing specifications and multi-city delivery needs',
    includedAccessories: [
      'Comprehensive Technical Spec Evaluation Sheet',
      'Custom Master Services Agreement (MSA) SLA Terms',
      'Pan-India Multi-City Unified Billing Support',
      'End-of-Lease Certified DoD Data Sanitization'
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
  const [duration, setDuration] = useState<string>('2 Years (24 Months)');

  // Sync with URL parameter & scroll to top smoothly
  useEffect(() => {
    setSelectedCategoryId(urlItem || 'all');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [urlItem]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setInspectRentalProduct(null);
    };
    if (inspectRentalProduct) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [inspectRentalProduct]);

  // Exact 5 categories requested by the user
  const categoryList = useMemo(() => [
    { id: 'laptop-rental', name: 'Laptop Rental' },
    { id: 'desktop-rental', name: 'Desktop Rental' },
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCalculatorSubmit = () => {
    onOpenQuickSupport(`Rental Enquiry: ${quantity}x ${selectedDevice} for ${duration} (Minimum 2 Years Agreement)`);
  };

  // Active criteria tab for Laptop Rental: 'all' | 'basic' | 'advance' | 'premium'
  const [activeLaptopTier, setActiveLaptopTier] = useState<'all' | 'basic' | 'advance' | 'premium'>('all');

  // Active criteria tab for Desktop Rental: 'all' | 'basic' | 'advance' | 'premium' | 'assemble'
  const [activeDesktopTier, setActiveDesktopTier] = useState<'all' | 'basic' | 'advance' | 'premium' | 'assemble'>('all');

  // Interactive Custom Assemble Form State for Desktops
  const [customCpu, setCustomCpu] = useState<string>('Intel Core i7 (13th / 14th Gen - High Performance)');
  const [customRam, setCustomRam] = useState<string>('32 GB DDR5 (Heavy Multi-tasking & Dev)');
  const [customStorage, setCustomStorage] = useState<string>('1 TB NVMe Gen4 High-Speed SSD');
  const [customGpu, setCustomGpu] = useState<string>('NVIDIA RTX 4060 8GB / RTX A2000 (Creative / CAD)');
  const [customMonitor, setCustomMonitor] = useState<string>('Dual 24" Borderless IPS Displays (Multitasking)');
  const [customChassis, setCustomChassis] = useState<string>('Tower Workstation (Expandable PCIe & Dual Power)');
  const [customQuantity, setCustomQuantity] = useState<string>('25+ Systems');
  const [customNotes, setCustomNotes] = useState<string>('');

  // Active criteria tab for IP Phone Rental: 'all' | 'grandstream' | 'fanvil' | 'gsm-gateway'
  const [activeTelecomBrand, setActiveTelecomBrand] = useState<'all' | 'grandstream' | 'fanvil' | 'gsm-gateway'>('all');

  // Products filtered for the currently selected category and criteria tab
  const currentCategoryProducts = useMemo(() => {
    const prods = RENTAL_PRODUCTS.filter((p) => p.categoryId === selectedCategoryId);
    if (selectedCategoryId === 'laptop-rental' && activeLaptopTier !== 'all') {
      return prods.filter((p) => p.tier === activeLaptopTier);
    }
    if (selectedCategoryId === 'desktop-rental') {
      if (activeDesktopTier === 'assemble') return [];
      if (activeDesktopTier !== 'all') {
        return prods.filter((p) => p.tier === activeDesktopTier);
      }
    }
    if (selectedCategoryId === 'ip-phone-gsm-telecom-rental' && activeTelecomBrand !== 'all') {
      return prods.filter((p) => p.subCategory === activeTelecomBrand);
    }
    return prods;
  }, [selectedCategoryId, activeLaptopTier, activeDesktopTier, activeTelecomBrand]);

  // Detailed data for all rental categories
  const rentalData: Record<string, RentalDetail> = useMemo(() => ({
    'laptop-rental': {
      id: 'laptop-rental',
      name: 'Commercial Laptop Rental',
      duration: 'Minimum 2 Years Agreement',
      leadTime: 'Dispatched within 24–48 hours Pan-India',
      summary: 'Tier-1 commercial ultrabooks and laptops from Dell Latitude, HP EliteBook, Lenovo ThinkPad, Acer TravelLite, and Apple MacBook Pro. Configured into Basic (i3), Advance (i5), and Premium (i7 / M3) tiers, pre-loaded with your corporate OS image, BitLocker encryption, and domain configuration.',
      metrics: ['24–48h Pan-India Dispatch', 'Minimum 2 Years Agreement'],
      whyExists: 'Organizations expanding their enterprise workforce require standardized computing access without committing substantial upfront capital or enduring long OEM procurement delays.',
      benefits: [
        { title: 'Zero Capital Expenditure', desc: 'Preserve cash flow by moving hardware costs from balance-sheet CapEx to 100% tax-deductible operating expenses under a 2-year enterprise agreement.' },
        { title: 'Same-Day Standby Replacements', desc: 'Local buffer stock ensures immediate hardware replacement within 4 hours if a machine experiences any hardware defect.' },
        { title: 'Multi-City Remote Drop-Shipping', desc: 'We deliver pre-imaged, secure laptops directly to employee residences across 100+ cities in India with doorstep unboxing.' }
      ],
      specs: [
        'Basic: Intel Core i3 | 8 GB RAM | 256 GB SSD (Office & Browsing)',
        'Advance: Intel Core i5 | 16 GB RAM | 512 GB SSD (Multitasking & Business Apps)',
        'Premium: Intel Core i7 | 16–32 GB RAM | 512 GB–1 TB SSD (Heavy Computing & Dev)',
        'OEM chargers, commercial carry bags & wired/wireless mice included'
      ],
      deliverables: [
        'Same-day standby hardware replacement warranty',
        'Pre-configured VPN, antivirus & domain policies',
        'Individual drop-shipping to remote employees across India',
        'Scheduled hardware maintenance and thermal servicing'
      ],
      image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&auto=format&fit=crop&q=80'
    },
    'desktop-rental': {
      id: 'desktop-rental',
      name: 'Commercial Desktop & Workstation Rental',
      duration: 'Minimum 2 Years Agreement',
      leadTime: 'Dispatched within 24–48 hours in bulk volumes',
      summary: 'High-density Micro, SFF, and Tower desktop PCs from Dell OptiPlex and HP ProDesk, paired with professional 22-inch, 24-inch, or 27-inch IPS monitors with custom assembly options.',
      metrics: ['Dual-Screen Ready', 'Pre-Cabled Bundles', 'Minimum 2 Years Agreement'],
      whyExists: 'High-density office floors, customer support centers, and design labs need reliable, uniform desktop hardware with full peripherals and zero maintenance burden.',
      benefits: [
        { title: 'Turnkey Workspace Bundles', desc: 'Each machine arrives complete with an IPS monitor, commercial keyboard, optical mouse, power cables, and display connectors.' },
        { title: 'Ultra-Compact Desk Footprints', desc: 'Micro and SFF desktops mount behind monitors or under desks to maximize available corporate office workspace.' },
        { title: 'Hardware Upgrades Included', desc: 'Easily scale RAM or GPU compute mid-contract as software requirements increase without buying new equipment.' }
      ],
      specs: [
        'Intel 12th/13th/14th Gen Core i3, i5 & i7 High-Performance Processors',
        '8GB to 64GB DDR4/DDR5 high-speed dual-channel memory',
        '22", 24" & 27" Borderless Full HD / 2K IPS Displays included',
        'Commercial keyboards, mice, power cables, and HDMI/DP cords'
      ],
      deliverables: [
        'Complete workstation assembly and desk cable dressing',
        'Standby loaner desktops stationed on-site for instant swap',
        'Support for dual-monitor configurations and graphic accelerators',
        'Quarterly OS health maintenance and performance audits'
      ],
      image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=800&auto=format&fit=crop&q=80'
    },
    'ip-phone-gsm-telecom-rental': {
      id: 'ip-phone-gsm-telecom-rental',
      name: 'IP Phone, GSM Gateway & Telecom Equipment Rental',
      duration: 'Minimum 2 Years Agreement',
      leadTime: 'Pre-configured and dispatched in 24 hours',
      summary: 'Grandstream GXP/GRP Series standard business IP phones and Fanvil X7A Enterprise Android Touch IP phones, paired with multi-channel GSM gateways for enterprise voice, contact centers, and executive cabins.',
      metrics: ['Grandstream & Fanvil Fleets', 'HD Wideband Audio', 'Minimum 2 Years Agreement'],
      whyExists: 'Customer support centers, sales desks, and corporate facilities require reliable voice connectivity without tying up capital in telecommunications hardware.',
      benefits: [
        { title: 'Instant PBX Compatibility', desc: 'Grandstream and Fanvil phones are pre-registered to your cloud PBX, Asterisk, Vicidial, or 3CX server so agents simply plug in and dial.' },
        { title: 'SIM Failover & Cost Reduction', desc: 'Multi-port GSM gateways route calls across mobile networks, eliminating expensive PSTN trunk fees during mass operations.' },
        { title: 'Zero Defect Handset Guarantee', desc: 'Any dropped or malfunctioning handset is swapped immediately from local staging stock with zero interruption.' }
      ],
      specs: [
        'Grandstream GXP1620/1625: 2 SIP lines, backlit LCD, HD audio, 3-way conference',
        'Fanvil X7A Android: 7" color touch screen, 20 SIP lines, Wi-Fi, Bluetooth, 112 DSS keys',
        '8, 16, and 32-Channel GSM/4G SIM Gateways with auto-balancing',
        'Commercial call center noise-canceling USB/RJ9 headsets'
      ],
      deliverables: [
        'Auto-provisioning directly to your local or cloud PBX',
        'SIM rotation and SMS campaign routing assistance',
        'Quick swap warranty for any damaged or dropped handsets',
        'Voice codec optimization for crystal-clear HD audio'
      ],
      image: '/assets/phone_grandstream_grp2616.png'
    },
    'bulk-device-deployment': {
      id: 'bulk-device-deployment',
      name: 'Bulk Device Deployment (50–500+ Seats)',
      duration: 'Minimum 2 Years Agreement',
      leadTime: 'Phased rollout with dedicated onsite logistics',
      summary: 'Turnkey fleet provisioning for large enterprise hiring batches, newly opened BPO centers, and multi-city corporate expansions with dedicated logistical management.',
      metrics: ['50–500+ Machines Ready', 'Custom Asset Tag Registry', 'Minimum 2 Years Agreement'],
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
      duration: 'Minimum 2 Years Agreement',
      leadTime: 'Immediate quotation within 2 business hours',
      summary: 'Speak directly with our hardware leasing team to customize computing specifications, 2+ year lease terms, buyback options, or multi-city distribution.',
      metrics: ['Formal Quote in 2 Hours', 'Custom SLA Terms', 'Minimum 2 Years Agreement'],
      whyExists: 'Enterprise IT procurement often involves complex hybrid requirements combining compute, storage, security, and remote drop-shipping under one unified master services agreement.',
      benefits: [
        { title: 'Tailored Financial Models', desc: 'Operating leases and long-term enterprise contracts structured around your company budgeting and financial cycles.' },
        { title: 'Proof-of-Concept Evaluation', desc: 'Receive trial hardware units at your office for technical benchmarking before finalizing multi-seat fleet contracts.' },
        { title: 'Dedicated Account Executive', desc: 'A single point of contact coordinates delivery schedules, hardware additions, billing adjustments, and onsite support SLAs.' }
      ],
      specs: [
        'Mix-and-match laptop, desktop, and telecom hardware bundles',
        'Flexible OPEX financing with zero capital expenditure',
        'Pan-India delivery across 100+ cities and tier-2 regions',
        'Comprehensive maintenance agreements included throughout term'
      ],
      deliverables: [
        'Formal commercial quotation customized for your organization',
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
    <div className="min-h-[85vh] bg-white py-5 sm:py-8 lg:py-12 border-b border-slate-100">
      <div className="max-w-[1536px] mx-auto px-3 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-start">

          {/* Mobile Category Selector (Visible on mobile/tablet < lg) */}
          <div className="lg:hidden col-span-1 mb-2">
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-3.5 shadow-2xs">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#dc2626] block">
                    Equipment Fleet Selection
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
                  className="px-3.5 py-2 min-h-[40px] rounded-xl bg-white border border-slate-200 text-xs font-semibold text-[#dc2626] shadow-2xs flex items-center gap-1.5 active:scale-95 transition-all shrink-0 cursor-pointer"
                >
                  <span>{mobileCategoryOpen ? 'Close' : 'Categories'}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${mobileCategoryOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {/* Collapsible Mobile Category List */}
              {mobileCategoryOpen && (
                <div className="mt-3 pt-3 border-t border-slate-200/80 max-h-[340px] overflow-y-auto space-y-1">
                  <button
                    onClick={() => {
                      handleSelectCategory('all');
                      setMobileCategoryOpen(false);
                    }}
                    className={`w-full text-left py-2.5 px-3 min-h-[42px] flex items-center justify-between rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                      selectedCategoryId === 'all' ? 'bg-[#dc2626] text-white font-bold' : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span>Rental Services Home (Overview)</span>
                  </button>
                  {categoryList.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        handleSelectCategory(item.id);
                        setMobileCategoryOpen(false);
                      }}
                      className={`w-full text-left py-2.5 px-3 min-h-[42px] flex items-center justify-between rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                        selectedCategoryId === item.id ? 'bg-[#dc2626] text-white font-bold' : 'text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <span>{item.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Left Column: Clean Sidebar Navigation (Desktop) matching Solutions & Services */}
          <aside className="hidden lg:block lg:col-span-3 border-r border-slate-200/90 pr-5 lg:sticky lg:top-4 max-h-[calc(100vh-2rem)] overflow-y-auto overscroll-contain [scrollbar-width:thin] [scrollbar-color:#e2e8f0_transparent]">
            {/* Rental Services Home Link */}
            <div className="mb-4 pb-3 border-b border-slate-100">
              <button
                type="button"
                onClick={() => handleSelectCategory('all')}
                className={`relative text-left text-[13.5px] leading-snug transition-colors duration-150 block w-full py-1.5 pl-3.5 cursor-pointer ${
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
                      className={`relative text-left text-[13px] leading-relaxed transition-colors duration-150 block w-full py-2 pl-3.5 pr-2 rounded-lg cursor-pointer ${
                        isActive
                          ? 'text-slate-900 font-bold bg-slate-50'
                          : 'text-slate-700 hover:text-[#dc2626] hover:bg-slate-50/60 font-normal'
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

          {/* Right Column: Main Content */}
          <main className="lg:col-span-9 space-y-8">

            {/* VIEW 1: RENTAL SERVICES HOME (Cisco 3-Spotlight + 4 Acquisition Framework + Calculator + 5 Verticals Grid) */}
            {selectedCategoryId === 'all' ? (
              <div className="space-y-8">

                {/* Official Fleet Rental Hero Header Banner */}
                <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-7 shadow-xs relative overflow-hidden">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#dc2626] text-xs font-bold uppercase tracking-wider mb-3">
                    <Sparkles className="w-3.5 h-3.5 text-[#dc2626]" />
                    <span>Official Enterprise Hardware Leasing &amp; Fleet Rental Portfolio</span>
                  </div>

                  <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2 text-slate-900">
                    Enterprise Hardware Rental &amp; Fleet Leasing
                  </h1>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl mb-5">
                    Preserve working capital and eliminate hardware obsolescence with commercial-grade laptops, desktop workstations, telecom equipment, and turnkey BPO fleets under structured 2-year enterprise lease agreements. Includes 100% operating expense tax deductibility, nationwide drop-shipping, and guaranteed 5% local standby units for zero workplace downtime.
                  </p>

                  <div className="flex flex-wrap items-center gap-2 pt-3.5 border-t border-slate-100 text-xs">
                    <span className="bg-slate-50 text-slate-700 px-3 py-1 rounded-md border border-slate-200/80">
                      Procurement: <strong className="text-slate-900 font-semibold">100% OpEx Structured Leasing</strong>
                    </span>
                    <span className="bg-slate-50 text-slate-700 px-3 py-1 rounded-md border border-slate-200/80">
                      Commitment: <strong className="text-slate-900 font-semibold">Minimum 2 Years Agreement</strong>
                    </span>
                    <span className="bg-emerald-50 text-emerald-800 px-3 py-1 rounded-md border border-emerald-200">
                      Standby Buffer: <strong className="text-emerald-700 font-semibold">Permanent 5% Spares on Site</strong>
                    </span>
                  </div>
                </div>

                {/* Enterprise Acquisition & Rental Framework (4 Models like Solutions & Services) */}
                <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-6 shadow-xs cisco-reveal">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-4 bg-[#dc2626] rounded-full inline-block" />
                      <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                        Enterprise Rental &amp; Leasing Framework
                      </h2>
                    </div>
                    <span className="text-[11px] font-semibold text-red-600 bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-full w-fit">
                      Guaranteed Corporate OpEx Benefits
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-5">
                    We eliminate capital lockup, maintenance overhead, and tech obsolescence through 4 structured corporate leasing commitments:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 cisco-stagger">
                    {RENTAL_FRAMEWORK_MODELS.map((m, idx) => (
                      <div
                        key={idx}
                        className={`cisco-reveal bg-slate-50/70 border border-slate-200/80 rounded-xl p-3.5 border-t-4 ${m.accentColor} hover:bg-white hover:shadow-xs transition-all flex flex-col justify-between`}
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

                {/* Interactive Fleet Sizing Calculator */}
                <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 cisco-reveal">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#dc2626] mb-2">
                    <Calculator className="w-4 h-4" />
                    <span>Instant Fleet Calculator</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Configure Your Fleet Deployment Sizing
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mb-6 max-w-2xl">
                    Select your preferred device class, unit volume, and rental term to receive an immediate formal procurement quote with full warranty support.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">Hardware Category</label>
                      <select
                        value={selectedDevice}
                        onChange={(e) => setSelectedDevice(e.target.value)}
                        className="w-full px-3 py-2 bg-white rounded-lg border border-slate-300 text-xs font-medium text-slate-800 focus:outline-hidden focus:border-[#dc2626]"
                      >
                        <option value="Enterprise Laptops">Enterprise Laptops (vPro / Core i3/i5/i7)</option>
                        <option value="Commercial Desktops">Commercial Desktop Workstations (SFF / Tower)</option>
                        <option value="IP Telecom & Gateways">IP Phones & GSM Gateways (Grandstream / Fanvil)</option>
                        <option value="Bulk BPO Fleet">Turnkey BPO Workstation Bundles (50–500 Seats)</option>
                        <option value="Custom Multi-Device Kit">Custom Multi-Device Fleet Sizing</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">Required Quantity</label>
                      <select
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-white rounded-lg border border-slate-300 text-xs font-medium text-slate-800 focus:outline-hidden focus:border-[#dc2626]"
                      >
                        <option value={10}>10 Units (Branch / Pilot)</option>
                        <option value={25}>25 Units (Project Team)</option>
                        <option value={50}>50 Units (Mid-tier Corporate)</option>
                        <option value={100}>100 Units (BPO Scale)</option>
                        <option value={250}>250+ Units (Enterprise Rollout)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">Lease Term (Min. 2 Years Agreement)</label>
                      <select
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        className="w-full px-3 py-2 bg-white rounded-lg border border-slate-300 text-xs font-medium text-slate-800 focus:outline-hidden focus:border-[#dc2626]"
                      >
                        <option value="2 Years (24 Months)">2 Years / 24 Months (Minimum 2 Years Agreement)</option>
                        <option value="3 Years (36 Months)">3 Years / 36 Months (Enterprise Term)</option>
                        <option value="5 Years (60 Months)">5 Years / 60 Months (Long-Term Corporate)</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-200">
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-[#dc2626]" />
                      <span>Includes full on-site maintenance warranty and 5% local standby loaners</span>
                    </div>
                    <button
                      type="button"
                      onClick={handleCalculatorSubmit}
                      className="px-6 py-2.5 rounded-lg bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold transition-all shadow-soft-sm cursor-pointer"
                    >
                      Generate Custom Quote
                    </button>
                  </div>
                </div>

                {/* Explore All 5 Rental Verticals Grid (Matching Solutions/Services Page) */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h2 className="text-lg font-bold text-slate-900 tracking-tight">
                        Explore All 5 Equipment Rental Verticals
                      </h2>
                      <p className="text-xs text-slate-500">
                        Select any fleet category to view configured models, technical specifications, and tier filters
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 cisco-stagger">
                    {categoryList.map((cat, idx) => {
                      const det = rentalData[cat.id];
                      if (!det) return null;
                      return (
                        <div
                          key={cat.id}
                          className="cisco-reveal bg-white border border-slate-200/90 rounded-2xl p-5 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
                        >
                          <div>
                            {/* Card Image Header */}
                            <div className="relative h-44 sm:h-52 rounded-xl overflow-hidden mb-4 bg-slate-100 border border-slate-200/70">
                              <img
                                src={det.image}
                                alt={det.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-900/15 to-transparent pointer-events-none" />

                              <div className="absolute top-2.5 left-2.5">
                                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-slate-950/80 backdrop-blur-md text-white border border-white/10 uppercase tracking-wider">
                                  FLEET 0{idx + 1}
                                </span>
                              </div>

                              <div className="absolute top-2.5 right-2.5">
                                <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/90 text-white backdrop-blur-md flex items-center gap-1 shadow-xs">
                                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                  Available for Lease
                                </span>
                              </div>

                              <div className="absolute bottom-2.5 left-3 right-3 text-white">
                                <span className="text-[11px] font-bold text-red-300 block truncate">
                                  {det.duration}
                                </span>
                              </div>
                            </div>

                            {/* Card Content Header */}
                            <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#dc2626] transition-colors leading-snug mb-1">
                              {det.name}
                            </h3>

                            <span className="text-[11px] text-slate-500 block mb-2.5">
                              SLA: <strong className="text-slate-700">{det.leadTime}</strong>
                            </span>

                            <p className="text-xs text-slate-600 leading-relaxed mb-3 line-clamp-2">
                              {det.summary}
                            </p>

                            {/* Value Metrics Pills */}
                            <div className="flex flex-wrap gap-1.5 mb-3">
                              {det.metrics.map((metric, mIdx) => (
                                <span
                                  key={mIdx}
                                  className="text-[10px] font-medium bg-slate-50 border border-slate-200/70 text-slate-700 px-2 py-0.5 rounded-md inline-flex items-center gap-1"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#dc2626]" />
                                  {metric}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2 mt-2">
                            <span className="text-[10px] text-slate-400 truncate max-w-[200px]">
                              Zero CapEx • 100% OpEx
                            </span>
                            <button
                              type="button"
                              onClick={() => handleSelectCategory(cat.id)}
                              className="text-xs font-bold text-[#dc2626] hover:text-[#b91c1c] inline-flex items-center gap-1 cursor-pointer"
                            >
                              <span>Explore Fleet Models</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>
            ) : (
              /* VIEW 2: CATEGORY VIEW: Detailed Presentation + Criteria Tabs + Interactive Custom Assembler + Products */
              currentDetail && (
                <div className="space-y-8 animate-in fade-in duration-200">

                  {/* Category Title Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                        {currentDetail.name}
                      </h2>
                      <span className="text-xs text-[#dc2626] font-semibold block mt-1">
                        Deployment SLA: {currentDetail.leadTime} • {currentDetail.duration}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => onOpenQuickSupport(`Rental Request: ${currentDetail.name} (Minimum 2 Years Agreement)`)}
                      className="px-5 py-2.5 rounded-full bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold transition-all shadow-soft-sm flex items-center gap-2 self-start sm:self-auto cursor-pointer"
                    >
                      <span>Request Rental Quotation</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Executive Split Hero Panel */}
                  <div className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-6 sm:p-7 cisco-reveal">
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

                        {/* Strategic Value */}
                        <div className="pt-2 border-t border-slate-200/70">
                          <p className="text-xs text-slate-600 leading-relaxed">
                            <strong className="text-slate-900 font-semibold">Strategic Value: </strong>
                            {currentDetail.whyExists}
                          </p>
                        </div>
                      </div>

                      {/* Framed Image Card */}
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
                            Minimum 2 Years
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* FLEET CRITERIA FILTER TABS */}
                  <div className="space-y-4 cisco-reveal">
                    
                    {/* Laptop Rental Tiers */}
                    {selectedCategoryId === 'laptop-rental' && (
                      <div className="pt-2">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                            Filter by Fleet Tier / Hardware Criteria:
                          </span>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-1.5 bg-slate-100/80 rounded-2xl border border-slate-200">
                          <button
                            type="button"
                            onClick={() => setActiveLaptopTier('all')}
                            className={`py-2 px-3 rounded-xl text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer ${
                              activeLaptopTier === 'all'
                                ? 'bg-white text-[#dc2626] shadow-2xs border border-slate-200'
                                : 'text-slate-600 hover:text-slate-900'
                            }`}
                          >
                            <span>All Models ({RENTAL_PRODUCTS.filter(p => p.categoryId === 'laptop-rental').length})</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setActiveLaptopTier('basic')}
                            className={`py-2 px-3 rounded-xl text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer ${
                              activeLaptopTier === 'basic'
                                ? 'bg-white text-[#dc2626] shadow-2xs border border-slate-200'
                                : 'text-slate-600 hover:text-slate-900'
                            }`}
                          >
                            <span className="inline-block w-2 h-2 rounded-full bg-blue-500" />
                            <span>Basic (Core i3)</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setActiveLaptopTier('advance')}
                            className={`py-2 px-3 rounded-xl text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer ${
                              activeLaptopTier === 'advance'
                                ? 'bg-white text-[#dc2626] shadow-2xs border border-slate-200'
                                : 'text-slate-600 hover:text-slate-900'
                            }`}
                          >
                            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
                            <span>Advance (Core i5)</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setActiveLaptopTier('premium')}
                            className={`py-2 px-3 rounded-xl text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer ${
                              activeLaptopTier === 'premium'
                                ? 'bg-white text-[#dc2626] shadow-2xs border border-slate-200'
                                : 'text-slate-600 hover:text-slate-900'
                            }`}
                          >
                            <span className="inline-block w-2 h-2 rounded-full bg-purple-500" />
                            <span>Premium (Core i7 / M3)</span>
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Desktop Rental Tiers + Assemble Option */}
                    {selectedCategoryId === 'desktop-rental' && (
                      <div className="pt-2">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                            Filter by Fleet Tier / Custom Assemble:
                          </span>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 p-1.5 bg-slate-100/80 rounded-2xl border border-slate-200">
                          <button
                            type="button"
                            onClick={() => setActiveDesktopTier('all')}
                            className={`py-2 px-3 rounded-xl text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer ${
                              activeDesktopTier === 'all'
                                ? 'bg-white text-[#dc2626] shadow-2xs border border-slate-200'
                                : 'text-slate-600 hover:text-slate-900'
                            }`}
                          >
                            <span>All Models ({RENTAL_PRODUCTS.filter(p => p.categoryId === 'desktop-rental').length})</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setActiveDesktopTier('basic')}
                            className={`py-2 px-3 rounded-xl text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer ${
                              activeDesktopTier === 'basic'
                                ? 'bg-white text-[#dc2626] shadow-2xs border border-slate-200'
                                : 'text-slate-600 hover:text-slate-900'
                            }`}
                          >
                            <span className="inline-block w-2 h-2 rounded-full bg-blue-500" />
                            <span>Basic (Core i3)</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setActiveDesktopTier('advance')}
                            className={`py-2 px-3 rounded-xl text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer ${
                              activeDesktopTier === 'advance'
                                ? 'bg-white text-[#dc2626] shadow-2xs border border-slate-200'
                                : 'text-slate-600 hover:text-slate-900'
                            }`}
                          >
                            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
                            <span>Advance (Core i5)</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setActiveDesktopTier('premium')}
                            className={`py-2 px-3 rounded-xl text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer ${
                              activeDesktopTier === 'premium'
                                ? 'bg-white text-[#dc2626] shadow-2xs border border-slate-200'
                                : 'text-slate-600 hover:text-slate-900'
                            }`}
                          >
                            <span className="inline-block w-2 h-2 rounded-full bg-purple-500" />
                            <span>Premium (Core i7)</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setActiveDesktopTier('assemble')}
                            className={`col-span-2 sm:col-span-1 py-2 px-3 rounded-xl text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer ${
                              activeDesktopTier === 'assemble'
                                ? 'bg-[#dc2626] text-white shadow-md'
                                : 'bg-red-50 text-[#dc2626] hover:bg-red-100/80 font-bold border border-red-200/60'
                            }`}
                          >
                            <Wrench className="w-3.5 h-3.5" />
                            <span>Assemble &amp; Customise</span>
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Telecom Rental Filter Tabs (Grandstream, Fanvil, GSM Gateways) */}
                    {selectedCategoryId === 'ip-phone-gsm-telecom-rental' && (
                      <div className="pt-2">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                            Select Telecom Equipment Class:
                          </span>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-1.5 bg-slate-100/80 rounded-2xl border border-slate-200">
                          <button
                            type="button"
                            onClick={() => setActiveTelecomBrand('all')}
                            className={`py-2 px-3 rounded-xl text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer ${
                              activeTelecomBrand === 'all'
                                ? 'bg-white text-[#dc2626] shadow-2xs border border-slate-200'
                                : 'text-slate-600 hover:text-slate-900'
                            }`}
                          >
                            <span>All Telecom ({RENTAL_PRODUCTS.filter(p => p.categoryId === 'ip-phone-gsm-telecom-rental').length})</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setActiveTelecomBrand('grandstream')}
                            className={`py-2 px-3 rounded-xl text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer ${
                              activeTelecomBrand === 'grandstream'
                                ? 'bg-white text-[#dc2626] shadow-2xs border border-slate-200'
                                : 'text-slate-600 hover:text-slate-900'
                            }`}
                          >
                            <span className="w-2 h-2 rounded-full bg-[#173B67]" />
                            <span>Grandstream IP</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setActiveTelecomBrand('fanvil')}
                            className={`py-2 px-3 rounded-xl text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer ${
                              activeTelecomBrand === 'fanvil'
                                ? 'bg-white text-[#dc2626] shadow-2xs border border-slate-200'
                                : 'text-slate-600 hover:text-slate-900'
                            }`}
                          >
                            <span className="w-2 h-2 rounded-full bg-[#dc2626]" />
                            <span>Fanvil Touchscreen</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setActiveTelecomBrand('gsm-gateway')}
                            className={`py-2 px-3 rounded-xl text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer ${
                              activeTelecomBrand === 'gsm-gateway'
                                ? 'bg-white text-[#dc2626] shadow-2xs border border-slate-200'
                                : 'text-slate-600 hover:text-slate-900'
                            }`}
                          >
                            <span className="w-2 h-2 rounded-full bg-emerald-600" />
                            <span>4G GSM Gateways</span>
                          </button>
                        </div>
                      </div>
                    )}

                    {/* ASSEMBLE TAB VIEW: Interactive Desktop Customisation Builder */}
                    {selectedCategoryId === 'desktop-rental' && activeDesktopTier === 'assemble' ? (
                      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 animate-in fade-in duration-200 cisco-reveal">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
                          <div>
                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#dc2626] mb-1">
                              <Cpu className="w-4 h-4" />
                              <span>Tailored Corporate Hardware Assembly</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">
                              Assemble Your Custom Desktop Workstation
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                              Need non-standard specifications, dedicated graphics cards, dual displays, or custom Linux/Windows builds? Configure your exact requirements below and our engineering team will build, stress-test, and deploy your fleet.
                            </p>
                          </div>
                          <span className="self-start sm:self-auto px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold rounded-full">
                            Custom Build SLA: 24–48h
                          </span>
                        </div>

                        {/* Customisation Options Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                          {/* CPU Selection */}
                          <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2 shadow-2xs">
                            <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                              <Cpu className="w-3.5 h-3.5 text-[#dc2626]" />
                              <span>Processor / CPU Tier</span>
                            </label>
                            <select
                              value={customCpu}
                              onChange={(e) => setCustomCpu(e.target.value)}
                              className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs font-medium text-slate-800 focus:outline-hidden focus:border-[#dc2626]"
                            >
                              <option value="Intel Core i3 (12th/13th Gen - Standard Office)">Intel Core i3 (12th/13th Gen - Standard Office)</option>
                              <option value="Intel Core i5 (13th/14th Gen - Multi-Core Business)">Intel Core i5 (13th/14th Gen - Multi-Core Business)</option>
                              <option value="Intel Core i7 (13th / 14th Gen - High Performance)">Intel Core i7 (13th / 14th Gen - High Performance)</option>
                              <option value="Intel Core i9-13900K / 14900 (Workstation Compute)">Intel Core i9-13900K / 14900 (Workstation Compute)</option>
                              <option value="AMD Ryzen 7 / 9 / Threadripper Pro">AMD Ryzen 7 / 9 / Threadripper Pro</option>
                            </select>
                            <span className="text-[11px] text-slate-500 block">Matched to motherboard chipset &amp; active cooling</span>
                          </div>

                          {/* RAM Memory Selection */}
                          <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2 shadow-2xs">
                            <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-blue-500" />
                              <span>RAM Memory Volume</span>
                            </label>
                            <select
                              value={customRam}
                              onChange={(e) => setCustomRam(e.target.value)}
                              className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs font-medium text-slate-800 focus:outline-hidden focus:border-[#dc2626]"
                            >
                              <option value="8 GB DDR4 (Basic Office)">8 GB DDR4 (Basic Office)</option>
                              <option value="16 GB DDR4/DDR5 (Recommended Business)">16 GB DDR4/DDR5 (Recommended Business)</option>
                              <option value="32 GB DDR5 (Heavy Multi-tasking & Dev)">32 GB DDR5 (Heavy Multi-tasking &amp; Dev)</option>
                              <option value="64 GB High-Speed DDR5 (Engineering / Analytics)">64 GB High-Speed DDR5 (Engineering / Analytics)</option>
                              <option value="128 GB ECC Registered DDR5 (AI / Scientific)">128 GB ECC Registered DDR5 (AI / Scientific)</option>
                            </select>
                            <span className="text-[11px] text-slate-500 block">Dual-channel high-bandwidth configuration</span>
                          </div>

                          {/* Storage Selection */}
                          <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2 shadow-2xs">
                            <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-emerald-500" />
                              <span>SSD / Storage Configuration</span>
                            </label>
                            <select
                              value={customStorage}
                              onChange={(e) => setCustomStorage(e.target.value)}
                              className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs font-medium text-slate-800 focus:outline-hidden focus:border-[#dc2626]"
                            >
                              <option value="256 GB NVMe SSD">256 GB NVMe PCIe SSD (Fast Boot)</option>
                              <option value="512 GB PCIe M.2 NVMe SSD">512 GB PCIe M.2 NVMe SSD</option>
                              <option value="1 TB NVMe Gen4 High-Speed SSD">1 TB NVMe Gen4 High-Speed SSD</option>
                              <option value="2 TB NVMe SSD + 2TB Secondary HDD">2 TB NVMe SSD + 2TB Secondary HDD</option>
                              <option value="Dual NVMe SSDs in RAID 0/1">Dual NVMe SSDs in RAID 0/1 (Data Redundancy)</option>
                            </select>
                            <span className="text-[11px] text-slate-500 block">Up to 7000 MB/s read speeds for instant load</span>
                          </div>

                          {/* Dedicated GPU Option */}
                          <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2 shadow-2xs">
                            <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                              <span>Dedicated Graphics / GPU</span>
                            </label>
                            <select
                              value={customGpu}
                              onChange={(e) => setCustomGpu(e.target.value)}
                              className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs font-medium text-slate-800 focus:outline-hidden focus:border-[#dc2626]"
                            >
                              <option value="Integrated Intel UHD / Iris Xe (Standard Corporate)">Integrated Intel UHD / Iris Xe (Standard Corporate)</option>
                              <option value="NVIDIA T400 / T1000 4GB / 8GB (Multi-Monitor Pro)">NVIDIA T400 / T1000 4GB / 8GB (Multi-Monitor Pro)</option>
                              <option value="NVIDIA RTX 4060 8GB / RTX A2000 (Creative / CAD)">NVIDIA RTX 4060 8GB / RTX A2000 (Creative / CAD)</option>
                              <option value="NVIDIA RTX A4000 16GB Dedicated GPU">NVIDIA RTX A4000 16GB Dedicated GPU (SolidWorks &amp; ML)</option>
                              <option value="NVIDIA RTX 6000 Ada Generation (High-Compute AI)">NVIDIA RTX 6000 Ada Generation (High-Compute AI)</option>
                            </select>
                            <span className="text-[11px] text-slate-500 block">ISV-certified drivers and video hardware encoders</span>
                          </div>

                          {/* Display / Monitor Bundle */}
                          <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2 shadow-2xs">
                            <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                              <Monitor className="w-3.5 h-3.5 text-[#173B67]" />
                              <span>Monitor Pairing</span>
                            </label>
                            <select
                              value={customMonitor}
                              onChange={(e) => setCustomMonitor(e.target.value)}
                              className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs font-medium text-slate-800 focus:outline-hidden focus:border-[#dc2626]"
                            >
                              <option value="Single 22-inch Full HD Borderless IPS Display">Single 22-inch Full HD Borderless IPS Display</option>
                              <option value="Single 24-inch Borderless ComfortView IPS Display">Single 24-inch Borderless ComfortView IPS Display</option>
                              <option value="Dual 24&quot; Borderless IPS Displays (Multitasking)">Dual 24" Borderless IPS Displays (Multitasking)</option>
                              <option value="Single 27-inch 2K QHD IPS Precision Display">Single 27-inch 2K QHD IPS Precision Display</option>
                              <option value="No Monitors Needed (Host PC Only)">No Monitors Needed (Host PC Only)</option>
                            </select>
                            <span className="text-[11px] text-slate-500 block">Includes HDMI/DisplayPort cabling &amp; ergonomic stand</span>
                          </div>

                          {/* Form Factor / Chassis */}
                          <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2 shadow-2xs">
                            <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                              <Boxes className="w-3.5 h-3.5 text-amber-600" />
                              <span>Chassis Form Factor</span>
                            </label>
                            <select
                              value={customChassis}
                              onChange={(e) => setCustomChassis(e.target.value)}
                              className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs font-medium text-slate-800 focus:outline-hidden focus:border-[#dc2626]"
                            >
                              <option value="Micro / 1-Liter Tiny Desktop (Mounts behind screen)">Micro / 1-Liter Tiny Desktop (Mounts behind screen)</option>
                              <option value="Small Form Factor (SFF) Space-Saving Chassis">Small Form Factor (SFF) Space-Saving Chassis</option>
                              <option value="Tower Workstation (Expandable PCIe & Dual Power)">Tower Workstation (Expandable PCIe &amp; Dual Power)</option>
                              <option value="Rackmount 2U/4U Desktop Chassis">Rackmount 2U/4U Desktop Chassis (Data Room / Lab)</option>
                            </select>
                            <span className="text-[11px] text-slate-500 block">Optimized airflow, thermal cooling &amp; acoustic dampening</span>
                          </div>
                        </div>

                        {/* Special Customisation Notes */}
                        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                          <label className="text-xs font-bold text-slate-700 block mb-1.5">
                            Additional Custom Requirements / Software Staging (Optional)
                          </label>
                          <input
                            type="text"
                            value={customNotes}
                            onChange={(e) => setCustomNotes(e.target.value)}
                            placeholder="E.g., Linux Ubuntu 22.04 LTS dual boot, bitlocker encryption, specific graphics drivers, multi-city delivery..."
                            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-800 focus:outline-hidden focus:border-[#dc2626]"
                          />
                        </div>

                        {/* Configuration Summary & Action */}
                        <div className="bg-white border border-slate-200/90 rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xs">
                          <div className="space-y-1">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                              Custom Assembly Blueprint
                            </span>
                            <p className="text-xs sm:text-sm font-bold text-slate-900">
                              {customCpu} • {customRam} • {customStorage} • {customGpu}
                            </p>
                            <p className="text-xs text-slate-500">
                              Display: {customMonitor} | Chassis: {customChassis}
                            </p>
                          </div>

                          <button
                            type="button"
                            onClick={() => {
                              const requestText = `Custom Assemble Desktop Request: ${customCpu}, ${customRam}, ${customStorage}, GPU: ${customGpu}, Display: ${customMonitor}, Chassis: ${customChassis}${customNotes ? ` (Notes: ${customNotes})` : ''} (Minimum 2 Years Agreement)`;
                              onOpenQuickSupport(requestText);
                            }}
                            className="px-6 py-3 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold transition-all shadow-soft-sm flex items-center justify-center gap-2 whitespace-nowrap self-stretch md:self-auto cursor-pointer"
                          >
                            <span>Request Custom Quotation</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ) : (
                      /* Standard Products Grid for all other views */
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 cisco-stagger">
                        {currentCategoryProducts.map((product) => (
                          <article
                            key={product.id}
                            className="cisco-reveal bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                          >
                            <div>
                              {/* Product Image Box */}
                              <div className={`h-48 sm:h-52 border-b border-slate-100 relative overflow-hidden flex items-center justify-center p-4 transition-colors ${
                                selectedCategoryId === 'ip-phone-gsm-telecom-rental'
                                  ? 'bg-gradient-to-b from-white to-slate-50/80'
                                  : 'bg-slate-50'
                              }`}>
                                <img
                                  src={product.image}
                                  alt={product.name}
                                  className={`w-full h-full group-hover:scale-105 transition-transform duration-300 rounded-lg ${
                                    selectedCategoryId === 'ip-phone-gsm-telecom-rental'
                                      ? 'object-contain max-h-40 drop-shadow-sm'
                                      : 'object-cover'
                                  }`}
                                  loading="lazy"
                                />

                                {/* Tier Badge (Brand names removed from image overlay per user request) */}
                                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                                  {product.tier && (
                                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded shadow-2xs uppercase tracking-wider text-white ${
                                      product.tier === 'basic' ? 'bg-blue-600' :
                                      product.tier === 'advance' ? 'bg-emerald-600' : 'bg-purple-600'
                                    }`}>
                                      {product.tier} Tier
                                    </span>
                                  )}
                                </div>

                                {/* Availability Pill */}
                                <span className="absolute top-3 right-3 bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-2xs flex items-center gap-1">
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

                                {/* Key Specification Matrix for Tiers (CPU, RAM, Storage) */}
                                {product.processor && (
                                  <div className="grid grid-cols-3 gap-2 p-2.5 bg-slate-50 border border-slate-200/80 rounded-xl text-center">
                                    <div>
                                      <span className="text-[10px] uppercase font-bold text-slate-400 block">CPU</span>
                                      <span className="text-xs font-bold text-slate-800 truncate block">{product.processor}</span>
                                    </div>
                                    <div className="border-x border-slate-200 px-1">
                                      <span className="text-[10px] uppercase font-bold text-slate-400 block">RAM</span>
                                      <span className="text-xs font-bold text-slate-800 truncate block">{product.ram}</span>
                                    </div>
                                    <div>
                                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Storage</span>
                                      <span className="text-xs font-bold text-slate-800 truncate block">{product.ssd}</span>
                                    </div>
                                  </div>
                                )}

                                {product.bestFor && (
                                  <div className="text-xs text-slate-700 bg-red-50/60 border border-red-100 p-2.5 rounded-xl">
                                    <strong className="text-[#dc2626] font-semibold">Best suited for: </strong>
                                    <span>{product.bestFor}</span>
                                  </div>
                                )}

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

                                {/* Lease Terms / Pricing Model */}
                                <div className="flex items-center justify-between pt-1 text-xs">
                                  <div>
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                                      Pricing Model
                                    </span>
                                    <span className="font-bold text-slate-900">
                                      Custom Quote on Request
                                    </span>
                                  </div>
                                  {product.minLease && (
                                    <div className="text-right">
                                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                                        Agreement Term
                                      </span>
                                      <span className="text-[#dc2626] font-bold">
                                        {product.minLease}
                                      </span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="p-5 pt-0 border-t border-slate-100 flex items-center gap-2 mt-2">
                              <button
                                type="button"
                                onClick={() => onOpenQuickSupport(`Rental Inquiry: ${product.name} (Minimum 2 Years Agreement)`)}
                                className="flex-1 py-2.5 px-3 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold transition-colors text-center shadow-2xs cursor-pointer"
                              >
                                Request Rental Quote
                              </button>
                              <button
                                type="button"
                                onClick={() => setInspectRentalProduct(product)}
                                className="py-2.5 px-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                              >
                                Quick View
                              </button>
                            </div>
                          </article>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Strategic Benefits: Why Lease from Unified Enterprise */}
                  <div className="space-y-4 pt-4 cisco-reveal">
                    <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
                      <span className="w-1.5 h-6 bg-[#dc2626] rounded-full shrink-0" />
                      <h3 className="text-xl font-bold text-[#173B67] tracking-tight">
                        Why Lease Hardware from Unified Enterprise
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 cisco-stagger">
                      {currentDetail.benefits.map((b, idx) => (
                        <div
                          key={idx}
                          className="cisco-reveal bg-white border border-slate-200/90 rounded-xl p-5 shadow-2xs space-y-2 hover:border-slate-300 transition-colors"
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

                  {/* Hardware Standards & Lease Terms Checklist */}
                  <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 space-y-6 shadow-2xs cisco-reveal">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Technical Standards */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="w-1.5 h-4 bg-[#dc2626] rounded-full" />
                          <h4 className="text-sm font-bold text-[#173B67]">
                            Hardware Configurations &amp; Standards
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
                            Lease Terms &amp; Maintenance Commitments
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
                          Commitment Terms: {currentDetail.duration}
                        </span>
                        <span className="text-xs text-slate-500">
                          Available with zero capital expenditure and same-day standby replacement pools across India.
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => onOpenQuickSupport(`Enquiry: ${currentDetail.name} (Minimum 2 Years Agreement)`)}
                        className="px-6 py-2.5 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold transition-colors whitespace-nowrap shadow-soft-sm cursor-pointer"
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
                  {inspectRentalProduct.tier ? `${inspectRentalProduct.tier.toUpperCase()} TIER • ` : ''}Enterprise Fleet • Ready to Deploy
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
                className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
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
                {inspectRentalProduct.bestFor && (
                  <p className="text-xs text-slate-600">
                    <strong className="text-[#dc2626]">Recommended for: </strong>
                    {inspectRentalProduct.bestFor}
                  </p>
                )}
                {inspectRentalProduct.processor && (
                  <div className="grid grid-cols-3 gap-2 p-2.5 bg-white border border-slate-200 rounded-lg text-center mt-2">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">CPU</span>
                      <span className="text-xs font-bold text-slate-800">{inspectRentalProduct.processor}</span>
                    </div>
                    <div className="border-x border-slate-200 px-1">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">RAM</span>
                      <span className="text-xs font-bold text-slate-800">{inspectRentalProduct.ram}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Storage</span>
                      <span className="text-xs font-bold text-slate-800">{inspectRentalProduct.ssd}</span>
                    </div>
                  </div>
                )}
                <div className="flex flex-wrap gap-2 pt-1 text-xs">
                  <span className="px-2.5 py-1 bg-white rounded-md border border-slate-200 font-bold text-slate-800">
                    Pricing: Custom Quote on Request
                  </span>
                  {inspectRentalProduct.minLease && (
                    <span className="px-2.5 py-1 bg-white rounded-md border border-red-200 font-bold text-[#dc2626]">
                      {inspectRentalProduct.minLease}
                    </span>
                  )}
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
                  Included Peripherals &amp; Deliverables
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
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
              >
                Close Preview
              </button>
              <button
                type="button"
                onClick={() => {
                  const prd = inspectRentalProduct;
                  setInspectRentalProduct(null);
                  onOpenQuickSupport(`Rental Booking: ${prd.name} (Minimum 2 Years Agreement)`);
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold transition-all shadow-soft-sm flex items-center justify-center gap-2 cursor-pointer"
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
