import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface CoverflowServicesProps {
  onOpenQuickSupport: (serviceName?: string) => void;
}

interface ServiceCardData {
  id: string;
  title: string;
  description: string;
  image: string;
}

export default function CoverflowServices({ onOpenQuickSupport }: CoverflowServicesProps) {
  const services: ServiceCardData[] = [
    {
      id: 'infra-mgmt',
      title: 'IT Infrastructure Management',
      description: 'We ensure your entire IT environment runs smoothly, securely, and without interruptions. From servers to networks, everything optimized for peak performance.',
      image: '/assets/datacenter_servers.jpg'
    },
    {
      id: 'equipment-rental',
      title: 'IT Equipment Rental & Leasing',
      description: 'Get the latest IT hardware without heavy upfront investment. Laptops, desktops, servers & more, delivered, maintained, and fully managed.',
      image: '/assets/enterprise_laptop_hero.jpg'
    },
    {
      id: 'network-design',
      title: 'Network Design & Deployment',
      description: 'Fast, secure, and reliable networks built for your business needs. We plan, configure, and deploy networks that support seamless operations.',
      image: '/assets/network_security_firewall.jpg'
    },
    {
      id: 'cyber-security',
      title: 'Cybersecurity & Data Protection',
      description: 'Protect your organisation from threats with real-time monitoring and strong data security. Stay compliant and secure 24/7.',
      image: '/assets/network_security_firewall.jpg'
    },
    {
      id: 'amc-support',
      title: 'AMC & Maintenance Support',
      description: 'Proactive monitoring, timely updates, and quick issue resolution. We keep your IT systems running at full efficiency.',
      image: '/assets/datacenter_servers.jpg'
    },
    {
      id: 'ip-telephony',
      title: 'IP Voice & Video Telephony',
      description: 'Enterprise-grade communication solutions for clear, secure, and efficient collaboration. Perfect for teams, enterprises, and customer support environments.',
      image: '/assets/telecom_ip_phones.jpg'
    },
    {
      id: 'it-consulting',
      title: 'IT Consulting',
      description: 'Expert strategic guidance to optimise operations, boost efficiency, and scale smarter. Technology decisions that accelerate business growth.',
      image: '/assets/enterprise_laptop_hero.jpg'
    },
    {
      id: 'staff-aug',
      title: 'On-Demand IT Staff Augmentation',
      description: 'Get skilled IT professionals anywhere in India, whenever you need them. Flexible staffing support for all project requirements.',
      image: '/assets/datacenter_servers.jpg'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="coverflow-room-bg text-white py-20 lg:py-28 overflow-hidden select-none border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative">
        
        {/* Section Heading matching screenshot */}
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-2xl leading-tight">
            We deliver services that power modern IT operations
          </h2>
        </div>

        {/* 3D Coverflow Viewport Container */}
        <div className="relative h-[530px] sm:h-[570px] w-full flex items-center justify-center perspective-container">
          
          {/* Navigation Chevron Left */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-6 z-40 w-11 h-11 rounded-full bg-[#dc2626]/20 hover:bg-[#dc2626] text-[#ef4444] hover:text-white border border-[#ef4444]/40 flex items-center justify-center transition-all duration-200 shadow-soft-glow"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Cards Track in 3D */}
          <div className="relative w-full h-full flex items-center justify-center">
            {services.map((item, idx) => {
              const total = services.length;
              // Calculate shortest distance in circular carousel
              let diff = (idx - currentIndex + total) % total;
              if (diff > total / 2) diff -= total;

              const isCenter = diff === 0;
              const isVisible = Math.abs(diff) <= 2;

              if (!isVisible) return null;

              // 3D positioning styling
              const translateX = diff * (window.innerWidth < 640 ? 170 : 260);
              const translateZ = isCenter ? 80 : -Math.abs(diff) * 110;
              const rotateY = diff === 0 ? 0 : diff < 0 ? 36 : -36;
              const scale = isCenter ? 1 : 0.84 - Math.abs(diff) * 0.05;
              const opacity = isCenter ? 1 : Math.max(0.45, 0.8 - Math.abs(diff) * 0.2);
              const zIndex = 30 - Math.abs(diff) * 5;

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    if (!isCenter) setCurrentIndex(idx);
                  }}
                  style={{
                    transform: `translate3d(${translateX}px, 0, ${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                    zIndex,
                    opacity,
                  }}
                  className={`absolute top-4 w-[285px] sm:w-[335px] h-[480px] bg-white rounded-3xl p-6 sm:p-7 text-slate-800 shadow-card-3d transition-all duration-500 ease-out flex flex-col justify-between ${
                    isCenter ? 'ring-4 ring-[#ef4444]/50 cursor-default' : 'cursor-pointer hover:opacity-95'
                  }`}
                >
                  <div>
                    {/* Card Illustration / Image Header */}
                    <div className="w-full h-44 rounded-2xl overflow-hidden mb-5 bg-slate-100 relative group">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    </div>

                    {/* Card Title in Soft Red */}
                    <h3 className="text-lg sm:text-xl font-bold text-[#dc2626] mb-3 leading-snug">
                      {item.title}
                    </h3>

                    {/* Card Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Card Action Pill Button in Red */}
                  <div className="pt-4 border-t border-slate-100">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenQuickSupport(item.title);
                      }}
                      className="px-6 py-2.5 rounded-full bg-[#dc2626] hover:bg-[#b91c1c] text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow-soft-sm hover:shadow-soft-md"
                    >
                      <span>Contact Us</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Chevron Right */}
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-6 z-40 w-11 h-11 rounded-full bg-[#dc2626]/20 hover:bg-[#dc2626] text-[#ef4444] hover:text-white border border-[#ef4444]/40 flex items-center justify-center transition-all duration-200 shadow-soft-glow"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Pagination Dots matching screenshot */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {services.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? 'w-8 bg-[#ef4444]'
                  : 'w-2.5 bg-slate-700 hover:bg-slate-500'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
