import React from 'react';
import { 
  Headphones, 
  Zap, 
  Sliders, 
  Database, 
  Volume2, 
  ShieldCheck, 
  Users, 
  BarChart3, 
  MessageSquare, 
  Server, 
  Network, 
  Settings, 
  Clock, 
  ArrowRight, 
  Radio,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

interface CallCenterDialerShowcaseProps {
  onOpenInquiry: (topic: string) => void;
}

export default function CallCenterDialerShowcase({ onOpenInquiry }: CallCenterDialerShowcaseProps) {
  return (
    <div className="space-y-8">
      
      {/* 1. VISUAL ENTERPRISE HERO (SPLIT LAYOUT WITH REAL AGENT & DIALER IMAGERY) */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Content & Benefits */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-50 border border-red-200 text-[#dc2626] text-[11px] font-bold uppercase tracking-wider mb-3">
              <Radio className="w-3 h-3 text-[#dc2626]" />
              <span>Contact Center Automation</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2.5">
              What is <span className="text-[#dc2626]">Call Center &amp; Dialer Infrastructure</span>?
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
              An <strong className="text-slate-900 font-semibold">Automated Call-Center Dialer</strong> eliminates manual handset dialing and bridges <strong className="text-slate-900 font-semibold">only live customers</strong> directly to your agents. It maximizes outbound campaign productivity, eliminates idle agent waiting time, and automatically synchronizes all call activity with your CRM.
            </p>

            {/* 3 Quick Value Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 border-t border-slate-100">
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/70 rounded-xl p-2.5">
                <div className="w-7 h-7 rounded-lg bg-red-50 text-[#dc2626] flex items-center justify-center shrink-0">
                  <Zap className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-slate-900">300% Talk-Time Boost</h4>
                  <p className="text-[10px] text-slate-500">From 18 to 45+ mins/hr</p>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/70 rounded-xl p-2.5">
                <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Headphones className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-slate-900">Smart Inbound ACD</h4>
                  <p className="text-[10px] text-slate-500">Skill queues &amp; sticky agents</p>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/70 rounded-xl p-2.5">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-slate-900">WhatsApp Omnichannel</h4>
                  <p className="text-[10px] text-slate-500">Voice &amp; WhatsApp CRM sync</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-End Dialer & Agent Call Floor Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200/80 group">
              <img
                src="/assets/call_center_dialer_hero.jpg"
                alt="Call Center Dialer and Agent Telephony Infrastructure"
                className="w-full h-64 sm:h-72 object-cover group-hover:scale-103 transition-transform duration-700"
              />
            </div>
          </div>

        </div>
      </div>

      {/* 2. THE 4 DIALING MODES WE PROVIDE (CORRECTED SPACIOUS BOX SIZES: 2x2 GRID) */}
      <div>
        <div className="mb-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
            The 4 Dialing Modes We Provide
          </h2>
          <p className="text-xs text-slate-500">
            Powered by enterprise Asterisk and Vicidial architectures for outbound campaigns
          </p>
        </div>

        {/* Corrected Box Sizes: 2 Columns with generous width & matching heights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          
          {/* Mode 1: Predictive Dialer */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between min-h-[190px]">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-red-50 text-[#dc2626] flex items-center justify-center font-bold text-xs shrink-0">
                    <Zap className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">Predictive Dialer</h3>
                    <span className="text-[11px] text-slate-500 font-medium">Algorithmic Pacing Engine</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-[#dc2626] bg-red-50 px-2.5 py-1 rounded-full border border-red-200/80 shrink-0">
                  Highest Efficiency
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Dials multiple numbers ahead using mathematical pacing based on average handle time and answer rates. Filters out busy tones and voicemails, connecting answered calls instantly to available agents.
              </p>
            </div>
            <div className="border-t border-slate-100 pt-3 flex items-center justify-between text-xs">
              <span className="font-semibold text-[#dc2626] flex items-center gap-1">
                ⚡ Ideal for mass telesales, banking &amp; loans
              </span>
              <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md shrink-0">
                45–50 min/hr talk time
              </span>
            </div>
          </div>

          {/* Mode 2: Progressive / Power Dialer */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between min-h-[190px]">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs shrink-0">
                    <Sliders className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">Progressive / Power Dialer</h3>
                    <span className="text-[11px] text-slate-500 font-medium">1:1 Automated Pacing</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200/80 shrink-0">
                  Zero Drops
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Dials the next number automatically only when an agent finishes their current call and clicks Ready. Guarantees 0% abandoned calls with zero dead-air silence for the customer.
              </p>
            </div>
            <div className="border-t border-slate-100 pt-3 flex items-center justify-between text-xs">
              <span className="font-semibold text-blue-700 flex items-center gap-1">
                ⚡ Best for mid-volume sales &amp; renewal teams
              </span>
              <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md shrink-0">
                1:1 Compliance
              </span>
            </div>
          </div>

          {/* Mode 3: Preview Dialer */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between min-h-[190px]">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-xs shrink-0">
                    <Database className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">Preview &amp; Manual Dialer</h3>
                    <span className="text-[11px] text-slate-500 font-medium">Pre-Call Customer Context</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-200/80 shrink-0">
                  B2B Context
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Pops the prospect's profile, prior notes, deal history, and open support tickets onto the screen <em>before</em> dialing. The agent reviews the context thoroughly and clicks to initiate the call.
              </p>
            </div>
            <div className="border-t border-slate-100 pt-3 flex items-center justify-between text-xs">
              <span className="font-semibold text-purple-700 flex items-center gap-1">
                ⚡ High-ticket B2B &amp; wealth management
              </span>
              <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md shrink-0">
                100% Prepared
              </span>
            </div>
          </div>

          {/* Mode 4: Voice Broadcasting */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between min-h-[190px]">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0">
                    <Volume2 className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">Voice Broadcasting / Blasting</h3>
                    <span className="text-[11px] text-slate-500 font-medium">Mass Automated Audio</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/80 shrink-0">
                  Mass Outreach
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Broadcasts personalized pre-recorded voice announcements to thousands of leads simultaneously with interactive IVR response: <em>"Press 1 to connect with an executive."</em>
              </p>
            </div>
            <div className="border-t border-slate-100 pt-3 flex items-center justify-between text-xs">
              <span className="font-semibold text-emerald-700 flex items-center gap-1">
                ⚡ Event alerts, surveys &amp; mass campaigns
              </span>
              <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md shrink-0">
                10,000+ calls/hr
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* 3. ENTERPRISE FLOOR & DIALER CLUSTER SHOWCASE (DUAL VISUAL CARDS) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        
        {/* Card A: High-Density BPO Floor & Workstation Layouts */}
        <div className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col group">
          <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900">
            <img
              src="/assets/ue_call_centre_bpo.jpg"
              alt="High-Density BPO Call Center Floor and Acoustic Workstation Setup"
              className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
            
            <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 text-white flex items-center gap-1.5">
              <Headphones className="w-3.5 h-3.5 text-red-400" />
              <span className="text-[11px] font-bold">Acoustic BPO Floor</span>
            </div>

            <div className="absolute bottom-3 left-3 right-3 text-white">
              <span className="text-[10px] font-semibold text-emerald-400 uppercase tracking-wider block mb-0.5">
                Turnkey Operations
              </span>
              <h3 className="text-base font-bold text-white drop-shadow-sm">
                Acoustic Workstations &amp; Noise-Canceling Headsets
              </h3>
            </div>
          </div>

          <div className="p-5 flex-1 flex flex-col justify-between">
            <div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                We supply and wire complete call-center floors with commercial agent terminals, noise-dampening partitions, and certified headsets from <strong className="text-slate-800">Jabra, Plantronics, and Fanvil</strong>.
              </p>

              <div className="space-y-2 border-t border-slate-100 pt-3 mb-5 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#dc2626] shrink-0" />
                  <span>Acoustic-treated workstations with Cat6 gigabit PoE drops</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#dc2626] shrink-0" />
                  <span>Live wallboard display monitors showing queue SLAs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#dc2626] shrink-0" />
                  <span>Rental &amp; AMC options for flexible seasonal ramp-ups</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenInquiry('Call Center Floor & Headset Workstation Setup')}
              className="w-full py-2 px-3 rounded-xl bg-slate-50 hover:bg-slate-900 text-slate-800 hover:text-white border border-slate-200 hover:border-slate-900 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Consult Floor Workstations</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Card B: VICIdial & Asterisk Clustered Dialing Core */}
        <div className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col group">
          <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900">
            <img
              src="/assets/pbx_server_cloud.jpg"
              alt="VICIdial and Asterisk Clustered Telephony Server Infrastructure"
              className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

            <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 text-white flex items-center gap-1.5">
              <Server className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-[11px] font-bold">Clustered Dialer Engine</span>
            </div>

            <div className="absolute bottom-3 left-3 right-3 text-white">
              <span className="text-[10px] font-semibold text-blue-400 uppercase tracking-wider block mb-0.5">
                High Concurrency
              </span>
              <h3 className="text-base font-bold text-white drop-shadow-sm">
                Carrier-Grade VICIdial Server Clusters
              </h3>
            </div>
          </div>

          <div className="p-5 flex-1 flex flex-col justify-between">
            <div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Scalable clustered telephony architecture handling thousands of simultaneous calls with automated answering machine detection (AMD) and real-time CRM screen-pops.
              </p>

              <div className="space-y-2 border-t border-slate-100 pt-3 mb-5 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Multi-server load-balancing for 50 to 1,000+ agents</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Dual PRI / SIP carrier trunks with sub-second failover</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Encrypted stereo recording storage with instant URL playback</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenInquiry('VICIdial Clustered Server Architecture')}
              className="w-full py-2 px-3 rounded-xl bg-slate-50 hover:bg-[#dc2626] text-slate-800 hover:text-white border border-slate-200 hover:border-[#dc2626] text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Review Server Clustering</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>

      {/* 4. KEY FEATURES (CLEAN 6-CARD GRID) */}
      <div>
        <div className="mb-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
            Features Our Company Provides &amp; Configures
          </h2>
          <p className="text-xs text-slate-500">
            Enterprise call handling, quality supervision, and CRM connectivity for high-velocity teams
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5">
          <div className="bg-white border border-slate-200/80 rounded-xl p-3.5 shadow-2xs">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-6 h-6 rounded-md bg-red-50 text-[#dc2626] flex items-center justify-center font-bold text-[11px]">01</span>
              <h4 className="text-xs font-bold text-slate-900">Inbound ACD &amp; Queuing</h4>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Skill-based routing &amp; sticky agents connect returning callers to the same executive.
            </p>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-xl p-3.5 shadow-2xs">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-6 h-6 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-[11px]">02</span>
              <h4 className="text-xs font-bold text-slate-900">100% Call Recording</h4>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Dual-channel stereo voice logger with searchable Agent ID, date/time, and disposition tags.
            </p>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-xl p-3.5 shadow-2xs">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-6 h-6 rounded-md bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-[11px]">03</span>
              <h4 className="text-xs font-bold text-slate-900">Live Listen &amp; Barge-in</h4>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Supervisors can listen in secretly, whisper guidance to the agent, or barge in to close deals.
            </p>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-xl p-3.5 shadow-2xs">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-6 h-6 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-[11px]">04</span>
              <h4 className="text-xs font-bold text-slate-900">One-Click CRM Integration</h4>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Instant screen-pops &amp; click-to-dial in Zoho, Salesforce, LeadSquared, Vtiger, and custom CRMs.
            </p>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-xl p-3.5 shadow-2xs">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-6 h-6 rounded-md bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-[11px]">05</span>
              <h4 className="text-xs font-bold text-slate-900">Live Floor Wallboards</h4>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Real-time screen metrics: active calls, queue wait time, agent occupancy, and SLA targets.
            </p>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-xl p-3.5 shadow-2xs">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-6 h-6 rounded-md bg-sky-50 text-sky-600 flex items-center justify-center font-bold text-[11px]">06</span>
              <h4 className="text-xs font-bold text-slate-900">WhatsApp &amp; Web Chat</h4>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Omnichannel agent screen uniting phone calls, WhatsApp Business chats, and website live chat.
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
          Turnkey contact center implementation from server configuration to telecom trunks and 24/7 SLAs:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          <div className="bg-white rounded-xl p-3.5 border border-slate-200/70">
            <div className="w-7 h-7 rounded-lg bg-red-100 text-[#dc2626] flex items-center justify-center mb-2">
              <Server className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-bold text-slate-900 mb-1">1. Dialer Server Setup</h4>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              On-premise or cloud installation of Asterisk, Vicidial, and custom dialer clusters.
            </p>
          </div>

          <div className="bg-white rounded-xl p-3.5 border border-slate-200/70">
            <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-2">
              <Network className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-bold text-slate-900 mb-1">2. GSM &amp; SIP Trunks</h4>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              8/16/32-port GSM gateways for low outbound call rates + Airtel/Jio/Tata SIP trunk termination.
            </p>
          </div>

          <div className="bg-white rounded-xl p-3.5 border border-slate-200/70">
            <div className="w-7 h-7 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mb-2">
              <Settings className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-bold text-slate-900 mb-1">3. CRM Webhook Integration</h4>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Two-way lead sync, screen-pop triggers, and automatic audio recording URL logging.
            </p>
          </div>

          <div className="bg-white rounded-xl p-3.5 border border-slate-200/70">
            <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center mb-2">
              <Clock className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-bold text-slate-900 mb-1">4. 24/7 Dialer AMC &amp; Rental</h4>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Sub-2-hour onsite engineer SLA + rental headsets, IP phones, and agent workstations.
            </p>
          </div>
        </div>
        
      </div>

      {/* 6. CLEAN CONSULTATION CALLOUT */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-5">
        <div>
          <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider block mb-1">
            Contact Center Sizing &amp; Quote
          </span>
          <h3 className="text-lg font-bold text-white">
            Ready to upgrade your call-center or sales team?
          </h3>
          <p className="text-xs text-slate-300 mt-1 max-w-xl">
            Our certified VoIP architects calculate exact agent seat capacity, concurrent SIP trunk channels, and CRM integrations for your operations.
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto">
          <button
            onClick={() => onOpenInquiry('Call Center Dialer Architecture & Quote')}
            className="flex-1 sm:flex-initial py-2.5 px-4 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold transition-all shadow-md active:scale-98 cursor-pointer flex items-center justify-center gap-1.5"
          >
            <span>Request Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => onOpenInquiry('Call Center Dialer Live Demo')}
            className="flex-1 sm:flex-initial py-2.5 px-4 rounded-xl bg-slate-700 hover:bg-slate-600 text-white text-xs font-semibold transition-colors cursor-pointer"
          >
            Live Demo
          </button>
        </div>
      </div>

    </div>
  );
}
