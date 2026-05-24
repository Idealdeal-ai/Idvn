import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getCountryBySlug } from '../data/countries';
import SEOHead, { breadcrumbSchema, faqSchema, organizationSchema } from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import FAQAccordion from '../components/FAQAccordion';
import RFQForm from '../components/RFQForm';
import Icon from '../components/Icon';

const WHATSAPP_NUMBER = '84828278808';

const CountryPage: React.FC = () => {
  const { country } = useParams<{ country: string }>();
  const data = getCountryBySlug(country ?? '');

  if (!data) return <Navigate to="/products" replace />;

  const schema = [
    organizationSchema(),
    breadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: `Export to ${data.name}`, url: `/export-to-${data.slug}` },
    ]),
    ...(data.faqs.length > 0 ? [faqSchema(data.faqs)] : []),
  ];

  const waMsg = `Hello! I am interested in importing Vietnamese food products to ${data.name}. Please send me more information.`;

  return (
    <>
      <SEOHead
        title={data.seoTitle}
        description={data.seoDescription}
        keywords={data.keywords}
        schema={schema}
      />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative bg-brandNavy text-white pt-28 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(/images/countries/${data.slug}-hero.jpg)` }}
          aria-hidden="true"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brandNavy via-brandNavy/80 to-transparent" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            className="mb-6 text-white/60"
            items={[
              { label: 'Home', href: '/' },
              { label: `Export to ${data.name}` },
            ]}
          />
          <div className="flex items-center gap-4 mb-5">
            <span className="text-6xl" role="img" aria-label={`${data.name} flag`}>{data.flag}</span>
            <div>
              <div className="text-white/60 text-sm font-medium uppercase tracking-wider">{data.region}</div>
              {data.arabicName && (
                <div className="text-white/50 text-lg font-medium" dir="rtl">{data.arabicName}</div>
              )}
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Export to {data.name}
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mb-4">{data.tagline}</p>
          <p className="text-white/60 max-w-2xl mb-8">{data.heroDescription}</p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-amber-500 transition-colors"
            >
              <Icon name="send" size={18} aria-hidden />
              Start Exporting to {data.name}
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-medium px-6 py-3 rounded-xl hover:bg-white/10 transition-colors"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>

      {/* ── Market stats ──────────────────────────────────────── */}
      <div className="bg-primary text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-xs uppercase tracking-widest opacity-70 mb-1">Capital</div>
              <div className="font-bold">{data.capital}</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest opacity-70 mb-1">Population</div>
              <div className="font-bold">{data.population}</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest opacity-70 mb-1">GDP per Capita</div>
              <div className="font-bold">{data.gdpPerCapita}</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest opacity-70 mb-1">Annual Food Imports</div>
              <div className="font-bold">{data.importVolume}</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Why Vietnam ───────────────────────────────────────── */}
      <section className="py-20 bg-white dark:bg-brandNavy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-brandNavy dark:text-white mb-6">
                Why {data.name} Importers Choose Vietnam
              </h2>
              <div className="space-y-5">
                {data.whyVietnam.map((reason, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-bold text-sm">{i + 1}</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{reason}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Shipping info */}
            <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold text-brandNavy dark:text-white mb-6">
                Shipping to {data.name}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="schedule" className="text-primary mt-0.5" aria-hidden />
                  <div>
                    <div className="text-sm font-bold text-brandNavy dark:text-white">Transit Time</div>
                    <div className="text-slate-500 dark:text-slate-400 text-sm">{data.shippingInfo.transitDays} days from Vietnam</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="anchor" className="text-primary mt-0.5" aria-hidden />
                  <div>
                    <div className="text-sm font-bold text-brandNavy dark:text-white">Main Ports</div>
                    <div className="text-slate-500 dark:text-slate-400 text-sm">{data.shippingInfo.mainPorts.join(' · ')}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="receipt" className="text-primary mt-0.5" aria-hidden />
                  <div>
                    <div className="text-sm font-bold text-brandNavy dark:text-white">Incoterms</div>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {data.shippingInfo.incoterms.map((t) => (
                        <span key={t} className="bg-primary/10 text-primary text-xs font-bold px-2 py-0.5 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="payments" className="text-primary mt-0.5" aria-hidden />
                  <div>
                    <div className="text-sm font-bold text-brandNavy dark:text-white">Payment Methods</div>
                    <div className="text-slate-500 dark:text-slate-400 text-sm">{data.shippingInfo.paymentMethods.join(' · ')}</div>
                  </div>
                </div>
              </div>

              {/* Required certifications */}
              <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                <div className="text-sm font-bold text-brandNavy dark:text-white mb-3">Required Certifications</div>
                <ul className="space-y-1.5">
                  {data.certifications.map((cert) => (
                    <li key={cert} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                      <Icon name="verified" size={16} className="text-green-500" aria-hidden />
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Top Products ──────────────────────────────────────── */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-brandNavy dark:text-white mb-10 text-center">
            Top Vietnamese Products for {data.name}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.topProducts.map((product) => (
              <Link
                key={product.slug}
                to={`/products/${product.categorySlug}/${product.slug}`}
                className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:border-primary transition-all"
              >
                <div className="aspect-[3/2] bg-slate-200 dark:bg-slate-700 overflow-hidden">
                  {product.image && (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-brandNavy dark:text-white group-hover:text-primary transition-colors mb-1">
                    {product.name}
                  </h3>
                  <p className="text-slate-500 text-sm mb-3">{product.description}</p>
                  {product.annualVolume && (
                    <div className="text-xs text-slate-400">
                      <span className="font-semibold text-primary">{product.annualVolume}</span> exported annually
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Regulations ───────────────────────────────────────── */}
      {data.regulations && data.regulations.length > 0 && (
        <section className="py-16 bg-white dark:bg-brandNavy">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-display font-bold text-brandNavy dark:text-white mb-8 text-center">
              Import Regulations for {data.name}
            </h2>
            <div className="space-y-4">
              {data.regulations.map((reg, i) => (
                <div
                  key={i}
                  className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5"
                >
                  <div className="font-bold text-brandNavy dark:text-white mb-1">{reg.title}</div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">{reg.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ───────────────────────────────────────────────── */}
      {data.faqs.length > 0 && (
        <section className="py-16 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-display font-bold text-brandNavy dark:text-white mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <FAQAccordion faqs={data.faqs} />
          </div>
        </section>
      )}

      {/* ── RFQ ───────────────────────────────────────────────── */}
      <section className="py-20 bg-white dark:bg-brandNavy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold text-brandNavy dark:text-white mb-3">
              Ready to Import from Vietnam to {data.name}?
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              Our export specialists will guide you through product selection, documentation, and shipping.
            </p>
          </div>
          <RFQForm productName={`Export to ${data.name}`} />
        </div>
      </section>
    </>
  );
};

export default CountryPage;
