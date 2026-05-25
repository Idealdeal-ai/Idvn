import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// ── Only English is bundled into the initial JS payload ──
// Non-English locales (ar, vi, zh, es, fr) are code-split via dynamic import()
// and fetched on demand the first time the user switches to that language.
import enCommon    from '../locales/en/common.json';
import enProducts  from '../locales/en/products.json';
import enLegal     from '../locales/en/legal.json';
import enServices  from '../locales/en/services.json';

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

// ── Init with English only ──
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: enCommon, products: enProducts, legal: enLegal, services: enServices },
    },
    lng: 'en',
    fallbackLng: 'en',
    defaultNS: 'common',
    ns: ['common', 'products', 'legal', 'services'],
    interpolation: {
      escapeValue: false, // React already escapes
    },
  });

// ── Per-language dynamic loaders (Vite splits each into its own chunk) ──
const LOADERS: Record<Exclude<SupportedLang, 'en'>, () => Promise<{
  common: object;
  products: object;
  legal: object;
  services: object;
}>> = {
  ar: async () => ({
    common:   (await import('../locales/ar/common.json')).default,
    products: (await import('../locales/ar/products.json')).default,
    legal:    (await import('../locales/ar/legal.json')).default,
    services: (await import('../locales/ar/services.json')).default,
  }),
  vi: async () => ({
    common:   (await import('../locales/vi/common.json')).default,
    products: (await import('../locales/vi/products.json')).default,
    legal:    (await import('../locales/vi/legal.json')).default,
    services: (await import('../locales/vi/services.json')).default,
  }),
  zh: async () => ({
    common:   (await import('../locales/zh/common.json')).default,
    products: (await import('../locales/zh/products.json')).default,
    legal:    (await import('../locales/zh/legal.json')).default,
    services: (await import('../locales/zh/services.json')).default,
  }),
  es: async () => ({
    common:   (await import('../locales/es/common.json')).default,
    products: (await import('../locales/es/products.json')).default,
    legal:    (await import('../locales/es/legal.json')).default,
    services: (await import('../locales/es/services.json')).default,
  }),
  fr: async () => ({
    common:   (await import('../locales/fr/common.json')).default,
    products: (await import('../locales/fr/products.json')).default,
    legal:    (await import('../locales/fr/legal.json')).default,
    services: (await import('../locales/fr/services.json')).default,
  }),
};

// Cache so we only fetch each language once.
const loadedLangs = new Set<SupportedLang>(['en']);

/**
 * Ensure the given language's translation resources are loaded into i18next.
 * Awaits the dynamic import the first time a non-English language is requested.
 * Safe to call repeatedly — subsequent calls are a no-op.
 */
export async function loadLanguageResources(lang: SupportedLang): Promise<void> {
  if (loadedLangs.has(lang)) return;
  const loader = LOADERS[lang as Exclude<SupportedLang, 'en'>];
  if (!loader) return;
  const resources = await loader();
  i18n.addResourceBundle(lang, 'common',   resources.common,   true, true);
  i18n.addResourceBundle(lang, 'products', resources.products, true, true);
  i18n.addResourceBundle(lang, 'legal',    resources.legal,    true, true);
  i18n.addResourceBundle(lang, 'services', resources.services, true, true);
  loadedLangs.add(lang);
}

/**
 * Switch the active i18n language, lazy-loading its resources first.
 */
export async function setI18nLanguage(lang: SupportedLang): Promise<void> {
  await loadLanguageResources(lang);
  await i18n.changeLanguage(lang);
}

export default i18n;
