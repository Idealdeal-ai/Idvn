import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead, { breadcrumbSchema, organizationSchema } from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import Icon from '../components/Icon';

const WHATSAPP_NUMBER = '84828278808';

interface Industry {
  icon: string;
  name: string;
  description: string;
  topProducts: { name: string; href: string }[];
  topMarkets: string[];
  badge?: string;
}

const industries: Industry[] = [
  {
    icon: '🏪',
    name: 'Food Retail & Supermarkets',
    badge: 'Highest Volume',
    description:
      'Supermarket chains, hypermarkets, and grocery retailers sourcing bulk staples and branded FMCG lines from Vietnam. We handle private label programs, consistent supply chains, and retail-ready packaging that meets GCC, European, and African shelf requirements.',
    topProducts: [
      { name: 'Cashew Nuts W320', href: '/products/cashew-nuts/cashew-nuts-w320' },
      { name: 'Jasmine Rice', href: '/products/rice/jasmine-rice' },
      { name: 'Robusta Coffee Beans', href: '/products/coffee/robusta-coffee-beans' },
      { name: 'Black Pepper', href: '/products/spices/black-pepper-bulk' },
    ],
    topMarkets: ['Saudi Arabia', 'UAE', 'Egypt', 'France', 'Germany'],
  },
  {
    icon: '🏨',
    name: 'Hospitality & Food Service',
    badge: 'Fast Growing',
    description:
      "Hotels, restaurant chains, airline catering companies, and institutional food service operators sourcing bulk ingredients. Vietnam's frozen seafood, specialty rice, and premium spices are a staple in GCC hotel supply chains and European restaurant groups.",
    topProducts: [
      { name: 'Frozen White Shrimp', href: '/products/frozen-seafood/frozen-white-shrimp' },
      { name: 'Jasmine Rice', href: '/products/rice/jasmine-rice' },
      { name: 'Cashew Nuts W180', href: '/products/cashew-nuts/cashew-nuts-w180' },
      { name: 'Arabica Coffee', href: '/products/coffee/arabica-coffee-beans' },
    ],
    topMarkets: ['UAE', 'Qatar', 'Saudi Arabia', 'UK', 'Netherlands'],
  },
  {
    icon: '🏭',
    name: 'Food Processing & Manufacturing',
    badge: 'B2B Core',
    description:
      'Food manufacturers, confectionery producers, snack companies, and ingredient processors sourcing raw materials from Vietnam. Our products arrive to specification — moisture content, screen size, grade — to feed directly into production lines.',
    topProducts: [
      { name: 'Cashew Nuts W240', href: '/products/cashew-nuts/cashew-nuts-w240' },
      { name: 'Robusta Coffee Beans', href: '/products/coffee/robusta-coffee-beans' },
      { name: 'Black Pepper Bulk', href: '/products/spices/black-pepper-bulk' },
      { name: 'Cashew Nuts W320', href: '/products/cashew-nuts/cashew-nuts-w320' },
    ],
    topMarkets: ['Germany', 'Netherlands', 'India', 'Turkey', 'Egypt'],
  },
  {
    icon: '🚢',
    name: 'Wholesale Distribution & Trading',
    badge: 'High Volume',
    description:
      'Wholesale distributors, commodity traders, and import companies buying in bulk for onward distribution. We offer full container loads (FCL), competitive FOB/CFR pricing, and flexible incoterm arrangements suited to trading companies.',
    topProducts: [
      { name: 'Cashew Nuts W320', href: '/products/cashew-nuts/cashew-nuts-w320' },
      { name: 'Jasmine Rice', href: '/products/rice/jasmine-rice' },
      { name: 'Frozen White Shrimp', href: '/products/frozen-seafood/frozen-white-shrimp' },
      { name: 'Black Pepper', href: '/products/spices/black-pepper-bulk' },
    ],
    topMarkets: ['UAE (re-export hub)', 'Egypt', 'Nigeria', 'South Africa', 'Pakistan'],
  },
  {
    icon: '🛒',
    name: 'E-Commerce & Online Retail',
    badge: 'Emerging',
    description:
      'Online food retailers, DTC brands, and marketplace sellers sourcing premium Vietnamese products for end consumers. We support smaller MOQs, consumer-pack labeling, and private label programs designed for e-commerce channels.',
    topProducts: [
      { name: 'Arabica Coffee Beans', href: '/products/coffee/arabica-coffee-beans' },
      { name: 'Cashew Nuts W180', href: '/products/cashew-nuts/cashew-nuts-w180' },
      { name: 'Cashew Nuts W320', href: '/products/cashew-nuts/cashew-nuts-w320' },
      { name: 'Black Pepper', href: '/products/spices/black-pepper-bulk' },
    ],
    topMarkets: ['UK', 'USA', 'Australia', 'Canada', 'Germany'],
  },
  {
    icon: '🏥',
    name: 'Health Food & Organic Sector',
    badge: 'Premium Tier',
    description:
      'Health food retailers, organic brands, and natural food companies sourcing certified products. Vietnam produces USDA Organic and EU Organic certified cashews, specialty arabica coffees, and traceable spices with full audit trails.',
    topProducts: [
      { name: 'Arabica Coffee Beans', href: '/products/coffee/arabica-coffee-beans' },
      { name: 'Cashew Nuts W180', href: '/products/cashew-nuts/cashew-nuts-w180' },
      { name: 'Jasmine Rice', href: '/products/rice/jasmine-rice' },
    ],
    topMarkets: ['Germany', 'France', 'Netherlands', 'USA', 'Australia'],
  },
];

