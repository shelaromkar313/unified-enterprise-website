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
      
      {/* 1. VISUAL ENTERPRISE HERO (SPLIT LAYOUT WITH REAL TELECOM IMAGERY) */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Content & Benefits */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-50 border border-red-200 text-[#dc2626] text-[11px] font-bold uppercase tracking-wider mb-3">
              <Radio className="w-3 h-3 text-[#dc2626]" />
              <span>Enterprise VoIP &amp; Cloud PBX</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2.5">
              What is <span className="text-[#dc2626]">PBX &amp; Business Telephony</span>?
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
              A <strong className="text-slate-900 font-semibold">Private Branch Exchange (PBX)</strong> is your company's private voice network. It connects all employee desks and mobile devices internally for <strong className="text-slate-900 font-semibold">100% free extension calls</strong> (e.g., Ext 101, 102), while intelligently routing customer calls through automated multi-level IVRs, AI voicebots, and carrier SIP trunks.
            </p>

            {/* 3 Quick Value Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 border-t border-slate-100">
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/70 rounded-xl p-2.5">
                <div className="w-7 h-7 rounded-lg bg-red-50 text-[#dc2626] flex items-center justify-center shrink-0">
                  <PhoneCall className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-slate-900">Zero-Cost Calling</h4>
                  <p className="text-[10px] text-slate-500">Free desk-to-desk intercom</p>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/70 rounded-xl p-2.5">
                <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Users className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-slate-900">Multi-Level IVR</h4>
                  <p className="text-[10px] text-slate-500">"Press 1 for Sales, 2 Support"</p>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/70 rounded-xl p-2.5">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Smartphone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-slate-900">Mobile Softphone</h4>
                  <p className="text-[10px] text-slate-500">iOS &amp; Android office extensions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-End Hardware & Telephony Image with Audio Quality SLA */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 group">
              <img
                src="/assets/telecom_ip_phones.jpg"
                alt="Enterprise PBX and Business IP Telephony Infrastructure"
                className="w-full h-64 sm:h-72 object-cover group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent" />

              {/* Carrier-Grade Engine & Audio SLA Pill */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 bg-slate-900/90 backdrop-blur-md p-3 rounded-xl border border-white/10 text-white flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-xs font-bold text-white">Carrier-Grade UVC Engine</span>
                  </div>
                  <p className="text-[10px] text-slate-300">HD Wideband Opus Audio • Sub-Second WebRTC</p>
                </div>
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                  99.999% SLA
                </span>
              </div>
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

      {/* 3. ENTERPRISE INFRASTRUCTURE & AGENT WORKSTATION SHOWCASE (VISUAL DUAL CARDS) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        
        {/* Card A: Cloud Datacenter & Dedicated PBX Infrastructure */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#dc2626] flex items-center justify-center font-bold">
                <Server className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold text-[#dc2626] bg-red-50 border border-red-100 px-3 py-1 rounded-full uppercase tracking-wider">
                Cloud &amp; On-Premise Core
              </span>
            </div>

            <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider block mb-1">
              Reliable Backbone
            </span>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Carrier-Grade PBX Infrastructure
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Deploy on dedicated 1U/2U on-premise appliances or high-speed AWS cloud clusters with direct SIP trunk peering to <strong className="text-slate-800">Airtel, Tata, and Jio</strong>.
            </p>

            <div className="space-y-2.5 border-t border-slate-100 pt-4 mb-5 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#dc2626] shrink-0" />
                <span>Direct Indian carrier SIP trunk peering (VoIP / PRI)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#dc2626] shrink-0" />
                <span>High-availability failover with 99.999% guaranteed SLA</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#dc2626] shrink-0" />
                <span>Built-in SBC with TLS/SRTP voice encryption</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => onOpenInquiry('PBX Infrastructure & SIP Trunk Peering')}
            className="w-full py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-slate-900 text-slate-800 hover:text-white border border-slate-200 hover:border-slate-900 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>Consult Infrastructure Specs</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {/* Card B: Omnichannel Agent Workstation & Mobility */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                <Headphones className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full uppercase tracking-wider">
                Frontline &amp; Remote Staff
              </span>
            </div>

            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider block mb-1">
              Workplace Ergonomics
            </span>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Omnichannel Headsets &amp; Softphones
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Empower your customer support agents and sales teams with crystal-clear wideband Opus audio, browser-based WebRTC dialing, and instant extension roaming.
            </p>

            <div className="space-y-2.5 border-t border-slate-100 pt-4 mb-5 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Sub-second browser WebRTC &amp; noise-canceling headsets</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>iOS &amp; Android office extensions with push notifications</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Real-time whisper coaching &amp; supervisor silent listen</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => onOpenInquiry('Agent Workstation & Softphone Setup')}
            className="w-full py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-[#dc2626] text-slate-800 hover:text-white border border-slate-200 hover:border-[#dc2626] text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>Configure Agent Workstations</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

      </div>

      {/* 4. KEY FEATURES (CLEAN 9-CARD GRID WITH AI CAPABILITIES) */}
      <div>
        <div className="mb-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
            Key Telephony Features Included
          </h2>
          <p className="text-xs text-slate-500">
            Professional call routing, supervisory control, and AI-powered voice automation from Unified Voice
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

          {/* 07. AI Voicebot (From Unified Voice UVC PBX) */}
          <div className="bg-white border border-indigo-200/90 rounded-xl p-3.5 shadow-2xs relative overflow-hidden group hover:border-indigo-400 transition-all">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-6 h-6 rounded-md bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-[11px]">07</span>
              <h4 className="text-xs font-bold text-slate-900">Conversational AI Voicebot</h4>
              <span className="ml-auto text-[9px] font-bold text-indigo-700 bg-indigo-50 border border-indigo-200/80 px-1.5 py-0.5 rounded-full shrink-0 flex items-center gap-0.5">
                <Sparkles className="w-2.5 h-2.5" /> AI
              </span>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              24/7 intelligent voice agent answering caller queries in natural language, automating FAQs, and routing with smart intent recognition.
            </p>
          </div>

          {/* 08. AI Call Transcription (From Unified Voice UVC PBX) */}
          <div className="bg-white border border-violet-200/90 rounded-xl p-3.5 shadow-2xs relative overflow-hidden group hover:border-violet-400 transition-all">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-6 h-6 rounded-md bg-violet-50 text-violet-600 flex items-center justify-center font-bold text-[11px]">08</span>
              <h4 className="text-xs font-bold text-slate-900">Real-Time Call Transcription</h4>
              <span className="ml-auto text-[9px] font-bold text-violet-700 bg-violet-50 border border-violet-200/80 px-1.5 py-0.5 rounded-full shrink-0 flex items-center gap-0.5">
                <Sparkles className="w-2.5 h-2.5" /> AI
              </span>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Live automated speech-to-text converting calls into searchable, timestamped text records for rapid supervisor QA and compliance audits.
            </p>
          </div>

          {/* 09. AI Call Summaries & Disposition (From Unified Voice UVC PBX) */}
          <div className="bg-white border border-teal-200/90 rounded-xl p-3.5 shadow-2xs relative overflow-hidden group hover:border-teal-400 transition-all">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-6 h-6 rounded-md bg-teal-50 text-teal-600 flex items-center justify-center font-bold text-[11px]">09</span>
              <h4 className="text-xs font-bold text-slate-900">AI Summaries &amp; Sentiment</h4>
              <span className="ml-auto text-[9px] font-bold text-teal-700 bg-teal-50 border border-teal-200/80 px-1.5 py-0.5 rounded-full shrink-0 flex items-center gap-0.5">
                <Sparkles className="w-2.5 h-2.5" /> AI
              </span>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Auto-detects customer sentiment, generates bullet-point call summaries, and automatically syncs disposition notes to CRM without manual agent typing.
            </p>
          </div>
        </div>
      </div>

      {/* 5. SERVICES MY COMPANY PROVIDES (CLEAN 4 STEPS) */}
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

      {/* 6. CLEAN CONSULTATION CALLOUT */}
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
