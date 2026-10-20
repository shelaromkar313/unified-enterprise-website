import React from 'react';
import { 
  Globe, 
  Zap, 
  ShieldCheck, 
  Activity, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Server, 
  Network, 
  Layers, 
  Building2,
  Check
} from 'lucide-react';

interface IllLeasedLineShowcaseProps {
  onOpenInquiry: (topic: string) => void;
}

interface IllPlan {
  id: string;
  name: string;
  speed: string;
  users: string;
  sla: string;
  ips: string;
  badge?: string;
  isPopular?: boolean;
  features: string[];
}

const ILL_PLANS: IllPlan[] = [
  {
    id: 'plan-50',
    name: '50 Mbps Leased Line',
    speed: '50 Mbps',
    users: '15 – 35 Users',
    sla: '99.5% Uptime SLA',
    ips: '4 Static Public IPs (/29)',
    badge: 'Branch Office',
    features: [
      '1:1 Symmetrical Upload & Download',
      'Dedicated unshared fiber pipe',
      '< 4-Hour Mean Time to Repair (MTTR)',
      'Managed Gigabit CPE router included'
    ]
  },
  {
    id: 'plan-100',
    name: '100 Mbps Leased Line',
    speed: '100 Mbps',
    users: '35 – 80 Users',
    sla: '99.5% Uptime SLA',
    ips: '4 to 8 Static Public IPs',
    badge: 'Most Popular',
    isPopular: true,
    features: [
      '1:1 Symmetrical Upload & Download',
      'Zero packet loss for VoIP & Teams calls',
      'Dual-path fiber ring failover option',
      'Real-time MRTG client traffic graph'
    ]
  },
  {
    id: 'plan-300',
    name: '300 Mbps Leased Line',
    speed: '300 Mbps',
    users: '80 – 200 Users',
    sla: '99.9% Uptime SLA',
    ips: '8 to 13 Static Public IPs (/28)',
    badge: 'Call Centers & BPOs',
    features: [
      '1:1 Symmetrical Upload & Download',
      'Ultra-low jitter (< 2ms) for SIP dialers',
      '24/7 Managed NOC proactive link monitoring',
      'Dedicated technical account manager'
    ]
  },
  {
    id: 'plan-1000',
    name: '1 Gbps+ Leased Line',
    speed: '1 Gbps to 10 Gbps',
    users: '200+ Users & Data Centers',
    sla: '99.95% Carrier SLA',
    ips: 'Custom /27 Subnet + BGP ASN',
    badge: 'Enterprise Flagship',
    features: [
      '1:1 Symmetrical Upload & Download',
      'Dual-entry underground fiber routes',
      'BGP multi-homing across dual Tier-1 ISPs',
      'Contractual financial uptime credits'
    ]
  }
];

