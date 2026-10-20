import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  BookOpen, Linkedin, ExternalLink, ArrowRight, 
  Calendar, Clock, CheckCircle2, ShieldCheck, Network, Layers, FileText, ChevronDown 
} from 'lucide-react';

interface ResourcesPageProps {
  onOpenInquiry?: (topic?: string) => void;
}

interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  image: string;
  linkedinUrl?: string;
  keyTakeaways: string[];
}

export default function ResourcesPage({ onOpenInquiry }: ResourcesPageProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlItem = searchParams.get('item');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(urlItem || 'all');
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(false);

  useEffect(() => {
    setSelectedCategoryId(urlItem || 'all');
  }, [urlItem]);

  // Exact 2 categories requested by user
  const categoryList = useMemo(() => [
    { id: 'blog-linkedin-articles', name: 'Blog – connect with linkedin article' },
    { id: 'it-telecom-integration-articles', name: 'IT & Telecom Integration Articles' },
  ], []);

  const handleSelectCategory = (id: string) => {
    setSelectedCategoryId(id);
    if (id === 'all') {
      searchParams.delete('item');
      setSearchParams(searchParams, { replace: true });
    } else {
      setSearchParams({ item: id }, { replace: true });
    }
  };

  // Curated Enterprise Articles
  const blogArticles: Article[] = useMemo(() => [
    {
      id: 'art-linkedin-1',
      title: 'Eliminating the Multi-Vendor Fault Line: Why Converged IT & Telecom Wins in 2026',
      category: 'Executive Strategy',
      date: 'October 12, 2026',
      readTime: '5 min read',
      summary: 'Why enterprise CIOs are consolidating fragmented hardware vendors, telecom carriers, and AMC contractors into a single accountable operational SLA model.',
      image: '/assets/linkedin_thought_leadership.jpg',
      linkedinUrl: 'https://www.linkedin.com/pulse/enterprise-it-telecom-integration',
      keyTakeaways: [
        'How vendor finger-pointing adds 42% hidden operational latency',
        'Consolidating leased lines, IP-PBX, and switch telemetry under one desk',
        'Pan-India emergency dispatch models that reduce MTTR below 2 hours'
      ]
    },
    {
      id: 'art-linkedin-2',
      title: 'Hardware Leasing vs Capital Expenditure: Calculating TCO for Scaled Workforces',
      category: 'FinOps & Infrastructure',
      date: 'September 28, 2026',
      readTime: '6 min read',
      summary: 'A mathematical comparison of purchasing corporate workstation fleets versus flexible 12-month OPEX leasing with guaranteed NIST-compliant lifecycle disposal.',
      image: '/assets/ue_equipment_rental.jpg',
      linkedinUrl: 'https://www.linkedin.com/pulse/hardware-leasing-tco-enterprise',
      keyTakeaways: [
        'Protecting corporate working capital while scaling 50–500+ seat projects',
        'Eliminating residual device value risks and electronic depreciation',
        'Guaranteed next-business-day swap warranties built directly into lease rates'
      ]
    },
    {
      id: 'art-linkedin-3',
      title: 'Architecting 24/7 Voice Telephony for High-Concurrency BPOs and Contact Centers',
      category: 'Telecom & Voice Architecture',
      date: 'September 15, 2026',
      readTime: '7 min read',
      summary: 'Deep dive into carrier-grade SIP trunking, predictive Asterisk dialer tuning, and sub-15ms voice latency optimization across high-density agent floors.',
      image: '/assets/telecom_ip_phones.jpg',
      linkedinUrl: 'https://www.linkedin.com/pulse/carrier-grade-sip-voice-telecom',
      keyTakeaways: [
        'BGP carrier multi-homing to eliminate carrier SIP blackouts',
        'QoS queue classification on Layer 3 core switches for voice packets',
        '100% compliant multi-tier call recording storage architecture'
      ]
    }
  ], []);

  const integrationArticles: Article[] = useMemo(() => [
    {
      id: 'art-integ-1',
      title: 'Converging IP-PBX Telephony with High-Availability SD-WAN Mesh',
      category: 'Technical Integration',
      date: 'October 5, 2026',
      readTime: '8 min read',
      summary: 'Technical blueprint detailing how to configure DSCP EF voice tagging, automated jitter buffer compensation, and dual-WAN failover for remote branch extensions.',
      image: '/assets/network_security_firewall.jpg',
      keyTakeaways: [
        'VLAN isolation protocols separating voice payloads from general corporate traffic',
        'Automated IPsec site-to-site tunnel re-routing on packet loss exceeding 1%',
        'SIP ALG disabling and NAT traversal configurations on Next-Gen Firewalls'
      ]
    },
    {
      id: 'art-integ-2',
      title: 'Zero-Trust Perimeter Defense: Deploying Next-Gen Firewalls in Multi-Gigabit Environments',
      category: 'Cybersecurity Engineering',
      date: 'September 20, 2026',
      readTime: '9 min read',
      summary: 'Step-by-step engineering guidelines for implementing hardware-accelerated deep SSL inspection, micro-segmentation, and MFA-enforced VPN portals.',
      image: '/assets/network_security_firewall.jpg',
      keyTakeaways: [
        'Active-Passive high availability clustering with sub-second state synchronization',
        'Preventing encrypted malware delivery via outbound SSL inspection profiles',
        'Enforcing device compliance verification prior to granting internal subnet access'
      ]
    },
    {
      id: 'art-integ-3',
      title: 'Cat 6A Structured Cabling and Fiber Optic Backbone Certification Standards',
      category: 'Physical Infrastructure',
      date: 'August 30, 2026',
      readTime: '6 min read',
      summary: 'Best practices for server room patch panel dressing, cable bend radius management, and Fluke DTX/DSX test validation for 10Gbps enterprise readiness.',
      image: '/assets/wifi_access_point.jpg',
      keyTakeaways: [
        'EIA/TIA 568.2-D compliance checklists for high-density patch fields',
        'Single-mode vs Multi-mode OM4 fiber budget calculations for datacenter runs',
        'Thermal dissipation guidelines in fully populated 42U rack enclosures'
      ]
    }
  ], []);

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
                    Knowledge Base
                  </span>
                  <p className="text-sm font-bold text-slate-900 truncate">
                    {selectedCategoryId === 'all'
                      ? 'Resources Home'
                      : currentCategoryObj?.name || 'All Resources'}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileCategoryOpen(!mobileCategoryOpen)}
                  className="px-3.5 py-2 min-h-[40px] rounded-xl bg-white border border-slate-200 text-xs font-semibold text-[#dc2626] shadow-2xs flex items-center gap-1.5 active:scale-95 transition-all shrink-0"
                >
                  <span>{mobileCategoryOpen ? 'Close' : 'Topics'}</span>
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
                    Resources Home
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
            {/* Resources Home Link */}
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
                Resources Home
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

          {/* Right Column: Cisco 3-Card Home OR Rich Article Feed View */}
          <main className="lg:col-span-9">
            
            {/* 1. HOME VIEW: Cisco 3-Card Spotlight */}
            {selectedCategoryId === 'all' ? (
              <div className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-1">
                  
                  {/* Card 1: LinkedIn Articles */}
                  <div className="flex flex-col justify-between group">
                    <div>
                      <div className="h-44 sm:h-52 rounded-xl overflow-hidden mb-4 bg-slate-100">
                        <img
                          src="/assets/linkedin_thought_leadership.jpg"
                          alt="LinkedIn Thought Leadership"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                        LinkedIn Thought Leadership
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                        Executive perspectives on vendor consolidation, telecom convergence, and enterprise IT FinOps.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleSelectCategory('blog-linkedin-articles')}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#dc2626] hover:underline"
                    >
                      <span>Explore LinkedIn articles</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Card 2: Technical Integration */}
                  <div className="flex flex-col justify-between group">
                    <div>
                      <div className="h-44 sm:h-52 rounded-xl overflow-hidden mb-4 bg-slate-100">
                        <img
                          src="/assets/network_security_firewall.jpg"
                          alt="IT & Telecom Integration"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                        Technical Integration Articles
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                        Step-by-step schematics for SD-WAN telephony routing, Zero-Trust firewall policy, and fiber certification.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleSelectCategory('it-telecom-integration-articles')}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#dc2626] hover:underline"
                    >
                      <span>Read integration playbooks</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Card 3: Free Consultation */}
                  <div className="flex flex-col justify-between group">
                    <div>
                      <div className="h-44 sm:h-52 rounded-xl overflow-hidden mb-4 bg-slate-100">
                        <img
                          src="/assets/why_data_backed.jpg"
                          alt="Engineering Blueprints"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                        Tailored Engineering Blueprints
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                        Request a custom technical schematic or onsite site survey audit with our Pan-India certified systems architects.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => onOpenInquiry && onOpenInquiry('Custom Blueprint Consultation')}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#dc2626] hover:underline"
                    >
                      <span>Consult an engineer</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </div>
            ) : (
              /* 2. CATEGORY VIEW: Clean Article Listing */
              <div className="space-y-8 animate-in fade-in duration-200">
                
                {/* Category Title Header */}
                <div className="pb-4 border-b border-slate-100">
                  <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                    {selectedCategoryId === 'blog-linkedin-articles'
                      ? 'Blog – Connect with LinkedIn Article'
                      : 'IT & Telecom Integration Articles'}
                  </h2>
                  <p className="text-xs text-slate-600 mt-1">
                    {selectedCategoryId === 'blog-linkedin-articles'
                      ? 'Industry insights and technology strategy published on LinkedIn by Unified Enterprise architects.'
                      : 'Technical integration blueprints, configuration standards, and deployment best practices.'}
                  </p>
                </div>

                {/* Article Cards Grid */}
                <div className="grid grid-cols-1 gap-6">
                  {(selectedCategoryId === 'blog-linkedin-articles' ? blogArticles : integrationArticles).map((article) => (
                    <article
                      key={article.id}
                      className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 p-6 sm:p-7 flex flex-col md:flex-row gap-6 items-start"
                    >
                      <div className="w-full md:w-56 h-48 md:h-44 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1 flex flex-col justify-between space-y-3">
                        <div>
                          <div className="flex items-center gap-3 text-xs text-slate-500 mb-1.5">
                            <span className="font-bold text-[#dc2626] bg-red-50 px-2.5 py-0.5 rounded-full">
                              {article.category}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5 text-slate-400" />
                              {article.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5 text-slate-400" />
                              {article.readTime}
                            </span>
                          </div>

                          <h3 className="text-lg font-bold text-slate-900 leading-snug hover:text-[#dc2626] transition-colors">
                            {article.title}
                          </h3>

                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                            {article.summary}
                          </p>
                        </div>

                        {/* Key Takeaways */}
                        <div className="pt-2 border-t border-slate-100">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                            Key Architectural Highlights
                          </span>
                          <ul className="space-y-1">
                            {article.keyTakeaways.map((point, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#dc2626] shrink-0 mt-0.5" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Action Link */}
                        <div className="pt-2 flex items-center gap-3">
                          {selectedCategoryId === 'blog-linkedin-articles' ? (
                            <a
                              href="https://www.linkedin.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0077b5] hover:bg-[#005582] text-white text-xs font-bold transition-colors shadow-2xs"
                            >
                              <Linkedin className="w-3.5 h-3.5" />
                              <span>Connect & Read on LinkedIn</span>
                              <ExternalLink className="w-3 h-3 ml-0.5" />
                            </a>
                          ) : (
                            <button
                              type="button"
                              onClick={() => onOpenInquiry && onOpenInquiry(`Technical Article Blueprint: ${article.title}`)}
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold transition-colors shadow-2xs"
                            >
                              <span>Request Full Technical Schematic</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>

                      </div>
                    </article>
                  ))}
                </div>

              </div>
            )}

          </main>

        </div>
      </div>
    </div>
  );
}
