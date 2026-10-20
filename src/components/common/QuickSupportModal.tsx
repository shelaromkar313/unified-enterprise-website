import React, { useState, useEffect, useMemo } from 'react';
import { X, CheckCircle2, Send, Phone, Mail, User, Building2, AlertTriangle, Cpu } from 'lucide-react';

interface QuickSupportModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

const BLOCKED_PERSONAL_DOMAINS = [
  'gmail.com',
  'googlemail.com',
  'yahoo.com',
  'yahoo.co.in',
  'yahoo.co.uk',
  'yahoo.ca',
  'ymail.com',
  'rocketmail.com',
  'hotmail.com',
  'hotmail.co.uk',
  'outlook.com',
  'live.com',
  'msn.com',
  'icloud.com',
  'me.com',
  'mac.com',
  'aol.com',
  'zoho.com',
  'mail.com',
  'proton.me',
  'protonmail.com',
  'gmx.com',
  'gmx.net',
  'rediffmail.com',
  'yandex.com',
  'yandex.ru'
];

export default function QuickSupportModal({ isOpen, onClose, defaultService = 'IT Infrastructure Management' }: QuickSupportModalProps) {
  // Extract clean target product name if an inquiry was launched for a specific product
  const targetProductName = useMemo(() => {
    if (!defaultService) return '';
    let cleaned = defaultService.replace(/^(Inquiry:\s*|Rental Inquiry:\s*)/i, '').trim();
    if (cleaned.includes(' - ')) {
      const parts = cleaned.split(' - ');
      if (parts.length >= 2 && parts[1].toLowerCase().startsWith(parts[0].toLowerCase())) {
        cleaned = parts.slice(1).join(' - ');
      }
    }
    return cleaned;
  }, [defaultService]);

  const isProductInquiry = Boolean(
    targetProductName && 
    targetProductName !== 'IT Infrastructure Management' && 
    targetProductName !== 'Unified IT & Telecom Architecture'
  );

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: defaultService,
    message: ''
  });

  const [emailError, setEmailError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Synchronize modal state whenever opened or when target product changes
  useEffect(() => {
    if (isOpen) {
      const initialMessage = isProductInquiry
        ? `Inquiry for ${targetProductName} - Requesting quotation, current stock availability, and technical specifications.`
        : '';

      const resolvedService = defaultService?.toLowerCase().includes('rental')
        ? 'IT Equipment Rental & Leasing'
        : (isProductInquiry ? 'Hardware Sales & Procurement' : (defaultService || 'IT Infrastructure Management'));

      setFormData((prev) => ({
        ...prev,
        service: resolvedService,
        message: prev.message && prev.message.includes(targetProductName) 
          ? prev.message 
          : (initialMessage || prev.message)
      }));
      setEmailError('');
      setSubmitted(false);
    }
  }, [isOpen, defaultService, targetProductName, isProductInquiry]);

  if (!isOpen) return null;

  const validateCorporateEmail = (emailStr: string): string => {
    if (!emailStr) return '';
    const trimmed = emailStr.trim();
    if (!trimmed.includes('@')) return '';
    const parts = trimmed.split('@');
    if (parts.length !== 2) return '';
    const domain = parts[1].toLowerCase().trim();
    
    if (BLOCKED_PERSONAL_DOMAINS.includes(domain)) {
      return 'Please enter an official corporate email address (e.g. name@company.com). Personal accounts like @gmail.com or @yahoo.com are not accepted.';
    }
    return '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const err = validateCorporateEmail(formData.email);
    if (err) {
      setEmailError(err);
      return;
    }

    if (!formData.company.trim()) {
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      console.log('Softcentric Quick Support Inquiry:', {
        ...formData,
        targetProduct: isProductInquiry ? targetProductName : formData.service,
        submittedAt: new Date().toISOString()
      });
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    setEmailError('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#dc2626] px-6 py-5 text-white flex items-center justify-between">
          <div>
            <span className="text-[11px] uppercase tracking-widest font-semibold text-white/80 block">
              Quick Support Desk
            </span>
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
              <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong className="text-slate-900">{formData.name}</strong> from <strong className="text-slate-900">{formData.company}</strong>. 
                Our enterprise support engineering team has received your inquiry for <strong className="text-[#dc2626]">{isProductInquiry ? targetProductName : formData.service}</strong> and will reach out to you within 30 minutes at <strong className="text-slate-900">{formData.email}</strong>.
              </p>
              <button
                onClick={handleReset}
                className="mt-4 px-6 py-2.5 rounded-full bg-[#dc2626] text-white font-semibold text-sm hover:bg-[#b91c1c] transition-colors shadow-2xs"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Row 1: Full Name on Left, Company Name on Right */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Full Name *
                  </label>
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

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Company Name *
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      required
                      type="text"
                      placeholder="Enter company name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:border-[#dc2626] focus:ring-1 focus:ring-[#dc2626]"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Official Corporate Email & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Official Company Email *
                  </label>
                  <div className="relative">
                    <Mail className={`w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 ${emailError ? 'text-red-500' : 'text-slate-400'}`} />
                    <input
                      required
                      type="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => {
                        const val = e.target.value;
                        setFormData({ ...formData, email: val });
                        setEmailError(validateCorporateEmail(val));
                      }}
                      onBlur={(e) => {
                        setEmailError(validateCorporateEmail(e.target.value));
                      }}
                      className={`w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border transition-colors ${
                        emailError 
                          ? 'border-red-500 bg-red-50/50 text-red-950 focus:border-red-500 focus:ring-1 focus:ring-red-500' 
                          : 'border-slate-300 focus:border-[#dc2626] focus:ring-1 focus:ring-[#dc2626]'
                      } focus:outline-none`}
                    />
                  </div>
                  {emailError && (
                    <div className="mt-1.5 p-2 bg-red-50 border border-red-200 rounded-lg flex items-start gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                      <p className="text-[11px] font-semibold text-red-700 leading-tight">
                        {emailError}
                      </p>
                    </div>
                  )}
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Phone Number *
                  </label>
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

              {/* Service Required (or Product Classification) */}
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Service / Inquiry Scope
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3 py-2.5 text-sm rounded-xl border border-slate-300 bg-white focus:outline-none focus:border-[#dc2626] focus:ring-1 focus:ring-[#dc2626]"
                >
                  <option value="IT Infrastructure Management">IT Infrastructure Management</option>
                  <option value="IT Equipment Rental & Leasing">IT Equipment Rental & Leasing</option>
                  <option value="Network Design & Deployment">Network Design & Deployment</option>
                  <option value="AMC & Maintenance Support">AMC & Maintenance Support</option>
                  <option value="IP Voice & Video Telephony">IP Voice & Video Telephony</option>
                  <option value="CCTV & Security Surveillance">CCTV & Security Surveillance</option>
                  <option value="Call-Centre & BPO Infrastructure">Call-Centre & BPO Infrastructure</option>
                  <option value="Hardware Sales & Procurement">Hardware Sales & Procurement</option>
                </select>
              </div>

              {/* Product / Project Details with Product Name pre-filled and displayed */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-semibold text-slate-700">
                    Product & Project Details *
                  </label>
                  {targetProductName && (
                    <span className="text-[11px] font-medium text-slate-500">
                      Product: <strong className="text-[#dc2626]">{targetProductName}</strong>
                    </span>
                  )}
                </div>
                <textarea
                  required
                  rows={3}
                  placeholder="Specify model requirement, required quantity, timelines, or configuration details"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3 text-sm rounded-xl border border-slate-300 focus:outline-none focus:border-[#dc2626] focus:ring-1 focus:ring-[#dc2626]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || Boolean(emailError)}
                className="w-full min-h-[48px] py-3.5 rounded-full bg-[#dc2626] hover:bg-[#b91c1c] active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none text-white font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-soft-sm"
              >
                {isSubmitting ? 'Transmitting to Technical Team...' : 'Submit Support Request'}
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
