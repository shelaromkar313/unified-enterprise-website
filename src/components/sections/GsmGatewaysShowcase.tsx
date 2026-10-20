import React, { useState } from 'react';
import { 
  Radio, 
  PhoneCall, 
  Smartphone, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Server, 
  Sliders, 
  FileText, 
  Clock, 
  RefreshCw, 
  Database,
  ExternalLink,
  MessageSquare
} from 'lucide-react';

interface GsmGatewaysShowcaseProps {
  onOpenInquiry: (topic: string) => void;
}

type GatewayCategory = 'all' | 'gsm' | 'fxs' | 'fxo' | 'hybrid';

interface GatewayProduct {
  id: string;
  name: string;
  modelCode: string;
  category: 'gsm' | 'fxs' | 'fxo' | 'hybrid';
  categoryLabel: string;
  ports: string;
  image: string;
  tagline: string;
  description: string;
  specs: string[];
  features: string[];
  idealFor: string;
  badge: string;
  badgeColor: string;
}

const GATEWAY_PRODUCTS: GatewayProduct[] = [
  // --- GSM / 3G / 4G LTE GATEWAYS (UC2000 SERIES) ---
  {
    id: 'uc2000-ve',
    name: 'Dinstar UC2000-VE VoIP GSM/4G Gateway',
    modelCode: 'UC2000-VE (4/8 Channels)',
    category: 'gsm',
    categoryLabel: 'GSM / 4G LTE',
    ports: '4 or 8 SIM Channels',
    image: 'https://www.dinstar.com/web/images/46456/2019-02-23/UC2000-VE_F.png',
    tagline: 'Multi-functional 4G LTE wireless gateway for SME mobile trunking',
    description: 'Bridges cellular networks (GSM/3G/4G LTE & VoLTE) to IP-PBX systems. Features hot-swappable SIM slots, SMS-to-Email, HTTP SMS API, and flexible call routing rules to drastically reduce mobile calling costs.',
    specs: ['4 or 8 Cellular Channels', 'VoLTE HD Voice & 4G LTE', 'SIP v2.0 (RFC3261) Compliant', 'Built-in Antenna Splitter', 'HTTP / SMPP SMS API'],
    features: ['Auto IMEI modification & rotation', 'USSD balance check & low-balance alerts', 'Direct integration with Asterisk, 3CX & FreePBX'],
    idealFor: 'Small-to-medium offices, outbound sales teams, and remote branch cellular failover',
    badge: 'Popular Outbound',
    badgeColor: 'bg-red-50 text-[#dc2626] border-red-200'
  },
  {
    id: 'uc2000-vf',
    name: 'Dinstar UC2000-VF 16-Channel 4G Gateway',
    modelCode: 'UC2000-VF (8/16 Channels)',
    category: 'gsm',
    categoryLabel: 'GSM / 4G LTE',
    ports: '8 or 16 SIM Channels',
    image: 'https://www.dinstar.com/web/images/47159/2019-02-23/16t-2.png',
    tagline: '1U Rackmount enterprise cellular gateway for high-density outbound dialing',
    description: 'Designed for enterprise contact centers and telemarketing operations. Enables concurrent handling of up to 16 live cellular calls with crystal-clear VoLTE audio quality, centralized SIMCloud management, and bulk SMS broadcasting.',
    specs: ['16 Concurrent SIM Channels', 'Standard 19-inch 1U Rackmount', 'VoLTE HD Voice Encoding', 'Dual 10/100M Ethernet Ports', 'SMPP Bulk SMS Engine'],
    features: ['SIMBank & SIMCloud remote management', 'Hot-swappable SIM card trays', 'Automated CDR recording & export'],
    idealFor: 'Medium call centers, BPOs, customer service desks, and enterprise SMS dispatch',
    badge: 'Enterprise 1U',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200'
  },
  {
    id: 'uc2000-vg',
    name: 'Dinstar UC2000-VG 32-Channel Wireless Gateway',
    modelCode: 'UC2000-VG (32 Channels)',
    category: 'gsm',
    categoryLabel: 'GSM / 4G LTE',
    ports: '32 SIM Channels',
    image: 'https://www.dinstar.com/web/images/46175/2018-06-23/UC2000-VG_F.png',
    tagline: 'Carrier-grade high-density cellular VoIP gateway with up to 128 SIM rotation',
    description: 'High-density cellular trunking appliance capable of sustaining 32 concurrent voice channels. Supports multi-SIM rotation (up to 4 SIMs per channel) to prevent carrier blocking and optimize call routing tariffs.',
    specs: ['32 Concurrent SIM Channels', 'Multi-SIM Support (Up to 128 SIMs)', 'Full 4G LTE & VoLTE Support', 'Redundant Power Supply Option', 'Carrier-Grade SIP Stack'],
    features: ['Automatic SIM card switching & rotation', 'Advanced CDR analytics & CDR server export', 'Seamless softswitch & Asterisk compatibility'],
    idealFor: 'Large contact centers, telecom aggregators, enterprise telemarketing, and voice broadcast',
    badge: 'Carrier Grade',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200'
  },

  // --- ANALOG FXS GATEWAYS (DAG SERIES) ---
  {
    id: 'dag1000-4s',
    name: 'Dinstar DAG1000-4S / 8S Analog FXS Gateway',
    modelCode: 'DAG1000-4S / 8S',
    category: 'fxs',
    categoryLabel: 'Analog FXS',
    ports: '4 or 8 FXS Ports (RJ11)',
    image: 'https://www.dinstar.com/web/images/14392/2018-06-27/4S_F.png',
    tagline: 'Connect analog phones, cordless handsets, and fax machines to IP-PBX',
    description: 'Access gateway connecting legacy analog telephones and fax machines to IP-based telephony networks. Delivers standard dial tone, caller ID, T.38 fax transmission, and high-quality voice codecs.',
    specs: ['4 or 8 RJ11 FXS Ports', '1 WAN + 3 LAN Fast Ethernet Ports', 'T.38 & T.30 Pass-through Fax', 'G.711A/U, G.729A/B, G.723.1 Codecs', 'Primary & Secondary SIP Server Failover'],
    features: ['Standard SIP RFC3261 compliance', 'Automatic firmware upgrade & provisioning', 'Crystal-clear echo cancellation (G.168 128ms)'],
    idealFor: 'Small offices, retail outlets, doctor clinics, and small branch analog phone integration',
    badge: 'Small Business',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
  },
  {
    id: 'dag2000-24s',
    name: 'Dinstar DAG2000-16S / 24S / 32S FXS Gateway',
    modelCode: 'DAG2000-24S / 32S',
    category: 'fxs',
    categoryLabel: 'Analog FXS',
    ports: '16, 24, or 32 FXS Ports',
    image: 'https://www.dinstar.com/web/images/15173/2018-06-28/24s_F.png',
    tagline: 'Medium-density 1U rackmount analog VoIP gateway for enterprise legacy extension',
    description: 'High-reliability analog access gateway offering up to 32 FXS ports with RJ11 or RJ21 50-pin Telco connectors. Features TLS/SRTP security encryption, dual power supplies, and interoperability with all major cloud & on-premise PBXs.',
    specs: ['16, 24 or 32 RJ11 / RJ21 Ports', '1U 19-inch Standard Rackmount', 'TLS / SRTP Voice Encryption', 'Dual Gigabit Ethernet Uplinks', 'T.38 Real-Time Fax Relay'],
    features: ['5km maximum cabling line length', 'SNMP & TR-069 centralized cloud management', '3-way conference calling & call transfer'],
    idealFor: 'Hotels, multi-floor corporate buildings, hospitals, and schools keeping existing handsets',
    badge: 'Hospitality & Enterprise',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200'
  },
  {
    id: 'dag2500-fxs',
    name: 'Dinstar DAG2500 High-Density FXS Gateway',
    modelCode: 'DAG2500 (48 / 72 / 96 FXS)',
    category: 'fxs',
    categoryLabel: 'Analog FXS',
    ports: '48, 72, or 96 FXS Ports',
    image: 'https://www.dinstar.com/web/images/70384/2018-06-27/DAG2500_front.png',
    tagline: 'Ultra high-density 1U chassis for large hotels, campuses, and multi-tenant buildings',
    description: 'Engineered for large-scale analog phone deployments. Packs up to 96 FXS ports into a single 1U chassis using high-density RJ21 connectors, saving rack space and power consumption while preserving hundreds of existing analog phones.',
    specs: ['48, 72 or 96 FXS Ports in 1U', 'Modular Interface Design', 'Hardware Over-voltage Protection', 'Dual AC/DC Redundant Power Supply', 'Full Rate T.38 Super G3 Fax'],
    features: ['High-performance DSP voice processing', 'Centralized configuration via Dinstar Cloud NMS', 'Line testing & remote loopback diagnostics'],
    idealFor: 'Luxury hotels (guest rooms), residential complexes, university campuses, and hospitals',
    badge: 'High-Density 96-Port',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200'
  },

  // --- ANALOG FXO GATEWAYS (DAG SERIES) ---
  {
    id: 'dag1000-4o',
    name: 'Dinstar DAG1000-4O / 8O Analog FXO Gateway',
    modelCode: 'DAG1000-4O / 8O',
    category: 'fxo',
    categoryLabel: 'Analog FXO',
    ports: '4 or 8 FXO Ports (RJ11)',
    image: 'https://www.dinstar.com/web/images/14318/2018-06-27/dag_8OF.png',
    tagline: 'Connect telecom copper landlines (PSTN/POTS) directly to IP-PBX systems',
    description: 'Enables IP-PBX systems to make and receive calls via traditional PSTN/CO lines provided by BSNL, Airtel, Tata, or local telecom operators. Features automatic impedance matching and power failover lifeline protection.',
    specs: ['4 or 8 RJ11 FXO Ports', '1 WAN + 3 LAN Fast Ethernet Ports', 'Hardware Power Failover Bypass', 'Bellcore / ETSI / DTMF Caller ID', 'G.168 Line Echo Cancellation'],
    features: ['Line polarity reversal detection & busy tone detection', 'PSTN-to-VoIP & VoIP-to-PSTN flexible dial rules', 'Interoperable with Asterisk, FreePBX, 3CX & FreeSWITCH'],
    idealFor: 'Connecting existing landline telephone numbers to new IP-PBX systems with zero porting hassle',
    badge: 'PSTN Trunking',
    badgeColor: 'bg-amber-50 text-amber-800 border-amber-200'
  },
  {
    id: 'dag2000-16o',
    name: 'Dinstar DAG2000-16O Enterprise FXO Gateway',
    modelCode: 'DAG2000-16O (16 FXO)',
    category: 'fxo',
    categoryLabel: 'Analog FXO',
    ports: '16 FXO Ports (RJ11/RJ21)',
    image: 'https://www.dinstar.com/web/images/46680/2019-04-09/16o_F.png',
    tagline: '1U Rackmount 16-Port PSTN trunk gateway with hardware lifeline bypass',
    description: 'High-capacity FXO gateway providing 16 analog trunk connections to IP-PBX and Call Center dialers. Features programmable impedance matching for regional telecom standards and automatic failover routing.',
    specs: ['16 FXO Analog Trunk Ports', '19-inch 1U Standard Rackmount', 'Dual Gigabit Network Interfaces', 'Hardware Power & Network Failover', 'TLS/SRTP Media Encryption'],
    features: ['Automated trunk grouping & hunting', 'Dialing digit manipulation & prefix routing', 'SNMP & TR-069 remote monitoring'],
    idealFor: 'Enterprise branches, government offices, and call centers requiring heavy PSTN trunk fallback',
    badge: '16-Port Enterprise',
    badgeColor: 'bg-slate-100 text-slate-800 border-slate-300'
  },

  // --- HYBRID FXS + FXO GATEWAY ---
  {
    id: 'dag1000-4s4o',
    name: 'Dinstar DAG1000-4S4O Hybrid Analog Gateway',
    modelCode: 'DAG1000-4S4O (4 FXS + 4 FXO)',
    category: 'hybrid',
    categoryLabel: 'Hybrid (FXS + FXO)',
    ports: '4 FXS + 4 FXO Ports',
    image: 'https://www.dinstar.com/web/images/14444/2018-06-27/dag_4S4OF.png',
    tagline: 'All-in-one hybrid gateway: Connect analog phones AND PSTN copper lines in one unit',
    description: 'Combines 4 FXS telephone extension ports and 4 FXO landline trunk ports in a single appliance. Provides direct hardware lifeline pass-through: if power or internet drops, FXS phone #1 connects directly to PSTN trunk #1 for uninterrupted emergency dialing.',
    specs: ['4 FXS Ports + 4 FXO Ports (RJ11)', 'Direct Hardware Lifeline Bypass', '1 WAN + 3 LAN Ethernet Ports', 'T.38 / Pass-through Fax Relay', 'G.711, G.729A/B Voice Codecs'],
    features: ['Zero downtime emergency calling during power cuts', 'Simultaneous internal extension & PSTN line management', 'Compact, fanless, silent desktop design'],
    idealFor: 'Branch offices, remote clinics, warehouses, and executive residences needing both phones and PSTN lines',
    badge: 'Best Value Hybrid',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
  }
];

