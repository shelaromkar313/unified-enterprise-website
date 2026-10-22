import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, ShieldCheck, CheckCircle2, Send, Building2, ArrowRight, ChevronDown } from 'lucide-react';

export default function ContactUsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlItem = searchParams.get('item');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(urlItem || 'all');
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(false);

  // Exact categories requested by user
  const categoryList = useMemo(() => [
    { id: 'contact-us', name: 'Contact Us', defaultService: 'General Corporate Enquiry' },
    { id: 'request-quote', name: 'Request a Quote', defaultService: 'Enterprise Hardware Quotation' },
    { id: 'book-it-assessment', name: 'Book an IT Assessment', defaultService: 'Onsite IT Infrastructure Audit' },
    { id: 'request-amc-proposal', name: 'Request an AMC Proposal', defaultService: 'Annual Maintenance Contract (AMC)' },
    { id: 'hardware-procurement-enquiry', name: 'Hardware Procurement Enquiry', defaultService: 'Tier-1 Hardware Procurement' },
    { id: 'rental-enquiry', name: 'Rental Enquiry', defaultService: 'Commercial Equipment Rental' },
    { id: 'customer-support', name: 'Customer Support', defaultService: 'Technical Desk & Incident Escalation' },
  ], []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Enterprise Hardware Quotation',
    message: ''
  });
  const [emailError, setEmailError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const BLOCKED_PERSONAL_DOMAINS = [
    'gmail.com', 'googlemail.com', 'yahoo.com', 'yahoo.co.in', 'yahoo.co.uk',
    'ymail.com', 'rocketmail.com', 'hotmail.com', 'outlook.com', 'live.com',
    'msn.com', 'icloud.com', 'me.com', 'mac.com', 'aol.com', 'zoho.com',
    'mail.com', 'proton.me', 'protonmail.com', 'gmx.com', 'rediffmail.com', 'yandex.com'
  ];

  const validateCorporateEmail = (emailStr: string): string => {
    if (!emailStr) return '';
    const trimmed = emailStr.trim();
    if (!trimmed.includes('@')) return '';
    const domain = trimmed.split('@')[1]?.toLowerCase().trim();
    if (BLOCKED_PERSONAL_DOMAINS.includes(domain)) {
      return 'Please enter your official company email (e.g. name@company.com). Personal emails (@gmail.com, @yahoo.com, etc.) are not accepted.';
    }
    return '';
  };

  useEffect(() => {
    setSelectedCategoryId(urlItem || 'all');
    const matched = categoryList.find(c => c.id === urlItem);
    if (matched) {
      setFormData(prev => ({ ...prev, service: matched.defaultService }));
    }
  }, [urlItem, categoryList]);

  const handleSelectCategory = (id: string) => {
    setSelectedCategoryId(id);
    const matched = categoryList.find(c => c.id === id);
    if (matched) {
      setFormData(prev => ({ ...prev, service: matched.defaultService }));
    }
    if (id === 'all') {
      searchParams.delete('item');
      setSearchParams(searchParams, { replace: true });
    } else {
      setSearchParams({ item: id }, { replace: true });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const err = validateCorporateEmail(formData.email);
    if (err) {
      setEmailError(err);
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const currentCategory = categoryList.find(c => c.id === selectedCategoryId);

  return (
    <div className="min-h-[85vh] bg-white py-10 lg:py-14 border-b border-slate-100">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Mobile Category Selector (Visible on mobile/tablet < lg) */}
          <div className="lg:hidden col-span-1 mb-2">
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-3.5 shadow-2xs">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#dc2626] block">
                    Contact Department
                  </span>
                  <p className="text-sm font-bold text-slate-900 truncate">
                    {selectedCategoryId === 'all'
                      ? 'Contact Us Home'
                      : currentCategory?.name || 'All Contact Options'}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileCategoryOpen(!mobileCategoryOpen)}
                  className="px-3.5 py-2 min-h-[40px] rounded-xl bg-white border border-slate-200 text-xs font-semibold text-[#dc2626] shadow-2xs flex items-center gap-1.5 active:scale-95 transition-all shrink-0"
                >
                  <span>{mobileCategoryOpen ? 'Close' : 'Options'}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${mobileCategoryOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {/* Collapsible Mobile Category List */}
              {mobileCategoryOpen && (
                <div className="mt-3 pt-3 border-t border-slate-200/80 max-h-[300px] overflow-y-auto space-y-1">
                  <button
                    onClick={() => {
                      handleSelectCategory('all');
                      setMobileCategoryOpen(false);
                    }}
                    className={`w-full text-left py-2.5 px-3 min-h-[42px] flex items-center rounded-lg text-xs font-medium transition-colors ${
                      selectedCategoryId === 'all' ? 'bg-[#dc2626] text-white font-bold' : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    Contact Us Home
                  </button>
                  {categoryList.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        handleSelectCategory(item.id);
                        setMobileCategoryOpen(false);
                      }}
                      className={`w-full text-left py-2.5 px-3 min-h-[42px] flex items-center rounded-lg text-xs font-medium transition-colors ${
                        selectedCategoryId === item.id ? 'bg-[#dc2626] text-white font-bold' : 'text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Left Column: Clean Cisco-Style Minimalist Navigation (Desktop) */}
          <aside className="hidden lg:block lg:col-span-3 border-r border-slate-200/90 pr-5 lg:sticky lg:top-28">
            {/* Contact Us Home Link */}
            <div className="mb-4 pb-3 border-b border-slate-100">
              <button
                type="button"
                onClick={() => handleSelectCategory('all')}
                className={`relative text-left text-[13.5px] leading-snug transition-colors duration-150 block w-full py-1.5 pl-3.5 ${
                  selectedCategoryId === 'all'
                    ? 'text-[#dc2626] font-bold'
                    : 'text-[#dc2626] hover:underline font-medium'
                }`}
              >
                {selectedCategoryId === 'all' && (
                  <span
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-[3.5px] h-[15px] bg-[#dc2626] rounded-full"
                    aria-hidden="true"
                  />
                )}
                Contact Us Home
              </button>
            </div>

            {/* Category List */}
            <ul className="space-y-1">
              {categoryList.map((item) => {
                const isActive = selectedCategoryId === item.id;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => handleSelectCategory(item.id)}
                      className={`relative text-left text-[13.5px] leading-relaxed transition-colors duration-150 block w-full py-1.5 pl-3.5 ${
                        isActive
                          ? 'text-slate-900 font-bold'
                          : 'text-slate-700 hover:text-[#dc2626] font-normal'
                      }`}
                    >
                      {isActive && (
                        <span
                          className="absolute left-0 top-1/2 -translate-y-1/2 w-[3.5px] h-[15px] bg-[#dc2626] rounded-full"
                          aria-hidden="true"
                        />
                      )}
                      <span>{item.name}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </aside>

          {/* Right Column: Cisco 3-Card Home OR Rich Interactive Form View */}
          <main className="lg:col-span-9">
            
            {/* 1. HOME VIEW: Cisco 3-Card Spotlight at top if 'all' */}
            {selectedCategoryId === 'all' && (
              <div className="mb-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-1">
                  
                  {/* Card 1: Request Quote */}
                  <div className="flex flex-col justify-between group">
                    <div>
                      <div className="h-44 sm:h-52 rounded-xl overflow-hidden mb-4 bg-slate-100">
                        <img
                          src="/assets/ue_hardware_procurement.jpg"
                          alt="Request a Quote"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                        Hardware & Fleet Quotations
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                        Receive competitive corporate pricing for laptops, servers, switches, and voice telecom gateways.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleSelectCategory('request-quote')}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#dc2626] hover:underline"
                    >
                      <span>Request custom quotation</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Card 2: Book Assessment */}
                  <div className="flex flex-col justify-between group">
                    <div>
                      <div className="h-44 sm:h-52 rounded-xl overflow-hidden mb-4 bg-slate-100">
                        <img
                          src="/assets/why_data_backed.jpg"
                          alt="Book an IT Assessment"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                        Onsite Infrastructure Audits
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                        Schedule an expert site survey to review power budgets, cable integrity, firewall rules, and bottlenecks.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleSelectCategory('book-it-assessment')}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#dc2626] hover:underline"
                    >
                      <span>Book free assessment</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Card 3: AMC Proposal */}
                  <div className="flex flex-col justify-between group">
                    <div>
                      <div className="h-44 sm:h-52 rounded-xl overflow-hidden mb-4 bg-slate-100">
                        <img
                          src="/assets/ue_amc_maintenance.jpg"
                          alt="Request an AMC Proposal"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                        Annual Maintenance Proposals
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                        Protect workstations, datacenter racks, and telephony with guaranteed 2 to 4 hour emergency onsite SLAs.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleSelectCategory('request-amc-proposal')}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#dc2626] hover:underline"
                    >
                      <span>Get AMC proposal</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </div>
            )}

            {/* Interactive Contact & Inquiry Form */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start cisco-reveal">
              
              {/* Form Container */}
              <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-2xs">
                <div className="mb-6 pb-4 border-b border-slate-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#dc2626] block mb-1">
                    Direct Engineering Desk
                  </span>
                  <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                    {currentCategory ? currentCategory.name : 'Connect with Our Systems Architects'}
                  </h2>
                  <p className="text-xs text-slate-600 mt-1">
                    Guaranteed response within 30 minutes during business hours across all major Indian metro zones.
                  </p>
                </div>

                {submitted ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Enquiry Transmitted Successfully</h3>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. Your request regarding <span className="font-semibold text-[#dc2626]">{formData.service}</span> has been dispatched to our engineering desk. A specialist will contact you directly within 30 minutes.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-2 px-5 py-2 rounded-lg bg-[#dc2626] text-white text-xs font-semibold hover:bg-[#b91c1c] transition-colors"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1.5">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-[#dc2626] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1.5">Company Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Enterprise Ltd."
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-[#dc2626] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1.5">Official Company Email *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => {
                            const val = e.target.value;
                            setFormData({ ...formData, email: val });
                            setEmailError(validateCorporateEmail(val));
                          }}
                          onBlur={(e) => setEmailError(validateCorporateEmail(e.target.value))}
                          placeholder="r.sharma@company.com"
                          className={`w-full px-3.5 py-2.5 rounded-lg border text-xs text-slate-900 placeholder:text-slate-400 focus:outline-hidden transition-colors ${
                            emailError 
                              ? 'border-red-500 bg-red-50/40 text-red-950 focus:border-red-500' 
                              : 'border-slate-300 focus:border-[#dc2626]'
                          }`}
                        />
                        {emailError && (
                          <p className="text-[11px] font-semibold text-red-600 mt-1">
                            ⚠️ {emailError}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1.5">Direct Phone / WhatsApp *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-[#dc2626] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1.5">Inquiry Type</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs text-slate-900 bg-white focus:outline-hidden focus:border-[#dc2626] transition-colors"
                      >
                        <option value="Enterprise Hardware Quotation">Enterprise Hardware Quotation</option>
                        <option value="Annual Maintenance Contract (AMC)">Annual Maintenance Contract (AMC)</option>
                        <option value="Commercial Equipment Rental">Commercial Equipment Rental</option>
                        <option value="Onsite IT Infrastructure Audit">Onsite IT Infrastructure Audit</option>
                        <option value="Tier-1 Hardware Procurement">Tier-1 Hardware Procurement</option>
                        <option value="Technical Desk & Incident Escalation">Technical Desk & Incident Escalation</option>
                        <option value="General Corporate Enquiry">General Corporate Enquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1.5">Project Scope or Equipment Specifications</label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Provide details on required workstation count, server specifications, network scope, or urgent SLA requirements..."
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-[#dc2626] transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 rounded-lg bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold transition-all shadow-soft-sm flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span>Transmitting to Engineering Desk...</span>
                      ) : (
                        <>
                          <span>Transmit Request</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

              {/* Information & Regional Desks Column */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* SLA Commitment Card */}
                <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 space-y-4">
                  <div className="flex items-center gap-2 text-[#dc2626]">
                    <ShieldCheck className="w-5 h-5 shrink-0" />
                    <h3 className="text-sm font-bold text-slate-900">Enterprise Service Guarantees</h3>
                  </div>
                  <ul className="space-y-2.5 text-xs text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#dc2626] shrink-0 mt-0.5" />
                      <span>30-minute callback commitment during operating hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#dc2626] shrink-0 mt-0.5" />
                      <span>Direct escalation to certified L2/L3 system architects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#dc2626] shrink-0 mt-0.5" />
                      <span>Formal quotation with volume enterprise discounting</span>
                    </li>
                  </ul>
                </div>

                {/* Regional Dispatch Desks */}
                <div className="bg-white border border-slate-200/90 rounded-2xl p-6 space-y-4 shadow-2xs">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-4 bg-[#dc2626] rounded-full" />
                    <h3 className="text-sm font-bold text-[#173B67]">National Engineering Desks</h3>
                  </div>
                  
                  <div className="space-y-3 text-xs text-slate-700">
                    {/* 1. Pune (with address) */}
                    <div className="flex items-start gap-2.5 pb-2.5 border-b border-slate-100">
                      <MapPin className="w-4 h-4 text-[#dc2626] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 block font-bold">Pune Office</strong>
                        <span className="text-slate-600 leading-relaxed block mt-0.5">Office No 116, Gera Imperium Rise, Hinjewadi Phase 2, Pune – 411057</span>
                      </div>
                    </div>

                    {/* 2. Chennai (no address) */}
                    <div className="flex items-center gap-2.5 pb-2.5 border-b border-slate-100">
                      <MapPin className="w-4 h-4 text-[#dc2626] shrink-0" />
                      <div>
                        <strong className="text-slate-900 block font-bold">Chennai Office</strong>
                      </div>
                    </div>

                    {/* 3. Hyderabad (no address) */}
                    <div className="flex items-center gap-2.5 pb-2.5 border-b border-slate-100">
                      <MapPin className="w-4 h-4 text-[#dc2626] shrink-0" />
                      <div>
                        <strong className="text-slate-900 block font-bold">Hyderabad Office</strong>
                      </div>
                    </div>

                    {/* 4. Bangalore (no address) */}
                    <div className="flex items-center gap-2.5">
                      <MapPin className="w-4 h-4 text-[#dc2626] shrink-0" />
                      <div>
                        <strong className="text-slate-900 block font-bold">Bangalore Office</strong>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direct Hotline */}
                <div className="bg-red-50/80 border border-red-100 rounded-2xl p-5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#dc2626] text-white flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#dc2626] block">
                      Emergency SLA Hotline
                    </span>
                    <a href="tel:+919972457774" className="text-sm font-bold text-slate-900 hover:text-[#dc2626] transition-colors block">
                      +91 9972457774
                    </a>
                  </div>
                </div>

              </div>

            </div>

          </main>

        </div>
      </div>
    </div>
  );
}
