import { defineConfig } from "astro/config";

import astroI18next from "astro-i18next";
import sitemap from "@astrojs/sitemap";

import * as dotenv from 'dotenv';
dotenv.config();

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL,
  integrations: [
    astroI18next(),
    sitemap({
      changefreq: 'daily',
      lastmod: new Date(),
      priority: 0.7,
      i18n: {
        defaultLocale: process.env.DEFAULT_LOCALE,
        locales: {
          'pt-BR': 'pt-BR',
          en: 'en'
        }
      }
    })
  ]
});
