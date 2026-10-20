import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowRight, CheckCircle2, X, SlidersHorizontal, ShieldCheck, Laptop, Server, ChevronDown } from 'lucide-react';
import { CATALOG_PRODUCTS, CatalogProduct } from '../data/catalogData';
import { PRODUCTS_DATA, ProductItem } from '../data/ueContent';

interface ProductsPageProps {
  onOpenInquiry: (productName: string) => void;
}

export default function ProductsPage({ onOpenInquiry }: ProductsPageProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlItem = searchParams.get('item');

  // Selected category state ('all' or specific category ID)
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(urlItem || 'all');
  
  // Brand filter state (for sub-filtering, e.g. Dell, HP, Lenovo)
  const [selectedBrand, setSelectedBrand] = useState<string>('All');

  // Mobile category drawer state
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState<boolean>(false);

  // Modal inspection state
  const [inspectProduct, setInspectProduct] = useState<CatalogProduct | null>(null);

  // Sync with URL query parameter
  useEffect(() => {
    setSelectedCategoryId(urlItem || 'all');
    setSelectedBrand('All');
  }, [urlItem]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setInspectProduct(null);
    };
    if (inspectProduct) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [inspectProduct]);

  // The exact 14 categories requested
  const categoryList = useMemo(() => [
    { id: 'laptops-desktops', name: 'Laptops & Desktops' },
    { id: 'servers-storage', name: 'Servers & Storage' },
    { id: 'it-hardware-accessories', name: 'IT Hardware & Accessories' },
    { id: 'routers-network-switches', name: 'Routers & Network Switches' },
    { id: 'firewalls-network-security', name: 'Firewalls & Network Security' },
    { id: 'wifi-wireless-networking', name: 'Wi-Fi & Wireless Networking' },
    { id: 'business-phones-ip-phones', name: 'Business Phones & IP Phones' },
    { id: 'cctv', name: 'CCTV' },
    { id: 'pbx-business-telephony', name: 'PBX & Business Telephony' },
    { id: 'call-centre-dialer-infrastructure', name: 'Call-Centre & Dialer Infrastructure' },
    { id: 'gsm-gateways-pri-fxo-fxs', name: 'GSM Gateways, PRI, FXO & FXS' },
    { id: 'software-business-licences', name: 'Software & Business Licences' },
    { id: 'ill-leased-line', name: 'ILL' },
    { id: 'managed-voip', name: 'Managed VOIP' },
  ], []);

  const handleSelectCategory = (id: string) => {
    setSelectedCategoryId(id);
    setSelectedBrand('All');
    if (id === 'all') {
      searchParams.delete('item');
      setSearchParams(searchParams, { replace: true });
    } else {
      setSearchParams({ item: id }, { replace: true });
    }
  };

  // Products belonging to the selected category from CATALOG_PRODUCTS
  const categoryCatalogProducts = useMemo(() => {
    return CATALOG_PRODUCTS.filter((p) => p.categoryId === selectedCategoryId);
  }, [selectedCategoryId]);

  // Available brands for the current category
  const availableBrands = useMemo(() => {
    const brands = Array.from(new Set(categoryCatalogProducts.map((p) => p.brand)));
    return ['All', ...brands];
  }, [categoryCatalogProducts]);

  // Filtered products for display
  const displayedCatalogProducts = useMemo(() => {
    if (selectedBrand === 'All') return categoryCatalogProducts;
    return categoryCatalogProducts.filter((p) => p.brand === selectedBrand);
  }, [categoryCatalogProducts, selectedBrand]);

  // Fallback product info if category not in CATALOG_PRODUCTS
  const fallbackProduct = useMemo(() => {
    if (categoryCatalogProducts.length > 0) return null;
    return PRODUCTS_DATA.find((p) => p.id === selectedCategoryId);
  }, [selectedCategoryId, categoryCatalogProducts]);

  const currentCategoryObj = categoryList.find((c) => c.id === selectedCategoryId);

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
                    Category Selection
                  </span>
                  <p className="text-sm font-bold text-slate-900 truncate">
                    {selectedCategoryId === 'all'
                      ? 'Products and Services Home'
                      : currentCategoryObj?.name || 'All Products'}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileCategoryOpen(!mobileCategoryOpen)}
                  className="px-3.5 py-2 min-h-[40px] rounded-xl bg-white border border-slate-200 text-xs font-semibold text-[#dc2626] shadow-2xs flex items-center gap-1.5 active:scale-95 transition-all shrink-0"
                >
                  <span>{mobileCategoryOpen ? 'Close' : 'Categories'}</span>
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
                    Products and Services Home
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
            {/* Products and Services Home Link */}
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
                Products and Services Home
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

          {/* Right Column: Cisco 3-Card Home OR Rich E-Commerce Product Catalog */}
          <main className="lg:col-span-9">
            
            {/* 1. HOME VIEW: Cisco 3-Card Spotlight (Exact Match to Reference Screenshot) */}
            {selectedCategoryId === 'all' ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-1">
                
                {/* Card 1: Explore a better Wi-Fi */}
                <div className="flex flex-col justify-between group">
                  <div>
                    <div className="h-44 sm:h-52 rounded-xl overflow-hidden mb-4 bg-slate-100">
                      <img
                        src="/assets/wifi_access_point.jpg"
                        alt="Explore a better Wi-Fi"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                      Explore a better Wi-Fi
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      Deliver fast, secure connectivity across every space. Simplify management and build an AI-ready network designed for growing demands.
                    </p>
                  </div>
                  <button
                    onClick={() => handleSelectCategory('wifi-wireless-networking')}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#dc2626] hover:underline"
                  >
                    <span>Get started today</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Card 2: Cisco Security free trials */}
                <div className="flex flex-col justify-between group">
                  <div>
                    <div className="h-44 sm:h-52 rounded-xl overflow-hidden mb-4 bg-slate-100">
                      <img
                        src="/assets/network_security_firewall.jpg"
                        alt="Cisco Security free trials"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                      Cisco Security free trials
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      Get started with the right security solution for you. Try out our security solutions before you buy them.
                    </p>
                  </div>
                  <button
                    onClick={() => onOpenInquiry('Cisco Security Free Trial')}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#dc2626] hover:underline"
                  >
                    <span>Start a free trial</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Card 3: Services for a resilient infrastructure */}
                <div className="flex flex-col justify-between group">
                  <div>
                    <div className="h-44 sm:h-52 rounded-xl overflow-hidden mb-4 bg-slate-100">
                      <img
                        src="/assets/datacenter_servers.jpg"
                        alt="Services for a resilient infrastructure"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                      Services for a resilient infrastructure
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      See, remediate, modernize, and defend AI threats at machine speed using Cisco Resilient Infrastructure Services, powered by Cisco IQ.
                    </p>
                  </div>
                  <button
                    onClick={() => handleSelectCategory('servers-storage')}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#dc2626] hover:underline"
                  >
                    <span>Explore how</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            ) : (
              /* 2. CATEGORY VIEW: Clean, High-End Enterprise Product Grid (Dell / HP / Amazon Business Style) */
              <div className="space-y-6">
                
                {/* Category Header Bar with Breadcrumb and Brand Pills */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                      {currentCategoryObj?.name}
                    </h2>
                  </div>

                  {/* Brand Filter Pills (Dell, HP, Lenovo, Apple, ASUS, etc.) */}
                  {availableBrands.length > 2 && (
                    <div className="flex items-center flex-wrap gap-1.5">
                      <span className="text-xs text-slate-400 mr-1 font-medium">Brand:</span>
                      {availableBrands.map((brand) => (
                        <button
                          key={brand}
                          onClick={() => setSelectedBrand(brand)}
                          className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                            selectedBrand === brand
                              ? 'bg-[#dc2626] text-white shadow-2xs'
                              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          }`}
                        >
                          {brand}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* If we have specific catalog models for this category */}
                {displayedCatalogProducts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 cisco-reveal cisco-stagger">
                    {displayedCatalogProducts.map((product) => (
                      <article
                        key={product.id}
                        className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                      >
                        <div>
                          {/* Product Image Container */}
                          <div className="relative h-52 bg-slate-50 overflow-hidden">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                            />
                            {/* Brand Badge */}
                            <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-slate-800 text-[11px] font-bold px-2.5 py-0.5 rounded-md shadow-2xs border border-slate-200/80">
                              {product.brand}
                            </span>
                            {product.rentalAvailable && (
                              <span className="absolute top-3 right-3 bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-2xs">
                                Rent / Buy
                              </span>
                            )}
                          </div>

                          {/* Body Content */}
                          <div className="p-5">
                            <h3 className="text-base font-bold text-slate-900 group-hover:text-[#dc2626] transition-colors mb-2.5 leading-snug">
                              {product.name}
                            </h3>

                            {/* Clean Specification Chips */}
                            <div className="flex flex-wrap gap-1.5 mb-3.5">
                              {product.keyPills.map((pill, idx) => (
                                <span
                                  key={idx}
                                  className="text-[10px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md"
                                >
                                  {pill}
                                </span>
                              ))}
                            </div>

                            {/* Stock Indicator */}
                            <div className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                              <span>{product.stockStatus}</span>
                            </div>
                          </div>
                        </div>

                        {/* Card Footer Actions */}
                        <div className="p-5 pt-0 border-t border-slate-100 mt-2 flex items-center gap-2">
                          <button
                            onClick={() => onOpenInquiry(`Inquiry: ${product.brand} - ${product.name}`)}
                            className="flex-1 py-2 px-3 rounded-lg bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold transition-colors text-center"
                          >
                            Request Quote
                          </button>
                          <button
                            onClick={() => setInspectProduct(product)}
                            className="py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
                          >
                            Quick View
                          </button>
                        </div>
                      </article>
                    ))}
                  </div>
                ) : fallbackProduct ? (
                  /* Fallback clean presentation for remaining categories */
                  <div className="max-w-2xl bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs p-6 sm:p-8">
                    <div className="h-36 sm:h-44 max-w-md rounded-xl overflow-hidden mb-5 bg-slate-100">
                      <img
                        src={fallbackProduct.image || '/assets/ue_hardware_procurement.jpg'}
                        alt={fallbackProduct.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {fallbackProduct.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                      {fallbackProduct.description}
                    </p>
                    
                    <div className="bg-slate-50 border border-slate-200/80 p-3.5 rounded-xl mb-6">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                        Enterprise Specifications
                      </span>
                      <p className="text-xs font-mono text-slate-800">
                        {fallbackProduct.specs}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => onOpenInquiry(`Inquiry: ${fallbackProduct.name}`)}
                        className="px-6 py-2.5 rounded-lg bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold transition-colors"
                      >
                        Request Official Quote
                      </button>
                      <button
                        onClick={() => handleSelectCategory('all')}
                        className="px-4 py-2.5 text-xs font-medium text-slate-500 hover:text-slate-800 transition-colors"
                      >
                        Back to Overview
                      </button>
                    </div>
                  </div>
                ) : null}

              </div>
            )}
          </main>

        </div>
      </div>

      {/* 3. Clean Quick View Modal (Dell / HP Commercial Style) */}
      {inspectProduct && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setInspectProduct(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full p-5 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 mb-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#dc2626] bg-red-50 px-2.5 py-0.5 rounded-full inline-block mb-1.5">
                  {inspectProduct.brand} Enterprise Hardware
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                  {inspectProduct.name}
                </h3>
              </div>
              <button
                onClick={() => setInspectProduct(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors shrink-0"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="h-56 sm:h-64 rounded-xl overflow-hidden mb-5 bg-slate-50">
              <img
                src={inspectProduct.image}
                alt={inspectProduct.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Detailed Technical Specs Table */}
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 mb-6 space-y-2 text-xs">
              {inspectProduct.specs.processor && (
                <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-slate-200/60">
                  <span className="font-semibold text-slate-500">Processor:</span>
                  <span className="text-slate-800 font-medium text-right sm:max-w-md">{inspectProduct.specs.processor}</span>
                </div>
              )}
              {inspectProduct.specs.display && (
                <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-slate-200/60">
                  <span className="font-semibold text-slate-500">Display:</span>
                  <span className="text-slate-800 font-medium text-right sm:max-w-md">{inspectProduct.specs.display}</span>
                </div>
              )}
              {inspectProduct.specs.memory && (
                <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-slate-200/60">
                  <span className="font-semibold text-slate-500">Memory:</span>
                  <span className="text-slate-800 font-medium text-right sm:max-w-md">{inspectProduct.specs.memory}</span>
                </div>
              )}
              {inspectProduct.specs.storage && (
                <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-slate-200/60">
                  <span className="font-semibold text-slate-500">Storage:</span>
                  <span className="text-slate-800 font-medium text-right sm:max-w-md">{inspectProduct.specs.storage}</span>
                </div>
              )}
              {inspectProduct.specs.security && (
                <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-slate-200/60">
                  <span className="font-semibold text-slate-500">Security Suite:</span>
                  <span className="text-slate-800 font-medium text-right sm:max-w-md">{inspectProduct.specs.security}</span>
                </div>
              )}
              {inspectProduct.specs.ports && (
                <div className="flex flex-col sm:flex-row sm:justify-between py-1">
                  <span className="font-semibold text-slate-500">I/O Ports:</span>
                  <span className="text-slate-800 font-medium text-right sm:max-w-md">{inspectProduct.specs.ports}</span>
                </div>
              )}
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
              <button
                onClick={() => setInspectProduct(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const pName = `${inspectProduct.brand} ${inspectProduct.name}`;
                  setInspectProduct(null);
                  onOpenInquiry(`Inquiry: ${pName}`);
                }}
                className="px-5 py-2 rounded-lg bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold transition-colors flex items-center gap-1.5"
              >
                <span>Request Quotation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
