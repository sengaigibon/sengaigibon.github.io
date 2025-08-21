'use client';

import { Container, Box, Typography, Button } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import LanguageSwitcher from '../components/LanguageSwitcher';
import TechSkills from '../components/TechSkills';
import Footer from '../components/Footer';
import { boxConfig, containerConfig, containerGradient } from '../styles/config';

export default function Home() {
    const t = useTranslations('main');
    const locale = useLocale();
    const router = useRouter();

    const getCVUrl = () => {
        // Op1: Locale-specific CVs
        // return `/cv-${locale}.pdf`;

        // Op2: Single CV 
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

            <Container id="main" maxWidth={false} sx={{ ...containerConfig, background: containerGradient.topToBottom }}>
                <Box sx={boxConfig}>
                    <Typography variant="h5" component="h1" gutterBottom>
                        {t('iam')}
                    </Typography>
                    <Typography variant="h2" color="text.secondary">
                        {t('engineer')}
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 2,
                        mt: 4,
                        px: { xs: '20px', sm: 0 },
                        flexDirection: { xs: 'column', sm: 'row' } 
                    }}>
                        <Button id="download-cv" variant="contained" className="blackButton"
                            onClick={handleCVDownload}
                            sx={{ minWidth: { xs: '100%', sm: 'auto' } }} 
                        >
                            {t('downloadCV')}
                        </Button>
                        <Button id="see-experience" variant="contained" className="blackButton"
                            onClick={() => window.open('https://www.linkedin.com/in/jrcaballerob/', '_blank', 'noopener,noreferrer')}
                            sx={{ minWidth: { xs: '100%', sm: 'auto' } }}
                        >
                            {t('seeExperience')}&nbsp;<LinkedInIcon />
                        </Button>
                    </Box>
                </Box>
            </Container>

            <Container id="skills" maxWidth={false} sx={{ width: '100vw', textAlign: 'center', background: containerGradient.bottomToTop }}>
                <Box sx={{ pt: 1 }}>
                    <Typography variant="h2" color="text.secondary" fontSize="48px">
                        {t('whatIWorkWith')}
                    </Typography>
                </Box>
                <Box sx={{ justifyContent: 'center', display: 'flex', p: 6 }}>
                    <TechSkills />
                </Box>
            </Container>

            <Container maxWidth={false} sx={{ width: '100vw', background: containerGradient.topToBottom, color: '#fff', py: 4 }}>
                <Footer />
            </Container>

        </main>
    );
}
