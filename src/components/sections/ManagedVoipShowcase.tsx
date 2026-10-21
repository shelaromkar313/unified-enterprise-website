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
  Layers,
  Sparkles,
  Lock,
  Cpu
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
  return (
    <div className="space-y-8">
      
      {/* 1. VISUAL ENTERPRISE HERO */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs overflow-hidden">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-50 border border-red-200 text-[#dc2626] text-[11px] font-bold uppercase tracking-wider mb-3">
            <PhoneCall className="w-3 h-3 text-[#dc2626]" />
            <span>Carrier-Grade Cloud Telephony</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2.5">
            Enterprise <span className="text-[#dc2626]">Managed VOIP</span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 max-w-3xl">
            Powered by dedicated AWS EC2 private PBX instances and carrier-grade voice infrastructure. We deliver 100% TRAI/DoT-compliant business calling, conversational AI voicebots, enterprise IP desk phones, and 24/7 proactive NOC management with zero on-premise PBX hardware Capex.
          </p>

          {/* 3 Quick Value Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/70 rounded-xl p-3">
              <div className="w-7 h-7 rounded-lg bg-red-50 text-[#dc2626] flex items-center justify-center shrink-0">
                <Zap className="w-3.5 h-3.5" />
              </div>
              <div>
                <h4 className="text-[11px] font-bold text-slate-900">99.99% Voice SLA</h4>
                <p className="text-[10px] text-slate-500">Private carrier backbone</p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/70 rounded-xl p-3">
              <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
              <div>
                <h4 className="text-[11px] font-bold text-slate-900">Zero Hardware Capex</h4>
                <p className="text-[10px] text-slate-500">Dedicated AWS EC2 core</p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/70 rounded-xl p-3">
              <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Headphones className="w-3.5 h-3.5" />
              </div>
              <div>
                <h4 className="text-[11px] font-bold text-slate-900">24/7 Managed NOC</h4>
                <p className="text-[10px] text-slate-500">Live QoS monitoring</p>
              </div>
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
                Dedicated AWS Cloud PBX
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dedicated AWS EC2 tenant provisioning with SQL database, admin portal, and dual SIP trunk interconnect.
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
                IP Phones &amp; WebRTC Setup
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Plug-and-play Grandstream/Yealink IP phones, browser WebRTC dialers, and iOS/Android UVC softphones.
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
                Carrier Interconnect &amp; NOC
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Carrier trunk interconnect (Airtel, Tata, Jio) with sub-second failover and 24/7 proactive voice QoS monitoring.
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
              <Network className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1.5">
              Carrier-Class Private Voice Backbone
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Managed voice on a dedicated private carrier network with sub-15ms latency, TLS/WSS encryption, and 100% TRAI/DoT compliance.
            </p>
          </div>

          {/* Card 3 */}
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
