import React, { useState } from 'react';
import { 
  PhoneCall, 
  ShieldCheck, 
  Headphones, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Server, 
  Clock, 
  Network, 
  Layers,
  Sparkles,
  Lock,
  Globe,
  CreditCard,
  Building2,
  SlidersHorizontal,
  X,
  Check,
  ChevronRight,
  PhoneForwarded,
  FileText,
  Volume2
} from 'lucide-react';

interface ManagedVoipShowcaseProps {
  onOpenInquiry: (topic: string) => void;
}

interface VoipPlan {
  id: string;
  name: string;
  categoryLabel: string;
  badge: string;
  badgeColor: string;
  priceDisplay: string;
  billingCycle: string;
  scopeSummary: string;
  compactScope: string;
  description: string;
  highlightFeatures: string[];
  shortBullets: string[];
  specs: string[];
  compactSpec: string;
  idealFor: string;
  coveredCountriesSummary: string;
  popular?: boolean;
}

interface VoipSolution {
  id: string;
  name: string;
  badge: string;
  badgeColor: string;
  deliverable: string;
  description: string;
  highlights: string[];
}

const VOIP_PLANS: VoipPlan[] = [
  {
    id: 'unlimited-us-canada',
    name: 'Unlimited US & Canada',
    categoryLabel: 'North America',
    badge: 'Best Value',
    badgeColor: 'bg-red-50 text-[#dc2626] border-red-200',
    priceDisplay: '₹1,500',
    billingCycle: '/ user / mo',
    scopeSummary: 'Unconditionally unlimited calling to USA and Canada (Landline & Mobile)',
    compactScope: 'Unlimited calls to USA & Canada (Mobile + Landline)',
    description: 'Designed for Indian IT exporters, BPOs, and offshore business teams. Includes full cloud PBX features, crystal-clear Opus/G.711 audio, and unlimited calling across all US and Canadian area codes with zero hidden surprise charges.',
    shortBullets: [
      'Unlimited USA & Canada calling',
      'Auto-Attendant IVR & Voicemail',
      'Call Recording & Web CDR portal',
      'WebRTC & Mobile softphone dialer'
    ],
    highlightFeatures: [
      'Unlimited calls to USA & Canada (Landline + Mobile)',
      '3-Way Audio Conferencing & Call Transfer',
      'Voicemail-to-Email with audio file attachments',
      'Virtual Receptionist (Interactive Voice Response - IVR)',
      'Automated Call Recording & Web History Logs',
      'E-FAX capabilities & Custom Welcome Greetings',
      'Free WebRTC Browser Dialer & Mobile Softphones'
    ],
    compactSpec: 'Opus & G.711 HD • TLS/WSS Encrypted',
    specs: [
      'Coverage: USA & Canada (All 50 US States + 10 Canadian Provinces)',
      'Platform: Cloud PBX, WebRTC Browser App & Grandstream/Yealink IP Phones',
      'Signaling & Codecs: TLS/WSS Media Encryption, G.711 & Opus HD Audio'
    ],
    idealFor: 'IT service exporters, offshore consultancies, recruitment agencies, and outbound sales desks managing American & Canadian clientele.',
    coveredCountriesSummary: 'United States (all 50 states, DC, Puerto Rico) and Canada (all 10 provinces & territories).'
  },
  {
    id: 'global-40',
    name: 'Global 40 Plan',
    categoryLabel: 'Global Tier',
    badge: 'Most Popular',
    badgeColor: 'bg-red-50 text-[#dc2626] border-red-200',
    popular: true,
    priceDisplay: '₹2,500',
    billingCycle: '/ user / mo',
    scopeSummary: 'Unconditionally unlimited calling to 40 major international commercial economies',
    compactScope: 'Unlimited calls to 40 top international countries',
    description: 'The preferred choice for growing multinational businesses. Covers 40 top business destinations spanning North America, Europe, United Kingdom, Australia, and APAC hubs with enterprise carrier routing and guaranteed audio clarity.',
    shortBullets: [
      '40 Global Nations (US, UK, CA, AU, SG)',
      'Multi-level IVR & Skill hunt groups',
      'Call recording & Supervisor audit',
      'CRM integration (Zoho, Salesforce)'
    ],
    highlightFeatures: [
      'Unlimited calling to 40 major international countries',
      'Includes US, Canada, UK, Australia, Singapore, Germany & France',
      'Multi-level Auto-Attendant IVR with skill-based routing',
      'Hunt groups, Simultaneous Ring & Call Queuing',
      'Live Supervisor Call Monitoring & Quality Auditing',
      'CRM Screen-Pop & Webhook Integrations (Zoho, Salesforce)',
      'Real-time CDR reporting & itemized usage dashboards'
    ],
    compactSpec: 'Dedicated QoS Backbone • 99.99% SLA',
    specs: [
      'Coverage: 40 Top Global Destinations (Landline & Mobile in key hubs)',
      'SLA: 99.99% Carrier Uptime with sub-20ms packet prioritization',
      'Device Support: Gigabit Desk Phones, Desktop Softphones & Mobile Apps'
    ],
    idealFor: 'Mid-market enterprises, export houses, international sales reps, and global support teams conversing across European and Asia-Pacific markets.',
    coveredCountriesSummary: 'USA, Canada, United Kingdom, Australia, Singapore, Germany, France, Italy, Spain, Netherlands, Switzerland, Ireland, Hong Kong, New Zealand, Japan, Malaysia, and 24 more tier-1 nations.'
  },
  {
    id: 'global-60',
    name: 'Global 60 Plan',
    categoryLabel: 'Worldwide Tier',
    badge: 'Enterprise Flagship',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    priceDisplay: '₹3,500',
    billingCycle: '/ user / mo',
    scopeSummary: 'Unconditionally unlimited calling to 60 premier destinations worldwide',
    compactScope: 'Unlimited calls to 60 premier global destinations',
    description: 'Our most comprehensive global communications plan. Extends unlimited voice reach to 60 nations across Americas, Europe, Middle East, and Asia. Engineered with dual-carrier private backbone routing and dedicated account management.',
    shortBullets: [
      '60 Worldwide Nations (Europe, APAC, ME)',
      'Priority Tier-1 carrier QoS routing',
      'Supervisor Whisper & Live Barge-In',
      'Dedicated telecom account engineer'
    ],
    highlightFeatures: [
      'Unlimited calling across 60 premier worldwide destinations',
      'Priority QoS routing over Tier-1 international carrier backbones',
      'Full Enterprise Cloud PBX suite with unlimited extensions',
      'Supervisor Whisper, Silent Listen & Live Barge-In tools',
      'Advanced Multi-Party Conference Bridge with PIN protection',
      'Dedicated Customer Success & Telecom Account Engineer',
      'Strict 99.99% Carrier SLA with redundant route failover'
    ],
    compactSpec: 'Active-Active Failover • SOC 2 & HIPAA',
    specs: [
      'Coverage: 60 Premier Global Destinations across Europe, APAC, Americas & Middle East',
      'Redundancy: Active-Active Carrier Interconnect with sub-second failover',
      'Security: Fail2ban, IP Whitelisting, SOC 2 Type II & HIPAA certified'
    ],
    idealFor: 'Multinational corporations, large-scale financial institutions, global consulting firms, and 24/7 contact centers managing global enterprise accounts.',
    coveredCountriesSummary: 'All Global 40 countries plus UAE, South Africa, Brazil, Mexico, Poland, Sweden, Norway, Denmark, Belgium, Austria, Portugal, Greece, Thailand, and 7 additional commercial hubs.'
  },
  {
    id: 'pay-per-minute',
    name: 'Pay Per Minute',
    categoryLabel: 'Usage-Based',
    badge: 'Zero Commitment',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    priceDisplay: 'Pay As You Go',
    billingCycle: 'wholesale pulse rates',
    scopeSummary: 'Wholesale per-second & per-minute billing across 200+ countries with zero monthly waste',
    compactScope: 'Pay only for exact seconds/minutes used',
    description: 'Ideal for enterprises with fluctuating or seasonal call traffic. No high monthly per-user commitments, only pay for the exact talk-time consumed at transparent wholesale carrier termination rates across 200+ destinations worldwide.',
    shortBullets: [
      '200+ Worldwide countries & direct CLI',
      'Per-second & per-minute pulse billing',
      'Prepaid/postpaid wallet (Zero lock-in)',
      'Full WebRTC & Direct SIP Trunking'
    ],
    highlightFeatures: [
      'Reach 200+ countries worldwide with premium CLI delivery',
      'Accurate per-second / per-minute pulse billing',
      'Zero monthly user license lock-in or minimum talk-time penalties',
      'Prepaid or postpaid enterprise wallet with auto-recharge alerts',
      'Complete itemized call detail records (CDR) downloadable via portal',
      'SIP Trunk compatibility with existing Asterisk, FreePBX, or Cisco PBX',
      'Full WebRTC webphone & softphone extension access included'
    ],
    compactSpec: 'Real-Time Metering • Itemized CDR Billing',
    specs: [
      'Coverage: 200+ Worldwide Countries and Carrier Networks',
      'Billing Pulse: 1s / 60s pulse metering with real-time balance tracking',
      'Integrations: Direct SIP Trunking or Hosted Cloud PBX extension endpoints'
    ],
    idealFor: 'Startups, seasonal marketing campaigns, companies with variable international call volumes, and enterprises with existing on-premise PBX systems needing reliable termination.',
    coveredCountriesSummary: 'Full A-Z global termination covering 200+ countries with Tier-1 direct CLI routes.'
  }
];

