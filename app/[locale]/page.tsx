'use client';

import { Container, Box, Typography, Button, Modal, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Header from '../components/Header';
import TechSkills from '../components/TechSkills';
import Footer from '../components/Footer';
import { boxConfig, containerConfig } from '../styles/config';

export default function Home() {
    const t = useTranslations('main');
    const locale = useLocale();
    const router = useRouter();
    const [showInfographic, setShowInfographic] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const infographics = [
        '/images/infographics/fullstack-1.png',
        '/images/infographics/fullstack-2.png'
    ];

    const handlePrevious = () => {
        setCurrentImageIndex((prev) => (prev === 0 ? infographics.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentImageIndex((prev) => (prev === infographics.length - 1 ? 0 : prev + 1));
    };

    const handleOpenInfographic = () => {
        setCurrentImageIndex(0);
        setShowInfographic(true);
    };

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
                <div className="min-h-screen relative"
                style={{
                    backgroundImage: 'url("/images/vortex-background.svg")',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
                >
                <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                    <main>
                        <Header />

                        <Container id="main" maxWidth={false} sx={{ ...containerConfig }}>
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
                                    <Button id="my-infographics" variant="contained" className="blackButton"
                                        onClick={handleOpenInfographic}
                                        sx={{ minWidth: { xs: '100%', sm: 'auto' } }} 
                                    >
                                        {t('myInfographics')}
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

                        <Container id="skills" maxWidth={false} sx={{ width: '100vw', textAlign: 'center' }}>
                            <Box sx={{ pt: 1 }}>
                                <Typography variant="h2" color="text.secondary" fontSize="48px">
                                    {t('whatIWorkWith')}
                                </Typography>
                            </Box>
                            <Box sx={{ justifyContent: 'center', display: 'flex', p: 6 }}>
                                <TechSkills />
                            </Box>
                        </Container>

                        <Container maxWidth={false} sx={{ width: '100vw', color: '#fff', py: 4 }}>
                            <Footer />
                        </Container>

                    </main>

                    <Modal
                        open={showInfographic}
                        onClose={() => setShowInfographic(false)}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Box
                            sx={{
                                position: 'relative',
                                maxWidth: '90vw',
                                maxHeight: '90vh',
                                bgcolor: 'background.paper',
                                borderRadius: 2,
                                boxShadow: 24,
                                p: 2,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <IconButton
                                onClick={() => setShowInfographic(false)}
                                sx={{
                                    position: 'absolute',
                                    top: 8,
                                    right: 8,
                                    color: 'text.secondary',
                                    zIndex: 1,
                                }}
                            >
                                <CloseIcon />
                            </IconButton>

                            <IconButton
                                onClick={handlePrevious}
                                sx={{
                                    position: 'absolute',
                                    left: 16,
                                    color: 'text.primary',
                                    bgcolor: 'rgba(255, 255, 255, 0.8)',
                                    '&:hover': {
                                        bgcolor: 'rgba(255, 255, 255, 0.95)',
                                    },
                                }}
                            >
                                <ArrowBackIosNewIcon />
                            </IconButton>

                            <img
                                src={infographics[currentImageIndex]}
                                alt={`Infographic ${currentImageIndex + 1}`}
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: 'calc(90vh - 32px)',
                                    objectFit: 'contain',
                                    display: 'block',
                                }}
                            />

                            <IconButton
                                onClick={handleNext}
                                sx={{
                                    position: 'absolute',
                                    right: 16,
                                    color: 'text.primary',
                                    bgcolor: 'rgba(255, 255, 255, 0.8)',
                                    '&:hover': {
                                        bgcolor: 'rgba(255, 255, 255, 0.95)',
                                    },
                                }}
                            >
                                <ArrowForwardIosIcon />
                            </IconButton>

                            <Typography
                                sx={{
                                    position: 'absolute',
                                    bottom: 16,
                                    color: 'text.secondary',
                                    fontSize: '0.875rem',
                                }}
                            >
                                {currentImageIndex + 1} / {infographics.length}
                            </Typography>
                        </Box>
                    </Modal>
                </div>
                </div>
            
    );
}
