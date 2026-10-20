export interface CatalogProduct {
  id: string;
  categoryId: string;
  subCategory?: string;
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
    [key: string]: string | undefined;
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

  // SERVERS & STORAGE (8 Enterprise Products)
  {
    id: 'dell-poweredge-r760',
    categoryId: 'servers-storage',
    brand: 'Dell EMC',
    name: 'Dell PowerEdge R760 2U Rack Server',
    image: '/assets/real_datacenter_servers.jpg',
    tagline: 'Dual-socket 2U enterprise workhorse engineered for mission-critical virtualization, AI inference, and databases.',
    specs: {
      processor: 'Dual 4th / 5th Gen Intel Xeon Scalable Processors (up to 56 cores per socket)',
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
      memory: 'Up to 8TB DDR5 ECC Registered memory (32 DIMMs)',
      storage: 'Up to 20 EDSFF E3.S or 24 SFF SAS/SATA/NVMe with HPE Smart Array MR416i',
      security: 'HPE iLO 6 Advanced with Silicon Root of Trust and runtime firmware verification',
      ports: 'PCIe Gen5 expansion slots, dual Hot-Plug Redundant Platinum 800W/1600W PSUs'
    },
    keyPills: ['HPE iLO 6', 'PCIe Gen5 Ready', 'Dual 1600W PSU', 'Tier-3 Certified'],
    stockStatus: 'In Stock • Pre-Configured',
    rentalAvailable: true,
    idealFor: 'Enterprise ERP systems (SAP HANA), AI inference models, and cloud consolidation'
  },
  {
    id: 'dell-poweredge-r660',
    categoryId: 'servers-storage',
    brand: 'Dell EMC',
    name: 'Dell PowerEdge R660 1U High-Density Server',
    image: '/assets/datacenter_servers.jpg',
    tagline: 'Extreme compute density in a 1U chassis optimized for scale-out clouds and high-frequency trading.',
    specs: {
      processor: 'Dual 4th/5th Gen Intel Xeon Scalable (up to 56 cores per processor)',
      memory: 'Up to 8TB DDR5 4800MT/s in 32 DIMM slots',
      storage: 'Up to 10x 2.5" NVMe/SAS drives with PERC12 hardware RAID controller',
      security: 'System Lockdown, Cryptographically signed firmware, iDRAC9 Datacenter',
      ports: 'Dual 25GbE SFP28 OCP 3.0, 4x PCIe Gen5 slots, Dual 1100W Hot-Plug PSUs'
    },
    keyPills: ['1U High Density', 'Dual Xeon Scalable', '10x NVMe Bays', 'PCIe Gen5 Support'],
    stockStatus: 'In Stock • Same-Day Dispatch',
    rentalAvailable: true,
    idealFor: 'High-density web farms, microservices clusters, and compute-heavy container nodes'
  },
  {
    id: 'lenovo-thinksystem-sr650-v3',
    categoryId: 'servers-storage',
    brand: 'Lenovo',
    name: 'Lenovo ThinkSystem SR650 V3 2U Server',
    image: '/assets/server_tower_rack.jpg',
    tagline: 'Versatile 2U dual-socket rack server engineered for big data, GPU workloads, and private clouds.',
    specs: {
      processor: 'Dual 4th / 5th Gen Intel Xeon Scalable Processors (up to 60 cores each)',
      memory: 'Up to 8TB DDR5-4800MHz memory across 32 DIMM channels',
      storage: 'Up to 40x 2.5" drives, supporting AnyBay NVMe/SAS/SATA configurations',
      security: 'Lenovo ThinkShield Root of Trust, TPM 2.0, XClarity Controller 2 (XCC2)',
      ports: 'Supports up to 8x single-wide or 3x double-wide full-length GPUs, Dual 1800W PSUs'
    },
    keyPills: ['Lenovo XClarity', 'GPU AI Acceleration', '40 Drive AnyBay', 'Dual 1800W PSUs'],
    stockStatus: 'In Stock • Pan-India Delivery',
    rentalAvailable: true,
    idealFor: 'Big data analytics, AI model fine-tuning, and large VMware vSphere deployments'
  },
  {
    id: 'hpe-proliant-dl360-gen11',
    categoryId: 'servers-storage',
    brand: 'HPE',
    name: 'HPE ProLiant DL360 Gen11 1U Server',
    image: '/assets/real_server_cluster.jpg',
    tagline: 'Ultra-reliable 1U rack server delivering peak performance per rack unit with HPE GreenLake management.',
    specs: {
      processor: 'Dual Intel Xeon Scalable Processors (up to 60 cores per socket)',
      memory: 'Up to 4TB DDR5 Registered memory with fast fault tolerance',
      storage: '10 SFF SAS/SATA/NVMe drives or 20 EDSFF NVMe drive slots',
      security: 'HPE Silicon Root of Trust with automated firmware recovery and security dashboard',
      ports: 'FlexibleLOM networking, 3x PCIe Gen5 slots, Dual 800W Hot-Plug Titanium PSUs'
    },
    keyPills: ['1U Form Factor', 'HPE Silicon Root', '10x SFF Bays', 'Dual Titanium PSUs'],
    stockStatus: 'In Stock • Fast Deployment',
    rentalAvailable: true,
    idealFor: 'Edge datacenters, corporate branch hubs, and dedicated software build nodes'
  },
  {
    id: 'dell-poweredge-t560-tower',
    categoryId: 'servers-storage',
    brand: 'Dell EMC',
    name: 'Dell PowerEdge T560 Enterprise Tower Server',
    image: '/assets/ue_hardware_procurement.jpg',
    tagline: 'Acoustically quiet, expandable dual-socket tower server built for on-premise offices and large local storage.',
    specs: {
      processor: 'Up to 2x Intel Xeon Silver / Gold Processors (up to 32 cores per socket)',
      memory: 'Up to 1TB DDR5 ECC memory across 16 DIMM slots',
      storage: 'Up to 24x 3.5" SAS/SATA hard drives for up to 384TB internal archival capacity',
      security: 'iDRAC9 Basic / Enterprise, lockable security bezel, chassis intrusion sensor',
      ports: '4x PCIe slots, Dual Gigabit LOM, optional 10GbE SFP+ card, redundant 1100W PSUs'
    },
    keyPills: ['Office-Quiet Acoustics', '24x 3.5" Massive Bays', 'Dual Xeon Support', 'Tower or 5U Rack'],
    stockStatus: 'In Stock • Fleet Customization',
    rentalAvailable: true,
    idealFor: 'Branch bank offices, regional warehousing hubs, and localized on-prem backup servers'
  },
  {
    id: 'synology-rs3621rpxs-nas',
    categoryId: 'servers-storage',
    brand: 'Synology',
    name: 'Synology RackStation RS3621RPxs 12-Bay Enterprise NAS',
    image: '/assets/ue_equipment_rental.jpg',
    tagline: 'Scalable 12-bay 2U enterprise NAS with redundant power, delivering over 430,000 IOPS and 500TB raw storage.',
    specs: {
      processor: 'Intel Xeon D-1541 8-Core 2.1 GHz (turbo up to 2.7 GHz)',
      memory: '16GB DDR4 ECC UDIMM (expandable up to 64GB ECC)',
      storage: '12 drive bays (3.5"/2.5" SATA HDD/SSD), expandable to 36 drives with RX1217sas units',
      security: 'AES-NI hardware encryption, Synology DSM security suite, immutable snapshots',
      ports: '4x Gigabit RJ-45 with link aggregation, dual PCIe slots for 10GbE/25GbE NICs, dual 500W PSUs'
    },
    keyPills: ['12-Bay Expandable', 'Synology DSM OS', 'Dual Redundant PSUs', '430K 4K IOPS'],
    stockStatus: 'In Stock • Rapid Dispatch',
    rentalAvailable: true,
    idealFor: 'Centralized enterprise backup, surveillance NVR video vaults, and CAD/creative file shares'
  },
  {
    id: 'qnap-ts-h1290fx-nvme',
    categoryId: 'servers-storage',
    brand: 'QNAP',
    name: 'QNAP TS-h1290FX 12-Bay NVMe All-Flash Storage Array',
    image: '/assets/datacenter_servers.jpg',
    tagline: 'Ultra-low latency all-flash NVMe NAS powered by AMD EPYC and QuTS hero ZFS file system.',
    specs: {
      processor: 'AMD EPYC 7302P 16-Core / 32-Thread 3.0 GHz enterprise processor',
      memory: '64GB DDR4 ECC RDIMM (expandable up to 1TB ECC memory)',
      storage: '12x 2.5" U.2 NVMe PCIe Gen4 x4 / SATA SSD drive bays',
      security: 'ZFS self-healing data integrity, inline data deduplication & compression, WORM protection',
      ports: 'Dual 25GbE SFP28 ports, dual 2.5GbE RJ45 ports, 4x PCIe Gen4 expansion slots'
    },
    keyPills: ['All-Flash NVMe U.2', 'AMD EPYC 16-Core', 'Dual 25GbE SFP28', 'ZFS Inline Dedup'],
    stockStatus: 'Available on Order • 48h Testing',
    rentalAvailable: true,
    idealFor: '4K/8K real-time media editing pipelines, high-IOPS virtualization, and database staging'
  },
  {
    id: 'nvidia-dgx-h100-supercomputer',
    categoryId: 'servers-storage',
    brand: 'NVIDIA',
    name: 'NVIDIA DGX H100 AI Supercomputer Server',
    image: '/assets/real_server_cluster.jpg',
    tagline: 'The world’s premier universal AI supercomputing platform powered by 8x NVIDIA H100 Tensor Core GPUs.',
    specs: {
      processor: '8x NVIDIA H100 SXM5 GPUs (640GB total GPU HBM3 memory) + Dual 4th/5th Gen Intel Xeon Platinum 8480C CPUs',
      memory: '2TB DDR5 high-bandwidth system memory across 32 DIMM channels',
      storage: '30TB NVMe U.2 high-speed solid-state storage array for local dataset caching',
      security: 'NVIDIA Base Command, Multi-Instance GPU (MIG) hardware isolation, Secure Boot',
      ports: '8x 400Gb/s OSFP InfiniBand / Ethernet ports + Dual 100GbE QSFP management interfaces'
    },
    keyPills: ['8x NVIDIA H100 GPUs', '640GB HBM3 Memory', '32 PFLOPS FP8 AI', '8x 400Gb/s InfiniBand'],
    stockStatus: 'In Stock • Tier-1 AI Delivery',
    rentalAvailable: true,
    idealFor: 'Foundation LLM pre-training, generative AI enterprise models, national AI compute clusters, and autonomous systems'
  },

  // ROUTERS & NETWORK SWITCHES (8 Enterprise Products)
  {
    id: 'cisco-catalyst-9300-switch',
    categoryId: 'routers-network-switches',
    brand: 'Cisco',
    name: 'Cisco Catalyst 9300 48-Port PoE+ Core Switch (C9300-48P)',
    image: '/assets/real_rack_switch.jpg',
    tagline: 'Industry-standard enterprise access layer switches with StackWise-480 and 90W UPOE+.',
    specs: {
      processor: 'Cisco UADP 2.0 ASIC with integrated x86 CPU architecture for container hosting',
      memory: '16GB DRAM with 16GB Flash storage',
      storage: 'Modular 10G / 25G / 40G uplink network adapters',
      security: 'Encrypted Traffic Analytics (ETA), MACsec-256 link encryption, Trustworthy Solutions',
      ports: '48x 10/100/1000 Gigabit Ethernet PoE+ ports (740W power budget), StackWise-480'
    },
    keyPills: ['48-Port PoE+ 740W', 'StackWise 480 Gbps', 'MACsec-256 Security', 'Cisco DNA Ready'],
    stockStatus: 'In Stock • New & Refurbished Available',
    rentalAvailable: true,
    idealFor: 'Campus LAN core, high-density IP phone fleets, and enterprise Wi-Fi 6 powering'
  },
  {
    id: 'cisco-catalyst-9200l-switch',
    categoryId: 'routers-network-switches',
    brand: 'Cisco',
    name: 'Cisco Catalyst 9200L 24-Port Gigabit Switch (C9200L-24P-4G)',
    image: '/assets/poe_network_switch.jpg',
    tagline: 'Enterprise-grade simplicity, high security, and Layer 3 routing for corporate branch offices.',
    specs: {
      processor: 'Cisco UADP 2.0mini ASIC with hardware-based access control and telemetry',
      memory: '2GB DRAM and 4GB Flash memory',
      security: 'AES-128 MACsec encryption, Trustworthy Systems, 802.1X secure port authentication',
      ports: '24x 10/100/1000 PoE+ ports (370W power budget) + 4x 1G SFP fixed uplink ports',
      storage: 'StackWise-80 architecture (stack up to 8 switches for 80 Gbps unified backplane)'
    },
    keyPills: ['24-Port PoE+ 370W', 'StackWise-80', 'Layer 3 Routing', 'Cisco IOS XE'],
    stockStatus: 'In Stock • Immediate Dispatch',
    rentalAvailable: true,
    idealFor: 'Corporate branch offices, retail store infrastructure, and regional department wiring closets'
  },
  {
    id: 'cisco-catalyst-1000-switch',
    categoryId: 'routers-network-switches',
    brand: 'Cisco',
    name: 'Cisco Catalyst 1000 48-Port Full PoE+ Switch (C1000-48FP-4G-L)',
    image: '/assets/network_security_firewall.jpg',
    tagline: 'Quiet, reliable Gigabit Ethernet switch designed for small to medium enterprise networks.',
    specs: {
      processor: 'ARM-based dual-core network management engine',
      memory: '512MB RAM and 256MB Flash storage',
      security: 'Comprehensive 802.1X, Private VLANs, Port Security, and DHCP snooping',
      ports: '48x 10/100/1000 RJ-45 ports with full 740W PoE+ budget + 4x Gigabit SFP uplinks'
    },
    keyPills: ['48-Port Full PoE+ (740W)', '4x 1G SFP Uplinks', 'Fanless Acoustic Mode', 'Zero Touch Setup'],
    stockStatus: 'In Stock • Bulk Units Ready',
    rentalAvailable: true,
    idealFor: 'Floor-wide CCTV deployments, VoIP phone distribution, and educational computer labs'
  },
  {
    id: 'aruba-cx-6200f-48g-switch',
    categoryId: 'routers-network-switches',
    brand: 'Aruba',
    name: 'Aruba CX 6200F 48G Class 4 PoE 4SFP+ Switch (JL728A)',
    image: '/assets/ue_network_design.jpg',
    tagline: 'Modern, cloud-managed enterprise access switch powered by AOS-CX with built-in telemetry.',
    specs: {
      processor: 'Quad Core ARM Cortex A72 @ 1.8GHz with Aruba Gen7 ASIC architecture',
      memory: '8GB DDR4 RAM and 16GB eMMC Flash storage',
      security: 'Dynamic Segmentation, MACsec link protection, Role-based policy enforcement',
      ports: '48x 10/100/1000BASE-T Class 4 PoE ports (up to 740W) + 4x 1/10G SFP+ uplink slots'
    },
    keyPills: ['48x PoE+ (740W)', '4x 10G SFP+ Ports', 'Aruba AOS-CX OS', 'Network Analytics Engine'],
    stockStatus: 'In Stock • Certified Staged',
    rentalAvailable: true,
    idealFor: 'Campus core access, smart office IoT endpoints, and high-bandwidth wireless backhaul'
  },
  {
    id: 'cisco-catalyst-8300-router',
    categoryId: 'routers-network-switches',
    brand: 'Cisco',
    name: 'Cisco Catalyst 8300 Series Enterprise Edge Router (C8300-1N1S-4T2X)',
    image: '/assets/real_rack_switch.jpg',
    tagline: 'Flagship enterprise SD-WAN edge routing platform delivering multi-gigabit encrypted throughput.',
    specs: {
      processor: '8-Core multi-threaded x86 enterprise routing processor',
      memory: '16GB DRAM (expandable to 32GB) + 16GB internal onboard storage',
      security: 'Hardware crypto engine with 2 Gbps SD-WAN IPSec throughput, Cisco Umbrella DNS security',
      ports: '2x 10G SFP+ ports, 4x 1G RJ-45 ports, 1x Network Interface Module (NIM) slot, redundant PSUs'
    },
    keyPills: ['2 Gbps SD-WAN Crypto', 'Dual 10G SFP+ Ports', 'Dual Redundant PSUs', 'Cloud OnRamp'],
    stockStatus: 'In Stock • Enterprise Configured',
    rentalAvailable: true,
    idealFor: 'Corporate headquarters WAN aggregation, multi-cloud interconnects, and SD-WAN rollouts'
  },
  {
    id: 'juniper-ex3400-48p-switch',
    categoryId: 'routers-network-switches',
    brand: 'Juniper',
    name: 'Juniper Networks EX3400 48-Port PoE+ Switch',
    image: '/assets/poe_network_switch.jpg',
    tagline: 'High-performance cost-effective enterprise switch with Virtual Chassis technology and Junos OS.',
    specs: {
      processor: 'Dual-core 1GHz enterprise network processor running Junos OS',
      memory: '2GB DRAM and 2GB Flash memory',
      security: 'sFlow monitoring, MAC limiting, Layer 2-4 Access Control Lists (ACLs)',
      ports: '48x 10/100/1000 PoE+ ports (740W budget), 4x 10G SFP+ uplinks, 2x 40G QSFP+ stacking ports'
    },
    keyPills: ['Virtual Chassis 40G', '48x PoE+ (740W)', '4x 10G SFP+ Uplinks', 'Junos OS Carrier Grade'],
    stockStatus: 'In Stock • Pan-India Testing',
    rentalAvailable: true,
    idealFor: 'Converged data and voice networks, high-density call centres, and university campuses'
  },
  {
    id: 'mikrotik-ccr2116-router',
    categoryId: 'routers-network-switches',
    brand: 'MikroTik',
    name: 'MikroTik CCR2116-12G-4S+ 16-Core Cloud Core Router',
    image: '/assets/network_security_firewall.jpg',
    tagline: 'Insane 16-core ARM 64-bit performance for BGP routing, large ISP peering, and high-concurrency NAT.',
    specs: {
      processor: 'Amazon Annapurna Labs Alpine AL73400 16-Core 2.0 GHz 64-bit ARM CPU',
      memory: '16GB DDR4 RAM with high-speed PCIe bus',
      security: 'Hardware-accelerated IPsec encryption, advanced stateful firewall, wireguard tunnels',
      ports: '4x 10G SFP+ optical ports, 12x 10/100/1000 Gigabit Ethernet ports, 1x Gigabit management port'
    },
    keyPills: ['16-Core 2.0GHz ARM', '4x 10G SFP+ Ports', 'RouterOS v7 Level 6', 'BGP & Multi-WAN Peering'],
    stockStatus: 'In Stock • Fast Delivery',
    rentalAvailable: true,
    idealFor: 'ISP data centers, corporate primary Internet gateways, and high-throughput BGP routing'
  },
  {
    id: 'ubiquiti-unifi-switch-enterprise-48',
    categoryId: 'routers-network-switches',
    brand: 'Ubiquiti',
    name: 'Ubiquiti UniFi Enterprise Switch 48 PoE (USW-Enterprise-48-PoE)',
    image: '/assets/ue_network_design.jpg',
    tagline: 'Managed 2.5GbE PoE+ switch with 25G SFP28 optical uplinks and centralized UniFi OS management.',
    specs: {
      processor: 'Integrated Layer 3 hardware routing engine with inter-VLAN routing',
      memory: 'High-speed buffer architecture for zero-packet loss Wi-Fi 6E backhaul',
      security: '802.1X port access control, storm control, client isolation, UniFi Network Controller',
      ports: '48x 2.5GbE 802.3at PoE+ RJ45 ports (720W total budget) + 4x 25G SFP28 uplinks'
    },
    keyPills: ['48x 2.5G mGig PoE+', '4x 25G SFP28 Uplinks', '720W Total PoE', 'UniFi Touchscreen Display'],
    stockStatus: 'In Stock • Bulk Staged',
    rentalAvailable: true,
    idealFor: 'Powering high-density Wi-Fi 6E/7 access point fleets and modern creative studio networks'
  },

  // FIREWALLS & NETWORK SECURITY (8 Enterprise Products)
  {
    id: 'fortinet-fortigate-100f',
    categoryId: 'firewalls-network-security',
    brand: 'Fortinet',
    name: 'Fortinet FortiGate 100F Next-Gen Firewall (FG-100F)',
    image: '/assets/hw_fortigate_100f.png',
    tagline: 'High-performance Next-Generation Firewall delivering 1 Gbps threat protection with integrated SD-WAN.',
    specs: {
      processor: 'Patented Fortinet SOC4 Security Processing Unit (SPU NP6XLite and CP9)',
      memory: 'Enterprise cryptographic hardware acceleration engine',
      storage: 'Onboard logging storage with automated local threat quarantine',
      security: 'Zero-Trust Network Access (ZTNA), SSL Decryption, IPS, Anti-Virus, Web Filtering',
      ports: '2x 10G SFP+ FortiLink slots, 4x 1G SFP slots, 16x 1G RJ45 LAN/WAN ports'
    },
    keyPills: ['1 Gbps Threat SLA', 'Dual 10G SFP+ Slots', 'Built-In SD-WAN', 'Zero-Trust ZTNA'],
    stockStatus: 'In Stock • Licensing Included',
    rentalAvailable: true,
    idealFor: 'Corporate regional headquarters, high-bandwidth branch aggregation, and PCI-DSS compliance'
  },
  {
    id: 'fortinet-fortigate-60f',
    categoryId: 'firewalls-network-security',
    brand: 'Fortinet',
    name: 'Fortinet FortiGate 60F Desktop Next-Gen Firewall (FG-60F)',
    image: '/assets/hw_fortigate_60f.png',
    tagline: 'Compact, fanless desktop security appliance delivering 700 Mbps threat protection for branch offices.',
    specs: {
      processor: 'Fortinet SOC4 custom security processor with hardware acceleration',
      memory: 'High-speed crypto hardware for SSL inspection and VPN tunneling',
      security: 'Deep packet inspection, application control, intrusion prevention system (IPS)',
      ports: '10x GE RJ45 ports (including 2x WAN, 1x DMZ, 7x Internal LAN switch ports)'
    },
    keyPills: ['700 Mbps Threat SLA', '10x Gigabit RJ-45', 'Fanless Silent Design', 'Built-in SD-WAN'],
    stockStatus: 'In Stock • Same-Day Dispatch',
    rentalAvailable: true,
    idealFor: 'Branch offices, retail chains, healthcare clinics, and medium corporate departments'
  },
  {
    id: 'cisco-firepower-1120',
    categoryId: 'firewalls-network-security',
    brand: 'Cisco',
    name: 'Cisco Firepower 1120 Next-Gen Firewall (FPR1120-NGFW-K9)',
    image: '/assets/hw_cisco_firepower.png',
    tagline: 'Rugged enterprise security appliance with Snort 3 inspection and deep malware mitigation.',
    specs: {
      processor: 'High-speed multi-core security processor running Cisco Secure Firewall ASA / FTDC',
      memory: '8GB system memory with dedicated hardware crypto co-processor',
      security: 'Cisco Talos threat intelligence, Snort 3 IPS engine, Advanced Malware Protection (AMP)',
      ports: '8x 10/100/1000 RJ-45 ports + 4x 1G SFP optical interfaces, USB console'
    },
    keyPills: ['1.5 Gbps Threat SLA', '8x RJ45 + 4x SFP', 'Cisco Talos Threat AI', 'Snort 3 Inspection'],
    stockStatus: 'In Stock • Custom Staged',
    rentalAvailable: true,
    idealFor: 'Corporate enterprise edges, government department security, and banking networks'
  },
  {
    id: 'palo-alto-pa440',
    categoryId: 'firewalls-network-security',
    brand: 'Palo Alto',
    name: 'Palo Alto Networks PA-440 ML-Powered NGFW',
    image: '/assets/hw_paloalto_pa440.png',
    tagline: 'World-leading Machine Learning-Powered Next-Gen Firewall preventing unknown zero-day threats inline.',
    specs: {
      processor: 'Dedicated multi-core security processing architecture running PAN-OS 11',
      memory: 'High-density memory for real-time TLS 1.3 decryption and application classification',
      security: 'Inline Cloud-Delivered Security Services, WildFire sandbox, Advanced Threat Prevention',
      ports: '8x 10/100/1000 Gigabit RJ45 ports, redundant DC power inputs option'
    },
    keyPills: ['ML-Powered NGFW', '900 Mbps Threat SLA', 'PAN-OS 11 Inline AI', 'WildFire Zero-Day'],
    stockStatus: 'In Stock • Gold Partner Certified',
    rentalAvailable: true,
    idealFor: 'Enterprise branch perimeters, fintech cloud connectors, and healthcare data security'
  },
  {
    id: 'sophos-xgs-2100',
    categoryId: 'firewalls-network-security',
    brand: 'Sophos',
    name: 'Sophos XGS 2100 Enterprise Firewall Appliance',
    image: '/assets/hw_sophos_xgs2100.png',
    tagline: 'Dual-processor Xstream architecture accelerating trusted SaaS and cloud application traffic.',
    specs: {
      processor: 'Dual-processor engine: dedicated x86 CPU + dedicated Xstream Flow Processor (NPU)',
      memory: '16GB high-speed memory for deep TLS inspection and synchronized security',
      security: 'Sophos Central cloud management, Synchronized Security endpoint heartbeat, Zero-Day sandstorm',
      ports: '10x 1GbE Copper, 2x 1GbE SFP optical, 1x Flexi Port slot for modular 10GbE SFP+ uplinks'
    },
    keyPills: ['Dual-Engine Xstream', '1.25 Gbps Threat SLA', 'Synchronized Security', 'Modular Expansion Slot'],
    stockStatus: 'In Stock • Complete Bundle Available',
    rentalAvailable: true,
    idealFor: 'Medium to large enterprises, multi-branch corporations, and school district networks'
  },
  {
    id: 'sonicwall-nsa-2700',
    categoryId: 'firewalls-network-security',
    brand: 'SonicWall',
    name: 'SonicWall NSA 2700 Multi-Gigabit Next-Gen Firewall',
    image: '/assets/hw_sonicwall_nsa2700.png',
    tagline: 'Multi-gigabit enterprise firewall with 3 Gbps threat prevention and built-in storage expansion.',
    specs: {
      processor: 'Multi-core parallel processing architecture running SonicOS 7.0',
      memory: 'High-throughput cryptographic acceleration engine',
      storage: 'Dedicated M.2 storage slot for onboard system logging and forensic data',
      security: 'Real-Time Deep Memory Inspection (RTDMI), Capture Advanced Threat Protection (ATP)',
      ports: '16x 1GbE ports + 3x 10GbE SFP+ interfaces, dual power supply redundancy support'
    },
    keyPills: ['3.0 Gbps Threat SLA', '3x 10G SFP+ Interfaces', 'RTDMI Deep Inspection', 'SonicOS 7.0 Platform'],
    stockStatus: 'In Stock • Fast Shipping',
    rentalAvailable: true,
    idealFor: 'Corporate campuses, IT service providers, and data center edge security'
  },
  {
    id: 'fortinet-fortigate-200f',
    categoryId: 'firewalls-network-security',
    brand: 'Fortinet',
    name: 'Fortinet FortiGate 200F High-Performance NGFW',
    image: '/assets/hw_fortigate_200f.png',
    tagline: 'Datacenter-edge firewall delivering 3 Gbps threat protection with 4x 10GE SFP+ ports.',
    specs: {
      processor: 'Dedicated Fortinet SPU NP6XLite and CP9 accelerated network processors',
      memory: 'Datacenter grade high-speed packet buffering memory',
      security: 'AI-powered FortiGuard security services, high-concurrency SSL inspection, ZTNA proxy',
      ports: '4x 10GE SFP+ slots, 2x 10GE FortiLink slots, 16x GE RJ45 ports, dual internal AC power supplies'
    },
    keyPills: ['3 Gbps Threat SLA', '4x 10GE SFP+ Slots', 'Dual Internal PSUs', 'Datacenter Edge Power'],
    stockStatus: 'In Stock • Pan-India Delivery',
    rentalAvailable: true,
    idealFor: 'Large enterprise corporate headquarters, core data centers, and multi-tenant hosting'
  },
  {
    id: 'checkpoint-quantum-spark-1800',
    categoryId: 'firewalls-network-security',
    brand: 'Check Point',
    name: 'Check Point Quantum Spark 1800 Security Gateway',
    image: '/assets/hw_checkpoint_quantum.jpg',
    tagline: 'Elite security gateway delivering Check Point’s legendary SandBlast threat prevention for enterprise branches.',
    specs: {
      processor: 'Multi-core Intel enterprise processor with Check Point R81 Gaia Embedded OS',
      memory: '8GB RAM with hardware accelerated IPsec crypto coprocessor',
      security: 'SandBlast Zero-Day Protection, Anti-Ransomware, Threat Emulation and Extraction',
      ports: '16x 1GbE LAN ports + 2x 10GbE SFP+ WAN/DMZ interfaces, redundant power adapter'
    },
    keyPills: ['SandBlast Zero-Day', '2.0 Gbps Threat SLA', '2x 10G SFP+ Ports', 'Check Point R81 OS'],
    stockStatus: 'In Stock • Verified Units',
    rentalAvailable: true,
    subCategory: 'firewall',
    idealFor: 'Financial institutions, critical infrastructure perimeters, and executive branch offices'
  },
  {
    id: 'fortinet-fortigate-40f',
    categoryId: 'firewalls-network-security',
    subCategory: 'firewall',
    brand: 'Fortinet',
    name: 'Fortinet FortiGate 40F Desktop Next-Gen Firewall (FG-40F)',
    image: '/assets/hw_fortigate_40f.png',
    tagline: 'High-density entry-level Next-Generation Firewall with 1 Gbps firewall throughput and integrated secure SD-WAN.',
    specs: {
      processor: 'Fortinet SOC4 Security Processing Unit (accelerated network & content processor)',
      memory: 'High-speed crypto buffer for real-time SSL/TLS deep packet inspection',
      security: 'FortiGuard AI-Powered Security Services, Intrusion Prevention (IPS), Web Filtering, Anti-Virus',
      ports: '1x USB port, 1x Console port, 1x GE WAN port, 1x GE FortiLink port, 3x GE Internal LAN switch ports'
    },
    keyPills: ['1 Gbps Throughput', 'Fortinet SOC4 Chip', 'Built-in SD-WAN', 'Fanless Silent Design'],
    stockStatus: 'In Stock • Same-Day Dispatch',
    rentalAvailable: true,
    idealFor: 'Small offices, retail chain stores, medical clinics, and branch office networks'
  },
  {
    id: 'sophos-xgs-116-firewall',
    categoryId: 'firewalls-network-security',
    subCategory: 'firewall',
    brand: 'Sophos',
    name: 'Sophos XGS 116 Desktop Next-Gen Firewall Appliance',
    image: '/assets/hw_sophos_xgs116.png',
    tagline: 'Dual-processor Xstream architecture desktop firewall delivering 330 Mbps threat protection with built-in SFP optical uplink.',
    specs: {
      processor: 'Dual-processor engine: Multi-core x86 CPU + dedicated Xstream Flow Processor (NPU)',
      memory: '8GB high-speed memory for TLS 1.3 decryption without performance penalties',
      security: 'Sophos Synchronized Security, Deep Learning threat analysis, CryptoGuard anti-ransomware',
      ports: '8x GE Copper ports + 1x SFP optical fiber port, optional redundant external power supply'
    },
    keyPills: ['Dual-Processor Xstream', '330 Mbps Threat SLA', 'Built-in SFP Fiber', 'Synchronized Security'],
    stockStatus: 'In Stock • Pan-India Delivery',
    rentalAvailable: true,
    idealFor: 'Medium enterprise branches, school networks, and distributed corporate offices'
  },
  {
    id: 'watchguard-firebox-t45',
    categoryId: 'firewalls-network-security',
    subCategory: 'firewall',
    brand: 'WatchGuard',
    name: 'WatchGuard Firebox T45 Unified Security Appliance',
    image: '/assets/hw_watchguard_t45.png',
    tagline: 'High-performance tabletop firewall appliance with 557 Mbps UTM throughput and multi-layered Total Security Suite.',
    specs: {
      processor: 'Multi-core Intel security hardware architecture with automated dynamic packet filtering',
      memory: 'Integrated hardware cryptographic accelerator for IPsec and IKEv2 site-to-site VPNs',
      security: 'WatchGuard Total Security Suite: APT Blocker, DNSWatch, ThreatSync XDR, Gateway AntiVirus',
      ports: '5x Gigabit Ethernet ports (including 1x PoE+ port to power access points or VoIP phones)'
    },
    keyPills: ['557 Mbps UTM SLA', 'WatchGuard Total Security', 'Built-In PoE+ Port', 'Cloud-Managed'],
    stockStatus: 'In Stock • Fully Licensed',
    rentalAvailable: true,
    idealFor: 'Midsize corporate offices, remote clinics, and branch operations needing PoE endpoints'
  },
  {
    id: 'sonicwall-tz470-firewall',
    categoryId: 'firewalls-network-security',
    subCategory: 'firewall',
    brand: 'SonicWall',
    name: 'SonicWall TZ470 High Availability Next-Gen Firewall',
    image: '/assets/hw_sonicwall_tz470.jpg',
    tagline: 'Multi-gigabit desktop security appliance delivering 1.5 Gbps threat prevention with multi-engine sandboxing.',
    specs: {
      processor: 'Multi-core parallel network security processor running SonicOS 7.0',
      memory: 'High-bandwidth cryptographic co-processor for line-rate TLS/SSL deep packet inspection',
      security: 'Capture Advanced Threat Protection (ATP) with Real-Time Deep Memory Inspection (RTDMI)',
      ports: '8x 1GbE interfaces, dual USB ports for redundant LTE/5G failover modems'
    },
    keyPills: ['1.5 Gbps Threat SLA', '8x Gigabit Interfaces', 'RTDMI Memory Shield', 'Multi-Gig Ready'],
    stockStatus: 'In Stock • Bulk Available',
    rentalAvailable: true,
    idealFor: 'High-speed corporate branches, financial advisor offices, and law firm perimeters'
  },

  // ENTERPRISE ANTIVIRUS & ENDPOINT SECURITY SUITES
  {
    id: 'quickheal-seqrite-eps',
    categoryId: 'firewalls-network-security',
    subCategory: 'antivirus',
    brand: 'Quick Heal',
    name: 'Quick Heal Seqrite Endpoint Security Cloud (EPS Cloud)',
    image: '/assets/antivirus_quickheal.svg',
    tagline: 'Complete enterprise cloud-managed endpoint protection with advanced anti-ransomware, DLP, and patch management.',
    specs: {
      processor: 'Seqrite Cloud Console & on-premise centralized administrative server management',
      memory: 'Lightweight client agent consuming under 2% CPU & 60MB RAM footprint per endpoint',
      storage: 'Automated centralized cloud quarantine, asset monitoring, and software license tracking',
      security: 'Signature-less Behavioral Detection, Anti-Ransomware Shield, Data Loss Prevention (DLP), Web Security',
      ports: 'Cross-platform agent support: Windows 11/10/Server, macOS, and enterprise Linux distributions'
    },
    keyPills: ['Seqrite Cloud Console', 'Anti-Ransomware Shield', 'Data Loss Prevention', 'Lightweight Agent'],
    stockStatus: 'Immediate Digital Licensing • 10 to 10,000+ Seats',
    rentalAvailable: false,
    idealFor: 'Corporate endpoint fleets, banks, educational institutions, and healthcare healthcare facilities'
  },
  {
    id: 'mcafee-trellix-ens',
    categoryId: 'firewalls-network-security',
    subCategory: 'antivirus',
    brand: 'McAfee',
    name: 'McAfee / Trellix Endpoint Security Complete (ENS)',
    image: '/assets/antivirus_mcafee.svg',
    tagline: 'Next-generation unified endpoint protection combining machine learning behavioral analysis and proactive exploit prevention.',
    specs: {
      processor: 'Trellix ePO (ePolicy Orchestrator) on-premise and multi-tenant SaaS cloud management',
      memory: 'Real-time threat intelligence engine processing over 1 Billion global telemetry sensors daily',
      storage: 'Integrated Endpoint Detection and Response (EDR) forensic telemetry storage',
      security: 'Adaptive Threat Protection (ATP), Exploit Prevention, Dynamic Application Isolation, Web Control',
      ports: 'Supports Windows Server, Windows 11/10, macOS, Linux, and VDI virtualized desktops'
    },
    keyPills: ['Trellix ePO Cloud', 'Adaptive Threat AI', 'Dynamic App Isolation', 'EDR Forensics'],
    stockStatus: 'Immediate License Provisioning • Enterprise Multi-Tier',
    rentalAvailable: false,
    idealFor: 'Large enterprise corporate networks, government departments, and multinational IT fleets'
  },
  {
    id: 'symantec-endpoint-security',
    categoryId: 'firewalls-network-security',
    subCategory: 'antivirus',
    brand: 'Symantec',
    name: 'Symantec Endpoint Security Complete (SES Broadcom)',
    image: '/assets/antivirus_symantec.svg',
    tagline: 'Industry-standard comprehensive endpoint defense unifying EDR, Active Directory defense, and mobile threat defense.',
    specs: {
      processor: 'Broadcom Symantec Integrated Cyber Defense (ICD) single-agent architecture',
      memory: 'Targeted Attack Analytics (TAA) with automated incident investigation and containment',
      storage: 'Continuous endpoint recording and MITRE ATT&CK framework event mapping',
      security: 'Active Directory Defense, Network Integrity protection, Breach Assessment, Exploit Blocker',
      ports: 'Single agent covering Windows, macOS, Linux, Android, iOS, and hybrid clouds'
    },
    keyPills: ['Broadcom ICD Single Agent', 'Active Directory Defense', 'MITRE ATT&CK Mapped', 'Targeted Attack AI'],
    stockStatus: 'Digital Delivery in 1 Hour • Authorized Broadcom Tier',
    rentalAvailable: false,
    idealFor: 'Financial organizations, stock exchanges, defense contractors, and Fortune 500 corporations'
  },
  {
    id: 'trendmicro-apex-one',
    categoryId: 'firewalls-network-security',
    subCategory: 'antivirus',
    brand: 'Trend Micro',
    name: 'Trend Micro Apex One & Worry-Free Services',
    image: '/assets/antivirus_trendmicro.svg',
    tagline: 'All-in-one automated endpoint security combining pre-execution machine learning and vulnerability protection.',
    specs: {
      processor: 'Trend Micro Vision One unified XDR threat correlation engine',
      memory: 'XGen security blend: high-fidelity machine learning + behavioral heuristics',
      storage: 'Integrated Virtual Patching shielding unpatched operating system vulnerabilities',
      security: 'Endpoint Sensor, Web Reputation, Integrated DLP, Application Control, Anti-Malware',
      ports: 'Cloud-delivered console protecting Windows, macOS, Chromebooks, and mobile endpoints'
    },
    keyPills: ['Trend Micro XGen AI', 'Virtual Patching Shield', 'Apex One XDR', 'Cloud-Managed'],
    stockStatus: 'Immediate Provisioning • Bulk Enterprise Packs',
    rentalAvailable: false,
    idealFor: 'Mid-to-large enterprises needing zero-day vulnerability protection and remote employee coverage'
  },
  {
    id: 'kaspersky-endpoint-security',
    categoryId: 'firewalls-network-security',
    subCategory: 'antivirus',
    brand: 'Kaspersky',
    name: 'Kaspersky Endpoint Security for Business Advanced',
    image: '/assets/antivirus_kaspersky.svg',
    tagline: 'Multi-award winning endpoint protection with Adaptive Anomaly Control, automated patch management, and EDR.',
    specs: {
      processor: 'Kaspersky Security Center (KSC) on-prem or cloud administrative console',
      memory: 'Behavioral engine with Automated Rollback of ransomware-encrypted files',
      storage: 'Full Disk Encryption (FDE) and File-Level Encryption (FLE) management',
      security: 'Adaptive Anomaly Control, Host Intrusion Prevention (HIPS), Exploit Prevention, Web Control',
      ports: 'Universal deployment across Windows, Linux, macOS, and mobile Android/iOS fleets'
    },
    keyPills: ['Automated File Rollback', 'Adaptive Anomaly Control', 'Full Disk Encryption', 'Kaspersky KSC'],
    stockStatus: 'In Stock • Instant License Dispatch',
    rentalAvailable: false,
    idealFor: 'Enterprises prioritizing file rollback protection, strict data encryption, and centralized patch control'
  },
  {
    id: 'bitdefender-gravityzone-enterprise',
    categoryId: 'firewalls-network-security',
    subCategory: 'antivirus',
    brand: 'Bitdefender',
    name: 'Bitdefender GravityZone Business Security Enterprise',
    image: '/assets/antivirus_bitdefender.svg',
    tagline: 'HyperDetect machine learning and integrated cloud sandbox analyzer providing real-time defense against evasive zero-days.',
    specs: {
      processor: 'GravityZone Cloud Control Console with centralized single-pane-of-glass management',
      memory: 'HyperDetect tunable machine learning with low false-positive rate and high attack detection',
      storage: 'Automatic Sandbox Analyzer detonating suspicious files in isolated virtual cloud sandboxes',
      security: 'Risk Analytics, Process Inspector, Ransomware Mitigation, Network Attack Defense',
      ports: 'Unified agent for physical machines, VMware/Hyper-V virtualized environments, and cloud instances'
    },
    keyPills: ['HyperDetect Tunable ML', 'Cloud Sandbox Analyzer', 'Ransomware Mitigation', 'Single Console'],
    stockStatus: 'Instant Electronic Delivery • Tier-1 Partner',
    rentalAvailable: false,
    idealFor: 'Datacenter virtualization, creative agencies, fintech companies, and high-performance engineering fleets'
  },
  {
    id: 'eset-protect-enterprise',
    categoryId: 'firewalls-network-security',
    subCategory: 'antivirus',
    brand: 'ESET',
    name: 'ESET Protect Enterprise & NOD32 Antivirus Suite',
    image: '/assets/antivirus_eset.svg',
    tagline: 'Legendary NOD32 multi-layered threat engine with cloud-based sandboxing, advanced memory scanner, and EDR.',
    specs: {
      processor: 'ESET PROTECT Cloud management console accessible via single secure web interface',
      memory: 'Ultra-light footprint engine famous for zero perceptible system slowdown on user endpoints',
      storage: 'ESET LiveGuard Advanced cloud sandboxing analyzing new zero-day threats in under 5 minutes',
      security: 'Brute Force Attack Protection, Ransomware Shield, Advanced Memory Scanner, Exploit Blocker',
      ports: 'Cross-platform protection for Windows, macOS, Linux, and Android endpoints'
    },
    keyPills: ['Ultra-Light NOD32 Engine', 'ESET LiveGuard Sandbox', 'Brute Force Protection', 'ESET PROTECT Cloud'],
    stockStatus: 'Instant License Delivery • Flexible Seat Tiers',
    rentalAvailable: false,
    idealFor: 'Engineering workstations, software developer fleets, gaming studios, and branch offices'
  },
  {
    id: 'sophos-intercept-x-edr',
    categoryId: 'firewalls-network-security',
    subCategory: 'antivirus',
    brand: 'Sophos',
    name: 'Sophos Intercept X Advanced with XDR',
    image: '/assets/antivirus_sophos.svg',
    tagline: 'World-leading anti-exploit and anti-ransomware endpoint solution synchronizing directly with Sophos XGS Firewalls.',
    specs: {
      processor: 'Sophos Central cloud-native management platform with unified security dashboard',
      memory: 'Deep Learning Neural Network trained on hundreds of millions of malicious samples',
      storage: 'CryptoGuard technology detecting and automatically reverting unauthorized file encryption in milliseconds',
      security: 'Synchronized Security Security Heartbeat (shares health status with firewall in real time)',
      ports: 'Supports Windows 11/10, Windows Server 2022/2019, macOS, Linux, and mobile devices'
    },
    keyPills: ['Deep Learning AI', 'CryptoGuard File Rollback', 'Firewall Heartbeat Sync', 'Sophos Central Cloud'],
    stockStatus: 'Instant License Activation • Cloud Bundle',
    rentalAvailable: false,
    idealFor: 'Organizations running Sophos Firewalls, hybrid workforces, and enterprises seeking turnkey XDR'
  },

  // WI-FI & WIRELESS NETWORKING (8 Enterprise Products)
  {
    id: 'aruba-ap-635-wifi6e',
    categoryId: 'wifi-wireless-networking',
    brand: 'Aruba',
    name: 'Aruba AP-635 Campus Wi-Fi 6E Access Point',
    image: '/assets/real_wifi_ap.jpg',
    tagline: 'Flagship enterprise tri-band 802.11ax Wi-Fi 6E access point unlocking the ultra-wide 6 GHz band.',
    specs: {
      display: 'Tri-color circular status LED ring for network and radio health',
      processor: 'Aruba ClientMatch technology with intelligent band steering and RF optimization',
      memory: 'Supports up to 512 associated client devices per radio',
      security: 'WPA3 Enterprise, Enhanced Open (OWE), integrated BLE 5.0 and Zigbee IoT radio',
      ports: 'Dual 2.5 Gbps Smart Rate (mGig) Ethernet ports with PoE hitless failover'
    },
    keyPills: ['Wi-Fi 6E (6GHz Band)', '3.9 Gbps Peak Speed', 'Dual 2.5G Smart Rate', 'Aruba ESP Ready'],
    stockStatus: 'In Stock • Same-Day Dispatch',
    rentalAvailable: true,
    idealFor: 'High-density corporate auditoriums, modern tech campuses, and university lecture halls'
  },
  {
    id: 'cisco-catalyst-9120-ap',
    categoryId: 'wifi-wireless-networking',
    brand: 'Cisco',
    name: 'Cisco Catalyst 9120AX Wi-Fi 6 Access Point',
    image: '/assets/wifi_access_point.jpg',
    tagline: 'Enterprise-class 802.11ax Wi-Fi 6 access point engineered for mission-critical campus density.',
    specs: {
      display: 'Multi-color diagnostic LED indicator for instant link status',
      processor: 'Custom Cisco RF ASIC with CleanAir spectrum intelligence and interference suppression',
      memory: 'Supports up to 500 active client devices concurrently',
      security: 'WPA3 Enterprise, Cisco DNA Spaces location analytics, Rogue AP automated containment',
      ports: '1x 2.5G Multigigabit Ethernet (mGig) RJ-45 PoE+ port'
    },
    keyPills: ['Wi-Fi 6 (802.11ax)', '2.5G mGig PoE+', 'Cisco CleanAir RF', '500+ Clients'],
    stockStatus: 'In Stock • Fleet Ready',
    rentalAvailable: true,
    idealFor: 'High-density open offices, corporate headquarters, hospitals, and convention centers'
  },
  {
    id: 'ubiquiti-unifi-u6-enterprise',
    categoryId: 'wifi-wireless-networking',
    brand: 'Ubiquiti',
    name: 'Ubiquiti UniFi U6 Enterprise Wi-Fi 6E AP',
    image: '/assets/real_wifi_ap.jpg',
    tagline: 'Tri-band Wi-Fi 6E ceiling access point designed for seamless high-density client environments.',
    specs: {
      display: 'RGB ring LED for customizable location tagging and status visualization',
      processor: 'High-efficiency 10-stream Wi-Fi architecture with 4x4 MU-MIMO on 5GHz and 6GHz',
      memory: 'Engineered for over 600 concurrent client devices with zero-handoff fast roaming',
      security: 'WPA3 Personal / Enterprise, VLAN isolation, guest captive portal',
      ports: '1x 2.5GbE RJ45 port powered via 802.3at PoE+'
    },
    keyPills: ['Tri-Band Wi-Fi 6E', '10.2 Gbps Total Rate', '2.5GbE PoE+ Input', '600+ Client Capacity'],
    stockStatus: 'In Stock • Bulk Lots In Warehouse',
    rentalAvailable: true,
    idealFor: 'High-density coworking spaces, conference centers, creative agencies, and IT parks'
  },
  {
    id: 'ruckus-zoneflex-r750',
    categoryId: 'wifi-wireless-networking',
    brand: 'Ruckus',
    name: 'Ruckus Wireless ZoneFlex R750 Wi-Fi 6 AP',
    image: '/assets/wifi_access_point.jpg',
    tagline: 'Premium 4x4:4 Wi-Fi 6 access point with patented BeamFlex+ adaptive antenna technology.',
    specs: {
      processor: 'Multi-core enterprise Wi-Fi SoC with BeamFlex+ dynamic directional antennas',
      memory: 'High-capacity client buffer for 1024 concurrent client connections',
      security: 'WPA3, DPSK (Dynamic Pre-Shared Keys), rogue AP detection, smart mesh networking',
      ports: '1x 2.5GbE Ethernet port + 1x 1GbE Ethernet port with PoE+ input, USB 2.0 port'
    },
    keyPills: ['BeamFlex+ Antennas', '4x4:4 MU-MIMO', '1024 Client Capacity', 'Industrial & Stadium Grade'],
    stockStatus: 'In Stock • Staged & Tested',
    rentalAvailable: true,
    idealFor: 'Stadiums, manufacturing factory floors, airport terminals, and large educational campuses'
  },
  {
    id: 'aruba-instant-on-ap25',
    categoryId: 'wifi-wireless-networking',
    brand: 'Aruba',
    name: 'Aruba Instant On AP25 Dual-Band Wi-Fi 6 AP',
    image: '/assets/real_wifi_ap.jpg',
    tagline: 'High-speed 4x4 Wi-Fi 6 access point tailored for small-to-midsize business environments.',
    specs: {
      processor: '4x4 MU-MIMO on 5GHz with OFDMA and Target Wake Time (TWT)',
      memory: 'Provides smooth connectivity for up to 100 active devices per room',
      security: 'Built-in security gateway & firewall, two-factor authentication, WPA3 support',
      ports: '1x 2.5 Gigabit Ethernet port with 802.3at PoE input'
    },
    keyPills: ['Wi-Fi 6 4x4:4', '5.37 Gbps Speed', '2.5G Uplink', 'Instant On Cloud App'],
    stockStatus: 'In Stock • Immediate Dispatch',
    rentalAvailable: true,
    idealFor: 'Midsize office suites, luxury boutique hotels, consulting firms, and retail flagships'
  },
  {
    id: 'cisco-catalyst-9800-l-controller',
    categoryId: 'wifi-wireless-networking',
    brand: 'Cisco',
    name: 'Cisco Catalyst 9800-L Wireless LAN Controller',
    image: '/assets/network_security_firewall.jpg',
    tagline: 'Enterprise-grade wireless controller for small to medium campuses with seamless software updates.',
    specs: {
      processor: 'Multi-core control plane running open and programmable Cisco IOS XE',
      memory: 'Supports up to 250 Access Points and 5,000 clients simultaneously',
      security: 'Encrypted Traffic Analytics, Cisco DNA Spaces, MACsec encryption, Rogue detection',
      ports: '2x 10G SFP+ or 4x 1G uplinks, 1x RJ45 console, redundant power supply option'
    },
    keyPills: ['250 APs / 5,000 Clients', '5 Gbps Throughput', 'Stateful HA Switchover', 'Cisco IOS XE'],
    stockStatus: 'In Stock • Enterprise Configured',
    rentalAvailable: true,
    idealFor: 'Centralized wireless management across multi-building campuses and hospitals'
  },
  {
    id: 'ubiquiti-building-bridge-ubb',
    categoryId: 'wifi-wireless-networking',
    brand: 'Ubiquiti',
    name: 'Ubiquiti UniFi Building-to-Building Bridge (UBB 60GHz)',
    image: '/assets/real_wifi_ap.jpg',
    tagline: 'Gigabit 60 GHz wireless link with 5 GHz failover for high-throughput building-to-building connectivity.',
    specs: {
      display: 'Integrated LED ring indicating precise alignment status between paired units',
      processor: 'Point-to-point wireless engine delivering up to 1.7+ Gbps real aggregate throughput',
      memory: 'Up to 500-meter line-of-sight range with automatic 5 GHz weather failover',
      security: 'Proprietary AES-128 wireless link encryption, managed seamlessly in UniFi Controller',
      ports: '1x Gigabit Ethernet PoE port per dish unit'
    },
    keyPills: ['60 GHz Gigabit Link', '1.7+ Gbps Speed', '5 GHz Auto Failover', '500m Operating Range'],
    stockStatus: 'In Stock • Paired Kits Ready',
    rentalAvailable: true,
    idealFor: 'Connecting adjacent corporate office buildings, warehouse facilities, and cross-street annexes'
  },
  {
    id: 'aruba-instant-on-ap22',
    categoryId: 'wifi-wireless-networking',
    brand: 'Aruba',
    name: 'Aruba Instant On AP22 High-Density Indoor AP',
    image: '/assets/wifi_access_point.jpg',
    tagline: 'Cost-effective, Wi-Fi 6 certified access point engineered for modern hybrid office desks.',
    specs: {
      processor: '2x2:2 802.11ax Wi-Fi 6 architecture with OFDMA and Smart Mesh support',
      memory: 'Handles 75+ active users per AP without latency spikes',
      security: 'WPA2/WPA3 Enterprise and Personal, TPM chipset hardware key storage',
      ports: '1x 10/100/1000 Gigabit Ethernet port with 802.3af PoE power'
    },
    keyPills: ['Wi-Fi 6 Certified', '1.77 Gbps Speed', 'Smart Mesh Support', 'Cost-Effective Fleets'],
    stockStatus: 'In Stock • Bulk Lot Ready',
    rentalAvailable: true,
    idealFor: 'Department floors, legal and accounting firms, meeting rooms, and training centers'
  },

  // BUSINESS PHONES & IP PHONES (8 Enterprise Products)
  {
    id: 'poly-vvx-450-ip-phone',
    categoryId: 'business-phones-ip-phones',
    brand: 'Polycom',
    name: 'Polycom VVX 450 12-Line Gigabit Business IP Phone',
    image: '/assets/phone_poly_vvx450.jpg',
    tagline: 'Enterprise twelve-line desktop phone with Poly Acoustic Fence and vivid 4.3" color display.',
    specs: {
      display: '4.3" color LCD screen (480x272 pixel resolution) with intuitive soft-key navigation',
      processor: 'Dual-core processor with Poly HD Voice and Polycom Acoustic Clarity full-duplex audio',
      security: '802.1X, TLS 1.3 encryption, SRTP voice payload security, encrypted configuration files',
      ports: 'Dual Gigabit Ethernet ports (10/100/1000) with integrated PoE, 2x USB 2.0 host ports'
    },
    keyPills: ['12 Lines / SIP Accounts', 'Poly Acoustic Fence', '4.3" Color Screen', 'Dual Gigabit PoE'],
    stockStatus: 'In Stock • Pre-Configured Available',
    rentalAvailable: true,
    idealFor: 'Executive desktop suites, administrative coordinators, and heavy-call business operators'
  },
  {
    id: 'cisco-8845-ip-phone',
    categoryId: 'business-phones-ip-phones',
    brand: 'Cisco',
    name: 'Cisco IP Phone 8845 (HD Video & Voice)',
    image: '/assets/phone_cisco_8845.jpg',
    tagline: 'Executive desktop collaboration endpoint uniting 720p HD video and crystal-clear wideband audio.',
    specs: {
      display: '5.0-inch widescreen color VGA backlit display (800x480 resolution)',
      processor: 'Dual-core DSP with hardware acoustic echo cancellation and background suppression',
      security: '802.1X, TLS 1.3, SRTP encrypted voice payloads, image authentication',
      ports: 'Dual Gigabit Ethernet ports with integrated PoE, Bluetooth 4.1 for mobile headsets'
    },
    keyPills: ['720p HD Video', '5" Color Screen', 'Gigabit PoE', 'Bluetooth Pairing'],
    stockStatus: 'In Stock • Bulk Units Available',
    rentalAvailable: true,
    idealFor: 'Executive conference desks, boardrooms, and managerial workstation setups'
  },
  {
    id: 'cisco-7841-ip-phone',
    categoryId: 'business-phones-ip-phones',
    brand: 'Cisco',
    name: 'Cisco IP Phone 7841 Gigabit Voice Endpoint',
    image: '/assets/phone_cisco_7841.jpg',
    tagline: 'Reliable, cost-effective four-line enterprise voice desk phone for general workforce deployment.',
    specs: {
      display: '3.5-inch high-resolution greyscale backlit display (396x162 pixels)',
      processor: 'High-performance audio engine supporting wideband audio codec (G.722)',
      security: 'Enterprise cryptographic security, TLS 1.2, SRTP, secure boot',
      ports: 'Dual 10/100/1000 Gigabit Ethernet switch ports with IEEE 802.3af PoE Class 1'
    },
    keyPills: ['4 Line Keys', 'Dual Gigabit PoE', 'Wideband G.722 Audio', 'Corporate Fleet Standard'],
    stockStatus: 'In Stock • Pan-India Deployments',
    rentalAvailable: true,
    idealFor: 'General knowledge workers, customer support desks, and corporate cubicle floors'
  },
  {
    id: 'grandstream-grp2615-ip-phone',
    categoryId: 'business-phones-ip-phones',
    brand: 'Grandstream',
    name: 'Grandstream GRP2615 Carrier-Grade HD IP Phone',
    image: '/assets/phone_grandstream_grp2615.png',
    tagline: 'Carrier-grade 10-line IP phone featuring integrated dual-band Wi-Fi and 40 digital BLF keys.',
    specs: {
      display: '4.3-inch (480x272) TFT color LCD screen with customizable faceplates',
      processor: 'Dual firmware images for carrier-grade reliability and seamless zero-downtime provisioning',
      security: 'Enterprise-level protection including secure boot, dual firmware images, and encrypted data storage',
      ports: 'Dual switched auto-sensing 10/100/1000 Gigabit ports with PoE, integrated dual-band Wi-Fi & Bluetooth'
    },
    keyPills: ['10 Lines / 5 SIP', 'Integrated Wi-Fi & BT', '40 Virtual BLF Keys', 'Carrier-Grade Security'],
    stockStatus: 'In Stock • Same-Day Dispatch',
    rentalAvailable: true,
    idealFor: 'Enterprises needing wireless VoIP desks, call center supervisors, and hotel reception desks'
  },
  {
    id: 'grandstream-gxv3480-smart-video',
    categoryId: 'business-phones-ip-phones',
    brand: 'Grandstream',
    name: 'Grandstream GXV3480 Android Smart Video IP Phone',
    image: '/assets/phone_grandstream_gxv3480.png',
    tagline: 'All-in-one 16-line multimedia business video phone powered by Android 11 with 8" touch screen.',
    specs: {
      display: '8.0" (1280x800) capacitive 10-point touch IPS LCD screen',
      processor: 'Quad-core 2.0 GHz ARM processor with hardware 1080p video decoding/encoding',
      security: 'Android 11 enterprise MDM, 2MP tiltable camera with privacy shutter, SRTP / TLS',
      ports: 'Dual Gigabit ports with PoE/PoE+, HDMI input/output, dual-band Wi-Fi 6, Bluetooth 5.0'
    },
    keyPills: ['8" Touch Screen', 'Android 11 OS', '1080p HD Video Camera', '16 SIP Lines / Accounts'],
    stockStatus: 'In Stock • Premium Flagship',
    rentalAvailable: true,
    idealFor: 'Senior corporate executives, telehealth consult desks, and video-conference rooms'
  },
  {
    id: 'yealink-sip-t54w-ip-phone',
    categoryId: 'business-phones-ip-phones',
    brand: 'Yealink',
    name: 'Yealink SIP-T54W Prime Business IP Phone',
    image: '/assets/phone_yealink_t54w.png',
    tagline: 'Adjustable color screen business phone with Yealink Acoustic Shield noise cancellation.',
    specs: {
      display: '4.3" 480x272-pixel color display, fully adjustable tilt angle to suit lighting',
      processor: 'Optima HD Voice with Yealink Acoustic Shield technology eliminating background ambient chatter',
      security: 'Transport Layer Security (TLS 1.3), SRTP, HTTPS phone configuration management',
      ports: 'Dual Gigabit Ethernet ports, integrated dual-band 2.4G/5G Wi-Fi, built-in Bluetooth 4.2'
    },
    keyPills: ['Adjustable Color Screen', 'Acoustic Shield Audio', 'Built-in Wi-Fi & BT', '16 VoIP Accounts'],
    stockStatus: 'In Stock • Fleet Customization',
    rentalAvailable: true,
    idealFor: 'Busy open-plan office desks, financial traders, and executive managerial offices'
  },
  {
    id: 'yealink-cp965-conference-phone',
    categoryId: 'business-phones-ip-phones',
    brand: 'Yealink',
    name: 'Yealink CP965 Touchscreen HD Conference Phone',
    image: '/assets/phone_yealink_cp965.png',
    tagline: 'Flagship conference phone with 13-microphone array, 360° voice pickup, and 12-party conference calls.',
    specs: {
      display: '5.0-inch 720x1280 multi-touch capacitive screen with anti-fingerprint coating',
      processor: '12 internal microphones for 360° voice pickup up to 20 feet (6m) + 1 noise cancellation mic',
      security: 'Android 9.0 OS with enterprise security policies, IEEE 802.1X, TLS 1.3, SRTP',
      ports: '1x RJ45 10/100M PoE port, built-in Wi-Fi (2.4GHz/5GHz), built-in Bluetooth 4.2, USB 2.0 port'
    },
    keyPills: ['13-Microphone Array', '6m 360° Voice Pickup', '5" Touch Screen', '12-Party Conference'],
    stockStatus: 'In Stock • Ready to Ship',
    rentalAvailable: true,
    idealFor: 'Mid-to-large corporate boardrooms, executive meeting spaces, and multi-party hybrid conferences'
  },
  {
    id: 'cisco-8832-conference-phone',
    categoryId: 'business-phones-ip-phones',
    brand: 'Cisco',
    name: 'Cisco IP Conference Phone 8832 Wideband Endpoint',
    image: '/assets/phone_cisco_8832.jpg',
    tagline: 'High-end boardroom conference phone covering up to 800 sq ft with studio-grade wideband audio.',
    specs: {
      display: '3.9-inch 480x128 color backlit display for easy meeting control',
      processor: 'Studio-grade wideband speakerphone delivering 360-degree coverage for rooms up to 800 sq ft',
      security: 'Enterprise-grade SHA-256 signatures, TLS 1.2, SRTP, Cisco Unified Communications security',
      ports: '10/100 Ethernet with PoE, supports optional wireless expansion microphones'
    },
    keyPills: ['800 sq ft Coverage', 'Wideband Studio Sound', 'Color Display', 'Boardroom Standard'],
    stockStatus: 'In Stock • Verified Inventory',
    rentalAvailable: true,
    idealFor: 'C-suite boardrooms, municipal council chambers, and corporate training rooms'
  },

  // CCTV & SECURITY SURVEILLANCE (8 Enterprise Products)
  {
    id: 'hikvision-4k-darkfighter-dome',
    categoryId: 'cctv',
    brand: 'Hikvision',
    name: 'Hikvision 4K AcuSense DarkFighter IP Dome Camera (DS-2CD2186G2-IS)',
    image: '/assets/cctv_hikvision_2186_dome.jpg',
    tagline: 'Commercial 4K Ultra HD vandal-resistant dome with DarkFighter color low-light technology and AcuSense AI.',
    specs: {
      display: '4K Ultra HD (3840x2160) at 20fps or 3200x1800 at 30fps with 120dB True WDR',
      processor: 'AcuSense deep learning engine classifying humans and vehicles with 98% false-alarm elimination',
      security: 'Hikvision Edge Cybersecurity, IP address filtering, HTTPS encryption, digest authentication',
      ports: '1x RJ45 10/100M PoE (802.3af), Audio I/O, Alarm I/O, MicroSD card slot up to 512GB',
      storage: 'IK10 vandal-proof and IP67 weather-resistant enclosure for indoor/outdoor'
    },
    keyPills: ['4K Ultra HD 8MP', 'DarkFighter Color Night', 'AcuSense AI Filter', 'IK10 Vandal-Proof'],
    stockStatus: 'In Stock • Pan-India Installation',
    rentalAvailable: true,
    idealFor: 'Datacenter corridors, server rooms, bank vaults, corporate lobbies, and retail stores'
  },
  {
    id: 'hikvision-8mp-bullet-varifocal',
    categoryId: 'cctv',
    brand: 'Hikvision',
    name: 'Hikvision 8MP Motorized Varifocal Bullet Camera (DS-2CD2686G2-IZS)',
    image: '/assets/cctv_hikvision_2686_bullet.png',
    tagline: 'Heavy-duty commercial bullet camera with motorized 4x optical zoom and 60-meter EXIR night vision.',
    specs: {
      display: '8MP 4K (3840x2160) resolution with 2.8 to 12mm motorized varifocal optical zoom lens',
      processor: 'AcuSense deep learning processor for line-crossing and perimeter intrusion detection',
      security: 'Signed firmware, secure boot, TLS 1.2/1.3, encrypted local edge recording',
      ports: 'PoE 802.3at Class 4, 12V DC input, audio in/out, alarm in/out, MicroSD up to 512GB',
      storage: 'IP67 waterproof and IK10 impact-resistant metal casing'
    },
    keyPills: ['8MP 4K Resolution', 'Motorized 4x Zoom', '60m EXIR Night Vision', '120dB True WDR'],
    stockStatus: 'In Stock • Bulk Fleets Ready',
    rentalAvailable: true,
    idealFor: 'Corporate perimeter fences, parking structures, warehousing gates, and campus perimeters'
  },
  {
    id: 'cp-plus-5mp-starlight-dome',
    categoryId: 'cctv',
    brand: 'CP Plus',
    name: 'CP Plus 5MP Full-Color Starlight Dome Camera (CP-UNC-TA51ZL3-VM)',
    image: '/assets/cctv_cpplus_5mp_dome.png',
    tagline: 'Vivid 24/7 full-color starlight camera with motorized zoom lens and built-in two-way audio talk.',
    specs: {
      display: '5MP (2592x1944) progressive scan CMOS with Starlight color sensor down to 0.005 Lux',
      processor: 'InstaStream AI video compression saving 70% storage and bandwidth',
      security: 'Multi-level user access, IP white/blacklisting, encrypted video streaming',
      ports: '10/100M PoE input, built-in microphone and built-in speaker for active two-way talk, MicroSD 256GB'
    },
    keyPills: ['5MP Full-Color Starlight', 'Motorized Varifocal', 'Two-Way Audio Talk', 'IP67 Weatherproof'],
    stockStatus: 'In Stock • Fast Dispatch',
    rentalAvailable: true,
    idealFor: 'Office reception lobbies, retail store cash counters, school corridors, and elevators'
  },
  {
    id: 'dahua-wizmind-8mp-bullet',
    categoryId: 'cctv',
    brand: 'Dahua',
    name: 'Dahua WizMind 8MP AI Bullet Camera (IPC-HFW5842E-Z4E)',
    image: '/assets/cctv_dahua_wizmind_bullet.png',
    tagline: 'High-end AI bullet camera with 8-32mm long-range optical zoom and automatic license plate recognition.',
    specs: {
      display: '8MP 1/1.8" CMOS sensor delivering 4K at 30fps with 120m Smart IR illumination distance',
      processor: 'Dahua WizMind deep learning chip supporting face recognition, ANPR, and metadata extraction',
      security: 'Dahua cybersecurity suite, trusted execution environment, digest authentication',
      ports: 'ePoE / PoE 802.3af, dual alarm in/out, audio in/out, dual power redundancy (12V DC / 24V AC)'
    },
    keyPills: ['8MP WizMind AI', '8-32mm Zoom Lens', 'Face & ANPR Detection', '120m Smart IR'],
    stockStatus: 'In Stock • Commercial Staged',
    rentalAvailable: true,
    idealFor: 'Highway toll plazas, vehicle access gates, factory yards, and logistics entry checkpoints'
  },
  {
    id: 'hikvision-32ch-4k-nvr',
    categoryId: 'cctv',
    brand: 'Hikvision',
    name: 'Hikvision Pro Embedded 32-Channel 4K NVR (DS-7732NI-I4/16P)',
    image: '/assets/cctv_hikvision_32ch_nvr.png',
    tagline: 'Enterprise 32-channel network video recorder with 16 independent PoE ports and 4 SATA drive bays.',
    specs: {
      display: 'Supports up to 12MP IP camera recording, dual 4K HDMI video outputs for security video walls',
      processor: 'High-throughput dual-core NVR SoC supporting 256 Mbps incoming bandwidth',
      storage: '4x SATA interfaces supporting up to 10TB per HDD (40TB total raw video archive storage)',
      security: 'TLS 1.2, H.265+ smart codec, channel-level permission grouping, RAID 0/1/5/10 support',
      ports: '16x independent 10/100M PoE network interfaces (200W total budget), dual Gigabit LAN uplinks'
    },
    keyPills: ['32 Channels / 16 PoE', 'Up to 12MP Recording', '4 SATA Bays (40TB)', 'Dual 4K HDMI Out'],
    stockStatus: 'In Stock • Pan-India Installation',
    rentalAvailable: true,
    idealFor: 'Central surveillance control rooms, corporate facilities, luxury hotels, and hospitals'
  },
  {
    id: 'cp-plus-64ch-enterprise-nvr',
    categoryId: 'cctv',
    brand: 'CP Plus',
    name: 'CP Plus 64-Channel 8-HDD Enterprise NVR (CP-UNR-464T8-V2)',
    image: '/assets/cctv_cpplus_64ch_nvr.png',
    tagline: 'High-density 64-channel 2U NVR supporting 80TB storage and hardware RAID protection.',
    specs: {
      display: 'Supports 4K/5MP/1080p real-time simultaneous multi-screen monitoring across dual HDMI and VGA',
      processor: 'High-bandwidth enterprise streaming server engine supporting 384 Mbps recording bandwidth',
      storage: '8x SATA III hard disk ports supporting up to 80TB total storage with Hot-Swap RAID 1/5/6/10',
      security: 'Enterprise user authentication, ONVIF Profile S/G/T conformance, HTTPS TLS encryption',
      ports: 'Dual Gigabit Ethernet ports (fault-tolerant & load balanced), 4x USB ports, eSATA port'
    },
    keyPills: ['64 Channels', '8 SATA HDDs (80TB)', 'Hardware RAID 1/5/6/10', '384 Mbps Bandwidth'],
    stockStatus: 'In Stock • Ready to Deploy',
    rentalAvailable: true,
    idealFor: 'Large IT parks, manufacturing plants, university campuses, and residential townships'
  },
  {
    id: 'dahua-4mp-32x-ptz-camera',
    categoryId: 'cctv',
    brand: 'Dahua',
    name: 'Dahua 4MP 32x Optical Zoom PTZ Camera (SD5A432GB-HNR)',
    image: '/assets/cctv_dahua_ptz_speed_dome.png',
    tagline: 'Ultra-fast PTZ speed dome camera with 32x optical zoom, predictive auto-tracking, and 150m IR.',
    specs: {
      display: '4MP 1/2.8" STARVIS CMOS sensor with 4.8mm-154mm 32x optical zoom and 16x digital zoom',
      processor: 'Predictive Auto-Tracking 3.0 automatically following moving human and vehicle targets',
      security: 'IP67 weatherproof, IK10 vandal-proof, 6000V lightning protection, encrypted video stream',
      ports: 'PoE+ (802.3at) / 24V AC, audio in/out, alarm 2 in / 1 out, MicroSD card slot up to 512GB',
      storage: '360° continuous pan with high rotation speed up to 300°/sec'
    },
    keyPills: ['32x Optical Zoom', 'Auto-Tracking 3.0', '150m Night Vision', '360° Endless Pan'],
    stockStatus: 'In Stock • Pan-India Delivery',
    rentalAvailable: true,
    idealFor: 'Airport tarmac perimeters, power substations, open construction sites, and stadiums'
  },
  {
    id: 'axis-4k-surveillance-dome',
    categoryId: 'cctv',
    brand: 'Axis Communications',
    name: 'Axis P3268-LVE 4K AI Dome Camera',
    image: '/assets/cctv_axis_p3268_dome.jpg',
    tagline: 'Commercial 4K Ultra HD vandal-resistant dome camera with deep-learning analytics and Forensic WDR.',
    specs: {
      display: '4K Ultra HD (3840x2160) at up to 60 frames per second with Lightfinder 2.0',
      processor: 'ARTPEC-8 processing chip with Deep Learning Processing Unit (DLPU)',
      security: 'Axis Edge Vault hardware cybersecurity, signed firmware, secure boot, FIPS 140-2 Level 2',
      ports: 'PoE IEEE 802.3af Class 3, MicroSD card slot for on-edge local failover recording, audio in'
    },
    keyPills: ['4K Ultra HD 60fps', 'Forensic WDR', 'AI Object Classifier', 'IK10 Vandal-Proof'],
    stockStatus: 'In Stock • Pan-India Installation',
    rentalAvailable: true,
    idealFor: 'Datacenter corridors, server rooms, bank vaults, corporate perimeters, and manufacturing floors'
  },
  {
    id: 'logitech-mx-keys-enterprise-keyboard',
    categoryId: 'it-hardware-accessories',
    brand: 'Logitech',
    name: 'Logitech MX Keys Advanced Enterprise Wireless Keyboard',
    image: '/assets/real_enterprise_keyboard.jpg',
    tagline: 'Ergonomic low-profile wireless illuminated keyboard with smart backlighting and multi-OS pairing.',
    specs: {
      processor: 'Dual connectivity: Logi Bolt secure wireless technology & Bluetooth Low Energy (BLE)',
      ports: 'USB-C rechargeable battery (up to 10 days on full charge, or 5 months backlighting off)',
      security: 'FIPS-compliant encrypted wireless connection, Logi Options+ enterprise centralized deployment',
      memory: 'Easy-Switch keys to connect up to 3 devices and switch between them at the press of a button'
    },
    keyPills: ['Smart Backlighting', 'Logi Bolt Encrypted', 'Multi-OS & 3 Devices', 'USB-C Rechargeable'],
    stockStatus: 'In Stock • Enterprise Bulk Packs Available',
    rentalAvailable: true,
    idealFor: 'Software developers, financial analysts, enterprise workstations, and executive desks'
  },
  {
    id: 'logitech-mx-master-3s-mouse',
    categoryId: 'it-hardware-accessories',
    brand: 'Logitech',
    name: 'Logitech MX Master 3S Enterprise Precision Mouse',
    image: '/assets/real_wireless_mouse.jpg',
    tagline: 'High-precision 8,000 DPI electromagnetic scroll mouse with Quiet Clicks and cross-computer Flow control.',
    specs: {
      processor: 'Darkfield high precision sensor (tracks on any surface including glass), 200 to 8,000 DPI',
      ports: 'USB-C quick charge (1 min charge gives 3 hours use), 70 days battery life on full charge',
      security: 'Logi Bolt Secure Mode 1 FIPS encryption, silent tactile switches reducing 90% click noise',
      memory: 'MagSpeed electromagnetic scroll wheel (1,000 lines per second) and horizontal thumb wheel'
    },
    keyPills: ['8000 DPI Darkfield', 'MagSpeed Quiet Scroll', 'Logi Bolt Encrypted', '70-Day Battery'],
    stockStatus: 'In Stock • Ready to Ship',
    rentalAvailable: true,
    idealFor: 'Creative agencies, CAD engineers, data scientists, and power productivity users'
  },
  {
    id: 'dell-premier-wireless-keyboard-mouse-km7321w',
    categoryId: 'it-hardware-accessories',
    brand: 'Dell',
    name: 'Dell Premier Multi-Device Wireless Combo (KM7321W)',
    image: '/assets/real_keyboard_mouse_combo.jpg',
    tagline: 'Commercial wireless combo pairing across 3 devices via 2.4GHz RF and Bluetooth 5.0 with 36-month battery life.',
    specs: {
      processor: 'Multi-device seamless switching across 3 devices (1x 2.4GHz dongle + 2x Bluetooth 5.0)',
      memory: 'Up to 36 months keyboard and mouse battery endurance on standard AA/AAA cells',
      security: '128-bit AES encryption over RF transmission protecting corporate keystrokes from interception',
      ports: 'Dell Peripheral Manager (DPM) enterprise software for custom DPI, macro shortcuts, and battery status'
    },
    keyPills: ['3-Device Pairing', '36-Month Battery', '128-Bit AES Encrypted', 'Dell Peripheral Manager'],
    stockStatus: 'In Stock • Bulk Deployments',
    rentalAvailable: true,
    idealFor: 'Corporate call centers, enterprise IT fleets, shared work pods, and operations floors'
  },
  {
    id: 'nvidia-rtx-6000-ada',
    categoryId: 'it-hardware-accessories',
    brand: 'NVIDIA',
    name: 'NVIDIA RTX 6000 Ada Generation (48GB GDDR6 Workstation & AI GPU)',
    image: '/assets/gpu_graphics_hardware.jpg',
    tagline: 'The ultimate professional graphics and AI compute powerhouse for enterprise CAD, AI LLM fine-tuning, and neural rendering.',
    specs: {
      processor: '18,176 CUDA Cores, 568 Tensor Cores (4th Gen), 142 RT Cores (3rd Gen), 91.1 TFLOPS FP32',
      memory: '48GB GDDR6 with ECC error-correcting code (960 GB/s memory bandwidth)',
      security: 'Hardware Root of Trust, secure boot, enterprise vGPU virtualization ready (vCS / vWS)',
      ports: '4x DisplayPort 1.4a with latching mechanisms, PCIe 4.0 x16 host interface, 300W max power'
    },
    keyPills: ['48GB GDDR6 ECC', '18,176 CUDA Cores', '4th-Gen Tensor AI', 'Quad DisplayPort'],
    stockStatus: 'In Stock • Enterprise Verified',
    rentalAvailable: true,
    idealFor: 'AI model fine-tuning, high-end 3D visual FX workstations, data science, and CAD rendering clusters'
  },
  {
    id: 'nvidia-h100-pcie-80gb',
    categoryId: 'it-hardware-accessories',
    brand: 'NVIDIA',
    name: 'NVIDIA H100 80GB PCIe Enterprise Tensor Core GPU',
    image: '/assets/nvidia_h100_gpu.jpg',
    tagline: 'The enterprise AI accelerator delivering unprecedented performance for generative AI, LLM training, and high-performance computing.',
    specs: {
      processor: 'Fourth-generation Tensor Cores with Transformer Engine, up to 756 TFLOPS FP64/FP32/FP16/FP8',
      memory: '80GB HBM2e memory with ECC, ultra-high 2.0 TB/s memory bandwidth',
      security: 'Confidential Computing hardware isolation protecting sensitive enterprise data and AI model weights',
      ports: 'PCIe Gen5 x16 host interface (128 GB/s bi-directional), NVLink Bridge 600 GB/s inter-GPU interconnect'
    },
    keyPills: ['80GB HBM2e (2 TB/s)', 'PCIe Gen5 x16', 'Transformer Engine', 'NVLink 600 GB/s'],
    stockStatus: 'Available on Order • White Glove Staging',
    rentalAvailable: true,
    idealFor: 'Enterprise LLM fine-tuning, HPC simulation, deep learning training clusters, and AI inference'
  },
  {
    id: 'server-ram-ddr5-ecc',
    categoryId: 'it-hardware-accessories',
    brand: 'Samsung',
    name: 'Samsung 64GB DDR5-4800MHz ECC Registered RDIMM Server Memory',
    image: '/assets/ram_memory_hardware.jpg',
    tagline: 'Enterprise mission-critical server memory module with on-die ECC and dual 32-bit subchannels for 24/7 datacenters.',
    specs: {
      memory: '64GB DDR5 Registered DIMM (RDIMM) 288-pin, 4800 MT/s data transfer rate',
      processor: 'Optimized for dual-socket Intel Xeon Scalable 4th/5th Gen & AMD EPYC 9004 series servers',
      security: 'Hardware on-die ECC error correction and CRC parity checks for zero uncorrectable bit flips',
      ports: 'Standard 288-pin gold-plated DIMM server edge connector (1.1V ultra-low power consumption)'
    },
    keyPills: ['64GB DDR5 4800MHz', 'ECC Registered RDIMM', 'Dual Subchannel', '1.1V Low Power'],
    stockStatus: 'In Stock • Ready to Deploy',
    rentalAvailable: true,
    idealFor: 'VMware ESXi virtualization hosts, Microsoft SQL clusters, SAP HANA, and high-density datacenters'
  },
  {
    id: 'micron-7400-pro-nvme-ssd',
    categoryId: 'it-hardware-accessories',
    brand: 'Micron',
    name: 'Micron 7400 PRO 7.68TB Enterprise PCIe Gen4 NVMe SSD',
    image: '/assets/nvme_ssd_hardware.jpg',
    tagline: 'High-endurance enterprise U.2 & M.2 NVMe storage engineered for high-IOPS cloud workloads and low-latency arrays.',
    specs: {
      storage: '7.68TB NVMe 1.4 compliant PCIe 4.0 x4 solid state drive, 1 DWPD enterprise endurance',
      processor: 'Sequential reads up to 6,800 MB/s, sequential writes up to 5,600 MB/s, 1 Million Random Read IOPS',
      security: 'TCG Opal 2.01, Power-Loss Protection (PLP), End-to-end data path protection against silent corruption',
      ports: 'PCIe Gen4 x4 NVMe U.2 (15mm) and M.2 (22110) enterprise hot-swap server backplane form factors'
    },
    keyPills: ['PCIe Gen4 NVMe', '7.68TB Capacity', '1 Million IOPS', 'Hardware PLP Protection'],
    stockStatus: 'In Stock • Fast Dispatch',
    rentalAvailable: true,
    idealFor: 'Enterprise SAN/NAS arrays, mission-critical SQL clusters, and low-latency private cloud storage'
  },
  {
    id: 'dell-thunderbolt-4-dock-wd22tb4',
    categoryId: 'it-hardware-accessories',
    brand: 'Dell',
    name: 'Dell Universal Dual-4K Thunderbolt 4 Enterprise Dock (WD22TB4)',
    image: '/assets/docking_station_hardware.jpg',
    tagline: 'Modular high-bandwidth enterprise docking station with 130W Power Delivery and dual 4K/60Hz display support.',
    specs: {
      display: 'Supports up to four external displays simultaneously (including dual 4K @ 60Hz or single 5K/8K)',
      security: 'Kensington lock slot, MAC address pass-through, PXE Boot, Wake-on-LAN for remote IT management',
      ports: '2x Thunderbolt 4, 1x USB-C 3.2 Gen 2, 3x USB-A 3.2 Gen 1, 2x DisplayPort 1.4, 1x HDMI 2.0, Gigabit Ethernet',
      storage: 'Modular swappable connectivity module allowing seamless future field upgrades'
    },
    keyPills: ['Thunderbolt 4 (40Gbps)', '130W Power Delivery', 'Dual 4K / 8K Support', 'Gigabit LAN Port'],
    stockStatus: 'In Stock • Fleet Ready',
    rentalAvailable: true,
    idealFor: 'Enterprise hot-desking, hybrid engineering desks, financial trader multi-monitor setups'
  }
];

