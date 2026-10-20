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
  Radio
} from 'lucide-react';

interface CallCenterDialerShowcaseProps {
  onOpenInquiry: (topic: string) => void;
}

export default function CallCenterDialerShowcase({ onOpenInquiry }: CallCenterDialerShowcaseProps) {
  return (
    <div className="space-y-8">
      
      {/* 1. CLEAN HERO INTRO */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-50 border border-red-200 text-[#dc2626] text-[11px] font-bold uppercase tracking-wider mb-3">
          <Radio className="w-3 h-3 text-[#dc2626]" />
          <span>Contact Center Automation</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
          What is <span className="text-[#dc2626]">Call-Centre &amp; Dialer Infrastructure</span>?
        </h1>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl mb-5">
          An <strong className="text-slate-900 font-semibold">Automated Call-Center Dialer</strong> eliminates manual handset dialing. Powered by enterprise <strong className="text-slate-900 font-semibold">astTECS, Asterisk, and Vicidial</strong> engines, our dialers automatically call prospect lists, filter out busy signals, answering machines, and disconnected numbers, and bridge <strong className="text-slate-900 font-semibold">only live customers</strong> directly to your agents.
        </p>

        {/* 3 Quick Value Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 border-t border-slate-100">
          <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200/70 rounded-xl p-3">
            <Zap className="w-4 h-4 text-[#dc2626] shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-slate-900">300% Talk-Time Boost</h4>
              <p className="text-[11px] text-slate-500">From 18 mins to 45+ mins per hour</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200/70 rounded-xl p-3">
            <Headphones className="w-4 h-4 text-blue-600 shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-slate-900">Smart Inbound ACD</h4>
              <p className="text-[11px] text-slate-500">Skill-based queues &amp; sticky agents</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200/70 rounded-xl p-3">
            <MessageSquare className="w-4 h-4 text-emerald-600 shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-slate-900">WhatsApp Omnichannel</h4>
              <p className="text-[11px] text-slate-500">Unified inbox for voice &amp; chat leads</p>
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
            Powered by enterprise Asterisk, Vicidial, and astTECS architectures for outbound campaigns
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

      {/* 3. KEY FEATURES (CLEAN 6-CARD GRID) */}
      <div>
        <div className="mb-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
            Features Our Company Provides &amp; Configures
          </h2>
          <p className="text-xs text-slate-500">
            Enterprise call handling, quality supervision, and CRM connectivity inspired by astTECS standards
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

      {/* 4. SERVICES MY COMPANY PROVIDES (CLEAN 4 STEPS) */}
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
              On-premise or cloud installation of Asterisk, Vicidial, and astTECS dialer servers.
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

      {/* 5. CLEAN CONSULTATION CALLOUT */}
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
