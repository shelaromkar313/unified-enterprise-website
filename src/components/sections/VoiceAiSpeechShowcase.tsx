import React, { useState } from 'react';
import { 
  Mic, 
  Volume2, 
  Bot, 
  Sparkles, 
  Brain, 
  Smile, 
  Frown, 
  Meh, 
  TrendingUp, 
  ShieldCheck, 
  Cpu, 
  PhoneCall, 
  Headphones, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  Activity, 
  Zap, 
  Lock, 
  Server, 
  Play, 
  Pause, 
  RefreshCw, 
  Globe, 
  Users, 
  BarChart3,
  Layers,
  ChevronRight,
  Database,
  Radio
} from 'lucide-react';

interface VoiceAiSpeechShowcaseProps {
  onOpenInquiry: (topic: string) => void;
}

type ServiceTab = 'speech-to-text-tts' | 'call-transcription' | 'voice-ai-agents' | 'sentiment-analysis';

export default function VoiceAiSpeechShowcase({ onOpenInquiry }: VoiceAiSpeechShowcaseProps) {
  const [activeTab, setActiveTab] = useState<ServiceTab>('voice-ai-agents');
  const [simPlaying, setSimPlaying] = useState<boolean>(false);
  const [simProgress, setSimProgress] = useState<number>(45);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('Indian English');
  const [selectedAgentPersona, setSelectedAgentPersona] = useState<number>(0);

  // Agent personas
  const agentPersonas = [
    {
      title: 'Inbound Customer Support Agent',
      role: 'Tier-1 Resolution & Ticket Dispatch',
      badge: '24/7 Available',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      description: 'Answers customer inquiries within 300ms, verifies accounts via OTP, resolves FAQs, processes returns, and creates tickets in Salesforce/Zoho without human intervention.',
      stats: { speed: '< 450ms Latency', resolution: '78% First-Call Resolution', concurrency: '10,000+ Calls' },
      features: [
        'Natural conversational turn-taking with zero awkward pauses',
        'Caller barge-in supported: User can interrupt anytime to clarify',
        'Automatic account authentication via SMS/WhatsApp OTP',
        'Seamless warm transfer to human tier-2 supervisor with full call history'
      ]
    },
    {
      title: 'Outbound Sales & Lead Qualifier',
      role: 'BANT Qualification & Demo Booking',
      badge: 'High Conversion',
      badgeColor: 'bg-red-50 text-[#dc2626] border-red-200',
      description: 'Calls inbound website leads within 60 seconds of form submission. Qualifies budget, authority, need, and timeline, then books a calendar demo directly on sales reps Google/Outlook calendars.',
      stats: { speed: '< 60s Lead Response', resolution: '3.4x Booking Lift', concurrency: 'Unlimited Batches' },
      features: [
        'Dial-on-lead API integration with HubSpot, LeadSquared, and Zoho',
        'Dynamic objection handling tailored to Indian corporate scenarios',
        'Real-time Google Calendar and Outlook 365 booking via Calendly/Cal.com',
        'Follow-up SMS & WhatsApp summary sent instantly upon call completion'
      ]
    },
    {
      title: 'Payment Reminder & EMI Recovery Agent',
      role: 'Empathetic Financial Collections',
      badge: 'PCI-DSS Compliant',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      description: 'Conducts polite, compliant outbound collection calls for NBFCs, banks, and SaaS companies. Dispatches UPI / NetBanking payment links and logs repayment commitments.',
      stats: { speed: '100% On-Time Batch', resolution: '42% Same-Day Recovery', concurrency: 'Multi-Trunk SIP' },
      features: [
        'Multi-lingual delivery in Hindi, Marathi, Tamil, Telugu, and English',
        'Instant Razorpay/Cashfree payment link dispatch via WhatsApp during call',
        'Logs promised payment dates and dispatches automated reminder reminders',
        'Strict RBI compliance: Respects calling hours and DND registries'
      ]
    },
    {
      title: 'Post-Service CSAT & NPS Survey Agent',
      role: 'Automated Customer Feedback',
      badge: '94% Completion Rate',
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      description: 'Reaches out immediately following service delivery or delivery fulfillment to capture NPS ratings, detailed voice feedback, and trigger manager alerts for negative responses.',
      stats: { speed: '< 2-min Survey', resolution: '94% Response Rate', concurrency: 'Automated Post-Trigger' },
      features: [
        'Short, polite conversational survey (1-5 star rating & feedback note)',
        'Live sentiment analysis: Flags negative feedback to supervisor in under 10 seconds',
        'Transcribes open-ended customer feedback directly into CRM analytics',
        'Reduces outbound call center surveyor headcount by over 85%'
      ]
    }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-300">
      
      {/* 1. HERO HEADER */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-950 via-[#0f172a] to-[#1e1b4b] text-white p-6 sm:p-10 border border-slate-800 shadow-xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/15 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Priority Voice AI & Speech Intelligence Suite</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Next-Gen <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-300 to-amber-300">Voice AI, STT, TTS</span> & Real-Time Call Intelligence
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Supercharge your enterprise telephony with high-accuracy Indian-accent Speech-to-Text, ultra-natural neural Text-to-Speech, multi-agent conversational Voicebots, and real-time call sentiment analytics powered by enterprise UVC PBX cloud infrastructure.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800">
            <div>
              <span className="text-2xl font-black text-white">&lt; 450ms</span>
              <span className="text-xs text-slate-400 block font-medium">Voice AI Response</span>
            </div>
            <div>
              <span className="text-2xl font-black text-white">98.4%</span>
              <span className="text-xs text-slate-400 block font-medium">STT Indian Accuracy</span>
            </div>
            <div>
              <span className="text-2xl font-black text-white">12+</span>
              <span className="text-xs text-slate-400 block font-medium">Indian Regional Languages</span>
            </div>
            <div>
              <span className="text-2xl font-black text-white">100%</span>
              <span className="text-xs text-slate-400 block font-medium">Automated QA Scoring</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. TAB NAVIGATION FOR 4 PRIORITY SERVICES */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#dc2626] block">
              Flagship Voice AI Capabilities
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Select an AI Voice Service
            </h2>
          </div>
          <span className="hidden sm:inline-block text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
            Enterprise Grade • AWS EC2 Hosted
          </span>
        </div>

        {/* 4 Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Tab 1: Multiple Voice AI Agents */}
          <button
            type="button"
            onClick={() => setActiveTab('voice-ai-agents')}
            className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
              activeTab === 'voice-ai-agents'
                ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-red-500/20'
                : 'bg-white text-slate-700 border-slate-200/90 hover:border-slate-300 hover:bg-slate-50'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                activeTab === 'voice-ai-agents' ? 'bg-[#dc2626] text-white' : 'bg-red-50 text-[#dc2626]'
              }`}>
                <Bot className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-500/20 text-red-400">
                Priority #1
              </span>
            </div>
            <div>
              <h3 className="text-sm font-bold leading-snug">
                Multiple Voice AI Agents
              </h3>
              <p className={`text-xs mt-1 line-clamp-2 ${activeTab === 'voice-ai-agents' ? 'text-slate-300' : 'text-slate-500'}`}>
                Autonomous inbound & outbound conversational bots with natural human turn-taking.
              </p>
            </div>
          </button>

          {/* Tab 2: Speech to Text & Text to Speech */}
          <button
            type="button"
            onClick={() => setActiveTab('speech-to-text-tts')}
            className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
              activeTab === 'speech-to-text-tts'
                ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-red-500/20'
                : 'bg-white text-slate-700 border-slate-200/90 hover:border-slate-300 hover:bg-slate-50'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                activeTab === 'speech-to-text-tts' ? 'bg-[#dc2626] text-white' : 'bg-amber-50 text-amber-600'
              }`}>
                <Volume2 className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400">
                Priority #2
              </span>
            </div>
            <div>
              <h3 className="text-sm font-bold leading-snug">
                Speech to Text & TTS
              </h3>
              <p className={`text-xs mt-1 line-clamp-2 ${activeTab === 'speech-to-text-tts' ? 'text-slate-300' : 'text-slate-500'}`}>
                Neural multi-accent speech synthesis and high-accuracy telecom audio transcription.
              </p>
            </div>
          </button>

          {/* Tab 3: Voice Call Transcription */}
          <button
            type="button"
            onClick={() => setActiveTab('call-transcription')}
            className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
              activeTab === 'call-transcription'
                ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-red-500/20'
                : 'bg-white text-slate-700 border-slate-200/90 hover:border-slate-300 hover:bg-slate-50'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                activeTab === 'call-transcription' ? 'bg-[#dc2626] text-white' : 'bg-blue-50 text-blue-600'
              }`}>
                <FileText className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400">
                Priority #3
              </span>
            </div>
            <div>
              <h3 className="text-sm font-bold leading-snug">
                Voice Call Transcription
              </h3>
              <p className={`text-xs mt-1 line-clamp-2 ${activeTab === 'call-transcription' ? 'text-slate-300' : 'text-slate-500'}`}>
                Live audio-to-text streaming, dual-speaker diarization, and automated CRM summaries.
              </p>
            </div>
          </button>

          {/* Tab 4: Sentiment Analysis of Calls */}
          <button
            type="button"
            onClick={() => setActiveTab('sentiment-analysis')}
            className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
              activeTab === 'sentiment-analysis'
                ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-red-500/20'
                : 'bg-white text-slate-700 border-slate-200/90 hover:border-slate-300 hover:bg-slate-50'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                activeTab === 'sentiment-analysis' ? 'bg-[#dc2626] text-white' : 'bg-purple-50 text-purple-600'
              }`}>
                <Smile className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-400">
                Priority #4
              </span>
            </div>
            <div>
              <h3 className="text-sm font-bold leading-snug">
                Sentiment Analysis of Calls
              </h3>
              <p className={`text-xs mt-1 line-clamp-2 ${activeTab === 'sentiment-analysis' ? 'text-slate-300' : 'text-slate-500'}`}>
                Real-time acoustic emotion scoring, live escalation alerts, and automated QA audits.
              </p>
            </div>
          </button>
        </div>
      </div>

      {/* 3. ACTIVE TAB CONTENT PANEL */}
      <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm">
        
        {/* === TAB 1: MULTIPLE VOICE AI AGENTS === */}
        {activeTab === 'voice-ai-agents' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold text-[#dc2626] uppercase tracking-wider block mb-1">
                  Enterprise Conversational Voice Telephony
                </span>
                <h3 className="text-2xl font-bold text-slate-900">
                  Multiple Voice AI Agents for Inbound & Outbound Telephony
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                  Deploy dedicated, multi-role AI voice agents designed to execute customer service, sales outreach, EMI recovery, and survey calls at enterprise scale.
                </p>
              </div>

              <button
                type="button"
                onClick={() => onOpenInquiry('Voice AI Agents: Enterprise Deployment Demo')}
                className="px-6 py-3 rounded-full bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold transition-all shadow-md flex items-center gap-2 self-start lg:self-auto shrink-0"
              >
                <span>Deploy Voice AI Agent</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Persona Switcher */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {agentPersonas.map((persona, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedAgentPersona(idx)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    selectedAgentPersona === idx
                      ? 'border-[#dc2626] bg-red-50/50 shadow-2xs'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Persona 0{idx + 1}
                  </span>
                  <span className={`text-xs font-bold block mt-0.5 leading-snug ${
                    selectedAgentPersona === idx ? 'text-[#dc2626]' : 'text-slate-800'
                  }`}>
                    {persona.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Selected Persona Detail Grid */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-7">
              <div className="flex flex-col lg:flex-row gap-6 items-start justify-between">
                <div className="space-y-4 flex-1">
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border ${agentPersonas[selectedAgentPersona].badgeColor}`}>
                      {agentPersonas[selectedAgentPersona].badge}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      Role: {agentPersonas[selectedAgentPersona].role}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-slate-900">
                    {agentPersonas[selectedAgentPersona].title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    {agentPersonas[selectedAgentPersona].description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                      Core Enterprise Capabilities:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {agentPersonas[selectedAgentPersona].features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-[#dc2626] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Live KPI Card */}
                <div className="w-full lg:w-72 bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs space-y-4 shrink-0">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <span className="text-xs font-bold text-slate-900">Performance SLAs</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>

                  <div className="space-y-3">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold block">
                        Response Latency
                      </span>
                      <span className="text-base font-bold text-slate-900">
                        {agentPersonas[selectedAgentPersona].stats.speed}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold block">
                        Resolution / Lift
                      </span>
                      <span className="text-base font-bold text-[#dc2626]">
                        {agentPersonas[selectedAgentPersona].stats.resolution}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold block">
                        Concurrency
                      </span>
                      <span className="text-base font-bold text-slate-900">
                        {agentPersonas[selectedAgentPersona].stats.concurrency}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onOpenInquiry(`Trial Setup: ${agentPersonas[selectedAgentPersona].title}`)}
                    className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors text-center"
                  >
                    Test Live Demo Call
                  </button>
                </div>
              </div>
            </div>

            {/* Architecture Flow Banner */}
            <div className="border border-slate-200/90 rounded-2xl p-5 bg-gradient-to-r from-red-50/40 via-white to-slate-50">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#dc2626] text-white flex items-center justify-center shrink-0">
                    <Radio className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      UVC PBX Carrier & SIP Architecture
                    </h5>
                    <p className="text-xs text-slate-600">
                      Direct SIP Trunking, zero WebRTC packet loss, AWS EC2 cluster failover, and sub-second human agent escalation.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-[#dc2626]">
                  <span>VAPT & SOC 2 Certified</span>
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* === TAB 2: SPEECH TO TEXT & TEXT TO SPEECH === */}
        {activeTab === 'speech-to-text-tts' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold text-[#dc2626] uppercase tracking-wider block mb-1">
                  Bilingual & Regional Speech Engines
                </span>
                <h3 className="text-2xl font-bold text-slate-900">
                  Speech-to-Text (STT) & Neural Text-to-Speech (TTS)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                  Trained specifically on low-bandwidth 8kHz/16kHz Indian telecom audio streams, code-mixed accents (Hinglish, Tanglish), and high-fidelity neural voice synthesis.
                </p>
              </div>

              <button
                type="button"
                onClick={() => onOpenInquiry('Speech-to-Text & TTS API Access')}
                className="px-6 py-3 rounded-full bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold transition-all shadow-md flex items-center gap-2 self-start lg:self-auto shrink-0"
              >
                <span>Request API Trial</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Split Grid: STT vs TTS */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* STT Box */}
              <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-red-100 text-[#dc2626] flex items-center justify-center font-bold">
                    <Mic className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">
                      Speech-to-Text (STT) Telephony Engine
                    </h4>
                    <span className="text-[11px] text-slate-500">Real-time acoustic streaming over WebSocket</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Converts incoming caller voice streams into actionable text in real time with less than 200ms latency, even in noisy background environments.
                </p>

                <div className="space-y-2 bg-white p-3.5 rounded-xl border border-slate-200/80">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Specialized Technical Capabilities
                  </span>
                  <div className="space-y-1.5 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#dc2626] shrink-0" />
                      <span>Code-Mixed Hinglish, Tanglish & Indian regional phonetics</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#dc2626] shrink-0" />
                      <span>Specialized corporate, banking, telecom & medical vocabulary</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#dc2626] shrink-0" />
                      <span>Background noise cancellation & ambient echo suppression</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#dc2626] shrink-0" />
                      <span>Dual-channel stereo separation for agent & customer audio</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* TTS Box */}
              <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                    <Volume2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">
                      Neural Text-to-Speech (TTS) Synthesis
                    </h4>
                    <span className="text-[11px] text-slate-500">Human-grade natural intonation & cadence</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Generates natural, emotive human speech from text prompts with variable speed, pitch adjustment, and native Indian accent options.
                </p>

                {/* Language Selector Preview */}
                <div className="space-y-2 bg-white p-3.5 rounded-xl border border-slate-200/80">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Supported Regional Accents & Dialects
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['Indian English', 'Hindi (हिन्दी)', 'Tamil (தமிழ்)', 'Telugu (తెలుగు)', 'Marathi (मराठी)', 'Kannada (ಕನ್ನಡ)', 'Bengali (বাংলা)', 'Gujarati (ગુજરાતી)'].map((lang, lIdx) => (
                      <button
                        key={lIdx}
                        type="button"
                        onClick={() => setSelectedLanguage(lang)}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
                          selectedLanguage === lang
                            ? 'bg-[#dc2626] text-white font-bold'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Interactive Audio Waveform Simulator */}
            <div className="bg-slate-900 text-white p-5 sm:p-6 rounded-2xl space-y-4 border border-slate-800">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setSimPlaying(!simPlaying)}
                    className="w-10 h-10 rounded-full bg-[#dc2626] hover:bg-[#b91c1c] text-white flex items-center justify-center transition-colors shadow-md"
                  >
                    {simPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                  </button>
                  <div>
                    <h5 className="text-xs font-bold text-white">
                      Live Synthesized Voice Sample ({selectedLanguage})
                    </h5>
                    <p className="text-[11px] text-slate-400">
                      "Hello! Thank you for calling Unified Enterprise. How can our AI assist your enterprise today?"
                    </p>
                  </div>
                </div>

                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2.5 py-1 rounded-md self-start sm:self-auto">
                  {simPlaying ? 'STREAMING 24kHz OPUS • 142ms' : 'READY TO PLAY'}
                </span>
              </div>

              {/* Fake Audio Waveform */}
              <div className="flex items-center gap-1 h-8 pt-1">
                {[40, 65, 80, 45, 90, 70, 30, 85, 100, 60, 40, 75, 95, 50, 35, 70, 85, 90, 45, 60, 80, 55, 30, 65, 90, 75, 40, 80, 60, 45, 95, 70, 35, 60, 85].map((h, i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-full transition-all duration-150 ${
                      simPlaying
                        ? 'bg-gradient-to-t from-red-500 to-amber-300'
                        : 'bg-slate-700'
                    }`}
                    style={{ height: simPlaying ? `${Math.max(15, (h * (i % 2 === 0 ? 1 : 0.7)))}%` : '20%' }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* === TAB 3: VOICE CALL TRANSCRIPTION === */}
        {activeTab === 'call-transcription' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold text-[#dc2626] uppercase tracking-wider block mb-1">
                  100% Automated Call Documentation
                </span>
                <h3 className="text-2xl font-bold text-slate-900">
                  Real-Time Voice Call Transcription & Audio Analytics
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                  Automate post-call work, generate instant transcripts with speaker tags, redact sensitive customer information, and sync structured notes into your CRM.
                </p>
              </div>

              <button
                type="button"
                onClick={() => onOpenInquiry('Call Transcription Service')}
                className="px-6 py-3 rounded-full bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold transition-all shadow-md flex items-center gap-2 self-start lg:self-auto shrink-0"
              >
                <span>Request Transcription Trial</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Live Transcript Mockup Window */}
            <div className="bg-slate-950 rounded-2xl border border-slate-800 p-5 sm:p-6 text-white space-y-4 shadow-lg">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-xs font-bold font-mono text-slate-300">
                    LIVE CALL #UVC-9482 • AGENT: Priya R. • CALLER: Rajesh M.
                  </span>
                </div>
                <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/70 border border-emerald-800 px-2 py-0.5 rounded">
                  Dual-Channel Diarization Active
                </span>
              </div>

              {/* Dialogue Transcript Feed */}
              <div className="space-y-3 font-mono text-xs max-h-64 overflow-y-auto pr-2">
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <div className="flex items-center justify-between text-[11px] text-blue-400 font-bold mb-1">
                    <span>[00:03] Agent (Priya R.)</span>
                    <span className="text-slate-500">Channel 1</span>
                  </div>
                  <p className="text-slate-200">
                    "Thank you for calling Unified Enterprise support, my name is Priya. How may I assist your office network today?"
                  </p>
                </div>

                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <div className="flex items-center justify-between text-[11px] text-amber-400 font-bold mb-1">
                    <span>[00:11] Customer (Rajesh M.)</span>
                    <span className="text-slate-500">Channel 2</span>
                  </div>
                  <p className="text-slate-200">
                    "Hi Priya, we are expanding our Pune office with 50 new workstations and need dedicated VoIP extensions and call recording configured."
                  </p>
                </div>

                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <div className="flex items-center justify-between text-[11px] text-blue-400 font-bold mb-1">
                    <span>[00:24] Agent (Priya R.)</span>
                    <span className="text-slate-500">Channel 1</span>
                  </div>
                  <p className="text-slate-200">
                    "Certainly, Mr. Rajesh! Our UVC PBX cloud server can provision those 50 SIP extensions instantly with automated call transcription. I will generate a formal proposal for you."
                  </p>
                </div>
              </div>

              {/* Auto Summary Box */}
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                  <span className="flex items-center gap-1.5 text-amber-400">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Automated AI Executive Summary</span>
                  </span>
                  <span className="text-emerald-400">Auto-Synced to Salesforce</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  <strong className="text-white">Summary:</strong> Customer requested 50 VoIP extensions for Pune office expansion with automated recording. Proposal to be emailed within 2 hours.
                </p>
              </div>
            </div>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-red-100 text-[#dc2626] flex items-center justify-center font-bold">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h5 className="text-xs font-bold text-slate-900">PII & PCI Redaction</h5>
                <p className="text-xs text-slate-600">
                  Automatically detects and masks card numbers, CVVs, Aadhaar IDs, and OTPs from written transcripts.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                  <Database className="w-4 h-4" />
                </div>
                <h5 className="text-xs font-bold text-slate-900">CRM Auto-Disposition</h5>
                <p className="text-xs text-slate-600">
                  Zero manual wrap-up time; logs full transcript, key bullets, and callback triggers directly to your CRM.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  <FileText className="w-4 h-4" />
                </div>
                <h5 className="text-xs font-bold text-slate-900">Instant Keyword Search</h5>
                <p className="text-xs text-slate-600">
                  Search across thousands of audio hours in seconds for compliance flags, competitor mentions, or cancellation words.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* === TAB 4: CALL SENTIMENT ANALYSIS === */}
        {activeTab === 'sentiment-analysis' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold text-[#dc2626] uppercase tracking-wider block mb-1">
                  Emotion Intelligence & QA Auditing
                </span>
                <h3 className="text-2xl font-bold text-slate-900">
                  Real-Time Call Sentiment Analysis & Customer Tone Scoring
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                  Measure customer satisfaction on 100% of calls instead of random 1% manual samples. Detect churn risks, track agent empathy, and alert supervisors instantly when a caller becomes agitated.
                </p>
              </div>

              <button
                type="button"
                onClick={() => onOpenInquiry('Call Sentiment Analysis Demo')}
                className="px-6 py-3 rounded-full bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold transition-all shadow-md flex items-center gap-2 self-start lg:self-auto shrink-0"
              >
                <span>Request Sentiment Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Live Sentiment Metrics Dashboard Mockup */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Sentiment Gauge Card */}
              <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 space-y-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Overall Fleet Sentiment
                    </span>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      +14% this month
                    </span>
                  </div>

                  <div className="text-4xl font-black text-slate-900 mt-2">
                    84.2 <span className="text-lg font-medium text-slate-500">/ 100</span>
                  </div>
                  <span className="text-xs text-slate-600 mt-1 block">
                    Calculated across 42,850 analyzed calls this week
                  </span>
                </div>

                {/* Sentiment Distribution Bars */}
                <div className="space-y-2 pt-4 border-t border-slate-200/70">
                  <div className="flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1.5 text-emerald-700 font-medium">
                      <Smile className="w-3.5 h-3.5" /> Positive & Delighted
                    </span>
                    <span className="font-bold text-slate-900">68%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: '68%' }} />
                  </div>

                  <div className="flex items-center justify-between text-xs pt-1">
                    <span className="flex items-center gap-1.5 text-amber-700 font-medium">
                      <Meh className="w-3.5 h-3.5" /> Neutral Resolution
                    </span>
                    <span className="font-bold text-slate-900">24%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full" style={{ width: '24%' }} />
                  </div>

                  <div className="flex items-center justify-between text-xs pt-1">
                    <span className="flex items-center gap-1.5 text-red-700 font-medium">
                      <Frown className="w-3.5 h-3.5" /> Frustrated / At-Risk
                    </span>
                    <span className="font-bold text-[#dc2626]">8%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                    <div className="h-full bg-[#dc2626] rounded-full" style={{ width: '8%' }} />
                  </div>
                </div>
              </div>

              {/* Real-Time Supervisor Alert Simulator */}
              <div className="lg:col-span-2 bg-slate-900 text-white rounded-2xl p-6 space-y-4 border border-slate-800 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                      <Activity className="w-4 h-4 animate-pulse" />
                      Live Supervisor Sentiment Trigger
                    </span>
                    <span className="text-[10px] bg-red-900/60 border border-red-700 text-red-300 font-bold px-2 py-0.5 rounded-full">
                      Agitation Threshold Breached
                    </span>
                  </div>

                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-300 font-bold">Extension 104 • Queue: Enterprise Billing</span>
                      <span className="text-red-400 font-mono">Sentiment Score: 24/100 (Frustrated)</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed font-mono">
                      "I have been transferred three times already and my internet leased line invoice has still not been credited!"
                    </p>
                    <div className="flex items-center gap-2 pt-1 text-[11px] text-amber-300 font-semibold">
                      <span>Trigger: Repeated Transfer + Raised Vocal Pitch (&gt; 240 Hz)</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-800">
                  <p className="text-xs text-slate-400">
                    Supervisors can intervene instantly with one-click UVC PBX controls:
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => onOpenInquiry('Listen & Whisper Demo')}
                      className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors"
                    >
                      Whisper to Agent
                    </button>
                    <button
                      type="button"
                      onClick={() => onOpenInquiry('Live Call Barge Demo')}
                      className="px-3 py-1.5 rounded-lg bg-[#dc2626] hover:bg-[#b91c1c] text-xs font-bold text-white transition-colors"
                    >
                      Barge Into Call
                    </button>
                  </div>
                </div>
              </div>

            </div>

            {/* QA Compliance Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                <span className="text-xs font-bold text-slate-900 block">100% Call Audit Coverage</span>
                <p className="text-xs text-slate-600">
                  Eliminates random 2% sampling by automatically grading every single inbound and outbound call against company scripts.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                <span className="text-xs font-bold text-slate-900 block">Churn Risk Detection</span>
                <p className="text-xs text-slate-600">
                  Flags cancellation keywords and frustrated sentiment to customer success leads before the customer churns.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                <span className="text-xs font-bold text-slate-900 block">Agent Coaching Scorecards</span>
                <p className="text-xs text-slate-600">
                  Provides objective empathy, resolution speed, and greeting adherence metrics for weekly 1-on-1 agent coaching.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* 4. ENTERPRISE TELEPHONY ARCHITECTURE (From PDF Page 6 & 7) */}
      <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200/80">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#dc2626] block">
              Certified Enterprise Cloud Architecture
            </span>
            <h3 className="text-xl font-bold text-slate-900">
              AWS Cloud Hosted (EC2) PBX & SIP Backbone
            </h3>
          </div>
          <span className="text-xs text-slate-500 font-medium">
            99.99% Carrier-Grade Uptime SLA
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <Server className="w-4 h-4" />
            </div>
            <h5 className="text-xs font-bold text-slate-900">UVC PBX Core</h5>
            <p className="text-xs text-slate-600">
              Hosted in secure AWS EC2 clusters with automated load balancing and database replication.
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-red-50 text-[#dc2626] flex items-center justify-center font-bold">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h5 className="text-xs font-bold text-slate-900">Security Checkpoints</h5>
            <p className="text-xs text-slate-600">
              Advanced Fail2ban, IP Whitelisting, TLS & WSS secure signaling, and multi-factor auth (MFA).
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <Globe className="w-4 h-4" />
            </div>
            <h5 className="text-xs font-bold text-slate-900">Omnichannel Endpoints</h5>
            <p className="text-xs text-slate-600">
              WebRTC browser phones, iOS/Android softphones, and enterprise Gigabit IP desk phones.
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <Database className="w-4 h-4" />
            </div>
            <h5 className="text-xs font-bold text-slate-900">Enterprise Integrations</h5>
            <p className="text-xs text-slate-600">
              REST APIs, Webhooks, Salesforce, Zoho, HubSpot, LeadSquared, Freshdesk, and Zapier sync.
            </p>
          </div>
        </div>
      </div>

      {/* 5. BOTTOM CTA BANNER */}
      <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
        <div className="space-y-2 text-center md:text-left">
          <span className="text-xs font-bold text-[#dc2626] uppercase tracking-wider block">
            Ready to Modernize Your Enterprise Telephony?
          </span>
          <h4 className="text-xl sm:text-2xl font-bold text-white">
            Get a Custom Voice AI & Cloud PBX Quotation
          </h4>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
            Book a 15-minute live demo with our telecom engineers and test our AI Voicebot, live call transcription, and sentiment analysis on your real phone numbers.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onOpenInquiry('Voice AI & Cloud PBX: Request Pilot')}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold transition-all shadow-md text-center"
          >
            Request 14-Day Pilot
          </button>
          <button
            type="button"
            onClick={() => onOpenInquiry('Download Telecom Architecture & Specs')}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-all text-center border border-slate-700"
          >
            Download Architecture PDF
          </button>
        </div>
      </div>

    </div>
  );
}
