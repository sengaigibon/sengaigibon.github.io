'use client';

import { Container, Box, Typography, Button } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '../components/LanguageSwitcher';

export default function Home() {
  const t = useTranslations();

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
            <Button variant="contained" className="blackButton">{t('downloadCV')}</Button>
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
