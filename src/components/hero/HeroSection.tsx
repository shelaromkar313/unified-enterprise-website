import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, SlidersHorizontal, Sparkles, PhoneCall, Cpu, Network, Layers } from 'lucide-react';
import HardwareCanvas from '../3d/HardwareCanvas';

interface HeroSectionProps {
  onExploreSolutions: () => void;
  onTalkToExperts: () => void;
}

export default function HeroSection({ onExploreSolutions, onTalkToExperts }: HeroSectionProps) {
  const [viewMode, setViewMode] = useState<'3d' | 'studio'>('3d');

  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 overflow-hidden bg-hero-radial bg-enterprise-grid border-b border-[#D6E4EE]">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-[#EAF4FB]/60 via-[#E9EAFE]/40 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content & Enterprise Typography */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Enterprise Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#CFDFEC] shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-[#368C91]"></span>
              <span className="text-xs font-semibold tracking-wide text-[#17324D]">
                Enterprise IT, Networking & Telecom Architecture
              </span>
              <span className="text-[11px] font-mono text-[#368C91] bg-[#EAF4FB] px-2 py-0.5 rounded-full">
                SLA 24/5 & 24/7
              </span>
            </div>

            {/* Cisco-Level Heading: approx 60-76px on large desktop */}
            <h1 className="h1-hero text-[#17324D] font-extrabold tracking-tight">
              Technology that <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#17324D] via-[#368C91] to-[#17324D]">
                connects your entire
              </span> <br className="hidden sm:inline" />
              business.
            </h1>

            {/* Supporting Text: approx 16-18px */}
            <p className="text-base sm:text-lg text-[#526477] leading-relaxed max-w-xl">
              IT infrastructure, networking, telecom systems, and managed support — engineered around your business for resilient uptime and seamless multi-site expansion.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href="#solutions"
                onClick={onExploreSolutions}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#17324D] hover:bg-[#368C91] text-white font-semibold text-base shadow-sm hover:shadow-enterprise transition-all duration-200 group"
              >
                <span>Explore Our Solutions</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onTalkToExperts}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-[#F2F6F8] text-[#17324D] border border-[#CFDFEC] font-semibold text-base shadow-sm hover:border-[#368C91] transition-all duration-200"
              >
                <span>Talk to Our Experts</span>
              </button>
            </div>

            {/* Trust and Key Capability Highlights */}
            <div className="pt-4 border-t border-[#D6E4EE]/80 grid grid-cols-3 gap-3">
              <div className="space-y-0.5">
                <span className="text-xs uppercase tracking-wider text-[#526477] font-semibold block">Hardware Sales</span>
                <span className="text-sm font-bold text-[#17324D]">Tier-1 Fleets</span>
              </div>
              <div className="space-y-0.5">
                <span className="text-xs uppercase tracking-wider text-[#526477] font-semibold block">Managed AMC</span>
                <span className="text-sm font-bold text-[#17324D]">2-4h Onsite SLA</span>
              </div>
              <div className="space-y-0.5">
                <span className="text-xs uppercase tracking-wider text-[#526477] font-semibold block">Device Rental</span>
                <span className="text-sm font-bold text-[#17324D]">24h Dispatch</span>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Hardware Rig & Cinematic Stage */}
          <div className="lg:col-span-6 relative">
            
            {/* View Mode Toggle: Interactive 3D vs 4K Studio Visual */}
            <div className="flex justify-end mb-2.5">
              <div className="inline-flex items-center p-1 bg-white border border-[#D6E4EE] rounded-lg shadow-sm">
                <button
                  onClick={() => setViewMode('3d')}
                  className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
                    viewMode === '3d'
                      ? 'bg-[#17324D] text-white shadow-sm'
                      : 'text-[#526477] hover:text-[#17324D]'
                  }`}
                >
                  3D Interactive Rig
                </button>
                <button
                  onClick={() => setViewMode('studio')}
                  className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
                    viewMode === 'studio'
                      ? 'bg-[#17324D] text-white shadow-sm'
                      : 'text-[#526477] hover:text-[#17324D]'
                  }`}
                >
                  4K Studio Visual
                </button>
              </div>
            </div>

            {/* Visual Canvas Container */}
            <div className="relative">
              {viewMode === '3d' ? (
                <HardwareCanvas />
              ) : (
                <div className="relative w-full h-[460px] lg:h-[540px] rounded-2xl overflow-hidden border border-[#D6E4EE] shadow-enterprise-lg bg-[#EAF4FB]">
                  <img
                    src="/assets/enterprise_laptop_hero.jpg"
                    alt="Unified Enterprise Solutions Hardware Ecosystem"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3.5 rounded-xl border border-[#D6E4EE] flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-[#17324D]">Enterprise Core Workstation & Network Topology</p>
                      <p className="text-[11px] text-[#526477]">High-Throughput Fiber Connectors & Server Infrastructure</p>
                    </div>
                    <span className="text-[11px] font-mono text-[#368C91] bg-[#EAF4FB] px-2 py-1 rounded font-semibold">
                      4K Studio Render
                    </span>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
