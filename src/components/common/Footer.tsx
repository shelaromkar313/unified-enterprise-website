import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUp, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0f172a] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 cisco-reveal">

        {/* Top Section: Brand & Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">

          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-white p-1.5 flex items-center justify-center shadow-md shrink-0">
                <img
                  src="/brand/ue_logo_badge.jpg"
                  alt="Unified Enterprise Solutions"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Unified Enterprise Solutions
                </h3>
                <p className="text-xs text-[#dc2626] font-medium">
                  IT & Telecom Hardware Sales | Infra Support
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              “Smart IT Services for a Smarter Business.” Providing end-to-end IT infrastructure management, hardware rental, networking design, AMC support, and enterprise telephony solutions across India.
            </p>

            <div className="pt-2 flex items-center gap-2">
              <span className="text-[11px] font-mono bg-red-950/60 text-red-300 px-3 py-1 rounded-md border border-red-800/40">
                Pan-India SLA Coverage
              </span>
              <span className="text-[11px] font-mono bg-slate-800 text-slate-300 px-3 py-1 rounded-md">
                24/5 & Optional 24/7
              </span>
            </div>
          </div>

          {/* Registered Office */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-white">Registered Office</h4>
            <div className="text-xs text-slate-400 space-y-1.5 leading-relaxed">
              <p>Plot No. 14, Gera Imperium Park,</p>
              <p>Hinjawadi IT Park, Phase-II,</p>
              <p>Pune – 411 506, Maharashtra, India.</p>
              <p className="text-slate-500 pt-1">CIN: U72900DL2018PTC334581</p>
            </div>
          </div>

      {/* Direct Support Channels */}
      <div className="lg:col-span-5 space-y-3">
        <h4 className="text-xs uppercase tracking-widest font-bold text-white">Support & Dispatch Channels</h4>
        <ul className="space-y-2.5 text-xs text-slate-300">
          <li className="flex items-center gap-2.5">
            <Phone className="w-4 h-4 text-[#dc2626] shrink-0" />
            <a href="tel:+918377017477" className="hover:text-white transition-colors">
              +91 8377017477 (Primary Sales & Support)
            </a>
          </li>
          <li className="flex items-center gap-2.5">
            <Mail className="w-4 h-4 text-[#dc2626] shrink-0" />
            <a href="mailto:sales@unifiedenterprise.com" className="hover:text-white transition-colors">
              sales@unifiedenterprise.com
            </a>
          </li>
          <li className="flex items-center gap-2.5">
            <Mail className="w-4 h-4 text-[#dc2626] shrink-0" />
            <a href="mailto:support@unifiedenterprise.com" className="hover:text-white transition-colors">
              support@unifiedenterprise.com
            </a>
          </li>
          <li className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#dc2626] shrink-0" />
            <span>Immediate 2-4 Hour Emergency Onsite SLA</span>
          </li>
        </ul>
      </div>

    </div>

        {/* Middle Section: Multi-Page Directory Links */ }
  <div className="py-10 border-b border-slate-800 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-xs">

    <div>
      <h5 className="font-bold text-white mb-3 uppercase tracking-wider text-[11px]">Pages</h5>
      <ul className="space-y-2 text-slate-400">
        <li><Link to="/" className="hover:text-white transition-colors">Home Page</Link></li>
        <li><Link to="/products" className="hover:text-white transition-colors">Products Catalog</Link></li>
        <li><Link to="/solutions" className="hover:text-white transition-colors">Solutions Blueprints</Link></li>
        <li><Link to="/services" className="hover:text-white transition-colors">Services & AMC</Link></li>
      </ul>
    </div>

    <div>
      <h5 className="font-bold text-white mb-3 uppercase tracking-wider text-[11px]">Specializations</h5>
      <ul className="space-y-2 text-slate-400">
        <li><Link to="/rental" className="hover:text-white transition-colors">Equipment Rental</Link></li>
        <li><Link to="/industries" className="hover:text-white transition-colors">Industries Served</Link></li>
        <li><Link to="/resources" className="hover:text-white transition-colors">Resources & Blog</Link></li>
        <li><Link to="/about-us" className="hover:text-white transition-colors">About Us</Link></li>
        <li><Link to="/contact-us" className="hover:text-white transition-colors">Contact Us</Link></li>
      </ul>
    </div>

    <div>
      <h5 className="font-bold text-white mb-3 uppercase tracking-wider text-[11px]">Hardware Sales</h5>
      <ul className="space-y-2 text-slate-400">
        <li>Laptops & Workstations</li>
        <li>Rack Servers & Storage</li>
        <li>Routers & Switches</li>
        <li>Firewalls & NGFW</li>
      </ul>
    </div>

    <div>
      <h5 className="font-bold text-white mb-3 uppercase tracking-wider text-[11px]">Telephony & Voice</h5>
      <ul className="space-y-2 text-slate-400">
        <li>IP Telephony & PBX</li>
        <li>Call Center Dialers</li>
        <li>GSM Gateways & PRI</li>
        <li>Managed VOIP & ILL</li>
      </ul>
    </div>

    <div>
      <h5 className="font-bold text-white mb-3 uppercase tracking-wider text-[11px]">Managed Support</h5>
      <ul className="space-y-2 text-slate-400">
        <li>Comprehensive AMC</li>
        <li>Resident Engineers</li>
        <li>Infrastructure Audits</li>
        <li>Secure Decommissioning</li>
      </ul>
    </div>

    <div>
      <h5 className="font-bold text-white mb-3 uppercase tracking-wider text-[11px]">Equipment Rental</h5>
      <ul className="space-y-2 text-slate-400">
        <li>Monthly Laptop Rental</li>
        <li>Server & Cluster Lease</li>
        <li>Network Switch Kits</li>
        <li>Bulk 50-500+ Deploy</li>
      </ul>
    </div>

  </div>

  {/* Bottom Section */ }
  <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
    <div>
      © {new Date().getFullYear()} Unified Enterprise Solutions. All rights reserved.
    </div>

    <button
      onClick={scrollToTop}
      className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white py-1.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors sm:mr-20 z-10"
    >
      <span>Back to top</span>
      <ArrowUp className="w-3.5 h-3.5" />
    </button>
  </div>

      </div >
    </footer >
  );
}