const stats = [
  { value: '6+', label: 'Industries Served' },
  { value: '30+', label: 'Countries Reached' },
  { value: '500+', label: 'B2B Clients' },
  { value: '$50M+', label: 'Annual Export Value' },
];

const schema = [
  organizationSchema(),
  breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Industries', url: '/industries' },
  ]),
];

const Industries: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Industries We Serve | Vietnam Food Export for Retail, HORECA, Manufacturing & More"
        description="Ideal Deal Vietnam supplies food importers across retail, hospitality, food manufacturing, wholesale distribution, e-commerce, and health food sectors. Halal certified. MOQ 1 container."
        keywords={[
          'Vietnam food export industries',
          'Vietnamese food suppliers',
          'HORECA food supplier Vietnam',
          'food manufacturing ingredients Vietnam',
          'wholesale Vietnamese products',
          'halal food Vietnam',
        ]}
        schema={schema}
      />

      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="bg-brandNavy text-white pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            className="mb-6 text-white/60"
            items={[
              { label: 'Home', href: '/' },
              { label: 'Industries' },
            ]}
          />
          <div className="max-w-3xl">
            <span className="inline-block bg-primary/20 border border-primary/40 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
              Industries We Serve
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-5">
              Vietnamese Food Exports Across Every Sector
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              From supermarket chains in Saudi Arabia to food manufacturers in Germany — we supply premium Vietnamese products to buyers across six major industries in 30+ countries.
            </p>
          </div>
        </div>
      </section>

      {/* ── Stats bar ───────────────────────────────────────── */}
      <div className="bg-primary text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-display font-bold">{s.value}</div>
                <div className="text-xs uppercase tracking-widest opacity-70 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Industries list ─────────────────────────────────── */}
      <section className="py-20 bg-white dark:bg-brandNavy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {industries.map((industry, i) => (
              <div
                key={i}
                className="bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:border-primary transition-colors"
              >
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Left: Industry info */}
                  <div className="lg:col-span-2 p-8 lg:p-10">
                    <div className="flex items-start gap-4 mb-5">
                      <span className="text-4xl" aria-hidden="true">{industry.icon}</span>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h2 className="text-xl font-display font-bold text-brandNavy dark:text-white">
                            {industry.name}
                          </h2>
                          {industry.badge && (
                            <span className="bg-primary/10 text-primary text-xs font-bold px-2.5 py-0.5 rounded-full">
                              {industry.badge}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                      {industry.description}
                    </p>
                    {/* Top markets */}
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                        Key Markets
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {industry.topMarkets.map((market) => (
                          <span
                            key={market}
                            className="bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 text-xs font-medium px-3 py-1 rounded-full"
                          >
                            {market}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Products */}
                  <div className="bg-white dark:bg-slate-900 p-8 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-700">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                      Top Products
                    </div>
                    <div className="space-y-2">
                      {industry.topProducts.map((product) => (
                        <Link
                          key={product.name}
                          to={product.href}
                          className="flex items-center justify-between text-sm font-medium text-brandNavy dark:text-white hover:text-primary transition-colors group py-1.5 border-b border-slate-100 dark:border-slate-800 last:border-0"
                        >
                          <span>{product.name}</span>
                          <Icon name="arrow_forward" size={16} className="text-slate-300 group-hover:text-primary transition-colors" aria-hidden />
                        </Link>
                      ))}
                    </div>
                    <Link
                      to="/products"
                      className="inline-flex items-center gap-1 text-primary font-bold text-sm mt-5 hover:gap-2 transition-all"
                    >
                      Browse all products
                      <Icon name="arrow_forward" size={16} aria-hidden />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Country destinations ────────────────────────────── */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-bold text-brandNavy dark:text-white mb-4">
              We Export to Your Market
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              Dedicated export programs for GCC and MENA buyers with Halal certification, regional compliance, and direct container shipping.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { flag: '🇸🇦', name: 'Saudi Arabia', slug: 'saudi-arabia' },
              { flag: '🇦🇪', name: 'UAE', slug: 'uae' },
              { flag: '🇪🇬', name: 'Egypt', slug: 'egypt' },
              { flag: '🇴🇲', name: 'Oman', slug: 'oman' },
              { flag: '🇶🇦', name: 'Qatar', slug: 'qatar' },
            ].map((country) => (
              <Link
                key={country.slug}
                to={`/export-to-${country.slug}`}
                className="group bg-white dark:bg-slate-800 rounded-2xl p-6 text-center border border-slate-200 dark:border-slate-700 hover:border-primary hover:shadow-md transition-all"
              >
                <div className="text-4xl mb-3" role="img" aria-label={country.name}>{country.flag}</div>
                <div className="font-bold text-sm text-brandNavy dark:text-white group-hover:text-primary transition-colors">
                  Export to {country.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services strip ──────────────────────────────────── */}
      <section className="py-16 bg-white dark:bg-brandNavy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-bold text-brandNavy dark:text-white mb-4">
              Services Built for B2B Buyers
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              From private label manufacturing to end-to-end logistics — we cover every step of the supply chain.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: 'label', name: 'Private Label', slug: 'private-label', desc: 'Your brand on Vietnamese products.' },
              { icon: 'precision_manufacturing', name: 'OEM Manufacturing', slug: 'oem-manufacturing', desc: 'Custom formulations and specifications.' },
              { icon: 'local_shipping', name: 'Logistics & Shipping', slug: 'logistics', desc: 'Door-to-door freight management.' },
              { icon: 'verified', name: 'Quality Control', slug: 'quality-control', desc: 'Pre-shipment inspection and grading.' },
              { icon: 'description', name: 'Export Support', slug: 'export-support', desc: 'Full documentation and compliance.' },
            ].map((svc) => (
              <Link
                key={svc.slug}
                to={`/services/${svc.slug}`}
                className="group flex items-start gap-4 p-5 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name={svc.icon} className="text-primary" aria-hidden />
                </div>
                <div>
                  <div className="font-bold text-brandNavy dark:text-white group-hover:text-primary transition-colors mb-0.5">
                    {svc.name}
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">{svc.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="py-20 bg-brandNavy text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-4">
            Ready to Source from Vietnam?
          </h2>
          <p className="text-white/70 mb-8">
            Our export team works with buyers across all industries. Tell us what you need — we'll source it, certify it, and ship it.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello! I am interested in sourcing Vietnamese food products for my business.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white font-bold px-8 py-3 rounded-xl hover:bg-amber-500 transition-colors inline-flex items-center gap-2"
            >
              <Icon name="chat" size={18} aria-hidden />
              WhatsApp Us Now
            </a>
            <Link
              to="/contact"
              className="border border-white/30 text-white font-medium px-8 py-3 rounded-xl hover:bg-white/10 transition-colors"
            >
              Send an Inquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Industries;
