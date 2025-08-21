import { getRequestConfig } from 'next-intl/server';

// IMPOTANT: Website locales are defined here:
export const validLocales = ['en', 'es'];
export const defaultLocale = 'en';

export default getRequestConfig(async ({ locale }) => {
    // Ensure locale is valid, fallback to default if not
    const validLocale = locale && validLocales.includes(locale) ? locale : defaultLocale;

    return {
        locale: validLocale,
        messages: (await import(`./messages/${validLocale}.json`)).default
    };
});
