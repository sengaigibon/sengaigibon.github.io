import type { Metadata } from 'next';

const BASE_URL = 'https://sengaigibon.github.io';
const locales = ['en', 'es', 'de'];
const ogLocale: Record<string, string> = { en: 'en_US', es: 'es_ES', de: 'de_DE' };

const titles: Record<string, string> = {
    en: 'Mountain Adventures',
    es: 'Aventuras de Montaña',
    de: 'Bergabenteuer',
};

const descriptions: Record<string, string> = {
    en: 'A collection of mountaineering expeditions and alpine adventures around the world — from the Mexican volcanoes to the Pyrenees, the Bavarian Alps, Japan, and beyond.',
    es: 'Una colección de expediciones de montañismo y aventuras alpinas por el mundo — desde los volcanes mexicanos hasta los Pirineos, los Alpes Bávaros, Japón y más.',
    de: 'Eine Sammlung von Bergsteigerexpeditionen und alpinen Abenteuern rund um die Welt — von den mexikanischen Vulkanen über die Pyrenäen, die Bayerischen Alpen, Japan und darüber hinaus.',
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Mountain Adventures – Javier Caballero',
    description: descriptions.en,
    url: `${BASE_URL}/en/realme/mountaineering/`,
    author: {
        '@type': 'Person',
        name: 'Javier Caballero',
        url: BASE_URL,
    },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const canonical = `${BASE_URL}/${locale}/realme/mountaineering/`;
    return {
        title: titles[locale] ?? titles.en,
        description: descriptions[locale] ?? descriptions.en,
        alternates: {
            canonical,
            languages: {
                en: `${BASE_URL}/en/realme/mountaineering/`,
                es: `${BASE_URL}/es/realme/mountaineering/`,
                de: `${BASE_URL}/de/realme/mountaineering/`,
                'x-default': `${BASE_URL}/en/realme/mountaineering/`,
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

export default function MountaineeringLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {children}
        </>
    );
}
