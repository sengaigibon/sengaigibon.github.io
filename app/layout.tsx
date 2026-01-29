import type { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
    title: 'Javier Caballero - Portfolio',
    description: 'Engineer, Mountaineer, Photographer - My personal portfolio',
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
