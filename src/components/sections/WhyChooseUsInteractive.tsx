import React, { useState, useRef } from 'react';
import { 
  Sparkles, CheckCircle2, ArrowRight, X, ShieldCheck, 
  Cpu, Award, Headphones, LineChart, ExternalLink 
} from 'lucide-react';

interface WhyPillar {
  id: string;
  title: string;
  badge: string;
  desc: string;
  image: string;
  icon: React.ReactNode;
  highlights: string[];
  stats: string;
  modalTitle: string;
  modalDesc: string;
  modalBenefits: string[];
}

interface WhyChooseUsInteractiveProps {
  onOpenQuickSupport: (serviceName?: string) => void;
}

const PILLARS: WhyPillar[] = [
  {
    id: 'innovation',
    title: 'Innovation',
    badge: 'Next-Gen Stack',
    desc: 'We build future-ready solutions using the latest technologies, high-density compute, and Zero-Trust networks.',
    image: '/assets/why_innovation.jpg',
    icon: <Cpu className="w-5 h-5 text-red-500" />,
    highlights: ['Cloud-Native & Hybrid Infra', 'AI-Accelerated Telemetry', 'Zero-Trust Network Access'],
    stats: 'Next-Gen Ready',
    modalTitle: 'Next-Gen Enterprise Innovation Architecture',
    modalDesc: 'We architect software-defined infrastructures that evolve alongside emerging technologies, ensuring zero downtime and future-proof adaptability.',
    modalBenefits: [
      'Zero-Trust micro-segmentation across on-prem & multi-cloud',
      'High-density server nodes engineered for machine learning & virtualization',
      'Automated configuration backup and instantaneous disaster recovery',
      'Future-proof optical interconnects and ultra-low-latency SD-WAN'
    ]
  },
  {
    id: 'expertise',
    title: 'Expertise',
    badge: 'Certified Mastery',
    desc: 'Our certified engineering team delivers reliable, high-quality digital outcomes with 8+ years of field experience.',
    image: '/assets/why_expertise.jpg',
    icon: <Award className="w-5 h-5 text-amber-500" />,
    highlights: ['Cisco CCIE & Dell Certified', '200+ Enterprise Deployments', 'Tier-3 Datacenter Ops'],
    stats: '8+ Years Exp',
    modalTitle: 'Certified Enterprise Engineering Mastery',
    modalDesc: 'Our multidisciplinary engineering teams hold top-tier credentials from Cisco, Dell EMC, Fortinet, and Microsoft, backing every deployment with deep field rigor.',
    modalBenefits: [
      'Dedicated Tier-3 senior architects overseeing system design',
      '200+ mission-critical enterprise rollouts across Pan-India',
      'Certified ITIL service management and ISO compliance protocols',
      'Continuous training on next-generation networking and cybersecurity standards'
    ]
  },
  {
    id: 'client-first',
    title: 'Client-First Approach',
    badge: 'Dedicated SLA',
    desc: 'Your business goals drive every decision we make. No multi-vendor finger-pointing or hidden fee surprises.',
    image: '/assets/why_client_first.jpg',
    icon: <Headphones className="w-5 h-5 text-emerald-500" />,
    highlights: ['15-Minute Critical SLA', 'Dedicated Account Manager', 'Zero Hidden Charges'],
    stats: '99.8% CSAT',
    modalTitle: 'Customer-Centric Partnership & Transparent SLAs',
    modalDesc: 'We reject multi-vendor finger-pointing by serving as your singular, accountable technology partner from initial blueprint through lifecycle management.',
    modalBenefits: [
      'Strict 15-minute response SLA for mission-critical disruptions',
      'A dedicated systems account manager for transparent, single-source communication',
      '100% transparent milestone pricing with zero surprise add-ons',
      'Quarterly executive reviews aligning IT performance with commercial milestones'
    ]
  },
  {
    id: 'data-backed',
    title: 'Data-Backed Strategies',
    badge: 'Real-Time Insights',
    desc: 'We turn telemetry insights and network monitoring into smarter, faster business growth and 99.9% uptime.',
    image: '/assets/why_data_backed.jpg',
    icon: <LineChart className="w-5 h-5 text-red-500" />,
    highlights: ['Proactive NOC Telemetry', 'Predictive Failure Alerts', '99.9% Uptime Guarantee'],
    stats: '99.9% Uptime',
    modalTitle: 'Actionable Telemetry & Proactive Operations',
    modalDesc: 'Real-time telemetry, continuous bandwidth monitoring, and predictive failure analysis ensure bottlenecks are corrected before affecting enterprise users.',
    modalBenefits: [
      '24/7 Network Operations Center (NOC) active telemetry monitoring',
      'Proactive component failure prediction via heuristic telemetry',
      'Granular application bandwidth utilization and traffic optimization reports',
      'Data-driven capacity forecasting ensuring seamless 10x scalability'
    ]
  }
];

