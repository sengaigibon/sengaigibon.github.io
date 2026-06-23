import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import type { Metadata } from 'next';

const locales = ['en', 'es', 'de'];
const BASE_URL = 'https://sengaigibon.github.io';

const ogLocale: Record<string, string> = { en: 'en_US', es: 'es_ES', de: 'de_DE' };

export async function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const canonical = `${BASE_URL}/${locale}/`;
    return {
        alternates: {
            canonical,
            languages: {
                en: `${BASE_URL}/en/`,
                es: `${BASE_URL}/es/`,
                de: `${BASE_URL}/de/`,
                'x-default': `${BASE_URL}/en/`,
            },
        },
        openGraph: {
            url: canonical,
            locale: ogLocale[locale],
            alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocale[l]),
        },
    };
}

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Javier Caballero',
    url: BASE_URL,
    jobTitle: 'Software Engineer',
    description: 'Software Engineer, Mountaineer, and Photographer',
    sameAs: [
        'https://www.linkedin.com/in/jrcaballerob/',
        'https://github.com/sengaigibon',
    ],
};

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    // Validate that the incoming `locale` parameter is valid
    if (!locales.includes(locale)) notFound();

    // Get messages for the specific locale
    const messages = await getMessages({ locale });

    return (
        <NextIntlClientProvider messages={messages} locale={locale}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {children}
        </NextIntlClientProvider>
    );
}
