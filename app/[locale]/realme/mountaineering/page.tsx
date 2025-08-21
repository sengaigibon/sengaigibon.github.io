'use client';

import { Container, Box, Typography, Card, CardMedia, CardContent, Grid } from '@mui/material';
import { useTranslations } from 'next-intl';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function MountaineeringPage() {
    const t = useTranslations('mountaineering');
    
    const projects = t.raw('projects') as Array<{
        id: number;
        title: string;
        description: string;
        image?: string;
        location?: string;
        elevation?: string;
    }>;

    return (
        <main>
            <Header />

            <Container maxWidth={false} sx={{
                width: '100vw',
                background: 'linear-gradient(to bottom, #fff, #000)',
                p: 6
            }}>
                <Box sx={{ textAlign: 'center', mb: 6, pt: 3}}>
                    <Typography variant="h3" color="text.secondary">
                        {t('portfolio')}
                    </Typography>
                    <Typography
                        variant="h6"
                        color="text.secondary"
                        sx={{ maxWidth: '600px', mx: 'auto', pt: 3}}
                    >
                        {t('subtitle')}
                    </Typography>
                </Box>

                {/* 3x3 Grid of Cards */}
                <Grid container spacing={4}>
                    {projects.map((project) => (
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
                                    component="img"
                                    image={project.image}
                                    alt={project.title}
                                    sx={{
                                        height: 200,
                                        objectFit: 'cover'
                                    }}
                                />
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

                <Box sx={{ textAlign: 'center', mt: 8 }}>
                    <Typography variant="h5" gutterBottom>
                        {t('readyForAdventure')}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {t('contactForExpedition')}
                    </Typography>
                </Box>
            </Container>

            <Container maxWidth={false} sx={{ width: '100vw', background: 'linear-gradient(to top, #fff, #000)', color: '#fff', py: 4 }}>
                <Footer />
            </Container>
        </main>
    );
}
