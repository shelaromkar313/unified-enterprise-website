import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, PhoneCall, Building2, Mail, User, Phone, FileText } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultInquiryType?: string;
  prefilledNotes?: string;
}

export default function ConsultationModal({
  isOpen,
  onClose,
  defaultInquiryType = 'Request a Quote',
  prefilledNotes = ''
}: ConsultationModalProps) {
  const [inquiryType, setInquiryType] = useState(defaultInquiryType);
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    phoneNumber: '',
    companyName: '',
    teamSize: '20-50 seats',
    message: prefilledNotes
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    setInquiryType(defaultInquiryType);
    if (prefilledNotes) {
      setFormData((prev) => ({ ...prev, message: prefilledNotes }));
    }
  }, [defaultInquiryType, prefilledNotes, isOpen]);

  if (!isOpen) return null;

  const inquiryOptions = [
    'Request a Quote',
    'Book an IT Assessment',
    'Request an AMC Proposal',
    'Hardware Procurement Enquiry',
    'Rental Enquiry',
    'Customer Support'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate enterprise payload processing cleanly
    setTimeout(() => {
      console.log('Unified Enterprise Solutions - Enquiry Payload:', {
        type: inquiryType,
        timestamp: new Date().toISOString(),
        ...formData
      });
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 900);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#17324D]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#D6E4EE] overflow-hidden max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Strip */}
        <div className="bg-gradient-to-r from-[#17324D] to-[#0D2033] px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#368C91] flex items-center justify-center text-white">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Enterprise Enquiry & Consultation</h3>
              <p className="text-xs text-slate-300">Unified Enterprise Solutions Technical Dispatch</p>
            </div>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {isSuccess ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#EAF4FB] text-[#368C91] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-[#17324D]">Enquiry Received Successfully</h4>
              <p className="text-sm text-[#526477] max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-[#17324D]">{formData.fullName || 'Enterprise Colleague'}</span>. Your enquiry for <span className="font-semibold text-[#368C91]">{inquiryType}</span> has been logged with our Technical Solutions Architecture team. An engineer will follow up with your formal proposal within 2 hours.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleResetAndClose}
                  className="px-6 py-2.5 rounded-xl bg-[#17324D] text-white font-semibold text-xs hover:bg-[#368C91] transition-colors"
                >
                  Return to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Inquiry Type Radio / Pill Selector */}
              <div>
                <label className="text-xs font-bold text-[#17324D] block mb-2">
                  Select Action or Enquiry Type:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {inquiryOptions.map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setInquiryType(opt)}
                      className={`text-xs p-2 rounded-lg font-semibold border text-center transition-all ${
                        inquiryType === opt
                          ? 'bg-[#17324D] text-white border-[#17324D] shadow-sm'
                          : 'bg-[#F8FAFC] text-[#526477] border-[#D6E4EE] hover:bg-[#EAF4FB] hover:text-[#17324D]'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Form Input Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="text-xs font-semibold text-[#17324D] block mb-1">Full Name *</label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#526477]" />
                    <input
                      required
                      type="text"
                      placeholder="e.g. Michael Vance"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-[#D6E4EE] bg-[#F8FAFC] focus:outline-none focus:border-[#368C91] focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#17324D] block mb-1">Corporate Email *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#526477]" />
                    <input
                      required
                      type="email"
                      placeholder="michael@company.com"
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-[#D6E4EE] bg-[#F8FAFC] focus:outline-none focus:border-[#368C91] focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#17324D] block mb-1">Direct Phone Number *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#526477]" />
                    <input
                      required
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-[#D6E4EE] bg-[#F8FAFC] focus:outline-none focus:border-[#368C91] focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#17324D] block mb-1">Company / Organization *</label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#526477]" />
                    <input
                      required
                      type="text"
                      placeholder="Acme Enterprise Ltd."
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-[#D6E4EE] bg-[#F8FAFC] focus:outline-none focus:border-[#368C91] focus:bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Team Size */}
              <div>
                <label className="text-xs font-semibold text-[#17324D] block mb-1">Estimated Infrastructure Scale</label>
                <select
                  value={formData.teamSize}
                  onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                  className="w-full p-2 text-xs rounded-xl border border-[#D6E4EE] bg-[#F8FAFC] focus:outline-none focus:border-[#368C91]"
                >
                  <option>10 - 25 seats / endpoints</option>
                  <option>25 - 75 seats / endpoints</option>
                  <option>75 - 200 seats / endpoints</option>
                  <option>200 - 500+ seats (Enterprise / BPO)</option>
                  <option>Multi-Location Branch Rollout</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="text-xs font-semibold text-[#17324D] block mb-1">Deployment Scope & Requirements</label>
                <textarea
                  rows={3}
                  placeholder="Specify hardware models, rental requirements, AMC questions, or existing infrastructure challenges..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3 text-xs rounded-xl border border-[#D6E4EE] bg-[#F8FAFC] focus:outline-none focus:border-[#368C91] focus:bg-white"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-[#17324D] hover:bg-[#368C91] text-white font-semibold text-xs tracking-wide transition-all shadow-md flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Registering with Solution Architect...</span>
                  ) : (
                    <>
                      <span>Transmit Official Enquiry</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