export default function WhyChooseUsInteractive({ onOpenQuickSupport }: WhyChooseUsInteractiveProps) {
  const [activeModal, setActiveModal] = useState<WhyPillar | null>(null);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModal(null);
      }
    };
    if (activeModal) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModal]);

  return (
    <section className="py-20 bg-white border-b border-slate-200 relative overflow-hidden">
      {/* Subtle decorative background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-white to-slate-50/30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-50 border border-red-200/70 text-xs font-bold uppercase tracking-[0.2em] text-[#dc2626] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#dc2626]" />
            <span>Why Choose Us?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight">
            Power Digital Growth That Matters
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2.5 max-w-xl mx-auto leading-relaxed">
            Your Vision, Our Technology — Driven for Real Results.
          </p>
        </div>

        {/* 4 Interactive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((card) => (
            <TiltCard 
              key={card.id} 
              card={card} 
              onSelect={() => setActiveModal(card)} 
            />
          ))}
        </div>

      </div>

      {/* Interactive Detail Modal */}
      {activeModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveModal(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full p-5 sm:p-8 shadow-2xl border border-slate-100 relative max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-slate-50 border border-slate-100 p-1.5 shadow-md flex-shrink-0">
                  <img 
                    src={activeModal.image} 
                    alt={activeModal.title} 
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#dc2626] bg-red-50 px-2.5 py-0.5 rounded-full inline-block mb-1">
                    {activeModal.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                    {activeModal.title}
                  </h3>
                  <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1 mt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified Metric: {activeModal.stats}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setActiveModal(null)}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors flex-shrink-0"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-4 mb-6">
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                {activeModal.modalDesc}
              </p>

              <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-100">
                <h4 className="text-xs uppercase font-bold text-slate-500 tracking-wider mb-3">
                  Key Technical Advantages:
                </h4>
                <ul className="space-y-2.5">
                  {activeModal.modalBenefits.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-[#dc2626] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={() => setActiveModal(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
              >
                Back to Overview
              </button>
              <button
                onClick={() => {
                  setActiveModal(null);
                  onOpenQuickSupport(`Inquiry: Why Choose Us - ${activeModal.title}`);
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <span>Consult Our Specialists</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}

interface TiltCardProps {
  card: WhyPillar;
  onSelect: () => void;
}

function TiltCard({ card, onSelect }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState<string>('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  const [glareStyle, setGlareStyle] = useState<{ x: number; y: number; opacity: number }>({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;

    setTransformStyle(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.025, 1.025, 1.025)`);
    setGlareStyle({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.18
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlareStyle({ x: 50, y: 50, opacity: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onSelect}
      style={{
        transform: transformStyle,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)'
      }}
      className="relative bg-white hover:bg-slate-50/50 rounded-[26px] p-6 sm:p-7 text-slate-800 text-center shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_22px_45px_-12px_rgba(220,38,38,0.18)] cursor-pointer flex flex-col justify-between items-center group overflow-hidden border border-slate-200/90 hover:border-red-400/60 select-none transition-all duration-300"
    >
      {/* Interactive Glare Layer */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-[26px]"
        style={{
          background: `radial-gradient(circle 240px at ${glareStyle.x}% ${glareStyle.y}%, rgba(220, 38, 38, ${glareStyle.opacity * 0.4}), transparent 80%)`,
        }}
      />

      {/* Card Content Container */}
      <div className="flex flex-col items-center w-full z-10">
        
        {/* Floating Top Badge Tag */}
        <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200/70 text-[11px] font-bold tracking-wide uppercase text-[#dc2626] shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#dc2626]" />
          <span>{card.badge}</span>
        </div>

        {/* Interactive 3D Illustrated Image Container */}
        <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100/70 shadow-sm p-2 mb-5 ring-1 ring-slate-200/80 flex items-center justify-center transform group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-300 ease-out">
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover rounded-xl"
            loading="lazy"
          />

          {/* Interactive Floating Quick-Inspect Pill */}
          <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap flex items-center gap-1 border border-slate-700">
            <span>Explore</span>
            <ExternalLink className="w-2.5 h-2.5 text-red-400" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold mb-2.5 text-slate-900 group-hover:text-[#dc2626] transition-colors tracking-tight">
          {card.title}
        </h3>

        {/* Description - Full text display with uniform min-height */}
        <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal mb-5 min-h-[72px] sm:min-h-[78px] flex items-center justify-center text-center">
          {card.desc}
        </p>
      </div>

      {/* Interactive Bottom Bar */}
      <div className="w-full pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs z-10">
        <span className="text-[11px] font-semibold text-slate-700 flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#dc2626]" />
          <span>{card.stats}</span>
        </span>
        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#dc2626] group-hover:translate-x-1 transition-transform">
          <span>Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>

    </div>
  );
}
