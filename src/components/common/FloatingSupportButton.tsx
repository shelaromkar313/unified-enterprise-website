import React from 'react';
import { MessageSquareText } from 'lucide-react';

interface FloatingSupportButtonProps {
  onClick: () => void;
}

export default function FloatingSupportButton({ onClick }: FloatingSupportButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-[#dc2626] hover:bg-[#b91c1c] text-white py-4 px-3 rounded-l-2xl shadow-soft-lg border-l-2 border-t-2 border-b-2 border-white/40 transition-all duration-200 hidden md:flex flex-col items-center gap-2 group font-bold text-xs tracking-wider"
      style={{ writingMode: 'vertical-rl' }}
      aria-label="Get in Touch"
    >
      <div className="flex items-center gap-2">
        <MessageSquareText className="w-4 h-4 -rotate-90 group-hover:scale-110 transition-transform text-white" />
        <span className="uppercase text-[11px] font-extrabold tracking-widest">Get In Touch</span>
      </div>
    </button>
  );
}
