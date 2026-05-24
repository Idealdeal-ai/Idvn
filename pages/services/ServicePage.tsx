import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getServiceBySlug, getRelatedServices, ServiceData } from '../../data/services';
import SEOHead, { breadcrumbSchema, faqSchema, organizationSchema } from '../../components/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import FAQAccordion from '../../components/FAQAccordion';
import RFQForm from '../../components/RFQForm';
import { useLanguage } from '../../App';
import Icon from '../../components/Icon';

const WHATSAPP_NUMBER = '84828278808';

// ── Translation overlay: merges i18n content over the base English service data ──
function resolveServiceContent(
  service: ServiceData,
  ts: (key: string, options?: Record<string, unknown>) => string | Record<string, unknown> | string[],
  language: string,
): ServiceData {
  if (language === 'en') return service;

  const translated = ts(`content.${service.slug}`, { returnObjects: true });
  if (!translated || typeof translated !== 'object' || Array.isArray(translated)) return service;

  const t = translated as Record<string, unknown>;
  if (!t.name) return service; // no translation found, fall back to English

  return {
    ...service,
    name:            typeof t.name            === 'string' ? t.name            : service.name,
    tagline:         typeof t.tagline         === 'string' ? t.tagline         : service.tagline,
    heroDescription: typeof t.heroDescription === 'string' ? t.heroDescription : service.heroDescription,
    longDescription: typeof t.longDescription === 'string' ? t.longDescription : service.longDescription,
    seoTitle:        typeof t.seoTitle        === 'string' ? t.seoTitle        : service.seoTitle,
    seoDescription:  typeof t.seoDescription  === 'string' ? t.seoDescription  : service.seoDescription,
    features:        Array.isArray(t.features)       ? (t.features       as ServiceData['features'])       : service.features,
    process:         Array.isArray(t.process)        ? (t.process        as ServiceData['process'])        : service.process,
    targetIndustries:Array.isArray(t.targetIndustries)?(t.targetIndustries as string[])                    : service.targetIndustries,
    certifications:  Array.isArray(t.certifications) ? (t.certifications  as string[])                    : service.certifications,
    faqs:            Array.isArray(t.faqs)           ? (t.faqs           as ServiceData['faqs'])           : service.faqs,
  };
}

// ── Inline content renderer (handles **bold**, *italic*, ##headings, paragraphs) ──
const renderContent = (text: string): React.ReactNode[] => {
  const blocks = text.trim().split(/\n\n+/);
  return blocks.map((block, i) => {
    if (block.startsWith('## ')) {
      return (
        <h2 key={i} className="text-2xl font-display font-bold text-brandNavy dark:text-white mt-10 mb-4">
          {block.replace('## ', '')}
        </h2>
      );
    }
    if (block.startsWith('### ')) {
      return (
        <h3 key={i} className="text-xl font-bold text-brandNavy dark:text-white mt-8 mb-3">
          {block.replace('### ', '')}
        </h3>
      );
    }
    if (block.split('\n').every((l) => l.trimStart().startsWith('- '))) {
      const items = block.split('\n').map((l) => l.replace(/^-\s*/, ''));
      return (
        <ul key={i} className="list-disc list-inside space-y-1.5 text-slate-600 dark:text-slate-300 mb-4 ml-2">
          {items.map((item, j) => <li key={j}>{renderInline(item)}</li>)}
        </ul>
      );
    }
    if (block.split('\n').every((l) => /^\d+\.\s/.test(l.trimStart()))) {
      const items = block.split('\n').map((l) => l.replace(/^\d+\.\s*/, ''));
      return (
        <ol key={i} className="list-decimal list-inside space-y-1.5 text-slate-600 dark:text-slate-300 mb-4 ml-2">
          {items.map((item, j) => <li key={j}>{renderInline(item)}</li>)}
        </ol>
      );
    }
    if (block.startsWith('> ')) {
      return (
        <blockquote key={i} className="border-l-4 border-primary pl-5 py-1 my-6 italic text-slate-500 dark:text-slate-400">
          {block.replace(/^>\s*/gm, '')}
        </blockquote>
      );
    }
    return (
      <p key={i} className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
        {renderInline(block)}
      </p>
    );
  });
};