const VOIP_SOLUTIONS: VoipSolution[] = [
  {
    id: 'enterprise-managed-voice',
    name: 'Enterprise Managed Voice Solution',
    badge: 'Flagship Service',
    badgeColor: 'bg-red-50 text-[#dc2626]',
    deliverable: 'Private Cloud Backbone',
    description: "Fully managed enterprise voice solution on a dedicated private carrier network. Dedicated AWS EC2 PBX instance, enterprise IP desk phones, and 24/7 proactive NOC monitoring with zero on-premise PBX Capex.",
    highlights: [
      'Dedicated AWS EC2 PBX instance per enterprise with 99.99% SLA',
      'Bundled enterprise Gigabit IP phones (Grandstream, Yealink, Cisco)',
      'Dual-carrier SIP trunk failover (Airtel, Tata, Jio) with sub-second switch',
      '24/7 proactive NOC QoS monitoring and dialplan management'
    ]
  },
  {
    id: 'ai-call-intelligence',
    name: 'AI Call Intelligence & Voicebot',
    badge: 'AI Telephony',
    badgeColor: 'bg-purple-50 text-purple-700',
    deliverable: 'Conversational Voice AI',
    description: 'Next-generation AI voicebots answering caller queries 24/7 in natural language, live speech-to-text call transcription, and automated sentiment analysis without human agent overhead.',
    highlights: [
      'Conversational AI Voicebot for 24/7 automated FAQ & query resolution',
      'Real-time live call transcription for supervisor QA & compliance',
      'Automated caller sentiment analysis & instant call summary generation',
      'Zero manual typing with automatic CRM disposition & note sync'
    ]
  },
  {
    id: 'toll-free-did',
    name: 'Toll-Free (1800) & Pan-India Virtual DIDs',
    badge: 'Virtual Numbers',
    badgeColor: 'bg-emerald-50 text-emerald-700',
    deliverable: 'All Metro Circles',
    description: 'Nationwide 1800 toll-free sales hotlines and local virtual landline numbers across all major Indian metro telecom circles (011, 022, 080, 044, 040).',
    highlights: [
      'Nationwide 1800 Toll-Free numbers for customer sales & helpline',
      'Virtual city landline DIDs (Delhi, Mumbai, Bengaluru, Chennai, Hyderabad)',
      'Simultaneous call hunting across distributed agent teams',
      'Custom caller ID branding with personalized audio welcome greetings'
    ]
  },
  {
    id: 'enterprise-security-compliance',
    name: 'Carrier Security & Regulatory Compliance',
    badge: 'SOC 2 & HIPAA',
    badgeColor: 'bg-blue-50 text-blue-700',
    deliverable: 'TRAI / DoT Compliant',
    description: 'Bank-grade voice protection engineered into every call layer. Features automated Fail2ban intrusion defense, IP whitelisting, and TLS/WSS media encryption compliant with TRAI, DoT, HIPAA, and SOC 2.',
    highlights: [
      'Advanced Fail2ban intrusion blocking & strict IP whitelisting',
      'WSS (WebSocket Secure) & TLS signaling with SRTP encrypted media',
      'VAPT compliant architecture with Multi-Factor Authentication (MFA)',
      '100% TRAI/DoT regulatory compliance with tamper-proof CDR logs'
    ]
  }
];

