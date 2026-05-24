import React, { useState, useEffect } from 'react';

const WHATSAPP_NUMBER = '84828278808';

interface WhatsAppButtonProps {
  message?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  message = 'Hello! I am interested in your Vietnamese export products. Please send me more information.',
}) => {
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Show button after scroll
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Also show immediately if page is already scrolled
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-show tooltip once, 3 seconds after mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 4000);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
      }`}
    >
      {/* Tooltip bubble */}
      <div
        className={`transition-all duration-300 ${
          showTooltip ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <div className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm font-medium px-4 py-2 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 max-w-[220px] text-right">
          Chat with us on WhatsApp 👋
          {/* Arrow */}
          <div className="absolute right-4 -bottom-2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white dark:border-t-slate-800" />
        </div>
      </div>

      {/* WhatsApp button */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="group relative w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-offset-2"
        style={{ backgroundColor: '#25D366' }}
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-green-400 opacity-30 animate-ping" />
        {/* Official WhatsApp SVG icon */}
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 fill-white"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.528 5.855L.057 23.882l6.233-1.452A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.002-1.366l-.36-.214-3.7.862.878-3.61-.235-.372A9.818 9.818 0 1112 21.818z" />
        </svg>
      </a>
    </div>
  );
};

export default WhatsAppButton;