const renderInline = (text: string): React.ReactNode => {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('**')) return <strong key={i}>{part.replace(/\*\*/g, '')}</strong>;
        if (part.startsWith('*')) return <em key={i}>{part.replace(/\*/g, '')}</em>;
        return part;
      })}
    </>
  );
};

const ServicePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug ?? '');
  const { t: ts } = useTranslation('services');
  const { language, t } = useLanguage();
  const isRTL = language === 'ar';

  if (!service) return <Navigate to="/services" replace />;

  // ── Apply language translations over English base data ──
  const s = resolveServiceContent(service, ts as Parameters<typeof resolveServiceContent>[1], language);

  const related = getRelatedServices(service); // structural slugs — always from base data

  const waMsg = `Hello! I am interested in your ${s.name} service. Please send me more information.`;

  const schema = [
    organizationSchema(),
    breadcrumbSchema([
      { name: t('breadcrumb_home'), url: '/' },
      { name: t('breadcrumb_services'), url: '/services' },
      { name: s.name, url: `/services/${service.slug}` },
    ]),
    ...(s.faqs.length > 0 ? [faqSchema(s.faqs)] : []),
  ];

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'}>
      <SEOHead
        title={s.seoTitle}
        description={s.seoDescription}
        keywords={service.keywords}
        schema={schema}
      />

      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="relative bg-brandNavy text-white pt-28 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url(${service.heroImage})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brandNavy via-brandNavy/90 to-brandNavy/60" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            className="mb-6 text-white/60"
            items={[
              { label: t('breadcrumb_home'), href: '/' },
              { label: t('breadcrumb_services'), href: '/services' },
              { label: s.name },
            ]}
          />
          <div className={`flex items-center gap-4 mb-5 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
            <div className="w-14 h-14 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center">
              <Icon name={service.icon} size={30} className="text-primary" aria-hidden />
            </div>
            <span className="bg-primary/20 border border-primary/40 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              {ts('ui.service_badge')}
            </span>
          </div>
          <h1 className={`text-4xl md:text-5xl font-display font-bold mb-4 max-w-3xl ${isRTL ? 'text-right' : ''}`}>
            {s.name}
          </h1>
          <p className={`text-xl text-white/80 mb-3 max-w-2xl font-medium ${isRTL ? 'text-right' : ''}`}>{s.tagline}</p>
          <p className={`text-white/60 max-w-2xl mb-8 leading-relaxed ${isRTL ? 'text-right' : ''}`}>{s.heroDescription}</p>
          <div className={`flex flex-wrap gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-amber-500 transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              <Icon name="send" size={18} aria-hidden />
              {ts('ui.get_free_quote')}
            </a>
            <Link
              to="/contact"
              className={`inline-flex items-center gap-2 border border-white/30 text-white font-medium px-6 py-3 rounded-xl hover:bg-white/10 transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              <Icon name="mail" size={18} aria-hidden />
              {ts('ui.talk_to_expert')}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Features grid ───────────────────────────────────── */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-display font-bold text-brandNavy dark:text-white mb-4">
              {ts('ui.whats_included')}
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              {ts('ui.whats_included_sub')}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {s.features.map((feature, i) => (
              <div
                key={i}
                className={`bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-primary hover:shadow-lg transition-all ${isRTL ? 'text-right' : ''}`}
              >
                <div className={`w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 ${isRTL ? 'mr-auto ml-0' : ''}`}>
                  <Icon name={feature.icon} size={24} className="text-primary" aria-hidden />
                </div>
                <h3 className="font-bold text-brandNavy dark:text-white mb-2">{feature.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Long description + sidebar ───────────────────────── */}
      <section className="py-20 bg-white dark:bg-brandNavy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Article */}
            <div className={`lg:col-span-2 ${isRTL ? 'text-right' : ''}`}>
              <h2 className="text-3xl font-display font-bold text-brandNavy dark:text-white mb-8">
                {ts('ui.about_service', { name: s.name })}
              </h2>
              <div>{renderContent(s.longDescription)}</div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8 lg:sticky lg:top-24 h-fit">
              {/* Industries */}
              <div className={`bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 ${isRTL ? 'text-right' : ''}`}>
                <h3 className="font-bold text-brandNavy dark:text-white mb-4 text-sm uppercase tracking-wider">
                  {ts('ui.industries_we_serve')}
                </h3>
                <ul className="space-y-2">
                  {s.targetIndustries.map((industry) => (
                    <li key={industry} className={`flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <Icon name="check_circle" size={16} className="text-primary" aria-hidden />
                      {industry}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Certifications */}
              <div className={`bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 ${isRTL ? 'text-right' : ''}`}>
                <h3 className="font-bold text-brandNavy dark:text-white mb-4 text-sm uppercase tracking-wider">
                  {ts('ui.certifications_standards')}
                </h3>
                <ul className="space-y-2">
                  {s.certifications.map((cert) => (
                    <li key={cert} className={`flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <Icon name="verified" size={16} className="text-green-500" aria-hidden />
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>

              {/* WhatsApp CTA */}
              <div className={`bg-green-50 dark:bg-green-900/20 rounded-2xl p-6 border border-green-200 dark:border-green-800 ${isRTL ? 'text-right' : ''}`}>
                <div className="font-bold text-brandNavy dark:text-white mb-2">{ts('ui.need_fast_answer')}</div>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
                  {ts('ui.whatsapp_cta_sub')}
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-3 rounded-xl transition-colors text-sm w-full ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <Icon name="chat" size={16} aria-hidden />
                  {ts('ui.chat_on_whatsapp')}
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Process steps ───────────────────────────────────── */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-display font-bold text-brandNavy dark:text-white mb-4">
              {ts('ui.how_it_works')}
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              {ts('ui.how_it_works_sub')}
            </p>
          </div>
          <div className="relative">
            {/* Vertical connector */}
            <div className={`absolute ${isRTL ? 'right-6' : 'left-6'} top-8 bottom-8 w-0.5 bg-primary/20 hidden md:block`} aria-hidden="true" />
            <div className="space-y-8">
              {s.process.map((step) => (
                <div key={step.step} className={`relative flex gap-6 items-start ${isRTL ? 'flex-row-reverse' : ''}`}>
                  {/* Step circle */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-display font-bold text-lg z-10">
                    {step.step}
                  </div>
                  <div className={`bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 flex-1 hover:border-primary transition-colors ${isRTL ? 'text-right' : ''}`}>
                    <h3 className="font-bold text-brandNavy dark:text-white mb-2">{step.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      {s.faqs.length > 0 && (
        <section className="py-16 bg-white dark:bg-brandNavy">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-display font-bold text-brandNavy dark:text-white mb-8 text-center">
              {ts('ui.faq_heading')}
            </h2>
            <FAQAccordion faqs={s.faqs} />
          </div>
        </section>
      )}

      {/* ── Related services ────────────────────────────────── */}
      {related.length > 0 && (
        <section className="py-16 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-display font-bold text-brandNavy dark:text-white mb-8 text-center">
              {ts('ui.related_services')}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((rs) => {
                const rResolved = resolveServiceContent(rs, ts as Parameters<typeof resolveServiceContent>[1], language);
                return (
                  <Link
                    key={rs.slug}
                    to={`/services/${rs.slug}`}
                    className={`group bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-primary hover:shadow-lg transition-all ${isRTL ? 'text-right' : ''}`}
                  >
                    <div className={`w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 ${isRTL ? 'mr-auto ml-0' : ''}`}>
                      <Icon name={rs.icon} className="text-primary" aria-hidden />
                    </div>
                    <h3 className="font-bold text-brandNavy dark:text-white group-hover:text-primary transition-colors mb-2">
                      {rResolved.name}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2">{rResolved.tagline}</p>
                    <div className={`flex items-center gap-1 text-primary font-bold text-sm mt-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      {ts('ui.learn_more')}
                      <Icon name="arrow_forward" size={16} className={isRTL ? 'rotate-180' : ''} aria-hidden />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── RFQ ─────────────────────────────────────────────── */}
      <section className="py-20 bg-white dark:bg-brandNavy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-10 ${isRTL ? 'text-right' : ''}`}>
            <h2 className="text-3xl font-display font-bold text-brandNavy dark:text-white mb-3">
              {ts('ui.get_started_heading', { name: s.name })}
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              {ts('ui.get_started_sub')}
            </p>
          </div>
          <RFQForm productName={s.name} />
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
