import React, { useState } from 'react';
import { X, CheckCircle2, Send, ShieldCheck, Phone, Mail, User, Building2 } from 'lucide-react';

interface QuickSupportModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function QuickSupportModal({ isOpen, onClose, defaultService = 'IT Infrastructure Management' }: QuickSupportModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: defaultService,
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      console.log('Softcentric Quick Support Inquiry:', formData);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#dc2626] px-6 py-5 text-white flex items-center justify-between">
          <div>
            <span className="text-[11px] uppercase tracking-widest font-semibold text-white/80 block">Quick Support Desk</span>
            <h3 className="text-xl font-bold">Connect With Our Technical Team</h3>
          </div>
          <button
            onClick={handleReset}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-red-50 text-[#dc2626] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">Request Dispatched!</h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto">
                Thank you for contacting us. Our enterprise support engineers will reach out to you within 30 minutes.
              </p>
              <button
                onClick={handleReset}
                className="mt-4 px-6 py-2.5 rounded-full bg-[#dc2626] text-white font-semibold text-sm hover:bg-[#b91c1c] transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Full Name *</label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    required
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:border-[#dc2626] focus:ring-1 focus:ring-[#dc2626]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Email Address *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      required
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:border-[#dc2626] focus:ring-1 focus:ring-[#dc2626]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Phone Number *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      required
                      type="tel"
                      placeholder="+91-9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:border-[#dc2626] focus:ring-1 focus:ring-[#dc2626]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Service Required</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3 py-2.5 text-sm rounded-xl border border-slate-300 bg-white focus:outline-none focus:border-[#dc2626] focus:ring-1 focus:ring-[#dc2626]"
                >
                  <option>IT Infrastructure Management</option>
                  <option>IT Equipment Rental & Leasing</option>
                  <option>Network Design & Deployment</option>
                  <option>AMC & Maintenance Support</option>
                  <option>IP Voice & Video Telephony</option>
                  <option>CCTV & Security Surveillance</option>
                  <option>Call-Centre & BPO Infrastructure</option>
                  <option>Hardware Sales & Procurement</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Project Details (Optional)</label>
                <textarea
                  rows={3}
                  placeholder="Tell us about timelines, device counts, or requirements"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3 text-sm rounded-xl border border-slate-300 focus:outline-none focus:border-[#dc2626] focus:ring-1 focus:ring-[#dc2626]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full min-h-[48px] py-3.5 rounded-full bg-[#dc2626] hover:bg-[#b91c1c] active:scale-[0.98] text-white font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-soft-sm"
              >
                {isSubmitting ? 'Transmitting Request...' : 'Submit Support Request'}
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
