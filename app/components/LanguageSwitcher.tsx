'use client';

import { Button, Box } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
  const router = useRouter();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (newLocale: string) => {
    if (locale === newLocale) return; // Don't switch if it's the same locale
    
    console.log('Switching from', locale, 'to', newLocale);
    
    startTransition(() => {
      // Navigate directly to the new locale URL
      router.replace(`/${newLocale}`);
    });
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
        disabled={isPending}
        sx={{
          color: locale === 'en' ? '#fff' : '#000',
          backgroundColor: locale === 'en' ? '#000' : 'transparent',
          borderColor: '#000',
          '&:hover': {
            backgroundColor: locale === 'en' ? '#333' : 'rgba(0, 0, 0, 0.1)',
          },
          '&:disabled': {
            opacity: 0.6,
          },
        }}
      >
        EN
      </Button>
      <Button
        variant={locale === 'es' ? 'contained' : 'outlined'}
        size="small"
        onClick={() => switchLocale('es')}
        disabled={isPending}
        sx={{
          color: locale === 'es' ? '#fff' : '#000',
          backgroundColor: locale === 'es' ? '#000' : 'transparent',
          borderColor: '#000',
          '&:hover': {
            backgroundColor: locale === 'es' ? '#333' : 'rgba(0, 0, 0, 0.1)',
          },
          '&:disabled': {
            opacity: 0.6,
          },
        }}
      >
        ES
      </Button>
    </Box>
  );
}
