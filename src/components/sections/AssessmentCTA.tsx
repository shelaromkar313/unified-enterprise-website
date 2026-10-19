import React, { useState } from 'react';
import { ShieldCheck, ArrowRight, CheckCircle2, Phone, Mail, Clock, MapPin } from 'lucide-react';

interface AssessmentCTAProps {
  onOpenConsultationModal: (inquiryType: string) => void;
}

export default function AssessmentCTA({ onOpenConsultationModal }: AssessmentCTAProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => {
      onOpenConsultationModal('Book an IT Assessment');
      setSubmitted(false);
      setEmail('');
    }, 600);
  };

  return (
    <section id="consultation" className="py-24 bg-[#EAF4FB] border-b border-[#D6E4EE] relative overflow-hidden">
      {/* Background Subtle Gradient Shape */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#DCE8F0]/80 rounded-full blur-3xl pointer-events-none -z-1" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="bg-gradient-to-r from-[#17324D] via-[#102438] to-[#0D2033] rounded-3xl p-8 sm:p-14 text-white shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#368C91] border border-white/15 text-xs font-mono font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#368C91]"></span>
                <span>Zero-Obligation Enterprise Assessment</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Architect Technology That Accelerates Your Business.
              </h2>

              <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                Connect with our senior systems engineers. We review your existing network infrastructure, calculate hardware procurement or rental estimates, and formulate a customized AMC service agreement.
              </p>

              {/* Enterprise Guarantee Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-700/80">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#368C91]" />
                    Direct Hardware Sales
                  </span>
                  <p className="text-[11px] text-slate-400">Tier-1 certified partner supply chains</p>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-bold text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#368C91]" />
                    Rapid 2-4h Onsite SLA
                  </span>
                  <p className="text-[11px] text-slate-400">Guaranteed emergency engineer response</p>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-bold text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#368C91]" />
                    24h Rental Dispatch
                  </span>
                  <p className="text-[11px] text-slate-400">Pre-configured laptops & servers</p>
                </div>
              </div>
            </div>

            {/* Right Card: Immediate Consultation Dispatch Form */}
            <div className="lg:col-span-5 bg-white text-[#17324D] rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-100">
              <h3 className="text-lg font-bold text-[#17324D] mb-1">
                Schedule a Consultation
              </h3>
              <p className="text-xs text-[#526477] mb-5">
                Submit your work email to begin your structured infrastructure review.
              </p>

              <form onSubmit={handleQuickSubmit} className="space-y-3.5">
                <div>
                  <label className="text-xs font-bold text-[#17324D] block mb-1">Corporate Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="name@enterprise.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#D6E4EE] bg-[#F8FAFC] focus:outline-none focus:border-[#368C91] focus:bg-white text-[#17324D]"
                  />
                </div>

                <div className="space-y-2 pt-1">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#17324D] hover:bg-[#368C91] text-white font-semibold text-xs tracking-wide transition-all shadow-sm flex items-center justify-center gap-2 group"
                  >
                    <span>{submitted ? 'Opening Assessment Brief...' : 'Book An IT Assessment'}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenConsultationModal('Request an AMC Proposal')}
                    className="w-full py-2.5 rounded-xl bg-[#F2F6F8] hover:bg-[#EAF4FB] text-[#17324D] font-semibold text-xs transition-colors border border-[#D6E4EE]"
                  >
                    Request an AMC Proposal
                  </button>
                </div>

                <div className="pt-3 border-t border-[#D6E4EE] flex items-center justify-between text-[11px] text-[#526477]">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#368C91]" />
                    2-Hour Initial Callback
                  </span>
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-[#368C91]" />
                    NDA Protected
                  </span>
                </div>
              </form>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
