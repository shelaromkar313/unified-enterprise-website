import React from 'react';
import { Layers, ShieldCheck, PhoneCall, Clock, ArrowUpRight } from 'lucide-react';
import { CORE_PILLARS } from '../../data/ueContent';

interface CapabilityStripProps {
  onSelectPillar?: (title: string) => void;
}

export default function CapabilityStrip({ onSelectPillar }: CapabilityStripProps) {
  const iconMap: Record<string, React.ReactNode> = {
    Layers: <Layers className="w-5 h-5" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5" />,
    PhoneCall: <PhoneCall className="w-5 h-5" />,
    Clock: <Clock className="w-5 h-5" />,
  };

  return (
    <section className="py-12 bg-white border-b border-[#D6E4EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Sub-header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-[#368C91] mb-1 block">
              Core Enterprise Competencies
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#17324D] tracking-tight">
              One Unified Partner. Complete Technology Reliability.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#526477] max-w-md">
            Eliminating multi-vendor friction by converging physical computing, backbone networking, enterprise telephony, and SLA support.
          </p>
        </div>

        {/* 4 Capability Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CORE_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="enterprise-card rounded-xl p-5 border border-[#D6E4EE] bg-[#F8FAFC] flex flex-col justify-between group cursor-pointer"
              onClick={() => onSelectPillar && onSelectPillar(pillar.title)}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#EAF4FB] text-[#368C91] flex items-center justify-center group-hover:bg-[#368C91] group-hover:text-white transition-colors duration-200">
                    {iconMap[pillar.icon]}
                  </div>
                  <span className="text-[11px] font-semibold text-[#17324D] bg-white border border-[#D6E4EE] px-2 py-0.5 rounded-full font-mono">
                    {pillar.metric}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#17324D] group-hover:text-[#368C91] transition-colors mb-1">
                  {pillar.title}
                </h3>
                <p className="text-xs font-semibold text-[#368C91] mb-2">{pillar.tagline}</p>
                <p className="text-xs text-[#526477] leading-relaxed mb-4">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#D6E4EE]/60 flex items-center justify-between text-xs font-semibold text-[#17324D] group-hover:text-[#368C91]">
                <span>Explore Architecture</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
