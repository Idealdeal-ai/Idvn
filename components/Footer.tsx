import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();
  
 
  return (
    <footer className="bg-white dark:bg-brandNavy border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white p-1 rounded shadow-sm">
                <img 
                  alt="Ideal Deal Vietnam Logo" 
                  className="h-12 w-auto object-contain" 
                  src="/ideal-deal-vn-logo.png" 
                />
              </div>
              <span className="font-display font-bold text-brandNavy dark:text-white text-xl uppercase">
                {language === 'ar' ? 'آيديل ديل فيتنام' : 'IDEAL DEAL VIETNAM'}
              </span>
            </div>

            <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-6">
              {t('footer_desc')}
            </p>

            {/* ✅ Company Official Info (Added - No removals) */}
            <div className="mt-2 space-y-2 text-[12px] leading-relaxed text-slate-500 dark:text-slate-400">
              <div className="font-semibold text-brandNavy dark:text-white">
                CÔNG TY TNHH GIAO DỊCH THƯƠNG MẠI VIỆT NAM
                Tax code: 0111274380
              </div>

              <div>
                Văn phòng số 306, Tòa nhà Văn phòng số 103…, Phường Hồng Hà, Thành phố Hà Nội, Việt Nam
              </div>

              <div className="flex flex-col gap-2">
                <a
                  href="tel:+84828278808"
                  className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                  aria-label="Call phone number"
                >
                  <span className="material-symbols-outlined text-base leading-none">call</span>
                  <span>+84 828 278 808</span>
                </a>

                <a
                  href="mailto:info@idealdealvn.com"
                  className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                  aria-label="Email info@idealdealvn.com"
                >
                  <span className="material-symbols-outlined text-base leading-none">mail</span>
                  <span>info@idealdealvn.com</span>
                   <span>mando@idealdealvn.com</span>
                </a>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-brandNavy dark:text-white hover:bg-primary transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-brandNavy dark:text-white hover:bg-primary transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
              </a>
            </div>
          </div>

          <div>
            <h5 className="font-bold text-brandNavy dark:text-white mb-6 uppercase tracking-wider text-sm">
              {language === 'ar' ? 'التنقل' : 'Navigation'}
            </h5>
            <ul className="space-y-4 text-slate-500 dark:text-slate-400">
              <li><Link to="/" className="hover:text-primary transition-colors">{t('home')}</Link></li>
              <li><Link to="/products" className="hover:text-primary transition-colors">{t('products')}</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">{t('about')}</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">{t('contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-brandNavy dark:text-white mb-6 uppercase tracking-wider text-sm">
              {language === 'ar' ? 'قانوني' : 'Legal'}
            </h5>
            <ul className="space-y-4 text-slate-500 dark:text-slate-400">
              <li><a href="#" className="hover:text-primary transition-colors">{language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{language === 'ar' ? 'شروط الخدمة' : 'Terms of Service'}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{language === 'ar' ? 'سياسة الكوكيز' : 'Cookie Policy'}</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 dark:text-slate-400">
          <p>{t('copyright')}</p>
          <p className="mt-4 md:mt-0 italic font-medium">{t('built_on_trust')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
