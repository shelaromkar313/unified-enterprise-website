import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, 
  Send, 
  Menu, 
  Minus, 
  Maximize2, 
  Minimize2, 
  X,
  PhoneCall,
  Calendar,
  CheckCircle2,
  Server,
  ShieldCheck,
  RefreshCw
} from 'lucide-react';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  suggestions?: string[];
  cta?: {
    label: string;
    action: () => void;
  };
}

interface AskAiAssistantProps {
  onOpenQuickSupport?: (serviceName?: string) => void;
}

/**
 * Unified Enterprise AI Emblem
 * Custom proprietary AI assistant icon combining radiant intelligence star core,
 * companion satellite sparks, and a celestial neural orbit ring.
 */
export const UnifiedAiEmblem = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg 
    viewBox="0 0 40 40" 
    className={`${className} fill-none`} 
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* High-tech celestial orbit aura */}
    <ellipse
      cx="20"
      cy="20"
      rx="15"
      ry="6.5"
      transform="rotate(-28 20 20)"
      stroke="white"
      strokeWidth="1.8"
      strokeDasharray="2.5 3"
      strokeOpacity="0.55"
    />
    {/* Primary 4-pointed radiant intelligence star core */}
    <path
      d="M18 7 C18 13.8 12.8 19 6 19 C12.8 19 18 24.2 18 31 C18 24.2 23.2 19 30 19 C23.2 19 18 13.8 18 7 Z"
      fill="white"
    />
    {/* Secondary satellite intelligence spark */}
    <path
      d="M29 6 C29 9.2 26.6 11.6 23.4 11.6 C26.6 11.6 29 14 29 17.2 C29 14 31.4 11.6 34.6 11.6 C31.4 11.6 29 9.2 29 6 Z"
      fill="white"
    />
    {/* Micro neural spark */}
    <path
      d="M9 26 C9 28 7.4 29.6 5.4 29.6 C7.4 29.6 9 31.2 9 33.2 C9 31.2 10.6 29.6 12.6 29.6 C10.6 29.6 9 28 9 26 Z"
      fill="white"
    />
    {/* Satellite connection node */}
    <circle cx="31.5" cy="25.5" r="1.5" fill="white" />
  </svg>
);

