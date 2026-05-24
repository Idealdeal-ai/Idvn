import { useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { SUPPORTED_LANGS, SupportedLang } from './config';

/**
 * Returns the current language detected from the URL path prefix.
 * Falls back to 'en' if no lang prefix is found.
 */
export function getLangFromPath(pathname: string): SupportedLang {
  const segment = pathname.split('/')[1] as SupportedLang;
  return SUPPORTED_LANGS.includes(segment) ? segment : 'en';
}

/**
 * Strips a lang prefix from a pathname, returning the base path.
 * e.g. '/ar/products/coffee' → '/products/coffee'
 *      '/products/coffee'    → '/products/coffee'
 */
export function stripLangPrefix(pathname: string): string {
  const segment = pathname.split('/')[1] as SupportedLang;
  if (SUPPORTED_LANGS.includes(segment)) {
    return pathname.replace(`/${segment}`, '') || '/';
  }
  return pathname;
}

/**
 * Builds a locale-prefixed path.
 * e.g. buildLocalePath('ar', '/products/coffee') → '/ar/products/coffee'
 *      buildLocalePath('en', '/products/coffee') → '/products/coffee'  (no prefix for default)
 */
export function buildLocalePath(lang: SupportedLang, basePath: string): string {
  if (lang === 'en') return basePath;
  const clean = basePath.startsWith('/') ? basePath : `/${basePath}`;
  return `/${lang}${clean}`;
}

/**
 * Hook: returns a function to navigate to the same page in a different language.
 */
export function useLanguageSwitch() {
  const navigate = useNavigate();
  const location = useLocation();

  const switchLanguage = useCallback(
    (lang: SupportedLang) => {
      const basePath = stripLangPrefix(location.pathname);
      const newPath = buildLocalePath(lang, basePath);
      navigate(newPath + location.search + location.hash, { replace: true });
    },
    [navigate, location]
  );

  return switchLanguage;
}

/**
 * Hook: returns a helper to build locale-aware links relative to the current language.
 */
export function useLocalePath() {
  const location = useLocation();
  const currentLang = getLangFromPath(location.pathname);

  return useCallback(
    (basePath: string) => buildLocalePath(currentLang, basePath),
    [currentLang]
  );
}
