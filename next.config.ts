import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig: NextConfig = {
  basePath: process.env.PAGES_BASE_PATH,
  images: {
    unoptimized: true
  },
};

export default withNextIntl(nextConfig);
