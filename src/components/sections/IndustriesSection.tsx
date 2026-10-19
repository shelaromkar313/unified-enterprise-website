import React, { useState } from 'react';
import { 
  Building2, PhoneForwarded, Factory, Truck, 
  MapPin, Briefcase, Globe, ArrowRight, CheckCircle2 
} from 'lucide-react';
import { INDUSTRIES_DATA, IndustryItem } from '../../data/ueContent';

interface IndustriesSectionProps {
  onSelectIndustry: (ind: IndustryItem) => void;
}

export default function IndustriesSection({ onSelectIndustry }: IndustriesSectionProps) {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  const iconList = [
    <Building2 className="w-5 h-5" />,
    <PhoneForwarded className="w-5 h-5" />,
    <Factory className="w-5 h-5" />,
    <Truck className="w-5 h-5" />,
    <MapPin className="w-5 h-5" />,
    <Briefcase className="w-5 h-5" />,
    <Globe className="w-5 h-5" />,
  ];

  const current = INDUSTRIES_DATA[selectedIdx];

  return (
    <section id="industries" className="py-24 bg-[#F8FAFC] border-b border-[#D6E4EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF4FB] text-[#368C91] text-xs font-bold uppercase tracking-wider mb-3">
            <span>Specialized Sector Deployments</span>
          </div>
          <h2 className="h2-section text-[#17324D] mb-4">
            Industries We Power
          </h2>
          <p className="text-base text-[#526477]">
            Every industry has distinct uptime demands, compliance boundaries, and user footprints. We design customized IT and telecom architectures for specialized sectors.
          </p>
        </div>

        {/* Industry Pill Navigation */}
        <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-4 mb-10 gap-2 scrollbar-none">
          {INDUSTRIES_DATA.map((ind, idx) => (
            <button
              key={ind.id}
              onClick={() => setSelectedIdx(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 border ${
                selectedIdx === idx
                  ? 'bg-[#17324D] text-white border-[#17324D] shadow-sm'
                  : 'bg-white text-[#526477] border-[#D6E4EE] hover:bg-[#EAF4FB] hover:text-[#17324D]'
              }`}
            >
              <span>{ind.title}</span>
            </button>
          ))}
        </div>

        {/* Active Industry Deep-Dive Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#D6E4EE] shadow-enterprise-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#EAF4FB] text-[#368C91] flex items-center justify-center">
                  {iconList[selectedIdx]}
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#368C91]">Sector Focus</span>
                  <h3 className="text-2xl font-bold text-[#17324D]">{current.title}</h3>
                </div>
              </div>

              {/* Challenge Box */}
              <div className="bg-[#F8FAFC] border-l-4 border-amber-500/80 p-4 rounded-r-xl">
                <span className="text-xs font-bold text-[#17324D] uppercase tracking-wide block mb-1">Sector Operational Bottlenecks:</span>
                <p className="text-xs sm:text-sm text-[#526477] leading-relaxed">{current.challenges}</p>
              </div>

              {/* Engineered Solution Box */}
              <div className="bg-[#EAF4FB]/50 border-l-4 border-[#368C91] p-4 rounded-r-xl">
                <span className="text-xs font-bold text-[#17324D] uppercase tracking-wide block mb-1">Unified Enterprise Architectural Solution:</span>
                <p className="text-xs sm:text-sm text-[#17324D] leading-relaxed font-medium">{current.engineeredSolution}</p>
              </div>

              {/* Core Deployed Products */}
              <div>
                <span className="text-xs uppercase font-bold text-[#526477] block mb-2">Integrated Tech Stack:</span>
                <div className="flex flex-wrap gap-2">
                  {current.keyProducts.map((prod, pIdx) => (
                    <span
                      key={pIdx}
                      className="text-xs font-semibold text-[#17324D] bg-[#F2F6F8] border border-[#D6E4EE] px-3 py-1.5 rounded-lg flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#368C91]" />
                      {prod}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Action Blueprint */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#17324D] to-[#0D2033] rounded-2xl p-7 text-white shadow-xl space-y-6">
              <div>
                <span className="text-xs font-mono text-[#368C91] uppercase tracking-wider block mb-1">
                  Enterprise SLA Commitment
                </span>
                <h4 className="text-lg font-bold text-white">
                  Custom Industry Architecture Package
                </h4>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  We deploy standardized reference architectures tailored to {current.title}, complete with hardware, cabling, carrier lines, and maintenance contracts.
                </p>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-slate-700/80 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Deployment SLA</span>
                  <span className="font-semibold text-white">24h - 5 Business Days</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Support Availability</span>
                  <span className="font-semibold text-white">24/5 & Optional 24/7</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Hardware Replacement</span>
                  <span className="font-semibold text-white">Next-Business-Day / Standby</span>
                </div>
              </div>

              <button
                onClick={() => onSelectIndustry(current)}
                className="w-full py-3 rounded-xl bg-[#368C91] hover:bg-[#2e787d] text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <span>Consult Our Sector Specialist</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
