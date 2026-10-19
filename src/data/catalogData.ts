export interface CatalogProduct {
  id: string;
  categoryId: string;
  brand: string;
  name: string;
  image: string;
  tagline: string;
  specs: {
    display?: string;
    processor?: string;
    memory?: string;
    storage?: string;
    security?: string;
    os?: string;
    ports?: string;
  };
  keyPills: string[];
  stockStatus: string;
  rentalAvailable: boolean;
  idealFor: string;
}

export const CATALOG_PRODUCTS: CatalogProduct[] = [
  // LAPTOPS & DESKTOPS
  {
    id: 'dell-latitude-7440',
    categoryId: 'laptops-desktops',
    brand: 'Dell',
    name: 'Dell Latitude 7440 Ultrabook',
    image: '/assets/dell_latitude_laptop.jpg',
    tagline: 'Ultralight corporate fleet standard with 13th Gen Intel vPro and all-day battery life.',
    specs: {
      display: '14.0" FHD+ (1920x1200) Anti-Glare, 400 nits, ComfortView Plus',
      processor: '13th Gen Intel Core i7-1365U vPro (10-Core, up to 5.2 GHz)',
      memory: '16GB / 32GB LPDDR5 4800MHz integrated',
      storage: '512GB / 1TB M.2 PCIe NVMe Gen4 Class 35 SSD',
      security: 'TPM 2.0, Fingerprint Reader, Windows Hello IR Camera',
      os: 'Windows 11 Pro 64-bit National OEM',
      ports: '2x Thunderbolt 4 with Power Delivery, 2x USB 3.2 Gen 1, HDMI 2.0'
    },
    keyPills: ['Intel Core i7 vPro', '16GB LPDDR5', '512GB NVMe', '1.33 kg'],
    stockStatus: 'In Stock • Same-Day Dispatch',
    rentalAvailable: true,
    idealFor: 'Executive travel, corporate workforce fleets, and consulting teams'
  },
  {
    id: 'hp-elitebook-840-g10',
    categoryId: 'laptops-desktops',
    brand: 'HP',
    name: 'HP EliteBook 840 G10',
    image: '/assets/hp_elitebook_laptop.jpg',
    tagline: 'Precision-engineered all-aluminum business ultrabook with HP Wolf Security.',
    specs: {
      display: '14.0" WUXGA (1920x1200) IPS, Anti-Glare, 400 nits, HP Sure View',
      processor: '13th Gen Intel Core i7-1355U (10 Cores, 12 Threads, up to 5.0 GHz)',
      memory: '16GB / 32GB DDR5-5200 MHz RAM (dual SODIMM slots, upgradable)',
      storage: '512GB / 1TB PCIe Gen4x4 NVMe M.2 SSD',
      security: 'HP Wolf Pro Security Edition, TPM 2.0, IR Camera & Shutter',
      os: 'Windows 11 Pro 64-bit',
      ports: '2x Thunderbolt 4 / USB4 40Gbps, 2x SuperSpeed USB Type-A, HDMI 2.1'
    },
    keyPills: ['Intel Core i7', 'Upgradable DDR5', 'HP Wolf Security', 'All-Day Battery'],
    stockStatus: 'In Stock • Bulk Fleets Ready',
    rentalAvailable: true,
    idealFor: 'Enterprise sales, banking operations, and remote corporate professionals'
  },
  {
    id: 'lenovo-thinkpad-x1-carbon-gen11',
    categoryId: 'laptops-desktops',
    brand: 'Lenovo',
    name: 'Lenovo ThinkPad X1 Carbon Gen 11',
    image: '/assets/lenovo_thinkpad_laptop.jpg',
    tagline: 'The iconic carbon-fiber executive flagship, weighing just 1.12 kg with military durability.',
    specs: {
      display: '14.0" 2.8K (2880x1800) OLED Anti-Reflective, 400 nits, 100% DCI-P3',
      processor: '13th Gen Intel Core i7-1365U vPro (up to 5.2 GHz with Intel Turbo Boost)',
      memory: '32GB LPDDR5-6400MHz soldered memory',
      storage: '1TB M.2 2280 PCIe Gen4 Performance NVMe SSD',
      security: 'ThinkShield suite, Glance presence detection, Match-on-Chip Fingerprint',
      os: 'Windows 11 Pro 64-bit',
      ports: '2x Thunderbolt 4, 2x USB-A 3.2 Gen 1, HDMI 2.0b, Headphone / mic combo'
    },
    keyPills: ['OLED 2.8K Display', '32GB RAM', '1TB NVMe', '1.12 kg Ultralight'],
    stockStatus: 'In Stock • Tier-1 Support',
    rentalAvailable: true,
    idealFor: 'C-suite executives, senior engineering leaders, and mobility architects'
  },
  {
    id: 'apple-macbook-pro-16-m3',
    categoryId: 'laptops-desktops',
    brand: 'Apple',
    name: 'Apple MacBook Pro 16" (M3 Pro / M3 Max)',
    image: '/assets/apple_macbook_pro.jpg',
    tagline: 'Unprecedented power with Apple Silicon M3 for developers, data scientists, and creative teams.',
    specs: {
      display: '16.2" Liquid Retina XDR (3456x2234), ProMotion 120Hz, 1600 nits peak',
      processor: 'Apple M3 Pro (12-Core CPU, 18-Core GPU, 16-Core Neural Engine)',
      memory: '36GB Unified Memory (configurable to 96GB or 128GB on M3 Max)',
      storage: '512GB / 1TB high-speed NVMe PCIe SSD (up to 7.4 GB/s read speeds)',
      security: 'Apple Secure Enclave, Touch ID biometric sensor',
      os: 'macOS Sonoma Enterprise MDM Ready',
      ports: '3x Thunderbolt 4, HDMI port, SDXC card slot, MagSafe 3 charging port'
    },
    keyPills: ['Apple M3 Pro', '36GB Unified RAM', 'Liquid Retina XDR', '22h Battery'],
    stockStatus: 'In Stock • Immediate Dispatch',
    rentalAvailable: true,
    idealFor: 'Full-stack software engineers, machine learning teams, and digital media agencies'
  },
  {
    id: 'asus-expertbook-b9-oled',
    categoryId: 'laptops-desktops',
    brand: 'ASUS',
    name: 'ASUS ExpertBook B9 OLED',
    image: '/assets/asus_expertbook_laptop.jpg',
    tagline: 'The world’s lightest 14-inch OLED business laptop crafted from premium magnesium-lithium alloy.',
    specs: {
      display: '14.0" 2.8K (2880x1800) 16:10 OLED, 400 nits, 100% sRGB, 90Hz',
      processor: 'Intel Core i7-1355U vPro (10-Core, up to 5.0 GHz Turbo)',
      memory: '32GB LPDDR5 5200MHz',
      storage: '1TB + 1TB Dual PCIe Gen4 SSD configured with RAID 1 hardware mirroring',
      security: 'NFC Log-in, Smart Card reader, IR Camera, ASUS NumberPad in trackpad',
      os: 'Windows 11 Pro',
      ports: '2x Thunderbolt 4, 1x USB 3.2 Gen 2 Type-A, HDMI 2.1, Micro HDMI to RJ45'
    },
    keyPills: ['OLED 16:10', 'Dual SSD RAID 1', 'Sub-1kg Chassis', 'NumberPad 2.0'],
    stockStatus: 'Available on Order • 24-48h Delivery',
    rentalAvailable: true,
    idealFor: 'Frequent corporate travelers, finance directors, and field enterprise managers'
  },
  {
    id: 'dell-optiplex-7010-desktop',
    categoryId: 'laptops-desktops',
    brand: 'Dell',
    name: 'Dell OptiPlex 7010 Workstations (Micro & Tower)',
    image: '/assets/dell_optiplex_desktop.jpg',
    tagline: 'High-density commercial desktop fleets built for intensive call centers, trading desks, and workstations.',
    specs: {
      display: 'Supported dual or triple Dell UltraSharp 24" / 27" IPS commercial monitors',
      processor: '13th / 14th Gen Intel Core i5-13500 / i7-13700 (up to 16 cores, 5.2 GHz)',
      memory: '16GB / 32GB / 64GB DDR5 4800MHz memory',
      storage: '512GB / 1TB PCIe NVMe SSD + optional 2TB SATA 7200 RPM bulk drive',
      security: 'Chassis Intrusion Switch, TPM 2.0, Kensington lock slot',
      os: 'Windows 11 Pro 64-bit with corporate domain join',
      ports: 'DisplayPort 1.4a, HDMI 1.4b, Gigabit Ethernet RJ45, 6x USB 3.2 Gen 1'
    },
    keyPills: ['Intel Core i5/i7', 'Dual Monitor Ready', 'Compact Micro Form', '24/7 Duty Cycle'],
    stockStatus: 'Bulk Fleets In Stock • Ready to Deploy',
    rentalAvailable: true,
    idealFor: 'Call-center floor seats, financial trading floors, and fixed corporate offices'
  },

  // SERVERS & STORAGE
  {
    id: 'dell-poweredge-r760',
    categoryId: 'servers-storage',
    brand: 'Dell EMC',
    name: 'Dell PowerEdge R760 2U Rack Server',
    image: '/assets/datacenter_servers.jpg',
    tagline: 'Dual-socket 2U enterprise workhorse engineered for mission-critical virtualization and databases.',
    specs: {
      processor: 'Dual 4th / 5th Gen Intel Xeon Scalable Processors (up to 56 cores per CPU)',
      memory: 'Up to 8TB DDR5 4800MT/s across 32 DIMM slots',
      storage: 'Up to 24x 2.5" NVMe/SAS/SATA SSDs with PERC H965i Hardware RAID',
      security: 'iDRAC9 Enterprise with OpenManage, Zero-Trust Silicon Root of Trust',
      ports: 'Dual 10G/25G SFP28 OCP 3.0 network mezzanine, Dual 1400W Titanium Redundant PSUs'
    },
    keyPills: ['Dual Intel Xeon', 'Up to 8TB DDR5', '24x NVMe Bays', 'iDRAC9 Enterprise'],
    stockStatus: 'In Stock • Custom Staged in 48h',
    rentalAvailable: true,
    idealFor: 'VMware ESXi clusters, Microsoft Hyper-V, and high-concurrency SQL/Oracle databases'
  },
  {
    id: 'hpe-proliant-dl380-gen11',
    categoryId: 'servers-storage',
    brand: 'HPE',
    name: 'HPE ProLiant DL380 Gen11 Server',
    image: '/assets/hpe_proliant_server.jpg',
    tagline: 'World-renowned dual-socket 2U server delivering versatile compute density and secure iLO 6 management.',
    specs: {
      processor: 'Dual 4th/5th Gen Intel Xeon Scalable CPUs (up to 64 cores per socket)',
      memory: 'Up to 8TB DDR5 ECC Registered memory',
      storage: 'Up to 20 EDSFF E3.S or 24 SFF SAS/SATA drives with HPE Smart Array MR416i',
      security: 'HPE iLO 6 Advanced with Silicon Root of Trust and runtime firmware verification',
      ports: 'PCIe Gen5 expansion slots, dual Hot-Plug Redundant Platinum 800W/1600W PSUs'
    },
    keyPills: ['HPE iLO 6', 'PCIe Gen5 Ready', 'Dual 1600W PSU', 'Tier-3 Certified'],
    stockStatus: 'In Stock • Pre-Configured',
    rentalAvailable: true,
    idealFor: 'Enterprise ERP systems (SAP HANA), AI inference models, and cloud consolidation'
  },

  // ROUTERS & NETWORK SWITCHES
  {
    id: 'cisco-catalyst-9300-switch',
    categoryId: 'routers-network-switches',
    brand: 'Cisco',
    name: 'Cisco Catalyst 9300 Series Core Switch',
    image: '/assets/network_security_firewall.jpg',
    tagline: 'Industry-standard enterprise access layer switches with StackWise-480 and 90W UPOE+.',
    specs: {
      processor: 'Cisco UADP 2.0 ASIC with integrated x86 CPU architecture for container hosting',
      memory: '16GB DRAM with 16GB Flash storage',
      storage: 'Modular 10G / 25G / 40G uplink adapters',
      security: 'Encrypted Traffic Analytics (ETA), MACsec-256 link encryption, Trustworthy Solutions',
      ports: '48x 10/100/1000 Gigabit Ethernet ports with 802.3bt (90W UPOE+) power delivery'
    },
    keyPills: ['48-Port PoE+ / UPOE', 'StackWise 480 Gbps', 'MACsec-256', 'Cisco DNA Ready'],
    stockStatus: 'In Stock • New & Refurbished Available',
    rentalAvailable: true,
    idealFor: 'Campus LAN core, high-density IP phone fleets, and enterprise Wi-Fi 6 powering'
  },

  // FIREWALLS & NETWORK SECURITY
  {
    id: 'fortinet-fortigate-100f',
    categoryId: 'firewalls-network-security',
    brand: 'Fortinet',
    name: 'Fortinet FortiGate 100F NGFW',
    image: '/assets/network_security_firewall.jpg',
    tagline: 'High-performance Next-Generation Firewall delivering 1 Gbps threat protection with integrated SD-WAN.',
    specs: {
      processor: 'Patented Fortinet SOC4 Security Processing Unit (SPU)',
      memory: 'Enterprise cryptographic hardware acceleration engine',
      storage: 'Onboard logging storage with automated local threat quarantine',
      security: 'Zero-Trust Network Access (ZTNA), SSL Decryption, IPS, Anti-Virus, Web Filtering',
      ports: '2x 10G SFP+ FortiLink slots, 4x 1G SFP slots, 16x 1G RJ45 LAN/WAN ports'
    },
    keyPills: ['1 Gbps Threat SLA', 'Dual 10G SFP+', 'Built-In SD-WAN', 'Zero-Trust ZTNA'],
    stockStatus: 'In Stock • Licensing Included',
    rentalAvailable: true,
    idealFor: 'Corporate regional headquarters, high-bandwidth branch aggregation, and PCI-DSS compliance'
  },

  // WI-FI & WIRELESS NETWORKING
  {
    id: 'cisco-catalyst-9120-ap',
    categoryId: 'wifi-wireless-networking',
    brand: 'Cisco',
    name: 'Cisco Catalyst 9120AX Wi-Fi 6 Access Point',
    image: '/assets/wifi_access_point.jpg',
    tagline: 'Enterprise-class 802.11ax Wi-Fi 6 access point engineered for mission-critical campus density.',
    specs: {
      display: 'Tri-color LED indicator ring for instant link status',
      processor: 'Custom Cisco RF ASIC with cleanAir spectrum intelligence',
      memory: 'Supports up to 500 active client devices per radio concurrently',
      security: 'WPA3 Enterprise, Rogue AP detection, integrated BLE and Zigbee IoT radio',
      ports: '1x 2.5G Multigigabit Ethernet (mGig) RJ-45 PoE+ port'
    },
    keyPills: ['Wi-Fi 6 (802.11ax)', '2.5G mGig PoE+', 'Cisco CleanAir RF', '500+ Clients'],
    stockStatus: 'In Stock • Same-Day Dispatch',
    rentalAvailable: true,
    idealFor: 'High-density auditoriums, corporate open offices, hospitals, and convention centers'
  },

  // BUSINESS PHONES & IP PHONES
  {
    id: 'cisco-8845-ip-phone',
    categoryId: 'business-phones-ip-phones',
    brand: 'Cisco',
    name: 'Cisco IP Phone 8845 (HD Video & Voice)',
    image: '/assets/telecom_ip_phones.jpg',
    tagline: 'Executive desktop collaboration endpoint uniting 720p HD video and crystal-clear wideband audio.',
    specs: {
      display: '5.0-inch widescreen color VGA backlit display (800x480 resolution)',
      processor: 'Dual-core DSP with hardware acoustic echo cancellation and background suppression',
      security: '802.1X, TLS 1.3, SRTP encrypted voice payloads',
      ports: 'Dual Gigabit Ethernet ports with integrated PoE, Bluetooth 4.1 for mobile headsets'
    },
    keyPills: ['720p HD Video', '5" Color Screen', 'Gigabit PoE', 'Bluetooth Pairing'],
    stockStatus: 'In Stock • Bulk Units Available',
    rentalAvailable: true,
    idealFor: 'Executive conference desks, boardrooms, and managerial workstation setups'
  },

  // CCTV
  {
    id: 'axis-4k-surveillance-dome',
    categoryId: 'cctv',
    brand: 'Axis Communications',
    name: 'Axis P3268-LVE 4K AI Dome Camera',
    image: '/assets/cctv_surveillance.jpg',
    tagline: 'Commercial 4K Ultra HD vandal-resistant dome camera with deep-learning analytics and Forensic WDR.',
    specs: {
      display: '4K Ultra HD (3840x2160) at up to 60 frames per second',
      processor: 'ARTPEC-8 processing chip with Deep Learning Processing Unit (DLPU)',
      security: 'Axis Edge Vault hardware cybersecurity, signed firmware, secure boot',
      ports: 'PoE IEEE 802.3af Class 3, MicroSD card slot for on-edge local failover recording'
    },
    keyPills: ['4K Ultra HD 60fps', 'Forensic WDR', 'AI Object Classifier', 'IK10 Vandal-Proof'],
    stockStatus: 'In Stock • Pan-India Installation',
    rentalAvailable: false,
    idealFor: 'Datacenter corridors, server rooms, bank vaults, corporate perimeters, and manufacturing floors'
  }
];
