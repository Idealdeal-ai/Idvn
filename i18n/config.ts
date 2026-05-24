import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// ── Inline bundled translations (no HTTP backend — avoids FOUC in Vite SPA) ──
import enCommon    from '../locales/en/common.json';
import enProducts  from '../locales/en/products.json';
import enLegal     from '../locales/en/legal.json';
import enServices  from '../locales/en/services.json';
import arCommon    from '../locales/ar/common.json';
import arProducts  from '../locales/ar/products.json';
import arLegal     from '../locales/ar/legal.json';
import arServices  from '../locales/ar/services.json';
import viCommon    from '../locales/vi/common.json';
import viProducts  from '../locales/vi/products.json';
import viLegal     from '../locales/vi/legal.json';
import viServices  from '../locales/vi/services.json';
import zhCommon    from '../locales/zh/common.json';
import zhProducts  from '../locales/zh/products.json';
import zhLegal     from '../locales/zh/legal.json';
import zhServices  from '../locales/zh/services.json';
import esCommon    from '../locales/es/common.json';
import esProducts  from '../locales/es/products.json';
import esLegal     from '../locales/es/legal.json';
import esServices  from '../locales/es/services.json';
import frCommon    from '../locales/fr/common.json';
import frProducts  from '../locales/fr/products.json';
import frLegal     from '../locales/fr/legal.json';
import frServices  from '../locales/fr/services.json';

export const SUPPORTED_LANGS = ['en', 'ar', 'vi', 'zh', 'es', 'fr'] as const;
export type SupportedLang = typeof SUPPORTED_LANGS[number];

export const LANG_NAMES: Record<SupportedLang, string> = {
  en: 'English',
  ar: 'العربية',
  vi: 'Tiếng Việt',
  zh: '中文',
  es: 'Español',
  fr: 'Français',
};

export const RTL_LANGS: SupportedLang[] = ['ar'];

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: enCommon, products: enProducts, legal: enLegal, services: enServices },
      ar: { common: arCommon, products: arProducts, legal: arLegal, services: arServices },
      vi: { common: viCommon, products: viProducts, legal: viLegal, services: viServices },
      zh: { common: zhCommon, products: zhProducts, legal: zhLegal, services: zhServices },
      es: { common: esCommon, products: esProducts, legal: esLegal, services: esServices },
      fr: { common: frCommon, products: frProducts, legal: frLegal, services: frServices },
    },
    lng: 'en',
    fallbackLng: 'en',
    defaultNS: 'common',
    ns: ['common', 'products', 'legal', 'services'],
    interpolation: {
      escapeValue: false, // React already escapes
    },
  });

export default i18n;
