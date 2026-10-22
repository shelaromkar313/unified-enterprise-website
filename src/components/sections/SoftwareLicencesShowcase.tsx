import React, { useState } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Laptop, 
  Server, 
  Database, 
  Users, 
  Cloud, 
  Key, 
  Layers, 
  FileText, 
  Globe, 
  Headphones, 
  Lock, 
  RefreshCw, 
  Cpu,
  Mail,
  Zap,
  Building2
} from 'lucide-react';

interface SoftwareLicencesShowcaseProps {
  onOpenInquiry: (topic: string) => void;
  initialTab?: LicenseCategory;
  mode?: 'all-licences' | 'ai';
}

type LicenseCategory = 'all' | 'voice-ai' | 'm365-suites' | 'core-apps' | 'windows-server' | 'google-workspace' | 'database';

interface LicenseProduct {
  id: string;
  name: string;
  category: LicenseCategory;
  categoryLabel: string;
  image: string;
  licenseModel: string;
  tagline: string;
  description: string;
  highlightApps?: string[];
  keyFeatures: string[];
  specs: string[];
  idealFor: string;
  badge: string;
  badgeColor: string;
}

const LICENCE_PRODUCTS: LicenseProduct[] = [
  // --- PRIORITY 1: VOICE AI & SPEECH INTELLIGENCE SERVICES ---
  {
    id: 'voice-ai-multiple-agents',
    name: 'Multiple Voice AI Agents & Conversational Bots',
    category: 'voice-ai',
    categoryLabel: 'Voice AI Telephony',
    image: '/assets/voice_ai_agent_icon.png',
    licenseModel: 'CLOUD TELEPHONY / UVC PBX (AWS HOSTED)',
    tagline: 'Autonomous multi-persona Voicebots handling 10,000+ concurrent inbound & outbound calls with natural human turn-taking',
    description: 'Deploy dedicated conversational Voice AI agents for Tier-1 Customer Support, Outbound Lead Qualification, Payment/EMI Recovery, and CSAT Surveys. Features sub-450ms latency, natural barge-in (caller can interrupt), and instant warm SIP transfer to human agents with full transcript context.',
    highlightApps: ['Inbound Support', 'Outbound Sales', 'EMI Recovery', 'CSAT Surveys', 'Barge-In', 'SIP Transfer'],
    keyFeatures: [
      'Autonomous conversational inbound customer care & outbound sales bots',
      'Sub-450ms voice response time with zero awkward latency pauses',
      'Caller barge-in supported: Callers can interrupt naturally to clarify questions',
      'Direct CRM auto-sync with Salesforce, Zoho, HubSpot, and LeadSquared',
      'Warm/cold SIP transfer to human supervisors with full transcript handoff'
    ],
    specs: [
      'Platform: AWS EC2 Cloud PBX & WebRTC',
      'Signaling: TLS & WSS (WebSocket Secure)',
      'Security: Fail2ban, MFA, VAPT & SOC 2 Certified'
    ],
    idealFor: 'Enterprises, BPOs, NBFCs, and sales teams requiring 24/7 call automation without adding human headcount',
    badge: 'Priority Service',
    badgeColor: 'bg-red-50 text-[#dc2626] border-red-200'
  },
  {
    id: 'speech-to-text-and-tts-engine',
    name: 'Speech to Text (STT) & Neural Text to Speech (TTS)',
    category: 'voice-ai',
    categoryLabel: 'Speech Engine',
    image: '/assets/speech_stt_tts_icon.png',
    licenseModel: 'REAL-TIME STREAMING API (WEBSOCKET / REST)',
    tagline: 'Telecom-optimized speech recognition and neural multi-voice synthesis across 12+ Indian regional languages and accents',
    description: 'Built specifically for low-bandwidth 8kHz/16kHz Indian telecom voice streams, code-mixed dialects (Hinglish, Tanglish), and noisy call center environments. Converts voice to text in <150ms and synthesizes lifelike neural speech with natural cadence, pitch, and emotion.',
    highlightApps: ['STT Streaming', 'Neural TTS', '12+ Indian Languages', 'Hinglish Support', 'Noise Filter', 'SSML Tags'],
    keyFeatures: [
      'Trained on Indian regional accents, code-mixed Hinglish & Tanglish dialects',
      'Sub-150ms ultra-low latency real-time streaming over WebSocket (WSS)',
      'Acoustic background noise suppression & call center ambient cancellation',
      'Neural multi-voice TTS with variable pitch, speed, and emotion controls',
      'Custom corporate vocabulary adaptation for banking, insurance, and medical terms'
    ],
    specs: [
      'Audio Codecs: 8kHz/16kHz G.711, Opus, PCM, AMR-WB',
      'Languages: English, Hindi, Tamil, Telugu, Marathi, Bengali, Kannada +5 more',
      'Delivery: Streaming WebSocket (WSS) & REST Batch APIs'
    ],
    idealFor: 'IVR modernizations, mobile app voice interfaces, banking automation, and telecom operators',
    badge: 'Most Popular',
    badgeColor: 'bg-red-50 text-[#dc2626] border-red-200'
  },
  {
    id: 'voice-call-transcription-analytics',
    name: 'Voice Call Transcription & Audio Analytics',
    category: 'voice-ai',
    categoryLabel: 'Call Intelligence',
    image: '/assets/call_transcription_icon.png',
    licenseModel: 'PER AUDIO MINUTE OR CONCURRENT CHANNEL',
    tagline: '100% automated call transcription with dual-channel stereo diarization, PII masking, and instant CRM summaries',
    description: 'Eliminates manual after-call wrap-up work. Generates exact millisecond-timestamped transcripts separating agent and customer audio channels, redacts sensitive customer data (card numbers, OTPs, Aadhaar), and automatically writes structured executive summaries into your CRM.',
    highlightApps: ['Live Transcripts', 'Diarization', 'CRM Auto-Sync', 'PII Redaction', 'Keyword Search', 'Audit Trails'],
    keyFeatures: [
      'Dual-channel stereo audio diarization separating agent and caller streams',
      'Real-time live transcript feed for supervisor monitoring and compliance',
      'Automatic PII & PCI redaction (masks card numbers, CVVs, OTPs, Aadhaar)',
      'Automated executive call summary generation with key action items',
      'Global keyword search across thousands of recorded audio hours in seconds'
    ],
    specs: [
      'Accuracy: 98.4% Word Error Rate (WER) benchmark on Indian telecom streams',
      'Export Formats: JSON, PDF, TXT, Webhook payloads',
      'Integrations: Salesforce, Zoho CRM, Freshdesk, Zendesk'
    ],
    idealFor: 'Customer support centers, telesales agencies, collection teams, and compliance QA departments',
    badge: 'Enterprise Grade',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200'
  },
  {
    id: 'call-sentiment-analysis-emotion',
    name: 'Sentiment Analysis of Calls & Emotion Scoring',
    category: 'voice-ai',
    categoryLabel: 'Emotion AI',
    image: '/assets/sentiment_analysis_icon.png',
    licenseModel: 'REAL-TIME QA TELEMETRY SUITE',
    tagline: 'Real-time vocal pitch and NLP tone tracking across 100% of calls with instant supervisor agitation threshold alerts',
    description: 'Move from 2% random call audits to 100% automated quality assurance. Evaluates customer emotional trajectory (Positive, Neutral, Frustrated, Hostile, Delighted) in real time. Automatically alerts supervisors when caller agitation spikes, enabling one-click live Whisper and Barge-in intervention.',
    highlightApps: ['Emotion Tracking', 'Acoustic Pitch', 'Agitation Alerts', 'Live Barge-In', '100% QA Scoring', 'Churn Prediction'],
    keyFeatures: [
      'Real-time sentiment scoring based on acoustic pitch, speaking pace, and NLP tone',
      'Live supervisor alerts when caller agitation crosses safety thresholds',
      'One-click UVC PBX supervisor controls: Silent Listen, Whisper, and Live Barge-In',
      '100% automated QA scorecards grading script compliance and agent politeness',
      'Predictive customer churn detection identifying dissatisfied accounts early'
    ],
    specs: [
      'Evaluation SLA: Real-time live scoring with <5s escalation notification',
      'Metrics: CSAT prediction, empathy index, escalation rate, churn risk',
      'Compliance: Fully encrypted telemetry adhering to HIPAA and SOC 2'
    ],
    idealFor: 'Quality assurance managers, contact center directors, and customer experience operations',
    badge: 'Highest Security',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200'
  },

  // --- MICROSOFT 365 BUSINESS SUITES ---
  {
    id: 'm365-business-standard',
    name: 'Microsoft 365 Business Standard',
    category: 'm365-suites',
    categoryLabel: 'Microsoft 365 Suites',
    image: 'https://img.icons8.com/color/480/microsoft-office-2019.png',
    licenseModel: 'Per User / Month or Annual (CSP)',
    tagline: 'The complete productivity suite with fully installed desktop apps for up to 5 PCs/Macs per user',
    description: 'Empower your workforce with premium desktop versions of Word, Excel, PowerPoint, Outlook, and Microsoft Teams, combined with 50 GB custom business email and 1 TB secure OneDrive cloud storage.',
    highlightApps: ['Word', 'Excel', 'PowerPoint', 'Outlook', 'Teams', 'OneDrive'],
    keyFeatures: [
      'Install on up to 5 PCs/Macs + 5 tablets + 5 phones per user',
      '50 GB business-class custom domain email hosting (Exchange)',
      '1 TB OneDrive for Business cloud storage with ransomware recovery',
      'Host online meetings & webinars for up to 300 attendees on Teams',
      'Commercial usage rights with Microsoft 365 Copilot AI readiness'
    ],
    specs: ['Platform: Windows, macOS, iOS, Android', 'Agreement: Cloud Solution Provider (CSP)', 'Renewal: Flexible Monthly or Annual Commits'],
    idealFor: 'Growing companies requiring full offline desktop Office apps with professional cloud collaboration',
    badge: 'Most Popular',
    badgeColor: 'bg-red-50 text-[#dc2626] border-red-200'
  },
  {
    id: 'm365-business-premium',
    name: 'Microsoft 365 Business Premium',
    category: 'm365-suites',
    categoryLabel: 'Microsoft 365 Suites',
    image: 'https://img.icons8.com/color/480/microsoft-office-2019.png',
    licenseModel: 'Per User / Month or Annual (CSP)',
    tagline: 'Everything in Business Standard plus advanced cyber defense & device management (Intune)',
    description: 'Comprehensive productivity and advanced security solution. Protects corporate email against phishing and ransomware via Microsoft Defender for Business, controls company data on mobile devices with Intune MDM, and enforces Conditional Access.',
    highlightApps: ['Office Apps', 'Defender for Business', 'Intune MDM', 'Entra ID P1', 'Teams', 'Exchange'],
    keyFeatures: [
      'Enterprise-grade endpoint protection against zero-day malware & ransomware',
      'Microsoft Intune mobile device & application management (remote wipe lost laptops)',
      'Microsoft Entra ID Plan 1 with Conditional Access & Multi-Factor Authentication',
      'Azure Information Protection (data loss prevention & confidential file watermarking)',
      'Virtual Desktop Infrastructure (VDI) rights with Windows 11 Enterprise'
    ],
    specs: ['Max Users: Up to 300 seats', 'Compliance: ISO 27001, HIPAA, GDPR', 'Security: Microsoft Defender Endpoint Antivirus included'],
    idealFor: 'Businesses with remote teams, sensitive client data, financial compliance, and strict security needs',
    badge: 'Highest Security',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200'
  },
  {
    id: 'm365-business-basic',
    name: 'Microsoft 365 Business Basic',
    category: 'm365-suites',
    categoryLabel: 'Microsoft 365 Suites',
    image: 'https://img.icons8.com/color/480/microsoft-office-2019.png',
    licenseModel: 'Per User / Month or Annual (CSP)',
    tagline: 'Cost-effective cloud-first suite with business email, Teams, and web/mobile Office apps',
    description: 'Designed for field staff, floor operators, and cloud-first teams. Provides 50 GB custom email, Microsoft Teams chat and calling, 1 TB OneDrive storage, and full web-browser versions of Word, Excel, and PowerPoint.',
    highlightApps: ['Web Word', 'Web Excel', 'Teams', '50GB Exchange', '1TB OneDrive'],
    keyFeatures: [
      'Professional business email matching your domain (e.g. name@yourcompany.com)',
      'Web and mobile apps of Word, Excel, PowerPoint, and OneNote',
      '1 TB OneDrive for secure cloud backup and link-sharing',
      'Real-time multi-user document co-authoring in any browser',
      'Guaranteed 99.9% uptime SLA backed by Microsoft'
    ],
    specs: ['Access: Web Browser & Mobile Apps', 'Storage: 1 TB Cloud Storage per user', 'Users: Up to 300 seats'],
    idealFor: 'Field workers, retail staff, call center agents, and startups seeking affordable corporate email and Teams',
    badge: 'Budget Friendly',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
  },
  {
    id: 'm365-enterprise-e3-e5',
    name: 'Microsoft 365 Enterprise E3 / E5',
    category: 'm365-suites',
    categoryLabel: 'Microsoft 365 Suites',
    image: 'https://img.icons8.com/color/480/microsoft-office-2019.png',
    licenseModel: 'Enterprise Agreement / CSP (Uncapped Seats)',
    tagline: 'Uncapped seat capacity with Power BI Pro, advanced eDiscovery, and cloud voice PBX system',
    description: 'Large enterprise productivity platform with unlimited user scaling. Enterprise E5 adds Microsoft Teams Phone System (cloud PBX), Power BI Pro interactive dashboards, and automated threat hunting with Microsoft Defender XDR.',
    highlightApps: ['Power BI Pro', 'Teams Phone System', 'Defender XDR', 'eDiscovery', 'Unlimited Cloud Storage'],
    keyFeatures: [
      'No user count limits (scale from 300 to 50,000+ employees)',
      '100 GB primary mailbox + unlimited auto-expanding archive storage',
      'Microsoft Teams Phone System for direct PSTN cloud calling',
      'Full Microsoft Purview eDiscovery, compliance auditing & legal hold',
      'Power BI Pro analytics included in E5 tier'
    ],
    specs: ['Seats: Unlimited scale', 'Storage: 5 TB to Unlimited per user', 'Support: Premier 24/7 SLA'],
    idealFor: 'Large corporations, BPOs, banking institutions, and multinational enterprises',
    badge: 'Enterprise Flagship',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200'
  },

  // --- CORE APPS (WORD, EXCEL, EDGE, TEAMS, OUTLOOK, POWERPOINT) ---
  {
    id: 'microsoft-word',
    name: 'Microsoft Word (Business License)',
    category: 'core-apps',
    categoryLabel: 'Core Office Apps',
    image: 'https://img.icons8.com/color/480/microsoft-word-2019--v2.png',
    licenseModel: 'Stand-Alone Perpetual or M365 Subscription',
    tagline: 'Industry-standard word processing with real-time AI co-authoring & templates',
    description: 'Author contracts, reports, proposals, and corporate letters with intelligent grammar suggestions, track changes, version history, PDF reflow editing, and enterprise document security.',
    keyFeatures: [
      'Real-time collaborative editing with multiple team members simultaneously',
      'Track changes, inline comments, and digital signature integration',
      'Export and edit PDFs natively without losing formatting',
      'Smart research tools, corporate branding styles, and auto-formatting',
      'Full integration with Microsoft Copilot AI for instant drafting and summaries'
    ],
    specs: ['Available: Windows, macOS, Web, iOS, Android', 'Formats: .docx, .pdf, .rtf, .txt', 'Rights: Commercial Business License'],
    idealFor: 'Legal teams, executive drafting, sales proposal generation, and administration',
    badge: 'Essential App',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200'
  },
  {
    id: 'microsoft-excel',
    name: 'Microsoft Excel (Business License)',
    category: 'core-apps',
    categoryLabel: 'Core Office Apps',
    image: 'https://img.icons8.com/color/480/microsoft-excel-2019--v1.png',
    licenseModel: 'Stand-Alone Perpetual or M365 Subscription',
    tagline: 'Powerful financial modeling, dynamic array formulas, and Power Pivot analytics',
    description: 'The world standard for data analysis and financial calculation. Build complex financial models, automated PivotTables, Power Query ETL pipelines, and interactive KPI dashboards with seamless corporate database connectivity.',
    keyFeatures: [
      'Advanced dynamic array formulas (XLOOKUP, FILTER, UNIQUE, SORT)',
      'Power Query & Power Pivot for large dataset modeling and data warehouse linking',
      'Interactive visual charts, sparklines, and conditional formatting rules',
      'Automate repetitive workflows with VBA macros and Office Scripts',
      'Python in Excel for advanced statistical data analysis and machine learning'
    ],
    specs: ['Engine: 64-bit multi-threaded calculation', 'Capacity: 1,048,576 rows x 16,384 columns', 'Connectivity: SQL, Power BI, CSV, Web APIs'],
    idealFor: 'Finance managers, accountants, supply chain analysts, and business intelligence teams',
    badge: 'Data & Finance',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
  },
  {
    id: 'microsoft-powerpoint',
    name: 'Microsoft PowerPoint (Business License)',
    category: 'core-apps',
    categoryLabel: 'Core Office Apps',
    image: 'https://img.icons8.com/color/480/microsoft-powerpoint-2019--v1.png',
    licenseModel: 'Stand-Alone Perpetual or M365 Subscription',
    tagline: 'High-impact corporate presentations, investor pitches, and interactive slide decks',
    description: 'Design professional presentations with intelligent Designer layout suggestions, smooth Morph transitions, embedded 3D models, video animations, and presenter coach timing feedback.',
    keyFeatures: [
      'Designer AI layout generator for instant slide beauty and typography alignment',
      'Morph transition for cinematic object and text movement between slides',
      'Presenter Coach with real-time pacing, pitch, and filler word detection',
      'Record high-definition video presentations with webcam and screen overlay',
      'Corporate master templates to enforce company branding across all departments'
    ],
    specs: ['Export: 4K Video, PDF, Animated GIF, Slide Show', 'Features: Slide Zoom, Live Subtitles', 'License: Commercial Volume'],
    idealFor: 'Sales pitches, corporate board meetings, client webinars, and executive keynotes',
    badge: 'Presentation',
    badgeColor: 'bg-amber-50 text-amber-800 border-amber-200'
  },
  {
    id: 'microsoft-teams',
    name: 'Microsoft Teams Enterprise',
    category: 'core-apps',
    categoryLabel: 'Core Office Apps',
    image: 'https://img.icons8.com/color/480/microsoft-teams.png',
    licenseModel: 'Part of M365 or Stand-Alone Teams Essentials',
    tagline: 'Unified hub for team chat, video conferencing, webinars, and shared files',
    description: 'Connect your entire workforce in one unified workspace. Chat across departmental channels, host HD audio/video calls with background noise suppression, record meetings with AI transcripts, and collaborate on shared documents in real time.',
    keyFeatures: [
      'HD video calls and virtual meetings for up to 300 to 1,000 participants',
      'AI-powered live captions, meeting recording, and speaker attribution',
      'Persistent channel chat, direct messaging, and file sharing via SharePoint',
      'Direct integration with Microsoft Planner, Lists, and 1,000+ third-party apps',
      'Available integration with SIP trunks and our VoIP gateways for external calling'
    ],
    specs: ['Max Meeting Duration: 30 hours', 'Encryption: TLS & SRTP end-to-end', 'Platforms: Windows, Mac, Linux, Mobile, Web'],
    idealFor: 'Hybrid and remote workforces, daily standups, customer webinars, and inter-branch communications',
    badge: 'Collaboration',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200'
  },
  {
    id: 'microsoft-outlook',
    name: 'Microsoft Outlook & Exchange Online',
    category: 'core-apps',
    categoryLabel: 'Core Office Apps',
    image: 'https://img.icons8.com/color/480/microsoft-outlook-2019--v2.png',
    licenseModel: 'Exchange Online Plan 1/2 or M365 Business',
    tagline: 'Enterprise-grade business email, calendar scheduling, and contact management',
    description: 'The gold standard for corporate communication. Backed by Microsoft Exchange server architecture with multi-layer anti-spam, malware filtering, shared calendars, out-of-office delegations, and automated meeting scheduling.',
    keyFeatures: [
      '50 GB to 100 GB mailbox capacity per user with anti-spam / anti-malware',
      'Shared group mailboxes (e.g. sales@yourcompany.com) with zero additional license cost',
      'Shared organizational calendars with conference room booking',
      'Focused Inbox intelligently separates high-priority client mail from newsletters',
      'Seamless synchronization across Windows, Mac, iPhone, and Android devices'
    ],
    specs: ['Protocol: Exchange ActiveSync, MAPI, IMAP', 'Attachment Limit: Up to 150 MB', 'Uptime: 99.9% financially backed'],
    idealFor: 'Professional business communication, executive scheduling, and team mailboxes',
    badge: 'Enterprise Email',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200'
  },
  {
    id: 'microsoft-edge-enterprise',
    name: 'Microsoft Edge Enterprise & Cloud Management',
    category: 'core-apps',
    categoryLabel: 'Core Office Apps',
    image: 'https://img.icons8.com/color/480/ms-edge-new.png',
    licenseModel: 'Enterprise Commercial License (Managed via Intune / GPO)',
    tagline: 'Fast, secure corporate web browser with built-in Internet Explorer Mode and Copilot',
    description: 'Engineered specifically for business environments. Protects against web-based malware with Microsoft Defender SmartScreen, isolates untrusted downloads with Application Guard, and allows legacy internal ERP/banking portals to run seamlessly using built-in IE Mode.',
    keyFeatures: [
      'Built-in Internet Explorer (IE) Mode for legacy enterprise ERP, CRM & government portals',
      'Microsoft Defender SmartScreen blocks phishing and malicious file downloads',
      'Microsoft Copilot AI integrated in sidebar for summarizing web documents & PDFs',
      'Work / Personal profile separation keeps corporate data inside the work account',
      'Centralized Group Policy and Microsoft Intune configuration for IT administrators'
    ],
    specs: ['Engine: Chromium-based performance', 'Security: Zero Trust & Conditional Access aware', 'Management: Intune, SCCM, GPO'],
    idealFor: 'Corporate IT fleets, enterprise intranet compliance, legacy ERP systems, and secure web browsing',
    badge: 'Enterprise Security',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
  },

  // --- WINDOWS OS & WINDOWS SERVER CALS ---
  {
    id: 'windows-11-pro',
    name: 'Windows 11 Pro / Enterprise Edition',
    category: 'windows-server',
    categoryLabel: 'Windows OS & Server',
    image: 'https://img.icons8.com/color/480/windows-11.png',
    licenseModel: 'OEM, Retail, or Volume Electronic Software Delivery (ESD)',
    tagline: 'Modern, hardware-backed operating system for business security and performance',
    description: 'Genuine corporate operating system license. Provides BitLocker device encryption, Windows Defender hardware isolation, Remote Desktop connection, Hyper-V virtualization, and seamless joining to on-premise Active Directory and Microsoft Entra ID.',
    keyFeatures: [
      'BitLocker drive encryption protects company data if a laptop is lost or stolen',
      'Domain Join & Azure AD Join for centralized company computer management',
      'Windows Remote Desktop host rights to connect into office workstation from home',
      'Windows Information Protection to prevent unauthorized corporate data copying',
      'TPM 2.0 security enforcement with Secure Boot verification'
    ],
    specs: ['License: Lifetime OEM / Retail or Cloud Volume Subscription', 'Architecture: 64-bit x64', 'Activation: Digital License / MAK Key'],
    idealFor: 'Laptops and desktops used by corporate employees, executives, and remote workers',
    badge: 'Genuine OS',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200'
  },
  {
    id: 'windows-server-standard',
    name: 'Windows Server 2022 / 2025 Standard & CALs',
    category: 'windows-server',
    categoryLabel: 'Windows OS & Server',
    image: 'https://img.icons8.com/color/480/microsoft.png',
    licenseModel: 'Core-Based Licensing (16-Core Base) + User/Device CALs',
    tagline: 'The reliable backbone for corporate Active Directory, file servers, and Hyper-V',
    description: 'Enterprise server operating system running corporate Active Directory Domain Services, DNS, DHCP, file & print servers, and local Hyper-V virtual machines. We supply official Core packs along with User/Device Client Access Licenses (CALs) and Remote Desktop Services (RDS) CALs.',
    keyFeatures: [
      'Active Directory Domain Services for centralized employee login and policy control',
      'Includes rights for 2 Operating System Environments (VMs) or Hyper-V containers',
      'Secured-core server protection with hardware root-of-trust security',
      'Remote Desktop Services (RDS CALs) for multi-user Tally and ERP remote access',
      'Automated hybrid cloud connection to Microsoft Azure Arc'
    ],
    specs: ['Licensing: Minimum 16-Core pack per physical server', 'CALs: User CALs or Device CALs available', 'RDS: Remote Desktop Session Host CALs'],
    idealFor: 'On-premise office servers, multi-user Tally Prime hosting, file servers, and domain controllers',
    badge: 'Server Infrastructure',
    badgeColor: 'bg-slate-100 text-slate-800 border-slate-300'
  },

  // --- DATABASE & DEVELOPER LICENCES ---
  {
    id: 'microsoft-sql-server',
    name: 'Microsoft SQL Server Standard Edition',
    category: 'database',
    categoryLabel: 'Database & Cloud',
    image: 'https://img.icons8.com/color/480/microsoft-sql-server.png',
    licenseModel: 'Per Core (2-Core Packs) or Server + CAL Model',
    tagline: 'Industry-leading relational database for mission-critical ERPs and CRM applications',
    description: 'High-performance database engine for hosting mission-critical enterprise applications, accounting software (Tally, SAP B1), CRM platforms, and analytical data warehouses. Offers built-in data encryption at rest and in transit.',
    keyFeatures: [
      'Always Encrypted technology shields sensitive financial and customer databases',
      'High-performance memory-optimized tables for lightning-fast queries',
      'SQL Server Management Studio (SSMS) with rich administrative diagnostics',
      'Automated backup and point-in-time disaster recovery configurations',
      'Flexible licensing: Core-based for web access or Server+CAL for internal LAN'
    ],
    specs: ['Cores: Sold in 2-Core packs (minimum 4 cores)', 'Compatibility: Windows Server & Linux', 'Workloads: OLTP, Data Warehousing, BI'],
    idealFor: 'Companies running large accounting ERPs, inventory databases, custom software, and CRM databases',
    badge: 'Enterprise Database',
    badgeColor: 'bg-amber-50 text-amber-800 border-amber-200'
  },

  // --- GOOGLE WORKSPACE ---
  {
    id: 'google-workspace',
    name: 'Google Workspace (Business Starter & Standard)',
    category: 'google-workspace',
    categoryLabel: 'Google Workspace',
    image: 'https://img.icons8.com/color/480/google-logo.png',
    licenseModel: 'Per User / Month or Annual Cloud Subscription',
    tagline: 'Cloud-native productivity suite featuring Gmail, Google Drive, Meet, and Docs',
    description: 'Preferred by modern collaborative teams and startups. Combines high-speed corporate Gmail on your custom domain, shared Google Drive storage, Google Meet video conferences, and real-time co-authoring in Docs, Sheets, and Slides.',
    keyFeatures: [
      'Corporate Gmail with Google’s world-class 99.9% anti-spam and phishing shield',
      '30 GB (Starter) to 2 TB (Standard) pooled Google Drive cloud storage per user',
      'Google Meet video meetings for up to 150 attendees with noise cancellation',
      'Shared team drives prevent file loss when employees change roles or leave',
      'Centralized Google Admin console with 2-step verification enforcement'
    ],
    specs: ['Storage: 30 GB to 5 TB per user', 'Platform: 100% Cloud / Browser / Mobile', 'Support: Authorized Google Partner Support'],
    idealFor: 'Modern tech teams, startups, agencies, and companies preferring Google ecosystem tools',
    badge: 'Cloud Native',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200'
  }
];

