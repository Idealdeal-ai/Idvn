import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../App';
import SEOHead, { organizationSchema, breadcrumbSchema } from '../components/SEOHead';

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

const PrivacyPolicy: React.FC = () => {
  const { t } = useTranslation('legal');
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <div className="pt-20" dir={isRTL ? 'rtl' : 'ltr'}>
      <SEOHead
        title={t('privacy.seo_title')}
        description={t('privacy.seo_description')}
        keywords={['privacy policy', 'data protection', 'Ideal Deal Vietnam', 'GDPR']}
        schema={[organizationSchema(), breadcrumbSchema([{ name: 'Home', url: '/' }, { name: t('privacy.title'), url: '/privacy-policy' }])]}
      />

      <section className="bg-brandNavy py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className={`text-primary text-[11px] font-bold tracking-[0.25em] uppercase mb-3 ${isRTL ? 'text-right' : ''}`}>{t('common.legal_label')}</p>
          <h1 className={`text-4xl md:text-5xl font-extrabold text-white font-display uppercase tracking-tight mb-4 ${isRTL ? 'text-right' : ''}`}>{t('privacy.title')}</h1>
          <p className={`text-slate-400 text-sm ${isRTL ? 'text-right' : ''}`}>{t('common.last_updated')}</p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 p-8 md:p-12">

          <p className={`text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-10 ${isRTL ? 'text-right' : ''}`}>
            {t('privacy.intro_before')}
            <strong className="text-brandNavy dark:text-white">{t('common.company_name')}</strong>
            {t('privacy.intro_after')}
          </p>

          <Section title={t('privacy.s1_title')} isRTL={isRTL}>
            <p><strong className="text-slate-700 dark:text-slate-300">{t('privacy.s1_direct_label')}</strong>{t('privacy.s1_direct_text')}</p>
            <p><strong className="text-slate-700 dark:text-slate-300">{t('privacy.s1_usage_label')}</strong>{t('privacy.s1_usage_text')}</p>
            <p>
              <strong className="text-slate-700 dark:text-slate-300">{t('privacy.s1_cookies_label')}</strong>
              {t('privacy.s1_cookies_before')}
              <Link to="/cookie-policy" className="text-primary hover:underline">{t('privacy.s1_cookies_link')}</Link>
              {t('privacy.s1_cookies_after')}
            </p>
          </Section>

          <Section title={t('privacy.s2_title')} isRTL={isRTL}>
            <p>{t('privacy.s2_intro')}</p>
            <ul className={`list-disc list-inside space-y-1 ${isRTL ? 'pr-2' : 'pl-2'}`}>
              <li>{t('privacy.s2_li1')}</li>
              <li>{t('privacy.s2_li2')}</li>
              <li>{t('privacy.s2_li3')}</li>
              <li>{t('privacy.s2_li4')}</li>
            </ul>
            <p className="font-semibold text-slate-700 dark:text-slate-300">{t('privacy.s2_no_sell')}</p>
          </Section>

          <Section title={t('privacy.s3_title')} isRTL={isRTL}>
            <p>{t('privacy.s3_intro')}</p>
            <ul className={`list-disc list-inside space-y-1 ${isRTL ? 'pr-2' : 'pl-2'}`}>
              <li><strong className="text-slate-700 dark:text-slate-300">{t('privacy.s3_consent_label')}</strong>{t('privacy.s3_consent_text')}</li>
              <li><strong className="text-slate-700 dark:text-slate-300">{t('privacy.s3_legit_label')}</strong>{t('privacy.s3_legit_text')}</li>
              <li><strong className="text-slate-700 dark:text-slate-300">{t('privacy.s3_legal_label')}</strong>{t('privacy.s3_legal_text')}</li>
            </ul>
          </Section>

          <Section title={t('privacy.s4_title')} isRTL={isRTL}>
            <p>{t('privacy.s4_intro')}</p>
            <ul className={`list-disc list-inside space-y-1 ${isRTL ? 'pr-2' : 'pl-2'}`}>
              <li><strong className="text-slate-700 dark:text-slate-300">{t('privacy.s4_emailjs_label')}</strong>{t('privacy.s4_emailjs_text')}</li>
              <li><strong className="text-slate-700 dark:text-slate-300">{t('privacy.s4_hosting_label')}</strong>{t('privacy.s4_hosting_text')}</li>
              <li><strong className="text-slate-700 dark:text-slate-300">{t('privacy.s4_legal_label')}</strong>{t('privacy.s4_legal_text')}</li>
            </ul>
          </Section>

          <Section title={t('privacy.s5_title')} isRTL={isRTL}>
            <p>{t('privacy.s5_before')}<strong className="text-slate-700 dark:text-slate-300">{t('privacy.s5_duration')}</strong>{t('privacy.s5_after')}</p>
          </Section>

          <Section title={t('privacy.s6_title')} isRTL={isRTL}>
            <p>{t('privacy.s6_intro')}</p>
            <ul className={`list-disc list-inside space-y-1 ${isRTL ? 'pr-2' : 'pl-2'}`}>
              <li>{t('privacy.s6_li1')}</li>
              <li>{t('privacy.s6_li2')}</li>
              <li>{t('privacy.s6_li3')}</li>
              <li>{t('privacy.s6_li4')}</li>
              <li>{t('privacy.s6_li5')}</li>
            </ul>
            <p>{t('privacy.s6_contact_before')}<a href={`mailto:${t('common.company_email')}`} className="text-primary hover:underline">{t('common.company_email')}</a>.</p>
          </Section>

          <Section title={t('privacy.s7_title')} isRTL={isRTL}><p>{t('privacy.s7_text')}</p></Section>
          <Section title={t('privacy.s8_title')} isRTL={isRTL}><p>{t('privacy.s8_text')}</p></Section>
          <Section title={t('privacy.s9_title')} isRTL={isRTL}><p>{t('privacy.s9_text')}</p></Section>
          <Section title={t('privacy.s10_title')} isRTL={isRTL}><p>{t('privacy.s10_text')}</p></Section>

          <Section title={t('privacy.s11_title')} isRTL={isRTL}>
            <p>{t('privacy.s11_intro')}</p>
            <div className={`bg-slate-50 dark:bg-slate-800 rounded-xl p-5 mt-3 space-y-1 ${isRTL ? 'text-right' : ''}`}>
              <p className="font-semibold text-brandNavy dark:text-white">{t('common.company_name')}</p>
              <p>{t('common.company_address')}</p>
              <p>Email: <a href={`mailto:${t('common.company_email')}`} className="text-primary hover:underline">{t('common.company_email')}</a></p>
              <p dir="ltr" style={{ unicodeBidi: 'embed' }}>{t('common.company_phone')}</p>
            </div>
          </Section>

          <div className={`mt-10 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-4 text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Link to="/terms-of-service" className="text-primary hover:underline font-semibold">{t('common.link_terms')} &rarr;</Link>
            <Link to="/cookie-policy" className="text-primary hover:underline font-semibold">{t('common.link_cookies')} &rarr;</Link>
            <Link to="/contact" className="text-primary hover:underline font-semibold">{t('common.link_contact')} &rarr;</Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
