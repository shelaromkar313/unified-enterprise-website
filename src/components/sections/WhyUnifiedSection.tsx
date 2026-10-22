import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface WhyUnifiedSectionProps {
  onOpenQuickSupport: (serviceName?: string) => void;
}

export interface ServiceCardData {
  id: string;
  serviceId: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

// Exact services and copy from the reference screenshot
export const servicesList: ServiceCardData[] = [
  {
    id: 'service-hardware',
    serviceId: 'hardware-procurement',
    title: 'Hardware Sales & OEM Procurement',
    category: 'Hardware & OEM',
    description: 'Turnkey procurement of rack servers, Cisco/Fortinet firewalls, L2/L3 managed switches, and enterprise workstations with direct OEM warranties.',
    image: '/assets/ue_hardware_procurement.jpg'
  },
  {
    id: 'service-rental',
    serviceId: 'equipment-rental',
    title: 'IT Equipment Rental & Leasing',
    category: 'Device Rentals',
    description: 'Get the latest IT hardware that drives client businesses. Laptops, desktops, servers, IT peripherals: cost-effective and fully managed.',
    image: '/assets/ue_rental_leasing.jpg'
  },
  {
    id: 'service-network',
    serviceId: 'network-design',
    title: 'Network Design & Deployment',
    category: 'Enterprise Network',
    description: 'Fast, secure, and reliable networks built for your business needs. We plan, configure, and deploy networks that support seamless operations.',
    image: '/assets/ue_network_design.jpg'
  },
  {
    id: 'service-amc',
    serviceId: 'amc-support',
    title: 'AMC & Maintenance Support',
    category: 'Critical AMC',
    description: 'Proactive monitoring, timely updates, and quick issue resolution. We keep your IT systems running at full efficiency.',
    image: '/assets/ue_amc_support.jpg'
  },
  {
    id: 'service-telecom',
    serviceId: 'telecom-voice',
    title: 'Unified Telecom & Carrier Voice',
    category: 'VoIP & Telecom',
    description: 'Grandstream & Asterisk IP PBX deployments, SIP trunking, BPO predictive dialers, and ISP leased line coordination ensuring 99.9% uptime.',
    image: '/assets/ue_telecom_voice.jpg'
  },
  {
    id: 'service-cctv',
    serviceId: 'cctv-surveillance',
    title: 'CCTV & Security Surveillance',
    category: 'Surveillance',
    description: 'High-definition 4K IP dome/bullet cameras, NVR/DVR storage arrays, video analytics, and multi-branch remote monitoring control rooms.',
    image: '/assets/ue_cctv_surveillance.jpg'
  },
  {
    id: 'service-callcentre',
    serviceId: 'call-centre-bpo',
    title: 'Call Center & BPO Infrastructure',
    category: 'BPO & Dialer',
    description: 'High-concurrency predictive dialers, PRI and GSM gateways, Asterisk/Vicidial setups, CRM integrations, and agent workstations.',
    image: '/assets/ue_call_centre_bpo.jpg'
  }
];

// Calculate shortest signed distance on a circular array
function getSignedDistance(index: number, activeIndex: number, total: number): number {
  let diff = index - activeIndex;
  while (diff > total / 2) diff -= total;
  while (diff < -total / 2) diff += total;
  return diff;
}

export default function WhyUnifiedSection({ onOpenQuickSupport }: WhyUnifiedSectionProps) {
  // Start on index 2 (Network Design & Deployment)
  const [activeIndex, setActiveIndex] = useState(2);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1600
  );
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // References for Touchpad horizontal swipe & pointer dragging
  const sectionRef = useRef<HTMLElement | null>(null);
  const wheelAccumulatorRef = useRef<number>(0);
  const lastWheelTimeRef = useRef<number>(0);
  const isInteractingRef = useRef<boolean>(false);
  const lastInteractionTimeRef = useRef<number>(0);
  const pointerStartXRef = useRef<number>(0);
  const pointerStartYRef = useRef<number>(0);
  const hasDraggedRef = useRef<boolean>(false);

