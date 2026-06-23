import type { Metadata } from 'next';

const BASE_URL = 'https://sengaigibon.github.io';
const locales = ['en', 'es', 'de'];
const ogLocale: Record<string, string> = { en: 'en_US', es: 'es_ES', de: 'de_DE' };

const titles: Record<string, string> = {
    en: 'Mountaineer & Photographer',
    es: 'Montañero y Fotógrafo',
    de: 'Bergsteiger & Fotograf',
};

const descriptions: Record<string, string> = {
    en: 'Beyond the screen — Javier Caballero as a mountaineer and photographer, with expeditions across Europe, Asia, and the Americas.',
    es: 'Más allá de la pantalla — Javier Caballero como montañero y fotógrafo, con expediciones por Europa, Asia y América.',
    de: 'Jenseits des Bildschirms — Javier Caballero als Bergsteiger und Fotograf, mit Expeditionen in Europa, Asien und Amerika.',
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const canonical = `${BASE_URL}/${locale}/realme/`;
    return {
        title: titles[locale] ?? titles.en,
        description: descriptions[locale] ?? descriptions.en,
        alternates: {
            canonical,
            languages: {
                en: `${BASE_URL}/en/realme/`,
                es: `${BASE_URL}/es/realme/`,
                de: `${BASE_URL}/de/realme/`,
                'x-default': `${BASE_URL}/en/realme/`,
            },
        },
        openGraph: {
            title: titles[locale] ?? titles.en,
            description: descriptions[locale] ?? descriptions.en,
            url: canonical,
            locale: ogLocale[locale],
            alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocale[l]),
        },
        twitter: {
            title: titles[locale] ?? titles.en,
            description: descriptions[locale] ?? descriptions.en,
        },
    };
}

export default function RealMeLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
