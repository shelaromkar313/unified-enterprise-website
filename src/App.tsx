import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import QuickSupportModal from './components/common/QuickSupportModal';
import AuthModal from './components/common/AuthModal';
import AskAiAssistant from './components/common/AskAiAssistant';

import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import SolutionsPage from './pages/SolutionsPage';
import ServicesPage from './pages/ServicesPage';
import RentalServicesPage from './pages/RentalServicesPage';
import IndustriesPage from './pages/IndustriesPage';
import ResourcesPage from './pages/ResourcesPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import LoginPage from './pages/LoginPage';
import { useGlobalScrollReveal } from './hooks/useGlobalScrollReveal';

// Scroll to top automatically on route or query parameter navigation
function ScrollToTop() {
  const { pathname, search } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, search]);
  return null;
}

function AppContent() {
  useGlobalScrollReveal();
  const [supportModalOpen, setSupportModalOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('IT Infrastructure Management');
  const { pathname } = useLocation();
  const isAuthPage = pathname === '/login' || pathname === '/signup';

  const openQuickSupport = (serviceName?: string) => {
    if (serviceName) setSelectedService(serviceName);
    setSupportModalOpen(true);
  };

  if (isAuthPage) {
    return (
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<LoginPage />} />
      </Routes>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#dc2626] selection:text-white">
      <ScrollToTop />

      {/* 1. Softcentric-Style Navbar with Blue Banner and Separate Page Links */}
      <Navbar
        onOpenQuickSupport={() => openQuickSupport()}
      />

      {/* 2. Page Content Viewport */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage onOpenQuickSupport={openQuickSupport} />} />
          <Route path="/products" element={<ProductsPage onOpenInquiry={openQuickSupport} />} />
          <Route path="/solutions" element={<SolutionsPage onOpenConsultation={openQuickSupport} />} />
          <Route path="/services" element={<ServicesPage onOpenQuickSupport={openQuickSupport} />} />
          <Route path="/rental" element={<RentalServicesPage onOpenQuickSupport={openQuickSupport} />} />
          <Route path="/rentals" element={<RentalServicesPage onOpenQuickSupport={openQuickSupport} />} />
          <Route path="/industries" element={<IndustriesPage onOpenQuickSupport={openQuickSupport} />} />
          <Route path="/resources" element={<ResourcesPage onOpenInquiry={openQuickSupport} />} />
          <Route path="/about-us" element={<AboutUsPage onOpenQuickSupport={openQuickSupport} />} />
          <Route path="/about" element={<AboutUsPage onOpenQuickSupport={openQuickSupport} />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="*" element={<HomePage onOpenQuickSupport={openQuickSupport} />} />
        </Routes>
      </main>

      {/* 3. Softcentric Signature Dark Footer with Address & Links */}
      <Footer />

      {/* 4. Cisco-Style Ask Unified AI Assistant */}
      <AskAiAssistant onOpenQuickSupport={openQuickSupport} />

      {/* 5. Quick Support Popup Dialog */}
      <QuickSupportModal
        isOpen={supportModalOpen}
        onClose={() => setSupportModalOpen(false)}
        defaultService={selectedService}
      />

      {/* 6. Cisco-Style Interactive Login & Sign up Authentication Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
