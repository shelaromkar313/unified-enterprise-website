import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle2, PhoneCall
} from 'lucide-react';
import WhyUnifiedSection from '../components/sections/WhyUnifiedSection';
import WhyChooseUsInteractive from '../components/sections/WhyChooseUsInteractive';
import TypewriterText from '../components/common/TypewriterText';
import ScrollReveal, { ScrollRevealGroup } from '../components/common/ScrollReveal';

interface HomePageProps {
  onOpenQuickSupport: (serviceName?: string) => void;
}

export default function HomePage({ onOpenQuickSupport }: HomePageProps) {

  const videoRef = useRef<HTMLVideoElement>(null);

  // Guarantee reliable, instant autoplay of local pristine 720p H.264 video
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.defaultMuted = true;
    video.muted = true;

    const attemptPlay = () => {
      const p = video.play();
      if (p !== undefined) {
        p.catch((err) => {
          console.log('Autoplay attempt caught:', err);
          // If browser policy delays autoplay until first user gesture
          const handleInteraction = () => {
            video.play().catch(() => {});
            window.removeEventListener('click', handleInteraction);
            window.removeEventListener('touchstart', handleInteraction);
          };
          window.addEventListener('click', handleInteraction);
          window.addEventListener('touchstart', handleInteraction);
        });
      }
    };

    if (video.readyState >= 2) {
      attemptPlay();
    } else {
      video.addEventListener('loadeddata', attemptPlay, { once: true });
      video.addEventListener('canplay', attemptPlay, { once: true });
    }
  }, []);

  return (
    <div>
      {/* 1. Cisco-Benchmarked Hero Section - Video is the Main Focus */}
      <section className="bg-black text-white relative overflow-hidden min-h-[540px] sm:min-h-[600px] lg:min-h-[660px] flex flex-col justify-between border-b border-slate-900">
        {/* Full-Bleed Pinterest Latitude 9000 Enterprise Video (Downloaded Locally for 100% Guaranteed Playback) */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/assets/latitude_poster.jpg"
            className="w-full h-full object-cover object-center sm:object-right opacity-100 scale-100 transition-opacity duration-300"
          >
            <source src="/assets/latitude_hero.mp4" type="video/mp4" />
            <source src="/assets/end_to_end_it_services.mp4" type="video/mp4" />
          </video>

          {/* Ultra-Subtle Left Scrim: Video remains completely visible, vivid and clear across the entire hero canvas */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent pointer-events-none" />
        </div>

        {/* Cisco-Style Announcement Micro-Bar Directly Floating on Video */}
        <div className="w-full relative z-20 pt-4 pb-2 px-4 text-center text-[11px] sm:text-xs font-medium text-slate-200/90 flex items-center justify-center gap-2">
          <span>Evolve your approach to enterprise IT infrastructure & hardware lifecycle.</span>
          <Link to="/services" className="text-red-400 hover:text-red-300 font-semibold inline-flex items-center gap-0.5">
            See our guidance &rsaquo;
          </Link>
        </div>

        {/* Compact, Cisco-Proportioned Left Text - Enhanced Font Size for Crisp Video Legibility */}
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 relative z-10 w-full text-left my-auto py-10 sm:py-14">
          <div className="max-w-md sm:max-w-lg lg:max-w-xl">
            <h1 className="text-2xl sm:text-3xl lg:text-[38px] xl:text-[42px] font-extrabold tracking-tight leading-[1.18] mb-4 text-left flex flex-col items-start justify-center text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
              <span className="text-white font-extrabold block">End-to-End IT Services for</span>
              <span className="text-white block mt-1">
                <TypewriterText
                  words={[
                    'Growing Brands',
                    'Modern Enterprises',
                    'Next-Gen Companies',
                    'Fast-Moving Businesses'
                  ]}
                  textClassName="text-white font-extrabold"
                />
              </span>
            </h1>

            <p className="text-sm sm:text-[15px] lg:text-base text-slate-100/95 leading-relaxed mb-7 max-w-lg font-normal text-left drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)]">
              We manage, optimize, and support your entire IT ecosystem with expert solutions in enterprise infrastructure, AMC maintenance, network design, telecom voice, and hardware rentals — delivered with speed and reliability.
            </p>

            {/* Cisco-Benchmarked Dual Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3.5">
              <button
                onClick={() => onOpenQuickSupport()}
                className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white hover:bg-slate-100 text-slate-950 font-bold text-sm sm:text-[15px] shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 group active:scale-95"
              >
                <span>Get Quick Support</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <Link
                to="/products"
                className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-black/45 hover:bg-black/65 text-white border border-white/70 hover:border-white font-semibold text-sm sm:text-[15px] backdrop-blur-sm transition-all duration-200 flex items-center justify-center gap-2 active:scale-95"
              >
                <span>Explore Products & Catalog</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Why Unified Enterprise Solutions? (3D Perspective Service Carousel matching reference screenshots) */}
      <WhyUnifiedSection onOpenQuickSupport={onOpenQuickSupport} />

      {/* 3. Unified Enterprise Framework (Blueprint-Aligned: Management, Delivery Model & Consultation) */}
      <section className="bg-[#f8fafc] py-16 sm:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-20">          {/* Section B: Unified IT & Telecom Management */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 lg:p-12 border border-slate-200 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <ScrollReveal delay={0} duration={800} distance={32} className="lg:col-span-5 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#dc2626] block">
                  Complete Technology Lifecycle
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                  Unified IT & Telecom Management
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Modern enterprises cannot afford silos between their local compute hardware, perimeter networks, and voice telecom backbones. Unified Enterprise delivers a single management architecture:
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => onOpenQuickSupport('Unified IT & Telecom Architecture')}
                    className="px-5 py-2.5 rounded-full bg-[#dc2626] hover:bg-[#b91c1c] text-white font-semibold text-xs sm:text-sm shadow-sm transition-all flex items-center gap-2 group"
                  >
                    <span>Explore Management Blueprint</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </ScrollReveal>

              <ScrollRevealGroup stagger={110} baseDelay={60} duration={800} distance={32} className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all">
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#dc2626]" />
                    <h4 className="text-sm font-bold text-slate-900">Compute & Storage Staging</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Dell, HPE, Lenovo & NVIDIA DGX AI supercomputing, rack/tower server configuration, GPU accelerators, SAN/NAS arrays, and ESXi/Proxmox clustering.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all">
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#dc2626]" />
                    <h4 className="text-sm font-bold text-slate-900">Network Design & Security</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Layer 2/3 core switching, Fortinet & SonicWall Next-Gen Firewalls, multi-factor SSL VPN tunnels, and Cat6A/Fiber optic cabling.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all">
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#dc2626]" />
                    <h4 className="text-sm font-bold text-slate-900">Voice PBX & Call Center Tech</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    IP phones, PRI/GSM gateways, CRM click-to-call telephony integrations, and high-concurrency BPO predictive dialers.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all">
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#dc2626]" />
                    <h4 className="text-sm font-bold text-slate-900">Asset & Lifecycle Control</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Serial-number-level inventory registers, warranty tracking, condition logs, and complete chain-of-custody tracking.
                  </p>
                </div>
              </ScrollRevealGroup>
            </div>
          </div>

          {/* Section C: Our Service Delivery Model */}
          <div>
            <ScrollReveal delay={0} duration={800} distance={32} className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#dc2626] block mb-2">
                Proven Execution Blueprint
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                Our Service Delivery Model
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2.5 max-w-2xl mx-auto leading-relaxed">
                Structured into 4 standardized execution stages backed by ISO-grade governance, strict quality control, and guaranteed response SLAs.
              </p>
            </ScrollReveal>

            <ScrollRevealGroup stagger={110} baseDelay={80} duration={800} distance={32} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs relative">
                <span className="text-3xl font-extrabold text-slate-200 block mb-2 font-mono">01</span>
                <h4 className="text-base font-bold text-slate-900 mb-2">Discovery & Site Audit</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Onsite physical and network survey, compute workload assessment, power/rack audits, and margin-protected transparent quotes.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs relative">
                <span className="text-3xl font-extrabold text-slate-200 block mb-2 font-mono">02</span>
                <h4 className="text-base font-bold text-slate-900 mb-2">Serialized Staging & Deploy</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Rigorous bench testing, OS/firmware imaging, serial mapping, asset tagging, and 24-48 hour prompt metro delivery.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs relative">
                <span className="text-3xl font-extrabold text-slate-200 block mb-2 font-mono">03</span>
                <h4 className="text-base font-bold text-slate-900 mb-2">Tiered SLA & AMC Support</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  L1 remote triage, L2 escalation, rapid 2-4h onsite dispatch, scheduled preventive maintenance visits, and emergency loaner units.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs relative">
                <span className="text-3xl font-extrabold text-slate-200 block mb-2 font-mono">04</span>
                <h4 className="text-base font-bold text-slate-900 mb-2">Lifecycle & Data Security</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  End-of-term asset inspections, hardware renewal/buyback options, and certified cryptographic data sanitization.
                </p>
              </div>
            </ScrollRevealGroup>
          </div>

          {/* Section D: Request a Consultation (High-Converting Cisco Banner) */}
          <ScrollReveal delay={0} duration={850} distance={32} className="bg-gradient-to-r from-[#070b12] to-[#0f172a] rounded-3xl p-8 sm:p-12 text-white shadow-xl border border-slate-800">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 text-xs font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-400" />
                  <span>Free Technical Architecture Consultation</span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                  Request a Consultation
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                  Speak directly with an enterprise systems architect. Whether you require 50 rental laptops dispatched tomorrow, a comprehensive server AMC, or a complete network revamp, we provide prompt, transparent quotations.
                </p>
                <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-red-400" />
                    24-48h Delivery SLA
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-red-400" />
                    Zero Capital Lock-in
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-red-400" />
                    Pan-India Onsite AMC
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-stretch justify-center gap-3">
                <button
                  onClick={() => onOpenQuickSupport('Request a Consultation')}
                  className="w-full sm:w-auto min-h-[48px] px-6 py-3.5 rounded-full bg-white hover:bg-slate-100 text-slate-950 font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 group active:scale-[0.98]"
                >
                  <span>Request a Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <a
                  href="tel:+918377017477"
                  className="w-full sm:w-auto min-h-[48px] px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-sm transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
                >
                  <PhoneCall className="w-4 h-4 text-red-400" />
                  <span>Call +91-8377017477</span>
                </a>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* 4. Why Choose Us (Interactive 3D Cards Benchmarked with High-Converting Visuals) */}
      <ScrollReveal delay={0} duration={700} distance={24}>
        <WhyChooseUsInteractive onOpenQuickSupport={onOpenQuickSupport} />
      </ScrollReveal>

    </div>
  );
}