  const total = servicesList.length;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    lastInteractionTimeRef.current = Date.now();
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    lastInteractionTimeRef.current = Date.now();
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Global pointer release listeners to ensure dragging/touching never freezes auto-rotation
  useEffect(() => {
    const handleGlobalRelease = () => {
      isInteractingRef.current = false;
      setTimeout(() => {
        hasDraggedRef.current = false;
      }, 60);
    };

    window.addEventListener('pointerup', handleGlobalRelease);
    window.addEventListener('pointercancel', handleGlobalRelease);
    window.addEventListener('mouseup', handleGlobalRelease);
    window.addEventListener('touchend', handleGlobalRelease);
    window.addEventListener('touchcancel', handleGlobalRelease);
    window.addEventListener('blur', handleGlobalRelease);

    return () => {
      window.removeEventListener('pointerup', handleGlobalRelease);
      window.removeEventListener('pointercancel', handleGlobalRelease);
      window.removeEventListener('mouseup', handleGlobalRelease);
      window.removeEventListener('touchend', handleGlobalRelease);
      window.removeEventListener('touchcancel', handleGlobalRelease);
      window.removeEventListener('blur', handleGlobalRelease);
    };
  }, []);

  // Touchpad horizontal swipe support
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      const absX = Math.abs(e.deltaX);
      const absY = Math.abs(e.deltaY);

