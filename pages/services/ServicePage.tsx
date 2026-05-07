import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getServiceBySlug, getRelatedServices } from '../../data/services';
import SEOHead, { breadcrumbSchema, faqSchema, organizationSchema } from '../../components/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import FAQAccordion from '../../components/FAQAccordion';
import RFQForm from '../../components/RFQForm';

const WHATSAPP_NUMBER = '84828278808';

// ── Inline content renderer (handles **bold**, *italic*, ##headings, paragraphs)
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

  if (!service) return <Navigate to="/services" replace />;

  const related = getRelatedServices(service);

  const waMsg = `Hello! I am interested in your ${service.name} service. Please send me more information.`;

  const schema = [
    organizationSchema(),
    breadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
      { name: service.name, url: `/services/${service.slug}` },
    ]),
    ...(service.faqs.length > 0 ? [faqSchema(service.faqs)] : []),
  ];

  return (
    <>
      <SEOHead
        title={service.seoTitle}
        description={service.seoDescription}
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
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: service.name },
            ]}
          />
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl text-primary" aria-hidden="true">
                {service.icon}
              </span>
            </div>
            <span className="bg-primary/20 border border-primary/40 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              Service
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 max-w-3xl">
            {service.name}
          </h1>
          <p className="text-xl text-white/80 mb-3 max-w-2xl font-medium">{service.tagline}</p>
          <p className="text-white/60 max-w-2xl mb-8 leading-relaxed">{service.heroDescription}</p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-amber-500 transition-colors"
            >
              <span className="material-symbols-outlined text-lg" aria-hidden="true">send</span>
              Get a Free Quote
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-medium px-6 py-3 rounded-xl hover:bg-white/10 transition-colors"
            >
              <span className="material-symbols-outlined text-lg" aria-hidden="true">mail</span>
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>

      {/* ── Features grid ───────────────────────────────────── */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-display font-bold text-brandNavy dark:text-white mb-4">
              What's Included
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              Everything you need to source, manufacture, and ship from Vietnam — handled by our team.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, i) => (
              <div
                key={i}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-2xl text-primary" aria-hidden="true">
                    {feature.icon}
                  </span>
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
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-display font-bold text-brandNavy dark:text-white mb-8">
                About Our {service.name} Service
              </h2>
              <div>{renderContent(service.longDescription)}</div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8 lg:sticky lg:top-24 h-fit">
              {/* Industries */}
              <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="font-bold text-brandNavy dark:text-white mb-4 text-sm uppercase tracking-wider">
                  Industries We Serve
                </h3>
                <ul className="space-y-2">
                  {service.targetIndustries.map((industry) => (
                    <li key={industry} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                      <span className="material-symbols-outlined text-primary text-base" aria-hidden="true">check_circle</span>
                      {industry}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Certifications */}
              <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="font-bold text-brandNavy dark:text-white mb-4 text-sm uppercase tracking-wider">
                  Certifications & Standards
                </h3>
                <ul className="space-y-2">
                  {service.certifications.map((cert) => (
                    <li key={cert} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                      <span className="material-symbols-outlined text-green-500 text-base" aria-hidden="true">verified</span>
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-6 border border-green-200 dark:border-green-800">
                <div className="font-bold text-brandNavy dark:text-white mb-2">Need a fast answer?</div>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
                  Message our team directly on WhatsApp for same-day responses.
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-3 rounded-xl transition-colors text-sm w-full"
                >
                  <span className="material-symbols-outlined text-base" aria-hidden="true">chat</span>
                  Chat on WhatsApp
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
              How It Works
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              A clear, step-by-step process from first contact to delivery.
            </p>
          </div>
          <div className="relative">
            {/* Vertical connector */}
            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-primary/20 hidden md:block" aria-hidden="true" />
            <div className="space-y-8">
              {service.process.map((step) => (
                <div key={step.step} className="relative flex gap-6 items-start">
                  {/* Step circle */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-display font-bold text-lg z-10">
                    {step.step}
                  </div>
                  <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 flex-1 hover:border-primary transition-colors">
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
      {service.faqs.length > 0 && (
        <section className="py-16 bg-white dark:bg-brandNavy">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-display font-bold text-brandNavy dark:text-white mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <FAQAccordion faqs={service.faqs} />
          </div>
        </section>
      )}

      {/* ── Related services ────────────────────────────────── */}
      {related.length > 0 && (
        <section className="py-16 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-display font-bold text-brandNavy dark:text-white mb-8 text-center">
              Related Services
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((rs) => (
                <Link
                  key={rs.slug}
                  to={`/services/${rs.slug}`}
                  className="group bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-primary hover:shadow-lg transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-xl text-primary" aria-hidden="true">
                      {rs.icon}
                    </span>
                  </div>
                  <h3 className="font-bold text-brandNavy dark:text-white group-hover:text-primary transition-colors mb-2">
                    {rs.name}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2">{rs.tagline}</p>
                  <div className="flex items-center gap-1 text-primary font-bold text-sm mt-4">
                    Learn More
                    <span className="material-symbols-outlined text-base" aria-hidden="true">arrow_forward</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── RFQ ─────────────────────────────────────────────── */}
      <section className="py-20 bg-white dark:bg-brandNavy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold text-brandNavy dark:text-white mb-3">
              Get Started with {service.name}
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              Tell us about your requirements and we'll send a detailed proposal within 24 hours.
            </p>
          </div>
          <RFQForm productName={service.name} />
        </div>
      </section>
    </>
  );
};

export default ServicePage;
