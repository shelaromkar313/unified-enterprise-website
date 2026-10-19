import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Laptop, Monitor, Server, Radio, 
  PhoneCall, Boxes, ArrowRight, CheckCircle2, Calculator, ShieldCheck, Clock, ChevronDown 
} from 'lucide-react';

interface RentalServicesPageProps {
  onOpenQuickSupport: (serviceName?: string) => void;
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
}

export default function RentalServicesPage({ onOpenQuickSupport }: RentalServicesPageProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlItem = searchParams.get('item');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(urlItem || 'all');
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(false);

  // Calculator State
  const [selectedDevice, setSelectedDevice] = useState<string>('Enterprise Laptops');
  const [quantity, setQuantity] = useState<number>(25);
  const [duration, setDuration] = useState<string>('3 Months');

  useEffect(() => {
    setSelectedCategoryId(urlItem || 'all');
  }, [urlItem]);

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

  // Detailed data for all rental categories
  const rentalData: Record<string, RentalDetail> = useMemo(() => ({
    'laptop-rental': {
      id: 'laptop-rental',
      name: 'Commercial Laptop Rental',
      duration: 'Flexible: Daily, Monthly, or Annual Leasing',
      leadTime: 'Dispatched within 24–48 hours Pan-India',
      summary: 'Tier-1 commercial ultrabooks and laptops from Dell, HP, Lenovo, and Apple pre-loaded with your corporate OS image, BitLocker encryption, and domain configuration.',
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
              /* 2. CATEGORY VIEW: Detailed Rental Category Presentation */
              currentDetail && (
                <div className="space-y-8 animate-in fade-in duration-200">
                  
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

                  {/* Main Rental Card */}
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
                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                        {currentDetail.summary}
                      </p>

                      {/* Technical Specs */}
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                          Hardware Configurations & Specs
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {currentDetail.specs.map((spec, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-slate-800 bg-slate-50 border border-slate-200/80 p-2.5 rounded-lg">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#dc2626] shrink-0 mt-1.5" />
                              <span>{spec}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Included Commitments */}
                      <div className="pt-2 border-t border-slate-100">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-3">
                          Lease Terms & Maintenance Commitments
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
                            Terms: {currentDetail.duration}
                          </span>
                          <span className="text-xs text-slate-500">
                            Available with zero capital expenditure and same-day standby replacement pools.
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => onOpenQuickSupport(`Enquiry: ${currentDetail.name}`)}
                          className="px-5 py-2 rounded-lg bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold transition-colors whitespace-nowrap"
                        >
                          Book Equipment Sizing
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
