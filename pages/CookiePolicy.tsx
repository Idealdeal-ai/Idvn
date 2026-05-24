import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../App';
import SEOHead, { organizationSchema, breadcrumbSchema } from '../components/SEOHead';
import Icon from '../components/Icon';

const Section: React.FC<{ title: string; children: React.ReactNode; isRTL?: boolean }> = ({
  title, children, isRTL = false,
}) => (
  <section className="mb-10">
    <h2 className={`text-xl font-bold text-brandNavy dark:text-white mb-4 pb-2 border-b border-slate-200 dark:border-slate-800 ${isRTL ? 'text-right' : ''}`}>
      {title}
    </h2>
    <div className={`space-y-3 text-slate-600 dark:text-slate-400 leading-relaxed text-sm ${isRTL ? 'text-right' : ''}`}>
      {children}
    </div>
  </section>
);

interface CookieRowProps {
  name: string;
  provider: string;
  purpose: string;
  duration: string;
  type: 'Essential' | 'Functional' | 'Analytics';
  typeLabel: string;
}

const typeColors: Record<CookieRowProps['type'], string> = {
  Essential:  'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  Functional: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  Analytics:  'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
};

const CookieRow: React.FC<CookieRowProps> = ({ name, provider, purpose, duration, type, typeLabel }) => (
  <tr className="border-b border-slate-100 dark:border-slate-800 last:border-0">
    <td className="py-3 pr-4 font-mono text-xs text-brandNavy dark:text-white font-semibold whitespace-nowrap">{name}</td>
    <td className="py-3 pr-4 text-xs">{provider}</td>
    <td className="py-3 pr-4 text-xs">{purpose}</td>
    <td className="py-3 pr-4 text-xs whitespace-nowrap">{duration}</td>
    <td className="py-3 text-xs">
      <span className={`inline-block px-2 py-0.5 rounded-full text-[11px] font-bold ${typeColors[type]}`}>{typeLabel}</span>
    </td>
  </tr>
);

