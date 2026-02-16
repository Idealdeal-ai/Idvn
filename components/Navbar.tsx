
import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage, Language } from '../App';


interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t('home'), path: '/' },
    { name: t('products'), path: '/products' },
    { name: t('services'), path: '/services' },
    { name: t('about'), path: '/about' },
    { name: t('contact'), path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;


  

  const LanguageSelector = () => {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    // غيّر EXT لو هتستخدم svg بدل png
    const EXT = "png"; // "svg" أو "png" أو "webp"

    const LANGS: { code: Language; label: string; flagSrc: string; short: string }[] = [
      { code: "en", label: "English",    flagSrc: `/flags/en.${EXT}`, short: "EN" },
      { code: "ar", label: "العربية",    flagSrc: `/flags/ar.${EXT}`, short: "AR" },
      { code: "vi", label: "Tiếng Việt", flagSrc: `/flags/vn.${EXT}`, short: "VI" },
      { code: "zh", label: "中文",        flagSrc: `/flags/zh.${EXT}`, short: "ZH" },
      { code: "es", label: "Español",    flagSrc: `/flags/es.${EXT}`, short: "ES" },
      { code: "fr", label: "Français",   flagSrc: `/flags/fr.${EXT}`, short: "FR" },
    ];

    const current = LANGS.find(l => l.code === language) || LANGS[0];

    useEffect(() => {
      const onDocClick = (e: MouseEvent) => {
        if (!ref.current) return;
        if (!ref.current.contains(e.target as Node)) setOpen(false);
      };
      const onEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") setOpen(false);
      };
      document.addEventListener("mousedown", onDocClick);
      document.addEventListener("keydown", onEsc);
      return () => {
        document.removeEventListener("mousedown", onDocClick);
        document.removeEventListener("keydown", onEsc);
      };
    }, []);

    return (
      <div ref={ref} className="relative">
        {/* Trigger */}
        <button
          type="button"
          onClick={() => setOpen(v => !v)}
          aria-haspopup="menu"
          aria-expanded={open}
          className="flex items-center gap-2 px-3 py-2 rounded-full border-2 transition-all
                     bg-slate-100 dark:bg-slate-800
                     border-transparent hover:border-primary/40
                     text-slate-700 dark:text-slate-200"
          title="Language"
        >
          <img
            src={current.flagSrc}
            alt={`${current.label} flag`}
            className="w-5 h-5 rounded-sm object-cover shadow-sm"
            loading="lazy"
          />
          <span className="text-[11px] font-extrabold tracking-wider">
            {current.short}
          </span>
          <span className={`material-symbols-outlined text-lg leading-none opacity-80 transition-transform ${open ? "rotate-180" : ""}`}>
            expand_more
          </span>
        </button>

        {/* Dropdown */}
        {open && (
          <div
            role="menu"
            className="absolute right-0 mt-2 w-56 overflow-hidden rounded-2xl
                       border border-slate-200/70 dark:border-slate-700/60
                       bg-white/95 dark:bg-[#0B1221]/95 backdrop-blur-md
                       shadow-2xl z-[9999]"
          >
            {LANGS.map((l) => {
              const active = l.code === language;
              return (
                <button
                  key={l.code}
                  role="menuitem"
                  type="button"
                  onClick={() => {
                    setLanguage(l.code);
                    setOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all
                              ${active
                                ? "bg-primary/15 text-brandNavy dark:text-white"
                                : "text-slate-700 dark:text-slate-200 hover:bg-slate-100/70 dark:hover:bg-slate-800/60"
                              }`}
                >
                  <img
                    src={l.flagSrc}
                    alt={`${l.label} flag`}
                    className="w-5 h-5 rounded-sm object-cover shadow-sm"
                    loading="lazy"
                  />
                  <span className="flex-1 text-sm font-semibold">
                    {l.label}
                  </span>
                  <span className={`text-[11px] font-extrabold tracking-wider ${active ? "opacity-90" : "opacity-60"}`}>
                    {l.short}
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 dark:bg-[#0B1221]/95 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3 group" aria-label="Ideal Deal Vietnam Home">
           <div className="p-1 rounded-sm shadow-sm overflow-hidden flex items-center justify-center"
     style={{ width: "64px", height: "64px" }}>

  <img
    src="/ideal-deal-vn-logo.png" 
    alt="Ideal Deal Logo"
    className="max-w-full max-h-full object-contain"
  />

</div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-brandNavy dark:text-white leading-none tracking-tight text-lg uppercase">IDEAL <span className="text-primary">DEAL</span></span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">
                {language === 'ar' ? 'فيتنام' : (language === 'vi' ? 'Việt Nam' : (language === 'zh' ? '越南' : (language === 'fr' ? 'Vietnam' : 'Vietnam')))}
              </span>
            </div>
          </Link>

          <div className="hidden md:flex space-x-8 items-center rtl:space-x-reverse">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-[12px] font-bold transition-all uppercase tracking-wider ${isActive(link.path) ? 'text-primary border-b-2 border-primary pb-1' : 'text-slate-600 dark:text-slate-300 hover:text-primary'}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-4">
              <LanguageSelector />
              <button onClick={toggleTheme} className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-brandNavy transition-all" aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}>
                <span className="material-symbols-outlined text-xl leading-none">{isDarkMode ? 'light_mode' : 'dark_mode'}</span>
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <LanguageSelector />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-600 dark:text-white" aria-label="Toggle navigation menu" aria-expanded={isMenuOpen}>
              <span className="material-icons-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-brandNavy border-b border-slate-200 dark:border-slate-800 p-4 space-y-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`block text-sm font-semibold uppercase ${isActive(link.path) ? 'text-primary' : 'text-slate-600 dark:text-slate-300'}`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t dark:border-slate-800 flex flex-col gap-4">
            <button onClick={toggleTheme} className="flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-300" aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}>
               <span className="material-icons-outlined">{isDarkMode ? 'light_mode' : 'dark_mode'}</span>
               {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
