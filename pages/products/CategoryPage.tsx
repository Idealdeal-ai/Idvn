import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  getCategoryBySlug,
  getCategoriesBySlugs,
} from '../../data/products';
import SEOHead, { breadcrumbSchema, organizationSchema } from '../../components/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import RFQForm from '../../components/RFQForm';
import ProductCard from '../../components/ProductCard';
import Icon from '../../components/Icon';

const WHATSAPP_NUMBER = '84828278808';

/* ─── Static export-info badges shown on every category page ──────────────── */
const INCOTERMS = ['FOB', 'CIF', 'CFR', 'DDP'];
const PAYMENT_TERMS = ['T/T', 'L/C at sight', 'D/P'];

/* ── Convert a market name to a locale key slug ──────────────── */
const marketKey = (m: string) => m.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string; lang?: string }>();
  const { t } = useTranslation('products');
  const cat = getCategoryBySlug(category ?? '');

  if (!cat) return <Navigate to="/products" replace />;

  /* ── Translated strings for this category ── */
  const catName        = t(`categories.${cat.slug}.name`,          { defaultValue: cat.name });
  const catDesc        = t(`categories.${cat.slug}.description`,   { defaultValue: cat.description });
  const catLongDesc    = t(`categories.${cat.slug}.longDescription`, { defaultValue: cat.longDescription });
  const catOemDesc     = cat.oemDescription
    ? t(`categories.${cat.slug}.oemDescription`, { defaultValue: cat.oemDescription })
    : null;

  /* First product used for container / MOQ preview in Export Info */
  const firstProduct = cat.products[0];

  /* Related categories lookup */
  const relatedCategories = getCategoriesBySlugs(cat.relatedCategorySlugs ?? []);

  const schema = [
    organizationSchema(),
    breadcrumbSchema([
      { name: t('ui.home'),     url: '/' },
      { name: t('ui.products'), url: '/products' },
      { name: catName,          url: `/products/${cat.slug}` },
    ]),
  ];

  return (
    <>
      <SEOHead
        title={t('seo.category_title', { name: catName })}
        description={t('seo.category_desc', { name: catName })}
        keywords={cat.keywords}
        schema={schema}
      />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative bg-brandNavy text-white pt-28 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${cat.heroImage})` }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            className="mb-6 text-white/60"
            items={[
              { label: t('ui.home'),     href: '/' },
              { label: t('ui.products'), href: '/products' },
              { label: catName },
            ]}
          />
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl" aria-hidden="true">{cat.icon}</span>
            <span className="bg-primary/20 border border-primary/40 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              {t(cat.products.length === 1 ? 'ui.product_count_one' : 'ui.product_count_other', {
                count: cat.products.length,
              })}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            {catName}
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mb-8">{catDesc}</p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                t('ui.whatsapp_category_msg', {
                  defaultValue: `Hello! I am interested in ${catName} from Vietnam. Please send me a quote.`,
                  name: catName,
                })
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-amber-500 transition-colors"
            >
              <Icon name="send" size={18} aria-hidden />
              {t('ui.request_bulk_quote')}
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
      </section>

      {/* ── Category intro + certifications ───────────────────── */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-brandNavy dark:text-white mb-4">
                {t('ui.why_source_from', { name: catName })}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {catLongDesc}
              </p>
              {/* Export markets */}
              <div>
                <h3 className="font-bold text-brandNavy dark:text-white mb-3">
                  {t('ui.key_export_markets')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.exportMarkets.map((m) => (
                    <span
                      key={m}
                      className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium px-3 py-1.5 rounded-full"
                    >
                      {t(`ui.markets.${marketKey(m)}`, { defaultValue: m })}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications sidebar */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 h-fit">
              <h3 className="font-bold text-brandNavy dark:text-white mb-4">
                {t('ui.certifications')}
              </h3>
              <ul className="space-y-2">
                {cat.certifications.map((cert) => (
                  <li
                    key={cert}
                    className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300"
                  >
                    <Icon name="verified" size={16} className="text-green-500" aria-hidden />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Export Information ─────────────────────────────────── */}
      <section className="py-14 bg-white dark:bg-brandNavy border-y border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-brandNavy dark:text-white mb-8 flex items-center gap-2">
            <Icon name="local_shipping" size={24} className="text-primary" aria-hidden />
            {t('ui.export_info_title')}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {/* MOQ */}
            {firstProduct && (
              <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="inventory_2" className="text-primary" aria-hidden />
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                    {t('ui.min_order')}
                  </span>
                </div>
                <p className="text-sm font-bold text-brandNavy dark:text-white">
                  {t(`products.${firstProduct.slug}.moq`, { defaultValue: firstProduct.moq })}
                </p>
              </div>
            )}

            {/* Container capacity */}
            {firstProduct?.containerCapacity && (
              <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="directions_boat" className="text-primary" aria-hidden />
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                    {t('ui.container')}
                  </span>
                </div>
                <p className="text-sm font-bold text-brandNavy dark:text-white">
                  {t(`products.${firstProduct.slug}.containerCapacity`, { defaultValue: firstProduct.containerCapacity })}
                </p>
              </div>
            )}

            {/* Incoterms */}
            <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="gavel" className="text-primary" aria-hidden />
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                  {t('ui.incoterms')}
                </span>
              </div>
              <div className="flex flex-wrap gap-1">
                {INCOTERMS.map((term) => (
                  <span
                    key={term}
                    className="text-[11px] font-bold bg-primary/10 text-primary px-2 py-0.5 rounded"
                  >
                    {term}
                  </span>
                ))}
              </div>
            </div>

            {/* Payment */}
            <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="payments" className="text-primary" aria-hidden />
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                  {t('ui.payment_terms')}
                </span>
              </div>
              <div className="flex flex-wrap gap-1">
                {PAYMENT_TERMS.map((term) => (
                  <span
                    key={term}
                    className="text-[11px] font-bold bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 px-2 py-0.5 rounded"
                  >
                    {term}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* OEM / Private label strip */}
          {catOemDesc && (
            <div className="flex items-start gap-3 bg-primary/5 border border-primary/20 rounded-xl px-5 py-4">
              <Icon name="precision_manufacturing" size={24} className="text-primary mt-0.5 shrink-0" aria-hidden />
              <p className="text-sm text-slate-700 dark:text-slate-200">
                <span className="font-bold text-primary">{t('ui.oem_label')} </span>
                {catOemDesc}
              </p>
            </div>
          )}

          {/* Packaging options from first product */}
          {firstProduct?.packagingOptions && firstProduct.packagingOptions.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-bold text-slate-600 dark:text-slate-300 mb-3">
                {t('ui.packaging')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {firstProduct.packagingOptions.map((opt, pi) => (
                  <span
                    key={opt}
                    className="inline-flex items-center gap-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium px-3 py-1.5 rounded-full"
                  >
                    <Icon name="check_circle" className="text-slate-400 text-[13px]" aria-hidden />
                    {t(`products.${firstProduct.slug}.packagingOptions.${pi}`, { defaultValue: opt })}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Product Grid ───────────────────────────────────────── */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
            <div>
              <h2 className="text-3xl font-display font-bold text-brandNavy dark:text-white">
                {t('ui.products_section', { name: catName })}
              </h2>
              <p className="text-slate-500 dark:text-slate-400 mt-1 text-sm">
                {t('ui.products_available', { count: cat.products.length })}
              </p>
            </div>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                t('ui.whatsapp_bulk_msg', {
                  defaultValue: `Hi, I need a bulk quote for ${catName} from Vietnam.`,
                  name: catName,
                })
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-amber-500 transition-colors"
            >
              <Icon name="send" size={16} aria-hidden />
              {t('ui.whatsapp_cta')}
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cat.products.map((product) => (
              <ProductCard
                key={product.slug}
                product={product}
                categorySlug={cat.slug}
                categoryIcon={cat.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Industries / Categories ───────────────────── */}
      {relatedCategories.length > 0 && (
        <section className="py-16 bg-white dark:bg-brandNavy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-brandNavy dark:text-white mb-8">
              {t('ui.related_categories')}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedCategories.map((rc) => (
                <Link
                  key={rc.slug}
                  to={`/products/${rc.slug}`}
                  className="group flex items-center gap-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 hover:border-primary hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span className="text-4xl shrink-0" aria-hidden="true">
                    {rc.icon}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-bold text-brandNavy dark:text-white group-hover:text-primary transition-colors text-sm leading-snug">
                      {t(`categories.${rc.slug}.name`, { defaultValue: rc.name })}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5 line-clamp-2">
                      {t(`categories.${rc.slug}.tagline`, { defaultValue: rc.tagline })}
                    </p>
                    <span className="inline-flex items-center gap-1 text-primary text-xs font-bold mt-2">
                      {t('ui.view_details')}
                      <Icon name="arrow_forward" size={14} aria-hidden />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── RFQ Form ──────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold text-brandNavy dark:text-white mb-3">
              {t('ui.request_category_quote', { name: catName })}
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              {t('ui.rfq_sub')}
            </p>
          </div>
          <RFQForm productName={catName} />
        </div>
      </section>
    </>
  );
};

export default CategoryPage;
