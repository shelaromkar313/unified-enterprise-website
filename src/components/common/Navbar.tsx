import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight, Search, Server, ShieldCheck, PhoneCall, Laptop } from 'lucide-react';

interface NavbarProps {
  onOpenQuickSupport: () => void;
  onOpenLogin?: () => void;
}




export default function Navbar({ onOpenQuickSupport }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentUser, setCurrentUser] = useState<any>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('ue_user');
      if (saved) setCurrentUser(JSON.parse(saved));
      else setCurrentUser(null);
    } catch (e) {
      setCurrentUser(null);
    }
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Services & AMC', path: '/services' },
    { name: 'Rental Services', path: '/rental' },
    { name: 'Industries', path: '/industries' },
    { name: 'Resources', path: '/resources' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  // Quick search directory data
  const searchItems = [
    { title: 'Rack Servers & Dell PowerEdge', category: 'Hardware Sales', path: '/products', icon: Server },
    { title: 'Cisco & Fortinet Next-Gen Firewalls', category: 'Security & Network', path: '/products', icon: ShieldCheck },
    { title: 'Flexible Laptop & Server Rentals', category: 'Rental & Leasing', path: '/rental', icon: Laptop },
    { title: 'Comprehensive 2–4h SLA AMC Support', category: 'Maintenance & AMC', path: '/services', icon: ShieldCheck },
    { title: 'Grandstream IP PBX & Voice SIP Trunking', category: 'Unified Telecom', path: '/solutions', icon: PhoneCall },
    { title: 'Turnkey Enterprise Network Cabling', category: 'Infrastructure', path: '/services', icon: Server },
  ];

  const filteredItems = searchQuery.trim() === ''
    ? searchItems
    : searchItems.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );

  // Focus search input on open
  useEffect(() => {
    if (searchModalOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    } else {
      setSearchQuery('');
    }
  }, [searchModalOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSearchModalOpen(false);
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setSearchModalOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectItem = (path: string) => {
    setSearchModalOpen(false);
    navigate(path);
  };

  return (
    <header className="w-full bg-white shadow-xs border-b border-slate-200/80 relative z-40">
      {/* Cisco-Style Utility Top Bar on the right side */}
      <div className="w-full bg-white pt-1.5 pb-0 hidden md:block">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-end space-x-5 text-xs font-medium">
          <Link
            to="/contact-us?item=request-quote"
            className="text-slate-600 hover:text-[#dc2626] transition-colors"
          >
            How to buy
          </Link>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 pt-1.5 pb-2.5 sm:pb-3 lg:pb-3 flex items-center justify-between min-h-[64px] sm:min-h-[76px] lg:min-h-[86px]">
        {/* Left Group: Brand Logo + Complete Navigation Links */}
        <div className="flex items-center space-x-4 sm:space-x-6 xl:space-x-8">
          {/* Brand Logo - Enlarged for Strong Brand Prominence */}
          <Link to="/" className="flex items-center group py-0.5 shrink-0" aria-label="Home">
            <img
              src="/brand/ue_logo_horizontal.jpg"
              alt="Unified Enterprise Solutions"
              className="h-13 sm:h-16 lg:h-[72px] xl:h-[80px] w-auto max-w-[280px] sm:max-w-[360px] lg:max-w-[420px] object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Navigation Links - Clean Direct Links (No Hover Mega-Menus) */}
          <div className="hidden lg:flex items-center space-x-0.5 xl:space-x-1.5">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-3 py-2 text-[14.5px] font-cisco transition-colors duration-150 whitespace-nowrap ${
                    isActive
                      ? 'text-[#dc2626] font-bold'
                      : 'text-[#2b2b2b] hover:text-[#dc2626] font-medium'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2.5px] bg-[#dc2626] rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Right Group: Action Button + Search Button pushed completely to the right */}
        <div className="hidden sm:flex items-center space-x-2.5 sm:space-x-3 shrink-0">
          {/* Get Quick Support Button */}
          <button
            onClick={onOpenQuickSupport}
            className="px-6 py-2.5 min-h-[44px] rounded-full bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs sm:text-sm font-semibold shadow-soft-sm hover:shadow-soft-md transition-all duration-200 flex items-center gap-2 group active:scale-95 whitespace-nowrap"
          >
            <span>Get Quick Support</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Search Button directly after Get Quick Support */}
          <button
            onClick={() => setSearchModalOpen(true)}
            className="w-11 h-11 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-[#dc2626] border border-slate-200/90 flex items-center justify-center transition-all duration-200 shadow-2xs hover:shadow-xs active:scale-95"
            aria-label="Search website"
            title="Search products, services, and inventory (Ctrl + K)"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Buttons: Touch Targets for Search & Menu Toggle */}
        <div className="flex sm:hidden items-center gap-1">
          <button
            onClick={() => setSearchModalOpen(true)}
            className="w-11 h-11 rounded-full text-slate-700 hover:bg-slate-100 flex items-center justify-center transition-colors active:scale-95"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-11 h-11 rounded-full text-slate-700 hover:bg-slate-100 flex items-center justify-center transition-colors active:scale-95"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer - Clean Direct Links */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 sm:px-6 py-4 shadow-xl space-y-3 animate-in slide-in-from-top-2 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`min-h-[44px] flex items-center py-2.5 px-3.5 text-[15px] font-cisco transition-colors rounded-lg ${
                    isActive
                      ? 'text-[#dc2626] font-bold bg-red-50/70'
                      : 'text-[#2b2b2b] hover:text-[#dc2626] font-medium'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-200">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuickSupport();
              }}
              className="w-full min-h-[48px] py-3 rounded-full bg-[#dc2626] hover:bg-[#b91c1c] text-white text-sm font-bold text-center shadow-md flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
            >
              <span>Get Quick Support</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-center text-sm font-cisco text-slate-600">
            <Link
              to="/contact-us?item=request-quote"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[44px] flex items-center py-2 px-4 font-medium hover:text-[#dc2626] transition-colors"
            >
              How to buy
            </Link>
          </div>
        </div>
      )}

      {/* Interactive Global Search Modal */}
      {searchModalOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div 
            className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input Bar */}
            <div className="p-4 border-b border-slate-100 flex items-center gap-3">
              <Search className="w-5 h-5 text-slate-400" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search hardware, servers, firewalls, rentals, AMC contracts..."
                className="flex-1 text-sm sm:text-base outline-none text-slate-800 placeholder-slate-400"
              />
              <button
                onClick={() => setSearchModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Close search"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Suggestions & Results */}
            <div className="p-4 max-h-[60vh] overflow-y-auto space-y-2">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-2 mb-2">
                {searchQuery.trim() ? 'Matching Results' : 'Suggested Capabilities'}
              </p>

              {filteredItems.length > 0 ? (
                filteredItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectItem(item.path)}
                      className="w-full p-3 rounded-xl hover:bg-slate-50 flex items-center justify-between text-left transition-colors border border-transparent hover:border-slate-100 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-red-50 text-[#dc2626] flex items-center justify-center shrink-0 group-hover:bg-[#dc2626] group-hover:text-white transition-colors">
                          <Icon className="w-4.5 h-4.5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-800 group-hover:text-[#dc2626] transition-colors">
                            {item.title}
                          </h4>
                          <span className="text-xs text-slate-500 font-normal">
                            {item.category}
                          </span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#dc2626] group-hover:translate-x-0.5 transition-all" />
                    </button>
                  );
                })
              ) : (
                <div className="py-8 text-center text-slate-500 text-sm">
                  No matching services or products found for "{searchQuery}".
                </div>
              )}
            </div>

            {/* Modal Footer Note */}
            <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 text-[11px] text-slate-400 flex items-center justify-between">
              <span>Press <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded text-slate-600 font-mono">Esc</kbd> to close</span>
              <span>Unified Enterprise Search</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
