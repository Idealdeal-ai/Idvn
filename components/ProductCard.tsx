import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Product } from '../data/products';
import Icon from './Icon';

interface ProductCardProps {
  product: Product;
  categorySlug: string;
  /** Emoji icon shown when the product has no heroImage */
  categoryIcon?: string;
  /** 'default' = 4/3 image, 'compact' = 3/2 image (sidebar / related lists) */
  variant?: 'default' | 'compact';
}

/**
 * Reusable B2B product card.
 * ─ Hover: lift + shadow + border highlight + image zoom
 * ─ Overlay badges: category label (top-left) and HS code (bottom-right)
 * ─ Body: name, tagline, first 3 specs, MOQ + CTA footer
 */
const ProductCard: React.FC<ProductCardProps> = ({
  product,
  categorySlug,
  categoryIcon = '📦',
  variant = 'default',
}) => {
  const { t } = useTranslation('products');
  const href = `/products/${categorySlug}/${product.slug}`;

  const productName    = t(`products.${product.slug}.name`,    { defaultValue: product.name });
  const productTagline = t(`products.${product.slug}.tagline`, { defaultValue: product.tagline });
  const catBadge       = t(`categories.${categorySlug}.name`,  { defaultValue: product.category });

  return (
    <Link
      to={href}
      className="group flex flex-col bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-2xl hover:border-primary hover:-translate-y-1 transition-all duration-300"
      aria-label={t('ui.view_product_details', { name: productName, defaultValue: `View ${productName} details` })}
    >
      {/* ── Image ───────────────────────────────────────────────── */}
      <div
        className={`relative overflow-hidden bg-slate-100 dark:bg-slate-700 ${
          variant === 'compact' ? 'aspect-[3/2]' : 'aspect-[4/3]'
        }`}
      >
        {product.heroImage ? (
          <img
            src={product.heroImage}
            alt={productName}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-5xl select-none">
            {categoryIcon}
          </div>
        )}

        {/* Category badge — top left */}
        <span className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide">
          {catBadge}
        </span>

        {/* HS Code chip — bottom right */}
        {product.hsCode && (
          <span className="absolute bottom-3 right-3 bg-brandNavy/80 backdrop-blur-sm text-white/60 text-[10px] font-mono px-2 py-0.5 rounded">
            HS&nbsp;{product.hsCode}
          </span>
        )}
      </div>

      {/* ── Body ────────────────────────────────────────────────── */}
      <div className="flex flex-col flex-1 p-5">
        {/* Title */}
        <h3 className="text-[15px] font-bold text-brandNavy dark:text-white mb-1.5 group-hover:text-primary transition-colors leading-snug line-clamp-2">
          {productName}
        </h3>

        {/* Tagline */}
        <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed line-clamp-2 flex-1 mb-3">
          {productTagline}
        </p>

        {/* Spec preview — first 3 rows */}
        {product.specs.length > 0 && (
          <div className="border-t border-slate-100 dark:border-slate-700/60 pt-3 mb-3 space-y-1.5">
            {product.specs.slice(0, 3).map((spec, i) => (
              <div key={spec.label} className="flex justify-between gap-2 text-xs">
                <span className="text-slate-400 dark:text-slate-500 shrink-0">
                  {t(`specLabels.${spec.label}`, { defaultValue: spec.label })}
                </span>
                <span className="font-semibold text-slate-700 dark:text-slate-200 text-right truncate">
                  {t(`products.${product.slug}.specs.${i}.value`, { defaultValue: spec.value })}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Footer: MOQ + CTA */}
        <div className="border-t border-slate-100 dark:border-slate-700/60 pt-3 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1 min-w-0">
            <Icon name="inventory_2" size={14} className="text-slate-400 shrink-0" aria-hidden />
            <span className="text-[11px] text-slate-400 font-medium truncate">
              {t(`products.${product.slug}.moq`, { defaultValue: product.moq })}
            </span>
          </div>

          <span className="flex items-center gap-1 text-primary font-bold text-xs group-hover:gap-2 transition-all shrink-0 whitespace-nowrap">
            {t('ui.get_quote')}
            <Icon name="arrow_forward" size={14} aria-hidden />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
