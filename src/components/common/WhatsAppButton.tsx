import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919972457774?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20IT%20and%20telecom%20solutions."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-13 h-13 p-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
      <span className="sr-only">Chat with us on WhatsApp</span>
    </a>
  );
}
