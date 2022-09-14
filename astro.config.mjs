import { defineConfig } from "astro/config";
import { DEFAULT_LOCALE, SUPPORTED_LANGUAGES } from './src/app.config';

import astroI18next from "astro-i18next";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL,
  integrations: [
    astroI18next(),
    tailwind(),
    sitemap({
      changefreq: 'daily',
      lastmod: new Date(),
      priority: 0.7,
      i18n: {
        defaultLocale: DEFAULT_LOCALE,
        locales: SUPPORTED_LANGUAGES.reduce((locales, lang) => ({ ...locales,
          [lang]: lang.toLowerCase()
        }), {})
      }
    })
  ]
});