export default function GsmGatewaysShowcase({ onOpenInquiry }: GsmGatewaysShowcaseProps) {
  const [activeTab, setActiveTab] = useState<GatewayCategory>('all');
  const [selectedProduct, setSelectedProduct] = useState<GatewayProduct | null>(null);

  const filteredProducts = activeTab === 'all' 
    ? GATEWAY_PRODUCTS 
    : GATEWAY_PRODUCTS.filter((p) => p.category === activeTab);

  return (
    <div className="space-y-8">
      
      {/* 1. HERO INTRO BANNER */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-50 border border-red-200 text-[#dc2626] text-[11px] font-bold uppercase tracking-wider mb-3">
          <Radio className="w-3 h-3 text-[#dc2626]" />
          <span>Telephony Infrastructure &amp; Gateways</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
          Enterprise <span className="text-[#dc2626]">GSM, FXS, FXO &amp; PRI Gateways</span>
        </h1>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl mb-5">
          VoIP Gateways act as the essential bridge between modern <strong className="text-slate-900 font-semibold">IP-PBX &amp; Cloud Telephony</strong> systems and traditional telecom networks. Whether you need to connect <strong className="text-slate-900 font-semibold">4G LTE SIM cards (GSM)</strong>, preserve <strong className="text-slate-900 font-semibold">analog handsets &amp; fax machines (FXS)</strong>, or route calls through <strong className="text-slate-900 font-semibold">BSNL/Airtel copper landlines (FXO)</strong> with power-failover lifeline protection, we provide certified hardware, custom dialplan configuration, and end-to-end integration.
        </p>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 border-t border-slate-100">
          <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200/70 rounded-xl p-3">
            <Smartphone className="w-4 h-4 text-[#dc2626] shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-slate-900">4G LTE / VoLTE Gateways</h4>
              <p className="text-[11px] text-slate-500">Cut mobile call rates by up to 70%</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200/70 rounded-xl p-3">
            <PhoneCall className="w-4 h-4 text-blue-600 shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-slate-900">FXS Analog Gateways</h4>
              <p className="text-[11px] text-slate-500">Keep legacy phones, faxes &amp; intercoms</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200/70 rounded-xl p-3">
            <Zap className="w-4 h-4 text-emerald-600 shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-slate-900">FXO PSTN Lifeline</h4>
              <p className="text-[11px] text-slate-500">Zero downtime emergency landlines</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. SUB-CATEGORY FILTER TABS */}
      <div className="flex flex-wrap items-center gap-2 pb-1 border-b border-slate-200/80">
        <button
          type="button"
          onClick={() => setActiveTab('all')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'all'
              ? 'bg-[#dc2626] text-white shadow-2xs'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          All Gateways ({GATEWAY_PRODUCTS.length})
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('gsm')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'gsm'
              ? 'bg-[#dc2626] text-white shadow-2xs'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          📱 GSM / 4G LTE Gateways ({GATEWAY_PRODUCTS.filter(p => p.category === 'gsm').length})
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('fxs')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'fxs'
              ? 'bg-[#dc2626] text-white shadow-2xs'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          ☎️ Analog FXS Gateways ({GATEWAY_PRODUCTS.filter(p => p.category === 'fxs').length})
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('fxo')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'fxo'
              ? 'bg-[#dc2626] text-white shadow-2xs'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          🔌 Analog FXO Gateways ({GATEWAY_PRODUCTS.filter(p => p.category === 'fxo').length})
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('hybrid')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'hybrid'
              ? 'bg-[#dc2626] text-white shadow-2xs'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          ⚡ Hybrid (FXS + FXO) ({GATEWAY_PRODUCTS.filter(p => p.category === 'hybrid').length})
        </button>
      </div>

      {/* 3. PRODUCT CATALOG GRID WITH REAL DINSTAR ASSETS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <article
            key={product.id}
            className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Product Image Container */}
              <div className="relative h-52 bg-slate-50/70 overflow-hidden flex items-center justify-center p-4 border-b border-slate-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to placeholder if external site blocks hotlink
                    (e.target as HTMLImageElement).src = '/assets/ue_hardware_procurement.jpg';
                  }}
                />
                {/* Brand Badge */}
                <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-slate-800 text-[11px] font-bold px-2.5 py-0.5 rounded-md shadow-2xs border border-slate-200/80">
                  Dinstar
                </span>
                {/* Port / Type Badge */}
                <span className={`absolute top-3 right-3 text-[10px] font-bold px-2.5 py-0.5 rounded-full border shadow-2xs ${product.badgeColor}`}>
                  {product.badge}
                </span>
              </div>

              {/* Body Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[11px] font-bold text-[#dc2626] uppercase tracking-wider">
                    {product.categoryLabel}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="text-[11px] font-semibold text-slate-600">
                    {product.ports}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#dc2626] transition-colors mb-2 leading-snug">
                  {product.name}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-3.5 line-clamp-3">
                  {product.description}
                </p>

                {/* Specs Chips */}
                <div className="flex flex-wrap gap-1.5 mb-3.5">
                  {product.specs.slice(0, 3).map((spec, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Ideal For Note */}
                <div className="bg-slate-50 border border-slate-200/70 rounded-lg p-2.5 text-[11px] text-slate-600">
                  <strong className="text-slate-900 font-semibold block mb-0.5">Best For:</strong>
                  {product.idealFor}
                </div>
              </div>
            </div>

            {/* Card Footer Actions */}
            <div className="p-5 pt-0 border-t border-slate-100 mt-3 flex items-center gap-2">
              <button
                onClick={() => onOpenInquiry(`Quote Request: ${product.name} (${product.modelCode})`)}
                className="flex-1 py-2 px-3 rounded-lg bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold transition-colors text-center cursor-pointer"
              >
                Request Quote
              </button>
              <button
                onClick={() => setSelectedProduct(product)}
                className="py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
              >
                Full Specs
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* 4. EXPLANATION: HOW EACH GATEWAY TYPE OPERATES */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="mb-5">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
            How VoIP Gateways Connect Your Enterprise
          </h2>
          <p className="text-xs text-slate-500">
            Compare GSM, FXS, and FXO architectures to select the ideal hardware for your infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1: GSM / 4G Gateways */}
          <div className="bg-slate-50/70 border border-slate-200/80 rounded-xl p-5 flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-xl bg-red-50 text-[#dc2626] flex items-center justify-center font-bold text-xs mb-3">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">GSM / 4G LTE Gateways</h3>
              <p className="text-xs text-[#dc2626] font-semibold mb-2.5">Mobile Network ⇄ SIP IP-PBX</p>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Houses physical SIM cards and converts incoming/outgoing cellular calls into SIP voice streams. Allows agents to dial customer cellphones using inexpensive mobile corporate SIM plans rather than expensive landline tariffs.
              </p>
              <ul className="text-xs space-y-1.5 text-slate-700">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>VoLTE HD Voice clarity</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Bulk SMS &amp; OTP API integration</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Automatic carrier failover</span>
                </li>
              </ul>
            </div>
            <div className="border-t border-slate-200/80 pt-3 mt-4 text-[11px] font-bold text-slate-500">
              Ideal for Outbound Telesales &amp; BPOs
            </div>
          </div>

          {/* Card 2: FXS Gateways */}
          <div className="bg-slate-50/70 border border-slate-200/80 rounded-xl p-5 flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs mb-3">
                <PhoneCall className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">Analog FXS Gateways</h3>
              <p className="text-xs text-blue-700 font-semibold mb-2.5">Analog Phones &amp; Fax ⇄ IP Network</p>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Provides standard RJ11 dial tone and battery voltage to traditional corded phones, cordless DECT handsets, analog fax machines, and elevator intercoms, registering them as SIP extensions on your IP-PBX.
              </p>
              <ul className="text-xs space-y-1.5 text-slate-700">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Zero re-cabling needed for hotels</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>T.38 high-reliability fax relay</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Up to 96 ports in single 1U chassis</span>
                </li>
              </ul>
            </div>
            <div className="border-t border-slate-200/80 pt-3 mt-4 text-[11px] font-bold text-slate-500">
              Ideal for Hotels, Hospitals &amp; Campuses
            </div>
          </div>

          {/* Card 3: FXO Gateways */}
          <div className="bg-slate-50/70 border border-slate-200/80 rounded-xl p-5 flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-xs mb-3">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">Analog FXO Gateways</h3>
              <p className="text-xs text-amber-700 font-semibold mb-2.5">Telco PSTN Copper Lines ⇄ IP-PBX</p>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Connects physical telephone lines from telcos (BSNL, MTNL, Airtel) directly to your VoIP network. Preserves published landline numbers while enabling modern IVR, call recording, and queue features.
              </p>
              <ul className="text-xs space-y-1.5 text-slate-700">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Hardware Power Failover Lifeline</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Caller ID generation &amp; detection</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Disaster recovery if internet fails</span>
                </li>
              </ul>
            </div>
            <div className="border-t border-slate-200/80 pt-3 mt-4 text-[11px] font-bold text-slate-500">
              Ideal for Corporate PSTN Trunking
            </div>
          </div>
        </div>
      </div>

      {/* 5. ENTERPRISE SERVICES OUR COMPANY PROVIDES */}
      <div>
        <div className="mb-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
            Services We Provide For Gateway Infrastructure
          </h2>
          <p className="text-xs text-slate-500">
            End-to-end hardware supply, on-site rackmounting, carrier trunk testing, and SLA maintenance
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white border border-slate-200/90 rounded-xl p-4 shadow-2xs">
            <div className="w-8 h-8 rounded-lg bg-red-50 text-[#dc2626] flex items-center justify-center font-bold text-xs mb-2.5">
              <Cpu className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-bold text-slate-900 mb-1">On-Site Installation</h4>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Rackmount deployment, antenna alignment, RJ21 punch-down, and clean cable labeling.
            </p>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-xl p-4 shadow-2xs">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs mb-2.5">
              <Sliders className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-bold text-slate-900 mb-1">Dialplan &amp; Routing</h4>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              SIP trunk pairing with Asterisk, 3CX, FreePBX, Vicidial, or Cisco CallManager.
            </p>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-xl p-4 shadow-2xs">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs mb-2.5">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-bold text-slate-900 mb-1">Telco Line Auditing</h4>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Impedance testing, polarity check, and loop resistance tuning for zero echo or noise.
            </p>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-xl p-4 shadow-2xs">
            <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-xs mb-2.5">
              <Clock className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-bold text-slate-900 mb-1">24/7 AMC Maintenance</h4>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Rapid standby hardware replacement, remote firmware upgrades, and priority ticket SLAs.
            </p>
          </div>
        </div>
      </div>

      {/* 6. CONSULTATION & QUOTE CTA */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-red-400 block mb-1">
            Need Help Choosing The Right Port Capacity?
          </span>
          <h3 className="text-lg sm:text-xl font-bold tracking-tight mb-2">
            Speak with an Enterprise Telephony Architect
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
            Tell us how many SIM cards, analog extensions, or PSTN landline copper pairs your office operates. We will design the optimal gateway topology with full cost breakdown.
          </p>
        </div>
        <button
          onClick={() => onOpenInquiry('VoIP Gateway Consultation')}
          className="px-6 py-3 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold transition-all shadow-md hover:shadow-lg shrink-0 cursor-pointer flex items-center gap-1.5"
        >
          <span>Request Hardware Quote</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* 7. FULL SPECS MODAL */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-4 pb-3 border-b border-slate-100">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#dc2626] bg-red-50 px-2 py-0.5 rounded-full inline-block mb-1">
                  {selectedProduct.categoryLabel} • {selectedProduct.ports}
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  {selectedProduct.name}
                </h3>
                <p className="text-xs font-mono text-slate-500">
                  Model: {selectedProduct.modelCode}
                </p>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <div className="h-44 rounded-xl overflow-hidden mb-4 bg-slate-50 flex items-center justify-center p-3 border border-slate-100">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="max-h-full max-w-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/ue_hardware_procurement.jpg';
                }}
              />
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Product Overview</h4>
                <p className="text-slate-600 leading-relaxed">
                  {selectedProduct.description}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1.5">Technical Specifications</h4>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/70 space-y-1 font-mono text-[11px] text-slate-800">
                  {selectedProduct.specs.map((s, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-[#dc2626] font-bold">•</span>
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1.5">Enterprise Highlights</h4>
                <div className="space-y-1">
                  {selectedProduct.features.map((f, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
              <button
                onClick={() => {
                  const prod = selectedProduct;
                  setSelectedProduct(null);
                  onOpenInquiry(`Quote Request: ${prod.name}`);
                }}
                className="flex-1 py-2.5 px-4 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold transition-colors cursor-pointer text-center"
              >
                Request Quotation &amp; Availability
              </button>
              <button
                onClick={() => setSelectedProduct(null)}
                className="py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
