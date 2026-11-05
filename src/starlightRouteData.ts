import { defineRouteMiddleware } from '@astrojs/starlight/route-data';
import {
  OG_LOCALE,
  SOCIAL_IMAGE,
  THEME_COLORS,
  isNoindexPath,
} from './data_files/seo';

/**
 * Adjusts the <head> of every Starlight docs page: consistent og:locale,
 * social image metadata, Twitter title/description, theme colours, and
 * `noindex, follow` on placeholder pages.
 */
export const onRequest = defineRouteMiddleware(context => {
  const route = context.locals.starlightRoute;
  const head = route.head;
  const site = context.site?.origin ?? 'https://eudiwalletrp.com';
  const image = `${site}${SOCIAL_IMAGE.path}`;

  const find = (attr: 'property' | 'name', key: string) =>
    head.find(e => e.tag === 'meta' && e.attrs?.[attr] === key);
  const upsert = (attr: 'property' | 'name', key: string, content: string) => {
    const existing = find(attr, key);
    if (existing) existing.attrs = { ...existing.attrs, content };
    else head.push({ tag: 'meta', attrs: { [attr]: key, content } });
  };

  upsert('property', 'og:locale', OG_LOCALE);
  upsert('property', 'og:image', image);
  upsert('property', 'og:image:width', String(SOCIAL_IMAGE.width));
  upsert('property', 'og:image:height', String(SOCIAL_IMAGE.height));
  upsert('property', 'og:image:type', SOCIAL_IMAGE.type);
  upsert('property', 'og:image:alt', SOCIAL_IMAGE.alt);
  upsert('name', 'twitter:image', image);

  const ogTitle = find('property', 'og:title')?.attrs?.content;
  const ogDesc = find('property', 'og:description')?.attrs?.content;
  if (typeof ogTitle === 'string') upsert('name', 'twitter:title', ogTitle);
  if (typeof ogDesc === 'string') upsert('name', 'twitter:description', ogDesc);

  head.push(
    {
      tag: 'meta',
      attrs: {
        name: 'theme-color',
        content: THEME_COLORS.light,
        media: '(prefers-color-scheme: light)',
      },
    },
    {
      tag: 'meta',
      attrs: {
        name: 'theme-color',
        content: THEME_COLORS.dark,
        media: '(prefers-color-scheme: dark)',
      },
    }
  );

  if (isNoindexPath(context.url.pathname)) {
    upsert('name', 'robots', 'noindex, follow');
  }
});