      if (absX > absY && absX > 4) {
        e.preventDefault();
        const now = Date.now();
        wheelAccumulatorRef.current += e.deltaX;

        if (now - lastWheelTimeRef.current > 240 && Math.abs(wheelAccumulatorRef.current) > 28) {
          if (wheelAccumulatorRef.current > 0) {
            nextSlide();
          } else {
            prevSlide();
          }
          wheelAccumulatorRef.current = 0;
          lastWheelTimeRef.current = now;
        }
      } else {
        wheelAccumulatorRef.current = 0;
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      el.removeEventListener('wheel', handleWheel);
    };
  }, [nextSlide, prevSlide]);

  // Pointer drag gestures
  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    isInteractingRef.current = true;
    lastInteractionTimeRef.current = Date.now();
    hasDraggedRef.current = false;
    pointerStartXRef.current = e.clientX;
    pointerStartYRef.current = e.clientY;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isInteractingRef.current) return;
    const diffX = pointerStartXRef.current - e.clientX;

    if (Math.abs(diffX) > 8) {
      hasDraggedRef.current = true;
    }

    if (Math.abs(diffX) > 42) {
      if (diffX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      pointerStartXRef.current = e.clientX;
    }
  };

  const handlePointerUp = () => {
    isInteractingRef.current = false;
    setTimeout(() => {
      hasDraggedRef.current = false;
    }, 60);
  };

  // Continuous rock-solid auto-rotate every 1800ms with auto-healing
  useEffect(() => {
    const timer = setInterval(() => {
      const isActivelyInteracting = isInteractingRef.current && (Date.now() - lastInteractionTimeRef.current < 2500);
      if (!isActivelyInteracting) {
        isInteractingRef.current = false;
        setActiveIndex((prev) => (prev + 1) % total);
      }
    }, 1800);

    return () => clearInterval(timer);
  }, [total]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    isInteractingRef.current = true;
    lastInteractionTimeRef.current = Date.now();
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    isInteractingRef.current = false;
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    setTouchStartX(null);
  };

  // 3D slot properties tuned to match the perspective geometry from the reference screenshot
  const getSlotProperties = useCallback(
    (diff: number) => {
      const is2Xl = windowWidth >= 1536;
      const isXl = windowWidth >= 1280;
      const isLg = windowWidth >= 1024;
      const isMd = windowWidth >= 768;

      const step1 = is2Xl ? 380 : isXl ? 350 : isLg ? 310 : isMd ? 250 : 180;
      const step2 = is2Xl ? 700 : isXl ? 640 : isLg ? 560 : isMd ? 450 : 320;
      const stepOff = is2Xl ? 980 : isXl ? 900 : isLg ? 780 : 620;

      if (diff === 0) {
        // Center Card (front, prominent, elevated)
        return {
          translateX: 0,
          translateZ: 30,
          rotateY: 0,
          scale: 1.0,
          opacity: 1.0,
          zIndex: 40,
          pointerEvents: 'auto' as const,
          isCenter: true
        };
      } else if (diff === -1) {
        // Left Neighbour (turned gently toward center)
        return {
          translateX: -step1,
          translateZ: -60,
          rotateY: 26,
          scale: isMd ? 0.88 : 0.80,
          opacity: 0.95,
          zIndex: 30,
          pointerEvents: 'auto' as const,
          isCenter: false
        };
      } else if (diff === 1) {
        // Right Neighbour (turned gently toward center)
        return {
          translateX: step1,
          translateZ: -60,
          rotateY: -26,
          scale: isMd ? 0.88 : 0.80,
          opacity: 0.95,
          zIndex: 30,
          pointerEvents: 'auto' as const,
          isCenter: false
        };
      } else if (diff === -2) {
        // Far Left Card
        return {
          translateX: -step2,
          translateZ: -140,
          rotateY: 46,
          scale: isMd ? 0.72 : 0.62,
          opacity: isMd ? 0.90 : 0,
          zIndex: 20,
          pointerEvents: (isMd ? 'auto' : 'none') as 'auto' | 'none',
          isCenter: false
        };
      } else if (diff === 2) {
        // Far Right Card
        return {
          translateX: step2,
          translateZ: -140,
          rotateY: -46,
          scale: isMd ? 0.72 : 0.62,
          opacity: isMd ? 0.90 : 0,
          zIndex: 20,
          pointerEvents: (isMd ? 'auto' : 'none') as 'auto' | 'none',
          isCenter: false
        };
      } else {
        // Offstage Cards (|diff| >= 3)
        const dir = diff > 0 ? 1 : -1;
        return {
          translateX: dir * stepOff,
          translateZ: -300,
          rotateY: -dir * 55,
          scale: 0.50,
          opacity: 0,
          zIndex: 10,
          pointerEvents: 'none' as const,
          isCenter: false
        };
      }
    },
    [windowWidth]
  );

  return (
    <section 
      ref={sectionRef}
      id="why-unified"
      className="bg-[#f1f5f9] text-slate-900 pt-12 pb-16 sm:pt-16 sm:pb-20 relative select-none border-b border-slate-200 overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Why Unified Enterprise Solutions"
    >
      {/* 3D Perspective Floor Grid matching the reference screenshot */}
      <div className="ue-grid-floor-light opacity-90" aria-hidden="true" />

      {/* Atmospheric center spotlight */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] sm:w-[1300px] h-[480px] bg-gradient-to-b from-[#dc2626]/8 via-transparent to-transparent rounded-full blur-3xl pointer-events-none z-0" 
        aria-hidden="true" 
      />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 mb-8 sm:mb-10 cisco-reveal">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-3 sm:gap-4">
          <div>
            <small className="text-xs font-bold uppercase tracking-[0.2em] text-[#dc2626] block mb-1">
              One partner. Four capabilities. One accountable team.
            </small>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Why Unified Enterprise Solutions?
            </h2>
          </div>
          <p className="text-xs sm:text-[13px] text-slate-600 max-w-xl leading-relaxed font-normal lg:text-right">
            Eliminate multi-vendor finger pointing. We combine enterprise hardware procurement, flexible device rentals, mission-critical AMC support, and carrier-grade telecom under one SLA.
          </p>
        </div>
      </div>

      {/* 3D Perspective Coverflow Scene Container */}
      <div 
        className="relative h-[480px] sm:h-[510px] w-full flex items-center justify-center overflow-visible cisco-reveal"
        style={{
          perspective: '1200px',
          perspectiveOrigin: '50% 50%',
        }}
      >
        {/* Left Navigation Chevron Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-1.5 sm:left-6 lg:left-8 z-50 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white hover:bg-[#dc2626] text-[#dc2626] hover:text-white border border-slate-300/80 shadow-[0_4px_16px_rgba(0,0,0,0.12)] flex items-center justify-center transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#dc2626]"
          aria-label="Previous service capability"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
        </button>

        {/* Cards Track */}
        <div 
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {servicesList.map((card, idx) => {
            const diff = getSignedDistance(idx, activeIndex, total);
            const slot = getSlotProperties(diff);

            return (
              <div
                key={card.id}
                onClick={() => {
                  if (hasDraggedRef.current) return;
                  if (!slot.isCenter) {
                    lastInteractionTimeRef.current = Date.now();
                    setActiveIndex(idx);
                  }
                }}
                style={{
                  transform: `translate3d(${slot.translateX}px, 0px, ${slot.translateZ}px) rotateY(${slot.rotateY}deg) scale(${slot.scale})`,
                  zIndex: slot.zIndex,
                  opacity: slot.opacity,
                  pointerEvents: slot.pointerEvents,
                  transition: 'transform 600ms cubic-bezier(0.25, 1, 0.5, 1), opacity 550ms ease, box-shadow 550ms ease',
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
                className={`absolute top-2 w-[calc(100vw-36px)] max-w-[310px] sm:max-w-none sm:w-[350px] lg:w-[370px] h-[450px] sm:h-[475px] bg-white rounded-[26px] p-4 sm:p-6 text-slate-800 flex flex-col justify-between overflow-hidden select-none transition-all duration-300 ${
                  slot.isCenter 
                    ? 'border-2 border-[#dc2626] shadow-[0_25px_50px_-12px_rgba(220,38,38,0.22),0_15px_30px_-10px_rgba(0,0,0,0.1)] cursor-default ring-4 ring-[#dc2626]/10' 
                    : 'border border-slate-200/90 shadow-[0_10px_30px_-8px_rgba(0,0,0,0.08)] cursor-pointer hover:opacity-100 hover:scale-[0.90]'
                }`}
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    {/* Visual Graphic Header - Matches the illustration banner from reference */}
                    <div className="w-full h-38 sm:h-44 rounded-2xl overflow-hidden mb-3 bg-slate-100 flex items-center justify-center relative shadow-inner group">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-2.5 left-2.5 bg-slate-900/80 backdrop-blur-md px-2.5 py-0.5 rounded-lg border border-white/10 text-white text-[10px] font-bold uppercase tracking-wider">
                        {card.category}
                      </div>
                      {slot.isCenter && (
                        <div className="absolute top-2.5 right-2.5 bg-[#dc2626] text-white px-2 py-0.5 rounded-md text-[10px] font-extrabold uppercase tracking-wider shadow-sm flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                          <span>Active</span>
                        </div>
                      )}
                    </div>

                    {/* Card Title in executive navy (#173B67) */}
                    <h3 className="text-base sm:text-lg lg:text-[19px] font-bold text-[#173B67] mb-2 leading-snug">
                      {card.title}
                    </h3>

                    {/* Card Description */}
                    <p className="text-xs sm:text-[13px] text-[#475569] leading-relaxed font-normal">
                      {card.description}
                    </p>
                  </div>

                  {/* Footer: Prominent Rounded Contact Us Button */}
                  <div className="pt-3 mt-2 flex items-center justify-start">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenQuickSupport(card.title);
                      }}
                      className="min-h-[40px] px-6 py-2.5 rounded-full bg-[#dc2626] hover:bg-[#b91c1c] text-white font-semibold text-xs sm:text-sm transition-all shadow-sm hover:shadow-md flex items-center justify-center active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#dc2626]"
                    >
                      <span>Contact Us</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Navigation Chevron Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-1.5 sm:right-6 lg:right-8 z-50 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white hover:bg-[#dc2626] text-[#dc2626] hover:text-white border border-slate-300/80 shadow-[0_4px_16px_rgba(0,0,0,0.12)] flex items-center justify-center transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#dc2626]"
          aria-label="Next service capability"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
        </button>
      </div>

      {/* Pagination Dots beneath carousel */}
      <div className="flex items-center justify-center gap-2 mt-6 relative z-10">
        {servicesList.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              lastInteractionTimeRef.current = Date.now();
              setActiveIndex(idx);
            }}
            className={`h-2 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
              activeIndex === idx
                ? 'w-8 bg-[#dc2626] shadow-[0_0_12px_rgba(220,38,38,0.5)]'
                : 'w-2 bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