const CookiePolicy: React.FC = () => {
  const { t } = useTranslation('legal');
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  const [consent, setConsent] = useState<'accepted' | 'declined' | null>(null);

  return (
    <div className="pt-20" dir={isRTL ? 'rtl' : 'ltr'}>
      <SEOHead
        title={t('cookies.seo_title')}
        description={t('cookies.seo_description')}
        keywords={['cookie policy', 'cookies', 'privacy', 'Ideal Deal Vietnam']}
        schema={[organizationSchema(), breadcrumbSchema([{ name: 'Home', url: '/' }, { name: t('cookies.title'), url: '/cookie-policy' }])]}
      />

      <section className="bg-brandNavy py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className={`text-primary text-[11px] font-bold tracking-[0.25em] uppercase mb-3 ${isRTL ? 'text-right' : ''}`}>{t('common.legal_label')}</p>
          <h1 className={`text-4xl md:text-5xl font-extrabold text-white font-display uppercase tracking-tight mb-4 ${isRTL ? 'text-right' : ''}`}>{t('cookies.title')}</h1>
          <p className={`text-slate-400 text-sm ${isRTL ? 'text-right' : ''}`}>{t('common.last_updated')}</p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 p-8 md:p-12">

          <p className={`text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-10 ${isRTL ? 'text-right' : ''}`}>
            {t('cookies.intro_before')}
            <strong className="text-brandNavy dark:text-white">{t('cookies.intro_brand')}</strong>
            {t('cookies.intro_middle')}
            <strong className="text-slate-700 dark:text-slate-300">{t('cookies.intro_site')}</strong>.
          </p>

          {/* Section 1 */}
          <Section title={t('cookies.s1_title')} isRTL={isRTL}>
            <p>{t('cookies.s1_p1')}</p>
            <p>{t('cookies.s1_p2_before')}<strong className="text-slate-700 dark:text-slate-300">{t('cookies.s1_p2_local')}</strong>{t('cookies.s1_p2_after')}</p>
          </Section>

          {/* Section 2 */}
          <Section title={t('cookies.s2_title')} isRTL={isRTL}>
            <p>{t('cookies.s2_intro')}</p>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800 rounded-xl p-4">
                <p className={`font-bold text-green-700 dark:text-green-400 mb-1 flex items-center gap-1.5 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Icon name="check_circle" size={16} aria-hidden />{t('cookies.s2_essential_label')}
                </p>
                <p className={`text-xs text-slate-600 dark:text-slate-400 ${isRTL ? 'text-right' : ''}`}>{t('cookies.s2_essential_text')}</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
                <p className={`font-bold text-blue-700 dark:text-blue-400 mb-1 flex items-center gap-1.5 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Icon name="tune" size={16} aria-hidden />{t('cookies.s2_functional_label')}
                </p>
                <p className={`text-xs text-slate-600 dark:text-slate-400 ${isRTL ? 'text-right' : ''}`}>{t('cookies.s2_functional_text')}</p>
              </div>
              <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800 rounded-xl p-4">
                <p className={`font-bold text-amber-700 dark:text-amber-400 mb-1 flex items-center gap-1.5 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Icon name="bar_chart" size={16} aria-hidden />{t('cookies.s2_analytics_label')}
                </p>
                <p className={`text-xs text-slate-600 dark:text-slate-400 ${isRTL ? 'text-right' : ''}`}>{t('cookies.s2_analytics_text')}</p>
              </div>
            </div>
          </Section>

          {/* Section 3 — Cookie table */}
          <Section title={t('cookies.s3_title')} isRTL={isRTL}>
            <div className="overflow-x-auto -mx-2">
              <table className="w-full text-left min-w-[580px]">
                <thead>
                  <tr className="border-b-2 border-slate-200 dark:border-slate-700">
                    <th className="pb-3 pr-4 text-xs font-bold text-brandNavy dark:text-white uppercase tracking-wider">{t('cookies.s3_col_name')}</th>
                    <th className="pb-3 pr-4 text-xs font-bold text-brandNavy dark:text-white uppercase tracking-wider">{t('cookies.s3_col_provider')}</th>
                    <th className="pb-3 pr-4 text-xs font-bold text-brandNavy dark:text-white uppercase tracking-wider">{t('cookies.s3_col_purpose')}</th>
                    <th className="pb-3 pr-4 text-xs font-bold text-brandNavy dark:text-white uppercase tracking-wider">{t('cookies.s3_col_duration')}</th>
                    <th className="pb-3 text-xs font-bold text-brandNavy dark:text-white uppercase tracking-wider">{t('cookies.s3_col_type')}</th>
                  </tr>
                </thead>
                <tbody>
                  <CookieRow name="theme" provider="idealdealvn.com" purpose={t('cookies.s3_theme_purpose')} duration={t('cookies.s3_theme_duration')} type="Functional" typeLabel={t('cookies.s3_type_functional')} />
                  <CookieRow name="language" provider="idealdealvn.com" purpose={t('cookies.s3_lang_purpose')} duration={t('cookies.s3_lang_duration')} type="Functional" typeLabel={t('cookies.s3_type_functional')} />
                  <CookieRow name="_vercel_*" provider="Vercel" purpose={t('cookies.s3_vercel_purpose')} duration={t('cookies.s3_vercel_duration')} type="Essential" typeLabel={t('cookies.s3_type_essential')} />
                  <CookieRow name="__cf_bm" provider="Cloudflare / CDN fonts" purpose={t('cookies.s3_cf_purpose')} duration={t('cookies.s3_cf_duration')} type="Essential" typeLabel={t('cookies.s3_type_essential')} />
                </tbody>
              </table>
            </div>
            <p className={`text-xs text-slate-400 mt-3 italic ${isRTL ? 'text-right' : ''}`}>{t('cookies.s3_no_ads')}</p>
          </Section>

          {/* Section 4 — Google Fonts */}
          <Section title={t('cookies.s4_title')} isRTL={isRTL}>
            <p>
              {t('cookies.s4_before')}
              <strong className="text-slate-700 dark:text-slate-300">{t('cookies.s4_google')}</strong>
              {t('cookies.s4_middle')}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{t('cookies.s4_policy_link')}</a>.
            </p>
          </Section>

          {/* Section 5 — Manage Cookies */}
          <Section title={t('cookies.s5_title')} isRTL={isRTL}>
            <p>{t('cookies.s5_intro')}</p>
            <ul className={`list-disc list-inside space-y-2 ${isRTL ? 'pr-2' : 'pl-2'}`}>
              <li>
                <strong className="text-slate-700 dark:text-slate-300">{t('cookies.s5_browser_label')}</strong>
                {t('cookies.s5_browser_text')}
                <div className={`flex flex-wrap gap-2 mt-2 ${isRTL ? 'mr-2' : 'ml-2'}`}>
                  {[
                    { name: 'Chrome',  url: 'https://support.google.com/chrome/answer/95647' },
                    { name: 'Firefox', url: 'https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences' },
                    { name: 'Safari',  url: 'https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac' },
                    { name: 'Edge',    url: 'https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge-168dab11-0753-043d-7c16-ede5947fc64d' },
                  ].map((b) => (
                    <a key={b.name} href={b.url} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-semibold text-brandNavy dark:text-white hover:bg-primary hover:text-brandNavy transition-colors">
                      {b.name}<Icon name="open_in_new" size={14} aria-hidden />
                    </a>
                  ))}
                </div>
              </li>
              <li>
                <strong className="text-slate-700 dark:text-slate-300">{t('cookies.s5_optout_label')}</strong>
                {t('cookies.s5_optout_before')}
                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{t('cookies.s5_optout_link')}</a>.
              </li>
            </ul>
            <p className={`mt-2 text-xs italic ${isRTL ? 'text-right' : ''}`}>{t('cookies.s5_note')}</p>
          </Section>

          {/* Section 6 — Consent (interactive) */}
          <Section title={t('cookies.s6_title')} isRTL={isRTL}>
            <p>{t('cookies.s6_text')}</p>
            {consent === null ? (
              <div className={`mt-4 flex flex-wrap gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <button onClick={() => setConsent('accepted')}
                  className="px-6 py-2.5 bg-primary text-brandNavy font-bold rounded-lg text-sm hover:brightness-110 transition-all">
                  {t('cookies.s6_accept')}
                </button>
                <button onClick={() => setConsent('declined')}
                  className="px-6 py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold rounded-lg text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
                  {t('cookies.s6_essential_only')}
                </button>
              </div>
            ) : (
              <div className={`mt-4 inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold ${isRTL ? 'flex-row-reverse' : ''} ${
                consent === 'accepted'
                  ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
              }`}>
                <Icon name={consent === 'accepted' ? 'check_circle' : 'info'} size={16} aria-hidden />
                {consent === 'accepted' ? t('cookies.s6_saved_all') : t('cookies.s6_saved_essential')}
              </div>
            )}
          </Section>

          {/* Section 7 */}
          <Section title={t('cookies.s7_title')} isRTL={isRTL}>
            <p>{t('cookies.s7_text')}</p>
          </Section>

          {/* Section 8 — Contact */}
          <Section title={t('cookies.s8_title')} isRTL={isRTL}>
            <p>{t('cookies.s8_intro')}</p>
            <div className={`bg-slate-50 dark:bg-slate-800 rounded-xl p-5 mt-3 space-y-1 ${isRTL ? 'text-right' : ''}`}>
              <p className="font-semibold text-brandNavy dark:text-white">{t('common.company_name')}</p>
              <p>{t('common.company_address')}</p>
              <p>Email: <a href={`mailto:${t('common.company_email')}`} className="text-primary hover:underline">{t('common.company_email')}</a></p>
            </div>
          </Section>

          <div className={`mt-10 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-4 text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Link to="/privacy-policy" className="text-primary hover:underline font-semibold">{t('common.link_privacy')} &rarr;</Link>
            <Link to="/terms-of-service" className="text-primary hover:underline font-semibold">{t('common.link_terms')} &rarr;</Link>
            <Link to="/contact" className="text-primary hover:underline font-semibold">{t('common.link_contact')} &rarr;</Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CookiePolicy;
