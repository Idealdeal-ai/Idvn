import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  getCategoryBySlug,
  getProductBySlug,
  getRelatedProducts,
} from '../../data/products';
import SEOHead, {
  breadcrumbSchema,
  faqSchema,
  productSchema,
  organizationSchema,
} from '../../components/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import FAQAccordion from '../../components/FAQAccordion';
import RFQForm from '../../components/RFQForm';
import Icon from '../../components/Icon';

const WHATSAPP_NUMBER = '84828278808';

// ── Convert a market name to a locale key slug ────────────────────────────────
const marketKey = (m: string) => m.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// ── Markdown-lite renderer (bold + line breaks only) ──────────────────────────
const renderContent = (text: string) => {
  const paragraphs = text.split(/\n\n+/);
  return paragraphs.map((para, i) => {
    if (para.startsWith('**') && para.endsWith('**') && para.split('**').length === 3) {
      // Standalone bold = subheading
      const heading = para.replace(/\*\*/g, '');
      return (
        <h3 key={i} className="text-lg font-bold text-brandNavy dark:text-white mt-6 mb-2">
          {heading}
        </h3>
      );
    }
    // Inline bold
    const parts = para.split(/(\*\*[^*]+\*\*)/g);
    return (
      <p key={i} className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
        {parts.map((part, j) =>
          part.startsWith('**') ? (
            <strong key={j}>{part.replace(/\*\*/g, '')}</strong>
          ) : (
            part
          )
        )}
      </p>
    );
  });
};

