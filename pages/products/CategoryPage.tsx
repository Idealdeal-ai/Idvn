import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getCategoryBySlug, getAllProducts } from '../../data/products';
import SEOHead, { breadcrumbSchema, organizationSchema } from '../../components/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import RFQForm from '../../components/RFQForm';

const WHATSAPP_NUMBER = '84828278808';

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const cat = getCategoryBySlug(category ?? '');

  if (!cat) return <Navigate to="/products" replace />;

  const schema = [
    organizationSchema(),
    breadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Products', url: '/products' },
      { name: cat.name, url: `/products/${cat.slug}` },
    ]),
  ];

  return (
    <>
      <SEOHead
        title={cat.seoTitle}
        description={cat.seoDescription}
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
              { label: 'Home', href: '/' },
              { label: 'Products', href: '/products' },
              { label: cat.name },
            ]}
          />
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl" aria-hidden="true">{cat.icon}</span>
            <span className="bg-primary/20 border border-primary/40 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              {cat.products.length} Products
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            {cat.name}
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mb-8">{cat.description}</p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello! I am interested in ${cat.name} from Vietnam. Please send me a quote.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-amber-500 transition-colors"
            >
              <span className="material-symbols-outlined text-lg" aria-hidden="true">send</span>
              Request Bulk Quote
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-medium px-6 py-3 rounded-xl hover:bg-white/10 transition-colors"
            >
              <span className="material-symbols-outlined text-lg" aria-hidden="true">mail</span>
              Contact an Expert
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
                Why Source {cat.name} from Vietnam?
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {cat.longDescription}
              </p>
              {/* Export markets */}
              <div>
                <h3 className="font-bold text-brandNavy dark:text-white mb-3">
                  Key Export Markets
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.exportMarkets.map((m) => (
                    <span
                      key={m}
                      className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium px-3 py-1.5 rounded-full"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications sidebar */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 h-fit">
              <h3 className="font-bold text-brandNavy dark:text-white mb-4">
                Certifications
              </h3>
              <ul className="space-y-2">
                {cat.certifications.map((cert) => (
                  <li key={cert} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <span className="material-symbols-outlined text-green-500 text-base" aria-hidden="true">verified</span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Product Grid ───────────────────────────────────────── */}
      <section className="py-16 bg-white dark:bg-brandNavy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-brandNavy dark:text-white mb-10">
            {cat.name} Products
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cat.products.map((product) => (
              <Link
                key={product.slug}
                to={`/products/${cat.slug}/${product.slug}`}
                className="group bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:border-primary transition-all duration-300"
              >
                {/* Product image */}
                <div className="aspect-[4/3] bg-slate-200 dark:bg-slate-700 overflow-hidden">
                  {product.heroImage ? (
                    <img
                      src={product.heroImage}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-6xl">
                      {cat.icon}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-brandNavy dark:text-white mb-1 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                    {product.tagline}
                  </p>
                  {/* Key specs preview */}
                  <div className="space-y-1 mb-4">
                    {product.specs.slice(0, 3).map((spec) => (
                      <div key={spec.label} className="flex justify-between text-xs">
                        <span className="text-slate-400">{spec.label}</span>
                        <span className="font-semibold text-slate-600 dark:text-slate-300">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">MOQ: {product.moq}</span>
                    <span className="text-primary font-bold text-sm group-hover:gap-2 flex items-center gap-1 transition-all">
                      View Details
                      <span className="material-symbols-outlined text-base" aria-hidden="true">arrow_forward</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── RFQ Form ──────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold text-brandNavy dark:text-white mb-3">
              Request a {cat.name} Quote
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              Tell us your requirements — we'll respond within 24 hours with pricing and availability.
            </p>
          </div>
          <RFQForm productName={cat.name} />
        </div>
      </section>
    </>
  );
};

export default CategoryPage;
