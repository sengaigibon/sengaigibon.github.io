'use client';

import { Container, Box, Typography, Button } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import LanguageSwitcher from '../components/LanguageSwitcher';

export default function Home() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();

  // Generate CV download URL based on current locale
  const getCVUrl = () => {
    // Option 1: Locale-specific CVs
    // return `/cv-${locale}.pdf`;
    
    // Option 2: Single CV (uncomment this and comment above)
    return '/javier-caballero-cv-en.pdf';
  };

  const handleCVDownload = () => {
    const link = document.createElement('a');
    link.href = getCVUrl();
    link.download = `javier-caballero-cv-${locale}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main>
      <LanguageSwitcher />
      
      <Container id="main" maxWidth={false} sx={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(to bottom, #fff, #000)', p: 0 }}>
        <Box sx={{ textAlign: 'center', width: '100%' }}>
          <Typography variant="h5" component="h1" gutterBottom>
            {t('iam')}
          </Typography>
          <Typography variant="h2" color="text.secondary">
            {t('engineer')}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}>
            <Button 
              variant="contained" 
              className="blackButton"
              onClick={handleCVDownload}
            >
              {t('downloadCV')}
            </Button>
            <Button
              id="see-experience"
              variant="contained"
              className="blackButton"
              onClick={() => window.open('https://www.linkedin.com/in/jrcaballerob/', '_blank', 'noopener,noreferrer')}
            >
              {t('seeExperience')}&nbsp;<LinkedInIcon />
            </Button>
          </Box>
        </Box>
      </Container>

      <Container id="mountaineer" maxWidth={false} sx={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(to top, #fff, #000)', p: 0 }}>
        <Box sx={{ textAlign: 'center', width: '100%' }}>
          <Typography variant="h5" component="h1" gutterBottom>
            {t('iam')}
          </Typography>
          <Typography variant="h2" color="text.secondary">
            {t('mountaineer')}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}>
            <Button 
              variant="contained" 
              className="blackButton"
              onClick={() => router.push(`/${locale}/mountaineering`)}
            >
              {t('viewPortfolio')}
            </Button>
          </Box>
        </Box>
      </Container>

      <Container id="photographer" maxWidth={false} sx={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(to bottom, #fff, #000)', p: 0  }}>
        <Box sx={{ textAlign: 'center', width: '100%' }}>
          <Typography variant="h5" component="h1" gutterBottom>
            {t('iam')}
          </Typography>
          <Typography variant="h2" color="text.secondary">
            {t('photographer')}
          </Typography>
        </Box>
      </Container>
      
    </main>
  );
}
