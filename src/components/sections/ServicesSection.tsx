import React, { useState } from 'react';
import { 
  ShieldCheck, Wrench, Clock, Users, 
  Check, ArrowRight, Activity, Cpu, 
  HelpCircle, AlertCircle, FileSpreadsheet, HardDrive 
} from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '../../data/ueContent';

interface ServicesSectionProps {
  onRequestAMC: () => void;
}

export default function ServicesSection({ onRequestAMC }: ServicesSectionProps) {
  const [activeTab, setActiveTab] = useState<'services' | 'amcTiers'>('services');

  const amcTiers = [
    {
      name: 'Essential Care AMC',
      badge: 'Standard SLA',
      description: 'Ideal for branch offices and growing SMEs needing dependable ongoing maintenance and scheduled health checks.',
      responseTime: '4-Hour Response',
      coverageTime: '24/5 Business Hours Support',
      features: [
        'Preventive quarterly hardware health checks',
        'Standard hardware replacement coordination',
        'Unlimited remote desktop & network support',
        'Quarterly OS security patching and cleanups',
        'Monthly operational health report'
      ]
    },
    {
      name: 'Corporate Advanced AMC',
      badge: 'Most Popular',
      highlighted: true,
      description: 'Designed for corporate environments requiring fast onsite response, dedicated engineers, and core switch/telecom coverage.',
      responseTime: '2-Hour Priority SLA',
      coverageTime: '24/5 with On-Call Weekend Support',
      features: [
        'Dedicated primary & secondary account engineers',
        'Immediate onsite dispatch for hardware faults',
        'Standby loaner hardware during repair cycles',
        'PBX, VoIP & Firewall continuous management',
        'Automated daily backup validation audits',
        'Monthly performance optimization reviews'
      ]
    },
    {
      name: 'Mission-Critical Platinum',
      badge: '24/7 Dedicated',
      description: 'Engineered for BPOs, 24/7 call centers, financial institutions, and datacenters where every minute of downtime impacts revenue.',
      responseTime: 'Sub-60 Minute Emergency SLA',
      coverageTime: '24/7/365 Non-Stop NOC Monitoring',
      features: [
        'Dedicated Resident Engineers stationed on-premises',
        '24/7/365 Network Operations Center (NOC) oversight',
        'Guaranteed zero-loss dialer and PBX failover SLAs',
        'Full disaster recovery staging & drills',
        'Executive incident commander escalation',
        'NIST-compliant hardware data destruction'
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#F2F6F8] border-b border-[#D6E4EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#D6E4EE] text-[#368C91] text-xs font-bold uppercase tracking-wider mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>24/5 Standard & Optional 24/7 SLAs</span>
          </div>
          <h2 className="h2-section text-[#17324D] mb-4">
            Managed IT Services & AMC Contracts
          </h2>
          <p className="text-base text-[#526477]">
            From resident onsite systems engineers to round-the-clock emergency infrastructure support, we keep your computing, networking, and telephony operational without excuses.
          </p>

          {/* Toggle View */}
          <div className="mt-8 inline-flex p-1 bg-white border border-[#D6E4EE] rounded-xl shadow-sm">
            <button
              onClick={() => setActiveTab('services')}
              className={`px-5 py-2 text-xs font-bold rounded-lg transition-all ${
                activeTab === 'services'
                  ? 'bg-[#17324D] text-white shadow-sm'
                  : 'text-[#526477] hover:text-[#17324D]'
              }`}
            >
              Enterprise Services Directory
            </button>
            <button
              onClick={() => setActiveTab('amcTiers')}
              className={`px-5 py-2 text-xs font-bold rounded-lg transition-all ${
                activeTab === 'amcTiers'
                  ? 'bg-[#17324D] text-white shadow-sm'
                  : 'text-[#526477] hover:text-[#17324D]'
              }`}
            >
              AMC Service Level Agreement Tiers
            </button>
          </div>
        </div>

        {/* Tab 1: Detailed Services Grid */}
        {activeTab === 'services' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-300">
            {SERVICES_DATA.map((srv) => (
              <div
                key={srv.id}
                className="enterprise-card rounded-2xl p-6 bg-white border border-[#D6E4EE] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold tracking-wide uppercase text-[#368C91] bg-[#EAF4FB] px-2 py-0.5 rounded">
                      {srv.sla}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#17324D] mb-2 leading-snug">
                    {srv.title}
                  </h3>
                  
                  <p className="text-xs text-[#526477] leading-relaxed mb-4">
                    {srv.scope}
                  </p>

                  {/* Deliverables */}
                  <div className="space-y-1.5 mb-4">
                    {srv.deliverables.slice(0, 3).map((deliv, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-xs text-[#17324D]">
                        <Check className="w-3.5 h-3.5 text-[#368C91] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#D6E4EE] text-[11px] text-[#526477]">
                  <span className="font-semibold text-[#17324D]">Coverage: </span>
                  {srv.coverage}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: AMC Tiers Comparison */}
        {activeTab === 'amcTiers' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in fade-in duration-300">
            {amcTiers.map((tier, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-8 border flex flex-col justify-between transition-all ${
                  tier.highlighted
                    ? 'bg-white border-[#368C91] shadow-enterprise-hover ring-2 ring-[#368C91]/30 relative'
                    : 'bg-white border-[#D6E4EE] shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                      tier.highlighted
                        ? 'bg-[#368C91] text-white'
                        : 'bg-[#EAF4FB] text-[#17324D]'
                    }`}>
                      {tier.badge}
                    </span>
                    <span className="text-xs font-mono font-semibold text-[#526477]">
                      {tier.responseTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#17324D] mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-xs text-[#526477] leading-relaxed mb-6">
                    {tier.description}
                  </p>

                  <div className="bg-[#F8FAFC] border border-[#D6E4EE] p-3 rounded-xl mb-6">
                    <span className="text-[11px] uppercase font-bold text-[#526477] block mb-1">Support Window</span>
                    <span className="text-xs font-bold text-[#17324D]">{tier.coverageTime}</span>
                  </div>

                  <div className="space-y-3 mb-8">
                    <span className="text-xs uppercase font-bold text-[#17324D] tracking-wider block">
                      Contract Inclusions:
                    </span>
                    {tier.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-[#17324D]">
                        <Check className="w-4 h-4 text-[#368C91] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={onRequestAMC}
                  className={`w-full py-3 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 transition-all ${
                    tier.highlighted
                      ? 'bg-[#17324D] hover:bg-[#368C91] text-white shadow-md'
                      : 'bg-[#F2F6F8] hover:bg-[#17324D] text-[#17324D] hover:text-white'
                  }`}
                >
                  <span>Request Custom AMC Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Audit Callout Banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-[#D6E4EE] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#EAF4FB] text-[#368C91] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#17324D]">Need an Infrastructure or Network Audit First?</h4>
              <p className="text-xs sm:text-sm text-[#526477]">
                We perform non-intrusive security, cable, server health, and firewall rule audits with a written remediation roadmap.
              </p>
            </div>
          </div>
          <button
            onClick={onRequestAMC}
            className="shrink-0 px-5 py-2.5 bg-[#EAF4FB] hover:bg-[#17324D] text-[#17324D] hover:text-white border border-[#CFDFEC] rounded-xl text-xs font-semibold transition-colors"
          >
            Schedule Assessment
          </button>
        </div>

      </div>
    </section>
  );
}
