import i18next from 'i18next';
import * as locales from './locales';

await i18next.init({
  lng: import.meta.env.PUBLIC_DEFAULT_LOCALE,
  debug: false,
  resources: Object.keys(locales).reduce((translations, locale) => ({
    ...translations,
    [locale]: { translation: locales[locale] }
  }), {})
});

export const t = i18next.t
export const changeLanguage = i18next.changeLanguage

export default i18next;
