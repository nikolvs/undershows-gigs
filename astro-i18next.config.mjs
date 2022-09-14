import { DEFAULT_LOCALE, SUPPORTED_LANGUAGES } from './src/app.config.mjs';

/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLanguage: DEFAULT_LOCALE,
  supportedLanguages: SUPPORTED_LANGUAGES,
  i18next: {
    debug: false,
    initImmediate: false,
    backend: {
      loadPath: "./src/locales/{{lng}}.json",
    },
  },
  i18nextPlugins: { fsBackend: "i18next-fs-backend" },
};
