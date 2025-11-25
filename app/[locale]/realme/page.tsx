'use client';

import { Container, Box, Typography, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header';
import { useTranslations, useLocale } from 'next-intl';
import { boxConfig, containerConfig, containerGradient } from '../../styles/config';
import Footer from '../../components/Footer';

export default function RealMe() {
    const t = useTranslations();
    const locale = useLocale();
    const router = useRouter();

    return (
        <div className="min-h-screen relative"
        style={{
            backgroundImage: 'url("/images/vortex-background.svg")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}
        >
        <main>
          <Header />

          <Container id="mountaineer" maxWidth={false} sx={{...containerConfig}}>
            <Box sx={boxConfig}>
                <Typography variant="h5" component="h1" gutterBottom>
                    {t('main.iam')}
                </Typography>
                <Typography variant="h2" color="text.secondary">
                    {t('realme.mountaineer')}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}>
                    <Button 
                    variant="contained" 
                    className="blackButton"
                    onClick={() => router.push(`/${locale}/realme/mountaineering`)}
                    >
                    {t('realme.viewPortfolio')}
                    </Button>
                </Box>
            </Box>
        </Container>

        <Container id="photographer" maxWidth={false} sx={{...containerConfig}}>
            <Box sx={boxConfig}>
                <Typography variant="h5" component="h1" gutterBottom>
                    {t('main.iam')}
                </Typography>
                <Typography variant="h2" color="text.secondary">
                    {t('realme.photographer')}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}>
                <Button 
                    variant="contained" 
                    className="blackButton"
                    onClick={() => window.open('https://www.flickr.com/photos/jrcaballerob/albums', '_blank', 'noopener,noreferrer')}
                    >
                    {t('realme.viewPortfolio')}
                    </Button>
                </Box>
            </Box>
        </Container> 
        
        <Container maxWidth={false} sx={{ width: '100vw', py: 4 }}>
            <Footer />
        </Container>

        </main>
        </div>
    );
}