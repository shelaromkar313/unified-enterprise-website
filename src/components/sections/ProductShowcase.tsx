import React, { useState } from 'react';
import { 
  Laptop, Server, ShieldCheck, PhoneCall, Radio, 
  Search, ArrowRight, Check, CheckCircle2, Sliders, ExternalLink 
} from 'lucide-react';
import { PRODUCTS_DATA, ProductItem } from '../../data/ueContent';

interface ProductShowcaseProps {
  onSelectProduct: (product: ProductItem) => void;
}

export default function ProductShowcase({ onSelectProduct }: ProductShowcaseProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Computing', 'Networking', 'Security', 'Telecom', 'Connectivity'];

  const filteredProducts = PRODUCTS_DATA.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="py-20 bg-[#F8FAFC] border-b border-[#D6E4EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF4FB] text-[#368C91] text-xs font-bold uppercase tracking-wider mb-3">
            <span>Direct Enterprise Hardware & Licensing</span>
          </div>
          <h2 className="h2-section text-[#17324D] mb-4">
            Enterprise Product Portfolio
          </h2>
          <p className="text-base text-[#526477]">
            Certified hardware procurement, tier-1 computing fleets, network switching backbones, and telecom PBX systems tailored to demanding corporate standards.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-[#D6E4EE]">
          
          {/* Category Tabs */}
          <div className="flex items-center flex-wrap gap-1.5 p-1 bg-white rounded-xl border border-[#D6E4EE] shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#17324D] text-white shadow-sm'
                    : 'text-[#526477] hover:text-[#17324D] hover:bg-[#F2F6F8]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Search Field */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#526477]" />
            <input
              type="text"
              placeholder="Search products or specs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-white border border-[#D6E4EE] text-[#17324D] placeholder-[#526477] focus:outline-none focus:border-[#368C91] focus:ring-1 focus:ring-[#368C91]"
            />
          </div>

        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="enterprise-card rounded-2xl bg-white border border-[#D6E4EE] overflow-hidden flex flex-col justify-between group"
            >
              {/* Product Visual or Feature Header */}
              {product.image ? (
                <div className="relative h-48 overflow-hidden bg-[#EAF4FB]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17324D]/50 to-transparent" />
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    {product.badge && (
                      <span className="text-[10px] font-bold tracking-wide uppercase bg-[#17324D]/90 text-white px-2.5 py-1 rounded-md backdrop-blur-sm">
                        {product.badge}
                      </span>
                    )}
                    {product.rentalAvailable && (
                      <span className="text-[10px] font-bold tracking-wide uppercase bg-[#368C91] text-white px-2 py-1 rounded-md">
                        Rent / Buy
                      </span>
                    )}
                  </div>

                  <span className="absolute bottom-2.5 left-3 text-xs font-semibold text-white/90">
                    {product.category}
                  </span>
                </div>
              ) : (
                <div className="p-4 bg-gradient-to-r from-[#EAF4FB] to-[#F2F6F8] border-b border-[#D6E4EE] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#368C91] uppercase tracking-wider">
                    {product.category}
                  </span>
                  {product.rentalAvailable && (
                    <span className="text-[10px] font-semibold bg-white text-[#17324D] border border-[#D6E4EE] px-2 py-0.5 rounded-full font-mono">
                      Rental Available
                    </span>
                  )}
                </div>
              )}

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#17324D] group-hover:text-[#368C91] transition-colors mb-2">
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#526477] leading-relaxed mb-4">
                    {product.description}
                  </p>

                  {/* Enterprise Features Bulleted */}
                  <div className="space-y-1.5 mb-4">
                    {product.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#17324D]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#368C91] shrink-0" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specs Strip */}
                <div className="pt-3 border-t border-[#D6E4EE] mb-4 bg-[#F8FAFC] p-2.5 rounded-lg">
                  <span className="text-[10px] uppercase font-bold text-[#526477] block mb-0.5">Architecture Specs</span>
                  <span className="text-xs font-mono text-[#17324D] line-clamp-1">{product.specs}</span>
                </div>

                {/* Action CTA */}
                <button
                  onClick={() => onSelectProduct(product)}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#F2F6F8] hover:bg-[#17324D] text-[#17324D] hover:text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 group-hover:shadow-sm"
                >
                  <span>Request Specifications & Quote</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
