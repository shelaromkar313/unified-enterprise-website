import React, { useState } from 'react';
import { 
  Server, PhoneCall, Briefcase, Network, 
  Headphones, Cpu, ShieldCheck, Laptop, 
  ArrowRight, CheckCircle2, ChevronRight, Layers, ExternalLink 
} from 'lucide-react';
import { SOLUTIONS_DATA, SolutionItem } from '../../data/ueContent';

interface SolutionsMatrixProps {
  onSelectSolution: (solution: SolutionItem) => void;
}

export default function SolutionsMatrix({ onSelectSolution }: SolutionsMatrixProps) {
  const [activeSolutionId, setActiveSolutionId] = useState<string>(SOLUTIONS_DATA[0].id);

  const activeSolution = SOLUTIONS_DATA.find((s) => s.id === activeSolutionId) || SOLUTIONS_DATA[0];

  const iconMap: Record<string, React.ReactNode> = {
    Server: <Server className="w-5 h-5" />,
    PhoneCall: <PhoneCall className="w-5 h-5" />,
    Briefcase: <Briefcase className="w-5 h-5" />,
    Network: <Network className="w-5 h-5" />,
    Headphones: <Headphones className="w-5 h-5" />,
    Cpu: <Cpu className="w-5 h-5" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5" />,
    Laptop: <Laptop className="w-5 h-5" />,
  };

  return (
    <section id="solutions" className="py-24 bg-white border-b border-[#D6E4EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#368C91] mb-2 block">
              Architected For Scalability & Security
            </span>
            <h2 className="h2-section text-[#17324D]">
              Engineered Enterprise Solutions
            </h2>
          </div>
          <p className="text-sm text-[#526477] max-w-md">
            Whether establishing a 500-seat call center, securing multi-location branch networks, or upgrading enterprise storage arrays, our solutions are built for zero disruption.
          </p>
        </div>

        {/* Cisco-Style Two-Column Interactive Architecture Studio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Solution Selector List (Left Column) */}
          <div className="lg:col-span-5 space-y-2.5">
            {SOLUTIONS_DATA.map((solution) => {
              const isActive = solution.id === activeSolutionId;
              return (
                <button
                  key={solution.id}
                  onClick={() => setActiveSolutionId(solution.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between group ${
                    isActive
                      ? 'bg-[#EAF4FB] border-[#368C91] shadow-sm'
                      : 'bg-white border-[#D6E4EE] hover:bg-[#F8FAFC]'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                      isActive
                        ? 'bg-[#368C91] text-white'
                        : 'bg-[#F2F6F8] text-[#17324D] group-hover:bg-[#EAF4FB]'
                    }`}>
                      {iconMap[solution.icon] || <Layers className="w-4 h-4" />}
                    </div>
                    <div>
                      <h4 className={`text-sm font-bold transition-colors ${
                        isActive ? 'text-[#17324D]' : 'text-[#17324D] group-hover:text-[#368C91]'
                      }`}>
                        {solution.title}
                      </h4>
                      <p className="text-[11px] text-[#526477] line-clamp-1">{solution.targetAudience}</p>
                    </div>
                  </div>

                  <ChevronRight className={`w-4 h-4 transition-transform ${
                    isActive ? 'text-[#368C91] translate-x-1' : 'text-slate-400 group-hover:translate-x-0.5'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Active Solution Deep-Dive Blueprint (Right Column) */}
          <div className="lg:col-span-7 bg-[#F8FAFC] border border-[#D6E4EE] rounded-2xl p-6 sm:p-8 shadow-enterprise-lg relative overflow-hidden">
            
            {/* Top Bar with Audience Tag */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-5 border-b border-[#D6E4EE]">
              <div>
                <span className="text-[11px] font-bold tracking-wide uppercase text-[#368C91] block mb-1">
                  Architecture Blueprint
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#17324D]">
                  {activeSolution.title}
                </h3>
              </div>
              <span className="text-xs font-semibold text-[#17324D] bg-[#EAF4FB] border border-[#CFDFEC] px-3 py-1.5 rounded-full">
                Target: {activeSolution.targetAudience}
              </span>
            </div>

            {/* Solution Summary */}
            <p className="text-sm sm:text-base text-[#526477] leading-relaxed mb-6">
              {activeSolution.summary}
            </p>

            {/* Architecture Highlights Pill Badges */}
            <div className="mb-6">
              <span className="text-xs uppercase font-bold text-[#17324D] tracking-wider block mb-2.5">
                Key Engineering Focus
              </span>
              <div className="flex flex-wrap gap-2">
                {activeSolution.architecturePoints.map((point, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium text-[#17324D] bg-white border border-[#D6E4EE] px-3 py-1 rounded-lg flex items-center gap-1.5 shadow-2xs"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#368C91]"></span>
                    {point}
                  </span>
                ))}
              </div>
            </div>

            {/* Turnkey Deliverables Checklist */}
            <div className="mb-8">
              <span className="text-xs uppercase font-bold text-[#17324D] tracking-wider block mb-3">
                Core Deliverables & Specifications
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeSolution.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 bg-white p-3 rounded-xl border border-[#D6E4EE]">
                    <CheckCircle2 className="w-4 h-4 text-[#368C91] shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-[#17324D] leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Consultation CTA */}
            <div className="pt-6 border-t border-[#D6E4EE] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#526477]">
                Ready to review technical requirements for your deployment?
              </div>
              <button
                onClick={() => onSelectSolution(activeSolution)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#17324D] hover:bg-[#368C91] text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 group shadow-sm"
              >
                <span>Request Solution Blueprint</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
