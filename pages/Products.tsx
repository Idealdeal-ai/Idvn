import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../App';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import Icon from '../components/Icon';

// ── Types ──────────────────────────────────────────────────────────────────────

interface ProductCardProps {
  category: string;
  title: string;
  desc: string;
  infoLabel: string;
  infoValue: string;
  images: string[];
  categorySlug?: string;
  onInteraction?: () => void;
}

interface ConsumerGoodsCardProps {
  image: string;
  title: string;
  slug: string;
  label: string;
  desc: string;
  highlights: string[];
  onInteraction?: () => void;
}

// ── ProductCarousel ────────────────────────────────────────────────────────────

const ProductCarousel: React.FC<{ images: string[]; title: string; onInteraction?: () => void }> = ({
  images,
  title,
  onInteraction,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentIndex((prev) => (prev + 1) % images.length);
    if (onInteraction) onInteraction();
  };

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    if (onInteraction) onInteraction();
  };

  return (
    <div className="relative h-64 overflow-hidden group/carousel rounded-t-lg">
      <div
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${title} view ${idx + 1}`}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-primary border border-white/30"
          >
            <Icon name="chevron_left" aria-hidden />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-primary border border-white/30"
          >
            <Icon name="chevron_right" aria-hidden />
          </button>
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {images.map((_, idx) => (
              <div
                key={idx}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  idx === currentIndex ? 'bg-primary w-4' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// ── AgricultureCard ────────────────────────────────────────────────────────────

const AgricultureCard: React.FC<ProductCardProps> = ({
  category,
  title,
  desc,
  infoLabel,
  infoValue,
  images,
  categorySlug,
  onInteraction,
}) => {
  const { t: tp } = useTranslation('products');

  const cardContent = (
    <div className="bg-white dark:bg-slate-900 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col border border-slate-100 dark:border-slate-800 h-full">
      <ProductCarousel images={images} title={title} onInteraction={onInteraction} />
      <div className="p-8 flex flex-col flex-grow">
        <span className="text-[10px] font-black text-primary tracking-[0.2em] uppercase mb-2 block">
          {category}
        </span>
        <h3 className="text-xl font-bold text-brandNavy dark:text-white mb-4 leading-tight group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6 flex-grow">
          {desc}
        </p>
        <div className="flex justify-between items-center pt-6 border-t border-slate-50 dark:border-slate-800">
          <span className="text-[11px] font-medium text-slate-400 tracking-wide">
            {infoLabel}: {infoValue}
          </span>
          {categorySlug && (
            <span className="text-[11px] font-bold text-primary tracking-wide flex items-center gap-1 group-hover:gap-2 transition-all">
              {tp('ui.view_details')}
              <Icon name="arrow_forward" size={14} aria-hidden />
            </span>
          )}
        </div>
      </div>
    </div>
  );

  if (categorySlug) {
    return (
      <Link to={`/products/${categorySlug}`} className="block">
        {cardContent}
      </Link>
    );
  }
  return cardContent;
};

// ── ConsumerGoodsCard ──────────────────────────────────────────────────────────

const ConsumerGoodsCard: React.FC<ConsumerGoodsCardProps> = ({
  image,
  title,
  slug,
  label,
  desc,
  highlights,
  onInteraction,
}) => {
  const { t: tp } = useTranslation('products');

  return (
    <Link
      to={`/products/${slug}`}
      onClick={onInteraction}
      className="relative rounded-2xl overflow-hidden flex flex-col justify-end group block h-[520px] shadow-md hover:shadow-[0_28px_64px_rgba(0,0,0,0.35)] hover:-translate-y-2 transition-all duration-500 ease-out"
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brandNavy via-brandNavy/50 to-transparent group-hover:via-brandNavy/60 transition-all duration-500" />
      <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
      <div className="relative z-10 p-8 flex flex-col gap-3">
        <span className="text-[10px] font-black text-primary tracking-[0.22em] uppercase">
          {label}
        </span>
        <h3 className="text-2xl font-display font-bold text-white leading-tight group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-slate-300 text-sm leading-relaxed max-h-0 overflow-hidden opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-500 ease-out">
          {desc}
        </p>
        <div className="flex flex-wrap gap-2 mt-1">
          {highlights.map((h, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded text-[10px] font-bold uppercase tracking-wider text-white/80 group-hover:border-primary/40 group-hover:text-white transition-all duration-300"
            >
              {h}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-1.5 pt-3 border-t border-white/10 text-[11px] font-black text-primary tracking-widest uppercase group-hover:gap-3 transition-all duration-300">
          {tp('ui.view_details')}
          <Icon name="arrow_forward" size={14} className="leading-none" aria-hidden />
        </div>
      </div>
    </Link>
  );
};

// ── Products Page ──────────────────────────────────────────────────────────────

const Products: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation('common');
  const { t: tp } = useTranslation('products');

  const isRTL = language === 'ar';

  const [activeTab, setActiveTab] = useState<
    'all_sectors' | 'agriculture' | 'manufacturing' | 'consumer_goods'
  >('all_sectors');

  const tabs: {
    key: 'all_sectors' | 'agriculture' | 'manufacturing' | 'consumer_goods';
    label: string;
  }[] = [
    { key: 'all_sectors', label: t('products_page.all_sectors') },
    { key: 'agriculture', label: t('products_page.agriculture') },
    { key: 'manufacturing', label: t('products_page.manufacturing') },
    { key: 'consumer_goods', label: t('products_page.consumer_goods') },
  ];

  // ── Agriculture data (uses category translations) ──────────────────────────
  const agricultureData = [
    {
      category: t('products_page.agri_exports_badge'),
      title: tp('categories.coffee.name', { defaultValue: 'Coffee' }),
      desc: tp('categories.coffee.tagline', {
        defaultValue: "Vietnam's Finest Coffee for Global Roasters",
      }),
      infoLabel: t('products_page.agri_certifications_label'),
      infoValue: t('products_page.agri_coffee_cert_value'),
      categorySlug: 'coffee',
      images: [
        '/products/optimized/idealdeal-coffee-beans-1.jpg',
        '/products/optimized/idealdeal-coffee-beans-2.jpg',
        '/products/optimized/idealdeal-coffee-beans-3.jpg',
        '/products/optimized/idealdeal-coffee-beans-4.jpg',
        '/products/optimized/idealdeal-coffee-beans-5.jpg',
      ],
    },
    {
      category: t('products_page.agri_premium_grade_badge'),
      title: tp('categories.cashew-nuts.name', { defaultValue: 'Cashew Nuts' }),
      desc: tp('categories.cashew-nuts.tagline', {
        defaultValue: "Vietnam — The World's #1 Cashew Kernel Exporter",
      }),
      infoLabel: t('products_page.agri_packaging_label'),
      infoValue: t('products_page.agri_cashew_pkg_value'),
      categorySlug: 'cashew-nuts',
      images: [
        '/products/optimized/idealdeal-cashew-1.jpg',
        '/products/optimized/idealdeal-cashew-2.jpg',
        '/products/optimized/idealdeal-cashew-3.jpg',
        '/products/optimized/idealdeal-cashew-4.png',
        '/products/optimized/idealdeal-cashew-5.png',
      ],
    },
    {
      category: t('products_page.agri_specialty_badge'),
      title: tp('categories.spices.name', { defaultValue: 'Spices' }),
      desc: tp('categories.spices.tagline', {
        defaultValue: "Vietnamese Spices — The World's Premium Source",
      }),
      infoLabel: t('products_page.agri_origins_label'),
      infoValue: t('products_page.agri_pepper_origin_value'),
      categorySlug: 'spices',
      images: [
        '/products/idealdeal-black-white-pepper.jpg',
        '/products/optimized/idealdeal-blackpepper-2.jpg',
        '/products/optimized/idealdeal-blackpepper-3.jpg',
        '/products/optimized/idealdeal-whitepepper-4.png',
      ],
    },
    {
      category: t('products_page.agri_exports_badge'),
      title: tp('categories.rice.name', { defaultValue: 'Rice' }),
      desc: tp('categories.rice.tagline', {
        defaultValue: 'Mekong Delta Rice — Feeding the World with Quality',
      }),
      infoLabel: t('products_page.agri_varieties_label'),
      infoValue: t('products_page.agri_rice_grade_value'),
      categorySlug: 'rice',
      images: [
        '/products/idealdeal-vietnam-rice-1.jpg',
        '/products/idealdeal-vietnam-rice-2.jpg',
        '/products/idealdeal-vietnam-rice-3.jpg',
        '/products/idealdeal-vietnam-rice-4.jpg',
        '/products/idealdeal-vietnam-rice-5.jpg',
        '/products/idealdeal-vietnam-rice-6.jpg',
        '/products/idealdeal-vietnam-rice-7.jpg',
      ],
    },
    {
      category: t('products_page.agri_specialty_badge'),
      title: tp('categories.green-tea.name', { defaultValue: 'Green Tea' }),
      desc: tp('categories.green-tea.tagline', {
        defaultValue: 'Premium Vietnamese Green Tea — From Thai Nguyen to the World',
      }),
      infoLabel: t('products_page.agri_types_label'),
      infoValue: t('products_page.agri_tea_type_value'),
      categorySlug: 'green-tea',
      images: [
        '/products/idealdeal-green-tea-1.jpg',
        '/products/idealdeal-green-tea-2.jpg',
        '/products/idealdeal-green-tea-3.jpg',
        '/products/idealdeal-green-tea-4.jpg',
        '/products/idealdeal-green-tea-5.jpg',
        '/products/idealdeal-green-tea-6.jpg',
      ],
    },
    {
      category: t('products_page.agri_exports_badge'),
      title: tp('categories.pineapple.name', { defaultValue: 'Pineapple' }),
      desc: tp('categories.pineapple.tagline', {
        defaultValue: "Vietnam's Sweet, Certified Pineapple — Fresh and Processed",
      }),
      infoLabel: t('products_page.agri_packaging_label'),
      infoValue: t('products_page.agri_pineapple_pkg_value'),
      categorySlug: 'pineapple',
      images: [
        '/products/idealdeal-pineapple-1.jpg',
        '/products/idealdeal-pineapple-2.jpg',
        '/products/idealdeal-pineapple-3.jpg',
        '/products/idealdeal-pineapple-4.jpg',
      ],
    },
    {
      category: t('products_page.agri_iqf_export_badge'),
      title: tp('categories.frozen-seafood.name', { defaultValue: 'Frozen Seafood' }),
      desc: tp('categories.frozen-seafood.tagline', {
        defaultValue: "Vietnam's HACCP-Certified Frozen Seafood for Global Markets",
      }),
      infoLabel: t('products_page.agri_certifications_label'),
      infoValue: t('products_page.agri_seafood_cert_value'),
      categorySlug: 'frozen-seafood',
      images: [
        '/products/idealdeal-frozen-fish.jpg',
      ],
    },
  ];

  // ── Manufacturing icons ────────────────────────────────────────────────────
  const manufacturingIcons = [
    {
      icon: 'precision_manufacturing',
      title: t('products_page.mfg_precision_title'),
      desc: t('products_page.mfg_precision_desc'),
      slug: 'precision-components',
    },
    {
      icon: 'chair',
      title: t('products_page.mfg_furniture_title'),
      desc: t('products_page.mfg_furniture_desc'),
      slug: 'wooden-furniture',
    },
    {
      icon: 'eco',
      title: t('products_page.mfg_eco_title'),
      desc: t('products_page.mfg_eco_desc'),
      slug: 'eco-packaging',
    },
    {
      icon: 'architecture',
      title: t('products_page.mfg_raw_title'),
      desc: t('products_page.mfg_raw_desc'),
      slug: 'raw-materials',
    },
  ];

  // ── Consumer Goods data (inside component to use t()) ──────────────────────
  const consumerImages = [
    {
      image: '/products/clean.png',
      title: tp('categories.home-personal-care.name', {
        defaultValue: 'Home & Personal Care',
      }),
      slug: 'home-personal-care',
      label: t('products_page.consumer_oem_personal_care'),
      desc: tp('categories.home-personal-care.tagline', {
        defaultValue: 'OEM Personal Care Products — Private Label from Vietnam',
      }),
      highlights: [
        t('products_page.highlight_private_label'),
        t('products_page.highlight_halal_certified'),
        t('products_page.highlight_moq_1mt'),
      ],
    },
    {
      image: '/products/hygiene.png',
      title: tp('categories.hygiene-disposable.name', {
        defaultValue: 'Hygiene & Disposable Products',
      }),
      slug: 'hygiene-disposable',
      label: t('products_page.consumer_hygiene_export'),
      desc: tp('categories.hygiene-disposable.tagline', {
        defaultValue: 'Bulk Hygiene & Disposable Products from Vietnam',
      }),
      highlights: [
        t('products_page.highlight_iso_13485'),
        t('products_page.highlight_antibacterial'),
        t('products_page.highlight_bulk_supply'),
      ],
    },
    {
      image: '/products/babyC.png',
      title: tp('categories.baby-products.name', { defaultValue: 'Baby Products' }),
      slug: 'baby-products',
      label: t('products_page.consumer_baby_infant'),
      desc: tp('categories.baby-products.tagline', {
        defaultValue: 'OEM Baby & Infant Products from Vietnam',
      }),
      highlights: [
        t('products_page.highlight_en_13432'),
        t('products_page.highlight_derm_tested'),
        t('products_page.highlight_private_label'),
      ],
    },
    {
      image: '/products/mop.png',
      title: tp('categories.cleaning-tools.name', { defaultValue: 'Cleaning Tools' }),
      slug: 'cleaning-tools',
      label: t('products_page.consumer_cleaning_tools'),
      desc: tp('categories.cleaning-tools.tagline', {
        defaultValue: 'Professional Cleaning Tools from Vietnam',
      }),
      highlights: [
        t('products_page.highlight_microfiber_tech'),
        t('products_page.highlight_wholesale'),
        t('products_page.highlight_moq_500_sets'),
      ],
    },
    {
      image: '/products/plastic.png',
      title: tp('categories.plastic-household.name', {
        defaultValue: 'Plastic Household Items',
      }),
      slug: 'plastic-household',
      label: t('products_page.consumer_plastic_goods'),
      desc: tp('categories.plastic-household.tagline', {
        defaultValue: 'Food-Grade Plastic Household Products from Vietnam',
      }),
      highlights: [
        t('products_page.highlight_bpa_free'),
        t('products_page.highlight_food_grade_pp'),
        t('products_page.highlight_custom_colours'),
      ],
    },
    {
      image: '/products/cans.png',
      title: tp('categories.canned-preserved-food.name', {
        defaultValue: 'Canned & Preserved Food',
      }),
      slug: 'canned-preserved-food',
      label: t('products_page.consumer_canned_preserved'),
      desc: tp('categories.canned-preserved-food.tagline', {
        defaultValue: 'Export-Grade Canned & Preserved Food from Vietnam',
      }),
      highlights: [
        t('products_page.highlight_brc_certified'),
        t('products_page.highlight_haccp'),
        t('products_page.highlight_24mo_shelf'),
      ],
    },
    {
      image: '/products/snacks.png',
      title: tp('categories.packaged-food-snacks.name', {
        defaultValue: 'Packaged Food & Snacks',
      }),
      slug: 'packaged-food-snacks',
      label: t('products_page.consumer_packaged_food'),
      desc: tp('categories.packaged-food-snacks.tagline', {
        defaultValue: 'Private Label Packaged Food & Snacks from Vietnam',
      }),
      highlights: [
        t('products_page.highlight_iso_22000'),
        t('products_page.highlight_halal_certified'),
        t('products_page.highlight_private_label'),
      ],
    },
    {
      image: '/products/Food Staples.jpeg',
      title: tp('categories.food-staples.name', { defaultValue: 'Food Staples' }),
      slug: 'food-staples',
      label: t('products_page.consumer_food_staples'),
      desc: tp('categories.food-staples.tagline', {
        defaultValue: 'Bulk Food Staples from Vietnam',
      }),
      highlights: [
        t('products_page.highlight_haccp'),
        t('products_page.highlight_bulk_supply'),
        t('products_page.highlight_wholesale'),
      ],
    },
    {
      image: '/products/Edible Oils & Fats.jpeg',
      title: tp('categories.edible-oils-fats.name', { defaultValue: 'Edible Oils & Fats' }),
      slug: 'edible-oils-fats',
      label: t('products_page.consumer_oils_fats'),
      desc: tp('categories.edible-oils-fats.tagline', {
        defaultValue: 'Refined Edible Oils & Fats from Vietnam',
      }),
      highlights: [
        t('products_page.highlight_ifs_certified'),
        t('products_page.highlight_cold_pressed'),
        t('products_page.highlight_wholesale'),
      ],
    },
  ];

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div
      className="pt-20 bg-[#F8FAFC] dark:bg-background-dark min-h-screen transition-colors duration-300"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <SEOHead
        title={t('seo.products_title', {
          defaultValue: 'Products & Industries — Ideal Deal Vietnam',
        })}
        description={t('seo.products_desc', {
          defaultValue:
            'Explore our range of premium Vietnamese export products: agriculture, manufacturing, consumer goods, and more.',
        })}
      />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative h-[60vh] flex items-center justify-center bg-[#2D4A53]">
        <img
          alt="World Map Overlay"
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            {t('products_page.title')}
          </h1>
          <div
            className={`flex justify-center items-start gap-8 max-w-2xl mx-auto border-primary ${
              isRTL ? 'border-r-4 pr-8 text-right' : 'border-l-4 pl-8 text-left'
            }`}
          >
            <p className="text-xl text-slate-200 font-light leading-relaxed">
              {t('products_page.hero_desc')}
            </p>
          </div>
        </div>

        {/* Floating Tab Bar */}
        <div className="absolute -bottom-10 left-0 w-full px-4 z-[60]">
          <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-full p-2 flex justify-center gap-2 border border-slate-100 dark:border-slate-800">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-8 py-4 rounded-full transition-all font-bold text-[11px] tracking-[0.1em] uppercase whitespace-nowrap ${
                  activeTab === tab.key
                    ? 'bg-brandNavy text-white shadow-lg scale-105'
                    : 'bg-transparent text-black hover:text-brandNavy hover:bg-slate-100 dark:text-white dark:hover:bg-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main content ──────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">

        {/* Agriculture */}
        {(activeTab === 'all_sectors' || activeTab === 'agriculture') && (
          <section className="mb-32">
            <div className="flex items-center gap-6 mb-16">
              <h2 className="text-2xl font-display font-bold text-primary italic whitespace-nowrap">
                {t('products_page.section_agriculture')}
              </h2>
              <div className="h-px w-full bg-slate-200 dark:bg-slate-800/50" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {agricultureData.map((item, idx) => (
                <AgricultureCard key={idx} {...item} />
              ))}
            </div>
          </section>
        )}

        {/* Manufacturing */}
        {(activeTab === 'all_sectors' || activeTab === 'manufacturing') && (
          <section className="mb-32">
            <div className="flex items-center gap-6 mb-16">
              <h2 className="text-2xl font-display font-bold text-primary italic whitespace-nowrap">
                {t('products_page.section_manufacturing')}
              </h2>
              <div className="h-px w-full bg-slate-200 dark:bg-slate-800/50" />
            </div>

            <div className="grid lg:grid-cols-2 gap-10">
              {/* Textile hero card */}
              <Link
                to="/products/textile-apparel"
                className="relative group rounded-2xl overflow-hidden shadow-sm h-[600px] flex flex-col justify-end cursor-pointer"
              >
                <img
                  alt={t('products_page.mfg_textile_title')}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2070&auto=format&fit=crop"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brandNavy via-brandNavy/30 to-transparent" />
                <div className={`relative p-12 text-white z-10 ${isRTL ? 'text-right' : ''}`}>
                  <span className="text-[10px] font-black text-primary tracking-[0.2em] uppercase mb-3 block">
                    {t('products_page.mfg_industrial_scale')}
                  </span>
                  <h3 className="text-4xl font-display font-bold mb-6">
                    {t('products_page.mfg_textile_title')}
                  </h3>
                  <p className="text-slate-300 mb-10 max-w-md leading-relaxed">
                    {t('products_page.mfg_textile_desc')}
                  </p>
                  <div className={`flex gap-4 ${isRTL ? 'justify-end' : ''}`}>
                    <span className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-brandNavy transition-all">
                      {t('products_page.mfg_custom_sizing')}
                    </span>
                    <span className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-brandNavy transition-all">
                      {t('products_page.mfg_sustainable_fabrics')}
                    </span>
                  </div>
                </div>
              </Link>

              {/* Manufacturing sub-grid */}
              <div className="grid grid-cols-2 gap-8">
                {manufacturingIcons.map((item, idx) => (
                  <Link
                    key={idx}
                    to={`/products/${item.slug}`}
                    className="bg-white dark:bg-slate-900 p-10 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all group cursor-pointer block"
                  >
                    <div className="w-14 h-14 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-brandNavy dark:text-primary mb-8 group-hover:scale-110 transition-transform">
                      <Icon name={item.icon} size={28} className="text-brandNavy dark:text-primary" aria-hidden />
                    </div>
                    <h4 className="text-xl font-bold text-brandNavy dark:text-white mb-4 leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Consumer Goods */}
        {(activeTab === 'all_sectors' || activeTab === 'consumer_goods') && (
          <section className="mb-32">
            <div className="flex items-center gap-6 mb-16">
              <h2 className="text-2xl font-display font-bold text-primary italic whitespace-nowrap">
                {t('products_page.section_consumer_goods')}
              </h2>
              <div className="h-px w-full bg-slate-200 dark:bg-slate-800/50" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {consumerImages.map((item, idx) => (
                <ConsumerGoodsCard key={idx} {...item} />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* ── Stats Strip ───────────────────────────────────────────────────── */}
      <section className="bg-brandNavy py-14 text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12">
          {(
            [
              { value: '16+', labelKey: 'stat_products_sourced' },
              { value: '05+', labelKey: 'stat_partner_countries' },
              { value: '98%', labelKey: 'stat_quality_verified' },
              { value: '24/7', labelKey: 'stat_global_support' },
            ] as const
          ).map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center flex-1 border-r last:border-0 border-white/10 px-6"
            >
              <span className="text-5xl font-bold text-primary mb-3">{stat.value}</span>
              <span className="text-[10px] font-black text-slate-400 tracking-[0.2em] uppercase text-center">
                {t(`products_page.${stat.labelKey}`)}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Footer CTA ────────────────────────────────────────────────────── */}
      <section className="py-32 bg-white dark:bg-slate-900 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-5xl font-display font-bold text-primary mb-8 tracking-tight uppercase">
            {t('products_page.talk_to_us')}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xl mb-14 leading-relaxed max-w-3xl mx-auto">
            {t('products_page.cta_desc')}
          </p>
          <Link
            to="/contact"
            className="inline-block px-14 py-6 bg-primary text-brandNavy font-black rounded-xl shadow-[0_20px_40px_rgba(217,168,78,0.2)] hover:shadow-[0_25px_50px_rgba(217,168,78,0.3)] hover:scale-105 active:scale-95 transition-all uppercase tracking-[0.2em] text-sm"
          >
            {t('products_page.contact_us_now')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
