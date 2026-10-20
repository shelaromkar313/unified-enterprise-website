import React from 'react';
import { 
  PhoneCall, 
  Server, 
  Cpu, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Radio, 
  Headphones, 
  ShieldCheck, 
  Users, 
  Zap, 
  Smartphone, 
  Clock, 
  Settings, 
  Network
} from 'lucide-react';

interface PbxTelephonyShowcaseProps {
  onOpenInquiry: (topic: string) => void;
}

export default function PbxTelephonyShowcase({ onOpenInquiry }: PbxTelephonyShowcaseProps) {
  return (
    <div className="space-y-8">
      
      {/* 1. CLEAN HERO INTRO (MINIMALIST & SCANNABLE) */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-50 border border-red-200 text-[#dc2626] text-[11px] font-bold uppercase tracking-wider mb-3">
          <Radio className="w-3 h-3 text-[#dc2626]" />
          <span>Enterprise Telephony</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
          What is <span className="text-[#dc2626]">PBX &amp; Business Telephony</span>?
        </h1>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl mb-5">
          A <strong className="text-slate-900 font-semibold">Private Branch Exchange (PBX)</strong> is your company's private telephone system. It allows all employees to call each other internally for <strong className="text-slate-900 font-semibold">100% free</strong> via 3-digit extensions (e.g., Ext 101, 102), while sharing external telecom lines for incoming and outgoing customer calls with automated voice menus (IVR).
        </p>

        {/* 3 Quick Value Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 border-t border-slate-100">
          <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200/70 rounded-xl p-3">
            <PhoneCall className="w-4 h-4 text-[#dc2626] shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-slate-900">Free Extension Calling</h4>
              <p className="text-[11px] text-slate-500">Zero cost between desks &amp; branches</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200/70 rounded-xl p-3">
            <Users className="w-4 h-4 text-blue-600 shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-slate-900">Smart IVR Attendant</h4>
              <p className="text-[11px] text-slate-500">"Press 1 for Sales, 2 for Support"</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200/70 rounded-xl p-3">
            <Smartphone className="w-4 h-4 text-emerald-600 shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-slate-900">Work Anywhere Softphones</h4>
              <p className="text-[11px] text-slate-500">Office extension on iPhone/Android</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. CORE PBX PLATFORMS OUR COMPANY PROVIDES (ASTERISK, FREESWITCH, 3CX) */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
              PBX Platforms We Provide &amp; Support
            </h2>
            <p className="text-xs text-slate-500">
              Tailored on-premise appliances and cloud telephony engines deployed by our certified engineers
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Platform 1: Asterisk PBX */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-xl bg-red-50 text-[#dc2626] flex items-center justify-center">
                  <Server className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-[#dc2626] bg-red-50 px-2 py-0.5 rounded-full border border-red-200/60">
                  Open-Source Leader
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 mb-1">Asterisk PBX</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                The world's most flexible telephony engine. We build custom dialplans, IVR menus, and call queue routing with <strong className="text-slate-800">zero per-seat licensing fees</strong>.
              </p>

              <div className="space-y-1.5 border-t border-slate-100 pt-3 mb-4 text-xs text-slate-700">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Custom IVR &amp; call flow logic</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Unlimited extensions, zero user license fees</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>FreePBX &amp; custom database integration</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenInquiry('Asterisk PBX Deployment')}
              className="w-full py-2 px-3 rounded-xl bg-slate-50 hover:bg-[#dc2626] text-slate-800 hover:text-white border border-slate-200 hover:border-[#dc2626] text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer"
            >
              <span>Deploy Asterisk</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Platform 2: FreeSWITCH PBX */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Cpu className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200/60">
                  Carrier-Grade Scale
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 mb-1">FreeSWITCH PBX</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                High-performance software switch engineered for massive call concurrency, ultra-low latency audio, and native browser WebRTC voice communications.
              </p>

              <div className="space-y-1.5 border-t border-slate-100 pt-3 mb-4 text-xs text-slate-700">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Handles 1,000+ simultaneous calls easily</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Sub-second WebRTC browser calling</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Multi-tenant architecture for branch networks</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenInquiry('FreeSWITCH PBX Deployment')}
              className="w-full py-2 px-3 rounded-xl bg-slate-50 hover:bg-blue-600 text-slate-800 hover:text-white border border-slate-200 hover:border-blue-600 text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer"
            >
              <span>Deploy FreeSWITCH</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Platform 3: 3CX Phone System */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-200/60">
                  Turnkey Unified Comms
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 mb-1">3CX Phone System</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Complete all-in-one communications software. Connects office desk phones, mobile softphones, website Live Chat, and WhatsApp in one simple app.
              </p>

              <div className="space-y-1.5 border-t border-slate-100 pt-3 mb-4 text-xs text-slate-700">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Instant iOS &amp; Android QR-code mobile apps</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Integrated Website Live Chat &amp; WhatsApp</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Native Microsoft 365 &amp; Zoho CRM sync</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenInquiry('3CX Phone System Setup')}
              className="w-full py-2 px-3 rounded-xl bg-slate-50 hover:bg-purple-600 text-slate-800 hover:text-white border border-slate-200 hover:border-purple-600 text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer"
            >
              <span>Deploy 3CX</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* 3. KEY FEATURES (CLEAN 6-CARD GRID) */}
      <div>
        <div className="mb-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
            Key Telephony Features Included
          </h2>
          <p className="text-xs text-slate-500">
            Essential tools for professional call handling and supervisory control
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5">
          <div className="bg-white border border-slate-200/80 rounded-xl p-3.5 shadow-2xs">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-6 h-6 rounded-md bg-red-50 text-[#dc2626] flex items-center justify-center font-bold text-[11px]">01</span>
              <h4 className="text-xs font-bold text-slate-900">Multi-Level Smart IVR</h4>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Automated voice receptionist routing callers directly to Sales, Support, or Billing.
            </p>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-xl p-3.5 shadow-2xs">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-6 h-6 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-[11px]">02</span>
              <h4 className="text-xs font-bold text-slate-900">Call Queues &amp; ACD</h4>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Distribute calls across agent teams by round-robin, longest idle, or priority.
            </p>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-xl p-3.5 shadow-2xs">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-6 h-6 rounded-md bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-[11px]">03</span>
              <h4 className="text-xs font-bold text-slate-900">100% Call Recording</h4>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Encrypted stereo audio recording with instant playback for quality and compliance.
            </p>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-xl p-3.5 shadow-2xs">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-6 h-6 rounded-md bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-[11px]">04</span>
              <h4 className="text-xs font-bold text-slate-900">Live Listen &amp; Whisper</h4>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Supervisors can silently listen to live calls or whisper advice secretly to the agent.
            </p>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-xl p-3.5 shadow-2xs">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-6 h-6 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-[11px]">05</span>
              <h4 className="text-xs font-bold text-slate-900">Voicemail-to-Email</h4>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Missed voicemails are converted to audio files and emailed directly to agent inboxes.
            </p>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-xl p-3.5 shadow-2xs">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-6 h-6 rounded-md bg-sky-50 text-sky-600 flex items-center justify-center font-bold text-[11px]">06</span>
              <h4 className="text-xs font-bold text-slate-900">CRM CTI Screen-Pop</h4>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Incoming calls pop up client history automatically in Zoho, Salesforce, or LeadSquared.
            </p>
          </div>
        </div>
      </div>

      {/* 4. SERVICES MY COMPANY PROVIDES (CLEAN 4 STEPS) */}
      <div className="bg-slate-50/80 border border-slate-200/90 rounded-2xl p-6">
        <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
          Services My Company Provides (End-to-End Delivery)
        </h2>
        <p className="text-xs text-slate-500 mb-4">
          We handle complete implementation so you don't need in-house telecom specialists:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          <div className="bg-white rounded-xl p-3.5 border border-slate-200/70">
            <div className="w-7 h-7 rounded-lg bg-red-100 text-[#dc2626] flex items-center justify-center mb-2">
              <Settings className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-bold text-slate-900 mb-1">1. PBX Installation</h4>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Full server setup of Asterisk, FreeSWITCH, or 3CX with custom IVR dialplans.
            </p>
          </div>

          <div className="bg-white rounded-xl p-3.5 border border-slate-200/70">
            <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-2">
              <Network className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-bold text-slate-900 mb-1">2. SIP Trunk Setup</h4>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              We coordinate with Airtel, Jio, and Tata to connect your SIP trunks and PRI gateways.
            </p>
          </div>

          <div className="bg-white rounded-xl p-3.5 border border-slate-200/70">
            <div className="w-7 h-7 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mb-2">
              <Zap className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-bold text-slate-900 mb-1">3. CRM Integration</h4>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              One-click CTI integration for screen-pops and click-to-dial in your CRM software.
            </p>
          </div>

          <div className="bg-white rounded-xl p-3.5 border border-slate-200/70">
            <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center mb-2">
              <Clock className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-bold text-slate-900 mb-1">4. 24/7 AMC Support</h4>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Guaranteed SLA with dedicated VoIP engineers for dialplan changes and rapid dispatch.
            </p>
          </div>
        </div>
      </div>

      {/* 5. CLEAN CONSULTATION CALLOUT */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-5">
        <div>
          <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider block mb-1">
            Expert Sizing &amp; Consultation
          </span>
          <h3 className="text-lg font-bold text-white">
            Need a custom PBX architecture for your business?
          </h3>
          <p className="text-xs text-slate-300 mt-1 max-w-xl">
            Our certified Asterisk, FreeSWITCH, and 3CX engineers calculate exact extension capacity, trunk concurrency, and hardware specs for your team.
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto">
          <button
            onClick={() => onOpenInquiry('PBX Architecture Sizing & Official Quote')}
            className="flex-1 sm:flex-initial py-2.5 px-4 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold transition-all shadow-md active:scale-98 cursor-pointer flex items-center justify-center gap-1.5"
          >
            <span>Request Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => onOpenInquiry('PBX Live Demo: Asterisk, FreeSWITCH & 3CX')}
            className="flex-1 sm:flex-initial py-2.5 px-4 rounded-xl bg-slate-700 hover:bg-slate-600 text-white text-xs font-semibold transition-colors cursor-pointer"
          >
            Live Demo
          </button>
        </div>
      </div>

    </div>
  );
}
