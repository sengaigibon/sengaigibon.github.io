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

  const boxConfig = { textAlign: 'center', width: '100%' };
  const containerConfig = { 
    width: '100vw', 
    height: '100vh', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    p: 0 
  };

  const COLORS = {
    GRADIENT_FROM: '#fff',
    GRADIENT_TO: '#2A64C7'
  };

  const containerGradient = {
    topToBottom: `linear-gradient(to bottom, ${COLORS.GRADIENT_FROM}, ${COLORS.GRADIENT_TO})`,
    bottomToTop: `linear-gradient(to top, ${COLORS.GRADIENT_FROM}, ${COLORS.GRADIENT_TO})`,
  };

  return (
    <main>
      <LanguageSwitcher />
      
      <Container id="main" maxWidth={false} sx={{...containerConfig, background: containerGradient.topToBottom }}>
        <Box sx={boxConfig}>
          <Typography variant="h5" component="h1" gutterBottom>
            {t('iam')}
          </Typography>
          <Typography variant="h2" color="text.secondary">
            {t('engineer')}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}>
            <Button id="download-cv" variant="contained" className="blackButton" 
                    onClick={handleCVDownload}>
              {t('downloadCV')}
            </Button>
            <Button id="see-experience" variant="contained" className="blackButton"   
                    onClick={() => window.open('https://www.linkedin.com/in/jrcaballerob/', '_blank', 'noopener,noreferrer')}>
              {t('seeExperience')}&nbsp;<LinkedInIcon />
            </Button>
          </Box>
        </Box>
      </Container>

      <Container id="mountaineer" maxWidth={false} sx={{...containerConfig, background: containerGradient.bottomToTop }}>
        <Box sx={boxConfig}>
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

      <Container id="photographer" maxWidth={false} sx={{...containerConfig, background: containerGradient.topToBottom }}>
        <Box sx={boxConfig}>
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