export default function AskAiAssistant({ onOpenQuickSupport }: AskAiAssistantProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initial welcome message matching the Cisco reference screenshots
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-1',
      sender: 'bot',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      text: "Welcome, I'm Ask Unified, your AI assistant.\n\nThis may be monitored and recorded for analytics, personalization and service improvements.",
    },
    {
      id: 'welcome-2',
      sender: 'bot',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      text: "To get started, ask me anything or try one of these suggestions:",
      suggestions: [
        'Chat with Sales',
        'Book a demo or Trial',
        'Hardware Sales & OEM',
        'Equipment Rental & Leasing',
        '2–4h AMC Support SLAs',
        'Unified Telecom & Voice'
      ]
    }
  ]);

  // Auto-scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  // Handle sending a user message and generating intelligent AI responses
  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputMessage).trim();
    if (!text) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');
    setIsTyping(true);

    // Formulate realistic, authoritative enterprise response
    setTimeout(() => {
      let botResponse: Message;
      const lower = text.toLowerCase();

      if (lower.includes('sales') || lower.includes('chat with sales')) {
        botResponse = {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          text: "I can connect you with our Enterprise Sales Engineering Desk right away. Our team assists with bulk procurement quotes, leasing terms, and Tier-1 hardware compliance.",
          suggestions: ['Call Sales: +91 8377017477', 'Request Formal Quote', 'Explore Equipment Catalog'],
          cta: {
            label: 'Open Quick Consultation Form',
            action: () => onOpenQuickSupport?.('Enterprise Sales Consultation')
          }
        };
      } else if (lower.includes('demo') || lower.includes('trial') || lower.includes('book')) {
        botResponse = {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          text: "We provide POC (Proof-of-Concept) demo trials for enterprise servers, Fortinet NGFWs, and Cisco switching fabrics with zero upfront capital lock-in.",
          suggestions: ['Book Infrastructure Assessment', 'Server Bench Test Trial', 'Talk to an Engineer'],
          cta: {
            label: 'Schedule Onsite Assessment',
            action: () => onOpenQuickSupport?.('Demo & Assessment Trial')
          }
        };
      } else if (lower.includes('rental') || lower.includes('lease') || lower.includes('leasing')) {
        botResponse = {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          text: "Unified Equipment Rental offers:\n• 24–48 hour metro deployment\n• High-performance laptops, workstations & rack servers\n• Certified NIST 800-88 cryptographic disk data wiping upon return\n• Zero capital lock-in with flexible monthly billing.",
          suggestions: ['Request Rental Inventory List', 'Leasing Rates & Terms', 'Call Sales Desk']
        };
      } else if (lower.includes('amc') || lower.includes('maintenance') || lower.includes('support')) {
        botResponse = {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          text: "Our Comprehensive & Non-Comp AMC covers:\n• Rapid 2–4 hour onsite SLAs\n• Emergency standby replacement loaners\n• Preventive quarterly health audits\n• Optional 24/7 dedicated resident engineers stationed on-premises.",
          suggestions: ['Review SLA Contract Tiers', 'Emergency Hardware Loaners', 'Contact Support Desk']
        };
      } else if (lower.includes('telecom') || lower.includes('voice') || lower.includes('pbx') || lower.includes('sip')) {
        botResponse = {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          text: "Carrier-Grade Unified Telecom & Voice includes:\n• Grandstream & Asterisk IP PBX systems\n• SIP trunking with 99.9% guaranteed uptime\n• BPO predictive dialers & PRI gateway routing\n• Enterprise CRM click-to-call integration.",
          suggestions: ['Explore IP PBX Solutions', 'SIP Trunk Rates', 'Schedule Voice Consultation']
        };
      } else if (lower.includes('hardware') || lower.includes('cisco') || lower.includes('server') || lower.includes('firewall')) {
        botResponse = {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          text: "We provide turnkey OEM Hardware Sales directly backed by official warranties:\n• Cisco / Fortinet / SonicWall Next-Gen Firewalls\n• Dell PowerEdge & HPE ProLiant Rack Servers\n• Managed L2/L3 Switches & Structured Fiber cabling.",
          suggestions: ['Inquire OEM Pricing', 'Download Product Specs', 'Chat with Sales']
        };
      } else {
        botResponse = {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          text: `Thank you for asking about "${text}". Unified Enterprise Solutions delivers end-to-end IT infrastructure, hardware leasing, AMC SLAs, and carrier-grade voice systems across India. Would you like to connect with a senior technical consultant?`,
          suggestions: ['Chat with Sales', 'Request a Consultation', 'Explore All Services'],
          cta: {
            label: 'Connect with an Engineer',
            action: () => onOpenQuickSupport?.('General AI Inquiry')
          }
        };
      }

      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <>
      {/* 1. Cisco-Style Floating Launcher Button & Hover Tooltip */}
      <div className="fixed bottom-6 right-6 z-45 pointer-events-none">
        <div className="relative flex items-center justify-end">
          {/* Hover Speech Bubble - "✦ Hello, how can I help?" matching Cisco screenshot */}
          {!isOpen && (
            <div 
              onClick={() => setIsOpen(true)}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={`absolute right-full mr-3 whitespace-nowrap cursor-pointer bg-white px-3.5 py-2 rounded-xl text-slate-800 text-xs sm:text-sm font-semibold shadow-[0_6px_25px_rgba(0,0,0,0.18)] border border-slate-200/90 flex items-center gap-2 select-none transition-all duration-200 ${
                isHovered ? 'opacity-100 translate-x-0 scale-100 pointer-events-auto' : 'opacity-0 translate-x-2 scale-95 pointer-events-none'
              }`}
            >
              <Sparkles className="w-4 h-4 text-[#dc2626]" />
              <span>Hello, how can I help?</span>
              {/* Triangular pointer to the button */}
              <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-t border-r border-slate-200/90 rotate-45" />
            </div>
          )}

          {/* Corporate Red Floating AI Assistant Button */}
          {!isOpen && (
            <button
              onClick={() => setIsOpen(true)}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="w-14 h-14 rounded-full bg-[#dc2626] hover:bg-[#b91c1c] text-white shadow-[0_6px_22px_rgba(220,38,38,0.45)] hover:shadow-[0_8px_28px_rgba(185,28,28,0.6)] transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center group focus:outline-none focus:ring-4 focus:ring-red-300/40 pointer-events-auto"
              aria-label="Open AI Assistant"
              title="Ask Unified AI Assistant"
            >
              {/* Custom Unified Enterprise AI Emblem */}
              <UnifiedAiEmblem className="w-8 h-8 group-hover:scale-110 transition-transform duration-300 drop-shadow-xs" />
            </button>
          )}
        </div>
      </div>

      {/* 2. Enterprise AI Assistant Chat Window */}
      {isOpen && (
        <div 
          className={`fixed z-50 bg-white rounded-2xl shadow-[0_15px_60px_rgba(0,0,0,0.3)] border border-slate-200/90 flex flex-col overflow-hidden transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 ${
            isMaximized 
              ? 'bottom-4 right-4 sm:bottom-6 sm:right-6 w-[95vw] sm:w-[700px] h-[90vh]' 
              : 'bottom-4 right-4 sm:bottom-6 sm:right-6 w-[94vw] sm:w-[390px] h-[580px] max-h-[85vh]'
          }`}
        >
          {/* Top Red Header */}
          <div className="bg-[#dc2626] text-white px-4 py-3 flex items-center justify-between select-none shadow-sm">
            <div className="flex items-center gap-2.5">
              <button 
                className="p-1 hover:bg-white/15 rounded-md transition-colors text-white"
                aria-label="Menu"
                title="Options"
              >
                <Menu className="w-5 h-5" />
              </button>
              <h3 className="font-bold text-base tracking-tight flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                  <UnifiedAiEmblem className="w-3.5 h-3.5" />
                </div>
                <span>Ask Unified</span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-full bg-white/20 text-white">
                  AI
                </span>
              </h3>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsMaximized(!isMaximized)}
                className="p-1.5 hover:bg-white/20 rounded-md transition-colors text-white/90 hover:text-white"
                title={isMaximized ? "Restore Size" : "Maximize Window"}
                aria-label="Toggle Fullscreen"
              >
                {isMaximized ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-white/20 rounded-md transition-colors text-white/90 hover:text-white"
                title="Minimize Chat"
                aria-label="Minimize"
              >
                <Minus className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-white/20 rounded-md transition-colors text-white/90 hover:text-white"
                title="Close"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white text-slate-800 text-sm">
            {messages.map((msg) => (
              <div key={msg.id} className="space-y-2">
                {/* Bot Message Format */}
                {msg.sender === 'bot' ? (
                  <div className="flex items-start gap-2.5">
                    {/* Small Red Avatar */}
                    <div className="w-7 h-7 rounded-full bg-[#dc2626] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                      <UnifiedAiEmblem className="w-4.5 h-4.5" />
                    </div>

                    <div className="flex-1">
                      {/* Timestamp */}
                      <span className="text-[11px] text-slate-400 font-medium block mb-1">
                        {msg.time}
                      </span>

                      {/* Bubble Text */}
                      <div className="text-slate-800 leading-relaxed font-normal whitespace-pre-line text-[13px] sm:text-sm">
                        {msg.text.includes('Privacy Statement') ? (
                          <>
                            {msg.text.replace(' See Privacy Statement', '')} See{' '}
                            <span 
                              onClick={() => onOpenQuickSupport?.('Privacy Policy Inquiry')}
                              className="text-red-600 underline font-semibold cursor-pointer hover:text-red-700"
                            >
                              Privacy Statement
                            </span>
                          </>
                        ) : (
                          msg.text
                        )}
                      </div>

                      {/* Suggestion Buttons */}
                      {msg.suggestions && msg.suggestions.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {msg.suggestions.map((suggestion, sIdx) => (
                            <button
                              key={sIdx}
                              onClick={() => handleSendMessage(suggestion)}
                              className="px-3.5 py-1.5 rounded-xl border border-[#dc2626] text-[#dc2626] hover:bg-[#dc2626] hover:text-white text-xs font-semibold transition-all duration-150 text-left bg-white shadow-2xs hover:shadow-xs active:scale-95"
                            >
                              {suggestion}
                            </button>
                          ))}
                        </div>
                      )}

                      {/* Action CTA Button */}
                      {msg.cta && (
                        <button
                          onClick={msg.cta.action}
                          className="mt-3 px-4 py-2 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white font-semibold text-xs shadow-sm flex items-center gap-1.5 transition-all"
                        >
                          <PhoneCall className="w-3.5 h-3.5" />
                          <span>{msg.cta.label}</span>
                        </button>
                      )}
                    </div>
                  </div>
                ) : (
                  /* User Message Format */
                  <div className="flex justify-end">
                    <div className="bg-slate-100 text-slate-900 px-3.5 py-2 rounded-2xl max-w-[85%] text-xs sm:text-sm font-medium shadow-2xs">
                      {msg.text}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-2 text-slate-400 text-xs pl-9">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-bounce" />
                <span className="w-2 h-2 rounded-full bg-red-500 animate-bounce delay-100" />
                <span className="w-2 h-2 rounded-full bg-red-500 animate-bounce delay-200" />
                <span className="text-[11px] font-medium text-slate-500">Ask Unified is thinking...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer Area with AI Disclaimer */}
          <div className="p-3 bg-white border-t border-slate-100 shadow-md">
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="relative flex items-center border border-slate-300 rounded-xl px-3 py-1.5 bg-white focus-within:border-[#dc2626] focus-within:ring-2 focus-within:ring-red-100 transition-all"
            >
              <Sparkles className="w-4 h-4 text-[#dc2626] shrink-0 mr-2" />
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message"
                className="w-full text-xs sm:text-sm bg-transparent border-none outline-none text-slate-800 placeholder-slate-400"
              />
              <button
                type="submit"
                disabled={!inputMessage.trim()}
                className={`p-1.5 rounded-lg transition-colors ml-1 ${
                  inputMessage.trim() 
                    ? 'text-[#dc2626] hover:bg-red-50' 
                    : 'text-slate-300 cursor-not-allowed'
                }`}
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            <p className="text-[10px] text-slate-400 text-center mt-2 font-normal">
              Results generated by AI. Before using results, verify accuracy and completeness.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
