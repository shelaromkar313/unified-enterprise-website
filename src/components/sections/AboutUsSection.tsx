import React from 'react';
import { 
  Building, Target, Compass, Award, 
  MapPin, Users, CheckCircle2, ArrowRight, ShieldCheck, Cpu 
} from 'lucide-react';

interface AboutUsSectionProps {
  onContactSpecialist: () => void;
}

export default function AboutUsSection({ onContactSpecialist }: AboutUsSectionProps) {
  const steps = [
    {
      num: '01',
      title: 'Architectural Audit & Discovery',
      desc: 'Onsite site survey, traffic analysis, power budget verification, and legacy bottleneck auditing.'
    },
    {
      num: '02',
      title: 'Tailored Blueprint & Procurement',
      desc: 'Direct tier-1 vendor supply chain sourcing, custom rack schematics, and pre-deployment burn-in tests.'
    },
    {
      num: '03',
      title: 'Non-Disruptive Deployment',
      desc: 'Staged weekend migrations, structured cabling, Zero-Touch OS image flashing, and PBX route validation.'
    },
    {
      num: '04',
      title: '24/5 & 24/7 Managed Governance',
      desc: 'Continuous NOC telemetry, quarterly hardware health inspections, and strict 2-4 hour onsite SLA response.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white border-b border-[#D6E4EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Why Unified Enterprise Solution? */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF4FB] text-[#368C91] text-xs font-bold uppercase tracking-wider">
              <span>Why Unified Enterprise Solution?</span>
            </div>
            
            <h2 className="h2-section text-[#17324D]">
              Eliminating the Multi-Vendor Fault Line.
            </h2>

            <p className="text-sm sm:text-base text-[#526477] leading-relaxed">
              When hardware, internet lines, PBX dialers, and firewall security are provided by separate disconnected vendors, downtime escalates into finger-pointing.
            </p>

            <p className="text-sm sm:text-base text-[#526477] leading-relaxed">
              Unified Enterprise Solutions (UE) serves as your single accountable engineering authority. We supply the physical hardware, architect the network routing, deploy the telephony, and back it with guaranteed onsite SLAs.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#D6E4EE]">
                <span className="text-2xl font-extrabold text-[#17324D] block mb-1">Single SLA</span>
                <span className="text-xs text-[#526477]">Unified accountability across hardware, voice & security</span>
              </div>
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#D6E4EE]">
                <span className="text-2xl font-extrabold text-[#368C91] block mb-1">Tier-1 Sales</span>
                <span className="text-xs text-[#526477]">Certified commercial partner procurement chains</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden border border-[#D6E4EE] shadow-enterprise-lg bg-[#EAF4FB]">
              <img
                src="/assets/datacenter_servers.jpg"
                alt="Unified Enterprise Datacenter and Infrastructure"
                className="w-full h-[400px] object-cover"
              />
              <div className="p-6 bg-white border-t border-[#D6E4EE]">
                <h4 className="text-sm font-bold text-[#17324D] mb-1">Our Mission & Architectural Approach</h4>
                <p className="text-xs text-[#526477] leading-relaxed">
                  To provide enterprises with resilient, zero-headache technology foundations that enable seamless scaling across cities, branches, and remote workforces.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Service Delivery Model */}
        <div className="mt-8 pt-16 border-t border-[#D6E4EE]">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#368C91] block mb-2">
              Rigorous Engineering Lifecycle
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#17324D]">
              Our Service Delivery Model
            </h3>
            <p className="text-xs sm:text-sm text-[#526477] mt-2">
              A systematic 4-phase deployment methodology guaranteeing zero business interruption.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#D6E4EE] relative group hover:border-[#368C91] transition-all"
              >
                <span className="text-3xl font-extrabold text-[#368C91]/30 group-hover:text-[#368C91] transition-colors block mb-3 font-mono">
                  {st.num}
                </span>
                <h4 className="text-sm font-bold text-[#17324D] mb-2">{st.title}</h4>
                <p className="text-xs text-[#526477] leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Resources & Articles Strip */}
        <div id="resources" className="mt-16 pt-16 border-t border-[#D6E4EE]">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#368C91] block mb-1">
                Enterprise Thought Leadership
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#17324D]">
                Resources & Technology Integration Articles
              </h3>
            </div>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#17324D] hover:text-[#368C91] flex items-center gap-1.5 transition-colors"
            >
              <span>Connect on LinkedIn Articles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-[#F2F6F8] border border-[#D6E4EE] space-y-2">
              <span className="text-[10px] font-mono font-bold text-[#368C91] uppercase">IT Infrastructure Guide</span>
              <h5 className="text-sm font-bold text-[#17324D]">Consolidating Voice PBX and Data Networks in Modern BPOs</h5>
              <p className="text-xs text-[#526477]">Best practices in eliminating packet jitter, enforcing QoS queues, and configuring failover PRI/SIP lines.</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F2F6F8] border border-[#D6E4EE] space-y-2">
              <span className="text-[10px] font-mono font-bold text-[#368C91] uppercase">Security Architecture</span>
              <h5 className="text-sm font-bold text-[#17324D]">Transitioning from Legacy Routers to Zero-Trust NGFWs</h5>
              <p className="text-xs text-[#526477]">A blueprint for multi-location enterprises seeking granular application inspection and automated threat response.</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F2F6F8] border border-[#D6E4EE] space-y-2">
              <span className="text-[10px] font-mono font-bold text-[#368C91] uppercase">AMC Strategy</span>
              <h5 className="text-sm font-bold text-[#17324D]">Evaluating Comprehensive vs Non-Comprehensive AMC Agreements</h5>
              <p className="text-xs text-[#526477]">How leading companies balance component replacement warranties, resident engineers, and emergency 2-hour SLAs.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