export default function ManagedVoipShowcase({ onOpenInquiry }: ManagedVoipShowcaseProps) {
  const [selectedPlanTab, setSelectedPlanTab] = useState<'all' | 'unlimited' | 'pay-per-minute'>('all');
  const [activePlanModal, setActivePlanModal] = useState<VoipPlan | null>(null);

  const filteredPlans = VOIP_PLANS.filter((plan) => {
    if (selectedPlanTab === 'unlimited') {
      return plan.id !== 'pay-per-minute';
    }
    if (selectedPlanTab === 'pay-per-minute') {
      return plan.id === 'pay-per-minute';
    }
    return true;
  });

  return (
    <div className="space-y-10">
      
      {/* 1. VISUAL ENTERPRISE HERO */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs overflow-hidden">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#dc2626] text-xs font-bold uppercase tracking-wider mb-3">
            <PhoneCall className="w-3.5 h-3.5 text-[#dc2626]" />
            <span>Carrier-Grade Cloud Telephony &amp; International Calling</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Enterprise <span className="text-[#dc2626]">Managed VOIP</span> Platform
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 max-w-3xl">
            Powered by dedicated AWS EC2 private PBX instances and carrier-grade voice infrastructure. We deliver 100% TRAI/DoT-compliant business calling, conversational AI voicebots, enterprise IP desk phones, and 24/7 proactive NOC management with zero on-premise PBX hardware Capex.
          </p>

          {/* Quick Value Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200/70 rounded-xl p-3">
              <div className="w-8 h-8 rounded-lg bg-red-50 text-[#dc2626] flex items-center justify-center shrink-0">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">99.99% Voice SLA</h4>
                <p className="text-[10px] text-slate-500">Private carrier backbone</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200/70 rounded-xl p-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Zero Hardware Capex</h4>
                <p className="text-[10px] text-slate-500">Dedicated AWS EC2 core</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200/70 rounded-xl p-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Globe className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Global Termination</h4>
                <p className="text-[10px] text-slate-500">US, Canada &amp; 60+ countries</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200/70 rounded-xl p-3">
              <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                <Headphones className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">24/7 Managed NOC</h4>
                <p className="text-[10px] text-slate-500">Live QoS telemetry</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. TRANSFORMATIVE BUSINESS COMMUNICATIONS WITH OUR ENTERPRISE VOIP PLATFORM */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xs relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-80 h-80 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#dc2626] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#dc2626]" />
            <span>Managed Voice Solutions We Deliver</span>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight mb-4 text-slate-900 leading-tight">
            Transformative Business Communications with Our <span className="text-[#dc2626]">Enterprise VoIP Platform</span>
          </h2>

          <div className="space-y-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-4xl mb-8">
            <p>
              Welcome to the state-of-the-art communication hub by Unified Voice. As one of the most trusted VoIP platform providers for businesses, we deliver a comprehensive solution designed to streamline how your organization connects. We replace outdated, restrictive hardware with an agile cloud phone system.
            </p>
            <p>
              With our platform, companies can rely on an advanced, scalable network tailored to meet the demands of modern enterprises across all industries. From your main headquarters to remote workers, we keep your entire team connected with crystal-clear voice quality.
            </p>
          </div>

          {/* 4 Solution Pillars - Compact & Sleek Design */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-5 border-t border-slate-100">
            <div className="bg-slate-50/90 border border-slate-200/80 rounded-xl p-3 flex items-center gap-3 hover:border-red-200 hover:bg-white transition-all">
              <div className="w-8 h-8 rounded-lg bg-red-50 text-[#dc2626] flex items-center justify-center shrink-0">
                <PhoneCall className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-bold text-slate-900 truncate">Agile Cloud PBX</h4>
                <p className="text-[11px] text-slate-500 truncate">Zero on-premise Capex</p>
              </div>
            </div>

            <div className="bg-slate-50/90 border border-slate-200/80 rounded-xl p-3 flex items-center gap-3 hover:border-blue-200 hover:bg-white transition-all">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Volume2 className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-bold text-slate-900 truncate">Crystal HD Audio</h4>
                <p className="text-[11px] text-slate-500 truncate">Opus &amp; G.711 low jitter</p>
              </div>
            </div>

            <div className="bg-slate-50/90 border border-slate-200/80 rounded-xl p-3 flex items-center gap-3 hover:border-emerald-200 hover:bg-white transition-all">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Building2 className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-bold text-slate-900 truncate">Remote &amp; In-Office</h4>
                <p className="text-[11px] text-slate-500 truncate">Unified extension dialplan</p>
              </div>
            </div>

            <div className="bg-slate-50/90 border border-slate-200/80 rounded-xl p-3 flex items-center gap-3 hover:border-purple-200 hover:bg-white transition-all">
              <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                <Network className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-bold text-slate-900 truncate">Scalable Network</h4>
                <p className="text-[11px] text-slate-500 truncate">5 to 10,000+ seats SLA</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. ENTERPRISE VOIP CALLING PLANS (THE 4 PLANS) */}
      <div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-50 text-[#dc2626] border border-red-200 text-[11px] font-bold uppercase tracking-wider mb-2">
              <Globe className="w-3.5 h-3.5" />
              <span>International &amp; Enterprise Calling Tiers</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Enterprise VoIP Calling Plans
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Unconditional unlimited international packages and usage-based routes engineered by Unified Voice
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl self-start md:self-auto">
            <button
              onClick={() => setSelectedPlanTab('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedPlanTab === 'all'
                  ? 'bg-white text-slate-900 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Plans ({VOIP_PLANS.length})
            </button>
            <button
              onClick={() => setSelectedPlanTab('unlimited')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedPlanTab === 'unlimited'
                  ? 'bg-white text-slate-900 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Unlimited Tiers (3)
            </button>
            <button
              onClick={() => setSelectedPlanTab('pay-per-minute')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedPlanTab === 'pay-per-minute'
                  ? 'bg-white text-slate-900 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Pay As You Go (1)
            </button>
          </div>
        </div>

        {/* 4 Cards Grid - Compact, Sleek & Well-Proportioned */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredPlans.map((plan) => (
            <article
              key={plan.id}
              className={`bg-white rounded-xl border transition-all duration-300 flex flex-col justify-between overflow-hidden group ${
                plan.popular 
                  ? 'border-red-400 shadow-md ring-1 ring-red-200' 
                  : 'border-slate-200/90 shadow-2xs hover:shadow-xs'
              }`}
            >
              <div>
                {/* Header Container with Badges */}
                <div className="bg-slate-50/70 px-4 py-2.5 border-b border-slate-100 flex items-center justify-between gap-2">
                  <span className="text-[11px] font-semibold text-slate-700 bg-white px-2 py-0.5 rounded-md border border-slate-200">
                    {plan.categoryLabel}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${plan.badgeColor}`}>
                    {plan.badge}
                  </span>
                </div>

                {/* Plan Pricing & Title */}
                <div className="p-4 pb-2">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      {plan.name}
                    </h3>
                    <p className="text-[11px] font-semibold text-[#dc2626] line-clamp-1 mt-0.5 mb-2">
                      {plan.compactScope}
                    </p>
                    <div className="flex items-baseline gap-1 pt-1.5 border-t border-slate-100">
                      <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                        {plan.priceDisplay}
                      </span>
                      <span className="text-[11px] font-medium text-slate-500">
                        {plan.billingCycle}
                      </span>
                    </div>
                  </div>

                  {/* Feature Checkmark List */}
                  <div className="space-y-1.5 mt-3 pt-3 border-t border-slate-100">
                    {plan.shortBullets.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-700">
                        <Check className="w-3.5 h-3.5 text-[#dc2626] shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Compact Spec Chip */}
                  <div className="mt-3 pt-2.5 border-t border-slate-100">
                    <span className="text-[10px] text-slate-600 bg-slate-50 px-2 py-1 rounded-md block text-center truncate border border-slate-200/60">
                      {plan.compactSpec}
                    </span>
                  </div>
                </div>
              </div>

              {/* Footer Buttons */}
              <div className="p-3.5 pt-0 mt-1 flex items-center gap-2">
                <button
                  onClick={() => onOpenInquiry(`VoIP Plan Quote: ${plan.name} (${plan.priceDisplay} ${plan.billingCycle})`)}
                  className="flex-1 py-2 px-2.5 rounded-lg bg-[#dc2626] hover:bg-[#b91c1c] text-white text-[11px] font-bold transition-all text-center cursor-pointer shadow-xs active:scale-[0.99]"
                >
                  Get Quote
                </button>
                <button
                  onClick={() => setActivePlanModal(plan)}
                  className="py-2 px-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-semibold transition-all cursor-pointer active:scale-[0.99]"
                >
                  Plan Details
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* 4. CORE MANAGED VOICE SOLUTIONS (CLEAN 2x2 GRID) */}
      <div>
        <div className="mb-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
            Infrastructure &amp; Compliance Capabilities
          </h2>
          <p className="text-xs text-slate-500">
            End-to-end cloud voice infrastructure tailored for SMBs, corporate branches, and high-volume contact centers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {VOIP_SOLUTIONS.map((solution) => (
            <div
              key={solution.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-2.5">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${solution.badgeColor}`}>
                    {solution.badge}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500">
                    {solution.deliverable}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
                  {solution.name}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {solution.description}
                </p>

                <div className="space-y-2 mb-4 text-xs text-slate-700 border-t border-slate-100 pt-3">
                  {solution.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-end">
                <button
                  onClick={() => onOpenInquiry(`Managed VOIP Inquiry: ${solution.name}`)}
                  className="px-4 py-2 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  Get Solution Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. STEP-BY-STEP IMPLEMENTATION PROCESS */}
      <div>
        <div className="mb-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
            Our 4-Step Implementation Process
          </h2>
          <p className="text-xs text-slate-500">
            How our engineering team transitions your office to Managed VoIP with zero communication downtime
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold text-[#dc2626] uppercase tracking-wider">
                  Step 01
                </span>
                <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                  Day 1: Discovery
                </span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-2">
                Architecture &amp; Call Audit
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We review your concurrent call volume, extension count, IVR scripts, and internet bandwidth QoS.
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">
                  Step 02
                </span>
                <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                  Day 2: Provisioning
                </span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-2">
                Dedicated AWS Cloud PBX
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dedicated AWS EC2 tenant provisioning with SQL database, admin portal, and dual SIP trunk interconnect.
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider">
                  Step 03
                </span>
                <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                  Day 3: Deployment
                </span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-2">
                IP Phones &amp; WebRTC Setup
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Plug-and-play Grandstream/Yealink IP phones, browser WebRTC dialers, and iOS/Android UVC softphones.
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold text-purple-600 uppercase tracking-wider">
                  Step 04
                </span>
                <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                  Day 4+: Live NOC
                </span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-2">
                Carrier Interconnect &amp; NOC
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Carrier trunk interconnect (Airtel, Tata, Jio) with sub-second failover and 24/7 proactive voice QoS monitoring.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 6. WHY CHOOSE OUR MANAGED VOIP */}
      <div>
        <div className="mb-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
            Why Companies Choose Our Managed VoIP
          </h2>
          <p className="text-xs text-slate-500">
            Enterprise reliability and carrier-class features without the burden of on-premise telecom hardware
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-2xs hover:shadow-xs transition-all">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-[#dc2626] flex items-center justify-center mb-3.5 font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1.5">
              Zero Hardware Capex
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              No on-premise PBX servers or expansion cards to purchase. Scale extensions up or down on demand with predictable monthly pricing.
            </p>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-2xs hover:shadow-xs transition-all">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3.5 font-bold">
              <Network className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1.5">
              Carrier-Class Private Voice Backbone
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Managed voice on a dedicated private carrier network with sub-15ms latency, TLS/WSS encryption, and 100% TRAI/DoT compliance.
            </p>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-2xs hover:shadow-xs transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3.5 font-bold">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1.5">
              Crystal Audio &amp; 99.99% SLA
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Voice traffic routed over dedicated carrier private backbones with strict QoS prioritization, eliminating dropped or choppy audio.
            </p>
          </div>
        </div>
      </div>

      {/* 7. CONSULTATION & LIVE DEMO CTA */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-red-400 block mb-1">
            Free Architecture Consultation &amp; Live Demo
          </span>
          <h3 className="text-lg sm:text-xl font-bold tracking-tight mb-2">
            Experience Our Managed Voice Platform First-Hand
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
            Schedule a live demo to test our Cloud PBX, smart IVR flows, softphone apps, and international calling routes. We will provide a complete telecom cost reduction analysis.
          </p>
        </div>
        <button
          onClick={() => onOpenInquiry('Managed VOIP Consultation & Live Demo')}
          className="px-6 py-3 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold transition-all shadow-md hover:shadow-lg shrink-0 cursor-pointer flex items-center gap-1.5"
        >
          <span>Schedule Live Demo</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* 8. INTERACTIVE PLAN DETAILS MODAL */}
      {activePlanModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setActivePlanModal(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-7 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 mb-4 pb-4 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#dc2626] bg-red-50 px-2 py-0.5 rounded-full">
                    {activePlanModal.categoryLabel}
                  </span>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${activePlanModal.badgeColor}`}>
                    {activePlanModal.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {activePlanModal.name}
                </h3>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-lg font-black text-slate-900">
                    {activePlanModal.priceDisplay}
                  </span>
                  <span className="text-xs text-slate-500">
                    {activePlanModal.billingCycle}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setActivePlanModal(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors text-sm font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="space-y-4 text-xs">
              <div>
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-1.5">
                  Plan Overview
                </h4>
                <p className="text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                  {activePlanModal.description}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-1.5">
                  Covered Destinations &amp; Calling Scope
                </h4>
                <div className="bg-red-50/60 border border-red-100 rounded-xl p-3 text-slate-700">
                  <p className="font-medium text-[#dc2626] mb-1">
                    {activePlanModal.scopeSummary}
                  </p>
                  <p className="text-slate-600">
                    {activePlanModal.coveredCountriesSummary}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-2">
                  All Included Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activePlanModal.highlightFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-slate-50 p-2 rounded-lg border border-slate-100">
                      <Check className="w-3.5 h-3.5 text-[#dc2626] shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-1.5">
                  Technical Specifications
                </h4>
                <ul className="space-y-1 text-slate-600 list-disc list-inside">
                  {activePlanModal.specs.map((spec, idx) => (
                    <li key={idx}>{spec}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 text-slate-700">
                <strong className="text-slate-900 font-bold block mb-0.5">Recommended For:</strong>
                {activePlanModal.idealFor}
              </div>
            </div>

            {/* Modal Action Buttons */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
              <button
                onClick={() => {
                  const plan = activePlanModal;
                  setActivePlanModal(null);
                  onOpenInquiry(`VoIP Plan Subscription: ${plan.name} (${plan.priceDisplay} ${plan.billingCycle})`);
                }}
                className="flex-1 py-3 px-4 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold transition-all text-center cursor-pointer shadow-md"
              >
                Request Plan Quote &amp; Demo
              </button>
              <button
                onClick={() => setActivePlanModal(null)}
                className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-all cursor-pointer"
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
