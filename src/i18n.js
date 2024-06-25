import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  locale: 'es',
  fallbackLocale: 'en',
  messages: {}
});

async function loadLocaleMessages(locale) {
  try {
    const messages = await import(`./languages/${locale}.json`);
    i18n.global.setLocaleMessage(locale, messages.default);
    i18n.global.locale = locale;
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
  }
}

export { i18n, loadLocaleMessages };
