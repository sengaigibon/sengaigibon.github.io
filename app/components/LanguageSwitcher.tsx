'use client';

import { Button, Box } from '@mui/material';
import { useRouter, usePathname } from '../../lib/navigation';
import { useLocale } from 'next-intl';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <Box 
      sx={{ 
        position: 'fixed', 
        top: 20, 
        right: 20, 
        zIndex: 1000,
        display: 'flex',
        gap: 1
      }}
    >
      <Button
        variant={locale === 'en' ? 'contained' : 'outlined'}
        size="small"
        onClick={() => switchLocale('en')}
        sx={{
          color: locale === 'en' ? '#fff' : '#000',
          backgroundColor: locale === 'en' ? '#000' : 'transparent',
          borderColor: '#000',
          '&:hover': {
            backgroundColor: locale === 'en' ? '#333' : 'rgba(0, 0, 0, 0.1)',
          },
        }}
      >
        EN
      </Button>
      <Button
        variant={locale === 'es' ? 'contained' : 'outlined'}
        size="small"
        onClick={() => switchLocale('es')}
        sx={{
          color: locale === 'es' ? '#fff' : '#000',
          backgroundColor: locale === 'es' ? '#000' : 'transparent',
          borderColor: '#000',
          '&:hover': {
            backgroundColor: locale === 'es' ? '#333' : 'rgba(0, 0, 0, 0.1)',
          },
        }}
      >
        ES
      </Button>
    </Box>
  );
}
