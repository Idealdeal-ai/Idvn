import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../App';
import SEOHead, { organizationSchema, breadcrumbSchema } from '../components/SEOHead';

// ── Section wrapper ────────────────────────────────────────────────────────────
const Section: React.FC<{ title: string; children: React.ReactNode; isRTL?: boolean }> = ({
  title,
  children,
  isRTL = false,
}) => (
  <section className="mb-10">
    <h2
      className={`text-xl font-bold text-brandNavy dark:text-white mb-4 pb-2 border-b border-slate-200 dark:border-slate-800 ${
        isRTL ? 'text-right' : ''
      }`}
    >
      {title}
    </h2>
    <div
      className={`space-y-3 text-slate-600 dark:text-slate-400 leading-relaxed text-sm ${
        isRTL ? 'text-right' : ''
      }`}
    >
      {children}
    </div>
  </section>
);

// ── Component ──────────────────────────────────────────────────────────────────
const TermsOfService: React.FC = () => {
  const { t } = useTranslation('legal');
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <div className="pt-20" dir={isRTL ? 'rtl' : 'ltr'}>
      <SEOHead
        title={t('terms.seo_title')}
        description={t('terms.seo_description')}
        keywords={['terms of service', 'terms and conditions', 'Ideal Deal Vietnam', 'legal']}
        schema={[
          organizationSchema(),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: t('terms.title'), url: '/terms-of-service' },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="bg-brandNavy py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className={`text-primary text-[11px] font-bold tracking-[0.25em] uppercase mb-3 ${
              isRTL ? 'text-right' : ''
            }`}
          >
            {t('common.legal_label')}
          </p>
          <h1
            className={`text-4xl md:text-5xl font-extrabold text-white font-display uppercase tracking-tight mb-4 ${
              isRTL ? 'text-right' : ''
            }`}
          >
            {t('terms.title')}
          </h1>
          <p className={`text-slate-400 text-sm ${isRTL ? 'text-right' : ''}`}>
            {t('common.last_updated')}
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 p-8 md:p-12">

          <p className={`text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-10 ${isRTL ? 'text-right' : ''}`}>
            {t('terms.intro_before')}
            <strong className="text-brandNavy dark:text-white">{t('common.company_name')}</strong>
            {t('terms.intro_after')}
          </p>

          {/* Section 1 — Acceptance */}
          <Section title={t('terms.s1_title')} isRTL={isRTL}>
            <p>
              {t('terms.s1_before')}
              <strong className="text-slate-700 dark:text-slate-300">{t('terms.s1_website')}</strong>
              {t('terms.s1_after')}
            </p>
          </Section>

          {/* Section 2 — About Our Services */}
          <Section title={t('terms.s2_title')} isRTL={isRTL}>
            <p>{t('terms.s2_p1')}</p>
            <p>{t('terms.s2_p2')}</p>
          </Section>

          {/* Section 3 — Use of the Website */}
          <Section title={t('terms.s3_title')} isRTL={isRTL}>
            <p>{t('terms.s3_intro')}</p>
            <ul className={`list-disc list-inside space-y-1 ${isRTL ? 'pr-2' : 'pl-2'}`}>
              <li>{t('terms.s3_li1')}</li>
              <li>{t('terms.s3_li2')}</li>
              <li>{t('terms.s3_li3')}</li>
              <li>{t('terms.s3_li4')}</li>
              <li>{t('terms.s3_li5')}</li>
            </ul>
          </Section>

          {/* Section 4 — Intellectual Property */}
          <Section title={t('terms.s4_title')} isRTL={isRTL}>
            <p>
              {t('terms.s4_p1_before')}
              <strong className="text-brandNavy dark:text-white">{t('common.company_name')}</strong>
              {t('terms.s4_p1_after')}
            </p>
            <p>{t('terms.s4_p2')}</p>
          </Section>

          {/* Section 5 — Inquiries */}
          <Section title={t('terms.s5_title')} isRTL={isRTL}>
            <p>{t('terms.s5_p1')}</p>
            <p>
              {t('terms.s5_p2_before')}
              <strong className="text-slate-700 dark:text-slate-300">{t('terms.s5_p2_duration')}</strong>
              {t('terms.s5_p2_after')}
            </p>
          </Section>

          {/* Section 6 — Third-Party Links */}
          <Section title={t('terms.s6_title')} isRTL={isRTL}>
            <p>{t('terms.s6_text')}</p>
          </Section>

          {/* Section 7 — Disclaimer of Warranties */}
          <Section title={t('terms.s7_title')} isRTL={isRTL}>
            <p>
              {t('terms.s7_p1_before')}
              <strong className="text-slate-700 dark:text-slate-300">{t('terms.s7_p1_quoted')}</strong>
              {t('terms.s7_p1_after')}
            </p>
            <p>{t('terms.s7_p2')}</p>
          </Section>

          {/* Section 8 — Limitation of Liability */}
          <Section title={t('terms.s8_title')} isRTL={isRTL}>
            <p>{t('terms.s8_intro')}</p>
            <ul className={`list-disc list-inside space-y-1 ${isRTL ? 'pr-2' : 'pl-2'}`}>
              <li>{t('terms.s8_li1')}</li>
              <li>{t('terms.s8_li2')}</li>
              <li>{t('terms.s8_li3')}</li>
              <li>{t('terms.s8_li4')}</li>
            </ul>
          </Section>

          {/* Section 9 — Indemnification */}
          <Section title={t('terms.s9_title')} isRTL={isRTL}>
            <p>{t('terms.s9_text')}</p>
          </Section>

          {/* Section 10 — Governing Law */}
          <Section title={t('terms.s10_title')} isRTL={isRTL}>
            <p>
              {t('terms.s10_before')}
              <strong className="text-slate-700 dark:text-slate-300">{t('terms.s10_country')}</strong>
              {t('terms.s10_after')}
            </p>
          </Section>

          {/* Section 11 — Changes */}
          <Section title={t('terms.s11_title')} isRTL={isRTL}>
            <p>{t('terms.s11_text')}</p>
          </Section>

          {/* Section 12 — Contact */}
          <Section title={t('terms.s12_title')} isRTL={isRTL}>
            <p>{t('terms.s12_intro')}</p>
            <div className={`bg-slate-50 dark:bg-slate-800 rounded-xl p-5 mt-3 space-y-1 ${isRTL ? 'text-right' : ''}`}>
              <p className="font-semibold text-brandNavy dark:text-white">{t('common.company_name')}</p>
              <p>{t('common.company_address')}</p>
              <p>
                Email:{' '}
                <a href={`mailto:${t('common.company_email')}`} className="text-primary hover:underline">
                  {t('common.company_email')}
                </a>
              </p>
              <p dir="ltr" style={{ unicodeBidi: 'embed' }}>{t('common.company_phone')}</p>
            </div>
          </Section>

          {/* Footer links */}
          <div
            className={`mt-10 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-4 text-sm ${
              isRTL ? 'flex-row-reverse' : ''
            }`}
          >
            <Link to="/privacy-policy" className="text-primary hover:underline font-semibold">
              {t('common.link_privacy')} →
            </Link>
            <Link to="/cookie-policy" className="text-primary hover:underline font-semibold">
              {t('common.link_cookies')} →
            </Link>
            <Link to="/contact" className="text-primary hover:underline font-semibold">
              {t('common.link_contact')} →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsOfService;
