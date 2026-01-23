
import React, { useState } from 'react';
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


  

  const LanguageSelector = () => (
    <div className="flex items-center gap-2">
      <button 
        onClick={() => setLanguage('en')}
        className={`w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold transition-all border-2 ${language === 'en' ? 'bg-primary border-primary text-brandNavy shadow-lg scale-110' : 'bg-slate-100 dark:bg-slate-800 border-transparent opacity-60 hover:opacity-100'}`}
        title="English"
        aria-label="Select English language"
      >
        EN
      </button>
      <button 
        onClick={() => setLanguage('ar')}
        className={`w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold transition-all border-2 ${language === 'ar' ? 'bg-primary border-primary text-brandNavy shadow-lg scale-110' : 'bg-slate-100 dark:bg-slate-800 border-transparent opacity-60 hover:opacity-100'}`}
        title="العربية"
        aria-label="Select Arabic language"
      >
        AR
      </button>
      <button 
        onClick={() => setLanguage('vi')}
        className={`w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold transition-all border-2 ${language === 'vi' ? 'bg-primary border-primary text-brandNavy shadow-lg scale-110' : 'bg-slate-100 dark:bg-slate-800 border-transparent opacity-60 hover:opacity-100'}`}
        title="Tiếng Việt"
        aria-label="Select Vietnamese language"
      >
        VN
      </button>
      <button 
        onClick={() => setLanguage('zh')}
        className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all border-2 ${language === 'zh' ? 'bg-primary border-primary text-brandNavy shadow-lg scale-110' : 'bg-slate-100 dark:bg-slate-800 border-transparent opacity-60 hover:opacity-100'}`}
        title="中文"
        aria-label="Select Chinese language"
      >
        中
      </button>
      <button 
        onClick={() => setLanguage('es')}
        className={`w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold transition-all border-2 ${language === 'es' ? 'bg-primary border-primary text-brandNavy shadow-lg scale-110' : 'bg-slate-100 dark:bg-slate-800 border-transparent opacity-60 hover:opacity-100'}`}
        title="Español"
        aria-label="Select Spanish language"
      >
        ES
      </button>
      <button 
        onClick={() => setLanguage('fr')}
        className={`w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold transition-all border-2 ${language === 'fr' ? 'bg-primary border-primary text-brandNavy shadow-lg scale-110' : 'bg-slate-100 dark:bg-slate-800 border-transparent opacity-60 hover:opacity-100'}`}
        title="Français"
        aria-label="Select French language"
      >
        FR
      </button>
    </div>
  );

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
