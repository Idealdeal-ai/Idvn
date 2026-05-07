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
        {/* WhatsApp SVG icon */}
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 fill-white"
          aria-hidden="true"
        >
          <path d="M16.003 3C9.376 3 4 8.373 4 15.001c0 2.118.554 4.11 1.524 5.84L4 29l8.368-1.51A12.018 12.018 0 0 0 16.003 28C22.63 28 28 22.627 28 16s-5.37-13-11.997-13zm0 22.6a9.97 9.97 0 0 1-5.11-1.402l-.366-.218-3.78.682.713-3.677-.238-.377A9.96 9.96 0 0 1 5.4 16c0-5.846 4.757-10.6 10.603-10.6S26.6 10.154 26.6 16s-4.751 10.6-10.597 10.6zm5.82-7.938c-.319-.159-1.887-.93-2.18-1.036-.292-.106-.505-.159-.717.16-.213.318-.824 1.036-.01 1.248.822.213 1.856-.187 2.074-.4.213-.213.319-.531.16-.849-.16-.319-.506-.822-.717-1.036-.213-.213-.453-.265-.663-.053-.213.213-.824.665-.93 1.035-.106.37.107.797.319 1.036.213.24.824.664 1.142.877.318.212.877.424 1.46.371.584-.053 1.035-.318 1.195-.637.16-.318.16-.796 0-1.114z" />
        </svg>
      </a>
    </div>
  );
};

export default WhatsAppButton;