export default function IllLeasedLineShowcase({ onOpenInquiry }: IllLeasedLineShowcaseProps) {
  return (
    <div className="space-y-8">
      
      {/* 1. HERO INTRO (CLEAN & NON-MESSY) */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-50 border border-red-200 text-[#dc2626] text-[11px] font-bold uppercase tracking-wider mb-3">
          <Globe className="w-3 h-3 text-[#dc2626]" />
          <span>Dedicated Connectivity</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
          Enterprise <span className="text-[#dc2626]">Internet Leased Line (ILL)</span>
        </h1>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl mb-5">
          A dedicated, private 1:1 fiber optic leased line directly from Tier-1 telecom backbones (Airtel, Tata, Jio). Unlike shared commercial broadband, your bandwidth is 100% reserved with equal upload and download speeds, zero peak-hour slowdowns, and a 99.5% uptime SLA.
        </p>

        {/* 3 Quick Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 border-t border-slate-100">
          <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200/70 rounded-xl p-3">
            <Zap className="w-4 h-4 text-[#dc2626] shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-slate-900">1:1 Symmetrical Bandwidth</h4>
              <p className="text-[11px] text-slate-500">Equal upload &amp; download speeds</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200/70 rounded-xl p-3">
            <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-slate-900">99.5%+ Committed SLA</h4>
              <p className="text-[11px] text-slate-500">&lt; 4-Hour repair commitment</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200/70 rounded-xl p-3">
            <Activity className="w-4 h-4 text-emerald-600 shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-slate-900">Static Public IPs</h4>
              <p className="text-[11px] text-slate-500">For VPNs, mail servers &amp; PBX</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. BANDWIDTH PACKAGES (CLEAN 2x2 GRID) */}
      <div>
        <div className="mb-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
            Bandwidth Packages We Provide
          </h2>
          <p className="text-xs text-slate-500">
            Dedicated symmetrical plans with static IP pool and managed hardware router
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {ILL_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white rounded-2xl border p-5 sm:p-6 transition-all duration-200 flex flex-col justify-between ${
                plan.isPopular 
                  ? 'border-[#dc2626] ring-1 ring-red-100 shadow-sm' 
                  : 'border-slate-200/90 shadow-2xs hover:shadow-xs'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                    plan.isPopular ? 'bg-red-50 text-[#dc2626]' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {plan.badge}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500">
                    {plan.users}
                  </span>
                </div>

                <div className="flex items-baseline gap-2 mb-3">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    {plan.speed}
                  </h3>
                  <span className="text-xs text-slate-500 font-medium">Dedicated 1:1</span>
                </div>

                <div className="space-y-2 mb-4 text-xs text-slate-700 border-t border-slate-100 pt-3">
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-medium">
                  {plan.ips}
                </span>
                <button
                  onClick={() => onOpenInquiry(`ILL Inquiry: ${plan.name} (${plan.speed})`)}
                  className="px-4 py-2 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. WHAT OUR COMPANY PROVIDES EXACTLY */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="mb-5">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
            What Our Company Provides Exactly
          </h2>
          <p className="text-xs text-slate-500">
            Complete end-to-end delivery from feasibility survey to 24/7 managed operations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-50/70 border border-slate-200/70 rounded-xl p-4">
            <div className="w-8 h-8 rounded-lg bg-red-50 text-[#dc2626] flex items-center justify-center font-bold text-xs mb-2.5">
              <Network className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-bold text-slate-900 mb-1">Multi-Carrier Survey</h4>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              We check fiber feasibility across Airtel, Tata, and Jio to get your building the lowest corporate rate.
            </p>
          </div>

          <div className="bg-slate-50/70 border border-slate-200/70 rounded-xl p-4">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs mb-2.5">
              <Layers className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-bold text-slate-900 mb-1">Dual-Path Failover</h4>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Active-Standby redundant routes (Fiber + Wireless RF) for zero-downtime protection against road cuts.
            </p>
          </div>

          <div className="bg-slate-50/70 border border-slate-200/70 rounded-xl p-4">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs mb-2.5">
              <Server className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-bold text-slate-900 mb-1">Managed Edge Router</h4>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              We install and manage enterprise Cisco/Fortinet CPE with QoS traffic priority for VoIP &amp; ERP.
            </p>
          </div>

          <div className="bg-slate-50/70 border border-slate-200/70 rounded-xl p-4">
            <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-xs mb-2.5">
              <Clock className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-bold text-slate-900 mb-1">24/7 Managed NOC</h4>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Proactive link health checks every 60s, dedicated support desk, and single consolidated GST billing.
            </p>
          </div>
        </div>
      </div>

      {/* 4. WHY ILL INSTEAD OF BROADBAND (3 KEY ADVANTAGES - CLEAN & CONCISE) */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="mb-5">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
            Why Choose Leased Line Over Broadband?
          </h2>
          <p className="text-xs text-slate-500">
            Three key performance advantages essential for business operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-slate-200/80 rounded-xl p-4.5 bg-slate-50/50">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-6 rounded-full bg-red-100 text-[#dc2626] font-bold text-xs flex items-center justify-center shrink-0">1</span>
              <h3 className="text-xs font-bold text-slate-900">Equal Upload Speeds</h3>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Broadband gives slow 10-20% upload. ILL gives 100% equal upload for instant file backups and glitch-free Zoom meetings.
            </p>
          </div>

          <div className="border border-slate-200/80 rounded-xl p-4.5 bg-slate-50/50">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 font-bold text-xs flex items-center justify-center shrink-0">2</span>
              <h3 className="text-xs font-bold text-slate-900">Zero Peak-Hour Slowdown</h3>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              No sharing with neighboring offices. Your bandwidth is 100% dedicated to your staff at all times of day.
            </p>
          </div>

          <div className="border border-slate-200/80 rounded-xl p-4.5 bg-slate-50/50">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 font-bold text-xs flex items-center justify-center shrink-0">3</span>
              <h3 className="text-xs font-bold text-slate-900">Guaranteed 4-Hour Fix</h3>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Broadband takes 24-48 hours to fix. ILL provides a contractual SLA with dedicated field engineers dispatched immediately.
            </p>
          </div>
        </div>
      </div>

      {/* 5. FREE SITE FEASIBILITY CTA */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-red-400 block mb-1">
            Free Building Feasibility Survey
          </span>
          <h3 className="text-lg sm:text-xl font-bold tracking-tight mb-2">
            Check Leased Line Availability at Your Location
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
            Provide your office address or pin code. Our team will survey fiber routes across Airtel, Tata, and Jio within 2 hours and provide a discounted quote.
          </p>
        </div>
        <button
          onClick={() => onOpenInquiry('Internet Leased Line (ILL) Feasibility Check')}
          className="px-6 py-3 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold transition-all shadow-md hover:shadow-lg shrink-0 cursor-pointer flex items-center gap-1.5"
        >
          <span>Check Feasibility</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
