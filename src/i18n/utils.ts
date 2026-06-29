import type { Locale } from './types';
import { en } from './en';
import { ro } from './ro';
import type { Translations } from './types';

const dictionaries: Record<Locale, Translations> = { ro, en };

export function getTranslations(locale: Locale): Translations {
  return dictionaries[locale];
}

export function getLocaleFromPath(pathname: string): Locale {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'ro';
}

export function stripLocalePrefix(pathname: string): string {
  if (pathname === '/en') return '/';
  if (pathname.startsWith('/en/')) return pathname.slice(3) || '/';
  return pathname;
}

export function localizedPath(route: string, locale: Locale): string {
  if (route.startsWith('http') || route.startsWith('mailto:') || route.startsWith('tel:')) {
    return route;
  }

  if (route.startsWith('/#')) {
    return locale === 'en' ? `/en${route}` : route;
  }

  if (route === '/') {
    return locale === 'en' ? '/en' : '/';
  }

  return locale === 'en' ? `/en${route}` : route;
}

export function getAlternateLocalePath(pathname: string, target: Locale): string {
  const base = stripLocalePrefix(pathname);
  return localizedPath(base, target);
}