const ProductPage: React.FC = () => {
  const { category, slug } = useParams<{ category: string; slug: string; lang?: string }>();
  const { t } = useTranslation('products');
  const cat = getCategoryBySlug(category ?? '');
  const product = getProductBySlug(category ?? '', slug ?? '');
  const [activeTab, setActiveTab] = useState<'description' | 'specs' | 'shipping'>('description');

  if (!cat || !product) return <Navigate to="/products" replace />;

  const related = getRelatedProducts(product);

  // ── Translated strings ────────────────────────────────────────────────────
  const catName        = t(`categories.${cat.slug}.name`,             { defaultValue: cat.name });
  const productName    = t(`products.${product.slug}.name`,           { defaultValue: product.name });
  const productTagline = t(`products.${product.slug}.tagline`,        { defaultValue: product.tagline });
  const productDesc    = t(`products.${product.slug}.description`,    { defaultValue: product.description });
  const productSeoDesc = t(`products.${product.slug}.seoDescription`, { defaultValue: product.seoDescription });

  const productMoq      = t(`products.${product.slug}.moq`,              { defaultValue: product.moq });
  const productCapacity = t(`products.${product.slug}.containerCapacity`, { defaultValue: product.containerCapacity });
  const productLongDesc = t(`products.${product.slug}.longDescription`,   { defaultValue: product.longDescription });
  const translatedFaqs  = product.faqs.map((faq, i) => ({
    question: t(`products.${product.slug}.faqs.${i}.question`, { defaultValue: faq.question }),
    answer:   t(`products.${product.slug}.faqs.${i}.answer`,   { defaultValue: faq.answer }),
  }));

  const waMessage = t('ui.whatsapp_product_msg', {
    defaultValue: `Hello! I am interested in ${productName} (HS: ${product.hsCode}). Please send me pricing and availability.`,
    name: productName,
    hs: product.hsCode,
  });

  const schema = [
    organizationSchema(),
    productSchema({
      name: productName,
      description: productDesc,
      image: product.heroImage,
      category: catName,
      url: `/products/${product.categorySlug}/${product.slug}`,
    }),
    breadcrumbSchema([
      { name: t('ui.home'),     url: '/' },
      { name: t('ui.products'), url: '/products' },
      { name: catName,          url: `/products/${cat.slug}` },
      { name: productName,      url: `/products/${cat.slug}/${product.slug}` },
    ]),
    ...(product.faqs.length > 0 ? [faqSchema(product.faqs)] : []),
  ];

  return (
    <>
      <SEOHead
        title={t('seo.product_title', { name: productName })}
        description={t('seo.product_desc', { name: productName, desc: productSeoDesc })}
        keywords={product.keywords}
        schema={schema}
      />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative bg-brandNavy text-white pt-28 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url(${product.heroImage})` }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            className="mb-6 text-white/60"
            items={[
              { label: t('ui.home'),     href: '/' },
              { label: t('ui.products'), href: '/products' },
              { label: catName,          href: `/products/${cat.slug}` },
              { label: productName },
            ]}
          />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-primary/20 border border-primary/40 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  {catName}
                </span>
                <span className="bg-white/10 text-white/70 text-xs font-mono px-3 py-1 rounded-full">
                  HS {product.hsCode}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                {productName}
              </h1>
              <p className="text-xl text-white/80 mb-6 italic">{productTagline}</p>
              <p className="text-white/70 leading-relaxed mb-8">{productDesc}</p>

              {/* Certifications */}
              <div className="flex flex-wrap gap-2 mb-8">
                {product.certifications.map((cert) => (
                  <span
                    key={cert}
                    className="flex items-center gap-1.5 bg-white/10 text-white text-xs font-medium px-3 py-1.5 rounded-full"
                  >
                    <Icon name="verified" size={14} className="text-green-400" aria-hidden />
                    {cert}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-amber-500 transition-colors"
                >
                  <Icon name="send" size={18} aria-hidden />
                  {t('ui.get_quote')}
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border border-white/30 text-white font-medium px-6 py-3 rounded-xl hover:bg-white/10 transition-colors"
                >
                  <Icon name="mail" size={18} aria-hidden />
                  {t('ui.contact_expert')}
                </Link>
              </div>
            </div>

            {/* Product image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-700">
              {product.heroImage && (
                <img
                  src={product.heroImage}
                  alt={productName}
                  className="w-full h-full object-cover"
                />
              )}
              {/* MOQ badge */}
              <div className="absolute bottom-4 left-4 bg-white/95 text-brandNavy rounded-xl px-4 py-2 text-sm">
                <span className="text-slate-500 text-xs block">{t('ui.min_order')}</span>
                <span className="font-bold">{productMoq}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick stats bar ───────────────────────────────────── */}
      <div className="bg-primary text-white py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-xs uppercase tracking-widest opacity-70 mb-1">{t('ui.min_order')}</div>
              <div className="font-bold">{productMoq}</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest opacity-70 mb-1">{t('ui.container')}</div>
              <div className="font-bold">{productCapacity}</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest opacity-70 mb-1">{t('ui.packaging')}</div>
              <div className="font-bold">{t(`products.${product.slug}.packagingOptions.0`, { defaultValue: product.packagingOptions[0] })}</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest opacity-70 mb-1">{t('ui.export_markets')}</div>
              <div className="font-bold">{t('ui.countries_count', { count: product.exportMarkets.length })}</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main content + sidebar ─────────────────────────────── */}
      <section className="py-16 bg-white dark:bg-brandNavy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left: tabs content */}
            <div className="lg:col-span-2">
              {/* Tab nav */}
              <div className="flex border-b border-slate-200 dark:border-slate-700 mb-8 overflow-x-auto">
                {(['description', 'specs', 'shipping'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-5 py-3 font-semibold text-sm capitalize whitespace-nowrap border-b-2 transition-colors ${
                      activeTab === tab
                        ? 'border-primary text-primary'
                        : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-brandNavy dark:hover:text-white'
                    }`}
                  >
                    {tab === 'description' ? t('ui.product_details') : tab === 'specs' ? t('ui.specifications') : t('ui.export_shipping')}
                  </button>
                ))}
              </div>

              {/* Description tab */}
              {activeTab === 'description' && (
                <div className="prose-custom">
                  {renderContent(productLongDesc)}

                  {/* Export markets */}
                  <h3 className="text-lg font-bold text-brandNavy dark:text-white mt-8 mb-3">
                    {t('ui.export_markets')}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.exportMarkets.map((m) => (
                      <span
                        key={m}
                        className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium px-3 py-1.5 rounded-full"
                      >
                        {t(`ui.markets.${marketKey(m)}`, { defaultValue: m })}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Specs tab */}
              {activeTab === 'specs' && (
                <div>
                  <h2 className="text-xl font-bold text-brandNavy dark:text-white mb-6">
                    {t('ui.tech_specs')}
                  </h2>
                  <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
                    <table className="w-full text-sm">
                      <tbody>
                        {product.specs.map((spec, i) => (
                          <tr
                            key={spec.label}
                            className={`${
                              i % 2 === 0
                                ? 'bg-slate-50 dark:bg-slate-800/50'
                                : 'bg-white dark:bg-slate-800'
                            }`}
                          >
                            <td className="px-5 py-3 font-semibold text-brandNavy dark:text-white w-2/5">
                              {t(`specLabels.${spec.label}`, { defaultValue: spec.label })}
                            </td>
                            <td className="px-5 py-3 text-slate-600 dark:text-slate-300">
                              {t(`products.${product.slug}.specs.${i}.value`, { defaultValue: spec.value })}
                            </td>
                            {spec.notes && (
                              <td className="px-5 py-3 text-slate-400 text-xs italic">
                                {t(`products.${product.slug}.specs.${i}.notes`, { defaultValue: spec.notes })}
                              </td>
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Packaging options */}
                  <h3 className="text-lg font-bold text-brandNavy dark:text-white mt-8 mb-3">
                    {t('ui.packaging')}
                  </h3>
                  <ul className="space-y-2">
                    {product.packagingOptions.map((opt, pi) => (
                      <li key={pi} className="flex items-center gap-2 text-slate-600 dark:text-slate-300 text-sm">
                        <Icon name="check_circle" size={16} className="text-primary" aria-hidden />
                        {t(`products.${product.slug}.packagingOptions.${pi}`, { defaultValue: opt })}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Shipping tab */}
              {activeTab === 'shipping' && (
                <div className="space-y-8">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
                      <div className="flex items-center gap-2 mb-3">
                        <Icon name="inventory_2" className="text-primary" aria-hidden />
                        <span className="font-bold text-brandNavy dark:text-white">{t('ui.container')}</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">{productCapacity}</p>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
                      <div className="flex items-center gap-2 mb-3">
                        <Icon name="scale" className="text-primary" aria-hidden />
                        <span className="font-bold text-brandNavy dark:text-white">{t('ui.min_order')}</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">{productMoq}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-brandNavy dark:text-white mb-3">{t('ui.incoterms')}</h3>
                    <div className="flex flex-wrap gap-2">
                      {[t('incoterms.fob'), t('incoterms.cif'), t('incoterms.cfr'), t('incoterms.ddp')].map((term) => (
                        <span key={term} className="bg-primary/10 text-primary border border-primary/30 text-xs font-bold px-3 py-1.5 rounded-full">
                          {term}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-brandNavy dark:text-white mb-3">{t('ui.certs_docs')}</h3>
                    <ul className="space-y-2">
                      {[t('docs.co'), t('docs.coa'), t('docs.phyto'), t('docs.health'), t('docs.packing'), t('docs.invoice'), t('docs.bl')].map((doc) => (
                        <li key={doc} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                          <Icon name="task_alt" size={16} className="text-green-500" aria-hidden />
                          {doc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-brandNavy dark:text-white mb-3">{t('ui.export_markets')}</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.exportMarkets.map((m) => (
                        <span key={m} className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium px-3 py-1.5 rounded-full">
                          {t(`ui.markets.${marketKey(m)}`, { defaultValue: m })}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* FAQ section */}
              {product.faqs.length > 0 && (
                <div className="mt-16">
                  <h2 className="text-2xl font-display font-bold text-brandNavy dark:text-white mb-6">
                    {t('ui.rfq_heading', { name: productName })}
                  </h2>
                  <FAQAccordion faqs={translatedFaqs} />
                </div>
              )}
            </div>

            {/* Right: sticky RFQ sidebar */}
            <div className="lg:sticky lg:top-24 h-fit">
              <RFQForm productName={productName} compact />

              {/* WhatsApp CTA card */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center gap-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-4 hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#25D366' }}>
                  <svg viewBox="0 0 32 32" className="w-6 h-6 fill-white" aria-hidden="true">
                    <path d="M16.003 3C9.376 3 4 8.373 4 15.001c0 2.118.554 4.11 1.524 5.84L4 29l8.368-1.51A12.018 12.018 0 0 0 16.003 28C22.63 28 28 22.627 28 16s-5.37-13-11.997-13zm5.82 15.662c-.319-.159-1.887-.93-2.18-1.036-.292-.106-.505-.159-.717.16-.213.318-.824 1.036-.01 1.248.822.213 1.856-.187 2.074-.4.213-.213.319-.531.16-.849-.16-.319-.506-.822-.717-1.036-.213-.213-.453-.265-.663-.053-.213.213-.824.665-.93 1.035-.106.37.107.797.319 1.036.213.24.824.664 1.142.877.318.212.877.424 1.46.371.584-.053 1.035-.318 1.195-.637.16-.318.16-.796 0-1.114z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-green-800 dark:text-green-400 text-sm">{t('ui.whatsapp_chat')}</div>
                  <div className="text-green-600 dark:text-green-500 text-xs">{t('ui.whatsapp_reply_time')}</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Products ──────────────────────────────────── */}
      {related.length > 0 && (
        <section className="py-16 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-display font-bold text-brandNavy dark:text-white mb-8">
              {t('ui.related_products')}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((rp) => (
                <Link
                  key={rp.slug}
                  to={`/products/${rp.categorySlug}/${rp.slug}`}
                  className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-md hover:border-primary transition-all"
                >
                  <div className="aspect-[3/2] bg-slate-200 dark:bg-slate-700 overflow-hidden">
                    {rp.heroImage && (
                      <img
                        src={rp.heroImage}
                        alt={t(`products.${rp.slug}.name`, { defaultValue: rp.name })}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-brandNavy dark:text-white group-hover:text-primary transition-colors mb-1">
                      {t(`products.${rp.slug}.name`, { defaultValue: rp.name })}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-xs">
                      {t(`products.${rp.slug}.tagline`, { defaultValue: rp.tagline })}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ProductPage;
