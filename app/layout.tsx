import type { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
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
      <body>
        {children}
      </body>
    </html>
  );
}
