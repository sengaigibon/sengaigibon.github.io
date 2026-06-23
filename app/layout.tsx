import type { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import Script from 'next/script';
import './globals.css';

const BASE_URL = 'https://sengaigibon.github.io';

export const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),
    title: {
        default: 'Javier Caballero – Portfolio',
        template: '%s | Javier Caballero',
    },
    description: 'Software Engineer, Mountaineer, and Photographer. Personal portfolio of Javier Caballero.',
    authors: [{ name: 'Javier Caballero', url: BASE_URL }],
    openGraph: {
        type: 'website',
        siteName: 'Javier Caballero – Portfolio',
        title: 'Javier Caballero – Portfolio',
        description: 'Software Engineer, Mountaineer, and Photographer. Personal portfolio of Javier Caballero.',
        url: BASE_URL,
        images: [{ url: '/images/infographics/fullstack-1.png', width: 1200, alt: 'Javier Caballero – Fullstack architecture infographic' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Javier Caballero – Portfolio',
        description: 'Software Engineer, Mountaineer, and Photographer. Personal portfolio of Javier Caballero.',
        images: ['/images/infographics/fullstack-1.png'],
    },
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    // Get the current locale from the request
    const locale = await getLocale();

    return (
        <html lang={locale}>
            <head>
                <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
            </head>
            <body>
                <Script
                    src="/js/oneko.js"
                    data-cat="/images/oneko.gif"
                    strategy="afterInteractive"
                />
                {children}
            </body>
        </html>
    );
}
