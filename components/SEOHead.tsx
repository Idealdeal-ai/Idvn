import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SchemaMarkup {
  [key: string]: unknown;
}

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  schema?: SchemaMarkup | SchemaMarkup[];
  noindex?: boolean;
}

const BASE_URL = 'https://idealdealvn.com';
const DEFAULT_OG_IMAGE = '/og-image.jpg';

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords = [],
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  schema,
  noindex = false,
}) => {
  const location = useLocation();
  const canonicalUrl = canonical ?? `${BASE_URL}${location.pathname}`;

  useEffect(() => {
    // ── Title ──────────────────────────────────────────────
    document.title = title;

    // ── Helper: upsert a <meta> tag ────────────────────────
    const setMeta = (attr: string, value: string, content: string) => {
      let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${value}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, value);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // ── Helper: upsert a <link> tag ────────────────────────
    const setLink = (rel: string, href: string) => {
      let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    // ── Standard meta ──────────────────────────────────────
    setMeta('name', 'description', description);
    if (keywords.length > 0) setMeta('name', 'keywords', keywords.join(', '));
    setMeta('name', 'robots', noindex ? 'noindex,nofollow' : 'index,follow');

    // ── Canonical ──────────────────────────────────────────
    setLink('canonical', canonicalUrl);

    // ── Open Graph ─────────────────────────────────────────
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:image', ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`);
    setMeta('property', 'og:site_name', 'Ideal Deal Vietnam');

    // ── Twitter Card ───────────────────────────────────────
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`);

    // ── JSON-LD Schema ─────────────────────────────────────
    // Remove any previously injected schema
    document.querySelectorAll('script[data-seo-schema]').forEach((el) => el.remove());

    if (schema) {
      const schemas = Array.isArray(schema) ? schema : [schema];
      schemas.forEach((s, i) => {
        const scriptEl = document.createElement('script');
        scriptEl.type = 'application/ld+json';
        scriptEl.setAttribute('data-seo-schema', String(i));
        scriptEl.textContent = JSON.stringify(s);
        document.head.appendChild(scriptEl);
      });
    }

    // Cleanup on unmount
    return () => {
      document.querySelectorAll('script[data-seo-schema]').forEach((el) => el.remove());
    };
  }, [title, description, keywords, canonicalUrl, ogImage, schema, noindex]);

  return null;
};

// ── Pre-built schema factories ─────────────────────────────────────────────

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Ideal Deal Vietnam',
    legalName: 'CÔNG TY TNHH GIAO DỊCH THƯƠNG MẠI VIỆT NAM',
    url: 'https://idealdealvn.com',
    logo: 'https://idealdealvn.com/ideal-deal-vn-logo.png',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+84-828-278-808',
        contactType: 'customer service',
        availableLanguage: ['English', 'Arabic', 'Vietnamese'],
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '103 Đ. Âu Cơ, Tứ Liên',
      addressLocality: 'Tây Hồ',
      addressRegion: 'Hà Nội',
      addressCountry: 'VN',
    },
    email: 'info@idealdealvn.com',
    sameAs: [],
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `https://idealdealvn.com${item.url}`,
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function productSchema(opts: {
  name: string;
  description: string;
  image?: string;
  brand?: string;
  category?: string;
  countryOfOrigin?: string;
  url?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: opts.name,
    description: opts.description,
    image: opts.image ? `https://idealdealvn.com${opts.image}` : undefined,
    brand: opts.brand
      ? { '@type': 'Brand', name: opts.brand }
      : { '@type': 'Brand', name: 'Ideal Deal Vietnam' },
    category: opts.category,
    countryOfOrigin: opts.countryOfOrigin ?? 'Vietnam',
    url: opts.url ? `https://idealdealvn.com${opts.url}` : undefined,
    manufacturer: {
      '@type': 'Organization',
      name: 'Ideal Deal Vietnam',
      url: 'https://idealdealvn.com',
    },
  };
}

export function articleSchema(opts: {
  title: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    image: opts.image ? `https://idealdealvn.com${opts.image}` : undefined,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author: {
      '@type': 'Person',
      name: opts.author ?? 'Ideal Deal Vietnam Editorial Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Ideal Deal Vietnam',
      logo: {
        '@type': 'ImageObject',
        url: 'https://idealdealvn.com/ideal-deal-vn-logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://idealdealvn.com${opts.url}`,
    },
  };
}

export default SEOHead;
