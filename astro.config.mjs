import { defineConfig } from "astro/config";

import astroI18next from "astro-i18next";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://undershows.com.br',
  integrations: [
    astroI18next(),
    sitemap({
      changefreq: 'daily',
      lastmod: new Date(),
      priority: 0.7,
      i18n: {
        defaultLocale: 'pt-br',
        locales: {
          en: 'en',
          'pt-br': 'pt-BR'
        }
      }
    })
  ]
});
