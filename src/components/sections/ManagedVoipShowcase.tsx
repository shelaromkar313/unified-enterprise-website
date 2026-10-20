import React from 'react';
import { 
  PhoneCall, 
  ShieldCheck, 
  Headphones, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Smartphone,
  Server, 
  Clock, 
  Network, 
  Layers
} from 'lucide-react';

interface ManagedVoipShowcaseProps {
  onOpenInquiry: (topic: string) => void;
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

const VOIP_SOLUTIONS: VoipSolution[] = [
  {
    id: 'cloud-pbx',
    name: 'Cloud IP-PBX & Auto-Attendant',
    badge: 'Cloud PBX',
    badgeColor: 'bg-red-50 text-[#dc2626]',
    deliverable: 'Zero Server Capex',
    description: 'Fully hosted business phone system with smart multi-level IVRs, department call routing, and inter-branch extension dialing.',
    highlights: [
      'Multi-level IVR greeting & time-of-day call routing',
      'Free inter-branch extension calling nationwide',
      'Voicemail-to-email & automatic call recording',
      'Web-based portal for instant extension provisioning'
    ]
  },
  {
    id: 'sip-trunking',
    name: 'Enterprise SIP Trunking',
    badge: 'SIP Trunking',
    badgeColor: 'bg-blue-50 text-blue-700',
    deliverable: '10 to 500+ Channels',
    description: 'Direct carrier-grade voice trunking for existing IP-PBX and contact centers with automatic failover redundancy.',
    highlights: [
      'Flexible concurrent call channels on demand',
      'Disaster recovery auto-rerouting to backup lines',
      'Compatible with Asterisk, FreePBX, 3CX & Cisco',
      'Encrypted voice signaling with TLS & SRTP security'
    ]
  },
  {
    id: 'toll-free-did',
    name: 'Toll-Free (1800) & Virtual DIDs',
    badge: 'Virtual Numbers',
    badgeColor: 'bg-emerald-50 text-emerald-700',
    deliverable: 'Pan-India Circles',
    description: 'Nationwide 1800 toll-free hotlines and local virtual landline numbers across all major Indian metro telecom circles.',
    highlights: [
      'Nationwide 1800 Toll-Free numbers for customer sales',
      'Virtual city landline DIDs (011, 022, 080, 044, 040)',
      'Simultaneous call hunting across agent queues',
      'Custom caller ID branding with audio greetings'
    ]
  },
  {
    id: 'mobile-crm',
    name: 'Work-From-Anywhere & CRM CTI',
    badge: 'Mobile & CTI',
    badgeColor: 'bg-purple-50 text-purple-700',
    deliverable: 'iOS, Android & PC',
    description: 'Carry office extensions on smartphones and laptops with 1-click dialing directly inside your CRM software.',
    highlights: [
      'Softphone apps for iOS, Android & desktop PCs',
      '1-Click click-to-dial & incoming customer screen popups',
      'Supervisor monitoring: live listen, whisper & barge-in',
      'Secure centralized cloud call recording with instant search'
    ]
  }
];

export default function ManagedVoipShowcase({ onOpenInquiry }: ManagedVoipShowcaseProps) {
  return (
    <div className="space-y-8">
      
      {/* 1. CLEAN HERO INTRO */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-50 border border-red-200 text-[#dc2626] text-[11px] font-bold uppercase tracking-wider mb-3">
          <PhoneCall className="w-3 h-3 text-[#dc2626]" />
          <span>Carrier-Grade Cloud Telephony</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
          Enterprise <span className="text-[#dc2626]">Managed VOIP &amp; Cloud Telephony</span>
        </h1>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl mb-5">
          Fully hosted enterprise voice infrastructure powered by dedicated private cloud PBX and carrier SIP trunking. Eliminate on-premise hardware with <strong className="text-slate-900 font-semibold">100% TRAI/DoT-compliant business calling</strong>, smart IVR menus, toll-free numbers, and 24/7 managed voice operations with zero jitter.
        </p>

        {/* 3 Quick Value Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 border-t border-slate-100">
          <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200/70 rounded-xl p-3">
            <Zap className="w-4 h-4 text-[#dc2626] shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-slate-900">99.99% Voice Uptime SLA</h4>
              <p className="text-[11px] text-slate-500">Private carrier-class voice backbone</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200/70 rounded-xl p-3">
            <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-slate-900">Save Up To 60% On Calling</h4>
              <p className="text-[11px] text-slate-500">Zero per-extension hardware Capex</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200/70 rounded-xl p-3">
            <Headphones className="w-4 h-4 text-emerald-600 shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-slate-900">24/7 Managed NOC Support</h4>
              <p className="text-[11px] text-slate-500">Dedicated voice QoS monitoring</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. CORE MANAGED VOICE SOLUTIONS (CLEAN 2x2 GRID) */}
      <div>
        <div className="mb-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
            Managed Voice Solutions We Deliver
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

      {/* 3. STEP-BY-STEP IMPLEMENTATION PROCESS */}
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
          {/* Step 1 */}
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

          {/* Step 2 */}
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
                Cloud PBX Configuration
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dedicated tenant setup with custom IVR voice menus, ring groups, and secure SIP trunk routing.
              </p>
            </div>
          </div>

          {/* Step 3 */}
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
                Hardware &amp; App Rollout
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Delivery of pre-configured IP phones, softphone apps for hybrid staff, and CRM click-to-call setup.
              </p>
            </div>
          </div>

          {/* Step 4 */}
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
                Go-Live &amp; 24/7 Monitoring
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Seamless number porting with zero communication downtime, backed by 24/7 proactive voice QoS monitoring.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. WHY CHOOSE OUR MANAGED VOIP */}
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
          {/* Card 1 */}
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

          {/* Card 2 */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-2xs hover:shadow-xs transition-all">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3.5 font-bold">
              <Smartphone className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1.5">
              Work From Anywhere
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Your business landline rings on desk phones, laptops, and mobile apps simultaneously, ensuring your team never misses customer calls.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-2xs hover:shadow-xs transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3.5 font-bold">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1.5">
              Crystal Audio &amp; Zero Jitter
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Voice traffic routed over dedicated carrier private backbones with strict QoS prioritization, eliminating dropped or choppy audio.
            </p>
          </div>
        </div>
      </div>

      {/* 5. CONSULTATION & LIVE DEMO CTA */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-red-400 block mb-1">
            Free Architecture Consultation &amp; Live Demo
          </span>
          <h3 className="text-lg sm:text-xl font-bold tracking-tight mb-2">
            Experience Our Managed Voice Platform First-Hand
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
            Schedule a live demo to test our Cloud PBX, smart IVR flows, softphone apps, and CRM click-to-call integration. We will provide a complete telecom cost reduction analysis.
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

    </div>
  );
}
