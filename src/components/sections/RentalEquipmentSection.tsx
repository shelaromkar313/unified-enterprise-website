import React, { useState } from 'react';
import { 
  Laptop, Monitor, Server, Radio, 
  PhoneCall, Boxes, Calendar, ArrowRight, 
  CheckCircle2, Clock, Calculator, ShieldCheck 
} from 'lucide-react';
import { RENTAL_DATA, RentalTier } from '../../data/ueContent';

interface RentalEquipmentSectionProps {
  onRentalEnquiry: (details?: { type: string; quantity: number; duration: string }) => void;
}

export default function RentalEquipmentSection({ onRentalEnquiry }: RentalEquipmentSectionProps) {
  const [selectedDevice, setSelectedDevice] = useState<string>('Enterprise Laptops');
  const [quantity, setQuantity] = useState<number>(20);
  const [duration, setDuration] = useState<string>('3 Months');

  const iconMap: Record<string, React.ReactNode> = {
    'laptop-rental': <Laptop className="w-5 h-5" />,
    'desktop-rental': <Monitor className="w-5 h-5" />,
    'server-rental': <Server className="w-5 h-5" />,
    'network-rental': <Radio className="w-5 h-5" />,
    'telecom-rental': <PhoneCall className="w-5 h-5" />,
    'bulk-deployment': <Boxes className="w-5 h-5" />,
  };

  const handleCalculateEnquiry = () => {
    onRentalEnquiry({
      type: selectedDevice,
      quantity,
      duration
    });
  };

  return (
    <section id="rental" className="py-24 bg-white border-b border-[#D6E4EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF4FB] text-[#368C91] text-xs font-bold uppercase tracking-wider mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>Fast 24-48 Hour Enterprise Dispatch</span>
          </div>
          <h2 className="h2-section text-[#17324D] mb-4">
            Commercial IT Equipment Rental
          </h2>
          <p className="text-base text-[#526477]">
            Scale engineering teams, spin up temporary BPO centers, or fulfill short-term contracts without upfront capital expenditure. All rentals include replacement warranty and full technical support.
          </p>
        </div>

        {/* 6 Rental Hardware Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {RENTAL_DATA.map((item) => (
            <div
              key={item.id}
              className="enterprise-card rounded-2xl p-6 bg-[#F8FAFC] border border-[#D6E4EE] flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EAF4FB] text-[#368C91] group-hover:bg-[#368C91] group-hover:text-white transition-colors flex items-center justify-center">
                    {iconMap[item.id] || <Laptop className="w-5 h-5" />}
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-[#17324D] bg-white border border-[#D6E4EE] px-2.5 py-1 rounded-full">
                    {item.deploymentTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#17324D] group-hover:text-[#368C91] transition-colors mb-2">
                  {item.deviceType}
                </h3>

                <p className="text-xs text-[#526477] leading-relaxed mb-4">
                  <span className="font-semibold text-[#17324D]">Ideal for: </span>
                  {item.idealFor}
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-xs text-[#17324D]">
                    <Clock className="w-3.5 h-3.5 text-[#368C91]" />
                    <span>Duration: {item.minDuration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#17324D]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#368C91]" />
                    <span>Maintenance & Onsite Swap Included</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onRentalEnquiry({ type: item.deviceType, quantity: 10, duration: '1 Month' })}
                className="w-full py-2.5 px-4 rounded-xl bg-white group-hover:bg-[#17324D] text-[#17324D] group-hover:text-white border border-[#D6E4EE] font-semibold text-xs transition-colors flex items-center justify-center gap-2"
              >
                <span>Enquire For {item.deviceType}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Interactive Rental Configuration Calculator */}
        <div className="bg-gradient-to-r from-[#EAF4FB] via-[#F2F6F8] to-[#FFFFFF] rounded-3xl p-8 sm:p-10 border border-[#D6E4EE] shadow-enterprise-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#368C91]">
                <Calculator className="w-4 h-4" />
                <span>Instant Fleet Sizing</span>
              </div>
              <h3 className="text-2xl font-bold text-[#17324D]">
                Configure Your Equipment Deployment
              </h3>
              <p className="text-xs sm:text-sm text-[#526477] leading-relaxed">
                Estimate fleet logistics and lock in special multi-seat volume pricing. Receive a formal equipment proposal within 2 hours.
              </p>
              
              <div className="pt-2 space-y-2 text-xs text-[#17324D]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#368C91]" />
                  <span>Pre-configured with licensed OS & security policies</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#368C91]" />
                  <span>Same-day standby replacement in case of hardware glitch</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-7 border border-[#D6E4EE] shadow-sm space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                {/* Select Equipment Type */}
                <div>
                  <label className="text-xs font-bold text-[#17324D] block mb-1.5">
                    Equipment Fleet
                  </label>
                  <select
                    value={selectedDevice}
                    onChange={(e) => setSelectedDevice(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-lg border border-[#D6E4EE] bg-[#F8FAFC] text-[#17324D] font-medium focus:outline-none focus:border-[#368C91]"
                  >
                    <option>Enterprise Laptops</option>
                    <option>Commercial Desktops</option>
                    <option>Datacenter Rack Servers</option>
                    <option>Switches & Firewalls</option>
                    <option>IP Telephony & Headsets</option>
                  </select>
                </div>

                {/* Device Count Slider / Selector */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-xs font-bold text-[#17324D]">Quantity</label>
                    <span className="text-xs font-mono font-bold text-[#368C91]">{quantity} Units</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="200"
                    step="5"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-full accent-[#368C91] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-[#526477]">
                    <span>5</span>
                    <span>100</span>
                    <span>200+</span>
                  </div>
                </div>

                {/* Duration */}
                <div>
                  <label className="text-xs font-bold text-[#17324D] block mb-1.5">
                    Rental Duration
                  </label>
                  <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-lg border border-[#D6E4EE] bg-[#F8FAFC] text-[#17324D] font-medium focus:outline-none focus:border-[#368C91]"
                  >
                    <option>1 Month</option>
                    <option>3 Months</option>
                    <option>6 Months</option>
                    <option>12 Months (Annual)</option>
                    <option>Multi-Year Custom</option>
                  </select>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#D6E4EE]">
                <div className="text-xs text-[#526477]">
                  Selected: <span className="font-bold text-[#17324D]">{quantity}x {selectedDevice}</span> for <span className="font-bold text-[#17324D]">{duration}</span>
                </div>
                <button
                  onClick={handleCalculateEnquiry}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#17324D] hover:bg-[#368C91] text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Submit Rental Enquiry</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
