import React, { useState } from 'react';
import { 
  Building2, 
  ShieldCheck, 
  HeartHandshake, 
  CheckCircle2, 
  ArrowRight, 
  PhoneCall, 
  Laptop, 
  Network, 
  Layers, 
  Headset, 
  FileCheck2, 
  Phone, 
  Check, 
  XCircle, 
  Sparkles,
  Users2,
  ChevronRight
} from 'lucide-react';

interface AboutUsPageProps {
  onOpenQuickSupport: (subject?: string) => void;
}

export default function AboutUsPage({ onOpenQuickSupport }: AboutUsPageProps) {
  // Interactive tab state for "Who We Support"
  const [activeSupportTab, setActiveSupportTab] = useState<number>(0);

  // Interactive comparison toggle for "What Makes Our Model Different"
  const [activeModelView, setActiveModelView] = useState<'coordinated' | 'fragmented'>('coordinated');

  const supportAudience = [
    {
      id: 'smes',
      title: 'SMEs & Mid-Market',
      icon: Building2,
      tagline: 'Dependable IT without overhead',
      description: 'SMEs that need dependable IT support without building a large internal IT department.',
      features: [
        'Complete end-to-end IT helpdesk & onsite engineers',
        'Direct procurement & maintenance of workstations & servers',
        'Predictable monthly IT budgeting with zero surprise costs'
      ],
      recommendedService: 'IT Infrastructure Management & AMC'
    },
    {
      id: 'multisite',
      title: 'Multi-Site & Remote',
      icon: Network,
      tagline: 'Consistent support nationwide',
      description: 'Multi-site and remote-location businesses needing consistent support across branches.',
      features: [
        'Unified network configuration & VPN interconnectivity',
        'Standardized hardware imaging & rapid remote provisioning',
        'Centralized helpdesk covering all branch offices across India'
      ],
      recommendedService: 'Network Design & Pan-India Deployment'
    },
    {
      id: 'callcentres',
      title: 'Call Centres & BPOs',
      icon: PhoneCall,
      tagline: 'Carrier-grade telephony & dialers',
      description: 'Call centres, BPOs and voice-dependent organisations using PBX, dialers, IP phones and SIP/telecom.',
      features: [
        'High-concurrency Vicidial & Asterisk predictive dialers',
        'Grandstream & Fanvil IP phone fleets with PRI/GSM gateways',
        'Direct SIP trunking coordination ensuring 99.9% uptime'
      ],
      recommendedService: 'Unified Telecom & Voice Telephony'
    },
    {
      id: 'growing',
      title: 'Growing Companies',
      icon: Laptop,
      tagline: 'Flexible rentals & device lifecycle',
      description: 'Growing companies needing device procurement, rentals, deployment and lifecycle support.',
      features: [
        'Short & long term rental of Dell/Lenovo/HP enterprise laptops',
        'Same-day buffer unit replacements for hardware failures',
        'Seamless onboarding and hardware retirement handling'
      ],
      recommendedService: 'IT Equipment Rental & Leasing'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      {/* 1. Hero Section - Compact Cinematic Architectural Background */}
      <section className="relative py-10 sm:py-14 lg:py-16 w-full flex items-center justify-center overflow-hidden bg-slate-950 text-white border-b border-slate-800/80">
        {/* Background Image Layer */}
        <img
          src="/assets/about_us_hero_banner.jpg"
          alt="Unified Enterprise Modern Technology Corporate Headquarters"
          className="absolute inset-0 w-full h-full object-cover object-center transform scale-102 filter brightness-90"
        />

        {/* Multi-Layer Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f19]/90 via-[#181028]/80 to-[#0b0f19]/90 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-[#0b0f19]/60" />

        {/* Subtle Decorative Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{
            backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.25) 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}
        />

        {/* Content Container - Compact & Clean */}
        <div className="text-center px-4 relative z-10 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-2 drop-shadow-md">
            About Us
          </h1>

          <p className="text-sm sm:text-base text-slate-200 font-medium tracking-wide drop-shadow-sm">
            Unified Enterprise Solutions
          </p>
        </div>
      </section>

      {/* 2. "A Message from the CEO" - Red Priority Theme */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-100">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Arun Krishna Photo */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <figure className="relative w-full max-w-[440px] rounded-[24px] overflow-hidden shadow-md border border-slate-100 bg-slate-50 group">
                <img
                  src="/assets/arun_krishna_ceo.jpg"
                  alt="Arun Krishna, CEO of Unified Enterprise Solutions"
                  className="w-full h-[360px] sm:h-[420px] object-cover object-top group-hover:scale-102 transition-transform duration-500"
                />
              </figure>
              <figcaption className="text-xs text-slate-500 mt-3 text-center italic">
                Arun Krishna, CEO of Unified Enterprise Solutions
              </figcaption>
            </div>

            {/* Right: Message Content - Priority Red Heading */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#dc2626] tracking-tight">
                A Message from the CEO
              </h2>

              <blockquote className="space-y-3 text-[15px] sm:text-base text-slate-600 leading-relaxed">
                <p>
                  “At Unified Enterprise, our vision is simple: to let businesses focus on growth while we take care of their entire IT and Telecom infrastructure.
                </p>
                <p>
                  We understand that managing technology can be complex and expensive. Our mission is to simplify it through reliable IT support, intelligent solutions, and end-to-end technology management under one roof.
                </p>
                <p>
                  We don't just provide IT or telecom services; we build long-term partnerships that help businesses operate smarter, work efficiently, and grow with confidence.”
                </p>
              </blockquote>

              {/* CEO Motto Highlight */}
              <div className="py-2">
                <p className="text-base sm:text-lg font-bold text-[#0B192C]">
                  “You Focus on Growth. We Take Care of Your Technology.”
                </p>
              </div>

              {/* Sign-off */}
              <div className="pt-1">
                <p className="text-sm font-bold text-slate-900">- Arun Krishna, CEO</p>
                <p className="text-xs text-slate-500 font-medium">Unified Enterprise Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. "Who We Are" Section - Red Priority Theme */}
      <section className="py-14 sm:py-20 bg-slate-50/60">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Team Photo (Softcentric Rounded Card from Screenshot 2) */}
            <div className="lg:col-span-6 flex justify-center lg:justify-start">
              <figure className="relative w-full max-w-[540px] rounded-[24px] overflow-hidden shadow-md border border-slate-100 group">
                <img
                  src="/assets/about_us_team.jpg"
                  alt="Who We Are - Unified Enterprise Solutions Team"
                  className="w-full h-[320px] sm:h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </figure>
            </div>

            {/* Right: Content - Red Priority Title (#dc2626) */}
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#dc2626] tracking-tight">
                Who We Are
              </h2>

              <p className="text-[15px] sm:text-base text-slate-600 leading-relaxed font-normal">
                Unified Enterprise Solution helps businesses simplify IT and telecom operations through one accountable partner for hardware, infrastructure support, networking and business communications.
              </p>

              <p className="text-[15px] sm:text-base text-slate-600 leading-relaxed font-normal">
                Our practical approach combines technology procurement, day-to-day support and vendor coordination, reducing the complexity of managing multiple suppliers for every requirement.
              </p>

              {/* Quick Trust Badges in Priority Red */}
              <div className="pt-2 flex flex-wrap gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-[#dc2626] text-xs font-semibold border border-red-100/60">
                  <Check className="w-3.5 h-3.5" />
                  Hardware & Rentals
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-[#dc2626] text-xs font-semibold border border-red-100/60">
                  <Check className="w-3.5 h-3.5" />
                  Structured SLA Support
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-[#dc2626] text-xs font-semibold border border-red-100/60">
                  <Check className="w-3.5 h-3.5" />
                  Voice & Telecom
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. "Our Promise" Section - 3 Structured Pillar Cards in Priority Red */}
      <section className="py-14 sm:py-18 bg-slate-50/70 border-t border-b border-slate-100">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#dc2626] bg-red-50 px-3 py-1 rounded-md border border-red-100">
              Core Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B192C] mt-2">
              Our Promise
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* ONE PARTNER */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-red-300 transition-all duration-200 group flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-xl bg-red-50 text-[#dc2626] flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#0B192C] uppercase tracking-wide mb-2">
                  ONE PARTNER
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Hardware, IT infrastructure and telecom coordination.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Single vendor accountability</span>
              </div>
            </div>

            {/* RELIABLE SUPPORT */}
            <div className="bg-white rounded-2xl p-7 border-2 border-red-500/25 shadow-xs hover:shadow-md transition-all duration-200 group flex flex-col justify-between ring-2 ring-red-500/10">
              <div>
                <div className="w-11 h-11 rounded-xl bg-red-50 text-[#dc2626] flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform">
                  <Headset className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#0B192C] uppercase tracking-wide mb-2">
                  RELIABLE SUPPORT
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Structured helpdesk, escalation and onsite options.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>2–4h SLA with dedicated engineers</span>
              </div>
            </div>

            {/* CLEAR OWNERSHIP */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-red-300 transition-all duration-200 group flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-xl bg-red-50 text-[#dc2626] flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#0B192C] uppercase tracking-wide mb-2">
                  CLEAR OWNERSHIP
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Defined scope, service levels, asset records and clear terms.
                </p>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Transparent contracts & asset audit</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. "Who We Support" Section - Red Priority Theme & Replaced High-End Infrastructure Image */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#dc2626] bg-red-50 px-3 py-1 rounded-md border border-red-100">
              Tailored Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B192C] mt-2">
              Who We Support
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Click on each business profile to see how we deliver tailored support:
            </p>
          </div>

          {/* Interactive Navigation Pills */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
            {supportAudience.map((item, idx) => {
              const Icon = item.icon;
              const isActive = activeSupportTab === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSupportTab(idx)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#dc2626] text-white shadow-sm scale-[1.02]'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Card Details with Replaced Crisp Datacenter/IT Hardware Image */}
          {(() => {
            const current = supportAudience[activeSupportTab];
            const CurrentIcon = current.icon;
            return (
              <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-red-100 text-[#dc2626] flex items-center justify-center font-bold">
                        <CurrentIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#0B192C]">
                          {current.title}
                        </h3>
                        <p className="text-xs text-[#dc2626] font-semibold">{current.tagline}</p>
                      </div>
                    </div>

                    <p className="text-base text-slate-700 font-medium leading-relaxed">
                      {current.description}
                    </p>

                    <div className="space-y-2.5 pt-2">
                      {current.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 flex items-center gap-4">
                      <button
                        onClick={() => onOpenQuickSupport(current.title)}
                        className="px-5 py-2.5 rounded-full bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs sm:text-sm font-semibold transition-all shadow-xs flex items-center gap-2 active:scale-95"
                      >
                        <span>Request Tailored SLA</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <span className="text-xs text-slate-500">
                        Primary: <strong className="text-slate-800">{current.recommendedService}</strong>
                      </span>
                    </div>
                  </div>

                  {/* Replaced Image: Clean Enterprise Server Datacenter (No awkward cropped people) */}
                  <div className="lg:col-span-5 flex justify-center">
                    <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200 w-full max-w-[440px] h-[250px] sm:h-[280px] bg-slate-900 group">
                      <img
                        src="/assets/datacenter_servers.jpg"
                        alt="Enterprise IT Infrastructure & High-Availability Datacenter"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex items-end p-5">
                        <div>
                          <span className="px-2 py-0.5 rounded bg-[#dc2626] text-white text-[10px] font-bold uppercase tracking-wider">
                            Mission-Critical
                          </span>
                          <p className="text-white text-xs font-semibold mt-1">
                            Enterprise-grade IT infrastructure, PBX telephony & 24/7 SLA maintenance.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* 5. "What Makes Our Model Different" - Interactive Comparison in Priority Red */}
      <section className="py-14 sm:py-20 bg-slate-50/70 border-t border-b border-slate-100">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#dc2626] bg-red-50 px-3 py-1 rounded-md border border-red-100">
              Operational Impact
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B192C] mt-2">
              What Makes Our Model Different
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              We connect hardware supply, day-to-day support, telecom and project services into one coordinated service model with fewer hand-offs, clearer accountability and better visibility of the technology estate.
            </p>
          </div>

          {/* Interactive Toggle between Unified Coordinated Model vs Fragmented Multi-Vendor */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-full bg-slate-200/80 p-1 border border-slate-300/80">
              <button
                onClick={() => setActiveModelView('coordinated')}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeModelView === 'coordinated'
                    ? 'bg-[#dc2626] text-white shadow-xs'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                ✓ Unified Coordinated Model
              </button>
              <button
                onClick={() => setActiveModelView('fragmented')}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeModelView === 'fragmented'
                    ? 'bg-slate-800 text-white shadow-xs'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                ✕ Fragmented Multi-Vendor Model
              </button>
            </div>
          </div>

          {/* Comparison Cards */}
          {activeModelView === 'coordinated' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-300">
              <div className="bg-white rounded-2xl p-6 border-2 border-emerald-500/20 shadow-xs">
                <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm mb-2">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Fewer Hand-Offs</span>
                </div>
                <h4 className="font-bold text-[#0B192C] text-base mb-2">Direct Issue Resolution</h4>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  No finger-pointing between hardware sellers, ISP telecom providers, and software technicians. One engineer owns the ticket to completion.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border-2 border-emerald-500/20 shadow-xs">
                <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm mb-2">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Clearer Accountability</span>
                </div>
                <h4 className="font-bold text-[#0B192C] text-base mb-2">Single SLA Contract</h4>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  Clear ownership from server hardware to PRI gateways and network cabling. Guaranteed 2–4h turnaround SLAs.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border-2 border-emerald-500/20 shadow-xs">
                <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm mb-2">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Better Estate Visibility</span>
                </div>
                <h4 className="font-bold text-[#0B192C] text-base mb-2">Centralized Asset Records</h4>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  Full lifecycle visibility of all laptops, workstations, telecom extensions, and licenses, avoiding surprise downtime.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-300">
              <div className="bg-white rounded-2xl p-6 border border-red-200 shadow-xs bg-red-50/20">
                <div className="flex items-center gap-2 text-red-600 font-bold text-sm mb-2">
                  <XCircle className="w-5 h-5 shrink-0" />
                  <span>Constant Vendor Passing</span>
                </div>
                <h4 className="font-bold text-slate-800 text-base mb-2">Multi-Supplier Blame Game</h4>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  ISP blames local router, router OEM blames telecom line, software vendor blames hardware. You lose hours with zero accountability.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-red-200 shadow-xs bg-red-50/20">
                <div className="flex items-center gap-2 text-red-600 font-bold text-sm mb-2">
                  <XCircle className="w-5 h-5 shrink-0" />
                  <span>Disjointed Contracts</span>
                </div>
                <h4 className="font-bold text-slate-800 text-base mb-2">Scattered AMC & Warranties</h4>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  Multiple overlapping agreements with varying SLAs, different billing cycles, and no single point of contact when emergencies hit.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-red-200 shadow-xs bg-red-50/20">
                <div className="flex items-center gap-2 text-red-600 font-bold text-sm mb-2">
                  <XCircle className="w-5 h-5 shrink-0" />
                  <span>Blind Asset Management</span>
                </div>
                <h4 className="font-bold text-slate-800 text-base mb-2">Uncontrolled IT Expenses</h4>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                  Nobody tracks when server warranties expire, who has which leased laptop, or when telecom licenses renew.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>


      {/* 7. Bottom Clean Support CTA in Red */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Ready to Simplify Your IT & Telecom Operations?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Speak directly with our solution architects for hardware procurement, rental leasing, or enterprise AMC.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <button
              onClick={() => onOpenQuickSupport('Enterprise Consultation')}
              className="px-6 py-2.5 rounded-full bg-[#dc2626] hover:bg-[#b91c1c] text-white font-semibold text-xs sm:text-sm transition-all shadow-xs flex items-center gap-2 active:scale-95"
            >
              <span>Get Quick Support</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="tel:+919972457774"
              className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all flex items-center gap-2 active:scale-95"
            >
              <Phone className="w-4 h-4 text-red-400" />
              <span>+91 9972457774</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