export default function SoftwareLicencesShowcase({ onOpenInquiry, initialTab = 'all', mode = 'all-licences' }: SoftwareLicencesShowcaseProps) {
  const [activeTab, setActiveTab] = useState<LicenseCategory>(initialTab);
  const [selectedProduct, setSelectedProduct] = useState<LicenseProduct | null>(null);

  // Synchronize when initialTab prop changes
  React.useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  const isAiMode = mode === 'ai';

  const softwareLicenceProducts = LICENCE_PRODUCTS.filter((p) => p.category !== 'voice-ai');
  const aiProducts = LICENCE_PRODUCTS.filter((p) => p.category === 'voice-ai');

  const filteredProducts = isAiMode
    ? aiProducts
    : (activeTab === 'all'
        ? softwareLicenceProducts
        : softwareLicenceProducts.filter((p) => p.category === activeTab));

  return (
    <div className="space-y-8">
      
      {/* 1. HERO HEADER INTRO */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-50 border border-red-200 text-[#dc2626] text-[11px] font-bold uppercase tracking-wider mb-3">
          <Sparkles className="w-3 h-3 text-[#dc2626]" />
          <span>{isAiMode ? 'Next-Gen Conversational Voice Intelligence' : 'Authorized Volume & Cloud Licensing'}</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
          {isAiMode ? (
            <>Enterprise <span className="text-[#dc2626]">AI Agents &amp; Voice Intelligence</span></>
          ) : (
            <>Corporate <span className="text-[#dc2626]">Software &amp; Business Licences</span></>
          )}
        </h1>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl mb-5">
          {isAiMode 
            ? 'Deploy dedicated conversational Voice AI agents, sub-150ms Speech-to-Text & Neural TTS synthesis across 12+ Indian languages, 100% automated call transcription with PII masking, and real-time supervisor emotion telemetry.'
            : 'We provide 100% genuine commercial licensing for enterprise software suites, cloud productivity, operating systems, and server infrastructure. As an authorized Cloud Solution Provider (CSP), we manage seamless deployment, tenant setup, email data migrations from legacy cPanel/GoDaddy/Zoho, automated seat reallocation, and single-window consolidated GST billing.'
          }
        </p>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 border-t border-slate-100">
          {isAiMode ? (
            <>
              <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200/70 rounded-xl p-3">
                <Sparkles className="w-4 h-4 text-[#dc2626] shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Sub-450ms Voice AI Latency</h4>
                  <p className="text-[11px] text-slate-500">Natural turn-taking &amp; caller barge-in</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200/70 rounded-xl p-3">
                <Globe className="w-4 h-4 text-blue-600 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">12+ Indian Regional Languages</h4>
                  <p className="text-[11px] text-slate-500">Code-mixed Hinglish &amp; Neural TTS</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200/70 rounded-xl p-3">
                <Headphones className="w-4 h-4 text-emerald-600 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">100% Automated QA &amp; Diarization</h4>
                  <p className="text-[11px] text-slate-500">Live transcription &amp; supervisor alerts</p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200/70 rounded-xl p-3">
                <ShieldCheck className="w-4 h-4 text-[#dc2626] shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Genuine CSP &amp; Volume Licensing</h4>
                  <p className="text-[11px] text-slate-500">Official Microsoft &amp; Google Partner</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200/70 rounded-xl p-3">
                <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Zero-Downtime Email Migration</h4>
                  <p className="text-[11px] text-slate-500">Full mailbox &amp; contact transfer</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200/70 rounded-xl p-3">
                <Building2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Consolidated GST Tax Billing</h4>
                  <p className="text-[11px] text-slate-500">Input tax credit &amp; flexible INR terms</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* 2. SUB-CATEGORY FILTER TABS (Only shown in general software licenses mode, not in dedicated AI mode) */}
      {!isAiMode && (
        <div className="flex flex-wrap items-center gap-2 pb-1 border-b border-slate-200/80">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-[#dc2626] text-white shadow-2xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            All Licences ({softwareLicenceProducts.length})
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('m365-suites')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'm365-suites'
                ? 'bg-[#dc2626] text-white shadow-2xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            💼 Microsoft 365 Suites ({LICENCE_PRODUCTS.filter(p => p.category === 'm365-suites').length})
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('core-apps')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'core-apps'
                ? 'bg-[#dc2626] text-white shadow-2xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            📑 Core Apps (Word, Excel, Edge, Teams) ({LICENCE_PRODUCTS.filter(p => p.category === 'core-apps').length})
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('windows-server')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'windows-server'
                ? 'bg-[#dc2626] text-white shadow-2xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            🖥️ Windows OS &amp; Windows Server ({LICENCE_PRODUCTS.filter(p => p.category === 'windows-server').length})
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('google-workspace')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'google-workspace'
                ? 'bg-[#dc2626] text-white shadow-2xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            🌐 Google Workspace ({LICENCE_PRODUCTS.filter(p => p.category === 'google-workspace').length})
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('database')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'database'
                ? 'bg-[#dc2626] text-white shadow-2xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            🗄️ SQL Server &amp; Database ({LICENCE_PRODUCTS.filter(p => p.category === 'database').length})
          </button>
        </div>
      )}

      {/* 3. PRODUCT CATALOG GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 cisco-stagger">
        {filteredProducts.map((product) => (
          <article
            key={product.id}
            className="cisco-reveal bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Product Header / Icon Container */}
              <div className="relative h-52 bg-white overflow-hidden flex items-center justify-center p-6 border-b border-slate-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-28 h-28 object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
                  loading="lazy"
                />
                {/* Category Badge (Top-Left Pill) */}
                <span className="absolute top-3.5 left-3.5 bg-white text-slate-700 text-[11px] font-semibold px-3 py-1 rounded-lg border border-slate-200 shadow-2xs">
                  {product.categoryLabel}
                </span>
                {/* Highlighting Badge (Top-Right Pill) */}
                <span className={`absolute top-3.5 right-3.5 text-[11px] font-semibold px-3 py-1 rounded-full border shadow-2xs ${product.badgeColor}`}>
                  {product.badge}
                </span>
              </div>

              {/* Body Content */}
              <div className="p-5">
                <div className="mb-2.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#dc2626] block">
                    {product.licenseModel}
                  </span>
                  <h3 className="text-base sm:text-[17px] font-bold text-[#dc2626] leading-snug mt-1">
                    {product.name}
                  </h3>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-3.5 line-clamp-3">
                  {product.description}
                </p>

                {/* Highlight App Icons / Badges if present */}
                {product.highlightApps && (
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {product.highlightApps.map((app, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-semibold bg-red-50 text-[#dc2626] px-2.5 py-0.5 rounded-md border border-red-200/80 inline-flex items-center gap-1"
                      >
                        ✓ {app}
                      </span>
                    ))}
                  </div>
                )}

                {/* Specs Chips - Stacked full-width or inline chips */}
                <div className="flex flex-col gap-1.5 mb-3.5">
                  {product.specs.slice(0, 2).map((spec, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-normal bg-slate-100/90 text-slate-700 px-3 py-1 rounded-md inline-block w-fit"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Best Suited For Container */}
                <div className="bg-slate-50/90 border border-slate-200/80 rounded-xl p-3 text-[11px] text-slate-600 leading-relaxed">
                  <strong className="text-slate-900 font-bold block mb-0.5">Best Suited For:</strong>
                  {product.idealFor}
                </div>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="p-5 pt-0 border-t border-slate-100/90 mt-3 flex items-center gap-2">
              <button
                onClick={() => onOpenInquiry(`Licensing Inquiry: ${product.name}`)}
                className="flex-1 py-2.5 px-3.5 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs sm:text-sm font-bold transition-all text-center cursor-pointer shadow-xs active:scale-[0.99]"
              >
                {product.category === 'voice-ai' ? 'Get Service Quote' : 'Get License Quote'}
              </button>
              <button
                onClick={() => setSelectedProduct(product)}
                className="py-2.5 px-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-semibold transition-all cursor-pointer active:scale-[0.99]"
              >
                Plan Details
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* 4. COMPARISON GUIDE: MICROSOFT 365 BUSINESS TIERS (Only shown in general software mode) */}
      {!isAiMode && (
      <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="mb-5">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
            How to Choose the Right Microsoft 365 Tier
          </h2>
          <p className="text-xs text-slate-500">
            Compare what each edition delivers to avoid overpaying for unused features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Plan 1 */}
          <div className="bg-slate-50/70 border border-slate-200/80 rounded-xl p-5 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md inline-block mb-2">
                Cloud First
              </span>
              <h3 className="text-sm font-bold text-slate-900 mb-1">M365 Business Basic</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Best for employees who work primarily through browsers and mobile devices. Provides corporate domain email, Teams meetings, and 1TB cloud storage.
              </p>
              <ul className="text-xs space-y-1.5 text-slate-700">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>50 GB Custom Domain Business Email</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>1 TB Secure Cloud Storage (OneDrive)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Web &amp; Mobile versions of Office apps</span>
                </li>
              </ul>
            </div>
            <div className="border-t border-slate-200/80 pt-3 mt-4 text-[11px] font-bold text-slate-500">
              For Frontline &amp; Field Staff
            </div>
          </div>

          {/* Plan 2 */}
          <div className="bg-slate-50/70 border-2 border-[#dc2626]/40 rounded-xl p-5 flex flex-col justify-between relative shadow-xs">
            <span className="absolute -top-2.5 right-4 bg-[#dc2626] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-2xs">
              Recommended
            </span>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#dc2626] bg-red-50 px-2 py-0.5 rounded-md inline-block mb-2">
                Desktop Productivity
              </span>
              <h3 className="text-sm font-bold text-slate-900 mb-1">M365 Business Standard</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Full downloadable offline desktop apps for PC and Mac. Ideal for finance, legal, sales, and knowledge workers requiring power features.
              </p>
              <ul className="text-xs space-y-1.5 text-slate-700">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Install on 5 PCs/Macs per single user</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Full Offline Word, Excel, PowerPoint &amp; Outlook</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Microsoft Teams webinar hosting up to 300 users</span>
                </li>
              </ul>
            </div>
            <div className="border-t border-slate-200/80 pt-3 mt-4 text-[11px] font-bold text-[#dc2626]">
              Standard Office Workstations
            </div>
          </div>

          {/* Plan 3 */}
          <div className="bg-slate-50/70 border border-slate-200/80 rounded-xl p-5 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md inline-block mb-2">
                Enterprise Cyber Defense
              </span>
              <h3 className="text-sm font-bold text-slate-900 mb-1">M365 Business Premium</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Everything in Standard plus enterprise cyber defense. Remotely wipe lost laptops, protect against zero-day phishing, and enforce device encryption.
              </p>
              <ul className="text-xs space-y-1.5 text-slate-700">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Microsoft Defender Endpoint Security included</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Intune Mobile Device Management (MDM / MAM)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Conditional Access &amp; Data Loss Prevention (DLP)</span>
                </li>
              </ul>
            </div>
            <div className="border-t border-slate-200/80 pt-3 mt-4 text-[11px] font-bold text-slate-500">
              For Executive, Remote &amp; Compliance Fleets
            </div>
          </div>
        </div>
      </div>
      )}

      {/* 5. SERVICES OUR COMPANY PROVIDES FOR LICENSING (Only shown in software licenses mode) */}
      {!isAiMode && (
        <div>
          <div className="mb-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
              How Our Company Supports Your Software Fleet
            </h2>
            <p className="text-xs text-slate-500">
              More than just license keys: we deliver complete tenant onboarding, email migration, and ongoing license optimization
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white border border-slate-200/90 rounded-xl p-4 shadow-2xs">
              <div className="w-8 h-8 rounded-lg bg-red-50 text-[#dc2626] flex items-center justify-center font-bold text-xs mb-2.5">
                <Mail className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-slate-900 mb-1">Turnkey Email Migration</h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                We migrate your complete email history, folders, and calendar from cPanel, GoDaddy, or GSuite into M365 with zero downtime.
              </p>
            </div>

            <div className="bg-white border border-slate-200/90 rounded-xl p-4 shadow-2xs">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs mb-2.5">
                <RefreshCw className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-slate-900 mb-1">License Optimization</h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Quarterly seat audits prevent paying for departed employees. Reassign or downgrade unused licenses to save up to 25% annually.
              </p>
            </div>

            <div className="bg-white border border-slate-200/90 rounded-xl p-4 shadow-2xs">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs mb-2.5">
                <Lock className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-slate-900 mb-1">Security Hardening</h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Enforce Multi-Factor Authentication (MFA), DKIM/SPF anti-spoofing DNS records, and conditional access policies out of the box.
              </p>
            </div>

            <div className="bg-white border border-slate-200/90 rounded-xl p-4 shadow-2xs">
              <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-xs mb-2.5">
                <Headphones className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-slate-900 mb-1">Single-Window Support</h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Direct access to our certified systems engineers for password resets, tenant configuration, and priority escalation without waiting in carrier queues.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 6. CONSULTATION & BULK QUOTE CTA */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-red-400 block mb-1">
            {isAiMode ? 'Enterprise Voice AI Deployment & Trial' : 'Need Volume Discounting or Custom Mix of Licences?'}
          </span>
          <h3 className="text-lg sm:text-xl font-bold tracking-tight mb-2">
            {isAiMode ? 'Deploy Dedicated Voice AI Agents for Your Call Floor' : 'Get a Customized Software Licensing Proposal'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
            {isAiMode
              ? 'Request a live pilot test with our conversational voice AI engine. We integrate with your existing Cloud PBX, SIP trunks, or CRM within 48 hours.'
              : 'Whether you need 5 user seats for a growing startup or 500+ licenses across Windows Server, M365, and SQL Server, our licensing specialists will structure the most cost-effective agreement with full GST invoice compliance.'
            }
          </p>
        </div>
        <button
          onClick={() => onOpenInquiry(isAiMode ? 'Inquiry: Enterprise Voice AI Pilot Deployment' : 'Software & Business Licences Consultation')}
          className="px-6 py-3 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold transition-all shadow-md hover:shadow-lg shrink-0 cursor-pointer flex items-center gap-1.5"
        >
          <span>{isAiMode ? 'Request Voice AI Pilot' : 'Request Licensing Proposal'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* 7. FULL SPECS MODAL */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-4 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#dc2626] bg-red-50 px-2 py-0.5 rounded-full inline-block mb-1">
                    {selectedProduct.categoryLabel}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-xs font-medium text-slate-500">
                    Model: {selectedProduct.licenseModel}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Product Overview</h4>
                <p className="text-slate-600 leading-relaxed">
                  {selectedProduct.description}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1.5">Key Capabilities Included</h4>
                <div className="space-y-1.5">
                  {selectedProduct.keyFeatures.map((f, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1.5">Licensing &amp; Agreement Terms</h4>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/70 space-y-1 font-mono text-[11px] text-slate-800">
                  {selectedProduct.specs.map((s, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-[#dc2626] font-bold">•</span>
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-0.5">
                  Target Audience
                </span>
                <p className="text-slate-700">
                  {selectedProduct.idealFor}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
              <button
                onClick={() => {
                  const prod = selectedProduct;
                  setSelectedProduct(null);
                  onOpenInquiry(`Licensing Quote: ${prod.name}`);
                }}
                className="flex-1 py-2.5 px-4 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-bold transition-colors cursor-pointer text-center"
              >
                Request Official Pricing
              </button>
              <button
                onClick={() => setSelectedProduct(null)}
                className="py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
