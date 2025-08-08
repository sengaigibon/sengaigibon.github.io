'use client';

import { Container, Box, Typography, Card, CardMedia, CardContent, Grid } from '@mui/material';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '../../components/LanguageSwitcher';

export default function MountaineeringPage() {
    const t = useTranslations('mountaineering');

    // Placeholder data for the mountaineering portfolio
    const mountaineeringProjects = [
        {
            id: 1,
            title: 'Mount Everest Base Camp',
            description: 'Epic journey to the base camp of the world\'s highest peak',
            image: '/images/everest-base-camp.jpg', // You'll need to add these images
            location: 'Nepal',
            elevation: '5,364m'
        },
        {
            id: 2,
            title: 'Kilimanjaro Summit',
            description: 'Reaching the roof of Africa through Machame route',
            image: '/images/kilimanjaro.jpg',
            location: 'Tanzania',
            elevation: '5,895m'
        },
        {
            id: 3,
            title: 'Mont Blanc Ascent',
            description: 'Classic alpine climbing in the heart of Europe',
            image: '/images/mont-blanc.jpg',
            location: 'France',
            elevation: '4,809m'
        },
        {
            id: 4,
            title: 'Andes Expedition',
            description: 'Multi-day trek through the Peruvian highlands',
            image: '/images/andes.jpg',
            location: 'Peru',
            elevation: '4,200m'
        },
        {
            id: 5,
            title: 'Dolomites Via Ferrata',
            description: 'Spectacular iron path climbing in Italian Alps',
            image: '/images/dolomites.jpg',
            location: 'Italy',
            elevation: '3,343m'
        },
        {
            id: 6,
            title: 'Patagonia Trek',
            description: 'Wild and remote trekking in Torres del Paine',
            image: '/images/patagonia.jpg',
            location: 'Chile',
            elevation: '2,884m'
        },
        {
            id: 7,
            title: 'Atlas Mountains',
            description: 'Desert peaks and Berber culture exploration',
            image: '/images/atlas.jpg',
            location: 'Morocco',
            elevation: '4,167m'
        },
        {
            id: 8,
            title: 'Scottish Highlands',
            description: 'Winter mountaineering and highland adventures',
            image: '/images/highlands.jpg',
            location: 'Scotland',
            elevation: '1,345m'
        },
        {
            id: 9,
            title: 'Himalayan Circuit',
            description: 'Multi-peak expedition in the world\'s highest range',
            image: '/images/himalaya.jpg',
            location: 'Nepal',
            elevation: '6,476m'
        }
    ];

    return (
        <main>
            <LanguageSwitcher />

            <Container maxWidth={false} sx={{
                width: '100vw',
                background: 'linear-gradient(to bottom, #fff, #000)',
                p: 8,
            }}>
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography
                        variant="h2"
                        component="h1"
                        gutterBottom
                        sx={{
                            fontWeight: 'bold',
                            background: 'linear-gradient(45deg, #2E7D32, #000000ff)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                            mb: 2
                        }}
                    >
                        {t('portfolio') || 'Mountain Adventures'}
                    </Typography>
                    <Typography
                        variant="h6"
                        color="text.secondary"
                        sx={{ maxWidth: '600px', mx: 'auto' }}
                    >
                        {t('subtitle') || 'A collection of my mountaineering expeditions and alpine adventures around the world'}
                    </Typography>
                </Box>

                {/* 3x3 Grid of Cards */}
                <Grid container spacing={4}>
                    {mountaineeringProjects.map((project) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={project.id}>
                            <Card
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: '0 12px 20px rgba(0,0,0,0.15)',
                                    }
                                }}
                            >
                                <CardMedia
                                    component="div"
                                    sx={{
                                        height: 200,
                                        background: 'linear-gradient(45deg, #424242, #757575)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        fontSize: '0.9rem',
                                        textAlign: 'center'
                                    }}
                                >
                                    {/* Placeholder for image - you can replace with actual images */}
                                    📸 {project.title}
                                </CardMedia>
                                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                    <Typography gutterBottom variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
                                        {project.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1, mb: 2 }}>
                                        {project.description}
                                    </Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography variant="caption" color="primary" sx={{ fontWeight: 'bold' }}>
                                            📍 {project.location}
                                        </Typography>
                                        <Typography variant="caption" color="success.main" sx={{ fontWeight: 'bold' }}>
                                            ⛰️ {project.elevation}
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* Optional: Add a call-to-action section */}
                <Box sx={{ textAlign: 'center', mt: 8 }}>
                    <Typography variant="h5" gutterBottom>
                        {t('readyForAdventure') || 'Ready for Your Next Adventure?'}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {t('contactForExpedition') || 'Get in touch to discuss expedition planning and mountaineering consulting.'}
                    </Typography>
                </Box>
            </Container>
        </main>
    );
}
